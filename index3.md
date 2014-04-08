title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

--

# Collections #

A collection is simply an object that groups multiple elements into a single unit.

--

## What Is a Collections Framework? ##

- Interfaces
- Implementations
- Algorithms

--

## Benefits of the Java Collections Framework ##

- Reduces programming effort
- Increases program speed and quality
- Allows interoperability among unrelated APIs
- Reduces effort to learn and to use new APIs
- Reduces effort to design new APIs
- Fosters software reuse

--

## Interfaces ##

<img src="http://docs.oracle.com/javase/tutorial/figures/collections/colls-coreInterfaces.gif" alt="Two interface trees, one starting with Collection and including Set, SortedSet, List, and Queue, and the other starting with Map and including SortedMap." style="width: 80%;"/>

--

```java
public interface Collection<E> extends Iterable<E> {
    // Basic operations
    int size();
    boolean isEmpty();
    boolean contains(Object element);
    // optional
    boolean add(E element);
    // optional
    boolean remove(Object element);
    Iterator<E> iterator();

    // Bulk operations
    boolean containsAll(Collection<?> c);
    // optional
    boolean addAll(Collection<? extends E> c); 
    // optional
    boolean removeAll(Collection<?> c);
    // optional
    boolean retainAll(Collection<?> c);
    // optional
    void clear();

    // Array operations
    Object[] toArray();
    <T> T[] toArray(T[] a);
}
```

--

## Traversing Collections ##

```java
Collection<String> collection = new ArrayList<String>();
// add "monkey", "donkey", "skeleton key" to collection

for(String item : collection ){
   System.out.println(item);
}
```

--

## Iterators ##

```java
public interface Iterator<E> {
    boolean hasNext();
    E next();
    void remove(); //optional
}
```

```java
Collection<String> collection = new ArrayList<String>();
// add "monkey", "donkey", "skeleton key" to collection

Iterator<String> i = collection.iterator();
for( ; i.hasNext(); ) {
    System.out.println(i.next());
}
```

```java
static void filter(Collection<String> c) {
    for (Iterator<String> it = c.iterator(); it.hasNext(); )
        if (!cond(it.next()))
            it.remove();
}
```

--

## Set ##

A Set is a Collection that cannot contain duplicate elements.

```java
public static <E> Set<E> removeDups(Collection<E> c) {
    return new LinkedHashSet<E>(c);
}
```

--

```java
import java.util.*;

public class FindDups {
    public static void main(String[] args) {
        Set<String> s = new HashSet<String>();
        for (String a : args)
            if (!s.add(a))
                System.out.println("Duplicate detected: " + a);

        System.out.println(s.size() + " distinct words: " + s);
    }
}
```

Run the program: 
```
java FindDups i came i saw i left
```

Output:
```
Duplicate detected: i
Duplicate detected: i
4 distinct words: [i, left, saw, came]
```

--

## List ## 

A List is an ordered Collection (sometimes called a sequence).

In addition to the operations inherited from Collection, the List interface includes operations for the following:
- Positional access
- Search
- Iteration
- Range-view

--

```java
public interface List<E> extends Collection<E> {
    // Positional access
    E get(int index);
    // optional
    E set(int index, E element);
    // optional
    boolean add(E element); 
    // optional
    void add(int index, E element);
    // optional
    E remove(int index);
    // optional
    boolean addAll(int index, Collection<? extends E> c);

    // Search
    int indexOf(Object o);
    int lastIndexOf(Object o);

    // Iteration
    ListIterator<E> listIterator();
    ListIterator<E> listIterator(int index);

    // Range-view
    List<E> subList(int from, int to);
}
```

--

## ListIterator ##

```java
public interface ListIterator<E> extends Iterator<E> {
    boolean hasNext();
    E next();
    boolean hasPrevious();
    E previous();
    int nextIndex();
    int previousIndex();
    void remove(); //optional
    void set(E e); //optional
    void add(E e); //optional
}
```

--

## Queue ##

A Queue is a collection for holding elements prior to processing.

--

```java
public interface Queue<E> extends Collection<E> {
    E element();
    boolean offer(E e);
    E peek();
    E poll();
    E remove();
}
```

--

## Deque ## 

Usually pronounced as deck, a deque is a double-ended-queue. A double-ended-queue is a linear collection of elements that supports the insertion and removal of elements at both end points. The Deque interface is a richer abstract data type than both Stack and Queue because it implements both stacks and queues at the same time. 

--

## Map ##

A Map is an object that maps keys to values. A map cannot contain duplicate keys: Each key can map to at most one value.

--

```java
public interface Map<K,V> {

    // Basic operations
    V put(K key, V value);
    V get(Object key);
    V remove(Object key);
    boolean containsKey(Object key);
    boolean containsValue(Object value);
    int size();
    boolean isEmpty();

    // Bulk operations
    void putAll(Map<? extends K, ? extends V> m);
    void clear();

    // Collection Views
    public Set<K> keySet();
    public Collection<V> values();
    public Set<Map.Entry<K,V>> entrySet();

    // Interface for entrySet elements
    public interface Entry {
        K getKey();
        V getValue();
        V setValue(V value);
    }
}
```

--

```java
import java.util.*;

public class Freq {
    public static void main(String[] args) {
        Map<String, Integer> m = new HashMap<String, Integer>();

        // Initialize frequency table from command line
        for (String a : args) {
            Integer freq = m.get(a);
            m.put(a, (freq == null) ? 1 : freq + 1);
        }

        System.out.println(m.size() + " distinct words:");
        System.out.println(m);
    }
}
```

