---
title: S
sidebar_position: 115
---

**S** 



**safe** *adj.* 1. (of <ClLinks  term={"code"}><i>code</i></ClLinks>) processed in a *lexical environment* where the the highest **safety** level (3) was in effect. See <ClLinks  term={"optimize"}><b>optimize</b></ClLinks>. 2. (of a <ClLinks  term={"call"}><i>call</i></ClLinks>) a *safe call*. 



**safe call** *n.* a <ClLinks  term={"call"}><i>call</i></ClLinks> in which the <ClLinks  term={"call"}><i>call</i></ClLinks>, the <ClLinks  term={"function"}><i>function</i></ClLinks> being *called*, and the point of *functional evaluation* are all <ClLinks  term={"safe"}><i>safe</i></ClLinks><sub>1</sub> <ClLinks  term={"code"}><i>code</i></ClLinks>. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**same** *adj.* 1. (of <ClLinks  term={"object"}><i>objects</i></ClLinks> under a specified <ClLinks  term={"predicate"}><i>predicate</i></ClLinks>) indistinguishable by that 



<ClLinks  term={"predicate"}><i>predicate</i></ClLinks>. “The symbol car, the string "car", and the string "CAR" are the same under **string-equal**”. 2. (of <ClLinks  term={"object"}><i>objects</i></ClLinks> if no predicate is implied by context) indistinguishable by <ClLinks  term={"eql"}><b>eql</b></ClLinks>. Note that <ClLinks  term={"eq"}><b>eq</b></ClLinks> might be capable of distinguishing some <ClLinks  term={"number"}><i>numbers</i></ClLinks> and <ClLinks  term={"character"}><i>characters</i></ClLinks> which <ClLinks  term={"eql"}><b>eql</b></ClLinks> cannot distinguish, but the nature of such, if any, is <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> 



*dependent*. Since <ClLinks  term={"eq"}><b>eq</b></ClLinks> is used only rarely in this specification, <ClLinks  term={"eql"}><b>eql</b></ClLinks> is the default predicate when none is mentioned explicitly. “The conses returned by two successive calls to <ClLinks  term={"cons"}><b>cons</b></ClLinks> are never the same.” 3. (of <ClLinks  term={"type"}><i>types</i></ClLinks>) having the same set of <ClLinks  term={"element"}><i>elements</i></ClLinks>; that is, each <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of the others. “The types specified by (integer 0 1), (unsigned-byte 1), and bit are the same.” 



**satisfy the test** *v.* (of an <ClLinks  term={"object"}><i>object</i></ClLinks> being considered by a *sequence function*) 1. (for a one <ClLinks  term={"argument"}><i>argument</i></ClLinks> test) to be in a state such that the <ClLinks  term={"function"}><i>function</i></ClLinks> which is the *predicate argument* to the *sequence function* returns <ClLinks  term={"true"}><i>true</i></ClLinks> when given a single <ClLinks  term={"argument"}><i>argument</i></ClLinks> that is the result 



of calling the *sequence function*’s *key argument* on the <ClLinks  term={"object"}><i>object</i></ClLinks> being considered. See Section 17.2.2 (Satisfying a One-Argument Test). 2. (for a two <ClLinks  term={"argument"}><i>argument</i></ClLinks> test) to be in a state such that the two-place <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> which is the *sequence function*’s *test* 







 



 



<ClLinks  term={"argument"}><i>argument</i></ClLinks> returns <ClLinks  term={"true"}><i>true</i></ClLinks> when given a first <ClLinks  term={"argument"}><i>argument</i></ClLinks> that is the <ClLinks  term={"object"}><i>object</i></ClLinks> being considered, and when given a second <ClLinks  term={"argument"}><i>argument</i></ClLinks> that is the result of calling the *sequence function*’s *key argument* on an <ClLinks  term={"element"}><i>element</i></ClLinks> of the *sequence function*’s *sequence argument* which is being tested for equality; or to be in a state such that the *test-not function* returns <ClLinks  term={"false"}><i>false</i></ClLinks> given the same <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. See Section 17.2.1 (Satisfying a Two-Argument Test). 



