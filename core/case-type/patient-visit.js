const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class PatientVisitCase extends BlazeCase {
  constructor() {
    super(
      "patient-visit",
      "Patient Visit",
      [
        {
          id: "Scheduled",
          label: "Scheduled",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "patient-visit-scheduled-start",
              dataModelReference: { models: [] }
            },
            {
              id: "visit-schedule",
              label: "Schedule visit",
              type: "manual",
              status: "pending",
              view: "patient-visit-scheduled-schedule-visit",
              dataModelReference: { models: ["visit.id", "visit.patientId", "visit.date", "visit.visitType"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "patient-visit-scheduled-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Check-in",
          label: "Check-in",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "patient-visit-check-in-start",
              dataModelReference: { models: [] }
            },
            {
              id: "visit-checkin",
              label: "Patient check-in and confirmation",
              type: "manual",
              status: "pending",
              view: "patient-visit-check-in-patient-check-in-and-confirmation",
              dataModelReference: { models: ["patient.id", "patient.firstName", "patient.lastName", "visit.date"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "patient-visit-check-in-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Clinical_Assessment",
          label: "Clinical Assessment",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "patient-visit-clinical-assessment-start",
              dataModelReference: { models: [] }
            },
            {
              id: "visit-assessment",
              label: "Record clinical assessment & vitals",
              type: "manual",
              status: "pending",
              view: "patient-visit-clinical-assessment-record-clinical-assessment-&-vitals",
              dataModelReference: { models: ["visit.clinicalNotes", "visit.vitals", "inv.id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "patient-visit-clinical-assessment-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Sample_Collection",
          label: "Sample Collection",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "patient-visit-sample-collection-start",
              dataModelReference: { models: [] }
            },
            {
              id: "visit-collect-sample",
              label: "Collect specimen and create lab request",
              type: "manual",
              status: "pending",
              view: "patient-visit-sample-collection-collect-specimen-and-create-lab-request",
              dataModelReference: { models: ["lab.id", "lab.patientId", "lab.dateCollected", "lab.testName"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "patient-visit-sample-collection-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Complete",
          label: "Complete",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "patient-visit-complete-start",
              dataModelReference: { models: [] }
            },
            {
              id: "visit-complete",
              label: "Finalize visit",
              type: "manual",
              status: "pending",
              view: "patient-visit-complete-finalize-visit",
              dataModelReference: { models: ["visit.id", "visit.patientId", "visit.date"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "patient-visit-complete-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new PatientVisitCase();