// Data Model: adverseEvent
module.exports = {
  "id": "adverseEvent",
  "label": "Adverse Event",
  "description": "Reports of adverse events or reactions during the trial.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "ae.id",
      "label": "AE ID",
      "type": "text",
      "description": "Unique adverse event record identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "ae.patientId",
      "label": "Patient ID (AE)",
      "type": "text",
      "description": "Reference to the affected patient.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "ae.dateReported",
      "label": "Date Reported",
      "type": "date",
      "description": "Date the adverse event was reported.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "ae.severity",
      "label": "Severity",
      "type": "text",
      "description": "Severity classification (mild, moderate, severe).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "ae.description",
      "label": "Description",
      "type": "text",
      "description": "Detailed description of the adverse event.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "ae.suspectedDrug",
      "label": "Suspected Drug",
      "type": "text",
      "description": "Drug or intervention suspected to cause the event.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "ae.outcome",
      "label": "Outcome",
      "type": "text",
      "description": "Outcome of the adverse event (resolved, ongoing).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};