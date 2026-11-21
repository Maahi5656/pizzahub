"use client"

import Link from "next/link"
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

import { Button } from "./ui/button";

import { UserRole } from "@/lib/types/users";

interface UserMenu{
    id: string,
    name: string,
    url: string
}

import { Plus, 
  PlusCircleIcon,
  Bookmark,
  Briefcase,
  Building2,
  FileText,
  LayoutDashboard,
  Users,
  Wallet,
  Settings, 
  type LucideIcon,
  PlusCircle,
} from "lucide-react"


const menuItemsByRole: Record<UserRole, UserMenu[]> = {
    customer: [
        {id: "dashboard", name: "Overview", url: "/dashboard/customer" },
        {id: "orders", name: "My Orders", url: "/dashboard/customer/orders"},
        {id: "settings", name: "Profile Settings", url: "/dashboard/customer/settings"},
    ],

    vendor: [
        {id: "dashboard", name: "Overview", url: "/dashboard/vendor" },
        {id: "business-profile", name: "Business Info", url: "/dashboard/vendor/business-info"},
        {id: "add-menu-items", name: "Add Menu Items", url: "/dashboard/vendor/add-menu"},
        {id: "orders", name: "Customer Orders", url: "/dashboard/vendor/orders"},
        {id: "subscription", name: "Subscription", url: "/dashboard/vendor/subscription"},
        {id: "settings", name: "Profile Settings", url: "/dashboard/vendor/settings"},
    ],

    admin: [
        {id: "dashboard", name: "Overview", url: "/dashboard/admin" },
        {id: "users", name: "Manage Users", url: "/dashboard/admin/users"},
        {id: "menu", name: "Manage Menu Items", url: "/dashboard/admin/menu"},
        {id: "transactions", name: "Transactions", url: "/dashboard/admin/transactions"},
        {id: "settings", name: "Profile Settings", url: "/dashboard/customer/settings"},
    ]
};

const Sidebar = () => {

    
    const { data:session, isPending } = authClient.useSession();

    if (isPending) {
        return <p>Loading sidebar...</p>;
    }

    if (!session?.user) {
        return null;
    }

    const role = session.user.role;

    if (!role || !(role in menuItemsByRole)) {
        return null;
    }

    const signOut=async()=>{
        await authClient.signOut();
        redirect('/')
    }

    return (
        <>
            <aside id="sb" className="fixed lg:static inset-y-0 left-0 z-50 w-64 shrink-0 bg-gray-900 text-gray-200 p-5 flex flex-col -translate-x-full lg:translate-x-0 transition-transform">
                <Link href="#" className="text-xl font-extrabold text-white mb-6">🍕 PizzaHub</Link>
                <nav id="side" className="space-y-1 text-sm flex-1">
                    {
                        menuItemsByRole[role].map((item)=>(
                            <Link key={item.id} href={item.url} className="flex gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800"><span>📋</span>{ item.name }</Link>
                        ))
                    }
                </nav>
                <Button onClick={signOut} className="text-sm px-3 py-2 hover:text-white">↩ Logout</Button>
            </aside>   
        </>
    );
};

export default Sidebar;