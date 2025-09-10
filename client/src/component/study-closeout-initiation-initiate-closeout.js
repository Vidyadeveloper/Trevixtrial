
            class StudyCloseoutInitiationInitiateCloseout extends HTMLElement {
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
        <h2>Initiate closeout</h2>
        <form id="form">
          
            <label for="trial.id">Trial ID</label>
            <input type="text" id="trial.id" name="trial.id" value="${this._formData["trial.id"] || ""}" />
          
            <label for="trial.endDate">End Date</label>
            <input type="text" id="trial.endDate" name="trial.endDate" value="${this._formData["trial.endDate"] || ""}" />
          
            <label for="inv.id">Investigator ID</label>
            <input type="text" id="inv.id" name="inv.id" value="${this._formData["inv.id"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["trial.id"] = this.shadowRoot.querySelector("#trial.id").value;
      data["trial.endDate"] = this.shadowRoot.querySelector("#trial.endDate").value;
      data["inv.id"] = this.shadowRoot.querySelector("#inv.id").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("study-closeout-initiation-initiate-closeout", StudyCloseoutInitiationInitiateCloseout);
export default StudyCloseoutInitiationInitiateCloseout;
