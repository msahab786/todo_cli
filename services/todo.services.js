const { formatDisplay } = require('../utility/general.utils');
const { fetchEvenTodos } = require('../api');

async function fetchAndDisplayTodos() {
  try {
    const results = await fetchEvenTodos();
    formatDisplay(results);
  } catch (error) {
    console.error("Error fetching TODOs:", error);
  }
}

module.exports = {fetchAndDisplayTodos};