import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { removeListItem } from "../features/shop/shop_slice";
import React from "react";

const ItemsTable = () => {
  const { filteredShops } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {filteredShops.map((item) => {
        const { id, name, area, category, status } = item;
        return (
          <React.Fragment key={id}>
            <article>
              <p>{name}</p>
              <p>{area}</p>
              <p>{category}</p>
              <p>{status}</p>
              <div className="btns">
                <button className="edit-btn">
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeListItem(id))}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

export default ItemsTable;

const Wrapper = styled.section`
  display: grid;
  gap: 1rem 0;
  article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 5rem;
    align-content: center;
    justify-items: center;
    align-items: center;
    text-transform: capitalize;
    gap: 0 1rem;
    background-color: white;
    border-radius: 0.3rem;
    padding: 1rem;

    p {
      font-size: 0.875rem;
    }

    .btns {
      margin-top: 0;
      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .edit-btn {
        color: var(--clr-green-dark);
        &:hover {
          color: var(--clr-green-light);
        }
      }

      .delete-btn {
        color: var(--clr-red-dark);
        margin-left: 1rem;

        &:hover {
          color: var(--clr-red-light);
        }
      }
    }
  }

  @media (min-width: 768px) {
    article {
      p {
        font-size: 1rem;
      }
    }
  }
`;
