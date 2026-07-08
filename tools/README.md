# tools/ — Icon-Schrift subsetten

`fonts/material-symbols-outlined.woff2` enthält **nicht** die komplette
Material-Symbols-Schrift (~3,9 MB), sondern nur die ~90 Icons, die tatsächlich
auf der Website verwendet werden (~80 KB).

**Warum:** Die volle Schrift dominierte mit 3,9 MB rund 94 % des Seitengewichts.
Unter „Slow 4G" (Googles mobiler PageSpeed-Test) dauerte ihr Download ~20 s und
blockierte den Seitenaufbau → FCP/LCP ~20 s, Performance-Score ~55. Mit dem
Subset fällt das auf wenige hundert Millisekunden.

Die Ligaturen bleiben erhalten, d. h. im HTML steht weiterhin der Icon-Name:

```html
<span class="material-symbols-outlined">analytics</span>
```

## Wann neu bauen?

Immer wenn ein **neues** Icon ins HTML kommt, das vorher nicht vorkam — sonst
erscheint es als leeres Kästchen, weil die Glyphe in der schlanken Schrift fehlt.

```bash
pip install fonttools brotli      # einmalig
python tools/subset-material-symbols.py
```

Das Skript scannt alle `*.html`, ermittelt die genutzten Icons und schreibt die
neue `fonts/material-symbols-outlined.woff2`. Danach committen.

## Quell-Schrift (`tools/fonts-src/`)

Die volle Schrift liegt unter
`tools/fonts-src/material-symbols-outlined-full.woff2` und ist bewusst
**nicht im Git** (`.gitignore`), um das Repo schlank zu halten.

Falls sie fehlt (z. B. frischer Clone), wiederherstellen — am einfachsten aus
der Git-Historie, in der die ungekürzte Schrift noch liegt:

```bash
mkdir -p tools/fonts-src
git show 359a85b:fonts/material-symbols-outlined.woff2 \
  > tools/fonts-src/material-symbols-outlined-full.woff2
```

(`359a85b` ist der letzte Commit **vor** dem Subset; jeder ältere Commit, der die
3,9-MB-Datei enthält, funktioniert ebenso.)

Alternativ die aktuelle Variable-Font direkt von Google laden:
<https://github.com/google/material-design-icons> →
`variablefont/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].woff2`.
