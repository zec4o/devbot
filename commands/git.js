const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const embedMessage = new EmbedBuilder()
  .setColor('Orange')
  .setTitle('Git commands')
  .addFields(
    { name: '\u200B', value: '\u200B' },
    {
      name: '$ git init [name]',
      value: 'Cria um novo repositório local com um nome especificado',
      inline: true,
    },
    {
      name: '$ git clone [url]',
      value: 'Baixa um projeto e seu histórico de versão inteiro',
      inline: true,
    },
    {
      name: '$ git stash',
      value:
        'Armazena temporariamente todos os arquivos monitorados modificados',
      inline: true,
    },
    { name: '\u200B', value: '\u200B' },
    {
      name: '$ git status',
      value: 'Revise edições e crie uma transação de commit',
      inline: true,
    },
    {
      name: '$ git add [file]',
      value: 'Faz o snapshot de um arquivo na preparação para versionamento',
      inline: true,
    },
    {
      name: '$ git commit -m "[message]"',
      value:
        'Grava o snapshot permanentemente do arquivo no histórico de versão',
      inline: true,
    },
    { name: '\u200B', value: '\u200B' },
    {
      name: '$ git branch',
      value: 'Lista todos os branches locais no repositório atual',
      inline: true,
    },
    {
      name: '$ git branch [branch-name]',
      value: 'Cria uma nova branch',
      inline: true,
    },
    {
      name: '$ git switch -c [branch-name]',
      value:
        'Muda para a branch especificada e atualiza o diretório de trabalho',
      inline: true,
    },
    { name: '\u200B', value: '\u200B' },
    {
      name: '$ git merge [branch-name]',
      value: 'Combina o histórico da branch especificada a branch atual',
      inline: true,
    },
    {
      name: '$ git push [alias] [branch]',
      value: 'Envia todos os commits do branch local para o GitHub',
      inline: true,
    },
    {
      name: '$ git pull',
      value: 'Baixa o histórico e incorpora as mudanças',
      inline: true,
    },
  )

module.exports = {
  data: new SlashCommandBuilder()
    .setName('git')
    .setDescription('Relembrar comandos do Git'),

  async execute(interaction) {
    await interaction.reply({ embeds: [embedMessage] })
  },
}
