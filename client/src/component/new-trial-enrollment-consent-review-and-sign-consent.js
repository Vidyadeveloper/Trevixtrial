
            class NewTrialEnrollmentConsentReviewAndSignConsent extends HTMLElement {
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
        <h2>Review and sign consent</h2>
        <form id="form">
          
            <label for="consent.patientId">Patient ID (Consent)</label>
            <input type="text" id="consent.patientId" name="consent.patientId" value="${this._formData["consent.patientId"] || ""}" />
          
            <label for="consent.dateSigned">Date Signed</label>
            <input type="text" id="consent.dateSigned" name="consent.dateSigned" value="${this._formData["consent.dateSigned"] || ""}" />
          
            <label for="consent.version">Consent Version</label>
            <input type="text" id="consent.version" name="consent.version" value="${this._formData["consent.version"] || ""}" />
          
            <label for="consent.status">Consent Status</label>
            <input type="text" id="consent.status" name="consent.status" value="${this._formData["consent.status"] || ""}" />
          
          <button type="submit">Save</button>
        </form>
      </div>
    `;

    this.shadowRoot.querySelector("form").onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      data["consent.patientId"] = this.shadowRoot.querySelector("#consent.patientId").value;
      data["consent.dateSigned"] = this.shadowRoot.querySelector("#consent.dateSigned").value;
      data["consent.version"] = this.shadowRoot.querySelector("#consent.version").value;
      data["consent.status"] = this.shadowRoot.querySelector("#consent.status").value;
      this._formData = data;
      this.dispatchEvent(new CustomEvent("formSubmitted", { detail: data }));
    };
  }
}

customElements.define("new-trial-enrollment-consent-review-and-sign-consent", NewTrialEnrollmentConsentReviewAndSignConsent);
export default NewTrialEnrollmentConsentReviewAndSignConsent;
