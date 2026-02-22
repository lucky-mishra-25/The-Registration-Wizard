function Step3({ formData, prevStep, handleSubmit }) {
  return (
    <div>
      <h2>Step 3: Review Your Information</h2>

      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Email:</strong> {formData.email}</p>

      <br />

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Step3;