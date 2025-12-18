# ejercicio7.py
from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ["PATH_INFO"]

    if path == "/":
        start_response("200 OK", [("Content-Type", "text/plain")])
        return [b"Inicio"]

    elif path == "/saludo":
        start_response("200 OK", [("Content-Type", "text/plain")])
        return [b"Hola mundo desde WSGI"]

    else:
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"No encontrado"]

server = make_server("localhost", 8000, app)
print("WSGI en http://localhost:8000")
server.serve_forever()
