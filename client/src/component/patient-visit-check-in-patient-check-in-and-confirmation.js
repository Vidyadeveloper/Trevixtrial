
            class PatientVisitCheckInPatientCheckInAndConfirmation extends HTMLElement {
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
        <h2>Patient check-in and confirmation</h2>
        <form id="form">
          
            <label for="patient.id">Patient ID</label>
            <input type="text" id="patient.id" name="patient.id" value="${this._formData["patient.id"] || ""}" />
          
            <label for="patient.firstName">First Name</label>
            <input type="text" id="patient.firstName" name="patient.firstName" value="${this._formData["patient.firstName"] || ""}" />
          
            <label for="patient.lastName">Last Name</label>
            <input type="text" id="patient.lastName" name="patient.lastName" value="${this._formData["patient.lastName"] || ""}" />
          
            <label for="visit.date">Visit Date</label>
            <input type="text" id="visit.date" name="visit.date" value="${this._formData["visit.date"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["patient.id"] = this.shadowRoot.querySelector("#patient.id").value;
      data["patient.firstName"] = this.shadowRoot.querySelector("#patient.firstName").value;
      data["patient.lastName"] = this.shadowRoot.querySelector("#patient.lastName").value;
      data["visit.date"] = this.shadowRoot.querySelector("#visit.date").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("patient-visit-check-in-patient-check-in-and-confirmation", PatientVisitCheckInPatientCheckInAndConfirmation);
export default PatientVisitCheckInPatientCheckInAndConfirmation;
