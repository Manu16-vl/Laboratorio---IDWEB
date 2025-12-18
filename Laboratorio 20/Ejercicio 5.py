while True:
    n = int(input("Ingresa N (>=3): "))
    if n >= 3:
        break
matriz = [[0]*n for _ in range(n)]
num = 1
top, bottom = 0, n-1
left, right = 0, n-1
while num <= n*n:
    for i in range(left, right+1):
        matriz[top][i] = num
        num += 1
    top += 1
    for i in range(top, bottom+1):
        matriz[i][right] = num
        num += 1
    right -= 1
    for i in range(right, left-1, -1):
        matriz[bottom][i] = num
        num += 1
    bottom -= 1
    for i in range(bottom, top-1, -1):
        matriz[i][left] = num
        num += 1
    left += 1
for fila in matriz:
    print(fila)
