Generic functions
=================

### Generic functions

A *generic function metaobject* contains information about a generic function over and above the information associated with each of the generic function's methods.

-   The name is available as a function name.

-   The methods associated with the generic function are available as a list of method metaobjects.

-   The default class for this generic function's method metaobjects is available as a class metaobject.

-   The lambda list is available as a list.

-   The method combination is available as a method combination metaobject.

-   The documentation is available as a string or `nil`.

-   The argument precedence order is available as a permutation of those symbols from the lambda list which name the required arguments of the generic function.

-   The declarations are available as a list of declarations.

    There is some ambiguity in Common Lisp about the terms used to identify the various parts of [declare](http://www.lispworks.com/documentation/HyperSpec/Body/s_declar.htm#declare) special forms. In this document, the term *declaration* is used to refer to an object that could be an argument to a [declare](http://www.lispworks.com/documentation/HyperSpec/Body/s_declar.htm#declare) special form. For example, in the special form `(declare       (special *g1*))`, the list `(special *g1*)` is a declaration.


