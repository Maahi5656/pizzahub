import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
            <div>
                <p className="text-xs tracking-wide text-gray-300">Local pizza shops • Fresh ingredients • Fast delivery</p>
                <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">Discover the Best <span className="text-amber-400">Pizza Shops</span> Near You</h1>
                <p className="mt-4 text-gray-300 max-w-md">Explore local pizza shops, browse their menus, and order your favorite pizza with just a few clicks.</p>
                <form className="mt-6 flex bg-white rounded-xl p-1.5 max-w-lg">
                    <input className="flex-1 min-w-0 px-3 text-gray-900 outline-none text-sm" placeholder="📍 Enter your area or city..." />\
                    <button className="bg-brand px-5 py-2.5 rounded-lg font-semibold text-sm">Search</button>
                </form>
            </div>
            <div className="hidden md:grid place-items-center text-[10rem] leading-none">🍕</div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto py-6 text-sm text-center" id="cats">
          <a href="menu.html" className="shrink-0 w-24 text-brand font-semibold border-b-2 border-brand pb-1">
            <div className="w-14 h-14 mx-auto rounded-full bg-red-100 grid place-items-center text-2xl">🍕</div>
            <p className="mt-2">All Shops</p>
          </a>
          <a href="menu.html" className="shrink-0 w-24 ">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">🧀</div>
            <p className="mt-2">Classic Pizzas</p>
          </a>
          <a href="menu.html" className="shrink-0 w-24 ">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">🥬</div>
            <p className="mt-2">Vegetarian</p>
          </a>
          <a href="menu.html" className="shrink-0 w-24 ">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">🍖</div>
            <p className="mt-2">Meat Lovers</p>
          </a>
          <a href="menu.html" className="shrink-0 w-24 ">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">💎</div>
            <p className="mt-2">Gourmet</p>
          </a>
          <a href="menu.html" className="shrink-0 w-24 ">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">🥗</div>
            <p className="mt-2">Sides &amp; Appetizers</p>
          </a>
          <a href="menu.html" className="shrink-0 w-24 ">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 grid place-items-center text-2xl">🥤</div>
            <p className="mt-2">Beverages &amp; Desserts</p>
          </a>
        </div>
        <section id="shops">
          <div className="flex justify-between items-end">
              <div>
                  <h2 className="text-xl font-bold">🍕 Featured Pizza Shops</h2>
                  <p className="text-sm text-gray-500">Top rated and most popular pizza shops in your area</p>
              </div>
              <a href="menu.html" className="text-brand text-sm font-medium">View All Shops</a>
          </div>
          <div id="shopgrid" className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-amber-700 to-red-900 grid place-items-center text-white text-xl font-bold relative">Pizza Palace<span className="absolute top-2 right-2 bg-amber-400 text-gray-900 text-[10px] px-2 py-0.5 rounded">Top Rated</span></div>
              <div className="p-4">
                <h3 className="font-bold">Pizza Palace</h3>
                <p className="text-sm">
                  <span className="text-amber-500">★</span> <b>4.7</b> 
                  <span className="text-gray-400">(1.2k+ reviews)</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">📍 Dhaka, Dhanmondi</p>
                <div className="flex gap-2 mt-2 text-[11px]">
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded">Fast Delivery</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Free Delivery</span>
                </div>
                <a href="menu.html" className="mt-3 block text-center bg-brand text-white text-sm font-semibold rounded-lg py-2">View Menu</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-900 grid place-items-center text-white text-xl font-bold relative">The Oven</div>
              <div className="p-4">
                <h3 className="font-bold">The Oven</h3>
                <p className="text-sm">
                  <span className="text-amber-500">★</span> <b>4.5</b> 
                  <span className="text-gray-400">(980+ reviews)</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">📍 Dhaka, Gulshan</p>
                <div className="flex gap-2 mt-2 text-[11px]">
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded">Fast Delivery</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Free Delivery</span>
                </div>
                <Link href="menu.html" className="mt-3 block text-center bg-brand text-white text-sm font-semibold rounded-lg py-2">View Menu</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-red-600 to-red-900 grid place-items-center text-white text-xl font-bold relative">Slice House</div>
              <div className="p-4">
                <h3 className="font-bold">Slice House</h3>
                <p className="text-sm">
                  <span className="text-amber-500">★</span> <b>4.3</b> 
                  <span className="text-gray-400">(760+ reviews)</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">📍 Dhaka, Banani</p>
                <div className="flex gap-2 mt-2 text-[11px]">
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded">Fast Delivery</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Free Delivery</span>
                </div>
                <Link href="menu.html" className="mt-3 block text-center bg-brand text-white text-sm font-semibold rounded-lg py-2">View Menu</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-orange-600 to-amber-900 grid place-items-center text-white text-xl font-bold relative">Cheesy Bite</div>
              <div className="p-4">
                <h3 className="font-bold">Cheesy Bite</h3>
                <p className="text-sm">
                  <span className="text-amber-500">★</span> <b>4.6</b> 
                  <span className="text-gray-400">(540+ reviews)</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">📍 Dhaka, Mohammadpur</p>
                <div className="flex gap-2 mt-2 text-[11px]">
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded">Fast Delivery</span>
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Free Delivery</span>
                </div>
                <Link href="menu.html" className="mt-3 block text-center bg-brand text-white text-sm font-semibold rounded-lg py-2">View Menu</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="flex justify-between items-end">
            <div>
                <h2 className="text-xl font-bold">🍕 Popular Pizzas</h2>
                <p className="text-sm text-gray-500">Loved by pizza fans, top picks from our shops</p>
            </div>
            <Link href="/menu" className="text-brand text-sm font-medium">View All</Link>
          </div>
          <div id="pgrid" className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
                <Link href="/menu/1" className="bg-[#991B1B] mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
              <div className="h-36 bg-gradient-to-br from-red-300 to-orange-500 grid place-items-center text-6xl">🍕</div>
              <div className="p-4 flex flex-col gap-1 flex-1">
                <h3 className="font-bold">Pepperoni Pizza</h3>
                <p className="text-sm text-gray-500">The Oven</p>
                <p className="text-sm">
                  <span className="text-amber-500">★</span> 4.7 <span className="text-gray-400">(285)</span>
                </p>
                <p className="text-xs text-gray-500">📍 Dhaka · Meat Lovers</p>
                <p className="font-extrabold text-lg mt-1">$14.99</p>
                <Link href="/menu/2" className="bg-[#991B1B] mt-auto block text-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg py-2">View Details</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-14 bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold">How PizzaHub Works</h2>
            <p className="text-sm text-gray-500">Get your favorite pizza in just a few simple steps.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center" id="steps">
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 grid place-items-center text-3xl">🔍</div>
                <h3 className="font-semibold mt-3">Find a Pizza Shop</h3>
                <p className="text-sm text-gray-500 mt-1">Browse different pizza shops in your area or search for your favorite one.</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 grid place-items-center text-3xl">📋</div>
                <h3 className="font-semibold mt-3">View Menu</h3>
                <p className="text-sm text-gray-500 mt-1">Explore the shops menu, check prices and details of each item.</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 grid place-items-center text-3xl">🛒</div>
                <h3 className="font-semibold mt-3">Place Order</h3>
                <p className="text-sm text-gray-500 mt-1">Add items to your cart, choose delivery date and address, and complete your order.</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 grid place-items-center text-3xl">🛵</div>
                <h3 className="font-semibold mt-3">Track &amp; Enjoy</h3><p className="text-sm text-gray-500 mt-1">Track your order in real-time and enjoy your fresh pizza at your door!</p>
              </div>
            </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 my-12">
        <h2 className="text-xl font-bold">Why Choose PizzaHub?</h2>
        <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-5 text-center text-sm" id="why"><div className="p-3"><div className="text-3xl">🏪</div><h3 className="font-semibold mt-2">Multiple Local Shops</h3><p className="text-gray-500 text-xs mt-1">Discover the best pizza shops in your area.</p></div><div className="p-3"><div className="text-3xl">🔒</div><h3 className="font-semibold mt-2">Safe &amp; Secure</h3><p className="text-gray-500 text-xs mt-1">Secure payments and trusted vendors.</p></div><div className="p-3"><div className="text-3xl">🚚</div><h3 className="font-semibold mt-2">Fast Delivery</h3><p className="text-gray-500 text-xs mt-1">Get your pizza fresh and on time.</p></div><div className="p-3"><div className="text-3xl">⭐</div><h3 className="font-semibold mt-2">Great Offers</h3><p className="text-gray-500 text-xs mt-1">Exclusive deals and discounts.</p></div><div className="p-3"><div className="text-3xl">💚</div><h3 className="font-semibold mt-2">Happy Customers</h3><p className="text-gray-500 text-xs mt-1">Thousands of pizza lovers trust PizzaHub.</p></div></div>
      </section>
    </>
  );
}
