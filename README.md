- 이름 : 김범진
- 실행 방법 : npm install & npm start
- 배포 링크 : https://wanted-beomjin.netlify.app/

# 진행가이드 준수 여부

- Create React App 이용 ✅
- git clone & npm install & npm start ✅
- 함수 컴포넌트 ✅
- README.md (성명, 실행방법, 데모영상 또는 링크) ✅
- 사용가능 라이브러리 준수 ✅
- 도메인 URL 바로 뒤에 이어지게 경로 설정 ✅

<br/>

# 디렉토리 구조

    📦src
    ┣ 📂api
    ┃ ┣ 📜auth.ts
    ┃ ┣ 📜axiosInstance.ts
    ┃ ┣ 📜todo.ts
    ┣ 📂components
    ┃ ┣ 📜AuthForm.tsx
    ┃ ┣ 📜TodoItem.tsx
    ┣ 📂pages
    ┃ ┣ 📜Home.tsx
    ┃ ┣ 📜Signin.tsx
    ┃ ┣ 📜Signup.tsx
    ┃ ┣ 📜Todo.tsx
    ┣ 📂type
    ┃ ┣ 📜form.ts
    ┃ ┣ 📜todo.ts
    ┣ 📜App.tsx
    ┣ 📜index.ts

<br>

# 과제 요구사항 구현

어떻게 best practice라고 글로 설명해야 할지 잘 모르겠어서 과제에서 구현하기를 요구했던 기능의 핵심 로직이라고 생각되는 코드들의 위치만 일단 남겨두었습니다. ( \_ \_ )

## 1. 로그인 / 회원가입

<br>

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사

  - src/components/AuthForm.tsx : line 74

- 회원가입 진행후 /signin 경로로 이동

  - src/components/AuthForm.tsx : line 27 (handleSubmit)

- 로그인 진행후 /todo 경로로 이동

  - src/components/AuthForm.tsx : line 27 (handleSubmit)

- 로그인 여부에 따른 리다이렉트

  - src/components/Todo.tsx : line 21 (useEffect)

- 토큰이 있고 /signin 또는 /signup 페이지에 접속하면 /todo로 리다이렉트
  - src/pages/signin : line 13 (useEffect)
  - src/pages/signup : line 13 (useEffect)

<br>

## 2. TODO LIST

<br>

- /todo 경로에서 투두 리스트 목록 표시
  - src/pages/Todo.tsx
    - line 21 (useEffect)
    - line 13 (reload)
    - line 52 (todos.map)

<br>

- 투두의 내용과 완료 여부 표시
  - src/components/TodoItem.tsx
    - line 70 (span)
    - line 28 (li>label>input)

<br>

- 새로운 투두 입력 input과 추가 버튼
  - src/pages/Todo.tsx
    - line 31 (input)
    - line 38 (button)

<br>

- 추가 버튼 클릭시 새로운 투두로 추가
- 새로 고침 후에도 추가한 투두가 목록에 보여야함
  - src/pages/Todo.tsx : line 40 (onClick)

<br>

- 투두의 체크박스를 통해 완료 여부 수정
  - src/components/TodoItem.tsx
    - line 31 (checked)
    - line 32 (onChange)

<br>

- 투두 우측에 수정버튼과 삭제 버튼
  - src/components/TodoItem.tsx
    - line 71 (button)
    - line 79 (button)

<br>

- 투두 리스트의 삭제 기능
  - src/components/TodoItem.tsx
    - line 81 (onClick)

<br>

- 투두 우측 수정 버튼 클릭시 수정모드 활성화
  - src/components/TodoItem.tsx
    - line 14 (useState)
    - line 73 (onClick)

<br>

- 수정 모드에서는 투두 내용 변경 가능
  - src/components/TodoItem.tsx
    - line 15 (useState)
    - line 37 (input)

<br>

- 수정 모드에서는 투두 우측에 제출버튼과 취소버튼 표시
  - src/components/TodoItem.tsx
    - line 14 (useState)
    - line 44 (button)
    - line 59 (button)

<br>

- 제출 버튼 클릭시 내용 제출 후 업데이트
  - src/compoents/TodoItem.tsx
    - line 46 (onClick)

<br>

- 취소 버튼 클릭시 수정한 내용 초기화하고 수정모드 비활성화
  - src/components/TodoItem.tsx
    - line 61 (onClick)
