export interface Categories{
    categories_list :Categ[]
    product_list:{products:Product[],count:number}
    heading:string
}
export interface Categ{
    category_id:string
    category_name:string
    category_image:string
}
export interface Product{
name:string
weight:number
id:number
price:number
final_price:number
is_in_stock:boolean 
weight_unit:string
image_urls:{x520:string,x120:string}
}