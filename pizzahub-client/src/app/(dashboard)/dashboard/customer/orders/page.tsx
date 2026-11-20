import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const CustomerOrderPage = () => {
    return (
        <div className="flex-1 min-w-0">
            <header className="flex items-center gap-3 p-4 sm:p-6">
                <button id="open" className="lg:hidden text-2xl" aria-label="Open menu">☰</button>
                <h1 className="text-2xl font-bold">Customer Dashboard</h1>
                <div className="ml-auto w-10 h-10 rounded-full bg-brand text-white grid place-items-center font-bold">V</div>
            </header>
            <main className="px-4 sm:px-6 pb-10">
                <section className="mt-6 bg-white rounded-2xl p-5 shadow-sm max-w-3xl">
                    <Table>
                      {/* <TableCaption>A List Of Your Recent Orders.</TableCaption> */}
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Order Item</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">INV001</TableCell>
                          <TableCell>Paid</TableCell>
                          <TableCell>Credit Card</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                </section>
            </main>
        </div>
    );
};

export default CustomerOrderPage;