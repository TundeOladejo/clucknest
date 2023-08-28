import axios from "axios";

const API_URL = `${process.env.VUE_APP_API_URL}/api/auth/`;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "register", {
      company_name: user.company_name,
      email: user.email,
      password: user.password,
      password_confirm: user.password_confirm,
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.address,
    });
  }
}

export default new AuthService();
