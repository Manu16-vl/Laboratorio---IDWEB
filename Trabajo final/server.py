
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs
import os
print("📂 Carpeta actual:", os.getcwd())
print("📄 Archivos visibles:", os.listdir())

class MiServidor(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            # Ruta raíz
            if self.path == "/":
                archivo = "Pokemon.html"
            else:
                archivo = self.path.split("?")[0].lstrip("/")

            # Verificar existencia
            if not os.path.exists(archivo):
                raise FileNotFoundError

            # Detectar tipo de contenido
            if archivo.endswith(".css"):
                content_type = "text/css"
            elif archivo.endswith(".js"):
                content_type = "application/javascript"
            else:
                content_type = "text/html"

            with open(archivo, "rb") as f:
                self.send_response(200)
                self.send_header("Content-type", content_type)
                self.end_headers()
                self.wfile.write(f.read())

        except FileNotFoundError:
            self.send_error(404, "Archivo no encontrado")

    def do_POST(self):
        if self.path == "/enviar":
            length = int(self.headers.get("Content-Length", 0))
            data = self.rfile.read(length).decode("utf-8")
            form = parse_qs(data)

            nombre = form.get("nombre", [""])[0]
            email = form.get("email", [""])[0]
            mensaje = form.get("mensaje", [""])[0]

            print("📩 Mensaje recibido")
            print(nombre, email, mensaje)

            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()

            self.wfile.write(f"""
            <html>
            <head><meta charset="UTF-8"></head>
            <body>
                <h1>Mensaje recibido correctamente</h1>
                <p><b>Nombre:</b> {nombre}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Mensaje:</b> {mensaje}</p>
                <a href="/Contacto.html">Volver</a>
            </body>
            </html>
            """.encode("utf-8"))

        else:
            self.send_error(404, "Ruta POST no válida")

if __name__ == "__main__":
    print("🚀 Servidor corriendo en http://localhost:8000")
    HTTPServer(("localhost", 8000), MiServidor).serve_forever()
