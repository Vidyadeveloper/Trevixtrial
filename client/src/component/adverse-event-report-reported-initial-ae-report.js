
            class AdverseEventReportReportedInitialAeReport extends HTMLElement {
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
        <h2>Initial AE report</h2>
        <form id="form">
          
            <label for="ae.id">AE ID</label>
            <input type="text" id="ae.id" name="ae.id" value="${this._formData["ae.id"] || ""}" />
          
            <label for="ae.patientId">Patient ID (AE)</label>
            <input type="text" id="ae.patientId" name="ae.patientId" value="${this._formData["ae.patientId"] || ""}" />
          
            <label for="ae.dateReported">Date Reported</label>
            <input type="text" id="ae.dateReported" name="ae.dateReported" value="${this._formData["ae.dateReported"] || ""}" />
          
            <label for="ae.description">Description</label>
            <input type="text" id="ae.description" name="ae.description" value="${this._formData["ae.description"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["ae.id"] = this.shadowRoot.querySelector("#ae.id").value;
      data["ae.patientId"] = this.shadowRoot.querySelector("#ae.patientId").value;
      data["ae.dateReported"] = this.shadowRoot.querySelector("#ae.dateReported").value;
      data["ae.description"] = this.shadowRoot.querySelector("#ae.description").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("adverse-event-report-reported-initial-ae-report", AdverseEventReportReportedInitialAeReport);
export default AdverseEventReportReportedInitialAeReport;
