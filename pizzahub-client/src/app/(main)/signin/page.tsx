"use client"

import Link from "next/link";
import { redirect } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast"

const SignIn = () => {

    const handleLoginForm=async(e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {email:string, password:string};

        const { data, error } = await authClient.signIn.email({
            ...user
        });

        if(data){
            redirect('/')
        }

        if(error){
            toast.add({
              type: "error",
              description: "Login Unsuccessful! Please Check Your Email & Password",
              priority: "high"
            })            
        }
    }

    const handleGoogleSignIn=async()=>{
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    };

    return (
        <section className="relative flex justify-center items-center py-6 sm:py-8">
            <main className="w-full max-w-md bg-white/90 rounded-3xl shadow-xl border p-6 sm:p-8">
                <h2 className="block text-center text-3xl font-extrabold text-brand">🍕 PizzaHub</h2>
                <h1 className="text-2xl font-bold text-center mt-1 mb-1.5">Welcome Back!</h1>
                <p className="text-center text-sm text-gray-500">Sign in to your account</p>
                <form onSubmit={handleLoginForm} className="mt-6 space-y-4">
                    <div className="relative">
                        <span className="absolute left-4 top-3">✉️</span>
                        <input type="email" name="email" placeholder="Email Address" className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" required/>
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">🔒</span>
                        <input type="password" name="password" placeholder="Password" className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" required/>
                    </div>
                    {/* <div className="flex justify-between text-sm">
                        <label className="flex gap-2 items-center">
                        <input type="checkbox" /> Remember me</label>
                        <a href="#" className="text-brand">Forgot password?</a>
                    </div> */}
                    <button type="submit" className="w-full bg-[#991B1B] hover:bg-brand-dark text-white font-semibold rounded-xl py-3">Sign In</button>
                </form>
                <div className="flex items-center gap-3 my-5 text-xs text-gray-400">
                    <hr className="flex-1" /><span>OR</span><hr className="flex-1" />
                </div>
                <div className="space-y-3">
                    <button onClick={handleGoogleSignIn} className="w-full border-2 rounded-xl py-2.5 text-sm font-medium cursor-pointer">🇬 Continue with Google</button>
                    {/* <button className="w-full border rounded-xl py-2.5 text-sm font-medium">🐙 Continue with GitHub</button> */}
                </div>
                <p className="text-center text-sm mt-5">Dont have an account? <Link href="/signup" className="text-brand font-semibold">Sign Up</Link></p>
            </main>
        </section>

    );
};

export default SignIn;