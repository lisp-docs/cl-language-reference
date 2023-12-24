 



Each entry in this glossary has the following parts: 



*•* the term being defined, set in boldface. 



*•* optional pronunciation, enclosed in square brackets and set in boldface, as in the following example: [ **a list** ]. The pronunciation key follows *Webster’s Third New International Dictionary the English Language, Unabridged*, except that “* ” is used to notate the schwa (upside-down “e”) character. 



*•* the part or parts of speech, set in italics. If a term can be used as several parts of speech, there is a separate definition for each part of speech. 



*•* one or more definitions, organized as follows: 



– an optional number, present if there are several definitions. Lowercase letters might also be used in cases where subdefinitions of a numbered definition are necessary. 



– an optional part of speech, set in italics, present if the term is one of several parts of speech. 



– an optional discipline, set in italics, present if the term has a standard definition being repeated. For example, “*Math.*” 



– an optional context, present if this definition is meaningful only in that context. For example, “(of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>)”. 



– the definition. 



– an optional example sentence. For example, “This is an example of an example.” – optional cross references. 



In addition, some terms have idiomatic usage in the Common Lisp community which is not shared by other communities, or which is not technically correct. Definitions labeled “*Idiom.*” represent such idiomatic usage; these definitions are sometimes followed by an explanatory note. 



Words in *this font* are words with entries in the glossary. Words in example sentences do not follow this convention. 



When an ambiguity arises, the longest matching substring has precedence. For example, “*complex float*” refers to a single glossary entry for “*complex float*” rather than the combined meaning of the glossary terms “<ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks>” and “<ClLinks styled={true} term={"float"}><i>float</i></ClLinks>.” 







 



 



Subscript notation, as in “<i>something<sub>n</sub></i>” means that the <i>n</i>th definition of “<i>something</i>” is intended. This notation is used only in situations where the context might be insufficient to disambiguate. 



The following are abbreviations used in the glossary: 




|**Abbreviation**
 |**Meaning**|

| :-: | :- |

|<p>*adj.* </p><p>*adv.* </p><p>*ANSI* </p><p>*Comp.* </p><p>*Idiom.* </p><p>*IEEE* </p><p>*ISO* </p><p>*Math.* </p><p>*Trad.* </p><p>*n.* </p><p>*v.* </p><p>*v.t.* </p>|<p>adjective </p><p>adverb </p><p>compatible with one or more ANSI standards computers </p><p>idiomatic </p><p>compatible with one or more IEEE standards compatible with one or more ISO standards mathematics </p><p>traditional </p><p>noun </p><p>verb </p><p>transitive verb</p>|





**Non-alphabetic** 



**()** [ <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> ], *n.* an alternative notation for writing the symbol <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, used to emphasize the use of <ClLinks styled={true} term={"nil"}><i>nil</i></ClLinks> as an *empty list*. 



**A** 



**absolute** *adj.* 1. (of a <ClLinks styled={true} term={"time"}><i>time</i></ClLinks>) representing a specific point in time. 2. (of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) representing a specific position in a directory hierarchy. See <ClLinks styled={true} term={"relative"}><i>relative</i></ClLinks>. 



**access** *n.*, *v.t.* 1. *v.t.* (a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, or <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> <sub>1</sub> or <ClLinks styled={true} term={"write"}><i>write</i></ClLinks><sub>1</sub> the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> or an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 2. *n.* (of a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>) an attempt to <ClLinks styled={true} term={"access"}><i>access</i></ClLinks><sub>1</sub> the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**accessibility** *n.* the state of being <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>. 



**accessible** *adj.* 1. (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) capable of being *referenced*. 2. (of *shared slots* or *local slots* in an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) having been defined by the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> or *inherited* from a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 3. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) capable of being *referenced* without a *package prefix* when that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is current, regardless of whether the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or is *inherited*. 



**accessor** *n.* an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> that performs an <ClLinks styled={true} term={"access"}><i>access</i></ClLinks>. See <ClLinks styled={true} term={"reader"}><i>reader</i></ClLinks> and <ClLinks styled={true} term={"writer"}><i>writer</i></ClLinks> . 







 



 



**active** *adj.* 1. (of a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or a *catch tag*) having been *established* but not yet *disestablished*. 2. (of an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) having an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that has no *fill pointer* , all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are considered <ClLinks styled={true} term={"active"}><i>active</i></ClLinks>. 



**actual adjustability** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) a *generalized boolean* that is associated with the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, representing whether the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is *actually adjustable*. See also *expressed adjustability* and **adjustable-array-p**. 



**actual argument** *n. Trad.* an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 



**actual array element type** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> for which the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is actually specialized, which is the *upgraded array element type* of the *expressed array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"array-element-type"}><b>array-element-type</b></ClLinks>. 



**actual complex part type** *n.* (of a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> in which the real and imaginary parts of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> are actually represented, which is the *upgraded complex part type* of the *expressed complex part type* of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 



**actual parameter** *n. Trad.* an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 



**actually adjustable** *adj.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) such that <ClLinks styled={true} term={"adjust-array"}><b>adjust-array</b></ClLinks> can adjust its 



characteristics by direct modification. A *conforming program* may depend on an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> being *actually adjustable* only if either that <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is known to have been *expressly adjustable* or if that <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> has been explicitly tested by **adjustable-array-p**. 



**adjustability** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) 1. *expressed adjustability*. 2. *actual adjustability*. 



**adjustable** *adj.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) 1. *expressly adjustable*. 2. *actually adjustable*. 



**after method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> having the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> :after. 



**alist** [ **—a list** ], *n.* an *association list*. 



<b>alphabetic</b> <i>n.</i>, <i>adj.</i> 1. <i>adj.</i> (of a <i>character</i> ) being one of the <i>standard characters</i> A through Z or a through z, or being any <i>implementation-defined</i> character that has <i>case</i>, or being some other <i>graphic character</i> defined by the <i>implementation</i> to be <i>alphabetic</i><sub>1</sub>. 2. a. <i>n.</i> one of several possible <i>constituent traits</i> of a <i>character</i> . For details, see Section 2.1.4.1 (Constituent Characters) and Section 2.2 (Reader Algorithm). b. <i>adj.</i> (of a <i>character</i> ) being a <i>character</i> that has <i>syntax type constituent</i> in the <i>current readtable</i> and that has the <i>constituent trait alphabetic</i><sub>2<i>a</i></sub>. See Figure 2–8. 



**alphanumeric** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being either an <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>1</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or a <ClLinks styled={true} term={"numeric"}><i>numeric</i></ClLinks> character. 







 



 



**ampersand** *n.* the *standard character* that is called “ampersand” (&amp;). See Figure 2–5. 



**anonymous** *adj.* 1. (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> or <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) having no <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> 2. (of a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>) having a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**apparently uninterned** *adj.* having a *home package* of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. (An *apparently* 



*uninterned symbol* might or might not be an *uninterned symbol*. *Uninterned symbols* have a *home package* of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, but <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> which have been <ClLinks styled={true} term={"uninterned"}><i>uninterned</i></ClLinks> from their *home package* also have a *home package* of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, even though they might still be <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> in some other <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>.) 



**applicable** *adj.* 1. (of a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> ) being an *applicable handler* . 2. (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>) being an *applicable method*. 3. (of a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>) being an *applicable restart*. 



**applicable handler** *n.* (for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being *signaled*) an *active handler* for which the associated type contains the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



**applicable method** *n.* (of a *generic function* called with <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>) a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> of the *generic function* for which the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> satisfy the *parameter specializers* of that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. See Section 7.6.6.1.1 (Selecting the Applicable Methods). 



**applicable restart** *n.* 1. (for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>) an *active handler* for which the associated test returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when given the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> as an argument. 2. (for no particular <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>) an *active handler* for which the associated test returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when given <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> as an argument. 



<ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) to <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> with arguments that are the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. “Applying the function <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> to a list of integers returns the sum of the elements of that list.” 



**argument** *n.* 1. (of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is offered as data to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> when it is *called*. 2. (of a *format control*) a *format argument*. 



**argument evaluation order** *n.* the order in which <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are evaluated in a function call. “The argument evaluation order for Common Lisp is left to right.” See Section 3.1 (Evaluation). 



**argument precedence order** *n.* the order in which the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to a *generic function* are considered when sorting the *applicable methods* into precedence order. 



**around method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> having the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> :around. 



<ClLinks styled={true} term={"array"}><b>array</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"array"}><b>array</b></ClLinks>, which serves as a container for other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> arranged in a Cartesian coordinate system. 







 



 



**array element type** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) 1. a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> associated with the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, and of which all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> are constrained to be members. 2. the *actual array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 3. the *expressed array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**array total size** *n.* the total number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, computed by taking the product of the <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. (The size of a zero-dimensional <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is therefore one.) 



**assign** *v.t.* (a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>) to change the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> in a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> that has already been *established*. See the *special operator* <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>. 



**association list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *conses* representing an association of <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks> with <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, where the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is the <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> associated with that <ClLinks styled={true} term={"key"}><i>key</i></ClLinks>. 



**asterisk** *n.* the *standard character* that is variously called “asterisk” or “star” (\*). See Figure 2–5. 



**at-sign** *n.* the *standard character* that is variously called “commercial at” or “at sign” (@). See Figure 2–5. 



<ClLinks styled={true} term={"atom"}><b>atom</b></ClLinks> *n.* any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is not a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. “A vector is an atom.” 



**atomic** *adj.* being an <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>. “The number 3, the symbol foo, and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> are atomic.” 



**atomic type specifier** *n.* a *type specifier* that is <ClLinks styled={true} term={"atomic"}><i>atomic</i></ClLinks>. For every *atomic type specifier* , *x*, there is an equivalent *compound type specifier* with no arguments supplied, (*x*). 



**attribute** *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) a program-visible aspect of the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . The only *standardized attribute* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is its <ClLinks styled={true} term={"code"}><i>code</i></ClLinks><sub>2</sub>, but <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> are permitted to have additional *implementation-defined attributes*. See Section 13.1.3 (Character Attributes). “An implementation that support fonts might make font information an attribute of a character, while others might represent font information separately from characters.” 



**aux variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> that occurs in the part of a *lambda list* that was introduced by **&amp;aux**. Unlike all other <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> introduced by a *lambda-list*, *aux variables* are not <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks>. 



**auxiliary method** *n.* a member of one of two sets of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> (the set of *primary methods* is the other) that form an exhaustive partition of the set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 







 



 



**B** 



**backquote** *n.* the *standard character* that is variously called “grave accent” or 



“backquote” (‘). See Figure 2–5. 



**backslash** *n.* the *standard character* that is variously called “reverse solidus” or “backslash” (\). See Figure 2–5. 



**base character** *n.* a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-char"}><b>base-char</b></ClLinks>. 



**base string** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"base-string"}><b>base-string</b></ClLinks>. 



**before method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> having the <ClLinks styled={true} term={"qualifier"}><i>qualifier</i></ClLinks> :before. 



**bidirectional** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) being both an *input stream* and an *output stream*. 



**binary** *adj.* 1. (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) being a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that has an *element type* that is a 



<ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>. The most fundamental operation on a *binary input stream* is <ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks> and on a *binary output stream* is <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks>. See <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 2. (of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) having been created by opening a *binary stream*. (It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether this is an detectable aspect of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>, or whether any given *character file* can be treated as a *binary file*.) 



**bind** *v.t.* (a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>) to establish a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. 



**binding** *n.* an association between a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and that which the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> denotes. “A lexical binding is a lexical association between a name and its value.” When the term <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> is qualified by the name of a <ClLinks styled={true} term={"namespace"}><i>namespace</i></ClLinks>, such as “variable” or “function,” it restricts the binding to the indicated namespace, as in: “<ClLinks styled={true} term={"let"}><b>let</b></ClLinks> establishes variable bindings.” or “<ClLinks styled={true} term={"let"}><b>let</b></ClLinks> establishes bindings of variables.” 



<ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>; that is, the *integer* 0 or the *integer* 1. 



**bit array** *n.* a specialized <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (array bit), and whose elements are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>. 



**bit vector** *n.* a specialized <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit-vector"}><b>bit-vector</b></ClLinks>, and whose elements are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>. 



**bit-wise logical operation specifier** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which names one of the sixteen possible bit-wise logical operations that can be performed by the <ClLinks styled={true} term={"boole"}><b>boole</b></ClLinks> function, and which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of exactly one of the *constant variables* <ClLinks styled={true} term={"boole-clr"}><b>boole-clr</b></ClLinks>, <ClLinks styled={true} term={"boole-set"}><b>boole-set</b></ClLinks>, <ClLinks styled={true} term={"boole-1"}><b>boole-1</b></ClLinks>, <ClLinks styled={true} term={"boole-2"}><b>boole-2</b></ClLinks>, <ClLinks styled={true} term={"boole-c1"}><b>boole-c1</b></ClLinks>, <ClLinks styled={true} term={"boole-c2"}><b>boole-c2</b></ClLinks>, <ClLinks styled={true} term={"boole-and"}><b>boole-and</b></ClLinks>, <ClLinks styled={true} term={"boole-ior"}><b>boole-ior</b></ClLinks>, <ClLinks styled={true} term={"boole-xor"}><b>boole-xor</b></ClLinks>, <ClLinks styled={true} term={"boole-eqv"}><b>boole-eqv</b></ClLinks>, <ClLinks styled={true} term={"boole-nand"}><b>boole-nand</b></ClLinks>, <ClLinks styled={true} term={"boole-nor"}><b>boole-nor</b></ClLinks>, <ClLinks styled={true} term={"boole-andc1"}><b>boole-andc1</b></ClLinks>, <ClLinks styled={true} term={"boole-andc2"}><b>boole-andc2</b></ClLinks>, <ClLinks styled={true} term={"boole-orc1"}><b>boole-orc1</b></ClLinks>, or <ClLinks styled={true} term={"boole-orc2"}><b>boole-orc2</b></ClLinks>. 







 



 



<ClLinks styled={true} term={"block"}><b>block</b></ClLinks> *n.* a named lexical *exit point<ClLinks styled={true} term={"t"}><i>, </i></ClLinks>established* explicitly by <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> or implicitly by <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> such as <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>, <ClLinks styled={true} term={"do"}><b>do</b></ClLinks> and **prog**, to which control and values may be transfered by using a <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> with the name of the <ClLinks styled={true} term={"block"}><i>block</i></ClLinks>. 



**block tag** *n.* the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that, within the *lexical scope* of a <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, names the *block established* by that <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. See <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>. 



**boa lambda list** *n.* a *lambda list* that is syntactically like an *ordinary lambda list*, but that is processed in “**b**y **o**rder of **a**rgument” style. See Section 3.4.6 (Boa Lambda Lists). 



**body parameter** *n.* a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> available in certain *lambda lists* which from the point of view of *conforming programs* is like a *rest parameter* in every way except that it is introduced by **&amp;body** instead of **&amp;rest**. (<ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> are permitted to provide extensions which distinguish *body parameters* and *rest parameters*—*e.g.*, the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> for <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> which were defined using a *body parameter* might be pretty printed slightly differently than <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> for <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> which were defined using *rest parameters*.) 



<ClLinks styled={true} term={"boolean"}><b>boolean</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"boolean"}><b>boolean</b></ClLinks>; that is, one of the following <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>: the 



symbol <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> (representing <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>), or the symbol <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (representing <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>). See *generalized boolean*. 



**boolean equivalent** *n.* (of an *object O*<sub>1</sub>) any *object O*<sub>2</sub> that has the same truth value as *O*<sub>1</sub> when both *O*<sub>1</sub> and *O*<sub>2</sub> are viewed as *generalized booleans*. 



**bound** *adj.*, *v.t.* 1. *adj.* having an associated denotation in a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. “The variables named by a <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> are bound within its body.” See <ClLinks styled={true} term={"unbound"}><i>unbound</i></ClLinks>. 2. *adj.* having a local <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> which <ClLinks styled={true} term={"shadow"}><i>shadows</i></ClLinks><sub>2</sub> another. “The variable <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is bound while in the <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks> function.” 3. *v.t.* the past tense of <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks>. 



