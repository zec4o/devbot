const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Ouça a melhor playlist de estudos'),

  async execute(interaction) {
    await interaction.reply(
      'https://open.spotify.com/playlist/2p4VHspwWWMDyRjkp3tdit?si=17a118ae468e4fed',
    )
  },
}
