 

The object system maps the space of *classes* into the space of *types*. Every *class* that has a proper name has a corresponding *type* with the same *name*. 

The proper name of every *class* is a valid *type specifier* . In addition, every *class object* is a valid *type specifier* . Thus the expression (typep *object class*) evaluates to *true* if the *class* of *object* is *class* itself or a *subclass* of *class*. The evaluation of the expression (subtypep class1 class2) returns the values *true* and *true* if class1 is a subclass of class2 or if they are the same *class*; otherwise it returns the values *false* and *true*. If *I* is an *instance* of some *class C* named *S* and *C*  



is an *instance* of **standard-class**, the evaluation of the expression (type-of *I*) returns *S* if *S* is the *proper name* of *C*; otherwise, it returns *C*. 

Because the names of *classes* and *class objects* are *type specifiers*, they may be used in the special form **the** and in type declarations. 

Many but not all of the predefined *type specifiers* have a corresponding *class* with the same proper name as the *type*. These type specifiers are listed in Figure 4–8. For example, the *type* **array** has a corresponding *class* named **array**. No *type specifier* that is a list, such as (vector double-float 100), has a corresponding *class*. The *operator* **deftype** does not create any *classes*. 

Each *class* that corresponds to a predefined *type specifier* can be implemented in one of three ways, at the discretion of each implementation. It can be a *standard class*, a *structure class*, or a *system class*. 

A *built-in class* is one whose *generalized instances* have restricted capabilities or special representations. Attempting to use **defclass** to define *subclasses* of a **built-in-class** signals an error. Calling **make-instance** to create a *generalized instance* of a *built-in class* signals an error. Calling **slot-value** on a *generalized instance* of a *built-in class* signals an error. Redefining a *built-in class* or using **change-class** to change the *class* of an *object* to or from a *built-in class* signals an error. However, *built-in classes* can be used as *parameter specializers* in *methods*. 

It is possible to determine whether a *class* is a *built-in class* by checking the *metaclass*. A *standard class* is an *instance* of the *class* **standard-class**, a *built-in class* is an *instance* of the *class* **built-in-class**, and a *structure class* is an *instance* of the *class* **structure-class**. 

Each *structure type* created by **defstruct** without using the :type option has a corresponding *class*. This *class* is a *generalized instance* of the *class* **structure-class**. The :include option of **defstruct** creates a direct *subclass* of the *class* that corresponds to the included *structure type*. 

It is *implementation-dependent* whether *slots* are involved in the operation of *functions* defined in this specification on *instances* of *classes* defined in this specification, except when *slots* are explicitly defined by this specification. 

If in a particular *implementation* a *class* defined in this specification has *slots* that are not defined by this specfication, the names of these *slots* must not be *external symbols* of *packages* defined in this specification nor otherwise *accessible* in the CL-USER *package*. 

The purpose of specifying that many of the standard *type specifiers* have a corresponding *class* is to enable users to write *methods* that discriminate on these *types*. *Method* selection requires that a *class precedence list* can be determined for each *class*. 

The hierarchical relationships among the *type specifiers* are mirrored by relationships among the *classes* corresponding to those *types*. 

Figure 4–8 lists the set of *classes* that correspond to predefined *type specifiers*.  



|\<p\>**arithmetic-error generic-function simple-error array hash-table simple-type-error bit-vector integer simple-warning broadcast-stream list standard-class built-in-class logical-pathname standard-generic-function cell-error method standard-method character method-combination standard-object class null storage-condition complex number stream** \</p\>\<p\>**concatenated-stream package stream-error condition package-error string** \</p\>\<p\>**cons parse-error string-stream control-error pathname structure-class division-by-zero print-not-readable structure-object echo-stream program-error style-warning end-of-file random-state symbol** \</p\>\<p\>**error ratio synonym-stream file-error rational t** \</p\>\<p\>**file-stream reader-error two-way-stream float readtable type-error floating-point-inexact real unbound-slot floating-point-invalid-operation restart unbound-variable floating-point-overflow sequence undefined-function floating-point-underflow serious-condition vector** \</p\>\<p\>**function simple-condition warning**\</p\>|
| :- |


**Figure 4–8. Classes that correspond to pre-defined type specifiers** 

The *class precedence list* information specified in the entries for each of these *classes* are those that are required by the object system. 

Individual implementations may be extended to define other type specifiers to have a corresponding *class*. Individual implementations may be extended to add other *subclass* relationships and to add other *elements* to the *class precedence lists* as long as they do not violate the type relationships and disjointness requirements specified by this standard. A standard *class* defined with no direct *superclasses* is guaranteed to be disjoint from all of the *classes* in the table, except for the class named **t**.  



**nil** *Type* 

**Supertypes:** 

all *types* 

**Description:** 

The *type* **nil** contains no *objects* and so is also called the *empty type*. The *type* **nil** is a *subtype* of every *type*. No *object* is of *type* **nil**. 

**Notes:** 

The *type* containing the *object* **nil** is the *type* **null**, not the *type* **nil**. 

**boolean** *Type* 

**Supertypes:** 

**boolean**, **symbol**, **t** 

**Description:** 

The *type* **boolean** contains the *symbols* **t** and **nil**, which represent true and false, respectively. 

**See Also:** 

**t** (*constant variable*), **nil** (*constant variable*), **if**, **not**, **complement** 

**Notes:** 

