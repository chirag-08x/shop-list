import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { areas, category } from "../utils/helper";

const AddItems = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    area: areas[0],
    category: category[0],
    openDate: "",
    closeDate: "",
  });

  return (
    <Wrapper>
      <h1>Add Shops</h1>

      <div className="container">
        <form>
          <label htmlFor="name">Name of the shop</label>
          <input type="text" id="name" value={formValue.name} required />
          {/*  */}
          <label htmlFor="area">area</label>
          <select id="area" value={formValue.area} required>
            {areas.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          {/*  */}
          <label htmlFor="category">category</label>
          <select id="category" value={formValue.category} required>
            {category.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          {/*  */}
          <label htmlFor="opendate">Opening Date</label>
          <input
            type="date"
            id="openDate"
            value={formValue.openDate}
            required
          />
          {/*  */}
          <label htmlFor="closedate">Closing Date</label>
          <input
            type="date"
            id="closedate"
            value={formValue.closeDate}
            required
          />

          <button className="btn">Add Shop</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddItems;

const Wrapper = styled.section``;
