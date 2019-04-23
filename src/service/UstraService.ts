import axios, { AxiosPromise } from 'axios'
interface Categories{
    categories_list :Categ[]
    product_list:{products:Product[],count:number}
    heading:string
}
interface Categ{
    category_id:string
    category_name:string
    category_image:string
}
interface Product{
    name:string
    weight:number
    id:number
    price:number
    final_price:number
    is_in_stock:boolean 
    weight_unit:string
    image_urls:{x520:string,x120:string}
}
interface Products{
    products:Product[],
    count:number
}
export class UstraService {
  static getProduct=( id:any):AxiosPromise<Products>=> {
   
    let data:AxiosPromise<Products>=axios.get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${id.payload}`)
    return data
  }

    static  getCategories= ():AxiosPromise<Categories>=>{

            let data:AxiosPromise<Categories>=axios.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob")
            return data;

    }
 

}