**scope** *n.* the structural or textual region of code in which <ClLinks  term={"reference"}><i>references</i></ClLinks> to an <ClLinks  term={"object"}><i>object</i></ClLinks>, a <ClLinks  term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks  term={"tag"}><i>tag</i></ClLinks>, or an <ClLinks  term={"environment"}><i>environment</i></ClLinks> (usually by <ClLinks  term={"name"}><i>name</i></ClLinks>) can occur. 



**script** *n. ISO* one of possibly several sets that form an *exhaustive partition* of the type <ClLinks  term={"character"}><b>character</b></ClLinks>. See Section 13.1.2.1 (Character Scripts). 



**secondary value** *n.* (of <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks  term={"form"}><i>form</i></ClLinks>) the second <ClLinks  term={"value"}><i>value</i></ClLinks>, if any, or else <ClLinks  term={"nil"}><b>nil</b></ClLinks> if there are fewer than two <ClLinks  term={"value"}><i>values</i></ClLinks>. “The secondary value returned by <ClLinks  term={"truncate"}><b>truncate</b></ClLinks> is a remainder.” 



**section** *n.* a partitioning of output by a *conditional newline* on a *pretty printing stream*. See Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**self-evaluating object** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that is neither a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> nor a <ClLinks  term={"cons"}><i>cons</i></ClLinks>. If a 



*self-evaluating object* is *evaluated*, it <ClLinks  term={"yield"}><i>yields</i></ClLinks> itself as its only <ClLinks  term={"value"}><i>value</i></ClLinks>. “Strings are 



self-evaluating objects.” 



**semi-standard** *adj.* (of a language feature) not required to be implemented by any *conforming implementation*, but nevertheless recommended as the canonical approach in situations where an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> does plan to support such a feature. The presence of <ClLinks  term={"semi-standard"}><i>semi-standard</i></ClLinks> aspects in the language is intended to lessen portability problems and reduce the risk of gratuitous divergence among <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> that might stand in the way of future standardization. 



**semicolon** *n.* the *standard character* that is called “semicolon” (;). See Figure 2–5. <ClLinks  term={"sequence"}><b>sequence</b></ClLinks> *n.* 1. an ordered collection of elements 2. a <ClLinks  term={"vector"}><i>vector</i></ClLinks> or a <ClLinks  term={"list"}><i>list</i></ClLinks>. 



**sequence function** *n.* one of the <ClLinks  term={"function"}><i>functions</i></ClLinks> in Figure 17–1, or an *implementation defined function* that operates on one or more *sequences*. and that is defined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a *sequence function*. 



**sequential** *adj. Trad.* (of <ClLinks  term={"binding"}><i>binding</i></ClLinks> or *assignment*) done in the style of <ClLinks  term={"setq"}><b>setq</b></ClLinks>, <ClLinks  term={"let"}><b>let\*</b></ClLinks>, or <ClLinks  term={"do"}><b>do\*</b></ClLinks>; that is, interleaving the evaluation of the <ClLinks  term={"form"}><i>forms</i></ClLinks> that produce <ClLinks  term={"value"}><i>values</i></ClLinks> with the *assignments* or <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of the <ClLinks  term={"variable"}><i>variables</i></ClLinks> (or <ClLinks  term={"place"}><i>places</i></ClLinks>). See <ClLinks  term={"parallel"}><i>parallel</i></ClLinks>. 



**sequentially** *adv.* in a <ClLinks  term={"sequential"}><i>sequential</i></ClLinks> way. 







 



 



**serious condition** *n.* a <ClLinks  term={"condition"}><i>condition</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"serious-condition"}><b>serious-condition</b></ClLinks>, which represents a 



<ClLinks  term={"situation"}><i>situation</i></ClLinks> that is generally sufficiently severe that entry into the <ClLinks  term={"debugger"}><i>debugger</i></ClLinks> should be expected if the <ClLinks  term={"condition"}><i>condition</i></ClLinks> is *signaled* but not *handled*. 



**session** *n.* the conceptual aggregation of events in a *Lisp image* from the time it is started to the time it is terminated. 



