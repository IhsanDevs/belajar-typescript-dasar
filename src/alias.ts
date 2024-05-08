export type Product = {
    id: number,
    name: string,
    desc: string | boolean,
    price: number,
    categories: Category[]
}


export type Category = {
    name: string,
}

const category: Category = {
    name: "Jacket"
}

console.log(category)