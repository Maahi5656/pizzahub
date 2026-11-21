export type OrderStatus = "pending" | "accepted" | "rejected" | "cancelled"

export interface IOrder{
    itemId: string,
    vendorId: string,
    customerId: string,
    deliveryDate: string,
    deliveryAddress: string,
    message?: string,
    status: OrderStatus,
    createdAt: string
}