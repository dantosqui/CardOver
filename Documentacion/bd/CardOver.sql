USE [master]
GO
/****** Object:  Database [CardOver]    Script Date: 1/12/2023 19:51:46 ******/
CREATE DATABASE [CardOver]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CardOver', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\CardOver.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CardOver_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\CardOver_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [CardOver] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CardOver].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CardOver] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CardOver] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CardOver] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CardOver] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CardOver] SET ARITHABORT OFF 
GO
ALTER DATABASE [CardOver] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CardOver] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CardOver] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CardOver] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CardOver] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CardOver] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CardOver] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CardOver] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CardOver] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CardOver] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CardOver] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CardOver] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CardOver] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CardOver] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CardOver] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CardOver] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CardOver] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CardOver] SET RECOVERY FULL 
GO
ALTER DATABASE [CardOver] SET  MULTI_USER 
GO
ALTER DATABASE [CardOver] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CardOver] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CardOver] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CardOver] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CardOver] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CardOver] SET QUERY_STORE = OFF
GO
USE [CardOver]
GO
/****** Object:  Table [dbo].[Cartas]    Script Date: 1/12/2023 19:51:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cartas](
	[idCarta] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nchar](100) NOT NULL,
	[puntosAtaque] [int] NOT NULL,
	[puntosDefensa] [int] NOT NULL,
	[ImagenCarta] [nchar](1000) NULL,
	[tipoCarta] [nchar](200) NULL,
 CONSTRAINT [PK_Cartas] PRIMARY KEY CLUSTERED 
(
	[idCarta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartasEspeciales]    Script Date: 1/12/2023 19:51:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartasEspeciales](
	[IdCarta] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nchar](100) NOT NULL,
	[PuntosAtaque] [int] NULL,
	[PuntosDefensa] [int] NULL,
	[ImagenCarta] [nchar](1000) NULL,
	[Habilidad] [nchar](100) NOT NULL,
	[tipoCarta] [nchar](200) NOT NULL,
 CONSTRAINT [PK_CartasEspeciales] PRIMARY KEY CLUSTERED 
(
	[IdCarta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Partida]    Script Date: 1/12/2023 19:51:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Partida](
	[IdPartida] [int] IDENTITY(1,1) NOT NULL,
	[NombreJugador1] [nchar](200) NOT NULL,
	[NombreJugador2] [nchar](199) NOT NULL,
	[NombreGanador] [nchar](200) NOT NULL,
 CONSTRAINT [PK_Partida] PRIMARY KEY CLUSTERED 
(
	[IdPartida] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Cartas] ON 

INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (1, N'Caballero lol                                                                                       ', 300, 50, N'https://regalosdehistoria.com/wp-content/uploads/2022/08/figura-caballero-medieval-a-caballo-5.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ', N'Al ataque!                                                                                                                                                                                              ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (2, N'Dragoncin Normal                                                                                    ', 250, 1000, N'https://yt3.googleusercontent.com/ytc/APkrFKZtqmyKih94yVmXY_-dAgivsC-tIP14o4zSjeYe=s900-c-k-c0x00ffffff-no-rj                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ', N'Cincin                                                                                                                                                                                                  ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (4, N'Teorema de 4ID                                                                                      ', 1123, 58, N'https://api.new.buscatuprofesor.mx/news_image/H5/Zs/H5Zsubr5A3qa0c6MxwHxpXv9fFcxcT4FqjU8j5h6.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ', N'Martin tiene miedo                                                                                                                                                                                      ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (5, N'La peor carta                                                                                       ', 0, 0, N'https://ichef.bbci.co.uk/news/640/cpsprodpb/126F3/production/_95870557_gettyimages-521230034.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ', N'Que mala suerte                                                                                                                                                                                         ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (6, N'Neotictom                                                                                           ', 1000, 1000, N'https://superlago.com.ar/wp-content/uploads/2020/12/7790670050650.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ', N'Paty                                                                                                                                                                                                    ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (7, N'Zareke                                                                                              ', 0, 800, N'https://i.insider.com/567322aedd08952d5d8b46de?width=700                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ', N'08                                                                                                                                                                                                      ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (8, N'Danosqui200                                                                                         ', 200, 200, N'https://i.ibb.co/Kz6g0C5/Imagen-de-Whats-App-2023-11-28-a-las-21-16-29-a87bd1bd.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', N'normal.                                                                                                                                                                                                 ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (9, N'FZ                                                                                                  ', 666, 0, N'https://i.ibb.co/J7r571x/Imagen-de-Whats-App-2023-11-28-a-las-22-44-50-284e3a8a.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', N'Skibidi                                                                                                                                                                                                 ')
SET IDENTITY_INSERT [dbo].[Cartas] OFF
GO
SET IDENTITY_INSERT [dbo].[CartasEspeciales] ON 

INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (1, N'Dragoncin Sans                                                                                      ', 1000, NULL, N'https://i.redd.it/5onmduivy5b91.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', N'veneno,100,3                                                                                        ', N'-100, 3 rondas                                                                                                                                                                                          ')
INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (6, N'Alcohol en gel                                                                                      ', 0, 2000, N'https://www.cedent.com.ar/web/image/product.template/8111/image_1024?unique=1becf1f                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', N'curacion,1000,1                                                                                     ', N'+1000                                                                                                                                                                                                   ')
INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (7, N'Escudardo                                                                                           ', 0, 5000, N'https://www.cultura.gob.ar/media/uploads/240602_12.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', N'defenza,1000,3                                                                                      ', N'Defiende 1000, 3 rondas                                                                                                                                                                                 ')
INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (8, N'Cordobazo                                                                                           ', 40, 35, N'https://vocesenelfenix.economicas.uba.ar/wp-content/uploads/3502-Bonforti.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ', N'veneno,10,20                                                                                        ', N'-10, 20 rondas                                                                                                                                                                                          ')
INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (9, N'Escudillo                                                                                           ', 0, 1000, N'https://laverdadnoticias.com/__export/1584557863168/sites/laverdad/img/2020/03/18/emoji_de_escudo.jpg_1902800913.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ', N'defenza,100,10                                                                                      ', N'Defiende 100, 10 rondas                                                                                                                                                                                 ')
INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (10, N'OMG!                                                                                                ', 0, 10, N'https://t4.ftcdn.net/jpg/05/07/77/85/360_F_507778534_qINjvXSG3OAHxBMIEcJbagJmp54GexEv.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ', N'curacion,200,4                                                                                      ', N'+200, 4 rondas                                                                                                                                                                                          ')
SET IDENTITY_INSERT [dbo].[CartasEspeciales] OFF
GO
USE [master]
GO
ALTER DATABASE [CardOver] SET  READ_WRITE 
GO
