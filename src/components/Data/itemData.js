
export const data = [
    {
        id: 0,
        categoria: "Europa",
        nombre: "Viajes a Amsterdam",
        precio: 2900,
        stock: 10,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1660172157/Amsterdam_heathf.jpg"

    },
    {
        id: 1,
        categoria: "Europa",
        nombre: "Viajes a Roma",
        precio: 1800,
        stock: 11,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1660172157/coliseo-roma_2924b6ae_1280x720_mptsla.jpg",

    },
    {
        id: 2,
        categoria: "Europa",
        nombre: "Viajes a Praga",
        precio: 5800,
        stock: 18,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1660172156/Praga_lwjzwc.jpg",

    },
    {
        id: 3,
        categoria: "America",
        nombre: "Viajes a Nueva York",
        precio: 3200,
        stock: 15,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1661185668/imprescindibles-nueva-york_ka8omg.jpg",

    },
    {
        id: 4,
        categoria: "Asia",
        nombre: "Viajes a Japon",
        precio: 3500,
        stock: 5,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1661185645/Japon-viajes-descuentos_nk9da6.jpg",

    },
    {
        id: 5,
        categoria: "Africa",
        nombre: "Viajes a Marruecos",
        precio: 3000,
        stock: 10,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1661185683/Visitar-Marruecos-y-su-costa_qr3o5n.jpg",

    },
    {
        id: 6,
        categoria: "Oceania",
        nombre: "Viajes a Australia",
        precio: 4000,
        stock: 3,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1661185686/requisitos-australia-covid_ojnzqi.jpg",

    }
    
]

export const getFetch = new Promise((res,rej)=>{
    let condition=true
    if(condition){
        setTimeout(()=>{
            res(data)
        },2000)
    }else{
        rej(console.log("no hay datos"))
    }
});

export const getProductsByCategory=(categoryId)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(data.filter(prod=>prod.cat===categoryId))
        },500)
    })
} 



export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find(prod => prod.id == id))
        }, 500)
    })
}
