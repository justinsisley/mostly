import path from 'path';

const serverDir = path.join(__dirname, '../../');

function start() {
  // Require chokidar just in time so it can be a devDependency
  const chokidar = require('chokidar'); // eslint-disable-line
  const watcher = chokidar.watch(serverDir);

  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('Server module cache cleared');

      Object.keys(require.cache).forEach((id) => {
        if (/[/\\]server[/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}

export default {
  start,
};
