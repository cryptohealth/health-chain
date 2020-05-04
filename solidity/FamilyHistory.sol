pragma solidity >=0.4.17;
import {Utils as u} from './interfaces/Utils.sol';

contract FamiliyHistory {


    struct Annotation {
        string authorReference;
        string AuthorString;
        string time;
        string text;
        u.quantity quantity;
    }

    

    struct Reaction {
        string subtance;
        string manifestation;
        string description;
        string severity;
        string exposureRoute;
        Annotation[] note;
    }

    struct familiyHistory {
        string status;
        string dataAbsentReason;
        string date;
        string name;
        string relationship;
        string bornPeriod;
        string bornDate;
        string bornString;
        Reaction[] reaction;
    }

    function get() public pure returns (uint) {
        return 4;
    }


}   