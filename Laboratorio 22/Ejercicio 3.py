import requests 
url = "https://httpbin.org/get"
r = requests.get(url)

data = r.json()

print("IP:", data.get("origin"))
print("Headers:", data.get("headers"))
print("Args:", data.get("args"))
