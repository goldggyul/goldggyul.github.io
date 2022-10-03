---
imageEmoji: spring-boot-logo.png
title: 스프링 빈과 의존관계 - 스프링 입문 | 매일 1시간 👨🏻‍🏫 ＃3
date: '2022-10-04 02:52:00'
author: goldggyul
tags: 강의
categories: 강의
---

> 본 게시글은 [스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8/) 강의를 듣고 필기용으로 정리했습니다.

#  ☘️ 스프링 빈과 의존 관계

이때까지 잘 만든 걸 화면이랑 붙여보자. 그러려면 Controller와 View Template이 필요하다.

그럼 Controller가 Service를 통해 조회, 가입 등등을 한다. 그렇다면 MemberController가 MemberService를 의존하게 된다.

이걸 스프링을 통해 스프링스럽게 해보자. 

## 📌 컴포넌트 스캔과 자동 의존관계 설정

```java
@Controller
public class MemberController {
}

```

- `@Controller` 어노테이션을 통해 스프링이 시작될 때 스프링 컨테이너 통에 이 MemberController객체가 생성되어서 넣어진다.
  - <u>**Spring Bean**</u>이 관리된다.

- `MemberService` 역시 하나 생성해놓고 여러 컨트롤러에서 공유해서 사용해도 된다. 따라서 스프링 컨테이너에 등록해두는 것이 더 좋다. (+ 부가적인 효과.. coming soon..)

-  생성자에 `@Autowired`를 적어준다면 해당 빈이 생성될 때 스프링이 컨테이너에 있는 필요한 인자들을 연결시켜준다.

  ```java
  @Controller
  public class MemberController {
      private final MemberService memberService;
  
      @Autowired
      public MemberController(MemberService memberService) {
          this.memberService = memberService;
      }
  }
  ```

  - 어라랏 근데... `MemberService`를 스프링 컨테이너에 등록은 하셨나요? 등록하지 않으면 당연히 컨테이너에 없기 때문에 MemberController를 띄울 때 생성자에 자동으로 주입해주지 못할 것이다.
  - 그러니까 `MemberService`에는 `@Service`,  `MemoryMemberRepository`에는 `@Repository` 어노테이션을 붙여서 스프링에 등록하자.

### 스프링 빈을 등록하는 방법

위 예시처럼 `@Controller`, `@Service`, `@Repository`를 하는 방법은 <u>**컴포넌트 스캔**</u> 방식이다.

- 사실 위 어노테이션들은 `@Component` 어노테이션을 포함하고 있다. 이 어노테이션이 있으면, 스프링이 실행될 때 객체를 생성해서 컨테이너에 등록을 해둔다. 그리고 `@Autowired`가 서로 의존 관계를 이어준다.

웬만하면 빈으로 등록하고 쓰게 되는데.. 이게 왜 좋은 지는 <mark>🔜</mark>

그리고 다른 방식은 아래에서 설명할 자바 코드로 직접 등록하는 방법이다

<u>**두 가지 방식 모두 알아야 한다.**</u>

### 컴포넌트 스캔 위치 

기본적으로 `@SpringBootApplication` 어노테이션이 있는 Application 클래스가 포함된 <u>**그 패키지 포함 하위 패키지를 스캔해서 등록**</u>해준다.

- 사실은 위 어노테이션에 `@ComponentScan`이 포함돼있다. 이 어노테이션이 있으면 찾아서 들어오는 것

### 컴포넌트는 싱글톤

스프링은 스프링 컨테이너에 스프링 빈을 등록할 때, 기본으로 싱글톤으로 등록한다(유일하게 하나만 등록해서 공유한다) 따라서 같은 스프링 빈이면 모두 같은 인스턴스다. 설정으로 싱글톤이 아니게 설정할 수 있지만, 특별한 경우를 제외하면 대부분 싱글톤을 사용한다.

## 📌 자바 코드로 직접 스프링 빈 등록하기

위 컴포넌트 스캔처럼 어노테이션을 통해 자동으로 등록하고 자동으로 연결했지만, 이번에는 <u>**직접 스프링에 등록**</u>해보자.

### Configuration 클래스 만들기

```java
@Configuration
public class SpringConfig {

    @Bean
    public MemberService memberService() {
        return new MemberService(memoryMemberRepository());
    }

    @Bean
    public MemberRepository memoryMemberRepository() {
        return new MemoryMemberRepository();
    }
}

```

- 스프링이 `@Configuration`을 읽고, `@Bean`을 컨테이너에 올려준다.

- 다만 `@Controller`는 스프링이 관리해야 하기 때문에 컴포넌트 스캔으로 두자.

## 📌 참고

> ### DI
>
> DI에는 필드 주입, setter 주입, 생성자 주입 이렇게 3가지 방법이 있다. 의존관계가 실행중에 동적으로 변하는 경우는 거의 없으므로 <u>**생성자 주입을 권장**</u>
>
> - 필드 주입: 뭔가 다른 추가적인 일을 할 수 없다.
> - setter 주입: setter가 public으로 열려 있게 된다. 문제 생길 여지가 있다.
> - 생성자 주입: 맨  처음 어플리케이션이 조립될 때만 호출되고 끝난다.
>
> 주의할 점은 스프링이 생성해줄 때가 아니라 내가 직접 `new`할 때는 자동으로 연결되지 않는다. <u>스프링 컨테이너에 올라가는 것들만 정상적으로 연결</u>된다.
>
> ### 컴포넌트 스캔 vs. 스프링 빈으로 직접 등록
>
> 실무에서는 주로 정형화된 <u>컨트롤러, 서비스, 리포지토리</u> 같은 코드는 `컴포넌트 스캔`을 사용한다. 그리고 정형화 되지 않거나, <u>**상황에 따라 구현 클래스를 변경**</u>해야 하면 설정을 통해 `스프링 빈으로 등록`
>
> ➡️ 따라서 `MemberRepository` 구현체를 기존 운영 코드를 손대지 않고 바꿔치기 위해서 스프링 빈으로 등록하는 방법을 사용하자.

























```toc
```

