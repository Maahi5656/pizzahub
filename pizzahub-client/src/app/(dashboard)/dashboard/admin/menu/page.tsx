

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

import MenuInfoTable from "@/components/admin/MenuInfoTable";

const MenuDetailsPage = () => {

    return (
        <div className="w-full px-2.5">
            <MenuInfoTable />
        </div>
    );
};

export default MenuDetailsPage;