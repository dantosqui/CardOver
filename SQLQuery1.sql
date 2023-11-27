select * from cartas
select * from CartasEspeciales
UPDATE cartas SET ImagenCarta = 'https://w7.pngwing.com/pngs/365/30/png-transparent-cute-dragon-kawaii-dragon-anime-dragon.png' WHERE nombre = 'Dragoncin Normal'

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Hombre Semilla', 100, 20, 'https://ibb.co/ZKKF4Gm', 'semillas')

update cartas set tipoCarta = '.png' where idCarta = 2

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Pajarraco', 10, 30, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWVoZ3R5aW0xaW16djV3cHN1Y3FrdG9ieGFtZ2pzb3hqZ3o3aXp1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/22diE5bvYydgwL01Hl/source.gif', 'ave')

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Hombre Semilla ENOJADO', 150, 50, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzIwNGNzN3gzYWlrbDdxejM4Y2VqeGNsdGZyZWp4NWNodTA1dWU5biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IrX1qFGQrgnLURVkFU/giphy.gif', 'MÁS SEMILLAS...')

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Señor serio', 40, 200, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXNtamZ4bXZzczAzNGZ1MXIyaGI2d2h1emt3OXY4ZGp4Z21razJ0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XOt7nQiosbtswZXgBA/giphy.gif', 'seriedad absoluta')

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Media', 4000, 0, 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VlZm0weWZlcWJkMGplcTZkdG9mdjIyOWNsNDRrbzZzYXlucHR1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8eXjgbHDQjUkXamPEP/giphy.gif', '"Arrodíllate"')

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Panda chino', 20, 10, 'https://i.pinimg.com/564x/7f/91/13/7f91130c354535ec0df1d4c7013a6ca3.jpg', '我是一只熊猫')

insert into cartas (nombre, puntosAtaque, puntosDefensa, ImagenCarta, tipoCarta) values ('Dantosqui', 2, 5, 'https://i.pinimg.com/564x/7f/91/13/7f91130c354535ec0df1d4c7013a6ca3.jpg', 'no hay foto')

select ImagenCarta from cartas where nombre = 'Dantosqui'

update cartas set ImagenCarta = 'https://i.ibb.co/KXdN9hm/image.jpg' where nombre = 'Dantosqui'