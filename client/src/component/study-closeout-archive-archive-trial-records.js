
            class StudyCloseoutArchiveArchiveTrialRecords extends HTMLElement {
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
        <h2>Archive trial records</h2>
        <form id="form">
          
            <label for="trial.id">Trial ID</label>
            <input type="text" id="trial.id" name="trial.id" value="${this._formData["trial.id"] || ""}" />
          
            <label for="trial.name">Trial Name</label>
            <input type="text" id="trial.name" name="trial.name" value="${this._formData["trial.name"] || ""}" />
          
            <label for="trial.endDate">End Date</label>
            <input type="text" id="trial.endDate" name="trial.endDate" value="${this._formData["trial.endDate"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["trial.id"] = this.shadowRoot.querySelector("#trial.id").value;
      data["trial.name"] = this.shadowRoot.querySelector("#trial.name").value;
      data["trial.endDate"] = this.shadowRoot.querySelector("#trial.endDate").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("study-closeout-archive-archive-trial-records", StudyCloseoutArchiveArchiveTrialRecords);
export default StudyCloseoutArchiveArchiveTrialRecords;
