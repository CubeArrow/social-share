const crypto = require("crypto")
const User = require("../modules/user")

const randSid = function(){
    return crypto.randomBytes(32).toString("base64")
}

const uniqueSid = function(){
    let sid
    while (true) {
        sid = randSid()
        if(User.find({sid: sid})) break
    }
    return sid
}

const saveSidToUser = function(user, sid){
    user.sid = sid
    user.save()
}

module.exports = {uniqueSid, saveSidToUser}