import { useState } from "react";
import type { Task } from "./types";
import Form from "./Form";
import List from "./List";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
    </div>
  );
}
export default Component;
