 



The object system maps the space of *classes* into the space of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. Every <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that has a proper name has a corresponding <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> with the same <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



The proper name of every <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a valid *type specifier* . In addition, every *class object* is a valid *type specifier* . Thus the expression (typep *object class*) evaluates to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> itself or a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The evaluation of the expression (subtypep class1 class2) returns the values <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if class1 is a subclass of class2 or if they are the same <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>; otherwise it returns the values <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. If *I* is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of some *class C* named *S* and *C*  







is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>, the evaluation of the expression (type-of *I*) returns *S* if *S* is the *proper name* of *C*; otherwise, it returns *C*. 



Because the names of *classes* and *class objects* are *type specifiers*, they may be used in the special form <ClLinks styled={true} term={"the"}><b>the</b></ClLinks> and in type declarations. 



Many but not all of the predefined *type specifiers* have a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> with the same proper name as the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. These type specifiers are listed in Figure 4–8. For example, the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"array"}><b>array</b></ClLinks> has a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>. No *type specifier* that is a list, such as (vector double-float 100), has a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> does not create any *classes*. 



Each <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that corresponds to a predefined *type specifier* can be implemented in one of three ways, at the discretion of each implementation. It can be a *standard class*, a *structure class*, or a *system class*. 



A *built-in class* is one whose *generalized instances* have restricted capabilities or special representations. Attempting to use <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> to define *subclasses* of a <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks> signals an error. Calling <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> to create a *generalized instance* of a *built-in class* signals an error. Calling <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> on a *generalized instance* of a *built-in class* signals an error. Redefining a *built-in class* or using <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> to change the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to or from a *built-in class* signals an error. However, *built-in classes* can be used as *parameter specializers* in <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. 



It is possible to determine whether a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a *built-in class* by checking the <ClLinks styled={true} term={"metaclass"}><i>metaclass</i></ClLinks>. A *standard class* is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>, a *built-in class* is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks>, and a *structure class* is an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>. 



Each *structure type* created by <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> without using the :type option has a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. This <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a *generalized instance* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>. The :include option of <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> creates a direct <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that corresponds to the included *structure type*. 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are involved in the operation of <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> defined in this specification on <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *classes* defined in this specification, except when <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are explicitly defined by this specification. 



If in a particular <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> defined in this specification has <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that are not defined by this specfication, the names of these <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> must not be *external symbols* of <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> defined in this specification nor otherwise <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the CL-USER <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



The purpose of specifying that many of the standard *type specifiers* have a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is to enable users to write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> that discriminate on these <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. <ClLinks styled={true} term={"method"}><i>Method</i></ClLinks> selection requires that a *class precedence list* can be determined for each <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



The hierarchical relationships among the *type specifiers* are mirrored by relationships among the *classes* corresponding to those <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. 



Figure 4–8 lists the set of *classes* that correspond to predefined *type specifiers*.  







|<p>**arithmetic-error generic-function simple-error array hash-table simple-type-error bit-vector integer simple-warning broadcast-stream list standard-class built-in-class logical-pathname standard-generic-function cell-error method standard-method character method-combination standard-object class null storage-condition complex number stream** </p><p>**concatenated-stream package stream-error condition package-error string** </p><p>**cons parse-error string-stream control-error pathname structure-class division-by-zero print-not-readable structure-object echo-stream program-error style-warning end-of-file random-state symbol** </p><p>**error ratio synonym-stream file-error rational t** </p><p>**file-stream reader-error two-way-stream float readtable type-error floating-point-inexact real unbound-slot floating-point-invalid-operation restart unbound-variable floating-point-overflow sequence undefined-function floating-point-underflow serious-condition vector** </p><p>**function simple-condition warning**</p>|

| :- |





**Figure 4–8. Classes that correspond to pre-defined type specifiers** 



The *class precedence list* information specified in the entries for each of these *classes* are those that are required by the object system. 



Individual implementations may be extended to define other type specifiers to have a corresponding <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. Individual implementations may be extended to add other <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> relationships and to add other <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> to the *class precedence lists* as long as they do not violate the type relationships and disjointness requirements specified by this standard. A standard <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> defined with no direct *superclasses* is guaranteed to be disjoint from all of the *classes* in the table, except for the class named <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>.  







