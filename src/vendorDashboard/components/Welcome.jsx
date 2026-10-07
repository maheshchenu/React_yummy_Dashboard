import React from "react";

const Welcome = ({ username }) => {

    return (

        <div className="
            relative
            w-full
            min-h-[calc(100vh-80px)]
            overflow-hidden
        ">

            {/* ==============================
                BACKGROUND IMAGE
            ============================== */}

            <img
                src="/assets/homeWithoutNames.png"
                alt="Vendor Dashboard"
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                "
            />


            {/* ==============================
                OVERLAY
            ============================== */}

            <div className="
                absolute
                inset-0
                bg-black/30
            "></div>


            {/* ==============================
                CENTER CONTENT
            ============================== */}

            <div className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-center
                px-4
            ">

                <div className="
                    w-full
                    max-w-lg
                    bg-white/90
                    backdrop-blur-md
                    rounded-3xl
                    shadow-2xl
                    border
                    border-white/50
                    px-7
                    py-9
                    sm:px-10
                    sm:py-11
                ">

                    {/* ICON */}

                    <div className="
                        mx-auto
                        w-20
                        h-20
                        rounded-3xl
                        bg-orange-100
                        flex
                        items-center
                        justify-center
                        text-4xl
                        shadow-sm
                        mb-6
                    ">
                        👨‍🍳
                    </div>


                    {/* WELCOME */}

                    <p className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wider
                        text-orange-500
                        mb-2
                    ">
                        Vendor Dashboard
                    </p>


                    {/* USERNAME */}

                    <h2 className="
    text-4xl
    font-bold
    text-gray-800
    max-md:text-3xl
    max-sm:text-2xl
">
    Welcome back, {username || "Vendor"}! 👋
</h2>


                    {/* DESCRIPTION */}

                    <p className="
                        mt-4
                        text-gray-500
                        text-lg
                        leading-7
                        max-md:text-base
                        max-sm:text-sm
                    ">
                        Manage your firm, add products and keep your
                        food business running smoothly.
                    </p>


                    {/* STATUS */}

                    <div className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        bg-green-50
                        border
                        border-green-200
                        text-green-600
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                    ">

                        <span className="
                            w-2.5
                            h-2.5
                            bg-green-500
                            rounded-full
                        "></span>

                        You're logged in

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Welcome;