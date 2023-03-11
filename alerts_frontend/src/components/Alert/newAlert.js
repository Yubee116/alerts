import { useState } from "react";
import useToken from "../App/useToken";

export default function NewAlert() {
  const [alert_type, setAlertType] = useState("");
  const [description, setAlertDescription] = useState("");
  const [tag, setAlertTag] = useState("");

  const { token } = useToken();
  const [message, setMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formValues = { alert_type, description, tag };
    formValues.tag = formValues.tag.split(" ").join("").split(","); //.replace(/\s+/g, '');
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", token.token);
      const response = await fetch("http://localhost:3000/v1/alerts", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers,
      });
      if (!response.ok) {
        throw new Error(
          `Failed to create Alert. The server responded with status: ${response.status}`
        );
      }
      // let responseData = await response.json();
      let responseData = await response;
      console.log(responseData);

      setMessage("Alert created successfully");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setAlertType("");
      setAlertDescription("");
      setAlertTag("");
    }
  };

  return (
    <div className="alert-form flex justify-center">
      <div className="px-3 w-1/3">
        <h1 className="font-bold mb-2 text-2xl">Creat Alert</h1>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-6"> {message} </div>
            <div className="mb-6">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="alert-type"
              >
                Type
              </label>
              <div className="relative">
                <select
                  name="alert_type"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="alert-type"
                  value={alert_type}
                  onChange={(e) => setAlertType(e.target.value)}
                >
                  <option default hidden>
                    Select alert Type
                  </option>
                  <option value="portal_opened">Portal Opened</option>
                  <option value="portal_reset">Portal Reset</option>
                  <option value="portal_closed">Portal Closed</option>
                  <option value="portal_deleted">Portal Deleted</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="alert-description"
              >
                Description
              </label>
              <textarea
                name="description"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="alert-description"
                placeholder="Enter alert description"
                value={description}
                onChange={(e) => setAlertDescription(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="alert-tag"
              >
                Tag
              </label>
              <input
                name="tag"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="alert-tag"
                placeholder="Enter comma-separated tags"
                value={tag}
                onChange={(e) => setAlertTag(e.target.value)}
              ></input>
            </div>
            <div className="mb-6">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Submit"
              >
                Create Alert
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
