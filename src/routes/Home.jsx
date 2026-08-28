import styled from "styled-components";
import { Container } from "../components/ui/Container";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/ui/Carousel";

const HomeContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: 96px 0;
`
const HeroTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.weight.black};
  font-size: ${({ theme }) => theme.fonts.size.xxxl};
`
const HeroP = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fonts.size.lg};
`
const HeroButton = styled(Button).attrs({size: "lg"})`
  width: fit-content;
  color: ${({ theme }) => theme.colors.foreground};
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`
  
function Home() {
  const navigate = useNavigate()
  const imgs = ["/src/assets/hero/hero-1.png", "/src/assets/hero/hero-2.png", "/src/assets/hero/hero-3.png"]
  
  
  return (
    <HomeContainer>
      <TextWrapper>
        <HeroTitle>
          NEOSHOP: <br />
          NO REGRETS
        </HeroTitle>
        <HeroP>
          The boldest gear for the boldest people. <br />
          Unapologetic style meets unyielding quality.
        </HeroP>
        <HeroButton onClick={() => navigate("/shop")}>
          Shop Now
        </HeroButton>
      </TextWrapper>
      <CarouselWrapper>
        <Carousel imgs={imgs} n={3} />
      </CarouselWrapper>
    </HomeContainer>
  );
}

export default Home;
