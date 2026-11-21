export type MenuCategory = "Classic Pizza" | "Vegetarian" | "Meat Lovers" | "Gourmet" | "Sides & Appetizers" | "Beverages & Desserts"
export type MenuStatus = "pending" | "approved" | "rejected" | "inactive"

export interface IMenu{
    itemName: string,
    category: MenuCategory,
    description: string,
    price: number,
    location: string,
    images: string,
    status:  MenuStatus,
    createdAt: string
}