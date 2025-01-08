import { useState, useEffect } from 'react';





const ImageComponent = () => {

    const imageIds = [
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
    ]
    

    const [image, setImage] = useState (null);
    const [error, setError] = useState (null);
    const [imageID, setimageID] = useState (imageIds[Math.floor(Math.random() * imageIds.length)].id)

    function updateImage (){
        setimageID(imageIds[Math.floor(Math.random() * imageIds.length)].id);
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
            console.log(data);
            

            if ( data.hits && data.hits.length > 0 ){
                setImage(data.hits[0].largeImageURL);
                console.log(data.hits[0].largeImageURL);
                console.log(imageIds)
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
        alt='castle'
        onClick={updateImage}
        />
    )
}


export default ImageComponent;