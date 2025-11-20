'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    // if (imgRef.current.complete) {
    //   setIsLoaded(true);
    // }
    const img = imgRef.current;
    const handleLoad = () => setIsLoaded(true);

    if (!img) return;

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="banner-images">
      {/* <img
        className="low-res-img"
        src="/low_res/banner.jpeg"
        alt="banner-low-res"
      /> */}
      {/* <img
        ref={imgRef}
        className="high-res-img"
        src="/med_res/banner.png"
        alt="banner-high-res"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => {
          // when the high resolution image is completely loaded, this callback function will be executed and the intention is to get it to take this initially invisible image, and now make it visible
          setIsLoaded(true);
        }}
      /> */}
      <Image
        className="low-res-img"
        src="/low_res/banner.jpeg"
        alt="banner-low-res"
        fill
      />
      <Image
        ref={imgRef}
        className="high-res-img"
        src="/med_res/banner.png"
        alt="banner-high-res"
        fill
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => {
          // when the high resolution image is completely loaded, this callback function will be executed and the intention is to get it to take this initially invisible image, and now make it visible
          setIsLoaded(true);
        }}
      />
      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>The Kelly Store</h1>
          </div>
          <div>
            <button>Shop stickers</button>
            <button>Shop planner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
