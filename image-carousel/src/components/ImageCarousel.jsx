import { useState } from 'react'

export default function ImageCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0)

  const onPrevClick = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }

  const onNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  return (
    <section className="carousel-section">
      <div>
        <button onClick={onPrevClick}>Prev</button>
        <button onClick={onNextClick}>Next</button>
      </div>
      <div>
        <img
          src={images[currentImage]}
          alt={`image-${currentImage}`}
          height={400}
        />
      </div>
    </section>
  )
}
