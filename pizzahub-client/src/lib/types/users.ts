import { Subscription } from "./subscription";

export type UserRole = "customer" | "vendor" | "admin";

export interface IUser{
    _id?:string,
    name: string,
    email: string,
    password: string,
    role: UserRole,
    profileImage: string,
    isBlocked: boolean,
    businessName?: string,
    subscriptionPlan: Subscription,
    subscriptionExpiresAt?: string
}