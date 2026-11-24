import UserInfoTable from "@/components/admin/UserInfoTable";

const UserInformationPage = () => {

    return (
        <div>
            <main className="px-4 sm:px-6 pb-10 w-full">
                <h2 className="text-2xl font-bold">Customer Table</h2>
                <UserInfoTable role="customer" />
            </main>
            <main className="px-4 sm:px-6 pb-10 w-full">
                <h2 className="text-2xl font-bold">Vendor Table</h2>
                <UserInfoTable role="vendor" />
            </main>
        </div>
    );
};

export default UserInformationPage;