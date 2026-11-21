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
import { toast } from "@/components/ui/toast"
import { a } from "shiki/dist/langs-bundle-full-C2VQ9nxh.mjs";


const AddMenuPage = () => {

    const { data:session } = authClient.useSession();
    const user = session?.user;

    const handleSubmitForm=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const form = new FormData();
        const image = form.get("image");
        const name = form.get("menuItem");
        const description = form.get("menuItemDesc");

        if(!image){
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

            const menuImage = imageResult.data.url;
            const menuData = {
                image: menuImage,
                name: name,
                description: description,
                userId: user?.id
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu/`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(menuData)                
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Business update failed");
            } 

            toast.add({
                type: "success",
                description: "New Menu Item Added Successfully!",
                priority: "high"
            });

        }catch(error){
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
                                    <FieldLegend>Enter Your Menu Item</FieldLegend>
                                    <br />
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="picture">Image</FieldLabel>
                                            <Input id="picture" type="file" name="image" required/>
                                            <FieldDescription>Select a picture to upload.</FieldDescription>
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Name</FieldLabel>
                                            <Input id="menu-item" name="menuItem" placeholder="Enter Your Shop Name..." required />
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Description</FieldLabel>
                                            <Input id="menu-item-description" name="menuItemDesc" placeholder="Enter Your Shop Address..." required />
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

export default AddMenuPage;