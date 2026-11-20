import React from 'react';

const CustomerDashboardPage = () => {
    return (
        <div className="flex-1 min-w-0">
            <header className="flex items-center gap-3 p-4 sm:p-6">
                <button id="open" className="lg:hidden text-2xl" aria-label="Open menu">☰</button>
                <h1 className="text-2xl font-bold">Customer Dashboard</h1>
                <div className="ml-auto w-10 h-10 rounded-full bg-brand text-white grid place-items-center font-bold">V</div>
            </header>
            <main className="px-4 sm:px-6 pb-10">
                <div className="grid gap-4 grid-cols-2 xl:grid-cols-4" id="stats">
                    <div className="bg-blue-50 rounded-2xl p-5 text-center shadow-sm">
                        <div className="text-3xl">🛒</div>
                        <p className="text-sm text-gray-600 mt-1">Total Orders</p>
                        <p className="text-2xl font-extrabold">8</p>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-5 text-center shadow-sm">
                        <div className="text-3xl">⏱️</div>
                        <p className="text-sm text-gray-600 mt-1">Pending Orders</p>
                        <p className="text-2xl font-extrabold">6</p>
                    </div>
                    <div className="bg-orange-50 rounded-2xl p-5 text-center shadow-sm">
                        <div className="text-3xl">📦</div>
                        <p className="text-sm text-gray-600 mt-1">Accepted Orders</p>
                        <p className="text-2xl font-extrabold">3</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-5 text-center shadow-sm">
                        <div className="text-3xl">📦</div>
                        <p className="text-sm text-gray-600 mt-1">Rejected Orders</p>
                        <p className="text-2xl font-extrabold">3</p>
                    </div>
                </div>
                <section className="mt-6 bg-white rounded-2xl p-5 shadow-sm max-w-3xl">
                    {/* <h2 className="font-bold">Quick Actions</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <button className="bg-brand hover:bg-brand-dark text-white rounded-lg px-5 py-2.5 text-sm font-semibold">Add Menu Item</button>
                        <button className="bg-purple-100 text-purple-800 rounded-lg px-5 py-2.5 text-sm font-semibold">Upgrade to Premium</button>
                    </div> */}
                </section>
            </main>
        </div>
    );
};

export default CustomerDashboardPage;