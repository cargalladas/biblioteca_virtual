--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.10
-- Dumped by pg_dump version 9.5.10

-- Started on 2017-12-21 23:20:10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 8 (class 2615 OID 16398)
-- Name: esquemabiblioteca; Type: SCHEMA; Schema: -; Owner: Carlos
--

CREATE SCHEMA esquemabiblioteca;


ALTER SCHEMA esquemabiblioteca OWNER TO "Carlos";

SET search_path = esquemabiblioteca, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 16424)
-- Name: idioma; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE idioma (
    id integer NOT NULL,
    nome character varying NOT NULL,
    pais character varying
);


ALTER TABLE idioma OWNER TO "Carlos";

--
-- TOC entry 184 (class 1259 OID 16422)
-- Name: Idioma_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE "Idioma_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Idioma_id_seq" OWNER TO "Carlos";

--
-- TOC entry 2184 (class 0 OID 0)
-- Dependencies: 184
-- Name: Idioma_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE "Idioma_id_seq" OWNED BY idioma.id;


--
-- TOC entry 191 (class 1259 OID 16457)
-- Name: autor; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE autor (
    id integer NOT NULL,
    nome character varying,
    apelidos character varying,
    apodo character varying,
    datanacemento date,
    foto character varying,
    nacionalidade character varying
);


ALTER TABLE autor OWNER TO "Carlos";

--
-- TOC entry 190 (class 1259 OID 16455)
-- Name: autor_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE autor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE autor_id_seq OWNER TO "Carlos";

--
-- TOC entry 2185 (class 0 OID 0)
-- Dependencies: 190
-- Name: autor_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE autor_id_seq OWNED BY autor.id;


--
-- TOC entry 187 (class 1259 OID 16435)
-- Name: editorial; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE editorial (
    id integer NOT NULL,
    nome character varying NOT NULL,
    sede character varying,
    logo character varying
);


ALTER TABLE editorial OWNER TO "Carlos";

--
-- TOC entry 186 (class 1259 OID 16433)
-- Name: editorial_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE editorial_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE editorial_id_seq OWNER TO "Carlos";

--
-- TOC entry 2186 (class 0 OID 0)
-- Dependencies: 186
-- Name: editorial_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE editorial_id_seq OWNED BY editorial.id;


--
-- TOC entry 193 (class 1259 OID 16497)
-- Name: libros; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE libros (
    id integer NOT NULL,
    titulo character varying NOT NULL,
    edicion numeric,
    ano bigint,
    portada character varying,
    dataalta date NOT NULL,
    descripcion character varying,
    autor bigint,
    idioma bigint NOT NULL,
    editorial bigint,
    xenero bigint
);


ALTER TABLE libros OWNER TO "Carlos";

--
-- TOC entry 192 (class 1259 OID 16495)
-- Name: libros_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE libros_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE libros_id_seq OWNER TO "Carlos";

--
-- TOC entry 2187 (class 0 OID 0)
-- Dependencies: 192
-- Name: libros_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE libros_id_seq OWNED BY libros.id;


--
-- TOC entry 195 (class 1259 OID 16529)
-- Name: prestamos; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE prestamos (
    id integer NOT NULL,
    libro bigint NOT NULL,
    usuario bigint NOT NULL,
    dataprestamo date NOT NULL,
    datadevolucion date NOT NULL
);


ALTER TABLE prestamos OWNER TO "Carlos";

--
-- TOC entry 194 (class 1259 OID 16527)
-- Name: prestamos_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE prestamos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE prestamos_id_seq OWNER TO "Carlos";

--
-- TOC entry 2188 (class 0 OID 0)
-- Dependencies: 194
-- Name: prestamos_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE prestamos_id_seq OWNED BY prestamos.id;


