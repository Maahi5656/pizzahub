import Link from "next/link";

const SignUp = () => {
    return (
        <section className="relative flex justify-center items-center py-6 sm:py-8">
            <main className="w-full max-w-md bg-white/90 rounded-3xl shadow-xl border p-6 sm:p-8">
                <h2 className="block text-center text-3xl font-extrabold text-brand">🍕 PizzaHub</h2>
                <h1 className="text-2xl font-bold text-center mt-1 mb-1.5">Create Your Account</h1>
                <p className="text-center text-sm text-gray-500">Join PizzaHub today!</p>
                <form id="f" className="mt-6 space-y-4">
                    <div className="relative">
                        <span className="absolute left-4 top-3">👤</span>
                        <input required placeholder="Full Name" className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" />
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">✉️</span>
                        <input type="email" required placeholder="Email Address" className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" />
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">🔒</span>
                        <input id="p1" type="password" required placeholder="Password" className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" />
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-3">🔑</span>
                        <input id="p2" type="password" required placeholder="Confirm Password" className="w-full border rounded-xl pl-11 pr-4 py-3 bg-white text-sm" />
                    </div>
                    <p id="err" className="hidden text-sm text-brand">Passwords dont match. Re-enter them and try again.</p>
                    <fieldset className="text-sm"><legend className="font-medium mb-1">I am a:</legend>
                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="r" checked /> Customer
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="r" /> Vendor
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="radio" name="r" /> Admin
                            </label>
                        </div>
                    </fieldset>
                    <button className="w-full bg-[#991B1B] hover:bg-brand-dark text-white font-semibold rounded-xl py-3">Sign Up</button>
                </form>
                <p className="text-center text-sm mt-5">Already have an account? <Link href="/signin" className="text-brand font-semibold">Sign In</Link></p>
            </main>
        </section>
    );
};

export default SignUp;