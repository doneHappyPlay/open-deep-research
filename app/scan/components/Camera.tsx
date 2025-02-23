"use client"

// components/Camera.js
import { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export const Camera = ({ onCapture }:{onCapture:(imageSrc:any)=>void}) => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImgSrc(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <div className='relative'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-full"
      />
      <button 
        onClick={capture}
        className="bg-blue-500 text-white p-2 mt-4 absolute top-1/2 right-1/2 rounded-xl"
      >
        拍摄照片
      </button>
    </div>
  );
};