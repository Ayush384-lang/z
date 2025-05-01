import React from 'react'
import { MdFacebook } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
function Footer() {
  return (
    <>
 
  
 <section>
<footer className="footer py-5">
  <div className="container">
    <div className="row">
      {/* About Section */}
      <div className="col-md-4">
    <img src="https://zone.qtcmedia.com/html/images/logo.png" alt="" />
        <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque bibendum efficitur.</p>
        <div className="social-icons">
          <a><MdFacebook /></a>
          <a><CiTwitter /></a>
          <a><FaInstagram /></a>
          <a><FaVimeoV /></a>
          <a><FaGooglePlusG /></a>
        </div>
      </div>
      {/* Links */}
      <div className="col-md-2">
        <h5>LINKS</h5>
        <ul className="list-unstyled">
          <li><a><IoIosArrowBack />Top Tour</a></li>
          <li><a><IoIosArrowBack />New Travel</a></li>
          <li><a><IoIosArrowBack />How-To</a></li>
          <li><a><IoIosArrowBack />Tips and Tricks</a></li>
          <li><a><IoIosArrowBack />Best Tour</a></li>
          <li><a><IoIosArrowBack />Top Travel</a></li>
        </ul>
      </div>
      {/* Useful Links */}
      <div className="col-md-2">
        <h5>USEFUL LINKS</h5>
        <ul className="list-unstyled">
          <li><a><IoIosArrowBack />About Us</a></li>
          <li><a><IoIosArrowBack />Contact Us</a></li>
          <li><a><IoIosArrowBack />New Latest</a></li>
          <li><a><IoIosArrowBack />Gallery</a></li>
          <li><a><IoIosArrowBack />Destinations</a></li>
          <li><a><IoIosArrowBack />Company</a></li>
        </ul>
      </div>
      {/* Gallery */}
      <div className="col-md-4">
        <h5>GALLERY</h5>
        <div className="gallery d-flex flex-wrap">
          <img src="https://zone.qtcmedia.com/html/images/tour/3.jpg" alt="Gallery 1" />
          <img src="https://zone.qtcmedia.com/html/images/tour/2.jpg" alt="Gallery 2" />
          <img src="https://zone.qtcmedia.com/html/images/tour/1.jpg" alt="Gallery 3" />
          <img src="https://zone.qtcmedia.com/html/images/tour/4.jpg" alt="Gallery 4" />
          <img src="https://zone.qtcmedia.com/html/images/tour/5.jpg" alt="Gallery 5" />
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/toronto.jpg" alt="Gallery 6" />
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/tram-city-urban-transport-transportation-travel.png" alt="Gallery 6" />
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/arno-river-florence-italy-reflection-river.png" alt="Gallery 6" />
      
        </div>
      </div>
    </div>
    </div>
    </footer>
    </section>
    {/* Bottom Navigation */}
    <section className='bg-black'>
      <div className="container">
    <div className='d-flex justify-content-between p-3 '>
    <p className='text-white'>©2016 Zone Tour</p>
    <div className="text-center  d-flex justify-content-center" >
      <a href="#" className="mx-2 text-white">HOME</a> 
      <a href="#" className="mx-2 text-white">DESTINATIONS</a> 
      <a href="#" className="mx-2 text-white">BLOG</a> 
      <a href="#" className="mx-2 text-white">ABOUT US</a> 
      <a href="#" className="mx-2 text-white">CONTACT</a>
    </div>
  </div>
  </div>
  </section>




    </>
  )
}

export default Footer
