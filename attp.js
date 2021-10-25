const luttapi = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🌺"

if (Config.WORKTYPE == 'public') {
   
   
   luttapi.tozara({ pattern: 'attppack', fromMe: false, desc: 'its send attp pack'}, (async (message, match) => {

  await message.sendMessage(`╔═════════════════════╗
║        ║🌺╚ATTP PACK╝🌺║
║
╠═➢ 🌺.01attp      ❴your text❵
║send fiee fire logo
╠═➢ 🌺.02attp      ❴your text❵
║send Text logo
╠═➢ 🌺.03attp      ❴your text❵
║send Text logo
╠═➢ 🌺.04attp      ❴your text❵
║send Text logo
╠═➢ 🌺.05attp      ❴your text❵
║send Text logo
╠═➢ 🌺.06attp      ❴your text❵
║send Text logo
╠═➢ 🌺.07attp      ❴your text❵
║send Text logo
╠═➢ 🌺.08attp      ❴your text❵
║send Text logo
╠═➢ 🌺.09attp      ❴your text❵
║send Text logo
╠═➢ 🌺.10attp       ❴your text❵
║send Text logo
╠═➢ 🌺.11attp       ❴your text❵
║send Text logo
╠═➢ 🌺.12attp       ❴your text❵
║send Text logo
╠═➢ 🌺.13attp       ❴your text❵
║send Text logo
╠═➢ 🌺.14attp       ❴your text❵
║send Text logo
╠═➢ 🌺.15attp       ❴your text❵
║send Text logo
╠═➢ 🌺.16attp       ❴your text❵
║send Text logo
╠═➢ 🌺.17attp       ❴your text❵
║send Text logo
╠═➢ 🌺.18attp       ❴your text❵
║send Text logo
╠═➢ 🌺.19attp       ❴your text❵
║send Text logo
╠═➢ 🌺.20attp       ❴your text❵
║send Text logo
╠═➢ 🌺.21attp       ❴your text❵
║send Text logo
╠═➢ 🌺.22attp       ❴your text❵
║send Text logo
╠═➢ 🌺.23attp       ❴your text❵
║send Text logo
╠═➢ 🌺.24attp       ❴your text❵
║send Text logo
╠═➢ 🌺.25attp       ❴your text❵
║send Text logo
╠═➢ 🌺.26attp       ❴your text❵
║send Text logo
╠═➢ 🌺.27attp       ❴your text❵
║send Text logo
╠═➢ 🌺.28attp       ❴your text❵
║send Text logo
╠═➢ 🌺.29attp       ❴your text❵
║send Text logo
╠═➢ 🌺.30attp       ❴your text❵
║send Text logo
╠═➢ 🌺.31attp       ❴your text❵
║send Text logo
╠═➢ 🌺.32attp       ❴your text❵
║send Text logo
╠═➢ 🌺.33attp       ❴your text❵
║send Text logo
╠═➢ 🌺.34attp       ❴your text❵
║send Text logo
╠═➢ 🌺.35attp       ❴your text❵
║send Text logo
╠═➢ 🌺.36attp       ❴your text❵
║send Text logo
╠═➢ 🌺.37attp       ❴your text❵
║send Text logo
╠═➢ 🌺.38attp       ❴your text❵
║send Text logo
╠═➢ 🌺.39attp       ❴your text❵
║send Text logo
╠═➢ 🌺.40attp       ❴your text❵
║send Text logo
║
║🌺 *𝙼𝙰𝙳𝙴 𝙱𝚈 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙴𝚁* 🌺
║
╚═════════════════════╝
`);
}));
   
   
     luttapi.tozara({ pattern: '01attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '02attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '03attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/wroom?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '04attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/surfboard?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '05attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/orlando?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '06attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '07attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '08attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '09attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sunshine?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '10attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
   
   luttapi.tozara({ pattern: '11attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})
    }));
      
     luttapi.tozara({ pattern: '12attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/glow?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      
      luttapi.tozara({ pattern: '13attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/army?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      luttapi.tozara({ pattern: '14attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/casino?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      
      luttapi.tozara({ pattern: '15attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/star?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN,quoted: message.data})

    }));
      
      
      luttapi.tozara({ pattern: '16attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/shrek?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
      luttapi.tozara({ pattern: '17attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    luttapi.tozara({ pattern: '18attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sugar?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    luttapi.tozara({ pattern: '19attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fireworks?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    luttapi.tozara({ pattern: '20attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/trance?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    luttapi.tozara({ pattern: '21attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hbd2?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    luttapi.tozara({ pattern: '22attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
      luttapi.tozara({ pattern: '23attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
    
    luttapi.tozara({ pattern: '24attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/happy?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '25attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/zilch?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      luttapi.tozara({ pattern: '26attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/prime?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '27attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sports?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      luttapi.tozara({ pattern: '28attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      luttapi.tozara({ pattern: '29attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/usa?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '30attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/cereal?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '31attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/neon?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      luttapi.tozara({ pattern: '32attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/fun?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   
   luttapi.tozara({ pattern: '33attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   
   luttapi.tozara({ pattern: '34attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/smurf?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   
   luttapi.tozara({ pattern: '35attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/booking?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '36attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/husky?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '37attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/hockey?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '38attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      luttapi.tozara({ pattern: '39attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/toothpaste?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN ,quoted: message.data})

    }));
      
   luttapi.tozara({ pattern: '40attp ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${encodeURIComponent(match[1])}&apikey=Ikyy69`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.AFN, quoted: message.data})

    }));
      
   
   
   
   
   
   
}