<ClLinks  term={"set"}><b>set</b></ClLinks> *v.t. Trad.* (any <ClLinks  term={"variable"}><i>variable</i></ClLinks> or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a *dynamic variable*) to <ClLinks  term={"assign"}><i>assign</i></ClLinks> the <ClLinks  term={"variable"}><i>variable</i></ClLinks>. 



**setf expander** *n.* a function used by <ClLinks  term={"setf"}><b>setf</b></ClLinks> to compute the *setf expansion* of a <ClLinks  term={"place"}><i>place</i></ClLinks>. 



**setf expansion** *n.* a set of five <ClLinks  term={"expression"}><i>expressions</i></ClLinks><sub>1</sub> that, taken together, describe how to store into a <ClLinks  term={"place"}><i>place</i></ClLinks> and which <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of the macro call associated with the <ClLinks  term={"place"}><i>place</i></ClLinks> are evaluated. See Section 5.1.1.2 (Setf Expansions). 



**setf function** *n.* a <ClLinks  term={"function"}><i>function</i></ClLinks> whose <ClLinks  term={"name"}><i>name</i></ClLinks> is (setf <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>). 



**setf function name** *n.* (of a *symbol S*) the <ClLinks  term={"list"}><i>list</i></ClLinks> (setf *S*). 



<ClLinks  term={"shadow"}><b>shadow</b></ClLinks> *v.t.* 1. to override the meaning of. “That binding of X shadows an outer one.” 2. to hide the presence of. “That <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> of F shadows the outer <ClLinks  term={"flet"}><b>flet</b></ClLinks> of F.” 3. to replace. “That package shadows the symbol cl:car with its own symbol car.” 



**shadowing symbol** *n.* (in a <ClLinks  term={"package"}><i>package</i></ClLinks>) an <ClLinks  term={"element"}><i>element</i></ClLinks> of the <ClLinks  term={"package"}><i>package</i></ClLinks>’s *shadowing symbols list*. 



**shadowing symbols list** *n.* (of a <ClLinks  term={"package"}><i>package</i></ClLinks>) a <ClLinks  term={"list"}><i>list</i></ClLinks>, associated with the <ClLinks  term={"package"}><i>package</i></ClLinks>, of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are to be exempted from ‘symbol conflict errors’ detected when packages are *used*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></ClLinks>. 



**shared slot** *n.* (of a <ClLinks  term={"class"}><i>class</i></ClLinks>) a *slot accessible* in more than one <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>; specifically, such a <ClLinks  term={"slot"}><i>slot</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in all *direct instances* of the <ClLinks  term={"class"}><i>class</i></ClLinks> and in those *indirect instances* whose <ClLinks  term={"class"}><i>class</i></ClLinks> does not <ClLinks  term={"shadow"}><i>shadow</i></ClLinks><sub>1</sub> the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



**sharpsign** *n.* the *standard character* that is variously called “number sign,” “sharp,” or “sharp sign” (#). See Figure 2–5. 



**short float** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"short-float"}><b>short-float</b></ClLinks>. 



**sign** *n.* one of the *standard characters* “+” or “-”. 



<ClLinks  term={"signal"}><b>signal</b></ClLinks> *v.* to announce, using a standard protocol, that a particular situation, 



represented by a <ClLinks  term={"condition"}><i>condition</i></ClLinks>, has been detected. See Section 9.1 (Condition System Concepts). 







 



 



**signature** *n.* (of a <ClLinks  term={"method"}><i>method</i></ClLinks>) a description of the <ClLinks  term={"parameter"}><i>parameters</i></ClLinks> and *parameter specializers* for the <ClLinks  term={"method"}><i>method</i></ClLinks> which determines the <ClLinks  term={"method"}><i>method</i></ClLinks>’s applicability for a given set of 



required <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, and which also describes the <ClLinks  term={"argument"}><i>argument</i></ClLinks> conventions for its other, non-required <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. 



**similar** *adj.* (of two <ClLinks  term={"object"}><i>objects</i></ClLinks>) defined to be equivalent under the <ClLinks  term={"similarity"}><i>similarity</i></ClLinks> relationship. 