--
-- TOC entry 183 (class 1259 OID 16412)
-- Name: usuarios; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE usuarios (
    id integer NOT NULL,
    nome character varying NOT NULL,
    apelidos character varying NOT NULL,
    datanacemento date,
    direccion character varying,
    dni character varying,
    email character varying,
    foto character varying,
    dataalta date NOT NULL,
    nomeusario character varying(10) NOT NULL,
    contrasinal character varying(32) NOT NULL,
    rol numeric DEFAULT 1 NOT NULL
);


ALTER TABLE usuarios OWNER TO "Carlos";

--
-- TOC entry 182 (class 1259 OID 16410)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE usuarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE usuarios_id_seq OWNER TO "Carlos";

--
-- TOC entry 2189 (class 0 OID 0)
-- Dependencies: 182
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE usuarios_id_seq OWNED BY usuarios.id;


--
-- TOC entry 189 (class 1259 OID 16446)
-- Name: xenero; Type: TABLE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE TABLE xenero (
    id integer NOT NULL,
    nome character varying NOT NULL
);


ALTER TABLE xenero OWNER TO "Carlos";

--
-- TOC entry 188 (class 1259 OID 16444)
-- Name: xenero_id_seq; Type: SEQUENCE; Schema: esquemabiblioteca; Owner: Carlos
--

CREATE SEQUENCE xenero_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE xenero_id_seq OWNER TO "Carlos";

--
-- TOC entry 2190 (class 0 OID 0)
-- Dependencies: 188
-- Name: xenero_id_seq; Type: SEQUENCE OWNED BY; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER SEQUENCE xenero_id_seq OWNED BY xenero.id;


--
-- TOC entry 2029 (class 2604 OID 16460)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY autor ALTER COLUMN id SET DEFAULT nextval('autor_id_seq'::regclass);


--
-- TOC entry 2027 (class 2604 OID 16438)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY editorial ALTER COLUMN id SET DEFAULT nextval('editorial_id_seq'::regclass);


--
-- TOC entry 2026 (class 2604 OID 16427)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY idioma ALTER COLUMN id SET DEFAULT nextval('"Idioma_id_seq"'::regclass);


--
-- TOC entry 2030 (class 2604 OID 16500)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY libros ALTER COLUMN id SET DEFAULT nextval('libros_id_seq'::regclass);


--
-- TOC entry 2031 (class 2604 OID 16532)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY prestamos ALTER COLUMN id SET DEFAULT nextval('prestamos_id_seq'::regclass);


--
-- TOC entry 2024 (class 2604 OID 16415)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY usuarios ALTER COLUMN id SET DEFAULT nextval('usuarios_id_seq'::regclass);


--
-- TOC entry 2028 (class 2604 OID 16449)
-- Name: id; Type: DEFAULT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY xenero ALTER COLUMN id SET DEFAULT nextval('xenero_id_seq'::regclass);


--
-- TOC entry 2191 (class 0 OID 0)
-- Dependencies: 184
-- Name: Idioma_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('"Idioma_id_seq"', 1, false);


--
-- TOC entry 2175 (class 0 OID 16457)
-- Dependencies: 191
-- Data for Name: autor; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2192 (class 0 OID 0)
-- Dependencies: 190
-- Name: autor_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('autor_id_seq', 1, false);


--
-- TOC entry 2171 (class 0 OID 16435)
-- Dependencies: 187
-- Data for Name: editorial; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2193 (class 0 OID 0)
-- Dependencies: 186
-- Name: editorial_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('editorial_id_seq', 1, false);


--
-- TOC entry 2169 (class 0 OID 16424)
-- Dependencies: 185
-- Data for Name: idioma; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2177 (class 0 OID 16497)
-- Dependencies: 193
-- Data for Name: libros; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2194 (class 0 OID 0)
-- Dependencies: 192
-- Name: libros_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('libros_id_seq', 1, false);


--
-- TOC entry 2179 (class 0 OID 16529)
-- Dependencies: 195
-- Data for Name: prestamos; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2195 (class 0 OID 0)
-- Dependencies: 194
-- Name: prestamos_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('prestamos_id_seq', 1, false);


