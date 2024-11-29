import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv"
import 'dotenv/config'



const client = new Client({ intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });

client.on('messageCreate', (message) => {
    if(message.author.bot) return ;
    if(message.content.startsWith("create")){
        const url=message.content.split("create")[1]
        return message.reply({
            content:"Generating short url for"+ url,
        })
    }
    message.reply({
        content:"Hello Welcome Here! Welcome to the Sidhant's Server , Best of luck for you future Endeavours",
    });
});



client.on("interactionCreate",(interaction)=>{
    console.log(interaction)
    interaction.reply("Pong !!!")
})
client.login(process.env.URL);