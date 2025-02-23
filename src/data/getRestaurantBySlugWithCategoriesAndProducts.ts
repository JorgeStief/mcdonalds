import { db } from "@/lib/primas";



export const getRestaurantBySlugWithCategoriesAndProducts = async (slug: string ) => {
    return await db.restaurant.findUnique({ where: { slug }, include: {
        menuCategories: {
            include: {
                products: true
            }
        }
    } });
}