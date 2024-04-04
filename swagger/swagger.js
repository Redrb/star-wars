// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "reto-indra",
    "version": "1"
  },
  "paths": {
    "/": {
      "get": {
        "summary": "api",
        "description": "",
        "operationId": "api.get./",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/vehicles": {
      "post": {
        "summary": "createVehicle",
        "description": "",
        "operationId": "createVehicle.post./vehicles",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/helloPostBody"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "get": {
        "summary": "getVehicles",
        "description": "",
        "operationId": "getVehicles.get./vehicles",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/source-vehicles": {
      "get": {
        "summary": "getSourceVehicles",
        "description": "",
        "operationId": "getSourceVehicles.get./source-vehicles",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/vehicles/{id}": {
      "delete": {
        "summary": "deleteVehicleById",
        "description": "",
        "operationId": "deleteVehicleById.delete./vehicles/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "put": {
        "summary": "updateVehicleById",
        "description": "",
        "operationId": "updateVehicleById.put./vehicles/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {}
};