// Data Model: labResult
module.exports = {
  "id": "labResult",
  "label": "Lab Result",
  "description": "Laboratory test results captured for visits or events.",
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
      "id": "lab.id",
      "label": "Lab Result ID",
      "type": "text",
      "description": "Unique identifier for the laboratory result.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "lab.patientId",
      "label": "Patient ID (Lab)",
      "type": "text",
      "description": "Reference to the patient for this lab result.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "lab.dateCollected",
      "label": "Date Collected",
      "type": "date",
      "description": "Date the specimen was collected.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "lab.testName",
      "label": "Test Name",
      "type": "text",
      "description": "Name of the laboratory test performed.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "lab.value",
      "label": "Result Value",
      "type": "number",
      "description": "Numeric value of the lab test result where applicable.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "lab.units",
      "label": "Units",
      "type": "text",
      "description": "Units associated with the result value.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "lab.normalRange",
      "label": "Normal Range",
      "type": "text",
      "description": "Reference normal range for interpretation.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};