import React, { useState, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

// BASE_IMAGE_URL is no longer needed

export const HeroImagesSection = ({ images }) => {
  // console.log({ images }); // You can keep this for debugging if needed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0); // State to control initial slide in modal
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prepend the base URL is no longer needed.
  // The 'image' property in your new payload already contains the full URL.
  const galleryImages = images?.map((image) => ({
    original: image.image, // Directly use the provided image URL
    thumbnail: image.image, // Directly use the provided image URL
    description: image.description || "",
    originalHeight: windowSize.width < 768 ? "auto" : "80vh",
  }));

  const handleImageClick = (clickedIndex) => {
    setInitialSlideIndex(clickedIndex); // Set the index of the clicked image
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable body scroll when modal is open
  };

  const toggleModal = () => {
    setIsModalOpen((open) => !open);
    document.body.style.overflow = "auto"; // Re-enable body scroll when modal is closed
  };

  const renderSingleImageLayout = () => {
    if (!images || images.length === 0) return null;

    const image = images[0];
    return (
      <div className="grid grid-cols-1 gap-4 px-4 relative">
        <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] relative">
          <img
            src={image?.image} // Use image.image directly
            alt={image.description || `Business image 1`}
            className="object-cover w-full h-full rounded-lg cursor-pointer"
            onClick={() => handleImageClick(0)} // Always open gallery starting at first image
          />
          {images.length > 1 && (
            <span
              onClick={() => handleImageClick(0)} // Click to open gallery, starting at first image
              className="text-gray-600 cursor-pointer px-2 text-[9px] md:text-[11px] bg-white padding-[5px] rounded-[5px] font-semibold text-lg absolute right-2 bottom-4"
            >
              +{images.length - 1} more photos
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderMultiImageGrid = () => {
    // This is the original logic for 5+ images, adapted
    if (!images || images.length < 5) return null; // Only for 5+ images

    if (windowSize.width < 640) {
      // Smallest screens: Show only the first image, with a "+X more" badge
      return (
        <div className="grid grid-cols-1 gap-4 px-4 relative">
          <div className="h-[30vh] relative">
            <img
              src={images[0]?.image} // Use image.image directly
              alt={images[0]?.description || `Gallery image 1`}
              className="object-cover w-full h-full rounded-lg cursor-pointer"
              onClick={() => handleImageClick(0)}
            />
            {images.length > 1 && ( // Show "more photos" badge if there's more than just this one
              <span
                onClick={() => handleImageClick(0)}
                className="text-gray-600 cursor-pointer !px-2 !text-[9px] md:!text-[11px] bg-white padding-[5px] rounded-[5px] font-semibold text-lg absolute right-2 bottom-2"
              >
                +{images.length - 1} more photos
              </span>
            )}
          </div>
        </div>
      );
    } else if (windowSize.width < 768) {
      // Small tablets - 2 columns for all available images (up to the full array)
      return (
        <div className="grid grid-cols-2 gap-3 px-4">
          {images?.map((image, index) => (
            <div key={image.id || index} className="h-[25vh]">
              <img
                src={image?.image} // Use image.image directly
                alt={image.description || `Gallery image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      );
    } else {
      // Desktop - featured image + 4 thumbnails (for 5+ images)
      return (
        <div className="grid grid-cols-1 gap-4 px-4 md:px-6 lg:px-0 md:grid-cols-2">
          <div className="h-[40vh] md:h-[50vh] lg:h-[60vh]">
            {images?.[0] && (
              <img
                src={images[0]?.image} // Use image.image directly
                alt={images[0]?.description || "Featured gallery image"}
                className="object-cover w-full h-full rounded-lg cursor-pointer"
                onClick={() => handleImageClick(0)}
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-rows-2 md:grid-cols-2 relative">
            {images?.slice(1, 5).map((image, index) => (
              <div
                key={image.id || index + 1} // Use image.id for key if available, otherwise index
                className="h-[18vh] sm:h-[20vh] md:h-[24vh] lg:h-[28vh]"
              >
                <img
                  src={image?.image} // Use image.image directly
                  alt={image.description || `Gallery thumbnail ${index + 2}`}
                  className="object-cover w-full h-full rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(index + 1)} // Adjust index for thumbnails
                />
              </div>
            ))}
            {images?.length > 5 && (
              <span
                onClick={() => handleImageClick(5)} // Open gallery starting at the 6th image
                className="text-gray-600 cursor-pointer px-2 !text-[11px] bg-white padding-[5px] rounded-[5px] font-semibold text-lg absolute right-2 bottom-4"
              >
                +{images.length - 5} more photos
              </span>
            )}
          </div>
        </div>
      );
    }
  };

  // Only render if there are images
  if (!images || images.length === 0) {
    return null;
  }

  // Decide which layout to render based on image count
  const renderLayout = () => {
    if (images.length >= 5) {
      return renderMultiImageGrid();
    } else {
      return renderSingleImageLayout();
    }
  };

  return (
    <div className="relative mt-6">
      {/* Dynamic Image Grid */}
      {renderLayout()}

      {/* Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[9999999]">
          <button
            onClick={toggleModal}
            className="absolute z-50 flex items-center justify-center w-10 h-10 p-2 text-2xl font-bold text-white transition-all duration-200 bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-70"
            aria-label="Close gallery"
          >
            &times;
          </button>
          <div className="p-20">
            <ImageGallery
              items={galleryImages}
              startIndex={initialSlideIndex} // Use the state variable here
              showPlayButton={false}
              showFullscreenButton={windowSize.width > 768}
              showNav={windowSize.width > 480}
              showBullets={windowSize.width <= 480}
              autoPlay={false}
              slideDuration={450}
              slideInterval={3000}
              additionalClass="image-gallery-custom h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
