const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class StudyCloseoutCase extends BlazeCase {
  constructor() {
    super(
      "study-closeout",
      "Study Closeout",
      [
        {
          id: "Initiation",
          label: "Initiation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "study-closeout-initiation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "closeout-init",
              label: "Initiate closeout",
              type: "manual",
              status: "pending",
              view: "study-closeout-initiation-initiate-closeout",
              dataModelReference: { models: ["trial.id", "trial.endDate", "inv.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "study-closeout-initiation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Data_Reconciliation",
          label: "Data Reconciliation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "study-closeout-data-reconciliation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "closeout-reconcile",
              label: "Reconcile patient and consent records",
              type: "manual",
              status: "pending",
              view: "study-closeout-data-reconciliation-reconcile-patient-and-consent-records",
              dataModelReference: { models: ["patient.id", "consent.id", "consent.status"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "study-closeout-data-reconciliation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Site_Closeout",
          label: "Site Closeout",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "study-closeout-site-closeout-start",
              dataModelReference: { models: [] }
            },
            {
              id: "closeout-site",
              label: "Complete site closeout activities",
              type: "manual",
              status: "pending",
              view: "study-closeout-site-closeout-complete-site-closeout-activities",
              dataModelReference: { models: ["inv.site", "inv.id", "trial.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "study-closeout-site-closeout-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Archive",
          label: "Archive",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "study-closeout-archive-start",
              dataModelReference: { models: [] }
            },
            {
              id: "closeout-archive",
              label: "Archive trial records",
              type: "manual",
              status: "pending",
              view: "study-closeout-archive-archive-trial-records",
              dataModelReference: { models: ["trial.id", "trial.name", "trial.endDate"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "study-closeout-archive-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new StudyCloseoutCase();