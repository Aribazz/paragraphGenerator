import React, { useState } from "react";
import text from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [check, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
    let amount = parseInt(count);
    if (count < 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(text.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Stories From Our Lord Jesus Christ</h3>
      <h4>
        Parables were stories that Jesus told with a meaning. Jesus was an
        amazing storyteller and these stories were linked to the everyday lives
        of his listeners. These stories (parables) were about the Kingdom of
        God; they showed people how to behave, how to treat others and how to
        pray.
      </h4>
      <h5>We Have Eight(8) Paragraph with Different Paragraph</h5>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Generator
        </button>
      </form>
      <article className="lorem-text">
        {check.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
