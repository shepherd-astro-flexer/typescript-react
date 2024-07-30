import { useEffect, useState } from "react";
import type { Task } from "./types";
import Form from "./Form";
import List from "./List";

const getLocal = localStorage.getItem("tasks");
const localTask: Task[] = getLocal ? JSON.parse(getLocal) : [];

function Component() {
  const [tasks, setTasks] = useState<Task[]>(localTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    const newTasks = [...tasks, task];

    setTasks(newTasks);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      return id === task.id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });

    setTasks(newTasks);
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List toggleTask={toggleTask} tasks={tasks} />
    </div>
  );
}
export default Component;
