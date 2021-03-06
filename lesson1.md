title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

# Java #

--

Java technology is both a programming language and a platform.

--

- Simple
- Object oriented
- Distributed
- Multithreaded
- Dynamic
- Architecture neutral
- Portable
- High performance
- Robust
- Secure

--

All source code is first written in plain text files ending with the `.java` extension. Those source files are then compiled into `.class` files by the `javac` compiler. A `.class` file does not contain code that is native to your processor; it instead contains *bytecodes* — the machine language of the Java Virtual Machine. The `java` launcher tool then runs your application with an instance of the Java VM.

<img src="http://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-compiler.gif" alt="Figure showing MyProgram.java, compiler, MyProgram.class, Java VM, and My Program running on a computer." style="width: 100%;" />

--

Because the Java VM is available on many different operating systems, the same `.class` files are capable of running on Microsoft Windows, the Solaris™ Operating System (Solaris OS), Linux, or Mac OS.

<img src="http://docs.oracle.com/javase/tutorial/figures/getStarted/helloWorld.gif" alt="Figure showing source code, compiler, and Java VM's for Win32, Solaris OS/Linux, and Mac OS" style="width: 50%;" />

--

The Java platform has two components:

- The Java Virtual Machine
- The Java Application Programming Interface (API)

<img src="http://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-jvm.gif" alt="Figure showing MyProgram.java, API, Java Virtual Machine, and Hardware-Based Platform" style="width: 50%;" />

--

## Creating Your First Application ##

Your first application, `HelloWorldApp`, will simply display the greeting "Hello world!". To create this program, you will: 

- Create a source file
- Compile the source file into a .class file
- Run the program

--

## Create a Source File ##

```java
/**
 * The HelloWorldApp class implements an application that
 * simply prints "Hello World!" to standard output.
 */
class HelloWorldApp {
   public static void main(String[] args) {
      System.out.println("Hello World!"); // Display the string.
   }
}
```

Save the code in a file with the name `HelloWorldApp.java`.

--

## Compile the Source File into a `.class` File ##

Run the following command in console.

    javac HelloWorldApp.java

--

## Run the Program ##

Run the following command in console.

    java HelloWorldApp

--

## The `main` Method ##

```java
public static void main(String[] args)
```

The `main` method is the entry point for your application and will subsequently invoke all the other methods required by your program.

The line:
```java
System.out.println("Hello World!");
```
uses the `System` class from the core library to print the "Hello World!" message to standard output.

--

The main method accepts a single argument: an array of elements of type String.
```java
public static void main(String[] args)
```

This array is the mechanism through which the runtime system passes information to your application. For example:
```
java MyApp arg1 arg2
```

The "Hello World!" application ignores its command-line arguments, but you should be aware of the fact that such arguments do exist.

--

# Language Basics #

--

## Variables ##

- **Instance Variables (Non-Static Fields)**. Their values are unique to each instance of a class (to each object, in other words)
- **Class Variables (Static Fields)**. There is exactly one copy of this variable in existence, regardless of how many times the class has been instantiated.
- **Local Variables**
- **Parameters**

--

## Primitive Data Types ##

<img src="http://img.c4learn.com/2012/03/Primitive-Data-Types-in-Java-Programming-Language.png" alt="Figure" style="width: 100%;"/>

--

<img src="http://www.umsl.edu/~sakbm9/intro_to_java/images/primitive_types.gif" alt="Figure" style="width: 100%;"/>

--

## Literals ##

A literal is the source code representation of a fixed value; literals are represented directly in your code without requiring computation. As shown below, it's possible to assign a literal to a variable of a primitive type:

```java
boolean enabled = true;
char c = '@';
int age = 45;
long length = 1000L;
float pi = 3.14F;
double weight = 74.5;
```

--

## Integer Literals ##

An integer literal is of type long if it ends with the letter L or l; otherwise it is of type int.

The prefix 0x indicates hexadecimal and 0b indicates binary:

```java
// The number 26, in decimal
int decVal = 26;
//  The number 26, in hexadecimal
int hexVal = 0x1a;
// The number 26, in binary
int binVal = 0b11010;
```