**similarity** *n.* a two-place conceptual equivalence predicate, which is independent of the *Lisp image* so that two <ClLinks  term={"object"}><i>objects</i></ClLinks> in different *Lisp images* can be understood to be equivalent under this predicate. See Section 3.2.4 (Literal Objects in Compiled Files). 



**simple** *adj.* 1. (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) being of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>. 2. (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) having no *implementation-defined attributes*, or else having *implementation-defined attributes* each of which has the <ClLinks  term={"null"}><i>null</i></ClLinks> value for that <ClLinks  term={"attribute"}><i>attribute</i></ClLinks>. 



**simple array** *n.* an <ClLinks  term={"array"}><i>array</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-array"}><b>simple-array</b></ClLinks>. 



**simple bit array** *n.* a *bit array* that is a *simple array*; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> (simple-array bit). 



**simple bit vector** *n.* a *bit vector* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>. 



**simple condition** *n.* a <ClLinks  term={"condition"}><i>condition</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-condition"}><b>simple-condition</b></ClLinks>. 



**simple general vector** *n.* a *simple vector* . 



**simple string** *n.* a <ClLinks  term={"string"}><i>string</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-string"}><b>simple-string</b></ClLinks>. 



**simple vector** *n.* a <ClLinks  term={"vector"}><i>vector</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"simple-vector"}><b>simple-vector</b></ClLinks>, sometimes called a “*simple general vector* .” Not all <ClLinks  term={"vector"}><i>vectors</i></ClLinks> that are <ClLinks  term={"simple"}><i>simple</i></ClLinks> are *simple vectors*—only those that have *element type* <ClLinks  term={"t"}><b>t</b></ClLinks>. 



**single escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <ClLinks  term={"character"}><i>character</i></ClLinks> that indicates that the next <ClLinks  term={"character"}><i>character</i></ClLinks> is to be treated as an <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> with its <ClLinks  term={"case"}><i>case</i></ClLinks> preserved. For details, see Section 2.1.4.6 (Single Escape Character). 2. *adj.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) having the *single escape syntax type*. 3. *n.* a *single escape*<sub>2</sub> *character* . (In the *standard* 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>, <ClLinks  term={"slash"}><i>slash</i></ClLinks> is the only *single escape*.) 



**single float** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"single-float"}><b>single-float</b></ClLinks>. 



**single-quote** *n.* the *standard character* that is variously called “apostrophe,” “acute accent,” “quote,” or “single quote” (’). See Figure 2–5. 



**singleton** *adj.* (of a *sequence*) having only one <ClLinks  term={"element"}><i>element</i></ClLinks>. “(list ’hello) returns a singleton list.” 







 



 



**situation** *n.* the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks  term={"form"}><i>form</i></ClLinks> in a specific <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 



**slash** *n.* the *standard character* that is variously called “solidus” or “slash” (/). See Figure 2–5. 



**slot** *n.* a component of an <ClLinks  term={"object"}><i>object</i></ClLinks> that can store a <ClLinks  term={"value"}><i>value</i></ClLinks>. 



**slot specifier** *n.* a representation of a <ClLinks  term={"slot"}><i>slot</i></ClLinks> that includes the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"slot"}><i>slot</i></ClLinks> and zero or more <ClLinks  term={"slot"}><i>slot</i></ClLinks> options. A <ClLinks  term={"slot"}><i>slot</i></ClLinks> option pertains only to a single <ClLinks  term={"slot"}><i>slot</i></ClLinks>. 



**source code** *n. code* representing <ClLinks  term={"object"}><i>objects</i></ClLinks> suitable for <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> (*e.g.*, <ClLinks  term={"object"}><i>objects</i></ClLinks> created by <ClLinks  term={"read"}><b>read</b></ClLinks>, by *macro expansion*, or by *compiler macro expansion*). 



**source file** *n.* a <ClLinks  term={"file"}><i>file</i></ClLinks> which contains a textual representation of *source code*, that can be edited, *loaded*, or *compiled*. 



**space** *n.* the *standard character ⟨Space⟩*, notated for the *Lisp reader* as #\Space. 



