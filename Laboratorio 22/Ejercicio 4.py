# ejercicio4.py
import requests

url = "https://pokeapi.co/api/v2/pokemon?limit=10"
r = requests.get(url)

pokemons = r.json()["results"]

for i, p in enumerate(pokemons, 1):
    print(f"{i}. {p['name']}")
