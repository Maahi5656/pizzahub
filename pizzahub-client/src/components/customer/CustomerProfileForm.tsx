"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

import { IUser } from "@/lib/types/users";


const CustomerProfileForm = ({user}:{user: IUser}) => {

    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        password: user.password
    });

    const router = useRouter();

    console.log("User", user);

    const update=(field:keyof typeof form, value: string | null)=>{
        setForm((current)=>({
            ...current,
            [field]:value
        }));
    }
 
    const updateUserProfile=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try{
            const { ...formData } = form;

            const updateData = {
                ...formData
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/customer/${user._id}`,{
                method: "PATCH",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData)
            }); 

            const result = await response.json();

            console.log("User", result);

            if (!response.ok) {
                throw new Error(
                    result?.message || `Update failed: ${response.status}`
                );
            }    
            toast.add({
                type: "success",
                description: result?.message,
                priority: "high"
            });

            router.refresh();


        }catch(error){
            console.log(error);
        }
    }

    return (
        <section className="mt-6 bg-white rounded-2xl p-5 shadow-sm max-w-3xl">
            <div className="w-full max-w-md">
                <form onSubmit={updateUserProfile}>
                    <FieldGroup>
                        <FieldSet>
                          <FieldLegend>Edit Profile</FieldLegend>
                          <br />
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Name</FieldLabel>
                              <Input 
                                    id="customer-name" 
                                    value={form.name} 
                                    onChange={(e)=>update("name", e.target.value)}
                                    placeholder="Update Your Full Name..."  
                                />
                            </Field>
                          </FieldGroup>
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Email
                              </FieldLabel>
                              <Input 
                                    id="customer-email" 
                                    value={form.email}
                                    onChange={(e)=>update("email", e.target.value)}
                                    placeholder="Update Your Email..." 
                                />
                            </Field>
                          </FieldGroup>
                          {/* <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                Old Password
                              </FieldLabel>
                              <Input id="customer-old-password" value="" placeholder="Enter Your Old Password" required />
                            </Field>
                          </FieldGroup> */}
                          <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">New Password</FieldLabel>
                                <Input 
                                    id="customer-new-password"
                                    type="password"
                                    value={form.password}
                                    onChange={(e)=>update("password", e.target.value)}
                                    placeholder="Enter Your New Password"
                                />
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                        {/* <FieldSeparator /> */}
                        <Field orientation="horizontal">
                          <Button type="submit">Submit</Button>
                          <Button variant="outline" type="button">
                            Cancel
                          </Button>
                        </Field>
                    </FieldGroup>                            
                </form>
            </div>
        </section>
    );
};

export default CustomerProfileForm;