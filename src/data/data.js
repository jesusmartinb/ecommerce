const products = [
    {
        id: '1',
        name: 'Hierbabuena',
        description: 'La hierbabuena es muy efectiva en los tratamientos de los dolores menstruales y para tratar problemas nerviosos, ya que es relajante.',
        brand: 'Soria Natural',
        presentation: '400gr.',
        price: 10,
        image: ['/img/hierbabuena.jpg', '/img/hierbabuena2.png', '/img/hierbabuena3.png', '/img/hierbabuena4.png'],
        category: 'nervioso',
        stock: 7
    },
    {
        id: '2',
        name: 'Lavanda',
        description: 'La lavanda actúa como tranquilizante ante estados emocionales de nerviosismo. Su aroma te tranquilizará y ayudará a conciliar el sueño.',
        brand: 'Soria Natural',
        presentation: '400gr.',
        price: 15,
        image: ['/img/lavanda.jpg', '/img/lavanda2.png', '/img/lavanda3.png', '/img/lavanda4.png'],
        category: 'nervioso',
        stock: 3
    },
    {
        id: '3',
        name: 'Manzanilla',
        description: 'Ayuda a una buena digestión. Mejora la digestión, relajando los músculos intestinales y evitando la indigestión. Combate la pesadez y te hace sentir mejor.',
        brand: 'Soria Natural',
        presentation: '300gr.',
        price: 20,
        image: ['/img/manzanilla.png', '/img/manzanilla2.png', '/img/manzanilla3.png', '/img/manzanilla4.png'],
        category: 'digestivo',
        stock: 5
    },
    {
        id: '4',
        name: 'Tomillo',
        brand: 'Josenea',
        description:'Propiedades antiespasmódica, expectorante y antiséptica, está especialmente indicado en el tratamiento de ciertas afecciones de las vías respiratorias altas, particularmente las que cursan con tos irritativa, laringitis, bronquitis, asma, enfisema y gripe.',
        presentation: '300gr.',
        price: 35,
        image: ['/img/tomillo.jpg', '/img/tomillo2.png', '/img/tomillo3.png', '/img/tomillo4.png'],
        category: 'respiratorio',
        stock: 10
    },
    {
        id: '5',
        name: 'Artemisa',
        description:'La artemisa es la respuesta del mundo moderno a la malaria y a un creciente número de cepas resistentes a los antibióticos. También conocida como "ajenjo dulce" o "artemisa común", y qing hao en la medicina tradicional china, esta hierba es nativa de pastizales y áreas abiertas en Vietnam, Japón, China, Rusia y América del Norte, y se ha naturalizado en otras partes del mundo.',
        brand: 'Josenea',
        presentation: '300gr.',
        price: 45,
        image: ['/img/artemisa.jpg', '/img/artemisa2.png', '/img/artemisa3.png', '/img/artemisa4.png'],
        category: 'inmune',
        stock: 4
    },
    {
        id: '6',
        name: 'Albahaca',
        description:'La albahaca es muy rica en calcio, básico para reforzar huesos y dientes, y potasio, que regula el contenido de agua de las células y su movimiento, además de moderar el nervioso y muscular e intervenir en la construcción de proteínas.',
        brand: 'Artemis',
        presentation: '300gr.',
        price: 8,
        image: ['/img/albahaca.jpg', '/img/albahaca2.png', '/img/albahaca3.png', '/img/albahaca4.png'],
        category: 'oseo',
        stock: 15
    },
    {
        id: '7',
        name: 'Curcuma',
        description:'Es un potente antiinflamatorio es útil para tratar el dolor y las enfermedades inflamatorias: artritis, artrosis, enfermedad periodontal, etc. Previene el parkinson y el alzhéimer. Es útil para tratar las enfermedades gastrointestinales, como la fibrosis hepática y la enfermedad inflamatoria intestinal.',
        brand: 'Josenea',
        presentation: '300gr.',
        price: 60,
        image: ['/img/curcuma.webp', '/img/curcuma2.png', '/img/curcuma3.png', '/img/curcuma4.png'],
        category: 'oseo',
        stock: 6
    },
    {
        id: '8',
        name: 'Jengibre',
        description:'Tiene potentes propiedades antisépticas, antioxidantes, expectorantes, antiinflamatorias y antimicrobianas; además de gran contenido de hierro, vitamina C y polifenoles, entre otros. El jingerol estimula la transpiración y la circulación sanguínea, dando energía al cuerpo y promoviendo la desintoxicación del mismo.',
        brand: 'Josenea',
        presentation: '300gr.',
        price: 17,
        image: ['/img/jengibre.jpg', '/img/jengibre2.png', '/img/jengibre3.png', '/img/jengibre4.png'],
        category: 'general',
        stock: 3
    },
    {
        id: '9',
        name: 'Oregano',
        description:'Sus propiedades medicinales (alto contenido en minerales y ácidos) ayudan a disminuir dolores de cabeza, estómago, garganta, articulaciones y muelas. Contribuyen igualmente a prevenir problemas cardíacos, digestivos y de estreñimiento. Asimismo, alivian la tos, asma y resfriados.',
        brand: 'Artemis',
        presentation: '300gr.',
        price: 32,
        image: ['/img/oregano.jpg', '/img/oregano2.png', '/img/oregano3.png', '/img/oregano4.png'],
        category: 'general',
        stock: 9
    },
    {
        id: '10',
        name: 'Tilo',
        description: 'Nativo de Europa y Asia, el árbol de tilo se ha adaptado con éxito a las regiones del noreste de América del Norte. Desde los antiguos bosques europeos hasta las distantes costas continentales, el tilo ha proporcionado sombra y belleza durante siglos. Tanto la madera como las hojas y la flor de tilo se han usado con fines medicinales desde la Edad Media.',
        brand: 'Yogi Tea',
        presentation: '300gr.',
        price: 40,
        image: ['/img/tilo.webp', '/img/tilo2.png', '/img/tilo3.png', '/img/tilo4.png'],
        category: 'nervioso',
        stock: 12
    },
    {
        id: '11',
        name: 'Té matcha',
        description: 'Los componentes del té matcha aportan varios beneficios al organismo: Suministra energía evitando el nerviosismo. Puede reducir la ansiedad y el estrés. Mejora el estado de la piel, las uñas y los tejidos',
        brand: 'Yogi Tea',
        presentation: '300gr.',
        price: 25,
        image: ['/img/matcha.jpg', '/img/matcha2.png', '/img/matcha3.png', '/img/matcha4.png'],
        category: 'nervioso',
        stock: 14
    },
    {
        id: '12',
        name: 'Té verde',
        description:'Previene el envejecimiento y fortalece el sistema de defensas del ser humano.- Contribuye a regular el proceso de digestión y regula los niveles de colesterol. Evita la formación coágulos en la sangre.',
        brand: 'Yogi Tea',
        presentation: '300gr.',
        price: 23,
        image: ['/img/te_verde.webp', '/img/te_verde2.png', '/img/te_verde3.png', '/img/te_verde4.png'],
        category: 'inmune',
        stock: 5
    },
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export { getProducts }