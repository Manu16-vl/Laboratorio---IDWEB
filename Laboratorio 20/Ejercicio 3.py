salario_base = float(input("Salario base: "))
horas_extras = int(input("Horas extras: "))
pago_hora_extra = float(input("Pago por hora extra: "))
bono = float(input("Bono: "))
afp = float(input("AFP (%): "))
salud = float(input("Salud (%): "))

salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono
descuentos = (salario_base * afp / 100) + (salario_base * salud / 100)
salario_neto = salario_bruto - descuentos

print("Salario bruto:", salario_bruto)
print("Descuentos totales:", descuentos)
print("Salario neto:", salario_neto)
