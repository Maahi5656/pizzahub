"use client"

import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast"

import MenuTable from "@/components/menu/MenuTable";

const MenuPage = () => {

    const { data:session } = authClient.useSession();
    const user = session?.user;

    return (
        <main className="px-4 sm:px-6 pb-10 w-full">
            <MenuTable userId={user?.id as string} />
        </main>
    );
};

export default MenuPage;