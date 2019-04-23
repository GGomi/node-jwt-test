## Express JWT 회원인증 API ![name](https://img.shields.io/badge/by-Jeongmin-green.svg)
Express를 이용한 간단한 JWT 회원인증 API입니다.

## 목차
- [1. 라이브러리](#라이브러리)
- [2. API Doc](#api-doc)
- [Reference](#reference)

## 라이브러리

Dependency|Version|ETC
-|-|-
Express|4.16.4|
jsonwebtoken|8.5.1|
mongoose|5.5.2|
morgan|1.9.1|
body-parser|1.18.3|Express 4.16부터 내장되므로 의존 추가 불필요

## API Doc

API|설명|비고
-|-|-
/api/auth/login|사용자 로그인|Request : id, password
/api/auth/register|사용자 생성|Request : id, password
/api/auth/check|사용자 토큰 Validation|Header (x-access-token) or queryString에 토큰 값

- config 파일에 데이터베이스 정보 입력 (현재설정: 로컬 mongoDB)

## Reference
- [Node.js 로 JWT(JsonWebToken) 방식 RESTful api login 구현](https://g6ling.github.io/2016/09/17/nodejs-jwt-login/)
- [MongoDB Docs](https://docs.mongodb.com/manual/crud/#read-operations)
- [JWT 간단설명](https://tech.songyunseop.com/post/2017/03/express-with-jwt/)
- [JWT 간단설명 2](https://medium.com/@mjkim111/json-web-token-jwt-%EC%A0%95%EB%A6%AC-abbc80570301)
- [jwt.io](https://jwt.io/)
- [ES6 문법](http://wonwoo.ml/index.php/post/1691)
- [Javascript Promise](http://webframeworks.kr/tutorials/translate/es6-promise-api-1/)