Slot definitions
================

### Slot definitions

A *slot definition metaobject* contains information about the definition of a slot. There are two kinds of slot definition metaobjects. A direct slot definition metaobject is used to represent the direct definition of a slot in a class. This corresponds roughly to the slot specifiers found in [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) forms. An effective slot definition metaobject is used to represent information, including inherited information, about a slot which is accessible in instances of a particular class.

Associated with each class metaobject is a list of direct slot definition metaobjects representing the slots defined directly in the class. Also associated with each class metaobject is a list of effective slot definition metaobjects representing the set of slots accessible in instances of that class.

The following information is associated with both direct and effective slot definitions metaobjects:

-   The name, allocation, and type are available as forms that could appear in a [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) form.

-   The initialization form, if there is one, is available as a form that could appear in a [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) form. The initialization form together with its lexical environment is available as a function of no arguments which, when called, returns the result of evaluating the initialization form in its lexical environment. This is called the *initfunction* of the slot.

-   The slot filling initialization arguments are available as a list of symbols.

-   The documentation is available as a string or `nil`.

Certain other information is only associated with direct slot definition metaobjects. This information applies only to the direct definition of the slot in the class (it is not inherited).

-   The function names of those generic functions for which there are automatically generated reader and writer methods. This information is available as lists of function names. Any accessors specified in the [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) form are broken down into their equivalent readers and writers in the direct slot definition.

Information, including inherited information, which applies to the definition of a slot in a particular class in which it is accessible is associated only with effective slot definition metaobjects.

-   For certain slots, the location of the slot in instances of the class is available.


