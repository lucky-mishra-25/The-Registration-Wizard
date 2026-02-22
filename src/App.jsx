import { useState } from "react";
import Step1 from "./Components/step1";
import Step2 from "./Components/step2";
import Step3 from "./Components/step3";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Registration Successful 🎉");
    setStep(4);
  };

  return (
    <div className="form-container">

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(step - 1) * 50}%` }}
        ></div>
      </div>

      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <Step3
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}

      {step === 4 && <h2>Registration Successful 🎉</h2>}

    </div>
  );
}

export default App;