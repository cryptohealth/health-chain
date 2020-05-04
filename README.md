![](https://avatars1.githubusercontent.com/u/64392648?s=200&v=4)
### Features

- REST SmartContract FHIR API
- Fhir resources available: **Clinical**  , ~~**Diagnosis**~~, ~~**Medication**~~, , ~~**Workflow**~~, ~~**Financial**~~
- Organization Tokens
- User Tokens

Official Fhir: [FHIR](https://www.hl7.org/fhir/index.html)
Official CryptoHealth: [CryptoHealth](https://www.hl7.org/fhir/index.html)

# Get Started

> Our Base Url End-Point: https://api.cryptohealth/

[TOC]

## Patient:
### History

| TYPE  | URL | DESCRIPTION 
| ------------- | ------------- | ------------- |
| GET | /patient  |  get the patient history


### Create


TYPE: POST
URL '/patient'
DESCRIPTION: 'Create new Patient'

### Update
TYPE: PUT
URL '/patient'
DESCRIPTION: 'Create new Patient'

### insertAddress
TYPE: POST
URL '/patient/address'
DESCRIPTION: 'Create new Patient'

### insertContact
TYPE: POST
URL '/patient/contact'
DESCRIPTION: 'Create new Patient'

### insertTelecom
TYPE: POST
URL '/patient/telecom'
DESCRIPTION: 'Create new Patient'

## AllergyIntolerance
### create
TYPE: POST
URL '/allergy'
DESCRIPTION: 'Create new Patient'

### update
TYPE: POST
URL '/allergy'
DESCRIPTION: 'Create new Patient'

### insertNote
TYPE: POST
URL '/allergy/note'
DESCRIPTION: 'Create new Patient'

### insertReaction
TYPE: POST
URL '/allergy/reaction'
DESCRIPTION: 'Create new Patient'


## FamilyHistory








