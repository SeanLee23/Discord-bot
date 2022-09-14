import DiscordJS, { BaseInteraction, Client, GatewayIntentBits, IntegrationApplication, InteractionCollector, InteractionResponse, Message } from 'discord.js'
import dotenv from 'dotenv'
import wokcommands from 'wokcommands'
import path from 'path'
import mongoose, { Schema } from 'mongoose'
dotenv.config()

import testSchema from './test-schema'

const client = new DiscordJS.Client({
    intents : [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('ready', async () => {
    await mongoose.connect( process.env.Mongo_URI || '', {
        keepAlive: true,
    })
})

client.on('messageCreate', (Message) =>{
    if (Message.content === 'it is hot') {
        Message.reply({
            content: 'Hot af bruh',
        })
    }
})

new wokcommands(client, {
    commandsDir: path.join(__dirname,'commands'),
    typeScript: true,
    testServers: ['1017920486937735201'],
    mongoUri : process.env.Mongo_URI,
})

client.on('messageCreate', (Message) => {
    if (Message.content === 'Tennis'){
        Message.reply({
            content: 'Ball',
        })
    }
})

setTimeout(async() =>{
    await new testSchema({
        Message: 'hello world',
    }).save()
}, 1000)


const guildId = '1017920486937735201'
const guild = client.guilds.cache.get(guildId)
client.login(process.env.TOKEN);