import Api from './ApiService'
export default {
    login(data:any) {
        return Api.get('users',{params:data});
    },
    stores(data:any){
        return Api.get('stores',{params:data})
    },
    products(data:any){
        return Api.get('products',data)
    },
    carts(data:any){
        return Api.post('carts',data)
    }
   
}