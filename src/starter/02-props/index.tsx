import { PropsWithChildren } from "react";

type User = PropsWithChildren<{
  name?: string;
  id: number;
}>;

function Component({ name, id, children }: User) {
  console.log(children);

  return (
    <div>
      <p>{children}</p>
      <h1>{name}</h1>
      <h1>{id}</h1>
    </div>
  );
}
export default Component;
