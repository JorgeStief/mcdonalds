import { db } from "@/lib/primas";

export const getProductByIdAndRestaurant = async (id: string ) => {
    return await db.product.findFirst({ where: { id }, include: { restaurant: { select: {
        name: true,
        avatarImageUrl: true,
        slug: true
    }} } });
}