const { spawn, exec, execFile } = require('child_process');

const child = spawn('ls', ['-lh']); // it uses buffer, so you can load large files data with it.

child.stdout.on('data', (data) => {
  console.info({ data });
});

child.stderr.on('data', (data) => {
  console.info({ data });
});

child.on('error', (error) => console.error({ error }));

child.on('exit', (code, signal) => {
  if (code) console.error(`Process exit with code ${code}`);
  if (signal) console.error(`Process killed with signal: ${signal}`);
  console.info('Done');
});

exec('ls -lh', (error, stdout, stderr) => {
  if (stdout) console.info({execStdOut: stdout});
  if (stderr) console.info({execStdError: stderr})
  if (error) console.error({execError: error.message})
})

execFile('./command.sh', (error, stdout, stderr) => {
  if (stdout) console.info({execFileStdOut: stdout});
  if (stderr) console.info({execFileStdError: stderr})
  if (error) console.error({execFileError: error.message})
})