**bound declaration** *n.* a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> that refers to or is associated with a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and that appears within the *special form* that *establishes* the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, but before the body of that *special form* (specifically, at the head of that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>’s body). (If a *bound declaration* refers to a *function binding* or a *lexical variable binding*, the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> is exactly the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of that <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. If the 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> refers to a *dynamic variable binding*, the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> is what the <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> would have been if it were lexical rather than dynamic.) 



<b>bounded</b> <i>adj.</i> (of a <i>sequence S</i>, by an ordered pair of <i>bounding indices i<sub>start</sub></i> and <i>i<sub>end</sub></i>) restricted to a subrange of the <i>elements</i> of <i>S</i> that includes each <i>element</i> beginning with (and including) the one indexed by <i>i<sub>start</sub></i> and continuing up to (but not including) the one indexed by <i>i<sub>end</sub></i>. 



<b>bounding index</b> <i>n.</i> (of a <i>sequence</i> with <i>length n</i>) either of a conceptual pair of <i>integers</i>, <i>i<sub>start</sub></i> and <i>i<sub>end</sub></i>, respectively called the “lower bounding index” and “upper 







 



 



bounding index”, such that 0 <i>≤ i<sub>start</sub> ≤ i<sub>end</sub> ≤ n</i>, and which therefore delimit a subrange of the <i>sequence bounded</i> by <i>i<sub>start</sub></i> and <i>i<sub>end</sub></i>. 



**bounding index designator** (for a *sequence*) one of two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that, taken together as an ordered pair, behave as a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for *bounding indices* of the *sequence*; that is, they denote *bounding indices* of the *sequence*, and are either: an *integer* (denoting 



itself) and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (denoting the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the *sequence*), or two *integers* (each denoting themselves). 



**break loop** *n.* A variant of the normal *Lisp read-eval-print loop* that is recursively entered, usually because the ongoing <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of some other <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> has been suspended for the purpose of debugging. Often, a *break loop* provides the ability to exit in such a way as to continue the suspended computation. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"break"}><b>break</b></ClLinks>. 



**broadcast stream** *n.* an *output stream* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"broadcast-stream"}><b>broadcast-stream</b></ClLinks>. 



**built-in class** *n.* a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is a *generalized instance* of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks>. 



**built-in type** *n.* one of the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> in Figure 4–2. 



<ClLinks styled={true} term={"byte"}><b>byte</b></ClLinks> *n.* 1. adjacent bits within an *integer* . (The specific number of bits can vary from point to point in the program; see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"byte"}><b>byte</b></ClLinks>.) 2. an integer in a specified range. (The specific range can vary from point to point in the program; see the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> and <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks>.) 



**byte specifier** *n.* An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature that is returned by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"byte"}><b>byte</b></ClLinks> and that specifies the range of bits in an *integer* to be used as a <ClLinks styled={true} term={"byte"}><i>byte</i></ClLinks> by <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> such as <ClLinks styled={true} term={"ldb"}><b>ldb</b></ClLinks>. 



**C** 



<ClLinks styled={true} term={"cadr"}><b>cadr</b></ClLinks> [ **ka d*** **r** ], *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**call** *v.t.*, *n.* 1. *v.t.* (a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> with <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>) to cause the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> represented by that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be *executed* in an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> where <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> for the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of its <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> have been *established* based on the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. “Calling the function <ClLinks styled={true} term={"+"}><b>+</b></ClLinks> with the arguments 5 and 1 yields a value of 6.” 2. *n.* a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> in which a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is called. 



**captured initialization form** *n.* an *initialization form* along with the *lexical* 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that defined the *initialization form* was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form for the new class.” 







 



 



<ClLinks styled={true} term={"car"}><b>car</b></ClLinks> *n.* 1. a. (of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>) the component of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> corresponding to the first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>; the other component is the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> . “The function <ClLinks styled={true} term={"rplaca"}><b>rplaca</b></ClLinks> modifies the car of a cons.” b. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) the first <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is the *empty list*. 2. the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is held in the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> <sub>1</sub>. “The function <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> returns the car of a cons.” 



<ClLinks styled={true} term={"case"}><b>case</b></ClLinks> *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) the property of being either <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks> or <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>. Not all <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> have <ClLinks styled={true} term={"case"}><i>case</i></ClLinks>. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"both-case-p"}><b>both-case-p</b></ClLinks>. 



**case sensitivity mode** *n.* one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> :upcase, :downcase, :preserve, or 



:invert. 



<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> *n.* an *exit point* which is *established* by a <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> within the *dynamic scope* of its body, which is named by a *catch tag*, and to which control and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> may be *thrown*. 



**catch tag** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which names an *active catch*. (If more than one <ClLinks styled={true} term={"catch"}><i>catch</i></ClLinks> is active with the same *catch tag*, it is only possible to <ClLinks styled={true} term={"throw"}><i>throw</i></ClLinks> to the innermost such <ClLinks styled={true} term={"catch"}><i>catch</i></ClLinks> because the outer one is *shadowed* <sub>2</sub>.) 



<ClLinks styled={true} term={"cddr"}><b>cddr</b></ClLinks> [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> [ **k\_u d*** **r** ], *n.* 1. a. (of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>) the component of a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> corresponding to the second <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>; the other component is the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> . “The function <ClLinks styled={true} term={"rplacd"}><b>rplacd</b></ClLinks> modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of *L*<sub>1</sub> that follow after the first, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if *L*<sub>1</sub> is the *empty list*. 2. the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is held in the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> <sub>1</sub>. “The function <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> returns the cdr of a cons.” 



**cell** *n. Trad.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) a conceptual <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The *dynamic variable* and global *function bindings* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> are sometimes referred to as its *value cell* and *function cell*, respectively. 



<ClLinks styled={true} term={"character"}><b>character</b></ClLinks> *n.*, *adj.* 1. *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) having an *element type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. The most fundamental operation on a *character input stream* is <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> and on a *character output stream* is <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks>. See <ClLinks styled={true} term={"binary"}><i>binary</i></ClLinks>. b. (of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) having been created by opening a *character stream*. (It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether this is an inspectable aspect of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several <ClLinks styled={true} term={"attribute"}><i>attributes</i></ClLinks> of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 2. a 



non-negative *integer* less than the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"char-code-limit"}><b>char-code-limit</b></ClLinks> that is suitable for use as a *character code*<sub>1</sub>. 







 



 



**character designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> and that is one of: a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> of <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> one (denoting the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is its only <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>), or a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> (denoting itself). 



**circular** *adj.* 1. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) a *circular list*. 2. (of an arbitrary <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) having a 



*component*, <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>, <ClLinks styled={true} term={"constituent"}><i>constituent</i></ClLinks><sub>2</sub>, or <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> (as appropriate to the context) that is the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> itself. 



**circular list** *n.* a chain of *conses* that has no termination because some <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> in the chain is the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of a later <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



<ClLinks styled={true} term={"class"}><b>class</b></ClLinks> *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that uniquely determines the structure and behavior of a set of other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> called its *direct instances*, that contributes structure and behavior to a set of other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> called its *indirect instances*, and that acts as a *type specifier* for a set of objects called its *generalized instances*. “The class <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks> is a subclass of the 



class <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>.” (Note that the phrase “the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> foo” is often substituted for the more precise phrase “the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named foo”—in both cases, a *class object* (not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) is denoted.) 2. (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the uniquely determined <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of which the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *direct instance*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks>. “The class of the object returned by <ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks> is <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>.” (Note that with this usage a phrase such as “its <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is foo” is often substituted for the more precise phrase “its <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named foo”—in both cases, a *class object* (not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) is denoted.) 



**class designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and that is one of: a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> named by that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>; see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>) or a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> (denoting itself). 



**class precedence list** *n.* a unique total ordering on a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and its *superclasses* that is consistent with the *local precedence orders* for the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



<ClLinks styled={true} term={"close"}><b>close</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) to terminate usage of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> as a source or sink of data, permitting the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to reclaim its internal data structures, and to free any external resources which might have been locked by the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> when it was opened. 



**closed** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) having been <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks> (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a *lexical closure*. 



**coalesce** *v.t.* (*literal objects* that are <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> ) to consolidate the identity of those <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, such as <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, *lambda expressions*, *objects* of *type function*, text in a *source file*, or instruction sequences in a *compiled file*. This is a generic term; the specific nature of the representation depends on its context. 2. (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) a *character code*. 



<ClLinks styled={true} term={"coerce"}><b>coerce</b></ClLinks> *v.t.* (an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) to produce an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> from the given <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, without modifying that <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is necessarily of the indicated <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, except when that type is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks>; in that case, if a *complex rational* with an imaginary part of zero would result, the result is a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> 



rather than a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks>—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the *standard character* that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the *standard character* that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . 



**compilation environment** *n.* 1. An <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that represents information known by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> about a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents the *compilation environment* <sub>1</sub> and that is used as a second argument to a *macro function* (which supplies a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for any **&amp;environment** <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> in the *macro function*’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></ClLinks>. 



<ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> *v.t.* 1. (<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) to perform semantic preprocessing of the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all *load time values* to be resolved prior to run time. 2. (a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) to produce a new <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks> which represents the result of *compiling* the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> represented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks>. 3. (a *source file*) to produce a *compiled file* from a *source file*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>. 



**compile time** *n.* the duration of time that the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> is processing *source code*. **compile-time definition** *n.* a definition in the *compilation environment*. 



**compiled code** *n.* 1. *compiled functions*. 2. <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that represents *compiled functions*, such as the contents of a *compiled file*. 







 



 



**compiled file** *n.* a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> which represents the results of *compiling* the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> which appeared in a corresponding *source file*, and which can be *loaded*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>. 



**compiled function** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"compiled-function"}><b>compiled-function</b></ClLinks>, which is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that has been *compiled*, which contains no references to <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> that must be expanded at run time, and which contains no unresolved references to *load time values*. 



**compiler** *n.* a facility that is part of Lisp and that translates <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> into an 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> form that might be represented or *executed* efficiently. The functions <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> and <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> permit programs to invoke the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> which might or might not be called by any given *conforming implementation* and which must preserve the semantics of the globally defined <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> or <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> but 



which might perform some additional optimizations. (Unlike a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, a *compiler macro* does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> into another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> by a *compiler macro*. 2. the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> resulting from this process. 



**compiler macro form** *n.* a *function form* or *macro form* whose <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> has a definition as a *compiler macro*, or a <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> whose first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> whose <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that has a definition as a *compiler macro*. 



**compiler macro function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and an 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, that implements *compiler macro expansion* by producing either a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be used in place of the original argument <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, indicating that the original <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



<ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks>. 



**complex float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> which has a *complex part type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. A *complex float* is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , but it is not a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>. 



**complex part type** *n.* (of a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) 1. the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is used to represent both the real part and the imaginary part of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 2. the *actual complex part type* of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 3. the *expressed complex part type* of the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> . 



**complex rational** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> which has a *complex part type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>. A *complex rational* is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , but it is not a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks>. No *complex rational* has an imaginary part of zero because such a number is always represented by Common Lisp as an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"complex"}><b>complex</b></ClLinks> which has a *complex part type* that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>. A *complex single float* is a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , but it is not a *single float*. 



**composite stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is composed of one or more other <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks>. “<ClLinks styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks> creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>: a *special form*, a *lambda form*, a *macro form*, or a *function form*. 



**compound type specifier** *n.* a *type specifier* that is a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>; *i.e.*, a *type specifier* that is not an *atomic type specifier* . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"concatenated-stream"}><b>concatenated-stream</b></ClLinks>. 



<ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks> *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which represents a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks>—usually, but not necessarily, during *signaling*. 2. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>. 



**condition designator** *n.* one or more <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that might be invoked by the act of *signaling*, that receives the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being signaled as its only argument, and that is permitted to <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> or to <ClLinks styled={true} term={"decline"}><i>decline</i></ClLinks>. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that describes how a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is to be printed when the *Lisp printer* is invoked while <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> might be inserted at the discretion of the *pretty printer* . There are four kinds of *conditional newlines*, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-newline"}><b>pprint-newline</b></ClLinks> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a *conforming program*. 



**conforming implementation** *n.* an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, used to emphasize complete and correct adherance to all conformance criteria. A *conforming implementation* is capable of accepting a *conforming program* as input, preparing that <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> for *execution*, and executing the prepared <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> in accordance with this specification. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> which has been extended may still be a *conforming implementation* 







 



 



provided that no extension interferes with the correct function of any *conforming program*. 



**conforming processor** *n. ANSI* a *conforming implementation*. 



**conforming program** *n.* a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>, used to emphasize the fact that the <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any *conforming implementation*. 



**congruent** *n.* conforming to the rules of *lambda list* congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



<ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> *n.v.* 1. *n.* a compound data <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> having two components called the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> . 2. *v.* to create such an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 3. *v. Idiom.* to create any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, or to allocate storage. 



**constant** *n.* 1. a *constant form*. 2. a *constant variable*. 3. a *constant object*. 4. a *self-evaluating object*. 



**constant form** *n.* any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> for which <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> always <ClLinks styled={true} term={"yield"}><i>yields</i></ClLinks> the same <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, that neither affects nor is affected by the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which it is *evaluated* (except that it is permitted to refer to the names of *constant variables* defined in the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>), and that neither affects nor is affected by the state of any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> except those <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are *otherwise inaccessible parts* of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> created by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> itself. “A <ClLinks styled={true} term={"car"}><b>car</b></ClLinks> form in which the argument is a <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> form is a constant form.” 



**constant object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is constrained (*e.g.*, by its context in a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> or by the source from which it was obtained) to be <ClLinks styled={true} term={"immutable"}><i>immutable</i></ClLinks>. “A literal object that has been processed by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> is a constant object.” 



**constant variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of which can never change; that 



is, a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> <sub>1</sub> or a *named constant*. “The symbols <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, :direction, and 



<ClLinks styled={true} term={"most-positive-fixnum"}><b>most-positive-fixnum</b></ClLinks> are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) one of several classifications of a *constituent character* in a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> whose source or sink is a Lisp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. Note that since a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is another Lisp <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *composite streams* are considered *constructed streams*. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of differing <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (*e.g.*, 



arithmetic on mixed <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> of <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>) produce a result whose <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is controlled by the dominance of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>’s <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> over the <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> of the other <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> that is <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks> by the continue restart. 



**control form** *n.* 1. a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that establishes one or more places to which control can be transferred. 2. a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as <ClLinks styled={true} term={"t"}><i>T</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"copy-tree"}><b>copy-tree</b></ClLinks>. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"random"}><b>random</b></ClLinks> would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> as *S*, and that has slot values, each of which is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as the corresponding slot value of *S*. (Note that since the difference between a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks> is a matter of “view” or “intention,” there can be no general-purpose <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which, based solely on the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of the given <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) 1. (by a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> other than **abort** that has been 



associated with the <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) capable of being corrected by invoking that <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. “The function <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> signals an error that is correctable by the **continue** <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>.” (Note that correctability is not a property of an *error object*, but rather a property of the *dynamic environment* that is in effect when the <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> is *signaled*. Specifically, the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is mentioned) <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks><sub>1</sub> by at least one <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. “<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> signals a correctable error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package-error"}><b>package-error</b></ClLinks> if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*read-base\*** in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> employed by the *Lisp reader* and its related <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



**current logical block** *n.* the context of the innermost lexically enclosing use of <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>. 



**current output base** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of 



 



 



**\*print-base\*** in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> employed by the *Lisp printer* and its related <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



**current package** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"package"}><b>\*package\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> employed by the *Lisp reader* and *Lisp printer* , and their related <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



**current pprint dispatch table** *n.* (in a *dynamic environment*) the *pprint dispatch table* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default *pprint dispatch table* employed by the *pretty printer* . 



