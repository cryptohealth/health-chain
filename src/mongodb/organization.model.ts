import mongoose from 'mongoose'
import IStore from '../interfaces/user.type'
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
    id:  {
        type: String,
        required: true,
        max: [12]
    },
    apiKeys: String,
    transactionId: String,
    clusterId:  String,
    storeId: String,
    activatedDate: String,
    desactivatedDate: String,
    accountType: String, 
});

export default mongoose.model<IStore>('Store', OrganizationSchema);