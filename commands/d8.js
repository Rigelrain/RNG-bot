const roll = require('./roll')

module.exports = {
  name: 'D8',
  description: 'Roll D8.',
  aliases: ['d8', 'eight', 'deight'],
  usage: '[number of dice]',
  execute(message, args) {
    const concatargs = ['8'].concat(args)
    roll.execute(message, concatargs)
  },
}