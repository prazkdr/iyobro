require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const get = require('got')
const speed = require('performance-now')
const fetch = require('node-fetch')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const translatte = require('translatte')
const { stdout } = require('process')
const translate = require('translatte')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const request = require('request')
//---------< Search Judul lagu module > -----------------//
//Cara mendapatkan access key dan secret gimana? 
//Buat akun di https://www.acrcloud.com/
//Bingung? Chat : 081220439155
//-------------------------------------------------------//
//const acrcloud = require("acrcloud")
//const acr = new acrcloud({ host: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiMmNhZWM0NjE1ZWU2NWRjZDRjNzJiY2VmYTYyOWUyODkxZGM2ZmVkODdhNWRkZmEzNjVlM2UyOTMxYjM2YWFlMzFjMTc3MTUxYjU1NzJiZjEiLCJpYXQiOjE2MTg4NTAzNDYuNDkzNTM4LCJuYmYiOjE2MTg4NTAzNDYuNDkzNTQyLCJleHAiOjE5MzQzODMxNDYuNDQ5NDQyLCJzdWIiOiIxMTU3NTQiLCJzY29wZXMiOlsiKiIsIndyaXRlLWFsbCIsInJlYWQtYWxsIiwiYnVja2V0cyIsIndyaXRlLWJ1Y2tldHMiLCJyZWFkLWJ1Y2tldHMiLCJhdWRpb3MiLCJ3cml0ZS1hdWRpb3MiLCJyZWFkLWF1ZGlvcyIsImNoYW5uZWxzIiwid3JpdGUtY2hhbm5lbHMiLCJyZWFkLWNoYW5uZWxzIiwiYmFzZS1wcm9qZWN0cyIsIndyaXRlLWJhc2UtcHJvamVjdHMiLCJyZWFkLWJhc2UtcHJvamVjdHMiLCJ1Y2YiLCJ3cml0ZS11Y2YiLCJyZWFkLXVjZiIsImRlbGV0ZS11Y2YiLCJibS1wcm9qZWN0cyIsImJtLWNzLXByb2plY3RzIiwid3JpdGUtYm0tY3MtcHJvamVjdHMiLCJyZWFkLWJtLWNzLXByb2plY3RzIiwiYm0tYmQtcHJvamVjdHMiLCJ3cml0ZS1ibS1iZC1wcm9qZWN0cyIsInJlYWQtYm0tYmQtcHJvamVjdHMiXX0.JbmZ3artB-IhM-UHg9godQIHiXiepSXO9JHJdIA4LhhZVtX9Cs8pwiT_toX51QEeItflaGfsT1WejPQAzyMBvcuTb6qbtkZqCv2QY2vkhav7fHaj4ZX3Gu-3LXnfHXDfj6D7f5JjdVf3FTWlIg45FM86YqAMZzYqn8rl4USx2D6rczMneNNJkqA4p8y0QuVBkLIC6WIiHIleBQjVSn1jieZss1ImyHZ-IcWxKRtu3IrtU3Bcxlqr7_WGGfW9CVLAwUR_LeJBV6tpKpWcGp_L9E6a__Cjy56ZjHi64BIOYVGNCq7WhtMVfx8dCGI3ZzMNxVTJjiQkhF_0_y-hUYFCYYKB6yTyqKpaLG2LpfA4u43prg3koLWdlOnbHm416edwRSvSQ_3IL3GpLBzjRlXpaoAszwnC6Hm7E8UzGT31atLmqsf9di9w5p3lH5a2yNVJO1xXYBl-f15JzTprUtZxW69b2kh7zYKwEp2luRtXhK1b7nrMn6IlYA_yJlUa8YpN0sXnvQqUT4M4LOvLc7gOW7zbyfgQdPbRbuhi_RvleZDOvBD_DnIe1i4BKSqY-UPINnnZ145TPZnLvG0ZaRNcncfLJDFHjyZV9EUnoSqxfBB7DB-oVF2sXr5KSbF5jO-zal48rVA4_lnZX4FmBHInVucD0cVN30DdGilm4fJ8VZI", access_key: "QH1jL7x4zBQjBVws", access_secret: "8IJrikS8Fyk50wQCWLGgcCPUz7ZCfx1f"}) 
//---------< Search Judul lagu module > -----------------//

const ImagesToPDF = require('images-pdf')
const imgdl = require('image-downloader')

const { getStickerMaker } = require('./lib/ttp')
const quotedd = require('./lib/quote')
const color = require('./lib/color')
const urlShortener = require('./lib/shortener')
const { addFilter, isFiltered } = require('./lib/msgFilter')
const cariKasar = require('./lib/kataKotor')
const truth = require('./lib/truth')
const dare = require('./lib/dare')
const _afk = JSON.parse(fs.readFileSync('./lib/afk.json'))

const { 
    downloader,
    liriklagu,
    quotemaker,
    randomNimek,
    sleep,
    jadwalTv,
    processTime,
    nulis
    } = require('./lib/functions')

const { 
    help,
    admincmd,
    ownercmd,
    nsfwcmd,
    kerangcmd,
    mediacmd,
    animecmd,
    othercmd,
    downloadcmd,
    praycmd,
    groupcmd,
    funcmd,
    bahasalist,
    sewa,
    snk, 
    info, 
    sumbang, 
    readme, 
    listChannel,
    commandArray
    } = require('./lib/help')

const {
    instagram,
    tiktok,
    facebook,
    smule,
    starmaker,
    twitter,
    joox
    } = require('./lib/downloader')

const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')
    
const { 
    
meme
         } = require('./lib')
const { 
    uploadImages, 
    custom,
    picturemis
    } = require('./lib/fetcher')
const { isObject } = require('util')
const { promises } = require('fs-extra')
const { string, to } = require('mathjs')



// LOAD FILE
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
let simi_ = JSON.parse(fs.readFileSync('./lib/database/Simsimi.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'))
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))

// PROTECT
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
let antisticker = JSON.parse(fs.readFileSync('./lib/database/antisticker.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/database/msgBadword.json'))
let dbbadword = JSON.parse(fs.readFileSync('./lib/database/katakasar.json'))
let badword = JSON.parse(fs.readFileSync('./lib/database/badword.json'))
let pendaftar = JSON.parse(fs.readFileSync('./lib/database/user.json'))
let stickerspam = JSON.parse(fs.readFileSync('./lib/database/stickerspam.json'))



let { 
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    prazkey,
    vinz,
    xteam,
    lol,
    restartState: isRestart,
    mtc: mtcState
    } = setting


prefix = '#'
var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = praz = async (praz, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const argx = commands.toLowerCase()
        const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''

        global.prefix
        
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await praz.getHostNumber()
        const blockNumber = await praz.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const query = args.join(' ')
        const groupAdmins = isGroupMsg ? await praz.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000000000000000")
        

        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''
        

        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        const isQuotedGif = quotedMsg && quotedMsg.type === 'image/gif'

        const isBadword = badword.includes(chatId)
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.substring(body.indexOf(' ') + 1)
        const isKasar = await cariKasar(chats)
        const GroupLinkDetector = antilink.includes(chatId)
        const AntiStickerSpam = antisticker.includes(chatId)
        const isPrivate = sender.id === chat.contact.id
        const stickermsg = message.type === 'sticker'
        const isCmd = command.startsWith(prefix)
        
        const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)
        //const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')

        const serial = sender.id
        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = '6285749338645@c.us'
        const isOwner = ownerNumber.includes(sender.id)

        if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isAdmin && !isOwner){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                const check = await praz.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    praz.reply(from, `*「 GROUP LINK DETECTOR 」*\nLapor Komandan! Orang ini saya Kick, karena mengirimkan Link GC Lain.\n\nSopan kh bgtu?`, id).then(() => {
                        praz.removeParticipant(groupId, sender.id)
                    })
                }
            }
        }

        if (isGroupMsg && AntiStickerSpam && !isGroupAdmins && !isAdmin && !isOwner){
            if(stickermsg === true){
                if(isStickerMsg(serial)) return
                addStickerCount(serial)
            }
        }

        if(!isCmd && isKasar && isGroupMsg && isBadword && !isGroupAdmins) { 
            console.log(color('[BADWORD]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${argx}`), 'from', color(pushname), 'in', color(name || formattedTitle)) 
            if(isBadwordMsg(serial)) return
                addBadCount(serial)
        }
        
        // [BETA] Avoid Spam Message
        //if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        //if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        // AKTIFKAN APABILA TIDAK INGIN TERKENA SPAM!!
        addFilter(from)
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}

        // FUNCTION
        function waktu(seconds) { // PRAZ
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        
        var nmr = sender.id
        var obj = pendaftar.some((val) => {
            return val.id === nmr
        })
        var cekage = pendaftar.some((val) => {
            return val.id === nmr && val.umur >= 16
        })

        function monospace(string) {
            return '```' + string + '```'
        }


        function isReg(obj){
            if (obj === true){
                return false
            } else {     
                return praz.reply(from, `Kamu belum terdaftar sebagai Teman Bot\n\nUntuk mendaftar kirim ${prefix}daftar |pras|18\n\nTulis seperti yang di atas dan Ganti dengan Nama dan Umurmu.`, id) //if user is not registered
            }
        }

        function cekumur(obj){
            if (obj === true){
                return false
            } else {
                return praz.reply(from, `Kamu masih terlalu Bocil untuk menggunakan Bot, min 16 tahun\n\nKamu bisa mendaftar ulang dengan cara chat #pemilik Bot`, id) //if user is not registered
            }
        }

        const apakah = [
            'Ya',
            'Tidak',
            'Mustahil'
            ]

        const bisakah = [
            'Bisa',
            'Tidak Bisa',
            'Mungkin'
            ]

        const kapankah = [
            '1 menit lagi',
            '2 menit lagi',
            '3 menit lagi',
            '4 menit lagi',
            '5 menit lagi',
            '6 menit lagi',
            '7 menit lagi',
            '8 menit lagi',
            '9 menit lagi',
            '10 menit lagi',
            '1 Jam lagi',
            '2 Jam lagi',
            '3 Jam lagi',
            '4 Jam lagi',
            '5 Jam lagi',
            '6 Jam lagi',
            '7 Jam lagi',
            '8 Jam lagi',
            '9 Jam lagi',
            '10 Jam lagi',
            '11 Jam lagi',
            '12 Jam lagi',
            '13 Jam lagi',
            '14 Jam lagi',
            '15 Jam lagi',
            '16 Jam lagi',
            '17 Jam lagi',
            '18 Jam lagi',
            '19 Jam lagi',
            '20 Jam lagi',
            '21 Jam lagi',
            '22 Jam lagi',
            '23 Jam lagi',
            '24 Jam lagi',
            '1 Hari lagi',
            '2 Hari lagi',
            '3 Hari lagi',
            '4 Hari lagi',
            '5 Hari lagi',
            '6 Hari lagi',
            '7 Hari lagi',
            '8 Hari lagi',
            '9 Hari lagi',
            '10 Hari lagi',
            '11 Hari lagi',
            '12 Hari lagi',
            '13 Hari lagi',
            '14 Hari lagi',
            '15 Hari lagi',
            '16 Hari lagi',
            '17 Hari lagi',
            '18 Hari lagi',
            '19 Hari lagi',
            '20 Hari lagi',
            '21 Hari lagi',
            '22 Hari lagi',
            '23 Hari lagi',
            '24 Hari lagi',
            '25 Hari lagi',
            '26 Hari lagi',
            '27 Hari lagi',
            '28 Hari lagi',
            '29 Hari lagi',
            '30 Hari lagi',
            '1 Minggu lagi',
            '2 Minggu lagi',
            '3 Minggu lagi',
            '4 Minggu lagi',
            '5 Minggu lagi',
            '6 Minggu lagi',
            '7 Minggu lagi',
            '8 Minggu lagi',
            '9 Minggu lagi',
            '10 Minggu lagi',
            '1 Bulan lagi',
            '2 Bulan lagi',
            '3 Bulan lagi',
            '4 Bulan lagi',
            '5 Bulan lagi',
            '6 Bulan lagi',
            '7 Bulan lagi',
            '8 Bulan lagi',
            '9 Bulan lagi',
            '10 Bulan lagi',
            '11 Bulan lagi',
            '12 Bulan lagi',
            '1 Tahun lagi',
            '2 Tahun lagi',
            '3 Tahun lagi',
            '4 Tahun lagi',
            '5 Tahun lagi',
            '6 Tahun lagi',
            '7 Tahun lagi',
            '8 Tahun lagi',
            '9 Tahun lagi',
            '10 Tahun lagi',
            '11 Tahun lagi',
            '12 Tahun lagi'
            ]

        const balasrandom = [
            `Panggil-panggil aja nih kakak ${pushname}, kenapa?`,
            `Nussa disini kok kak, nggak kemana-mana😇`,
            `Rarra disini kok kak, nggak kemana-mana😇`,
            `iyaa disini ada Rarra, ada apa kak?`,
            `iyaa disini ada Nussa, ada apa kak?`,
            `Nussa & Rarra disini kak ${pushname}, kenapa panggil?`,
            `Haiiiii haiii, haloo ada apaa manggil?😆`,
            `hahaha panggil-panggil mulu ih kakak ${pushname}😭`
            ]
        const balesanpe = [
            `Lebih baik salam ya kak-!!`,
            `Sopan kh bgtu?`,
            `Assalamualaikumnya mana? jangan P dong kakakkk`,
            `iii Pake Assalamualaikum, jangan P mulu iisssh😠`
            ]
        const baleskotor = [
            `Yuk kak ${pushname}, mending istighfar😇`,
            `Astagfirullah, kok kasar sih ngomongnya`,
            `Astagfirullah kak, kok gitu sih ngomongnya`,
            `Gaboleh ngomong gitu kakakkk😭😠`
            ]
        const yeyoi = [
            `apasii kakk gajelas dehh😭`,
            `Rarra ga ngertiii maksudnyaa😭`,
            `jangan disingkat lah kakkk😠`,
            `Dahlah, daritadi y mulu.`,
            `Y Y Y, Gitu aja terus😠.`
                ]
        const tamparan = [
            `Sholat itu 5 Waktu, bukan kalo ada waktu.`,
`Tutup Auratnya ya Ukhty, sebelum ditutup Kain Kafan.`,
`Jangan Lupa Sholat!`,
`Udah Sholat belom? maen WhatsApp aja terus dari tadi.`,
`Jangan Lupa Sarapan ya!`,
`Awali semua dengan Bismillah dan Akhiri dengan Alhamdulillah.`,
`Jangan Pacaran ya, karena itu adalah Perbuatan Zina.`,
`Jangan Pacaran ya, karena itu Haram.`,
`Stay Halal Brother😇`,
`Ngehafal lagu Korea aja cepet, giliran baca Surah Al-Khafirun muter-muter.`,
`Jangan lupa Baca Al-Khafi ya tiap hari Jum'at, agar terhindar dari Fitnah Dajjal.`,
`Dia mulu yang dikejar, Akhirat kapan?`,
`Sudahilah Maksiatmu, Marilah Berhijrah Bersamaku!`,
`Sudahilah Halu-mu, Karena memikirkan orang yang bukan Mahram termasuk Zina Pikiran.`,
`Bisa-bisanya idolain Oppa-Oppa Korea, Padahal Nabi Muhammad SAW yang dulu selalu mendo'akan kita Umatnya.`,
`1400 Tahun lalu ada yang Bersujud lama sekali kepada Allah Mendo'akan kita, yaitu Nabi Muhammad SAW. dan apakah ini balasan kita untuknya?`,
`Allah lebih tau yang terbaik untukmu, jadi bersyukurlah.`,
`Kata Ust. Hannan Attaki : "Allah gamungkin ngecewain Hambanya, ketika dia yakin seutuhnya berdo'a hanya kepada Allah".`,
`Kalimat yang Ringan diucapkan tetapi Besar Pahalanya : "Subhanallahi Wa'bihamdihi, Subhanallahil Adzim.`,
`Sudah Bersyukur hari ini?`,
`Yuk sama-sama Hijrah! mulai aja dulu diperbaikin Sholatnya!`,
`Semangat ya, buat yang sedang berusaha memperbaiki diri.😇`,
`Semangat ya, buat yang sedang berusaha istiqomah.😇`,
`Jangan tidur malam-malam! nanti Subuh kesiangan.`,
`Yuk Bisa Yuk!`,
`Awas aja kalo Buat Stikernya aneh-aneh`,
`WhatsAppan mulu dari tadi, ibu manggil tuh😒`,
`Assalamualaikum kak.`,
`MasyaAllah kak!`,
`Kalau mau Memuji sesuatu gunakan, MasyaAllah ya!😒`,
`Allah itu Baik banget sama kita, sampe-sampe kita sendiri yang kadang lupa untuk bersyukur.`,
`Jangan Lupa Sholawat ya!`,
`Jangan lupa Baca Al-Qur'an.😇`,
`Panggil temanmu dengan nama yang baik-baik, karena jika kamu memanggilnya dengan sebutan buruk, apakah begitu caramu memanggil Penciptamu?`,
`Jangan lupa Senyum, karena Senyum juga termasuk ibadah.`
]

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]

        const mess = {
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            sek: '[TUNGGU] Sedang di proses⏳ silahkan tunggu sebentar',
            gc: 'Perintah ini hanya bisa digunakan didalam Grup',
            maaf: 'Maaf, fitur ini sedang dalam perbaikan',
            weslimit: `Maaf, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`,
            adminbot: 'Perintah ini hanya bisa dilakukan oleh Admin Bot',
            admingc: 'Perintah ini hanya bisa dilakukan oleh Admin Grup',
            pemiik: 'Perintah ini hanya bisa digunakan oleh Pemilik Bot',
            error: {
                St: '[❗] Kirim gambar dengan caption *#sticker* atau tag gambar yang sudah dikirim, atau #stickergif untuk video',
                Ti: '[❗] Replay sticker dengan caption *#stickertoimg* atau tag sticker yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblock Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        /********** FUNCTION **********/
        const addAfkUser = (userId, time, reason) => {
            const obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
            _afk.push(obj)
            fs.writeFileSync('./lib/afk.json', JSON.stringify(_afk))
        }

        const checkAfkUser = (userId) => {
            let status = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    status = true
                }
            })
            return status
        }

        const getAfkReason = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].reason
            }
        }

        const getAfkTime = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].time
            }
        }

        const getAfkId = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].id
            }
        }

        const getAfkPosition = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            return position
        }
        /********** END OF FUNCTION **********/
        

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const isAfkOn = checkAfkUser(sender.id)
        const errorurl = 'https://i.postimg.cc/BbPsGFdJ/error.png/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorurl2 = 'https://i.postimg.cc/BbPsGFdJ/error.png/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
       
