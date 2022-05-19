import axios from "axios";
const api = axios.create({
  baseURL: "https://itc-hackathon-be.herokuapp.com",
  withCredentials: true,
});

async function login(data) {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { status: "error", message: error.message };
    }
  }
}

async function signup(signUpDataObj) {
  try {
    const response = await api.post("/auth/signup", signUpDataObj);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { status: "error", message: error.message };
    }
  }
}

async function logout() {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { status: "error", message: error.message };
    }
  }
}

async function getUserData() {
  try {
    const response = await api.get("/user/getUser");
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("error");
      return error.response.data;
    } else {
      console.log("error2");
      return { status: "error", message: error.message };
    }
  }
}

async function updateUser(updatedDataObj) {
  try {
    const response = await api.put("/user/update", updatedDataObj);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { status: "error", message: error.message };
    }
  }
}

const server = {
  signup,
  login,
  logout,
  getUserData,
  updateUser,
};

export default server;
