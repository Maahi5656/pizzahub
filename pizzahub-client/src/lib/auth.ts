import { betterAuth } from "better-auth";
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db("pizzahub")

export const auth = betterAuth({
    database: mongodbAdapter(db,{
        client
    }),
    emailAndPassword: {
        enabled: true
    },
    plugins:[
        jwt(),
    ],
    user:{
        additionalFields:{
            role: {
                type: ["customer", "vendor", "admin"],
                input: true,
                defaultValue: "customer"
            },
            isBlocked: {
                type: "boolean",
                input: false,
                defaultValue: false
            },
            subscriptionPlan: {
                type: ["free", "premium"],
                input: false,
                defaultValue: "free"
            }
        },
    },

});