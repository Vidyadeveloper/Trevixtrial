
            class NewTrialEnrollmentIntakeSelectTrialAndSite extends HTMLElement {
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
        <h2>Select trial and site</h2>
        <form id="form">
          
            <label for="trial.id">Trial ID</label>
            <input type="text" id="trial.id" name="trial.id" value="${this._formData["trial.id"] || ""}" />
          
            <label for="trial.name">Trial Name</label>
            <input type="text" id="trial.name" name="trial.name" value="${this._formData["trial.name"] || ""}" />
          
            <label for="inv.id">Investigator ID</label>
            <input type="text" id="inv.id" name="inv.id" value="${this._formData["inv.id"] || ""}" />
          
            <label for="inv.site">Site</label>
            <input type="text" id="inv.site" name="inv.site" value="${this._formData["inv.site"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["trial.id"] = this.shadowRoot.querySelector("#trial.id").value;
      data["trial.name"] = this.shadowRoot.querySelector("#trial.name").value;
      data["inv.id"] = this.shadowRoot.querySelector("#inv.id").value;
      data["inv.site"] = this.shadowRoot.querySelector("#inv.site").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("new-trial-enrollment-intake-select-trial-and-site", NewTrialEnrollmentIntakeSelectTrialAndSite);
export default NewTrialEnrollmentIntakeSelectTrialAndSite;
