module.exports = {
  name: 'D6',
  description: 'Roll D6.',
  aliases: ['d6', 'six', 'dsix'],
  usage: '[number of dice]',
  execute(message, args) {
    let timestoroll = 1
    let result = 0

    const userarg = args.shift()
    if(userarg) {
      let usertimestoroll = parseInt(userarg)
      if(!usertimestoroll) {
        // user did not give a number of times to roll, check for 'x'
        // return message.reply(`You want to roll ${userarg}, really?`)
        usertimestoroll = parseInt(userarg.substring(1))
        if(!usertimestoroll) {
          // give up
        }
        else {
          timestoroll = usertimestoroll
        }
      }
      else {
        timestoroll = usertimestoroll
      }
    }
    
    while(timestoroll > 0) {
      result += Math.floor(Math.random() * 6) + 1
      // console.log(`result so far: ${result}`)
      timestoroll--
    }

    return message.reply(`Rollin! ... Got: ${result}`)
  },
}