
            class LabResultSubmissionCollectionRecordSpecimenCollection extends HTMLElement {
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
        <h2>Record specimen collection</h2>
        <form id="form">
          
            <label for="lab.id">Lab Result ID</label>
            <input type="text" id="lab.id" name="lab.id" value="${this._formData["lab.id"] || ""}" />
          
            <label for="lab.patientId">Patient ID (Lab)</label>
            <input type="text" id="lab.patientId" name="lab.patientId" value="${this._formData["lab.patientId"] || ""}" />
          
            <label for="lab.dateCollected">Date Collected</label>
            <input type="text" id="lab.dateCollected" name="lab.dateCollected" value="${this._formData["lab.dateCollected"] || ""}" />
          
            <label for="lab.testName">Test Name</label>
            <input type="text" id="lab.testName" name="lab.testName" value="${this._formData["lab.testName"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["lab.id"] = this.shadowRoot.querySelector("#lab.id").value;
      data["lab.patientId"] = this.shadowRoot.querySelector("#lab.patientId").value;
      data["lab.dateCollected"] = this.shadowRoot.querySelector("#lab.dateCollected").value;
      data["lab.testName"] = this.shadowRoot.querySelector("#lab.testName").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("lab-result-submission-collection-record-specimen-collection", LabResultSubmissionCollectionRecordSpecimenCollection);
export default LabResultSubmissionCollectionRecordSpecimenCollection;
