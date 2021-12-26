
<br/>
<br/>

### 📌 12월 26일 - 블로그 초기 형태 잡아두었음
- Atomic design으로 프로젝트 생성
- React, Gatsby, Typescript, emotionJS (Styled-component보다 빠른데 문법적으로 거의 똑같다.. Sass도 해봐야하는데..)
- 홈 스크린, post 스크린, 전체적인 스타일 잡아두었음
- Gatsby Cloud로 배포 (테스트) (https://jeondev.gatsbyjs.io/)
- Gatsby를 실제로 해보니 리액트 프로젝트에서 크게 벗어나지도 않고 결과물도 엄청 빠릿빠릿하니 기분이 좋다.
- Typescript는 더 열심히 찾아봐야겠다..
- 정적 사이트이기도 하고 볼륨이 크지도 않으니 천천히 익숙해지는 것에 집중해야겠다.

<br/>
<br/>

<img width="1976" alt="스크린샷 2021-12-26 23 01 36" src="https://user-images.githubusercontent.com/28756358/147410446-9edaf17d-cc0a-48a1-8e4c-849ba6c063bd.png">

<br/>

### 📌 12월 26일 (2) - 이벤트 작동 에러 발생
- 모바일 뷰 환경에서 더 좋은 사용자 경험을 위해 햄버거 메뉴를 제공하기로 결정하였다.
- 코드를 작성하고 잘 작동하는 것을 확인하였다.
- 하지만 빌드 이후 클릭을 해도 토글이 정상적으로 작동하지 않는 현상이 발견되었다.
- 여러 기기로 테스트해본 결과 오직 데스크톱 크롭에서만 오작동을 일으켰다.
- 여기저기 찾아보니 Gatsby에서 제공하는 GatsbyImage를 emotionJS로 감싸 스타일된 컴포넌트를 만든 뒤.
- 그 컴포넌트에 이벤트를 설정했던 것이 원인이 된 것으로 보인다. 즉, 개츠비와 emotionJS의 혼합 사용이 문제가 되었다.
- 해결을 했기 때문에 나름대로 분석을 해보면, 모듈들이 중첩되어 있을수록 더 오랜 시간이 걸릴 것이고
- 이벤트를 다 읽기도 전에 페이지를 완성시켜 토글이 작동하지 않은 것으로 생각이 된다. 
- (그도 그런 것이, 다른 페이지로 이동하였다가 다시 돌아오면 토글이 잘 작동하였다.)
- 크롬 데스크톱 브라우저와 개츠비의 동작 원리를 면밀하게 비교하며 알아봐야 제대로 된 원인을 파악할 수 있을 듯 하다.
