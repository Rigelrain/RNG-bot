module.exports = {
  name: 'roll',
  description: 'Roll a dice given as parameter.',
  aliases: ['roll', 'dice'],
  usage: '[die, ex. d20] [number of times to roll, ex x3]',
  execute(message, args) {
    // first arg = the die to roll
    let die = args.shift()

    console.log(`die to roll: ${die}`)

    if(!die) {
      return message.reply('You got to give me a die')
    }
    
    let rollnumber = parseInt(die)

    if(!rollnumber) {
      // check if the parameter is in format 'D20'
      // --> take out the 'D' and get the number
      die = die.substring(1)
      rollnumber = parseInt(die)
      if(!rollnumber) {
        // if it still doesn't match, give up
        return message.reply('You got to give me a die')
      }
    }

    // second arg is the number of times to roll
    const times = args.shift()
    console.log(`times to roll: ${times}`)
    let timestoroll = 1
    let result = 0

    if(times) {
      let usertimestoroll = parseInt(times)
      if(!usertimestoroll) {
        // user did not give a number of times to roll, check for 'x'
        // return message.reply(`You want to roll ${userarg}, really?`)
        usertimestoroll = parseInt(times.substring(1))
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

    // random = 0..1 -> multiply+floor = integer 0..19 -> +1 gets integer 1..20
    while(timestoroll > 0) {
      result += Math.floor(Math.random() * rollnumber) + 1
      // console.log(`result so far: ${result}`)
      timestoroll--
    }

    return message.reply(`Rollin D${rollnumber}! ... Got: ${result}`)    
  },
}