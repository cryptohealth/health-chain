<style>
.body{

}
.alert-warning {
  color: rgb(0,200,0);
}
.request-block{
    height: '200px';
    width: '400px';
    display: 'flex';
    flexDirection: 'column';
    border: '1px black solid';
}
</style>

# Routes

BaseUrl: https://api.cryptohealth/

## Patient Routes:
### getPatientBucket

<div class="request-block">
TYPE: <i class="alert-warning"> GET </i> 
URL '/patient'
DESCRIPTION: 'Create new Patient'
</div>


### createPatient
TYPE: POST
URL '/patient'
DESCRIPTION: 'Create new Patient'

### updatePatient
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
### createAllergyIntolerance
TYPE: POST
URL '/allergy'
DESCRIPTION: 'Create new Patient'

### updateAllergyIntolerance
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
