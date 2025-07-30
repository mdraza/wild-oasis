import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
      <p>Loading cabin data...</p>
    </div>
  );
}

export default loading;
