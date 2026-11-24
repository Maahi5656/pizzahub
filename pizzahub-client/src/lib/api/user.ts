const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"


export const getUserPremiumUserId=async(userId:string)=>{
    const response = await fetch(`${BASE_URL}/user/${userId}/subscription`);

    return response.json();
}