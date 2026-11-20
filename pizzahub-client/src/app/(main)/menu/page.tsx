import Link from "next/link";

const Menu = () => {
    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Browse Menu</h1>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <input id="q" placeholder="Search pizzas..." className="flex-1 border rounded-xl px-4 py-2.5 bg-white" />
                    <select id="cat" className="border rounded-xl px-4 py-2.5 bg-white">
                        <option value="">All Categories</option>
                        <option>Classic</option>
                        <option>Meat Lovers</option>
                        <option>Vegetarian</option>
                        <option>Specialty</option>
                    </select>
                    <select id="loc" className="border rounded-xl px-4 py-2.5 bg-white">
                        <option value="">All Locations</option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Chittagong</option>
                    </select>
                </div>
                <div id="grid" className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-br from-orange-300 to-red-400 grid place-items-center text-6xl">🍕</div>
                        <div className="p-4 flex flex-col gap-1 flex-1">
                            <h3 className="font-bold">Margherita Pizza</h3>
                            <p className="text-sm text-gray-500">Pizza Palace</p>
                            <p className="text-sm">
                                <span className="text-amber-500">★</span> 4.8 <span className="text-gray-400">(320)</span>
                            </p>
                            <p className="text-xs text-gray-500">📍 Dhaka · Classic</p>
                            <p className="font-extrabold text-lg mt-1">$12.99</p>
                            <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-br from-red-300 to-orange-500 grid place-items-center text-6xl">🍕</div>
                        <div className="p-4 flex flex-col gap-1 flex-1">
                            <h3 className="font-bold">Pepperoni Pizza</h3>
                            <p className="text-sm text-gray-500">The Oven</p>
                            <p className="text-sm"><span className="text-amber-500">★</span> 4.7 <span className="text-gray-400">(285)</span></p>
                            <p className="text-xs text-gray-500">📍 Dhaka · Meat Lovers</p>
                            <p className="font-extrabold text-lg mt-1">$14.99</p>
                            <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-br from-amber-300 to-orange-600 grid place-items-center text-6xl">🍕</div>
                        <div className="p-4 flex flex-col gap-1 flex-1">
                            <h3 className="font-bold">BBQ Chicken Pizza</h3>
                            <p className="text-sm text-gray-500">Slice House</p>
                            <p className="text-sm"><span className="text-amber-500">★</span> 4.6 <span className="text-gray-400">(198)</span></p>
                            <p className="text-xs text-gray-500">📍 Dhaka · Specialty</p>
                            <p className="font-extrabold text-lg mt-1">$15.99</p>
                            <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-br from-lime-300 to-green-500 grid place-items-center text-6xl">🍕</div>
                        <div className="p-4 flex flex-col gap-1 flex-1">
                            <h3 className="font-bold">Veggie Delight</h3>
                            <p className="text-sm text-gray-500">Cheesy Bite</p>
                            <p className="text-sm"><span className="text-amber-500">★</span> 4.5 <span className="text-gray-400">(176)</span></p>
                            <p className="text-xs text-gray-500">📍 Sylhet · Vegetarian</p>
                            <p className="font-extrabold text-lg mt-1">$13.99</p>
                            <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-br from-rose-300 to-red-600 grid place-items-center text-6xl">🍕</div>
                        <div className="p-4 flex flex-col gap-1 flex-1">
                            <h3 className="font-bold">Meat Lovers</h3>
                            <p className="text-sm text-gray-500">Pizza Palace</p>
                            <p className="text-sm"><span className="text-amber-500">★</span> 4.6 <span className="text-gray-400">(142)</span></p>
                            <p className="text-xs text-gray-500">📍 Dhaka · Meat Lovers</p>
                            <p className="font-extrabold text-lg mt-1">$16.99</p>
                            <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                        <div className="h-36 bg-gradient-to-br from-red-300 to-orange-500 grid place-items-center text-6xl">🍕</div>
                        <div className="p-4 flex flex-col gap-1 flex-1">
                            <h3 className="font-bold">Supreme Pizza</h3>
                            <p className="text-sm text-gray-500">Slice House</p>
                            <p className="text-sm"><span className="text-amber-500">★</span> 4.6 <span className="text-gray-400">(131)</span></p>
                            <p className="text-xs text-gray-500">📍 Dhaka · Specialty</p>
                            <p className="font-extrabold text-lg mt-1">$16.99</p>
                            <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                        </div>
                    </div>
                </div>
                <p id="none" className="hidden text-center text-gray-500 py-12">No pizzas match your filters. Try clearing a filter.</p>
            </main>   
        </>
    );
};

export default Menu;