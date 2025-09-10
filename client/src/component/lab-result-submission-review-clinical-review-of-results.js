
            class LabResultSubmissionReviewClinicalReviewOfResults extends HTMLElement {
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
        <h2>Clinical review of results</h2>
        <form id="form">
          
            <label for="lab.id">Lab Result ID</label>
            <input type="text" id="lab.id" name="lab.id" value="${this._formData["lab.id"] || ""}" />
          
            <label for="lab.patientId">Patient ID (Lab)</label>
            <input type="text" id="lab.patientId" name="lab.patientId" value="${this._formData["lab.patientId"] || ""}" />
          
            <label for="inv.id">Investigator ID</label>
            <input type="text" id="inv.id" name="inv.id" value="${this._formData["inv.id"] || ""}" />
          
            <label for="lab.normalRange">Normal Range</label>
            <input type="text" id="lab.normalRange" name="lab.normalRange" value="${this._formData["lab.normalRange"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["lab.id"] = this.shadowRoot.querySelector("#lab.id").value;
      data["lab.patientId"] = this.shadowRoot.querySelector("#lab.patientId").value;
      data["inv.id"] = this.shadowRoot.querySelector("#inv.id").value;
      data["lab.normalRange"] = this.shadowRoot.querySelector("#lab.normalRange").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("lab-result-submission-review-clinical-review-of-results", LabResultSubmissionReviewClinicalReviewOfResults);
export default LabResultSubmissionReviewClinicalReviewOfResults;
