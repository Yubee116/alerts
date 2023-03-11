import { useParams } from "react-router-dom";
import Loading from "./Loading";
import AlertCard from "./AlertCard";
import useFetch from "./useFetch";

export default function Alert() {
//   const data = {
//     id: 1,
//     type: "Portal Opened",
//     tag: ["test", "staging"],
//     description: "This event occured in staging",
//     origin: "192.168.0.184",
//   };
  const { id } = useParams();
  const { data: alert, isLoading, error } = useFetch(`v1/alerts/${id}`);

  return (
    <div className="alert">
      <div className="flex justify-center">
        <h1 className="mb-2 font-medium leading-tight align-center text-3xl">
          {" "}
          Alert Details{" "}
        </h1>
      </div>
      {isLoading && <Loading />}
      {error && <div>{error}</div>}
      {alert && <AlertCard alert={alert} />}
    </div>
  );
}
