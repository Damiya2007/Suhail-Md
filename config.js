const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94719845166" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94719845166";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_58_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwialkwUFlNUEdtaDdEb2RvMjd0Z0VoTExQZVFYU3E4OHYweVJwZ2Z5cGEyUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYUVFbjMzZ2tTYXFHUlVqTE1yVUFQQVwiLFxuICBcInBob25lSWRcIjogXCJmY2FiZjg3OS1iOTkyLTQ0YmEtODE2YS01NjBlMmUyNzMyYTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMzYsXG4gICAgICA3NSxcbiAgICAgIDE1MixcbiAgICAgIDE5OSxcbiAgICAgIDI0MixcbiAgICAgIDU1LFxuICAgICAgNTQsXG4gICAgICAxNDEsXG4gICAgICA5LFxuICAgICAgMjM0LFxuICAgICAgMjA0LFxuICAgICAgMTcwLFxuICAgICAgNzMsXG4gICAgICAyMDAsXG4gICAgICAxMTIsXG4gICAgICA2MSxcbiAgICAgIDEyOCxcbiAgICAgIDEzOSxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDY0LFxuICAgICAgMTM3LFxuICAgICAgMjQ5LFxuICAgICAgMTU5LFxuICAgICAgMTYxLFxuICAgICAgMTk1LFxuICAgICAgNyxcbiAgICAgIDE3NixcbiAgICAgIDE5MSxcbiAgICAgIDk4LFxuICAgICAgMjEwLFxuICAgICAgMTMxLFxuICAgICAgNTcsXG4gICAgICAxNDIsXG4gICAgICAyMDYsXG4gICAgICAxODYsXG4gICAgICAxMzMsXG4gICAgICAwLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREFZR000TDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE5ODQ1MTY2OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwifl9fSGVzaGFuX19+XCIsXG4gICAgXCJsaWRcIjogXCIzMTE0MzIyNzMyMjQwOTo1NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVExrTHdGRUxIdy9iTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk4wNG5NZEtrL29xNTNKbFdxMSsxUDUvN0NEcndyM3o3aHdvTHArME9PSGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSmRKZEpNZ3lCOFNFaWZWOHN1Ylo4MGFtVDFVajZpOW1FWXhVSmJNYWlnVndUTlp6T014ZWQzeldhMnZpaFFUWTErZHR1NlQvem5PNDVVOE9VeHZVQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSEJKYWRSNnU1RjR0ZEpDZXpwejNNQkhsNVYzbmllcTlMbmRXTGJtMGdmakFaRGY0dnRWYi9sQnlkSGRJblpHZnJzb1RpOGY1WlNnQ2U2SkVUWGgvanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTk4NDUxNjY6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjI5ODc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVZoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVmguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyRHprdllxZ0xsL3IxMjFFRFl6eGpxNWtTWFNzeWRyM3NlQjlZcGdsQTA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjgyNzgxOTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2MjcxMzE1NTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
