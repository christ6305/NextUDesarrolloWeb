CREATE DATABASE golf_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

    CREATE TABLE public.paises
    (
        id integer NOT NULL,
        nombre character varying(45) NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE public.ciudades
    (
        id integer NOT NULL,
        nombre character varying(45) NOT NULL,
        latitud character varying(60) NOT NULL,
        fk_pais integer NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE public.jugadores
    (
        id integer NOT NULL,
        nombre character varying(45) NOT NULL,
        apellido character varying(45) NOT NULL,
        fecha_nacimiento date NOT NULL,
        categoria character varying(45) NOT NULL,
        fk_ciudad_origen integer NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE public.posiciones_torneo
    (
        fk_jugador integer NOT NULL,
        fk_torneo integer NOT NULL,
        puntuacion_general integer NOT NULL,
        golpes_totales integer NOT NULL,
        PRIMARY KEY (fk_jugador, fk_torneo)
    );
    CREATE TABLE public.campos
    (
        id integer NOT NULL,
        nombre character varying(45) NOT NULL,
        direccion character varying(45) NOT NULL,
        fk_ciudad integer NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE public.tarjetas_torneo
    (
        fk_torneo integer NOT NULL,
        fk_jugador integer NOT NULL,
        fk_numero_hoyo integer NOT NULL,
        fk_campo integer NOT NULL,
        numero_golpes integer NOT NULL,
        puntuacion integer NOT NULL,
        PRIMARY KEY (fk_torneo, fk_jugador, fk_numero_hoyo, fk_campo)
    );
    CREATE TABLE public.torneos
    (
        id integer NOT NULL,
        nombre character varying(45) NOT NULL,
        fecha date NOT NULL,
        premio double precision NOT NULL,
        categoria character varying(45) NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE public.hoyos
    (
        numero integer NOT NULL,
        fk_campo integer NOT NULL,
        par integer NOT NULL,
        dificultad character varying(45) NOT NULL,
        PRIMARY KEY (numero, fk_campo)
    );
    ALTER TABLE public.ciudades
        ADD CONSTRAINT fk_ciudades_paises FOREIGN KEY (fk_pais)
        REFERENCES public.paises (id);
    ALTER TABLE public.jugadores
        ADD CONSTRAINT fk_jugadores_ciudad FOREIGN KEY (fk_ciudad_origen)
        REFERENCES public.ciudades (id);
    ALTER TABLE public.posiciones_torneo
        ADD CONSTRAINT fk_posiciones_jugador FOREIGN KEY (fk_jugador)
        REFERENCES public.jugadores (id);
    ALTER TABLE public.posiciones_torneo
        ADD CONSTRAINT fk_posiciones_torneo FOREIGN KEY (fk_torneo)
        REFERENCES public.torneos (id);
    ALTER TABLE public.tarjetas_torneo
        ADD CONSTRAINT fk_tarjetas_torneos FOREIGN KEY (fk_torneo)
        REFERENCES public.torneos (id);
    ALTER TABLE public.tarjetas_torneo
        ADD CONSTRAINT fk_tarjetas_jugador FOREIGN KEY (fk_jugador)
        REFERENCES public.jugadores (id);
    ALTER TABLE public.tarjetas_torneo
        ADD CONSTRAINT fk_tarjetas_hoyo FOREIGN KEY (fk_numero_hoyo, fk_campo)
        REFERENCES public.hoyos (numero, fk_campo);
    ALTER TABLE public.campos
        ADD CONSTRAINT fk_campos_ciudad FOREIGN KEY (fk_ciudad)
        REFERENCES public.ciudades (id);
    ALTER TABLE public.hoyos
        ADD CONSTRAINT fk_hoyos_campos FOREIGN KEY (fk_campo)
        REFERENCES public.campos (id);
