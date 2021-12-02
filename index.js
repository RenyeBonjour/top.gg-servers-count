const discord = require("discord.js");
const client = new discord.Client({ 
    ws: { properties: { $browser: "Discord Android" } }, intents: 32767 });

const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxMjc4NDUzMTc0MDAzMzA3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjM2MTcwMDcxfQ.HlVuI59iV6GdGeqVGTtMtsVmvI7lUO9CMj4Kg_ajeUM', client) 


poster.on('posted', (stats) => { 
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})

//// Replit
require('http').createServer((req, res) => res.end(`Ready! ✅`)).listen(3000)

client.login(process.env.BOT);


console.log("NodeJS Version: " + process.version)




