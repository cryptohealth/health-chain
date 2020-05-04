pragma solidity >=0.4.17;

library Utils {
    struct HumanName {
        string use;
        string text;
        string family;
        string given;
        string prefix;
        string suffix;
        string period;
    }

    struct Address {
        string use;
        string addressType;
        string text;
        string line;
        string city;
        string district;
        string state;
        string country;
        string postalCode;
        Period period;
    }

    struct Period {
        string start;
        string end;
    }

    struct Telecom {
        string system;
        string use;
        string value;
    }

    struct Identifier {
        string use;
        string IdentifierType;
        string system;
        string value;
        Period period;
        Organization organization;
    }

    struct Organization {
        string identifier;
        string active;
        string organizationType;
        string name;
        string aliasNames;
        ContactPoint telecom;
    }

    struct ContactPoint {
        string system;
        string value;
        string use;
        string rank;
        Period period;
    }

    struct quantity {
        string value;
        string comparator;
        string unit;
    }

    struct range {
        quantity low;
        quantity high;
    }

    struct ratio {
        quantity numerator;
        quantity denominator;
    }


}

