import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./types";

const Component = () => {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) return <h3>Loading...</h3>;
  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      {tours.map((tour) => {
        return <p key={tour.id}>{tour.name}</p>;
      })}
    </div>
  );
};
export default Component;
