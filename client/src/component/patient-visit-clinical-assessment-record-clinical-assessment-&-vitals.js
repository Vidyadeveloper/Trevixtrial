
            class PatientVisitClinicalAssessmentRecordClinicalAssessment&Vitals extends HTMLElement {
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
        <h2>Record clinical assessment & vitals</h2>
        <form id="form">
          
            <label for="visit.clinicalNotes">Clinical Notes</label>
            <input type="text" id="visit.clinicalNotes" name="visit.clinicalNotes" value="${this._formData["visit.clinicalNotes"] || ""}" />
          
            <label for="visit.vitals">Vitals Summary</label>
            <input type="text" id="visit.vitals" name="visit.vitals" value="${this._formData["visit.vitals"] || ""}" />
          
            <label for="inv.id">Investigator ID</label>
            <input type="text" id="inv.id" name="inv.id" value="${this._formData["inv.id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["visit.clinicalNotes"] = this.shadowRoot.querySelector("#visit.clinicalNotes").value;
      data["visit.vitals"] = this.shadowRoot.querySelector("#visit.vitals").value;
      data["inv.id"] = this.shadowRoot.querySelector("#inv.id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("patient-visit-clinical-assessment-record-clinical-assessment-&-vitals", PatientVisitClinicalAssessmentRecordClinicalAssessment&Vitals);
export default PatientVisitClinicalAssessmentRecordClinicalAssessment&Vitals;