--

## Floating-Point Literals ##

A floating-point literal is of type float if it ends with the letter F or f; otherwise its type is double and it can optionally end with the letter D or d.

The floating point types (float and double) can also be expressed using E or e (for scientific notation), F or f (32-bit float literal) and D or d (64-bit double literal; this is the default and by convention is omitted).

```java
double d1 = 123.4;
// same value as d1, but in scientific notation
double d2 = 1.234e2;
float f1  = 123.4f;
```

--

## Character and String Literals ##

Literals of type char may contain any Unicode (UTF-16) characters. You can use a "Unicode escape" such as "S\u00ED Se\u00F1or" (Sí Señor in Spanish).

Special escape sequences for char literals: 
- `\b` (backspace), 
- `\t` (tab), 
- `\n` (line feed), 
- `\f` (form feed), 
- `\r` (carriage return), 
- `\"` (double quote), 
- `\'` (single quote), 
- `\\` (backslash).

--

## Java Keywords ##

<img src="http://www.f5java.com/images/java-tutorial-keywords-in-java.jpg" alt="Figure showing Java Keywords." style="width: 100%;" />

--

## Comments in Java ##

Java supports single line and multi-line comments. All characters available inside any comment are ignored by Java compiler.

```java
public class MyFirstJavaProgram{

   /* This is my first java program.
    * This will print 'Hello World' as the output
    * This is an example of multi-line comments.
    */

    public static void main(String []args){
       // This is an example of single line comment
       /* This is also an example of single line comment. */
       System.out.println("Hello World"); 
    }
} 
```

--

## Arithmetic Operators ##

```java
class ArithmeticDemo {

    public static void main (String[] args){
                
        int result = 1 + 2;
        System.out.println(result);   // result is now 3

        result = result - 1;
        System.out.println(result);   // result is now 2

        result = result * 2;
        System.out.println(result);   // result is now 4

        result = result / 2;
        System.out.println(result);   // result is now 2
        
        result = result + 8;   // result is now 10
        result = result % 7;   // result is now 3
        System.out.println(result);
    }
}
```

You can also combine the arithmetic operators with the simple assignment operator to create compound assignments. For example, `x+=1;` and `x=x+1;` both increment the value of `x` by 1.

--

## Concantenation ##

The `+` operator can also be used for concatenating (joining) two strings together.

```java
class ConcatDemo {
    public static void main(String[] args){
        String firstString = "This is";
        String secondString = " a concatenated string.";
        String thirdString = firstString + secondString;
        System.out.println(thirdString);
    }
}
```

--

## Unary Operators ##

```
+       additive operator (also used for 
        String concatenation)
-       subtraction operator
*       multiplication operator
/       division operator
%       remainder operator
```

```java
class UnaryDemo {
    public static void main(String[] args){
        
        int result = 1;
        System.out.println(result);   // result is now 1
        
        result--;
        System.out.println(result);   // result is now 0
        
        result++;
        System.out.println(result);   // result is now 1 
        
        result = -result;
        System.out.println(result);   // result is now -1

        boolean success = false;        
        System.out.println(success);   // false        
        System.out.println(!success);  // true
    }
}
```

--

## Prefix and Postfix ##

```java
class PrePostDemo {
    public static void main(String[] args){
        int i = 3;
        i++;       
        System.out.println(i);    // prints 4
        ++i;       
        System.out.println(i);    // prints 5        
        System.out.println(++i);  // prints 6        
        System.out.println(i++);  // prints 6        
        System.out.println(i);    // prints 7
    }
}
```

--

## Equality and Relational Operators ##

```java
class ComparisonDemo {

    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        if(value1 == value2)
            System.out.println("value1 == value2");
        if(value1 != value2)
            System.out.println("value1 != value2");
        if(value1 > value2)
            System.out.println("value1 > value2");
        if(value1 < value2)
            System.out.println("value1 < value2");
        if(value1 <= value2)
            System.out.println("value1 <= value2");
    }
}
```

Output:
```
value1 != value2
value1 <  value2
value1 <= value2
```

--

## Conditional Operators ##

