title: Basic Example
author:
  name: Jordan Scales
  twitter: jdan
  url: http://jordanscales.com
output: index.html
theme: sudodoki/reveal-cleaver-theme

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

пізніше буде доповнено