//4/1/24
import axios from "axios";

const BASE_URL = "http://localhost:4000"; // Replace with your actual base URL

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/login`,
      credentials
    );
    // Assuming the server returns a token upon successful login
    const { token, user } = response.data;
    // Store the token in a secure way (e.g., browser cookies or local storage)
    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    throw error.response.data;
  }
};
