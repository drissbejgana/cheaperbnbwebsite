import React from 'react';
import { useParams } from 'react-router-dom';

import image1 from "../images/cheaperbn_marrakech_massage.webp"
import image2 from "../images/marrekechspa.webp"
import image3 from "../images/hammammarrakech.webp"
import image4 from "../images/massagemarrakech.webp"


import agfayimg1 from "../images/cheaperbnb_afgay_desert.webp"
import agfayimg2 from "../images/agafay_desert_1.webp"
import agfayimg3 from "../images/agafay_desert_2.webp"
import agfayimg4 from "../images/agafay_desert_3.webp"

const Exeperience = () => {
    const {category}=useParams()


let data=[{
    id:1,
    cat:"agafay-luxury-camp",
    title:"AGAFAY LUXURY CAMP & EXEPERIENCE IN AGAFAY DESERT",
    subtitle:"We offer you the best discounts in the region of Marrakech and Agafay. Our partners offer hosting and experiences at Agafay desert at a breathtaking price.",
    items:[
        {
            id:1,
            rating:'4.98',
            nphr:'494',
            img:`${agfayimg1}`,
            desc:'Agafay desert luxury camp one light at it.',
            price:20,
        },
        {
            id:2,
            rating:'4.98',
            nphr:'494',
            img:`${agfayimg2}`,
            desc:'Agafay desert luxury camp one light at it.',
            price:20,
            idcat:1
        },
        {
          id:3,
          rating:'4.98',
          nphr:'494',
          img:`${agfayimg3}`,
          desc:'Agafay desert luxury camp one light at it.',
          price:20,
          idcat:1
      },
      {
        id:4,
        rating:'4.98',
        nphr:'494',
        img:`${agfayimg4}`,
        desc:'Agafay desert luxury camp one light at it.',
        price:20,
        idcat:1
    }
    ]
},
{
    id:2,
    cat:"massage-marrakech",
    title:"HAMMAM & MASSAGE IN MARRAKECH BEST DEALS",
    subtitle:"We offer you the best discounts in the region of Marrakech and Agafay. Our partners offer hammam and massage in marrkech at a breathtaking price.",
    items:[
        {
            id:1,
            rating:'4.94',
            nphr:'494',
            img:`${image1}`,
            desc:'Hammam et Massage au Mythic spa de Marrakech',
            price:20,
        },
        {
            id:2,
            rating:'4.94',
            nphr:'494',
            img:`${image2}`,
            desc:'Hammam et Massage au Mythic spa de Marrakech',
            price:20,
            idcat:1
        },
        {
          id:2,
          rating:'4.94',
          nphr:'494',
          img:`${image3}`,

          desc:'Hammam et Massage au Mythic spa de Marrakech',
          price:20,
          idcat:1
      },
      {
          id:2,
          rating:'4.94',
          nphr:'494',
          img:`${image4}`,

          desc:'Hammam et Massage au Mythic spa de Marrakech',
          price:20,
          idcat:1
      }
    ]
},

]

  data=data.filter((item) =>{
    return category == item.cat;
   })


if(data.length>0)
    return (
        <div className='container'>
           <div className="mt-5 w-50 m-auto">
                <h3 className="text-muted text-center text-break fw-bold m-auto">{data[0].title}</h3>
                <p className="text-muted text-center text-break fw-semibold m-auto">
                    {data[0].subtitle}
                </p>   
            </div>
           
  
<div className="d-flex flex-wrap justify-content-around ">
  {
    data[0].items.map((item,index)=>(
<div key={index} className="mt-5" style={{maxWidth:"200px"}}>
         <a href='#'><img className="expimg rounded-3" src={item.img} alt="" /></a> 
          <div className="mt-3">
              <div className="fw-bold" >
                <i className="bi bi-star-fill"></i> {item.rating} <span className="text-muted">{'('+item.nphr+')'}</span>
              </div>
              <div className="text-muted word-break">
                {item.desc}
              </div>
              <div className="fw-bold" >
               {item.price} USD / Person
              </div>
              <div className="fw-bold text-danger" >
                 You save 5 USD / Person
              </div>
          </div>
      </div>
    ))
  }
      
    </div>


            
        </div>
    );
};

export default Exeperience;

