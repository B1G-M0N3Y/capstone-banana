const ReviewImages = ({images}) => {
    console.log(images)

    return(
        <>
        {images.map(image => (
            <img src={image.image_url} onerror="this.src='https://i5.walmartimages.com/asr/5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg';"></img>
        ))}
        </>
    )
}

export default ReviewImages
