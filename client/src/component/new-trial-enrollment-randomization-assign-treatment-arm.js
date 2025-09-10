
            class NewTrialEnrollmentRandomizationAssignTreatmentArm extends HTMLElement {
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
        <h2>Assign treatment arm</h2>
        <form id="form">
          
            <label for="trial.id">Trial ID</label>
            <input type="text" id="trial.id" name="trial.id" value="${this._formData["trial.id"] || ""}" />
          
            <label for="trial.phase">Phase</label>
            <input type="text" id="trial.phase" name="trial.phase" value="${this._formData["trial.phase"] || ""}" />
          
            <label for="patient.id">Patient ID</label>
            <input type="text" id="patient.id" name="patient.id" value="${this._formData["patient.id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["trial.id"] = this.shadowRoot.querySelector("#trial.id").value;
      data["trial.phase"] = this.shadowRoot.querySelector("#trial.phase").value;
      data["patient.id"] = this.shadowRoot.querySelector("#patient.id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("new-trial-enrollment-randomization-assign-treatment-arm", NewTrialEnrollmentRandomizationAssignTreatmentArm);
export default NewTrialEnrollmentRandomizationAssignTreatmentArm;
