const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "Image Maker"
const need = "```YOU MUST ENTER WORDS!```"
const code = "╭────────────────╮\n   ❏ TEXT MAKER ❏ \n╰────────────────╯\nCommands\n╭────────────────\n│ 🌺 harrypotter\n│ 🌺 butterfly\n│ 🌺 romantic\n│ 🌺 shadow\n│ 🌺 retrolol\n│ 🌺 coffecup\n╰────────────────\nExample\n╭───────────────╮\n🍁 .romantic luttapi\n🍁 .romantic luttapi;bot\n╰───────────────╯"

if (Config.WORKTYPE == 'public') {

//ZRUN

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/harrypotter?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.AFN})

    }));

    Asena.addCommand({pattern: 'retrolol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/retrolol?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.AFN})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/shadow?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.AFN})

    }));

    Asena.addCommand({pattern: 'romantic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/romantic?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.AFN})

    }));

    Asena.addCommand({pattern: 'butterfly ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/butterfly?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.AFN})

    }));

    Asena.addCommand({pattern: 'coffecup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/coffecup?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.AFN})

    }));

}
