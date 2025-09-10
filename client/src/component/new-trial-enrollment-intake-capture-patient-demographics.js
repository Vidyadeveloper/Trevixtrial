
            class NewTrialEnrollmentIntakeCapturePatientDemographics extends HTMLElement {
         constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._formData = {};
    this.render();
  }

  get formData() { return this._formData; }
  set formData(data) { this._formData = data; this.render(); }

  render() {
    this.shadowRoot.innerHTML = `
      <style>/* styling */</style>
      <div>
        <h2>Capture patient demographics</h2>
        <form id="form">
          
            <label for="patient.firstName">First Name</label>
            <input type="text" id="patient.firstName" name="patient.firstName" value="${this._formData["patient.firstName"] || ""}" />
          
            <label for="patient.lastName">Last Name</label>
            <input type="text" id="patient.lastName" name="patient.lastName" value="${this._formData["patient.lastName"] || ""}" />
          
            <label for="patient.dob">Date of Birth</label>
            <input type="text" id="patient.dob" name="patient.dob" value="${this._formData["patient.dob"] || ""}" />
          
            <label for="patient.email">Email</label>
            <input type="text" id="patient.email" name="patient.email" value="${this._formData["patient.email"] || ""}" />
          
            <label for="patient.phone">Phone</label>
            <input type="text" id="patient.phone" name="patient.phone" value="${this._formData["patient.phone"] || ""}" />
          
            <label for="patient.gender">Gender</label>
            <input type="text" id="patient.gender" name="patient.gender" value="${this._formData["patient.gender"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["patient.firstName"] = this.shadowRoot.querySelector("#patient.firstName").value;
      data["patient.lastName"] = this.shadowRoot.querySelector("#patient.lastName").value;
      data["patient.dob"] = this.shadowRoot.querySelector("#patient.dob").value;
      data["patient.email"] = this.shadowRoot.querySelector("#patient.email").value;
      data["patient.phone"] = this.shadowRoot.querySelector("#patient.phone").value;
      data["patient.gender"] = this.shadowRoot.querySelector("#patient.gender").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("new-trial-enrollment-intake-capture-patient-demographics", NewTrialEnrollmentIntakeCapturePatientDemographics);
export default NewTrialEnrollmentIntakeCapturePatientDemographics;
