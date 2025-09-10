
            class LabResultSubmissionReportingPublishResultToPatientRecord extends HTMLElement {
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
        <h2>Publish result to patient record</h2>
        <form id="form">
          
            <label for="lab.id">Lab Result ID</label>
            <input type="text" id="lab.id" name="lab.id" value="${this._formData["lab.id"] || ""}" />
          
            <label for="lab.patientId">Patient ID (Lab)</label>
            <input type="text" id="lab.patientId" name="lab.patientId" value="${this._formData["lab.patientId"] || ""}" />
          
            <label for="visit.id">Visit ID</label>
            <input type="text" id="visit.id" name="visit.id" value="${this._formData["visit.id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["lab.id"] = this.shadowRoot.querySelector("#lab.id").value;
      data["lab.patientId"] = this.shadowRoot.querySelector("#lab.patientId").value;
      data["visit.id"] = this.shadowRoot.querySelector("#visit.id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("lab-result-submission-reporting-publish-result-to-patient-record", LabResultSubmissionReportingPublishResultToPatientRecord);
export default LabResultSubmissionReportingPublishResultToPatientRecord;
