pragma solidity >=0.4.17;
import {Utils as u} from './Utils.sol';

library Utils {

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
        u.Period period;
    }

    function createAddress (
        string memory _use,
        string memory _addressType,
        string memory _text,
        string memory _line,
        string memory _district,
        string memory _state,
        string memory _country,
        string memory _postalCode,
        string memory _city,
        u.Period memory _period
        ) private pure
        returns(u.Address memory) {
            u.Address memory _address = u.Address(
            _use,
            _addressType,
            _text,
            _line,
            _district,
            _state,
            _country,
            _postalCode,
            _city,
            _period
            );
            return _address;
        }


}