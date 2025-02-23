import { db } from "@/lib/primas";

export const getProductById = async (id: string ) => {
    return await db.product.findFirst({ where: { id } });
}