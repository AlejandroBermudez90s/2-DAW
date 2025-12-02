import sys
import py7zr
import string

ruta_7z = sys.argv[1]
ruta_destino = "./"
salt = "mac-torrent-download.net_"

for a in string.ascii_lowercase+string.digits:
    for b in string.ascii_lowercase+string.digits:
        for c in string.ascii_lowercase+string.digits:
            password = f""