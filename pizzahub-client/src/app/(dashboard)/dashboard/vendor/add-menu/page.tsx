"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { 
    ArrowLeft, 
    ArrowRight, 
    CalendarDays, 
    Check, 
    MapPin, 
    Star, 
    Pencil,
    PackageCheck, 
    Trash2 
} from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast"

import { getMenuCount } from "@/lib/api/menu";
import { getUserPremiumUserId } from "@/lib/api/user";

import MenuTable from "@/components/menu/MenuTable";

const AddMenuPage = () => {

    const items = [
        { label: "Select a category", value: null },
        { label: "Classic Pizza", value: "Classic Pizza" },
        { label: "Vegetarian", value: "Vegetarian" },
        { label: "Meat Lovers", value: "Meat Lovers" },
        { label: "Gourmet", value: "Gourmet" },
        { label: "Sides & Appetizers", value: "Sides & Appetizers" },
        { label: "Beverages & Desserts", value: "Beverages & Desserts" }
    ];

    const [category, setCategory] = useState<string | null>("");
    const { data:session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    // console.log(session);

    const handleSubmitForm=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        if(!user){
            router.push('/signin');
            return;
        }
        
        if(user.role !== 'vendor'){
            toast.add({
                type: "error",
                description: "Only vendors can add menu items",
                priority: "high"
            });
            return;
        }

        try
        {
            // is premium user
            const premiumResult = await getUserPremiumUserId(user.id);

            const countMenu = await getMenuCount(`vendorId=${user.id}`);

            if(premiumResult.subscriptionPlan !== "premium" && countMenu.count>3){
                toast.add({
                    type: "error",
                    description: "You have reached your free menu limit. Please subscribe to add more menu items.",
                    priority: "high"
                });
                router.push('/dashboard/vendor/subscription');
                return;
            }

            const image = form.get("image"); 
            const name = form.get("menuItem");
            const description = form.get("menuItemDesc");
            const price = form.get("menuItemPrice");
            // const category = form.get("menuCategory");

            if(!image){
                toast.add({
                    type: "error",
                    description: "Please select a menu image",
                    priority: "high"
                });
                return;            
            }

            if (!category) {
                toast.add({
                    type: "error",
                    description: "Please select a category",
                    priority: "high"
                });
                return;
            }

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
                price: price,
                category: category,
                status: "pending",
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
        
            setCategory("");

            router.refresh();
            window.location.reload();

            toast.add({
                type: "success",
                description: "New Menu Item Added Successfully!",
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
                <section className="mt-6 max-w-3xl">
                    <div className="w-full bg-white max-w-md shadow-sm rounded-2xl p-5">
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
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Price</FieldLabel>
                                            <Input id="menu-item-price" name="menuItemPrice" placeholder="Enter Your Price..." required />
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Category</FieldLabel>
                                            <Select value={category} onValueChange={setCategory} name="menuCategory" items={items}>
                                              <SelectTrigger className="w-full">
                                                <SelectValue />
                                              </SelectTrigger>
                                              <SelectContent>
                                                <SelectGroup>
                                                  <SelectLabel>--Category--</SelectLabel>
                                                  {items.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                      {item.label}
                                                    </SelectItem>
                                                  ))}
                                                </SelectGroup>
                                              </SelectContent>
                                            </Select>
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Description</FieldLabel>
                                            <Input id="menu-item-description" name="menuItemDesc" placeholder="Enter Your Menu Description..." required />
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