Try running this program with the command:
```
java Freq if it is to be it is up to me to delegate
```

Output:
```
8 distinct words:
{to=3, delegate=1, be=1, it=2, up=1, if=1, me=1, is=2}
```

--

## Object Ordering ##

```java
List<String> myList = Arrays.asList("Larry", "Moe", "Curly");
Collections.sort(myList);
```

```java
public interface Comparable<T> {
    public int compareTo(T o);
}
```

String implements the Comparable interface. Comparable implementations provide a natural ordering for a class, which allows objects of that class to be sorted automatically.

--

## Writing Your Own Comparable Types ##

```java
public class Name implements Comparable<Name> {
    private final String firstName, lastName;

    public Name(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getters, setters and other methods

    ...

    public String toString() {
	    return firstName + " " + lastName;
    }

    public int compareTo(Name n) {
        int lastCmp = lastName.compareTo(n.lastName);
        return (lastCmp != 0 ? lastCmp : firstName.compareTo(n.firstName));
    }
}
```

--

## Comparators ##

```java
public interface Comparator<T> {
    int compare(T o1, T o2);
}
```

--

```java
public class NameSort {
    static final Comparator<Name> FIRST_NAME_ORDER = 
        new Comparator<Name>() {
            public int compare(Name n1, Name n2) {
                return n2.getFirstName().compareTo(e1.getFirstName());
            }
    };

    static final Collection<Name> names = Arrays.asList("Larry", "Moe", "Curly");

    public static void main(String[] args) {
        List<Name> n = new ArrayList<Name>(names);
        Collections.sort(n, FIRST_NAME_ORDER);
        System.out.println(n);
    }
}
```

--

## The SortedSet Interface ##

A SortedSet is a Set that maintains its elements in ascending order, sorted according to the elements' natural ordering or according to a Comparator provided at SortedSet creation time. 
In addition to the normal Set operations, the SortedSet interface provides operations for the following:
- Range view
- Endpoints
- Comparator access

--

```java
public interface SortedSet<E> extends Set<E> {
    // Range-view
    SortedSet<E> subSet(E fromElement, E toElement);
    SortedSet<E> headSet(E toElement);
    SortedSet<E> tailSet(E fromElement);

    // Endpoints
    E first();
    E last();

    // Comparator access
    Comparator<? super E> comparator();
}
```

--

## The SortedMap Interface ##

```java
public interface SortedMap<K, V> extends Map<K, V>{
    // Range-view
    SortedMap<K, V> subMap(K fromKey, K toKey);
    SortedMap<K, V> headMap(K toKey);
    SortedMap<K, V> tailMap(K fromKey);

    // Endpoints
    K firstKey();
    K lastKey();

    // Comparator access
    Comparator<? super K> comparator();
}
```

--

## Set Implementations ##

- HashSet
- TreeSet
- LinkedHashSet 
- EnumSet
- CopyOnWriteArraySet

--

## EnumSet ##

```java
for (Day d : EnumSet.range(Day.MONDAY, Day.FRIDAY))
        System.out.println(d);
```

```java
EnumSet.of(Style.BOLD, Style.ITALIC)
```

--

## List Implementations ##

- ArrayList
- LinkedList
- CopyOnWriteArrayList

--

## Map Implementations ##

- HashMap
- TreeMap
- LinkedHashMap
- EnumMap
- WeakHashMap
- IdentityHashMap

--

## Queue Implementations ##

- LinkedList
- PriorityQueue

--

## Deque Implementations ##

- LinkedList
- ArrayDeque 

--

## Wrapper Implementations ##

Wrapper implementations delegate all their real work to a specified collection but add extra functionality on top of what this collection offers. All these implementations are found in the Collections class, which consists solely of static methods.

--

## Synchronization Wrappers ##

```java
public static <T> Collection<T> synchronizedCollection(Collection<T> c);
public static <T> Set<T> synchronizedSet(Set<T> s);
public static <T> List<T> synchronizedList(List<T> list);
public static <K,V> Map<K,V> synchronizedMap(Map<K,V> m);
public static <T> SortedSet<T> synchronizedSortedSet(SortedSet<T> s);
public static <K,V> SortedMap<K,V> synchronizedSortedMap(SortedMap<K,V> m);
```

--

## Unmodifiable Wrappers ##

```java
public static <T> Collection<T> unmodifiableCollection(Collection<? extends T> c);
public static <T> Set<T> unmodifiableSet(Set<? extends T> s);
public static <T> List<T> unmodifiableList(List<? extends T> list);
public static <K,V> Map<K, V> unmodifiableMap(Map<? extends K, ? extends V> m);
public static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<? extends T> s);
public static <K,V> SortedMap<K, V> unmodifiableSortedMap(SortedMap<K, ? extends V> m);
```

--

## Convenience Implementations ##

```java
Collection<Name> names = Arrays.asList("Larry", "Moe", "Curly");
List<String> list = Arrays.asList(new String[size]);

List<Type> list = new ArrayList<Type>(Collections.nCopies(1000, (Type)null);
lovablePets.addAll(Collections.nCopies(69, "fruit bat"));

c.removeAll(Collections.singleton(e));

tourist.declarePurchases(Collections.emptySet());
```

--

## Algorithms ##

The following polymorphic algorithms come from the `Collections` class:
- sort
- shuffle 
- reverse 
- fill 
- copy 
- swap 
- addAll 
- binarySearch 
- frequency 
- disjoint
- min 
- max 

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