Conditional operations, such as **if**, permit the use of *generalized booleans*, not just *booleans*; any *non-nil* value, not just **t**, counts as true for a *generalized boolean*. However, as a matter of convention, the *symbol* **t** is considered the canonical value to use even for a *generalized boolean* when no better choice presents itself.  



**function** 

**function** *System Class* 

**Class Precedence List:** 

**function**, **t** 

**Description:** 

A *function* is an *object* that represents code to be executed when an appropriate number of arguments is supplied. A *function* is produced by the **function** *special form*, the *function* **coerce**, or the *function* **compile**. A *function* can be directly invoked by using it as the first argument to **funcall**, **apply**, or **multiple-value-call**. 

**Compound Type Specifier Kind:** 

Specializing. 

**Compound Type Specifier Syntax:** 

(function [*arg-typespec* [*value-typespec*]]) 

*arg-typespec::*=(*\{typespec\}*\* 

[&optional *\{typespec\}*\*] 

[&rest *typespec*] 

[&key *\{*(*keyword typespec*)*\}*\*]) 

**Compound Type Specifier Arguments:** 

*typespec*—a *type specifier* . 

*value-typespec*—a *type specifier* . 

**Compound Type Specifier Description:** 

The list form of the **function** *type-specifier* can be used only for declaration and not for discrimination. Every element of this *type* is a *function* that accepts arguments of the types specified by the *argj-types* and returns values that are members of the *types* specified by *value-type*. The **&optional**, **&rest**, **&key**, and **&allow-other-keys** markers can appear in the list of argument types. The *type specifier* provided with **&rest** is the *type* of each actual argument, not the *type* of the corresponding variable. 

The **&key** parameters should be supplied as lists of the form (*keyword type*). The *keyword* must be a valid keyword-name symbol as must be supplied in the actual arguments of a call. This is usually a *symbol* in the KEYWORD *package* but can be any *symbol*. When **&key** is given in a **function** *type specifier lambda list*, the *keyword parameters* given are exhaustive unless **&allow-other-keys** is also present. **&allow-other-keys** is an indication that other keyword arguments might actually be supplied and, if supplied, can be used. For example, the *type* of the *function* **make-list** could be declared as follows:  



(function ((integer 0) &key (:initial-element t)) list) 

The *value-type* can be a **values** *type specifier* in order to indicate the *types* of *multiple values*. Consider a declaration of the following form: 

(ftype (function (arg0-type arg1-type ...) val-type) f)) 

Any *form* (f arg0 arg1 ...) within the scope of that declaration is equivalent to the following: (the val-type (f (the arg0-type arg0) (the arg1-type arg1) ...)) 

That is, the consequences are undefined if any of the arguments are not of the specified *types* or the result is not of the specified *type*. In particular, if any argument is not of the correct *type*, the result is not guaranteed to be of the specified *type*. 

Thus, an **ftype** declaration for a *function* describes *calls* to the *function*, not the actual definition of the *function*. 

Consider a declaration of the following form: 

(type (function (arg0-type arg1-type ...) val-type) fn-valued-variable) 

This declaration has the interpretation that, within the scope of the declaration, the consequences are unspecified if the value of fn-valued-variable is called with arguments not of the specified *types*; the value resulting from a valid call will be of type val-type. 

As with variable type declarations, nested declarations imply intersections of *types*, as follows: 

*•* Consider the following two declarations of **ftype**: 

(ftype (function (arg0-type1 arg1-type1 ...) val-type1) f)) 

and 

(ftype (function (arg0-type2 arg1-type2 ...) val-type2) f)) 

If both these declarations are in effect, then within the shared scope of the declarations, calls to f can be treated as if f were declared as follows: 

(ftype (function ((and arg0-type1 arg0-type2) (and arg1-type1 arg1-type2 ...) ...) (and val-type1 val-type2)) 

f)) 

It is permitted to ignore one or all of the **ftype** declarations in force. 

*•* If two (or more) type declarations are in effect for a variable, and they are both function declarations, the declarations combine similarly.  



**compiled-function** *Type* 

**Supertypes:** 

**compiled-function**, **function**, **t** 

**Description:** 

Any *function* may be considered by an *implementation* to be a a *compiled function* if it contains no references to *macros* that must be expanded at run time, and it contains no unresolved references to *load time values*. See Section 3.2.2 (Compilation Semantics). 

*Functions* whose definitions appear lexically within a *file* that has been *compiled* with **compile-file** and then *loaded* with **load** are of *type* **compiled-function**. *Functions* produced by the **compile** function are of *type* **compiled-function**. Other *functions* might also be of *type* **compiled-function**. 

**generic-function** *System Class* 

**Class Precedence List:** 

**generic-function**, **function**, **t** 

**Description:** 

A *generic function* is a *function* whose behavior depends on the *classes* or identities of the *arguments* supplied to it. A generic function object contains a set of *methods*, a *lambda list*, a *method combination type*, and other information. The *methods* define the class-specific behavior and operations of the *generic function*; a *method* is said to *specialize* a *generic function*. When invoked, a *generic function* executes a subset of its *methods* based on the *classes* or identities of its *arguments*. 

A *generic function* can be used in the same ways that an ordinary *function* can be used; specifically, a *generic function* can be used as an argument to **funcall** and **apply**, and can be given a global or a local name.  



**standard-generic-function** *System Class* 

**Class Precedence List:** 

