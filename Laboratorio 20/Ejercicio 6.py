import math
def normalizar(lista, modo):
    if not lista:
        return []
    if modo == "minmax":
        minimo = min(lista)
        maximo = max(lista)
        if maximo == minimo:
            return [0]*len(lista)
        return [(x - minimo) / (maximo - minimo) for x in lista]
    elif modo == "zscore":
        media = sum(lista)/len(lista)
        var = sum((x-media)**2 for x in lista)/len(lista)
        desv = math.sqrt(var)
        if desv == 0:
            return [0]*len(lista)
        return [(x - media)/desv for x in lista]
    elif modo == "unit":
        norma = math.sqrt(sum(x**2 for x in lista))
        if norma == 0:
            return [0]*len(lista)
        return [x/norma for x in lista]
    else:
        raise ValueError("Modo inválido")
