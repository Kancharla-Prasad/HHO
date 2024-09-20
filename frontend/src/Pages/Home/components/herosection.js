import React from 'react'
import "./herosection.css";
import { Link } from 'react-router-dom';
export default function HeroSection() {
  return (
    <div>
  

<div id="CarouselEx" className="carousel slide" data-ride="carousel" data-interval="2000">
  <ol className="carousel-indicators">
    <li data-target="#CarouselEx" data-slide-to="0" className="active"></li>
    <li data-target="#CarouselEx" data-slide-to="1"></li>
    <li data-target="#CarouselEx" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1710768089/invitation_xi9izy.jpg"
        className="d-block w-100 car-img"
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://img.freepik.com/free-vector/realistic-happy-ugadi-festival_23-2148448218.jpg?t=st=1710766812~exp=1710770412~hmac=fae5aefb5813cbb9042ad5d5ba68ba56ef98d9da68d5f94b9bbd638a1688dd03&w=740"
        className="d-block w-100 car-img"
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg"
        className="d-block w-100 car-img"
        alt="..."
      />
    </div>
  </div>
  <a className="carousel-control-prev" href="#CarouselEx" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#CarouselEx" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>


        <div className="container-fluid p-3" style={{backgroundColor:'white'}}>
            <div className="row ml-4 mr-4">
                <div className="col-12">
                    <h1 className="about-head text-center mt-5">
                        About <span style={{color:'#f06529'}}>HHO</span>
                    </h1>
                </div>
                <div className="col-6">
                    <img src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png" alt="pic" className='w-100' style={{backgroundColor:'#ff8f66'}}  />
                </div>
                <div className="col-6 m-auto">
                    <p className="about-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus iure cupiditate quidem, itaque, tenetur alias illum, voluptatum recusandae neque culpa sunt! Quam blanditiis dicta eius voluptatem itaque animi alias velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis omnis similique quasi nulla et modi aut placeat perferendis quis. Corporis quo, illum nisi eaque ipsam voluptate quaerat fugiat explicabo?</p>
                    <div className="text-center">
                      <Link to='/about'><button className='btn about-button'>Read More</button></Link>
                    </div>
                   
                </div>
  
            </div>
        </div>
    </div>
  )
}