**standard-generic-function**, **generic-function**, **function**, **t** 

**Description:** 

The *class* **standard-generic-function** is the default *class* of *generic functions established* by **defmethod**, **ensure-generic-function**, **defgeneric**, and **defclass** *forms*. 

**class** *System Class* 

**Class Precedence List:** 

**class**, **standard-object**, **t** 

**Description:** 

The *type* **class** represents *objects* that determine the structure and behavior of their *instances*. Associated with an *object* of *type* **class** is information describing its place in the directed acyclic graph of *classes*, its *slots*, and its options. 

**built-in-class** *System Class* 

**Class Precedence List:** 

**built-in-class**, **class**, **standard-object**, **t** 

**Description:** 

A *built-in class* is a *class* whose *instances* have restricted capabilities or special representations. Attempting to use **defclass** to define *subclasses* of a *built-in class* signals an error of *type* **error**. Calling **make-instance** to create an *instance* of a *built-in class* signals an error of *type* **error**. Calling **slot-value** on an *instance* of a *built-in class* signals an error of *type* **error**. Redefining a *built-in class* or using **change-class** to change the *class* of an *instance* to or from a *built-in class* signals an error of *type* **error**. However, *built-in classes* can be used as *parameter specializers* in *methods*.  



**structure-class** *System Class* 

**Class Precedence List:** 

**structure-class**, **class**, **standard-object**, **t** 

**Description:** 

All *classes* defined by means of **defstruct** are *instances* of the *class* **structure-class**. **standard-class** *System Class* 

**Class Precedence List:** 

**standard-class**, **class**, **standard-object**, **t** 

**Description:** 

The *class* **standard-class** is the default *class* of *classes* defined by **defclass**. 

**method** *System Class* 

**Class Precedence List:** 

**method**, **t** 

**Description:** 

A *method* is an *object* that represents a modular part of the behavior of a *generic function*. 

A *method* contains *code* to implement the *method*’s behavior, a sequence of *parameter specializers* that specify when the given *method* is applicable, and a sequence of *qualifiers* that is used by the method combination facility to distinguish among *methods*. Each required parameter of each *method* has an associated *parameter specializer* , and the *method* will be invoked only on arguments that satisfy its *parameter specializers*. 

The method combination facility controls the selection of *methods*, the order in which they are run, and the values that are returned by the generic function. The object system offers a default method combination type and provides a facility for declaring new types of method combination. 

**See Also:** 

Section 7.6 (Generic Functions and Methods)  



**standard-method** *System Class* 

**Class Precedence List:** 

**standard-method**, **method**, **standard-object**, **t** 

**Description:** 

The *class* **standard-method** is the default *class* of *methods* defined by the **defmethod** and **defgeneric** *forms*. 

**structure-object** *Class* 

**Class Precedence List:** 

**structure-object**, **t** 

**Description:** 

The *class* **structure-object** is an *instance* of **structure-class** and is a *superclass* of every *class* that is an *instance* of **structure-class** except itself, and is a *superclass* of every *class* that is defined by **defstruct**. 

**See Also:** 

**defstruct**, Section 2.4.8.13 (Sharpsign S), Section 22.1.3.12 (Printing Structures) 

**standard-object** *Class* 

**Class Precedence List:** 

**standard-object**, **t** 

**Description:** 

The *class* **standard-object** is an *instance* of **standard-class** and is a *superclass* of every *class* that is an *instance* of **standard-class** except itself.  



**method-combination** *System Class* 

**Class Precedence List:** 

**method-combination**, **t** 

**Description:** 

Every *method combination object* is an *indirect instance* of the *class* **method-combination**. A *method combination object* represents the information about the *method combination* being used by a *generic function*. A *method combination object* contains information about both the type of *method combination* and the arguments being used with that *type*. 

**t** *System Class* 

**Class Precedence List:** 

**t** 

**Description:** 

The set of all *objects*. The *type* **t** is a *supertype* of every *type*, including itself. Every *object* is of *type* **t**. 

**satisfies** *Type Specifier* 

**Compound Type Specifier Kind:** 

Predicating. 

**Compound Type Specifier Syntax:** 

(satisfies *predicate-name*) 

**Compound Type Specifier Arguments:** 

*predicate-name*—a *symbol*. 

**Compound Type Specifier Description:** 

This denotes the set of all *objects* that satisfy the *predicate predicate-name*, which must be a *symbol* whose global *function* definition is a one-argument predicate. A name is required for *predicate-name*; *lambda expressions* are not allowed. For example, the *type specifier* (and integer (satisfies evenp)) denotes the set of all even integers. The form (typep *x* ’(satisfies *p*)) is equivalent to (if (*p x*) t nil).  



The argument is required. The *symbol* **\*** can be the argument, but it denotes itself (the *symbol* **\***), and does not represent an unspecified value. 

The symbol **satisfies** is not valid as a *type specifier* . 

**member** *Type Specifier* 

**Compound Type Specifier Kind:** 

Combining. 

**Compound Type Specifier Syntax:** 

(member *\{object\}*\*) 

**Compound Type Specifier Arguments:** 

*object*—an *object*. 

**Compound Type Specifier Description:** 

This denotes the set containing the named *objects*. An *object* is of this *type* if and only if it is **eql** to one of the specified *objects*. 

The *type specifiers* (member) and **nil** are equivalent. **\*** can be among the *objects*, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The symbol **member** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for either (member) or (member \*). 

