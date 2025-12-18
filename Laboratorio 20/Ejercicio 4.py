ingreso_mensual = float(input("Ingreso mensual: "))
ingreso_anual = ingreso_mensual * 14
impuesto = 0
if ingreso_anual > 100000:
    impuesto += (ingreso_anual - 100000) * 0.30
    ingreso_anual = 100000

if ingreso_anual > 50000:
    impuesto += (ingreso_anual - 50000) * 0.20
    ingreso_anual = 50000

if ingreso_anual > 20000:
    impuesto += (ingreso_anual - 20000) * 0.10

tasa_efectiva = (impuesto / (ingreso_mensual * 14)) * 100

print("Total impuesto:", impuesto)
print("Tasa efectiva real:", tasa_efectiva, "%")
