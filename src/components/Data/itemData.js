
export const data = [
    {
        id: 0,
        categoria: "Viaje",
        nombre: "Viajes a Amsterdam",
        precio: 2900,
        stock: 10,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1660172157/Amsterdam_heathf.jpg"

    },
    {
        id: 1,
        categoria: "Viaje",
        nombre: "Viajes a Roma",
        precio: 1800,
        stock: 11,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1660172157/coliseo-roma_2924b6ae_1280x720_mptsla.jpg",

    },
    {
        id: 2,
        categoria: "Viaje",
        nombre: "Viajes a Praga",
        precio: 5800,
        stock: 18,
        imagen: "https://res.cloudinary.com/djaugyqlt/image/upload/v1660172156/Praga_lwjzwc.jpg",

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
