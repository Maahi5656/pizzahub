import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 text-sm mt-16">
          <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div><p className="text-xl font-extrabold text-white">🍕 PizzaHub</p><p className="mt-2 text-gray-400">Your favorite pizza shops, just a click away. Fresh pizza, better together.</p></div>
            <div><p className="font-semibold text-white mb-2">Quick Links</p><ul className="space-y-1"><li><a href="index.html">Home</a></li><li><a href="menu.html">Browse Menu</a></li><li><a href="index.html#shops">Pizza Shops</a></li><li><a href="login.html">Sign In</a></li><li><a href="signup.html">Sign Up</a></li></ul></div>
            <div><p className="font-semibold text-white mb-2">For Customers</p><ul className="space-y-1"><li>Track Order</li><li>FAQs</li><li>Contact Us</li></ul></div>
            <div><p className="font-semibold text-white mb-2">For Partners</p><ul className="space-y-1"><li>Become a Vendor</li><li><a href="dashboard.html">Vendor Login</a></li></ul></div>
            <div><p className="font-semibold text-white mb-2">Contact Us</p><p>Dhaka, Bangladesh</p><p>+880 1234 567890</p><p>support@pizzahub.com</p></div>
          </div>
          <div className="border-t border-gray-800 max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-500"><span>© 2025 PizzaHub. All rights reserved.</span><span>Terms of Service | Privacy Policy</span></div>
        </footer>
    );
};

export default Footer;