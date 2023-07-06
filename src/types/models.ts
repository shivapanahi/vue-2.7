export interface Store{
    name:string,
    id:number
}
export interface Product{
    name:string,
    price:number,
    id:number,
    qty:number
}
export interface Cart{
    items:Product[],
    totalPrice:number,
}
export interface Auth {
    userName: string,
    password: string
  }
