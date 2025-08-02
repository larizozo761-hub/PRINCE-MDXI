
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU2Y6jRhT9l3q1NQYMZpFaChgMGK/tBdvRPJShwGWzuaqwjUf+hXnIQ5SM1N+R3+pPiHB3z/RDMukgIdWmc8+959z7BWQ5pshDFdC+gILgE2SoXrKqQEADRhlFiIAmCCGDQAPrQcqp6jjp6Ls9HvV2Io+dgs7zUG9fZS+E/GhTHIa2QpeLB3BrgqLcJjj4CaCncKPj4hw5aJoaYaf/uC8MiRu2uDlZS2ljPWAhRzcmMneHB3CrESEmOIutYodSRGDioWoCMfkYfa+vxnud8xLVzC0+XKT+qMG5KrGtwB5wiJRxaOfkSAKe+xj9w9aRN9h8PGdIJmKU9cbnczFvCAZS9wGOg0m3DOeJsW9d9Bf6FMcZCt0QZQyz6sN190fDw+MBzU1/H+asjxwuy2fhILjGWJhWI1sWvRXJpL3lHz5GvBDLxXIuDxJjflxYm9QXY//qpmZj2y+WaBVxVxILuKT2zH1PfELevHL4P3UXbM6eqYyF42GbZctOzEmCNTbKo+MX7VWDNexMN6FsjbL4Y/QXZAKl1nadmwFeDwLUjS/+Wm/J1DkvT7lpT5V4fPGN4Xr3jj5kJfkZy6VjnK2DKneU0VLsuZkTd2QdkrViPGa5GG5S2PGQasjyZDohSp9EU9unymqQx1eqbrxRqzuRJmFnMEkvrcXWtMaePNf1h3tGB1S5IdD4WxMQFGPKCGQ4z+5notoEMDzNUEAQu5cXnC/WfjzPuldJdOPIb+16lilMEqfX5qhFlIscTPqXoIwfA/0BNEFB8gBRikIHU5aTaogohTGiQPv1cxNk6MJehKvDtfkmiDChbJGVRZLD8E3Vt0sYBHmZsVmVBd16gQjQ3h0jxnAW07qOZQZJsMMn1N1BRoEWwYSi7xkigkKgMVKi713bzcO68KrP8abgDkETpHdBcAg0IHGqJMlcR+AUjZd+oZ/ONSosik8ZYqAJMlg/Bs9Pf/71/PTtj+enb7+//r89P337CpogueMIgqiInbbSkVRZFcQaq764fU+hjhgiBnFCgQa643b7fAwcyzPX5XBq27oV691YBz9SfvPOizZ7qVjp2JhnjWrj74OC3+9nwexsT2F5OXT91SBC2KEJL1XKwz+AAA048kQQqrl39oKrr14DdGIoo9NE7Bx9q+LGp8sgZv5SHFB1MZNLoRvpRzmy1+UqXzbKxJV1eyJc+VWUObGXz6rxMp9144c6WohOOEDvg4XFpbENDhTuEwIHq/Np6pdrtTjtxCX2F6nL2a4s9te8RPs+y9OdP+L82MmTlKauwgeXnoXMhdU5cjPW8sb+ZcOZvTdX37sqeZ1m+O63Wsx6G2F0Hw6vqv2XuC+8awtyt+Y7iNdp8y8da6wbcHl244XUoukyb3vhWuQyixoHm9CNniRVu53v5H6IghO43T43QZFAFuUkBRqg6RaCJiB5WRvazaL8J5G6huvq8UvWCaRM/9Ekc5wiymBaAI2XJZEXZUXhXl5NSF44kO6ABrK0bWxrw1d6UcwYZG8tB/T6M40NuP0NDLustI4HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "50955706208", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "🍷,🩸,🔥,🐉,💎", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "privat", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𖤓𝐌𝐑 𝐇𝐎𝐌𝐌𝐈𝐄𖤓", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𓆩𖠜𝐌𝐑_𝐇𝐎𝐌𝐌𝐈𝐄", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐌𝐑_𝐇𝐎𝐌𝐌𝐈𝐄", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𖤓𝐌𝐑 𝐇𝐎𝐌𝐌𝐈𝐄𖤓", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
