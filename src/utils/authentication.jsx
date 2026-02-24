import { auth_baseUrl } from "./urls";

export const userValidation = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const isNameValid = /^[a-zA-Z\\s-]+$/.test(name);

  if (name) if (!isNameValid) return "Enter a Valid Name";
  if (!isEmailValid) return "Invalid Email ID";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};

export const userLogin = async (data) => {
  try {
    const response = await fetch(`${auth_baseUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const response_data = await response.json();

    if (!response.ok) {
      throw new Error(response_data.message || "Login failed");
    }

    console.log("Login Success:", response_data);
    return response_data;
  } catch (error) {
    console.error("Error: ", error.message);
  }
};

export const userRegister = async (data) => {
  try {
    const response = await fetch(`${auth_baseUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const response_data = await response.json();

    if (!response.ok) {
      throw new Error(response_data.message || "Login failed");
    }

    console.log("Registration Success:", response_data);
    return response_data;

  } catch (error) {
    console.error("Error: ", error.message);
  }
};
