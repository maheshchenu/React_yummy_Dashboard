import React, { useState } from "react";

const SideBar = ({
    showFirmHandler,
    showProductHandler,
    showProductsHandler,
    isLoggedIn,
    hasFirm
}) => {

    const [menuOpen, setMenuOpen] = useState(false);


    // =========================
    // CLOSE MENU
    // =========================

    const closeMenu = () => {
        setMenuOpen(false);
    };


    // =========================
    // MENU ITEM CLICK
    // =========================

    const handleMenuClick = (handler) => {

        handler();
        closeMenu();

    };


    return (
        <>

            {/* =================================
                MOBILE MENU BUTTON
            ================================= */}

            <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle sidebar"
                className="
                    hidden
                    max-sm:flex

                    fixed
                    top-23
                    right-4

                    z-60

                    w-11
                    h-11

                    items-center
                    justify-center

                    bg-white
                    text-gray-700

                    rounded-xl

                    shadow-lg
                    border
                    border-gray-200

                    text-xl
                    font-semibold

                    cursor-pointer

                    transition-all
                    duration-200

                    hover:bg-orange-50
                    hover:text-orange-500

                    active:scale-95
                "
            >

                {menuOpen ? "✕" : "☰"}

            </button>


            {/* =================================
                MOBILE BACKDROP
            ================================= */}

            {menuOpen && (

                <div
                    onClick={closeMenu}
                    className="
                        fixed
                        inset-0

                        bg-black/40
                        backdrop-blur-[2px]

                        z-45

                        max-sm:block
                    "
                />

            )}


            {/* =================================
                SIDEBAR
            ================================= */}

            <aside
                className={`
                    bg-white
                    shadow-xl

                    border-r
                    border-gray-100

                    w-[20%]

                    px-4
                    py-6

                    min-h-[88vh]

                    z-50

                    max-sm:fixed
                    max-sm:top-0
                    max-sm:left-0

                    max-sm:w-[78%]
                    max-sm:max-w-[320px]

                    max-sm:h-screen
                    max-sm:min-h-0

                    max-sm:px-5
                    max-sm:py-6

                    transition-transform
                    duration-300
                    ease-in-out

                    ${
                        menuOpen
                            ? "max-sm:translate-x-0"
                            : "max-sm:-translate-x-full"
                    }
                `}
            >

                {/* =================================
                    MOBILE SIDEBAR HEADER
                ================================= */}

                <div className="
                    flex
                    items-center
                    justify-between

                    mb-8

                    max-sm:border-b
                    max-sm:border-gray-100
                    max-sm:pb-5
                ">

                    <div>

                        <p className="
                            text-xs
                            uppercase
                            tracking-wider
                            text-gray-400
                            font-semibold
                        ">
                            Vendor
                        </p>

                        <h2 className="
                            text-xl
                            font-bold
                            text-orange-500
                            mt-1
                        ">
                            Dashboard
                        </h2>

                    </div>


                    {/* MOBILE CLOSE */}

                    <button
                        type="button"
                        onClick={closeMenu}
                        className="
                            hidden
                            max-sm:flex

                            w-9
                            h-9

                            items-center
                            justify-center

                            rounded-lg

                            bg-gray-100
                            text-gray-600

                            hover:bg-orange-100
                            hover:text-orange-500

                            cursor-pointer
                        "
                    >
                        ✕
                    </button>

                </div>


                {/* =================================
                    MENU TITLE
                ================================= */}

                <p className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-gray-400
                    font-semibold

                    mb-3
                    px-3
                ">
                    Management
                </p>


                {/* =================================
                    MENU
                ================================= */}

                <ul className="space-y-2">


                    {/* =================================
                        ADD FIRM
                    ================================= */}

                    <li>

                        <button
                            type="button"
                            disabled={hasFirm}
                            onClick={
                                hasFirm
                                    ? undefined
                                    : () =>
                                        handleMenuClick(
                                            showFirmHandler
                                        )
                            }
                            className={`
                                group

                                w-full

                                flex
                                items-center
                                gap-3

                                px-4
                                py-3

                                rounded-xl

                                text-left
                                text-base

                                transition-all
                                duration-200

                                ${
                                    hasFirm
                                        ? `
                                            text-gray-400
                                            bg-gray-50
                                            cursor-not-allowed
                                        `
                                        : `
                                            text-gray-700
                                            hover:bg-orange-50
                                            hover:text-orange-500
                                            cursor-pointer
                                        `
                                }
                            `}
                        >

                            <span className="
                                w-9
                                h-9

                                rounded-lg

                                flex
                                items-center
                                justify-center

                                bg-orange-100

                                text-lg

                                group-hover:scale-105
                                transition-transform
                            ">
                                🏪
                            </span>

                            <span className="font-medium">
                                Add Firm
                            </span>

                            {hasFirm && (
                                <span className="
                                    ml-auto
                                    text-xs
                                    bg-green-100
                                    text-green-600
                                    px-2
                                    py-1
                                    rounded-full
                                ">
                                    Added
                                </span>
                            )}

                        </button>

                    </li>


                    {/* =================================
                        ADD PRODUCT
                    ================================= */}

                    <li>

                        <button
                            type="button"
                            onClick={() =>
                                handleMenuClick(
                                    showProductHandler
                                )
                            }
                            className="
                                group

                                w-full

                                flex
                                items-center
                                gap-3

                                px-4
                                py-3

                                rounded-xl

                                text-left
                                text-base
                                text-gray-700

                                hover:bg-orange-50
                                hover:text-orange-500

                                transition-all
                                duration-200

                                cursor-pointer
                            "
                        >

                            <span className="
                                w-9
                                h-9

                                rounded-lg

                                flex
                                items-center
                                justify-center

                                bg-orange-100

                                text-lg

                                group-hover:scale-105
                                transition-transform
                            ">
                                🍔
                            </span>

                            <span className="font-medium">
                                Add Product
                            </span>

                        </button>

                    </li>


                    {/* =================================
                        ALL PRODUCTS
                    ================================= */}

                    <li>

                        <button
                            type="button"
                            onClick={() =>
                                handleMenuClick(
                                    showProductsHandler
                                )
                            }
                            className="
                                group

                                w-full

                                flex
                                items-center
                                gap-3

                                px-4
                                py-3

                                rounded-xl

                                text-left
                                text-base
                                text-gray-700

                                hover:bg-orange-50
                                hover:text-orange-500

                                transition-all
                                duration-200

                                cursor-pointer
                            "
                        >

                            <span className="
                                w-9
                                h-9

                                rounded-lg

                                flex
                                items-center
                                justify-center

                                bg-orange-100

                                text-lg

                                group-hover:scale-105
                                transition-transform
                            ">
                                📋
                            </span>

                            <span className="font-medium">
                                All Products
                            </span>

                        </button>

                    </li>

                </ul>


                {/* =================================
                    BOTTOM INFO
                ================================= */}

                <div className="
                    mt-10
                    mx-2
                    p-4

                    rounded-2xl

                    bg-orange-50
                    border
                    border-orange-100
                ">

                    <div className="
                        flex
                        items-center
                        gap-2
                        mb-2
                    ">

                        <span className="text-lg">
                            💡
                        </span>

                        <p className="
                            text-sm
                            font-semibold
                            text-orange-600
                        ">
                            Vendor Tip
                        </p>

                    </div>

                    <p className="
                        text-xs
                        leading-5
                        text-gray-500
                    ">
                        Keep your products updated to provide
                        better service to your customers.
                    </p>

                </div>

            </aside>

        </>
    );
};

export default SideBar;