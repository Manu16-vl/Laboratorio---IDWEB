import json
equipos = [
    {"nombre": "Alianza", "pais": "Perú", "ataque": 80, "defensa": 75},
    {"nombre": "Boca", "pais": "Argentina", "ataque": 85, "defensa": 80}
]
print(json.dumps(equipos, indent=4))
