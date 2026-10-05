import React from 'react'

const SideBar = ({
    showFirmHandler,
    showProductHandler,
    showProductsHandler,
    isLoggedIn
}) => {

    return (
        <div className="bg-gray-200 w-[20%] max-sm:w-[40%] px-5 py-2 whitespace-nowrap h-[88vh] max-sm:hidden">

            <ul className="font-semibold">

                {/* ADD FIRM
                    Only show before login */}
                {!isLoggedIn && (
                    <li
                        className="my-2 cursor-pointer"
                        onClick={showFirmHandler}
                    >
                        Add Firm
                    </li>
                )}

                {/* ADD PRODUCT */}
                <li
                    className="my-2 cursor-pointer"
                    onClick={showProductHandler}
                >
                    Add Product
                </li>

                {/* ALL PRODUCTS */}
                <li
                    className="my-2 cursor-pointer"
                    onClick={showProductsHandler}
                >
                    All Products
                </li>

                {/* USER DETAILS */}
                <li className="my-2 cursor-pointer">
                    User Details
                </li>

            </ul>

        </div>
    )
}

export default SideBar