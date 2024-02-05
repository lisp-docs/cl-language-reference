Restrictions on portable programs
=================================

#### Restrictions on portable programs

Portable programs are allowed to define subclasses of specified classes, and are permitted to define methods on specified generic functions, with the following restrictions. The results are undefined if any of these restrictions is violated.

-   Portable programs must not redefine any specified classes, generic functions, methods or method combinations. Any method defined by a portable program on a specified generic function must have at least one specializer that is neither a specified class nor an `eql` specializer whose associated value is an instance of a specified class.

-   Portable programs may define methods that extend specified methods unless the description of the specified method explicitly prohibits this. Unless there is a specific statement to the contrary, these extending methods must return whatever value was returned by the call to [call-next-method](http://www.lispworks.com/documentation/HyperSpec/Body/f_call_n.htm#call-next-method).

-   Portable programs may define methods that override specified methods only when the description of the specified method explicitly allows this. Typically, when a method is allowed to be overridden, a small number of related methods will need to be overridden as well.

    An example of this is the specified methods on the generic functions [add-dependent](/meta-object-protocol/add-dependent), [remove-dependent](/meta-object-protocol/remove-dependent), and [map-dependents](/meta-object-protocol/map-dependents). Overriding a specified method on one of these generic functions requires that the corresponding method on the other two generic functions be overridden as well.

-   Portable methods on specified generic functions specialized to portable metaobject classes must be defined before any instances of those classes (or any subclasses) are created, either directly or indirectly by a call to [make-instance](/meta-object-protocol/make-instance). Methods can be defined after instances are created by [allocate-instance](http://www.lispworks.com/documentation/HyperSpec/Body/f_alloca.htm#allocate-instance) however. Portable metaobject classes cannot be redefined.

    **Implementation note:**

    The purpose of this last restriction is to permit implementations to provide performance optimizations by analyzing, at the time the first instance of a metaobject class is initialized, what portable methods will be applicable to it. This can make it possible to optimize calls to those specified generic functions which would have no applicable portable methods.

    **Note:**

    The specification technology used in this document needs further development. The concepts of object-oriented protocols and subclass specialization are intuitively familiar to programmers of object-oriented systems; the protocols presented here fit quite naturally into this framework. Nonetheless, in preparing this document, we have found it difficult to give specification-quality descriptions of the protocols in a way that makes it clear what extensions users can and cannot write. Object-oriented protocol specification is inherently about specifying leeway, and this seems difficult using current technology.


