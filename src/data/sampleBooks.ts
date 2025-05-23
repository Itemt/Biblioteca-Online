
import { Book } from "@/types/book";

export const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    isbn: "9780307474728",
    publishedYear: 1967,
    genre: "Realismo mágico",
    description: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
    addedDate: new Date("2023-01-15").toISOString(),
  },
  {
    id: "2",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    isbn: "9788420412146",
    publishedYear: 1605,
    genre: "Clásico",
    description: "La historia del hidalgo Alonso Quijano que, enloquecido por la lectura de libros de caballería, recorre España con su escudero Sancho Panza.",
    available: false,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546112331i/3836.jpg",
    addedDate: new Date("2023-02-20").toISOString(),
  },
  {
    id: "3",
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    isbn: "9788408043645",
    publishedYear: 2001,
    genre: "Misterio",
    description: "En la Barcelona de posguerra, un joven llamado Daniel Sempere encuentra un libro maldito que cambia el rumbo de su vida.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1343757783i/1232.jpg",
    addedDate: new Date("2023-03-10").toISOString(),
  },
  {
    id: "4",
    title: "Rayuela",
    author: "Julio Cortázar",
    isbn: "9788437604572",
    publishedYear: 1963,
    genre: "Experimental",
    description: "Una novela innovadora que puede leerse de forma lineal o siguiendo un orden alternativo propuesto por el autor.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353542681i/94856.jpg",
    addedDate: new Date("2023-04-05").toISOString(),
  },
  {
    id: "5",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    isbn: "9788437601724",
    publishedYear: 1955,
    genre: "Realismo mágico",
    description: "La historia de Juan Preciado que viaja a Comala para encontrar a su padre, Pedro Páramo, solo para descubrir un pueblo lleno de fantasmas.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361104622i/37140.jpg",
    addedDate: new Date("2023-05-12").toISOString(),
  },
  {
    id: "6",
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    isbn: "9788401352898",
    publishedYear: 1982,
    genre: "Realismo mágico",
    description: "La saga de la familia Trueba a lo largo de cuatro generaciones, desde principios del siglo XX hasta el golpe militar en Chile.",
    available: false,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1621432458i/9328.jpg",
    addedDate: new Date("2023-06-08").toISOString(),
  },
  {
    id: "7",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    isbn: "9788499089508",
    publishedYear: 1944,
    genre: "Relatos",
    description: "Una colección de cuentos cortos que exploran temas como el infinito, el tiempo y las realidades alternativas.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388282654i/426504.jpg",
    addedDate: new Date("2023-07-22").toISOString(),
  },
  {
    id: "8",
    title: "2666",
    author: "Roberto Bolaño",
    isbn: "9788433972453",
    publishedYear: 2004,
    genre: "Novela",
    description: "Una novela épica dividida en cinco partes que gira en torno a los asesinatos sin resolver de mujeres en Santa Teresa, ciudad ficticia basada en Ciudad Juárez.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327866456i/63032.jpg",
    addedDate: new Date("2023-08-15").toISOString(),
  },
  {
    id: "9",
    title: "El amor en los tiempos del cólera",
    author: "Gabriel García Márquez",
    isbn: "9788497592451",
    publishedYear: 1985,
    genre: "Romántica",
    description: "La historia de amor entre Florentino Ariza y Fermina Daza que espera más de cincuenta años para realizarse.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327124337i/9712.jpg",
    addedDate: new Date("2023-09-01").toISOString(),
  },
  {
    id: "10",
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    isbn: "9788420471839",
    publishedYear: 1963,
    genre: "Novela",
    description: "La historia de un grupo de cadetes en el Colegio Militar Leoncio Prado en Lima, Perú.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924477i/53970.jpg",
    addedDate: new Date("2023-09-15").toISOString(),
  },
  {
    id: "11",
    title: "El laberinto de la soledad",
    author: "Octavio Paz",
    isbn: "9788437501567",
    publishedYear: 1950,
    genre: "Ensayo",
    description: "Un análisis de la identidad mexicana y su relación con la historia y la cultura.",
    available: false,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349031558i/53383.jpg",
    addedDate: new Date("2023-10-05").toISOString(),
  },
  {
    id: "12",
    title: "Los detectives salvajes",
    author: "Roberto Bolaño",
    isbn: "9788433966636",
    publishedYear: 1998,
    genre: "Novela",
    description: "La historia de dos poetas viscerales, Arturo Belano y Ulises Lima, y su búsqueda de una poeta mexicana desaparecida.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344409005i/63033.jpg",
    addedDate: new Date("2023-10-20").toISOString(),
  },
  {
    id: "13",
    title: "Memoria de mis putas tristes",
    author: "Gabriel García Márquez",
    isbn: "9788497935319",
    publishedYear: 2004,
    genre: "Novela",
    description: "Un hombre de noventa años decide regalarse una noche de amor loco con una adolescente virgen en su cumpleaños.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348611830i/9595.jpg",
    addedDate: new Date("2023-11-05").toISOString(),
  },
  {
    id: "14",
    title: "La tregua",
    author: "Mario Benedetti",
    isbn: "9788420422800",
    publishedYear: 1960,
    genre: "Novela",
    description: "La historia de un oficinista viudo que encuentra el amor poco antes de su jubilación.",
    available: false,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348668554i/176558.jpg",
    addedDate: new Date("2023-11-25").toISOString(),
  },
  {
    id: "15",
    title: "Como agua para chocolate",
    author: "Laura Esquivel",
    isbn: "9788408005254",
    publishedYear: 1989,
    genre: "Realismo mágico",
    description: "Una novela que combina el amor con la gastronomía a través de la historia de Tita, una joven que sólo puede expresarse a través de la cocina.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1356136031i/6952.jpg",
    addedDate: new Date("2023-12-10").toISOString(),
  },
  {
    id: "16",
    title: "La muerte de Artemio Cruz",
    author: "Carlos Fuentes",
    isbn: "9788437601618",
    publishedYear: 1962,
    genre: "Novela",
    description: "La vida de Artemio Cruz, un soldado de la Revolución Mexicana que se convirtió en un poderoso terrateniente corrupto.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1360026535i/92854.jpg",
    addedDate: new Date("2023-12-20").toISOString(),
  },
  {
    id: "17",
    title: "Conversación en La Catedral",
    author: "Mario Vargas Llosa",
    isbn: "9788432203640",
    publishedYear: 1969,
    genre: "Novela política",
    description: "Una extensa novela sobre la dictadura de Manuel Odría en el Perú de los años 50.",
    available: true,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348252973i/53956.jpg",
    addedDate: new Date("2024-01-05").toISOString(),
  },
  {
    id: "18",
    title: "Rebelión en la granja",
    author: "George Orwell",
    isbn: "9788499890951",
    publishedYear: 1945,
    genre: "Fábula política",
    description: "Una fábula satírica sobre la corrupción del socialismo soviético en la Unión Soviética.",
    available: false,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg",
    addedDate: new Date("2024-01-15").toISOString(),
  },
];
