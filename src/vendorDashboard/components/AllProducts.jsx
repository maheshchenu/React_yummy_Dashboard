import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_URL from '../data/apiPath'

const AllProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    // ======================================
    // GET ALL PRODUCTS
    // ======================================

    const productsHandler = async () => {

        try {

            const firmId = localStorage.getItem('firmId')
            const loginToken = localStorage.getItem('loginToken')

            console.log('Firm ID:', firmId)
            console.log('Login Token:', loginToken)

            if (!firmId) {
                alert('Firm ID not found')
                return
            }

            if (!loginToken) {
                alert('Please login first')
                return
            }

            setLoading(true)


            // IMPORTANT:
            // Backend route:
            // GET /get-product/:firmId

            const response = await axios.get(
                `${API_URL}/product/get-product/${firmId}`
            )


            console.log('Products response:', response.data)


            // Backend response:
            // {
            //   restaurantName: "...",
            //   products: [...]
            // }

            setProducts(response.data.products || [])


        } catch (error) {

            console.error(
                'Failed to fetch products:',
                error.response?.data || error.message
            )

            alert(
                error.response?.data?.message ||
                'Failed to fetch products'
            )

        } finally {

            setLoading(false)

        }

    }


    // ======================================
    // USE EFFECT
    // ======================================

    useEffect(() => {

        productsHandler()

    }, [])


    // ======================================
    // DELETE PRODUCT
    // ======================================

    const deleteProductById = async (productId) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this product?'
        )

        if (!confirmDelete) {
            return
        }


        try {

            const loginToken =
                localStorage.getItem('loginToken')


            if (!loginToken) {

                alert('Please login first')

                return

            }


            // IMPORTANT:
            // Backend route:
            // DELETE /delete-product/:productId

            const response = await axios.delete(

                `${API_URL}/product/delete-product/${productId}`,

                {
                    headers: {
                        token: loginToken
                    }
                }

            )


            console.log(
                'Delete response:',
                response.data
            )


            // Remove product from UI

            setProducts((previousProducts) =>
                previousProducts.filter(
                    (item) => item._id !== productId
                )
            )


            alert('Product deleted successfully')


        } catch (error) {

            console.error(
                'Failed to delete product:',
                error.response?.data ||
                error.message
            )


            alert(
                error.response?.data?.error ||
                error.response?.data?.message ||
                'Failed to delete product'
            )

        }

    }


    // ======================================
    // UI
    // ======================================

    return (

        <div className="p-5 w-[80%]">

            <h2 className="text-xl text-orange-400 mb-5">
                All Products
            </h2>


            {loading ? (

                <p>
                    Loading products...
                </p>

            ) : products.length === 0 ? (

                <p>
                    No products found
                </p>

            ) : (

                <table className="border-collapse border border-gray-400 w-full">

                    <thead>

                        <tr className="bg-gray-200">

                            <th className="border p-2">
                                Product Name
                            </th>

                            <th className="border p-2">
                                Price
                            </th>

                            <th className="border p-2">
                                Category
                            </th>

                            <th className="border p-2">
                                Image
                            </th>

                            <th className="border p-2">
                                Delete
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {products.map((item) => (

                            <tr key={item._id}>

                                <td className="border p-2">
                                    {item.productName}
                                </td>


                                <td className="border p-2">
                                    ₹{item.price}
                                </td>


                                <td className="border p-2">
                                    {item.category}
                                </td>


                                <td className="border p-2">

                                    {item.image && (

                                        <img
                                            src={`${API_URL}/uploads/${item.image}`}
                                            alt={item.productName}
                                            className="w-20 h-20 object-cover rounded"
                                        />

                                    )}

                                </td>


                                <td className="border p-2">

                                    <button
                                        onClick={() =>
                                            deleteProductById(
                                                item._id
                                            )
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    )

}

export default AllProducts