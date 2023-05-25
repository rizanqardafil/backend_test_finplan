def createPattern():
    N = int(input("Masukkan nilai N (bilangan ganjil): "))
    if N % 2 == 0:
        return "Harus bilangan ganjil"

    pattern = []
    for i in range(N):
        row = ""
        for j in range(N):
            if i == 0 or i == N - 1 or j == 0 or j == N - 1:
                row += "X"
            elif i == j or i + j == N - 1:
                row += "O"
            else:
                row += "X"
        pattern.append(row)

    return "\n".join(pattern)

# Contoh penggunaan
print(createPattern())
