const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
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


global.devs = "923184474176" // Developer Contact
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

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_40_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdhZnFWOVpkU0dsdVl4NE90L0VjM1hEZnphdU9jUUFVZWdTQUlKWWhPTkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktuenNTNjY4VG8yeGF0NV9venNsX3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGVlNGRhYjAtMzUxYy00N2NlLWE0NDMtYzlhOGExOWNiMjJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDIxMCxcbiAgICAgIDgzLFxuICAgICAgMjUwLFxuICAgICAgMjEwLFxuICAgICAgNzIsXG4gICAgICAyMjQsXG4gICAgICA2NyxcbiAgICAgIDIzOSxcbiAgICAgIDIxOCxcbiAgICAgIDk2LFxuICAgICAgMjQ4LFxuICAgICAgNjYsXG4gICAgICAzMyxcbiAgICAgIDExOSxcbiAgICAgIDE3NyxcbiAgICAgIDEyMCxcbiAgICAgIDE2OSxcbiAgICAgIDIzOCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDI0NCxcbiAgICAgIDIwLFxuICAgICAgODksXG4gICAgICAxMzEsXG4gICAgICAyNTUsXG4gICAgICAyMyxcbiAgICAgIDE2MixcbiAgICAgIDI3LFxuICAgICAgMTc3LFxuICAgICAgODYsXG4gICAgICAxOTUsXG4gICAgICAxODcsXG4gICAgICAxOCxcbiAgICAgIDIwMixcbiAgICAgIDE3OSxcbiAgICAgIDY1LFxuICAgICAgMjM1LFxuICAgICAgMTI3LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjMzTkFYR0cyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxOTg0NTE2Njo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl9IZXNoYW5fXCIsXG4gICAgXCJsaWRcIjogXCIzMTE0MzIyNzMyMjQwOTo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVEo0dDhFRU5PN3hMTUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVsMWgyS1BiNThvNmY1bUt0OEVyby9tMEVtdFlTZ1h6NkVYUzdseElTRVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXNuMWNHZWdjOWF2azZRQXRjazBzVVZnb0Q1ZlRJY0VwV0FmejZaV2p5N1V6MEdoNm9DODIwb09OOWhhUXVlNk9pemJMcE1pQ0pEZUVMalUwdjhjQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRnI0ZXRqTnA3UTRmLzJCUDBKVytHd2xyeGVoZGl6TFZWV1Rpb3dEWGs5VVgweTErTUNrVFg3d3dpSEx6ZmJKSzFRTFRmVStKNjRsN2daMDhtUjRpREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTk4NDUxNjY6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Njg5MjM4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Heshan",


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
