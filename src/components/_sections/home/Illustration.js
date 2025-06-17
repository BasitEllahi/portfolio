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

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: jsonData2,
    });

    return () => {
      anim.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <ImageContainer>
      <Logocontainer ref={animationContainer} />
    </ImageContainer>
  );
};

export default Illustration;