--
-- TOC entry 2167 (class 0 OID 16412)
-- Dependencies: 183
-- Data for Name: usuarios; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2196 (class 0 OID 0)
-- Dependencies: 182
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('usuarios_id_seq', 1, false);


--
-- TOC entry 2173 (class 0 OID 16446)
-- Dependencies: 189
-- Data for Name: xenero; Type: TABLE DATA; Schema: esquemabiblioteca; Owner: Carlos
--



--
-- TOC entry 2197 (class 0 OID 0)
-- Dependencies: 188
-- Name: xenero_id_seq; Type: SEQUENCE SET; Schema: esquemabiblioteca; Owner: Carlos
--

SELECT pg_catalog.setval('xenero_id_seq', 1, false);


--
-- TOC entry 2041 (class 2606 OID 16465)
-- Name: autor_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY autor
    ADD CONSTRAINT "autor_CP" PRIMARY KEY (id);


--
-- TOC entry 2037 (class 2606 OID 16443)
-- Name: editorial_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY editorial
    ADD CONSTRAINT "editorial_CP" PRIMARY KEY (id);


--
-- TOC entry 2035 (class 2606 OID 16432)
-- Name: idioma_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY idioma
    ADD CONSTRAINT "idioma_CP" PRIMARY KEY (id);


--
-- TOC entry 2043 (class 2606 OID 16505)
-- Name: libros_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY libros
    ADD CONSTRAINT "libros_CP" PRIMARY KEY (id);


--
-- TOC entry 2045 (class 2606 OID 16534)
-- Name: prestamos_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY prestamos
    ADD CONSTRAINT "prestamos_CP" PRIMARY KEY (id);


--
-- TOC entry 2033 (class 2606 OID 16421)
-- Name: usuarios_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY usuarios
    ADD CONSTRAINT "usuarios_CP" PRIMARY KEY (id);


--
-- TOC entry 2039 (class 2606 OID 16454)
-- Name: xenero_CP; Type: CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY xenero
    ADD CONSTRAINT "xenero_CP" PRIMARY KEY (id);


--
-- TOC entry 2046 (class 2606 OID 16506)
-- Name: libros_autores_FK; Type: FK CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY libros
    ADD CONSTRAINT "libros_autores_FK" FOREIGN KEY (autor) REFERENCES autor(id) MATCH FULL ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2048 (class 2606 OID 16516)
-- Name: libros_editoriales_CF; Type: FK CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY libros
    ADD CONSTRAINT "libros_editoriales_CF" FOREIGN KEY (editorial) REFERENCES editorial(id) MATCH FULL ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2047 (class 2606 OID 16511)
-- Name: libros_idiomas_CF; Type: FK CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY libros
    ADD CONSTRAINT "libros_idiomas_CF" FOREIGN KEY (idioma) REFERENCES idioma(id) MATCH FULL ON UPDATE CASCADE;


--
-- TOC entry 2049 (class 2606 OID 16521)
-- Name: libros_xeneros; Type: FK CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY libros
    ADD CONSTRAINT libros_xeneros FOREIGN KEY (xenero) REFERENCES xenero(id) MATCH FULL ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2050 (class 2606 OID 16535)
-- Name: prestamos_libros_CF; Type: FK CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY prestamos
    ADD CONSTRAINT "prestamos_libros_CF" FOREIGN KEY (libro) REFERENCES libros(id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2051 (class 2606 OID 16540)
-- Name: prestamos_usuarios_CF; Type: FK CONSTRAINT; Schema: esquemabiblioteca; Owner: Carlos
--

ALTER TABLE ONLY prestamos
    ADD CONSTRAINT "prestamos_usuarios_CF" FOREIGN KEY (usuario) REFERENCES usuarios(id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2017-12-21 23:20:10

--
-- PostgreSQL database dump complete
--

