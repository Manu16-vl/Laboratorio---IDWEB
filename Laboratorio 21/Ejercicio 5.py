class OperadorInvalido(Exception):
    pass
expr = input("Ingresa operación (ej: 10 / 2): ")
try:
    a, op, b = expr.split()
    a = float(a)
    b = float(b)
    if op == "+":
        print(a + b)
    elif op == "-":
        print(a - b)
    elif op == "*":
        print(a * b)
    elif op == "/":
        if b == 0:
            raise ZeroDivisionError("No se puede dividir entre cero")
        print(a / b)
    else:
        raise OperadorInvalido("Operador inválido")
except ValueError:
    print("Valores inválidos")
except ZeroDivisionError as e:
    print(e)
except OperadorInvalido as e:
    print(e)
