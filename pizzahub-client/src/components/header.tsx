import Link from "next/link"

const Header = () => {
    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
                <Link href="index.html" className="text-xl font-extrabold text-brand">🍕 PizzaHub</Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium ml-4">
                    <Link data-nav href="index.html" className="py-1 text-gray-700 hover:text-brand">Home</Link>
                    <Link data-nav href="menu.html" className="py-1 text-gray-700 hover:text-brand">Browse Menu</Link>
                    <Link href="index.html#shops" className="py-1 text-gray-700 hover:text-brand">Pizza Shops</Link>
                </nav>
                <input className="hidden lg:block ml-auto w-72 border rounded-full px-4 py-2 text-sm bg-gray-50" placeholder="Search for pizza shops or areas..." />
                <div className="ml-auto lg:ml-0 flex items-center gap-2">
                    <Link href="#" className="relative px-2 text-xl" aria-label="Cart">🛒<span className="absolute -top-1 right-0 bg-brand text-white text-[10px] rounded-full w-4 h-4 grid place-items-center">0</span></Link>
                    <Link href="login.html" className="hidden sm:block border rounded-full px-4 py-1.5 text-sm font-medium">Sign In</Link>
                    <Link href="signup.html" className="hidden sm:block bg-brand text-white rounded-full px-4 py-1.5 text-sm font-medium">Sign Up</Link>
                    <button id="bg" className="md:hidden text-2xl px-2" aria-label="Menu">☰</button>
                </div>
            </div>
            <div id="mm" className="hidden md:hidden border-t px-4 py-3 flex flex-col gap-3 text-sm font-medium">
                <Link href="index.html">Home</Link><Link href="menu.html">Browse Menu</Link><Link href="index.html#shops">Pizza Shops</Link>
                <Link href="login.html">Sign In</Link><Link href="signup.html">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;