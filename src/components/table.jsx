import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";
import { removeItem } from "../features/filters/filter_slice";
import { removeListItem } from "../features/shop/shop_slice";
import React from "react";

const ItemsTable = () => {
  const { filteredShops } = useSelector((state) => state.filters);
  //   const today = moment().format("YYYY-MM-DD");
  const dispatch = useDispatch();

  const handleDispatch = (id) => {
    dispatch(removeListItem(id));
    dispatch(removeItem(id));
  };

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
              <p>
                {/* {moment(today).isAfter(close) || moment(today).isBefore(open)
                  ? "closed"
                  : "open"} */}
                {status}
              </p>
              <div className="btns">
                <button className="edit-btn">
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDispatch(id)}
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

    .btns {
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
`;
