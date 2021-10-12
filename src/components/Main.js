import styled from "styled-components";
import wave_video from "../video/wave-video.mp4";

const Container = styled.div`
  width: 100%;
  height: 150vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const TextContainer = styled.div`
  width: 80%;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-30%, -30%);
  text-align: start;
  padding: 3rem;
  color: #fff;
  line-height: 5rem;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: 150vh;
`;

const TextContainerStick = styled.div`
  width: 4rem;
  height: 0.3rem;
  background-color: yellow;
`;

const About = styled.div`
  width: 50%;
  position: absolute;
  bottom: 5%;
  line-height: 2.5rem;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const AboutContainerStick = styled.div`
  width: 4rem;
  height: 0.3rem;
  margin: 0 auto;
  background-color: yellow;
`;

const Main = () => {
  return (
    <Container>
      <Video autoPlay loop muted playsinline>
        <source src={wave_video} type="video/mp4" />
      </Video>
      <TextContainer>
        <h1 style={{ fontSize: "5rem" }}>Lava</h1>
        <h2 style={{ fontSize: "2rem", color: "#4E90A9" }}>Black sand beach</h2>
        <TextContainerStick />
      </TextContainer>
      <About>
        <h1>Slow traveling</h1>
        <p>A TRAVEL BLOG</p>
        <AboutContainerStick />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aspernatur, officia libero enim dolores consequatur nemo nihil consectetur delectus recusandae, eligendi quaerat amet
          voluptates cupiditate vero, veniam aliquid! Consequuntur, vitae.
        </p>
      </About>
    </Container>
  );
};

export default Main;
