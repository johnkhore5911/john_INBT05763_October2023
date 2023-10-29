import "./App.css";
import logo from './images/MyntraLogo.png';
import {GoSearch} from 'react-icons/go';
import {MdPersonOutline} from 'react-icons/md';
import {FiHeart} from 'react-icons/fi';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import flat from './images/firstPic.jpg'
import women from './images/women.jpg'
import men from './images/men.jpg'

import flat1 from './newImages/flat1.png'
import flat2 from './newImages/flat2.png'


import fest1 from './images/fest1.jpeg'
import fest2 from './images/fest2.jpeg'
import fest3 from './images/fest3.jpeg'
import fest4 from './images/fest4.jpeg'
import fest5 from './images/fest5.png'
import fest6 from './images/fest6.jpeg'

import cate from './images/cate.jpg'

import cate11 from './newImages/cate11.png'
import cate12 from './newImages/cate12.png'
import cate13 from './newImages/cate13.png'
import cate14 from './newImages/cate14.png'
import cate15 from './newImages/cate15.png'
import cate16 from './newImages/cate16.png'

import cate21 from './newImages/cate21.png'
import cate22 from './newImages/cate22.png'
import cate23 from './newImages/cate23.png'
import cate24 from './newImages/cate24.png'
import cate25 from './newImages/cate25.png'
import cate26 from './newImages/cate26.png'

import cate31 from './newImages/cate31.png'
import cate32 from './newImages/cate32.png'
import cate33 from './newImages/cate33.png'
import cate34 from './newImages/cate34.png'
import cate35 from './newImages/cate35.png'
import cate36 from './newImages/cate36.png'

import cate41 from './newImages/cate41.png'
import cate42 from './newImages/cate42.png'
import cate43 from './newImages/cate43.png'
import cate44 from './newImages/cate44.png'
import cate45 from './newImages/cate45.png'
import cate46 from './newImages/cate46.png'

import cate51 from './newImages/cate51.png'
import cate52 from './newImages/cate52.png'
import cate53 from './newImages/cate53.png'
import cate54 from './newImages/cate54.png'
import cate55 from './newImages/cate55.png'
import cate56 from './newImages/cate56.png'

import cate61 from './newImages/cate61.png'
import cate62 from './newImages/cate62.png'
import cate63 from './newImages/cate63.png'
import cate64 from './newImages/cate64.png'
import cate65 from './newImages/cate65.png'

import offers from './images/offers.jpg'

import googlePlay from './images/googlePlay.png'
import appstore from './images/appstore.png'
import fb from './images/fb.png'
import tw from './images/tw.png'
import yt from './images/yt.png'
import cm from './images/cm.png'

import original from './images/original.png'
import backup from './images/return.png'
import stdioNavbar from './newImages/stdioNavbar.png'
import stdio from './newImages/stdio.png'
import { useState } from "react";

