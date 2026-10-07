import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../data/apiPath";
import toast from "react-hot-toast";

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);


    // ======================================
    // GET ALL PRODUCTS
    // ======================================

    const productsHandler = async () => {

        try {

            const firmId = localStorage.getItem("firmId");
            const loginToken = localStorage.getItem("loginToken");

            console.log("Firm ID:", firmId);
            console.log("Login Token:", loginToken);

            if (!firmId) {
                toast.error("Firm ID not found");
                return;
            }

            if (!loginToken) {
                toast.error("Please login first");
                return;
            }

            setLoading(true);


            // ======================================
            // GET PRODUCTS
            // ======================================

            const response = await axios.get(
                `${API_URL}/product/get-product/${firmId}`
            );


            console.log(
                "Products response:",
                response.data
            );


            setProducts(
                response.data.products || []
            );


        } catch (error) {

            console.error(
                "Failed to fetch products:",
                error.response?.data ||
                error.message
            );

            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Failed to fetch products";

            toast.error(message);

        } finally {

            setLoading(false);

        }

    };


    // ======================================
    // USE EFFECT
    // ======================================

    useEffect(() => {

        productsHandler();

    }, []);


    // ======================================
    // DELETE PRODUCT
    // ======================================

    const deleteProductById = async (productId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) {
            return;
        }


        try {

            const loginToken =
                localStorage.getItem("loginToken");


            if (!loginToken) {

                toast.error("Please login first");

                return;

            }


            setDeletingId(productId);


            // ======================================
            // DELETE PRODUCT
            // ======================================

            const response = await axios.delete(

                `${API_URL}/product/delete-product/${productId}`,

                {
                    headers: {
                        token: loginToken
                    }
                }

            );


            console.log(
                "Delete response:",
                response.data
            );


            // ======================================
            // REMOVE FROM UI
            // ======================================

            setProducts((previousProducts) =>

                previousProducts.filter(
                    (item) => item._id !== productId
                )

            );


            // ======================================
            // SUCCESS TOAST
            // ======================================

            toast.success("Product deleted successfully!");


        } catch (error) {

            console.error(
                "Failed to delete product:",
                error.response?.data ||
                error.message
            );


            const message =
                error.response?.data?.error ||
                error.response?.data?.message ||
                "Failed to delete product";


            toast.error(message);


        } finally {

            setDeletingId(null);

        }

    };


    // ======================================
    // LOADING UI
    // ======================================

    if (loading) {

        return (

            <div className="
                w-full
                min-h-[calc(100vh-80px)]
                flex
                items-center
                justify-center
                bg-gray-50
            ">

                <div className="
                    flex
                    flex-col
                    items-center
                    gap-4
                ">

                    <div className="
                        w-10
                        h-10
                        border-4
                        border-orange-200
                        border-t-orange-500
                        rounded-full
                        animate-spin
                    "></div>

                    <p className="
                        text-gray-500
                        text-sm
                    ">
                        Loading products...
                    </p>

                </div>

            </div>

        );

    }


    // ======================================
    // UI
    // ======================================

    return (

        <div className="
            w-full
            min-h-[calc(100vh-80px)]
            bg-gray-50
            px-4
            py-8
            sm:px-6
            lg:px-8
        ">

            <div className="
                max-w-7xl
                mx-auto
            ">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="
                    flex
                    items-center
                    justify-between
                    mb-7
                    max-sm:flex-col
                    max-sm:items-start
                    max-sm:gap-2
                ">

                    <div>

                        <h2 className="
                            text-3xl
                            font-bold
                            text-orange-500
                            max-sm:text-2xl
                        ">
                            All Products
                        </h2>

                        <p className="
                            text-gray-500
                            text-sm
                            mt-1
                        ">
                            Manage all products available in your firm.
                        </p>

                    </div>


                    {/* PRODUCT COUNT */}

                    <div className="
                        bg-orange-100
                        text-orange-600
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                    ">
                        {products.length}{" "}
                        {products.length === 1
                            ? "Product"
                            : "Products"}
                    </div>

                </div>


                {/* =========================
                    NO PRODUCTS
                ========================= */}

                {products.length === 0 ? (

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow-lg
                        border
                        border-gray-100
                        min-h-72
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-5
                    ">

                        <div className="
                            text-6xl
                            mb-4
                        ">
                            🍽️
                        </div>

                        <h3 className="
                            text-xl
                            font-semibold
                            text-gray-700
                        ">
                            No Products Found
                        </h3>

                        <p className="
                            text-gray-400
                            text-sm
                            mt-2
                        ">
                            Add your first product to see it here.
                        </p>

                    </div>

                ) : (

                    <>


                        {/* =========================
                            DESKTOP TABLE
                        ========================= */}

                        <div className="
                            hidden
                            md:block
                            bg-white
                            rounded-3xl
                            shadow-xl
                            border
                            border-gray-100
                            overflow-hidden
                        ">

                            <div className="
                                overflow-x-auto
                            ">

                                <table className="
                                    w-full
                                    border-collapse
                                ">

                                    <thead>

                                        <tr className="
                                            bg-gray-100
                                            text-gray-700
                                            text-sm
                                        ">

                                            <th className="
                                                px-5
                                                py-4
                                                text-left
                                                font-semibold
                                            ">
                                                Product
                                            </th>

                                            <th className="
                                                px-5
                                                py-4
                                                text-left
                                                font-semibold
                                            ">
                                                Price
                                            </th>

                                            <th className="
                                                px-5
                                                py-4
                                                text-left
                                                font-semibold
                                            ">
                                                Category
                                            </th>

                                            <th className="
                                                px-5
                                                py-4
                                                text-left
                                                font-semibold
                                            ">
                                                Image
                                            </th>

                                            <th className="
                                                px-5
                                                py-4
                                                text-center
                                                font-semibold
                                            ">
                                                Action
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {products.map((item) => (

                                            <tr
                                                key={item._id}
                                                className="
                                                    border-t
                                                    border-gray-100
                                                    hover:bg-orange-50/50
                                                    transition
                                                "
                                            >

                                                {/* PRODUCT */}

                                                <td className="
                                                    px-5
                                                    py-4
                                                ">

                                                    <div>

                                                        <p className="
                                                            font-semibold
                                                            text-gray-800
                                                        ">
                                                            {item.productName}
                                                        </p>

                                                        {item.description && (

                                                            <p className="
                                                                text-xs
                                                                text-gray-400
                                                                mt-1
                                                                max-w-xs
                                                                truncate
                                                            ">
                                                                {item.description}
                                                            </p>

                                                        )}

                                                    </div>

                                                </td>


                                                {/* PRICE */}

                                                <td className="
                                                    px-5
                                                    py-4
                                                ">

                                                    <span className="
                                                        font-semibold
                                                        text-orange-500
                                                    ">
                                                        ₹{item.price}
                                                    </span>

                                                </td>


                                                {/* CATEGORY */}

                                                <td className="
                                                    px-5
                                                    py-4
                                                ">

                                                    <span className={`
                                                        inline-flex
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        text-xs
                                                        font-semibold
                                                        ${
                                                            item.category === "veg"
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-red-100 text-red-700"
                                                        }
                                                    `}>
                                                        {item.category}
                                                    </span>

                                                </td>


                                                {/* IMAGE */}

                                                <td className="
                                                    px-5
                                                    py-4
                                                ">

                                                    {item.image ? (

                                                        <img
                                                            src={`${API_URL}/uploads/${item.image}`}
                                                            alt={item.productName}
                                                            className="
                                                                w-20
                                                                h-20
                                                                object-cover
                                                                rounded-xl
                                                                shadow-sm
                                                                border
                                                                border-gray-100
                                                            "
                                                        />

                                                    ) : (

                                                        <div className="
                                                            w-20
                                                            h-20
                                                            rounded-xl
                                                            bg-gray-100
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-2xl
                                                        ">
                                                            🍽️
                                                        </div>

                                                    )}

                                                </td>


                                                {/* DELETE */}

                                                <td className="
                                                    px-5
                                                    py-4
                                                    text-center
                                                ">

                                                    <button
                                                        onClick={() =>
                                                            deleteProductById(
                                                                item._id
                                                            )
                                                        }
                                                        disabled={
                                                            deletingId === item._id
                                                        }
                                                        className="
                                                            bg-red-500
                                                            hover:bg-red-600
                                                            text-white
                                                            px-4
                                                            py-2
                                                            rounded-xl
                                                            text-sm
                                                            font-medium
                                                            transition
                                                            disabled:opacity-50
                                                            disabled:cursor-not-allowed
                                                        "
                                                    >

                                                        {deletingId === item._id
                                                            ? "Deleting..."
                                                            : "Delete"}

                                                    </button>

                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>


                        {/* =========================
                            MOBILE CARDS
                        ========================= */}

                        <div className="
                            md:hidden
                            space-y-5
                        ">

                            {products.map((item) => (

                                <div
                                    key={item._id}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        shadow-lg
                                        border
                                        border-gray-100
                                        p-5
                                    "
                                >

                                    {/* IMAGE + NAME */}

                                    <div className="
                                        flex
                                        gap-4
                                        items-center
                                    ">

                                        {item.image ? (

                                            <img
                                                src={`${API_URL}/uploads/${item.image}`}
                                                alt={item.productName}
                                                className="
                                                    w-24
                                                    h-24
                                                    object-cover
                                                    rounded-2xl
                                                    border
                                                    border-gray-100
                                                    shadow-sm
                                                "
                                            />

                                        ) : (

                                            <div className="
                                                w-24
                                                h-24
                                                rounded-2xl
                                                bg-gray-100
                                                flex
                                                items-center
                                                justify-center
                                                text-3xl
                                            ">
                                                🍽️
                                            </div>

                                        )}


                                        <div className="min-w-0">

                                            <h3 className="
                                                font-bold
                                                text-gray-800
                                                text-lg
                                                truncate
                                            ">
                                                {item.productName}
                                            </h3>

                                            <p className="
                                                text-orange-500
                                                font-bold
                                                mt-1
                                            ">
                                                ₹{item.price}
                                            </p>

                                            <span className={`
                                                inline-block
                                                mt-2
                                                px-3
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-semibold
                                                ${
                                                    item.category === "veg"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                }
                                            `}>
                                                {item.category}
                                            </span>

                                        </div>

                                    </div>


                                    {/* DESCRIPTION */}

                                    {item.description && (

                                        <p className="
                                            text-sm
                                            text-gray-500
                                            mt-4
                                            leading-6
                                        ">
                                            {item.description}
                                        </p>

                                    )}


                                    {/* OFFER */}

                                    {item.offer && (

                                        <div className="
                                            mt-4
                                            bg-orange-50
                                            text-orange-600
                                            rounded-xl
                                            px-4
                                            py-2
                                            text-sm
                                            font-medium
                                        ">
                                            🎁 {item.offer}
                                        </div>

                                    )}


                                    {/* DELETE */}

                                    <button
                                        onClick={() =>
                                            deleteProductById(
                                                item._id
                                            )
                                        }
                                        disabled={
                                            deletingId === item._id
                                        }
                                        className="
                                            w-full
                                            mt-5
                                            bg-red-500
                                            hover:bg-red-600
                                            text-white
                                            py-2.5
                                            rounded-xl
                                            font-medium
                                            transition
                                            disabled:opacity-50
                                            disabled:cursor-not-allowed
                                        "
                                    >

                                        {deletingId === item._id
                                            ? "Deleting..."
                                            : "Delete Product"}

                                    </button>

                                </div>

                            ))}

                        </div>

                    </>

                )}

            </div>

        </div>

    );

};

export default AllProducts;