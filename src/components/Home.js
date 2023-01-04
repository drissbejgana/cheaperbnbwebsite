import React from 'react';

import image1 from "../images/cheaperbn_marrakech_massage.webp"
import image2 from "../images/cheaperbnb_afgay_desert.webp"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>

        <div id="sec1" className="container d-flex flex-wrap-reverse align-items-center justify-content-evenly">
     
        <div id="images" className="d-flex mt-5 mb-5" >
                <Link to={'Experiences/massage-marrakech'} className="aa"   id="img1">
                    <img  width="100%" height="100%" src={image1} alt="marrkech_massage" />
                    <div className="filter"></div>
                    <div className="imgtxt fw-bold fs-4">MASSAGE IN MARRAKECH</div>
                </Link>
                <Link to={'Experiences/agafay-luxury-camp'} className="aa" id="img2" alt="agafay_desert">
                    <img  width="100%" height="100%" src={image2} alt="" />
                    <div className="filter"></div>
                    <div className="imgtxt fw-bold fs-4">AGAFAY DESERT</div>

                </Link>  
         </div>
             <div className="title">
                <h1 className="text-muted text-break fw-bold w-50 m-auto">LET'S THINK BIG SAVINGS!</h1>
                <p className="text-muted text-break fw-semibold w-50 m-auto">
                    Book a Message in Marrkech, or a stay in Agafay luxury camps,and more.
                </p>   
            </div>
        </div>

         <div className="line"></div>

         <div id="sec2" className="container med d-flex justify-content-between ps-5 mt-5 mb-5">
            <div className="title w-50">
                <h1 className="text-muted text-break fw-bold  ">HURRY UP! WHEN IT'S GONE,IT'S GONE.</h1>
                <h5 className="text-muted text-break fw-bold ">
                  YOUR WALLET-FRIENDLY SALE.
                </h5>
                <div id="form" className="d-flex align-items-center mb-3 ">
                    <input type="email" className="form-control rounded w-50" placeholder="enter your email-adress"/> 
                    <div className="icon"></div> 
                </div>
                <p className="text-muted">Subscribe to our newsletter</p>
            </div>
            <div className="text w-50">
                <p className="text-muted fw-semibold">
                    We might be biased, but you'll be hard-pressed to find better hard-picked deals on tours, and experiences in Marrakech and Agafay desert. The Cheaperbnb team searches the web and in person every day to find the very best deals newsletter to get fresh deals in your inbox every day!
                </p>
            </div>

         </div>

         <div className="line"></div>

      </main>

    );
};

export default Home;