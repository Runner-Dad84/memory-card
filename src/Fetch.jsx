import { useState, useEffect } from 'react';


const imageIds = [
    '7970076',
    '1483681',
    '789501',
    '3619698',
    '2245743',
    '3584313',
    '3619698',
    '4406410',
    '7170837',
    '6566978',
    '5386820',
    '5588005',
    '453164',
    '5693094',
    '6907857',
    '5570684',
    '7417091',
    '7264439'
]


const ImageComponent = () => {
    

    const [image, setImage] = useState (null);
    const [error, setError] = useState (null);
    const [imageID, setimageID] = useState (imageIds[Math.floor(Math.random() * imageIds.length)])

    function updateImage (){
        setimageID(imageIds[Math.floor(Math.random() * imageIds.length)]);
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