import time, random, threading, asyncio, multiprocessing
def consulta(nombre):
    t = random.randint(1,5)
    time.sleep(t)
    print(nombre, "terminó en", t)

hilos = []
for i in range(3):
    h = threading.Thread(target=consulta, args=(f"Hilo {i}",))
    h.start()
    hilos.append(h)
for h in hilos:
    h.join()
async def consulta_async(nombre):
    t = random.randint(1,5)
    await asyncio.sleep(t)
    print(nombre, "async", t)
async def main():
    await asyncio.gather(
        consulta_async("A"),
        consulta_async("B"),
        consulta_async("C")
    )
asyncio.run(main())
