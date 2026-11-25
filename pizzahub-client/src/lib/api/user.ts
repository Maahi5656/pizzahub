const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"


export const getUserPremiumUserId=async(userId:string)=>{
    const response = await fetch(`${BASE_URL}/user/${userId}/subscription`);
    const text = await response.text();

    console.log("Subscription API Status:", response.status);
    console.log("Subscription API Response:", text);

    if (!response.ok) {
        throw new Error(`Subscription API failed: ${text}`);
    }
    
    try {
        return JSON.parse(text);
    }catch {
        throw new Error("Subscription API did not return valid JSON: " + text);
    }
    
};  