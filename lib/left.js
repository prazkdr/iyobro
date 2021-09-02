const fs = require('fs-extra')

module.exports = left = async (praz, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && isLeft) {
            const gChat = await praz.getChatById(event.chat)
            const pChat = await praz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            //const pepe = await praz.getProfilePicFromServer(event.who)
            const capt = `Sayonaraaa @${event.who.replace('@c.us', '')} Sampai jumpa, btw nitip Seblak sama Gorengan yaa 👋`
            if (pepe == '' || pepe == undefined) {
                //await tobz.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                //await tobz.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                praz.sendTextWithMentions(event.chat, capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
