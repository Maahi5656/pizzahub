"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

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

import { authClient } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClients";
import { toast } from "@/components/ui/toast"

const BusinessInfoPage = () => {

    const { data:session } = authClient.useSession();
    const user = session?.user

    console.log(user?.id)

    const handleSubmitForm=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const image = form.get("image");
        const businessName = form.get("shopName");
        const businessLocation = form.get("shopAddress");

        const token = await getTokenFromClient();

        // Validate image
        if (!(image instanceof File) || image.size === 0) {
            toast.add({
                type: "error",
                description: "Please select a business logo",
                priority: "high"
            });
            return;
        }

        try{
            const imageData = new FormData();
            imageData.append("image", image); 

            const imageResponse = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            {
                method: "POST",
                body: imageData
            })

            const imageResult = await imageResponse.json();

            if (!imageResponse.ok || !imageResult.success) {
                throw new Error("Image upload failed");
            }

            const businessLogo = imageResult.data.url;
            const userData = {
                businessName,
                businessLocation,
                businessLogo
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${user?.id}/shop`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Business update failed");
            }        

            toast.add({
                type: "success",
                description: "Business Information Updated Successfully!",
                priority: "high"
            });
        }
        catch(error){
            console.error(error);
            toast.add({
                type: "error",
                description: "Error! Something went wrong!",
                priority: "high"
            });
        }

    }

    return (
        <div className="flex-1 min-w-0">
            <main className="px-4 sm:px-6 pb-10">
                <section className="mt-6 bg-white rounded-2xl p-5 shadow-sm max-w-3xl">
                    <div className="w-full max-w-md">
                        <form onSubmit={handleSubmitForm}>
                            <FieldGroup>
                                <FieldSet>
                                    <FieldLegend>Enter Your Pizza Shop Information</FieldLegend>
                                    <br />
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="picture">Logo</FieldLabel>
                                            <Input id="picture" type="file" name="image" required/>
                                            <FieldDescription>Select a picture to upload.</FieldDescription>
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Name</FieldLabel>
                                            <Input id="shop-name" name="shopName" placeholder="Enter Your Shop Name..." required />
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Address</FieldLabel>
                                            <Input id="shop-address" name="shopAddress" placeholder="Enter Your Shop Address..." required />
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>
                                <Field orientation="horizontal">
                                    <Button type="submit">Submit</Button>
                                    <Button variant="outline" type="button">Cancel</Button>
                                </Field>
                            </FieldGroup>                            
                      </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BusinessInfoPage; 