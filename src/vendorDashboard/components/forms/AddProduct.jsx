import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import API_URL from "../../data/apiPath";

const AddProduct = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formHandler = async (formData) => {

        setError("");
        setLoading(true);

        const productName = formData.get("productName");
        const price = formData.get("price");
        const category = formData.get("category");
        const bestSeller = formData.get("bestSeller");
        const description = formData.get("description");
        const offer = formData.get("offer");
        const file = formData.get("file");

        try {

            // ===============================
            // GET LOGIN TOKEN
            // ===============================

            const loginToken =
                localStorage.getItem("loginToken");


            // ===============================
            // GET FIRM ID
            // ===============================

            const firmId =
                localStorage.getItem("firmId");


            console.log("Login Token:", loginToken);
            console.log("Firm ID:", firmId);


            // ===============================
            // CHECK LOGIN
            // ===============================

            if (!loginToken) {

                setError("Please login first");

                toast.error("Please login first");

                return;
            }


            // ===============================
            // CHECK FIRM
            // ===============================

            if (!firmId) {

                const message =
                    "Firm ID not found. Please add your firm first.";

                setError(message);

                toast.error(message);

                return;
            }


            // ===============================
            // CONSOLE DATA
            // ===============================

            console.log({
                productName,
                price,
                category,
                bestSeller,
                description,
                offer,
                file,
                firmId
            });


            // ===============================
            // SEND PRODUCT
            // ===============================

            const response = await axios.post(

                `${API_URL}/product/add-product/${firmId}`,

                formData,

                {
                    headers: {
                        token: loginToken
                    }
                }

            );


            // ===============================
            // RESPONSE
            // ===============================

            console.log(
                "Product response:",
                response.data
            );


            // ===============================
            // SUCCESS
            // ===============================

            toast.success("Product added successfully!");


        } catch (error) {

            console.error(
                "Failed product submission:",
                error.response?.data ||
                error.message
            );


            console.error(
                "Status:",
                error.response?.status
            );


            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Failed to add product";


            setError(message);

            toast.error(message);


        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="
            w-full
            min-h-[calc(100vh-80px)]
            flex
            items-center
            justify-center
            px-4
            py-10
            bg-gray-50
        ">

            <div className="
                w-full
                max-w-2xl
            ">

                {/* =========================
                    HEADER
                ========================= */}

                <div className="text-center mb-7">

                    <h2 className="
                        text-3xl
                        font-bold
                        text-orange-500
                        max-sm:text-2xl
                    ">
                        Add New Product
                    </h2>

                    <p className="
                        text-gray-500
                        mt-2
                        text-sm
                    ">
                        Add your food items and make them available
                        to your customers.
                    </p>

                </div>


                {/* =========================
                    FORM CARD
                ========================= */}

                <form
                    action={formHandler}
                    className="
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        border-gray-100
                        p-8
                        sm:p-10
                        space-y-6
                    "
                >

                    {/* =========================
                        PRODUCT INFORMATION
                    ========================= */}

                    <div>

                        <h3 className="
                            text-lg
                            font-semibold
                            text-gray-800
                            mb-4
                            flex
                            items-center
                            gap-2
                        ">

                            <span className="
                                w-1.5
                                h-6
                                bg-orange-400
                                rounded-full
                            "></span>

                            Product Information

                        </h3>


                        {/* PRODUCT NAME */}

                        <div className="mb-5">

                            <label className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            ">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="productName"
                                placeholder="Enter product name"
                                required
                                className="
                                    w-full
                                    h-11
                                    px-4
                                    border
                                    border-gray-300
                                    rounded-xl
                                    outline-none
                                    transition
                                    focus:border-orange-400
                                    focus:ring-2
                                    focus:ring-orange-100
                                    placeholder:text-gray-400
                                "
                            />

                        </div>


                        {/* PRICE */}

                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            ">
                                Price
                            </label>

                            <div className="relative">

                                <span className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-500
                                    font-medium
                                ">
                                    ₹
                                </span>

                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Enter price"
                                    min="0"
                                    required
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        pr-4
                                        border
                                        border-gray-300
                                        rounded-xl
                                        outline-none
                                        transition
                                        focus:border-orange-400
                                        focus:ring-2
                                        focus:ring-orange-100
                                        placeholder:text-gray-400
                                    "
                                />

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        CATEGORY
                    ========================= */}

                    <div>

                        <h3 className="
                            text-lg
                            font-semibold
                            text-gray-800
                            mb-4
                            flex
                            items-center
                            gap-2
                        ">

                            <span className="
                                w-1.5
                                h-6
                                bg-orange-400
                                rounded-full"
                            ></span>

                            Category

                        </h3>


                        <div className="
                            grid
                            grid-cols-2
                            gap-4
                        ">

                            {/* VEG */}

                            <label className="
                                flex
                                items-center
                                gap-3
                                border
                                border-gray-200
                                rounded-xl
                                p-4
                                cursor-pointer
                                hover:border-green-400
                                hover:bg-green-50
                                transition
                            ">

                                <input
                                    type="radio"
                                    name="category"
                                    value="veg"
                                    required
                                    className="
                                        w-4
                                        h-4
                                        accent-green-500
                                    "
                                />

                                <div>

                                    <p className="
                                        font-medium
                                        text-gray-700
                                    ">
                                        🥗 Veg
                                    </p>

                                    <p className="
                                        text-xs
                                        text-gray-400
                                    ">
                                        Vegetarian
                                    </p>

                                </div>

                            </label>


                            {/* NON VEG */}

                            <label className="
                                flex
                                items-center
                                gap-3
                                border
                                border-gray-200
                                rounded-xl
                                p-4
                                cursor-pointer
                                hover:border-red-400
                                hover:bg-red-50
                                transition
                            ">

                                <input
                                    type="radio"
                                    name="category"
                                    value="non-veg"
                                    className="
                                        w-4
                                        h-4
                                        accent-red-500
                                    "
                                />

                                <div>

                                    <p className="
                                        font-medium
                                        text-gray-700
                                    ">
                                        🍗 Non-Veg
                                    </p>

                                    <p className="
                                        text-xs
                                        text-gray-400
                                    ">
                                        Non Vegetarian
                                    </p>

                                </div>

                            </label>

                        </div>

                    </div>


                    {/* =========================
                        BEST SELLER
                    ========================= */}

                    <div>

                        <h3 className="
                            text-lg
                            font-semibold
                            text-gray-800
                            mb-4
                            flex
                            items-center
                            gap-2
                        ">

                            <span className="
                                w-1.5
                                h-6
                                bg-orange-400
                                rounded-full
                            "></span>

                            Best Seller

                        </h3>


                        <div className="
                            grid
                            grid-cols-2
                            gap-4
                        ">

                            {/* YES */}

                            <label className="
                                flex
                                items-center
                                gap-3
                                border
                                border-gray-200
                                rounded-xl
                                p-4
                                cursor-pointer
                                hover:border-orange-400
                                hover:bg-orange-50
                                transition
                            ">

                                <input
                                    type="radio"
                                    name="bestSeller"
                                    value="Yes"
                                    required
                                    className="
                                        w-4
                                        h-4
                                        accent-orange-500
                                    "
                                />

                                <span className="
                                    font-medium
                                    text-gray-700
                                ">
                                    ⭐ Yes
                                </span>

                            </label>


                            {/* NO */}

                            <label className="
                                flex
                                items-center
                                gap-3
                                border
                                border-gray-200
                                rounded-xl
                                p-4
                                cursor-pointer
                                hover:border-gray-400
                                hover:bg-gray-50
                                transition
                            ">

                                <input
                                    type="radio"
                                    name="bestSeller"
                                    value="No"
                                    className="
                                        w-4
                                        h-4
                                        accent-orange-500
                                    "
                                />

                                <span className="
                                    font-medium
                                    text-gray-700
                                ">
                                    No
                                </span>

                            </label>

                        </div>

                    </div>


                    {/* =========================
                        DESCRIPTION
                    ========================= */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-700
                            mb-2
                        ">
                            Description
                        </label>

                        <textarea
                            name="description"
                            placeholder="Describe your product..."
                            required
                            rows="5"
                            className="
                                w-full
                                px-4
                                py-3
                                border
                                border-gray-300
                                rounded-xl
                                outline-none
                                resize-none
                                transition
                                focus:border-orange-400
                                focus:ring-2
                                focus:ring-orange-100
                                placeholder:text-gray-400
                            "
                        />

                    </div>


                    {/* =========================
                        OFFER
                    ========================= */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-gray-700
                            mb-2
                        ">
                            Offer
                        </label>

                        <input
                            type="text"
                            name="offer"
                            placeholder="Example: 10% OFF"
                            required
                            className="
                                w-full
                                h-11
                                px-4
                                border
                                border-gray-300
                                rounded-xl
                                outline-none
                                transition
                                focus:border-orange-400
                                focus:ring-2
                                focus:ring-orange-100
                                placeholder:text-gray-400
                            "
                        />

                    </div>


                    {/* =========================
                        IMAGE
                    ========================= */}

                    <div>

                        <h3 className="
                            text-lg
                            font-semibold
                            text-gray-800
                            mb-4
                            flex
                            items-center
                            gap-2
                        ">

                            <span className="
                                w-1.5
                                h-6
                                bg-orange-400
                                rounded-full
                            "></span>

                            Product Image

                        </h3>


                        <label className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            w-full
                            min-h-36
                            border-2
                            border-dashed
                            border-gray-300
                            rounded-2xl
                            cursor-pointer
                            bg-gray-50
                            hover:bg-orange-50
                            hover:border-orange-400
                            transition
                        ">

                            <div className="text-center">

                                <div className="
                                    text-4xl
                                    mb-2
                                ">
                                    🍔
                                </div>

                                <p className="
                                    text-sm
                                    font-medium
                                    text-gray-700
                                ">
                                    Choose product image
                                </p>

                                <p className="
                                    text-xs
                                    text-gray-400
                                    mt-1
                                ">
                                    PNG, JPG or JPEG
                                </p>

                            </div>


                            <input
                                type="file"
                                name="file"
                                accept="image/*"
                                required
                                className="hidden"
                            />

                        </label>

                    </div>


                    {/* =========================
                        ERROR
                    ========================= */}

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
                        ">
                            {error}
                        </div>

                    )}


                    {/* =========================
                        BUTTON
                    ========================= */}

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
                            transition-all
                            duration-200
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                            disabled:active:scale-100
                            cursor-pointer
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

                                Adding Product...

                            </span>

                        ) : (

                            "Add Product"

                        )}

                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddProduct;