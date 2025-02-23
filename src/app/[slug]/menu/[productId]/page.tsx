import { notFound } from "next/navigation";

import { getProductByIdAndRestaurant } from "@/data/getProductByIdAndRestaurant";

import ProductHeader from "./components/header";
import ProductDetails from "./components/product-details";

interface ProductPageProps {
    params: Promise<{ slug: string, productId: string }>;
}


const ProductPage = async ({params}:ProductPageProps ) => {
    const {slug, productId} = await params
    const product = await getProductByIdAndRestaurant(productId);
    if(!product){
        return notFound()
    }
    if(product.restaurant.slug.toUpperCase() !== slug.toUpperCase()){
        return notFound()
    }
    return (  
        <div className="flex h-full flex-col">
         <ProductHeader product={product}/>
         <ProductDetails product={product} />
        </div>
    );
}
 
export default ProductPage;