import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import API_URL from "../../data/apiPath";

const AddFirm = ({ firmAddedHandler }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formHandler = async (formData) => {

        setError("");
        setLoading(true);

        try {

            // ===============================
            // GET LOGIN TOKEN
            // ===============================

            const loginToken = localStorage.getItem("loginToken");

            console.log("LOGIN TOKEN:", loginToken);

            if (!loginToken) {

                setError("Please login first");

                toast.error("Please login first");

                return;
            }


            // ===============================
            // GET FIRM NAME
            // ===============================

            const firmName = formData.get("firmName");

            console.log("FIRM NAME:", firmName);


            // ===============================
            // FORM DATA
            // ===============================

            console.log("FORM DATA:");

            for (const [key, value] of formData.entries()) {
                console.log(key, value);
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
            );


            // ===============================
            // RESPONSE
            // ===============================

            console.log("FIRM RESPONSE:", response.data);


            // ===============================
            // GET FIRM ID
            // ===============================

            const newFirmId = response.data?.firmId;

            if (!newFirmId) {

                console.error(
                    "Firm ID was not returned by backend"
                );

                const message =
                    "Firm added but Firm ID was not received from server";

                setError(message);

                toast.error(message);

                return;
            }


            // ===============================
            // SAVE FIRM ID
            // ===============================

            localStorage.setItem(
                "firmId",
                newFirmId
            );


            // ===============================
            // SAVE FIRM NAME
            // ===============================

            localStorage.setItem(
                "firmName",
                firmName
            );


            console.log(
                "FIRM ID SAVED:",
                newFirmId
            );

            console.log(
                "FIRM NAME SAVED:",
                firmName
            );


            // ===============================
            // TELL LANDING PAGE
            // ===============================

            if (firmAddedHandler) {

                firmAddedHandler(
                    newFirmId,
                    firmName
                );

            }


            // ===============================
            // SUCCESS TOAST
            // ===============================

            toast.success("Firm added successfully!");


        } catch (error) {

            console.error(
                "FAILED FIRM SUBMISSION:",
                error.response?.data || error.message
            );

            console.error(
                "STATUS:",
                error.response?.status
            );


            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Failed to add firm";


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
                        Add Your Firm
                    </h2>

                    <p className="
                        text-gray-500
                        mt-2
                        text-sm
                    ">
                        Create your restaurant profile and start
                        managing your products.
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
                        BASIC INFORMATION
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

                            Basic Information

                        </h3>


                        {/* FIRM NAME */}

                        <div className="mb-5">

                            <label className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            ">
                                Firm Name
                            </label>

                            <input
                                type="text"
                                name="firmName"
                                placeholder="Enter your firm name"
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


                        {/* AREA */}

                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            ">
                                Area
                            </label>

                            <input
                                type="text"
                                name="area"
                                placeholder="Enter your area"
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
                                rounded-full
                            "></span>

                            Food Category

                        </h3>


                        <div className="
                            grid
                            grid-cols-2
                            gap-4
                        ">

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
                                    type="checkbox"
                                    name="category"
                                    value="veg"
                                    className="
                                        w-4
                                        h-4
                                        accent-orange-500
                                    "
                                />

                                <span className="
                                    text-gray-700
                                    font-medium
                                ">
                                    🥗 Veg
                                </span>

                            </label>


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
                                    type="checkbox"
                                    name="category"
                                    value="non-veg"
                                    className="
                                        w-4
                                        h-4
                                        accent-orange-500
                                    "
                                />

                                <span className="
                                    text-gray-700
                                    font-medium
                                ">
                                    🍗 Non-Veg
                                </span>

                            </label>

                        </div>

                    </div>


                    {/* =========================
                        REGION
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

                            Food Region

                        </h3>


                        <div className="
                            grid
                            grid-cols-2
                            sm:grid-cols-4
                            gap-3
                        ">

                            <label className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-200
                                rounded-xl
                                px-3
                                py-3
                                cursor-pointer
                                hover:border-orange-400
                                hover:bg-orange-50
                                transition
                                text-sm
                            ">

                                <input
                                    type="checkbox"
                                    name="region"
                                    value="south indian"
                                    className="
                                        accent-orange-500
                                    "
                                />

                                South Indian

                            </label>


                            <label className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-200
                                rounded-xl
                                px-3
                                py-3
                                cursor-pointer
                                hover:border-orange-400
                                hover:bg-orange-50
                                transition
                                text-sm
                            ">

                                <input
                                    type="checkbox"
                                    name="region"
                                    value="north indian"
                                    className="
                                        accent-orange-500
                                    "
                                />

                                North Indian

                            </label>


                            <label className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-200
                                rounded-xl
                                px-3
                                py-3
                                cursor-pointer
                                hover:border-orange-400
                                hover:bg-orange-50
                                transition
                                text-sm
                            ">

                                <input
                                    type="checkbox"
                                    name="region"
                                    value="bakery"
                                    className="
                                        accent-orange-500
                                    "
                                />

                                Bakery

                            </label>


                            <label className="
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-200
                                rounded-xl
                                px-3
                                py-3
                                cursor-pointer
                                hover:border-orange-400
                                hover:bg-orange-50
                                transition
                                text-sm
                            ">

                                <input
                                    type="checkbox"
                                    name="region"
                                    value="chinese"
                                    className="
                                        accent-orange-500
                                    "
                                />

                                Chinese

                            </label>

                        </div>

                    </div>


                    {/* =========================
                        OFFER
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

                            Offer

                        </h3>


                        <input
                            type="text"
                            name="offer"
                            placeholder="Example: 20% OFF on orders above ₹500"
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

                            Firm Image

                        </h3>


                        <label className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            w-full
                            min-h-32
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
                                    text-3xl
                                    mb-2
                                ">
                                    📷
                                </div>

                                <p className="
                                    text-sm
                                    font-medium
                                    text-gray-700
                                ">
                                    Choose your firm image
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
                            cursor-pointer
                            font-semibold
                            rounded-xl
                            shadow-md
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

                                Adding Firm...

                            </span>

                        ) : (

                            "Add Firm"

                        )}

                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddFirm;