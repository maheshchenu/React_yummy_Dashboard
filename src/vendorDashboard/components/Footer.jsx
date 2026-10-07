import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white ">
            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-400">
                            YummyHub
                        </h2>

                        <p className="mt-3 text-gray-300 text-sm leading-6">
                            Manage your restaurant, products and food business
                            easily with YummyHub Vendor Dashboard.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-orange-400">
                            Quick Links
                        </h3>

                        <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                            <li className="hover:text-orange-400 cursor-pointer">
                                Dashboard
                            </li>

                            <li className="hover:text-orange-400 cursor-pointer">
                                Add Firm
                            </li>

                            <li className="hover:text-orange-400 cursor-pointer">
                                Add Product
                            </li>

                            <li className="hover:text-orange-400 cursor-pointer">
                                All Products
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-orange-400">
                            Contact
                        </h3>

                        <div className="mt-3 space-y-2 text-gray-300 text-sm">
                            <p>📧 support@yummyhub.com</p>
                            <p>📞 +91 98765 43210</p>
                            <p>📍 India</p>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-600 mt-8 pt-5 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} YummyHub. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;