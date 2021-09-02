const { create, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
const left = require('./lib/left')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
// const msgHndlr = require ('./praz')
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const options = require('./options')

// AUTO UPDATE BY NURUTOMO
// THX FOR NURUTOMO
// Cache handler and check for file change
require('./praz.js')
nocache('./praz.js', module => console.log(`'${module}' Updated!`))
require('./lib/help.js')
nocache('./lib/help.js', module => console.log(`'${module}' Updated!`))
require('./lib/database/setting.json')
nocache('./lib/database/setting.json', module => console.log(`'${module}' Updated!`))

const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    restartState: isRestart
    } = setting

function restartAwal(praz){
    setting.restartState = false
    isRestart = false
    praz.sendText(setting.restartId, 'Restart Succesfull!')
    setting.restartId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (praz = new Client()) => {
        console.log('------------------------------------------------')
        lolcatjs.fromString(color(figlet.textSync('MARTIN BOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        lolcatjs.fromString('[DEV] PRAZ')
        lolcatjs.fromString('[SERVER] Server Started!')
        praz.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        praz.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') praz.forceRefocus()
        })
        // listening on message
        praz.onMessage((async (message) => {

        praz.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    praz.cutMsgCache()
                }
            })
        // msgHndlr(praz, message)
        // Message Handler (Loaded from recent cache)
        require('./praz.js')(praz, message)
    }))
           

        praz.onGlobalParticipantsChanged((async (heuh) => {
            await welcome(praz, heuh) 
            left(praz, heuh)
            }))
        
        praz.onAddedToGroup(async (chat) => {
            if(isWhite(chat.id)) return praz.sendText(chat.id, 'Halo aku Martin Bot, Ketik #menu Untuk Melihat List Command Ku...')
            if(mtcState === false){
                const groups = await praz.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                    await praz.sendText(chat.id, 'Maaf, Batas group yang dapat Bot tampung sudah penuh').then(async () =>{
                        praz.deleteChat(chat.id)
                        praz.leaveGroup(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await praz.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async () =>{
                            praz.deleteChat(chat.id)
                            praz.leaveGroup(chat.id)
                        })
                    }else{
                        if(!chat.isReadOnly) praz.sendText(chat.id, 'Halo aku Martin Bot, Ketik #menu Untuk Melihat List Command Ku...')
                    }
                }
            }else{
                await praz.sendText(chat.id, 'Whangsaff Bot sedang maintenance, coba lain hari').then(async () => {
                    praz.deleteChat(chat.id)
                    praz.leaveGroup(chat.id)
                })
            }
        })


        /*praz.onAck((x => {
            const { from, to, ack } = x
            if (x !== 3) praz.sendSeen(to)
        }))*/

        // listening on Incoming Call
        praz.onIncomingCall(( async (call) => {
            await praz.sendText(call.peerJid, 'Maaf, Bot tidak bisa menerima Panggilan atau Video Call.\nJika kamu melakukanya akan di Block otomatis oleh Bot.\n\n Dan kalau ingin membuka block harap chat Pemilik Bot!')
            .then(() => praz.contactBlock(call.peerJid))
        }))
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

create(options(true, start))
    .then(praz => start(praz))
    .catch((error) => console.log(error))
