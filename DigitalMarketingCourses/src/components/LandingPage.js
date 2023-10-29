import React, { useEffect, useState } from 'react'
import left from '../images/left.png'
import logo2 from  '../images/logox4.png'

// import logo from '../images/logo1.png'
import logo from '../images/logox3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function LandingPage() {
    useEffect(()=>{
        AOS.init({duration:3000});
    },[]);

    const [showNewletter,setShowNewletter] = useState(false);


    function clickHandler(){
        setShowNewletter(!showNewletter);
    }


  return (
    <div className='wrapper'>
        <div className='header ' data-aos="fade">
            <div className='logo hidemenot'><img src={logo} className='imgs hidemenot'></img></div>
            <div className='logo'><img src={logo2} className='imgs hideme'></img></div>
            <div className='items'>
                <div className='about cursor-pointer'>Home</div>
                <div className='services about'> <a href='#servicesSection'>Services</a></div>
                <div className='Process about'> <a href='#contactInfoSection'>ContactUs</a></div>
            </div>
            <div className='Signup'>
                <button className='btn' onClick={clickHandler}>Let's Talk</button>
            </div>
        </div>

        <div className='divx1'>
            { showNewletter &&
                <div className='newletter'>
                    
                    <div className='newletter1'>
                        <div className='stay'>Stay in Touch</div>
                        <div className='subscribe'>Subscribe to our newsletter</div>
                        <div>
                            {/*  */}
                            {/* <div> */}
                            {/* <label htmlFor="name">Name:</label> */}
                            {/* <input */}
                              {/* className='inputtag'
                              type="text"
                              id="name"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              required */}
                            {/* /> */}
                            {/* </div> */}

                            {/* <div> */}
                              {/* <label htmlFor="email">Email:</label> */}
                              {/* <input */}
                                {/* // type="email"
                                // className='inputtag'
                                // id="email"
                                // name="email"
                                // value={this.state.email}
                                // onChange={this.handleChange}
                                // required
                            //   /> */}
                            {/* </div> */}
                            {/* <button type="submit">Submit</button> */}
                            {/*  */}
                            {/* <div> */}
                            <input className='inputtag' required placeholder='name'></input>
                            <div><input className='inputtag' type="email" required placeholder='Email address'></input></div>

                            <div><button className=' btnx1 btnx5' onClick={clickHandler}>Send</button></div>
                        </div>
                    </div>
                </div>
            }
        </div>



        {
            !showNewletter &&
            <div className='main'>
            <div className='main_left'>
            <h1 className='h1 htag' data-aos="fade-down">The Best Online Platform to Start Learning<b className='web'> Coding</b></h1>
            <p data-aos="fade-right " className='ptag'>The Best Online Platform to Start Learning Coding provides comprehensive courses and a supportive community. It's perfect for beginners and offers a range of programming languages and projects for hands-on experience.</p>
            
            <button className='btn' data-aos="fade-right" onClick={clickHandler}>Get Started</button>
            
            
            </div>
            <img className='main_right' data-aos="fade-left" src={left}></img>
            
        </div>
        }
    </div>
  )
}

export default LandingPage