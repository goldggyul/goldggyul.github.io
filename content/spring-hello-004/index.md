---
imageEmoji: spring-boot-logo.png
title: 회원 관리 예제 / 웹 MVC 개발 - 스프링 입문 | 매일 1시간 👨🏻‍🏫 4일차
date: '2022-10-04 03:59:00'
author: goldggyul
tags: 강의
categories: 강의
---

> 본 게시글은 [스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8/) 강의를 듣고 정리했습니다.

#  ☘️ 회원 관리 예제 - 웹 MVC 개발

## 📌 회원 웹 기능 - 홈 화면 추가

홈 화면을 추가해보자.

- 컨트롤러를 통해 홈 화면 html을 리턴할 것이므로 `src/main/resources/templates`에 home.html을 만들어주자.

  ```html
  <!DOCTYPE HTML>
  <html xmlns:th="http://www.thymeleaf.org">
  <body>
  <div class="container">
      <div>
          <h1>Hello Spring</h1>
          <p>회원 기능</p>
          <p>
              <a href="/members/new">회원 가입</a>
              <a href="/members">회원 목록</a>
          </p>
      </div>
  </div> <!-- /container -->
  </body>
  </html>
  ```

  - 회원 가입과 회원 목록은 ~~/members/new 와 ~~/members로 이동하도록 연결해놨다. 아래에서 컨트롤러를 연결해주자.

- 그리고 컨트롤러에서 home을 리턴해주자. 그럼 <u>**viewResolver가 templates에서 같은 이름의 파일을 찾고 필요하면 처리**</u>를 하고 내보내겠죠?

  ```java
  @Controller
  public class HomeController {
      @GetMapping("/")
      public String home(){
          return "home";
      }
  }
  ```

어라라? 근데 이미 `static` 폴더에 `index.html`을 추가해놔서 welcome page로 home에선 해당 파일이 나오지 않았던가?

- 하지만 스프링은 우선 컨트롤러를 찾고, 없으면 static에서 정적 파일을 찾는다. 이 경우 컨트롤러가 있으므로 정적 파일을 찾지 않는다.

## 📌 회원 웹 기능 - 등록 

### 회원가입 페이지와 컨트롤러

회원 가입을 누르면 'members/new'로 이동하게 되어 있었다. 

따라서 회원 가입 페이지와, 페이지를 연결해주는 컨트롤러를 만들자.

```java
@Controller
public class MemberController {
    // ...
    @GetMapping("/members/new")
    public String createForm() {
        return "members/createMemberForm";
    }
}
```
- 위 리턴되는 경로대로 templates에 members 디렉터리를 생성하고 createMemberForm.html을 만들자.

  ```html
  <!DOCTYPE HTML>
  <html xmlns:th="http://www.thymeleaf.org">
  <body>
  <div class="container">
      <form action="/members/new" method="post">
          <div class="form-group">
              <label for="name">이름</label>
              <input type="text" id="name" name="name" placeholder="이름을
  입력하세요">
          </div>
          <button type="submit">등록</button>
      </form>
  </div> <!-- /container -->
  </body>
  </html>
  ```

- 이제 값(이름)을 받아와야 한다.

- 그럼 우선 서버에 값이 어떻게 갈까?

  - submit 버튼을 누르면 form 태그에 action에 적힌 url로 method 방식으로 요청이 간다.
    - 따라서 이 경우에는 "members/new"로  POST 방식으로 요청이 간다.
  - input 태그를 보면 name이 "name"으로 되어 있다. 이게 서버로 넘어갈 때 key가 된다.

- 그럼  "/members/new" url과 POST 맵핑된 컨트롤러를 만들고, 값을 받아올 때는  input의 name인 "name"과 필드 이름이 같은 객체를 파라미터로 받으면 된다. 그럼 스프링이 알아서 객체의 setter를 통해 값을 넣어준다.

  ```java
  public class MemberForm {
      private String name;
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  }
  ```

- 컨트롤러에서 성공적으로 가입 시킨 후에는 다시 홈으로 redirect 시켜주자.

- 아직 뭔가 가입 후에 나오지 않지만, 중복되는 이름을 입력하면 그 전에 memberService에서 이름 체크하는 로직을 넣어놨으므로 에러가 발생한다.

  ```java
  @Controller
  public class MemberController {
  		// ...
      @PostMapping("/members/new")
      public String create(MemberForm form){
          Member member = new Member();
          member.setName(form.getName());
          memberService.join(member);
          return "redirect:/";
      }
  }
  ```

## 📌 회원 웹 기능 - 조회

회원 목록에선 "members"로 이동하게 되어 있다.

따라서 컨트롤러에서 "members"와 GetMapping시킨 후에, 컨트롤러에서는 service로부터 멤버를 받아오고 model에 담은 뒤에, 템플릿을 리턴하면 된다.

```java
@Controller
public class MemberController {
		// ...
    @GetMapping("/members")
    public String show(Model model){
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        return "members/memberList";
    }
}
```

```html
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<body>
<div class="container">
    <div>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>이름</th>
            </tr>
            </thead>
            <tbody>
            <tr th:each="member : ${members}">
                <td th:text="${member.id}"></td>
                <td th:text="${member.name}"></td>
            </tr>
            </tbody>
        </table>
    </div>
</div> <!-- /container -->
</body>
</html>
```

- 모델에 멤버들 `List`를 넘겼다. 
- 그럼 타임리프 템플릿 엔진에서 넘어온 members 값을 보고, 루프를 돌면서 하나씩 실행해준다. 

실행해보면 헌재 메모리에 회원을 저장하므로 서버를 껐다 키면 당연히 다 날아간다.

그럼 이제 데이터베이스에 저장해볼까요?



















```toc

```

