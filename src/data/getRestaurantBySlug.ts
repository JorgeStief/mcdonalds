import { db } from "@/lib/primas";

export const getRestaurantBySlug = async (slug: string) => {
    return await db.restaurant.findUnique({ where: { slug } });
}