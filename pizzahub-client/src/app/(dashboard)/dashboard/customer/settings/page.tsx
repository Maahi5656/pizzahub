"use client"

import { useState, useEffect } from "react";

import { authClient } from "@/lib/auth-client";
import CustomerProfileForm from "@/components/customer/CustomerProfileForm";
import { IUser } from "@/lib/types/users";

const CustomerSettingsPage = () => {

    const { data:session } = authClient.useSession();
    const userId = session?.user.id;

    console.log(session?.user);

    const [user, setUser] = useState<IUser>();

    useEffect(()=>{

        if (!userId) return;

        const fetchUserInfo=async()=>{
          const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/customer/${userId}`) 
        
          if(!response.ok){
            throw new Error("Failed to fetch user items");
          }

          const user: IUser = await response.json();

          setUser(user);
        }

        fetchUserInfo();

    }, [userId])
    
    return (
        <div className="flex-1 min-w-0">
            <header className="flex items-center gap-3 p-4 sm:p-6">
                <button id="open" className="lg:hidden text-2xl" aria-label="Open menu">☰</button>
                <h1 className="text-2xl font-bold">Customer Dashboard</h1>
                <div className="ml-auto w-10 h-10 rounded-full bg-brand text-white grid place-items-center font-bold">V</div>
            </header>
            <main className="px-4 sm:px-6 pb-10">
              {
                user && <CustomerProfileForm user={user} />
              }
            </main>
        </div>            
    );
};

export default CustomerSettingsPage;