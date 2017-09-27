require('fs').readFileSync('testNode.txt')
             .toString().split('\n')
             .forEach(function (line) { console.log('['+line+']'); })