import React from 'react'

const NavBar = ({
    showLoginHandler,
    showRegisterHandler,
    showLogOut,
    logOutHandler,
    firmName
}) => {

    return (
        <div className="flex justify-between shadow-xl text-orange-400 p-5 h-20 items-center">

            {/* LOGO */}
            <h1 className="sm:text-xl">
                Vendor Dashboard
            </h1>
             {/* FIRM NAME */}
                        {firmName && (
                            <span className="font-semibold">
                                {firmName.toUpperCase()}
                            </span>
                        )}

            <div className="flex gap-4 items-center">

                {!showLogOut ? (
                    <>
                        <span
                            onClick={showLoginHandler}
                            className="cursor-pointer"
                        >
                            Login
                        </span>

                        <span>/</span>

                        <span
                            onClick={showRegisterHandler}
                            className="cursor-pointer"
                        >
                            Register
                        </span>
                    </>
                ) : (
                    <>
                       

                        {/* LOGOUT */}
                        <span
                            onClick={logOutHandler}
                            className="cursor-pointer"
                        >
                            Logout
                        </span>
                    </>
                )}

            </div>

        </div>
    )
}

export default NavBar