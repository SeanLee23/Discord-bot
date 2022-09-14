import DiscordJS, { BaseInteraction, GatewayIntentBits, IntegrationApplication, InteractionCollector, InteractionResponse, Message } from 'discord.js'
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
            content: 'Hot af bruh',
        })
    }
})

client.on('messageCreate', (Message) => {
    if (Message.content === 'Tennis'){
        Message.reply({
            content: 'Ball',
        })
    }
})

const guildId = '1017920486937735201'
const guild = client.guilds.cache.get(guildId)
let commands

if (guild) {
    commands = guild.commands
} else {
    commands = client.application?.commands
}

commands?.create({
    name: 'tennis',
    description: 'Replies with Ball',
})

client.on('interactionCreate', async (interaction) =>{
    if (!interaction.isCommand()){
        return;  
    }
})

const { commandName, options, ActionRowBuilder, SelectMenuBuilder} =  require ('discord.js')

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

    if (commandName === "tennis") {
        const row = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions(
                        {
                            label: 'Ball',
                            description: 'first option',
                            value: 'option'
                        },
                        {
                            label: 'Racket',
                            description : 'second option',
                            value: 'option'
                        },
                    ),
             );

         await interaction.reply({ content: 'Ball!', components: [row] });
     }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
});

const {  EmbedBuilder} = require('discord.js');

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new ActionRowBuilder()
			.addComponents(
			);

		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here');

		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	}
});

console.log("Bot is starting...");

client.login(process.env.TOKEN);