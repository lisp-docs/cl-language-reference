---
title: S
sidebar_position: 115
---

**S** 



**safe** *adj.* 1. (of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) processed in a *lexical environment* where the the highest **safety** level (3) was in effect. See <DictionaryLink styled={true} term={"optimize"}><b>optimize</b></DictionaryLink>. 2. (of a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm>) a *safe call*. 



**safe call** *n.* a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> being *called*, and the point of *functional evaluation* are all <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm><sub>1</sub> <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**same** *adj.* 1. (of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> under a specified <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>) indistinguishable by that 



<GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm>. “The symbol car, the string "car", and the string "CAR" are the same under **string-equal**”. 2. (of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> if no predicate is implied by context) indistinguishable by <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>. Note that <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> might be capable of distinguishing some <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> which <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> cannot distinguish, but the nature of such, if any, is <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> 



*dependent*. Since <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> is used only rarely in this specification, <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> is the default predicate when none is mentioned explicitly. “The conses returned by two successive calls to <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> are never the same.” 3. (of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>) having the same set of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>; that is, each <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the others. “The types specified by (integer 0 1), (unsigned-byte 1), and bit are the same.” 



**satisfy the test** *v.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> being considered by a *sequence function*) 1. (for a one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> test) to be in a state such that the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which is the *predicate argument* to the *sequence function* returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when given a single <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that is the result 



of calling the *sequence function*’s *key argument* on the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> being considered. See Section 17.2.2 (Satisfying a One-Argument Test). 2. (for a two <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> test) to be in a state such that the two-place <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> which is the *sequence function*’s *test* 







 



 



<GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when given a first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> being considered, and when given a second <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> that is the result of calling the *sequence function*’s *key argument* on an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *sequence function*’s *sequence argument* which is being tested for equality; or to be in a state such that the *test-not function* returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> given the same <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. See Section 17.2.1 (Satisfying a Two-Argument Test). 



**scope** *n.* the structural or textual region of code in which <GlossaryTerm styled={true} term={"reference"}><i>references</i></GlossaryTerm> to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> (usually by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>) can occur. 



**script** *n. ISO* one of possibly several sets that form an *exhaustive partition* of the type <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. See Section 13.1.2.1 (Character Scripts). 



**secondary value** *n.* (of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) the second <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, if any, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are fewer than two <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. “The secondary value returned by <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> is a remainder.” 



**section** *n.* a partitioning of output by a *conditional newline* on a *pretty printing stream*. See Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**self-evaluating object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is neither a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> nor a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. If a 



*self-evaluating object* is *evaluated*, it <GlossaryTerm styled={true} term={"yield"}><i>yields</i></GlossaryTerm> itself as its only <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. “Strings are 



self-evaluating objects.” 



**semi-standard** *adj.* (of a language feature) not required to be implemented by any *conforming implementation*, but nevertheless recommended as the canonical approach in situations where an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> does plan to support such a feature. The presence of <GlossaryTerm styled={true} term={"semi-standard"}><i>semi-standard</i></GlossaryTerm> aspects in the language is intended to lessen portability problems and reduce the risk of gratuitous divergence among <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> that might stand in the way of future standardization. 



**semicolon** *n.* the *standard character* that is called “semicolon” (;). See Figure 2–5. <DictionaryLink styled={true} term={"sequence"}><b>sequence</b></DictionaryLink> *n.* 1. an ordered collection of elements 2. a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**sequence function** *n.* one of the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> in Figure 17–1, or an *implementation defined function* that operates on one or more *sequences*. and that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *sequence function*. 



**sequential** *adj. Trad.* (of <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or *assignment*) done in the style of <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink styled={true} term={"let"}><b>let\*</b></DictionaryLink>, or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>; that is, interleaving the evaluation of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that produce <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> with the *assignments* or <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> (or <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm>). See <GlossaryTerm styled={true} term={"parallel"}><i>parallel</i></GlossaryTerm>. 



**sequentially** *adv.* in a <GlossaryTerm styled={true} term={"sequential"}><i>sequential</i></GlossaryTerm> way. 







 



 



**serious condition** *n.* a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, which represents a 



<GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> that is generally sufficiently severe that entry into the <GlossaryTerm styled={true} term={"debugger"}><i>debugger</i></GlossaryTerm> should be expected if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is *signaled* but not *handled*. 



**session** *n.* the conceptual aggregation of events in a *Lisp image* from the time it is started to the time it is terminated. 



<DictionaryLink styled={true} term={"set"}><b>set</b></DictionaryLink> *v.t. Trad.* (any <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a *dynamic variable*) to <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. 



