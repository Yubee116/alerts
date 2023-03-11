export default function AlertCard({ alert }) {
  return (
    <div className="flex justify-center">
      <div className="block border flex flex-col content-between space-y-7 border-gray-200 max-w-sm rounded-lg bg-white p-6 shadow-lg w-96">
        <div>
          <h5 className="text-xl font-medium  leading-tight text-neutral-800 capitalize">
            {alert.alert_type.replace(/_/g, " ")}
          </h5>
          <hr className="mt-3 border-purple-300" />
        </div>
        <div>
          <h5 className="mb-1 font-medium leading-tight text-neutral-800">
            Description
          </h5>
          <p className="text-base text-neutral-600">{alert.description}</p>
        </div>

        <div>
          <h3 className="mb-1 font-medium leading-tight text-neutral-800">
            {" "}
            Origin{" "}
          </h3>
          <p className="text-base text-neutral-600"> {alert.origin} </p>
        </div>

        <div>
          <h3 className="mb-2 font-medium leading-tight text-neutral-800">
            {" "}
            Tags{" "}
          </h3>
          <div className="flex justify-start space-x-3">
            {alert.tag.map((tag, idx) => {
              return (
                <span
                  key={idx}
                  className="px-2 py-1  border border-purple-300 text-gray-500 bg-gray-100 text-sm align-center"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
