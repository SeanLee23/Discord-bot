import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'Replies with ball',

    slash: 'both',
    testOnly: true,

    callback: ({}) =>{
       return 'Ball'
    }
} as ICommand