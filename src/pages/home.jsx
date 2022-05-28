import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Link to={"/add"} className="btn">
        add shops
      </Link>
      <Link to={"/view"} className="btn">
        view shops
      </Link>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 2rem 0;
`;
