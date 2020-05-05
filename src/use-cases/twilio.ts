import config from '../config'
const client = require('twilio')(config.twilio.accountSid, config.twilio.authToken);
const cryptoHealthPhone = '+15017122661'

const newMessage = async (msg:string, to:string) => {
    const message = await client.messages.create({
        body: msg,
        from: cryptoHealthPhone,
        to
    })
    return message
}
const ResourceMessage = (displayName:string, resourceName:string):string => {
    return `
        Acabou de ser adicionado um ${resourceName} ao seu histório, ${displayName}.
    `
}

export default {
    newMessage: (patient:any, resource:any) => {
        const msg = ResourceMessage(patient.name.given, resource.type)
        newMessage(msg, '+15558675310')
    }
}