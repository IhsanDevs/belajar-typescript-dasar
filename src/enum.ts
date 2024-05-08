export enum CustomerType {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM",
    PLATINUM = "PLATINUM"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}

const customer: Customer = {
    id: 1,
    name: "Ihsan Devs",
    type: CustomerType.BASIC
}

console.log(customer)

console.log(1 + 1)