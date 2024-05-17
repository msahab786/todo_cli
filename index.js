const { Command } = require("commander");
const { fetchAndDisplayTodos } = require("./services/todo.services");
const program = new Command();

program
  .name("todo-cli")
  .description("CLI to fetch and display the first 20 even-numbered TODOs")
  .version("1.0.0");

program.action(async () => {
  try {
    await fetchAndDisplayTodos();
  } catch (error) {
    console.error("Error fetching TODOs:", error);
  }
});

program.parse(process.argv);