**See Also:** 

the *type* **eql** 

**not** *Type Specifier* 

**Compound Type Specifier Kind:** 

Combining. 

**Compound Type Specifier Syntax:** 

(not *typespec*) 

**Compound Type Specifier Arguments:** 

*typespec*—a *type specifier* .  



**Compound Type Specifier Description:** 

This denotes the set of all *objects* that are not of the *type typespec*. 

The argument is required, and cannot be **\***. 

The symbol **not** is not valid as a *type specifier* . 

**and** *Type Specifier* 

**Compound Type Specifier Kind:** 

Combining. 

**Compound Type Specifier Syntax:** 

(and *\{typespec\}*\*) 

**Compound Type Specifier Arguments:** 

*typespec*—a *type specifier* . 

**Compound Type Specifier Description:** 

This denotes the set of all *objects* of the *type* determined by the intersection of the *typespecs*. **\*** is not permitted as an argument. 

The *type specifiers* (and) and **t** are equivalent. The symbol **and** is not valid as a *type specifier* , and, specifically, it is not an abbreviation for (and). 

**or** *Type Specifier* 

**Compound Type Specifier Kind:** 

Combining. 

**Compound Type Specifier Syntax:** 

(or *\{typespec\}*\*) 

**Compound Type Specifier Arguments:** 

*typespec*—a *type specifier* .  



**Compound Type Specifier Description:** 

This denotes the set of all *objects* of the *type* determined by the union of the *typespecs*. For example, the *type* **list** by definition is the same as (or null cons). Also, the value returned by **position** is an *object* of *type* (or null (integer 0 \*)); *i.e.*, either **nil** or a non-negative *integer* . 

**\*** is not permitted as an argument. 

The *type specifiers* (or) and **nil** are equivalent. The symbol **or** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (or). 

**values** *Type Specifier* 

**Compound Type Specifier Kind:** 

Specializing. 

**Compound Type Specifier Syntax:** 

(values *↓value-typespec*) 

*value-typespec::*=*\{typespec\}*\* [&optional *\{typespec\}*\*] [&rest *typespec*] [**&allow-other-keys**] 

**Compound Type Specifier Arguments:** 

*typespec*—a *type specifier* . 

**Compound Type Specifier Description:** 

This *type specifier* can be used only as the *value-type* in a **function** *type specifier* or a **the** *special form*. It is used to specify individual *types* when *multiple values* are involved. The **&optional** and **&rest** markers can appear in the *value-type* list; they indicate the parameter list of a *function* that, when given to **multiple-value-call** along with the values, would correctly receive those values. 

The symbol **\*** may not be among the *value-types*. 

The symbol **values** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (values).  



**eql** *Type Specifier* 

**Compound Type Specifier Kind:** 

Combining. 

**Compound Type Specifier Syntax:** 

(eql *object*) 

**Compound Type Specifier Arguments:** 

*object*—an *object*. 

**Compound Type Specifier Description:** 

Represents the *type* of all *x* for which (eql *object x*) is true. 

The argument *object* is required. The *object* can be **\***, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The *symbol* **eql** is not valid as an *atomic type specifier* . 

**coerce** *Function* 

**Syntax:** 

**coerce** *object result-type → result* 

**Arguments and Values:** 

*object*—an *object*. 

*result-type*—a *type specifier* . 

*result*—an *object*, of *type result-type* except in situations described in Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 

**Description:** 

*Coerces* the *object* to *type result-type*. 

If *object* is already of *type result-type*, the *object* itself is returned, regardless of whether it would have been possible in general to coerce an *object* of some other *type* to *result-type*. 

Otherwise, the *object* is *coerced* to *type result-type* according to the following rules: 





**coerce** 

**sequence** 

If the *result-type* is a *recognizable subtype* of **list**, and the *object* is a *sequence*, then the *result* is a *list* that has the *same elements* as *object*. 

If the *result-type* is a *recognizable subtype* of **vector**, and the *object* is a *sequence*, then the *result* is a *vector* that has the *same elements* as *object*. If *result-type* is a specialized *type*, the *result* has an *actual array element type* that is the result of *upgrading* the element type part of that *specialized type*. If no element type is specified, the element type defaults to **t**. If the *implementation* cannot determine the element type, an error is signaled. 

**character** 

If the *result-type* is **character** and the *object* is a *character designator* , the *result* is the *character* it denotes. 

**complex** 

If the *result-type* is **complex** and the *object* is a *real*, then the *result* is obtained by constructing a *complex* whose real part is the *object* and whose imaginary part is the result of *coercing* an *integer* zero to the *type* of the *object* (using **coerce**). (If the real part is a *rational*, however, then the result must be represented as a *rational* rather than a *complex* ; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). So, for example, (coerce 3 ’complex) is permissible, but will return 3, which is not a *complex* .) 

**float** 

If the *result-type* is any of **float**, **short-float**, **single-float**, **double-float**, **long-float**, and the *object* is a *real*, then the *result* is a *float* of *type result-type* which is equal in sign and magnitude to the *object* to whatever degree of representational precision is permitted by that *float* representation. (If the *result-type* is **float** and *object* is not already a *float*, then the *result* is a *single float*.) 

**function** 

If the *result-type* is **function**, and *object* is any *function name* that is *fbound* but that is globally defined neither as a *macro name* nor as a *special operator* , then the *result* is the *functional value* of *object*. 

