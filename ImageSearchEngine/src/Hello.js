
import React, { useState } from 'react';
import Image from './Image';
import Hello from './Hello';
const api = '7_ukTomlAWwPrtx1b4fJiU3Hi-A5rUZaxJciVJ-zEdU';

function Api() {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Added a state for the image URL

  function inputHandler(event) {
    setImage(event.target.value);
  }

  async function SubmitHandler(event) {
    event.preventDefault();
    const url = `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${api}`;
    const output = await fetch(url);
    const data = await output.json();
    const results = data.results;

    console.log("Inside API");
    console.log(results);
    console.log("results printed successfully");

    if (results.length > 0) {
      const ans = results[0].urls.full;
      setImageUrl(ans); // Set the image URL in state
    }
  }


  return (
    <div>
       <input
        value={image}
        onChange={inputHandler}
        placeholder='input'
        />
        <button onClick={SubmitHandler}>Submit</button>

        Render the image using the imageUrl state
       {imageUrl && (
        <div>
           <img src={imageUrl} alt="Image" />
         </div>
      )}
     </div>
  );
}

export default Api;
