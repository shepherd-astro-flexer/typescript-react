import { useReducer } from "react";
import { counterReducer, defaultState } from "./reducer";

function Component() {
  const [state, dispatch] = useReducer(counterReducer, defaultState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      {/* <h2>Status: {state.status}</h2> */}

      <div className="btn-container">
        <button onClick={() => dispatch({ type: "increment" })} className="btn">
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })} className="btn">
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })} className="btn">
          Reset
        </button>
      </div>
      {/* <div className="btn-container">
        <button
          onClick={() => console.log("set status to active")}
          className="btn"
        >
          Set Status to Active
        </button>
        <button
          className="btn"
          onClick={() => console.log("set status to inactive")}
        >
          Set Status to Inactive
        </button>
      </div> */}
    </div>
  );
}
export default Component;
