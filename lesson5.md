title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

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
