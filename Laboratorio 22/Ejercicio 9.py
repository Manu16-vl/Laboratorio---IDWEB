from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote
STATIC_DIR = "static"
equipos = []
contador = 1
def servir_estatico(path):
    file_path = os.path.join(STATIC_DIR, path.replace("/static/", ""))
    if not os.path.isfile(file_path):
        return None, None
    tipo, _ = mimetypes.guess_type(file_path)
    with open(file_path, "rb") as f:
        return f.read(), tipo or "application/octet-stream"
def app(environ, start_response):
    global contador
    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])
    if path.startswith("/static/"):
        contenido, tipo = servir_estatico(path)
        if contenido is None:
            start_response("404 Not Found", [])
            return [b"No encontrado"]
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]
    if metodo == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode()]
    if metodo == "POST" and path == "/equipos":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)
        equipo = {
            "id": contador,
            "nombre": data["nombre"],
            "ciudad": data["ciudad"],
            "nivelAtaque": data["nivelAtaque"],
            "nivelDefensa": data["nivelDefensa"]
        }
        contador += 1
        equipos.append(equipo)
        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(equipo).encode()]
    if metodo == "GET" and path.startswith("/equipos/"):
        id_eq = int(path.split("/")[-1])
        for e in equipos:
            if e["id"] == id_eq:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(e).encode()]
        start_response("404 Not Found", [])
        return [b"No encontrado"]
    start_response("404 Not Found", [])
    return [b"Ruta no encontrada"]
server = make_server("localhost", 8000, app)
print("Servidor avanzado en http://localhost:8000")
server.serve_forever()
