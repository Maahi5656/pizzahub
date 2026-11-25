"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast"
import { IUser } from "@/lib/types/users";
import { UserRole } from "@/lib/types/users";
import { Subscription } from "@/lib/types/subscription";

const SignUp = () => { 
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState<UserRole>("customer");
    const [subscriptionPlan, setSubscriptionPlan] = useState<Subscription>("free");
    // const isBlocked = false;
    
    const validEmail=(email:string)=>{
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
        return emailRegex.test(email); 
    }

    const handleEmailSignUp=async(e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();

        if(!name){
          toast.add({
            type: "error",
            description: "Username is required!",
            priority: "high"
          })
          return;
        }   

        if(!validEmail(email)){
          toast.add({
            type: "error",
            description: "Email Is Invalid. Please Try Again",
            priority: "high"
          })
          return;
        }

        if(!password || password.length <=8){
          toast.add({
            type: "error",
            description: "Password is required and must be greater than 8",
            priority: "high"
          })
          return;
        }

        if(!confirmPassword){
          toast.add({ 
            type: "error",
            description: "Confirm Password Is Required",
            priority: "high"
          })
          return;
        }

        if(password !== confirmPassword){
          toast.add({
            type: "error",
            description: "Password and Password Confirmation not matching",
            priority: "high"
          })
          return;
        }

        // const formData = new FormData(e.target);
        // const user = Object.fromEntries(formData.entries()) as {name:string, email:string, password:string, role: UserRole};
        setSubscriptionPlan("free"); 
        
        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            role,
            subscriptionPlan
        });

        if(data){
          // console.log(data);
          toast.add({
              type: "success",
              description: "You Have Registered Successfully",
              priority: "high"
          })

          redirect('/');
        }
        if(error){
          console.log(error);
          toast.add({
              type: "error",
              description: "error",
              priority: "high"
          })
        }
    
    } 
    
    return (
        <section className="relative flex justify-center items-center py-6 sm:py-8">
            <main className="w-full max-w-md bg-white/90 rounded-3xl shadow-xl border p-6 sm:p-8">
                <h2 className="block text-center text-3xl font-extrabold text-brand">🍕 PizzaHub</h2>
                <h1 className="text-2xl font-bold text-center mt-1 mb-1.5">Create Your Account</h1>
                <p className="text-center text-sm text-gray-500">Join PizzaHub today!</p>
                <form id="f" onSubmit={handleEmailSignUp} className="mt-6 space-y-4">
                    <div className="relative">
                        <span className="absolute left-4 top-3">👤</span>
                        <input placeholder="Full Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" required/>
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">✉️</span>
                        <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" required/>
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">🔒</span>
                        <input id="p1" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" required/>
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">🔑</span>
                        <input id="p2" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" required/>
                    </div>
                    <div>
                        <input type="hidden" name="subscription" value={subscriptionPlan} />
                    </div>
                    <p id="err" className="hidden text-sm text-brand">Passwords dont match. Re-enter them and try again.</p>
                    <fieldset className="text-sm">
                        <legend className="font-medium mb-1">I am a:</legend>
                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="role" value="customer" checked={role==="customer"} onChange={(e)=>setRole(e.target.value as UserRole)} /> Customer
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="role" value="vendor" checked={role === "vendor"} onChange={(e) => setRole(e.target.value as UserRole)} /> Vendor
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="role" value="admin" checked={role === "admin"} onChange={(e) => setRole(e.target.value as UserRole)} /> Admin
                            </label>
                        </div>
                    </fieldset>
                    <button className="w-full bg-[#991B1B] hover:bg-brand-dark text-white font-semibold rounded-xl py-3 cursor-pointer">Sign Up</button>
                </form>
                <p className="text-center text-sm mt-5">Already have an account? <Link href="/signin" className="text-brand font-semibold">Sign In</Link></p>
            </main>
        </section>
    );
};

export default SignUp;