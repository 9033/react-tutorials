/*
show js by codemirror for react (jsx)

지정한 javascript/jsx를 색을 입혀서 보여준다.

callback으로 필요한 스크립트가 전부 로드된 다음에 필요한 코드를 실행한다.
*/
function showjs(myJS){
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
                    // var myReactScript = document.body.querySelector('#myscript').innerText;
                    var myCodeMirror = CodeMirror(myCodeDiv, {
                        value: myJS,
                        mode:  "jsx",
                        readOnly : "nocursor",
                    });                                       
                };
            };
        };
    };
};
// var myCodeDiv = document.createElement('div');
// document.body.appendChild(myCodeDiv);     
// var myReactScript = document.body.querySelector('#myscript').innerText;
// var myCodeMirror = CodeMirror(myCodeDiv, {
//     value: myReactScript,
//     mode:  "jsx",
//     readOnly : "nocursor",
// });           
