import React, { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddFirm from "../components/forms/AddFirm";
import AddProduct from "../components/forms/AddProduct";

import Welcome from "../components/Welcome";
import AllProducts from "../components/AllProducts";
import Home from "../components/Home";

const LandingPage = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showFirm, setShowFirm] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);

    const [showLogOut, setShowLogout] = useState(false);

    const [firmName, setFirmName] = useState("");
    const [firmId, setFirmId] = useState("");

    const [hasFirm, setHasFirm] = useState(false);

    const [username, setUsername] = useState("");


    // =========================
    // CHECK LOGIN
    // =========================

    useEffect(() => {

        const loginToken = localStorage.getItem("loginToken");
        const savedFirmId = localStorage.getItem("firmId");
        const savedFirmName = localStorage.getItem("firmName");
        const savedUsername = localStorage.getItem("username");

        if (loginToken) {

            setShowLogout(true);

            setFirmId(savedFirmId || "");
            setFirmName(savedFirmName || "");
            setHasFirm(!!savedFirmId);

            setUsername(savedUsername || "");

            setShowLogin(false);
            setShowRegister(false);
            setShowFirm(false);
            setShowProduct(false);
            setShowProducts(false);
            setShowWelcome(true);

        } else {

            setShowLogout(false);

            setFirmId("");
            setFirmName("");
            setHasFirm(false);
            setUsername("");

            setShowLogin(false);
            setShowRegister(false);
            setShowFirm(false);
            setShowProduct(false);
            setShowProducts(false);
            setShowWelcome(false);
        }

    }, []);


    // =========================
    // LOGOUT
    // =========================

    const logOutHandler = () => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        localStorage.removeItem("loginToken");
        localStorage.removeItem("firmId");
        localStorage.removeItem("firmName");
        localStorage.removeItem("username");

        setShowLogout(false);

        setFirmId("");
        setFirmName("");
        setHasFirm(false);
        setUsername("");

        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowProducts(false);
        setShowWelcome(false);
    };


    // =========================
    // LOGIN
    // =========================

    const showLoginHandler = () => {

        setShowLogin(true);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowProducts(false);
        setShowWelcome(false);
    };


    // =========================
    // REGISTER
    // =========================

    const showRegisterHandler = () => {

        setShowLogin(false);
        setShowRegister(true);
        setShowFirm(false);
        setShowProduct(false);
        setShowProducts(false);
        setShowWelcome(false);
    };


    // =========================
    // ADD FIRM
    // =========================

    const showFirmHandler = () => {

        if (!showLogOut) {

            alert("Please login");
            showLoginHandler();

            return;
        }

        if (hasFirm) {

            alert("Firm already added");

            return;
        }

        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(true);
        setShowProduct(false);
        setShowProducts(false);
        setShowWelcome(false);
    };


    // =========================
    // FIRM ADDED
    // =========================

    const firmAddedHandler = (newFirmId, newFirmName) => {

        localStorage.setItem("firmId", newFirmId);
        localStorage.setItem("firmName", newFirmName);

        setFirmId(newFirmId);
        setFirmName(newFirmName);
        setHasFirm(true);

        setShowFirm(false);
        setShowWelcome(true);
    };


    // =========================
    // ADD PRODUCT
    // =========================

    const showProductHandler = () => {

        if (!showLogOut) {

            alert("Please login");
            showLoginHandler();

            return;
        }

        if (!firmId) {

            alert("Please add your firm first");

            return;
        }

        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(true);
        setShowProducts(false);
        setShowWelcome(false);
    };


    // =========================
    // ALL PRODUCTS
    // =========================

    const showProductsHandler = () => {

        if (!showLogOut) {

            alert("Please login");
            showLoginHandler();

            return;
        }

        if (!firmId) {

            alert("Please add your firm first");

            return;
        }

        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowProducts(true);
        setShowWelcome(false);
    };


    // =========================
    // AFTER LOGIN
    // =========================

    const welcomeHandler = () => {

        const savedFirmId = localStorage.getItem("firmId");
        const savedFirmName = localStorage.getItem("firmName");
        const savedUsername = localStorage.getItem("username");

        setShowLogout(true);

        setFirmId(savedFirmId || "");
        setFirmName(savedFirmName || "");
        setHasFirm(!!savedFirmId);

        setUsername(savedUsername || "");

        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowProducts(false);
        setShowWelcome(true);
    };


    // =========================
    // DASHBOARD
    // =========================

    const dashboardHandler = () => {

        const loginToken = localStorage.getItem("loginToken");

        if (!loginToken) {

            showLoginHandler();

            return;
        }

        const savedFirmId = localStorage.getItem("firmId");
        const savedFirmName = localStorage.getItem("firmName");
        const savedUsername = localStorage.getItem("username");

        setShowLogout(true);

        setFirmId(savedFirmId || "");
        setFirmName(savedFirmName || "");
        setHasFirm(!!savedFirmId);

        setUsername(savedUsername || "");

        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowProducts(false);
        setShowWelcome(true);
    };


    // =========================
    // HOME
    // =========================

    const isHome =
        !showLogin &&
        !showRegister &&
        !showFirm &&
        !showProduct &&
        !showProducts &&
        !showWelcome;


    return (

        <section className="min-h-screen w-full overflow-x-hidden">

            {/* NAVBAR */}

            <NavBar
                showLoginHandler={showLoginHandler}
                showRegisterHandler={showRegisterHandler}
                showLogOut={showLogOut}
                logOutHandler={logOutHandler}
                firmName={firmName}
                dashboardHandler={dashboardHandler}
            />


            {/* MAIN */}

            <section className="flex w-full min-h-[calc(100vh-80px)]">

                {/* SIDEBAR */}

                <SideBar
                    showFirmHandler={showFirmHandler}
                    showProductHandler={showProductHandler}
                    showProductsHandler={showProductsHandler}
                    isLoggedIn={showLogOut}
                    hasFirm={hasFirm}
                />


                {/* CONTENT */}

                <main className="w-[80%] max-sm:w-full min-w-0">

                    {/* HOME */}

                    {isHome && (
                        <Home
                            showLoginHandler={showLoginHandler}
                        />
                    )}


                    {/* LOGIN */}

                    {showLogin && (
                        <Login
                            welcomeHandler={welcomeHandler}
                        />
                    )}


                    {/* REGISTER */}

                    {showRegister && (
                        <Register
                            showLoginHandler={showLoginHandler}
                        />
                    )}


                    {/* ADD FIRM */}

                    {showFirm && (
                        <AddFirm
                            firmAddedHandler={firmAddedHandler}
                        />
                    )}


                    {/* ADD PRODUCT */}

                    {showProduct && (
                        <AddProduct />
                    )}


                    {/* ALL PRODUCTS */}

                    {showProducts && (
                        <AllProducts />
                    )}


                    {/* WELCOME */}

                    {showWelcome && (
                        <Welcome
                            username={username}
                        />
                    )}

                </main>

            </section>


            {/* FOOTER */}

            <Footer />

        </section>
    );
};

export default LandingPage;