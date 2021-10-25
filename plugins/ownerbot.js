const Shadow = require('../Utilis/events')
const { getBuffer } = require('../Utilis/download')
const { MessageType, Mimetype } = require('@adiwajshing/baileys')

Shadow.addCommand({ pattern: 'picmaker ?(.*)', fromMe: true, desc: "make photo effec", dontAddCommandList: true }, async (message, match) => {
await message.sendMessage('```delete\n\njail\n\ngta\n\npassed\n\ncontract\n\nccrop\n\ngray\n\ncalender\n\nfire\n\nmissing\n\nonbook\n\n2onbook\n\ncomment\n\n```', {quoted: message.data})
});
//photo editor by shadow
Shadow.addCommand({ pattern: 'delete ?(.*)', fromMe: true, desc: "make photo effec" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/image/delete?image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'jail ?(.*)', fromMe: true, desc: "make jail photo effec" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/image/jail?image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'gta ?(.*)', fromMe: true, desc: "make gta poster photo effec" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'passed ?(.*)', fromMe: true, desc: "make mission passed photo effec" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/image/passed?image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'contrast ?(.*)', fromMe: true, desc: "make contrast effect on photo" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/contrast?intensity=+1&image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'ccrop ?(.*)', fromMe: true, desc: "crop sticker in the shape of circle" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/circle?image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'gray ?(.*)', fromMe: true, desc: "edit photo as gray collor" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://zenzapi.xyz/api/greyscale?image=${match}&apikey=SPARK-SHADOW`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'calender ?(.*)', fromMe: true, desc: "make photo on calender" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://api.zeks.me/api/calender?apikey=XxShadoWxX&image=${match}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'fire ?(.*)', fromMe: true, desc: "make photo as burning" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://api.zeks.me/api/burning-image?apikey=XxShadoWxX&image=${match}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.mp4 }, MessageType.video, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'missing ?(.*)', fromMe: true, desc: "make a missing poster" }, async (message, match) => {
    if (match === '') return await message.sendMessage('Example: .missing url,text1,text2,text3')
        const { buffer } = await getBuffer(`https://api.zeks.me/api/missing-image?apikey=XxShadoWxX&image=${match.split(',')[0]}&text1=${match.split(',')[1]}&text2=${match.split(',')[2]}&text3=${match.split(',')[3]}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'onbook ?(.*)', fromMe: true, desc: "Write text on book" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a text')
        const { buffer } = await getBuffer(`https://api.zeks.me/api/nulis?apikey=XxShadoWxX&text=${match}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: '2onbook ?(.*)', fromMe: true, desc: "Write on book" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a text')
        const { buffer } = await getBuffer(`https://api.zeks.me/api/magernulis?apikey=XxShadoWxX&nama=${match.split(',')[0]}&kelas=${match.split(',')[1]}&text=${match.split(',')[2]}&tinta=${match.split(',')[3]}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'comment ?(.*)', fromMe: true, desc: "phub comment" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://api.zeks.me/api/phub?apikey=XxShadoWxX&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${match.split(',')[0]}&msg=${match.split(',')[1]}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'skmask ?(.*)', fromMe: true, desc: "Edit photo with skull mask" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://api.lolhuman.xyz/api/editor/skullmask?apikey=fc669120c96ec316e52f33a1&img=${match}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
});
Shadow.addCommand({ pattern: 'pika ?(.*)', fromMe: true, desc: "Make pikachu effect" }, async (message, match) => {
    if (match === '') return await message.sendMessage('give me a url')
        const { buffer } = await getBuffer(`https://some-random-api.ml/pokedex?pokemon=${match}`)
        await message.sendMessage(buffer, { Mimetype: Mimetype.mp4 }, MessageType.video, {quoted: message.data})
});
