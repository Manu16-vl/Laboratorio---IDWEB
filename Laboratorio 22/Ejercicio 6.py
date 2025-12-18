from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SumaServidor(BaseHTTPRequestHandler):

    def do_POST(self):
        length = int(self.headers["Content-Length"])
        body = self.rfile.read(length)
        data = json.loads(body)

        resultado = data["a"] + data["b"]

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps({"resultado": resultado}).encode())
server = HTTPServer(("localhost", 8000), SumaServidor)
print("Servidor POST en http://localhost:8000")
server.serve_forever()
