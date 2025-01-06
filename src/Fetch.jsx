import { useState, useEffect } from 'react';

/*
const images = [
    5116436, 
];


function generateURL (key, id) {
    let imgURL = `http://pixabay.com/api/?key=${apiKey}&id=${exID}`;
    return imgURL;
}
*/

const ImageComponent = () => {
    

    const [image, setImage] = useState (null);
    const [error, setError] = useState (null);
    const exID = '5116436';

    useEffect(() => {
        const fetchImage = async ()=> {
            try {
                const apiKey = '47983806-5d69dad02fddea8f4141376c1';
                const proxyURL = 'https://corsproxy.io/?';
                const targetAPI = `http://pixabay.com/api/?key=${apiKey}&id=${exID}`;
                const response = await fetch (proxyURL + targetAPI);
                   

                if (!response.ok) {
                    throw new Error (`'HTTP error ${response.status}`);
                }

            const data = await response.json();
            console.log(data);
            

            if ( data.hits && data.hits.length > 0 ){
                setImage(data.hits[0].largeImageURL);
                console.log(data.hits[0].largeImageURL);
            } else {
                throw new Error ('image not found');
            }
            } catch (err) {
                setError(err.message);
            }
            
        };
        fetchImage();
    }, [image])

    if (error) {
        return <p>There was an error locating the image: {error}</p>
    }
    if (!error) {
        <p>Image loading...</p>
    }

    return (
        <img src={image} alt='castle' />
    )
}


export default ImageComponent;