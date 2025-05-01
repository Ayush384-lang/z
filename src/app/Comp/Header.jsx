import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { GiVibratingSmartphone } from "react-icons/gi";

import Link from 'next/link';

function Header() {
  return (
    <>
      <header className='bg-dark text-white py-2 border-buttom d-none d-lg-block'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <a><FaFacebookF /></a>
              <a className='p-2 text-white'><CiTwitter /></a>
              <a className='p-2 text-white'><FaInstagram /></a>
              <a className='p-2 text-white'><FaVimeoV /></a>
              <a className='p-2 text-white'><FaGooglePlusG /></a>
            </div>
            <div className="col-lg-6">
              <ul className='top'>
                <li><a href="">Login</a></li>
                <li><a href=""> Register</a></li>
                <a className='text-white'><IoMdSearch /></a>
              </ul>
            </div>
          </div>
        </div>
      </header>



  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    
      {/* <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container d-flex text-white justify-content-between">
      
      <div>
          <a className="navbar-brand" href="#">
            <img className='a' src="https://zone.qtcmedia.com/html/images/logo.png" alt="" />
          </a>
          </div>
        
          <div className="collapse navbar-collapse d-flex  justify-content-center" id="navbarNav">
            <ul className="navbar-nav d-flex gap-4">
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" href="/"> HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/destinations">DESTINATIONS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/gallery">GALLERY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " href="blog">BLOG</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " href="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
         
         <ul>
          <li><GiVibratingSmartphone className='fs-3 text-warning'/></li>
         </ul>

        </div>
      </nav> */}

      <section>

      </section>

    </>
  )
}

export default Header
