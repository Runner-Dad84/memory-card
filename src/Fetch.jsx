import PropTypes from 'prop-types';


const ImageComponent = ( {src, alt, onClick} ) => {

    return (
        <img 
        src={src} 
        alt={alt}
        onClick={onClick}
        />
    )
}

ImageComponent.propTypes = {
    url:PropTypes.string.isRequired,
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func.isRequired,

}



export default ImageComponent;