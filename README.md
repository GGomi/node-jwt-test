## Express JWT 회원인증 API ![name](https://img.shields.io/badge/by-Jeongmin-green.svg)
Express를 이용한 간단한 JWT 회원인증 API입니다.

## 목차
- [1. 라이브러리](#라이브러리)
- [2. API Doc](#api-doc)
- [Reference](#reference)

## 라이브러리

<head>
    <style>  
    th, td {
        border: 2px solid;
    } 
    </style>
</head>

<table>
<thead>
    <tr>
        <th>Dependency</th>
        <th>Version</th>
        <th>ETC</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Express</td>
        <td>4.16.4</td>
    </tr>
    <tr>
        <td>jsonwebtoken</td>
        <td>8.5.1</td>
    </tr>
    <tr>
        <td>morgan</td>
        <td>1.9.1</td>
    </tr>
    <tr>
        <td>body-parser</td>
        <td>1.18.3</td>
        <td>Express 4.16부터 내장되므로 의존 추가 불필요</td>
    </tr>
</tbody>
</table>

## API Doc

<table>
<thead>
    <tr>
        <th>API</th>
        <th>설명</th>
        <th>비고</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>/api/auth/login</td>
        <td>사용자 로그인</td>
        <td>Request : id, password</td>
    </tr>
    <tr>
        <td>/api/auth/register</td>
        <td>사용자 생성</td>
        <td>Request : id, password</td>
    </tr>
    <tr>
        <td>/api/auth/check</td>
        <td>사용자 토큰 Validation</td>
        <td>Header (x-access-token) or queryString에 토큰 값</td>
    </tr>
</tbody>
</table>

- config 파일에 데이터베이스 정보 입력 (현재설정: 로컬 mongoDB)

## Reference
- [Node.js 로 JWT(JsonWebToken) 방식 RESTful api login 구현](https://g6ling.github.io/2016/09/17/nodejs-jwt-login/)
- [MongoDB Docs](https://docs.mongodb.com/manual/crud/#read-operations)
- [JWT 간단설명](https://tech.songyunseop.com/post/2017/03/express-with-jwt/)
- [JWT 간단설명 2](https://medium.com/@mjkim111/json-web-token-jwt-%EC%A0%95%EB%A6%AC-abbc80570301)
- [jwt.io](https://jwt.io/)
- [ES6 문법](http://wonwoo.ml/index.php/post/1691)
- [Javascript Promise](http://webframeworks.kr/tutorials/translate/es6-promise-api-1/)