**current random state** *n.* (in a *dynamic environment*) the *random state* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"random-state"}><b>\*random-state\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that is the default *random state* employed by <ClLinks styled={true} term={"random"}><b>random</b></ClLinks>. 



**current readtable** *n.* (in a *dynamic environment*) the <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and that affects the way in which <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks><sub>2</sub> are parsed into <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> by the *Lisp reader* . 



**D** 



**data type** *n. Trad.* a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



**debug I/O** *n.* the *bidirectional stream* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> **\*debug-io\***. 



**debugger** *n.* a facility that allows the <ClLinks styled={true} term={"user"}><i>user</i></ClLinks> to handle a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> interactively. For example, the <ClLinks styled={true} term={"debugger"}><i>debugger</i></ClLinks> might permit interactive selection of a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> from among the *active restarts*, and it might perform additional <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> services for the purposes of debugging. 



<ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> *n.* a *global declaration* or *local declaration*. 



**declaration identifier** *n.* one of the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks>, <ClLinks styled={true} term={"dynamic-extent"}><b>dynamic-extent</b></ClLinks>, <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"ignore"}><b>ignore</b></ClLinks>, <ClLinks styled={true} term={"inline"}><b>inline</b></ClLinks>, <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>, <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks>, <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>, or <ClLinks styled={true} term={"type"}><b>type</b></ClLinks>; or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>; or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which has been *declared* to be a *declaration identifier* by using a <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. 



**declaration specifier** *n.* an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> that can appear at top level of a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> expression or a <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> form, or as the argument to <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>, and which has a <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> which is a *declaration identifier* , and which has a <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> that is data interpreted according to rules specific to the *declaration identifier* . 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> *v.* to <ClLinks styled={true} term={"establish"}><i>establish</i></ClLinks> a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. See <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>. 







 



 



**decline** *v.* (of a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> ) to return normally without having *handled* the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being *signaled*, permitting the signaling process to continue as if the <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that *leap seconds* are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> having no *parameter specializers* other than the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. Such a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is always an *applicable method* but might be *shadowed* <sub>2</sub> by a more specific <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. 



**defaulted initialization argument list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of alternating initialization 



argument <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *classes*. 



**define-method-combination arguments lambda list** *n.* a *lambda list* used 



by the :arguments option to <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a *lambda list* used by <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> the meaning of which is defined by Common Lisp. 



**defining form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that has the side-effect of *establishing* a definition. “<ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> and <ClLinks styled={true} term={"defparameter"}><b>defparameter</b></ClLinks> are defining forms.” 



**defsetf lambda list** *n.* a *lambda list* that is like an *ordinary lambda list* except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a *lambda list* that is like a *macro lambda list* except that the default <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for unsupplied *optional parameters* and *keyword parameters* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\*** (rather than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the <ClLinks styled={true} term={"normalized"}><i>normalized</i></ClLinks> representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a *type specifier* which is defined in terms of an expansion into 



another *type specifier* . <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> defines *derived types*, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a *type specifier* for a *derived type*. 



**designator** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes another <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. In the dictionary entry for an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> if a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is described as a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, the description of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is written in a way that assumes that appropriate coercion to that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> has 



already occurred; that is, that the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is already of the denoted <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> ) capable of modifying some program-visible aspect of one or more <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are either explicit <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> to the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> or that can be obtained directly or indirectly from the *global environment* by the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> . 



**destructuring lambda list** *n.* an *extended lambda list* used in <ClLinks styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></ClLinks> and nested within *macro lambda lists*. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> “The strings "FOO" and "foo" are different under <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks> but not under <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>.” 



**digit** *n.* (in a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> ) a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> can hold along one axis. If the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , the *fill pointer* is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> whose <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is *C* itself, rather than some <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of *C*. “The function <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a *direct superclass* of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 



**disjoint** *n.* (of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>) having no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in common. 







 



 



**dispatching macro character** *n.* a *macro character* that has an associated table that specifies the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be called for each <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is seen following the *dispatching macro character* . See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></ClLinks>. 



**displaced array** *n.* an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> which has no storage of its own, but which is instead indirected to the storage of another <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, called its <ClLinks styled={true} term={"target"}><i>target</i></ClLinks>, at a specified offset, in such a way that any attempt to <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the *displaced array* implicitly references the *target array*. 



**distinct** *adj.* not <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks>. 



**documentation string** *n.* (in a defining <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) is taken as documentation. In some cases, the *documentation string* is saved in such a way that it can later be obtained by supplying either an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, or by supplying a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and a “kind” to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **documentation**. “The body of code in a <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> form can be preceded by a documentation string of kind <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>.” 



**dot** *n.* the *standard character* that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which has a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> that is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. (An <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> by itself is not a *dotted list*, however.) 



**dotted pair** *n.* 1. a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> whose <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> is a <ClLinks styled={true} term={"non-list"}><i>non-list</i></ClLinks>. 2. any <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, used to emphasize the use of the <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> as a symmetric data pair. 



**double float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks>. 



**double-quote** *n.* the *standard character* that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> in a *dynamic environment*. 



**dynamic environment** *n.* that part of an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> 



with *dynamic extent*. A *dynamic environment* contains, among other things: *exit points* established by <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks>, and <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of *dynamic variables*, *exit points* established by <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks>, *condition handlers*, and <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>. 



**dynamic extent** *n.* an <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. See *indefinite extent*. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with *dynamic extent*. 







 



 



**dynamic variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which is in the *dynamic environment*. See <ClLinks styled={true} term={"special"}><b>special</b></ClLinks>. 



**E** 



**echo stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"echo-stream"}><b>echo-stream</b></ClLinks>. 



**effective method** *n.* the combination of *applicable methods* that are executed when a *generic function* is invoked with a particular sequence of <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**element** *n.* 1. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of one of the *conses* that comprise the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 2. (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is stored in the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 3. (of a *sequence*) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> that is the *sequence*. 4. (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is a member of the set of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> designated by the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 5. (of an <ClLinks styled={true} term={"input"}><i>input</i></ClLinks> 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> (as appropriate to the *element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) that is among the ordered series of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that can be read from the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (using <ClLinks styled={true} term={"read-char"}><b>read-char</b></ClLinks> or <ClLinks styled={true} term={"read-byte"}><b>read-byte</b></ClLinks>, as appropriate to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>). 6. (of an *output stream*) a 



<ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> (as appropriate to the *element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) that is among the ordered series of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that has been or will be written to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (using <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> or <ClLinks styled={true} term={"write-byte"}><b>write-byte</b></ClLinks>, as appropriate to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>). 7. (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a *generalized instance* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**element type** *n.* 1. (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) the *array element type* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) the *stream element type* of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**em** *n. Trad.* a context-dependent unit of measure commonly used in typesetting, equal to the displayed width of of a letter “M” in the current font. (The letter “M” is traditionally chosen because it is typically represented by the widest <ClLinks styled={true} term={"glyph"}><i>glyph</i></ClLinks> in the font, and other characters’ widths are typically fractions of an <ClLinks styled={true} term={"em"}><i>em</i></ClLinks>. In implementations providing non-Roman characters with wider characters than “M,” it is permissible for another character to be the <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> reference character for this measure, and for “M” to be only a fraction of an <ClLinks styled={true} term={"em"}><i>em</i></ClLinks> wide.) In a fixed width font, a line with *n* characters is *n ems* wide; in a variable width font, *n ems* is the expected upper bound on the width of such a line. 



**empty list** *n.* the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> containing no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>. See *()*. 



**empty type** *n.* the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that contains no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>, and that is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (including itself). See <ClLinks styled={true} term={"nil"}><i>nil</i></ClLinks>. 



**end of file** *n.* 1. the point in an *input stream* beyond which there is no further data. Whether or not there is such a point on an *interactive stream* is *implementation defined*. 2. a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> that occurs upon an attempt to obtain data from an *input stream* that is at the *end of file*<sub>1</sub>. 







 



 



**environment** *n.* 1. a set of <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. See Section 3.1.1 (Introduction to Environments). 2. an *environment object*. “<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> takes an optional environment argument.” 



**environment object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> representing a set of *lexical bindings*, used in the processing of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to provide meanings for <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> within that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. “<ClLinks styled={true} term={"macroexpand"}><b>macroexpand</b></ClLinks> takes an optional environment argument.” (The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when used as an *environment object* denotes the *null lexical environment*; the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of *environment parameters* to *macro functions* are <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature which represent the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks><sub>1</sub> in which the corresponding *macro form* is to be expanded.) See Section 3.1.1.4 (Environment Objects). 



**environment parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> in a *defining form f* for which there is no corresponding <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>; instead, this <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> receives as its value an *environment object* which corresponds to the *lexical environment* in which the *defining form f* appeared. 



<ClLinks styled={true} term={"error"}><b>error</b></ClLinks> *n.* 1. (only in the phrase “is an error”) a <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> in which the semantics of a program are not specified, and in which the consequences are undefined. 2. a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> which represents an *error situation*. See Section 1.4.2 (Error Terminology). 3. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**error output** *n.* the *output stream* which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* 



**\*error-output\***. 



**escape** *n.*, *adj.* 1. *n.* a *single escape* or a *multiple escape*. 2. *adj. single escape* or *multiple escape*. 



**establish** *v.t.* to build or bring into being a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. “<ClLinks styled={true} term={"let"}><b>let</b></ClLinks> establishes lexical bindings.” 



**evaluate** *v.t.* (a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or an *implicit progn*) to <ClLinks styled={true} term={"execute"}><i>execute</i></ClLinks> the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> represented by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (or the series of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> making up the *implicit progn*) by applying the rules of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>, returning zero or more values. 



**evaluation** *n.* a model whereby <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are *executed*, returning zero or more values. Such execution might be implemented directly in one step by an interpreter or in two steps by first *compiling* the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and then *executing* the *compiled code*; this choice is dependent both on context and the nature of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, but in any case is not in general detectable by any program. The evaluation model is designed in such a way that a *conforming implementation* might legitimately have only a compiler and no interpreter, or vice versa. See Section 3.1.2 (The Evaluation Model). 



**evaluation environment** *n.* a *run-time environment* in which macro expanders and code specified by <ClLinks styled={true} term={"eval-when"}><b>eval-when</b></ClLinks> to be evaluated are evaluated. All evaluations initiated by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> take place in the *evaluation environment*. 







 



 



**execute** *v.t. Trad.* (<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) to perform the imperative actions represented by the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. **execution time** *n.* the duration of time that *compiled code* is being *executed*. 



**exhaustive partition** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a set of *pairwise disjoint types* that form an *exhaustive union*. 



**exhaustive union** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a set of <ClLinks styled={true} term={"subtype"}><i>subtypes</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, whose union contains all <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



**exit point** *n.* a point in a *control form* from which (*e.g.*, <ClLinks styled={true} term={"block"}><b>block</b></ClLinks>), through which (*e.g.*, <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks>), or to which (*e.g.*, <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>) control and possibly <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> can be transferred both actively by using another *control form* and passively through the normal control and data flow of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>. “<ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> and <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> establish bindings for exit points to which <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> and <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, respectively, can transfer control and values; <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> establishes a binding for an exit point with lexical extent to which <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> can transfer control; and <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks> establishes an exit point through which control might be transferred by operators such as <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, and <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>.” 



**explicit return** *n.* the act of transferring control (and possibly <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) to a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> by using <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> (or <ClLinks styled={true} term={"return"}><b>return</b></ClLinks>). 



**explicit use** *n.* (of a *variable V* in a *form F*) a reference to *V* that is directly apparent in the normal semantics of *F*; *i.e.*, that does not expose any undocumented details of the *macro expansion* of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> itself. References to *V* exposed by expanding <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of *F* are, however, considered to be *explicit uses* of *V* . 



**exponent marker** *n.* a character that is used in the textual notation for a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks> to separate the mantissa from the exponent. The characters defined as *exponent markers* in the *standard readtable* are shown in Figure 26–1. For more information, see Section 2.1 (Character Syntax). “The exponent marker ‘d’ in ‘3.0d7’ indicates that this 



number is to be represented as a double float.” 



|**Marker Meaning**|

| :- |

|<p>D or d <ClLinks styled={true} term={"double-float"}><b>double-float</b></ClLinks> </p><p>E or e <ClLinks styled={true} term={"float"}><b>float</b></ClLinks> (see <ClLinks styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks>) </p><p>F or f <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks> </p><p>L or l <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks> </p><p>S or s <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks></p>|





**Figure 26–1. Exponent Markers** 



<ClLinks styled={true} term={"export"}><b>export</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to add the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> to the list of *external symbols* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 







 



 



**exported** *adj.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) being an *external symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**expressed adjustability** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) a *generalized boolean* that is conceptually (but not necessarily actually) associated with the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, representing whether the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is *expressly adjustable*. See also *actual adjustability*. 



**expressed array element type** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is the *array element type* implied by a *type declaration* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, or which is the requested <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> 



*element type* at its time of creation, prior to any selection of an *upgraded array element type*. (Common Lisp does not provide a way of detecting this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> directly at run time, but an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to make assumptions about the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>’s contents and the operations which may be performed on the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> when this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded array element type* of the *expressed array element type*.) 



**expressed complex part type** *n.* (of a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is implied as the *complex part type* by a *type declaration* for the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> , or which is the requested *complex part type* at its time of creation, prior to any selection of an *upgraded complex part type*. (Common Lisp does not provide a way of detecting this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> directly at run time, but an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to make assumptions about the operations which may be performed on the <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> when this <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded complex part type* of the *expressed complex part type*.) 



**expression** *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, often used to emphasize the use of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to encode or represent information in a specialized format, such as program text. “The second expression in a <ClLinks styled={true} term={"let"}><b>let</b></ClLinks> form is a list of bindings.” 2. the textual notation used to notate an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in a source file. “The expression ’sample is equivalent to (quote sample).” 



**expressly adjustable** *adj.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) being *actually adjustable* by virtue of an explicit request for this characteristic having been made at the time of its creation. All <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> that are *expressly adjustable* are *actually adjustable*, but not necessarily vice versa. 



**extended character** *n.* a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"extended-char"}><b>extended-char</b></ClLinks>: a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is not a *base character* . 



**extended function designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and that is one of: a *function name* (denoting the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> it names in the *global environment*), or a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (denoting itself). The consequences are undefined if a *function name* is used as an *extended function designator* but it does not have a global definition as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, or if it is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that has a global definition as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or a *special form*. See also *function designator* . 



**extended lambda list** *n.* a list resembling an *ordinary lambda list* in form and 







 



 



purpose, but offering additional syntax or functionality not available in an *ordinary lambda list*. “<ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> uses extended lambda lists.” 



**extension** *n.* a facility in an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> of Common Lisp that is not specified by this standard. 



**extent** *n.* the interval of time during which a <ClLinks styled={true} term={"reference"}><i>reference</i></ClLinks> to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> , a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> is defined. 



**external file format** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature which 



determines one of possibly several <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> ways in which <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are encoded externally in a *character file*. 



**external file format designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for an *external file format*; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes an *external file format* and that is one of: the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> 



:default (denoting an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> default *external file format* that can accomodate at least the *base characters*), some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the 



<ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *external file format designator* (denoting an *implementation defined external file format*), or some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *external file format* (denoting itself). 



**external symbol** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is part of the ‘external interface’ to the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and that are *inherited* <sub>3</sub> by any other <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that <ClLinks styled={true} term={"use"}><i>uses</i></ClLinks> the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. When using the *Lisp reader* , if a *package prefix* is used, the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of an *external symbol* is separated from the *package name* by a single *package marker* while the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of an *internal symbol* is separated from the *package name* by a double *package marker* ; see Section 2.3.4 (Symbols as Tokens). 



**externalizable object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can be used as a *literal object* in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> to be processed by the *file compiler* . 



**F** 



**false** *n.* the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, used to represent the failure of a <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> test. 



