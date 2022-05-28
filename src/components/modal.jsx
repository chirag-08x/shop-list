import { FaTimes } from "react-icons/fa";
import { BiErrorAlt } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modal_slice";

const Modal = ({ text, msg }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className="modal-container" color={msg ? "green" : "red"}>
      <div className="modal">
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          <FaTimes />
        </button>
        <div className="modal-text">
          {msg ? <AiFillCheckCircle /> : <BiErrorAlt />}
          <p>{text}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .modal {
    width: 90%;
    max-width: 30rem;
    height: 12rem;
    border-radius: 0.5rem;
    background-color: white;
    display: grid;
    place-items: center;
    position: relative;

    .close-btn {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background: transparent;
      border: none;
      color: var(--clr-red-dark);
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        color: var(--clr-red-light);
      }
    }

    .modal-text {
      display: grid;
      place-items: center;
      font-size: 1rem;
      gap: 0 0.5rem;
      letter-spacing: 1px;
      color: ${(props) => props.color};

      p {
        margin-top: 0.5rem;
        text-transform: capitalize;
      }
    }
  }
`;
