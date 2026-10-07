import React, { useState } from 'react'
import API_URL from '../../data/apiPath'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = ({ welcomeHandler }) => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const formHandler = async (formData) => {

        const email = formData.get('email')
        const password = formData.get('password')

        setLoading(true)
        setError('')

        try {

            // ==============================
            // LOGIN API
            // ==============================

            const response = await axios.post(
                `${API_URL}/vendor/login`,
                {
                    email,
                    password
                }
            )

            console.log('LOGIN RESPONSE:', response.data)


            // ==============================
            // GET TOKEN
            // ==============================

            const token = response.data?.token

            if (!token) {

                const message =
                    'Token not received from backend'

                setError(message)
                toast.error(message)

                return
            }


            // ==============================
            // SAVE TOKEN
            // ==============================

            localStorage.setItem(
                'loginToken',
                token
            )

            console.log('Login Token Saved')


            // ==============================
            // GET VENDOR
            // ==============================

            const vendor = response.data?.vendor

            console.log('VENDOR:', vendor)


            // ==============================
            // SAVE USERNAME
            // ==============================

            if (vendor?.username) {

                localStorage.setItem(
                    'username',
                    vendor.username
                )

            } else {

                localStorage.removeItem('username')

            }


            // ==============================
            // GET FIRM
            // ==============================

            const firm = vendor?.firm?.[0]

            console.log('FIRM:', firm)

            if (firm) {

                localStorage.setItem(
                    'firmId',
                    firm._id
                )

                localStorage.setItem(
                    'firmName',
                    firm.firmName
                )

            } else {

                localStorage.removeItem('firmId')
                localStorage.removeItem('firmName')

            }


            // ==============================
            // SUCCESS TOAST
            // ==============================

            toast.success('Vendor login successful!')


            // ==============================
            // GO TO DASHBOARD
            // ==============================

            welcomeHandler()

        } catch (error) {

            console.error(
                'Login failed:',
                error.response?.data ||
                error.message
            )


            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                'Login failed'


            setError(message)

            toast.error(message)

        } finally {

            setLoading(false)

        }
    }


    return (

        <div className="
            w-full
            min-h-[calc(100vh-80px)]
            bg-gray-50
            flex
            items-center
            justify-center
            px-4
            py-10
        ">

            <div className="
                w-full
                max-w-md
            ">

                {/* HEADER */}

                <div className="text-center mb-7">

                    <div className="
                        mx-auto
                        w-16
                        h-16
                        rounded-2xl
                        bg-orange-100
                        flex
                        items-center
                        justify-center
                        text-3xl
                        shadow-sm
                    ">
                        👨‍🍳
                    </div>

                    <h2 className="
                        text-3xl
                        font-bold
                        text-orange-500
                        mt-4
                        max-sm:text-2xl
                    ">
                        Welcome Back
                    </h2>

                    <p className="
                        text-gray-500
                        text-sm
                        mt-2
                    ">
                        Login to your YummyHub Vendor Dashboard
                    </p>

                </div>


                {/* LOGIN CARD */}

                <form
                    action={formHandler}
                    className="
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        border-gray-100
                        p-7
                        sm:p-9
                        space-y-5
                    "
                >

                    {/* EMAIL */}

                    <div>

                        <label
                            htmlFor="email"
                            className="
                                block
                                text-sm
                                font-semibold
                                text-gray-700
                                mb-2
                            "
                        >
                            Email Address
                        </label>

                        <div className="relative">

                            <span className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                                text-lg
                            ">
                                ✉️
                            </span>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="
                                    w-full
                                    h-12
                                    pl-11
                                    pr-4
                                    border
                                    border-gray-200
                                    rounded-xl
                                    outline-none
                                    bg-gray-50
                                    text-gray-700
                                    transition
                                    focus:bg-white
                                    focus:border-orange-400
                                    focus:ring-4
                                    focus:ring-orange-100
                                    placeholder:text-gray-400
                                "
                            />

                        </div>

                    </div>


                    {/* PASSWORD */}

                    <div>

                        <label
                            htmlFor="password"
                            className="
                                block
                                text-sm
                                font-semibold
                                text-gray-700
                                mb-2
                            "
                        >
                            Password
                        </label>

                        <div className="relative">

                            <span className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                                text-lg
                            ">
                                🔒
                            </span>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="
                                    w-full
                                    h-12
                                    pl-11
                                    pr-4
                                    border
                                    border-gray-200
                                    rounded-xl
                                    outline-none
                                    bg-gray-50
                                    text-gray-700
                                    transition
                                    focus:bg-white
                                    focus:border-orange-400
                                    focus:ring-4
                                    focus:ring-orange-100
                                    placeholder:text-gray-400
                                "
                            />

                        </div>

                    </div>


                    {/* ERROR */}

                    {error && (

                        <div className="
                            bg-red-50
                            border
                            border-red-200
                            text-red-600
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            flex
                            items-start
                            gap-2
                        ">

                            <span>⚠️</span>

                            <p>
                                {error}
                            </p>

                        </div>

                    )}


                    {/* LOGIN BUTTON */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            h-12
                            bg-orange-500
                            hover:bg-orange-600
                            active:scale-[0.98]
                            text-white
                            font-semibold
                            rounded-xl
                            shadow-md
                            shadow-orange-200
                            transition-all
                            duration-200
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            disabled:active:scale-100
                        "
                    >

                        {loading ? (

                            <span className="
                                flex
                                items-center
                                justify-center
                                gap-2
                            ">

                                <span className="
                                    w-5
                                    h-5
                                    border-2
                                    border-white
                                    border-t-transparent
                                    rounded-full
                                    animate-spin
                                "></span>

                                Logging in...

                            </span>

                        ) : (

                            <span className="
                                flex
                                items-center
                                justify-center
                                gap-2
                            ">

                                Login

                                <span>
                                    →
                                </span>

                            </span>

                        )}

                    </button>


                    {/* BOTTOM TEXT */}

                    <div className="
                        text-center
                        pt-2
                        border-t
                        border-gray-100
                    ">

                        <p className="
                            text-xs
                            text-gray-400
                        ">
                            Secure Vendor Dashboard Login
                        </p>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login