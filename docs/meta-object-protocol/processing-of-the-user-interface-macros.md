Processing of the user interface macros
=======================================

Processing of the user interface macros
---------------------------------------

A list in which the first element is one of the symbols [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass), [defmethod](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmet.htm#defmethod), [defgeneric](http://www.lispworks.com/documentation/HyperSpec/Body/m_defgen.htm#defgeneric), [define-method-combination](http://www.lispworks.com/documentation/HyperSpec/Body/m_defi_4.htm#define-method-combination), `generic-function`, `generic-flet` or `generic-labels`, and which has proper syntax for that macro is called a *user interface macro form*. This document provides an extended specification of the [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass), [defmethod](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmet.htm#defmethod) and [defgeneric](http://www.lispworks.com/documentation/HyperSpec/Body/m_defgen.htm#defgeneric) macros.

The user interface macros [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass), [defgeneric](http://www.lispworks.com/documentation/HyperSpec/Body/m_defgen.htm#defgeneric) and [defmethod](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmet.htm#defmethod) can be used not only to define metaobjects that are instances of the corresponding standard metaobject class, but also to define metaobjects that are instances of appropriate portable metaobject classes. To make it possible for portable metaobject classes to properly process the information appearing in the macro form, this document provides a limited specification of the processing of these macro forms.

User interface macro forms can be `evaluated` or `compiled` and later `executed`. The effect of evaluating or executing a user interface macro form is specified in terms of calls to specified functions and generic functions which provide the actual behavior of the macro. The arguments received by these functions and generic functions are derived in a specified way from the macro form.

Converting a user interface macro form into the arguments to the appropriate functions and generic functions has two major aspects: the conversion of the macro argument syntax into a form more suitable for later processing, and the processing of macro arguments which are forms to be evaluated (including method bodies).

In the syntax of the [defclass](http://www.lispworks.com/documentation/HyperSpec/Body/m_defcla.htm#defclass) macro, the *initform* and *default-initarg-initial-value-form* arguments are forms which will be evaluated one or more times after the macro form is evaluated or executed. Special processing must be done on these arguments to ensure that the lexical scope of the forms is captured properly. This is done by building a function of zero arguments which, when called, returns the result of evaluating the form in the proper lexical environment.

In the syntax of the [defmethod](http://www.lispworks.com/documentation/HyperSpec/Body/m_defmet.htm#defmethod) macro the *form** argument is a list of forms that comprise the body of the method definition. This list of forms must be processed specially to capture the lexical scope of the macro form. In addition, the lexical functions available only in the body of methods must be introduced. To allow this and any other special processing (such as slot access optimization), a specializable protocol is used for processing the body of methods. This is discussed in [the section ``Processing Method Bodies.''](/docs/meta-object-protocol/processing-method-bodies)

-   [Compile-file processing of the user interface macros.](/docs/meta-object-protocol/compile-file-processing-of-the-user-interface-macros)
-   [The `defclass` macro.](/docs/meta-object-protocol/the-defclass-macro)
-   [The `defmethod` macro.](/docs/meta-object-protocol/the-defmethod-macro)
-   [Processing method bodies.](/docs/meta-object-protocol/processing-method-bodies)
-   [The `defgeneric` macro.](/docs/meta-object-protocol/the-defgeneric-macro)

