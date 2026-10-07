import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import LandingPage from './vendorDashboard/pages/LandingPage'
import NotFound from './vendorDashboard/components/NotFound'

const App = () => {

    return (

        <div>

            <Routes>

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                }}
            />

        </div>
    )
}

export default App