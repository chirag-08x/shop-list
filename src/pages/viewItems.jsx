import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { resetToDefault } from "../features/filters/filter_slice";
import { areas, category as cat } from "../utils/helper";

const ViewItems = () => {
  const { filteredShops, name, area, category, status } = useSelector(
    (state) => state.filters
  );

  const { shopItems } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetToDefault([...shopItems]));
  }, []);

  return (
    <Wrapper>
      <h1>List of Shops</h1>

      <form className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="name"
          />
        </div>
        {/*  */}
        <div>
          <label htmlFor="area">area</label>
          <select name="area" id="area" value={area}>
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
          <label htmlFor="category">category</label>
          <select name="category" id="category" value={category}>
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
          <label htmlFor="status">status</label>
          <select name="status" id="status" value={status}>
            <option value="open">open</option>
            <option value="close">close</option>
          </select>
        </div>
      </form>
    </Wrapper>
  );
};

export default ViewItems;

const Wrapper = styled.section``;
