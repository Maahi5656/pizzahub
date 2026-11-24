'use server'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getMenuCount=async(query=""): Promise<{count: number}>=>{
    const response = await fetch(`${BASE_URL}/menu/count?${query}`);

    if (!response.ok) {
        throw new Error("Failed to get menu count");
    }

    return response.json()      
}