Classes
=======

### Classes

A *class metaobject* determines the structure and the default behavior of its instances. The following information is associated with class metaobjects:

-   The name, if there is one, is available as an object.

-   The direct subclasses, direct superclasses and class precedence list are available as lists of class metaobjects.

-   The slots defined directly in the class are available as a list of direct slot definition metaobjects. The slots which are accessible in instances of the class are available as a list of effective slot definition metaobjects.

-   The documentation is available as a string or `nil`.

-   The methods which use the class as a specializer, and the generic functions associated with those methods are available as lists of method and generic function metaobjects respectively.


