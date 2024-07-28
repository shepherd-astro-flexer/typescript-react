import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section>
      <h2>React & Typescript</h2>
      <h2>Events</h2>
      <form className="form">
        <input type="text" value={text} onChange={handleChange} />
        <input type="email" value={email} />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
export default Component;
