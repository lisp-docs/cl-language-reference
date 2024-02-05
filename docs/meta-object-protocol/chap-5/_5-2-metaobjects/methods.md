Methods
=======

### Methods

A *method metaobject* contains information about a specific method.

-   The qualifiers are available as a list of of non-null atoms.

-   The lambda list is available as a list.

-   The specializers are available as a list of specializer metaobjects.

-   The function is available as a function. This function can be applied to arguments and a list of next methods using [apply](http://www.lispworks.com/documentation/HyperSpec/Body/f_apply.htm#apply) or [funcall](http://www.lispworks.com/documentation/HyperSpec/Body/f_funcal.htm#funcall).

-   When the method is associated with a generic function, that generic function metaobject is available. A method can be associated with at most one generic function at a time.

-   The documentation is available as a string or `nil`.


