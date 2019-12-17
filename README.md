# react tutorials
## 아나콘다 환경에서 nodejs설치
`conda install nodejs`  
## tic_tac_toe
tic tac toe 게임.  
[자습서 링크](https://ko.reactjs.org/tutorial/tutorial.html)  
[실습](./tic_tac_toe)  
### 실행 (development)
`..\tic_tac_toe> npm start`  
### 기타
`..\tic_tac_toe> npm run build`  
`..\tic_tac_toe> serve -s build`  
로 production환경에서 실행하면
IE 11, Edge에서도 동작함.  
## 웹사이트에 React 추가
[문서](https://ko.reactjs.org/docs/add-react-to-a-website.html)  
[실습](./react_to_html)  
### JSX를 실행할떄 crossorigin에러
script태그를 이용해서 babel.min.js를 index.html에 넣고  
바로 브라우저에 index.html파일을 읽으면 발생한다.  
웹서버를 실행하면 된다. 가장 뒤에 숫자는 포트 번호.  
`..\react_to_html>python -m http.server 8000`  
### 자동화 된 JSX 감시기
JSX가 들어있는 코드를 자동으로 순수 js로 변경해서 저장.  