import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

function page() {
  return (
    <>
       <section>
            <div className="row">
                <img className=' w-full c' src="https://zone.qtcmedia.com/html/images/slider/banner-6.jpg" alt="" />
            </div>
     </section>

     <section className='py-5'>
        <div className="container">
            <div className="row">
                <h2 className='fw-bold text-center'>SEND US A MESSAGE</h2>
                <p className='text-center p-2'>Morbi eget lectus in lorem sagittis dictum. Mauris vitae ultricies urna</p>
                <div className="col-lg-4 text-center">
                    <a><FaPhoneAlt className='fs-3  text-warning' /></a>
                    <p className='p-2 text-center'>+61(1)234 56789</p>
                </div>
              <div className="col-lg-4 text-center">
                <a><IoLocationOutline className='fs-3 text-warning' /></a>
                <p className='p-2 text-center'>
Cecilia Chapman, 711-2880 <br />
Mankato Mississippi.</p>
              </div>
              <div className="col-lg-4 text-center">
                <a><MdEmail  className='fs-3 text-warning'/></a>
                <p className=' p-2 text-center'>contact@zonetour.com</p>
              </div>
            </div>
        </div>
     </section>
<section className='py-4'>
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card p-4 ">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
               
                <div className="input-group">
                  <span className="input-group-text"><IoPerson /></span>
                  <input type="text" className="form-control" placeholder="Your Name*" required />
                </div>
              </div>
              <div className="col-md-6 ">
               
                <div className="input-group">
                  <span className="input-group-text"><MdEmail /></span>
                  <input type="email" className="form-control" placeholder="Email*" required />
                </div>
              </div>
            </div>
            <div className="mb-3 py-3">
              
              <div className="input-group">
                <span className="input-group-text"><FaPencilAlt /></span>
                <textarea className="form-control" rows={4} placeholder="Enter your message..." required defaultValue={""} />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning px-4">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </section>

<section>

  <div className="row">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIx9SeDfR-iQVBq_dCL4zSEfxWGT-_P1l-A&s" alt="" />
  </div>

     </section>
    </>
  )
}

export default page
