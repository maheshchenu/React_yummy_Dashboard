import axios from "axios"
import React from "react"
import API_URL from "../../data/apiPath"

const AddProduct = () => {

    const formHandler = async (formData) => {

        const productName = formData.get("productName")
        const price = formData.get("price")
        const category = formData.get("category")
        const bestSeller = formData.get("bestSeller")
        const description = formData.get("description")
        const offer = formData.get("offer")
        const file = formData.get("file")

        try {

            // Get login token and firm ID
            const loginToken =
                localStorage.getItem("loginToken")

            const firmId =
                localStorage.getItem("firmId")


            console.log("Login Token:", loginToken)
            console.log("Firm ID:", firmId)


            // Check login
            if (!loginToken) {

                alert("Please login first")

                return
            }


            // Check firm
            if (!firmId) {

                alert("Firm ID not found")

                return
            }


            // Console data
            console.log({
                productName,
                price,
                category,
                bestSeller,
                description,
                offer,
                file,
                firmId
            })


            // Send product
            const response = await axios.post(

                `${API_URL}/product/add-product/${firmId}`,

                formData,

                {
                    headers: {
                        token: loginToken
                    }
                }

            )


            console.log(
                "Product response:",
                response.data
            )


            alert("Product added successfully")


        } catch (error) {

            console.error(
                "Failed product submission:",
                error.response?.data ||
                error.message
            )


            console.error(
                "Status:",
                error.response?.status
            )


            alert(
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Failed to add product"
            )

        }

    }


    return (

        <div className="w-[80%] max-sm:w-full flex flex-col items-center justify-center gap-3 my-3">

            <h3 className="text-xl text-orange-400">
                Add Product
            </h3>


            <form
                action={formHandler}
                className="flex flex-col shadow-2xl bg-gray-200 rounded-2xl p-10 gap-3"
            >


                {/* PRODUCT NAME */}

                <label>
                    Product Name
                </label>

                <input
                    type="text"
                    name="productName"
                    placeholder="Enter your Product Name"
                    required
                    className="border px-2 rounded-2xl"
                />


                {/* PRICE */}

                <label>
                    Price
                </label>

                <input
                    type="number"
                    name="price"
                    placeholder="Enter your Price"
                    required
                    className="border px-2 rounded-2xl"
                />


                {/* CATEGORY */}

                <div>

                    <label>
                        Category
                    </label>

                    <div className="flex items-center justify-around mt-2">

                        <label>

                            <input
                                type="radio"
                                name="category"
                                value="veg"
                                required
                            />

                            {" "}Veg

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="category"
                                value="non-veg"
                            />

                            {" "}Non-Veg

                        </label>

                    </div>

                </div>


                {/* BEST SELLER */}

                <div>

                    <label>
                        Best Seller
                    </label>


                    <div className="flex items-center justify-around mt-2">

                        <label>

                            <input
                                type="radio"
                                name="bestSeller"
                                value="Yes"
                                required
                            />

                            {" "}Yes

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="bestSeller"
                                value="No"
                            />

                            {" "}No

                        </label>

                    </div>

                </div>


                {/* DESCRIPTION */}

                <label>
                    Description
                </label>

                <textarea
                    name="description"
                    placeholder="Enter your Description"
                    required
                    rows="4"
                    className="border px-2 py-2 rounded-2xl"
                />


                {/* OFFER */}

                <label>
                    Offer
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
                    Image
                </label>

                <input
                    type="file"
                    name="file"
                    accept="image/*"
                    required
                    className="border px-2 rounded-2xl w-full bg-orange-400 text-white"
                />


                {/* BUTTON */}

                <button
                    type="submit"
                    className="border rounded-2xl p-2 ml-auto"
                >
                    Add Product
                </button>


            </form>

        </div>

    )

}

export default AddProduct