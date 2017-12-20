import React from 'react';
import ReactDom from 'react-dom';
// import Log from './log.js';
// import Tests from './tests.js';

//
// function Test() {
//     return (
//         <div>
//             <Log line={7}/>
//             <Log line={8}/>
//             <Log line={9}/>
//             <Tests/>
//         </div>
//     )
// }


function Neo({morpheus, smith, matrix}, notToUseContext) {
    /*
     * 以下参数需要Neo[执行/装载][函数/组建]时作为props传入,
     * 例如:
     * <Neo morpheus='parentCoponent' smith='134' matrix='/home/address-solution-d/log-effected-unit.repo/effected-reactjs-component.d/index.js'/>
     * Neo({parentCoponent, 134, '/home/address-solution-d/log-effected-unit.repo/effected-reactjs-component.d/index.js'});
     *
     * morpheus 是Neo所在组件，也即要测试是否已渲染的组件;
     * smith 这是[执行/装载][函数/组件](就是正在开发的Neo)的行数;
     * matrix 是要测试的组件(也即morpheus所在的文件名);
     * */
    console.log('000');
    console.log(arguments);
    console.log('001');
    const contextWarning = {
        name: 'context',
        warning: `Be careful! Argument context was pass into Smith!
The second argument pass into function component would be represent the [context] for current component,
react offcial documentation strongly recommend not to use it. 
If you insist on use it,
it's type must be a plain Object.`,
    };
    if (notToUseContext) {
        console.warn(contextWarning.warning);
    }

    morpheus = morpheus || 'Parent';
    smith = smith || '';
    matrix = matrix || '';
    const smithInfoStr = smith ? ` in [${smith}] line` : '';
    const matrixInfoStr = ` of the Script File [${matrix}]`;
    const msg = `[${morpheus}] component has been rendered; ${smithInfoStr}${matrixInfoStr};`;
    const devDeclareMsg = `This component is just used for dev evironment,
Make sure remove this component before commit work.`;
    console.log(msg + '\n' + devDeclareMsg);

    class Switcher extends React.Component {
        constructor() {
            super();
            this.state = {
                collapse: true,
                logDivShow: 'none',
                logBtnShow: 'inline-block',
            }
        }


        render() {
            const that = this;

            function logShowToggle() {
                that.state.collapse = !that.state.collapse;
                that.setState({
                    logDivShow: that.state.collapse ? 'block' : 'none',
                    logBtnShow: !that.state.collapse ? 'block' : 'none',
                });
            }

            const screenWidth = document.body.offsetWidth;
            const logBtnScale = '60px';
            const logLeft = screenWidth - parseFloat(logBtnScale) + 'px';
            const logColor = 'rgba(253,189,5, .2)';

            return (
                <div style={{
                    display: "relative",
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

    return (
        <Switcher/>
    )
}

ReactDom.render(
    <div>
        <Neo morpheus='parentCoponent' smith='134'
             matrix='/home/address-solution-d/log-effected-unit.repo/effected-reactjs-component.d/index.js'/>
        <Neo morpheus='parentCoponent' smith='134'
             matrix='/home/address-solution-d/log-effected-unit.repo/effected-reactjs-component.d/index.js'/>
    </div>,
    document.getElementById('root')
);
