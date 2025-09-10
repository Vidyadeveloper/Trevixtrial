
            class PatientVisitCompleteFinalizeVisit extends HTMLElement {
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
        <h2>Finalize visit</h2>
        <form id="form">
          
            <label for="visit.id">Visit ID</label>
            <input type="text" id="visit.id" name="visit.id" value="${this._formData["visit.id"] || ""}" />
          
            <label for="visit.patientId">Patient ID (Visit)</label>
            <input type="text" id="visit.patientId" name="visit.patientId" value="${this._formData["visit.patientId"] || ""}" />
          
            <label for="visit.date">Visit Date</label>
            <input type="text" id="visit.date" name="visit.date" value="${this._formData["visit.date"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["visit.id"] = this.shadowRoot.querySelector("#visit.id").value;
      data["visit.patientId"] = this.shadowRoot.querySelector("#visit.patientId").value;
      data["visit.date"] = this.shadowRoot.querySelector("#visit.date").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("patient-visit-complete-finalize-visit", PatientVisitCompleteFinalizeVisit);
export default PatientVisitCompleteFinalizeVisit;
