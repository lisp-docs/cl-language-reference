---
title: T
sidebar_position: 116
---

**T** 



**t** *n.* 1. a. the *boolean* representing true. b. the canonical *generalized boolean* 



representing true. (Although any *object* other than **nil** is considered *true* as a 



*generalized boolean*, t is generally used when there is no special reason to prefer one such *object* over another.) 2. the *name* of the *type* to which all *objects* belong—the *supertype* of all *types* (including itself). 3. the *name* of the *superclass* of all *classes* except itself. 



**tag** *n.* 1. a *catch tag*. 2. a *go tag*. 







 



 



**tail** *n.* (of a *list*) an *object* that is the *same* as either some *cons* which makes up that *list* or the *atom* (if any) which terminates the *list*. “The empty list is a tail of every proper list.” 



**target** *n.* 1. (of a *constructed stream*) a *constituent* of the *constructed stream*. “The target of a synonym stream is the value of its synonym stream symbol.” 2. (of a *displaced array*) the *array* to which the *displaced array* is displaced. (In the case of a chain of *constructed streams* or *displaced arrays*, the unqualified term “*target*” always refers to the immediate *target* of the first item in the chain, not the immediate target of the last item.) 



**terminal I/O** *n.* the *bidirectional stream* that is the *value* of the *variable* 



**\*terminal-io\***. 



**terminating** *n.* (of a *macro character* ) being such that, if it appears while parsing a token, it terminates that token. See Section 2.2 (Reader Algorithm). 



**tertiary value** *n.* (of *values* resulting from the *evaluation* of a *form*) the third *value*, if any, or else **nil** if there are fewer than three *values*. 



**throw** *v.* to transfer control and *values* to a *catch*. See the *special operator* **throw**. **tilde** *n.* the *standard character* that is called “tilde” (&#126;). See Figure 2–5. 



**time** a representation of a point (*absolute time*) or an interval (*relative time*) on a time line. See *decoded time*, *internal time*, and *universal time*. 



**time zone** *n.* a *rational* multiple of 1/3600 between -24 (inclusive) and 24 (inclusive) that represents a time zone as a number of hours offset from Greenwich Mean Time. Time zone values increase with motion to the west, so Massachusetts, U.S.A. is in time zone 5, California, U.S.A. is time zone 8, and Moscow, Russia is time zone *-3* . (When “daylight savings time” is separately represented as an *argument* or *return value*, the *time zone* that accompanies it does not depend on whether daylight savings time is in effect.) 



**token** *n.* a textual representation for a *number* or a *symbol*. See Section 2.3 



(Interpretation of Tokens). 



**top level form** *n.* a *form* which is processed specially by **compile-file** for the purposes of enabling *compile time evaluation* of that *form*. *Top level forms* include those *forms* which are not *subforms* of any other *form*, and certain other cases. See Section 3.2.3.1 (Processing of Top Level Forms). 



**trace output** *n.* the *output stream* which is the *value* of the *dynamic variable* 



**\*trace-output\***. 







 



 



**tree** *n.* 1. a binary recursive data structure made up of *conses* and *atoms*: the *conses* are themselves also *trees* (sometimes called “subtrees” or “branches”), and the *atoms* are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 2. in general, any recursive data structure that has some notion of “branches” and *leaves*. 



<b>tree structure</b> <i>n.</i> (of a <i>tree</i><sub>1</sub>) the set of <i>conses</i> that make up the <i>tree</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>tree structure</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>tree</i> are not themselves part of its <i>tree structure</i> unless they are also <i>conses</i>. 



**true** *n.* any *object* that is not *false* and that is used to represent the success of a *predicate* test. See *t*<sub>1</sub>. 



**truename** *n.* 1. the canonical *filename* of a *file* in the *file system*. See Section 20.1.3 (Truenames). 2. a *pathname* representing a *truename*<sub>1</sub>. 



**two-way stream** *n.* a *stream* of *type* **two-way-stream**, which is a *bidirectional* 



*composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



<b>type</b> <i>n.</i> 1. a set of <i>objects</i>, usually with common structure, behavior, or purpose. (Note that the expression “<i>X</i> is of type <i>S<sub>a</sub></i>” naturally implies that “<i>X</i> is of type <i>S<sub>b</sub></i>” if <i>S<sub>a</sub></i> is a <i>subtype</i> of <i>S<sub>b</sub></i>.) 2. (immediately following the name of a <i>type</i>) a <i>subtype</i> of that <i>type</i>. “The type <b>vector</b> is an array type.” 



**type declaration** *n.* a *declaration* that asserts that every reference to a specified *binding* within the scope of the *declaration* results in some *object* of the specified *type*. 



**type equivalent** *adj.* (of two *types X* and *Y* ) having the same *elements*; that is, *X* is a *subtype* of *Y* and *Y* is a *subtype* of *X*. 



**type expand** *n.* to fully expand a *type specifier* , removing any references to *derived types*. (Common Lisp provides no program interface to cause this to occur, but the semantics of Common Lisp are such that every *implementation* must be able to do 



this internally, and some situations involving *type specifiers* are most easily described in terms of a fully expanded *type specifier* .) 



**type specifier** *n.* an *expression* that denotes a *type*. “The symbol random-state, the list (integer 3 5), the list (and list (not null)), and the class named standard-class are type specifiers.” 



