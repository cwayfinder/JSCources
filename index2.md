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

## Target Types ##

```java
static <T> List<T> emptyList();
```

```java
List<String> listOne = Collections.emptyList();
```

It is necessary to specify the value of T in the following context:

```java
void processStringList(List<String> stringList) {
    // process stringList
}
```

```java
processStringList(Collections.<String>emptyList());
processStringList(Collections.emptyList()); // error in Java SE 7 or earlier
```

--

## Upper Bounded Wildcards ##

To declare an upper-bounded wildcard, use the wildcard character ('`?`'), followed by the `extends` keyword, followed by its upper bound. In this context, `extends` is used in a general sense to mean either "`extends`" (as in classes) or "`implements`" (as in interfaces).

```java
class MyClass {
    public static void method1(List<? extends Number> list) { /* ... */ }
    public static void method2(List<Number> list) { /* ... */ }
}
```

```java
List<Integer> list = Arrays.asList(1, 2, 3);
MyClass.method1(list);
MyClass.method2(list);    // compilation error
```

--

```java
public static double sumOfList(List<? extends Number> list) {
    double s = 0.0;
    for (Number n : list)
        s += n.doubleValue();
    return s;
}
```

```java
List<Integer> li = Arrays.asList(1, 2, 3);
System.out.println("sum = " + sumOfList(li));

List<Double> ld = Arrays.asList(1.2, 2.3, 3.5);
System.out.println("sum = " + sumOfList(ld));
```

--

## Unbounded Wildcards ##

The unbounded wildcard type is specified using the wildcard character (`?`), for example, `List<?>`. This is called *a list of unknown type*.

```java
public static void printList(List<?> list) {
    for (Object elem: list)
        System.out.print(elem + " ");
    System.out.println();
}
```

```java
List<Integer> li = Arrays.asList(1, 2, 3);
List<String>  ls = Arrays.asList("one", "two", "three");
printList(li);
printList(ls);
```

--

## Lower Bounded Wildcards ##

A *lower bounded* wildcard restricts the unknown type to be a specific type or a super type of that type.

```java
public static void addIntegers(List<? super Integer> list){
    list.add(new Integer(50));
}
```

```java
List<Integer> integers = Arrays.asList(1, 2, 3);
addIntegers(integers);


List<Object> objects = new ArrayList<>();
addIntegers(objects);
```

--

## Wildcards and Subtyping ##

```java
class A { /* ... */ }
class B extends A { /* ... */ }
```

```java
B b = new B();
A a = b;
```

This rule does not apply to generic types:

```java
List<B> lb = new ArrayList<>();
List<A> la = lb;   // compile-time error
```

--

<img src="http://docs.oracle.com/javase/tutorial/figures/java/generics-listParent.gif" alt="diagram showing that the common parent of List<Number> and List<Integer> is the list of unknown type" style="width: 50%;"/>

```java
List<? extends Integer> intList = new ArrayList<>();
List<? extends Number>  numList = intList;  // OK. 
// List<? extends Integer> is a subtype of List<? extends Number>
```

--

The following diagram shows the relationships between several List classes declared with both upper and lower bounded wildcards.

<img src="http://docs.oracle.com/javase/tutorial/figures/java/generics-wildcardSubtyping.gif" alt="diagram showing that List<Integer> is a subtype of both List<? extends Integer> and List<?super Integer>. List<? extends Integer> is a subtype of List<? extends Number> which is a subtype of List<?>. List<Number> is a subtype of List<? super Number> and List>? extends Number>. List<? super Number> is a subtype of List<? super Integer> which is a subtype of List<?>." style="width: 50%;"/>

--

## Cannot Instantiate Generic Types with Primitive Types ##

```java
Pair<int, char> p = new Pair<>(8, 'a');  // compile-time error
Pair<Integer, Character> p = new Pair<>(8, 'a');
```

Note that the Java compiler autoboxes 8 to Integer.valueOf(8) and 'a' to Character('a'):

```java
Pair<Integer, Character> p = new Pair<>(Integer.valueOf(8), new Character('a'));
```

--

## Cannot Create Instances of Type Parameters ##

```java
public static <E> void append(List<E> list) {
    E elem = new E();  // compile-time error
    list.add(elem);
}
```

As a workaround, you can create an object of a type parameter through reflection:

```java
public static <E> void append(List<E> list, Class<E> cls) throws Exception {
    E elem = cls.newInstance();   // OK
    list.add(elem);
}
```

You can invoke the append method as follows:

```java
List<String> ls = new ArrayList<>();
append(ls, String.class);
```

--

## Overloading a Method with Parameter Types ##

A class cannot have two overloaded methods that will have the same signature after type erasure.

```java
public class Example {
    public void print(Set<String> strSet) { }
    public void print(Set<Integer> intSet) { }
}
```

The overloads would all share the same classfile representation and will generate a compile-time error.

--



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