If the *result-type* is **function**, and *object* is a *lambda expression*, then the *result* is a *closure* of *object* in the *null lexical environment*. 

**t** 

Any *object* can be *coerced* to an *object* of *type* **t**. In this case, the *object* is simply returned. **Examples:** 

(coerce ’(a b c) ’vector) *→* #(A B C)  



(coerce ’a ’character) *→* #\A 

(coerce 4.56 ’complex) *→* #C(4.56 0.0) 

(coerce 4.5s0 ’complex) *→* #C(4.5s0 0.0s0) 

(coerce 7/2 ’complex) *→* 7/2 

(coerce 0 ’short-float) *→* 0.0s0 

(coerce 3.5L0 ’float) *→* 3.5L0 

(coerce 7/2 ’float) *→* 3.5 

(coerce (cons 1 2) t) *→* (1 . 2) 

All the following *forms* should signal an error: 

(coerce ’(a b c) ’(vector \* 4)) 

(coerce #(a b c) ’(vector \* 4)) 

(coerce ’(a b c) ’(vector \* 2)) 

(coerce #(a b c) ’(vector \* 2)) 

(coerce "foo" ’(string 2)) 

(coerce #(#\a #\b #\c) ’(string 2)) 

(coerce ’(0 1) ’(simple-bit-vector 3)) 

**Exceptional Situations:** 

If a coercion is not possible, an error of *type* **type-error** is signaled. 

(coerce x ’nil) always signals an error of *type* **type-error**. 

An error of *type* **error** is signaled if the *result-type* is **function** but *object* is a *symbol* that is not *fbound* or if the *symbol* names a *macro* or a *special operator* . 

An error of *type* **type-error** should be signaled if *result-type* specifies the number of elements and *object* is of a different length. 

**See Also:** 

**rational**, **floor**, **char-code**, **char-int** 

**Notes:** 

Coercions from *floats* to *rationals* and from *ratios* to *integers* are not provided because of rounding problems. 

(coerce x ’t) *≡* (identity x) *≡* x  



**deftype** 

**deftype** *Macro* 

**Syntax:** 

**deftype** *name lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* *→ name* 

**Arguments and Values:** 

*name*—a *symbol*. 

*lambda-list*—a *deftype lambda list*. 

*declaration*—a **declare** *expression*; not evaluated. 

*documentation*—a *string*; not evaluated. 

*form*—a *form*. 

**Description:** 

**deftype** defines a *derived type specifier* named *name*. 

The meaning of the new *type specifier* is given in terms of a function which expands the *type specifier* into another *type specifier* , which itself will be expanded if it contains references to another *derived type specifier* . 

The newly defined *type specifier* may be referenced as a list of the form (*name arg*\<sub\>1\</sub\> *arg*\<sub\>2\</sub\> ...). The number of arguments must be appropriate to the *lambda-list*. If the new *type specifier* takes no arguments, or if all of its arguments are optional, the *type specifier* may be used as an *atomic type specifier* . 

The \<i\>argument expressions\</i\> to the \<i\>type specifier\</i\> , \<i\>arg\</i\>\<sub\>1\</sub\> \<i\>. . . arg\<sub\>n\</sub\>\</i\>, are not \<i\>evaluated\</i\>. Instead, these \<i\>literal objects\</i\> become the \<i\>objects\</i\> to which corresponding \<i\>parameters\</i\> become \<i\>bound\</i\>. 

The body of the **deftype** *form* (but not the *lambda-list*) is implicitly enclosed in a *block* named *name*, and is evaluated as an *implicit progn*, returning a new *type specifier* . 

The *lexical environment* of the body is the one which was current at the time the **deftype** form was evaluated, augmented by the *variables* in the *lambda-list*. 

Recursive expansion of the *type specifier* returned as the expansion must terminate, including the expansion of *type specifiers* which are nested within the expansion. 

The consequences are undefined if the result of fully expanding a *type specifier* contains any circular structure, except within the *objects* referred to by **member** and **eql** *type specifiers*. 

*Documentation* is attached to *name* as a *documentation string* of kind **type**. 

If a **deftype** *form* appears as a *top level form*, the *compiler* must ensure that the *name* is recognized in subsequent *type* declarations. The *programmer* must ensure that the body of a **deftype** form can be *evaluated* at compile time if the *name* is referenced in subsequent *type* declarations. If the  



expansion of a *type specifier* is not defined fully at compile time (perhaps because it expands into an unknown *type specifier* or a **satisfies** of a named *function* that isn’t defined in the compile-time environment), an *implementation* may ignore any references to this *type* in declarations and/or signal a warning. 

**Examples:** 

(defun equidimensional (a) 

(or (\< (array-rank a) 2) 

(apply #’= (array-dimensions a)))) *→* EQUIDIMENSIONAL 

(deftype square-matrix (&optional type size) 

‘(and (array ,type (,size ,size)) 

(satisfies equidimensional))) *→* SQUARE-MATRIX 

**See Also:** 

**declare**, **defmacro**, **documentation**, Section 4.2.3 (Type Specifiers), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 

**subtypep** *Function* 

**Syntax:** 

**subtypep** *type-1 type-2* &optional *environment → subtype-p, valid-p* 

**Arguments and Values:** 

*type-1*—a *type specifier* . 

*type-2*—a *type specifier* . 

*environment*—an *environment object*. The default is **nil**, denoting the *null lexical environment* and the current *global environment*. 

*subtype-p*—a *generalized boolean*. 

*valid-p*—a *generalized boolean*. 

**Description:** 

If *type-1* is a *recognizable subtype* of *type-2*, the first *value* is *true*. Otherwise, the first *value* is *false*, indicating that either *type-1* is not a *subtype* of *type-2*, or else *type-1* is a *subtype* of *type-2* but is not a *recognizable subtype*. 

A second *value* is also returned indicating the ‘certainty’ of the first *value*. If this value is *true*, then the first value is an accurate indication of the *subtype* relationship. (The second *value* is always *true* when the first *value* is *true*.)  



**subtypep** 

Figure 4–9 summarizes the possible combinations of *values* that might result. 

|**Value 1 Value 2 Meaning**|
| :- |
|\<p\>*true true type-1* is definitely a *subtype* of *type-2*. \</p\>\<p\>*false true type-1* is definitely not a *subtype* of *type-2*. *false false* **subtypep** could not determine the relationship, so *type-1* might or might not be a *subtype* of *type-2*.\</p\>|


**Figure 4–9. Result possibilities for subtypep** 

**subtypep** is permitted to return the *values false* and *false* only when at least one argument involves one of these *type specifiers*: **and**, **eql**, the list form of **function**, **member**, **not**, **or**, **satisfies**, or **values**. (A *type specifier* ‘involves’ such a *symbol* if, after being *type expanded*, it contains that *symbol* in a position that would call for its meaning as a *type specifier* to be used.) One consequence of this is that if neither *type-1* nor *type-2* involves any of these *type specifiers*, then **subtypep** is obliged to determine the relationship accurately. In particular, **subtypep** returns the *values true* and *true* if the arguments are **equal** and do not involve any of these *type specifiers*. 

**subtypep** never returns a second value of **nil** when both *type-1* and *type-2* involve only the names in Figure 4–2, or names of *types* defined by **defstruct**, **define-condition**, or **defclass**, or *derived types* that expand into only those names. While *type specifiers* listed in Figure 4–2 and names of **defclass** and **defstruct** can in some cases be implemented as *derived types*, **subtypep** regards them as primitive. 

The relationships between *types* reflected by **subtypep** are those specific to the particular implementation. For example, if an implementation supports only a single type of floating-point numbers, in that implementation (subtypep ’float ’long-float) returns the *values true* and *true* (since the two *types* are identical). 

For all *T1* and *T2* other than \*, (array *T1*) and (array *T2*) are two different *type spec ifiers* that always refer to the same sets of things if and only if they refer to *arrays* of exactly the same specialized representation, *i.e.*, if (upgraded-array-element-type ’*T1*) and (upgraded-array-element-type ’*T2*) return two different *type specifiers* that always refer to the same sets of *objects*. This is another way of saying that ‘(array *type-specifier*) and ‘(array ,(upgraded-array-element-type ’*type-specifier*)) refer to the same set of specialized *array* representations. For all *T1* and *T2* other than \*, the intersection of (array *T1*) and (array *T2*) is the empty set if and only if they refer to *arrays* of different, distinct specialized representations. 

Therefore, 

(subtypep ’(array T1) ’(array T2)) *→ true* 

if and only if 

(upgraded-array-element-type ’T1) and 

(upgraded-array-element-type ’T2)  



**subtypep** 

return two different *type specifiers* that always refer to the same sets of *objects*. 

For all type-specifiers *T1* and *T2* other than \*, 

(subtypep ’(complex T1) ’(complex T2)) *→ true*, *true* 

if: 

1\. T1 is a *subtype* of T2, or 

2\. (upgraded-complex-part-type ’*T1*) and (upgraded-complex-part-type ’*T2*) return two different *type specifiers* that always refer to the same sets of *objects*; in this case, (complex *T1*) and (complex *T2*) both refer to the same specialized representation. 

The *values* are *false* and *true* otherwise. 

The form 

(subtypep ’(complex single-float) ’(complex float)) 

must return *true* in all implementations, but 

(subtypep ’(array single-float) ’(array float)) 

returns *true* only in implementations that do not have a specialized *array* representation for *single floats* distinct from that for other *floats*. 

**Examples:** 

(subtypep ’compiled-function ’function) *→ true*, *true* 

(subtypep ’null ’list) *→ true*, *true* 

(subtypep ’null ’symbol) *→ true*, *true* 

(subtypep ’integer ’string) *→ false*, *true* 

(subtypep ’(satisfies dummy) nil) *→ false*, *implementation-dependent* 

(subtypep ’(integer 1 3) ’(integer 1 4)) *→ true*, *true* 

(subtypep ’(integer (0) (0)) ’nil) *→ true*, *true* 

(subtypep ’nil ’(integer (0) (0))) *→ true*, *true* 

(subtypep ’(integer (0) (0)) ’(member)) *→ true*, *true* ;or *false*, *false* 

(subtypep ’(member) ’nil) *→ true*, *true* ;or *false*, *false* 

(subtypep ’nil ’(member)) *→ true*, *true* ;or *false*, *false* 

Let \<aet-x\> and \<aet-y\> be two distinct *type specifiers* that do not always refer to the same sets of *objects* in a given implementation, but for which **make-array**, will return an *object* of the same *array type*. 

Thus, in each case, 

(subtypep (array-element-type (make-array 0 :element-type ’\<aet-x\>)) 

(array-element-type (make-array 0 :element-type ’\<aet-y\>))) 

*→ true*, *true*  



(subtypep (array-element-type (make-array 0 :element-type ’\<aet-y\>)) 

(array-element-type (make-array 0 :element-type ’\<aet-x\>))) 

*→ true*, *true* 

If (array \<aet-x\>) and (array \<aet-y\>) are different names for exactly the same set of *objects*, these names should always refer to the same sets of *objects*. That implies that the following set of tests are also true: 

(subtypep ’(array \<aet-x\>) ’(array \<aet-y\>)) *→ true*, *true* 

(subtypep ’(array \<aet-y\>) ’(array \<aet-x\>)) *→ true*, *true* 

**See Also:** 

Section 4.2 (Types) 

**Notes:** 

The small differences between the **subtypep** specification for the **array** and **complex** types are necessary because there is no creation function for *complexes* which allows the specification of the resultant part type independently of the actual types of the parts. Thus in the case of the *type* **complex**, the actual type of the parts is referred to, although a *number* can be a member of more than one *type*. For example, 17 is of *type* (mod 18) as well as *type* (mod 256) and *type* **integer**; and 2.3f5 is of *type* **single-float** as well as *type* **float**. 

**type-of** *Function* 

**Syntax:** 

**type-of** *object → typespec* 

**Arguments and Values:** 

*object*—an *object*. 

*typespec*—a *type specifier* . 

**Description:** 

Returns a *type specifier* , *typespec*, for a *type* that has the *object* as an *element*. The *typespec* satisfies the following: 

1\. For any *object* that is an *element* of some *built-in type*: 

a. the *type* returned is a *recognizable subtype* of that *built-in type*. 

b. the *type* returned does not involve and, eql, member, not, or, satisfies, or values. 





**type-of** 

2\. For all *objects*, (typep *object* (type-of *object*)) returns *true*. Implicit in this is that *type specifiers* which are not valid for use with **typep**, such as the *list* form of the **function** *type specifier* , are never returned by **type-of**. 

3\. The *type* returned by **type-of** is always a *recognizable subtype* of the *class* returned by **class-of**. That is, 

(subtypep (type-of *object*) (class-of *object*)) *→ true*, *true* 

4\. For *objects* of metaclass **structure-class** or **standard-class**, and for *conditions*, **type-of** returns the *proper name* of the *class* returned by **class-of** if it has a *proper name*, and otherwise returns the *class* itself. In particular, for *objects* created by the constructor function of a structure defined with **defstruct** without a :type option, **type-of** returns the structure name; and for *objects* created by **make-condition**, the *typespec* is the *name* of the *condition type*. 

5\. For each of the *types* **short-float**, **single-float**, **double-float**, or **long-float** of which the *object* is an *element*, the *typespec* is a *recognizable subtype* of that *type*. 

**Examples:** 

(type-of ’a) *→* SYMBOL 

(type-of ’(1 . 2)) 

*→* CONS 

\<i\>\<sup\>or\</sup\>→\</i\> (CONS FIXNUM FIXNUM) 

(type-of #c(0 1)) 

*→* COMPLEX 

\<i\>\<sup\>or\</sup\>→\</i\> (COMPLEX INTEGER) 

(defstruct temp-struct x y z) *→* TEMP-STRUCT 

(type-of (make-temp-struct)) *→* TEMP-STRUCT 

(type-of "abc") 

*→* STRING 

\<i\>\<sup\>or\</sup\>→\</i\> (STRING 3) 

(subtypep (type-of "abc") ’string) *→ true*, *true* 

(type-of (expt 2 40)) 

*→* BIGNUM 

\<i\>\<sup\>or\</sup\>→\</i\> INTEGER 

\<i\>\<sup\>or\</sup\>→\</i\> (INTEGER 1099511627776 1099511627776) 

\<i\>\<sup\>or\</sup\>→\</i\> SYSTEM::TWO-WORD-BIGNUM 

\<i\>\<sup\>or\</sup\>→\</i\> FIXNUM 

(subtypep (type-of 112312) ’integer) *→ true*, *true* 

(defvar \*foo\* (make-array 5 :element-type t)) *→* \*FOO\* 

(class-name (class-of \*foo\*)) *→* VECTOR  



(type-of \*foo\*) 

*→* VECTOR 

\<i\>\<sup\>or\</sup\>→\</i\> (VECTOR T 5) 

**See Also:** 

**array-element-type**, **class-of**, **defstruct**, **typecase**, **typep**, Section 4.2 (Types) 

**Notes:** 

Implementors are encouraged to arrange for **type-of** to return a portable value. 

**typep** *Function* 

**Syntax:** 

**typep** *object type-specifier* &optional *environment → generalized-boolean* 

**Arguments and Values:** 

*object*—an *object*. 

*type-specifier*—any *type specifier* except **values**, or a *type specifier* list whose first element is either **function** or **values**. 

*environment*—an *environment object*. The default is **nil**, denoting the *null lexical environment* and the and current *global environment*. 

*generalized-boolean*—a *generalized boolean*. 

**Description:** 

Returns *true* if *object* is of the *type* specified by *type-specifier*; otherwise, returns *false*. A *type-specifier* of the form (satisfies fn) is handled by applying the function fn to *object*. 

(typep *object* ’(array *type-specifier*)), where *type-specifier* is not \*, returns *true* if and only if *object* is an *array* that could be the result of supplying *type-specifier* as the :element-type argument to **make-array**. (array \*) refers to all *arrays* regardless of element type, while (array *type-specifier*) refers only to those *arrays* that can result from giving *type-specifier* as the :element-type argument to **make-array**. A similar interpretation applies to (simple-array *type-specifier*) and (vector *type-specifier*). See Section 15.1.2.1 (Array Upgrading). 

(typep *object* ’(complex *type-specifier*)) returns *true* for all *complex* numbers that can result from giving *numbers* of type *type-specifier* to the *function* **complex**, plus all other *complex* numbers of the same specialized representation. Both the real and the imaginary parts of any such *complex* number must satisfy:  



**typep** 

(typep realpart ’type-specifier) 

(typep imagpart ’type-specifier) 

See the *function* **upgraded-complex-part-type**. 

**Examples:** 

(typep 12 ’integer) *→ true* 

(typep (1+ most-positive-fixnum) ’fixnum) *→ false* 

(typep nil t) *→ true* 

(typep nil nil) *→ false* 

(typep 1 ’(mod 2)) *→ true* 

(typep #c(1 1) ’(complex (eql 1))) *→ true* 

;; To understand this next example, you might need to refer to 

;; Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). (typep #c(0 0) ’(complex (eql 0))) *→ false* 

Let A\<i\>\<sub\>x\</sub\>\</i\> and A\<i\>\<sub\>y\</sub\>\</i\> be two \<i\>type specifiers\</i\> that denote different \<i\>types\</i\>, but for which 

(upgraded-array-element-type ’A\<i\>\<sub\>x\</sub\>\</i\>) 

and 

(upgraded-array-element-type ’A\<i\>\<sub\>y\</sub\>\</i\>) 

denote the same *type*. Notice that 

(typep (make-array 0 :element-type ’A\<i\>\<sub\>x\</sub\>\</i\>) ’(array A\<i\>\<sub\>x\</sub\>\</i\>)) \<i\>→ true\</i\> 

(typep (make-array 0 :element-type ’A\<i\>\<sub\>y\</sub\>\</i\>) ’(array A\<i\>\<sub\>y\</sub\>\</i\>)) \<i\>→ true\</i\> 

(typep (make-array 0 :element-type ’A\<i\>\<sub\>x\</sub\>\</i\>) ’(array A\<i\>\<sub\>y\</sub\>\</i\>)) \<i\>→ true\</i\> 

(typep (make-array 0 :element-type ’A\<i\>\<sub\>y\</sub\>\</i\>) ’(array A\<i\>\<sub\>x\</sub\>\</i\>)) \<i\>→ true\</i\> 

**Exceptional Situations:** 

An error of *type* **error** is signaled if *type-specifier* is values, or a *type specifier* list whose first element is either **function** or **values**. 

The consequences are undefined if the *type-specifier* is not a *type specifier* . 

**See Also:** 

**type-of**, **upgraded-array-element-type**, **upgraded-complex-part-type**, Section 4.2.3 (Type Specifiers) 

**Notes:** 

*Implementations* are encouraged to recognize and optimize the case of (typep *x* (the class *y*)), since it does not involve any need for expansion of **deftype** information at runtime.  



**type-error** *Condition Type* 

**Class Precedence List:** 

**type-error**, **error**, **serious-condition**, **condition**, **t** 

**Description:** 

The *type* **type-error** represents a situation in which an *object* is not of the expected type. The “offending datum” and “expected type” are initialized by the initialization arguments named :datum and :expected-type to **make-condition**, and are *accessed* by the functions **type-error-datum** and **type-error-expected-type**. 

**See Also:** 

**type-error-datum**, **type-error-expected-type** 

**type-error-datum, type-error-expected-type** *Function* 

**Syntax:** 

**type-error-datum** *condition → datum* 

**type-error-expected-type** *condition → expected-type* 

**Arguments and Values:** 

*condition*—a *condition* of *type* **type-error**. 

*datum*—an *object*. 

*expected-type*—a *type specifier* . 

**Description:** 

**type-error-datum** returns the offending datum in the *situation* represented by the *condition*. 

**type-error-expected-type** returns the expected type of the offending datum in the *situation* represented by the *condition*. 

**Examples:** 

(defun fix-digits (condition) 

(check-type condition type-error) 

(let\* ((digits ’(zero one two three four 

five six seven eight nine))  



(val (position (type-error-datum condition) digits))) 

(if (and val (subtypep ’fixnum (type-error-expected-type condition))) 

(store-value 7)))) 

(defun foo (x) 

(handler-bind ((type-error #’fix-digits)) 

(check-type x number) 

(+ x 3))) 

(foo ’seven) 

*→* 10 

**See Also:** 

**type-error**, Chapter 9 (Conditions) 

**simple-type-error** *Condition Type* 

**Class Precedence List:** 

**simple-type-error**, **simple-condition**, **type-error**, **error**, **serious-condition**, **condition**, **t** 

**Description:** 

*Conditions* of *type* **simple-type-error** are like *conditions* of *type* **type-error**, except that they provide an alternate mechanism for specifying how the *condition* is to be *reported*; see the *type* **simple-condition**. 

**See Also:** 

**simple-condition**, **simple-condition-format-control**, **simple-condition-format-arguments**, **type-error-datum**, **type-error-expected-type** 
