---
title: O
sidebar_position: 111
---

**O** 



**object** *n.* 1. any Lisp datum. “The function **cons** creates an object which refers to two other objects.” 2. (immediately following the name of a *type*) an *object* which is of that *type*, used to emphasize that the *object* is not just a *name* for an object of that *type* but really an *element* of the *type* in cases where *objects* of that *type* (such as **function** or **class**) are commonly referred to by *name*. “The function **symbol-function** takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an *object*. 



“The operators **mapcar**, **maphash**, **with-package-iterator** and **count** perform 



object-traversing operations.” 



**open** *adj.*, *v.t.* (a *file*) 1. *v.t.* to create and return a *stream* to the *file*. 2. *adj.* (of a *stream*) having been *opened* <sub>1</sub>, but not yet *closed*. 



**operator** *n.* 1. a *function*, *macro*, or *special operator* . 2. a *symbol* that names such a *function*, *macro*, or *special operator* . 3. (in a **function** *special form*) the *cadr* of the **function** *special form*, which might be either an *operator* <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the *car* of the *compound form*, which might be either an *operator* <sub>2</sub> or a *lambda expression*, and which is never (setf *symbol*). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an **optimize** *declaration*. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). *Implementations* may define additional *optimize qualities*. 



**optional parameter** *n.* A *parameter* for which a corresponding positional *argument* is optional. If the *argument* is not supplied, a default value is used. See also *supplied-p parameter* . 



**ordinary function** *n.* a *function* that is not a *generic function*. 



**ordinary lambda list** *n.* the kind of *lambda list* used by **lambda**. See *modified lambda list* and *extended lambda list*. “**defun** uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an *object*, *O*<sub>1</sub>) an *object*, *O*<sub>2</sub>, which would 



be made *inaccessible* if *O*<sub>1</sub> were made *inaccessible*. (Every *object* is an *otherwise inaccessible part* of itself.) 



**output** *adj.* (of a *stream*) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the *function* **output-stream-p**. 



