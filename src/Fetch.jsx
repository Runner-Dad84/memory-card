import React, { useState, useEffect } from 'react';

const images = [
    5116436, 
];

function generateURL (key, id) {
    let imgURL = `http://pixabay.com/api/?key=${key}&q=${id}`;
    return imgURL;
}

const FetchImg = () => {

}


export default FetchImg;