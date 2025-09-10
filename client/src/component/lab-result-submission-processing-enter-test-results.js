
            class LabResultSubmissionProcessingEnterTestResults extends HTMLElement {
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
        <h2>Enter test results</h2>
        <form id="form">
          
            <label for="lab.value">Result Value</label>
            <input type="text" id="lab.value" name="lab.value" value="${this._formData["lab.value"] || ""}" />
          
            <label for="lab.units">Units</label>
            <input type="text" id="lab.units" name="lab.units" value="${this._formData["lab.units"] || ""}" />
          
            <label for="lab.normalRange">Normal Range</label>
            <input type="text" id="lab.normalRange" name="lab.normalRange" value="${this._formData["lab.normalRange"] || ""}" />
          
            <label for="lab.testName">Test Name</label>
            <input type="text" id="lab.testName" name="lab.testName" value="${this._formData["lab.testName"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["lab.value"] = this.shadowRoot.querySelector("#lab.value").value;
      data["lab.units"] = this.shadowRoot.querySelector("#lab.units").value;
      data["lab.normalRange"] = this.shadowRoot.querySelector("#lab.normalRange").value;
      data["lab.testName"] = this.shadowRoot.querySelector("#lab.testName").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("lab-result-submission-processing-enter-test-results", LabResultSubmissionProcessingEnterTestResults);
export default LabResultSubmissionProcessingEnterTestResults;
