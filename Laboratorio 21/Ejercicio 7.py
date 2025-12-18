
with open("origen.txt", "r") as o, open("destino.txt", "w") as d:
    d.write(o.read())

with open("imagen.jpg", "rb") as o, open("imagen_copia.jpg", "wb") as d:
    d.write(o.read())
