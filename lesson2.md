title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

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

# Packages #

A package is a grouping of related types providing access protection and name space management. Types refers to classes, interfaces, enumerations, and annotation types. 

--

## Reasons of using packages ##

- You and other programmers can easily determine that these types are related.
- You and other programmers know where to find types that can provide graphics-related functions.
- The names of your types won't conflict with the type names in other packages because the package creates a new namespace.
- You can allow types within the package to have unrestricted access to one another yet still restrict access for types outside the package.

--

## Creating a Package ##

```java
//in the Draggable.java file
package graphics;
public interface Draggable {
    . . .
}
```

If you do not use a package statement, your type ends up in an unnamed package. Generally speaking, an unnamed package is only for small or temporary applications or when you are just beginning the development process. Otherwise, classes and interfaces belong in named packages.

--

## Naming Conventions ##

Package names are written in all lower case to avoid conflict with the names of classes or interfaces.

Companies use their reversed Internet domain name to begin their package names—for example, `com.example.mypackage` for a package named `mypackage` created by a programmer at example.com.

--

You could use qualified name to create an instance of `graphics.Rectangle`:

```java
graphics.Rectangle myRect = new graphics.Rectangle();
```

or import it:

```java
import graphics.Rectangle;
```

Now you can refer to the Rectangle class by its simple name.

```java
Rectangle myRectangle = new Rectangle();
```

--

## Importing an Entire Package ##

To import all the types contained in a particular package, use the import statement with the asterisk (*) wildcard character.

```java
import graphics.*;
```

--

## The Static Import Statement ##

The static members of Math can be imported either individually:
```java
import static java.lang.Math.PI;
```
or as a group:
```java
import static java.lang.Math.*;
```

Once they have been imported, the static members can be used without qualification. For example, the previous code snippet would become:
```java
double r = cos(PI * theta);
```

--

## Access Levels ##

<img src="http://www.gotoquiz.com/web-coding/wp-content/uploads/2011/03/java-member-access-levels1.png" alt="Access Levels" style="width: 70%;"/>

*no modifier is usually refered to as package-private.