// AFK
if (isGroupMsg) {
    for (let ment of mentionedJidList) {
        if (checkAfkUser(ment)) {
            const getId = getAfkId(ment)
            const getReason = getAfkReason(getId)
            const getTime = getAfkTime(getId)
            await praz.reply(from, menuId.afkMentioned(getReason, getTime), id)
        }
    }
    if (checkAfkUser(sender.id) && !isCmd) {
        _afk.splice(getAfkPosition(sender.id), 1)
        fs.writeFileSync('./lib/afk.json', JSON.stringify(_afk))
        await praz.sendText(from, menuId.afkDone(pushname))
    }
}

        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }
        
        // FUNCTION
                function isStickerMsg(id){
                if (isAdmin) {return false;}
                let found = false;
                for (let i of stickerspam){
                    if(i.id === id){
                        if (i.msg >= 12) {
                            found === true 
                            praz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh Bot`, id).then(() => {
                                praz.removeParticipant(groupId, id)
                            })
                            return true;
                        }else if(i.msg >= 12){
                            found === true
                            praz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu terdeteksi spam sticker!\nMohon tidak spam 5 sticker lagi atau nomor akan di kick oleh Bot!`, id)
                            return true
                        }else{
                            found === true
                            return false;
                        }   
                    }
                }
                if (found === false){
                    let obj = {id: `${id}`, msg:1};
                    stickerspam.push(obj);
                    fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                    return false;
                }  
            }
        function addStickerCount(id){
            if (isAdmin) {return;}
            var found = false
            Object.keys(stickerspam).forEach((i) => {
                if(stickerspam[i].id == id){
                    found = i
                }
            })
            if (found !== false) {
                stickerspam[found].msg += 1;
                fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
            }
        }

        function isBadwordMsg(id){
            if (isAdmin) {return false;}
            let kasar = false;
            for (let i of msgBadword){
                if(i.id === id){
                    let msg = i.msg
                    if (msg >= 3) { // 3X BADWORD AKAN TERKENA KICK
                        kasar === true 
                        praz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, kamu akan di kick otomatis oleh Bot!`, id).then(() => {
                            praz.removeParticipant(groupId, id)
                        })
                        return true;
                    }else{
                        kasar === true
                        return false;
                    }   
                }
            }
            if (kasar === false){
                let obj = {id: `${id}`, msg:1};
                msgBadword.push(obj);
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                return false;
            }  
        }
        function addBadCount(id){
            if (isAdmin) {return;}
            var kasar = false
            Object.keys(msgBadword).forEach((i) => {
                if(msgBadword[i].id == id){
                    kasar = i
                }
            })
            if (kasar !== false) {
                msgBadword[kasar].msg += 1;
                fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
            }
        }

        function isMsgLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 8) {
                                found === true 
                                praz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, id)
                                praz.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 8){
                                found === true
                                praz.reply(from, `*「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 」*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
        function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
        function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                praz.reply(from, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }
        
                // END HELPER FUNCTION
        // FUNCTION DAFTAR! NEXT UPDATE
        function monospace(string) {
            return '```' + string + '```'
        }

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        
                if(body === '#mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isAdmin) return praz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Admin Bot!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        praz.reply(from, 'Lapor Komandan! Bot telah di nonaktifkan pada Grup ini. Sekarang kamu tidak bisa menggunakan bot! Laporan Selesai.', id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, 'Lapor Komandan! Bot telah di nonaktifkan pada Grup ini. Sekarang kamu tidak bisa menggunakan bot! Laporan Selesai.', id)
                    }
                }
                if(body === '#unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isAdmin) return praz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Admin Bot!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        praz.reply(from, 'Lapor Komandan! Bot telah di aktifkan kembali pada Grup ini. Sekarang kamu bisa menggunakan bot! Laporan Selesai.', id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        praz.reply(from, 'Bot telah di unmute!', id)                   
                    }
                }
                if (body === '#unbanchat') {
                    if (!isOwner) return praz.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh Pemilik Bot!', id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await praz.reply('Sukses Menonaktifkan')
                }
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

        case prefix+'banchat':
            if (setting.banChats === true) return
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Bot!', id)
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            await praz.reply('Sukses Mengaktifkan')
            break

        case prefix+'unmute':
            console.log(`Unmuted ${name}!`)
            await praz.sendSeen(from)
            break
        case prefix+'unbanchat':
            console.log(`Banchat ${name}!`)
            await praz.sendSeen(from)
            break

            // MENU STIKER //
            
            case prefix+'sticker':
                case prefix+'stiker':
                    case prefix+'setiker':
                case prefix+'s':
                    //if (isReg(obj)) return
                    if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    const tamparanstc1 = tamparan[Math.floor(Math.random() * (tamparan.length))]
                        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
                        await praz.reply(from, `${tamparanstc1}`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendImageAsSticker(from,  imageBase64, { author: 'whatsapp', pack: 'stiker', keepScale:'true' })
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendImageAsSticker(from,  imageBase64, { author: 'whatsapp', pack: 'stiker', keepScale:'true' })
                    } else if (args.length === 2) {
                        const url = args[1]
                        if (url.match(isUrl)) {
                            await praz.sendStickerfromUrl(from, url, { method: 'get' })
                                .catch(err => console.log('Caught exception: ', err))
                        } else {
                            praz.reply(from, mess.error.Iv, id)
                            limitAdd(serial)
                        };
                    } else {
                            praz.reply(from, mess.error.St, id)
                    } await limitAdd(serial)
                    break
                    // STIKER NO PREFIX
                case 'sticker':
                case 'stiker':
                case 'setiker':
                case 's':
                    //if (isReg(obj)) return
                    if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    const tamparanstc2 = tamparan[Math.floor(Math.random() * (tamparan.length))]
                        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
                        await praz.reply(from, `${tamparanstc2}`, id)
                    if (isMedia && type === 'image') {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendImageAsSticker(from,  imageBase64, { author: 'whatsapp', pack: 'stiker', keepScale:'true' }) 
                    } else if (quotedMsg && quotedMsg.type == 'image') { 
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendImageAsSticker(from,  imageBase64, { author: 'whatsapp', pack: 'stiker', keepScale:'true' })
                    } else if (args.length === 2) {
                        const url = args[1]
                        if (url.match(isUrl)) {
                            await praz.sendStickerfromUrl(from, url, { method: 'get' })
                                .catch(err => console.log('Caught exception: ', err))
                        } else {
                            praz.reply(from, mess.error.Iv, id)
                            limitAdd(serial)
                        };
                    } else {
                            praz.reply(from, mess.error.St, id)
                    } await limitAdd(serial)
                    break
                    // iki ttp
        case prefix+'ttp':
            if (!isOwner) return praz.reply(from, 'Maaf, fitur ini sedang dalam perbaikan', id)
                //if(isReg(obj)) return
                //if(cekumur(cekage)) return
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis`, id)
                if (args.length === 1) return praz.reply(from, `Kirim perintah *#ttp [ Teks ]*, contoh *#ttp Ansellma Cangtip*`, id)
                //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
                praz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                try
                {
                    const string = body.toLowerCase().includes('#ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await praz.sendImageAsSticker(from, gasMake.base64, { author: 'whatsapp', pack: 'stiker' })
                                }catch(err) {
                                    await praz.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await praz.reply(from, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await praz.sendImageAsSticker(from, gasMake.base64, { author: 'whatsapp', pack: 'stiker' })
                                }catch(err) {
                                    await praz.reply(from, 'Gagal membuat.', id)
                                } 
                            }else{
                                await praz.reply(from, gasMake.reason, id)
                            }
                        }
                       
                    }else{
                        await praz.reply(from, 'Tidak boleh kosong.', id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
                limitAdd(serial)
            break;
            case prefix+'attp':
                //if(isReg(obj)) return
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (isMedia && type === 'sticker') {
                    const mediaData = await decryptMedia(message, uaOverride)
                }
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                const attptulisan = body.slice(6)
                if (!attptulisan) return praz.reply(from, 'Kirim perintah *#attp teks*\n\nContoh *#attp Dih Wibu*', id)
                if (attptulisan.length > 13) return praz.reply(from, 'Maksimal 13 Huruf!', id)
                //praz.reply(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
            await praz.sendStickerfromUrl(from,  `https://api.lolhuman.xyz/api/attp?apikey=${lol}&text=${attptulisan}`, imageBase64, { author: 'stiker', pack: 'whatsapp', keepScale:'true' })
            await limitAdd(serial)
            break        
        case prefix+'ttp2':
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *#ttp2 [ Teks ]*, contoh *#ttp2 Ansellma Cangtip*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await praz.sendStickerfromUrl(from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
            break
        case prefix+'ttg':
            if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            praz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return praz.reply(from, `Kirim perintah *#ttg [ Teks ]*, contoh *#ttg aku bukan boneka*`, id)
                        await praz.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                        limitAdd(serial)
                } else {
                    await praz.sendStickerfromUrl(from, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    
                }
            } catch(e) {
                console.log(e)
                praz.reply(from, 'Maaf, Server sedang Error')
            }
            limitAdd(serial)
            break
            
        case prefix+'stickertoimg':
            case prefix+'jadigambar':
                case prefix+'jadiingambar':
            case prefix+'toimg':
                case prefix+'ti':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                praz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await praz.sendFile(from, imageBase64, 'imagesticker.jpg', 'Success Convert Sticker to Image!', id)
            } else if (!quotedMsg) return praz.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            limitAdd(serial)
            break
            case 'stickertoimg':
            case 'jadigambar':
            case 'jadiingambar':
            case 'toimg':
            case 'ti':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                praz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await praz.sendFile(from, imageBase64, 'imagesticker.jpg', 'Success Convert Sticker to Image!', id)
            } else if (!quotedMsg) return praz.reply(from, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            limitAdd(serial)
            break

        case prefix+'stickergif':
            case prefix+'stickergift':
            case prefix+'stikergif':
            case prefix+'stikergift':
            case prefix+'gifstiker':
            case prefix+'gifsticker':
            case prefix+'stiker':
            case prefix+'sticker':
            case prefix+'s':
            case prefix+'sgif':
            case prefix+'gif':
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis`, id)
                const tamparansgif1 = tamparan[Math.floor(Math.random() * (tamparan.length))]
                if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
                await praz.reply(from, `${tamparansgif1}`, id)
                if (isMedia && type === 'video' || mimetype === 'image/gif') {
                    //await praz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendMp4AsSticker(from, videoBase64, { fps: 10, startTime: `00:00:00.0`, endTime : `00:00:06.0`, loop: 0 }, { author: 'whatsapp', pack: 'stiker' })    
                        .then(async () => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                
                            })
                    } catch (err) {
                        console.error(err)
                        await praz.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
                    }
                } else if (isQuotedGif || isQuotedVideo) {
                    //praz.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendMp4AsSticker(from, videoBase64, { fps: 10, startTime: `00:00:00.0`, endTime : `00:00:06.0`, loop: 0 }, { author: 'whatsapp', pack: 'stiker' })  
                        .then(async () => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                
                            })
                    } catch (err) {
                        console.error(err)
                        await praz.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
                    }
                } else {
                    await praz.reply(from, `Untuk mengconvert GIF/Video menjadi stikergif silahkan upload video/gif dengan caption ${prefix}stikergif`, id)
                }
                limitAdd(serial)
            break

            case 'stickergif':
            case 'stickergift':
            case 'stikergif':
            case 'stikergift':
            case 'gifstiker':
            case 'gifsticker':
            case 'stiker':
            case 'sticker':
            case 's':
            case 'sgif':
            case 'gif':
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis`, id)
                const tamparansgif2 = tamparan[Math.floor(Math.random() * (tamparan.length))]
                if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
                await praz.reply(from, `${tamparansgif2}`, id)
                if (isMedia && type === 'video' || mimetype === 'image/gif') {
                    //await praz.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendMp4AsSticker(from, videoBase64, { fps: 10, startTime: `00:00:00.0`, endTime : `00:00:06.0`, loop: 0 }, { author: 'whatsapp', pack: 'stiker' })    
                        .then(async () => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                
                            })
                    } catch (err) {
                        console.error(err)
                        await praz.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
                    }
                } else if (isQuotedGif || isQuotedVideo) {
                    //praz.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendMp4AsSticker(from, videoBase64, { fps: 10, startTime: `00:00:00.0`, endTime : `00:00:06.0`, loop: 0 }, { author: 'whatsapp', pack: 'stiker' })   
                        .then(async () => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                
                            })
                    } catch (err) {
                        console.error(err)
                        await praz.reply(from, `Ukuran video terlalu besar\nMaksimal size adalah 1MB!`, id)
                    }
                } else {
                    await praz.reply(from, `Untuk mengconvert GIF/Video menjadi stikergif silahkan upload video/gif dengan caption ${prefix}stikergif`, id)
                }
                limitAdd(serial)
            break

            // TEXT MAKER MENU //

        /*case 'cek':
            if (args.length == 0) return praz.reply(from, `ini digunakan untuk memeriksa banyaknya request apikey`, id)
            const cekapi = body.slice(8)
            const cekapi1 = await axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
            const cekapi2 = cekapi1.data.result
            const cekapi3 = `Cek Data APIkey di lolhuman.xyz\n\nUsername: ${cekapi2.username}\nTotal Request: ${cekapi2.requests}\nRequest Hari ini: ${cekapi2.today}\nTipe Akun: ${cekapi2.account_type}\nExpired: ${cekapi2.expired}`
            await praz.reply(from, `${cekapi3}`, id)
            //await limitAdd(serial) 
            break*/
            // AKHIR TEXT MAKER //
   

            // FROM DAFTAR //

            /*case prefix+'verify':
            case prefix+'@verify':
              try {
                const nonye = sender.id
                const namanye = pushname
                const umurnye = 17
                const jenenge = namanye.replace(' ','')
          if(isNaN(umurnye))
          if(umurnye >= 40) /*return await praz.reply(from, ind.ageOld(), id)
          //register.addRegisteredUser(sender.id, umurnye, namanye, time, serialUser, _registered)
          await praz.reply(from, jenenge, `
*VERIFIKASI USER*_[STATUS : BERHASIL]_\n
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${jenenge} [@${nonye.replace(/[@c.us]/g, '')}]
[Nomor]: wa.me/${nonye.replace('@c.us', '')}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Untuk mengetahui Peraturan Bot silahkan kirim ${prefix}snk
Total Pengguna yang telah terdaftar ${pendaftar.length}`, id)
          console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namanye, 'cyan'), 'Age:', color(umurnye, 'cyan'))
              } catch {
                praz.reply(from, 'Gagal Memverifikasi Nomor Anda', id)
              }
              
          break*/
          case prefix+'daftar':
              await praz.reply(from, 'Langsung pake botnya aja, sementara ga ada daftar-daftar', id)// NAMBAHIN NOMOR DI DATABASE
          break
              /*if (args.length === 1) {
          const nonye = sender.id
          const namanye = pras
          const umurnye = 18
              if(isNaN(umurnye)) return //await tobz.reply(from, 'Umur harus berupa angka!!', id)
              if(umurnye >= 1000) return //await tobz.reply(from, 'Kamu terlalu tua, kembali lagi ke masa muda untuk menggunakan Bot', id)
              const jenenge = namanye.replace(' ','')
              var ceknya = nonye
                  var obj = pendaftar.some((val) => {
                      return val.id === ceknya
                  })
                  if (obj === true){
                      return praz.reply(from, 'kamu sudah terdaftar', id) // BAKAL RESPON JIKA NO UDAH ADA
                  } else {
                      const mentah = await praz.checkNumberStatus(nonye) // PENDAFTARAN
                      const msg = monospace(`Pendaftaran berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${jenenge} [@${nonye.replace(/[@c.us]/g, '')}]
[Nomor]: wa.me/${nonye.replace('@c.us', '')}
[Umur]: ${umurnye} Tahun
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Untuk mengetahui Peraturan Bot silahkan kirim ${prefix}snk
Total Pengguna yang telah terdaftar ${pendaftar.length}`)
                      const hasil = mentah.canReceiveMessage ? msg : false
                      if (!hasil) return praz.reply(from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', id) 
                      {
                      const register = ({
                          id: mentah.id._serialized,
                          nama: jenenge,
                          umur: umurnye
                      })
                      pendaftar.push(register)
                      fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar)) // DATABASE
                          praz.sendTextWithMentions(from, hasil)
                      }
                  }
              } else {
                  await praz.reply(from, `Format yang kamu masukkan salah, kirim ${prefix}daftar |nama|umur\n\ncontoh format: ${prefix}daftar |ansellma|17\n\ncukup gunakan nama depan/panggilan saja`, id) //if user is not registered
              }
          break*/
            /*case prefix+'daftarulang':
                    if (!isAdmin) return praz.reply(from, 'Command ini hanya dapat digunakan oleh admin Bot', id)  
                    const nomernya = args[1]
                    let textnya = nomernya.replace(/[-\s+@c.us]/g,'')
                    const cusnya = textnya + '@c.us'
                    const umurnya = args[2]
                    if(umurnya >= 40) return await praz.reply(from, 'Kamu terlalu tua om, kembalilah ke masa mudamu untung menggunakan Bot ini.', id)
                        var found = false
                        Object.keys(pendaftar).forEach((i) => {
                            if(pendaftar[i].id == cusnya){
                                found = i
                            }
                        })
                        if (found !== false) {
                            pendaftar[found].umur = umurnya;
                            const updated = pendaftar[found]
                            const result = monospace(`Update data berhasil dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
[Nama]: ${updated.nama}|@${updated.id.replace(/[@c.us]/g, '')}
[Nomor]: wa.me/${updated.id.replace('@c.us', '')}
[Umur]: ${updated.umur} Tahun
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Total Pengguna yang telah terdaftar ${pendaftar.length}`)
                            console.log(pendaftar[found])
                            fs.writeFileSync('./lib/database/user.json',JSON.stringify(pendaftar));
                            praz.sendTextWithMentions(from, result, id)
                        } else {
                                praz.reply(from, `${monospace(`Di database ngga ada nomer itu kak`)}`, id)
                        }
                break*/
        case prefix+'groupinfo' :
            case prefix+'grupinfo' :
            case prefix+'gcinfo' :
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            //var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var simu = simi_.includes(chat.id)
            //var stprt = antisticker.includes(chat.id)
            //var antbad = antibadword.includes(chat.id)
            var grouppic = await praz.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await praz.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO 」*
