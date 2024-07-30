import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import type { Task } from "./types";

type FormProp = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProp) => {
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description === "") {
      alert("Please provide a description.");
    }

    const task = {
      id: nanoid(),
      description,
      isCompleted: false,
    };

    addTask(task);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={description} onChange={handleChange} />
      <button className="btn" type="submit">
        add task
      </button>
    </form>
  );
};
export default Form;
