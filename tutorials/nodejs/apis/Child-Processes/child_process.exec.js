const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function lsExample() {
  const { stdout, stderr } = await exec('git add . ')
  console.log('stdout:\n', Object.prototype.toString.call(stdout), '\n', stdout, )
  console.log('stderr:', stderr)
}

lsExample()
