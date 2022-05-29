import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import {
  resetToDefault,
  updateFilters,
  applyFilter,
  getItems,
} from "../features/filters/filter_slice";
import { areas, category as cat } from "../utils/helper";
import { Link } from "react-router-dom";
import ItemsTable from "../components/table";
import { FaArrowLeft } from "react-icons/fa";
import { clearList } from "../features/shop/shop_slice";

const ViewItems = () => {
  const { filteredShops, name, area, category, status } = useSelector(
    (state) => state.filters
  );

  const { shopItems } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name.toLowerCase();
    const value = e.target.value.toLowerCase();
    dispatch(updateFilters({ name, value }));
    dispatch(applyFilter(shopItems));
  };

  useEffect(() => {
    dispatch(resetToDefault([...shopItems]));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getItems([...shopItems]));
    dispatch(applyFilter(shopItems));
    // eslint-disable-next-line
  }, [shopItems]);

  return (
    <Wrapper>
      <h1>List of Shops</h1>

      <form className="form">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/*  */}
        <div>
          <label htmlFor="area">area: </label>
          <select
            name="area"
            id="area"
            value={area}
            onChange={(e) => handleChange(e)}
          >
            {areas.map((item, idx) => {
              return (
                <option value={item} key={idx}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/*  */}
        <div>
          <label htmlFor="category">category: </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {cat.map((item, idx) => {
              return (
                <option value={item} key={idx}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/*  */}
        <div>
          <label htmlFor="status">status:</label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => handleChange(e)}
          >
            <option value="status">status</option>
            <option value="open">open</option>
            <option value="closed">closed</option>
          </select>
        </div>
      </form>
      {filteredShops.length >= 1 ? (
        <ItemsTable />
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <h4>Sorry no shops matched your search</h4>
        </div>
      )}
      <section className="btns">
        <button className="btn" onClick={() => dispatch(clearList())}>
          clear list
        </button>
        <Link to={"/"} className="back-btn">
          {" "}
          <span>
            <FaArrowLeft />
          </span>{" "}
          go back
        </Link>
      </section>
    </Wrapper>
  );
};

export default ViewItems;

const Wrapper = styled.section`
  width: 90vw;
  max-width: 58rem;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 0;
  position: relative;

  h1 {
    margin-bottom: 2rem;
  }

  .form {
    display: grid;
    grid-template-rows: 1f 1fr 1fr 1fr;
    align-content: center;
    justify-items: center;
    margin-bottom: 2rem;
    gap: 0.25rem 1rem;

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 2rem;
      place-items: center;
    }

    label {
      text-transform: capitalize;
      letter-spacing: 1px;
      font-size: 0.875rem;
      justify-self: end;
    }

    input {
      width: 6.5rem;
      border-radius: 0.3rem;
      border: 1px solid black;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
    }

    select {
      border-radius: 0.3rem;
      border: 1px solid black;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      background-color: white;
    }
  }

  .btns {
    margin-top: 1rem;
  }

  @media (min-width: 900px) {
    .form {
      grid-template-columns: 1fr 1fr 1fr 1fr 5rem;
      grid-template-rows: 1fr;
      place-items: center;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 0.5rem;
      }

      label {
        font-size: 1rem;
      }
    }
  }
`;
