"use client"

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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectGroup, SelectLabel, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Field, FieldLabel, FieldGroup, FieldDescription } from "@/components/ui/field"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar"
import { ChevronDownIcon } from "lucide-react"
import { format } from "date-fns"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast"

import { IMenu } from "@/lib/types/menu";

const items = [
    { label: "Select a category", value: null },
    { label: "Classic Pizza", value: "Classic Pizza" },
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Meat Lovers", value: "Meat Lovers" },
    { label: "Gourmet", value: "Gourmet" },
    { label: "Sides & Appetizers", value: "Sides & Appetizers" },
    { label: "Beverages & Desserts", value: "Beverages & Desserts" }
];

const EditMenuItemDialog = ({menuItem}:{ menuItem:IMenu }) => {

    const router = useRouter();
    const [form, setForm] = useState({
        itemName: menuItem.name,
        images: menuItem.image,
        price: menuItem.price,
        description: menuItem.description,
        category: menuItem.category,
    });

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [openModal, setOpenModal] = useState(false);

    const update=(field: keyof typeof form, value: string | null)=>{
        setForm((current)=>({
            ...current,
            [field]:value 
        }));
    } 

    const handleImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];

        if(file){
            setSelectedImage(file);
        }
    }

    // upload image to ImgBB
    const uploadImage = async():Promise<string>=>{
        if (!selectedImage) {
            return form.images;
        }
        const formData = new FormData();
        formData.append("image", selectedImage);
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        if (!response.ok || !result.success) {
            throw new Error(result.error?.message || "Image upload failed");
        }
        return result.data.url;
    }
    

    const updateMenuItem=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try{

            const imageUrl = await uploadImage();

            const updateData = {
                ...form,
                images: imageUrl
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu/${menuItem._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateData)
            });

            const result = await response.json();
            console.log(result);

            if (!response.ok) {
                throw new Error(
                    result?.message || `Update failed: ${response.status}`
                );
            }    
            toast.add({
                type: "success",
                description: result?.message,
                priority: "high"
            })

            setOpenModal(false);
            // Refresh the server-rendered destination details.
            router.refresh();

        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger>
                    <Button className="text-[18px] font-semibold bg-blue-600 text-white py-2 px-4 mx-1.5 cursor-pointer rounded" variant="outline">
                        <Pencil />
                        Edit
                    </Button>
                </DialogTrigger>
                <DialogContent className={'min-w-xl'}>
                    <DialogHeader>
                        <DialogTitle>Edit Menu Item</DialogTitle>
                        {/* <DialogDescription></DialogDescription> */}
                    </DialogHeader>        
                    <form onSubmit={updateMenuItem} className='rounded-sm border border-border bg-white p-4 shadow-sm'>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="picture">Image</FieldLabel>
                                <Input 
                                    id="picture" 
                                    type="file" 
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    name="image" 
                                />
                                <FieldDescription>Select a picture to upload.</FieldDescription>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Name</FieldLabel>
                                <Input 
                                    id="menu-item" 
                                    type="text"
                                    value={form.itemName}
                                    onChange={(e)=>update("itemName", e.target.value)}
                                    placeholder="Update Your Menu Name..." 
                                    required 
                                />
                            </Field>                        
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Price</FieldLabel>
                                <Input 
                                    id="menu-item-price" 
                                    type="price"
                                    min="0"
                                    value={form.price}
                                    onChange={(e)=>update("price", e.target.value)}
                                    name="menuItemPrice" placeholder="Update Your Price..." 
                                    required 
                                />
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Category</FieldLabel>
                                <Select 
                                    name="menuCategory" 
                                    items={items}
                                    value={form.category}
                                    onValueChange={(value)=>update("category", value)}
                                >
                                  <SelectTrigger className="w-full max-w-48">
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
                                <Textarea
                                    id="description"
                                    value={form.description}
                                    onChange={(e) => update("description", e.target.value)}
                                    placeholder="Menu item description"
                                    required
                                />
                            </Field>
                        </FieldGroup>
                        <DialogFooter className="mt-5 flex justify-end gap-3">
                            <DialogClose render={<Button variant="outline">Cancel</Button>} />
                            <Button type="submit" className="bg-[#00A8E8] text-white hover:bg-[#0095d1]">
                              <PackageCheck />
                              Update Menu Item
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>    
            </Dialog>             
        </>
    );
};

export default EditMenuItemDialog;