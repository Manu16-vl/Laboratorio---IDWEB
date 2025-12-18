from wsgiref.simple_server import make_server
import json
libros = []
contador = 1
def app(environ, start_response):
    global contador
    metodo = environ["REQUEST_METHOD"]
    path = environ["PATH_INFO"]
    if metodo == "GET" and path == "/libros":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode()]
    if metodo == "POST" and path == "/libros":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)

        libro = {
            "id": contador,
            "titulo": data["titulo"],
            "autor": data["autor"],
            "anio": data["anio"]
        }
        contador += 1
        libros.append(libro)

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(libro).encode()]
    if metodo == "GET" and path.startswith("/libros/"):
        id_libro = int(path.split("/")[-1])
        for l in libros:
            if l["id"] == id_libro:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(l).encode()]
        start_response("404 Not Found", [])
        return [b"Libro no encontrado"]

    start_response("404 Not Found", [])
    return [b"Ruta no encontrada"]

server = make_server("localhost", 8000, app)
print("API Libros en http://localhost:8000")
server.serve_forever()
