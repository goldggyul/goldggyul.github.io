---
emoji: ๐
title: gradle๋ก ๋น๋ & ์คํ ์์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ(jarํ์ผ) ํฌํจํ๊ธฐ
author: goldggyul
date: '2022-06-19 02:19:00'
categories: Java
tags: Java Gradle
toc: true

---

## `build.gradle`์ ์ค์ ํด๋ณด์

- ์คํ ์ cp ์ง์ ํด์ฃผ๊ฑฐ๋ MANIFEST ํ์ผ ์์ฑํ๊ฑฐ๋.. ๋ค ๋ญ๊ฐ ์๋ชปํ๋ ์ง ์๋๋ค๊ฐ ์๋ ๋ฐฉ๋ฒ์ผ๋ก ๋๋ค!

### 1. Main Class ์ง์ 

- ์ฐ์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๊ฒฝ๋ก๋ฅผ ์ถ๊ฐํ๊ธฐ ์ ์ Main Class๋ฅผ ์ง์ ํ๋ ์ง ํ์ธํด๋ณด์. ์ง์ ํด์ฃผ์ง ์์ผ๋ฉด Main์ ๋ชป์ฐพ๋ ์๋ฌ๊ฐ ๋  ์ ์๋ค.

```groovy
jar {
    manifest {
        attributes 'Main-Class': 'your.package.Main'
    }
}
```

### 2. ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๊ฒฝ๋ก๋ฅผ ์ถ๊ฐ

- ๋ง์ฝ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํ์ผ๋ค์ด ์๋ ๊ฒฝ๋ก๊ฐ `libs` ํด๋๋ผ๊ณ  ํด๋ณด์. ๊ทธ๋ฌ๋ฉด ์๋์ ๊ฐ์ด ์ถ๊ฐํ๋ฉด ๋๋ค

```groovy
dependencies {
    implementation fileTree(dir: 'jar', include: ['*.jar'])
}
```

- `implementation`์ธ์๋ ๋ค์ํ ์ค์ ์ด ์๋ค. ์์ธํ ๋ด์ฉ์ [gradle docs](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_separation) ์ฐธ๊ณ 

### 3. runtime class path ์ง์ 

- 2๋ฒ๊น์ง๋ง ์งํํ๋ฉด `./gradlew build`๋ก ๋น๋๋ ๋์ง๋ง, ๊ทธ ํ `java -jar {jarํ์ผ}`๋ก ์คํ ์์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ํด๋์ค๋ค์ ์ฝ์ง ๋ชปํ๋ ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ค. ๋ฐ๋ผ์ class path๊ฐ ์ด์ํ ๊ฒ ๊ฐ์์ ํด๋น ๋ด์ฉ์ผ๋ก ์ฐพ๋ค ๋ณด๋ ์๋์ ๊ฐ์ด ์ถ๊ฐํ๋ฉด ๋๋ค.

```groovy
jar {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from {
        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
    }
}
```

- ์ด ๋ ์๋๋ `runtimeClasspath`๋ง ์ง์ ํด์ฃผ๋ฉด ๋๋ ๊ฒ ๊ฐ์๋ฐ.. ๋๋ `Entry {filename} is a duplicate but no duplicate handling strategy has been set.` ์ค๋ฅ๊ฐ ๋ฐ์ํ๊ณ , `duplicatesStrategy`๋ถ๋ถ์ ์ถ๊ฐํ๋๋ ํด๊ฒฐ๋๋ค.

### 4. ์คํํด๋ณด์!

```shell
./gradlew clean build
java -jar build/libs/your.jar
```

- ์ผํธ~!



````toc
```
````