**fbound** [ **ef ba\_und** ] *adj.* (of a *function name*) *bound* in the *function namespace*. (The <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> and *special operators* are <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>, but the nature and <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is their <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Further, defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined; as such, if 



there is a such a definition of a *setf expander F*, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (setf *F*) can be <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks> if and only if, by design or coincidence, a function binding for (setf *F*) has been independently established.) See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"fboundp"}><b>fboundp</b></ClLinks> and <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>. 



**feature** *n.* 1. an aspect or attribute of Common Lisp, of the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, or of the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 2. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks><sub>1</sub>. See Section 24.1.2 (Features). “The :ansi-cl feature is present in all conforming implementations.” 







 



 



**feature expression** *n.* A boolean combination of <ClLinks styled={true} term={"feature"}><i>features</i></ClLinks> used by the #+ and #- *reader macros* in order to direct conditional *reading* of <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> by the *Lisp reader* . See Section 24.1.2.1 (Feature Expressions). 



**features list** *n.* the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"features"}><b>\*features\*</b></ClLinks>. 



**file** *n.* a named entry in a *file system*, having an <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> nature. 



**file compiler** *n.* any <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> which *compiles source code* contained in a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>, producing a *compiled file* as output. The <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> function is the only interface to such a <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> provided by Common Lisp, but there might be other, <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> mechanisms for invoking the *file compiler* . 



**file position** *n.* (in a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a non-negative *integer* that represents a position in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. Not all <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> are able to represent the notion of *file position*; in the description of any <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> which manipulates *file positions*, the behavior for <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> that don’t have this notion must be explicitly stated. For *binary streams*, the *file position* represents the number of preceding <ClLinks styled={true} term={"byte"}><i>bytes</i></ClLinks> in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. For *character streams*, the constraint is more relaxed: *file positions* must increase monotonically, the amount of the increase between *file positions* corresponding to any two successive characters in the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**file position designator** *n.* (in a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *file position* in that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>; that is, the symbol :start (denoting 0, the first *file position* in that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>), the symbol :end (denoting the last *file position* in that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>; *i.e.*, the position 



following the last <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>), or a *file position* (denoting itself). 



**file stream** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-stream"}><b>file-stream</b></ClLinks>. 



**file system** *n.* a facility which permits aggregations of data to be stored in named <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> on some medium that is external to the *Lisp image* and that therefore persists from <ClLinks styled={true} term={"session"}><i>session</i></ClLinks> to <ClLinks styled={true} term={"session"}><i>session</i></ClLinks>. 



**filename** *n.* a handle, not necessarily ever directly represented as an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, that can be used to refer to a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> in a *file system*. *Pathnames* and <ClLinks styled={true} term={"namestring"}><i>namestrings</i></ClLinks> are two kinds of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that substitute for <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks> in Common Lisp. 



**fill pointer** *n.* (of a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> ) an *integer* associated with a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that represents the index above which no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are <ClLinks styled={true} term={"active"}><i>active</i></ClLinks>. (A *fill pointer* is a non-negative *integer* no larger than the total number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> . Not all <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> have *fill pointers*.) 



**finite** *adj.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) having a finite number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>. “The type specifier 



(integer 0 5) denotes a finite type, but the type specifiers <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks> and (integer 0) do not.” 







 



 



<ClLinks styled={true} term={"fixnum"}><b>fixnum</b></ClLinks> *n.* an *integer* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"fixnum"}><b>fixnum</b></ClLinks>. 



<ClLinks styled={true} term={"float"}><b>float</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"float"}><b>float</b></ClLinks>. 



**for-value** *adj.* (of a <ClLinks styled={true} term={"reference"}><i>reference</i></ClLinks> to a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>) being a <ClLinks styled={true} term={"reference"}><i>reference</i></ClLinks> that <ClLinks styled={true} term={"read"}><i>reads</i></ClLinks><sub>1</sub> the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. 



**form** *n.* 1. any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> meant to be *evaluated*. 2. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, a *compound form*, or a *self-evaluating object*. 3. (for an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> , as in “⟨operator ii form*”) a *compound form* having that <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> as its first element. “A <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> form is a constant form.” 



**formal argument** *n. Trad.* a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> . 



**formal parameter** *n. Trad.* a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> . 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> *v.t.* (a *format control* and *format arguments*) to perform output as if by <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>, using the *format string* and *format arguments*. 



**format argument** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is used as data by functions such as <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> which interpret *format controls*. 



**format control** *n.* a *format string*, or a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that obeys the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> conventions for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> returned by the <ClLinks styled={true} term={"formatter"}><b>formatter</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. See Section 22.2.1.3 (Compiling Format Strings). 



**format directive** *n.* 1. a sequence of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> in a *format string* which is introduced by a *tilde*, and which is specially interpreted by <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> which processes *format strings* to mean that some special operation should be performed, possibly involving data supplied by the *format arguments* that accompanied the *format string*. See the 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>. “In "&#126;D base 10 = &#126;8R", the character sequences ‘&#126;D’ and ‘&#126;8R’ are format directives.” 2. the conceptual category of all *format directives*<sub>1</sub> which use the same dispatch character. “Both "&#126;3d" and "&#126;3,’0D" are valid uses of the ‘&#126;D’ format directive.” 



**format string** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> which can contain both ordinary text and *format directives*, and which is used in conjunction with *format arguments* to describe how text output should be formatted by certain functions, such as <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>. 



**free declaration** *n.* a declaration that is not a *bound declaration*. See <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>. 



**fresh** *adj.* 1. (of an *object yielded* by a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) having been newly-allocated by that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. (The caller of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that returns a *fresh object* may freely modify the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> without fear that such modification will compromise the future correct behavior of that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>.) 2. (of a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>) newly-allocated; not shared with other <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> for that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 







 



 



**freshline** *n.* a conceptual operation on a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, implemented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> 



<ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks> and by the *format directive* &#126;&amp;, which advances the display position to the beginning of the next line (as if a <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> had been typed, or the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks> had been called) unless the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is already known to be positioned at the beginning of a line. Unlike <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks>, <ClLinks styled={true} term={"freshline"}><i>freshline</i></ClLinks> is not a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . 



**funbound** [ **efunba\_und** ] *n.* (of a *function name*) not <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>. 



<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *n.* 1. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> representing code, which can be *called* with zero or more <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>, and which produces zero or more <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. 2. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>. 



**function block name** *n.* (of a *function name*) The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that would be used as the name of an *implicit block* which surrounds the body of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> having that *function name*. If the *function name* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, its *function block name* is the *function name* itself. If the *function name* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> whose <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> is <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> and whose <ClLinks styled={true} term={"cadr"}><i>cadr</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, 



its *function block name* is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is the <ClLinks styled={true} term={"cadr"}><i>cadr</i></ClLinks> of the *function name*. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> which supports additional kinds of *function names* must specify for each how the corresponding *function block name* is computed. 



**function cell** *n. Trad.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) The <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> which holds the *definition* of the global *function binding*, if any, named by that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and which is *accessed* by <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks>. See <ClLinks styled={true} term={"cell"}><i>cell</i></ClLinks>. 



**function designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> and that is one of: a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> named by that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the *global environment*), or a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (denoting itself). The consequences are undefined if a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is used as a *function designator* but it does not have a global definition as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, or it has a global definition as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or a *special form*. See also *extended function designator* . 



**function form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and that has a first element which is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be called on <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> which are the result of *evaluating* subsequent elements of the *function form*. 



**function name** *n.* 1. (in an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>) A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) that is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> in that <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 2. A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). 



**functional evaluation** *n.* the process of extracting a *functional value* from a *function name* or a *lambda expression*. The evaluator performs *functional evaluation* implicitly when it encounters a *function name* or a *lambda expression* in the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of a *compound form*, or explicitly when it encounters a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form*. Neither a use of a 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> as a *function designator* nor a use of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> to extract the *functional value* of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is considered a *functional evaluation*. 



**functional value** *n.* 1. (of a *function name N* in an *environment E*) The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> named *N* in the *function namespace* for *environment E*; that is, the 







 



 



contents of the *function cell* named *N* in *environment E*. 2. (of an *fbound symbol S*) the contents of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *function cell*; that is, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> named *S* in the *function namespace* of the *global environment*. (A <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is a *macro name* in the *global environment* or is a *special operator* might or might not be <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>. But if *S* is such a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>, the specific nature of its *functional value* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; in particular, it might or might not be a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>.) 



**further compilation** *n. implementation-dependent* compilation beyond *minimal compilation*. Further compilation is permitted to take place at *run time*. “Block compilation and generation of machine-specific instructions are examples of further compilation.” 



**G** 



**general** *adj.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) having *element type* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, and consequently able to have any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. 



**generalized boolean** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> used as a truth value, where the symbol <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



represents <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and all other <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> represent <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. See <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks>. 



**generalized instance** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of which is either that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> itself, or some subclass of that <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. (Because of the correspondence between types and classes, the term “generalized instance of *X*” implies “object of type *X*” and in cases where *X* is a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> (or *class name*) the reverse is also true. The former terminology emphasizes the view of *X* as a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> while the latter emphasizes the view of *X* as a *type specifier* .) 



**generalized reference** *n.* a reference to a location storing an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as if to a 



<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. (Such a reference can be either to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> or <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> the location.) See Section 5.1 (Generalized Reference). See also <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**generalized synonym stream** *n.* (with a *synonym stream symbol*) 1. (to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a *synonym stream* to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or a *composite stream* which has as a target a 



*generalized synonym stream* to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 2. (to a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) a *synonym stream* to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, or a *composite stream* which has as a target a *generalized synonym stream* to the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**generic function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> whose behavior depends on the *classes* or identities of the arguments supplied to it and whose parts include, among other things, a set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>, a *lambda list*, and a *method combination* type. 



**generic function lambda list** *n.* A *lambda list* that is used to describe data flow into a *generic function*. See Section 3.4.2 (Generic Function Lambda Lists). 



<ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks> *n. Trad.* an *uninterned symbol*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks>. 







 



 



**global declaration** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that makes certain kinds of information about code globally available; that is, a <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> or a <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**global environment** *n.* that part of an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> with *indefinite scope* and *indefinite extent*. 



**global variable** *n.* a *dynamic variable* or a *constant variable*. 



**glyph** *n.* a visual representation. “Graphic characters have associated glyphs.” 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> *v.* to transfer control to a *go point*. See the *special operator* <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>. 



**go point** one of possibly several *exit points* that are *established* by <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> (or other abstractions, such as **prog**, which are built from <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>). 



**go tag** *n.* the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> or *integer* that, within the *lexical scope* of a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, names an *exit point established* by that <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**graphic** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being a “printing” or “displayable” <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that has a standard visual representation as a single <ClLinks styled={true} term={"glyph"}><i>glyph</i></ClLinks>, such as A or \* or =. <ClLinks styled={true} term={"space"}><i>Space</i></ClLinks> is defined to be <ClLinks styled={true} term={"graphic"}><i>graphic</i></ClLinks>. Of the *standard characters*, all but <ClLinks styled={true} term={"newline"}><i>newline</i></ClLinks> are <ClLinks styled={true} term={"graphic"}><i>graphic</i></ClLinks>. See <ClLinks styled={true} term={"non-graphic"}><i>non-graphic</i></ClLinks>. 



**H** 



**handle** *v.* (of a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being *signaled*) to perform a non-local transfer of control, terminating the ongoing *signaling* of the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



**handler** *n.* a *condition handler* . 



**hash table** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"hash-table"}><b>hash-table</b></ClLinks>, which provides a mapping from <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks> to <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. 



**home package** *n.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, if any, which is contents of the *package cell* of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and which dictates how the *Lisp printer* prints the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> when it is not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the *current package*. (<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> which have <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> in their *package cell* are said to have no *home package*, and also to be *apparently uninterned*.) 



**I** 



**I/O customization variable** *n.* one of the *stream variables* in Figure 26–2, or some other (<ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) *stream variable* that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks>. 



**identifier** *n.* 1. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> used to identify or to distinguish <ClLinks styled={true} term={"name"}><i>names</i></ClLinks>. 2. a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> used the same way. 



**immutable** *adj.* not subject to change, either because no <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> are not required to detect attempts to modify *immutable objects* or <ClLinks styled={true} term={"cell"}><i>cells</i></ClLinks>; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each *conforming implementation* and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



*conforming implementations* but not in others, and whose details may differ between <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>. A *conforming implementation* is encouraged (but not required) to document its treatment of each item in this specification which is marked 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between *conforming implementations*. 



**implicit block** *n.* a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> introduced by a *macro form* rather than by an explicit <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**implicit compilation** *n. compilation* performed during <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>. 



**implicit progn** *n.* an ordered set of adjacent <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> appearing in another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and defined by their context in that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be executed as if within a <ClLinks styled={true} term={"progn"}><b>progn</b></ClLinks>. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> and/or <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> appearing in another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and defined by their context in that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be executed as if within a <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks>. 



<ClLinks styled={true} term={"import"}><b>import</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> into a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to make the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> be <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. **improper list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which is not a *proper list*: a *circular list* or a *dotted list*. 



**inaccessible** *adj.* not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks>. 



**indefinite extent** *n.* an <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a *property indicator* . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of *C*<sub>1</sub>. “An integer is an indirect instance of the class <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) to acquire the structure and behavior defined by a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks>. 3. (a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to make *symbols exported* by another *package accessible* by using <ClLinks styled={true} term={"use-package"}><b>use-package</b></ClLinks>. 



**initial pprint dispatch table** *n.* the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> at the time the *Lisp image* is started. 



**initial readtable** *n.* the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"readtable"}><b>\*readtable\*</b></ClLinks> at the time the *Lisp image* is started. 



**initialization argument list** *n.* a *property list* of initialization argument <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> used in the protocol for initializing and reinitializing <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> used to supply the initial <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> or <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. “The initialization form for a slot in a <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form is introduced by the keyword :initform.” 



**input** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **input-stream-p**. 



**instance** *n.* 1. a *direct instance*. 2. a *generalized instance*. 3. an *indirect instance*. <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"integer"}><b>integer</b></ClLinks>, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



<ClLinks styled={true} term={"intern"}><b>intern</b></ClLinks> *v.t.* 1. (a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to look up the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, returning either a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> which was already <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> or a newly created *internal symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> with that <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a symbol which is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, but which is not an *external symbol* of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**internal time** *n. time*, represented as an *integer* number of *internal time units*. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></ClLinks>. 



**interned** *adj. Trad.* 1. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks><sub>3</sub> in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a specific <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**interpreted function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is not a *compiled function*. (It is possible for there to be a *conforming implementation* which has no *interpreted functions*, but a *conforming program* must not assume that all <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> are *compiled functions*.) 



**interpreted implementation** *n.* an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that uses an execution strategy for *interpreted functions* that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that describe a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"t"}><i>T</i></ClLinks> by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible *constituent trait* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> which if present signifies that the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> cannot ever appear in a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that has *syntax type constituent* in the *current readtable* and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a *compound form* whose <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is named in Figure 26–3, or a *compound form* that has an *implementation-defined operator* and that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be an *iteration form*. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which was created by an *explicit use* of *V* in an *iteration form*. 



**K** 



**key** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> used for selection during retrieval. See *association list<ClLinks styled={true} term={"t"}><i>, </i></ClLinks>property list*, and *hash table*. Also, see Section 17.1 (Sequence Concepts). 



<ClLinks styled={true} term={"keyword"}><b>keyword</b></ClLinks> *n.* 1. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> the *home package* of which is the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 2. 



any <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, usually but not necessarily in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, that is used as an identifying marker in keyword-style argument passing. See <ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks>. 3. *Idiom.* a *lambda list keyword*. 



**keyword parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding keyword <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is optional. (There is no such thing as a required keyword <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>.) If the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not supplied, a default value is used. See also *supplied-p parameter* . 



**keyword/value pair** *n.* two successive <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> (a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks> and a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, respectively) of a *property list*. 



**L** 



**lambda combination** *n. Trad.* a *lambda form*. 



**lambda expression** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> which can be used in place of a *function name* in certain contexts to denote a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> lambda. See <ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks>. 



