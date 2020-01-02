/*
show js by codemirror for react (jsx)

지정한 javascript/jsx를 색을 입혀서 보여준다.

callback으로 필요한 스크립트가 전부 로드된 다음에 필요한 코드를 실행한다.
*/

// var _showjsCM = {}
// _showjsCM['codemirror.css'] = "https://unpkg.com/codemirror@5.49.2/lib/codemirror.css";
// _showjsCM['codemirror.js'] = "https://unpkg.com/codemirror@5.49.2/lib/codemirror.js";
// _showjsCM['javascript.js'] = "https://unpkg.com/codemirror@5.49.2/mode/javascript/javascript.js";
// _showjsCM['xml.js'] = "https://unpkg.com/codemirror@5.49.2/mode/xml/xml.js";
// _showjsCM['jsx.js'] = "https://unpkg.com/codemirror@5.49.2/mode/jsx/jsx.js";

function showjs(CodeMirrorOptions){
    function loadScript(src){
        var _myScript = document.createElement('script');
        _myScript.src = src;                
        return _myScript;
    }
    var myScripts=document.createElement('div');
    document.head.appendChild(myScripts);

    var linkStyle = document.createElement('link');
    linkStyle.rel = "stylesheet";
    linkStyle.type = "text/css";
    linkStyle.href = "https://unpkg.com/codemirror@5.49.2/lib/codemirror.css";
    myScripts.appendChild(linkStyle);

    // 코드를 스크롤하지 않고 한번에 표시하게 style을 지정.
    var showjsStyle = document.createElement('style');
    showjsStyle.innerText = ".CodeMirror { " 
    +"    line-height: 1em; "
    +"    font-family: monospace; "
    +"    height: 100%; "
    +"    /* Necessary so the scrollbar can be absolutely positioned within the wrapper on Lion. */ "
    +"    position: relative; "
    +"    /* This prevents unwanted scrollbars from showing up on the body and wrapper in IE. */ "
    +"    overflow: hidden; "
    +"} "
    +".CodeMirror-scroll { "
    +"    overflow: auto; "
    +"    height: 100%; "
    +"    /* This is needed to prevent an IE[67] bug where the scrolled content "
    +"        is visible outside of the scrolling box. */ "
    +"    position: relative; "
    +"    outline: none; "
    +"} ";/* https://tridion.stackexchange.com/a/12240 */
    myScripts.appendChild(showjsStyle);
    
    var CodeMirrorJS = loadScript("https://unpkg.com/codemirror@5.49.2/lib/codemirror.js");
    myScripts.appendChild(CodeMirrorJS);
    CodeMirrorJS.onload = function(){
        var JavascriptJS = loadScript("https://unpkg.com/codemirror@5.49.2/mode/javascript/javascript.js");
        myScripts.appendChild(JavascriptJS);
        JavascriptJS.onload = function(){
            var XmlJS = loadScript("https://unpkg.com/codemirror@5.49.2/mode/xml/xml.js");
            myScripts.appendChild(XmlJS);
            XmlJS.onload = function(){
                var jsxJS = loadScript("https://unpkg.com/codemirror@5.49.2/mode/jsx/jsx.js");
                myScripts.appendChild(jsxJS);
                jsxJS.onload = function(){
                    var myCodeDiv = document.createElement('div');
                    document.body.appendChild(myCodeDiv);     
                    CodeMirror(myCodeDiv, CodeMirrorOptions);
                };
            };
        };
    };
};
