![](https://avatars1.githubusercontent.com/u/64392648?s=200&v=4)
### Features

- REST SmartContract FHIR API
- Fhir resources available: **Clinical**  , ~~**Diagnosis**~~, ~~**Medication**~~, ~~**Workflow**~~, ~~**Financial**~~
- Organization Tokens
- User Tokens

Official Fhir: [FHIR](https://www.hl7.org/fhir/index.html)
Official CryptoHealth: [CryptoHealth](https://cryptohealth.surge.sh/)

# Get Started

> Our Base Url End-Point: https://api.cryptohealth/

## User:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | /user/oauth/google  | Authenticates patient with Google credentials |
| POST | /user/oauth/local | Authenticates patient with CryptoHealth credentials |
| GET | /user | Gets user info |
| PUT | /user | Creates a user |
| DELETE | /user | Deletes a user |

## Organization:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | /organization | Authenticates organization with Google credentials |
| GET | /organization | Gets the organization info |
| PUT | /organization | Creates a organization |
| DELETE | /organization | Deletes a organization |

## Patient:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | /patient | Creates new patient |
| GET | /patient  | Gets a patient info |
| PUT | /patient | Updates a patient |
| POST | /patient/address | Creates new address for a patient |
| POST | /patient/contact | Creates new contact for a patient |
| POST | /patient/telecom | Creates a new telecom for a patient |

## Allergies:
| TYPE  | URL | DESCRIPTION |
| - | - | - |
| GET | /allergy  | Gets a patient allergy info |
| POST | /allergy | Creates a new allergy for a patient |
| PUT | /allergy | Updates a patient allergy |
| POST | /allergy/note | Creates a new patient allergy note |
| POST | /allergy/reaction | Creates a new patient allergy reaction |
