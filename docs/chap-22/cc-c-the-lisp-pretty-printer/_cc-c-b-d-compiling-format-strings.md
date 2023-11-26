**22.2.1.3 Compiling Format Strings** 

A *format string* is essentially a program in a special-purpose language that performs printing, and that is interpreted by the *function* **format**. The **formatter** *macro* provides the efficiency of using a *compiled function* to do that same printing but without losing the textual compactness of *format strings*. 

A *format control* is either a *format string* or a *function* that was returned by the the **formatter** *macro*. 

