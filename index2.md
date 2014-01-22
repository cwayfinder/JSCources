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

## Exercises ##

1. Write a small program that prints it's command line parameters.
2. Write an example of copying arrays.

--



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
        
        int result = +1;
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

--

--

# Classes and Objects #

--

## Sample class ##

```java
public class Bicycle {
        
    // the Bicycle class has
    // three fields
    public int cadence;
    public int gear;
    public int speed;
        
    // the Bicycle class has
    // one constructor
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }
        
    // the Bicycle class has
    // four methods
    public void setCadence(int newValue) {
        cadence = newValue;
    }
        
    public void setGear(int newValue) {
        gear = newValue;
    }
        
    public void applyBrake(int decrement) {
        speed -= decrement;
    }
        
    public void speedUp(int increment) {
        speed += increment;
    }
        
}
```

--

## Inherited class ##

```java
public class MountainBike extends Bicycle {
        
    // the MountainBike subclass has
    // one field
    public int seatHeight;

    // the MountainBike subclass has
    // one constructor
    public MountainBike(int startHeight, int startCadence,
                        int startSpeed, int startGear) {
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    }   
        
    // the MountainBike subclass has
    // one method
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }   

}
```

`MountainBike` inherits all the fields and methods of `Bicycle` and adds the field `seatHeight` and a method to set it (mountain bikes have seats that can be moved up and down as the terrain demands).

--

## Simple class declaration ##

```java
class MyClass {
    // field, constructor, and 
    // method declarations
}
```

The class body (the area between the braces) contains all the code that provides for the life cycle of the objects created from the class: constructors for initializing new objects, declarations for the fields that provide the state of the class and its objects, and methods to implement the behavior of the class and its objects.

--
remove?
## Another class declaration ##

```java
class MyClass extends MySuperClass implements YourInterface {
    // field, constructor, and
    // method declarations
}
```

`MyClass` is a subclass of `MySuperClass` and that it implements the YourInterface interface.

--

## Access Modifiers ##

- `public` modifier — the field is accessible from all classes.
- `private` modifier — the field is accessible only within its own class.

--

## Defining Methods ##

```java
public double calculateAnswer(double x, double y, 
                              double width, double height) {
    //do the calculation here
}
```

```java
calculateAnswer(8, 4, 20, 3);
```

--

## Overloading Methods ##

```java
public class DataArtist {
    ...
    public void draw(String s) {
        ...
    }
    public void draw(int i) {
        ...
    }
    public void draw(double f) {
        ...
    }
    public void draw(int i, double f) {
        ...
    }
}
```

--

## Constructors ## 

```java
public Bicycle(int startCadence, int startSpeed, int startGear) {
    gear = startGear;
    cadence = startCadence;
    speed = startSpeed;
}
```
To create a new `Bicycle` object called `myBike`, a constructor is called by the `new` operator:
```java
Bicycle myBike = new Bicycle(30, 0, 8);
```

--

## No-argument constructors ##

```java
public Bicycle() {
    gear = 1;
    cadence = 10;
    speed = 0;
}
```

```java
Bicycle yourBike = new Bicycle();
```

--

## Default constructor ##

```java
public class Square {
        
    public int size;

    public void setSize(int newSize) {
        size = newSize;
    }        
}
```

```java
Square s = new Square();
s.setSize(4);
```

--

## Arbitrary Number of Arguments ##

```java
public PrintStream printf(String format, Object... args)
```

```java
System.out.printf("%s: %d, %s%n", name, idnum, address);
System.out.printf("%s: %d, %s, %s, %s%n", name, idnum, address, phone, email);
```

--

## Passing Primitive Data Type Arguments ##

```java
public class PassPrimitiveByValue {

    public static void main(String[] args) {           
        int x = 3;
           
        // invoke passMethod() with x as argument
        passMethod(x);
           
        // print x to see if its value has changed
        System.out.println("After invoking passMethod, x = " + x);           
    }
        
    // change parameter in passMethod()
    public static void passMethod(int p) {
        p = 10;
    }
}
```

When you run this program, the output is:

