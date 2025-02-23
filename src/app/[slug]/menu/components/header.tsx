'use client'
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'coverImageUrl' | 'name'>
}

const RestaurantHeader = ({restaurant}:RestaurantHeaderProps) => {
    const router = useRouter()

    const handleBackClick = () => {
        return router.back()
    }
    return ( 
        <div className="relative h-[250px] w-full">
        <Button variant='secondary' size="icon" className='absolute top-4 left-4 z-50 rounded-full' onClick={handleBackClick}>
            <ChevronLeftIcon size={24}/>
        </Button>
        <Image src={restaurant.coverImageUrl} alt={restaurant.name} fill className="object-cover"/>
        <Button variant='secondary' size="icon" className='absolute top-4 right-4 z-50 rounded-full'>
            <ScrollTextIcon size={24}/>
        </Button>
       </div>
     );
}
 
export default RestaurantHeader;