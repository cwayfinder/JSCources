title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

# Classes and Objects #
Part 2

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

```java
// Creates and returns a copy of this object.
protected Object clone() throws CloneNotSupportedException`
     
// Indicates whether some other object is "equal to" this one.
public boolean equals(Object obj)
     
// Called by the garbage collector on an object when garbage
// collection determines that there are no more references to the object
protected void finalize() throws Throwable
     
public final Class getClass() // Returns the runtime class of an object.

public int hashCode() // Returns a hash code value for the object.

public String toString() // Returns a string representation of the object.
```

--

```java
public final void notify()
public final void notifyAll()
public final void wait()
public final void wait(long timeout)
public final void wait(long timeout, int nanos)
```

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