'use server'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export const getMenuCount=async(query:string): Promise<{count: number}>=>{
    const response = await fetch(`${BASE_URL}/menu/count?${query}`);
    const text = await response.text();

    console.log("Menu Count Status:", response.status);
    console.log("Menu Count Response:", text);

    if (!response.ok) {
        throw new Error("Failed to get menu count");
    }

    return JSON.parse(text);     
} 