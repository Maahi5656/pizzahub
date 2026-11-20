import Link from "next/link";

const MenuItemPage = () => {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-red-300 to-orange-500 grid place-items-center text-[9rem]">🍕</div>
                    <div className="grid grid-cols-3 gap-3 mt-3">
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-300 to-red-400 grid place-items-center text-3xl ring-2 ring-brand">🍕</div>
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-red-400 to-orange-600 grid place-items-center text-3xl">🍕</div>
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-amber-300 to-red-500 grid place-items-center text-3xl">🍕</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-extrabold">Pepperoni Pizza</h1>
                    <span className="self-start text-sm bg-brand-soft text-brand border border-red-200 rounded-full px-3 py-0.5">Meat Lovers</span>
                    <p>
                        <span className="text-amber-500">★★★★★</span> <b>4.8</b> 
                        <span className="text-gray-500">(320 reviews)</span>
                    </p>
                    <p className="text-3xl font-extrabold">$14.99</p>
                    <p className="text-sm">📍 Dhaka</p>
                    <p className="font-semibold">By Pizza Palace</p>
                    <p className="text-gray-600 text-sm max-w-md">Classic pepperoni pizza with extra mozzarella cheese and rich tomato sauce.</p>
                    <div className="flex items-center gap-3 mt-2">
                        <button className="w-10 h-10 border rounded-lg text-xl">−</button>
                        <span id="n" className="w-8 text-center font-semibold">1</span>
                        <button className="w-10 h-10 border rounded-lg text-xl">+</button>
                    </div>
                    <button id="order" className="bg-[#991B1B] hover:bg-brand-dark text-white font-semibold rounded-xl py-3 w-full max-w-md">Order Now</button>
                    <p className="text-sm bg-orange-50 text-gray-700 rounded-xl p-3 max-w-md">🔒 Only logged-in customers can order. 
                        <a href="login.html" className="text-brand font-semibold">Sign in</a>
                    </p>
                </div>
            </div>
            <h2 className="text-xl font-bold mt-12">More from this restaurant</h2>
            <div id="more" className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
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
                        <h3 className="font-bold">BBQ Chicken Pizza</h3>
                        <p className="text-sm text-gray-500">Slice House</p>
                        <p className="text-sm">
                            <span className="text-amber-500">★</span> 4.6 <span className="text-gray-400">(198)</span>
                        </p>
                        <p className="text-xs text-gray-500">📍 Dhaka · Specialty</p>
                        <p className="font-extrabold text-lg mt-1">$15.99</p>
                        <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                    <div className="h-36 bg-gradient-to-br from-amber-300 to-orange-600 grid place-items-center text-6xl">🍕</div>
                    <div className="p-4 flex flex-col gap-1 flex-1">
                        <h3 className="font-bold">Veggie Delight</h3>
                        <p className="text-sm text-gray-500">Cheesy Bite</p>
                        <p className="text-sm">
                            <span className="text-amber-500">★</span> 4.5 <span className="text-gray-400">(176)</span>
                        </p>
                        <p className="text-xs text-gray-500">📍 Sylhet · Vegetarian</p>
                        <p className="font-extrabold text-lg mt-1">$13.99</p>
                        <Link href="item-details.html" className="mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MenuItemPage;