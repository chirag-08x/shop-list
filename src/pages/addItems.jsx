import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { areas, category } from "../utils/helper";
import moment from "moment";
import { Modal } from "../components";
import { openModal } from "../features/modal/modal_slice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uid } from "uuid";
import { addItemsToList } from "../features/shop/shop_slice";
import { FaArrowLeft } from "react-icons/fa";

const AddItems = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    area: areas[0],
    category: category[0],
    openDate: "",
    closeDate: "",
  });
  const [modaltext, setModalText] = useState("");
  const [modalState, setModalState] = useState(null);

  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const OpenModalCode = (msg, state) => {
    setModalText(msg);
    setModalState(state);
    dispatch(openModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = formValue.name
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, " ");
    const areaValue = formValue.area.toLowerCase();
    const categoryValue = formValue.category.toLowerCase();
    const openDateValue = formValue.openDate.toLowerCase();
    const closeDateValue = formValue.closeDate.toLowerCase();

    // Checking if name value is not given.
    if (nameValue === "") {
      OpenModalCode("name field cannot be empty", false);
      return;
    }

    // Checking for a-z and A-Z characters
    const x = /^[a-zA-Z" "]+$/.test(nameValue);
    if (!x) {
      OpenModalCode("only alphabets are allowed in shop name", false);
      return;
    }

    if (openDateValue === "" || closeDateValue === "") {
      OpenModalCode("Date can't be empty", false);
      return;
    }

    // Checking if closing date is smaller than opening date.
    if (moment(closeDateValue).isBefore(openDateValue)) {
      OpenModalCode("Closing date cannot be smaller than opening date", false);
      return;
    }

    if (areaValue === "area") {
      OpenModalCode("Please provide a valid value for Area field", false);
      return;
    }

    if (categoryValue === "category") {
      OpenModalCode("Please provide a valid value for category field", false);
      return;
    }

    const today = moment().format("YYYY-MM-DD");
    const status =
      moment(today).isAfter(closeDateValue) ||
      moment(today).isBefore(openDateValue)
        ? "closed"
        : "open";

    dispatch(
      addItemsToList({
        id: uid(),
        name: nameValue,
        area: areaValue,
        category: categoryValue,
        // open: openDateValue,
        // close: closeDateValue,
        status,
      })
    );
    OpenModalCode("Your shop has been added successfully.", true);
    setFormValue({
      name: "",
      area: areas[0],
      category: category[0],
      openDate: "",
      closeDate: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Wrapper>
      {isOpen && <Modal text={modaltext} msg={modalState} />}
      <h1>Add Shops</h1>

      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name of the shop</label>
            <input
              type="text"
              id="name"
              value={formValue.name}
              placeholder="Name"
              onChange={handleChange}
              name="name"
              //   required
            />
          </div>
          {/*  */}
          <div>
            <label htmlFor="area">area</label>
            <select
              id="area"
              value={formValue.area}
              onChange={handleChange}
              name="area"
              //   required
            >
              {areas.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/*  */}
          <div>
            <label htmlFor="category">category</label>
            <select
              id="category"
              value={formValue.category}
              onChange={handleChange}
              name="category"
              //   required
            >
              {category.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/*  */}
          <div>
            <label htmlFor="opendate">Opening Date</label>
            <input
              type="date"
              id="openDate"
              value={formValue.openDate}
              //   required
              onChange={handleChange}
              name="openDate"
            />
          </div>
          {/*  */}
          <div>
            <label htmlFor="closedate">Closing Date</label>
            <input
              type="date"
              id="closedate"
              value={formValue.closeDate}
              //   required
              onChange={handleChange}
              name="closeDate"
            />
          </div>

          <button className="btn">Add Shop</button>
        </form>
        <Link to={"/"} className="back-btn">
          <span>
            <FaArrowLeft />
          </span>
          <p>Go Back</p>
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddItems;

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 2rem 0;

  .container {
    width: 90vw;
    max-width: 30rem;
    background-color: var(--clr-white);
    padding: 3rem;
    border-radius: 0.5rem;

    .back-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      gap: 0 0.5rem;
      color: var(--clr-primary-1);
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    justify-content: center;

    label {
      text-transform: capitalize;
    }

    input {
      padding: 0.4rem 0.6rem;
      border: 1px solid var(--clr-grey-1);
      border-radius: 1rem;
    }

    select {
      padding: 0.4rem 0.6rem;
      border-radius: 1rem;
      text-transform: capitalize;
      border: 1px solid var(--clr-grey-1);
    }

    /* .btn {
      margin-top: 1rem;
      place-self: center;
      background-color: var(--clr-primary-1);
      border-radius: 1.5rem;
      color: white;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      letter-spacing: 0.1rem;
      border: none;
      cursor: pointer;

      &:hover {
        box-shadow: var(--dark-shadow);
        transition: var(--transition);
      }
    } */

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem 0;
    }
  }
`;
