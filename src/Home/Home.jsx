import logo from './captions/Clarifion_Logo 1.png';
import image4 from './captions/image 4.png'
import Air from './captions/Air.png'
import Visa from './captions/visa.png';
import shopPay from './captions/shop pay.png';
import PayPal from './captions/paypal.png';
import mastercard from './captions/mastercard.png'
import gpay from './captions/gpay.png'
import applePay from './captions/apple pay.png'
import amex  from './captions/amex.png'
import pro from './captions/profile.png'
import Image6 from './captions/image 6.png'
import Star from './captions/Stars.png'
import verify from './captions/verify.png'
import Mc from './captions/McAfee_Secure.png'
import nortion from './captions/norton-antivirus-logo 1.png'
import group from './captions/Group 1000001340.png'
import Arrow from './captions/fluent_arrow-sync-checkmark-20-regular.png'
import checkmark from './captions/fluent_checkmark-starburst-20-regular.png'
import Love from './captions/mdi_cards-heart-outline.png'
import truck from './captions/ph_truck-light.png'
import Lock from './captions/lock (7) 1.png'


import './Home.css'

const Home = () => {
    return (
        <>
       {/* Top */}
       <div className="container-fluid" id='Top' style={{background:"#252F3D"}}>
        <div className="row  ">
            <div className="col-md-3">
                <div className="">
                 <p className="text-white text-center mt-2">
                    <img src={checkmark} className='img-fluid mt-0 mb-0' alt="" /> <span className='mt-1'>30-DAY SATISFACTION GUARANTEE</span></p>
                </div>
                </div>
            <div className="col-md-3">
            <div className="">
                    <p className="text-white text-center  mt-2 "> <img src={truck} alt="" /> <span className='ms-1'></span>FREE DELIVERY ON ORDERS OVER $40.00</p>
                </div>
                </div>
            <div className="col-md-3">
                <div className="">
                    <p className="text-white text-center  mt-2"> <img src={Love} alt="" /><span className='ps-2 '>50,000+ HAPPY CUSTOMERS</span></p>
                </div>
                </div>
            <div className="col-md-3">
                <div className="">
                    <p className="text-white text-center  mt-2 "> <img src={Arrow} alt="" /> <span className='ms-1'></span>100% MONEY BACK GUARANTEE</p>
                </div>
                </div>
        </div>
       </div>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{background:"#252F3D"}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row">
      <div className="col-md-3">
                <div className="">
                 <p className="text-white text-center mt-2">
                    <img src={checkmark} className='img-fluid mt-0 mb-0' alt="" /> <span className='mt-1'>30-DAY SATISFACTION GUARANTEE</span></p>
                </div>
                </div>
      </div>
    </div>
    <div class="carousel-item">
      <div className="row">
      <div className="">
         <p className="text-white text-center  mt-2"> <img src={truck} alt="" /><span className='ms-1 ps-2'>FREE DELIVERY ON ORDERS OVER $40.00</span></p>
      </div>
      </div>
    </div>
    <div class="carousel-item">
     <div className="row">
     <div className="col-md-3">
                <div className="">
                    <p className="text-white text-center  mt-2"> <img src={Love} alt="" /><span className='ps-2 '>50,000+ HAPPY CUSTOMERS</span></p>
    </div>
    </div>
     </div>
    </div>
    <div class="carousel-item">
    <div className="col-md-3">
                <div className="">
                    <p className="text-white text-center  mt-2 "> <img src={Arrow} alt="" /> <span className='ms-1'></span>100% MONEY BACK GUARANTEE</p>
    </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
       {/* Header */}
       <div className="container mt-3">
        <div className="row">
            <div className="col">
               <img src={logo} className='' style={{height:"65%"}} alt="" />
                </div>

            <div className="col">
                <div className="text-end">
                <img src={Mc}  alt="" />
                <img src={nortion} className='ms-3' alt="" />
                </div>
                </div>
        </div>
       </div>

       {/* Order */}
       <div className="container text-center mb-4">
       <h2 className='fw-normal'> Wait! Your Order In Progress. </h2>
       <p className='lead'>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
       </div>

       {/* Checkout */}
       <div className="container">
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-md-2"><i class="bi bi-check-circle-fill fs-3" style={{color:"#85BF55"}}></i></div>
                    <div className="col-md-7"> <div className="mt-2"><p><span className='checkout-rm'>Step 1 : </span> Cart Review</p></div></div>
                </div>
      
            </div>
            <div className="col">
            <div className="row">
                    <div className="col-md-2"><i class="bi bi-check-circle-fill fs-3" style={{color:"#85BF55"}}></i></div>
                    <div className="col-md-7"> <div className="mt-2"><p><span className='checkout-rm'>Step 2: </span> Checkout</p></div></div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-md-2">
                    <div className="col-md-2"><i class="bi bi-3-circle-fill text-primary fs-2"></i> </div>
                        </div>
                    <div className="col-md-7"> <div className="mt-2"> <p className='fw-bold'><span className='checkout-rm'>Step 3 : </span>Special Offer</p></div></div>
                </div>
            </div>
            <div className="col">
            <div className="row">
                    <div className="col-md-2"><i class="bi bi-4-circle fs-2 text-primary"></i></div>
                    <div className="col-md-7"> <div className="mt-2"> <p><span className='checkout-rm'>Step 4 :</span> Confirmation</p></div></div>
                </div>
            </div>
        </div>
       </div>

       {/* One Time Only */}
       <div className="container bg-light rounded mt-5 mb-5">
        <div className="row">
            <div className="col-md-6">

                <img src={image4} className='img-fluid mt-2 mb-3 image4'  alt="" />

                {/* profile */}
                <div className="dasHol card border-0 rounded mt-3 p-3 ">
                <div className="d-flex">
                <div>
                <img src={pro} alt="" />
                </div>
              <div className="ms-3">
                <p className='mb-0'> <img src={Star} alt="" /></p>
                <p className=''>Ken T.  <img src={verify} className='ms-2' alt="" /></p>
               </div>
              </div>
              <p style={{textAlign:'justify'}} className=''>
                "As soon as the Clarifions Arrived i put one in my bedroom. This was late in the afternoon. 
                 When i went to the bedroom in the evening it smelled clean. When i went to bed i felt i could breathe better. Wonderful."
                
                </p>
                </div>
               


             
            </div>
            <div className="col-md-6">
               {/* / */}
                <div className="one-time">
                <p className='fs-2'><span className='text-primary'>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className='text-primary'>$14 Each</span> ($84.00 Total!)</p>

                <div className='show-image4'>
                <img src={image4} className='img-fluid mt-2 mb-3'  alt="" />
                </div>
                </div>
                {/*  */}
                <div className="mt-">
                   <div className="row">
                    <div className="col-3 air-image">
                        <div className="bg-primary rounded">
                        <img src={Air} className='img-fluid' alt="" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <div className="">
                                <p className='fs-6 fw-normal mb-0 '>Clarifion Air Ionizer</p>
                               <img src={Star} alt="" />
                                <p className='fs-6 lead mt-2'> <img src={group} alt="" /> <span className='ms-2'>12 left in Stock</span></p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-end">
                               <span className='me-2 text-decoration-line-through'>$180</span> <span className='text-primary fs-5 '>$84</span>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4">
                        <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                    </div>
                    {/*  */}
                    <ul className='list-unstyled mt-3'>
                        <li>
                            <div className="d-flex">
                            <i class="bi bi-check-lg fs-3 text-primary"></i>
                            <p className='mt-2 ms-3 fw-light'>Negative Ion Technology may <span className='fw-normal'>help with allergens</span></p>
                            </div>
                        </li>
                        <li>
                        <div className="d-flex">
                        <i class="bi bi-check-lg fs-3 text-primary"></i>
                        <p className='mt-2 ms-3 fw-light'>Designed for <span className='fw-normal'>air rejuvenation</span></p>
                        </div>
                        </li>
                        <li>
                        <div className="d-flex">
                        <i class="bi bi-check-lg fs-3 text-primary"></i>
                        <p className='mt-2 ms-3 fw-light'><span className='fw-normal'>Perfect for every room</span> in all types of places</p>
                        </div> 
                        </li>
                    </ul>
                   </div>
                   {/*  */}
                   <div className="rounded m" style={{backgroundColor:"#EDF3FD"}}>
                    <div className="row g-0 align-items-md-center">
                        <div className="col-1">
                            <div className="text-center">
                                <span class="dot bg-primary text-white">%</span>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="pt-2">
                                <p>Save <span className='text-primary'>53%</span>and get <span className='text-primary'>6 extra Clarifision </span> for only <span className='text-primary'>$14 Each.</span> </p>
                            </div>
                        </div>
                    </div>
                    </div>
                   {/* button */}
                  <div class="d-grid gap-2 my-3 mt-4">
                  <button className='btn btn-success btn-lg rounded-pill px-3' style={{backgroundColor:"#59AE43"}}>YES-CLAIM MY DISCOUNT<i class="bi bi-arrow-right-short ms-3 fs-4"></i></button>
                  </div>
                   {/*  */}
                   <div className="container border border-2 rounded mb-2">
                    <div className="row align-items-md-center">
                        <div className="col-3 pt-3">
                            <div className="border-end">
                             <p className=''>Free Shipping</p>
                            </div>
                            </div>
                        <div className="col-5  border-end p-0 hd ">
                            <div className="">
                            <div className='fs-6'><i class="bi bi-lock "></i> <span className='nb'>Secure 256-Bit SSL Encryption.</span></div>
                            </div>
                        </div>
                     
                        <div className="col-md-4 pt-3">
                        <div className='lin'></div>
                            <div className="lo">
                             <ul className='list-unstyled d-flex gh'>
                                <li><div className="card "><img src={Visa} className='img-fluid' alt="" /></div></li>
                                <li><div className="card ms-1"><img src={shopPay} className='img-fluid' alt="" /></div></li>
                                <li><div className="card ms-1"><img src={PayPal} className='img-fluid' alt="" /></div></li>
                                <li><div className="card ms-1"><img src={mastercard} className='img-fluid' alt="" /></div></li>
                                <li><div className="card ms-1"><img src={gpay} className='img-fluid' alt="" /></div></li>
                                <li><div className="card ms-1"><img src={applePay} className='img-fluid' alt="" /></div></li>
                                <li><div className="card ms-1"><img src={amex} className='img-fluid' alt="" /></div></li>
                             </ul>
                                </div>
                            </div> 
                    </div>
                   </div>
                   {/* d */}
                   <div className="container mt-3">
                    <h5 className='text-underline text-center text-danger' style={{textDecoration:"underline"}}>NO THANKS, I DON'T WANT THIS.</h5>
                    <div className="row g-0 mt-4">
                        <div className="col-2 ">
                              <img src={Image6} className='img-fluid' alt="" />
                        </div>
                        <div className="col-9 ms-3">
                           <p>
                            If you are not completely thrilled with your Clarifion - We <br className='bt' /> have a <span className='fw-bold'>30 day satisfaction guarantee.</span> please refer to our return policy at the bottom of the page for more details.
                            Happy Shopping!
                           </p>
                        </div>
                    </div>
                   </div>
                     


                </div>
            </div>
        </div>
       </div>
      
  {/* Footer */}
  <div className="container-fluid" style={{background:"#252F3D"}}>
        <div className="row  ">
            <div className="col-md-6">
                <div className="row g-0 pt-2">
                 <div className="col-5">
                    <div className="border-end text-center">
                    <p className='text-white'>Copyright (C) 2023</p> 
                    </div>
                    </div>
                 <div className="col-5">
                      <p className='text-white text-center ms-4'>clarifionsupport@clarifion.com</p>  
                    </div>
                </div>
                </div>
            
          
            <div className="col-md-6">
                <div className="">
                    <p className="text-white  text-center  mt-2 "><img src={Lock} className='me-2' style={{height:"1rem"}} alt="" />Secure 256-Bit SSL Encryption</p>
                </div>
            </div>
        </div>
       </div>
 

        </>
    )
}

export default Home