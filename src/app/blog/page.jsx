import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function page() {
  return (
    <>
      <section>
        <div className="row">
          <img className=' w-full c' src="https://zone.qtcmedia.com/html/images/slider/banner-6.jpg" alt="" />
        </div>
      </section>

<div>
  {/* Blog Content */}
  <div className="container mt-4">
    <div className="row">
      {/* Blog Posts */}
      <div className="col-md-8 ">
        <div className="card mb-4 ">
          <img  src="https://zone.qtcmedia.com/html/images/thumbnails/mumbai.jpg" className="card-img-top blog-img" alt="Travel Image" />
          <div className="card-body ">
            <h5 className="blog-title">Travel Packages Around the World</h5>
            <p className="text-muted"><FaRegCalendarAlt /> June 09, 2016 | <span><FaRegCommentAlt /> 35 Comments</span></p>
            <p className="blog-content">Ipsum dolor sit amet, consectetur adipiscing elit. Nulla a sapien <br /> id ex gravida dignissim. Sed fringilla leo neque, quis euismod <br /> risus semper sed.</p>
            <a href="#" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card mb-4">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/india-taj-mahal-agra-architecture-travel.png" className="card-img-top blog-img" alt="Travel Image" />
          <div className="card-body">
            <h5 className="blog-title">Best Destinations in the World</h5>
            <p className="text-muted"><FaRegCalendarAlt /> June 09, 2016 | <span><FaRegCommentAlt /> 5 Comments</span></p>
            <p className="blog-content">Ipsum dolor sit amet, consectetur adipiscing elit. Nulla a sapien <br /> id ex gravida dignissim. Sed fringilla leo neque, quis euismod <br /> risus semper sed.</p>
            <a href="#" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
      {/* Sidebar */}
<div className="col-lg-4 p-2">
<form className="d-flex" role="search" >

  <input   className="form-control me-2" type="search" placeholder="Search "  aria-label="Search <IoSearch />" />

</form>
        <div className="card p-3 mb-4">
          <h5 className='fw-bold py-2'>CATEGORIES</h5>
          <ul className="list-unstyled ">
            <li><a href="#">Top Tour</a></li>
            <li><a href="#">Discovery</a></li>
            <li><a href="#">Tips Travel</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Best Package</a></li>
          </ul>
        <div className="card p-3">
          <h5 className='fw-bold py-2'>RECENT POST</h5>
          <div className='d-flex'>
          <img className='aa' src="https://zone.qtcmedia.com/html/images/thumbnails/dubai.png" alt="" />
          <h6 className='p-2 fw-bold'>Top 10 Travel tips in the Word</h6>
          </div>
          <div>
          <p className="text-small text-muted p-2"><FaRegCalendarAlt /> June 09, 2016 | <span><FaRegCommentAlt /> 5 Comments</span></p>
          </div>
          <div className='d-flex'>
          <img className='aa' src="https://zone.qtcmedia.com/html/images/thumbnails/weewr.png" alt="" />
          <h6 className='p-2 fw-bold'>Summer Travel Destinations in the U.S</h6>
          </div>
          <div>
          <p className="text-small text-muted p-2"><FaRegCalendarAlt /> June 09, 2016 | <span><FaRegCommentAlt /> 5 Comments</span></p>
          </div>
         
          <div className='d-flex'>
          <img className='aa' src="https://zone.qtcmedia.com/html/images/thumbnails/1-sunrise-the-sky-reflection.png" alt="" />
          <h6 className='p-2 fw-bold'>Lonely Planet's best travel desctinations</h6>
          </div>
          <div>
          <p className="text-small text-muted p-2"><FaRegCalendarAlt /> June 09, 2016 | <span><FaRegCommentAlt /> 5 Comments</span></p>
          </div>
         
          <div className='d-flex'>
          <img className='aa' src="https://zone.qtcmedia.com/html/images/thumbnails/sunset-over-eiffel-tower.png" alt="" />
          <h6 className='p-2 fw-bold'>Top 10 cool city tours around the world</h6>
          </div>
          <div>
          <p className="text-small text-muted p-2"><FaRegCalendarAlt /> June 09, 2016 | <span><FaRegCommentAlt /> 5 Comments</span></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
<section>
{/* Blog Section */}
<div className="container mt-4">
  <div className="row">
    <div className="col-md-8">
      <div className="blog-card">
        <img src="https://zone.qtcmedia.com/html/images/thumbnails/machu-pichu.png" className="img-fluid rounded" alt="Blog Image" />
        <h3 className="mt-3">25 World's Best Places to Visit</h3>
        <p><small className="text-muted"><FaRegCalendarAlt /> June 09, 2016 • <CiFolderOn /> Top Tours •<FaRegCommentAlt /> 35 Comments</small></p>
        <p>Ipsum dolor sit amet, consectetur adipiscing elit. Nulla a sapien <br /> id ex gravida dignissim. Sed fringilla leo neque, quis euismod <br /> risus semper sed.</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
    {/* Sidebar */}
    <div className="col-md-4">
      <h5 className='fw-bold py-2'>TAGS</h5>
      <div className="tags">
        <span>Tour Travel</span>
        <span>Discovery</span>
        <div className='py-4'>
        <span>Tips &amp; Tricks</span>
        <span>Events</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
  <section className='py-3'>
  {/* Pagination */}
  <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center mt-4 ">
    <MdKeyboardDoubleArrowLeft />
      <li className="page-item "><a className="page-link rounded " href="#">1</a></li>
      <li className="page-item"><a className="page-link rounded" href="#">2</a></li>
      <li className="page-item active"><a className="page-link bg-warning rounded " href="#">3</a></li>
      <li className="page-item"><a className="page-link rounded" href="#">4</a></li>
      <li className="page-item"><a className="page-link rounded" href="#">5</a></li>
      <MdKeyboardDoubleArrowRight />
    </ul>
  </nav>
</section>


    </>
  )
}

export default page
