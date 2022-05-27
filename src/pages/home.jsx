import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Link to={"/add"} className="btn">
        add items
      </Link>
      <Link to={"/view"} className="btn">
        view items
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

  .btn {
    background-color: var(--clr-primary-1);
    border-radius: 1.5rem;
    color: white;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    letter-spacing: 0.1rem;
    display: grid;
    place-items: center;

    &:hover {
      box-shadow: var(--dark-shadow);
      transition: var(--transition);
    }
  }
`;
