import "./App.css";
import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coma from './images/coma.svg'

import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


import python from './images/python.png'
import play1 from './images/Ellipse 1201.svg'
import stars from './images/Group 512830.svg'
import java from './images/java.png'
import cpp from './images/cpp.png'
import web from './images/webdevelopment.png'
import app from './images/app2.jpg'
import uiux from './images/uiux.png'

import LandingPage from './components/LandingPage'



function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <LandingPage/>

    <div className="xcourseswrapper">
      <div className="xPopularCourses">Popular Courses</div>
      
      <div className="xcoursesWrapperInside">

        <div className="xsingleCourse">
            <img src={python}></img>

              <div>
              <div className="pythonContent">Master Python's Versatility</div>

<div className="styleText">Unlock the world of programming with our 10-hour Python course.</div>

<div className="xstar">
  <div><img src={stars}></img></div>
  <div>Check Details</div>
              </div>
            </div>
        </div>

        <div className="xsingleCourse">
            <img src={java}></img>

            <div className="pythonContent">Java: Code Your Future</div>

            <div className="styleText">Embrace Java in 14 Hours. Enroll Today for a Comprehensive Programming Journey!</div>

            <div className="xstar">
              <div><img src={stars}></img></div>
              <div>Check Details</div>
            </div>
        </div>

        <div className="xsingleCourse">
            <img src={cpp}></img>

            <div className="pythonContent">Unlock C++ Proficiency</div>

            <div className="styleText">Master C++ in 17 Hours. Enroll Now for a Deep Dive into the World of Programming!</div>

            <div className="xstar">
              <div><img src={stars}></img></div>
              <div>Check Details</div>
            </div>
        </div>

        <div className="xsingleCourse">
            <img src={web}></img>

            <div className="pythonContent">Start Building Websites</div>

            <div className="styleText">Become a Web Developer in 36 Hours. Enroll Now for a Comprehensive Web Development Journey!</div>

            <div className="xstar">
              <div><img src={stars}></img></div>
              <div>Check Details</div>
            </div>
        </div>

        <div className="xsingleCourse">
            <img src={app}></img>

            <div className="pythonContent">Create Apps Like A Pro</div>

            <div className="styleText">Craft Apps in 48 Hours. Enroll Today to Master the Art of Application Development!</div>

            <div className="xstar">
              <div><img src={stars}></img></div>
              <div>Check Details</div>
            </div>
        </div>

        <div className="xsingleCourse">
            <img src={uiux}></img>

            <div className="pythonContent">Master UI/UX Design</div>

            <div className="styleText">Design Excellence in 8 Hours. Enroll Now for a Fast-Track Journey to UI/UX Mastery!</div>

            <div className="xstar">
              <div><img src={stars}></img></div>
              <div>Check Details</div>
            </div>
        </div>

        

      </div>
    </div>







      <main class="body" >
      <div className="heading">What our Customers say about us</div>

      <div className="w-3/4  m-auto box">
        <div className="mt-10">
            <Slider {...settings} >
              {
                data.map((d)=>(
                  <div key={d.name} className="testimonialbgcolor2  text-black rounded-xl">
                    {/* <div className="h-26  bg-red-300 flex justify-center items-center rounded-t-xl">
                      <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                      
                      <p className="text-center review">{d.review}</p>
                      <p className="name text-xl font-semibold">{d.name}</p>

                    </div> */}
                    <div className="container">
                      <div className="left">
                        <div><img src={coma} className="coma"></img></div>
                        <div><p className="text-center review">{d.review}</p></div>
                        <div><p className="name text-xl font-semibold">{d.name}</p></div>


                        <div></div>
                      </div>

                      <div className="right">
                      <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                      </div>

                    </div>
                  </div>

                ))
              }
            </Slider>


        </div>

      </div>

      </main>

      <div className="contactInfo" id="contactInfoSection">
        <div className="contactText center mt-20">Contact Us</div>
        <div className="contactText1 center">Any question Just Message us</div>


        <div className="contactInfoInside ">

          {/* <div className="LeftContactUs">
            <div className="contactInformation">Contact Information</div>
            <div className="btx flex p-7 gap-3">
              <div className="btx2"><IoCall/></div>
              <div>9876543210</div>
            </div>

            <div className="btx">
              <div className="btx2"><IoMail/></div>
              <div>johnkhore26@gmail.com</div>
            </div>
            
            <div className="btx ">
              <div className="btx2"><FaLocationDot/></div>
              <div>https://maps.app.goo.gl</div>
            </div>

            
          </div> */}
          <div className="RightContactUs gap-6">
            <div className="RightContactUsName btx3">Name</div>
            <div><input className="bornone" placeholder="name"></input></div>

            <div className="RightContactUsEmail btx3">Email</div>
            <div><input placeholder="Email"></input></div>

            <div  className="RightContactUsMessage btx3">Message</div>
            <div><input placeholder="Write your message"></input></div>

            <div><button className="btnx1">Send Message</button></div>
          </div>



        </div>
      </div>
    </div>
  );
}
const data= [
  {
    name: `Sarah W`,
    img: `/students/Sarah.png`,
    review:  `"I loved this web development course! It's well-structured with practical exercises that helped me gain a deep understanding of various programming languages." `,
  },
  {
    name: `Michelle G`,
    img: `/students/Michelle.png`,
    review:  `"I cannot thank the instructor enough for creating such a wonderful App development course. It's easy to follow and understand, and I learned so much."`,
  },
  {
    name: `Samantha F`,
    img: `/students/chashni.png`,
    review:  `"This course has been a game-changer for me! The instructor's engaging teaching style and the practical exercises offered have expanded my knowledge of UI/UX development."`,
  },
  {
    name: `Franklin D`,
    img: `/students/Franklinn.png`,
    review:  `"Thanks to this course, I feel confident in my web development skills and am excited to apply them in real-world scenarios."`,
  },

  {
    name: `Emily S`,
    img: `/students/Emiy.png`,
    review:  `"This web development course has exceeded all my expectations, and I highly recommend it to anyone looking to learn App development from the basics to advanced techniques."`,
  },

  



  
]

export default App;
