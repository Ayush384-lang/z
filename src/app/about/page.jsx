import React from 'react'
import { FaPlus } from "react-icons/fa";

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
        <h2 className='fw-bold text-center'>ZONE TOUR AMAZING STORY</h2>
        <p className='text-center p-3 t'>Quisque et est ornare, luctus nunc non, vestibulum lacus. Fusce ultrices molestie elit, sit amet finibus enim <br /> finibus ac. Fusce ultrices molestie elit, sit amet finibus enim finibus ac.</p>
        <p className='text-center'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ultrices magna et lobortis <br /> imperdiet. Etiam nulla lacus, sodales non nulla id, fermentum auctor tortor. Vestibulum a orci at <br />  nisi egestas semper. Proin commodo dolor vitae enim rhoncus, ut hendrerit arcu interdum.</p>
    </div>
</div>
     </section>

     <section className='py-4'>
       
     <iframe width="1350" height="480" src="https://www.youtube.com/embed/rWQeqH526KA" title="Animated Login Form using Html &amp; CSS" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
     </section>

     <section className='py-5'>
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <img src="https://zone.qtcmedia.com/html/images/faq.png" alt="" />
        </div>
        <div className="col-lg-6">
            <h2 className='fw-bold text-center'>WHAT WE DO?</h2>
            <p className='text-center p-2 mx-auto'>In dapibus feugiat metus vitae maximus. Duis ut neque odio. <br /> Fusce non augue congue, mattis est in.</p>
            <h5 className='text-center p-4'>We open at what time?</h5>
            <p className='text-center'>Duis volutpat eros ut eros ullamcorper, dapibus tempor metus 
                 elementum. Fusce sagittis et nibh et vestibulum.</p>

                 <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <FaPlus />   We open at what time?
      
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
       Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <FaPlus />  We are open to those who?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <FaPlus />  Fusce mollis faucibus lectus maximus ultricies?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <FaPlus />  Nunc commodo sodales consequat?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        Duis volutpat eros ut eros ullamcorper, dapibus tempor metus elementum. Fusce sagittis et nibh et vestibulum.
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
</div>
     </section>

    </>
  )
}

export default page
