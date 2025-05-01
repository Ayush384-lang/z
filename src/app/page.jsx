import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { LiaCompass } from "react-icons/lia";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";

function page() {
  return (
    <>
      <section>
        <div className="row">
          <img className='w' src="https://zone.qtcmedia.com/html/images/slider/banner-1.jpg" alt="" />
        </div>
      </section>

      <section className='p-5'>
        <div className="container mmm">
          <div className="row">
            <h1 className='fw-bold text-center'>WHY CHOOSE US</h1>
            <p className='text-center itallic p-3'>Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate</p>
            <div className="col-lg-4">
              <div className=' text-center'>
                <LiaCompass className='fs-1' />
              </div>
              <h2 className='fw-bold text-center p-3'>ADVENTURE</h2>
              <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>

            </div>
            <div className="col-lg-4">
              <div className=' text-center'>
                <FaHelmetSafety className='fs-1' />
              </div>
              <h2 className='fw-bold text-center p-3'>FUN & SAFETY</h2>
              <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>
            </div>
            <div className="col-lg-4">
              <div className=' text-center'>
                <FaFlag className='fs-1' />
              </div>
              <h3 className='fw-bold text-center p-3'>IMPECCABLE SERVICE</h3>
              <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat urna a vehicula bibendum, cras erat ipsum.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='shadow bg-light'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <iframe width="500" height="295" src="https://www.youtube.com/embed/C2iLqpvHWV4" title="What a Chernobyl Disaster Zone Tour is Really like" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
            <div className="col-lg-6">
              <h2 className='fw-bold'>VIDEO OF ZONE TOUR</h2>
              <p>Proin commodo, elit in iaculis laoreet.</p>
              <p className='p-2'>Fusce lobortis elit est, aliquam pulvinar ex vestibulum ut. Etiam tincidunt tempor massa, sed consectetur eros rutrum et. Nunc sit amet faucibus justo. Cras interdum velit vitae lectus imperdiet, vitae egestas neque accumsan. Sed sed turpis nulla. Phasellus a volutpat ipsum, vitae rhoncus lorem.</p>
              <button className='p-2 rounded bg-warning'>Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className="container">
          <div className="row">
            <h2 className='p-4 text-center'>POPULAR DESTINATIONS</h2>
            <p className='py-4 text-center'>Quisque venenatis porta eleifend. Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate.</p>
            <div className="col-lg-4  shadow">
              <img src="https://zone.qtcmedia.com/html/images/thumbnails/toronto.jpg" alt="" />
              <h3 className=' fw-bold text-center p-2'>TORONTO</h3>
              <a className='p-3 align-items-center'><FaStar /></a>
              <div className='p-5'>
                <p className='text-center'>Duration: 2</p>
                <p className='text-center'>Opening: 8Am - 10Am</p>
              </div>
            </div>
            <div className="col-lg-4  shadow">
              <img src="https://zone.qtcmedia.com/html/images/thumbnails/toronto.jpg" alt="" />
              <h3 className=' fw-bold text-center p-2'>MUMBAI</h3>
              <a className='p-3 align-items-center'><FaStar /></a>
              <div className='p-5'>
                <p className='text-center'>Duration: 2</p>
                <p className='text-center'>Opening: 8Am - 10Am</p>
              </div>
            </div>
            <div className="col-lg-4  shadow">
              <img src="https://zone.qtcmedia.com/html/images/thumbnails/toronto.jpg" alt="" />
              <h3 className=' fw-bold text-center p-2'>SYDNEY </h3>
              <a className='p-3 align-items-center'><FaStar /></a>
              <div className='p-5'>
                <p className='text-center'>Duration: 2</p>
                <p className='text-center'>Opening: 8Am - 10Am</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-3'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 shadow">
              <img src="https://zone.qtcmedia.com/html/images/thumbnails/newyork.png" alt="" />
              <h3 className=' fw-bold text-center p-2'>NEWYORK</h3>
              <a className='p-3 align-items-center'><FaStar /></a>
              <div className='p-5'>
                <p className='text-center'>Duration: 2</p>
                <p className='text-center'>Opening: 8Am - 10Am</p>
              </div>
            </div>
            <div className="col-lg-4 shadow">
              <img src="https://zone.qtcmedia.com/html/images/thumbnails/machu-pichu.png" alt="" />
              <h3 className=' fw-bold text-center p-2'>MACHU PICHU </h3>
              <a className='p-3 align-items-center'><FaStar /></a>
              <div className='p-5'>
                <p className='text-center'>Duration: 2</p>
                <p className='text-center'>Opening: 8Am - 10Am</p>
              </div>
            </div>
            <div className="col-lg-4 shadow">
              <img src="https://zone.qtcmedia.com/html/images/thumbnails/paris.png" alt="" />
              <h3 className=' fw-bold text-center p-2'>PARIS </h3>
              <a className='p-3 align-items-center'><FaStar /></a>
              <div className='p-5'>
                <p className='text-center'>Duration: 2</p>
                <p className='text-center'>Opening: 8Am - 10Am</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Destinations Section */}
      <section className="destinations py-5">

        <div className="row">
          <div className="col-md-6">
            <img src="https://zone.qtcmedia.com/html/images/zone-tour-image-2.png" className="img-fluid rounded" alt="Japan" />
          </div>
          <div className="col-md-6">
            <h2 className='fw-bold'>TOP 5 FAMOUS LOCATIONS</h2>
            <h2>01. Japan</h2>
            <p>Aenean dui dui, semper eget orci id, sagittis ultricies sem. Fusce laoreet consequat nunc in fermentum. Nulla in faucibus ipsum, sed aliquet nulla. Vivamus ac nibh erat. Proin ut orci ac lacus bibendum efficitur non sit amet arcu.

              Vivamus aliquet est ac urna sodales, in volutpat leo viverra. Aenean ex ante, consequat id orci in, gravida commodo dui. Nunc vestibulum, eros dapibus rhoncus luctus, diam odio accumsan lectus, non consectetur elit felis vitae eros..</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </section>


      <section className='py-4'>
        <div className="container">
          <div className="row">
            <h2 className='fw-bold text-center'>WHAT OUR  CLIENTS  SAYS</h2>
            <p className='p-3 text-center'>Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate.</p>
            <p className='p-2 text-center'>“ Consectetur adipiscing elit. Etiam eu gravida risus. Aenean lacinia lacus ac nibh bibendum,<br />
              non mollis urna pellentesque. Maecenas suscipit justo elit". <br /></p>
            <p className='text-warning text-center'>- Emily Henderson, U.S.A</p>
            <div className='text-center rounded'>
              <img className='bb rounded-circle' src="	https://zone.qtcmedia.com/html/images/thumbnails/team-member-2.jpg" alt="" />
              <img className='cc rounded-circle' src="https://zone.qtcmedia.com/html/images/thumbnails/team-member-1.jpg" alt="" />
              <img className='cc rounded-circle' src="https://zone.qtcmedia.com/html/images/thumbnails/team-member-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='py-3'>
        <div className="container">
          <div className="row">
            <h2 className='fw-bolf text-center '>GALLERY FROM MEMBERS</h2>
            <p className='text-center p-2'>Phasellus vehicula malesuada quam, a condimentum mauris dignissim vulputate.</p>
            <div className="col-lg-3">
              <img className='p' src="https://zone.qtcmedia.com/html/images/thumbnails/india-taj-mahal-agra-architecture-travel.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="https://zone.qtcmedia.com/html/images/thumbnails/colorful-houses-with-sunshades.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="	https://zone.qtcmedia.com/html/images/tour/3.jpg" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="	https://zone.qtcmedia.com/html/images/thumbnails/pisa-tower.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="	https://zone.qtcmedia.com/html/images/thumbnails/arno-river-florence-italy-reflection-river.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="	https://zone.qtcmedia.com/html/images/thumbnails/5825408292_11759e3304_o.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="https://zone.qtcmedia.com/html/images/thumbnails/santorini-greece.png" alt="" />
            </div>
            <div className="col-lg-3">
              <img className='p' src="https://zone.qtcmedia.com/html/images/thumbnails/6979633505_d042009b47_k.png" alt="" />
            </div>

          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className="container align-items-center">
          <div className="row">
            <h2 className='fw-bold text-center'>LATEST NEWS</h2>
            <p className='p-2 text-center'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
            <div className="col-lg-4 shadow">
              <img className='my-2' src="https://zone.qtcmedia.com/html/images/blog/sweet-ont-the-beach.png" alt="" />
              <h5 className='p-3'>Sweet Love On The Beach</h5>
              <p className='text-sm text-light'>June 06,2016 | By Angelina Jolie</p>
              <p className='text-sm '>Etiam mattis, tortor non tincidunt euismod, ipsum arcu condimentum ligula, at ornare dolor turpis id massa. Ut sit amet augue lobortis lacus scelerisque volutpat.</p>
              <a >Read More<RiArrowRightDoubleFill /> </a>
            </div>
            <div className="col-lg-4 shadow">
              <h5 className='p-3'>Sweet Love On The Beach</h5>
              <p className='text-sm text-light'>June 06,2016 | By Angelina Jolie</p>
              <p className='text-sm '>Etiam mattis, tortor non tincidunt euismod, ipsum arcu condimentum ligula, at ornare dolor turpis id massa. Ut sit amet augue lobortis lacus scelerisque volutpat.</p>
              <a>Read More<RiArrowRightDoubleFill /> </a>
              <img className='my-2' src="https://zone.qtcmedia.com/html/images/blog/sweet-ont-the-beach.png" alt="" />
            </div>
            <div className="col-lg-4 shadow">
              <img className='my-2' src="https://zone.qtcmedia.com/html/images/blog/sweet-ont-the-beach.png" alt="" />
              <h5 className='p-3'>Sweet Love On The Beach</h5>
              <p className='text-sm text-light'>June 06,2016 | By Angelina Jolie</p>
              <p className='text-sm '>Etiam mattis, tortor non tincidunt euismod, ipsum arcu condimentum ligula, at ornare dolor turpis id massa. Ut sit amet augue lobortis lacus scelerisque volutpat.</p>
              <a c>Read More<RiArrowRightDoubleFill /> </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='py-4'>
        <div className="container align-items-center aaa">
          <div className="row d-flex align-items-center justify-content-center">
            <h2 className='fw-bold text-center'>OUR PARTNERS</h2>
            <p className='text-center'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
            <img className='b' src="https://zone.qtcmedia.com/html/images/carousel/audiojungle.png" alt="" />
            <img className='b' src="https://zone.qtcmedia.com/html/images/carousel/audiojungle.png" alt="" />
            <img className='b' src="https://zone.qtcmedia.com/html/images/carousel/audiojungle.png" alt="" />
            <img className='b' src="https://zone.qtcmedia.com/html/images/carousel/audiojungle.png" alt="" />
            <img className='b' src="https://zone.qtcmedia.com/html/images/carousel/audiojungle.png" alt="" />
            <img className='b' src="https://zone.qtcmedia.com/html/images/carousel/audiojungle.png" alt="" />
          </div>
        </div>
      </section> */}

      <section className='py-5 shadow bg-warning text-white'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 items-center">
              <h2>SUBSCRIBE NEWSLETTERS</h2>
              <p className='p-2'>Vivamus felis justo, venenatis eget massa nec, imperdiet maximus lectus.</p>
            </div>
            <div className="col-lg-6 items-center d-none d-lg-block">
              <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Search here...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><IoIosSend className='text-warning' /></span>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page