**setf expander** *n.* a function used by <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> to compute the *setf expansion* of a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**setf expansion** *n.* a set of five <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm><sub>1</sub> that, taken together, describe how to store into a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and which <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the macro call associated with the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are evaluated. See Section 5.1.1.2 (Setf Expansions). 



**setf function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**setf function name** *n.* (of a *symbol S*) the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (setf *S*). 



<DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink> *v.t.* 1. to override the meaning of. “That binding of X shadows an outer one.” 2. to hide the presence of. “That <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink> of F shadows the outer <DictionaryLink styled={true} term={"flet"}><b>flet</b></DictionaryLink> of F.” 3. to replace. “That package shadows the symbol cl:car with its own symbol car.” 



**shadowing symbol** *n.* (in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s *shadowing symbols list*. 



**shadowing symbols list** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, associated with the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are to be exempted from ‘symbol conflict errors’ detected when packages are *used*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></DictionaryLink>. 



**shared slot** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a *slot accessible* in more than one <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>; specifically, such a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in all *direct instances* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and in those *indirect instances* whose <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> does not <GlossaryTerm styled={true} term={"shadow"}><i>shadow</i></GlossaryTerm><sub>1</sub> the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



**sharpsign** *n.* the *standard character* that is variously called “number sign,” “sharp,” or “sharp sign” (#). See Figure 2–5. 



**short float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink>. 



**sign** *n.* one of the *standard characters* “+” or “-”. 



<DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> *v.* to announce, using a standard protocol, that a particular situation, 



represented by a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, has been detected. See Section 9.1 (Condition System Concepts). 







 



 



**signature** *n.* (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>) a description of the <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> and *parameter specializers* for the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> which determines the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s applicability for a given set of 



required <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, and which also describes the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> conventions for its other, non-required <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



**similar** *adj.* (of two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>) defined to be equivalent under the <GlossaryTerm styled={true} term={"similarity"}><i>similarity</i></GlossaryTerm> relationship. 



**similarity** *n.* a two-place conceptual equivalence predicate, which is independent of the *Lisp image* so that two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in different *Lisp images* can be understood to be equivalent under this predicate. See Section 3.2.4 (Literal Objects in Compiled Files). 



**simple** *adj.* 1. (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) being of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>. 2. (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) having no *implementation-defined attributes*, or else having *implementation-defined attributes* each of which has the <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm> value for that <GlossaryTerm styled={true} term={"attribute"}><i>attribute</i></GlossaryTerm>. 



**simple array** *n.* an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-array"}><b>simple-array</b></DictionaryLink>. 



**simple bit array** *n.* a *bit array* that is a *simple array*; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (simple-array bit). 



**simple bit vector** *n.* a *bit vector* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></DictionaryLink>. 



**simple condition** *n.* a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink>. 



**simple general vector** *n.* a *simple vector* . 



**simple string** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-string"}><b>simple-string</b></DictionaryLink>. 



**simple vector** *n.* a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-vector"}><b>simple-vector</b></DictionaryLink>, sometimes called a “*simple general vector* .” Not all <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> that are <GlossaryTerm styled={true} term={"simple"}><i>simple</i></GlossaryTerm> are *simple vectors*—only those that have *element type* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



**single escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that indicates that the next <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is to be treated as an <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> with its <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> preserved. For details, see Section 2.1.4.6 (Single Escape Character). 2. *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) having the *single escape syntax type*. 3. *n.* a *single escape*<sub>2</sub> *character* . (In the *standard* 



<GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> is the only *single escape*.) 



**single float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>. 



**single-quote** *n.* the *standard character* that is variously called “apostrophe,” “acute accent,” “quote,” or “single quote” (’). See Figure 2–5. 



**singleton** *adj.* (of a *sequence*) having only one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. “(list ’hello) returns a singleton list.” 







 



 



**situation** *n.* the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in a specific <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 



**slash** *n.* the *standard character* that is variously called “solidus” or “slash” (/). See Figure 2–5. 



**slot** *n.* a component of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that can store a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. 



**slot specifier** *n.* a representation of a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that includes the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> and zero or more <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> options. A <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> option pertains only to a single <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



**source code** *n. code* representing <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> suitable for <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> (*e.g.*, <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> created by <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, by *macro expansion*, or by *compiler macro expansion*). 



**source file** *n.* a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> which contains a textual representation of *source code*, that can be edited, *loaded*, or *compiled*. 



**space** *n.* the *standard character hSpacei*, notated for the *Lisp reader* as #\Space. 



**special form** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, other than a *macro form*, which is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> with special syntax or special <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> rules or both, possibly manipulating the *evaluation environment* or control flow or both. The first element of a *special form* is a *special operator* . 



**special operator** *n.* one of a fixed set of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>, enumerated in Figure 3–2, that may appear in the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in order to identify the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as a *special form*. 



**special variable** *n. Trad.* a *dynamic variable*. 



**specialize** *v.t.* (a *generic function*) to define a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for the *generic function*, or in other words, to refine the behavior of the *generic function* by giving it a specific meaning for a particular set of *classes* or <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



**specialized** *adj.* 1. (of a *generic function*) having <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> which <GlossaryTerm styled={true} term={"specialize"}><i>specialize</i></GlossaryTerm> the *generic function*. 2. (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) having an *actual array element type* that is a *proper subtype* of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>; see Section 15.1.1 (Array Elements). “(make-array 5 :element-type ’bit) makes an array of length five that is specialized for bits.” 



**specialized lambda list** *n.* an *extended lambda list* used in <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that *establish method* definitions, such as <DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>. See Section 3.4.3 (Specialized Lambda Lists). 



<b>spreadable argument list designator</b> <i>n.</i> a <i>designator</i> for a <i>list</i> of <i>objects</i>; that is, an <i>object</i> that denotes a <i>list</i> and that is a <i>non-null list L</i>1 of length <i>n</i>, whose last element is a <i>list L</i>2 of length <i>m</i> (denoting a list <i>L</i>3 of length <i>m</i> + <i>n −</i> 1 whose <i>elements</i> are <i>L</i>1<i><sub>i</sub></i> for <i>i</i> &lt; <i>n −</i> 1 followed by <i>L</i>2<i><sub>j</sub></i> for <i>j</i> &lt; <i>m</i>). “The list (1 2 (3 4 5)) is a spreadable argument list designator for the list (1 2 3 4 5).” 







 



 



**stack allocate** *v.t. Trad.* to allocate in a non-permanent way, such as on a stack. Stack-allocation is an optimization technique used in some <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> for 



allocating certain kinds of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that have *dynamic extent*. Such <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are allocated on the stack rather than in the heap so that their storage can be freed as part of unwinding the stack rather than taking up space in the heap until the next garbage collection. What <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (if any) can have *dynamic extent* can vary from <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. No <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is ever required to perform stack-allocation. 



**stack-allocated** *adj. Trad.* having been *stack allocated*. 



**standard character** *n.* a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-char"}><b>standard-char</b></DictionaryLink>, which is one of a fixed set of 96 such <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> required to be present in all *conforming implementations*. See Section 2.1.3 (Standard Characters). 



**standard class** *n.* a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that is a *generalized instance* of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>. 



**standard generic function** a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>. 



**standard input** *n.* the *input stream* which is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *dynamic variable* 



**\*standard-input\***. 



**standard method combination** *n.* the *method combination* named **standard**. 



**standard object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is a *generalized instance* of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. 



**standard output** *n.* the *output stream* which is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *dynamic variable* **\*standard-output\***. 



**standard pprint dispatch table** *n.* A *pprint dispatch table* that is <GlossaryTerm styled={true} term={"different"}><i>different</i></GlossaryTerm> from the *initial pprint dispatch table*, that implements *pretty printing* as described in this specification, and that, unlike other *pprint dispatch tables*, must never be modified by any program. (Although the definite reference “the *standard pprint dispatch table*” is generally used within this document, it is actually <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether a single <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> fills the role of the *standard pprint dispatch table*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard pprint dispatch table*” is called for. As such, this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard readtable** *n.* A <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"different"}><i>different</i></GlossaryTerm> from the *initial readtable*, that implements the <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> syntax defined in this specification, and that, unlike 



other <GlossaryTerm styled={true} term={"readtable"}><i>readtables</i></GlossaryTerm>, must never be modified by any program. (Although the definite reference “the *standard readtable*” is generally used within this document, it is 



actually <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether a single <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> fills the role of the *standard readtable*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard readtable*” is called for. As such, 







 



 



this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard syntax** *n.* the syntax represented by the *standard readtable* and used as a reference syntax throughout this document. See Section 2.1 (Character Syntax). 



**standardized** *adj.* (of a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, or definition) having been defined by Common Lisp. “All standardized variables that are required to hold bidirectional streams have “-io\*” in their name.” 



**startup environment** *n.* the *global environment* of the running *Lisp image* from which the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> was invoked. 



<DictionaryLink styled={true} term={"step"}><b>step</b></DictionaryLink> *v.t.*, *n.* 1. *v.t.* (an iteration <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> a new <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> at the end of an iteration, in preparation for a new iteration. 2. *n.* the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that identifies how the next value in an iteration is to be computed. 3. *v.t.* (<GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) to specially execute the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>, pausing at intervals to allow user confirmation or intervention, usually for debugging. 



<DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that can be used with an input or output function to identify an appropriate source or sink of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"byte"}><i>bytes</i></GlossaryTerm> for that operation. 



**stream associated with a file** *n.* a *file stream*, or a *synonym stream* 



the <GlossaryTerm styled={true} term={"target"}><i>target</i></GlossaryTerm> of which is a *stream associated with a file*. Such a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> 



cannot be created with <DictionaryLink styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink>, 



<DictionaryLink styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></DictionaryLink>, or <DictionaryLink styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></DictionaryLink>. 



**stream designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> and that is one of: <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> (denoting the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>), <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (denoting the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*standard-input\*** for *input stream designators* or denoting the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*standard-output\*** for *output stream designators*), or a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> (denoting itself). 



**stream element type** *n.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of data for which the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is specialized. 



**stream variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> must be a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**stream variable designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *stream variable*; that is, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that denotes a *stream variable* and that is one of: <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> (denoting <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>), 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (denoting **\*standard-input\*** for *input stream variable designators* or denoting **\*standard-output\*** for *output stream variable designators*), or some other <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting itself). 



<DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> *n.* a specialized <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>, and whose elements are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> or a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. 







 



 



**string designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> (denoting a *singleton string* that has the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> as its only <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>), a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that is its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> (denoting itself). The intent is that this term be consistent with the behavior of <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink>; <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> that extend <DictionaryLink styled={true} term={"string"}><b>string</b></DictionaryLink> must extend the meaning of this term in a compatible way. 



**string equal** *adj.* the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under **string-equal**. 



**string stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"string-stream"}><b>string-stream</b></DictionaryLink>. 