**lambda form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and that has a first element which is a *lambda expression* representing a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be called on <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> which are the result of *evaluating* subsequent elements of the *lambda form*. 



**lambda list** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that specifies a set of <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> (sometimes called *lambda variables*) and a protocol for receiving <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> for those <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks>; that is, an *ordinary lambda list*, an *extended lambda list*, or a *modified lambda list*. 







 



 



**lambda list keyword** *n.* a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> begins with <ClLinks styled={true} term={"ampersand"}><i>ampersand</i></ClLinks> and that is specially recognized in a *lambda list*. Note that no *standardized lambda list keyword* is in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**lambda variable** *n.* a *formal parameter* , used to emphasize the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>’s relation to the *lambda list* that *established* it. 



**leaf** *n.* 1. an <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> in a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks><sub>1</sub>. 2. a terminal node of a <ClLinks styled={true} term={"tree"}><i>tree</i></ClLinks><sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp <ClLinks styled={true} term={"time"}><i>time</i></ClLinks> representations ignore *leap seconds*; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the *standard character* “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



<ClLinks styled={true} term={"length"}><b>length</b></ClLinks> *n.* (of a *sequence*) the number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in the *sequence*. (Note that if the *sequence* is a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> with a *fill pointer* , its <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> is the same as the *fill pointer* even though the total allocated size of the <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> might be larger.) 



**lexical binding** *n.* a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> in a *lexical environment*. 



**lexical closure** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that, when invoked on <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>, executes the body of a *lambda expression* in the *lexical environment* that was captured at the time of the creation of the *lexical closure*, augmented by <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>’s <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> to the corresponding <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**lexical environment** *n.* that part of the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> that contains <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> whose names have *lexical scope*. A *lexical environment* contains, among other things: 



ordinary <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of *variable names* to <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, lexically *established bindings* of *function names* to <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>, *symbol macros*, *blocks*, *tags*, and *local declarations* (see <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> for which is in the *lexical environment*. 



**Lisp image** *n.* a running instantiation of a Common Lisp <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. A *Lisp image* is characterized by a single address space in which any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> can directly refer to any another in conformance with this specification, and by a single, common, *global environment*. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> onto a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. (This procedure is implemented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that <ClLinks styled={true} term={"read"}><i>reads</i></ClLinks><sub>2</sub> a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, <ClLinks styled={true} term={"evaluate"}><i>evaluates</i></ClLinks> it, and prints (*i.e.*, <ClLinks styled={true} term={"write"}><i>writes</i></ClLinks><sub>2</sub>) the results. In many <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> from a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, producing <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. (This procedure is implemented by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>.) 



<ClLinks styled={true} term={"list"}><b>list</b></ClLinks> *n.* 1. a chain of *conses* in which the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, and the <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> of each <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> is either the next link in the chain or a terminating <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>. See also *proper list<ClLinks styled={true} term={"t"}><i>, </i></ClLinks>dotted list*, or *circular list*. 2. the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that is the union of <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> and <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks>. 



**list designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and that is one of: a *non-nil atom* (denoting a *singleton list* whose <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> is that *non-nil atom*) or a *proper list* (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) referenced directly in a program rather than being computed by the program; that is, appearing as data in a <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, or, if the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) to cause the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> contained in the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> to be *executed*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> referred to in <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> by a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of such a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is some specific <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which can only be computed in the 



run-time <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. In the case of *file compilation*, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is computed once as part of the process of *loading* the *compiled file*, and not again. See the *special operator* <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks>. 



**loader** *n.* a facility that is part of Lisp and that <ClLinks styled={true} term={"load"}><i>loads</i></ClLinks> a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>. 



**local declaration** *n.* an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> which may appear only in specially designated positions of certain <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, and which provides information about the code contained within the containing <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; that is, a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>. 



**local precedence order** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> consisting of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> followed by its *direct superclasses* in the order mentioned in the defining <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> for the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**local slot** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a *slot accessible* in only one <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, namely the <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> in which the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the *pretty printer* . See the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> nature that is used as the representation of a “host” in a *logical pathname*, and that has an associated set of translation rules for converting *logical pathnames* belonging to that host into *physical pathnames*. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *logical host*; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a *logical host* and that is one of: a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> (denoting the *logical host* that it names), or a *logical host* (denoting itself). (Note that because the representation of a *logical host* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, it is possible that an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> might represent a *logical host* as the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that names it.) 



**logical pathname** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>. 



**long float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"long-float"}><b>long-float</b></ClLinks>. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Such symbols are recognized by their <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (using <ClLinks styled={true} term={"string"}><b>string=</b></ClLinks>), not by their identity; as such, they may be in any package. A *loop keyword* is not a <ClLinks styled={true} term={"keyword"}><i>keyword</i></ClLinks>. 



**lowercase** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being among *standard characters* corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks>. See Section 13.1.4.3 (Characters With Case). 



**M** 



**macro** *n.* 1. a *macro form* 2. a *macro function*. 3. a *macro name*. 



**macro character** *n.* a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a *reader macro*<sub>1</sub>. (*Macro characters* have nothing to do with <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks>.) 



**macro expansion** *n.* 1. the process of translating a *macro form* into another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 2. the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> resulting from this process. 



**macro form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that stands for another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a *compound form* whose first element is a *macro name*, or a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names a *symbol macro*. 



**macro function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of two arguments, a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, that implements *macro expansion* by producing a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be evaluated in place of the original argument <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**macro lambda list** *n.* an *extended lambda list* used in <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that *establish macro* definitions, such as <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks> and <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> for which <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and which when used as the first element of a *compound form* identifies that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as a *macro form*. 



**macroexpand hook** *n.* the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is successively applied to <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> taken from corresponding entries in collections such as *sequences* or *hash tables*. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose instances are *classes*. 2. (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a *conforming implementation* might implement various aspects of the object system. This description is beyond the scope of this document, and no *conforming implementation* is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<ClLinks styled={true} term={"method"}><b>method</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is part of a *generic function* and which provides information about how that *generic function* should behave when its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> to produce an *effective method* for a *generic function*. 2. an object of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>, which represents the details of how the *method combination*<sub>1</sub> for one or more specific *generic functions* is to be performed. 



**method-defining form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that defines a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a *generic function*, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> corresponding to a *method-defining form*. See Figure 7–1. 



**minimal compilation** *n.* actions the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an *ordinary lambda list* in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



*ordinary lambda list*. See *ordinary lambda list*. “<ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that is used in pairs to indicate that the enclosed <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are to be treated as <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> with their <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) having the *multiple escape syntax type*. 3. *n.* a *multiple escape*<sub>2</sub> *character* . (In the *standard readtable*, *vertical-bar* is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. “The function <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> returns multiple values.” 2. a variable number of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, possibly including zero or one. “The function <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> returns multiple values.” 3. a fixed number of values other than one. “The macro <ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 



**N** 



**name** *n.*, *v.t.* 1. *n.* an <ClLinks styled={true} term={"identifier"}><i>identifier</i></ClLinks> by which an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, or an *exit point* is referred to by association using a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. 2. *v.t.* to give a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> to. 3. *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> having a name component) the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is that component. “The string 



which is a symbol’s name is returned by <ClLinks styled={true} term={"symbol-name"}><b>symbol-name</b></ClLinks>.” 4. *n.* (of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by <ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks>. 5. *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that names the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> and that 







 



 



has <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> greater than one. (All *non-graphic characters* are required to have <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> unless they have some *implementation-defined attribute* which is not <ClLinks styled={true} term={"null"}><i>null</i></ClLinks>. Whether or not other <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> have <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>.) 



**named constant** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> that is defined by Common Lisp, by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>, or by user code (see the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks>) to always <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> the same <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> when *evaluated*. “The value of a named constant may not be changed by assignment or by binding.” 



**namespace** *n.* 1. <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> whose denotations are restricted to a particular kind. “The bindings of names to tags is the tag namespace.” 2. any <ClLinks styled={true} term={"mapping"}><i>mapping</i></ClLinks> whose domain is a set of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks>. “A package defines a namespace.” 



<ClLinks styled={true} term={"namestring"}><b>namestring</b></ClLinks> *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that represents a <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> using either the <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> notation for naming *logical pathnames* described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> notation for naming a 



*physical pathname*. 



**newline** *n.* the *standard character ⟨Newline⟩*, notated for the *Lisp reader* as #\Newline. 



**next method** *n.* the next <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> to be invoked with respect to a given <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 



**nickname** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) one of possibly several <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> that can be used to refer to the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> but that is not the primary <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> *n.* the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is at once the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> named "NIL" in the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, the *empty list*, the <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> (or *generalized boolean*) representing <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, and the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the *empty type*. 



**non-atomic** *adj.* being other than an <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks>; *i.e.*, being a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



**non-constant variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> that is not a *constant variable*. 



**non-correctable** *adj.* (of an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> ) not intentionally <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks>. (Because of the dynamic nature of <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>, it is neither possible nor generally useful to completely prohibit an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> from being <ClLinks styled={true} term={"correctable"}><i>correctable</i></ClLinks>. This term is used in order to express an 



intent that no special effort should be made by <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> signaling an <ClLinks styled={true} term={"error"}><i>error</i></ClLinks> to make that *error correctable*; however, there is no actual requirement on *conforming programs* or *conforming implementations* imposed by this term.) 



**non-empty** *adj.* having at least one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. 



**non-generic function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is not a *generic function*. 







 



 



**non-graphic** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) not <ClLinks styled={true} term={"graphic"}><i>graphic</i></ClLinks>. See Section 13.1.4.1 (Graphic 



Characters). 



**non-list** *n.*, *adj.* other than a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>; *i.e.*, a *non-nil atom*. 



**non-local exit** *n.* a transfer of control (and sometimes <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) to an *exit point* for reasons other than a *normal return*. “The operators <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, and <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> cause a non-local exit.” 



**non-nil** *n.*, *adj.* not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Technically, any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> can be referred to as <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, but that would tend to imply a unique view of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as a *generalized boolean*. Referring to such an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> avoids this implication. 



**non-null lexical environment** *n.* a *lexical environment* that has additional 



information not present in the *global environment*, such as one or more <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. 



**non-simple** *adj.* not <ClLinks styled={true} term={"simple"}><i>simple</i></ClLinks>. 



**non-terminating** *adj.* (of a *macro character* ) being such that it is treated as a 



constituent <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 



**non-top-level form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that, by virtue of its position as a <ClLinks styled={true} term={"subform"}><i>subform</i></ClLinks> of another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, is not a *top level form*. See Section 3.2.3.1 (Processing of Top Level Forms). 



**normal return** *n.* the natural transfer of control and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> which occurs after the complete *execution* of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**normalized** *adj.*, *ANSI*, *IEEE* (of a <ClLinks styled={true} term={"float"}><i>float</i></ClLinks>) conforming to the description of 



“normalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See <ClLinks styled={true} term={"denormalized"}><i>denormalized</i></ClLinks>. 



<ClLinks styled={true} term={"null"}><b>null</b></ClLinks> *adj.*, *n.* 1. *adj.* a. (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) having no <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>: empty. See *empty list*. b. (of a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) having a <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in “the *null string*” even though no attempt is made to <ClLinks styled={true} term={"intern"}><i>intern</i></ClLinks><sub>2</sub> null strings. The phrase “a *null string*” is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase “the *null string*” should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) An <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to which the value of that <ClLinks styled={true} term={"attribute"}><i>attribute</i></ClLinks> defaults if no specific value was requested. 2. *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"null"}><b>null</b></ClLinks> (the only such <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> being <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>). 



**null lexical environment** *n.* the *lexical environment* which has no <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"number"}><b>number</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"number"}><b>number</b></ClLinks>. 



**numeric** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being one of the *standard characters* 0 through *9* , or being some other *graphic character* defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks styled={true} term={"numeric"}><i>numeric</i></ClLinks>. 



**O** 



**object** *n.* 1. any Lisp datum. “The function <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> creates an object which refers to two other objects.” 2. (immediately following the name of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, used to emphasize that the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is not just a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> for an object of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> but really an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> in cases where <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of that <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (such as <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> or <ClLinks styled={true} term={"class"}><b>class</b></ClLinks>) are commonly referred to by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. “The function <ClLinks styled={true} term={"symbol-function"}><b>symbol-function</b></ClLinks> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



“The operators <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks>, <ClLinks styled={true} term={"maphash"}><b>maphash</b></ClLinks>, <ClLinks styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></ClLinks> and <ClLinks styled={true} term={"count"}><b>count</b></ClLinks> perform 



object-traversing operations.” 



<ClLinks styled={true} term={"open"}><b>open</b></ClLinks> *adj.*, *v.t.* (a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>) 1. *v.t.* to create and return a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. 2. *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) having been *opened* <sub>1</sub>, but not yet <ClLinks styled={true} term={"closed"}><i>closed</i></ClLinks>. 



**operator** *n.* 1. a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 2. a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that names such a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special operator* . 3. (in a <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form*) the <ClLinks styled={true} term={"cadr"}><i>cadr</i></ClLinks> of the <ClLinks styled={true} term={"function"}><b>function</b></ClLinks> *special form*, which might be either an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the *compound form*, which might be either an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> <sub>2</sub> or a *lambda expression*, and which is never (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks> <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <ClLinks styled={true} term={"implementation"}><i>Implementations</i></ClLinks> may define additional *optimize qualities*. 



**optional parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding positional <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is optional. If the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> is not supplied, a default value is used. See also *supplied-p parameter* . 



**ordinary function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that is not a *generic function*. 



**ordinary lambda list** *n.* the kind of *lambda list* used by <ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks>. See *modified lambda list* and *extended lambda list*. “<ClLinks styled={true} term={"defun"}><b>defun</b></ClLinks> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *O*<sub>1</sub>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *O*<sub>2</sub>, which would 



be made <ClLinks styled={true} term={"inaccessible"}><i>inaccessible</i></ClLinks> if *O*<sub>1</sub> were made <ClLinks styled={true} term={"inaccessible"}><i>inaccessible</i></ClLinks>. (Every <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is an *otherwise inaccessible part* of itself.) 



**output** *adj.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **output-stream-p**. 



**P** 



<ClLinks styled={true} term={"package"}><b>package</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"package"}><b>package</b></ClLinks>. 



**package cell** *n. Trad.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) The <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> in a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that holds one of possibly several <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> in which the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks>, called the *home package*, or which holds <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if no such <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> exists or is known. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"symbol-package"}><b>symbol-package</b></ClLinks>. 



**package designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> and that is one of: a *string designator* (denoting the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> that has the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that it designates as its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> or as one of its <ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks>), or a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> (denoting itself). 



**package marker** *n.* a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> in the *standard readtable*. See Section 2.1 (Character Syntax). 



**package prefix** *n.* a notation preceding the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in text that is processed by the *Lisp reader* , which uses a *package name* followed by one or more *package markers*, and which indicates that the symbol is looked up in the indicated <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**package registry** *n.* A mapping of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> to *package objects*. It is possible for there to be a *package object* which is not in this mapping; such a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is called an *unregistered package*. *Operators* such as <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> consult this mapping in order to find a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> from its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. <ClLinks styled={true} term={"operator"}><i>Operators</i></ClLinks> such as <ClLinks styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></ClLinks>, <ClLinks styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></ClLinks>, and <ClLinks styled={true} term={"list-all-packages"}><b>list-all-packages</b></ClLinks> operate only on <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that exist in the *package registry*. 



**pairwise** *adv.* (of an adjective on a set) applying individually to all possible pairings of elements of the set. “The types *A*, *B*, and *C* are pairwise disjoint if *A* and *B* are disjoint, *B* and *C* are disjoint, and *A* and *C* are disjoint.” 



**parallel** *adj. Trad.* (of <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or *assignment*) done in the style of <ClLinks styled={true} term={"psetq"}><b>psetq</b></ClLinks>, <ClLinks styled={true} term={"let"}><b>let</b></ClLinks>, or <ClLinks styled={true} term={"do"}><b>do</b></ClLinks>; that is, first evaluating all of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that produce <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>, and only then *assigning* or <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> (or <ClLinks styled={true} term={"place"}><i>places</i></ClLinks>). Note that this does not imply traditional 



