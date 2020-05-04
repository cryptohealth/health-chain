const ipRegex = require("ip-regex");
import crypto from "crypto";
import makeAuth from "./Auth";



const is = {
  name: () => true,
  isValidIp: (ip:string) => {
    return ipRegex({ exact: true }).test(ip)
  }
}



const generateHash = (text: any) => {
  return crypto
    .createHash("md5")
    .update(text, "utf8")
    .digest("hex");
};

const Auth = makeAuth({
  md5: generateHash,
  is: is
});

export default Object.freeze({Auth})