import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes, useParams} from "react-router-dom";
import ProductListingPage from "./ui/page/ProductListingPage";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import ErrorPage from "./ui/page/ErrorPage";
import LoginPage from "./ui/page/LoginPage";

function App() {

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<ProductListingPage/>}/>
                    <Route path="/product/:productId" element={<ProductDetailPage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    {/*<Route path='/error' element={<ErrorPage/>}/>*/}
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