computational “parallelism” since the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that produce <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> are evaluated 



<ClLinks styled={true} term={"sequentially"}><i>sequentially</i></ClLinks>. See <ClLinks styled={true} term={"sequential"}><i>sequential</i></ClLinks>. 







 



 



**parameter** *n.* 1. (of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> in the definition of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which takes on the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of a corresponding <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> (or of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of corresponding arguments) to that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> when it is called, or which in some cases is given a default value because there is no corresponding <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 2. (of a *format directive*) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> received as 



data flow by a *format directive* due to a prefix notation within the *format string* at the *format directive*’s point of use. See Section 22.3 (Formatted Output). “In "&#126;3,’0D", the number 3 and the character #\0 are parameters to the &#126;D format directive.” 



**parameter specializer** *n.* 1. (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>) an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> which constrains the 



<ClLinks styled={true} term={"method"}><i>method</i></ClLinks> to be applicable only to <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> sequences in which the corresponding 



<ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> matches the *parameter specializer* . 2. a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (eql <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>). 



**parameter specializer name** *n.* 1. (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> definition) an expression used in code to name a *parameter specializer* . See Section 7.6.2 (Introduction to Methods). 2. a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (eql <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>). 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, which is a structured representation of the name of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>. A <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> has six components: a “host,” a “device,” a “directory,” a “name,” a “type,” and a “version.” 



**pathname designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> and that is one of: a *pathname namestring* (denoting the corresponding <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>), a *stream associated with a file* (denoting the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> used to open the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>; this may be, but is not required to be, the actual name of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks>), or a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams). 



**physical pathname** *n.* a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> that is not a *logical pathname*. 



**place** *n.* 1. a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> which is suitable for use as a *generalized reference*. 2. the 



conceptual location referred to by such a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks><sub>1</sub>. 



**plist** [ **p—e list** ] *n.* a *property list*. 



**portable** *adj.* (of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) required to produce equivalent results and observable side effects in all *conforming implementations*. 



**potential copy** *n.* (of an *object O*<sub>1</sub> subject to constriants) an *object O*<sub>2</sub> that if the specified constraints are satisfied by *O*<sub>1</sub> without any modification might or might not be <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to *O*<sub>1</sub>, or else that must be a *fresh object* that resembles a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> of *O*<sub>1</sub> except that it has been modified as necessary to satisfy the constraints. 



**potential number** *n.* A textual notation that might be parsed by the *Lisp reader* in some *conforming implementation* as a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> but is not required to be parsed as a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> . No <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *potential number*—either an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens). 







 



 



**pprint dispatch table** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can be the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> and hence can control how <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are printed when <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. See Section 22.2.1.4 (Pretty Print Dispatch Tables). 



**predicate** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that returns a *generalized boolean* as its first value. 



**present** *n.* 1. (of a <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> in a *Lisp image*) a state of being that is in effect if and only if the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> naming the <ClLinks styled={true} term={"feature"}><i>feature</i></ClLinks> is an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *features list*. 2. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) being accessible in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> directly, rather than being inherited from another <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**pretty print** *v.t.* (an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>) to invoke the *pretty printer* on the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**pretty printer** *n.* the procedure that prints the character representation of an 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks> onto a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, and that uses layout techniques (*e.g.*, indentation) that tend to highlight the structure of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in a way that makes it easier for human readers to parse visually. See the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> and Section 22.2 (The Lisp Pretty Printer). 



**pretty printing stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that does pretty printing. Such streams are created by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> as a link between the output stream and the logical block. 



**primary method** *n.* a member of one of two sets of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> (the set of *auxiliary methods* is the other) that form an exhaustive partition of the set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 



**primary value** *n.* (of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) the first <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, if any, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are no <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. “The primary value returned by <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> is an integer quotient, truncated toward zero.” 



**principal** *adj.* (of a value returned by a Common Lisp <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> which the corresponding Common Lisp <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> has been defined to return. 



**print name** *n. Trad.* (usually of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks><sub>3</sub>. 



**printer control variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> whose specific purpose is to control some action of the *Lisp printer* ; that is, one of the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> in Figure 22–1, or else some *implementation-defined variable* which is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *printer control variable*. 







 



 



**printer escaping** *n.* The combined state of the *printer control variables* 



<ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>. If the value of either <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> 



or <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then *printer escaping* is “enabled”; otherwise (if the values of both <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> and <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> are <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>), then *printer escaping* is “disabled”. 



**printing** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being a *graphic character* other than <ClLinks styled={true} term={"space"}><i>space</i></ClLinks>. 



**process** *v.t.* (a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> by the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> ) to perform *minimal compilation*, determining the time of evaluation for a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and possibly *evaluating* that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> (if required). 



**processor** *n.*, *ANSI* an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 



<ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>) to <ClLinks styled={true} term={"establish"}><i>establish</i></ClLinks> that <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>. 



**proclamation** *n.* a *global declaration*. 



**prog tag** *n. Trad.* a *go tag*. 



**program** *n. Trad.* Common Lisp <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. 



**programmer** *n.* an active entity, typically a human, that writes a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>, and that might or might not also be a <ClLinks styled={true} term={"user"}><i>user</i></ClLinks> of the <ClLinks styled={true} term={"program"}><i>program</i></ClLinks>. 



**programmer code** *n. code* that is supplied by the programmer; that is, <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that is not *system code*. 



**proper list** *n.* A <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> terminated by the *empty list*. (The *empty list* is a *proper list*.) See *improper list*. 



**proper name** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"class-name"}><b>class-name</b></ClLinks> and <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>. 



**proper sequence** *n.* a *sequence* which is not an *improper list*; that is, a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> or a *proper list*. 



**proper subtype** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is not the *same type* as the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (*i.e.*, its <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> are a “proper subset” of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>). 



**property** *n.* (of a *property list*) 1. a conceptual pairing of a *property indicator* and its associated *property value* on a *property list*. 2. a *property value*. 



**property indicator** *n.* (of a *property list*) the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> part of a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>, used as a <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> when looking up a *property value* on a *property list*. 







 



 



**property list** *n.* 1. a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> containing an even number of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> that are alternating <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> (sometimes called <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks> or <ClLinks styled={true} term={"key"}><i>keys</i></ClLinks>) and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> (sometimes called *properties*). When there is more than one <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> pair with the *identical name* in 



a *property list*, the first such pair determines the <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) the component of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> containing a *property list*. 



**property value** *n.* (of a *property indicator* on a *property list*) the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> associated with the *property indicator* on the *property list*. 



**purports to conform** *v.* makes a good-faith claim of conformance. This term 



expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> of this specification with bugs might not be a *conforming implementation*, it can still *purport to conform*. This is an important distinction in certain specific cases; *e.g.*, see the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"features"}><b>\*features\*</b></ClLinks>. 



**Q** 



**qualified method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> that has one or more <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



**qualifier** *n.* (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a *generic function*) one of possibly several <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> used to annotate the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> in a way that identifies its role in the *method combination*. The *method combination type* determines how many <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> are permitted for each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>, which <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> are permitted, and the semantics of those <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



**query I/O** *n.* the *bidirectional stream* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> **\*query-io\***. **quoted object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> which is the second element of a <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**R** 



**radix** *n.* an *integer* between 2 and 36, inclusive, which can be used to designate a base with respect to which certain kinds of numeric input or output are performed. (There are *n* valid digit characters for any given *radix n*, and those digits are the first *n* digits in the sequence 0, 1, *. . .*, 9, A, B, *. . .*, Z, which have the weights 0, 1, *. . .*, 9, 10, 11, *. . .*, 



35, respectively. Case is not significant in parsing numbers of radix greater than 10, so “9b8a” and “9B8A” denote the same <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> 16 number.) 



**random state** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"random-state"}><b>random-state</b></ClLinks>. 



**rank** *n.* a non-negative *integer* indicating the number of <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



<ClLinks styled={true} term={"ratio"}><b>ratio</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"ratio"}><b>ratio</b></ClLinks>. 







 



 



**ratio marker** *n.* a character which is used in the textual notation for a <ClLinks styled={true} term={"ratio"}><i>ratio</i></ClLinks> to separate the numerator from the denominator, and which is <ClLinks styled={true} term={"slash"}><i>slash</i></ClLinks> in the *standard readtable*. See Section 2.1 (Character Syntax). 



<ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"rational"}><b>rational</b></ClLinks>. 



<ClLinks styled={true} term={"read"}><b>read</b></ClLinks> *v.t.* 1. (a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> or component) to obtain the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 2. (an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> from a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) to parse an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> from its representation on the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**readably** *adv.* (of a manner of printing an *object O*<sub>1</sub>) in such a way as to permit the *Lisp Reader* to later *parse* the printed output into an *object O*<sub>2</sub> that is <ClLinks styled={true} term={"similar"}><i>similar</i></ClLinks> to *O*<sub>1</sub>. 



**reader** *n.* 1. a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that <ClLinks styled={true} term={"read"}><i>reads</i></ClLinks><sub>1</sub> a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 2. the *Lisp reader* . 



**reader macro** *n.* 1. a textual notation introduced by dispatch on one or two 



<ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that defines special-purpose syntax for use by the *Lisp reader* , and that is implemented by a *reader macro function*. See Section 2.2 (Reader Algorithm). 2. the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> or <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> that introduce a *reader macro*<sub>1</sub>; that is, a *macro character* or the conceptual pairing of a *dispatching macro character* and the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that follows 



it. (A *reader macro* is not a kind of <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>.) 



**reader macro function** *n.* a *function designator* that denotes a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> 



that implements a *reader macro*<sub>2</sub>. See the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"set-macro-character"}><b>set-macro-character</b></ClLinks> and 



**set-dispatch-macro-character**. 



<ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"readtable"}><b>readtable</b></ClLinks>. 



**readtable case** *n.* an attribute of a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> whose value is a *case sensitivity mode*, and that selects the manner in which <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> in a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> are to be treated by the *Lisp reader* and the *Lisp printer* . See Section 23.1.2 (Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp 



Printer). 



**readtable designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> and that is one of: <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (denoting the *standard readtable*), or a <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> (denoting itself). 



**recognizable subtype** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which can be reliably detected to be such by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"subtypep"}><b>subtypep</b></ClLinks>. 



**reference** *n.*, *v.t.* 1. *n.* an act or occurrence of referring to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 2. *v.t.* to refer to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, usually by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 







 



 



**registered package** *n.* a *package object* that is installed in the *package registry*. (Every *registered package* has a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, as well as zero or more <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> nicknames. All <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> that are initially specified by Common Lisp or created by <ClLinks styled={true} term={"make-package"}><b>make-package</b></ClLinks> or <ClLinks styled={true} term={"defpackage"}><b>defpackage</b></ClLinks> are *registered packages*. *Registered packages* can be turned into *unregistered packages* by <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks>.) 



**relative** *adj.* 1. (of a <ClLinks styled={true} term={"time"}><i>time</i></ClLinks>) representing an offset from an *absolute time* in the 



units appropriate to that time. For example, a *relative internal time* is the difference between two *absolute internal times*, and is measured in *internal time units*. 2. (of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) representing a position in a directory hierarchy by motion from a position other than the root, which might therefore vary. “The notation #P"../foo.text" 



denotes a relative pathname if the host file system is Unix.” See <ClLinks styled={true} term={"absolute"}><i>absolute</i></ClLinks>. 



**repertoire** *n.*, *ISO* a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. See Section 13.1.2.2 (Character 



Repertoires). 



**report** *n.* (of a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>) to <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> on the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> in an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> where the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



**report message** *n.* the text that is output by a *condition reporter* . 



**required parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> for which a corresponding positional <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> must be supplied when *calling* the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**rest list** *n.* (of a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> having a *rest parameter* ) The <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> to which the *rest parameter* is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> on some particular <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. 



**rest parameter** *n.* A <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> which was introduced by **&amp;rest**. 



<ClLinks styled={true} term={"restart"}><b>restart</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"restart"}><b>restart</b></ClLinks>. 



**restart designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> and that is one of: a *non-nil symbol* (denoting the most recently established *active restart* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>), or a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> (denoting itself). 



**restart function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that invokes a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, as if by <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. 



The primary purpose of a *restart function* is to provide an alternate interface. By convention, a *restart function* usually has the same name as the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> which it invokes. Figure 26–4 shows a list of the *standardized restart functions*. 



|<p>**abort muffle-warning use-value** </p><p>**continue store-value**</p>|

| :- |





**Figure 26–4. Standardized Restart Functions** 







 



 



<ClLinks styled={true} term={"return"}><b>return</b></ClLinks> *v.t.* (of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) 1. (from a <ClLinks styled={true} term={"block"}><i>block</i></ClLinks>) to transfer control and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> from the <ClLinks styled={true} term={"block"}><i>block</i></ClLinks>; that is, to cause the <ClLinks styled={true} term={"block"}><i>block</i></ClLinks> to <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> immediately without doing any further evaluation of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in its body. 2. (from a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) to <ClLinks styled={true} term={"yield"}><i>yield</i></ClLinks> the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. 



**return value** *n. Trad.* a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks><sub>1</sub> 



**right-parenthesis** *n.* the *standard character* “)”, that is variously called “right 



parenthesis” or “close parenthesis” See Figure 2–5. 



**run time** *n.* 1. *load time* 2. *execution time* 



**run-time compiler** *n.* refers to the <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> function or to *implicit compilation*, for which the compilation and run-time <ClLinks styled={true} term={"environment"}><i>environments</i></ClLinks> are maintained in the same *Lisp image*. 



**run-time definition** *n.* a definition in the *run-time environment*. 



**run-time environment** *n.* the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> in which a program is *executed*. 



**S** 



**safe** *adj.* 1. (of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) processed in a *lexical environment* where the the highest **safety** level (3) was in effect. See <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks>. 2. (of a <ClLinks styled={true} term={"call"}><i>call</i></ClLinks>) a *safe call*. 



**safe call** *n.* a <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> in which the <ClLinks styled={true} term={"call"}><i>call</i></ClLinks>, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> being *called*, and the point of *functional evaluation* are all <ClLinks styled={true} term={"safe"}><i>safe</i></ClLinks><sub>1</sub> <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**same** *adj.* 1. (of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> under a specified <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>) indistinguishable by that 



<ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks>. “The symbol car, the string "car", and the string "CAR" are the same under **string-equal**”. 2. (of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> if no predicate is implied by context) indistinguishable by <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>. Note that <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> might be capable of distinguishing some <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks> and <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> which <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> cannot distinguish, but the nature of such, if any, is <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> 



*dependent*. Since <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> is used only rarely in this specification, <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> is the default predicate when none is mentioned explicitly. “The conses returned by two successive calls to <ClLinks styled={true} term={"cons"}><b>cons</b></ClLinks> are never the same.” 3. (of <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>) having the same set of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>; that is, each <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of the others. “The types specified by (integer 0 1), (unsigned-byte 1), and bit are the same.” 



**satisfy the test** *v.* (of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> being considered by a *sequence function*) 1. (for a one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> test) to be in a state such that the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which is the *predicate argument* to the *sequence function* returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when given a single <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that is the result 



of calling the *sequence function*’s *key argument* on the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> being considered. See Section 17.2.2 (Satisfying a One-Argument Test). 2. (for a two <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> test) to be in a state such that the two-place <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> which is the *sequence function*’s *test* 







 



 



<ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when given a first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that is the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> being considered, and when given a second <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> that is the result of calling the *sequence function*’s *key argument* on an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *sequence function*’s *sequence argument* which is being tested for equality; or to be in a state such that the *test-not function* returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> given the same <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. See Section 17.2.1 (Satisfying a Two-Argument Test). 



**scope** *n.* the structural or textual region of code in which <ClLinks styled={true} term={"reference"}><i>references</i></ClLinks> to an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>, an *exit point*, a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>, or an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> (usually by <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>) can occur. 



