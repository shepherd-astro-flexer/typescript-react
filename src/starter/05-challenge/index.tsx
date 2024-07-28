type Basic = {
  type: "basic";
  name: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

type User = Basic | Advanced;

function Component(props: User) {
  return (
    <div
      style={{
        color: props.type === "basic" ? "green" : "red",
      }}
    >
      <h2>User : {props.name}</h2>
      {props.type === "advanced" && <h2>Email : {props.email}</h2>}
    </div>
  );
}
export default Component;
