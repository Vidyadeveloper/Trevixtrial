
            class AdverseEventReportAssessmentAssessSeriousnessAndCausality extends HTMLElement {
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
        <h2>Assess seriousness and causality</h2>
        <form id="form">
          
            <label for="ae.severity">Severity</label>
            <input type="text" id="ae.severity" name="ae.severity" value="${this._formData["ae.severity"] || ""}" />
          
            <label for="ae.suspectedDrug">Suspected Drug</label>
            <input type="text" id="ae.suspectedDrug" name="ae.suspectedDrug" value="${this._formData["ae.suspectedDrug"] || ""}" />
          
            <label for="inv.id">Investigator ID</label>
            <input type="text" id="inv.id" name="inv.id" value="${this._formData["inv.id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["ae.severity"] = this.shadowRoot.querySelector("#ae.severity").value;
      data["ae.suspectedDrug"] = this.shadowRoot.querySelector("#ae.suspectedDrug").value;
      data["inv.id"] = this.shadowRoot.querySelector("#inv.id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("adverse-event-report-assessment-assess-seriousness-and-causality", AdverseEventReportAssessmentAssessSeriousnessAndCausality);
export default AdverseEventReportAssessmentAssessSeriousnessAndCausality;