**script** *n. ISO* one of possibly several sets that form an *exhaustive partition* of the type <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. See Section 13.1.2.1 (Character Scripts). 



**secondary value** *n.* (of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) the second <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, if any, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are fewer than two <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. “The secondary value returned by <ClLinks styled={true} term={"truncate"}><b>truncate</b></ClLinks> is a remainder.” 



**section** *n.* a partitioning of output by a *conditional newline* on a *pretty printing stream*. See Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**self-evaluating object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is neither a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> nor a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. If a 



*self-evaluating object* is *evaluated*, it <ClLinks styled={true} term={"yield"}><i>yields</i></ClLinks> itself as its only <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. “Strings are 



self-evaluating objects.” 



**semi-standard** *adj.* (of a language feature) not required to be implemented by any *conforming implementation*, but nevertheless recommended as the canonical approach in situations where an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> does plan to support such a feature. The presence of <ClLinks styled={true} term={"semi-standard"}><i>semi-standard</i></ClLinks> aspects in the language is intended to lessen portability problems and reduce the risk of gratuitous divergence among <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> that might stand in the way of future standardization. 



**semicolon** *n.* the *standard character* that is called “semicolon” (;). See Figure 2–5. <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks> *n.* 1. an ordered collection of elements 2. a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> or a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. 



**sequence function** *n.* one of the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> in Figure 17–1, or an *implementation defined function* that operates on one or more *sequences*. and that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *sequence function*. 



**sequential** *adj. Trad.* (of <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or *assignment*) done in the style of <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>, <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks>, or <ClLinks styled={true} term={"do"}><b>do\*</b></ClLinks>; that is, interleaving the evaluation of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that produce <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> with the *assignments* or <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> (or <ClLinks styled={true} term={"place"}><i>places</i></ClLinks>). See <ClLinks styled={true} term={"parallel"}><i>parallel</i></ClLinks>. 



**sequentially** *adv.* in a <ClLinks styled={true} term={"sequential"}><i>sequential</i></ClLinks> way. 







 



 



**serious condition** *n.* a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, which represents a 



<ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> that is generally sufficiently severe that entry into the <ClLinks styled={true} term={"debugger"}><i>debugger</i></ClLinks> should be expected if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is *signaled* but not *handled*. 



**session** *n.* the conceptual aggregation of events in a *Lisp image* from the time it is started to the time it is terminated. 



<ClLinks styled={true} term={"set"}><b>set</b></ClLinks> *v.t. Trad.* (any <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a *dynamic variable*) to <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. 



**setf expander** *n.* a function used by <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> to compute the *setf expansion* of a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**setf expansion** *n.* a set of five <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks><sub>1</sub> that, taken together, describe how to store into a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> and which <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the macro call associated with the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are evaluated. See Section 5.1.1.2 (Setf Expansions). 



**setf function** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). 



**setf function name** *n.* (of a *symbol S*) the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> (setf *S*). 



<ClLinks styled={true} term={"shadow"}><b>shadow</b></ClLinks> *v.t.* 1. to override the meaning of. “That binding of X shadows an outer one.” 2. to hide the presence of. “That <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks> of F shadows the outer <ClLinks styled={true} term={"flet"}><b>flet</b></ClLinks> of F.” 3. to replace. “That package shadows the symbol cl:car with its own symbol car.” 



**shadowing symbol** *n.* (in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s *shadowing symbols list*. 



**shadowing symbols list** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, associated with the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are to be exempted from ‘symbol conflict errors’ detected when packages are *used*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"package-shadowing-symbols"}><b>package-shadowing-symbols</b></ClLinks>. 



**shared slot** *n.* (of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>) a *slot accessible* in more than one <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>; specifically, such a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in all *direct instances* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and in those *indirect instances* whose <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> does not <ClLinks styled={true} term={"shadow"}><i>shadow</i></ClLinks><sub>1</sub> the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



**sharpsign** *n.* the *standard character* that is variously called “number sign,” “sharp,” or “sharp sign” (#). See Figure 2–5. 



**short float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"short-float"}><b>short-float</b></ClLinks>. 



**sign** *n.* one of the *standard characters* “+” or “-”. 



<ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> *v.* to announce, using a standard protocol, that a particular situation, 



represented by a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, has been detected. See Section 9.1 (Condition System Concepts). 







 



 



**signature** *n.* (of a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>) a description of the <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> and *parameter specializers* for the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> which determines the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>’s applicability for a given set of 



required <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>, and which also describes the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> conventions for its other, non-required <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**similar** *adj.* (of two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>) defined to be equivalent under the <ClLinks styled={true} term={"similarity"}><i>similarity</i></ClLinks> relationship. 



**similarity** *n.* a two-place conceptual equivalence predicate, which is independent of the *Lisp image* so that two <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> in different *Lisp images* can be understood to be equivalent under this predicate. See Section 3.2.4 (Literal Objects in Compiled Files). 



**simple** *adj.* 1. (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) being of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-array"}><b>simple-array</b></ClLinks>. 2. (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) having no *implementation-defined attributes*, or else having *implementation-defined attributes* each of which has the <ClLinks styled={true} term={"null"}><i>null</i></ClLinks> value for that <ClLinks styled={true} term={"attribute"}><i>attribute</i></ClLinks>. 



**simple array** *n.* an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-array"}><b>simple-array</b></ClLinks>. 



**simple bit array** *n.* a *bit array* that is a *simple array*; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (simple-array bit). 



**simple bit vector** *n.* a *bit vector* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-bit-vector"}><b>simple-bit-vector</b></ClLinks>. 



**simple condition** *n.* a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-condition"}><b>simple-condition</b></ClLinks>. 



**simple general vector** *n.* a *simple vector* . 



**simple string** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-string"}><b>simple-string</b></ClLinks>. 



**simple vector** *n.* a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"simple-vector"}><b>simple-vector</b></ClLinks>, sometimes called a “*simple general vector* .” Not all <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks> that are <ClLinks styled={true} term={"simple"}><i>simple</i></ClLinks> are *simple vectors*—only those that have *element type* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



**single escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> that indicates that the next <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is to be treated as an <ClLinks styled={true} term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> with its <ClLinks styled={true} term={"case"}><i>case</i></ClLinks> preserved. For details, see Section 2.1.4.6 (Single Escape Character). 2. *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) having the *single escape syntax type*. 3. *n.* a *single escape*<sub>2</sub> *character* . (In the *standard* 



<ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks>, <ClLinks styled={true} term={"slash"}><i>slash</i></ClLinks> is the only *single escape*.) 



**single float** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"single-float"}><b>single-float</b></ClLinks>. 



**single-quote** *n.* the *standard character* that is variously called “apostrophe,” “acute accent,” “quote,” or “single quote” (’). See Figure 2–5. 



**singleton** *adj.* (of a *sequence*) having only one <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>. “(list ’hello) returns a singleton list.” 







 



 



**situation** *n.* the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in a specific <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 



**slash** *n.* the *standard character* that is variously called “solidus” or “slash” (/). See Figure 2–5. 



**slot** *n.* a component of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can store a <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. 



**slot specifier** *n.* a representation of a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> that includes the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> and zero or more <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> options. A <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> option pertains only to a single <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



**source code** *n. code* representing <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> suitable for <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> (*e.g.*, <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> created by <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, by *macro expansion*, or by *compiler macro expansion*). 



**source file** *n.* a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> which contains a textual representation of *source code*, that can be edited, *loaded*, or *compiled*. 



**space** *n.* the *standard character ⟨Space⟩*, notated for the *Lisp reader* as #\Space. 



**special form** *n.* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, other than a *macro form*, which is a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> with special syntax or special <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> rules or both, possibly manipulating the *evaluation environment* or control flow or both. The first element of a *special form* is a *special operator* . 



**special operator** *n.* one of a fixed set of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, enumerated in Figure 3–2, that may appear in the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in order to identify the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as a *special form*. 



**special variable** *n. Trad.* a *dynamic variable*. 



**specialize** *v.t.* (a *generic function*) to define a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for the *generic function*, or in other words, to refine the behavior of the *generic function* by giving it a specific meaning for a particular set of *classes* or <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



**specialized** *adj.* 1. (of a *generic function*) having <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> which <ClLinks styled={true} term={"specialize"}><i>specialize</i></ClLinks> the *generic function*. 2. (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) having an *actual array element type* that is a *proper subtype* of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>; see Section 15.1.1 (Array Elements). “(make-array 5 :element-type ’bit) makes an array of length five that is specialized for bits.” 



**specialized lambda list** *n.* an *extended lambda list* used in <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> that *establish method* definitions, such as <ClLinks styled={true} term={"defmethod"}><b>defmethod</b></ClLinks>. See Section 3.4.3 (Specialized Lambda Lists). 



<b>spreadable argument list designator</b> <i>n.</i> a <i>designator</i> for a <i>list</i> of <i>objects</i>; that is, an <i>object</i> that denotes a <i>list</i> and that is a <i>non-null list L</i>1 of length <i>n</i>, whose last element is a <i>list L</i>2 of length <i>m</i> (denoting a list <i>L</i>3 of length <i>m</i> + <i>n −</i> 1 whose <i>elements</i> are <i>L</i>1<i><sub>i</sub></i> for <i>i</i> &lt; <i>n −</i> 1 followed by <i>L</i>2<i><sub>j</sub></i> for <i>j</i> &lt; <i>m</i>). “The list (1 2 (3 4 5)) is a spreadable argument list designator for the list (1 2 3 4 5).” 







 



 



**stack allocate** *v.t. Trad.* to allocate in a non-permanent way, such as on a stack. Stack-allocation is an optimization technique used in some <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> for 



allocating certain kinds of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that have *dynamic extent*. Such <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are allocated on the stack rather than in the heap so that their storage can be freed as part of unwinding the stack rather than taking up space in the heap until the next garbage collection. What <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (if any) can have *dynamic extent* can vary from <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. No <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is ever required to perform stack-allocation. 



**stack-allocated** *adj. Trad.* having been *stack allocated*. 



**standard character** *n.* a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"standard-char"}><b>standard-char</b></ClLinks>, which is one of a fixed set of 96 such <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> required to be present in all *conforming implementations*. See Section 2.1.3 (Standard Characters). 



**standard class** *n.* a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is a *generalized instance* of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>. 



**standard generic function** a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></ClLinks>. 



**standard input** *n.* the *input stream* which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* 



**\*standard-input\***. 



**standard method combination** *n.* the *method combination* named **standard**. 



**standard object** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is a *generalized instance* of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>. 



**standard output** *n.* the *output stream* which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* **\*standard-output\***. 



**standard pprint dispatch table** *n.* A *pprint dispatch table* that is <ClLinks styled={true} term={"different"}><i>different</i></ClLinks> from the *initial pprint dispatch table*, that implements *pretty printing* as described in this specification, and that, unlike other *pprint dispatch tables*, must never be modified by any program. (Although the definite reference “the *standard pprint dispatch table*” is generally used within this document, it is actually <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether a single <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> fills the role of the *standard pprint dispatch table*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard pprint dispatch table*” is called for. As such, this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard readtable** *n.* A <ClLinks styled={true} term={"readtable"}><i>readtable</i></ClLinks> that is <ClLinks styled={true} term={"different"}><i>different</i></ClLinks> from the *initial readtable*, that implements the <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> syntax defined in this specification, and that, unlike 



other <ClLinks styled={true} term={"readtable"}><i>readtables</i></ClLinks>, must never be modified by any program. (Although the definite reference “the *standard readtable*” is generally used within this document, it is 



actually <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether a single <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> fills the role of the *standard readtable*, or whether there might be multiple such objects, any one of which could be used on any given occasion where “the *standard readtable*” is called for. As such, 







 



 



this phrase should be seen as an indefinite reference in all cases except for anaphoric references.) 



**standard syntax** *n.* the syntax represented by the *standard readtable* and used as a reference syntax throughout this document. See Section 2.1 (Character Syntax). 



**standardized** *adj.* (of a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, or definition) having been defined by Common Lisp. “All standardized variables that are required to hold bidirectional streams have “-io\*” in their name.” 



**startup environment** *n.* the *global environment* of the running *Lisp image* from which the <ClLinks styled={true} term={"compiler"}><i>compiler</i></ClLinks> was invoked. 



<ClLinks styled={true} term={"step"}><b>step</b></ClLinks> *v.t.*, *n.* 1. *v.t.* (an iteration <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>) to <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> a new <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> at the end of an iteration, in preparation for a new iteration. 2. *n.* the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that identifies how the next value in an iteration is to be computed. 3. *v.t.* (<ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) to specially execute the <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>, pausing at intervals to allow user confirmation or intervention, usually for debugging. 



<ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that can be used with an input or output function to identify an appropriate source or sink of <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> or <ClLinks styled={true} term={"byte"}><i>bytes</i></ClLinks> for that operation. 



**stream associated with a file** *n.* a *file stream*, or a *synonym stream* 



the <ClLinks styled={true} term={"target"}><i>target</i></ClLinks> of which is a *stream associated with a file*. Such a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> 



cannot be created with <ClLinks styled={true} term={"make-two-way-stream"}><b>make-two-way-stream</b></ClLinks>, <ClLinks styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks>, 



<ClLinks styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks>, <ClLinks styled={true} term={"make-concatenated-stream"}><b>make-concatenated-stream</b></ClLinks>, <ClLinks styled={true} term={"make-string-input-stream"}><b>make-string-input-stream</b></ClLinks>, or <ClLinks styled={true} term={"make-string-output-stream"}><b>make-string-output-stream</b></ClLinks>. 



**stream designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> and that is one of: <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> (denoting the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>), <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (denoting the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*standard-input\*** for *input stream designators* or denoting the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*standard-output\*** for *output stream designators*), or a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> (denoting itself). 



**stream element type** *n.* (of a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> of data for which the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is specialized. 



**stream variable** *n.* a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> whose <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> must be a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**stream variable designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a *stream variable*; that is, a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that denotes a *stream variable* and that is one of: <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> (denoting <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>), 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> (denoting **\*standard-input\*** for *input stream variable designators* or denoting **\*standard-output\*** for *output stream variable designators*), or some other <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (denoting itself). 



<ClLinks styled={true} term={"string"}><b>string</b></ClLinks> *n.* a specialized <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> that is of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>, and whose elements are of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks> or a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"character"}><b>character</b></ClLinks>. 







 



 



**string designator** *n.* a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; that is, an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> and that is one of: a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> (denoting a *singleton string* that has the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> as its only <ClLinks styled={true} term={"element"}><i>element</i></ClLinks>), a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (denoting the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that is its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>), or a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> (denoting itself). The intent is that this term be consistent with the behavior of <ClLinks styled={true} term={"string"}><b>string</b></ClLinks>; <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> that extend <ClLinks styled={true} term={"string"}><b>string</b></ClLinks> must extend the meaning of this term in a compatible way. 



**string equal** *adj.* the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> under **string-equal**. 



**string stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"string-stream"}><b>string-stream</b></ClLinks>. 



**structure** *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks>. 



**structure class** *n.* a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that is a *generalized instance* of <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>. 



**structure name** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> defined with <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>. Usually, such a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is also a *structure class*, but there may be <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> situations in which this is not so, if the :type option to <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> is used. 



**style warning** *n.* a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks>. 



**subclass** *n.* a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that <ClLinks styled={true} term={"inherit"}><i>inherits</i></ClLinks> from another <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, called a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks>. (No <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks> of itself.) 



**subexpression** *n.* (of an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>) an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> that is contained within the 



<ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>. (In fact, the state of being a <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> is not an attribute of the <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks>, but really an attribute of the containing <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> since the *same object* can at once be a <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> in one context, and not in another.) 



