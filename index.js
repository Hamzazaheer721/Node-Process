const { spawn } = require('child_process')

const child = spawn('ls', ['-lh']);

child.stdout.on('data', data => {
  console.info({data});
})

child.stderr.on('data', data => {
  console.info({data});
})

child.on('error', error => console.info({error}))

child.on('exit', (code, signal) => {
  if (code) console.info(`Process exit with code ${code}`);
  if (signal) console.info(`Process killed with signal: ${signal}`);
  console.info('Done')
});