**special form** *n.* a <ClLinks  term={"list"}><i>list</i></ClLinks>, other than a *macro form*, which is a <ClLinks  term={"form"}><i>form</i></ClLinks> with special syntax or special <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> rules or both, possibly manipulating the *evaluation environment* or control flow or both. The first element of a *special form* is a *special operator* . 



**special operator** *n.* one of a fixed set of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, enumerated in Figure 3–2, that may appear in the <ClLinks  term={"car"}><i>car</i></ClLinks> of a <ClLinks  term={"form"}><i>form</i></ClLinks> in order to identify the <ClLinks  term={"form"}><i>form</i></ClLinks> as a *special form*. 



**special variable** *n. Trad.* a *dynamic variable*. 



**specialize** *v.t.* (a *generic function*) to define a <ClLinks  term={"method"}><i>method</i></ClLinks> for the *generic function*, or in other words, to refine the behavior of the *generic function* by giving it a specific meaning for a particular set of *classes* or <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. 



**specialized** *adj.* 1. (of a *generic function*) having <ClLinks  term={"method"}><i>methods</i></ClLinks> which <ClLinks  term={"specialize"}><i>specialize</i></ClLinks> the *generic function*. 2. (of an <ClLinks  term={"array"}><i>array</i></ClLinks>) having an *actual array element type* that is a *proper subtype* of the <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"t"}><b>t</b></ClLinks>; see Section 15.1.1 (Array Elements). “(make-array 5 :element-type ’bit) makes an array of length five that is specialized for bits.” 



**specialized lambda list** *n.* an *extended lambda list* used in <ClLinks  term={"form"}><i>forms</i></ClLinks> that *establish method* definitions, such as <ClLinks  term={"defmethod"}><b>defmethod</b></ClLinks>. See Section 3.4.3 (Specialized Lambda Lists). 



<b>spreadable argument list designator</b> <i>n.</i> a <i>designator</i> for a <i>list</i> of <i>objects</i>; that is, an <i>object</i> that denotes a <i>list</i> and that is a <i>non-null list L</i>1 of length <i>n</i>, whose last element is a <i>list L</i>2 of length <i>m</i> (denoting a list <i>L</i>3 of length <i>m</i> + <i>n −</i> 1 whose <i>elements</i> are <i>L</i>1<i><sub>i</sub></i> for <i>i</i> &lt; <i>n −</i> 1 followed by <i>L</i>2<i><sub>j</sub></i> for <i>j</i> &lt; <i>m</i>). “The list (1 2 (3 4 5)) is a spreadable argument list designator for the list (1 2 3 4 5).” 







 



 



**stack allocate** *v.t. Trad.* to allocate in a non-permanent way, such as on a stack. Stack-allocation is an optimization technique used in some <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> for 



allocating certain kinds of <ClLinks  term={"object"}><i>objects</i></ClLinks> that have *dynamic extent*. Such <ClLinks  term={"object"}><i>objects</i></ClLinks> are allocated on the stack rather than in the heap so that their storage can be freed as part of unwinding the stack rather than taking up space in the heap until the next garbage collection. What <ClLinks  term={"type"}><i>types</i></ClLinks> (if any) can have *dynamic extent* can vary from <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. No <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is ever required to perform stack-allocation. 



**stack-allocated** *adj. Trad.* having been *stack allocated*. 



**standard character** *n.* a <ClLinks  term={"character"}><i>character</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"standard-char"}><b>standard-char</b></ClLinks>, which is one of a fixed set of 96 such <ClLinks  term={"character"}><i>characters</i></ClLinks> required to be present in all *conforming implementations*. See Section 2.1.3 (Standard Characters). 



**standard class** *n.* a <ClLinks  term={"class"}><i>class</i></ClLinks> that is a *generalized instance* of <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>. 



**standard generic function** a <ClLinks  term={"function"}><i>function</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>. 



**standard input** *n.* the *input stream* which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the *dynamic variable* 



**\*standard-input\***. 



**standard method combination** *n.* the *method combination* named **standard**. 



**standard object** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that is a *generalized instance* of <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>. 



**standard output** *n.* the *output stream* which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the *dynamic variable* **\*standard-output\***. 



