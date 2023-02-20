module.exports = {
  name: `interactionCreate`,
  async execute(intearction, client) {
    if (intearction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, cleint);
      } catch (error) {
        console.log(error);
        await interaction.reply({
          content: `Something went wrong while executing this command...`,
          ephemeral: true,
        });
      }
    }
  },
};
