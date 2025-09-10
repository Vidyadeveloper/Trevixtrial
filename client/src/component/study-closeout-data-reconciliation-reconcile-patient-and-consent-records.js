
            class StudyCloseoutDataReconciliationReconcilePatientAndConsentRecords extends HTMLElement {
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
        <h2>Reconcile patient and consent records</h2>
        <form id="form">
          
            <label for="patient.id">Patient ID</label>
            <input type="text" id="patient.id" name="patient.id" value="${this._formData["patient.id"] || ""}" />
          
            <label for="consent.id">Consent ID</label>
            <input type="text" id="consent.id" name="consent.id" value="${this._formData["consent.id"] || ""}" />
          
            <label for="consent.status">Consent Status</label>
            <input type="text" id="consent.status" name="consent.status" value="${this._formData["consent.status"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["patient.id"] = this.shadowRoot.querySelector("#patient.id").value;
      data["consent.id"] = this.shadowRoot.querySelector("#consent.id").value;
      data["consent.status"] = this.shadowRoot.querySelector("#consent.status").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("study-closeout-data-reconciliation-reconcile-patient-and-consent-records", StudyCloseoutDataReconciliationReconcilePatientAndConsentRecords);
export default StudyCloseoutDataReconciliationReconcilePatientAndConsentRecords;