**standard pprint dispatch table** *n.* A *pprint dispatch table* that is <ClLinks  term={"different"}><i>different</i></ClLinks> from the *initial pprint dispatch table*, that implements *pretty printing* as described in this specification, and that, unlike other *pprint dispatch tables*, must never be modified by any program. (Although the definite reference “the *standard pprint dispatch table*” is generally used within this document, it is actually <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether a single <ClLinks  term={"object"}><i>object</i></ClLinks> fills the role of the *standard pprint dispatch table*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard pprint dispatch table*” is called for. As such, this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard readtable** *n.* A <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> that is <ClLinks  term={"different"}><i>different</i></ClLinks> from the *initial readtable*, that implements the <ClLinks  term={"expression"}><i>expression</i></ClLinks> syntax defined in this specification, and that, unlike 



other <ClLinks  term={"readtable"}><i>readtables</i></ClLinks>, must never be modified by any program. (Although the definite reference “the *standard readtable*” is generally used within this document, it is 



actually <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether a single <ClLinks  term={"object"}><i>object</i></ClLinks> fills the role of the *standard readtable*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard readtable*” is called for. As such, 







 



 



this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard syntax** *n.* the syntax represented by the *standard readtable* and used as a reference syntax throughout this document. See Section 2.1 (Character Syntax). 



**standardized** *adj.* (of a <ClLinks  term={"name"}><i>name</i></ClLinks>, <ClLinks  term={"object"}><i>object</i></ClLinks>, or definition) having been defined by Common Lisp. “All standardized variables that are required to hold bidirectional streams have “-io\*” in their name.” 



**startup environment** *n.* the *global environment* of the running *Lisp image* from which the <ClLinks  term={"compiler"}><i>compiler</i></ClLinks> was invoked. 



<ClLinks  term={"step"}><b>step</b></ClLinks> *v.t.*, *n.* 1. *v.t.* (an iteration <ClLinks  term={"variable"}><i>variable</i></ClLinks>) to <ClLinks  term={"assign"}><i>assign</i></ClLinks> the <ClLinks  term={"variable"}><i>variable</i></ClLinks> a new <ClLinks  term={"value"}><i>value</i></ClLinks> at the end of an iteration, in preparation for a new iteration. 2. *n.* the <ClLinks  term={"code"}><i>code</i></ClLinks> that identifies how the next value in an iteration is to be computed. 3. *v.t.* (<ClLinks  term={"code"}><i>code</i></ClLinks>) to specially execute the <ClLinks  term={"code"}><i>code</i></ClLinks>, pausing at intervals to allow user confirmation or intervention, usually for debugging. 



<ClLinks  term={"stream"}><b>stream</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> that can be used with an input or output function to identify an appropriate source or sink of <ClLinks  term={"character"}><i>characters</i></ClLinks> or <ClLinks  term={"byte"}><i>bytes</i></ClLinks> for that operation. 



**stream associated with a file** *n.* a *file stream*, or a *synonym stream* 



the <ClLinks  term={"target"}><i>target</i></ClLinks> of which is a *stream associated with a file*. Such a <ClLinks  term={"stream"}><i>stream</i></ClLinks> 



cannot be created with <ClLinks  term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, <ClLinks  term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks>, 



<ClLinks  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks>, <ClLinks  term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks>, <ClLinks  term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, or <ClLinks  term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. 



**stream designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"stream"}><i>stream</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"stream"}><i>stream</i></ClLinks> and that is one of: <ClLinks  term={"t"}><b>t</b></ClLinks> (denoting the <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>), <ClLinks  term={"nil"}><b>nil</b></ClLinks> (denoting the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*standard-input\*** for *input stream designators* or denoting the <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*standard-output\*** for *output stream designators*), or a <ClLinks  term={"stream"}><i>stream</i></ClLinks> (denoting itself). 



**stream element type** *n.* (of a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) the <ClLinks  term={"type"}><i>type</i></ClLinks> of data for which the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is specialized. 



**stream variable** *n.* a <ClLinks  term={"variable"}><i>variable</i></ClLinks> whose <ClLinks  term={"value"}><i>value</i></ClLinks> must be a <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



