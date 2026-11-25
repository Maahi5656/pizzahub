import Link from 'next/link'

const SubscriptionPage = () => {
    return (
        <div className='m-10'>
 {/* <!-- Main Container --> */}
    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 bg-white px-5 py-8 shadow-lg sm:px-10">

        {/* <!-- Decorative Background --> */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-100/40 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-100/50 blur-3xl"></div>

        {/* <!-- Page Heading --> */}
        <div className="relative mb-10 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Upgrade Your Plan
            </h1>

            <p className="mt-2 text-sm text-gray-500">
                Choose the perfect plan for your business.
            </p>
        </div>

        {/* <!-- Pricing Cards --> */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* <!-- Free Plan --> */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="mb-6 text-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        Free Plan
                    </h2>

                    <p className="mt-3 text-sm text-gray-500">
                        Max 3 active menu items
                    </p>
                </div>

                {/* <!-- Features --> */}
                <div className="mb-8 flex-1 space-y-4">

                    <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-green-500">✓</span>
                        <span className="text-sm font-medium text-gray-600">
                            Basic vendor dashboard
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-green-500">✓</span>
                        <span className="text-sm font-medium text-gray-600">
                            Order management
                        </span>
                    </div>

                </div>

                {/* <!-- Current Plan Button --> */}
                <button
                    disabled
                    className="w-full cursor-not-allowed rounded-xl bg-gray-100 px-4 py-3 text-sm font-bold text-gray-600"
                >
                    Current Plan
                </button>

            </div>

{/* 
            <!-- Premium Plan --> */}
            <div className="relative mt-4 flex flex-col rounded-2xl bg-gradient-to-br from-[#861d1d] to-[#bd1717] p-6 pt-9 shadow-xl shadow-red-200/50 md:mt-0">
{/* 
                <!-- Crown Icon --> */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-9 w-9 text-yellow-800"
                        >
                            <path d="M3 19h18v2H3zM2 6l5 4 5-7 5 7 5-4-2 11H4L2 6z"/>
                        </svg>
                    </div>
                </div>
{/* 
                <!-- Premium Heading --> */}
                <div className="mb-6 text-center">
                    <h2 className="text-xl font-bold text-white">
                        Premium Plan
                    </h2>

                    <p className="mt-3 text-sm text-red-100">
                        Unlimited active items
                    </p>
                </div>

                {/* <!-- Premium Features --> */}
                <div className="mb-8 flex-1 space-y-4">

                    <div className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400/20 text-sm font-bold text-green-300">
                            ✓
                        </span>
                        <span className="text-sm font-medium text-white">
                            Premium vendor badge
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400/20 text-sm font-bold text-green-300">
                            ✓
                        </span>
                        <span className="text-sm font-medium text-white">
                            Featured menu placement
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400/20 text-sm font-bold text-green-300">
                            ✓
                        </span>
                        <span className="text-sm font-medium text-white">
                            All Free features
                        </span>
                    </div>

                </div>

                {/* <!-- Upgrade Button --> */}
                <Link href="/dashboard/checkout" className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-red-500 hover:shadow-lg active:scale-95">
                    Upgrade to Premium
                </Link>

            </div>

        </div>
{/* 
        <!-- Footer --> */}
        <p className="relative mt-7 text-center text-xs text-gray-400">
            Upgrade anytime to unlock more features for your business.
        </p>

    </div>            
        </div>
    );
};

export default SubscriptionPage;