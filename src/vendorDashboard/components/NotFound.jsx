import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (

        <div className="
            min-h-[calc(100vh-80px)]
            w-full
            bg-gray-50
            flex
            items-center
            justify-center
            px-4
            py-10
        ">

            <div className="
                w-full
                max-w-lg
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-gray-100
                p-8
                sm:p-10
                text-center
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
                    🔍
                </div>


                {/* 404 */}

                <h1 className="
                    text-7xl
                    sm:text-8xl
                    font-bold
                    text-orange-500
                    leading-none
                ">
                    404
                </h1>


                {/* TITLE */}

                <h2 className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-gray-800
                    mt-4
                ">
                    Page Not Found
                </h2>


                {/* DESCRIPTION */}

                <p className="
                    text-gray-500
                    text-sm
                    sm:text-base
                    mt-3
                    leading-6
                    max-w-sm
                    mx-auto
                ">
                    Sorry, the page you are looking for doesn't exist
                    or may have been moved.
                </p>


                {/* HOME BUTTON */}

                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2

                        mt-7

                        bg-orange-500
                        hover:bg-orange-600

                        text-white
                        font-semibold

                        px-7
                        py-3

                        rounded-xl

                        shadow-md
                        shadow-orange-200

                        active:scale-95

                        transition-all
                        duration-200
                    "
                >
                    ← Go to Homepage
                </Link>

            </div>

        </div>
    )
}

export default NotFound