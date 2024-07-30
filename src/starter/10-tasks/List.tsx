import { Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <div>
      {tasks.map((task) => {
        const { description, id, isCompleted } = task;

        return (
          <div key={id}>
            <h3>{description}</h3>
            <input
              type="checkbox"
              onChange={() => toggleTask(id)}
              checked={isCompleted}
            />
          </div>
        );
      })}
    </div>
  );
};
export default List;
