function logFn(filename, line) {
    line = line || '';
    const lineInfoStr = line ? ` in [${line}] line` : '';
    const filenameInfoStr = ` of the Script File [${filename}]`;
    let callerName;
    try {
        throw new Error();
    } catch (e) {
        let re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
        re.exec(st);
        m = re.exec(st);
        callerName = m[1] || m[2];
    }
    const msg = `Function: [${callerName}] has been executed at ${lineInfoStr}${filenameInfoStr};`;
    console.log(msg);
};

function usage() {
    logFn('logFn.js', 20);
    logFn('logFn.js', 21);
    logFn('logFn.js', 22);
}

usage();
