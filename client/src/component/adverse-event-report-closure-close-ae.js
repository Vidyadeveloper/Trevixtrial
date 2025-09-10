
            class AdverseEventReportClosureCloseAe extends HTMLElement {
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
        <h2>Close AE</h2>
        <form id="form">
          
            <label for="ae.id">AE ID</label>
            <input type="text" id="ae.id" name="ae.id" value="${this._formData["ae.id"] || ""}" />
          
            <label for="ae.outcome">Outcome</label>
            <input type="text" id="ae.outcome" name="ae.outcome" value="${this._formData["ae.outcome"] || ""}" />
          
            <label for="ae.dateReported">Date Reported</label>
            <input type="text" id="ae.dateReported" name="ae.dateReported" value="${this._formData["ae.dateReported"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["ae.id"] = this.shadowRoot.querySelector("#ae.id").value;
      data["ae.outcome"] = this.shadowRoot.querySelector("#ae.outcome").value;
      data["ae.dateReported"] = this.shadowRoot.querySelector("#ae.dateReported").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("adverse-event-report-closure-close-ae", AdverseEventReportClosureCloseAe);
export default AdverseEventReportClosureCloseAe;