function App() {
  
  const [isTableVisible, setTableVisible] = useState(false);

  const toggleTable = () => {
    setTableVisible(!isTableVisible);
  };

  const [isTableVisible2, setTableVisible2] = useState(false);

  const toggleTable2 = () => {
    setTableVisible2(!isTableVisible2);
  };

  const [isTableVisible3, setTableVisible3] = useState(false);

  const toggleTable3 = () => {
    setTableVisible3(!isTableVisible3);
  };

  const [isTableVisible4, setTableVisible4] = useState(false);

  const toggleTable4 = () => {
    setTableVisible4(!isTableVisible4);
  };

  const [isTableVisible5, setTableVisible5] = useState(false);

  const toggleTable5 = () => {
    setTableVisible5(!isTableVisible5);
  };

  const [isTableVisible6, setTableVisible6] = useState(false);

  const toggleTable6 = () => {
    setTableVisible6(!isTableVisible6);
  };

  
  
  return (
  <div className="wrapper">

      <div className="header">

        <div className="leftheader">
            <div className="logo">
              <img src={logo} className="logox"></img>
              <div className="hideMe">Myntra</div>
            </div>

            <div className="items">
              <div className="mens" onMouseEnter={toggleTable} onMouseLeave={toggleTable} >
                <div className="itemsMen">MEN</div>
                <div className="pink"></div>
                  {isTableVisible && (
                    <div className="hello" >


                      <div className="one">
                        <div className="one1">
                          <div className="pink1">Topwear</div>
                          <div className="fotsize">T-Shirts</div>
                          <div className="fotsize">Casual Shirts</div>
                          <div className="fotsize">Formal Shirts</div>
                          <div className="fotsize">Sweatshirts</div>
                          <div className="fotsize">Sweaters</div>
                          <div className="fotsize">Jackets</div>
                          <div className="fotsize">Blazers & Coats</div>
                          <div className="fotsize">Suits</div>
                          <div className="fotsize">Rain Jacktes</div>
                          <br/>
                          
                          <hr/>
                          <br/>

                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Indian & Festive Wear</div>
                          <div className="fotsize">Kurtas & Kurta Sets Watches</div>
                          <div className="fotsize">Sherwanis</div>
                          <div className="fotsize">Nehru Jackets</div>
                          <div className="fotsize">Dhotis</div>

                        </div>

                      </div>


                      <div className="one">
                        <div className="one1">
                          <div className="pink1">Bottomwear</div>
                          <div className="fotsize">Jeans</div>
                          <div className="fotsize">Casual Trousers</div>
                          <div className="fotsize">Formal Trousers</div>
                          <div className="fotsize">Shorts</div>
                          <div className="fotsize">Track Pants & Joggers</div>
                          {/* <div className="fotsize">Jackets</div> */}
                          {/* <div className="fotsize">Blazers & Coats</div> */}
                          {/* <div className="fotsize">Suits</div> */}
                          {/* <div className="fotsize">Rain Jacktes</div> */}
                          <br/>
                          <hr/>
                          <br/>

                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Innerwear & Sleepwear</div>
                          <div className="fotsize">Briefs & Trunks</div>
                          <div className="fotsize">Boxers</div>
                          <div className="fotsize">Vests</div>
                          <div className="fotsize">Sleepwear & Loungewear</div>
                          <div className="fotsize">Thermals</div>
                          <hr/>

                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Plus Size</div>

                        </div>

                        

                      </div>

                      <div className="one">
                        <div className="one1">
                          <div className="pink1">Footwear</div>
                          <div className="fotsize">Casual Shoes</div>
                          <div className="fotsize">Sports Shoes</div>
                          <div className="fotsize">Formal Shoes</div>
                          <div className="fotsize">Sneakers</div>
                          <div className="fotsize">Sandals & Floaters</div>
                          <div className="fotsize">Flip Flops</div>
                          <div className="fotsize">Socks</div>
                          <br/>
                          <hr/>
                          <br/>

                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Personal Care & Grooming</div>
                          <hr/>
                        </div>
                        <div className="one1">
                        
                          <div className="pink1">Sunglasses & Frames</div>
                          <hr/>
                        </div>
                        <div className="one1">
                        
                          <div className="pink1">Watches</div>
                          
                        </div>

                      </div>

                      <div className="one">
                        <div className="one1">
                          <div className="pink1">Sports & Active Wear</div>
                          <div className="fotsize">Sports Shoes</div>
                          <div className="fotsize">Sports Sandals</div>
                          <div className="fotsize">Active T-Shirts</div>
                          <div className="fotsize">Track Pants & Shorts</div>
                          <div className="fotsize">Tracksuits</div>
                          <div className="fotsize">Jackets & Sweatshirts</div>
                          <div className="fotsize">Sports Accessories</div>
                          <div className="fotsize">Swimwear</div>
                          {/* <span className="fotsize">Rain Jacktes</span> */}
                          <hr/>

                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Gadgets</div>
                          <div className="fotsize">Smart Wearables</div>
                          <div className="fotsize">Fitness Gadgets</div>
                          <div className="fotsize">Headphones</div>
                          <div className="fotsize">Speakers</div>

                        </div>

                      </div>

                      <div className="one">
                        <div className="one1">
                          <div className="pink1">Fashion Accessories</div>
                          <div className="fotsize">Wallets</div>
                          <div className="fotsize">Belts</div>
                          <div className="fotsize">Perfumes & Body Mists</div>
                          <div className="fotsize">Trimmers</div>
                          <div className="fotsize">Deodorants</div>
                          <div className="fotsize">Ties, Cufflinks & Pocket Squares</div>
                          <div className="fotsize">Accessory Gift Sets</div>
                          <div className="fotsize">Caps & Hats</div>
                          <div className="fotsize">Mufflers, Scarves & Gloves</div>
                          <div className="fotsize">Phone Cases</div>
                          <div className="fotsize">Rings & Wristwear</div>
                          <div className="fotsize">Helmets</div>
                          <br/>
                          <hr/>
                          <br/>


                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Bags & Backpacks</div>
                          <br/>
                          <hr/>
                          <br/>
                        </div>

                        <div className="one1">
                        
                          <div className="pink1">Luggages & Trolleys</div>
                        
                        </div>


                      </div>


                    </div>
                    )}
                    {/*  */}
                    {isTableVisible2 && (
                    <div className="hello" >


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 pink22">Indian & Fusion Wear</div>
                        <br/>
                        <div className="fotsize">Kurtas & Suits</div>
                        <div className="fotsize">Kurtis, Tunics & Tops</div>
                        <div className="fotsize">Sarees</div>
                        <div className="fotsize">Ethnic Wear</div>
                        <div className="fotsize">Leggings, Salwars & Churidars</div>
                        <div className="fotsize">Skirts & Palazzos</div>
                        <div className="fotsize">Dress Materials</div>
                        <div className="fotsize">Lehenga Cholis</div>
                        <div className="fotsize">Dupattas & Shawls</div>
                        <div className="fotsize">Jackets</div>

                        <br/>
                        
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Belts, Scarves & More</div>
                        <br/>
                        <hr/>
                        <br/>

                      </div>


                      <div className="one1">
                      
                        <div className="pink1 pink22">Watches & Wearables</div>

                      </div>

                    </div>


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 pink22">Western Wear</div>
                        <div className="fotsize">Dresses</div>
                        <div className="fotsize">Tops</div>
                        <div className="fotsize">Tshirts</div>
                        <div className="fotsize">Jeans</div>
                        <div className="fotsize">Trousers & Capris</div>
                        <div className="fotsize">Shorts & Skirts</div>
                        <div className="fotsize">Co-ords</div>
                        <div className="fotsize">Playsuits</div>
                        <div className="fotsize">Jumpsuits</div>
                        <div className="fotsize">Shrugs</div>
                        <div className="fotsize">Sweaters & Sweatshirts</div>
                        <div className="fotsize">Jackets & Coats</div>
                        <div className="fotsize">Blazers & Waistcoats</div>

                        <br/>
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Plus Size</div>

                      </div>

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 pink22">Maternity</div>
                        
                      </div>

                      <div className="one1">
                        <div className="pink1 pink22">Sunglasses & Frames</div>
                        
                      </div>


                      <div className="one1">
                      
                        <div className="pink1 pink22">Footwear</div>
                        <div className="fotsize">Flats</div>
                        <div className="fotsize">Casual Shoes</div>
                        <div className="fotsize">Heels</div>
                        <div className="fotsize">Boots</div>
                        <div className="fotsize">Sports Shoes & Floaters</div>
                        <br/>
                        <hr/>
                        <br/>

                        
                      </div>
                      <div className="one1">
                      
                        <div className="pink1 pink22">Sports & Active Wear</div>
                        <div className="fotsize">Clothing</div>
                        <div className="fotsize">Footwear</div>
                        <div className="fotsize">Sports Accessories</div>
                        <div className="fotsize">Sports Equipment</div>

                      </div>

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 pink22">Lingerie & Sleepwear</div>
                        <div className="fotsize">Bra</div>
                        <div className="fotsize">Briefs</div>
                        <div className="fotsize">Shapewear</div>
                        <div className="fotsize">Sleepwear & Loungewear</div>
                        <div className="fotsize">Swimwear</div>
                        <div className="fotsize">Camisoles & Thermals</div>
                        <hr/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Beauty & Personal Care</div>
                        <div className="fotsize">Makeup</div>
                        <div className="fotsize">Skincare</div>
                        <div className="fotsize">Premium Beauty</div>
                        <div className="fotsize">Lipsticks</div>
                        <div className="fotsize">Fragrances</div>


                      </div>

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 pink22">Gadgets</div>
                        <div className="fotsize">Smart Wearables</div>
                        <div className="fotsize">Fitness Gadgets</div>
                        <div className="fotsize">Headphones</div>
                        <div className="fotsize">Speakers</div>
                        <br/>
                        <hr/>
                        <br/>


                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Jewellery</div>
                        <div className="fotsize">Fashion Jewellery</div>
                        <div className="fotsize">Fine Jewellery</div>
                        <div className="fotsize">Earrings</div>

                        
                        <br/>
                        <hr/>
                        <br/>
                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Backpacks</div>
                      
                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Handbags, Bags & Wallets</div>
                      
                      </div>

                      <div className="one1">
                      
                        <div className="pink1 pink22">Luggages & Trolleys</div>
                      
                      </div>


                    </div>

                  </div>
                    )}
                    {/*  */}
                    {isTableVisible3 && (
                    <div className="hello" >


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 orangetext">Boys Clothing</div>
                        <br/>
                        <div className="fotsize">T-Shirts</div>
                        <div className="fotsize">Shirts</div>
                        <div className="fotsize">Shorts</div>
                        <div className="fotsize">Jeans</div>
                        <div className="fotsize">Trousers</div>
                        <div className="fotsize">Clothing Sets</div>
                        <div className="fotsize">Ethnic Wear</div>
                        <div className="fotsize">Track Pants & Pyjamas</div>
                        <div className="fotsize">Jacket, Sweater & Sweatshirts</div>
                        <div className="fotsize">Party Wear</div>
                        <div className="fotsize">Innerwear & Thermals</div>
                        <div className="fotsize">Nightwear & Loungewear</div>
                        <div className="fotsize">Value Packs</div>

                        <br/>
                        
                        <hr/>
                        <br/>

                      </div>

                    </div>


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 orangetext">Girls Clothing</div>
                        <div className="fotsize">Dresses</div>
                        <div className="fotsize">Tops</div>
                        <div className="fotsize">Tshirts</div>
                        <div className="fotsize">Clothing Sets</div>
                        <div className="fotsize">Lehenga choli</div>
                        <div className="fotsize">Kurta Sets</div>
                        <div className="fotsize">Party wear</div>
                        <div className="fotsize">Dungarees & Jumpsuits</div>
                        <div className="fotsize">Skirts & shorts</div>
                        <div className="fotsize">Tights & Leggings</div>
                        <div className="fotsize">Jeans, Trousers & Capris</div>
                        <div className="fotsize">Jacket, Sweater & Sweatshirts</div>
                        <div className="fotsize">Innerwear & Thermals</div>
                        <div className="fotsize">Nightwear & Loungewear</div>
                        <div className="fotsize">Value Packs</div>

                        <br/>
                        <hr/>

                      </div>

                      

                    </div>

                    <div className="one">

                      <div className="one1">
                      
                        <div className="pink1 orangetext">Footwear</div>
                        <div className="fotsize">Casual Shoes</div>
                        <div className="fotsize">Flipflops</div>
                        <div className="fotsize">Sports Shoes</div>
                        <div className="fotsize">Flats</div>
                        <div className="fotsize">Sandals</div>
                        <div className="fotsize">Heels</div>
                        <div className="fotsize">School Shoes</div>
                        <div className="fotsize">Socks</div>


                        <br/>
                        <hr/>
                        <br/>

                        
                      </div>
                      <div className="one1">
                      
                        <div className="pink1 orangetext">Toys & Games</div>
                        <div className="fotsize">Learning & Development</div>
                        <div className="fotsize">Activity Toys</div>
                        <div className="fotsize">Soft Toys</div>
                        <div className="fotsize">Action Figure / Play set</div>

                      </div>

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 orangetext">Infants</div>
                        <div className="fotsize">Bodysuits</div>
                        <div className="fotsize">Rompers & Sleepsuits</div>
                        <div className="fotsize">Clothing Sets</div>
                        <div className="fotsize">Tshirts & Tops</div>
                        <div className="fotsize">Dresses</div>
                        <div className="fotsize">Bottom wear</div>
                        <div className="fotsize">Winter Wear</div>
                        <div className="fotsize">Innerwear & Sleepwear</div>
                        <div className="fotsize">Infant Careses</div>

                        <hr/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 orangetext">Home & Bath</div>


                      </div>
                      <div className="one1">
                      
                        <div className="pink1 orangetext">Personal Care</div>


                      </div>

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 orangetext">Kids Accessories</div>
                        <div className="fotsize">Bags & Backpacks</div>
                        <div className="fotsize">Watches</div>
                        <div className="fotsize">Jewellery & Hair accessory</div>
                        <div className="fotsize">Sunglasses</div>
                        <div className="fotsize">Masks & Protective Gears</div>
                        <div className="fotsize">Caps & Hats</div>

                        <br/>
                        <hr/>
                        <br/>


                      </div>

                      <div className="one1">
                      
                        <div className="pink1 orangetext">Brands</div>
                        <div className="fotsize">H&M</div>
                        <div className="fotsize">Max Kids</div>
                        <div className="fotsize">Pantaloons</div>
                        <div className="fotsize">United Colors Of Benetton Kids</div>
                        <div className="fotsize">YK</div>
                        <div className="fotsize">U.S. Polo Assn. Kids</div>
                        <div className="fotsize">Mothercare</div>
                        <div className="fotsize">HRX</div>




                        
                        <br/>
                        <hr/>
                        <br/>
                      </div>


                    </div>

                  </div>
                    )}
                    {/*  */}
                    {isTableVisible4 && (
                    <div className="hello" >


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 yellotext">Bed Linen & Furnishing</div>
                        <div className="fotsize">Bed Runners</div>
                        <div className="fotsize">Mattress Protectors</div>
                        <div className="fotsize">Bedsheets</div>
                        <div className="fotsize">Bedding Sets</div>
                        <div className="fotsize">Blankets, Quilts & Dohars</div>
                        <div className="fotsize">Pillows & Pillow Covers</div>
                        <div className="fotsize">Bed Covers</div>
                        <div className="fotsize">Diwan Sets</div>
                        <div className="fotsize">Chair Pads & Covers</div>
                        <div className="fotsize">Sofa Covers</div>

                        <br/>
                        
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 yellotext">Flooring</div>
                        <div className="fotsize">Floor Runners</div>
                        <div className="fotsize">Carpets</div>
                        <div className="fotsize">Floor Mats & Dhurries</div>
                        <div className="fotsize">Door Mats</div>



                      </div>

                    </div>


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 yellotext">Bath</div>
                        <div className="fotsize">Bath Towels</div>
                        <div className="fotsize">Hand & Face Towels</div>
                        <div className="fotsize">Beach Towels</div>
                        <div className="fotsize">Towels Set</div>
                        <div className="fotsize">Bath Rugs</div>
                        <div className="fotsize">Bath Robes</div>
                        <div className="fotsize">Bathroom Accessories</div>
                        <div className="fotsize">Shower Curtains</div>


                        <br/>
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 yellotext">Lamps & Lighting</div>
                        <div className="fotsize">Floor Lamps</div>
                        <div className="fotsize">Ceiling Lamps</div>
                        <div className="fotsize">Table Lamps</div>
                        <div className="fotsize">Wall Lamps</div>
                        <div className="fotsize">Outdoor Lamps</div>
                        <div className="fotsize">String Lights</div>

                        <hr/>

                      </div>
                      

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 yellotext">Home Décor</div>
                        <div className="fotsize">Plants & Planters</div>
                        <div className="fotsize">Aromas & Candles</div>
                        <div className="fotsize">Clocks</div>
                        <div className="fotsize">Mirrors</div>
                        <div className="fotsize">Wall Décor</div>
                        <div className="fotsize">Festive Decor</div>
                        <div className="fotsize">Pooja Essentials</div>
                        <div className="fotsize">Wall Shelves</div>
                        <div className="fotsize">Fountains</div>
                        <div className="fotsize">Showpieces & Vases</div>
                        <div className="fotsize">Ottoman</div>
                        
                        <br/>
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 yellotext">Cushions & Cushion Covers</div>
                        <hr/>
                      </div>
                      <div className="one1">
                      
                        <div className="pink1 yellotext">Curtains</div>
                        <hr/>
                      </div>

                    </div>

                    <div className="one">

                      <div className="one1">
                        
                        <div className="pink1 yellotext">Home Gift Sets</div>
                        <hr/>
                      </div>


                      <div className="one1">
                        <div className="pink1 yellotext">Kitchen & Table</div>
                        <div className="fotsize">Table Runners</div>
                        <div className="fotsize">Dinnerware & Serveware</div>
                        <div className="fotsize">Cups and Mugs</div>
                        <div className="fotsize">Bakeware & Cookware</div>
                        <div className="fotsize">Kitchen Storage & Tools</div>
                        <div className="fotsize">Bar & Drinkware</div>
                        <div className="fotsize">Table Covers & Furnishings</div>

                        <hr/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 yellotext">Storage</div>
                        <div className="fotsize">Bins</div>
                        <div className="fotsize">Hangers</div>
                        <div className="fotsize">Organisers</div>
                        <div className="fotsize">Hooks & Holders</div>
                        <div className="fotsize">Laundry Bags</div>


                      </div>

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 yellotext">Brands</div>
                        <div className="fotsize">H&M</div>
                        <div className="fotsize">Marks & Spencer</div>
                        <div className="fotsize">Home Centre</div>
                        <div className="fotsize">Spaces</div>
                        <div className="fotsize">D'Decor</div>
                        <div className="fotsize">Story@Home</div>
                        <div className="fotsize">Pure Home & Living</div>
                        <div className="fotsize">Swayam</div>
                        <div className="fotsize">Raymond Home</div>
                        <div className="fotsize">Maspar</div>
                        <div className="fotsize">My Trident</div>
                        <div className="fotsize">Cortina</div>
                        <div className="fotsize">Random</div>
                        <div className="fotsize">Ellementry</div>
                        <div className="fotsize">ROMEE</div>
                        <div className="fotsize">SEJ by Nisha Gupta</div>

                        <br/>
                        <hr/>
                        <br/>


                      </div>

                      


                    </div>

                  </div>
                    )}
                    {/*  */}
                    {isTableVisible5 && (
                    <div className="hello" >


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 grentext">Makeup</div>
                        <div className="fotsize">Lipstick</div>
                        <div className="fotsize">Lip Gloss</div>
                        <div className="fotsize">Lip Liner</div>
                        <div className="fotsize">Mascara</div>
                        <div className="fotsize">Eyeliner</div>
                        <div className="fotsize">Kajal</div>
                        <div className="fotsize">Eyeshadow</div>
                        <div className="fotsize">Foundation</div>
                        <div className="fotsize">Primer</div>
                        <div className="fotsize">Concealer</div>
                        <div className="fotsize">Compact</div>
                        <div className="fotsize">Nail Polish</div>


                        <br/>
                        

                      </div>

                    </div>


                    <div className="one">
                      <div className="one1">
                        <div className="pink1 grentext">Skincare, Bath & Body</div>
                        <div className="fotsize">Face Moisturiser</div>
                        <div className="fotsize">Cleanser</div>
                        <div className="fotsize">Masks & Peel</div>
                        <div className="fotsize">Sunscreen</div>
                        <div className="fotsize">Serum</div>
                        <div className="fotsize">Face Wash</div>
                        <div className="fotsize">Eye Cream</div>
                        <div className="fotsize">Lip Balm</div>
                        <div className="fotsize">Body Lotion</div>
                        <div className="fotsize">Body Wash</div>
                        <div className="fotsize">Body Scrub</div>
                        <div className="fotsize">Hand Cream</div>

                        <br/>
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 grentext">Baby Care</div>

                        <hr/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 grentext">Masks</div>


                      </div>
                      
                      

                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 grentext">Haircare</div>
                        <div className="fotsize">Shampoo</div>
                        <div className="fotsize">Conditioner</div>
                        <div className="fotsize">Hair Cream</div>
                        <div className="fotsize">Hair Oil</div>
                        <div className="fotsize">Hair Gel</div>
                        <div className="fotsize">Hair Color</div>
                        <div className="fotsize">Hair Serum</div>
                        <div className="fotsize">Hair Accessory</div>

                        
                        <br/>
                        <hr/>
                        <br/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 grentext">Fragrances</div>
                        <div className="fotsize">Perfume</div>
                        <div className="fotsize">Deodorant</div>
                        <div className="fotsize">Body Mist</div>

                        <hr/>
                      </div>
                      

                    </div>

                    <div className="one">

                      <div className="one1">
                        
                        <div className="pink1 grentext">Appliances</div>
                        <div className="fotsize">Hair Straightener</div>
                        <div className="fotsize">Hair Dryer</div>
                        <div className="fotsize">Epilator</div>

                        <hr/>
                      </div>


                      <div className="one1">
                        <div className="pink1 grentext">Men's Grooming</div>
                        <div className="fotsize">Trimmers</div>
                        <div className="fotsize">Beard Oil</div>
                        <div className="fotsize">Hair Wax</div>


                        <hr/>

                      </div>

                      <div className="one1">
                      
                        <div className="pink1 grentext">Beauty Gift & Makeup Set</div>
                        <div className="fotsize">Beauty Gift</div>
                        <div className="fotsize">Makeup Kit</div>


                      </div>

                      <div className="one1">
                        
                        <div className="pink1 grentext">Premium Beauty</div>
                        <hr/>
                      </div>

                      <div className="one1">
                        
                        <div className="pink1 grentext">Wellness & Hygiene</div>
                        <hr/>
                      </div>



                    </div>

                    <div className="one">
                      <div className="one1">
                        <div className="pink1 grentext">Top Brands</div>
                        <div className="fotsize">Lakme</div>
                        <div className="fotsize">Maybelline</div>
                        <div className="fotsize">LOreal</div>
                        <div className="fotsize">Philips</div>
                        <div className="fotsize">Bath & Body Works</div>
                        <div className="fotsize">THE BODY SHOP</div>
                        <div className="fotsize">Biotique</div>
                        <div className="fotsize">Mamaearth</div>
                        <div className="fotsize">MCaffeine</div>
                        <div className="fotsize">Nivea</div>
                        <div className="fotsize">Lotus Herbals</div>
                        <div className="fotsize">LOreal Professionnel</div>
                        <div className="fotsize">KAMA AYURVEDA</div>
                        <div className="fotsize">M.A.C</div>
                        <div className="fotsize">Forest Essentials</div>

                        <br/>
                        <hr/>
                        <br/>


                      </div>

                      


                    </div>

                    </div>
                    )}
              </div>
              
              <div className="mens" onMouseEnter={toggleTable2} onMouseLeave={toggleTable2} >
                <div className="itemsMen">WOMEN</div>
                <div className="pink pink2"></div>
                  
              </div>

              <div className="mens" onMouseEnter={toggleTable3} onMouseLeave={toggleTable3} >
                <div className="itemsMen">KIDS</div>
                <div className="pink orange"></div>
                {isTableVisible6 && (
                    <div className="hellox1" >
                      <div><img src={stdio} className="hellox3"></img></div>
                      <div className="hellox2">Your daily inspiration for everything fashion</div>
                      
                      <div className="widh">
                        <img src={stdioNavbar} ></img>
                      </div>

                      <div className="btnStudio">
                        <button className="btnExplore">EXPLORE STUDIO</button>
                      </div>
                      
                    </div>
                    )}
                
                  
              </div>

              <div className="mens" onMouseEnter={toggleTable4} onMouseLeave={toggleTable4} >
                <div className="itemsMen Living">HOME & LIVING</div>
                <div className="pink yello"></div>
                  
              </div>

              <div className="mens" onMouseEnter={toggleTable5} onMouseLeave={toggleTable5} >
                <div className="itemsMen">BEAUTY</div>
                <div className="pink gren"></div>
                  
              </div>
              
              <div className="mens">
                <div className="itemsMen studio" onMouseEnter={toggleTable6} onMouseLeave={toggleTable6} >STUDIO<sup className="new"> NEW</sup> </div>
                <div className="pink redish"></div>
                
              </div>
              
            </div>
            
        </div>
        

        
        <div className="rightHeader">
            <div className="searchHeader">
              <input className="input" placeholder="Search for products, brands and more"></input>
              <div><GoSearch className="gosearch"/></div>
            </div>

          <div className="icons">

            
              <div className="iconHeader">
                <div><MdPersonOutline className="shade size"/></div>
                <div className="profile">Profile</div>
              </div>

              <div className="iconHeader">
                <div className="pb"><FiHeart className="shade size2"/></div>
                <div className="profile">Wishlist</div>
              </div>

              <div className="iconHeader">
                <div><HiOutlineShoppingBag className="shade size3"/></div>
                <div className="profile">Bag</div>
              </div>
            

          </div>



        </div>

      </div>
      
      {/* first page start */}

      <hr/>

        
        
      <div className="firstSection">
        <div className="flats"><img src={flat} className="flat"></img></div>
        <div className="wmen">
          <img src={women} className="men1"></img>
          <img src={men} className="men2"></img>
        </div>
           <div className="flatx1">
            <img src={flat2} className="x2"></img>
            <img src={flat1} className="x2"></img>
          </div>
        <div className=" grind">
          <img src={fest1} className="a1"></img>
          <img src={fest2} className="a1"></img>
          <img src={fest3} className="a1"></img>
          <img src={fest4} className="a1"></img>
          <img src={fest5} className="hid a1"></img>
          <img src={fest6} className="hid a1"></img>
        </div>
        <img src={cate}></img>
        {/*  */}
      <div className="grid-item">
          <img src={cate11}></img>
          <img src={cate12}></img>
          <img src={cate13}></img>
          <img src={cate14}></img>
          <img src={cate15}></img>
          <img src={cate16}></img>
        
          <img src={cate21}></img>
          <img src={cate22}></img>
          <img src={cate23}></img>
          <img src={cate24}></img>
          <img src={cate25}></img>
          <img src={cate26}></img>
        
          <img src={cate31}></img>
          <img src={cate32}></img>
          <img src={cate33}></img>
          <img src={cate34}></img>
          <img src={cate35}></img>
          <img src={cate36}></img>
        
          <img src={cate41}></img>
          <img src={cate42}></img>
          <img src={cate43}></img>
          <img src={cate44}></img>
          <img src={cate45}></img>
          <img src={cate46}></img>
        
          <img src={cate51}></img>
          <img src={cate52}></img>
          <img src={cate53}></img>
          <img src={cate54}></img>
          <img src={cate55}></img>
          <img src={cate56}></img>
        
          <img src={cate61}></img>
          <img src={cate62}></img>
          <img src={cate63}></img>
          <img src={cate64}></img>
          <img src={cate65}></img>
        
      </div>


        <img src={offers}></img>
      </div>

      {/* footer */}
      <div className="footer">

        <div className="footer1"> 
            <div className="foot11">
            <div>
              <div className="onlineshop">ONLINE SHOPPING</div>
                <div className="men1">Men</div>
                <div className="men1">Women</div>
                <div className="men1">Kids</div>
                <div className="men1">Home & Living</div>
                <div className="men1">Beauty</div>
                <div className="men1">Gift Cards</div>
                <div className="men1">Myntra Insider</div>
              </div>
              <div>
                <div className="usefulshop onlineshop useful">USEFUL LINKS</div>
                <div className="men1">Blog</div>
                <div className="men1">Careers</div>
                <div className="men1">Site Map</div>
                <div className="men1">Corporate Information</div>
                <div className="men1">Whitehat</div>
              </div>
            </div>

            <div className="custom">

            <div className="onlineshop">CUSTOMER POLICIES</div>
            <div className="men1">Contact Us</div>
            <div className="men1">FAQ</div>
            <div className="men1">T&C</div>
            <div className="men1">Terms Of Use</div>
            <div className="men1">Track Orders</div>
            <div className="men1">Shipping</div>
            <div className="men1">Cancellation</div>
            <div className="men1">Returns</div>
            <div className="men1">Privacy policy</div>
            <div className="men1">Grievance Officer</div>
            </div>

            <div className="exp">
              <div className="onlineshop">EXPERIENCE MYNTRA APP ON MOBILE</div>
              <div className="images">
                <img src={googlePlay} className="imgsize"></img>
                <img src={appstore} className="imgsize"></img>
              </div>
              <div className="onlineshop2">KEEP IN TOUCH</div>
              <div className="logos">
                <img src={fb}></img>
                <img src={tw}></img>
                <img src={yt}></img>
                <img src={cm}></img>
              </div>
            </div> 
            <div className="width">
              <div className="orignialImg abc">
                <img src={original}></img> 
                <div className="ab">
                  <div className="cd">
                    <div className="ef strong">100% ORIGINAL </div>
                    <div className="gf">guarantee for</div>
                  </div>
                  <div className="ij">all products at myntra.com</div>
                </div>
              </div>

              <div className="orignialImg abc margin">
                <img src={backup}></img> 
                <div className="ab">
                  <div className="cd">
                    <div className="ef strong">Return within 14days </div>
                    <div className="gf">of</div>
                  </div>
                  <div className="ij">receiving your order</div>
                </div>
              </div>

              

            </div>


        </div>
        <div className="foot">
          <div className="footer2">
            {/* 1st */}
            <div className="footer12">
              <div className="pop">POPULAR SEARCHES</div>
              <div className="hrtag"><hr className="hrs"></hr></div>
            </div>
            {/* 2nd */}
            <div className="footer13">
              Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes |
              Boxers Wallets | Tops | Earrings | Fastrack Watches Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
              Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
              Adidas Shoes Woodland Shoes | Jewellery | Designers Sarees
            </div>
            {/* 3rd */}
            <div className="footer14">
              <div>In case of any concern, <span className="color">Contact Us</span></div>
              <div>© 2023 www.myntra.com. All rights reserved.</div>
            </div>
            
          </div>
        </div>


        <div className="footer3">
            <div className="footer31 footer19">
              <hr className="marginbottom"></hr>
              <div className="Registered">Registered Office Address</div>
              <div>Buildings Alyssa,</div>
              <div>Begonia and Clover situated in Embassy Tech Village,</div>
              <div>Outer Ring Road,</div>
              <div>Devarabeesanahalli Village,</div>
              <div className="sizewidth">
                <div className="varthur">
                  <div>Varthur Hobli,</div>
                  <div>CIN: U72300KA2007PTC041799</div>
                </div>
                <div className="varthur">
                  <div>Bengaluru – 560103, India</div>
                  <div>Telephone: <span  className="color fontsize">+91-80-61561999</span></div>
                </div>
              </div>

            </div>
        </div>

        <div className="footer4">
            <hr className="widths"></hr>
          <div className="footer41">
            <div className="easyMyntra">ONLINE SHOPPING MADE EASY AT MYNTRA</div>
            <div className="easyMyntra1">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.</div>

            <div className="easyMyntra2">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</div>
            <div className="easyMyntra3">Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</div>
            
            <div className="easyMyntra4"> 

                <div className="easyMyntra7">
                <div><span className="easyMyntra3 easy">1.</span> </div>
                <div className="easyMyntra3"><span className="easyMyntra5">Smart men’s clothing </span> <span className="easyMyntra6">- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</span> </div>
                </div>

                <div className="easyMyntra7">
                <div><span className="easyMyntra3 easy">2.</span> </div>
                <div className="easyMyntra3"><span className="easyMyntra5">Trendy women’s clothing </span> <span className="easyMyntra6">- Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</span> </div>
                </div>

                <div className="easyMyntra7">
                <div><span className="easyMyntra3 easy">3.</span> </div>
                <div className="easyMyntra3"><span className="easyMyntra5">Fashionable footwear</span> <span className="easyMyntra6"> - While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</span> </div>
                </div>

                <div className="easyMyntra7">
                <div><span className="easyMyntra3 easy">4.</span> </div>
                <div className="easyMyntra3"><span className="easyMyntra5">Stylish accessories</span> <span className="easyMyntra6"> - Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</span> </div>
                </div>

                <div className="easyMyntra7">
                <div><span className="easyMyntra3 easy">5.</span> </div>
                <div className="easyMyntra3"><span className="easyMyntra5">Fun and frolic</span> <span className="easyMyntra6"> - Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</span> </div>
                </div>

                <div className="easyMyntra7">
                <div><span className="easyMyntra3 easy">6.</span> </div>
                <div className="easyMyntra3"><span className="easyMyntra5">Beauty begins here</span> <span className="easyMyntra6">- You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</span> </div>
                </div>
              
            </div>
            <div className="easyMyntra8">
            Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.
            </div>

            <div className="easyMyntra9">AFFORDABLE FASHION AT YOUR FINGERTIPS</div>
            <div className="easyMyntra1">Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</div>
            

            <div className="easyMyntra9">MYNTRA INSIDER</div>
            <div className="easyMyntra1">Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called Myntra Insider was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.</div>
            <div className="lineHeight"></div>
            <div className="easyMyntra1 paddingbottom">There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.</div>
            
            <div className="insider">Insider</div>
            <div className="lineHeight1"></div>
            <ol className="ol">
            <div className="lineHeight1"></div>
              <li className="singleOl">Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.</li>
              <div className="lineHeight1"></div>
              <li className="singleOl">Curated collections from celeb stylists.</li>
              <div className="lineHeight1"></div>
            </ol>

            <div className="insider">Insider</div>
            <div className="lineHeight1"></div>
            <ol className="ol">
              <div className="lineHeight1"></div>
            <div className="lineHeight1"></div>
              <li className="singleOl">VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.</li>
              <div className="lineHeight1"></div>
              
              <li className="singleOl">Exclusive early access to Limited Edition products</li>
              <div className="lineHeight1"></div>
            </ol>

            <div className="insider">Icon</div>
            <div className="lineHeight1"></div>
            <ol className="ol">
              <div className="lineHeight1"></div>
              <li className="singleOl">Chance to get on guest lists for special events</li>
              <div className="lineHeight1"></div>
            </ol>
            {/*  */}

            <div className="easyMyntra9">Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</div>
            <div className="easyMyntra1">The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.</div>
            <div className="lineHeight"></div>
            <div className="easyMyntra1 paddingbottom">Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.</div>
            <div className="easyMyntra1 paddingbottom">Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.</div>
            <div className="easyMyntra1 paddingbottom1">If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</div>

            <div className="easy1">
              <ol className="ol1">
                <li className="insider">Keep Up With What Your Favourite Fashion Icons Are Upto</li>
                <div className="lineHeight1"></div>
                <div className="singleOl">The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</div>
                <div className="lineHeight1"></div>
                <div className="singleOl">Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</div>
                
                <div className="lineHeight1"></div>

                <li className="insider">Quick Fashion Tip And Tricks</li>
                <div className="lineHeight1"></div>
                <div className="singleOl">Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</div>
                <div className="lineHeight1"></div>
                
                <li className="insider">Updates on What Is Trending and New Product Launches</li>
                <div className="lineHeight1"></div>
                <div className="singleOl">Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</div>
                <div className="lineHeight1"></div>
                <div className="singleOl">Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</div>

                <div className="lineHeight1"></div>

                <li className="insider">Explicit Step-By-Step Beauty Routines From Experts</li>
                <div className="lineHeight1"></div>
                <div className="singleOl">Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.</div>
                <div className="lineHeight1"></div>

                <li className="insider">Celebrity Confessions And A Look Into Their Lives</li>
                <div className="lineHeight1"></div>
                <div className="singleOl">A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.</div>
                <div className="lineHeight1"></div>
                <div className="singleOl">If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</div>


              </ol>

            </div>

            <div className="easyMyntra9">MYNTRA APP</div>
            <div className="easyMyntra1">Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!</div>
            
            <div className="easyMyntra9">HISTORY OF MYNTRA</div>
            <div className="easyMyntra1">Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</div>
            <div className="lineHeight1"></div>
            <div className="easyMyntra1">The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before</div>
            

            <div className="easyMyntra9">SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</div>
            <div className="easyMyntra1">Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.</div>
            <div className="lineHeight1"></div>
            <div className="easyMyntra1">Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</div>
            

          </div>

        </div>

      </div>
      

  </div>
  );
}

export default App;
