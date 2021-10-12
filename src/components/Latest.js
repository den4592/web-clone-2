import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #158881;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 50%;
  line-height: 2.5rem;
`;

const TextContainerStick = styled.div`
  width: 4rem;
  height: 0.3rem;
  background-color: yellow;
  margin: 0 auto;
`;

const Cards = styled.div`
  width: 80%;
  max-height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 3rem;
`;

const Card = styled.div`
  width: 15rem;
  text-align: center;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

const CardText = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10%;
`;

const Latest = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Latest articles</h1>
        <p>OUR MOST RECENT POSTS</p>
        <TextContainerStick />
      </TextContainer>
      <Cards>
        <Card>
          <Img src="https://images.unsplash.com/photo-1633113211800-4acbb59fc254?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
          <CardText>
            <h1>Hello</h1>
          </CardText>
        </Card>
        <Card>
          <Img src="https://images.unsplash.com/photo-1633651949419-dd6d32d84eef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
          <CardText>
            <h1>Hello</h1>
          </CardText>
        </Card>
        <Card>
          <Img src="https://images.unsplash.com/photo-1633623957541-f3a33a867acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
          <CardText>
            <h1>Hello</h1>
          </CardText>
        </Card>
      </Cards>
    </Container>
  );
};

export default Latest;
