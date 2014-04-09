title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

## Annotations ##

Annotations, a form of metadata, provide data about a program that is not part of the program itself. Annotations have no direct effect on the operation of the code they annotate.

--

Annotations have a number of uses, among them:

- **Information for the compiler** — Annotations can be used by the compiler to detect errors or suppress warnings.
- **Comple-time and deployment-time processing** — Software tools can process annotation information to generate code, XML files, and so forth.
- **Runtime processing** — Some annotations are available to be examined at runtime.

--

```java
@Override
void mySuperMethod() { ... }
```

The annotation can include elements:

```java
@Author(
   name = "Benjamin Franklin",
   date = "3/27/2003"
)
class MyClass() { ... }
```

```java
@SuppressWarnings(value = "unchecked")
void myMethod() { ... }
```

If there is just one element named value, then the name can be omitted, as in:

```java
@SuppressWarnings("unchecked")
void myMethod() { ... }
```

--



--



--



--



--



--








--


## Exercise ##

[Here's a link](http://blabla).

1. Look at example.
2. Create class `Square`.
3. Create several instances of class `Square`.
4. Print info about them.

--

--



--



--






# Cleaver 101
## A first look at quick HTML presentations

--

### A textual example

Content can be written in **Markdown!** New lines no longer need two angle brackets.

This will be in a separate paragraph.

<img src="http://whatismarkdown.com/workspace/img/logo.gif" alt="Drawing" style="width: 150px;"/>

    ![markdown-logo](logo.gif)
    <img src="logo.gif" />

[Here's a link](http://google.com).

--

### A list of things

* Item 1
* Item B
* Item gamma

No need for multiple templates! [Another link](http://google.com).

--

### Unicode

* 林花謝了春紅 太匆匆
* 胭脂淚 留人醉 幾時重
* Matching Pairs «»‹› “”‘’「」〈〉《》〔〕
* Greek αβγδ εζηθ ικλμ νξοπ ρςτυ φχψω
* currency  ¤ $ ¢ € ₠ £ ¥

--

### A code example

```java
// cool looking code
var func = function (arg1) {
    return function (arg2) {
        return "arg1: " + arg1 + "arg2: " + arg2;
    };
};

console.log(func(1)(2)); // result is three
```

And here is some `inline code` to check out.