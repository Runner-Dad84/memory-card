import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

//import { ImageIds } from './card.jsx'


function ImageComponent ( {id, setSelected} ) {


    const [image, setImage] = useState (null);
    const [error, setError] = useState (null);
    const [imageID, setimageID] = useState (id)

    function updateImage (){
        setimageID(id);
        setSelected((prev) => {
            if (prev.includes(id)) 
                { alert('You already picked this one!');
                  return []; } else { 
                    return [...prev, id]}
            })



        //setSelected((prev) => [...prev, id]);
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
            //console.log(data);
            

            if ( data.hits && data.hits.length > 0 ){
                setImage(data.hits[0].largeImageURL);
                //console.log(data.hits[0].largeImageURL);
            } else {
                throw new Error ('image not found');
            }
            } catch (err) {
                setError(err.message);
            }
            
        };
        fetchImage();
    }, [image, imageID])

    if (error) {
        return <p>There was an error locating the image: {error}</p>
    }
    if (!error) {
        <p>Image loading...</p>
    }

    return (
        <img 
        src={image} 
        alt={imageID}
        onClick={updateImage}
        />
    )
}

ImageComponent.propTypes = {
    id: PropTypes.string.isRequired
}



export default ImageComponent;