**stream variable designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a *stream variable*; that is, a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that denotes a *stream variable* and that is one of: <ClLinks  term={"t"}><b>t</b></ClLinks> (denoting <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>), 



<ClLinks  term={"nil"}><b>nil</b></ClLinks> (denoting **\*standard-input\*** for *input stream variable designators* or denoting **\*standard-output\*** for *output stream variable designators*), or some other <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (denoting itself). 



<ClLinks  term={"string"}><b>string</b></ClLinks> *n.* a specialized <ClLinks  term={"vector"}><i>vector</i></ClLinks> that is of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"string"}><b>string</b></ClLinks>, and whose elements are of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks> or a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"character"}><b>character</b></ClLinks>. 







 



 



**string designator** *n.* a <ClLinks  term={"designator"}><i>designator</i></ClLinks> for a <ClLinks  term={"string"}><i>string</i></ClLinks>; that is, an <ClLinks  term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks  term={"string"}><i>string</i></ClLinks> and that is one of: a <ClLinks  term={"character"}><i>character</i></ClLinks> (denoting a *singleton string* that has the <ClLinks  term={"character"}><i>character</i></ClLinks> as its only <ClLinks  term={"element"}><i>element</i></ClLinks>), a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks  term={"string"}><i>string</i></ClLinks> that is its <ClLinks  term={"name"}><i>name</i></ClLinks>), or a <ClLinks  term={"string"}><i>string</i></ClLinks> (denoting itself). The intent is that this term be consistent with the behavior of <ClLinks  term={"string"}><b>string</b></ClLinks>; <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> that extend <ClLinks  term={"string"}><b>string</b></ClLinks> must extend the meaning of this term in a compatible way. 



**string equal** *adj.* the <ClLinks  term={"same"}><i>same</i></ClLinks> under **string-equal**. 



**string stream** *n.* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"string-stream"}><b>string-stream</b></ClLinks>. 



**structure** *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"structure-object"}><b>structure-object</b></ClLinks>. 



**structure class** *n.* a <ClLinks  term={"class"}><i>class</i></ClLinks> that is a *generalized instance* of <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"structure-class"}><b>structure-class</b></ClLinks>. 



**structure name** *n.* a <ClLinks  term={"name"}><i>name</i></ClLinks> defined with <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks>. Usually, such a <ClLinks  term={"type"}><i>type</i></ClLinks> is also a *structure class*, but there may be <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> situations in which this is not so, if the :type option to <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks> is used. 



**style warning** *n.* a <ClLinks  term={"condition"}><i>condition</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"style-warning"}><b>style-warning</b></ClLinks>. 



**subclass** *n.* a <ClLinks  term={"class"}><i>class</i></ClLinks> that <ClLinks  term={"inherit"}><i>inherits</i></ClLinks> from another <ClLinks  term={"class"}><i>class</i></ClLinks>, called a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks>. (No <ClLinks  term={"class"}><i>class</i></ClLinks> is a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks> of itself.) 



**subexpression** *n.* (of an <ClLinks  term={"expression"}><i>expression</i></ClLinks>) an <ClLinks  term={"expression"}><i>expression</i></ClLinks> that is contained within the 



<ClLinks  term={"expression"}><i>expression</i></ClLinks>. (In fact, the state of being a <ClLinks  term={"subexpression"}><i>subexpression</i></ClLinks> is not an attribute of the <ClLinks  term={"subexpression"}><i>subexpression</i></ClLinks>, but really an attribute of the containing <ClLinks  term={"expression"}><i>expression</i></ClLinks> since the *same object* can at once be a <ClLinks  term={"subexpression"}><i>subexpression</i></ClLinks> in one context, and not in another.) 



**subform** *n.* (of a <ClLinks  term={"form"}><i>form</i></ClLinks>) an <ClLinks  term={"expression"}><i>expression</i></ClLinks> that is a <ClLinks  term={"subexpression"}><i>subexpression</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks>, and which by virtue of its position in that <ClLinks  term={"form"}><i>form</i></ClLinks> is also a <ClLinks  term={"form"}><i>form</i></ClLinks>. “(f x) and x, but not exit, are subforms of (return-from exit (f x)).” 



