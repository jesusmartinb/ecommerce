const products = [
    {
        id: '1',
        name: 'Hierbabuena',
        description: 'La hierbabuena es muy efectiva en los tratamientos de los dolores menstruales y para tratar problemas nerviosos, ya que es relajante.',
        brand: 'Soria Natural',
        presentation: '400gr.',
        price: 10,
        image: '/img/hierbabuena.jpg',
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
        image: '/img/lavanda.jpg',
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
        image: '/img/manzanilla.png',
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
        image: '/img/tomillo.jpg',
        category: 'respiratorio',
        stock: 10
    },
    {
        id: '5',
        name: 'Estragón',
        description:'Es una planta muy nutritiva que más allá de dar sabor a las comidas, cuida de nuestro organismo. Sobresale por sus propiedades digestivas, especialmente tras ingestas pesadas, al tiempo que regula el tránsito intestinal gracias a su contenido en fibra.',
        brand: 'Josenea',
        presentation: '300gr.',
        price: 45,
        image: '/img/estragon.webp',
        category: 'digestivo',
        stock: 4
    },
    {
        id: '6',
        name: 'Albahaca',
        description:'La albahaca es muy rica en calcio, básico para reforzar huesos y dientes, y potasio, que regula el contenido de agua de las células y su movimiento, además de moderar el nervioso y muscular e intervenir en la construcción de proteínas.',
        brand: 'Artemis',
        presentation: '300gr.',
        price: 8,
        image: '/img/albahaca.jpg',
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
        image: '/img/curcuma.webp',
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
        image: '/img/jengibre.jpg',
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
        image: '/img/oregano.jpg',
        category: 'general',
        stock: 9
    },
    {
        id: '10',
        name: 'Té kukicha',
        description: 'El té kukicha es uno de los preferidos por los japoneses para acompañar el sushi. Al contener los tallos y ramitas menos teína que las hojas, el té kukicha es menos estimulante que otros tés verdes, esto lo hace una gran opción como té para tomar antes de dormir o para personas mayores.',
        brand: 'Yogi Tea',
        presentation: '300gr.',
        price: 40,
        image: '/img/kukicha2.jpg',
        category: 'inmune',
        stock: 12
    },
    {
        id: '11',
        name: 'Té matcha',
        description: 'Los componentes del té matcha aportan varios beneficios al organismo: Suministra energía evitando el nerviosismo. Puede reducir la ansiedad y el estrés. Mejora el estado de la piel, las uñas y los tejidos',
        brand: 'Yogi Tea',
        presentation: '300gr.',
        price: 25,
        image: '/img/matcha.jpg',
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
        image: '/img/te_verde.webp',
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