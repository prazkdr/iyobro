const fs = require('fs-extra')

const help = (prefix, cts, pendaftar) => {
    return `
*Selamat Menggunakan Bot Islami*
*Nussa & Rarra WhatsApp Bot*

｢ PENTING ｣
Jangan buat Stiker SARA & PORNO!
ataupun Membuat Stiker yang tidak menutup Aurat!

*Prefix:* ｢ ${prefix} ｣

*</Menu Favorit/>*
➱ *${prefix}stiker*
➱ *${prefix}stikergif*

*</Menu Islami/>*
➱ *${prefix}asmaulhusna*
➱ *${prefix}quotesislami*
➱ *${prefix}niatsholat*
➱ *${prefix}jadwalsholat*
➱ *${prefix}ayatkursi*
➱ *${prefix}syahadat*
➱ *${prefix}audiosurah*
➱ *${prefix}infosurah*
➱ *${prefix}kuisislami*
➱ *${prefix}hadis*

*</Menu Stiker/>*
➱ *${prefix}stiker*
➱ *${prefix}stikergif*
➱ *${prefix}jadiingambar*
➱ *${prefix}toimg*
➱ *${prefix}ttp*

*</Menu Kata/>*
➱ *${prefix}quotesislami*
➱ *${prefix}motivasi*
➱ *${prefix}fakta*
➱ *${prefix}katabijak*

*</Menu Kerang Ajaib/>*
➱ *${prefix}apakah*
➱ *${prefix}nilai*
➱ *${prefix}bisakah*
➱ *${prefix}kapankah*

*</Menu Lainya/>*
➱ *${prefix}nulis*
➱ *${prefix}tts id*
➱ *${prefix}simi*
➱ *${prefix}cuaca*
➱ *${prefix}covid*
➱ *${prefix}simi*
➱ *${prefix}tod*

*</Menu Pembantu/>*
➱ *${prefix}donasi*
➱ *${prefix}rules*
➱ *${prefix}limit*
➱ *${prefix}owner*
➱ *${prefix}report*
➱ *${prefix}listvn*
➱ *${prefix}menuowner*
➱ *${prefix}menuadmin*
➱ *${prefix}menugrup*

❑NUSSA & RARRA BOT❑
`
}
exports.help = help
const ownercmd = (prefix) => {
    return `
    *</Menu Owner/>*
➱ *${prefix}block 62858xxxxx*
➱ *${prefix}unblock 62858xxxxx*
➱ *${prefix}addadmin @tagmember*
➱ *${prefix}deladmin @tagmember*
➱ *${prefix}restart*
➱ *${prefix}ekickall*
➱ *${prefix}banchat*
➱ *${prefix}unbanchat*
➱ *${prefix}setname [teks]*
➱ *${prefix}setstatus [teks]*
➱ *${prefix}setprofilepic*
➱ *${prefix}eval [kode JavaScript]*
`
}
exports.ownercmd = ownercmd
const admincmd = (prefix) => {
    return `
    *</Menu Admin/>*
➱ *${prefix}mute*
➱ *${prefix}unmute*
➱ *${prefix}ban @tagmember*
➱ *${prefix}gift @tagmember jumlah*
➱ *${prefix}unban @tagmember*
➱ *${prefix}spamcall [81273xxxx]*
➱ *${prefix}addbadword [text]*
➱ *${prefix}delbadword [text]*
➱ *${prefix}listbadword [text]*
➱ *${prefix}resetsticker @tagmember*
➱ *${prefix}resetbadword @tagmember*
➱ *${prefix}kickall*
➱ *${prefix}leave*
➱ *${prefix}promote*
➱ *${prefix}demote*
➱ *${prefix}delete*
➱ *${prefix}add 62813xxxxx*
➱ *${prefix}kickall*
➱ *${prefix}tagall*
`
}
exports.admincmd = admincmd
const nsfwcmd = (prefix) => {
    return `
╔══✪〘 NSFW 〙✪══
║
╠➥ *Astagfirullah Tobat*
║
╚═〘 NUSSA & RARRA WHATSAPP BOT 〙`
}
exports.nsfwcmd = nsfwcmd
const praycmd = (prefix) => {
    return `
╔══✪〘 MUSLIM MENU 〙✪══
║
╠➥ *${prefix}quran*
╠➥ *${prefix}infosurah*
╠➥ *${prefix}tafsir*
╠➥ *${prefix}jadwalsholat*
╠➥ *${prefix}listsurah*
║
╚═〘 Martin BOT 〙`
}
exports.praycmd = praycmd
const kerangcmd = (prefix) => {
    return `
╔══✪〘 KERANG AJAIB 〙✪══
║
╠➥ *${prefix}apakah* *[optional]*
╠➥ *${prefix}rate* *[optional]*
╠➥ *${prefix}bisakah* *[optional]*
╠➥ *${prefix}kapankah* *[optional]*
║
╚═〘 Martin BOT 〙`
}
exports.kerangcmd = kerangcmd
const funcmd = (prefix) => {
    return `
╔══✪〘 FUN 〙✪══
║
╠➥ *${prefix}tod* *truth or dare*
╠➥ *${prefix}listvn
╠➥ *${prefix}nulis* *teks*
╠➥ *${prefix}caklontong*
╠➥ *${prefix}mememaker*
╠➥ *${prefix}family100*
╠➥ *${prefix}tebakgambar*
╠➥ *${prefix}glitch* *|teks1|teks2*
╠➥ *${prefix}lovemessage* *teks*
╠➥ *${prefix}romance* *teks*
╠➥ *${prefix}party* *teks*
╠➥ *${prefix}silk* *teks*
╠➥ *${prefix}thunder* *teks*
╠➥ *${prefix}blackpink* *teks*
╠➥ *${prefix}pornhub* *|teks1|teks2*
╠➥ *${prefix}ramalpasangan kamu|pasangan*
╠➥ *${prefix}zodiak* *zodiak kamu*
╠➥ *${prefix}artinama* *nama*
╠➥ *${prefix}artinama* *nama*
╠➥ *${prefix}artimimpi* *mimpi*
╠➥ *${prefix}heroml* *[nama hero*
╠➥ *${prefix}sandwriting* *teks*
╠➥ *${prefix}quotemaker*
║
╚═〘 Martin BOT 〙
`
}
exports.funcmd = funcmd
const mediacmd = (prefix) => {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➥ *${prefix}newstickerline*
╠➥ *${prefix}news*
╠➥ *${prefix}jadwalbola* *[query]*
╠➥ *${prefix}distance* *[query]*
╠➥ *${prefix}covid* *[negara]*
╠➥ *${prefix}jadwalTv* *[channel]*
╠➥ *${prefix}cuaca* *[tempat]*
╠➥ *${prefix}tts* *[kode bhs]* *[teks]*
╠➥ *${prefix}kbbi* *[query]*
╠➥ *${prefix}wiki* *[query]*
╠➥ *${prefix}shopee* *[query]*
╠➥ *${prefix}google* *[query]*
╠➥ *${prefix}pinterest* *[query]*
╠➥ *${prefix}playstore* *[query]*
╠➥ *${prefix}googleimage* *[query]*
╠➥ *${prefix}ytsearch* *[query]*
╠➥ *${prefix}translate* *[bahasa] [teks]*
╠➥ *${prefix}brainly* *[pertanyaan] [.jumlah]*
╠➥ *${prefix}lirik* *[optional]*
╠➥ *${prefix}chord* *[optional]*
╠➥ *${prefix}qrcode* *[optional]*
╠➥ *${prefix}maps* *[optional]*
╠➥ *${prefix}textmaker* *[teks1|teks2]*
╠➥ *${prefix}pantun*
╠➥ *${prefix}katabijak*
╠➥ *${prefix}motivasi*
╠➥ *${prefix}fakta*
║
╚═〘 Martin BOT 〙`
}
exports.mediacmd = mediacmd
const animecmd = (prefix) => {
    return `
╔══✪〘 ANIME 〙✪══
║
╠➥ *${prefix}shota*
╠➥ *${prefix}waifu*
╠➥ *${prefix}husbu*
╠➥ *${prefix}wait*
╠➥ *${prefix}koin*
╠➥ *${prefix}maluser* *[username]*
╠➥ *${prefix}malanime* *[query]*
╠➥ *${prefix}malcharacter* *[query]*
╠➥ *${prefix}kusonime* *[query]*
╠➥ *${prefix}neonime* *[query]*
╠➥ *${prefix}dewabatch* *[query]*
║
╚═〘 Martin BOT 〙`
}
exports.animecmd = animecmd
const othercmd = (prefix) => {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➥ *${prefix}bahasa*
╠➥ *${prefix}sticker*
╠➥ *${prefix}stickergif*
╠➥ *${prefix}ttp*
╠➥ *${prefix}stickertoimg*
╠➥ *${prefix}cekcovid*
╠➥ *${prefix}quotes*
║
╚═〘 Martin BOT 〙`
}
exports.othercmd = othercmd
const downloadcmd = (prefix) => {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
╠➥ *${prefix}gdrive linkGDrive*
╠➥ *${prefix}ytmp3 linkYt*
╠➥ *${prefix}ytmp4 linkYt*
╠➥ *${prefix}ig linkIg*
╠➥ *${prefix}fb linkFb*
╠➥ *${prefix}twitter linkTwitter*
╠➥ *${prefix}smule linkSmule*
╠➥ *${prefix}tiktok linkTiktok*
╠➥ *${prefix}starmaker linkStarmaker*
╠➥ *${prefix}play lagu*
╠➥ *${prefix}music lagu*
╠➥ *${prefix}getmusic IdDownload*
╠➥ *${prefix}video video*
╠➥ *${prefix}getvideo IdDownload*
║
╚═〘 Martin BOT 〙`
}
exports.downloadcmd = downloadcmd
const groupcmd = (prefix) => {
    return `
    *</Menu Grup/>*
*${prefix}snk
${prefix}grupinfo
${prefix}add 62858xxxxx
${prefix}kick @tagmember
${prefix}promote @tagmember
${prefix}demote @tagadmin
${prefix}tagall
${prefix}adminList
${prefix}ownerGroup
${prefix}leave
${prefix}delete replyChatBot
${prefix}kickAll
${prefix}group open|close
${prefix}NSFW enable|disable
${prefix}left enable|disable
${prefix}welcome enable|disable
${prefix}antisticker enable|disable
${prefix}antilink enable|disable
${prefix}antibadword enable|disable
`
}
exports.groupcmd = groupcmd
const readme = (prefix) => {
    return `

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Fiki Naki*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Lathi - Weird Genius*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Kediri*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu Fiki Naki*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca Kediri*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Halo teman-teman*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme
const info = () => {
    return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ *BOT TYPE : NODEJS V14*
╠➥ *NAME : Martin BOT*
╠➥ *VERSION : 3.0*
╠➥ *OWNER : PRAS*
║
╚═〘 Martin BOT 〙
`
}

exports.info = info
const snk = () => {
    return `Syarat dan Ketentuan *Bot Martin*

    1. Tidak Boleh memerintah Bot untuk membuat Stiker yang TIDAK MENUTUP AURAT, mengandung unsur PORNO dan SARA
    2. Tidak Boleh memerintah Bot untuk melakukan perintah kata-kata kasar
    3. Tidak Boleh Spam Bot 
    4. Harus sopan dalam menggunakan bot
    5. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
    6. Data anda akan di hapus ketika bot Offline 
    7. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
    8. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
    9. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
    10. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Terima Kasih!`
}
exports.snk = snk


const sewa = () => {
    return `
╔══✪〘 BOT MASUK KE GRUBmu 〙✪══
║
╠═══════════════════════════
╠➥ *DAFTAR SEWA & BUAT BOT :*
╠➥ *SEWA : 10K/GRUP (BULAN)*
╠➥ *PROMO BULAN RAMADHAN*
╠➥ *PEMBAYARAN BISA MELALUI :*
╠➥ *OVO, GOPAY , DANA, PULSA +5K*
╠═══════════════════════════
╠➥ *KEUNTUNGAN SEWA BOT :*
╠➥ *1. BISA MENJADI ADMIN BOT*
╠➥ *2. BISA MENDAPATKAN COMMAND ADMIN*
╠═══════════════════════════
╠➥ *JIKA MINAT IKLAN DIATAS*
╠➥ *HARAP HUBUNGI NOMOR DIBAWAH :*
╠➥ *wa.me/6285749338645*
║
╚═〘 NUSSA & RARRA WHATSAPP BOT 〙
`
}
exports.sewa = sewa
const sumbang = () => {
    return `
╔══✪〘 DONASI 〙✪══
║
╠➥ *DONASI BISA MELALUI :*
╠➥ *DANA/PULSA/OVO/GOPAY : 085749338645*
╠➥ *SAWERIA : saweria.co/botmartin*
╠➥ *Mohon Donasinya ya kak! agar BOT WhatsApp bisa Aktif terus, Menghibur, Berguna serta Bermanfaat. Terimakasih!*
╠➥ *Dana dari Donatur akan digunakan untuk membayar tagihan Rest-API dan Server tiap Bulan*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
╚═〘 NUSSA & RARRA WHATSAPP BOT 〙
`
}
exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist


