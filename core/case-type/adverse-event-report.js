const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class AdverseEventReportCase extends BlazeCase {
  constructor() {
    super(
      "adverse-event-report",
      "Adverse Event Report",
      [
        {
          id: "Reported",
          label: "Reported",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "adverse-event-report-reported-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ae-report",
              label: "Initial AE report",
              type: "manual",
              status: "pending",
              view: "adverse-event-report-reported-initial-ae-report",
              dataModelReference: { models: ["ae.id", "ae.patientId", "ae.dateReported", "ae.description"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "adverse-event-report-reported-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Assessment",
          label: "Assessment",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "adverse-event-report-assessment-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ae-assess-severity",
              label: "Assess seriousness and causality",
              type: "manual",
              status: "pending",
              view: "adverse-event-report-assessment-assess-seriousness-and-causality",
              dataModelReference: { models: ["ae.severity", "ae.suspectedDrug", "inv.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "adverse-event-report-assessment-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Management",
          label: "Management",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "adverse-event-report-management-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ae-manage",
              label: "Document management & actions",
              type: "manual",
              status: "pending",
              view: "adverse-event-report-management-document-management-&-actions",
              dataModelReference: { models: ["ae.outcome", "ae.description", "ae.patientId"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "adverse-event-report-management-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Closure",
          label: "Closure",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "adverse-event-report-closure-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ae-close",
              label: "Close AE",
              type: "manual",
              status: "pending",
              view: "adverse-event-report-closure-close-ae",
              dataModelReference: { models: ["ae.id", "ae.outcome", "ae.dateReported"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "adverse-event-report-closure-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new AdverseEventReportCase();