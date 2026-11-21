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
    businessLogo?:string,
    businessLocation: string,
    subscriptionPlan: Subscription,
    subscriptionExpiresAt?: string
}  