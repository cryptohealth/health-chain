import mongoose from 'mongoose'
import ICustomer from '../interfaces/user.type'
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id:  {
        type: String,
        required: true,
        max: [12]
      },
    externalId:  String,
    provider:  String,
    email:  {
        type: String,
        // There are two ways for an promise-based async validator to fail:
        // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
        // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
        validate: {
          validator: () => Promise.resolve(false),
          message: 'Email validation failed'
        }
      },
    password:  String,
    name:  String,
    locale: String,
    languague:   String,
    source: [{ body: String, date: Date }]
});

export default mongoose.model<ICustomer>('Customer', UserSchema);