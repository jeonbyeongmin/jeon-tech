---
date: '2021-12-29'
title: '내가 블로그를 Gatsby로 만든 이유'
categories: ['Gatsby', 'SSG', 'Blog', 'Development']
summary: '최근 제가 공부했던 것과 발생한 문제들을 기록하고 싶다는 생각이 들었던 참이라, 저만의 기술 블로그를 만들어 보며 Gatsby에 대해 알아가는 시간을 가져 보았습니다. 개발 3일차, 타이핑 속도가 현저히 낮아졌다고 생각한 지금 Gatsby에 대해 좀 더 자세히 알아봐야겠다는 생각이 들었습니다. (제가 이 글을 쓰고 있는 이유이기도 하죠) 그럼 Gatsby 공식 문서와 여러 자료들을 찾아보고 제 나름대로 정리해보며 Gatsby를 좀 더 잘 이해해보도록 하겠습니다! 😆'
thumbnail: './gatsby.png'
---

최근 제가 공부했던 것과 발생한 문제들을 기록하고 싶다는 생각이 들었던 참이라, 저만의 기술 블로그를 만들어 보며 Gatsby에 대해 알아가는 시간을 가져 보았습니다. 개발 3일차, 타이핑 속도가 현저히 낮아졌다고 생각한 지금 Gatsby에 대해 좀 더 자세히 알아봐야겠다는 생각이 들었습니다. (제가 이 글을 쓰고 있는 이유이기도 하죠) 그럼 Gatsby 공식 문서와 여러 자료들을 찾아보고 제 나름대로 정리해보며 Gatsby를 좀 더 잘 이해해보도록 하겠습니다! 😆

<br>

---

## 왜 Gatsby를 사용했나요?

무언가 결정을 할 때, 스스로에게 '왜'라는 질문을 던지는 것이 참 중요하다고 생각합니다. 아무 이유 없이 결정하는 수동적인 태도가 싫기도 하고 무엇보다 '왜'라는 질문으로 내가 무엇을 알고 무엇이 부족한지 확실하게 알게 되기 때문입니다. 오늘은 제가 Gatsby를 쓰려고 결심한 이유와 함께 중요 개념들을 체크하는 시간을 가져보도록 하겠습니다.

### React 기반 SSG 프레임워크

React에 더 익숙했던 저는 React 기반 정적 사이트 생성기인 Next.js와 Gatsby 중 하나를 선택해야 했습니다. 두 프레임워크 모두 SSG로서 손색이 없다는 후기를 읽기도 했고 Gatsby 프로젝트에서 Next.js 프로젝트로 마이그레이션이 가능하다고 하여, 우선 Gatsby를 선택하였습니다.

### Gatsby는 Jamstack

제가 만들 블로그는 정적 사이트인 만큼 더 빠른 속도를 원했습니다. 이러한 이유로 저는 최신 아키텍처인 Jamstack로 웹을 구성하고자 했고, Gatsby는 이를 편하게 이뤄줄 수 있었습니다.

> #### Jamstack이란?
>
> Jamstack은 Javascript, API, Markup로만 이뤄진 최신 웹 구성 방식을 말합니다. Jamstack으로 구성된 웹은 기존보더 더 빠르고, 더 안전합니다. Jamstack을 사용하면 마크업 요소들과 다양한 API를 이용하여 사전에 만들어 놓은 페이지를 CDN을 통해 열람할 수 있습니다. 아래의 그림은 Jamstack의 구조를 이해하는 것에 도움이 되는 자료입니다.

![jamstack](./jamstack.png)

<br>

### Gatsby와 검색 엔진 최적화(SEO)

블로그는 많은 사람들이 보기 위해서 SEO가 필수적이라고 생각했습니다. 결론적으로 Gatsby로 정적페이지를 만들어내면 SEO에 유리했죠. Jamstack을 이용한 정적페이지는 SSR을 생각할 이유가 없습니다. Build-time에 정적 HTML을 만들어 내기 때문에 첫 화면에 의미있는 HTML을 빠른 속도로 로드할 수 있기 때문에 SEO에 유리한 것입니다!

![gatsby2](./gatsby2.png)

---

## Source

https://www.gatsbyjs.com/<br>
https://jamstack.org/what-is-jamstack/<br>
https://pks2974.medium.com/jam-stack-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-17dd5c34edf7<br>
