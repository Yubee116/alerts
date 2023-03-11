import React, { useState } from "react";

export default function Login({ setUser, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function loginUser(credentials) {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const response = await fetch("http://localhost:3000/auth/sign_in", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers,
      });
      if (response.status === 401) {
        setEmail("");
        setPassword("");
        throw new Error(`Invalid Credentials. Please try again.`);
      }
      if (!response.ok) {
        setEmail("");
        setPassword("");
        throw new Error(
          `HTTP error: Status ${response.status}. Please try again.`
        );
      }
      return await response;
      // return responseMain
    } catch (err) {
      setError(err.message);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser({ email, password });
    if (response.ok) {
      let token = response?.headers.get("Authorization");
      let expiry = response?.headers.get("Expiry");
      let user = await response.json();
      console.log(user);
      console.log(user.data.username);

      setUser(user.data.username);
      setToken({ token, expiry });
    }
  };

  return (
    <div className="login-wrapper flex justify-center">
      <div className="px-3 w-1/3">
        <h1 className="font-bold mb-2 text-2xl">Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="px-3 mb-6">
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Submit"
            >
              Login
            </button>
          </div>
        </form>
        {error && <div className="mt-6"> {error} </div>}
      </div>
    </div>
  );
}
