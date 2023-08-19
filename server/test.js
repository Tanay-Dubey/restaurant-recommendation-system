const nodePickle = require('jpickle')
const fs = require('fs')

// Read the Pickle file
const pickleFilePath = './vector.pkl'; // Update with the actual file path
const pickleData = fs.readFileSync(pickleFilePath);

// Deserialize the Pickle data using picklejs
const vectors=nodePickle.loads(pickleData)

console.log(vectors)
