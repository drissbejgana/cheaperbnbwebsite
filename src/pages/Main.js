import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Deals from '../components/Deals';
import Exeperience from '../components/Exeperience';
import Footer from '../components/footer';
import Header from '../components/Header';
import Home from '../components/Home';

const Main = () => {
    return (
        <>
          <Header/>
          
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='Experiences/:category' element={<Exeperience/>}></Route>
                </Routes>
           
          <Footer/>
        </>
    );
};

export default Main;