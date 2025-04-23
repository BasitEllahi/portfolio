import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import jsonData2 from "../../../assets/json/data.json"; // Your Lottie JSON file

const ImageContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
`;

const Logocontainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Illustration = () => {
  const animationContainer = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData2, // Your isometric factory animation data
    });

    animRef.current = anim;

    // Mouse move handler to control the animation based on mouse position
    const handleMouseMove = (e) => {
      const progress = e.clientX / window.innerWidth;  // Normalize X position to 0-1
      anim.goToAndStop(progress * anim.totalFrames, true); // Go to the corresponding frame based on mouse X

      // Optional: Control speed based on mouse Y position
      const speedFactor = (e.clientY - window.innerHeight / 2) / window.innerHeight;  // Normalize Y position
      anim.setSpeed(speedFactor); // Adjust speed, the farther down the mouse, the faster the animation
    };

    // Add mousemove event listener to control animation progress
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      anim.destroy(); // Clean up the animation when the component is unmounted
    };
  }, []);

  return (
    <ImageContainer>
      <Logocontainer ref={animationContainer} />
    </ImageContainer>
  );
};

export default Illustration;
