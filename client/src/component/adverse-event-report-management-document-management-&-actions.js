
            class AdverseEventReportManagementDocumentManagement&Actions extends HTMLElement {
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
        <h2>Document management & actions</h2>
        <form id="form">
          
            <label for="ae.outcome">Outcome</label>
            <input type="text" id="ae.outcome" name="ae.outcome" value="${this._formData["ae.outcome"] || ""}" />
          
            <label for="ae.description">Description</label>
            <input type="text" id="ae.description" name="ae.description" value="${this._formData["ae.description"] || ""}" />
          
            <label for="ae.patientId">Patient ID (AE)</label>
            <input type="text" id="ae.patientId" name="ae.patientId" value="${this._formData["ae.patientId"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["ae.outcome"] = this.shadowRoot.querySelector("#ae.outcome").value;
      data["ae.description"] = this.shadowRoot.querySelector("#ae.description").value;
      data["ae.patientId"] = this.shadowRoot.querySelector("#ae.patientId").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("adverse-event-report-management-document-management-&-actions", AdverseEventReportManagementDocumentManagement&Actions);
export default AdverseEventReportManagementDocumentManagement&Actions;
