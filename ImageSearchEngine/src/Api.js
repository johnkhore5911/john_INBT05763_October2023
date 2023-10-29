import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';
const api = '7_ukTomlAWwPrtx1b4fJiU3Hi-A5rUZaxJciVJ-zEdU'


function Api() {
    const [image,setImage] = useState('')
    const [imageUrl1,setImageUrl1] = useState('');
    const [imageUrl2,setImageUrl2] = useState('');
    const [imageUrl3,setImageUrl3] = useState('');
    const [imageUrl4,setImageUrl4] = useState('');
    const [imageUrl5,setImageUrl5] = useState('');
    const [imageUrl6,setImageUrl6] = useState('');
    const [imageUrl7,setImageUrl7] = useState('');
    const [imageUrl8,setImageUrl8] = useState('');
    const [imageUrl9,setImageUrl9] = useState('');

    

    function inputHandler(event){
        setImage(event.target.value);
    }
    async function SubmitHandler(event){
        event.preventDefault();
        const url = `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${api}`;
        const output = await fetch(url);
        const data = await output.json();
        const results = data.results;
        
        console.log("Inside API");
        console.log(results);
        console.log("results printed successfully")

        const ans1 = results[1].urls.small;
        setImageUrl1(ans1);

        const ans2 = results[2].urls.small;
        setImageUrl2(ans2);

        const ans3 = results[3].urls.small;
        setImageUrl3(ans3);

        const ans4 = results[4].urls.small;
        setImageUrl4(ans4);

        const ans5 = results[5].urls.small;
        setImageUrl5(ans5);

        const ans6 = results[6].urls.small;
        setImageUrl6(ans6);

        const ans7 = results[7].urls.small;
        setImageUrl7(ans7);

        const ans8 = results[8].urls.small;
        setImageUrl8(ans8);

        const ans9 = results[9].urls.small;
        setImageUrl9(ans9);

        results.map((result)=>(
            console.log(result.urls.full)
            
        ))


        
    }
    

  return (
    <div className='wrapper' >
        <div className='heading'>Image Search Engine</div>
        <div className='cont'>
            <div className='container'>
                    <div className='input'>
                    <input
                    className='input_name '
                    value={image}
                    onChange={inputHandler}
                    placeholder='Search Image'
                    ></input>
                    <GoSearch onClick={SubmitHandler} className='btn'/>
                    </div>

                <div>

                </div>

            </div>
        </div>
    <div className='content'>
        <div className='box'>
            {
                imageUrl1 &&(
                <div className='box'>
                    <img src={imageUrl1} alt="Image"  height='100px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }

            {
                imageUrl2 &&(
                <div className='box1'>
                    <img src={imageUrl2} alt="Image" height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }
            {
                imageUrl3 &&(
                <div>
                    <img src={imageUrl3} alt="Image"  
                    style={{  height: 400,width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }
        </div>

        <div className='box'>
            {
                imageUrl4 &&(
                <div>
                    <img src={imageUrl4} alt="Image"  height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }
            {
                imageUrl5 &&(
                <div>
                    <img src={imageUrl5} alt="Image"  height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }

            {
                imageUrl6 &&(
                <div>
                    <img src={imageUrl6} alt="Image"  height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }
        </div>

        <div className='box'>
            {
                imageUrl7 &&(
                <div>
                    <img src={imageUrl7} alt="Image"  height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }

            {
                imageUrl8 &&(
                <div>
                    <img src={imageUrl8} alt="Image"  height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }
            {
                imageUrl9 &&(
                <div>
                    <img src={imageUrl9} alt="Image"  height='400px'
                    style={{  height: 400, width: 400 , borderRadius: '10px'}}
                    />
                </div>
                )
            }

        </div>


    </div>    

    
    </div>
  )
}

export default Api

// 
