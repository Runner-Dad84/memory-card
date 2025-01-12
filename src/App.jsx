import { useState, useEffect } from 'react'
import ImageComponent  from './Fetch.jsx'
import './App.css'

function App() {
  
  
  let ApiData = [
        { id: '7970076', clicked: false },
        { id: '1483681', clicked: false },
        { id: '789501', clicked: false },
        { id: '3619698', clicked: false },
        { id: '2245743', clicked: false },
        { id: '3584313', clicked: false },
        { id: '3619698', clicked: false },
        { id: '4406410', clicked: false },
        { id: '7170837', clicked: false },
        { id: '6566978', clicked: false },
        { id: '5386820', clicked: false },
        { id: '5588005', clicked: false },
        { id: '453164', clicked: false },
        { id: '5693094', clicked: false },
        { id: '6907857', clicked: false },
        { id: '5570684', clicked: false} ,
        { id: '7417091', clicked: false },
        { id: '7264439', clicked: false },
    ];

    function randomImg () {
      let length = ApiData.length;
      return ApiData[Math.floor(Math.random() * length)].id;
    }
  
    const [url, setUrl] = useState ();
    const [error, setError] = useState (null);
    const [imageID, setimageID] = useState ('7264439')

    function updateImage (){
      console.log('update!')
      setimageID(ApiData[Math.floor(Math.random() * ApiData.length)].id);
  }

  useEffect(() => {
      const fetchImage = async ()=> {
          try {
              const apiKey = '47983806-5d69dad02fddea8f4141376c1';
              const proxyURL = 'https://corsproxy.io/?';
              const targetAPI = `http://pixabay.com/api/?key=${apiKey}&id=${imageID}`;
              const response = await fetch (proxyURL + targetAPI);
                 

              if (!response.ok) {
                  throw new Error (`'HTTP error ${response.status}`);
              }

          const data = await response.json();
          

          if ( data.hits && data.hits.length > 0 ){
              setUrl(data.hits[0].largeImageURL);
              console.log(data.hits[0].largeImageURL);
              console.log(`this is the url ${url}`);
              console.log(data);

              
          } else {
              throw new Error ('image not found');
          }
          } catch (err) {
              setError(err.message);
          }
          
      };
      fetchImage();
  }, [url, imageID])

  if (error) {
      return <p>There was an error locating the image: {error}</p>
  }
  if (!error) {
      <p>Image loading...</p>
  }

  return (
    <div>
      <ImageComponent 
      src={url}
      alt={imageID}
      onClick={updateImage}
      />
      
    </div>


    
  )
}

export default App
