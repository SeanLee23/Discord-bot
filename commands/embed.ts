import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'Sends an embed',

    permissions: ["ADMINISTRATOR"],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed ()
        .setDescription("Hello world")
        .setTitle('Title')
        .setColor('BLUE')
        .setAuthor('Sean')
        .setFooter('Footer')
        .addFields([{
            name: 'name',
            value: 'value',
        },
        {
            name: 'day',
            value: 'hour',
        },
        ])
        .addFields('month', 'week')

        return embed
    },
} as ICommand