```
After invoking passMethod, x = 3
```

--

## Passing Reference Data Type Arguments ##

```java
public void moveCircle(Circle circle, int deltaX, int deltaY) {
    // code to move origin of circle to x+deltaX, y+deltaY
    circle.setX(circle.getX() + deltaX);
    circle.setY(circle.getY() + deltaY);
        
    // code to assign a new reference to circle
    circle = new Circle(0, 0);
}
```

The method can be invoked with these arguments:
```java
moveCircle(myCircle, 23, 56);
```

--

## Exercise ##

[Here's a link](http://blabla).

1. Look at example.
2. Create class `Square`.
3. Create several instances of class `Square`.
4. Print info about them.

--

## Initializing an Object ##

```java
public class Rectangle {
    public int width = 0;
    public int height = 0;
    public Point origin;

    // four constructors
    public Rectangle() {
        origin = new Point(0, 0);
    }
    public Rectangle(Point p) {
        origin = p;
    }
    public Rectangle(int w, int h) {
        origin = new Point(0, 0);
        width = w;
        height = h;
    }
    public Rectangle(Point p, int w, int h) {
        origin = p;
        width = w;
        height = h;
    }

    // a method for moving the rectangle
    public void move(int x, int y) {
        origin.x = x;
        origin.y = y;
    }

    // a method for computing the area of the rectangle
    public int getArea() {
        return width * height;
    }
}
```

--

## Returning a Value from a Method ##

```java
// a method for computing the area of the rectangle
public int getArea() {
    return width * height;
}
```

```java
public Bicycle seeWhosFastest(Bicycle myBike, Bicycle yourBike, Environment env) {
    Bicycle fastest;
    // code to calculate which bike is 
    // faster, given each bike's gear 
    // and cadence and given the 
    // environment (terrain and wind)
    return fastest;
}
```

Any method declared `void` doesn't return a value. It does not need to contain a return statement, but it may do so.

--

## Using `this` with a Field ##

For example, the `Point` class was written like this

```java
public class Point {
    public int x = 0;
    public int y = 0;

    public Point(int a, int b) {
        x = a;
        y = b;
    }
}
```

but it could have been written like this:

```java
public class Point {
    public int x = 0;
    public int y = 0;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

--

## Explicit constructor invocation ##

```java
public class Rectangle {
    private int x, y;
    private int width, height;
        
    public Rectangle() {
        this(0, 0, 0, 0);
    }
    public Rectangle(int width, int height) {
        this(0, 0, width, height);
    }
    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    ...
}
```

--

remove?
## Access Levels ##

--

## Static fields ##

```java
public class Bicycle {
        
    private int speed;
    private int id;

    // add a class variable for the
    // number of Bicycle objects instantiated
    public static int numberOfBicycles = 0;
        
    public Bicycle(int startSpeed){
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;

        // increment number of Bicycles and assign ID number
        id = ++numberOfBicycles;
    }

    // new method to return the ID instance variable
    public int getID() {
        return id;
    }
        ...
}
```

Class variables are referenced by the class name itself, as in

```java
Bicycle.numberOfBicycles
```

--

## Static methods ##

```java
ClassName.methodName(args)
```

--

## Constants ##

The `static` modifier, in combination with the `final` modifier, is also used to define constants. The `final` modifier indicates that the value of this field cannot change.

```java
static final double PI = 3.141592653589793;
```

By convention, the names of constant values are spelled in uppercase letters. If the name is composed of more than one word, the words are separated by an underscore (_).

--
remove?
## Static Initialization Blocks ##

```java
static {
    // whatever code is needed for initialization goes here
}
```

--

## Nested Classes ##

```java
class OuterClass {
    ...
    static class StaticNestedClass {
        ...
    }
    class InnerClass {
        ...
    }
}
```

```java
OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();
OuterClass outerObject = new OuterClass();
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
```

Non-static nested classes (inner classes) have access to other members of the enclosing class, even if they are declared private. Static nested classes do not have access to other members of the enclosing class.

--

## Enum Types ##

An enum type is a special data type that enables for a variable to be a set of predefined constants.

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY 
}
```

```java
public class EnumTest {
    Day day;
    
    public EnumTest(Day day) {
        this.day = day;
    }
}
```

```java
EnumTest firstDay = new EnumTest(Day.MONDAY);
```

--

```java
public enum Planet {
    MERCURY (3.303e+23, 2.4397e6),
    VENUS   (4.869e+24, 6.0518e6),
    EARTH   (5.976e+24, 6.37814e6),
    MARS    (6.421e+23, 3.3972e6),
    JUPITER (1.9e+27,   7.1492e7),
    SATURN  (5.688e+26, 6.0268e7),
    URANUS  (8.686e+25, 2.5559e7),
    NEPTUNE (1.024e+26, 2.4746e7);

    private final double mass;   // in kilograms
    private final double radius; // in meters
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    ...
}
```

```java
for (Planet p : Planet.values()) {
    System.out.printf("Your weight on %s is %f%n", p, p.surfaceWeight(mass));
}
```

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

## Interfaces ##

There are a number of situations in software engineering when it is important for disparate groups of programmers to agree to a "contract" that spells out how their software interacts. Each group should be able to write their code without any knowledge of how the other group's code is written. Generally speaking, interfaces are such contracts.

--

In the Java programming language, an interface is a reference type, similar to a class, that can contain only *constants*, *method signatures*, *default methods*, *static methods*, and *nested types*. 

Interfaces cannot be instantiated—they can only be implemented by classes or extended by other interfaces.

--

```java
public interface OperateCar {

   // constant declarations, if any

   // method signatures
   
   // Direction is enum with values RIGHT, LEFT
   int turn(Direction direction, double radius, 
            double startSpeed, double endSpeed);

   int changeLanes(Direction direction, 
                   double startSpeed, double endSpeed);

   int signalTurn(Direction direction, boolean signalOn);

   int getRadarFront(double distanceToCar, double speedOfCar);

   int getRadarRear(double distanceToCar, double speedOfCar);
         ......
   // more method signatures
}
```

--

```java
public class OperateBMW760i implements OperateCar {

    // the OperateCar method signatures, with implementation --
    // for example:
    int signalTurn(Direction direction, boolean signalOn) {
       // code to turn BMW's LEFT turn indicator lights on
       // code to turn BMW's LEFT turn indicator lights off
       // code to turn BMW's RIGHT turn indicator lights on
       // code to turn BMW's RIGHT turn indicator lights off
    }

    // other members, as needed -- for example, helper classes not 
    // visible to clients of the interface
}
```

--

```java
public interface GroupedInterface extends Interface1, Interface2, Interface3 {

    // constant declarations
    
    // base of natural logarithms
    double E = 2.718282;
 
    // method signatures
    void doSomething (int i, double x);
    int doSomethingElse(String s);
}
```

An interface can extend other interfaces, just as a class subclass or extend another class. However, whereas a class can extend only one other class, an interface can extend any number of interfaces.

--
remove?
## A Sample Interface, Relatable ##

```java
public interface Relatable {
        
    // this (object calling isLargerThan)
    // and other must be instances of 
    // the same class returns 1, 0, -1 
    // if this is greater // than, equal 
    // to, or less than other
    public int isLargerThan(Relatable other);
}
```

--
remove?
```java
public class Rectangle implements Relatable {
	// fields
	// constructors
	// methods

	// a method for computing
    // the area of the rectangle
    public int getArea() {
        return width * height;
    }
    
    // a method required to implement the Relatable interface
    public int isLargerThan(Relatable other) {
        RectanglePlus otherRect = (RectanglePlus)other;
        if (this.getArea() < otherRect.getArea())
            return -1;
        else if (this.getArea() > otherRect.getArea())
            return 1;
        else
            return 0;               
    }
}
```

--

## Inheritance ##

The idea of inheritance is simple but powerful: When you want to create a new class and there is already a class that includes some of the code that you want, you can derive your new class from the existing class. In doing this, you can reuse the fields and methods of the existing class.

--

```java
public class Bicycle {
        
    // the Bicycle class has three fields
    public int cadence;
    public int gear;
    public int speed;
        
    // the Bicycle class has one constructor
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }
        
    // the Bicycle class has setters and getters        
}
```

--

```java
public class MountainBike extends Bicycle {
        
    // the MountainBike subclass adds one field
    public int seatHeight;

    // the MountainBike subclass has one constructor
    public MountainBike(int startHeight, int startCadence,
                        int startSpeed, int startGear) {
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    }   
        
    // the MountainBike subclass adds one method
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }   
}
```

--

## Casting Objects ##

```java
Object obj = new MountainBike();
MountainBike myBike = obj;   // we would get a compile-time error
MountainBike myBike = (MountainBike)obj;
```

```java
if (obj instanceof MountainBike) {
    MountainBike myBike = (MountainBike)obj;
}
```

--

## Overriding and Hiding Methods ##

The distinction between hiding a static method and overriding an instance method has important implications:

- The version of the overridden instance method that gets invoked is the one in the subclass.
- The version of the hidden static method that gets invoked depends on whether it is invoked from the superclass or the subclass.

--

```java
public class Animal {
    public static void testClassMethod() {
        System.out.println("The static method in Animal");
    }
    public void testInstanceMethod() {
        System.out.println("The instance method in Animal");
    }
}
```

--

```java
public class Cat extends Animal {
    public static void testClassMethod() {
        System.out.println("The static method in Cat");
    }
    public void testInstanceMethod() {
        System.out.println("The instance method in Cat");
    }

    public static void main(String[] args) {
        Cat myCat = new Cat();
        Animal myAnimal = myCat;
        Animal.testClassMethod();
        myAnimal.testInstanceMethod();
    }
}
```

The output from this program is as follows:

```
The static method in Animal
The instance method in Cat
```

--

## Polymorphism ##

Subclasses of a class can define their own unique behaviors and yet share some of the same functionality of the parent class.

--

```java
public class RoadBike extends Bicycle{
    // In millimeters (mm)
    private int tireWidth;

    public RoadBike(int startCadence, int startSpeed,
                    int startGear, int newTireWidth){
        super(startCadence, startSpeed, startGear);
        this.setTireWidth(newTireWidth);
    }

    public int getTireWidth(){
      return this.tireWidth;
    }

    public void setTireWidth(int newTireWidth){
        this.tireWidth = newTireWidth;
    }

    public void printDescription(){
        super.printDescription();
        System.out.println("The RoadBike has " + getTireWidth() + " MM tires.");
    }
}
```

--

```java
public class TestBikes {
  public static void main(String[] args){
    Bicycle bike01, bike02, bike03;

    bike01 = new Bicycle(20, 10, 1);
    bike02 = new MountainBike(20, 10, 5, "Dual");
    bike03 = new RoadBike(40, 20, 8, 23);

    bike01.printDescription();
    bike02.printDescription();
    bike03.printDescription();
  }
}
```

The following is the output from the test program:

```
Bike is in gear 1 with a cadence of 20 and travelling at a speed of 10. 

Bike is in gear 5 with a cadence of 20 and travelling at a speed of 10. 
The MountainBike has a Dual suspension.

Bike is in gear 8 with a cadence of 40 and travelling at a speed of 20. 
The RoadBike has 23 MM tires.
```

--

## Hiding Fields ##

Within a class, a field that has the same name as a field in the superclass hides the superclass's field, even if their types are different. Within the subclass, the field in the superclass cannot be referenced by its simple name. Instead, the field must be accessed through super.

--

## Accessing Superclass Members ##

```java
public class Superclass {
    public void printMethod() {
        System.out.println("Printed in Superclass.");
    }
}
```

```java
public class Subclass extends Superclass {

    // overrides printMethod in Superclass
    public void printMethod() {
        super.printMethod();
        System.out.println("Printed in Subclass");
    }
    public static void main(String[] args) {
        Subclass s = new Subclass();
        s.printMethod();    
    }
}
```
Output:
```
Printed in Superclass.
Printed in Subclass
```

--

## Subclass Constructors ##

```java
public MountainBike(int startHeight, 
                    int startCadence,
                    int startSpeed,
                    int startGear) {
    super(startCadence, startSpeed, startGear);
    seatHeight = startHeight;
}  
```
Invocation of a superclass constructor must be the first line in the subclass constructor.

The syntax for calling a superclass constructor is
```java
super(); 
``` 
or:
```java
super(parameter list);
```

--

## Object as a Superclass ##

The `Object` class, in the `java.lang` package, sits at the top of the class hierarchy tree. Every class is a descendant, direct or indirect, of the `Object` class. Every class you use or write inherits the instance methods of `Object`.

--

- `protected Object clone() throws CloneNotSupportedException`
      Creates and returns a copy of this object.
- `public boolean equals(Object obj)`
      Indicates whether some other object is "equal to" this one.
- `protected void finalize() throws Throwable`
      Called by the garbage collector on an object when garbage
      collection determines that there are no more references to the object
- `public final Class getClass()`
      Returns the runtime class of an object.
- `public int hashCode()`
      Returns a hash code value for the object.
- `public String toString()`
      Returns a string representation of the object.

--

- `public final void notify()`
- `public final void notifyAll()`
- `public final void wait()`
- `public final void wait(long timeout)`
- `public final void wait(long timeout, int nanos)`

These methods of `Object` all play a part in synchronizing the activities of independently running threads in a program.

--

## The `clone()` Method ##

If a class, or one of its superclasses, implements the `Cloneable` interface, you can use the `clone()` method to create a copy from an existing object. To create a clone, you write:

```java
aCloneableObject.clone();
```

--

## The `equals()` Method ##

The `equals()` method compares two objects for equality and returns true if they are equal.

```java
public class Book {
    ...
    public boolean equals(Object obj) {
        if (obj instanceof Book)
            return ISBN.equals((Book)obj.getISBN()); 
        else
            return false;
    }
}
```

```java
Book firstBook  = new Book("0201914670");
Book secondBook = new Book("0201914670");
if (firstBook.equals(secondBook)) {
    System.out.println("objects are equal");
} else {
    System.out.println("objects are not equal");
}
```

You should always override the equals() method if the identity operator is not appropriate for your class.

--

## The `finalize()` Method ##

The `Object` class provides a callback method, `finalize()`, that may be invoked on an object when it becomes garbage. `Object`'s implementation of `finalize()` does nothing—you can override `finalize()` to do cleanup, such as freeing resources.

--

## The `getClass()` Method ##

You cannot override `getClass()`.

The `getClass()` method returns a `Class` object, which you can use to get information about the class.

For example, the following method gets and displays the class name of an object:

```java
void printClassName(Object obj) {
    System.out.println("The object's" + " class is " +
        obj.getClass().getSimpleName());
}
```

--

## The `hashCode()` Method ##

The value returned by `hashCode()` is the object's hash code, which is the object's memory address in hexadecimal.

By definition, if two objects are equal, their hash code must also be equal. If you override the `equals()` method, you change the way two objects are equated and `Object`'s implementation of `hashCode()` is no longer valid. Therefore, if you override the `equals()` method, you must also override the `hashCode()` method as well.

--

## The `toString()` Method ##

You should always consider overriding the `toString()` method in your classes.

You can use `toString()` along with `System.out.println()` to display a text representation of an object, such as an instance of Book:

```java
System.out.println(firstBook.toString());
```
which would, for a properly overridden `toString()` method, print something useful, like this:

```
ISBN: 0201914670; The Swing Tutorial; A Guide to Constructing GUIs, 2nd Edition
```

--

## Final Classes and Methods ##

```java
class ChessAlgorithm {
    enum ChessPlayer { WHITE, BLACK }
    ...
    final ChessPlayer getFirstPlayer() {
        return ChessPlayer.WHITE;
    }
    ...
}
```

Note that you can also declare an entire class final. A class that is declared final cannot be subclassed.

--

## Abstract Methods and Classes ##

Abstract classes cannot be instantiated, but they can be subclassed.
An abstract method is a method that is declared without an implementation (*without braces, and followed by a semicolon*)

```java
public abstract class GraphicObject {
   // declare fields
   // declare nonabstract methods
   abstract void draw();
}
```

When an abstract class is subclassed, the subclass usually provides implementations for all of the abstract methods in its parent class. However, if it does not, then the subclass must also be declared abstract.

--



--

# Numbers and Strings #

--

## The Numbers Classes ##

<img src="http://docs.oracle.com/javase/tutorial/figures/java/objects-numberHierarchy.gif" alt="The class hierarchy of Number." style="width: 50%;" />

[API](http://docs.oracle.com/javase/7/docs/api/java/lang/Number.html)

--

## Formatting Numeric Print Output ##

```java
int i = 461012;
System.out.format("The value of i is: %d%n", i);
```

The `%d` specifies that the single variable is a decimal integer. The `%n` is a platform-independent newline character. The output is:

```
The value of i is: 461012
```

There are many converters, flags, and specifiers, which are documented in [`java.util.Formatter`](http://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html)

--

```java
import java.util.Calendar;
import java.util.Locale;

public class TestFormat {
    
    public static void main(String[] args) {
      long n = 461012;
      System.out.format("%d%n", n);      //  -->  "461012"
      System.out.format("%08d%n", n);    //  -->  "00461012"
      System.out.format("%+8d%n", n);    //  -->  " +461012"
      System.out.format("%,8d%n", n);    // -->  " 461,012"
      System.out.format("%+,8d%n%n", n); //  -->  "+461,012"
      
      double pi = Math.PI;

      System.out.format("%f%n", pi);       // -->  "3.141593"
      System.out.format("%.3f%n", pi);     // -->  "3.142"
      System.out.format("%10.3f%n", pi);   // -->  "     3.142"
      System.out.format("%-10.3f%n", pi);  // -->  "3.142"
      System.out.format(Locale.FRANCE,
                        "%-10.4f%n%n", pi); // -->  "3,1416"

      Calendar c = Calendar.getInstance();
      System.out.format("%tB %te, %tY%n", c, c, c); // -->  "May 29, 2006"

      System.out.format("%tl:%tM %tp%n", c, c, c);  // -->  "2:34 am"

      System.out.format("%tD%n", c);    // -->  "05/29/06"
    }
}
```

--

## The DecimalFormat Class ##

You can use it to control the display of leading and trailing zeros, prefixes and suffixes, grouping (thousands) separators, and the decimal separator.

--

```java
import java.text.*;

public class DecimalFormatDemo {

   static public void customFormat(String pattern, double value ) {
      DecimalFormat myFormatter = new DecimalFormat(pattern);
      String output = myFormatter.format(value);
      System.out.println(value + "  " + pattern + "  " + output);
   }

   static public void main(String[] args) {
      customFormat("###,###.###", 123456.789);
      customFormat("###.##", 123456.789);
      customFormat("000000.000", 123.78);
      customFormat("$###,###.###", 12345.67);  
   }
}
```

The output is:

```
123456.789  ###,###.###  123,456.789
123456.789  ###.##  123456.79
123.78  000000.000  000123.780
12345.67  $###,###.###  $12,345.67
```

--

## The Math class ##

The methods in the `Math` class are all static, so you call them directly from the class, like this:

```java
Math.cos(angle);
```

The Math class includes two constants:
- `Math.E`, which is the base of natural logarithms, and
- `Math.PI`, which is the ratio of the circumference of a circle to its diameter.

The `Math` class also includes more than 40 static methods. 

--

```java
public class BasicMathDemo {
    public static void main(String[] args) {
        double a = -191.635;
        double b = 43.74;
        int c = 16, d = 45;

        System.out.printf("The absolute value " + "of %.3f is %.3f%n", 
                          a, Math.abs(a));

        System.out.printf("The ceiling of " + "%.2f is %.0f%n", 
                          b, Math.ceil(b));

        System.out.printf("The floor of " + "%.2f is %.0f%n", 
                          b, Math.floor(b));

        System.out.printf("The rint of %.2f " + "is %.0f%n", 
                          b, Math.rint(b));

        System.out.printf("The max of %d and " + "%d is %d%n",
                          c, d, Math.max(c, d));

        System.out.printf("The min of of %d " + "and %d is %d%n",
                          c, d, Math.min(c, d));
    }
}
```

Here's the output from this program:

```
The absolute value of -191.635 is 191.635
The ceiling of 43.74 is 44
The floor of 43.74 is 43
The rint of 43.74 is 44
The max of 16 and 45 is 45
The min of 16 and 45 is 16
```

--

## Random Numbers ##

The `random()` method returns a pseudo-randomly selected number between 0.0 and 1.0. The range includes 0.0 but not 1.0.

To generate an integer between 0 and 9, you would write:

```java
int number = (int)(Math.random() * 10);
```

By multiplying the value by 10, the range of possible values becomes 0.0 <= number < 10.0.

--

## Characters ##

The Java programming language provides a wrapper class that "wraps" the `char` in a `Character` object.

You can create a Character object with the Character constructor:

```java
Character ch = new Character('a');
```

For a complete listing of all methods in this class (there are more than 50), refer to the [`java.lang.Character`](http://docs.oracle.com/javase/7/docs/api/java/lang/Character.html) API specification.

--

```java
String greeting = "Hello world!";
```


```java
char[] helloArray = { 'h', 'e', 'l', 'l', 'o', '.' };
String helloString = new String(helloArray);
System.out.println(helloString);
```

--

## Creating Format Strings ##

```java
String fs;
fs = String.format("The value of the float " +
                   "variable is %f, while " +
                   "the value of the " + 
                   "integer variable is %d, " +
                   " and the string is %s",
                   floatVar, intVar, stringVar);
System.out.println(fs);
```

--

## Converting Strings to Numbers ##

```java
public class ValueOfDemo {
    public static void main(String[] args) {

        // this program requires two 
        // arguments on the command line 
        if (args.length == 2) {
            // convert strings to numbers
            float a = (Float.valueOf(args[0])).floatValue(); 
            float b = (Float.valueOf(args[1])).floatValue();

            // do some arithmetic
            System.out.println("a + b = " +
                               (a + b));
            System.out.println("a - b = " +
                               (a - b));
            System.out.println("a * b = " +
                               (a * b));
            System.out.println("a / b = " +
                               (a / b));
            System.out.println("a % b = " +
                               (a % b));
        } else {
            System.out.println("This program " +
                "requires two command-line arguments.");
        }
    }
}
```

--

## Converting Numbers to Strings ##

```java
int i;
// Concatenate "i" with an empty string; conversion is handled for you.
String s1 = "" + i;
```

```java
// The valueOf class method.
String s2 = String.valueOf(i);
```

```java
int i;
double d;
String s3 = Integer.toString(i); 
String s4 = Double.toString(d); 
```

--

```java
public class ToStringDemo {
    
    public static void main(String[] args) {
        double d = 858.48;
        String s = Double.toString(d);
        
        int dot = s.indexOf('.');
        
        System.out.println(dot + " digits " +
            "before decimal point.");
        System.out.println( (s.length() - dot - 1) +
            " digits after decimal point.");
    }
}
```

The output of this program is:

```
3 digits before decimal point.
2 digits after decimal point.
```

--

## The `StringBuilder` Class ##

StringBuilder objects are like String objects, except that they can be modified. 

```java
public class StringBuilderDemo {
    public static void main(String[] args) {
        String palindrome = "Dot saw I was Tod";
         
        StringBuilder sb = new StringBuilder(palindrome);
        
        sb.reverse();  // reverse it
        
        System.out.println(sb);
    }
}
```

Running this program produces the same output:

```
doT saw I was toD
```

--

## Autoboxing and Unboxing ##

Autoboxing is the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes.

```java
Character ch = 'a';
```

If the conversion goes the other way, this is called unboxing.

--



--

# Generics #

Generics add stability to your code by making more of your bugs detectable at compile time.

--

## Elimination of casts ##

The following code snippet without generics requires casting:

```java
List list = new ArrayList();
list.add("hello");
String s = (String) list.get(0);
```

When re-written to use generics, the code does not require casting:

```java
List<String> list = new ArrayList<String>();
list.add("hello");
String s = list.get(0);   // no cast
```

--

```
public class Box {
    private Object object;

    public void set(Object object) { this.object = object; }
    public Object get() { return object; }
}
```

```java
Box box = new Box();
box.set("123");
Integer value = (Integer) box.get();
```

--

```java
/**
 * Generic version of the Box class.
 * @param <T> the type of the value being boxed
 */
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
```

```java
Box<Integer> box = new Box<Integer>();
box.set(123);
Integer value = box.get();
```

--

## The Diamond ##

In Java SE 7 and later, you can replace the type arguments required to invoke the constructor of a generic class with an empty set of type arguments (<>) as long as the compiler can determine, or infer, the type arguments from the context. This pair of angle brackets, <>, is informally called the diamond.

```java
Box<Integer> integerBox = new Box<>();
```

--

## Multiple Type Parameters ##

```java
public interface Pair<K, V> {
    public K getKey();
    public V getValue();
}

public class OrderedPair<K, V> implements Pair<K, V> {

    private K key;
    private V value;

    public OrderedPair(K key, V value) {
	this.key = key;
	this.value = value;
    }

    public K getKey()	{ return key; }
    public V getValue() { return value; }
}
```

The following statements create two instantiations of the OrderedPair class:

```
Pair<String, Integer> p1 = new OrderedPair<String, Integer>("Even", 8);
Pair<String, String>  p2 = new OrderedPair<String, String>("hello", "world");
Pair<String, Box<Integer>> p = new OrderedPair<>("primes", new Box<Integer>(...));
```

--

## Raw Types ##

```java
public class Box<T> {
    public void set(T t) { /* ... */ }
    // ...
}
```

```java
Box<Integer> intBox = new Box<>();	// parameterized type of Box<T>
Box rawBox = new Box();				// raw type of Box<T>
```

The `@SuppressWarnings("unchecked")` annotation suppresses unchecked warnings. 

--

## Generic Methods ##

```java
public class Util {
    // Generic static method
    public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
               p1.getValue().equals(p2.getValue());
    }
}

public class Pair<K, V> {

    private K key;
    private V value;

    // Generic constructor
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    // Generic methods
    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
    public K getKey()   { return key; }
    public V getValue() { return value; }
}
```

The complete syntax for invoking this method would be:

```java
Pair<Integer, String> p1 = new Pair<>(1, "apple");
Pair<Integer, String> p2 = new Pair<>(2, "pear");
boolean same = Util.<Integer, String>compare(p1, p2);
```

```java
boolean same = Util.compare(p1, p2);
```

--

## Bounded Type Parameters ##

```java
public class NaturalNumber<T extends Integer> {

    private T n;

    public NaturalNumber(T n)  { this.n = n; }

    public boolean isEven() {
        return n.intValue() % 2 == 0;
    }

    // ...
}
```

```java
NaturalNumber<Integer> n = new NaturalNumber<>(new Integer(100));
```

--

## Multiple Bounds ##

A type parameter can have multiple bounds:


```java
<T extends B1 & B2 & B3>
```

A type variable with multiple bounds is a subtype of all the types listed in the bound. If one of the bounds is a class, it must be specified first. For example:

```java
Class A { /* ... */ }
interface B { /* ... */ }
interface C { /* ... */ }
```

```java
class D <T extends A & B & C> { /* ... */ }
```

--

## Generic Methods and Bounded Type Parameters ##

```java
public interface Comparable<T> {
    public int compareTo(T o);
}
```

```java
public static <T extends Comparable<T>> int countGreaterThan(T[] anArray, T elem) {
    int count = 0;
    for (T e : anArray)
        if (e.compareTo(elem) > 0)
            ++count;
    return count;
}
```

--



--



--



--



--



--



--



--



--



--



--



--



--



--



--



--



--



--



--



--



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