```
==      equal to
!=      not equal to
>       greater than
>=      greater than or equal to
<       less than
<=      less than or equal to
```

```java
class ConditionalDemo1 {
    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        if((value1 == 1) && (value2 == 2))
            System.out.println("value1 is 1 AND value2 is 2");
        if((value1 == 1) || (value2 == 1))
            System.out.println("value1 is 1 OR value2 is 1");
    }
}
```

--

## The ternary operator ##

```java
?:
```

```java
class ConditionalDemo2 {
    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        int result;
        result = (value1 > value2 ? value1 : value2;

        System.out.println(result);
    }
}
```

--

## The `if-then` Statement ##

It tells your program to execute a certain section of code only if a particular test evaluates to true.

```java
void applyBrakes() {
    // the "if" clause: bicycle must be moving
    if (isMoving){ 
        // the "then" clause: decrease current speed
        currentSpeed--;
    }
}
```

--

## The `if-then-else` Statement ##

The `if-then-else` statement provides a secondary path of execution when an "if" clause evaluates to false.

```java
void applyBrakes() {
    if (isMoving) {
        currentSpeed--;
    } else {
        System.err.println("The bicycle has already stopped!");
    } 
}
```

--

```java
class IfElseDemo {
    public static void main(String[] args) {

        int testscore = 76;
        char grade;

        if (testscore >= 90) {
            grade = 'A';
        } else if (testscore >= 80) {
            grade = 'B';
        } else if (testscore >= 70) {
            grade = 'C';
        } else if (testscore >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("Grade = " + grade);
    }
}
```

Output:
```
Grade = C
```

--

## Arrays ##

An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.

<img src="http://docs.oracle.com/javase/tutorial/figures/java/objects-tenElementArray.gif" alt="Illustration of an array as 10 boxes numbered 0 through 9; an index of 0 indicates the first element in the array" style="width: 60%;"/>

Each item in an array is called an element, and each element is accessed by its numerical index. Numbering begins with 0. The 9th element, for example, would therefore be accessed at index 8.

--

```java
class ArrayDemo {
    public static void main(String[] args) {
        // declares an array of integers
        int[] anArray;

        // allocates memory for 5 integers
        anArray = new int[5];
           
        // initialize first element
        anArray[0] = 100;
        // initialize second element
        anArray[1] = 200;
        // and so forth
        anArray[2] = 300;
        anArray[3] = 400;
        anArray[4] = 500;

        System.out.println("Element at index 0: " + anArray[0]);
        System.out.println("Element at index 1: " + anArray[1]);
        System.out.println("Element at index 2: " + anArray[2]);
        System.out.println("Element at index 3: " + anArray[3]);
        System.out.println("Element at index 4: " + anArray[4]);
    }
} 
```

The output from this program is:
```
Element at index 0: 100
Element at index 1: 200
Element at index 2: 300
Element at index 3: 400
Element at index 4: 500
```

--

## Multidimensional arrays ##

```java
class MultiDimArrayDemo {
    public static void main(String[] args) {
        String[][] names = {
            {"Mr. ", "Mrs. ", "Ms. "},
            {"Smith", "Jones"}
        };
        // Mr. Smith
        System.out.println(names[0][0] + names[1][0]);
        // Ms. Jones
        System.out.println(names[0][2] + names[1][1]);
        System.out.println(names.length);
    }
}
```

The output from this program is:
```
Mr. Smith
Ms. Jones
2
```

--

## The `switch` Statement ##

Unlike if-then and if-then-else statements, the switch statement can have a number of possible execution paths.

```java
public class SwitchDemo {
    public static void main(String[] args) {

        int month = 8;
        String monthString;

        switch (month) {
            case 1:  monthString = "January";
                     break;
            case 2:  monthString = "February";
                     break;
            case 3:  monthString = "March";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "May";
                     break;
            case 6:  monthString = "June";
                     break;
            case 7:  monthString = "July";
                     break;
            case 8:  monthString = "August";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "October";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
        }
        System.out.println(monthString);
    }
}
```
Each `break` statement terminates the enclosing switch statement. Control flow continues with the first statement following the `switch` block.

--