*➸ Name : ${groupname}* 
*➸ Members : ${totalMem}*
*➸ Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Left : ${leftgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Simsimi : ${simu ? 'Aktif' : 'Tidak Aktif'}*
*➸ Group Description* 
${desc}`)
            break
        
        case prefix+'tts':
            if (args.length === 1) return praz.reply(from, 'Format salah! Contoh #tts id nuusa dan rarra lagi makan', id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (args.length === 1) return praz.reply(from, 'Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return praz.reply(from, 'Contoh #tts id ganti dengan kalimatmu', id)
                if (dataText.length > 500) return praz.reply(from, 'Teks terlalu panjang!', id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                praz.sendPtt(from, './media/tts.mp3', id)
                limitAdd(serial)
                })
            } catch (err){
                console.log(err)
                praz.reply(from, bahasa_list, id)
            }
            break

            // TAKON MENU //

        case prefix+'kapankah':
            case prefix+'kapan':
            //if(isReg(obj)) return
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
            break
            case 'kapankah':
            case 'kapan':
            //if(isReg(obj)) return
            const when2 = args.join(' ')
            const ans2 = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when2) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${when2}* \n\nJawaban: ${ans2}`)
            break
        case prefix+'nilai':
        case prefix+'rate':
            //if(isReg(obj)) return
            const rating = args.join(' ')
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
            break
            case 'nilai':
            case 'rate':
            //if(isReg(obj)) return
            const rating2 = args.join(' ')
            const awr2 = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating2) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${rating2}* \n\nJawaban: ${awr2}`)
            break
        case prefix+'apakah':
            //if(isReg(obj)) return
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
            break
            case 'apakah':
            //if(isReg(obj)) return
            const nanya2 = args.join(' ')
            const jawab2 = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya2) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${nanya2}* \n\nJawaban: ${jawab2}`)
            break
         case prefix+'bisakah':
            //if(isReg(obj)) return
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
            break
            case 'bisakah':
            //if(isReg(obj)) return
            const bsk2 = args.join(' ')
            const jbsk2 = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk2) praz.reply(from, '⚠️ Format salah! Ketik *#menutanya* untuk penggunaan.')
            await praz.sendText(from, `Pertanyaan: *${bsk2}* \n\nJawaban: ${jbsk2}`)
            break
        case prefix+'owner':
        case prefix+'creator':
        case prefix+'pemilik':
        case prefix+'pemilikbot':
           await praz.sendContact(chatId, `6285749338645@c.us`, id)
            praz.reply(from, 'Itu nomor Pemilik Bot ini. Chat aja ya jika ada pertanyaan atau butuh bantuan!', id)
            break
        case prefix+'resetsticker':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isAdmin) return praz.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh Admin Bot!`, id)
            if (!args.length === 1) return praz.reply(from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetsticker 62852262236155 / #resetsticker @member`, id) 
            const nomebr = args[1]
            let textz = nomebr.replace(/[-\s+@c.us]/g,'')
            const cuss = textz + '@c.us'
                var found = false
                Object.keys(stickerspam).forEach((i) => {
                    if(stickerspam[i].id == cuss){
                        found = i
                    }
                })
                if (found !== false) {
                    stickerspam[found].msg = 1;
                    const result = 'DB Sticker Spam has been reset'
                    console.log(stickerspam[found])
                    fs.writeFileSync('./lib/database/stickerspam.json',JSON.stringify(stickerspam));
                    praz.reply(from, result, from)
                    limitAdd(serial)
                } else {
                        praz.reply(from, `Maaf, Nomor itu tidak terdaftar di database!`, id)
                }
            break
        case prefix+'resetbadword':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
                    if(isLimit(serial)) return
                    if (!isGroupAdmins) return praz.reply(from, 'Command ini hanya dapat digunakan oleh admin grup')  
                    if (!args.length === 1) return praz.reply(from, 'Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetbadword 6285112554122 / #resetbadword @member') 
                    const nomer = args[1]
                    let text = nomer.replace(/[-\s+@c.us]/g,'')
                    const cus = text + '@c.us'
                        var found = false
                        Object.keys(msgBadword).forEach((i) => {
                            if(msgBadword[i].id == cus){
                                found = i
                            }
                        })
                        if (found !== false) {
                            msgBadword[found].msg = 1;
                            const result = 'DB Badword Spam has been reset'
                            console.log(msgBadword[found])
                            fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                            praz.reply(from, result, from)
                            limitAdd(serial)
                        } else {
                                praz.reply(from, `${monospace(`Di database ngga ada nomer itu ngab`)}`, id)
                        }
                break
        // ON OFF
        case prefix+'antilink':
            //if(isReg(obj)) return
            if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'on') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return praz.reply(from, `*「 ANTI GROUP LINK 」*\nBerhasil di Aktifkan.`, id) //if number already exists on database
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    praz.reply(from, `*「 ANTI GROUP LINK 」*\nBerhasil di Aktifkan.`, id)
                }
            } else if (args[1] == 'off') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return praz.reply(from, `*「 ANTI GROUP LINK 」*\nBerhasil di Nonaktifkan.`, id) //if number already exists on database
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    praz.reply(from, `*「 ANTI GROUP LINK 」*\nBerhasil di Nonaktifkan.`, id)
                }
            } else {
                praz.reply(from, `Pilih on atau off kak!`, id)
            }
            break    
        case prefix+'antisticker':
            //if(isReg(obj)) return
            if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'on') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return praz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudah Aktif`, id)
                 } else {
                    antisticker.push(chatId)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    praz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Aktif`, id)
                }
            } else if (args[1] == 'off') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return praz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Sudak DiNonaktif`, id) //if number already exists on database
                } else {
                    let nixx = antisticker.indexOf(chatId)
                    antisticker.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    praz.reply(from, `*「 ANTI SPAM STICKER 」*\nStatus : Nonaktif`, id)
                    limitAdd(serial)
                }
            } else {
                praz.reply(from, `Pilih enable atau disable! Bambang!`, id)
            }
            break
        case prefix+'antibadword':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return praz.reply(from, `*「 ANTI BADWORD 」*\nSudah diaktifkan di grup ini`, id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    praz.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Bot Akan Tedang kamu dari Grup!`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return praz.reply(from, `*「 ANTI BADWORD 」*\nSudah dinonaktifkan di grup ini`, id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    praz.reply(from, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Bot Akan Tedang kamu dari Grup!`, id)
                }
            } else {
                praz.reply(from, `Pilih enable atau disable! Bambang!`, id)
            } 
            break   
        case prefix+'simi':
            //if(!isOwner) return praz.reply(from, ` `, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            //if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin Bot!', id) // Hanya Admin yang bisa mengaktifkan
            if (args.length === 1) return praz.reply(from, 'Pilih on atau off!', id)
            if (args[1].toLowerCase() === 'on') {
                var cek = simi_.includes(chatId);
                if(cek){
                    return praz.reply(from, `Simsimi Sudah diaktifkan di grup ini`, id)
                } else {
                simi_.push(chat.id)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                praz.reply(from, 'Simsimi berhasil di aktifkan di group ini! Kirim perintah *# [teks]*\nContoh : *# halo*', id)
                }
            } else if (args[1].toLowerCase() === 'off') {
                var cek = simi_.includes(chatId);
                if(cek){
                    return praz.reply(from, `Simsimi Sudah diaktifkan di grup ini`, id)
                } else {
                simi_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                praz.reply(from, 'Simsimi berhasil di nonaktifkan di group ini!', id)
                }
            } else {
                praz.reply(from, 'Pilih on atau off kak!', id)
            }
            break
        case prefix+'group':
            case prefix+'grup':
                case prefix+'grub':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (args.length === 1) return praz.reply(from, 'Pilih buka atau tutup', id)
            if (args[1].toLowerCase() === 'buka') {
                praz.setGroupToAdminsOnly(groupId, false)
                praz.sendTextWithMentions(from, `Group telah dibuka oleh admin @${sender.id.replace('@c.us','')}\nSekarang *semua member* dapat mengirim pesan`)
            } else if (args[1].toLowerCase() === 'tutup') {
                praz.setGroupToAdminsOnly(groupId, true)
                praz.sendTextWithMentions(from, `Group telah ditutup oleh admin @${sender.id.replace('@c.us','')}\nSekarang *hanya admin* yang dapat mengirim pesan`)
            } else {
                praz.reply(from, 'Pilih buka atau tutup', id)
            }
            break
        case prefix+'left':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return praz.reply(from, 'Pilih on atau off', id)
            if (args[1].toLowerCase() === 'on') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                praz.reply(from, 'Fitur Berhasil Aktifkan', id)
            } else if (args[1].toLowerCase() === 'off') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                praz.reply(from, 'Fitur Berhasil dinonaktifkan', id)
            } else {
                praz.reply(from, 'Pilih on atau off', id)
            }
            break
        case prefix+'welcome':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return praz.reply(from, 'Pilih on atau off', id)
            if (args[1].toLowerCase() === 'on') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                praz.reply(from, 'Fitur Berhasil Aktifkan', id)
            } else if (args[1].toLowerCase() === 'off') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                praz.reply(from, 'Fitur Berhasil dinonaktifkan', id)
            } else {
                praz.reply(from, 'Pilih on atau off', id)
            }
            break
            // AUTO REPLY
        
        
        case'p':
        case'pp':
        case'pppp':
        case'pe':
        case'pee':
        const pepebalesan = balesanpe[Math.floor(Math.random() * (balesanpe.length))]
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        await praz.reply(from, `${pepebalesan}`, id)
        break
        case'anj':
        await praz.reply(from, 'Astagfirullah, gaboleh gitu ngomongnya.', id)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
            break
        case'tes':
        await praz.reply(from, 'Tas Tes Tas Tes ae Lu!', id)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        break
        case'hi':
        await praz.reply(from, 'Hai Juga!', id)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        break
        case'g':
        await praz.reply(from, 'O', id)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        break
        case'hii':
        await praz.reply(from, 'Hai Juga!', id)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        break
        case'sopan':
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned )
        await praz.reply(from, `Tumben Sopan!`, id)
        break
        case'y':
        const yeyeye = yeyoi[Math.floor(Math.random() * (yeyoi.length))]
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        await praz.reply(from, `${yeyeye}`, id)
        break
        case'stres':
        case'stress':
        case'strees':
        case'streess':
        await praz.reply(from, `y`, id)
        break
        case'nganu':
        case'nganuu':
        case'nganuuuu':
        await praz.reply(from, `Nganu apa hayo?`, id)
        break
        case prefix+'mute':
        break
            
        // ANIME //

        case prefix+'pinterest':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah *#pinterest [query]*\nContoh : *#pinterest Naruto*', id)
            const ptrsq = body.slice(11) 
            const ptrst = await axios.get(`https://api.lolhuman.xyz/api/pinterest?apikey=${lol}&query=${ptrsq}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await praz.sendImage(from, base64, 'ptrs.jpg', `*Pinterest*\n\n*Hasil Pencarian : ${ptrsq}*`)
            await limitAdd(serial)
            break
            
                case prefix+'igdl': // by: VideFrelan
            case prefix+'instadl':
                if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)    
            if (!isUrl(url) && !url.includes('instagram.com')) return await praz.reply(from, ind.wrongFormat(), id)
                await praz.reply(from, mess.wait, id)
                downloader.insta(url)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.post.length; i++) {
                            if (result.post[i].type === 'image') {
                                await praz.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.jpg', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            } else if (result.post[i].type === 'video') {
                                await praz.sendFileFromUrl(from, result.post[i].urlDownload, 'igpostdl.mp4', `*...:* *Instagram Downloader* *:...*\n\nUsername: ${result.owner_username}\nCaption: ${result.caption}`, id)
                            }
                        }
                        console.log('Success sending Instagram media!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await praz.reply(from, 'Error!', id)
                    })
            break
        case prefix+'shota':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            praz.sendFile(from, img, "shota.jpg", `*SHOTA*`, id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break




            case prefix+'emoji':
            case prefix+'emote':
                //if (args.length == 0) return praz.reply(from, `Contoh Penggunaan : #emoji 😭
            if (isLimit(serial)) return praz.reply(from, `Maaf, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const ikiemot = body.slice(7)
            const ikiemot1 = await axios.get(`https://api.lolhuman.xyz/api/smoji3/${ikiemot}?apikey=${lol}`, id)
            const ikiemot2 = ikiemot1.emoji.result
            const ikiemot3 = `${ikiemot1.emoji.apple}`
            await praz.sendImage(from, `${ikiemot3}`, id)
            break
            case prefix+'niat':
                //if (args.length == 0) return praz.reply(from, `Contoh Penggunaan : #emoji 😭
            if (isLimit(serial)) return praz.reply(from, `Maaf, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const niat = body.slice(6)
            const niat1 = await axios.get(`https://api.lolhuman.xyz/api/niatsholat/${niat}?apikey=${lol}`, id)
            const niat2 = niat1.data.result
            const niat3 = `Menampilkan Niat dari Sholat ${niat}\n\n*Nama:* ${niat2.name}\n*Arab:* ${niat2.ar}\n*Latin:* ${niat2.latin}\n*Indonesia:* ${niat2.id}`
                await praz.reply(from, `${niat3}`, id)
            break




/*case 'cek':
                if(!isOwner) return praz.reply(from, `Halo kak, langsung ketik #menu aja ya`, id)
                if (args.length == 0) return praz.reply(from, `ini digunakan untuk memeriksa banyaknya request apikey`, id)
                const cekapi = body.slice(5)
                const cekapi1 = await axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                const cekapi2 = cekapi1.data.result
                const cekapi3 = `Cek Data APIkey di lolhuman.xyz\n\nUsername: ${cekapi2.username}\nTotal Request: ${cekapi2.requests}\nRequest Hari ini: ${cekapi2.today}\nTipe Akun: ${cekapi2.account_type}\nExpired: ${cekapi2.expired}`
                await praz.reply(from, `${cekapi3}`, id)
                //await limitAdd(serial) 
                break*/
        // MEDIA //
        case prefix+'ytsearch':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *${prefix}ytsearch [ Query ]*, Contoh : #ytsearch alan walker alone`)
            const ytsher = body.slice(10)
            praz.reply(from, mess.wait, id)
            try {
                const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(ytsher)}&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Hasil Pencarian : ${ytsher}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Judul* : ${result[i].title}\n• *Ditonton* : ${result[i].views}\n• *Durasi* : ${result[i].duration}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].urlyt}\n`
                }
                await praz.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    praz.sendText(ownerNumber, 'YT Search Error : ' + err)
            }
            break
        case prefix+'infogempa':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const bmkg = await axios.get('http://praz-api.herokuapp.com/api/infogempa')
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            praz.sendFileFromUrl(from, map, 'shakemap.jpg', hasil, id)
            await limitAdd(serial)
            break
        case prefix+'cuaca':
            //if (!isOwner) return praz.reply(from, 'Maaf, fitur ini sedang dalam perbaikan', id)
            if (args.length == 0) return aruga.reply(from, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
            const cuaca = body.slice(7)
            const cuaca1 = await axios.get(`https://api.xteam.xyz/cuaca?kota=${cuaca}&APIKEY=${xteam}`)
            const cuaca2 = cuaca1.data
            const cuaca3 = `Menampilkan Perkiraan Cuaca di ${cuaca}\n${cuaca2.kota}\n\nHari ${cuaca2.hari}\nCuaca : ${cuaca2.cuaca}\nDeskripsi : ${cuaca2.deskripsi}\nTekanan : ${cuaca2.pressure}\nKelembapan : ${cuaca2.kelembapan}\nAngin : ${cuaca2.angin}`
            await praz.reply(from, `${cuaca3}`, id)
            .catch(() => {
                praz.reply(from, 'Ada yang Error!', id)
            })
            break
            case prefix+'covid':
                case prefix+'covid19':
                case prefix+'corona':
                    if (!isOwner) return praz.reply(from, 'Maaf, fitur ini sedang dalam perbaikan', id)
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const covid = body.trim().split(' ')
                console.log(... covid[1])
                var slicedArgs = Array.prototype.slice.call(covid, 1);
                console.log(slicedArgs)
                const country = await slicedArgs.join(' ')
                console.log(country)
                const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
                const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await praz.sendText(from, '🌎 Covid Info - ' + country + ' 🌍\n\n✨ Total Cases: ' + `${cases}` + '\n📆 Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.')
                await limitAdd(serial)
                
                break
            case prefix+'cekcovid':
                if (args.length === 1) return praz.reply(from, `Share Lokasi anda terkini (Sharelok)\nLalu Reply dengan *${prefix}cekcovid`)
                if (quotedMsg.type !== 'location') return praz.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}cekcovid`, id)
                console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
                const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
                if (zoneStatus.kode !== 200) praz.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
                let datax = ''
                for (let i = 0; i < zoneStatus.data.length; i++) {
                    const { zone, region } = zoneStatus.data[i]
                    const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                    datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
                }
                const text1 = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
                praz.sendText(from, text1)
                break
                   case prefix+'video':
                    case prefix+'vidio':
                   if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                   break
                case prefix+'ytmp3':
                    if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                    if (!isUrl(url) && !url.includes('youtu.be')) return await praz.reply(from, 'format salah', id)
                    await praz.reply(from, '_tunggu sebentar_', id)
                    const music_yt = await axios.get(`http://lolhuman.herokuapp.com/api/ytaudio?apikey=${lol}&url=${url}`)
                    try {
                    const { title, uploader, duration, view, like, thumbnail, description, link } = music_yt.data.result
                    const cpt = `   *LAGU DI TEMUKAN* ✨\n
    💠 Title✨: ${title}
    💠 Upload✨: ${uploader}
    💠 Duration✨: ${duration}
    💠 Views✨: ${view}
    💠 Like✨ : ${like}
    💠 Desc✨ : ${description}
    
       *LAGU SEDANG DI KIRIM*`
                    await praz.sendFileFromUrl(from, thumbnail, 'ytmp.jpg', `${cpt}`, id)
                    const pree = await fetch(link[0].link);
                    const buffer = await pree.buffer();
                    await fs.writeFile('./temp/audio/audio.mp3', buffer)
                    await praz.sendFile(from, './temp/audio/audio.mp3', 'lagu.mp3', '', id)
                    fs.unlinkSync(`./temp/audio/audio.mp3`)
                    } catch {
                        praz.reply(from, 'Lagu Gagal Di dapat Kan', id)
                    }
                break
                case prefix+'ytmp4':
                    if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                    if (!isUrl(url) && !url.includes('youtu.be')) return await praz.reply(from, 'format salah', id)
                    await praz.reply(from, '_tunggu sebentar_', id)
                    const music_yt2 = await axios.get(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhuman}&url=${url}`)
                    try {
                    const { title, uploader, duration, view, like, thumbnail, dislike, link } = music_yt2.data.result
                    const cpt2 = `   *VIDEO DI TEMUKAN* ✨\n
    💠 Title✨: ${title}
    💠 Upload✨: ${uploader}
    💠 Duration✨: ${duration}
    💠 Views✨: ${view}
    💠 Like✨ : ${like}
    💠 Dislike✨ : ${dislike}
       
       *VIDEO SEDANG DI KIRIM*`
                    await praz.sendFileFromUrl(from, thumbnail, 'ytmp.jpg', `${cpt2}`, id)
                    const pree2 = await fetch(link[0].link);
                    const buffer = await pree2.buffer();
                    await fs.writeFile('./temp/video/video.mp4', buffer)
                    await praz.sendFile(from, './temp/video/video.mp4', 'video.mp4', '', id)       
                    fs.unlinkSync(`./temp/video/video.mp4`)
                    } catch {
                        praz.reply(from, 'Lagu Gagal Di dapat Kan', id)
                    }
                break
            /*case 'cek':
                if (args.length == 0) return praz.reply(from, `ini digunakan untuk memeriksa banyaknya request apikey`, id)
                const cekapi = body.slice(8)
                const cekapi1 = await axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                const cekapi2 = cekapi1.data.result
                const cekapi3 = `Cek Data APIkey di lolhuman.xyz\n\nUsername: ${cekapi2.username}\nTotal Request: ${cekapi2.requests}\nRequest Hari ini: ${cekapi2.today}\nTipe Akun: ${cekapi2.account_type}\nExpired: ${cekapi2.expired}`
                await praz.reply(from, `${cekapi3}`, id)
                //await limitAdd(serial) 
                break*/
            // play lagu
            case prefix+'play':
                if (!isOwner) return praz.reply(from, 'Maaf, fitur ini sedang dalam perbaikan', id)
                break
                /*await praz.reply(from, '_tunggu sebentar_', id)
                const serplay = body.slice(6)
                const music_yt23 = await axios.get(`http://api.lolhuman.xyz/api/ytplay?apikey=${lol}&query=${serplay}`)
                try {
                const { title, uploader, duration, view, like, thumbnail, dislike, audio } = music_yt23.data.result.info
                const cpt23 = `   *LAGU DI TEMUKAN* ✨\n
💠 Title✨: ${title}
💠 Upload✨: ${uploader}
💠 Duration✨: ${duration}
💠 Views✨: ${view}
💠 Like✨ : ${like}
💠 Dislike✨ : ${dislike}

   LAGU SEDANG DI KIRIM`
                await praz.sendFileFromUrl(from, thumbnail, audio, 'ytmp.jpg', `${cpt23}`, id)
                const pree3 = await fetch(audio[0].link);
                const buffer = await pree3.buffer();
                await fs.writeFile('./media/audio/audio3.mp3', buffer)
                await praz.sendFile(from, './media/audio/audio3.mp3', 'lagu.mp3', '', id)
                fs.unlinkSync(`./media/audio/audio3.mp3`)
                } catch {
                praz.reply(from, 'Error', id)
                }
            break*/
        
        case prefix+'translate':
        case prefix+'tr':
            if (args.length === 1) return praz.reply(from, 'Format salah! Contoh #translate id where you from?\nitu adalah terjemah inggris ke indonesia\nuntuk terjemah ke lainya ketik #bahasa dan ganti kode negara yg kamu inginkan.', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var textai = body.slice(11+codelang.length);
                translatte(textai, {to: codelang}).then(res => {
                    praz.sendText(from,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     praz.reply(from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            break
        case prefix+'ramalpasangan':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah *#ramalpasangan [kamu|pasangan]*\nContoh : *#ramalpasangan pras|ansellma*', id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            praz.reply(from, mess.wait, id)
            const kamu = argz[0]
            const pacar = argz[1]
            const rpmn = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn2 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn3 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn4 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn5 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn6 = rate[Math.floor(Math.random() * (rate.length))]
            const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`
            praz.reply(from, rjh2, id)
            limitAdd(serial)
            } else {
            await praz.reply(from, 'Wrong Format!', id)
            }
            break
        case prefix+'artinama':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
                if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *${prefix}artinama [ Query ]*\nContoh : *${prefix}artinama Praz*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return praz.reply(from, resp.data.error, id)
            const anm2 = `*「 ARTI NAMA 」*\n\n• Artinama : ${resp.data.result.hasil}`
            praz.reply(from, anm2, id)
            await limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                praz.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
            case prefix+'tod':
                //if(isReg(obj)) return
                //if(cekumur(cekage)) return
                if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    const sliin = "https://i.postimg.cc/PxXzPpqv/tod.png"
                    const mmkkk = `     *「 𝐓𝐑𝐔𝐓𝐇 𝐎𝐑 𝐃𝐀𝐑𝐄 」*\n\n*Truth or Dare kali ini ditujukan kepada semua member Grub* \n\n_Tolong Reply Pesan ini dengan #truth atau #dare_`
                    praz.sendFileFromUrl(from, sliin, 'ddas.jpg', mmkkk, id)
                    break
                case prefix+'truth':
                //if(isReg(obj)) return
                //if(cekumur(cekage)) return
                if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (!quotedMsg) return praz.reply(from, 'Reply pesannya!', id)
                    praz.reply(from, `${truth()}`, id)
                    break
                case prefix+'dare':
                //if(isReg(obj)) return
                //if(cekumur(cekage)) return
                if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    if (!quotedMsg) return praz.reply(from, 'Reply pesannya!', id)
                    praz.reply(from, `${dare()}`, id)
                    break

            case prefix+`listvn`:
                case prefix+`vnlist`:
                await praz.reply(from, `_Menampilkan List VN :_
*BACA PERATURAN DIBAWAH-!!*

Sementara Belum Ada...
            
Untuk mencobanya, cukup ketik kalimat dengan berisikan salah satu kata diatas. _(bukan nomornya)_\n\nUntuk Request Menambah Suara silahkan Chat #owner\n\nGAUSAH KETIK #listvn setiap kali mau dengerin vn-nya.`, id)
            
            break
        
        case prefix+'caklontong':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return praz.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Deskripsi : ${resp.data.result.desk}\n➸ Poin : ${resp.data.result.poin}`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            praz.reply(from, anm2, id)
            praz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            praz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            praz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            praz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                praz.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
         case prefix+'tebakgambar':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return praz.reply(from, resp.data.error, id)
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            praz.sendFileFromUrl(from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
            praz.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            praz.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            praz.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            praz.reply(from, jwban, id)
            limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                praz.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
        case prefix+'pantun':
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                praz.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            limitAdd(serial)
            .catch(() => {
                praz.reply(from, 'Ada yang Error!', id)
            })
            break
            case prefix+'motivasi':
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            fetch('https://raw.githubusercontent.com/VideFrelan/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                praz.reply(from, randommotivasi, id)
            })
            limitAdd(serial)
            .catch(() => {
                praz.reply(from, 'Ada yang Error!', id)
            })
            reak
            /*case prefix+'pantun':
                //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                if(isReg(obj)) return
                if(cekumur(cekage)) return
                //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const pantun = await axios.get('http://api.lolhuman.xyz/api/random/pantun?apikey=ab8c28cd19e81e91706a242d')
                praz.reply(from, `${pantun.data.result}`, id)
                //await limitAdd(serial)
                break*/
            case prefix+'fakta':
                //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                //if(isReg(obj)) return
                if (isLimit(serial)) return praz.reply(from, `Maaf, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const fakta = await axios.get('http://api.lolhuman.xyz/api/random/faktaunik?apikey=ab8c28cd19e81e91706a242d')
                praz.reply(from, `${fakta.data.result}`, id)
                await limitAdd(serial)
                break
            case prefix+'bucin':
                case prefix+'katabucin':
                //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                //if(isReg(obj)) return
                if (isLimit(serial)) return praz.reply(from, `Maaf, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                const bucin = await axios.get(`https://api.lolhuman.xyz/api/random/bucin?apikey=${lol}`)
                praz.reply(from, `${bucin.data.result}`, id)
                await limitAdd(serial)
            break
        
                case prefix+'katabijak':
                    //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
                    //if(isReg(obj)) return
                    //if(cekumur(cekage)) return
                    //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    if (isLimit(serial)) return praz.reply(from, `Maaf, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                    const bijak = await axios.get('http://api.lolhuman.xyz/api/random/katabijak?apikey=ab8c28cd19e81e91706a242d')
                    praz.reply(from, `${bijak.data.result}`, id)
                    await limitAdd(serial)
                    break
         
        case prefix+'draw1':
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const datapencil = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotopencil = await uploadImages(datapencil, `fotoProfilWt.${sender.id}`)
                    await praz.reply(from, 'tunggu sebentar', id)
                    await praz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${fotopencil}`, 'dah jadi', 'nih om, bilang makasih lah', id)
                    console.log('Success sending Pencil image!')
                    await limitAdd(serial)
                } else {
                    await praz.reply(from, 'Kirimkan Gambar dengan #draw1\n\nAtau Reply Gambar yang sudah terkirim dengan #draw1', id)
                }
            break
              case prefix+'draw2':
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    const encryptMediaWt = isQuotedImage ? quotedMsg : message
                    const datapencil2 = await decryptMedia(encryptMediaWt, uaOverride)
                    const fotopencil2 = await uploadImages(datapencil2, `fotoProfilWt.${sender.id}`)
                    await praz.reply(from, 'tunggu sebentar', id)
                    await praz.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/pencil/?urlgbr=${fotopencil2}`, 'dah jadi', 'nih om, bilang makasih lah', id)
                    console.log('Success sending Pencil image!')
                } else {
                    await praz.reply(from, 'Kirimkan Gambar dengan #draw2\nAta\nu Reply Gambar yang sudah terkirim dengan #draw2', id)
                }
            break
    case prefix+'mememaker':
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                praz.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then(() => {
                        praz.reply(from, 'ini woy meme lu',id)
                    })
                    .catch(() => {
                        praz.reply(from, 'Ada yang error!')
                    })
            } else {
                await praz.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption.\ncontoh: ${prefix}mememaker teks atas | teks bawah`, id)
            }
            break
    case prefix+'takestick':
        case prefix+'colong':
                //if (!isRegistered) return await erdwpe.reply(from, msg3.notRegistered(pushname), id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        //if (!query.includes('|')) return await praz.reply(from, `Untuk mengubah watermark sticker, reply sticker dengan caption ${prefix}takestick package_name | author_name\n\nContoh: ${prefix}takestick PUNYA GUA | videfikri`, id)
                        //await praz.reply(from, msg.wait(), id)
                        const packnames = query.substring(0, query.indexOf('|') - 1)
                        const authors = query.substring(query.lastIndexOf('|') + 2)
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await praz.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
                        .catch(async (err) => {
                            console.error(err)
                            await praz.reply(from, 'Error!', id)
                        })
                    } else {
                        await praz.reply(from, `Reply sticker yang ingin dicolong dengan caption ${prefix}takestick package_name | author_name\n\nContoh: ${prefix}takestick punya gua | videfikri`, id)
                    }
        break

         
             /*case prefix+'ramadhan':
                const otwpuasa = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=13&bulan=4')
                praz.reply(from, `Puasa Ramadhan 2021 sudah berjalan :\n\n${otwpuasa.data.result}`, id)
                break*/

 
        
        case prefix+'resepmasakan':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return praz.reply(from, 'Kirim perintah *#resepmasakan [optional]*\nContoh *#resepmasakan rawon*', id)
            argz= body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
➸ *Judul:* ${title}
➸ *Bahan:* ${bahan}
➸ *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            praz.sendImage(from, base64, title, rmk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             praz.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break

           // STALKER MENU //

        case prefix+'twitterstalk':
        case prefix+'twtstalk':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return praz.reply(from, 'Kirim perintah *#twtstalk @username*\nContoh *#twtstalk @miakhalifah*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbars.herokuapp.com/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*

➸ *Nama:* ${name}
➸ *Nama Panjang:* ${full_name}
➸ *Jumlah Pengikut:* ${followers_count}
➸ *Jumlah Postingan:* ${status_count}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            praz.sendImage(from, base64, name, twstalk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             praz.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
        case prefix+'igstalk':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return praz.reply(from, 'Kirim perintah *#igstalk @username*\nContoh *#igstalk duar_amjay*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://praz-api.herokuapp.com/api/stalk?username=' + istalk)
            const { Biodata, Jumlah_Followers, Jumlah_Following, Profile_pic, Jumlah_Post, Name, Username } = istalk2.data
            const istalk3 = `*User Ditemukan!*

➸ *Username:* ${Username}
➸ *Nama:* ${Name}
➸ *Bio:* ${Biodata}
➸ *Mengikuti:* ${Jumlah_Following}
➸ *Pengikut:* ${Jumlah_Followers}
➸ *Jumlah Postingan:* ${Jumlah_Post}`
            
            const pictk = await bent("buffer")(Profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            praz.sendImage(from, base64, Username, istalk3)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             praz.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break
        case prefix+'tiktokstalk':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1)  return praz.reply(from, 'Kirim perintah *#tiktokstalk @username*\nContoh *#tiktokstalk @duar_amjay*', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Judul:* ${title}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Like*: ${like_count}
➸ *Jumlah Postingan:* ${video_post}
➸ *Deskripsi:* ${description}
➸ *Link:* ${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            praz.sendImage(from, base64, title, tiktod)
            await limitAdd(serial)
            } catch (err) {
             console.error(err.message)
             await praz.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             praz.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case prefix+'':
            //if(isReg(obj)) return
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isSimi) return praz.reply(from, 'command/Perintah Simi belum di aktifkan di group ini!', id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah # <teks>\nContoh : # halo')
            const simi = body.slice(2)
            const simi1 = await axios.get(`https://api.simsimi.net/v1/?text=${simi}&lang=id`)
            const simi2 = simi1.data
            const similog = simi1.data.success
            const simi3 = `${simi2.success}`
            await praz.reply(from, `${simi3}`, id)
            console.log(simi)
            console.log(similog)
            break
        case prefix+`waktusolat`:
            case prefix+`waktusholat`:
            praz.reply(from, 'Angka yang tertera setelah kata waktusholat artinya sama dengan Menit', id)
            //contoh penggunaan = #waktusolat 4 (Grup ditutup selama 4 menit dan dibuka kembali) 
            if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const taim = body.slice(12)
            const taime = (taim * 60000)
            praz.setGroupToAdminsOnly(groupId, true)
            await praz.reply(from, `Maaf, Grub ditutup dulu karena sudah Waktunya Sholat bagi yang beragama Islam.\n\nTerimakasih atas toleransinya.`, id)
            await sleep(`${taime}`)
            praz.setGroupToAdminsOnly(groupId, false)
            praz.sendText(from, `Grub telah dibuka kembali, sudah Sholat kan? kalau belum ya terserah. Dosa ditanggung sendiri\n\nYuk Ramein GC lagi!`)
        break   
        
        case prefix+'ig': 
        case prefix+'instagram':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *#ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *#readme*`)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return praz.reply(from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
            await praz.reply(from, mess.wait, id);
            instagram(args[1]).then(async(res) => {
                let username = res.owner_username;
                for (let i = 0; i < res.post.length; i++) {
                if (res.post[i].type == "image") {
                        await praz.sendFileFromUrl(from, res.post[i].urlDownload, "ig.jpg", `*「 INSTAGRAM 」*\n\n➸ *Username* : ${username}\n➸ *Tipe* : Image/Jpg`, id);
                        limitAdd(serial)
                    } else if (res.post[i].type == "video") {
                        await praz.sendFileFromUrl(from, res.post[i].urlDownload, "ig.mp4", `*「 INSTAGRAM 」*\n\n➸ *Username* : ${username}\n➸ *Tipe* : Video/MP4`);
                        limitAdd(serial)
                    }
                }
            }).catch((err) => {
                console.log(err);
                praz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'fb':
            case prefix+'fbdl':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *#fb [ Link Fb ]*\nContoh : *#fb https://www.facebook.com/24609282673/posts/10158628585367674/*`, id)
            praz.reply(from, mess.wait, id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*「 FACEBOOK DOWNLOADER 」*\n➸ *Aplikasi*: Facebook\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                praz.sendFileFromUrl(from, VideoUrl, `Facebook.mp4`, epbe2, id)
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                praz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'waktu':
            //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            await praz.sendText(from, `Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
            await limitAdd(serial)
            break
            case prefix+'tiktok':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah #tiktok [linkTiktok]\nContoh : *#tiktok https://vt.tiktok.com/yqyjPX/*', id)
            praz.reply(from, mess.wait, id)
            tiktok(args[1]).then(async(res) => {
                let { video, title, image, desk, dibuat, duration } = await res
                let ttiktok = `「 TIKTOK DOWNLOADER 」\n\n➸ Judul : ${title}\n➸ Deskripsi : ${desk}\n➸ Durasi : ${duration}\n➸ Dibuat : ${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                praz.sendFileFromUrl(from, image, 'thumb.jpg', ttiktok, id)
                await praz.sendFileFromUrl(from, video, `${title}.mp4`, '', id).catch(() => praz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                praz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break

            case prefix+'transfer':
                praz.reply(from, 'Saldo Sukses Terkirim! Silahkan Cek Mutasi Rekening anda.', id)
                break
                case prefix+'kirimpulsa':
                praz.reply(from, 'Pulsa Sukses Terkirim! Silahkan Cek Jumlah Pulsa anda.', id)
                break
            case prefix+'tiktoknowm': // by: VideFrelan
            case prefix+'ttnowm':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (!isUrl(url) && !url.includes('tiktok.com')) return await praz.reply(from, 'cara menggunakannya #tiktoknowm linktiktoknya', id)
                const urltik = body.slice(12)
                const tiktok = await axios.get(`http://api.lolhuman.xyz/api/tiktok?apikey=${lol}&url=${urltik}`)
                const tikto1 = tiktok.data.result
                const rtiktok = `➸ *username*: ${tikto1.author.username}\n➸ *judul*: ${tikto1.title}\n➸ *description*: ${tikto1.description}`   
                await praz.sendFileFromUrl(from, `${tikto1.link}`, '', rtiktok, id)
                await limitAdd(serial) 
                break
            
        case prefix+'smule':
            //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah *#smule [linkSmule]*\nContoh : *#smule https://www.smule.com/p/767512225_3062360163*', id)
            praz.reply(from, mess.wait, id)
            smule(args[1]).then(async(res) => {
                let { Type, title, url, image } = await res
                let tsmule = `*「 SMULE DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ *Type:* ${Type}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                praz.sendFileFromUrl(from, image, 'thumb.jpg', tsmule, id)
                await praz.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => praz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                praz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'starmaker':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
           // if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah *#starmaker [linkStarmaker]* untuk contoh silahkan kirim perintah *#readme*')
            praz.reply(from, mess.wait, id)
            starmaker(args[1]).then(async(res) => {
                let { image, desc, url, title } = await res
                let tstarmaker = `*「 STARMAKER DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                praz.sendFileFromUrl(from, image, 'thumb.jpg', tstarmaker, id)
                await praz.sendFileFromUrl(from, url, `${title}.mp3`, '', id).catch(() => praz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                praz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case prefix+'twitter':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *#twitter [ Link Twitter ]* untuk contoh silahkan kirim perintah *#readme*`)
            praz.reply(from, mess.wait, id)
            twitter(args[1]).then(async(res) => {
                let { desk, urlVideo } = await res
                let ttwitter = `*「 TWITTER DOWNLOADER 」*\n\n➸ *Aplikasi:* Twitter\n➸ *Deskripsi:* ${desk}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                await praz.sendFileFromUrl(from, urlVideo, `twit.mp3`, ttwitter, id).catch(() => praz.reply(from, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                praz.reply(from, `Maaf, Terjadi Kesalahan`, id)
            })
            break
            
        case prefix+'quotemaker':
           // if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 4) {
                praz.reply(from, mess.wait, id)
                const quotes = argz[1]
                const author = argz[2]
                const theme = argz[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    limitAdd(serial)
                    praz.sendFile(from, amsu, 'quotesmaker.jpg','neh...').catch(() => {
                       praz.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                praz.reply(from, 'Usage: \n#quotemaker |teks|wm|theme\n\nEx :\n#quotemaker |ini contoh|bicit|random', id)
            }
            break
        case prefix+'nulis':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah #nulis [teks], contoh #nulis aku bukan boneka\n\ndan jangan gunakan Emote atau Karakter selain Huruf dan Angka', id)
            const ngettik = body.slice(7)
                     await praz.sendFileFromUrl(from, `https://api.lolhuman.xyz/api/nulis?apikey=${lol}&text=${ngettik}`, id)        
                     await limitAdd(serial) 
            break
            case prefix+'bass':
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (args.length !== 1) return await praz.reply(from, `Reply audionya lalu ketik ${prefix}bass 40 (bebas)`, id)
                    await praz.reply(from, 'Bentar kak Sedang diproses..', id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await praz.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    }) 
                } else {
                    await praz.reply(from, `Format Salah kak.`, id)
                } await limitAdd(serial)
            break   
            case prefix+'totitle':
            case prefix+'carilagu':
                if (isMedia && isAudio || isQuotedAudio) {
                    await praz.reply(from, 'Sedang Mencari data..', id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    fs.writeFile(`./temp/audio.mp3`, mediaData)
                    await sleep(5000)
                    const sampleq = fs.readFileSync(`./temp/audio.mp3`)
                    acr.identify(sampleq).then(metadata => {
                    console.log(metadata.metadata.music[0]);
                    praz.sendText(from,`  「 *Informasi Lagu Ditemukan* 」
----------------------------------
❐ Judul Lagu : ${metadata.metadata.music[0].title} 
❐ Artis : ${metadata.metadata.music[0].artists[0].name} 
❐ Album : ${metadata.metadata.music[0].album.name}
❐ Rilis : ${metadata.metadata.music[0].release_date}
----------------------------------`)
                })      
                    setTimeout(() => {
                                    fs.unlinkSync(`./temp/audio.mp3`)
                                }, 30000)
                }
         break      
            case prefix+'tomp3':
                    if ((isMedia || isQuotedVideo || isQuotedFile)) {
                        praz.reply(from, mess.wait, ('mp4', 'mp3', 'Meng-ekstrak audio dari video'), id)
                        const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
                        const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
                        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                        const mediaData = await decryptMedia(encryptMedia)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                        console.log(color('[fs]', 'green'), `Downloading media into '${fileInputPath}'`)
                        fs.writeFile(fileInputPath, mediaData, err => {

                            // ffmpeg -y -t 5 -i <input_file> -vf "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease" -qscale 100 <output_file>.webp
                            ffmpeg(fileInputPath)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    console.log(color('[FFmpeg]', 'green'), commandLine)
                                })
                                .on('progress', function (progress) {
                                    console.log(color('[FFmpeg]', 'green'), progress)
                                })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    // fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                    // if (err) return praz.sendText(from, `Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                                    praz.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                    // })
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) {
                                            console.log(color('[ERROR]', 'red'), e)
                                        }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                    limitAdd(serial)
                break
            
        case prefix+'inu':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            praz.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Inu')
            await limitAdd(serial)
            break
        case prefix+'qrcode':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if(!args.lenght >= 2) return
            let qrcodes = body.slice(8)
            await praz.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
            await limitAdd(serial)
            break
        /*case prefix+'quotes':
            case prefix+'quote':
                case prefix+'kata':
            //if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const quotez2 = await axios.get(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
            praz.reply(from, `- *Quotes* : ${quotez2.data.quotes}\n- *Author* : ${quotez2.data.by}`, id)
            //await limitAdd(serial)
            break*/
            case prefix+'kata' :
                case prefix+'katakata' :
        case prefix+'quote' :
            case prefix+'quotes' :
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await limitAdd(serial)
            const quoteprz = await axios.get(`hhttps://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
            praz.reply(from, `${quoteprz.data.result.quote}\n\n${quoteprz.data.result.by}`, id)
            break
            case prefix+'katadilan':
                case prefix+'quotesdilan':
                    case prefix+'quotedilan':
            //if(isReg(obj)) return
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const quotez3 = await axios.get(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lol}`)
            praz.reply(from, `${quotez3.data.result}`, id)
            //await limitAdd(serial)
            break
        /*case prefix+'cekapi':
            const cekapikey = axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
            praz.reply(from, `${cekapikey.result}`, id)
            break*/

            case 'cek':
                if(!isOwner) return praz.reply(from, `Halo kak, langsung ketik #menu aja ya`, id)
                if (args.length == 0) return praz.reply(from, `ini digunakan untuk memeriksa banyaknya request apikey`, id)
                const cekapi = body.slice(8)
                const cekapi1 = await axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lol}`)
                const cekapi2 = cekapi1.data.result
                const cekapi3 = `Cek Data APIkey di lolhuman.xyz\n\nUsername: ${cekapi2.username}\nTotal Request: ${cekapi2.requests}\nRequest Hari ini: ${cekapi2.today}\nTipe Akun: ${cekapi2.account_type}\nExpired: ${cekapi2.expired}`
                await praz.reply(from, `${cekapi3}`, id)
                //await limitAdd(serial) 
                break

        // MENU ISLAMI //

        case prefix+'syahadat':
            case prefix+'sahadat':
            await praz.reply(from, `Dua Kalimat Syahadat\n\nأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهِ\n"Asyhadu an laa ilaaha illallaahu, wa asyhaduanna muhammadar rasuulullah".\nArtinya :\n"Aku bersaksi bahwa tidak ada Tuhan melainkan Allah. Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah".`)
        break
        case prefix+'listkota':
            //if(isReg(obj)) return
            if (args.length === 1) return praz.reply(from, `Maaf, fitur ini sedang dalam perbaikan`, id)
            /*const listDaerah = await axios.get(`http://api.lolhuman.xyz/api/sholat/kota?apikey=${lol}`)
            praz.reply(from, `${listDaerah.data.result}`, id)
            await limitAdd(serial)*/
            break


        case prefix+'jadwalsholat':
                if (args.length == 0) return praz.reply(from, `Untuk mencari jadwal sholat\n\nPenggunaan: #jadwalsholat surabaya`, id)
                const sholat = body.slice(15)
                const sholat1 = await axios.get(`https://api.xteam.xyz/jadwalsholat?kota=${sholat}&APIKEY=${xteam}`)
                const sholat2 = sholat1.data
                const sholat3 = `🕌Menampilkan Jadwal Sholat🕌\n\nWilayah: ${sholat2.Kota}\nTanggal: ${sholat2.Tanggal}\n\nSubuh: ${sholat2.Subuh}\nDzuhur: ${sholat2.Dzuhur}\nAshar: ${sholat2.Ashar}\nMaghrib: ${sholat2.Magrib}\nIsya: ${sholat2.Isha}`
                await praz.reply(from, `${sholat3}`, id)
                //await limitAdd(serial) 
                break
                case prefix+'sholat':
                if (args.length == 0) return praz.reply(from, `Untuk mencari jadwal sholat\n\nPenggunaan: #jadwalsholat surabaya`, id)
                const shlt = body.slice(8)
                const shlt1 = await axios.get(`https://api.xteam.xyz/jadwalsholat?kota=${shlt}&APIKEY=${xteam}`)
                const shlt2 = shlt1.data
                const shlt3 = `🕌Menampilkan Jadwal Sholat🕌\n\nWilayah: ${shlt2.Kota}\nTanggal: ${shlt2.Tanggal}\n\nSubuh: ${shlt2.Subuh}\nDzuhur: ${shlt2.Dzuhur}\nAshar: ${shlt2.Ashar}\nMaghrib: ${shlt2.Magrib}\nIsya: ${shlt2.Isha}`
                await praz.reply(from, `${shlt3}`, id)
                //await limitAdd(serial) 
                break
        case prefix+'quotesislami':
            case prefix+'quoteislami':
            case prefix+'katashallu':
                case prefix+'katashollu':
                    case prefix+'katarindi':
                        case prefix+'kataindah':
                            case prefix+'katalia':
            //if(isReg(obj)) return
            //if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
            break
            case prefix+'asmaulhusna':
                await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
                /*if (args.length == 0) return praz.reply(from, `ini digunakan untuk memeriksa banyaknya request apikey`, id)
                const asmaulhusna = body.slice(13)
                const asmaulhusna = await axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lol}`)
                const asmaulhusna2 = asmaulhusna.data.result
                const asmaulhusna3 = `☪Random 99 Asmaul Husna☪\n\nNomor: ${asmaulhusna2.index}\nLatin: ${asmaulhusna2.latin}\nArab: ${asmaulhusna2.ar}\nIndonesia: ${asmaulhusna2.id}\nInggris: ${asmaulhusna2.en}`
                await praz.reply(from, `${asmaulhusna3}`, id)
                //await limitAdd(serial)*/ 
                break
            case prefix+'niatsholat':
                await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
                /*if (args.length == 0) return praz.reply(from, `ini digunakan untuk memeriksa banyaknya request apikey`, id)
                const niatsholat = body.slice(12)
                const niatsholat = await axios.get(`https://api.lolhuman.xyz/api/niatsholat/${args[1]}?apikey=${lol}`)
                const niatsholat1 = niatsholat.data.result
                const niatsholat2 = `Berikut adalah Bacaan Niat Sholat ${niatsholat1.name}\n\nArab: ${niatsholat1.ar}\nLatin: ${niatsholat1.latin}\nArab: ${niatsholat1.ar}\nIndonesia: ${niatsholat1.id}`
                await praz.reply(from, `${niatsholat2}`, id)*/
                //await limitAdd(serial) 
            break
            case prefix+'ayatkursi':
                await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
                break
            case prefix+'kuisislami':
                await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
                break
            case prefix+'hadis':
                await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
            break
            case prefix+'quran':
                await praz.reply(from, `Mohon Maaf ya kak, Fitur ini belum siap nihh! Tungguin yahh😇`, id)
                //if(isReg(obj)) return
                //if(cekumur(cekage)) return
                //if (isOwner) return praz.reply(from, 'Maaf, fitur ini sedang dalam perbaikan', id)
                //if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                //if (args.length === 1) return praz.reply(from, `Maaf, fitur ini sedang dalam perbaikan`, id)
                //if (args.length === 1) return praz.reply(from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*#quran* [ Urutan Surat ]\nContoh :\n*#quran 1*`, id)
                /*const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
                const quraan = await axios.get(qura)
                const quraann = quraan.data
                let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
                await praz.reply(from, `${hasqu}`, id).catch((e) => praz.reply(from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, id))
                await limitAdd(serial)*/
                break
            case prefix+'listsurah': // ARUGAZ
                //if(isReg(obj)) return
                //if(cekumur(cekage)) return
                //if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                try {
                    axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                    .then((response) => {
                        let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                        let nmr = 1
                        for (let i = 0; i < response.data.data.length; i++) {
                            hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                            nmr++
                                }
                            hehex += '___________________________'
                        praz.reply(from, hehex, id)
                    })
                } catch(err) {
                    praz.reply(from, err, id)
                }
                break
            case prefix+'infosurah': // ARUGAZ
            //if(isReg(obj)) return
                //if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length == 1) return praz.reply(from, `Kirim perintah *#infosurah [ Nama Surah ]*\nContoh : *#infosurah al-fatihah*`, message.id)
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                    var { data } = responseh.data
                    var idx = data.findIndex(function(post, index) {
                    if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                        return true;
                    });
                    try {
                        var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                        pesan = pesan + "➸ *Nama* : "+ data[idx].name.transliteration.id + "\n" + "➸ *Asma* : " +data[idx].name.short+"\n"+"➸ *Arti* : "+data[idx].name.translation.id+"\n"+"➸ *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"➸ *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"➸ *Keterangan* : "+data[idx].tafsir.id
                        pesan += '\n\n___________________________'
                        praz.reply(from, pesan, message.id)
                        limitAdd(serial)
                    }catch{
                        praz.reply(from, 'Data tidak ditemukan, atau nama surah salah', id)
                    }
                break
            case prefix+'tafsir': // ARUGAZ
                if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length == 1) return praz.reply(from, `Kirim perintah *#tafsir [ Nama Surah ] [ Ayat ]*\nContoh : *#tafsir al-fatihah 2*`, message.id)
                    var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                    var {data} = responsh.data
                    var idx = data.findIndex(function(post, index) {
                    if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                        return true;
                    });
                try{
                    nmr = data[idx].number
                    if(!isNaN(nmr)) {
                    var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                        var {data} = responsih.data
                        pesan = ""
                        pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                        pesan = pesan + data.text.arab + "\n\n"
                        pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                        pesan += '\n\n___________________________'
                        praz.reply(from, pesan, message.id)
                        limitAdd(serial)
                    }
                }catch{
                    praz.reply(from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', id)
                }
                break

                // END OF MENU ISLAMI //
        case prefix+'lirik':
            if (!isOwner) return praz.reply(from, 'Maaf, fitur ini sedang dalam perbaikan', id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return praz.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            praz.reply(from, lirik, id)
            await limitAdd(serial)
            break
        case prefix+'chord':
            if(!isOwner) return praz.reply(from, `Maaf! Fitur ini sedang dalam perbaikan, coba lainya ya!`, id)
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return praz.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return praz.reply(from, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await axios.get(`http://api.lolhuman.xyz/api/chord?apikey=${lol}&query=${query__}`)
            if (chord.data.error) return praz.reply(from, chord.data.error, id)
            praz.reply(from, chord.data.result, id)
            await limitAdd(serial)
            break

        // ADMIN & OWNER
        case 'cekprefix':
            case 'prefix':
            praz.reply(from, `PREFIX YANG SAAT INI DIGUNAKAN *「* ${prefix} *」*`)
            break
        case prefix+'setprefix':
            if(!isOwner) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Pemilik Bot!`, id)
            if (args.length === 1) return praz.reply(from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, id)
            prefix = args[1]
            praz.sendText(from, `Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
            break
        case prefix+'addbadword':
            //if (!isAdmin) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Admin Whangsaff Bot!`, id)
            if (!args.length >= 1) return praz.reply(from, `Masukkan kata kasar yang akan di blacklist `, id) 
            const word = body.slice(12)
            var cek = dbbadword.includes(word);
            if(cek){
                return praz.reply(from, `Badword Sudah Ada Di Database`, id)
            } else { 
                dbbadword.push(word)
                fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                praz.reply(from, `Success Menambahkan Blacklist Badword\nTotal Data Badword Sekarang : *${dbbadword.length - 1}*`, id)
            }
            break
        case prefix+'delbadword':
            if (!isOwner) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Pemilik Bot!`, id)
                const delbd = dbbadword.indexOf(body.slice(12))
                dbbadword.splice(delbd, 1)
                fs.writeFileSync('./lib/database/katakasar.json', JSON.stringify(dbbadword))
                praz.reply(from, `Success Menghapus Badword!`, id)
            break
        case prefix+'listbadword':
            if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan didalam Grub`, id)
                const bad = fs.readFileSync('./lib/database/katakasar.json')
                const liste = JSON.parse(bad)
                let listz = '*「 LIST BADWORD 」*\n'
                listz += `*Total : ${liste.length}*\n`
                let nomre = 1
                     for (let i = 0; i < liste.length; i++){
                        listz += `\n*${nomre}.* ${liste[i]}`
                        nomre++
                    }
                    praz.sendText(from, listz) 
                    break
        case prefix+'bc': // KASIH CREDIT DONG KALO COPAS
            if (!isOwner) return praz.reply(from, `Perintah ini hanya untuk Pemilik Bot!`, id)
                bctxt = body.slice(4)
                txtbc = `*「 PESAN SIARAN BOT 」*\n\n${bctxt}`
                const semuagrup = await praz.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await praz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) praz.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    praz.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await praz.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) praz.sendText(grupnya, txtbc)
                    }
                            praz.reply('Broadcast Success!')
                }
                break
                case prefix+'afk':
                    if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
                    if (isAfkOn) return await praz.reply(from, menuId.afkOnAlready(), id)
                    //const reason = q ? q : 'Nothing'
                    addAfkUser(sender.id, time, reason)
                    await praz.reply(from, menuId.afkOn(pushname, reason), id)
                break
        case prefix+'adminlist':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await praz.sendTextWithMentions(from, mimin)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await praz.sendTextWithMentions(from, `Owner Group : @${Owner_}`)
            break
        case prefix+'otagall': // FOR OWNER & ADMIN Martin Bot
        case prefix+'omentionall':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner, !isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Pemilik Bot', id)
            const groupMek = await praz.getGroupMembers(groupId)
            let heho = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += '╠➥'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '╚═〘 Nussa & Rarra Bot 〙'
            await sleep(2000)
            await praz.sendTextWithMentions(from, heho)
            break
        case prefix+'tagall': // FOR GROUP ADMINS
        case prefix+'mentionall':
            if (!isAdmin) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin Bot!', id)
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            const groupMem = await praz.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 Maartin Bot 〙'
            await sleep(2000)
            await praz.sendTextWithMentions(from, hehe)
            break
        case prefix+'edotensei':
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Fitur untuk menghapus member lalu menambahkan member kembali,kirim perintah #edotensei @tagmember', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (ownerNumber.includes(mentionedJidList[i])) return praz.reply(from, mess.error.Ki, id)
                await praz.removeParticipant(groupId, mentionedJidList[i])
                await sleep(3000)
                await praz.addParticipant(from,`${mentionedJidList}`)
            } 
            break
        case prefix+'ekickall':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Pemilik Bot!', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await praz.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await praz.removeParticipant(groupId, allMem[i].id)
                }
            }
            praz.reply(from, 'Success kick all member', id)
            break
        case prefix+'okickall':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Pemilik Bot!', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi Admin', id)
            const allMeq = await praz.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await praz.removeParticipant(groupId, allMeq[i].id)
                }
            }
            praz.reply(from, 'Sukses Membantai semua Member Group', id)
            break
        case prefix+'kickall':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await praz.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await praz.removeParticipant(groupId, allMek[i].id)
                }
            }
            praz.reply(from, 'Sukses Membantai semua Member Group', id)
            break
        case prefix+'leaveall':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Pemilik Bot!', id)
            const allChats = await praz.getAllChatIds()
            const allGroups = await praz.getAllGroups()
            for (let gclist of allGroups) {
                await praz.sendText(gclist.contact.id, `Maaf bot sedang dalam pembersihan, total chat aktif : ${allChats.length}`)
                await praz.leaveGroup(gclist.contact.id)
            }
            praz.reply(from, 'Succes leave all group!', id)
            break
        case prefix+'clearall':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Pemilik Bot!', id)
            const allChatz = await praz.getAllChats()
            for (let dchat of allChatz) {
                await praz.deleteChat(dchat.id)
            }
            praz.reply(from, 'Succes clear all chat!', id)
            break
        case prefix+'oadd':
            const orang = args[1]
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return praz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isOwner, !isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await praz.addParticipant(from,`${orang}@c.us`)
            } catch {
                praz.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'add':
            const orgh = body.slice(5)
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return praz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await praz.addParticipant(from,`${orgh}@c.us`)
            } catch {
                praz.reply(from, mess.error.Ad, id)
            }
            break
        case prefix+'okick':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Owner Whangsaff Bot', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#okick* @tagmember', id)
            await praz.sendText(from, `Lapor Komandan! Perintah Owner Tampan diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return praz.reply(from, mess.error.Sp, id)
                await praz.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'kick':
            case prefix+'buang':
            case prefix+'tendang':
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await praz.sendText(from, `Lapor Komandan! Perintah diterima, menendang:\n${mentionedJidList.join('\ndari Grub')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, groupAdmins).includes(mentionedJidList[i])) return praz.reply(from, mess.error.Sp, id)
                await praz.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'oleave':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Admin Whangsaff Bot', id)
            await praz.sendText(from,'Bot DIPERINTAHKAN KELUAR OLEH OWNER!!').then(() => praz.leaveGroup(groupId))
            break
        case prefix+'leave':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await praz.sendText(from,'Sayonara Guisss. Sampai jumpa lagi!').then(() => praz.leaveGroup(groupId))
            break
        case prefix+'opromote':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Admin Whangsaff Bot', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return praz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return praz.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await praz.promoteParticipant(groupId, mentionedJidList[0])
            await praz.sendTextWithMentions(from, `Lapor Komandan! Perintah Owner diterima, menobatkan @${mentionedJidList[0]} sebagai Admin. Selamat!`)
            break
        case prefix+'promote':
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return praz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return praz.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await praz.promoteParticipant(groupId, mentionedJidList[0])
            await praz.sendTextWithMentions(from, `Lapor Komandan! Perintah diterima, menobatkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case prefix+'odemote':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Admin Whangsaff Bot', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return praz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return praz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await praz.demoteParticipant(groupId, mentionedJidList[0])
            await praz.sendTextWithMentions(from, `Lapor Komandan! Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]} dari admin`)
            break
        case prefix+'demote':
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return praz.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return praz.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return praz.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await praz.demoteParticipant(groupId, mentionedJidList[0])
            await praz.sendTextWithMentions(from, `Lapor Komandan! Perintah diterima, menghapus jabatan @${mentionedJidList[0]} dari Admin. Mampus Lu!`)
            break
        case prefix+'join':
            if (args.length === 1) return praz.reply(from, 'Hanya Owner yang bisa memasukan Bot ke dalam Grup!', id)
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Owner Bot', id)
            const link = body.slice(6)
            const tGr = await praz.getAllGroups()
            const minMem = 5
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await praz.inviteInfo(link)
            if (!isLink) return praz.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 256) return praz.reply(from, 'Maaf jumlah group sudah maksimal!', id)
            if (check.size < minMem) return praz.reply(from, 'Member group tidak melebihi 5, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await praz.joinGroupViaLink(link).then(() => praz.reply(from, 'Bot akan segera masuk!'))
            } else {
                praz.reply(from, 'Link group tidak valid!', id)
            }
            break
        case prefix+'odelete':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Admin Bot', id)
            if (!quotedMsg) return praz.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return praz.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            praz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'delete':
            case prefix+'d':
                case prefix+'del':
                    case prefix+'dell':
            if (!isGroupMsg) return praz.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return praz.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return praz.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return praz.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            praz.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'sider':
            case prefix+'nyimak':
            if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)                
            if (!quotedMsg) return praz.reply(from, `Tolong Reply Pesan Bot`, id)
            if (!quotedMsgObj.fromMe) return praz.reply(from, `Tolong Reply Pesan Bot`, id)
            try {
                const reader = await praz.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                praz.sendTextWithMentions(from, `Cieee Nyimak...\n${list}`)
            } catch(err) {
                console.log(err)
                praz.reply(from, `Maaf, Belum Ada Yang Membaca Pesan Bot atau Mereka Menonaktifkan Read Receipts`, id)    
            }
            break
        case prefix+'linkgroup':
        case prefix+'linkgc':
            case prefix+'grouplink':
            if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagcnye = chat.formattedTitle
            var gclink = await praz.getGroupInviteLink(groupId)
            var linkgc  = `Link group : *${namagcnye}*\n\n ${gclink}`
            praz.reply(from, linkgc, id)
            break
        case prefix+'resetlinkgroup':
        case prefix+'resetlinkgc':
            if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isGroupMsg) {
                await praz.revokeGroupInviteLink(groupId);
                praz.sendTextWithMentions(from, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
        case prefix+'getses':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Owner Whangsaff Bot', id)            
            const sesPic = await praz.getSnapshot()
            praz.sendFile(from, sesPic, 'session.png', 'Nih boss', id)
            break
        case prefix+'adminbot':
            let admn = `Admin Bot\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await praz.reply(from, admn, id)
            break
        case prefix+'limit':
            case prefix+'ceklimit':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            //if (!isGroupMsg) return praz.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return praz.reply(from, `Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    praz.reply(from, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                praz.reply(from, `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
            }
            break
            case prefix+'gift': // Hanya Admin & Owner Elaina yang bisa gift Limit
            if (!isAdmin, !isOwner) return praz.reply(from, `Maaf, perintah ini hanya dapat dilakukan oleh Admin Elaina!`, id)
                    const nomerr = arg.split(' ')[0]
                    const jmla = arg.split(' ')[1]
                    if(!nomerr) return praz.reply(from, `Masukkan nomor yang akan di gift, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    let texta = nomerr.replace(/[-\s+@c.us]/g,'')
                    const cusz = texta + '@c.us'
                    if(!jmla) return praz.reply(from, `Masukkan Jumlah gift quota, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    if(jmla > 20) return await praz.reply(from, `Maximal  20!`, id)
                        var found = false
                        Object.keys(limit).forEach((i) => {
                            if(limit[i].id == cusz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            limit[found].limit = Math.max(0, limit[found].limit);
                            if(limit[found].limit <= 20) return praz.reply(from, `Kuota Limit pada nomor tersebut masih penuh\nUntuk gift pastikan kuota limit target sudah habis`, id)
                            if(limit[found].limit <= 0) { // JIKA LIMIT 0 MAKA BISA GIFT
                                return praz.reply(from, `Kuota limit pada nomor tersebut sudah penuh!`, id)
                            }else{
                            limit[found].limit -= jmla
                            const updated = limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*
• User : @${updated.id.replace('@c.us','')}
• Limit: ${limitCount-updated.limit}`
                            console.log(limit[found])
                            fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                            praz.sendTextWithMentions(from, result)
                            }
                        } else {
                                praz.reply(from, `Maaf, nomor itu tidak terdaftar di database!`, id)
                        }
                break
            case prefix+'eval':
                const q = args.join(' ')
                if (!isOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Elaina!', id)
                if (!q) return praz.reply(from, 'Harap masukkan code JavaScript!', id)
                    try {
                        let evaled = await eval(q)
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        praz.sendText(from, evaled)
                    } catch (err) {
                        praz.reply(from, err, id)
                    }
                break
        case prefix+'restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                praz.sendText(from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
        case prefix+'addadmin':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Pemilik Bot!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                adminNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                praz.reply(from, 'Lapor Komandan! Sukses Menambahkan 1 Admin Bot!', id)
                }
            break
        case prefix+'deladmin':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Bot!', id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
                adminNumber.splice(inq, 1)
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                praz.reply(from, 'Lapor Komandan! Sukses Menghapus salah satu Admin Bot!', id)
            break
        case prefix+'block':
        case prefix+'cabutnyawa':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Pemilik Bot!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await praz.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    praz.reply(from, `Berhasil memblokir ${args[1]}!`, id)
                })
            }
            break
        case prefix+'unblock':
        case prefix+'hidupkanlagi':
            if (!isOwner) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Pemilik Bot!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await praz.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    praz.reply(from, `Berhasil membuka blokir ${args[1]}!`, id)
                })
            } 
            break
        case prefix+'setname':
            if (!isOwner) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Pemilik Bot!`, id)
                const setnem = body.slice(9)
                await praz.setMyName(setnem)
                praz.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case prefix+'setstatus':
            if (!isOwner) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Pemilik Bot!`, id)
                const setstat = body.slice(11)
                await praz.setMyStatus(setstat)
                praz.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case prefix+'setprofilepic':
            case prefix+'setpp':
            if (!isOwner) return praz.reply(from, `Perintah ini hanya bisa di gunakan oleh Pemilik Bot!`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await praz.setProfilePic(imageBase64)
                praz.sendTextWithMentions(`Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await praz.setProfilePic(imageBase64)
                praz.sendTextWithMentions(from, `Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else {
                praz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setprofilepic`, id)
            }
            break
        case prefix+'getpic':
            case prefix+'getpp':
            if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            const texnugm = body.slice(8)
            const getnomber =  await praz.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await praz.getProfilePicFromServer(useriq)

                    praz.sendFileFromUrl(from, jnck, `awok.jpg`)
                } catch {
                    praz.reply(from, `Tidak Ada Foto Profile!`, id)
                }
            break
        case prefix+'ban':
            case prefix+'hukum':
            if (!isAdmin) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin Bot!', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber).includes(mentionedJidList[i])) return praz.reply(from,`Maaf ${pushname}, Kamu tidak bisa banned Admin Bot, KAMU DOSA BANGET!`, id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                praz.reply(from, `Rasakan ini Miskah! Sukses Memberi Hukuman Makhluk ini! semoga kamu segera tobat.`,id)
            }
            break
        case prefix+'unban':
            case prefix+'ampuni':
                case prefix+'maafkan':
            if (!isAdmin) return praz.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin Bot!', id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                praz.reply(from, 'Lapor Bang! Sukses Mengampuni Kesahalan Makhluk ini! karena kamu telah tobat.', id)
            break
        case prefix+'listgroup':
            case prefix+'listgc':
                if (!isOwner) return praz.reply(from, 'Kepo sekali ya anda, kalau mau gabung grub. ketik #joingrub', id)
                praz.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*Menampilkan Semua Grub* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                praz.reply(from, gc, id)
            })
            break
        case prefix+'listbanned':
            let bened = `Menampilkan Nomor yang di Banned\n\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await praz.reply(from, bened, id)
            break
        case prefix+'listblock':
            let hih = `Menampilkan Nomor yang di Block\n\nTotal : *${blockNumber.length}*\n`
            await praz.reply(from, hih, id)
            break
        case prefix+'ping':
            //if(isReg(obj)) return
            const loadedMsg = await praz.getAmountOfLoadedMessages()
            const botadmins = await praz.iAmAdmin()
            const blockedd = await praz.getBlockedIds()
            const chatIds = await praz.getAllChatIds()
            const groups = await praz.getAllGroups()
            const me = await praz.getMe()
            const battery = await praz.getBatteryLevel()
            const isCharging = await praz.getIsPlugged()
            const timestamp = speed();
            const latensi = speed() - timestamp
            await praz.reply(from, `*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗣𝗖 」*\nPenggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\nCPU: ${os.cpus()[0].model}\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 」* :\n- *${loadedMsg}* Loaded Messages\n- *${chatIds.length - groups.length}* Total Chats\n  ├ *${groups.length}* Group Chats\n  └ *${chatIds.length}* Personal Chats\n- *${groups.length}* Groups Joined\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗨𝗦𝗘𝗥 」*\n- *${pendaftar.length}* Registered User\n  ├ *${banned.length}* Banned User\n  ├ *${blockedd.length}* Blocked User\n  └ *${adminNumber.length}* Admin User\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘 」*\n${(`\n*Battery* : ${battery}% ${isCharging ? 'Lagi Di Cas...' : 'Ga Di Cas!'}\n${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}`.slice(1, -1))}\n\n\n*Speed:* ${latensi.toFixed(4)} _Second_`, id)
            break
        case prefix+'setgroupname':
            case prefix+'setnamagc':
            if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await praz.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            praz.sendTextWithMentions(from, `Nama group telah diubah oleh admin @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            case prefix+'setppgc':
            if (!isGroupMsg) return praz.reply(from, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return praz.reply(from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await praz.setGroupIcon(from, imageBase64)
                praz.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await praz.setGroupIcon(from, imageBase64)
                praz.sendTextWithMentions(from, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                praz.reply(from, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setgroupicon`, id)
            }
            break
        case prefix+'bugreport':
            case prefix+'report':
            //if(isReg(obj)) return
            //if(cekumur(cekage)) return
            if (args.length === 1) return praz.reply(from, '[❗] Kirim perintah *#bugreport [teks]*\ncontoh : *#bugreport Permisi Owner, Ada bug pada command #otakudesu, Tolong diperbaiki*')
            const bug = body.slice(11)
            if(!bug) return
            if(isGroupMsg){
                praz.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                praz.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.' ,id)
            }else{
                praz.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                praz.reply(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.', id)
            }
            break
         case prefix+'profile':
            case prefix+'profil':
            //if(isReg(obj)) return
            if (isGroupMsg) {
                if (!quotedMsg) {
                    var block = blockNumber.includes(author)
                    var bend = banned.includes(author)
                    var sts = await praz.getStatus(author)
                    var adm = isGroupAdmins
                    var donate = isAdmin
                    var ctt = await praz.getContact(author)
                    const { status } = sts
                    var found = false
                    Object.keys(pendaftar).forEach((i) => {
                        if(pendaftar[i].id == author){
                            found = i
                        }
                    })
                    if (found !== false) {
                        pendaftar[found].id = author;
                        var registe = '✔'
                    } else {
                        var registe = '❌'
                    }
                    if (ctt == null) {
                    return await praz.reply(from, `Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]`, id) 
                    } else {
                        const contact = ctt.pushname
                        const dpd = await praz.getProfilePicFromServer(author)
                    if (dpd == undefined) {
                        var pfp = errorurl
                        } else {
                            var pfp = dpd
                        } 
                    if (contact == undefined) {
                        var namae = '*Tidak Ada Nama*' 
                    } else {
                        var namae = contact
                    } 
                        await praz.sendContact(chatId, author)
                        praz.sendFileFromUrl(from, pfp, 'pfp.jpg', `*「 PROFILE 」*\n\n• *Username: ${namae}*\n• *User Info: ${status}*\n*• Block : ${block}*\n*• Banned : ${bend}*\n• *Admin Group: ${adm}*\n• *Admin Whangsaff Bot: ${donate}*\n• *Registered User :* ${registe}`)
                    }
                } else if (quotedMsg) {
                    var qmid = quotedMsgObj.sender.id
                    var block = blockNumber.includes(qmid)
                    var bend = banned.includes(qmid)
                    var gpic = await praz.getProfilePicFromServer(qmid)
                    var namae = quotedMsgObj.sender.name
                    var sts = await praz.getStatus(qmid)
                    var ctt = await praz.getContact(qmid)
                    var adm = isGroupAdmins
                    var donate = isAdmin
                    const { status } = sts
                    Object.keys(pendaftar).forEach((i) => {
                        if(pendaftar[i].id == qmid){
                            found = i
                        }
                    })
                    if (found !== false) {
                        pendaftar[found].id = qmid;
                        var registe = '✔'
                    } else {
                        var registe = '❌'
                    }
                    if (ctt == null) {
                    return await praz.reply(from, `Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]`, id) 
                    } else {
                        const contact = ctt.pushname
                        const dpd = await praz.getProfilePicFromServer(qmid)
                    if (dpd == undefined) {
                        var pfp = errorurl
                        } else {
                            var pfp = dpd
                        } 
                    if (contact == undefined) {
                        var namae = '*Tidak Ada Nama*' 
                    } else {
                        var namae = contact
                    } 
                    await praz.sendContact(chatId, qmid)
                    praz.sendFileFromUrl(from, pfp, 'pfp.jpg', `*「 PROFILE 」*\n\n• *Username: ${namae}*\n• *User Info: ${status}*\n*• Block : ${block}*\n*• Banned : ${bend}*\n• *Admin Group: ${adm}*\n• *Admin Whangsaff Bot: ${donate}*\n• *Registered User :* ${registe}`)
                    }
                }
            }
            break
            

        
        // LIST MENU
        case prefix+'runtime':
            case prefix+'rt':
            praz.reply(from, `Bot telah aktif selama :\n${cts}`, id)
            break
        case prefix+'menu':
        case prefix+'help':
        case prefix+'start':
            praz.sendText(from, help(prefix, cts, pendaftar))
            break
        case prefix+'joingroup':
            case prefix+'joingroub':
            case prefix+'joingrub':
            case prefix+'joingrup':
            case prefix+'joingc':
            praz.reply(from, `Link Grup Bot : \n\nhttps://chat.whatsapp.com/Cfvi3ig4yZ669Rm3Pd1sVZ\n\nJangan lupa join ya kak *${pushname}!*`, id)
            break
        case prefix+'groupmenu':
            case prefix+'grupmenu':
                case prefix+'menugrup':
            praz.sendText(from, groupcmd(prefix))
            break
        case prefix+'mediamenu':
            praz.sendText(from, mediacmd(prefix))
            break
        case prefix+'funmenu':
            praz.sendText(from, funcmd(prefix))
            break
        case prefix+'animemenu':
            praz.sendText(from, animecmd(prefix))
            break
        case prefix+'kerangmenu':
            case prefix+'menukerang':
            case prefix+'kerangajaib':
            praz.sendText(from, kerangcmd(prefix))
            break
        case prefix+'downloadmenu':
            case prefix+'menudownload':    
            praz.sendText(from, downloadcmd(prefix))
            break
        case prefix+'othermenu':
            praz.sendText(from, othercmd(prefix))
            break
        case prefix+'iklan':
        case prefix+'sewa':
            praz.sendText(from, sewa())
            break
        case prefix+'adminmenu':
            case prefix+'menuadmin':
            //if (!isAdmin) return praz.reply(from, 'Perintah ini hanya untuk Admin Whangsaff Bot', id)
            praz.sendText(from, admincmd(prefix))
            break
        case prefix+'ownermenu':
            case prefix+'menuowner':
            //if (!isOwner) return praz.reply(from, 'Perintah ini hanya untuk Owner Whangsaff Bot', id)
            praz.sendText(from, ownercmd(prefix))
            break
        case prefix+'praymenu':
        case prefix+'muslimmenu':
        case prefix+'muslimenu':
        case prefix+'islamimenu':
        case prefix+'islami':
            praz.sendText(from, praycmd(prefix))
            break
        /*case prefix+'nsfwmenu':
            if (!isGroupMsg) return praz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return praz.reply(from, 'command/Perintah NSFW belum di aktifkan di group ini!', id)
            praz.sendText(from, nsfwcmd(prefix))
            break*/
        // INFORMATION
        case prefix+'donasi':
            case prefix+'donate':
            praz.sendText(from, sumbang())
            break
        case prefix+'readme':
            praz.sendText(from, readme(prefix))
            break
        case prefix+'info':
            praz.sendText(from, info())
            break
        case prefix+'bahasa':
            praz.sendText(from, bahasalist())
            break
// By Gimenz
        case prefix+'wa.me':
        case prefix+'wame':
            await praz.reply(from, `*Neh Mhank Link Nomor Wa Lu ${pushname}*\n\n*wa.me/${sender.id.replace(/[@c.us]/g, '')}*\n\n*Atau*\n\n*api.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}*`)
            break
// By Gimenz
        case prefix+'rules':
            case prefix+'snk':
            praz.reply(from, snk(), id)
        break

        default:
            if (command.startsWith('#')) {
                praz.reply(from, `Maaf, Perintah ${args[0]} Tidak Terdaftar Di Dalam #menu`, id)
            }
            await praz.sendSeen(from) 
            }
        }

        if(chats.match("assalamu'alaikum") || chats.match("ASSALAMU'ALAIKUM") || chats.match("Assalamu'alaikum") || 
            (chats.match("assalamualaikum") || chats.match("ASSALAMUALAIKUM") || chats.match("Assalamualaikum")) ||
            chats.match("asalamualaikum") || chats.match("ASALAMUALAIKUM") || chats.match("Asalamualaikum")) {
            praz.reply(from, `Waalaikumussalam`, id)
            }
        if(chats.match("woy") || chats.match("WOY") || chats.match("Woy") ||
            chats.match("woi") || chats.match("WOI") || chats.match("Woi")) {
            if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
            praz.reply(from, `iya kakak ada apa?`, id)
            }
        if(chats.match("hay") || chats.match("HAY") || chats.match("Hay") ||
            (chats.match("hai") || chats.match("HAI") || chats.match("Hai")) ||
            (chats.match("hey") || chats.match("HEY") || chats.match("Hey")) ||
            (chats.match("helo") || chats.match("HELO") || chats.match("Helo")) ||
            (chats.match("hallo") || chats.match("HALLO") || chats.match("Hallo")) ||
            chats.match("halo") || chats.match("HALO") || chats.match("Halo")) {
            if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
            praz.reply(from, `Halo juga kakak`, id)
            }
        if(chats.match("thanks") || chats.match("THANKS") || chats.match("Thanks") ||
            (chats.match("tq") || chats.match("TQ") || chats.match("Tq")) ||
            (chats.match("maaci") || chats.match("MAACI") || chats.match("Maaci")) ||
            (chats.match("kasih") || chats.match("KASIH") || chats.match("Kasih")) ||
            (chats.match("makasi") || chats.match("MAKASI") || chats.match("Makasi")) ||
            (chats.match("tq") || chats.match("TQ") || chats.match("Tq")) ||
            chats.match("mksi") || chats.match("MKSI") || chats.match("Mksi")) {
            if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
            praz.reply(from, `oke, sama-sama kak ${pushname}`, id)
            }
        if(chats.match("test") || chats.match("TEST") || chats.match("Test")) {
            if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
            praz.reply(from, `Hallo kak ${pushname} langsung ketik #menu aja ya`, id)
            }
        if(chats.match("maaf") || chats.match("MAAF") || chats.match("Maaf") ||
            chats.match("maap") || chats.match("MAAP") || chats.match("Maap")) {
            if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
            praz.reply(from, `iya kakak ${pushname}, Nussa & Rarra maafin kok.`, id)
            }
            if(chats.match("anjing") || chats.match("ANJING") || chats.match("Anjing")  ||
            (chats.match("bangsat") || chats.match("BANGSAT") || chats.match("Bangsat")) ||
            (chats.match("bangsad") || chats.match("BANGSAD") || chats.match("Bangsad")) ||
            (chats.match("memek") || chats.match("MEMEK") || chats.match("Memek")) ||
            (chats.match("bacot") || chats.match("BACOT") || chats.match("Bacot")) ||
            (chats.match("cok") || chats.match("COK") || chats.match("Cok")) ||
            (chats.match("ajg") || chats.match("AJG") || chats.match("Ajg")) ||
            (chats.match("kntl") || chats.match("KNTL") || chats.match("Kntl")) ||
            (chats.match("kontol") || chats.match("KONTOL") || chats.match("Kontol")) ||
            (chats.match("anjg") || chats.match("ANJG") || chats.match("Anjg")) ||
            chats.match("lonte") || chats.match("LONTE") || chats.match("Lonte")) {
            const kotorih = baleskotor[Math.floor(Math.random() * (baleskotor.length))]
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        await praz.reply(from, `${kotorih}`, id)
    }
    if(chats.match("kecewa") || chats.match("KECEWA") || chats.match("Kecewa") ||
        (chats.match("pusing") || chats.match("PUSING") || chats.match("Pusing")) ||
        chats.match("terluka") || chats.match("TERLUKA") || chats.match("Terluka")) {
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        await praz.sendPtt(from, `./media/kecewa.mp3`, id)
    }
    if(chats.match("sahur") || chats.match("SAHUR") || chats.match("Sahur") ||
        chats.match("saor") || chats.match("SAOR") || chats.match("Saor")) {
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        await praz.sendPtt(from, `./media/sahur.mp3`, id)
    }
    if(chats.match("@6285749338645")) {
     if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) 
    await praz.reply(from, 'Kenapa Ngetag Pras?😠', id) 
    }
    if(chats.match("@6281414163979")) {
    if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) 
    await praz.reply(from, 'Kenapa Ngetag Bot?😠', id) 
    }
            
    if(chats.match("bot") || chats.match("BOT") || chats.match("Bot") ||
        (chats.match("nussa") || chats.match("NUSSA") || chats.match("Nussa")) ||
        (chats.match("nusa") || chats.match("NUSA") || chats.match("Nusa")) ||
        (chats.match("rarra") || chats.match("RARRA") || chats.match("Rarra"))||
        chats.match("rara") || chats.match("RARA") || chats.match("Rara")) {
        const bales = balasrandom[Math.floor(Math.random() * (balasrandom.length))]
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner )
        await praz.reply(from, `${bales}`, id)
    }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //praz.kill().then(a => console.log(a))
    }
}
