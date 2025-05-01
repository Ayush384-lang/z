import React from 'react'
function page() {
  return (
    <>
     <section>
            <div className="row">
                <img className=' w-full c' src="https://zone.qtcmedia.com/html/images/slider/banner-6.jpg" alt="" />
                <h2 className='g '>DESTINATIONS</h2>
            </div>
     </section>
{/* Destinations Section */}
<section className="destinations py-5">
  <div className="container">
    <div className="row">
      {/* Destination 1 */}
      <div className="col-md-4">
        <div className="card">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/mumbai.jpg" className="card-img-top" alt="Destination 1" />
          <div className="card-overlay left">
            <p>Duration: 2 Hours</p>
            <p>Opening: 8AM - 10AM</p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Discover Awesome Tours</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed et ante eu dolor <br /> sollicitudin aliquam ut eget odio.</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {/* Destination 2 */}
      <div className="col-md-4">
        <div className="card">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/santorini-greece.png" className="card-img-top" alt="Destination 2" />
          <div className="card-overlay">
            <p>Duration: 2 Hours</p>
            <p>Opening: 8AM - 10AM</p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Discover Awesome Tours</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed et ante eu dolor <br /> sollicitudin aliquam ut eget odio.</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {/* Destination 3 */}
      <div className="col-md-4">
        <div className="card">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/toronto.jpg" className="card-img-top" alt="Destination 3" />
          <div className="card-overlay">
            <p>Duration: 2 Hours</p>
            <p>Opening: 8AM - 10AM</p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Discover Awesome Tours</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed et ante eu dolor <br /> sollicitudin aliquam ut eget odio.</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="destinations py-3">
  <div className="container">
    <div className="row">
      {/* Destination 1 */}
      <div className="col-md-4">
        <div className="card">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/paris.png" className="card-img-top" alt="Destination 1" />
          <div className="card-overlay">
            <p>Duration: 2 Hours</p>
            <p>Opening: 8AM - 10AM</p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Discover Awesome Tours</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed et ante eu dolor <br /> sollicitudin aliquam ut eget odio.</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {/* Destination 2 */}
      <div className="col-md-4">
        <div className="card">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/machu-pichu.png" className="card-img-top" alt="Destination 2" />
          <div className="card-overlay">
            <p>Duration: 2 Hours</p>
            <p>Opening: 8AM - 10AM</p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Discover Awesome Tours</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed et ante eu dolor <br />sollicitudin aliquam ut eget odio.</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {/* Destination 3 */}
      <div className="col-md-4">
        <div className="card">
          <img src="https://zone.qtcmedia.com/html/images/thumbnails/sydney.jpg" className="card-img-top" alt="Destination 3" />
          <div className="card-overlay">
            <p>Duration: 2 Hours</p>
            <p>Opening: 8AM - 10AM</p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Discover Awesome Tours</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed et ante eu dolor <br /> sollicitudin aliquam ut eget odio.</p>
            <a href="#" className="btn btn-primary">Read More</a>
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
            
              <li className="page-item "><a className="page-link rounded " href="#">1</a></li>
              <li className="page-item"><a className="page-link rounded" href="#">2</a></li>
              <li className="page-item active"><a className="page-link bg-warning rounded " href="#">3</a></li>
              <li className="page-item"><a className="page-link rounded" href="#">4</a></li>
              <li className="page-item"><a className="page-link rounded" href="#">5</a></li>
            
            </ul>
          </nav>
          </section>
 
    </>
  )
}

export default page
