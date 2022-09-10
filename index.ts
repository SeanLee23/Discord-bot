import DiscordJS, { GatewayIntentBits, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

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

client.on('messageCreate', (Message) =>{
    if (Message.content === 'it is hot') {
        Message.reply({
            content: 'Yes it is',
        })
    }
})

client.login(process.env.TOKEN)