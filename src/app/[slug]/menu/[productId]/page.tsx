import { notFound } from "next/navigation";

import { getProductById } from "@/data/getProductById";

import ProductHeader from "./components/header";

interface ProductPageProps {
    params: Promise<{ slug: string, productId: string }>;
}


const ProductPage = async ({params}:ProductPageProps ) => {
    const {productId} = await params
    const product = await getProductById(productId);
    if(!product) {
        return notFound()
    }
   
    return (  
        <div >
         <ProductHeader product={product}/>
        </div>
    );
}
 
export default ProductPage;