**subrepertoire** *n.* a subset of a <ClLinks  term={"repertoire"}><i>repertoire</i></ClLinks>. 



**subtype** *n.* a <ClLinks  term={"type"}><i>type</i></ClLinks> whose membership is the same as or a proper subset of the 



membership of another <ClLinks  term={"type"}><i>type</i></ClLinks>, called a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks>. (Every <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of itself.) 



**superclass** *n.* a <ClLinks  term={"class"}><i>class</i></ClLinks> from which another <ClLinks  term={"class"}><i>class</i></ClLinks> (called a <ClLinks  term={"subclass"}><i>subclass</i></ClLinks>) <ClLinks  term={"inherit"}><i>inherits</i></ClLinks>. (No <ClLinks  term={"class"}><i>class</i></ClLinks> is a <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of itself.) See <ClLinks  term={"subclass"}><i>subclass</i></ClLinks>. 



**supertype** *n.* a <ClLinks  term={"type"}><i>type</i></ClLinks> whose membership is the same as or a proper superset of the membership of another <ClLinks  term={"type"}><i>type</i></ClLinks>, called a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks>. (Every <ClLinks  term={"type"}><i>type</i></ClLinks> is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of itself.) See <ClLinks  term={"subtype"}><i>subtype</i></ClLinks>. 







 



 



**supplied-p parameter** *n.* a <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> which recieves its *generalized boolean* value implicitly due to the presence or absence of an <ClLinks  term={"argument"}><i>argument</i></ClLinks> corresponding to another <ClLinks  term={"parameter"}><i>parameter</i></ClLinks> (such as an *optional parameter* or a *rest parameter* ). See Section 3.4.1 (Ordinary Lambda Lists). 



<ClLinks  term={"symbol"}><b>symbol</b></ClLinks> *n.* an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>. 



**symbol macro** *n.* a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that stands for another <ClLinks  term={"form"}><i>form</i></ClLinks>. See the <ClLinks  term={"macro"}><i>macro</i></ClLinks> 



<ClLinks  term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>. 



**synonym stream** *n.* 1. a <ClLinks  term={"stream"}><i>stream</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"synonym-stream"}><b>synonym-stream</b></ClLinks>, which is consequently a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is an alias for another <ClLinks  term={"stream"}><i>stream</i></ClLinks>, which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of a *dynamic variable* whose <ClLinks  term={"name"}><i>name</i></ClLinks> is the *synonym stream symbol* of the *synonym stream*. See the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks>. 2. (to a <ClLinks  term={"stream"}><i>stream</i></ClLinks>) a *synonym stream* which has the <ClLinks  term={"stream"}><i>stream</i></ClLinks> as 



the <ClLinks  term={"value"}><i>value</i></ClLinks> of its *synonym stream symbol*. 3. (to a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>) a *synonym stream* which has the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as its *synonym stream symbol*. 



**synonym stream symbol** *n.* (of a *synonym stream*) the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> which names the *dynamic variable* which has as its <ClLinks  term={"value"}><i>value</i></ClLinks> another <ClLinks  term={"stream"}><i>stream</i></ClLinks> for which the *synonym stream* is an alias. 



**syntax type** *n.* (of a <ClLinks  term={"character"}><i>character</i></ClLinks> ) one of several classifications, enumerated in Figure 2– 6, that are used for dispatch during parsing by the *Lisp reader* . See Section 2.1.4 (Character Syntax Types). 



**system class** *n.* a <ClLinks  term={"class"}><i>class</i></ClLinks> that may be of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks> in a *conforming* 



<ClLinks  term={"implementation"}><i>implementation</i></ClLinks> and hence cannot be inherited by *classes* defined by *conforming* 



<ClLinks  term={"program"}><i>programs</i></ClLinks>. 



**system code** *n. code* supplied by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to implement this specification (*e.g.*, the definition of <ClLinks  term={"mapcar"}><b>mapcar</b></ClLinks>) or generated automatically in support of this 



specification (*e.g.*, during method combination); that is, <ClLinks  term={"code"}><i>code</i></ClLinks> that is not *programmer code*. 



