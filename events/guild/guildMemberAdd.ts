const profileModel = require('../../models/profilesSchema');

module.exports = async(client, discord, member) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        username: member.getUsername(),
        money: 1000,
    });
    profile.save();
};