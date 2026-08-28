import { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const CarouselImg = styled.img`
  position: absolute;
  transition: 200ms;
  max-width: 500px;
  max-height: 500px;
  opacity: ${props => (props.active ? "100%" : "0%")};
  z-index: 100;
  top: 0;
  left: 0;
`

function Carousel({n, imgs}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const changeImgInterval = setInterval(() => {
      if (active == (n - 1)) {
        setActive(0)
        return
      }
      setActive(active + 1)
    }, 2000);

    return () => {
      clearInterval(changeImgInterval)
    };
  }, [active, n]);
  
  return (
    <CarouselContainer>
      {
        imgs.map((img, index) => (
          <CarouselImg key={index} src={img} active={active == index} />
        ))
      }
    </CarouselContainer>
  )
}

export default Carousel