export type MenuCategory = "Classic Pizza" | "Vegetarian" | "Meat Lovers" | "Gourmet" | "Sides & Appetizers" | "Beverages & Desserts"
export type MenuStatus = "pending" | "approved" | "rejected" | "inactive"

export interface IMenu{
    _id?: string,
    name: string,
    category: MenuCategory,
    description: string,
    price: number,
    image: string,
    status:  MenuStatus,
    createdAt?: string,
    userId: string,
}