**structure** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>. 



**structure class** *n.* a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that is a *generalized instance* of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>. 



**structure name** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> defined with <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>. Usually, such a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is also a *structure class*, but there may be <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> situations in which this is not so, if the :type option to <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> is used. 



**style warning** *n.* a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>. 



**subclass** *n.* a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"inherit"}><i>inherits</i></GlossaryTerm> from another <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, called a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm>. (No <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of itself.) 



**subexpression** *n.* (of an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> that is contained within the 



<GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>. (In fact, the state of being a <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm> is not an attribute of the <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm>, but really an attribute of the containing <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> since the *same object* can at once be a <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm> in one context, and not in another.) 



**subform** *n.* (of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and which by virtue of its position in that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is also a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. “(f x) and x, but not exit, are subforms of (return-from exit (f x)).” 



**subrepertoire** *n.* a subset of a <GlossaryTerm styled={true} term={"repertoire"}><i>repertoire</i></GlossaryTerm>. 



**subtype** *n.* a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> whose membership is the same as or a proper subset of the 



membership of another <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, called a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm>. (Every <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of itself.) 



**superclass** *n.* a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> from which another <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> (called a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"inherit"}><i>inherits</i></GlossaryTerm>. (No <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of itself.) See <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm>. 



**supertype** *n.* a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> whose membership is the same as or a proper superset of the membership of another <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, called a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm>. (Every <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of itself.) See <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm>. 







 



 



**supplied-p parameter** *n.* a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> which recieves its *generalized boolean* value implicitly due to the presence or absence of an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> corresponding to another <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> (such as an *optional parameter* or a *rest parameter* ). See Section 3.4.1 (Ordinary Lambda Lists). 



<DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>. 



**symbol macro** *n.* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that stands for another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>. 



**synonym stream** *n.* 1. a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"synonym-stream"}><b>synonym-stream</b></DictionaryLink>, which is consequently a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is an alias for another <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, which is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of a *dynamic variable* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the *synonym stream symbol* of the *synonym stream*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></DictionaryLink>. 2. (to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a *synonym stream* which has the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> as 



the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of its *synonym stream symbol*. 3. (to a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) a *synonym stream* which has the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> as its *synonym stream symbol*. 



**synonym stream symbol** *n.* (of a *synonym stream*) the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which names the *dynamic variable* which has as its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> another <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> for which the *synonym stream* is an alias. 



**syntax type** *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) one of several classifications, enumerated in Figure 2– 6, that are used for dispatch during parsing by the *Lisp reader* . See Section 2.1.4 (Character Syntax Types). 



**system class** *n.* a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that may be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink> in a *conforming* 



<GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> and hence cannot be inherited by *classes* defined by *conforming* 



<GlossaryTerm styled={true} term={"program"}><i>programs</i></GlossaryTerm>. 



**system code** *n. code* supplied by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to implement this specification (*e.g.*, the definition of <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink>) or generated automatically in support of this 



specification (*e.g.*, during method combination); that is, <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that is not *programmer code*. 



