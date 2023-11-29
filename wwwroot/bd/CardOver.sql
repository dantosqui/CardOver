USE [master]
GO
/****** Object:  Database [CardOver]    Script Date: 29/11/2023 09:08:00 ******/
CREATE DATABASE [CardOver]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CardOver', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\CardOver.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CardOver_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\CardOver_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
EXEC sys.sp_db_vardecimal_storage_format N'CardOver', N'ON'
GO
ALTER DATABASE [CardOver] SET QUERY_STORE = OFF
GO
USE [CardOver]
GO
/****** Object:  User [alumno]    Script Date: 29/11/2023 09:08:00 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Cartas]    Script Date: 29/11/2023 09:08:00 ******/
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
/****** Object:  Table [dbo].[CartasEspeciales]    Script Date: 29/11/2023 09:08:00 ******/
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
/****** Object:  Table [dbo].[Partida]    Script Date: 29/11/2023 09:08:00 ******/
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

INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (1, N'Caballero lol                                                                                       ', 500, 50, N'https://regalosdehistoria.com/wp-content/uploads/2022/08/figura-caballero-medieval-a-caballo-5.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ', N'Al ataque!                                                                                                                                                                                              ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (2, N'Dragoncin Normal                                                                                    ', 1000, 1000, N'https://yt3.googleusercontent.com/ytc/APkrFKZtqmyKih94yVmXY_-dAgivsC-tIP14o4zSjeYe=s900-c-k-c0x00ffffff-no-rj                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ', N'Cincin                                                                                                                                                                                                  ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (4, N'Teorema de 4ID                                                                                      ', 1123, 58, NULL, N'Martin tiene miedo                                                                                                                                                                                      ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (5, N'La peor carta                                                                                       ', 0, 0, NULL, N'Que mala suerte                                                                                                                                                                                         ')
INSERT [dbo].[Cartas] ([idCarta], [nombre], [puntosAtaque], [puntosDefensa], [ImagenCarta], [tipoCarta]) VALUES (6, N'Neotictom                                                                                           ', 2000, 2000, NULL, N'Legendario guerrero PIA                                                                                                                                                                                 ')
SET IDENTITY_INSERT [dbo].[Cartas] OFF
GO
SET IDENTITY_INSERT [dbo].[CartasEspeciales] ON 

INSERT [dbo].[CartasEspeciales] ([IdCarta], [nombre], [PuntosAtaque], [PuntosDefensa], [ImagenCarta], [Habilidad], [tipoCarta]) VALUES (1, N'Dragoncin Sans                                                                                      ', 1000, NULL, NULL, N'Ojo Azul                                                                                            ', N'OJO AZUL                                                                                                                                                                                                ')
SET IDENTITY_INSERT [dbo].[CartasEspeciales] OFF
GO
USE [master]
GO
ALTER DATABASE [CardOver] SET  READ_WRITE 
GO
