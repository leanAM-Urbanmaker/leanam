#!/usr/bin/env python3
"""
Subsettet die Material-Symbols-Outlined-Schrift auf genau die Icons, die
tatsaechlich in den HTML-Seiten verwendet werden.

Hintergrund
-----------
Die vollstaendige Variable-Font ist ~3,9 MB gross. Unter "Slow 4G" (so testet
Google PageSpeed mobil) dauert ihr Download ~20 s und blockiert den gesamten
Seitenaufbau -> FCP/LCP ~20 s, Performance-Score ~55.

Dieses Skript verkleinert die Schrift auf die ~90 genutzten Icons (~80 KB),
behaelt dabei aber die Ligaturen, sodass im HTML weiterhin die Icon-Namen
stehen koennen (z. B. <span class="material-symbols-outlined">analytics</span>)
und KEIN Markup geaendert werden muss. Die Variable-Achsen (FILL/wght/GRAD/opsz)
bleiben ebenfalls erhalten.

Wann erneut ausfuehren?
-----------------------
Immer wenn ein NEUES Icon ins HTML aufgenommen wird, das bisher nicht vorkam.
Sonst rendert es als leeres Kaestchen, weil die Glyphe in der schlanken Schrift
fehlt.

    python tools/subset-material-symbols.py

Voraussetzungen
---------------
    pip install fonttools brotli

Die Quell-Schrift (volle 3,9-MB-Variante) liegt unter
tools/fonts-src/material-symbols-outlined-full.woff2 und ist bewusst nicht im
Git (siehe tools/README.md zur Wiederherstellung).
"""
import re
import subprocess
import sys
from pathlib import Path

from fontTools.ttLib import TTFont

REPO = Path(__file__).resolve().parent.parent
SRC_FONT = REPO / "tools" / "fonts-src" / "material-symbols-outlined-full.woff2"
OUT_FONT = REPO / "fonts" / "material-symbols-outlined.woff2"

# Findet Icon-Namen im Markup: <... class="material-symbols-outlined" ...>name</...>
ICON_RE = re.compile(r'material-symbols-outlined[^>]*>\s*([a-z0-9_]+)\s*<')


def find_used_icons() -> set[str]:
    icons: set[str] = set()
    for html in REPO.rglob("*.html"):
        # interne/Pitch-Seiten ueberspringen (werden nicht deployt)
        rel = html.relative_to(REPO).as_posix()
        if rel.startswith(("pitch/", "handoff/")) or "pitch-anton-paar" in rel:
            continue
        text = html.read_text(encoding="utf-8", errors="ignore")
        icons.update(ICON_RE.findall(text))
    return icons


def build_ligature_map(font: TTFont) -> dict:
    """sequence of component glyph names -> ligature glyph name"""
    gsub = font["GSUB"].table
    ligmap = {}
    for lookup in gsub.LookupList.Lookup:
        for st in lookup.SubTable:
            sub, lt = st, lookup.LookupType
            if lt == 7:  # extension
                sub, lt = st.ExtSubTable, st.ExtensionLookupType
            if lt == 4 and hasattr(sub, "ligatures"):
                for first, ligs in sub.ligatures.items():
                    for lig in ligs:
                        ligmap[(first,) + tuple(lig.Component)] = lig.LigGlyph
    return ligmap


def resolve_codepoints(icons: set[str]) -> tuple[dict, list]:
    font = TTFont(SRC_FONT)
    cmap = font.getBestCmap()
    char2glyph = {chr(cp): g for cp, g in cmap.items()}
    glyph2cp: dict = {}
    for cp, g in cmap.items():
        glyph2cp.setdefault(g, cp)
    ligmap = build_ligature_map(font)

    resolved: dict = {}
    missing: list = []
    for name in sorted(icons):
        try:
            seq = tuple(char2glyph[c] for c in name)
        except KeyError:
            missing.append((name, "Zeichen nicht in Schrift"))
            continue
        glyph = ligmap.get(seq)
        if glyph is None:
            missing.append((name, "keine Ligatur (Icon-Name unbekannt?)"))
            continue
        cp = glyph2cp.get(glyph)
        if cp is None:
            missing.append((name, "kein Codepoint"))
            continue
        resolved[name] = cp
    return resolved, missing


def main() -> int:
    if not SRC_FONT.exists():
        sys.exit(
            f"FEHLER: Quell-Schrift fehlt:\n  {SRC_FONT}\n"
            "Wiederherstellen siehe tools/README.md."
        )

    icons = find_used_icons()
    if not icons:
        sys.exit("FEHLER: keine Icons im HTML gefunden.")
    print(f"Gefundene Icons im HTML: {len(icons)}")

    resolved, missing = resolve_codepoints(icons)
    if missing:
        print("\nWARNUNG: nicht aufloesbare Icon-Namen (werden uebersprungen):")
        for name, reason in missing:
            print(f"  - {name}: {reason}")
        print("  -> Tippfehler? Oder das Icon existiert nicht in Material Symbols.\n")

    unicodes = ",".join(f"U+{cp:04X}" for cp in sorted(resolved.values()))
    text = " ".join(sorted(resolved.keys()))  # liefert alle benoetigten Buchstaben

    # text + unicodes + Ligaturen behalten, aber OHNE Layout-Closure:
    # so bleiben nur die Ligatur-Regeln unserer Icons erhalten (sonst zieht die
    # Closure ueber die gemeinsamen Buchstaben praktisch ALLE ~3500 Icons mit rein).
    cmd = [
        sys.executable, "-m", "fontTools.subset", str(SRC_FONT),
        f"--text={text}",
        f"--unicodes={unicodes}",
        "--layout-features+=liga,dlig,calt,rlig",
        "--no-layout-closure",
        "--flavor=woff2",
        "--no-hinting", "--desubroutinize",
        f"--output-file={OUT_FONT}",
    ]
    print("Subsetting laeuft ...")
    subprocess.run(cmd, check=True)

    size_kb = OUT_FONT.stat().st_size / 1024
    src_mb = SRC_FONT.stat().st_size / (1024 * 1024)
    print(
        f"\nFertig: {OUT_FONT.relative_to(REPO).as_posix()}\n"
        f"  {len(resolved)} Icons  |  {size_kb:.0f} KB  "
        f"(Quelle {src_mb:.2f} MB)"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
