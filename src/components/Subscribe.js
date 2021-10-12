import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #e0c8b4;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextContainer = styled.div`
  width: 50%;
  height: 15rem;
  line-height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const Form = styled.div`
  width: 80%;
  height: 3rem;
  border: 3px solid gray;
`;

const Button = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  border-radius: 0.7rem;
  color: white;
  background-color: none;
`;

const Subscribe = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Subscribe</h1>
        <p>SIGN-UP OUR NEWSLETTERS</p>
        <Form></Form>
        <Button>SUBMIT</Button>
      </TextContainer>
    </Container>
  );
};

export default Subscribe;
