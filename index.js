const Discord = require('discord.js');


const client = new Discord.Client();

client.on('ready', () => {
        console.log('Bot is now connected');
});

const Test_1 = '743522743756259450'
const Test_2 = '743522788995760230'
const Test_3 = '743522827457527868'
const Test_4 = '743676863632900218'
const Test_5 = '743677028443619448'
const Test_6 = '743677097708355615'
const Test_7 = '743677091140337695'
const Test_8 = '743677208345837648'
const Test_9 = '743677287924367430'
const Test_10 = '743677308849881100'
const Test_11 = '743677335395631164'
const Test_12 = '743677500327985284'
const Test_13 = '743677554988417044'
const Test_14 = '743677586013683834'
const Test_15 = '743677607249444887'
const Test_16 = '743677626081738772'
const Test_17 = '743677643320197141'
const Test_18 = '743677664237453353'
const Test_19 = '743677684638548041'
const Test_20 = '743677707610751046'

client.on('message', (message) => {

        if (message.content == 'roles_list_00'){
                console.log(message.guild.roles)
                message.react('✅');
        }
})



client.on('message', (message) => {
        if (message.content == 'answer1'){
                message.member.roles.add(Test_2)
                message.member.roles.remove(Test_1)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer2'){
                message.member.roles.add(Test_3)
                message.member.roles.remove(Test_2)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer3'){
                message.member.roles.add(Test_4)
                message.member.roles.remove(Test_3)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer4'){
                message.member.roles.add(Test_5)
                message.member.roles.remove(Test_4)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer5'){
                message.member.roles.add(Test_6)
                message.member.roles.remove(Test_5)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer6'){
                message.member.roles.add(Test_7)
                message.member.roles.remove(Test_6)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer7'){
                message.member.roles.add(Test_8)
                message.member.roles.remove(Test_7)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer8'){
                message.member.roles.add(Test_9)
                message.member.roles.remove(Test_8)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer9'){
                message.member.roles.add(Test_10)
                message.member.roles.remove(Test_9)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer10'){
                message.member.roles.add(Test_11)
                message.member.roles.remove(Test_10)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer11'){
                message.member.roles.add(Test_12)
                message.member.roles.remove(Test_11)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer12'){
                message.member.roles.add(Test_13)
                message.member.roles.remove(Test_12)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer13'){
                message.member.roles.add(Test_14)
                message.member.roles.remove(Test_13)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer14'){
                message.member.roles.add(Test_15)
                message.member.roles.remove(Test_14)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer15'){
                message.member.roles.add(Test_16)
                message.member.roles.remove(Test_15)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer16'){
                message.member.roles.add(Test_17)
                message.member.roles.remove(Test_16)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer17'){
                message.member.roles.add(Test_18)
                message.member.roles.remove(Test_17)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer18'){
                message.member.roles.add(Test_19)
                message.member.roles.remove(Test_18)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer19'){
                message.member.roles.add(Test_20)
                message.member.roles.remove(Test_19)
        }
})

client.on('message', (message) => {
        if (message.content == 'answer20'){
                message.reply('Congratulations! You have solved all the questions')
        }
})

client.on('message', (message) => {
        if (message.content == 'mcs! start'){
                message.react('👍')
                message.react('✅')
                message.reply('Unlocking <#743524266942791680> text chat for you soon, your answers (if correct) will unlock the text channel for the next level automatically. In case of any issues related to the bot, please contact <@444522639499853824> and in case of any other issues related to the event, contact the event head <@600649783673225216>. GOOD LUCK!')
                message.member.roles.add(Test_1)
        
        }
})

client.on('message', (message) => {
        if (message.content == 'test_msg_00'){
                message.reply('deployed on application platform and pushed master on github')
                message.react('✅')
        }
})

client.on('message', (message) => {
        if message.content == 'send it'){
                Discord.User.send('hennlo')
        }
})


client.login(process.env.token)