Without the `break` statements all statements after the matching `case` label are executed in sequence, regardless of the expression of subsequent `case` labels, until a `break` statement is encountered.

```java
public class SwitchDemoFallThrough {
    public static void main(String[] args) {
        int month = 8;

        switch (month) {
            case 1:  System.out.println("January");
            case 2:  System.out.println("February");
            case 3:  System.out.println("March");
            case 4:  System.out.println("April");
            case 5:  System.out.println("May");
            case 6:  System.out.println("June");
            case 7:  System.out.println("July");
            case 8:  System.out.println("August");
            case 9:  System.out.println("September");
            case 10: System.out.println("October");
            case 11: System.out.println("November");
            case 12: System.out.println("December");
        }
    }
}
```

--

## The while Statement ##

```java
while (expression) {
     statement(s)
}
```

The `while` statement evaluates expression, which must return a boolean value. If the expression evaluates to `true`, the `while` statement executes the statement(s) in the `while` block. The `while` statement continues testing the expression and executing its block until the expression evaluates to `false`.

```java
class WhileDemo {
    public static void main(String[] args){
        int count = 1;
        while (count < 11) {
            System.out.println("Count is: " + count);
            count++;
        }
    }
}
```

--

## The for Statement ##

The for statement provides a compact way to iterate over a range of values. The general form of the for statement can be expressed as follows:

```java
for (initialization; termination; increment) {
    statement(s)
}
```

- *The initialization* expression initializes the loop; it's executed once, as the loop begins.
- When *the termination* expression evaluates to false, the loop terminates.
- *The increment* expression is invoked after each iteration through the loop; it is perfectly acceptable for this expression to increment or decrement a value.

--

The following program uses the general form of the for statement to print the numbers 1 through 10 to standard output:

```java
class ForDemo {
    public static void main(String[] args){
         for(int i=1; i<11; i++){
              System.out.println("Count is: " + i);
         }
    }
}
```

The output of this program is:

```
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
Count is: 6
Count is: 7
Count is: 8
Count is: 9
Count is: 10
```

--

The three expressions of the for loop are optional; an infinite loop can be created as follows:

```java
// infinite loop
for ( ; ; ) {    
    // your code goes here
}
```

--

The for statement also has another form designed for iteration through Collections and arrays.

```java
class EnhancedForDemo {
    public static void main(String[] args){
         int[] numbers = {1,2,3,4,5,6,7,8,9,10};
         for (int item : numbers) {
             System.out.println("Count is: " + item);
         }
    }
}
```

In this example, the variable `item` holds the current value from the `numbers` array. The output from this program is the same as before:

```
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
Count is: 6
Count is: 7
Count is: 8
Count is: 9
Count is: 10
```

--

You can use an `break` to terminate a `for`, `while`, or `do-while` loop.

```java
class BreakDemo {
    public static void main(String[] args) {

        int[] numbers = { 32, 87, 3, 589, 12, 1076, 2000, 8, 622, 127 };
        int searchfor = 12;

        int i;
        boolean foundIt = false;

        for (i = 0; i < numbers.length; i++) {
            if (numbers[i] == searchfor) {
                foundIt = true;
                break;
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor + " at index " + i);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}
```

This program searches for the number 12 in an array. The `break` statement terminates the `for` loop when that value is found. This program's output is:

```
Found 12 at index 4
```

--

The continue statement skips the current iteration of a for, while, or do-while loop.

```java
class ContinueDemo {
    public static void main(String[] args) {

        String searchMe = "peter piper picked a peck of pickled peppers";
        int max = searchMe.length();
        int count = 0;

        for (int i = 0; i < max; i++) {
            // interested only in p's
            if (searchMe.charAt(i) != 'p')
                continue;

            count++;
        }
        System.out.println("Found " + count + " p's in the string.");
    }
}
```

Here is the output of this program:

```
Found 9 p's in the string.
```

--

## Exercises ##
1. Write a small program that prints days of month. Use `switch` statement. In case
```
java DaysOfMonthApp 2013 2
```
it should print 28.

2. http://www.ntu.edu.sg/home/ehchua/programming/java/J2a_BasicsExercises.html 
will write tests (?)
