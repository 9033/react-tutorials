# react tutorials
## 👉 tic_tac_toe
tic tac toe 게임.  
[자습서 링크](https://ko.reactjs.org/tutorial/tutorial.html)  
[실습](./tic_tac_toe)  
### 실행 (development)
`..\tic_tac_toe> npm start`  
### 브라우저 호환
`..\tic_tac_toe> npm run build`  
`..\tic_tac_toe> serve -s build`  
로 production환경에서 실행하면 IE 11, Edge에서도 동작함.  
## 👉 웹사이트에 React 추가
[문서](https://ko.reactjs.org/docs/add-react-to-a-website.html)  
[실습](./react_to_html)  
## 👉 리액트 웹앱 제작 총론 (learning-react 2/e)  
React란 무엇인가? 어떻게 사용하는가 알기위해 보는중.  
### 연습 중인 코드.  
[소스 보기](./learning-react) : Github  
[웹에서 보기](http://skyred.cloud/learning-react/) : 결과랑 코드를 같이 볼 수 있음.  

## 👉 react
html+javascipt로 구현하는 front-end에 객체지향의 장점을 끌어왔다고 볼 수 있다. 가독성, 재사용성이 높다.  
그냥 javascript로 짜면 html, css, 스크립트가 한 파일안에 여기 저기 있는 상황이 되기 쉽다.  
한 class안에 html+css과 관련 동작을 하는 javascript 코드를 작성한다.  
## 👉 걸림돌
### JSX를 실행할때 crossorigin에러
script태그를 이용해서 babel.min.js를 index.html에 넣고  
바로 브라우저에 index.html파일을 읽으면 발생한다.  
### 결과 보기
정적 웹서버를 실행하면 된다.  
`..\learning-react>serve -s`  
파이선이 있으면 다음과 같이 실행해도 된다.  
`..\react_to_html>python -m http.server 8000`  
가장 뒤에 숫자는 포트 번호.  
### 자동화 된 JSX 감시기
JSX전처리기를 실행하면 JSX가 들어있는 코드가 변경되면 자동으로 순수 js로 변경해서 저장한다.  
감시기를 명령창에서 실행하고나서 얼핏 보면 멈춘것 처럼 보인다. 이 상태에서 코드가 변경될 때마다 동작한다.  
`like_button.js`가 `src/like_button.js`에서 변환된 파일이다.  
### npm run build 할때 상대 경로로 지정.
package.json에서 homepage를 추가한다.  
```json
{
  "...": "...",
  "homepage": "./",
  "...": "..."
}
```
index.html에서 필요한 파일과 스크립트에 대한 링크가 상대 경로로 번경된다.  
### 아나콘다 환경에서 nodejs 설치가 필요할때  
`conda install nodejs`  
### visual studio code에서 아나콘다 환경의 터미널 실행.
'anaconda3 prompt' 단축 아이콘을 참고해서  
.vscode/setting.json 파일을 설정해주면 된다.  
다음을 참고해서 상황에 맞게 경로를 설정한다.  
```
{
    "terminal.integrated.shell.windows": "c:\\windows\\System32\\cmd.exe",
    "terminal.integrated.shellArgs.windows": ["/K","C:\\Users\\q\\Anaconda3\\Scripts\\activate.bat C:\\Users\\q\\Anaconda3"]
}
``` 
