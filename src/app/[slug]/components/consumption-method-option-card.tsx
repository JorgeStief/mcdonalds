import { ConsumptionMethod } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface ConsumptionMethodOptionProps {
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    option: ConsumptionMethod;
    slug: string;
}

const ConsumptionMethodOptionCard = ({imageUrl, imageAlt, buttonText, option, slug}: ConsumptionMethodOptionProps) => {
    return (
        <Card>
            <CardContent className='flex flex-col items-center py-8'>
                <div className='relative h-[80px] w-[80px]'>
                    <Image src={imageUrl} alt={imageAlt} fill className='object-contain'/>
                </div>
            </CardContent>
            <CardFooter className='flex flex-col items-center'>
                <Button asChild variant="secondary" className='rounded-full'>
                    <Link href={`${slug}/menu?consumptionMethod=${option}`}>{buttonText}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
 
export default ConsumptionMethodOptionCard;