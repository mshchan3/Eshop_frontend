import React, {createContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import ErrorPage from "./ui/page/ErrorPage";
import LoginPage from "./ui/page/LoginPage";
import HomePage from "./ui/page/HomePage";
import SearchListingPage from "./ui/page/SearchListingPage";
import SearchCategoryListingPage from "./ui/page/SearchCategoryListingPage";
import {UserData} from "./data/UserData";
import FirebaseAuthService from "./authService/FirebaseAuthService";
import LoadingSpinner from "./ui/component/LoadingSpinner";
import ShoppingCartPage from "./ui/page/ShoppingCartPage";
import CheckOutPage from "./ui/page/CheckOutPage";
import ProductListingPage from "./ui/page/ProductListingPage";
import PaymentSuccessPage from "./ui/page/PaymentSuccessPage";
import PaymentCancelledPage from "./ui/page/PaymentCancelledPage";
import UserTransactionPage from "./ui/page/UserTransactionPage";

export const userContext = createContext<UserData | null | undefined>(undefined);

function App() {
    const [user, setUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setUser);
        document.title = "StockX"
    }, [])

    const renderApp = () => {
        if (user !== undefined) {
            return (
                <userContext.Provider value={user}>
                    <div className="App">
                        <HashRouter>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/product" element={<ProductListingPage/>}/>
                                <Route path="/product/:productId" element={<ProductDetailPage/>}/>
                                <Route path="/search/:productName" element={<SearchListingPage/>}/>
                                <Route path="/search-category/:category" element={<SearchCategoryListingPage/>}/>
                                <Route path="/shopping-cart" element={user ? <ShoppingCartPage/> : <Navigate to="/login"/>}/>
                                <Route path="/checkout" element={user ? <CheckOutPage/> : <Navigate to="/login"/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path='*' element={<Navigate to="/error"/>}/>
                                <Route path='/error' element={<ErrorPage/>}/>
                                <Route path="/checkout/success" element={<PaymentSuccessPage/>}/>
                                <Route path="/checkout/cancelled" element={<PaymentCancelledPage/>}/>
                                <Route path="/transaction-record" element={<UserTransactionPage/>}/>
                            </Routes>
                        </HashRouter>
                    </div>
                </userContext.Provider>
            )
        } else {
            return <LoadingSpinner/>
        }
    }

    return (
        <div>
        {
            renderApp()
        }
        </div>
    );
}

export default App;
