"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

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

import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast"

import { IMenu } from "@/lib/types/menu";

import EditMenuItemDialog from "../EditMenuItemDialog"
import DeleteMenuItemDialog from "../DeleteMenuItemDialog"

const MenuTable = ({ userId }:{ userId:string }) => {

    const [menuItems, setMenuItems] = useState<IMenu[]>([]);
    
    useEffect(()=>{
       
        const fetchMenuItems=async()=>{
            try{
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu/vendor/${userId}`);

                console.log(response);

                if(!response.ok){
                    throw new Error("Failed to fetch menu items");
                }

                const data: IMenu[] = await response.json();
                
                console.log("Data", data);

                setMenuItems(data);

            }catch(error){
                console.log(error);
            }
        }

        fetchMenuItems();
        
    }, [userId]);

    return (
        <>
            <Table className="bg-white w-full shadow-sm rounded my-5 w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Name</TableHead>
                    <TableHead className="text-center">Image</TableHead>
                    <TableHead className="text-center">Description</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {menuItems.length > 0 ? (
                        menuItems.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell className="font-medium">
                                    {item.name}
                                </TableCell>
                        
                                <TableCell>
                                    <Image
                                        src={item.image}
                                        alt={item.name || "Menu Item Image"}
                                        width={100}
                                        height={100}
                                    />
                                </TableCell>
                        
                                <TableCell>
                                    {item.description}
                                </TableCell>
                        
                                <TableCell>
                                    {item.price}
                                </TableCell>
                        
                                <TableCell className="text-center space-x-2">
                                    <EditMenuItemDialog menuItem={item} />
                                    <DeleteMenuItemDialog id={item._id as string} />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-6">
                                No Items Found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>        
        </>

    );
};

export default MenuTable;