**subform** *n.* (of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> that is a <ClLinks styled={true} term={"subexpression"}><i>subexpression</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and which by virtue of its position in that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is also a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. “(f x) and x, but not exit, are subforms of (return-from exit (f x)).” 



**subrepertoire** *n.* a subset of a <ClLinks styled={true} term={"repertoire"}><i>repertoire</i></ClLinks>. 



**subtype** *n.* a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> whose membership is the same as or a proper subset of the 



membership of another <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, called a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks>. (Every <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of itself.) 



**superclass** *n.* a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> from which another <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> (called a <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks>) <ClLinks styled={true} term={"inherit"}><i>inherits</i></ClLinks>. (No <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> is a <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of itself.) See <ClLinks styled={true} term={"subclass"}><i>subclass</i></ClLinks>. 



**supertype** *n.* a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> whose membership is the same as or a proper superset of the membership of another <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, called a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks>. (Every <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of itself.) See <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks>. 







 



 



**supplied-p parameter** *n.* a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> which recieves its *generalized boolean* value implicitly due to the presence or absence of an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> corresponding to another <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> (such as an *optional parameter* or a *rest parameter* ). See Section 3.4.1 (Ordinary Lambda Lists). 



<ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks> *n.* an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>. 



**symbol macro** *n.* a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that stands for another <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. See the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> 



<ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>. 



**synonym stream** *n.* 1. a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"synonym-stream"}><b>synonym-stream</b></ClLinks>, which is consequently a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is an alias for another <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of a *dynamic variable* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the *synonym stream symbol* of the *synonym stream*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></ClLinks>. 2. (to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) a *synonym stream* which has the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> as 



the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of its *synonym stream symbol*. 3. (to a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) a *synonym stream* which has the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> as its *synonym stream symbol*. 



**synonym stream symbol** *n.* (of a *synonym stream*) the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> which names the *dynamic variable* which has as its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> another <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> for which the *synonym stream* is an alias. 



**syntax type** *n.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) one of several classifications, enumerated in Figure 2– 6, that are used for dispatch during parsing by the *Lisp reader* . See Section 2.1.4 (Character Syntax Types). 



**system class** *n.* a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> that may be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks> in a *conforming* 



<ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> and hence cannot be inherited by *classes* defined by *conforming* 



<ClLinks styled={true} term={"program"}><i>programs</i></ClLinks>. 



**system code** *n. code* supplied by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to implement this specification (*e.g.*, the definition of <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks>) or generated automatically in support of this 



specification (*e.g.*, during method combination); that is, <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that is not *programmer code*. 



**T** 



<ClLinks styled={true} term={"t"}><b>t</b></ClLinks> *n.* 1. a. the <ClLinks styled={true} term={"boolean"}><i>boolean</i></ClLinks> representing true. b. the canonical *generalized boolean* 



representing true. (Although any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> other than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is considered <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> as a 



*generalized boolean*, t is generally used when there is no special reason to prefer one such <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> over another.) 2. the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> to which all <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> belong—the <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of all <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> (including itself). 3. the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of the <ClLinks styled={true} term={"superclass"}><i>superclass</i></ClLinks> of all *classes* except itself. 



**tag** *n.* 1. a *catch tag*. 2. a *go tag*. 







 



 



**tail** *n.* (of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as either some <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> which makes up that <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or the <ClLinks styled={true} term={"atom"}><i>atom</i></ClLinks> (if any) which terminates the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>. “The empty list is a tail of every proper list.” 



**target** *n.* 1. (of a *constructed stream*) a <ClLinks styled={true} term={"constituent"}><i>constituent</i></ClLinks> of the *constructed stream*. “The target of a synonym stream is the value of its synonym stream symbol.” 2. (of a *displaced array*) the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> to which the *displaced array* is displaced. (In the case of a chain of *constructed streams* or *displaced arrays*, the unqualified term “<ClLinks styled={true} term={"target"}><i>target</i></ClLinks>” always refers to the immediate <ClLinks styled={true} term={"target"}><i>target</i></ClLinks> of the first item in the chain, not the immediate target of the last item.) 



**terminal I/O** *n.* the *bidirectional stream* that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> 



<ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**terminating** *n.* (of a *macro character* ) being such that, if it appears while parsing a token, it terminates that token. See Section 2.2 (Reader Algorithm). 



**tertiary value** *n.* (of <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) the third <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, if any, or else <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are fewer than three <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. 



<ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> *v.* to transfer control and <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> to a <ClLinks styled={true} term={"catch"}><i>catch</i></ClLinks>. See the *special operator* <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>. **tilde** *n.* the *standard character* that is called “tilde” (&#126;). See Figure 2–5. 



<ClLinks styled={true} term={"time"}><b>time</b></ClLinks> a representation of a point (*absolute time*) or an interval (*relative time*) on a time line. See *decoded time*, *internal time*, and *universal time*. 



**time zone** *n.* a <ClLinks styled={true} term={"rational"}><i>rational</i></ClLinks> multiple of 1/3600 between -24 (inclusive) and 24 (inclusive) that represents a time zone as a number of hours offset from Greenwich Mean Time. Time zone values increase with motion to the west, so Massachusetts, U.S.A. is in time zone 5, California, U.S.A. is time zone 8, and Moscow, Russia is time zone *-3* . (When “daylight savings time” is separately represented as an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> or *return value*, the *time zone* that accompanies it does not depend on whether daylight savings time is in effect.) 



**token** *n.* a textual representation for a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> or a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. See Section 2.3 



(Interpretation of Tokens). 



**top level form** *n.* a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> which is processed specially by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks> for the purposes of enabling *compile time evaluation* of that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. *Top level forms* include those <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> which are not <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of any other <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, and certain other cases. See Section 3.2.3.1 (Processing of Top Level Forms). 



**trace output** *n.* the *output stream* which is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* 



**\*trace-output\***. 







 



 



**tree** *n.* 1. a binary recursive data structure made up of *conses* and <ClLinks styled={true} term={"atom"}><i>atoms</i></ClLinks>: the *conses* are themselves also <ClLinks styled={true} term={"tree"}><i>trees</i></ClLinks> (sometimes called “subtrees” or “branches”), and the <ClLinks styled={true} term={"atom"}><i>atoms</i></ClLinks> are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 2. in general, any recursive data structure that has some notion of “branches” and *leaves*. 



<b>tree structure</b> <i>n.</i> (of a <i>tree</i><sub>1</sub>) the set of <i>conses</i> that make up the <i>tree</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>tree structure</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>tree</i> are not themselves part of its <i>tree structure</i> unless they are also <i>conses</i>. 



**true** *n.* any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is not <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and that is used to represent the success of a <ClLinks styled={true} term={"predicate"}><i>predicate</i></ClLinks> test. See <ClLinks styled={true} term={"t"}><i>t</i></ClLinks><sub>1</sub>. 



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> *n.* 1. the canonical <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> in the *file system*. See Section 20.1.3 (Truenames). 2. a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> representing a <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks><sub>1</sub>. 



**two-way stream** *n.* a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"two-way-stream"}><b>two-way-stream</b></ClLinks>, which is a <ClLinks styled={true} term={"bidirectional"}><i>bidirectional</i></ClLinks> 



*composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



<b>type</b> <i>n.</i> 1. a set of <i>objects</i>, usually with common structure, behavior, or purpose. (Note that the expression “<i>X</i> is of type <i>S<sub>a</sub></i>” naturally implies that “<i>X</i> is of type <i>S<sub>b</sub></i>” if <i>S<sub>a</sub></i> is a <i>subtype</i> of <i>S<sub>b</sub></i>.) 2. (immediately following the name of a <i>type</i>) a <i>subtype</i> of that <i>type</i>. “The type <b>vector</b> is an array type.” 



**type declaration** *n.* a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> that asserts that every reference to a specified <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> within the scope of the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> results in some <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> of the specified <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



**type equivalent** *adj.* (of two *types X* and *Y* ) having the same <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks>; that is, *X* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *Y* and *Y* is a <ClLinks styled={true} term={"subtype"}><i>subtype</i></ClLinks> of *X*. 



**type expand** *n.* to fully expand a *type specifier* , removing any references to *derived types*. (Common Lisp provides no program interface to cause this to occur, but the semantics of Common Lisp are such that every <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> must be able to do 



this internally, and some situations involving *type specifiers* are most easily described in terms of a fully expanded *type specifier* .) 



**type specifier** *n.* an <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> that denotes a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. “The symbol random-state, the list (integer 3 5), the list (and list (not null)), and the class named standard-class are type specifiers.” 



**U** 



**unbound** *adj.* not having an associated denotation in a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. See <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks>. 







 



 



**unbound variable** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is syntactically plausible as the name of a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> but which is not <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> in the *variable namespace*. 



**undefined function** *n.* a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> that is syntactically plausible as the name of a 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks> but which is not <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> in the *function namespace*. 



<ClLinks styled={true} term={"unintern"}><b>unintern</b></ClLinks> *v.t.* (a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) to make the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> not be <ClLinks styled={true} term={"present"}><i>present</i></ClLinks> in that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. (The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> might continue to be <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> by inheritance.) 



**uninterned** *adj.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; *i.e.*, not <ClLinks styled={true} term={"interned"}><i>interned</i></ClLinks> <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring *leap seconds*). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> with no <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks>. 



**unregistered package** *n.* a *package object* that is not present in the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> 



*registry*. An *unregistered package* has no <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>; *i.e.*, its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"delete-package"}><b>delete-package</b></ClLinks>. 



**unsafe** *adj.* (of <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>) not <ClLinks styled={true} term={"safe"}><i>safe</i></ClLinks>. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a <ClLinks styled={true} term={"safe"}><i>safe</i></ClLinks> context, the same checking might or might not occur in that context if it were <ClLinks styled={true} term={"unsafe"}><i>unsafe</i></ClLinks>; describing a 



context as <ClLinks styled={true} term={"unsafe"}><i>unsafe</i></ClLinks> means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> that is not a *safe call*. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> to an actual <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) 1. (when creating an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) 



to substitute an *actual array element type* for an *expressed array element type* 



when choosing an appropriately *specialized array* representation. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></ClLinks>. 2. (when creating a <ClLinks styled={true} term={"complex"}><i>complex</i></ClLinks> ) to substitute an *actual complex part type* for an *expressed complex part type* when choosing an appropriately *specialized complex* representation. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 



**upgraded array element type** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and that is used instead of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> whenever the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is used as an *array element type* for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>) a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> that is a <ClLinks styled={true} term={"supertype"}><i>supertype</i></ClLinks> of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and that is used instead of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> whenever the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> is used as a *complex part type* for object creation or type discrimination. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></ClLinks>. 







 



 



**uppercase** *adj.* (of a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> ) being among *standard characters* corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be <ClLinks styled={true} term={"uppercase"}><i>uppercase</i></ClLinks>. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to <ClLinks styled={true} term={"inherit"}><i>inherit</i></ClLinks> the *external symbols* of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the *external symbols* of *P*<sub>1</sub> become *internal symbols* of *P*<sub>2</sub> unless they are explicitly <ClLinks styled={true} term={"exported"}><i>exported</i></ClLinks>.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) a (possibly empty) <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> associated with each <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> which determines what other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> are currently being *used* by that <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a <ClLinks styled={true} term={"program"}><i>program</i></ClLinks> at run time, but that is not necessarily a <ClLinks styled={true} term={"programmer"}><i>programmer</i></ClLinks> . 



**V** 



**valid array dimension** *n.* a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use as an *array dimension*. 



Such a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and less than the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></ClLinks>. When multiple *array dimensions* are to be used together to specify a multi-dimensional <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, there is also an implied constraint that the product of all of the <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> be less than the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></ClLinks>. 



**valid array index** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use as one of possibly several indices needed to name an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> according to a multi-dimensional Cartesian coordinate system. Such a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and must be less than the corresponding <ClLinks styled={true} term={"dimension"}><i>dimension</i></ClLinks><sub>1</sub> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. (Unless otherwise explicitly specified, the phrase “a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *valid array indices*” further implies that the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> must be the same as the <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>.) “For a 2 by 3 array, valid array indices for the first dimension are 0 and 1, and valid array indices for the second dimension are 0, 1 and 2.” 



**valid array row-major index** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, which might have any number of <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks><sub>2</sub>) a single <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use in naming any <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, by viewing the array’s storage as a linear series of <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> in row-major order. Such a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and less than the *array total size* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**valid fill pointer** *n.* (of an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> suitable for use as a *fill pointer* for the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. Such a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> must be greater than or equal to zero, and less than or equal to the *array total size* of the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**valid logical pathname host** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> that has been defined as the name of a *logical host*. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **load-logical-pathname-translations**. 







 



 



**valid pathname device** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, :unspecific, or some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *valid pathname device*. 



**valid pathname directory** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, :wild, :unspecific, or some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *valid directory component*. 



**valid pathname host** *n.* a *valid physical pathname host* or a *valid logical pathname host*. 



**valid pathname name** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, :wild, :unspecific, or some other <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> defined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *valid pathname name*. 



**valid pathname type** *n.* a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, :wild, :unspecific. 



**valid pathname version** *n.* a non-negative *integer* , or one of :wild, :newest, 



:unspecific, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The symbols :oldest, :previous, and :installed are *semi* 



*standard* special version symbols. 



**valid physical pathname host** *n.* any of a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>, or the symbol :unspecific, that is recognized by the implementation as the name of a host. 



**valid sequence index** *n.* (of a *sequence*) an *integer* suitable for use to name an <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> of the *sequence*. Such an *integer* must be greater than or equal to zero, and must be less than the <ClLinks styled={true} term={"length"}><i>length</i></ClLinks> of the *sequence*. (If the *sequence* is an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, the *valid sequence index* is further constrained to be a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>.) 



**value** *n.* 1. a. one of possibly several <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are the result of an <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>. b. (in a situation where exactly one value is expected from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) the *primary value* returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. c. (of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> in an *implicit progn*) one of possibly 



several <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that result from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of the last <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are no <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 2. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> associated with a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> in a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks>. 3. (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *dynamic variable* named by that symbol. 4. an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> associated with a <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> in an *association list*, a *property list*, or a *hash table*. 



**value cell** *n. Trad.* (of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>) The <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> which holds the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>, if any, of the *dynamic variable* named by that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and which is *accessed* by <ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks>. See <ClLinks styled={true} term={"cell"}><i>cell</i></ClLinks>. 



**variable** *n.* a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> in the “variable” <ClLinks styled={true} term={"namespace"}><i>namespace</i></ClLinks>. See Section 3.1.2.1.1 (Symbols as Forms). 



<ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks> *n.* a one-dimensional <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>. 



**vertical-bar** *n.* the *standard character* that is called “vertical bar” (|). See Figure 2–5. 



 



 



**W** 



<b>whitespace</b> <i>n.</i> 1. one or more <i>characters</i> that are either the <i>graphic character</i> #\Space or else <i>non-graphic</i> characters such as #\Newline that only move the print position. 2. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is a <i>token</i> separator. For details, see Section 2.1.4.7 (Whitespace Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>whitespace</i><sub>2<i>a</i></sub> 



<i>syntax type</i><sub>2</sub>. c. <i>n.</i> a <i>whitespace</i><sub>2<i>b</i></sub> character . 



**wild** *adj.* 1. (of a <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks>) using an <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> syntax for naming files, which might “match” any of possibly several possible <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks>, and which can therefore be used to refer to the aggregate of the <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> named by those <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks>. 2. (of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>) a structured representation of a name which might “match” any of 



possibly several <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks>, and which can therefore be used to refer to the aggregate of the <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> named by those <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks>. The set of *wild pathnames* includes, but is not restricted to, <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> which have a component which is :wild, or which have a directory component which contains :wild or :wild-inferors. See the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks>. 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> *v.t.* 1. (a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> or component) to change the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> or <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 2. (an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>) to output a representation of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**writer** *n.* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that <ClLinks styled={true} term={"write"}><i>writes</i></ClLinks><sub>1</sub> a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> or <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



**Y** 



**yield** *v.t.* (<ClLinks styled={true} term={"value"}><i>values</i></ClLinks>) to produce the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> as the result of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>. “The form (+ 2 3) yields 5.” 







 



 





