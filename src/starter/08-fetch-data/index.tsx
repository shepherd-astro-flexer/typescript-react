import { useEffect, useState } from "react";
import { tourSchema, Tour } from "./types";

const url = "https://www.course-api.com/react-tours-project";

// type Tour = {
//   id: string;
//   image: string;
//   info: string;
//   name: string;
//   price: string;
//   something: string;
// };

function Component() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Status code error: ${response.status}`);
        }
        const rawData: Tour[] = await response.json();

        const result = tourSchema.array().safeParse(rawData);

        console.log(result);
        if (!result.success) {
          throw new Error("Failed...");
        }

        setTours(result.data);
      } catch (error) {
        const errorMsg =
          error instanceof Error ? error.message : "There was error...";
        console.log(errorMsg);
        setIsError(errorMsg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>{isError}</h3>;
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
    </div>
  );
}
export default Component;
