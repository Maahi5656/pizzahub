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
import { UserRole } from '@/lib/types/users';

interface UserInfoTableProps {
    role: "vendor" | "customer";
}

const UserInfoTable = ({ role }: UserInfoTableProps) => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{

        const getUserData=async()=>{
            try{
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${role}`);

                if(!response.ok){
                    throw new Error("Failed to fetch menu items");
                }

                const result: IUser[] = await response.json();

                setUsers(result);

            }catch(error){
                console.log(error);
            }
        }

        getUserData();

    }, [role]);

    return (
        <div>
            <Table className="bg-white w-full shadow-sm rounded my-5 w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Email</TableHead>
                        <TableHead className="text-center">Role</TableHead>
                        {
                            role === "vendor" ? (
                                <>
                                    <TableHead className="text-center">Business Name</TableHead>
                                    <TableHead className="text-center">Business Logo</TableHead>
                                    <TableHead className="text-center">Business Location</TableHead>                                
                                </>

                            ) : ""
                        }
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader> 
                <TableBody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell className="font-medium text-center">
                                    { user.name }
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    { user.email }
                                </TableCell>
                                <TableCell className="font-medium text-center">
                                    { user.role }
                                </TableCell>
                                {
                                    role === "vendor" ? (
                                        <>
                                            <TableCell className="font-medium text-center">{ user.businessName }</TableCell>
                                            <TableCell className="font-medium text-center">
                                                <Image src={ user.businessLogo as string } alt="logo" width={50} height={50} />
                                                
                                            </TableCell>
                                            <TableCell className="font-medium text-center">{ user.businessLocation }</TableCell>                                
                                        </>

                                    ) : ""                                    
                                }
                                <TableCell>
                                    {
                                        user.isBlocked ? <span className="inline-block text-red-600 bg-[#e7fbe4] py-1 px-1.5 rounded-2xl">Blocked</span> : <span className="inline-block text-green-600 bg-[#e7fbe4] py-1 px-1.5 rounded-2xl">Active</span>
                                    }
                                </TableCell>
                                <TableCell className="text-center space-x-2">
                                    {
                                        !user.isBlocked ? (
                                            <button className="font-semibold text-white bg-red-600 py-1 px-1.5 rounded-2xl cursor-pointer">Block</button>
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

export default UserInfoTable;