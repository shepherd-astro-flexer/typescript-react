export type CounterState = {
  count: number;
  //   status: string;
};

export const defaultState: CounterState = {
  count: 0,
  //   status: "Pending",
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};

// type StatusAction = {
//   type: "setStatus";
//   payload: "active" | "inactive";
// };

// type CountAction = UpdateCountAction;

export const counterReducer = (
  state: CounterState,
  action: UpdateCountAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    default:
      const unhandledActionType: never = action;
      throw new Error(
        `Unhandled action type: ${unhandledActionType}. Please check the counter reducer.`
      );
  }
};
