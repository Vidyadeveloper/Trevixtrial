const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class NewTrialEnrollmentCase extends BlazeCase {
  constructor() {
    super(
      "new-trial-enrollment",
      "New Trial Enrollment",
      [
        {
          id: "Intake",
          label: "Intake",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-trial-enrollment-intake-start",
              dataModelReference: { models: [] }
            },
            {
              id: "intake-patient-details",
              label: "Capture patient demographics",
              type: "manual",
              status: "pending",
              view: "new-trial-enrollment-intake-capture-patient-demographics",
              dataModelReference: { models: ["patient.firstName", "patient.lastName", "patient.dob", "patient.email", "patient.phone", "patient.gender"] }
            },
            {
              id: "intake-trial-selection",
              label: "Select trial and site",
              type: "manual",
              status: "pending",
              view: "new-trial-enrollment-intake-select-trial-and-site",
              dataModelReference: { models: ["trial.id", "trial.name", "inv.id", "inv.site"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-trial-enrollment-intake-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Consent",
          label: "Consent",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-trial-enrollment-consent-start",
              dataModelReference: { models: [] }
            },
            {
              id: "consent-review",
              label: "Review and sign consent",
              type: "manual",
              status: "pending",
              view: "new-trial-enrollment-consent-review-and-sign-consent",
              dataModelReference: { models: ["consent.patientId", "consent.dateSigned", "consent.version", "consent.status"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-trial-enrollment-consent-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Randomization",
          label: "Randomization",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-trial-enrollment-randomization-start",
              dataModelReference: { models: [] }
            },
            {
              id: "randomization-assign-arm",
              label: "Assign treatment arm",
              type: "manual",
              status: "pending",
              view: "new-trial-enrollment-randomization-assign-treatment-arm",
              dataModelReference: { models: ["trial.id", "trial.phase", "patient.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-trial-enrollment-randomization-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Enrollment_Complete",
          label: "Enrollment Complete",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-trial-enrollment-enrollment-complete-start",
              dataModelReference: { models: [] }
            },
            {
              id: "enrollment-confirm",
              label: "Confirm enrollment",
              type: "manual",
              status: "pending",
              view: "new-trial-enrollment-enrollment-complete-confirm-enrollment",
              dataModelReference: { models: ["patient.id", "consent.id", "trial.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-trial-enrollment-enrollment-complete-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new NewTrialEnrollmentCase();