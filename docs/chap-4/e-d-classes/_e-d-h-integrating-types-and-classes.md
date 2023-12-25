 



The object system maps the space of *classes* into the space of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. Every <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that has a proper name has a corresponding <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> with the same <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 



The proper name of every <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a valid *type specifier* . In addition, every *class object* is a valid *type specifier* . Thus the expression (typep *object class*) evaluates to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> itself or a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The evaluation of the expression (subtypep class1 class2) returns the values <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if class1 is a subclass of class2 or if they are the same <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>; otherwise it returns the values <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. If *I* is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of some *class C* named *S* and *C*  







is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, the evaluation of the expression (type-of *I*) returns *S* if *S* is the *proper name* of *C*; otherwise, it returns *C*. 



Because the names of *classes* and *class objects* are *type specifiers*, they may be used in the special form <DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> and in type declarations. 



Many but not all of the predefined *type specifiers* have a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> with the same proper name as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. These type specifiers are listed in Figure 4–8. For example, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink> has a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>. No *type specifier* that is a list, such as (vector double-float 100), has a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> does not create any *classes*. 



Each <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that corresponds to a predefined *type specifier* can be implemented in one of three ways, at the discretion of each implementation. It can be a *standard class*, a *structure class*, or a *system class*. 



A *built-in class* is one whose *generalized instances* have restricted capabilities or special representations. Attempting to use <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> to define *subclasses* of a <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink> signals an error. Calling <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> to create a *generalized instance* of a *built-in class* signals an error. Calling <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> on a *generalized instance* of a *built-in class* signals an error. Redefining a *built-in class* or using <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> to change the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to or from a *built-in class* signals an error. However, *built-in classes* can be used as *parameter specializers* in <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. 



It is possible to determine whether a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a *built-in class* by checking the <GlossaryTerm styled={true} term={"metaclass"}><i>metaclass</i></GlossaryTerm>. A *standard class* is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>, a *built-in class* is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, and a *structure class* is an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>. 



Each *structure type* created by <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> without using the :type option has a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a *generalized instance* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>. The :include option of <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> creates a direct <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that corresponds to the included *structure type*. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are involved in the operation of <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> defined in this specification on <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *classes* defined in this specification, except when <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are explicitly defined by this specification. 



If in a particular <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> defined in this specification has <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that are not defined by this specfication, the names of these <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> must not be *external symbols* of <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> defined in this specification nor otherwise <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the CL-USER <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



The purpose of specifying that many of the standard *type specifiers* have a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is to enable users to write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> that discriminate on these <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"method"}><i>Method</i></GlossaryTerm> selection requires that a *class precedence list* can be determined for each <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



The hierarchical relationships among the *type specifiers* are mirrored by relationships among the *classes* corresponding to those <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>. 



Figure 4–8 lists the set of *classes* that correspond to predefined *type specifiers*.  







|<p>**arithmetic-error generic-function simple-error array hash-table simple-type-error bit-vector integer simple-warning broadcast-stream list standard-class built-in-class logical-pathname standard-generic-function cell-error method standard-method character method-combination standard-object class null storage-condition complex number stream** </p><p>**concatenated-stream package stream-error condition package-error string** </p><p>**cons parse-error string-stream control-error pathname structure-class division-by-zero print-not-readable structure-object echo-stream program-error style-warning end-of-file random-state symbol** </p><p>**error ratio synonym-stream file-error rational t** </p><p>**file-stream reader-error two-way-stream float readtable type-error floating-point-inexact real unbound-slot floating-point-invalid-operation restart unbound-variable floating-point-overflow sequence undefined-function floating-point-underflow serious-condition vector** </p><p>**function simple-condition warning**</p>|

| :- |





**Figure 4–8. Classes that correspond to pre-defined type specifiers** 



The *class precedence list* information specified in the entries for each of these *classes* are those that are required by the object system. 



Individual implementations may be extended to define other type specifiers to have a corresponding <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. Individual implementations may be extended to add other <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> relationships and to add other <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> to the *class precedence lists* as long as they do not violate the type relationships and disjointness requirements specified by this standard. A standard <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> defined with no direct *superclasses* is guaranteed to be disjoint from all of the *classes* in the table, except for the class named <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>.  







