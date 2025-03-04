import "./Form.css";
import { useState, useEffect } from "react";

function Form() {
  const [newTitle, setnewTitle] = useState("");
  const [vDate, setvDate] = useState("");
  function titlehandler(event) {
    setnewTitle(event.target.value);
  }
  function datehandler(event) {
    setvDate(event.target.value);
  }
  function submithandler(event) {
    event.preventDefault();
    const productdata = {
      Title: newTitle,
      Date: vDate,
    };
    console.log(productdata);
  }

  // useEffect se latest value milegi
  useEffect(() => {
    // console.log("Title:", newTitle);
    // console.log("vDate:", vDate);
  }, [newTitle, vDate]); // Jab bhi Title ya vDate update hoga, ye effect chalega

  return (
    <form onSubmit={submithandler}>
      <div className="hello-title">
        <label>Title</label>
        <input type="text" onChange={titlehandler} />
      </div>

      <div className="hello-data">
        <label>Data</label>
        <input
          type="date"
          min="2023-01-01"
          max="2023-12-12"
          onChange={datehandler}
        />
      </div>

      <div className="pro">
        <button type="submit">Add New Product</button>
      </div>
    </form>
  );
}

export default Form;
