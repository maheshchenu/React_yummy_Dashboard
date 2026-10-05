import React, { useState } from 'react'
import API_URL from '../../data/apiPath'
import axios from 'axios'

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
      const response = await axios.post(
        `${API_URL}/vendor/register`,
        {
          username,
          email,
          password
        }
      )

      console.log('Registration response:', response.data)

      alert('Vendor registered successfully')

      // Go to login page
      showLoginHandler()

    } catch (error) {
      console.error('Registration failed:', error)

      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Registration failed. Please try again.'

      setError(message)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-[80%] max-sm:w-full flex flex-col items-center justify-center gap-3">

      <h3 className="text-xl text-orange-400">
        Register
      </h3>

      <form
        action={submitHandler}
        className="flex flex-col shadow-2xl bg-gray-200 rounded-2xl p-10 gap-3"
      >

        <label htmlFor="username">
          Username
        </label>

        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter your Name"
          required
          className="border px-2 rounded-2xl"
        />

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
          placeholder="Enter your Password"
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
          {loading ? 'Registering...' : 'Register'}
        </button>

      </form>
    </div>
  )
}

export default Register