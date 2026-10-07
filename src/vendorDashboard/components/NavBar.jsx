import React from 'react'

const NavBar = ({
    showLoginHandler,
    showRegisterHandler,
    showLogOut,
    logOutHandler,
    firmName,
    dashboardHandler
}) => {

    return (

        <nav className="
            w-full
            h-20
            bg-white
            border-b
            border-gray-100
            shadow-sm
            flex
            items-center
            justify-between
            px-5
            sm:px-8
            relative
            z-70
        ">

            {/* =================================
                LOGO / BRAND
            ================================= */}

            <button
                type="button"
                onClick={dashboardHandler}
                className="
                    flex
                    items-center
                    gap-3
                    cursor-pointer
                    group
                "
            >

                {/* LOGO */}

                <div className="
                    w-11
                    h-11
                    rounded-xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    text-xl
                    shadow-sm
                    group-hover:bg-orange-200
                    group-hover:scale-105
                    transition-all
                    duration-200
                ">
                    👨‍🍳
                </div>


                {/* BRAND */}

                <div className="text-left">

                    <h1 className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-orange-500
                        leading-tight
                    ">
                        YummyHub
                    </h1>

                    <p className="
                        hidden
                        sm:block
                        text-xs
                        text-gray-400
                    ">
                        Vendor Dashboard
                    </p>

                </div>

            </button>


            {/* =================================
                FIRM NAME
            ================================= */}

            {showLogOut && firmName && (

                <div className="
                    hidden
                    md:flex
                    items-center
                    gap-2
                    bg-orange-50
                    border
                    border-orange-100
                    px-4
                    py-2
                    rounded-full
                    max-w-xs
                ">

                    <span className="text-sm">
                        🏪
                    </span>

                    <span className="
                        font-semibold
                        text-orange-600
                        text-sm
                        truncate
                    ">
                        {firmName.toUpperCase()}
                    </span>

                </div>

            )}


            {/* =================================
                AUTH BUTTONS
            ================================= */}

            <div className="
                flex
                items-center
                gap-2
                sm:gap-3
            ">

                {!showLogOut ? (

                    <>

                        {/* LOGIN */}

                        <button
                            type="button"
                            onClick={showLoginHandler}
                            className="
                                px-4
                                sm:px-5
                                py-2
                                text-sm
                                sm:text-base
                                font-medium
                                text-gray-600
                                rounded-xl
                                hover:bg-orange-50
                                hover:text-orange-500
                                transition-all
                                duration-200
                                cursor-pointer
                            "
                        >
                            Login
                        </button>


                        {/* REGISTER */}

                        <button
                            type="button"
                            onClick={showRegisterHandler}
                            className="
                                px-4
                                sm:px-5
                                py-2
                                text-sm
                                sm:text-base
                                font-semibold
                                text-white
                                bg-orange-500
                                hover:bg-orange-600
                                rounded-xl
                                shadow-md
                                shadow-orange-100
                                active:scale-95
                                transition-all
                                duration-200
                                cursor-pointer
                            "
                        >
                            Register
                        </button>

                    </>

                ) : (

                    /* =================================
                       LOGOUT
                    ================================= */

                    <button
                        type="button"
                        onClick={logOutHandler}
                        className="
                            flex
                            items-center
                            gap-2

                            px-4
                            sm:px-5
                            py-2

                            text-sm
                            sm:text-base
                            font-semibold

                            text-red-500

                            bg-red-50

                            border
                            border-red-100

                            rounded-xl

                            hover:bg-red-500
                            hover:text-white

                            active:scale-95

                            transition-all
                            duration-200

                            cursor-pointer
                        "
                    >

                        <span>
                            ↪
                        </span>

                        Logout

                    </button>

                )}

            </div>

        </nav>
    )
}

export default NavBar