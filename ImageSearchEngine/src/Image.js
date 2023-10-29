import React from 'react'

function Image(props) {
    const {image} = props;
    
  return (
    <div>
      <img src={image} alt="Image" />
    </div>
  )
}

export default Image