const Table = require('cli-table3');

function formatDisplay(todo){
    const table = new Table({
        head: ['ID', 'Title', 'Completed'],
        colWidths: [5, 80, 15]
      });
  
      todo.forEach(task => {
        table.push([task.id, task.title, task.completed]);
      });
  
      console.log(table.toString());
};

module.exports = {formatDisplay};