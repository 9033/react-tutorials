# react tutorials
## 👉 아나콘다 환경에서 nodejs설치
`conda install nodejs`  
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
### JSX를 실행할때 crossorigin에러
script태그를 이용해서 babel.min.js를 index.html에 넣고  
바로 브라우저에 index.html파일을 읽으면 발생한다.  
웹서버를 실행하면 된다. 파이선의 경우는 다음과 같다.  
`..\react_to_html>python -m http.server 8000`  
가장 뒤에 숫자는 포트 번호.  
### 자동화 된 JSX 감시기
JSX전처리기를 실행하면 JSX가 들어있는 코드가 변경되면 자동으로 순수 js로 변경해서 저장한다.  
감시기를 명령창에서 실행하고나서 얼핏 보면 멈춘것 처럼 보인다. 이 상태에서 코드가 변경될 때마다 동작한다.  
`like_button.js`가 `src/like_button.js`에서 변환된 파일이다.  
## 👉 리액트 웹앱 제작 총론 (learning-react 2/e)  
React란 무엇인가? 어떻게 사용하는가 알기위해 보는중.  
### 연습 중인 코드.  
[소스 보기](./learning-react/readme.md) : Github  
[웹에서 보기](http://skyred.cloud/learning-react/) : 결과랑 코드를 같이 볼 수 있음.  

## 👉 react
front-end에 객체지향의 장점을 끌어왔다고 볼 수 있다. 가독성, 재사용성이 높다.  
그냥 javascript로 짜면 html과 스크립트가 한 파일안에 여기 저기 있는 상황이 되기 쉽다.  
react는 html도 렌더링 함으로써 한 class안에 html과 관련 동작을하는 코드를 작성하게 한다.  