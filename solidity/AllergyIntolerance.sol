pragma solidity >=0.4.17;

contract AllergyIntolerance {

    struct Annotation {
        string authorReference;
        string AuthorString;
        string time;
        string text;
    }

    struct Reaction {
        string subtance;
        string manifestation;
        string description;
        string severity;
        string exposureRoute;
        Annotation[] note;
    }

    struct Allergy {
        string allergyType;
        string category;
        string critically;
        string code;
        string recorder;
        string lastOcurrence;
        string note;
        Reaction[] reaction;
    }

    function get() public pure returns (uint) {
        return 4;
    }


}   