import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import {
  resetToDefault,
  updateFilters,
  applyFilter,
} from "../features/filters/filter_slice";
import { areas, category as cat } from "../utils/helper";
import ItemsTable from "../components/table";
import { Link } from "react-router-dom";

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
  }, []);

  if (filteredShops.length < 1) {
    return (
      <EmptyWrapper>
        <h3>No shops to display</h3>
        <p>
          Please add some shops here{" "}
          <span>
            <Link to={"/add"} className="btn">
              add shops
            </Link>
          </span>{" "}
        </p>
      </EmptyWrapper>
    );
  }

  return (
    <Wrapper>
      <h1>List of Shops</h1>

      <form className="form">
        <div>
          <label htmlFor="name">Name : </label>
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
          <label htmlFor="area">area : </label>
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
          <label htmlFor="category">category : </label>
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
          <label htmlFor="status">status : </label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => handleChange(e)}
          >
            <option value="status">status</option>
            <option value="open">open</option>
            <option value="close">close</option>
          </select>
        </div>
      </form>
      <ItemsTable />
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

  h1 {
    margin-bottom: 2rem;
  }

  .form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 5rem;
    align-content: center;
    justify-items: center;
    margin-bottom: 2rem;
    gap: 0 1rem;

    label {
      text-transform: capitalize;
      letter-spacing: 1px;
    }

    input {
      width: 8rem;
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

      option {
        display: grid;
      }
    }
  }
`;

const EmptyWrapper = styled.section`
  height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 2rem 0;

  .btn {
    padding: 0.7rem 1rem;
  }
`;
