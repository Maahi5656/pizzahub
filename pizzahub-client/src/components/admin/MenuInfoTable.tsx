"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

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

import { IUser } from "@/lib/types/users";
import { IMenu } from "@/lib/types/menu";

const MenuInfoTable = () => {

    const [menu, setMenu] = useState<IMenu[]>([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const getMenuItems=async()=>{

            try{
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`);

                if(!response.ok){
                    throw new Error("Failed to fetch menu items");
                }

                const result:IMenu[] = await response.json();

                console.log(result);

                setMenu(result);

            }catch(error){
                console.log(error);
            }
        }

        getMenuItems();

    }, []);


    return (
        <div>
            <Table className="bg-white w-full shadow-sm rounded my-5 w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Image</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Price</TableHead>
                        <TableHead className="text-center">Category</TableHead>
                        <TableHead className="text-center">Business Name</TableHead>
                        <TableHead className="text-center">Vendor</TableHead>   
                        <TableHead className="text-center">Status</TableHead> 
                        <TableHead className="text-center">Action</TableHead>                     
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {menu.length > 0 ? (
                        menu.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell className="font-medium text-center">
                                    <Image src={ item.image } alt="image" width={70} height={70} />
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    { item.name }
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    { item.price }
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    { item.category }
                                </TableCell>
                                 <TableCell className="font-medium text-center">

                                 </TableCell>
                                <TableCell className="font-medium text-center">
                                    { item.userId }
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    { item.status }
                                </TableCell>
                                <TableCell className="text-center space-x-2">
                                    {
                                        item.status === "pending" ? (
                                            <>
                                                <button className="font-semibold text-white bg-red-600 py-1 px-1.5 rounded-2xl cursor-pointer">Reject</button>
                                                <button className="font-semibold text-white bg-green-600 py-1 px-1.5 rounded-2xl cursor-pointer">Accept</button>
                                            </>
                                        ) : (
                                            <button className="font-semibold text-white bg-amber-600 py-1 px-1.5 rounded-2xl cursor-pointer">Block</button>
                                        )
                                    }
                                    
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-6">
                                No Users Found
                            </TableCell>
                        </TableRow>
                    )} 
                </TableBody>
            </Table>            
        </div>
    );
};

export default MenuInfoTable;