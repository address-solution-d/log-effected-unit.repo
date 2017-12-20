import React, {Component} from 'react'


function genMsg(callerName, locationStr) {
    return (
        <div className='msg'>
            If you can see this msg,
            the function {callerName} has executed,
            {locationStr};
        </div>
    )
}

class Log extends Component {
    constructor() {
        super(props);
        this.state = {
            collapse: true,
            logDivShow: 'none',
            logBtnShow: 'inline-block',
        }
    }

    tmpFn(){
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
    }
    render() {
        const that = this;
        const line = this.props.line || '';
        const lineInfoStr = line ? ` in [${line}] line` : '';
        const componentName = this.props.componentName || '';
        const componentNameStr = filename ? ` of the Script File [${filename}]` : '';
        const locationStr = ` in ${lineInfoStr} script file${componentNameStr}`;
        const msg = `If you can see this msg, the function ${} has executed, {locationStr};`;
        let callerName;
        try {
            throw new Error();
        }
        catch (e) {
            let re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
            re.exec(st);
            m = re.exec(st);
            callerName = m[1] || m[2];
        }
        const msgStr = `If you can see this msg,
the function ${callerName} has executed,
${locationStr};`;
        const msgComponent = genMsg(callerName, locationStr);
        const devDeclareMsg = `This component is just used for dev evironment,
Make sure remove this component before commit work.`;
        console.log(`
            ${msgStr}
        `);

        const screenWidth = document.body.offsetWidth;
        const logBtnScale = '60px';
        const logLeft = screenWidth - parseFloat(logBtnScale) + 'px';
        const logColor = 'rgba(253,189,5, .2)';

        function logShowToggle() {
            that.state.collapse = !that.state.collapse;
            that.setState({
                logDivShow: that.state.collapse ? 'block' : 'none',
                logBtnShow: !that.state.collapse ? 'block' : 'none',
            });
        }

        return (
            <div style={{
                display:"relative",
            }}>
                <div
                    onClick={logShowToggle}
                    className="logBtn"
                    style={{
                        display: this.state.logBtnShow,
                        // position: 'absolute',
                        border: "1px solid rgba(253,189,5, .4)",
                        left: logLeft,
                        width: logBtnScale,
                        height: logBtnScale,
                        backgroundColor: logColor,
                        textAlign: 'center',
                        lineHeight: logBtnScale,
                    }}>
                    LOG
                </div>
                <div
                    onClick={logShowToggle}
                    style={{
                        display: this.state.logDivShow,
                        // position: 'absolute',
                        border: "1px solid rgba(253,189,5, .4)",
                        backgroundColor: logColor,
                        padding: '10px',
                    }}>
                    <div style={{color: 'rgba(243,112,33,.9)'}}>{msg}</div>
                    <div style={{color: 'rgba(41,56,150,.9)'}}>{devDeclareMsg}</div>
                </div>
            </div>
        )
    }
}

export default Log;