const fs = require('fs');

try {
    const stream = fs.createReadStream('./war-and-peace.txt');
    const copyStream = fs.createWriteStream('./copy.txt');
    stream.pipe(process.stdout);
    stream.pipe(copyStream);
} catch (err) {
    console.error(err);
    process.exit(1);
}