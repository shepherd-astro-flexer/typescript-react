// import { useState } from "react";

// function Component() {
//   type User = {
//     name: string;
//     id: number;
//   };

//   // const [name, setName] = useState<string>("");
//   const [users, setUsers] = useState<User[]>([
//     { name: "Astro", id: 1 },
//     { name: "Lee", id: 2 },
//     { name: "Frey", id: 3 },
//   ]);

//   const mapUsers: JSX.Element[] = users.map((user) => {
//     const { name, id } = user;

//     return (
//       <div key={id}>
//         <p>{name}</p>
//         <p>{id}</p>
//       </div>
//     );
//   });

//   // const handleInput = (e: any): void => {
//   //   const name: string = e.target.value;
//   //   setName(name);
//   // };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const name = formData.get("name");
//     const user = { name, id: Date.now() } as User;
//     setUsers([...users, user]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="mb-1">React & Typescript</h2>
//       <input type="text" name="name" />
//       <button className="btn btn-center" type="submit">
//         add user
//       </button>
//       <div>{mapUsers}</div>
//     </form>
//   );
// }
// export default Component;
