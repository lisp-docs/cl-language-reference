 



The object system maps the space of *classes* into the space of <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>. Every <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that has a proper name has a corresponding <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> with the same <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. 



The proper name of every <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is a valid <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm>. In addition, every *class object* is a valid <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm>. Thus the expression `(typep *object class*)` evaluates to <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> itself or a <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The evaluation of the expression `(subtypep class1 class2)` returns the values <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> and <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if `class1` is a subclass of `class2` or if they are the same <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>; otherwise it returns the values <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> and <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. If *I* is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of some *class C* named *S* and *C* is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, the evaluation of the expression `(type-of *I*)` returns *S* if *S* is the <GlossaryTerm styled={true} term={"proper name"}><i>proper name</i></GlossaryTerm> of *C*; otherwise, it returns *C*.



Because the names of *classes* and *class objects* are <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>, they may be used in the special form <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> and in type declarations. 



Many but not all of the predefined <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> have a corresponding <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> with the same proper name as the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. These type specifiers are listed in Figure 4–8. For example, the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"array"}><b>array</b></DictionaryLink> has a corresponding <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> named <DictionaryLink  term={"array"}><b>array</b></DictionaryLink>. No <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that is a list, such as `(vector double-float 100)`, has a corresponding <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. The <GlossaryTerm  term={"operator"}><i>operator</i></GlossaryTerm> <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink> does not create any *classes*.



Each <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that corresponds to a predefined <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> can be implemented in one of three ways, at the discretion of each implementation. It can be a <GlossaryTerm styled={true} term={"standard class"}><i>standard class</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"structure class"}><i>structure class</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"system class"}><i>system class</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> is one whose <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instances</i></GlossaryTerm> have restricted capabilities or special representations. Attempting to use <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> to define *subclasses* of a <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink> signals an error. Calling <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> to create a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> signals an error. Calling <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> on a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> signals an error. Redefining a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> or using <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> to change the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> to or from a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> signals an error. However, *built-in classes* can be used as <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> in <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. 



It is possible to determine whether a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> by checking the <GlossaryTerm  term={"metaclass"}><i>metaclass</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"standard class"}><i>standard class</i></GlossaryTerm> is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"built-in class"}><i>built-in class</i></GlossaryTerm> is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, and a <GlossaryTerm styled={true} term={"structure class"}><i>structure class</i></GlossaryTerm> is an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>. 



Each *structure type* created by <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> without using the `:type` option has a corresponding <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. This <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"generalized instance"}><i>generalized instance</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"structure-class"}><b>structure-class</b></DictionaryLink>. The `:include` option of <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> creates a direct <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> that corresponds to the included *structure type*.



It is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are involved in the operation of <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> defined in this specification on <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of *classes* defined in this specification, except when <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are explicitly defined by this specification. 



If in a particular <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> defined in this specification has <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> that are not defined by this specfication, the names of these <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> must not be <GlossaryTerm styled={true} term={"external symbol"}><i>external symbols</i></GlossaryTerm> of <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> defined in this specification nor otherwise <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the `CL-USER` <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>.



The purpose of specifying that many of the standard <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> have a corresponding <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is to enable users to write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> that discriminate on these <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>. <GlossaryTerm  term={"method"}><i>Method</i></GlossaryTerm> selection requires that a <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> can be determined for each <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



The hierarchical relationships among the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> are mirrored by relationships among the *classes* corresponding to those <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm>. 



Figure 4–8 lists the set of *classes* that correspond to predefined <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm>.  







| | | |
|---|---|---|
| `arithmetic-error` | `generic-function` | `simple-error` |
| `array` | `hash-table` | `simple-type-error` |
| `bit-vector` | `integer` | `simple-warning` |
| `broadcast-stream` | `list` | `standard-class` |
| `built-in-class` | `logical-pathname` | `standard-generic-function` |
| `cell-error` | `method` | `standard-method` |
| `character` | `method-combination` | `standard-object` |
| `class` | `null` | `storage-condition` |
| `complex` | `number` | `stream` |
| `concatenated-stream` | `package` | `stream-error` |
| `condition` | `package-error` | `string` |
| `cons` | `parse-error` | `string-stream` |
| `control-error` | `pathname` | `structure-class` |
| `division-by-zero` | `print-not-readable` | `structure-object` |
| `echo-stream` | `program-error` | `style-warning` |
| `end-of-file` | `random-state` | `symbol` |
| `error` | `ratio` | `synonym-stream` |
| `file-error` | `rational` | `t` |
| `file-stream` | `reader-error` | `two-way-stream` |
| `float` | `readtable` | `type-error` |
| `floating-point-inexact` | `real` | `unbound-slot` |
| `floating-point-invalid-operation` | `restart` | `unbound-variable` |
| `floating-point-overflow` | `sequence` | `undefined-function` |
| `floating-point-underflow` | `serious-condition` | `vector` |
| `function` | `simple-condition` | `warning` |

**Figure 4–8. Classes that correspond to pre-defined type specifiers**



The <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> information specified in the entries for each of these *classes* are those that are required by the object system. 



Individual implementations may be extended to define other type specifiers to have a corresponding <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. Individual implementations may be extended to add other <GlossaryTerm  term={"subclass"}><i>subclass</i></GlossaryTerm> relationships and to add other <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence lists</i></GlossaryTerm> as long as they do not violate the type relationships and disjointness requirements specified by this standard. A standard <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> defined with no direct *superclasses* is guaranteed to be disjoint from all of the *classes* in the table, except for the class named <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>.  







