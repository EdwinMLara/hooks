import React,{useCallback} from "react";
import ShippingForm from "./ShippingForm";

type ThemeType = 'dark' | 'light';

interface ProductPagePropType {
    productId:number,
    referrerId: string
    theme: ThemeType  
}

const ProductPage:React.FC<ProductPagePropType> = ({productId,referrerId,theme}) => {
    const handleSubmit = useCallback((orderDetails : any) => {
        post('/product/' + productId + '/buy', {
            referrerId,
            orderDetails,
        });
    },[productId,referrerId])
    return (
        <div style={{ padding: "20px", backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <ShippingForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default ProductPage;

const post = (url:string,data:{}) => {
    //SIMULA UNA PETICION A SERVIDOR
    console.log(`POST ${url}`);
    console.log(data);
}
