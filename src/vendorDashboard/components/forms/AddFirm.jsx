
import axios from 'axios'
import React, { useState } from 'react'
import API_URL from '../../data/apiPath'

const AddFirm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const formHandler = async (formData) => {

    setError('')
    setLoading(true)

    try {

      // ===============================
      // GET LOGIN TOKEN
      // ===============================

      const loginToken = localStorage.getItem('loginToken')

      console.log('LOGIN TOKEN:', loginToken)

      if (!loginToken) {
        setError('Please login first')
        return
      }

      // ===============================
      // FORM DATA
      // ===============================

      console.log('FORM DATA:')

      for (const [key, value] of formData.entries()) {
        console.log(key, value)
      }

      // ===============================
      // SEND REQUEST
      // ===============================

      const response = await axios.post(
        `${API_URL}/firm/add-firm`,
        formData,
        {
          headers: {
            token: loginToken
          }
        }
      )

      // ===============================
      // RESPONSE
      // ===============================

      console.log('FIRM RESPONSE:', response.data)

      // ===============================
      // SAVE FIRM ID
      // ===============================

      if (response.data?.firmId) {

        localStorage.setItem(
          'firmId',
          response.data.firmId
        )

        console.log(
          'FIRM ID SAVED:',
          response.data.firmId
        )
      }

      alert('Firm added successfully')

    } catch (error) {

      console.error(
        'FAILED FIRM SUBMISSION:',
        error.response?.data || error.message
      )

      console.error(
        'STATUS:',
        error.response?.status
      )

      setError(
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to add firm'
      )

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="w-[80%] max-sm:w-full flex flex-col items-center justify-center gap-3">

      <h3 className="text-xl text-orange-400">
        Add Firm
      </h3>

      <form
        action={formHandler}
        className="flex flex-col shadow-2xl bg-gray-200 rounded-2xl p-10 gap-4"
      >

        {/* FIRM NAME */}

        <label>
          Firm Name:
        </label>

        <input
          type="text"
          name="firmName"
          placeholder="Enter your Firm Name"
          required
          className="border px-2 rounded-2xl"
        />


        {/* AREA */}

        <label>
          Area:
        </label>

        <input
          type="text"
          name="area"
          placeholder="Enter your Area"
          required
          className="border px-2 rounded-2xl"
        />


        {/* CATEGORY */}

        <div className="flex flex-col">

          <label>
            Category:
          </label>

          <div className="flex justify-around mt-3">

            <label>
              <input
                type="checkbox"
                name="category"
                value="veg"
              />
              {' '}Veg
            </label>

            <label>
              <input
                type="checkbox"
                name="category"
                value="non-veg"
              />
              {' '}Non-Veg
            </label>

          </div>

        </div>


        <hr className="opacity-35 mt-3" />


        {/* REGION */}

        <div>

          <label className="font-semibold">
            Region:
          </label>

          <div className="flex gap-5 mt-2 flex-wrap">

            <label>
              <input
                type="checkbox"
                name="region"
                value="south indian"
              />
              {' '}South Indian
            </label>

            <label>
              <input
                type="checkbox"
                name="region"
                value="north indian"
              />
              {' '}North Indian
            </label>

            <label>
              <input
                type="checkbox"
                name="region"
                value="bakery"
              />
              {' '}Bakery
            </label>

            <label>
              <input
                type="checkbox"
                name="region"
                value="chinese"
              />
              {' '}Chinese
            </label>

          </div>

        </div>


        <hr className="opacity-35 mt-3" />


        {/* OFFER */}

        <label>
          Offer:
        </label>

        <input
          type="text"
          name="offer"
          placeholder="Enter your Offer"
          required
          className="border px-2 rounded-2xl"
        />


        {/* IMAGE */}

        <label>
          Image:
        </label>

        <input
          type="file"
          name="file"
          accept="image/*"
          required
          className="border px-2 rounded-2xl w-full bg-orange-400 text-white"
        />


        {/* ERROR */}

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}


        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="m-auto border rounded-2xl py-1 px-4 disabled:opacity-50"
        >
          {loading ? 'Adding...' : 'Add Firm'}
        </button>

      </form>

    </div>
  )
}

export default AddFirm

