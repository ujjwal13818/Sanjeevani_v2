import React from "react";
import Form from "../../Components/Shared/Form/Form";
import { useSelector } from "react-redux";


const Register = () => {
  const { error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      <div className="row g-0">
        <div className="col-md-8 form-banner ">
          <img src="./assets/images/banner2.jpg" alt="registerImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
