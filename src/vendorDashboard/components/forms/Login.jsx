import React, { useState } from 'react'
import API_URL from '../../data/apiPath'
import axios from 'axios'

const Login = ({ welcomeHandler }) => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const formHandler = async (formData) => {

        const email = formData.get('email')
        const password = formData.get('password')

        setLoading(true)
        setError('')

        try {

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

                setError('Token not received from backend')

                return
            }


            // ==============================
            // SAVE LOGIN TOKEN
            // ==============================

            localStorage.setItem(
                'loginToken',
                token
            )


            // ==============================
            // GET VENDOR
            // ==============================

            const vendor = response.data?.vendor

            console.log('VENDOR:', vendor)


            // ==============================
            // GET FIRM
            // ==============================

            const firm = vendor?.firm?.[0]

            console.log('FIRM:', firm)


            if (firm) {

                // Save Firm ID
                localStorage.setItem(
                    'firmId',
                    firm._id
                )


                // Save Firm Name
                localStorage.setItem(
                    'firmName',
                    firm.firmName
                )


                console.log(
                    'Firm ID:',
                    firm._id
                )

                console.log(
                    'Firm Name:',
                    firm.firmName
                )

            } else {

                console.log(
                    'No firm found for this vendor'
                )

            }


            // ==============================
            // SUCCESS
            // ==============================

            alert('Vendor login successfully')

            welcomeHandler()


        } catch (error) {

            console.error(
                'Login failed:',
                error.response?.data ||
                error.message
            )

            setError(
                error.response?.data?.message ||
                error.response?.data?.error ||
                'Login failed'
            )

        } finally {

            setLoading(false)

        }

    }


    return (

        <div className="w-[80%] max-sm:w-full flex flex-col items-center justify-center gap-3">

            <h3 className="text-xl text-orange-400">
                Login
            </h3>


            <form
                action={formHandler}
                className="flex flex-col shadow-2xl bg-gray-200 rounded-2xl p-10 gap-3"
            >

                <label htmlFor="email">
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="border px-2 rounded-2xl"
                />


                <label htmlFor="password">
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    className="border px-2 rounded-2xl"
                />


                {error && (

                    <p className="text-red-500 text-sm">
                        {error}
                    </p>

                )}


                <button
                    type="submit"
                    disabled={loading}
                    className="border rounded-2xl py-1 w-24 ml-auto disabled:opacity-50"
                >

                    {loading
                        ? 'Loading...'
                        : 'Login'
                    }

                </button>

            </form>

        </div>

    )
}

export default Login