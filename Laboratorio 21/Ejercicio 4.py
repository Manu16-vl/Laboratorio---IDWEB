class Libro:
    def __init__(self, titulo, autor, anio):
        self.titulo = titulo
        self.autor = autor
        self.anio = anio
        self.disponible = True
    def prestar(self):
        if self.disponible:
            self.disponible = False
            print(f"Libro '{self.titulo}' prestado.")
        else:
            print(f"Libro '{self.titulo}' no disponible.")

    def devolver(self):
        self.disponible = True
class LibroDigital(Libro):
    def __init__(self, titulo, autor, anio, formato, tamañoMB):
        super().__init__(titulo, autor, anio)
        self.formato = formato
        self.tamañoMB = tamañoMB

    def prestar(self):
        print(f"Libro digital '{self.titulo}' disponible siempre.")
class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def listar(self):
        for l in self.libros:
            estado = "Disponible" if l.disponible else "Prestado"
            print(l.titulo, "-", estado)

    def buscar_autor(self, autor):
        return [l.titulo for l in self.libros if l.autor == autor]

    def prestar_libro(self, titulo):
        for l in self.libros:
            if l.titulo == titulo:
                l.prestar()
                return
        print("Libro no encontrado")
biblio = Biblioteca()
biblio.agregar_libro(Libro("Python", "Guido", 2020))
biblio.agregar_libro(Libro("Java", "Gosling", 2019))
biblio.agregar_libro(Libro("C++", "Stroustrup", 2018))
biblio.agregar_libro(LibroDigital("Python PDF", "Guido", 2021, "PDF", 5))
biblio.agregar_libro(LibroDigital("Java EPUB", "Gosling", 2022, "EPUB", 8))
biblio.listar()
biblio.prestar_libro("Python")
biblio.prestar_libro("Python")
biblio.prestar_libro("Python PDF")
