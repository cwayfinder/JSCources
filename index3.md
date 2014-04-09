title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

--



--

## Exceptions ##

An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.

--

```java
public class Exceptions {
	public static void main(String args[]){
		int[] array = new int[3];
		try{
			for(int i = 0; i < 5; ++i){
				array[i] = i;
			}
			System.out.println(array);
		}
		catch(ArrayIndexOutOfBoundsException e){
			//printed just to inform that we have entered the catch block
			System.out.println("Oops, we went to far, better go back to 0!");
		}
	}
}
```

--

## Catching More Than One Type of Exception ##

```java
try {

} catch (ExceptionType name) {

} catch (ExceptionType name) {

}
```

```java
try {

} catch (FileNotFoundException e) {
    System.err.println("FileNotFoundException: " + e.getMessage());
    throw new SampleException(e);

} catch (IOException e) {
    System.err.println("Caught IOException: " + e.getMessage());
}
```

--

```java
catch (IOException|SQLException ex) {
    logger.log(ex);
    throw ex;
}
```

--

## The finally Block ##

```java
finally {
    if (out != null) { 
        System.out.println("Closing PrintWriter");
        out.close(); 
    } else { 
        System.out.println("PrintWriter not open");
    } 
} 
```

--

## The try-with-resources Statement ##

Any object that implements `java.lang.AutoCloseable`, which includes all objects which implement java.io.Closeable, can be used as a resource.

```java
static String readLine(String path) throws IOException {
    try (BufferedReader br = new BufferedReader(new FileReader(path))) {
        return br.readLine();
    }
}
```

--

Prior to Java SE 7, you can use a finally block to ensure that a resource is closed.

```java
static String readLine(String path) throws IOException {
    BufferedReader br = new BufferedReader(new FileReader(path));
    try {
        return br.readLine();
    } finally {
        if (br != null) br.close();
    }
}
```

--



--

## Basic I/O ##

--



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