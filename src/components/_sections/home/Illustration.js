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

// Linear Interpolation (lerp) function
const lerp = (start, end, t) => start + (end - start) * t;

// Fast easing function (less smoothing)
const easeInOutFast = (t) => {
  // A quicker easing function that ramps up faster
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const Illustration = () => {
  const animationContainer = useRef(null);
  const animRef = useRef(null);
  let lastFrame = 0;

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
      // Normalize X position to control the animation's progress
      const progress = e.clientX / window.innerWidth;  // Mouse X position as a percentage of the window width
      const targetFrame = progress * anim.totalFrames;  // Calculate the target frame based on mouse X

      // Apply faster easing to smooth the transition between frames
      const easedProgress = easeInOutFast(progress); // Apply fast easing
      const easedFrame = lerp(lastFrame, targetFrame, easedProgress); // Smooth transition between frames

      anim.goToAndStop(easedFrame, true);  // Move animation to the calculated frame
      lastFrame = easedFrame;

      // Optional: Control speed based on mouse Y position
      const speedFactor = (e.clientY - window.innerHeight / 2) / window.innerHeight;  // Normalize Y position
      anim.setSpeed(speedFactor); // Adjust speed, the farther down the mouse, the faster the animation
    };

    // Handle continuous animation playback when mouse is not moving
    const playAnimation = () => {
      anim.play();
    };

    // Start the animation loop on page load
    playAnimation();

    // Add mousemove event listener to control animation progress
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Stop the animation when the mouse stops moving (optional: you can remove this if you want it to keep playing even without mouse movement)
    let mouseIdleTimer;
    const resetIdleTimer = () => {
      clearTimeout(mouseIdleTimer);
      mouseIdleTimer = setTimeout(() => {
        playAnimation(); // Resume the animation after idle time
      }, 1000); // Resume after 1 second of idle
    };

    window.addEventListener("mousemove", resetIdleTimer);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", resetIdleTimer);
      clearTimeout(mouseIdleTimer);
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
