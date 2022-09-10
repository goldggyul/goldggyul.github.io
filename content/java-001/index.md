---
emoji: 🐘
title: gradle로 빌드 & 실행 시에 라이브러리(jar파일) 포함하기
author: goldggyul
date: '2022-06-19 02:19:00'
categories: Java
tags: Java Gradle
toc: true

---

## `build.gradle`을 설정해보자

- 실행 시 cp 지정해주거나 MANIFEST 파일 작성하거나.. 다 뭔가 잘못했는 지 안되다가 아래 방법으로 됐다!

### 1. Main Class 지정

- 우선 라이브러리 경로를 추가하기 전에 Main Class를 지정했는 지 확인해보자. 지정해주지 않으면 Main을 못찾는 에러가 날 수 있다.

```groovy
jar {
    manifest {
        attributes 'Main-Class': 'your.package.Main'
    }
}
```

### 2. 라이브러리 경로를 추가

- 만약 라이브러리 파일들이 있는 경로가 `libs` 폴더라고 해보자. 그러면 아래와 같이 추가하면 된다

```groovy
dependencies {
    implementation fileTree(dir: 'jar', include: ['*.jar'])
}
```

- `implementation`외에도 다양한 설정이 있다. 자세한 내용은 [gradle docs](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_separation) 참고

### 3. runtime class path 지정

- 2번까지만 진행하면 `./gradlew build`로 빌드는 되지만, 그 후 `java -jar {jar파일}`로 실행 시에 라이브러리의 클래스들을 읽지 못하는 문제가 발생한다. 따라서 class path가 이상한 것 같아서 해당 내용으로 찾다 보니 아래와 같이 추가하면 됐다.

```groovy
jar {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}
```

- 이 때 원래는 `runtimeClasspath`만 지정해주면 되는 것 같은데.. 나는 `Entry {filename} is a duplicate but no duplicate handling strategy has been set.` 오류가 발생했고, `duplicatesStrategy`부분을 추가했더니 해결됐다.

### 4. 실행해보자!

```shell
./gradlew clean build
java -jar build/libs/your.jar
```

- 야호~!



````toc
```
````

