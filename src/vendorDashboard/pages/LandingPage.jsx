import React, { useState, useEffect } from 'react'

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'


const LandingPage = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showFirm, setShowFirm] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [showProducts, setShowProducts] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false)

    const [showLogOut, setShowLogout] = useState(false)
    const [firmName, setFirmName] = useState('')


    // =====================================
    // CHECK LOGIN WHEN PAGE LOADS
    // =====================================

    useEffect(() => {

        const loginToken =
            localStorage.getItem('loginToken')

        const savedFirmName =
            localStorage.getItem('firmName')

        if (loginToken) {

            setShowLogout(true)
            setFirmName(savedFirmName || '')
            setShowWelcome(true)

        } else {

            setShowLogout(false)
            setFirmName('')
            setShowWelcome(false)

        }

    }, [])


    // =====================================
    // LOGOUT
    // =====================================

    const logOutHandler = () => {

        const confirmLogout = window.confirm(
            'Are you sure you want to logout?'
        )

        if (!confirmLogout) {
            return
        }

        localStorage.removeItem('loginToken')
        localStorage.removeItem('firmId')
        localStorage.removeItem('firmName')

        setShowLogout(false)
        setFirmName('')

        setShowLogin(true)
        setShowRegister(false)
        setShowFirm(false)
        setShowProduct(false)
        setShowProducts(false)
        setShowWelcome(false)

    }


    // =====================================
    // LOGIN
    // =====================================

    const showLoginHandler = () => {

        setShowLogin(true)
        setShowRegister(false)
        setShowFirm(false)
        setShowProduct(false)
        setShowProducts(false)
        setShowWelcome(false)

    }


    // =====================================
    // REGISTER
    // =====================================

    const showRegisterHandler = () => {

        setShowLogin(false)
        setShowRegister(true)
        setShowFirm(false)
        setShowProduct(false)
        setShowProducts(false)
        setShowWelcome(false)

    }


    // =====================================
    // ADD FIRM
    // =====================================

    const showFirmHandler = () => {

        // Do not allow Add Firm after login
        if (showLogOut) {
            
        setShowLogin(false)
        setShowRegister(false)
        setShowFirm(true)
        setShowProduct(false)
        setShowProducts(false)
        setShowWelcome(false)
        }
     else{
      alert('please login')
      setShowLogin(true)
     }

    }


    // =====================================
    // ADD PRODUCT
    // =====================================

    const showProductHandler = () => {

         if(showLogOut){
           setShowLogin(false)
        setShowRegister(false)
        setShowFirm(false)
        setShowProduct(true)
        setShowProducts(false)
        setShowWelcome(false)
         }
        else{
      alert('please login')
      setShowLogin(true)
     }
    }


    // =====================================
    // ALL PRODUCTS
    // =====================================

    const showProductsHandler = () => {

        if(showLogOut){
          setShowLogin(false)
        setShowRegister(false)
        setShowFirm(false)
        setShowProduct(false)
        setShowProducts(true)
        setShowWelcome(false)
        }
         else{
      alert('please login')
      setShowLogin(true)
     }
    }


    // =====================================
    // WELCOME
    // =====================================

    const welcomeHandler = () => {

        const savedFirmName =
            localStorage.getItem('firmName')

        setShowLogin(false)
        setShowRegister(false)
        setShowFirm(false)
        setShowProduct(false)
        setShowProducts(false)
        setShowWelcome(true)

        setShowLogout(true)

        setFirmName(savedFirmName || '')

    }


    return (

        <section>

            {/* ==============================
                NAVBAR
            =============================== */}

            <NavBar
                showLoginHandler={showLoginHandler}
                showRegisterHandler={showRegisterHandler}
                showLogOut={showLogOut}
                logOutHandler={logOutHandler}
                firmName={firmName}
            />


            <section className="flex">

                {/* ==============================
                    SIDEBAR
                =============================== */}

                <SideBar
                    showFirmHandler={showFirmHandler}
                    showProductHandler={showProductHandler}
                    showProductsHandler={showProductsHandler}
                    isLoggedIn={showLogOut}
                />


                {/* ==============================
                    LOGIN
                =============================== */}

                {showLogin && (
                    <Login
                        welcomeHandler={welcomeHandler}
                    />
                )}


                {/* ==============================
                    REGISTER
                =============================== */}

                {showRegister && (
                    <Register
                        showLoginHandler={showLoginHandler}
                    />
                )}


                {/* ==============================
                    ADD FIRM
                =============================== */}

                {showFirm && showLogOut && (
                    <AddFirm />
                )}


                {/* ==============================
                    ADD PRODUCT
                =============================== */}

                {showProduct && showLogOut && (
                    <AddProduct />
                )}


                {/* ==============================
                    ALL PRODUCTS
                =============================== */}

                {showProducts && showLogOut && (
                    <AllProducts />
                )}


                {/* ==============================
                    WELCOME
                =============================== */}

                {showWelcome && (
                    <Welcome />
                )}

            </section>

        </section>
    )
}

export default LandingPage