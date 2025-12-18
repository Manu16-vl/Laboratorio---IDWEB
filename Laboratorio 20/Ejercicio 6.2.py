import numpy as np

def normalizar_np(lista, modo):
    arr = np.array(lista, dtype=float)

    if modo == "minmax":
        return ((arr - arr.min()) / (arr.max() - arr.min())).tolist()

    elif modo == "zscore":
        return ((arr - arr.mean()) / arr.std()).tolist()

    elif modo == "unit":
        return (arr / np.linalg.norm(arr)).tolist()

    else:
        raise ValueError("Modo inválido")
