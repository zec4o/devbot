// imports
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

// importação dos comandos
const fs = require('node:fs')
const path = require('node:path')
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)

  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command)
  } else {
    console.log(
      `Esse comando em ${filePath} está com "data" ou "execute" ausentes`,
    )
  }
}

// Login do bot
client.once(Events.ClientReady, (c) => {
  console.log(`Feito! Logado como ${c.user.tag}`)
})
client.login(TOKEN)

// Listener de interações do bot.
client.on(Events.InteractionCreate, async (interaction) => {

  if (interaction.isStringSelectMenu()) {
    const selected = interaction.values[0];
    switch (selected) {
      case "javascript":
        await interaction.reply(`Documentation for ${selected}: https://developer.mozilla.org/en-US/docs/Web/JavaScript`);
        break;
      case "python":
        await interaction.reply(`Documentation for ${selected}: https://www.python.org/doc/`);
        break;
      case "csharp":
        await interaction.reply(`Documentation for ${selected}: https://learn.microsoft.com/en-us/dotnet/csharp/`);
        break;
      case "discordjs":
        await interaction.reply(`Documentation for ${selected}: https://discordjs.guide/#before-you-begin`);
        break;
      default:
        break;
    }
  }
  

  if (!interaction.isChatInputCommand()) return
  const command = interaction.client.commands.get(interaction.commandName)

  if (!command) {
    console.error('Comando não encontrado')
    return
  }
  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply('Houve um erro ao executar este comando!')
  }
})
