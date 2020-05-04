pragma solidity >=0.4.17;
import {Utils as u} from './interfaces/Utils.sol';

contract PatientContract {
    struct Name {
        string use;
        string given;
        string family;
        string prefix;
    }


    struct Contact {
        string relationship;
        string name;
        u.Telecom[] telecom;
        u.Address[] addresses;
        string gender;
        string organization;
        string period;
    }

    struct Patient {
        string active;
        Name[] name;
        u.Telecom[] telecom;
        string gender;
        string birthDate;
        u.Address[] addresses;
        string matiralStatus;
        string photo;
        Contact[] contacts;
        string languague;
        string preferred;
    }

    u.Address[] private addresses;
    Name[] private names;
    u.Telecom[] private telecoms;
    Contact[] private contacts;
    Patient[] private patients;

    string public testing = 'a';


    function createName(
        string memory _use,
        string memory _give,
        string memory _family,
        string memory _prefix
        ) private {
            Name memory _name = Name(_use,_give,_family,_prefix);
            names.push(_name);
        }




    function createTelecom(
        string memory _system,
        string memory _use,
        string memory _value
        ) private {
            u.Telecom memory _telecom = u.Telecom(_system, _use, _value);
            telecoms.push(_telecom);
        }

    function createContact(
        string memory _relationship,
        string memory _name,
        u.Telecom[] memory _telecom,
        u.Address[] memory _address,
        string memory _gender,
        string memory _organization,
        string memory _period
        ) private {
            Contact memory _contact = Contact(
                _relationship,
                _name,
                _telecom,
                _address,
                _gender,
                _organization,
                _period);
            contacts.push(_contact);
        }

    function CreatePatient(
        string memory _active,
        Name[] memory _name,
        u.Telecom[] memory telecom,
        string memory _gender,
        string memory _birthDate,
        u.Address[] memory _address,
        string memory _matiralStatus,
        string memory _photo,
        Contact[] memory _contact,
        string memory _language,
        string memory _preferred
         ) private {
            Patient memory _patient = Patient(
                _active,
                _name,
                telecom,
                _gender,
                _birthDate,
                _address,
                _matiralStatus,
                _photo,
                _contact,
                _language,
                _preferred);
            patients.push(_patient);
        }








}




