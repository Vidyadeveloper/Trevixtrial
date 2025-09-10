const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class LabResultSubmissionCase extends BlazeCase {
  constructor() {
    super(
      "lab-result-submission",
      "Lab Result Submission",
      [
        {
          id: "Collection",
          label: "Collection",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "lab-result-submission-collection-start",
              dataModelReference: { models: [] }
            },
            {
              id: "lab-collect",
              label: "Record specimen collection",
              type: "manual",
              status: "pending",
              view: "lab-result-submission-collection-record-specimen-collection",
              dataModelReference: { models: ["lab.id", "lab.patientId", "lab.dateCollected", "lab.testName"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "lab-result-submission-collection-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Processing",
          label: "Processing",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "lab-result-submission-processing-start",
              dataModelReference: { models: [] }
            },
            {
              id: "lab-process",
              label: "Enter test results",
              type: "manual",
              status: "pending",
              view: "lab-result-submission-processing-enter-test-results",
              dataModelReference: { models: ["lab.value", "lab.units", "lab.normalRange", "lab.testName"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "lab-result-submission-processing-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Review",
          label: "Review",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "lab-result-submission-review-start",
              dataModelReference: { models: [] }
            },
            {
              id: "lab-review",
              label: "Clinical review of results",
              type: "manual",
              status: "pending",
              view: "lab-result-submission-review-clinical-review-of-results",
              dataModelReference: { models: ["lab.id", "lab.patientId", "inv.id", "lab.normalRange"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "lab-result-submission-review-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Reporting",
          label: "Reporting",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "lab-result-submission-reporting-start",
              dataModelReference: { models: [] }
            },
            {
              id: "lab-report",
              label: "Publish result to patient record",
              type: "manual",
              status: "pending",
              view: "lab-result-submission-reporting-publish-result-to-patient-record",
              dataModelReference: { models: ["lab.id", "lab.patientId", "visit.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "lab-result-submission-reporting-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new LabResultSubmissionCase();