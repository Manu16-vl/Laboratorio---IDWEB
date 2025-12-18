estudiantes = []
while True:
    print("\n1. Agregar\n2. Mostrar\n3. Mejor promedio\n4. Buscar\n5. Eliminar\n6. Salir")
    op = input("Opción: ")
    if op == "1":
        nombre = input("Nombre: ")
        edad = int(input("Edad: "))
        promedio = float(input("Promedio: "))
        estudiantes.append({"nombre": nombre, "edad": edad, "promedio": promedio})
    elif op == "2":
        for e in estudiantes:
            print(e)
    elif op == "3":
        mejor = max(estudiantes, key=lambda x: x["promedio"])
        print("Mejor estudiante:", mejor)
    elif op == "4":
        nom = input("Buscar nombre: ")
        for e in estudiantes:
            if e["nombre"].lower() == nom.lower():
                print(e)
    elif op == "5":
        nom = input("Eliminar nombre: ")
        estudiantes = [e for e in estudiantes if e["nombre"].lower() != nom.lower()]
    elif op == "6":
        break

