import { userLogin } from "../Redux/features/auth/authActions";
import store from "../Redux/store";


export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if(!role || !email || !password){
      return alert("Please Privde All Feilds");
    }
    store.dispatch(userLogin({role , email , password}));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
    try {
        console.log("register" ,   e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website);
    } catch (error) {
        console.log(error);
    }
};
