import React from "react";

const Home = ({ showLoginHandler }) => {
    return (
        <div className="
            relative
            w-full
            min-h-[calc(100vh-80px)]
            overflow-hidden
            bg-gray-100
        ">

            {/* ==============================
                BACKGROUND IMAGE
            ============================== */}

            <img
                src="/assets/homeWithoutNames.png"
                alt="YummyHub Vendor Dashboard"
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
                DARK OVERLAY
            ============================== */}

            <div className="
                absolute
                inset-0
                bg-black/30
            "></div>


            {/* ==============================
                HERO CONTENT
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
                    max-w-2xl
                    w-full
                ">

                    {/* ICON */}

                    <div className="
                        mx-auto
                        w-20
                        h-20
                        rounded-3xl
                        bg-white/90
                        backdrop-blur-sm
                        flex
                        items-center
                        justify-center
                        text-4xl
                        shadow-2xl
                        mb-6
                    ">
                        👨‍🍳
                    </div>


                    {/* TITLE */}

                    <h1 className="
                        text-5xl
                        font-bold
                        text-white
                        drop-shadow-lg
                        max-md:text-4xl
                        max-sm:text-3xl
                    ">
                        Welcome to YummyHub
                    </h1>


                    {/* DESCRIPTION */}

                    <p className="
                        text-xl
                        text-white
                        font-medium
                        mt-4
                        drop-shadow-md
                        max-md:text-lg
                        max-sm:text-base
                    ">
                        Manage your restaurant and products with ease.
                    </p>


                    {/* LOGIN CARD */}

                    <div className="
                        mt-8
                        mx-auto
                        w-fit
                        bg-white/90
                        backdrop-blur-md
                        rounded-3xl
                        shadow-2xl
                        p-6
                        max-sm:p-5
                    ">

                        <p className="
                            text-gray-700
                            font-semibold
                            text-lg
                            mb-4
                            max-sm:text-base
                        ">
                            Ready to manage your business?
                        </p>


                        {/* LOGIN BUTTON */}

                        <button
                            type="button"
                            onClick={showLoginHandler}
                            className="
                                bg-orange-500
                                hover:bg-orange-600
                                active:scale-95
                                text-white
                                font-semibold
                                text-lg
                                px-10
                                py-3
                                rounded-xl
                                shadow-lg
                                shadow-orange-200
                                transition-all
                                duration-200
                                cursor-pointer
                                max-sm:w-full
                                max-sm:text-base
                            "
                        >
                            Login to Dashboard →
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;