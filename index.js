const { Base64Encode } = require('base64-stream');
const fs = require('fs');

try {
    const stream = fs.createReadStream('./war-and-peace.txt');
    const copyStream = fs.createWriteStream('./copy.txt');
    stream.pipe(new Base64Encode()).pipe(process.stdout);
    stream.pipe(new Base64Encode()).pipe(copyStream);
} catch (err) {
    console.error(err);
    process.exit(1);
}