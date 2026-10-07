import React, { useState } from 'react'
import API_URL from '../../data/apiPath'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = ({ showLoginHandler }) => {

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (formData) => {

    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    setError('')
    setLoading(true)

    try {

      // ==============================
      // REGISTER API
      // ==============================

      const response = await axios.post(
        `${API_URL}/vendor/register`,
        {
          username,
          email,
          password
        }
      )

      console.log(
        'Registration response:',
        response.data
      )


      // ==============================
      // SUCCESS TOAST
      // ==============================

      toast.success('Vendor registered successfully!')


      // ==============================
      // GO TO LOGIN
      // ==============================

      showLoginHandler()

    } catch (error) {

      console.error(
        'Registration failed:',
        error.response?.data ||
        error.message
      )


      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Registration failed. Please try again.'


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

        {/* ==============================
            HEADER
        ============================== */}

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
            Create Account
          </h2>

          <p className="
            text-gray-500
            text-sm
            mt-2
          ">
            Register as a YummyHub Vendor
          </p>

        </div>


        {/* ==============================
            REGISTER CARD
        ============================== */}

        <form
          action={submitHandler}
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

          {/* USERNAME */}

          <div>

            <label
              htmlFor="username"
              className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
              "
            >
              Username
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
                👤
              </span>

              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your name"
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
                placeholder="Create a password"
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


          {/* REGISTER BUTTON */}

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

                Registering...

              </span>

            ) : (

              <span className="
                flex
                items-center
                justify-center
                gap-2
              ">

                Create Account

                <span>
                  →
                </span>

              </span>

            )}

          </button>


          {/* LOGIN LINK */}

          <div className="
            text-center
            pt-3
            border-t
            border-gray-100
          ">

            <p className="
              text-sm
              text-gray-500
            ">

              Already have an account?

              <button
                type="button"
                onClick={showLoginHandler}
                className="
                  ml-1
                  text-orange-500
                  font-semibold
                  hover:text-orange-600
                  hover:underline
                  cursor-pointer
                "
              >
                Login
              </button>

            </p>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Register