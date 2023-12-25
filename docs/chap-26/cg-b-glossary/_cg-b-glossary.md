 



Each entry in this glossary has the following parts: 



*•* the term being defined, set in boldface. 



*•* optional pronunciation, enclosed in square brackets and set in boldface, as in the following example: [ **a list** ]. The pronunciation key follows *Webster’s Third New International Dictionary the English Language, Unabridged*, except that “* ” is used to notate the schwa (upside-down “e”) character. 



*•* the part or parts of speech, set in italics. If a term can be used as several parts of speech, there is a separate definition for each part of speech. 



*•* one or more definitions, organized as follows: 



– an optional number, present if there are several definitions. Lowercase letters might also be used in cases where subdefinitions of a numbered definition are necessary. 



– an optional part of speech, set in italics, present if the term is one of several parts of speech. 



– an optional discipline, set in italics, present if the term has a standard definition being repeated. For example, “*Math.*” 



– an optional context, present if this definition is meaningful only in that context. For example, “(of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>)”. 



– the definition. 



– an optional example sentence. For example, “This is an example of an example.” – optional cross references. 



In addition, some terms have idiomatic usage in the Common Lisp community which is not shared by other communities, or which is not technically correct. Definitions labeled “*Idiom.*” represent such idiomatic usage; these definitions are sometimes followed by an explanatory note. 



Words in *this font* are words with entries in the glossary. Words in example sentences do not follow this convention. 



When an ambiguity arises, the longest matching substring has precedence. For example, “*complex float*” refers to a single glossary entry for “*complex float*” rather than the combined meaning of the glossary terms “<GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm>” and “<GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>.” 







 



 



Subscript notation, as in “<i>something<sub>n</sub></i>” means that the <i>n</i>th definition of “<i>something</i>” is intended. This notation is used only in situations where the context might be insufficient to disambiguate. 



The following are abbreviations used in the glossary: 




|**Abbreviation**
 |**Meaning**|

| :-: | :- |

|<p>*adj.* </p><p>*adv.* </p><p>*ANSI* </p><p>*Comp.* </p><p>*Idiom.* </p><p>*IEEE* </p><p>*ISO* </p><p>*Math.* </p><p>*Trad.* </p><p>*n.* </p><p>*v.* </p><p>*v.t.* </p>|<p>adjective </p><p>adverb </p><p>compatible with one or more ANSI standards computers </p><p>idiomatic </p><p>compatible with one or more IEEE standards compatible with one or more ISO standards mathematics </p><p>traditional </p><p>noun </p><p>verb </p><p>transitive verb</p>|





**Non-alphabetic** 



**()** [ <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> ], *n.* an alternative notation for writing the symbol <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, used to emphasize the use of <GlossaryTerm styled={true} term={"nil"}><i>nil</i></GlossaryTerm> as an *empty list*. 



**A** 



**absolute** *adj.* 1. (of a <GlossaryTerm styled={true} term={"time"}><i>time</i></GlossaryTerm>) representing a specific point in time. 2. (of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>) representing a specific position in a directory hierarchy. See <GlossaryTerm styled={true} term={"relative"}><i>relative</i></GlossaryTerm>. 



**access** *n.*, *v.t.* 1. *v.t.* (a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, or <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> <sub>1</sub> or <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm><sub>1</sub> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> or an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 2. *n.* (of a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>) an attempt to <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm><sub>1</sub> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**accessibility** *n.* the state of being <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>. 



**accessible** *adj.* 1. (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) capable of being *referenced*. 2. (of *shared slots* or *local slots* in an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) having been defined by the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> or *inherited* from a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 3. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) capable of being *referenced* without a *package prefix* when that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is current, regardless of whether the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or is *inherited*. 



**accessor** *n.* an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> that performs an <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"reader"}><i>reader</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"writer"}><i>writer</i></GlossaryTerm> . 







 



 



**active** *adj.* 1. (of a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> , a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, or a *catch tag*) having been *established* but not yet *disestablished*. 2. (of an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) having an index that is greater than or equal to zero, but less than the *fill pointer* (if any). For an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that has no *fill pointer* , all <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are considered <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm>. 



**actual adjustability** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) a *generalized boolean* that is associated with the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, representing whether the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is *actually adjustable*. See also *expressed adjustability* and **adjustable-array-p**. 



**actual argument** *n. Trad.* an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



**actual array element type** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> for which the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is actually specialized, which is the *upgraded array element type* of the *expressed array element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"array-element-type"}><b>array-element-type</b></DictionaryLink>. 



**actual complex part type** *n.* (of a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ) the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> in which the real and imaginary parts of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> are actually represented, which is the *upgraded complex part type* of the *expressed complex part type* of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 



**actual parameter** *n. Trad.* an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



**actually adjustable** *adj.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) such that <DictionaryLink styled={true} term={"adjust-array"}><b>adjust-array</b></DictionaryLink> can adjust its 



characteristics by direct modification. A *conforming program* may depend on an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> being *actually adjustable* only if either that <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is known to have been *expressly adjustable* or if that <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> has been explicitly tested by **adjustable-array-p**. 



**adjustability** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) 1. *expressed adjustability*. 2. *actual adjustability*. 



**adjustable** *adj.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) 1. *expressly adjustable*. 2. *actually adjustable*. 



**after method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> having the <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> :after. 



**alist** [ **—a list** ], *n.* an *association list*. 



<b>alphabetic</b> <i>n.</i>, <i>adj.</i> 1. <i>adj.</i> (of a <i>character</i> ) being one of the <i>standard characters</i> A through Z or a through z, or being any <i>implementation-defined</i> character that has <i>case</i>, or being some other <i>graphic character</i> defined by the <i>implementation</i> to be <i>alphabetic</i><sub>1</sub>. 2. a. <i>n.</i> one of several possible <i>constituent traits</i> of a <i>character</i> . For details, see Section 2.1.4.1 (Constituent Characters) and Section 2.2 (Reader Algorithm). b. <i>adj.</i> (of a <i>character</i> ) being a <i>character</i> that has <i>syntax type constituent</i> in the <i>current readtable</i> and that has the <i>constituent trait alphabetic</i><sub>2<i>a</i></sub>. See Figure 2–8. 



**alphanumeric** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being either an <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>1</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"numeric"}><i>numeric</i></GlossaryTerm> character. 







 



 



**ampersand** *n.* the *standard character* that is called “ampersand” (&amp;). See Figure 2–5. 



**anonymous** *adj.* 1. (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) having no <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> 2. (of a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>) having a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**apparently uninterned** *adj.* having a *home package* of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. (An *apparently* 



*uninterned symbol* might or might not be an *uninterned symbol*. *Uninterned symbols* have a *home package* of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, but <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> which have been <GlossaryTerm styled={true} term={"uninterned"}><i>uninterned</i></GlossaryTerm> from their *home package* also have a *home package* of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, even though they might still be <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> in some other <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>.) 



**applicable** *adj.* 1. (of a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> ) being an *applicable handler* . 2. (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>) being an *applicable method*. 3. (of a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>) being an *applicable restart*. 



**applicable handler** *n.* (for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being *signaled*) an *active handler* for which the associated type contains the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



**applicable method** *n.* (of a *generic function* called with <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> of the *generic function* for which the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> satisfy the *parameter specializers* of that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. See Section 7.6.6.1.1 (Selecting the Applicable Methods). 



**applicable restart** *n.* 1. (for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) an *active handler* for which the associated test returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when given the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> as an argument. 2. (for no particular <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) an *active handler* for which the associated test returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when given <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> as an argument. 



<DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> with arguments that are the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. “Applying the function <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> to a list of integers returns the sum of the elements of that list.” 



**argument** *n.* 1. (of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is offered as data to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> when it is *called*. 2. (of a *format control*) a *format argument*. 



**argument evaluation order** *n.* the order in which <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are evaluated in a function call. “The argument evaluation order for Common Lisp is left to right.” See Section 3.1 (Evaluation). 



**argument precedence order** *n.* the order in which the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to a *generic function* are considered when sorting the *applicable methods* into precedence order. 



**around method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> having the <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> :around. 



<DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"array"}><b>array</b></DictionaryLink>, which serves as a container for other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> arranged in a Cartesian coordinate system. 







 



 



**array element type** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) 1. a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> associated with the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, and of which all <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> are constrained to be members. 2. the *actual array element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 3. the *expressed array element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**array total size** *n.* the total number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, computed by taking the product of the <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. (The size of a zero-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is therefore one.) 



**assign** *v.t.* (a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>) to change the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> that has already been *established*. See the *special operator* <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>. 



**association list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *conses* representing an association of <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, where the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> associated with that <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>. 



**asterisk** *n.* the *standard character* that is variously called “asterisk” or “star” (\*). See Figure 2–5. 



**at-sign** *n.* the *standard character* that is variously called “commercial at” or “at sign” (@). See Figure 2–5. 



<DictionaryLink styled={true} term={"atom"}><b>atom</b></DictionaryLink> *n.* any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. “A vector is an atom.” 



**atomic** *adj.* being an <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>. “The number 3, the symbol foo, and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> are atomic.” 



**atomic type specifier** *n.* a *type specifier* that is <GlossaryTerm styled={true} term={"atomic"}><i>atomic</i></GlossaryTerm>. For every *atomic type specifier* , *x*, there is an equivalent *compound type specifier* with no arguments supplied, (*x*). 



**attribute** *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) a program-visible aspect of the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . The only *standardized attribute* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is its <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm><sub>2</sub>, but <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> are permitted to have additional *implementation-defined attributes*. See Section 13.1.3 (Character Attributes). “An implementation that support fonts might make font information an attribute of a character, while others might represent font information separately from characters.” 



**aux variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that occurs in the part of a *lambda list* that was introduced by **&amp;aux**. Unlike all other <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> introduced by a *lambda-list*, *aux variables* are not <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm>. 



**auxiliary method** *n.* a member of one of two sets of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> (the set of *primary methods* is the other) that form an exhaustive partition of the set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 







 



 



**B** 



**backquote** *n.* the *standard character* that is variously called “grave accent” or 



“backquote” (‘). See Figure 2–5. 



**backslash** *n.* the *standard character* that is variously called “reverse solidus” or “backslash” (\). See Figure 2–5. 



**base character** *n.* a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-char"}><b>base-char</b></DictionaryLink>. 



**base string** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"base-string"}><b>base-string</b></DictionaryLink>. 



**before method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> having the <GlossaryTerm styled={true} term={"qualifier"}><i>qualifier</i></GlossaryTerm> :before. 



**bidirectional** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) being both an *input stream* and an *output stream*. 



**binary** *adj.* 1. (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) being a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that has an *element type* that is a 



<GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>. The most fundamental operation on a *binary input stream* is <DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink> and on a *binary output stream* is <DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 2. (of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) having been created by opening a *binary stream*. (It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether this is an detectable aspect of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>, or whether any given *character file* can be treated as a *binary file*.) 



**bind** *v.t.* (a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>) to establish a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. 



**binding** *n.* an association between a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and that which the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> denotes. “A lexical binding is a lexical association between a name and its value.” When the term <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> is qualified by the name of a <GlossaryTerm styled={true} term={"namespace"}><i>namespace</i></GlossaryTerm>, such as “variable” or “function,” it restricts the binding to the indicated namespace, as in: “<DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> establishes variable bindings.” or “<DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> establishes bindings of variables.” 



<DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink>; that is, the *integer* 0 or the *integer* 1. 



**bit array** *n.* a specialized <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (array bit), and whose elements are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink>. 



**bit vector** *n.* a specialized <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit-vector"}><b>bit-vector</b></DictionaryLink>, and whose elements are of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"bit"}><b>bit</b></DictionaryLink>. 



**bit-wise logical operation specifier** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which names one of the sixteen possible bit-wise logical operations that can be performed by the <DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink> function, and which is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of exactly one of the *constant variables* <DictionaryLink styled={true} term={"boole-clr"}><b>boole-clr</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-set"}><b>boole-set</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-1"}><b>boole-1</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-2"}><b>boole-2</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-c1"}><b>boole-c1</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-c2"}><b>boole-c2</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-and"}><b>boole-and</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-ior"}><b>boole-ior</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-xor"}><b>boole-xor</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-eqv"}><b>boole-eqv</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-nand"}><b>boole-nand</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-nor"}><b>boole-nor</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-andc1"}><b>boole-andc1</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-andc2"}><b>boole-andc2</b></DictionaryLink>, <DictionaryLink styled={true} term={"boole-orc1"}><b>boole-orc1</b></DictionaryLink>, or <DictionaryLink styled={true} term={"boole-orc2"}><b>boole-orc2</b></DictionaryLink>. 







 



 



<DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> *n.* a named lexical *exit point<GlossaryTerm styled={true} term={"t"}><i>, </i></GlossaryTerm>established* explicitly by <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> or implicitly by <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>, <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> and **prog**, to which control and values may be transfered by using a <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> with the name of the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm>. 



**block tag** *n.* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that, within the *lexical scope* of a <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, names the *block established* by that <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. See <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>. 



**boa lambda list** *n.* a *lambda list* that is syntactically like an *ordinary lambda list*, but that is processed in “**b**y **o**rder of **a**rgument” style. See Section 3.4.6 (Boa Lambda Lists). 



**body parameter** *n.* a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> available in certain *lambda lists* which from the point of view of *conforming programs* is like a *rest parameter* in every way except that it is introduced by **&amp;body** instead of **&amp;rest**. (<GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> are permitted to provide extensions which distinguish *body parameters* and *rest parameters*—*e.g.*, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> which were defined using a *body parameter* might be pretty printed slightly differently than <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> which were defined using *rest parameters*.) 



<DictionaryLink styled={true} term={"boolean"}><b>boolean</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"boolean"}><b>boolean</b></DictionaryLink>; that is, one of the following <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>: the 



symbol <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> (representing <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>), or the symbol <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (representing <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>). See *generalized boolean*. 



**boolean equivalent** *n.* (of an *object O*<sub>1</sub>) any *object O*<sub>2</sub> that has the same truth value as *O*<sub>1</sub> when both *O*<sub>1</sub> and *O*<sub>2</sub> are viewed as *generalized booleans*. 



**bound** *adj.*, *v.t.* 1. *adj.* having an associated denotation in a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. “The variables named by a <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> are bound within its body.” See <GlossaryTerm styled={true} term={"unbound"}><i>unbound</i></GlossaryTerm>. 2. *adj.* having a local <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> which <GlossaryTerm styled={true} term={"shadow"}><i>shadows</i></GlossaryTerm><sub>2</sub> another. “The variable <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is bound while in the <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink> function.” 3. *v.t.* the past tense of <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm>. 



**bound declaration** *n.* a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> that refers to or is associated with a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and that appears within the *special form* that *establishes* the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, but before the body of that *special form* (specifically, at the head of that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>’s body). (If a *bound declaration* refers to a *function binding* or a *lexical variable binding*, the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is exactly the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. If the 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> refers to a *dynamic variable binding*, the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is what the <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> would have been if it were lexical rather than dynamic.) 



<b>bounded</b> <i>adj.</i> (of a <i>sequence S</i>, by an ordered pair of <i>bounding indices i<sub>start</sub></i> and <i>i<sub>end</sub></i>) restricted to a subrange of the <i>elements</i> of <i>S</i> that includes each <i>element</i> beginning with (and including) the one indexed by <i>i<sub>start</sub></i> and continuing up to (but not including) the one indexed by <i>i<sub>end</sub></i>. 



<b>bounding index</b> <i>n.</i> (of a <i>sequence</i> with <i>length n</i>) either of a conceptual pair of <i>integers</i>, <i>i<sub>start</sub></i> and <i>i<sub>end</sub></i>, respectively called the “lower bounding index” and “upper 







 



 



bounding index”, such that 0 <i>≤ i<sub>start</sub> ≤ i<sub>end</sub> ≤ n</i>, and which therefore delimit a subrange of the <i>sequence bounded</i> by <i>i<sub>start</sub></i> and <i>i<sub>end</sub></i>. 



**bounding index designator** (for a *sequence*) one of two <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that, taken together as an ordered pair, behave as a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for *bounding indices* of the *sequence*; that is, they denote *bounding indices* of the *sequence*, and are either: an *integer* (denoting 



itself) and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (denoting the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the *sequence*), or two *integers* (each denoting themselves). 



**break loop** *n.* A variant of the normal *Lisp read-eval-print loop* that is recursively entered, usually because the ongoing <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of some other <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> has been suspended for the purpose of debugging. Often, a *break loop* provides the ability to exit in such a way as to continue the suspended computation. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink>. 



**broadcast stream** *n.* an *output stream* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"broadcast-stream"}><b>broadcast-stream</b></DictionaryLink>. 



**built-in class** *n.* a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> that is a *generalized instance* of <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>. 



**built-in type** *n.* one of the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> in Figure 4–2. 



<DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink> *n.* 1. adjacent bits within an *integer* . (The specific number of bits can vary from point to point in the program; see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink>.) 2. an integer in a specified range. (The specific range can vary from point to point in the program; see the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> and <DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink>.) 



**byte specifier** *n.* An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature that is returned by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"byte"}><b>byte</b></DictionaryLink> and that specifies the range of bits in an *integer* to be used as a <GlossaryTerm styled={true} term={"byte"}><i>byte</i></GlossaryTerm> by <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink>. 



**C** 



<DictionaryLink styled={true} term={"cadr"}><b>cadr</b></DictionaryLink> [ **ka d*** **r** ], *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**call** *v.t.*, *n.* 1. *v.t.* (a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) to cause the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> represented by that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be *executed* in an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> where <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of its <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> have been *established* based on the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. “Calling the function <DictionaryLink styled={true} term={"+"}><b>+</b></DictionaryLink> with the arguments 5 and 1 yields a value of 6.” 2. *n.* a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> in which a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called. 



**captured initialization form** *n.* an *initialization form* along with the *lexical* 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that defined the *initialization form* was *evaluated*. “Each newly added shared slot is set to the result of evaluating the captured 



initialization form for the slot that was specified in the <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form for the new class.” 







 



 



<DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> *n.* 1. a. (of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>) the component of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> corresponding to the first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>; the other component is the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> . “The function <DictionaryLink styled={true} term={"rplaca"}><b>rplaca</b></DictionaryLink> modifies the car of a cons.” b. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) the first <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is the *empty list*. 2. the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is held in the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> <sub>1</sub>. “The function <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> returns the car of a cons.” 



<DictionaryLink styled={true} term={"case"}><b>case</b></DictionaryLink> *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) the property of being either <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>. Not all <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>. “The characters #\A and #\a have case, but the character #\$ has no case.” See Section 13.1.4.3 (Characters With Case) and the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"both-case-p"}><b>both-case-p</b></DictionaryLink>. 



**case sensitivity mode** *n.* one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> :upcase, :downcase, :preserve, or 



:invert. 



<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> *n.* an *exit point* which is *established* by a <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> within the *dynamic scope* of its body, which is named by a *catch tag*, and to which control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> may be *thrown*. 



**catch tag** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which names an *active catch*. (If more than one <GlossaryTerm styled={true} term={"catch"}><i>catch</i></GlossaryTerm> is active with the same *catch tag*, it is only possible to <GlossaryTerm styled={true} term={"throw"}><i>throw</i></GlossaryTerm> to the innermost such <GlossaryTerm styled={true} term={"catch"}><i>catch</i></GlossaryTerm> because the outer one is *shadowed* <sub>2</sub>.) 



<DictionaryLink styled={true} term={"cddr"}><b>cddr</b></DictionaryLink> [ **k\_ud***  **d*** **r** ] or [ **k***  **d\_ud*** **r** ], *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> [ **k\_u d*** **r** ], *n.* 1. a. (of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>) the component of a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> corresponding to the second <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>; the other component is the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> . “The function <DictionaryLink styled={true} term={"rplacd"}><b>rplacd</b></DictionaryLink> modifies the cdr of a cons.” b. (of a *list L*<sub>1</sub>) either the *list L*<sub>2</sub> that contains the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of *L*<sub>1</sub> that follow after the first, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if *L*<sub>1</sub> is the *empty list*. 2. the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is held in the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> <sub>1</sub>. “The function <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> returns the cdr of a cons.” 



**cell** *n. Trad.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) a conceptual <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The *dynamic variable* and global *function bindings* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> are sometimes referred to as its *value cell* and *function cell*, respectively. 



<DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink> *n.*, *adj.* 1. *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents a unitary token in an aggregate quantity of text; see Section 13.1 (Character Concepts). 2. *adj.* a. (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) having an *element type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. The most fundamental operation on a *character input stream* is <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink> and on a *character output stream* is <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"binary"}><i>binary</i></GlossaryTerm>. b. (of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) having been created by opening a *character stream*. (It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether this is an inspectable aspect of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>, or whether any given *binary file* can be treated as a *character file*.) 



**character code** *n.* 1. one of possibly several <GlossaryTerm styled={true} term={"attribute"}><i>attributes</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 2. a 



non-negative *integer* less than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"char-code-limit"}><b>char-code-limit</b></DictionaryLink> that is suitable for use as a *character code*<sub>1</sub>. 







 



 



**character designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> one (denoting the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is its only <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> (denoting itself). 



**circular** *adj.* 1. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) a *circular list*. 2. (of an arbitrary <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) having a 



*component*, <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm><sub>2</sub>, or <GlossaryTerm styled={true} term={"subexpression"}><i>subexpression</i></GlossaryTerm> (as appropriate to the context) that is the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> itself. 



**circular list** *n.* a chain of *conses* that has no termination because some <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in the chain is the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of a later <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink> *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that uniquely determines the structure and behavior of a set of other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> called its *direct instances*, that contributes structure and behavior to a set of other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> called its *indirect instances*, and that acts as a *type specifier* for a set of objects called its *generalized instances*. “The class <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> is a subclass of the 



class <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>.” (Note that the phrase “the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> foo” is often substituted for the more precise phrase “the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named foo”—in both cases, a *class object* (not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) is denoted.) 2. (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the uniquely determined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of which the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *direct instance*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink>. “The class of the object returned by <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> is <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>.” (Note that with this usage a phrase such as “its <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is foo” is often substituted for the more precise phrase “its <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named foo”—in both cases, a *class object* (not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) is denoted.) 



**class designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>; see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>) or a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> (denoting itself). 



**class precedence list** *n.* a unique total ordering on a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses* that is consistent with the *local precedence orders* for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. For detailed information, see Section 4.3.5 (Determining the Class Precedence List). 



<DictionaryLink styled={true} term={"close"}><b>close</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) to terminate usage of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> as a source or sink of data, permitting the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to reclaim its internal data structures, and to free any external resources which might have been locked by the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> when it was opened. 



**closed** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) having been <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm> (see close). Some (but not all) operations that are valid on *open streams* are not valid on *closed streams*. See Section 21.1.1.1.2 (Open and Closed Streams). 



**closure** *n.* a *lexical closure*. 



**coalesce** *v.t.* (*literal objects* that are <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> ) to consolidate the identity of those <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, such that they become the *same object*. See Section 3.2.1 (Compiler 



Terminology). 







 



 



**code** *n.* 1. *Trad.* any representation of actions to be performed, whether conceptual or as an actual <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, such as <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, *lambda expressions*, *objects* of *type function*, text in a *source file*, or instruction sequences in a *compiled file*. This is a generic term; the specific nature of the representation depends on its context. 2. (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) a *character code*. 



<DictionaryLink styled={true} term={"coerce"}><b>coerce</b></DictionaryLink> *v.t.* (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) to produce an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from the given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, without modifying that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, by following some set of coercion rules that must be specifically stated for any context in which this term is used. The resulting <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is necessarily of the indicated <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, except when that type is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>; in that case, if a *complex rational* with an imaginary part of zero would result, the result is a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> 



rather than a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm>—see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 



**colon** *n.* the *standard character* that is called “colon” (:). See Figure 2–5. 



**comma** *n.* the *standard character* that is called “comma” (,). See Figure 2–5. 



**compilation** *n.* the process of *compiling code* by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . 



**compilation environment** *n.* 1. An <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that represents information known by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> about a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is being *compiled*. See Section 3.2.1 (Compiler Terminology). 2. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents the *compilation environment* <sub>1</sub> and that is used as a second argument to a *macro function* (which supplies a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> for any **&amp;environment** <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> in the *macro function*’s definition). 



**compilation unit** *n.* an interval during which a single unit of compilation is occurring. See the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"with-compilation-unit"}><b>with-compilation-unit</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> *v.t.* 1. (<GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) to perform semantic preprocessing of the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>, usually 



optimizing one or more qualities of the code, such as run-time speed of *execution* or run-time storage usage. The minimum semantic requirements of compilation are that it must remove all macro calls and arrange for all *load time values* to be resolved prior to run time. 2. (a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) to produce a new <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink> which represents the result of *compiling* the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink>. 3. (a *source file*) to produce a *compiled file* from a *source file*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



**compile time** *n.* the duration of time that the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> is processing *source code*. **compile-time definition** *n.* a definition in the *compilation environment*. 



**compiled code** *n.* 1. *compiled functions*. 2. <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that represents *compiled functions*, such as the contents of a *compiled file*. 







 



 



**compiled file** *n.* a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> which represents the results of *compiling* the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> which appeared in a corresponding *source file*, and which can be *loaded*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>. 



**compiled function** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"compiled-function"}><b>compiled-function</b></DictionaryLink>, which is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that has been *compiled*, which contains no references to <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> that must be expanded at run time, and which contains no unresolved references to *load time values*. 



**compiler** *n.* a facility that is part of Lisp and that translates <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> into an 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> form that might be represented or *executed* efficiently. The functions <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> and <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> permit programs to invoke the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> . 



**compiler macro** *n.* an auxiliary macro definition for a globally defined <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> which might or might not be called by any given *conforming implementation* and which must preserve the semantics of the globally defined <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> but 



which might perform some additional optimizations. (Unlike a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, a *compiler macro* does not extend the syntax of Common Lisp; rather, it provides an alternate implementation strategy for some existing syntax or functionality.) 



**compiler macro expansion** *n.* 1. the process of translating a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> into another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> by a *compiler macro*. 2. the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> resulting from this process. 



**compiler macro form** *n.* a *function form* or *macro form* whose <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> has a definition as a *compiler macro*, or a <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> whose first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that has a definition as a *compiler macro*. 



**compiler macro function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and an 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, that implements *compiler macro expansion* by producing either a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be used in place of the original argument <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, indicating that the original <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> should not be replaced. See Section 3.2.2.1 (Compiler Macros). 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink>. 



**complex float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> which has a *complex part type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>. A *complex float* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>. 



**complex part type** *n.* (of a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ) 1. the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is used to represent both the real part and the imaginary part of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 2. the *actual complex part type* of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 3. the *expressed complex part type* of the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> . 



**complex rational** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> which has a *complex part type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>. A *complex rational* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm>. No *complex rational* has an imaginary part of zero because such a number is always represented by Common Lisp as an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>; see Section 12.1.5.3 (Rule of Canonical Representation for Complex Rationals). 







 



 



**complex single float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> which has a *complex part type* that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink>. A *complex single float* is a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , but it is not a *single float*. 



**composite stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is composed of one or more other <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"make-synonym-stream"}><b>make-synonym-stream</b></DictionaryLink> creates a composite stream.” 



**compound form** *n.* a *non-empty list* which is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>: a *special form*, a *lambda form*, a *macro form*, or a *function form*. 



**compound type specifier** *n.* a *type specifier* that is a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>; *i.e.*, a *type specifier* that is not an *atomic type specifier* . “(vector single-float) is a compound type specifier.” 



**concatenated stream** *n.* an *input stream* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"concatenated-stream"}><b>concatenated-stream</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink> *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which represents a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>—usually, but not necessarily, during *signaling*. 2. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>. 



**condition designator** *n.* one or more <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that, taken together, denote either an existing *condition object* or a *condition object* to be implicitly created. For details, see Section 9.1.2.1 (Condition Designators). 



**condition handler** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that might be invoked by the act of *signaling*, that receives the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being signaled as its only argument, and that is permitted to <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> or to <GlossaryTerm styled={true} term={"decline"}><i>decline</i></GlossaryTerm>. See Section 9.1.4.1 (Signaling). 



**condition reporter** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that describes how a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is to be printed when the *Lisp printer* is invoked while <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. See Section 9.1.3 (Printing Conditions). 



**conditional newline** *n.* a point in output where a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> might be inserted at the discretion of the *pretty printer* . There are four kinds of *conditional newlines*, called “linear-style,” “fill-style,” “miser-style,” and “mandatory-style.” See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**conformance** *n.* a state achieved by proper and complete adherence to the 



requirements of this specification. See Section 1.5 (Conformance). 



**conforming code** *n. code* that is all of part of a *conforming program*. 



**conforming implementation** *n.* an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, used to emphasize complete and correct adherance to all conformance criteria. A *conforming implementation* is capable of accepting a *conforming program* as input, preparing that <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> for *execution*, and executing the prepared <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> in accordance with this specification. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> which has been extended may still be a *conforming implementation* 







 



 



provided that no extension interferes with the correct function of any *conforming program*. 



**conforming processor** *n. ANSI* a *conforming implementation*. 



**conforming program** *n.* a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>, used to emphasize the fact that the <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> depends for its correctness only upon documented aspects of Common Lisp, and can therefore be expected to run correctly in any *conforming implementation*. 



**congruent** *n.* conforming to the rules of *lambda list* congruency, as detailed in Section 7.6.4 (Congruent Lambda-lists for all Methods of a Generic Function). 



<DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> *n.v.* 1. *n.* a compound data <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> having two components called the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> . 2. *v.* to create such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 3. *v. Idiom.* to create any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, or to allocate storage. 



**constant** *n.* 1. a *constant form*. 2. a *constant variable*. 3. a *constant object*. 4. a *self-evaluating object*. 



**constant form** *n.* any <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> for which <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> always <GlossaryTerm styled={true} term={"yield"}><i>yields</i></GlossaryTerm> the same <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, that neither affects nor is affected by the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which it is *evaluated* (except that it is permitted to refer to the names of *constant variables* defined in the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>), and that neither affects nor is affected by the state of any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> except those <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are *otherwise inaccessible parts* of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> created by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> itself. “A <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink> form in which the argument is a <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**constant object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is constrained (*e.g.*, by its context in a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> or by the source from which it was obtained) to be <GlossaryTerm styled={true} term={"immutable"}><i>immutable</i></GlossaryTerm>. “A literal object that has been processed by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> is a constant object.” 



**constant variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of which can never change; that 



is, a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub> or a *named constant*. “The symbols <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :direction, and 



<DictionaryLink styled={true} term={"most-positive-fixnum"}><b>most-positive-fixnum</b></DictionaryLink> are constant variables.” 



<b>constituent</b> <i>n.</i>, <i>adj.</i> 1. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is part of a <i>token</i>. For details, see Section 2.1.4.1 (Constituent Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>constituent</i><sub>1<i>a</i></sub> syntax type<sub>2</sub>. c. <i>n.</i> a <i>constituent</i><sub>1<i>b</i></sub> character . 2. <i>n.</i> (of a <i>composite stream</i>) one of possibly several <i>objects</i> that collectively comprise the source or sink of that <i>stream</i>. 



**constituent trait** *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) one of several classifications of a *constituent character* in a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>. See Section 2.1.4.1 (Constituent Characters). 



**constructed stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> whose source or sink is a Lisp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. Note that since a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is another Lisp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *composite streams* are considered *constructed streams*. “A string stream is a constructed stream.” 







 



 



**contagion** *n.* a process whereby operations on <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of differing <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (*e.g.*, 



arithmetic on mixed <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>) produce a result whose <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is controlled by the dominance of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> over the <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> of the other <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. See Section 12.1.1.2 (Contagion in Numeric Operations). 



**continuable** *n.* (of an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm> by the continue restart. 



**control form** *n.* 1. a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that establishes one or more places to which control can be transferred. 2. a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that transfers control. 



<b>copy</b> <i>n.</i> 1. (of a <i>cons C</i>) a <i>fresh cons</i> with the <i>same car</i> and <i>cdr</i> as <i>C</i>. 2. (of a <i>list L</i>) a <i>fresh list</i> with the <i>same elements</i> as <i>L</i>. (Only the <i>list structure</i> is <i>fresh</i>; the <i>elements</i> are the <i>same</i>.) See the <i>function</i> <b>copy-list</b>. 3. (of an <i>association list A</i> with <i>elements A<sub>i</sub></i>) a <i>fresh list B</i> with <i>elements B<sub>i</sub></i>, each of which is <b>nil</b> if <i>A<sub>i</sub></i>is <b>nil</b>, or else a <i>copy</i> of the <i>cons A<sub>i</sub></i>. See the <i>function</i> <b>copy-alist</b>. 4. (of a <i>tree T</i>) a <i>fresh tree</i> with the <i>same</i> 



*leaves* as <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"copy-tree"}><b>copy-tree</b></DictionaryLink>. 5. (of a *random state R*) a *fresh random state* that, if used as an argument to to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink> would produce the same series of “random” values as *R* would produce. 6. (of a *structure S*) a *fresh structure* that has the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as *S*, and that has slot values, each of which is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the corresponding slot value of *S*. (Note that since the difference between a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> is a matter of “view” or “intention,” there can be no general-purpose <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which, based solely on the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, can determine which of these distinct meanings is intended. The distinction rests solely on the basis of the text description within this document. For example, phrases like “a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of the given <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>” or “copy of the *list x*” imply the second definition.) 



**correctable** *adj.* (of an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) 1. (by a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> other than **abort** that has been 



associated with the <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) capable of being corrected by invoking that <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. “The function <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> signals an error that is correctable by the **continue** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>.” (Note that correctability is not a property of an *error object*, but rather a property of the *dynamic environment* that is in effect when the <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> is *signaled*. Specifically, the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is “associated with” the *error condition object*. See Section 9.1.4.2.4 (Associating a Restart with a Condition).) 2. (when no specific <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is mentioned) <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm><sub>1</sub> by at least one <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> signals a correctable error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> if any of the imported symbols has the same name as some distinct symbol already accessible in the package.” 



**current input base** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*read-base\*** in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> employed by the *Lisp reader* and its related <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



**current logical block** *n.* the context of the innermost lexically enclosing use of <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>. 



**current output base** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of 



 



 



**\*print-base\*** in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> employed by the *Lisp printer* and its related <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



**current package** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"package"}><b>\*package\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> employed by the *Lisp reader* and *Lisp printer* , and their related <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>. 



**current pprint dispatch table** *n.* (in a *dynamic environment*) the *pprint dispatch table* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default *pprint dispatch table* employed by the *pretty printer* . 



**current random state** *n.* (in a *dynamic environment*) the *random state* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"random-state"}><b>\*random-state\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that is the default *random state* employed by <DictionaryLink styled={true} term={"random"}><b>random</b></DictionaryLink>. 



**current readtable** *n.* (in a *dynamic environment*) the <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and that affects the way in which <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm><sub>2</sub> are parsed into <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> by the *Lisp reader* . 



**D** 



**data type** *n. Trad.* a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



**debug I/O** *n.* the *bidirectional stream* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> **\*debug-io\***. 



**debugger** *n.* a facility that allows the <GlossaryTerm styled={true} term={"user"}><i>user</i></GlossaryTerm> to handle a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> interactively. For example, the <GlossaryTerm styled={true} term={"debugger"}><i>debugger</i></GlossaryTerm> might permit interactive selection of a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> from among the *active restarts*, and it might perform additional <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> services for the purposes of debugging. 



<DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink> *n.* a *global declaration* or *local declaration*. 



**declaration identifier** *n.* one of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink styled={true} term={"dynamic-extent"}><b>dynamic-extent</b></DictionaryLink>, <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink>, <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>, <DictionaryLink styled={true} term={"optimize"}><b>optimize</b></DictionaryLink>, <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>, or <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink>; or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>; or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> which has been *declared* to be a *declaration identifier* by using a <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



**declaration specifier** *n.* an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> that can appear at top level of a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> expression or a <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> form, or as the argument to <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>, and which has a <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> which is a *declaration identifier* , and which has a <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> that is data interpreted according to rules specific to the *declaration identifier* . 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> *v.* to <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. See <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>. 







 



 



**decline** *v.* (of a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> ) to return normally without having *handled* the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being *signaled*, permitting the signaling process to continue as if the <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> had not been present. 



**decoded time** *n. absolute time*, represented as an ordered series of nine <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which, taken together, form a description of a point in calendar time, accurate to the nearest second (except that *leap seconds* are ignored). See Section 25.1.4.1 (Decoded Time). 



**default method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> having no *parameter specializers* other than the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. Such a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is always an *applicable method* but might be *shadowed* <sub>2</sub> by a more specific <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. 



**defaulted initialization argument list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of alternating initialization 



argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> in which unsupplied initialization arguments are 



defaulted, used in the protocol for initializing and reinitializing <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. 



**define-method-combination arguments lambda list** *n.* a *lambda list* used 



by the :arguments option to <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>. See Section 3.4.10 



(Define-method-combination Arguments Lambda Lists). 



**define-modify-macro lambda list** *n.* a *lambda list* used by <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>. See Section 3.4.9 (Define-modify-macro Lambda Lists). 



**defined name** *n.* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> the meaning of which is defined by Common Lisp. 



**defining form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that has the side-effect of *establishing* a definition. “<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> and <DictionaryLink styled={true} term={"defparameter"}><b>defparameter</b></DictionaryLink> are defining forms.” 



**defsetf lambda list** *n.* a *lambda list* that is like an *ordinary lambda list* except that it does not permit **&amp;aux** and that it permits use of **&amp;environment**. See Section 3.4.7 (Defsetf Lambda Lists). 



**deftype lambda list** *n.* a *lambda list* that is like a *macro lambda list* except that the default <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> for unsupplied *optional parameters* and *keyword parameters* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** (rather than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). See Section 3.4.8 (Deftype Lambda Lists). 



**denormalized** *adj.*, *ANSI*, *IEEE* (of a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>) conforming to the description of 



“denormalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. For example, in an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> where the minimum possible exponent was -7 but where 0.001 was a valid mantissa, the number 1.0e-10 might be representable as 0.001e-7 internally even if the <GlossaryTerm styled={true} term={"normalized"}><i>normalized</i></GlossaryTerm> representation would call for it to 



be represented instead as 1.0e-10 or 0.1e-9. By their nature, *denormalized floats* generally have less precision than *normalized floats*. 







 



 



**derived type** *n.* a *type specifier* which is defined in terms of an expansion into 



another *type specifier* . <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> defines *derived types*, and there may be other 



*implementation-defined operators* which do so as well. 



**derived type specifier** *n.* a *type specifier* for a *derived type*. 



**designator** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes another <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. In the dictionary entry for an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> if a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is described as a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, the description of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is written in a way that assumes that appropriate coercion to that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> has 



already occurred; that is, that the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is already of the denoted <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. For more detailed information, see Section 1.4.1.5 (Designators). 



**destructive** *adj.* (of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> ) capable of modifying some program-visible aspect of one or more <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are either explicit <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> or that can be obtained directly or indirectly from the *global environment* by the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> . 



**destructuring lambda list** *n.* an *extended lambda list* used in <DictionaryLink styled={true} term={"destructuring-bind"}><b>destructuring-bind</b></DictionaryLink> and nested within *macro lambda lists*. See Section 3.4.5 (Destructuring Lambda Lists). 



**different** *adj.* not the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> “The strings "FOO" and "foo" are different under <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink> but not under <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>.” 



**digit** *n.* (in a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> ) a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is among the possible digits (0 to 9, A to Z, and a to z) and that is defined to have an associated numeric weight as a digit in that <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . See Section 13.1.4.6 (Digits in a Radix). 



**dimension** *n.* 1. a non-negative *integer* indicating the number of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> can hold along one axis. If the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , the *fill pointer* is ignored. “The second dimension of that array is 7.” 2. an axis of an array. “This array has six dimensions.” 



**direct instance** *n.* (of a *class C*) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is *C* itself, rather than some <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*. “The function <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> always returns a direct instance of the class which is (or is named by) its first argument.” 



**direct subclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub>, such that *C*<sub>1</sub> is a *direct superclass* of *C*<sub>2</sub>. 



**direct superclass** *n.* (of a *class C*<sub>1</sub>) a *class C*<sub>2</sub> which was explicitly designated as a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of *C*<sub>1</sub> in the definition of *C*<sub>1</sub>. 



**disestablish** *v.t.* to withdraw the *establishment* of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> , a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 



**disjoint** *n.* (of <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm>) having no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in common. 







 



 



**dispatching macro character** *n.* a *macro character* that has an associated table that specifies the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be called for each <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is seen following the *dispatching macro character* . See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-dispatch-macro-character"}><b>make-dispatch-macro-character</b></DictionaryLink>. 



**displaced array** *n.* an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> which has no storage of its own, but which is instead indirected to the storage of another <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, called its <GlossaryTerm styled={true} term={"target"}><i>target</i></GlossaryTerm>, at a specified offset, in such a way that any attempt to <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the *displaced array* implicitly references the *target array*. 



**distinct** *adj.* not <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm>. 



**documentation string** *n.* (in a defining <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) A *literal string* which because of the context in which it appears (rather than because of some intrinsically observable aspect of the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) is taken as documentation. In some cases, the *documentation string* is saved in such a way that it can later be obtained by supplying either an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, or by supplying a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and a “kind” to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **documentation**. “The body of code in a <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> form can be preceded by a documentation string of kind <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>.” 



**dot** *n.* the *standard character* that is variously called “full stop,” “period,” or “dot” (.). See Figure 2–5. 



**dotted list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which has a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> that is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. (An <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> by itself is not a *dotted list*, however.) 



**dotted pair** *n.* 1. a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"non-list"}><i>non-list</i></GlossaryTerm>. 2. any <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, used to emphasize the use of the <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> as a symmetric data pair. 



**double float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink>. 



**double-quote** *n.* the *standard character* that is variously called “quotation mark” or “double quote” ("). See Figure 2–5. 



**dynamic binding** *n.* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in a *dynamic environment*. 



**dynamic environment** *n.* that part of an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> 



with *dynamic extent*. A *dynamic environment* contains, among other things: *exit points* established by <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>, and <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of *dynamic variables*, *exit points* established by <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink>, *condition handlers*, and <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>. 



**dynamic extent** *n.* an <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> whose duration is bounded by points of *establishment* and *disestablishment* within the execution of a particular <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. See *indefinite extent*. “Dynamic variable bindings have dynamic extent.” 



**dynamic scope** *n. indefinite scope* along with *dynamic extent*. 







 



 



**dynamic variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which is in the *dynamic environment*. See <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>. 



**E** 



**echo stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"echo-stream"}><b>echo-stream</b></DictionaryLink>. 



**effective method** *n.* the combination of *applicable methods* that are executed when a *generic function* is invoked with a particular sequence of <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



**element** *n.* 1. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of one of the *conses* that comprise the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 2. (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is stored in the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 3. (of a *sequence*) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> that is the *sequence*. 4. (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is a member of the set of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> designated by the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 5. (of an <GlossaryTerm styled={true} term={"input"}><i>input</i></GlossaryTerm> 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> (as appropriate to the *element type* of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) that is among the ordered series of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that can be read from the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> (using <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink> or <DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink>, as appropriate to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>). 6. (of an *output stream*) a 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> (as appropriate to the *element type* of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) that is among the ordered series of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that has been or will be written to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> (using <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> or <DictionaryLink styled={true} term={"write-byte"}><b>write-byte</b></DictionaryLink>, as appropriate to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>). 7. (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a *generalized instance* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



**element type** *n.* 1. (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) the *array element type* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 2. (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) the *stream element type* of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**em** *n. Trad.* a context-dependent unit of measure commonly used in typesetting, equal to the displayed width of of a letter “M” in the current font. (The letter “M” is traditionally chosen because it is typically represented by the widest <GlossaryTerm styled={true} term={"glyph"}><i>glyph</i></GlossaryTerm> in the font, and other characters’ widths are typically fractions of an <GlossaryTerm styled={true} term={"em"}><i>em</i></GlossaryTerm>. In implementations providing non-Roman characters with wider characters than “M,” it is permissible for another character to be the <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> reference character for this measure, and for “M” to be only a fraction of an <GlossaryTerm styled={true} term={"em"}><i>em</i></GlossaryTerm> wide.) In a fixed width font, a line with *n* characters is *n ems* wide; in a variable width font, *n ems* is the expected upper bound on the width of such a line. 



**empty list** *n.* the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> containing no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>. See *()*. 



**empty type** *n.* the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that contains no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>, and that is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (including itself). See <GlossaryTerm styled={true} term={"nil"}><i>nil</i></GlossaryTerm>. 



**end of file** *n.* 1. the point in an *input stream* beyond which there is no further data. Whether or not there is such a point on an *interactive stream* is *implementation defined*. 2. a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> that occurs upon an attempt to obtain data from an *input stream* that is at the *end of file*<sub>1</sub>. 







 



 



**environment** *n.* 1. a set of <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. See Section 3.1.1 (Introduction to Environments). 2. an *environment object*. “<DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> takes an optional environment argument.” 



**environment object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> representing a set of *lexical bindings*, used in the processing of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to provide meanings for <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> within that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"macroexpand"}><b>macroexpand</b></DictionaryLink> takes an optional environment argument.” (The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> when used as an *environment object* denotes the *null lexical environment*; the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of *environment parameters* to *macro functions* are <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature which represent the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm><sub>1</sub> in which the corresponding *macro form* is to be expanded.) See Section 3.1.1.4 (Environment Objects). 



**environment parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> in a *defining form f* for which there is no corresponding <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>; instead, this <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> receives as its value an *environment object* which corresponds to the *lexical environment* in which the *defining form f* appeared. 



<DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> *n.* 1. (only in the phrase “is an error”) a <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> in which the semantics of a program are not specified, and in which the consequences are undefined. 2. a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> which represents an *error situation*. See Section 1.4.2 (Error Terminology). 3. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**error output** *n.* the *output stream* which is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *dynamic variable* 



**\*error-output\***. 



**escape** *n.*, *adj.* 1. *n.* a *single escape* or a *multiple escape*. 2. *adj. single escape* or *multiple escape*. 



**establish** *v.t.* to build or bring into being a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> , a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> establishes lexical bindings.” 



**evaluate** *v.t.* (a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or an *implicit progn*) to <GlossaryTerm styled={true} term={"execute"}><i>execute</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (or the series of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> making up the *implicit progn*) by applying the rules of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>, returning zero or more values. 



**evaluation** *n.* a model whereby <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are *executed*, returning zero or more values. Such execution might be implemented directly in one step by an interpreter or in two steps by first *compiling* the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and then *executing* the *compiled code*; this choice is dependent both on context and the nature of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, but in any case is not in general detectable by any program. The evaluation model is designed in such a way that a *conforming implementation* might legitimately have only a compiler and no interpreter, or vice versa. See Section 3.1.2 (The Evaluation Model). 



**evaluation environment** *n.* a *run-time environment* in which macro expanders and code specified by <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> to be evaluated are evaluated. All evaluations initiated by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> take place in the *evaluation environment*. 







 



 



**execute** *v.t. Trad.* (<GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) to perform the imperative actions represented by the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. **execution time** *n.* the duration of time that *compiled code* is being *executed*. 



**exhaustive partition** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a set of *pairwise disjoint types* that form an *exhaustive union*. 



**exhaustive union** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a set of <GlossaryTerm styled={true} term={"subtype"}><i>subtypes</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, whose union contains all <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



**exit point** *n.* a point in a *control form* from which (*e.g.*, <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>), through which (*e.g.*, <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink>), or to which (*e.g.*, <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>) control and possibly <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> can be transferred both actively by using another *control form* and passively through the normal control and data flow of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. “<DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> and <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> establish bindings for exit points to which <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> and <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, respectively, can transfer control and values; <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> establishes a binding for an exit point with lexical extent to which <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> can transfer control; and <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> establishes an exit point through which control might be transferred by operators such as <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, and <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>.” 



**explicit return** *n.* the act of transferring control (and possibly <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) to a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> by using <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> (or <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>). 



**explicit use** *n.* (of a *variable V* in a *form F*) a reference to *V* that is directly apparent in the normal semantics of *F*; *i.e.*, that does not expose any undocumented details of the *macro expansion* of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> itself. References to *V* exposed by expanding <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of *F* are, however, considered to be *explicit uses* of *V* . 



**exponent marker** *n.* a character that is used in the textual notation for a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> to separate the mantissa from the exponent. The characters defined as *exponent markers* in the *standard readtable* are shown in Figure 26–1. For more information, see Section 2.1 (Character Syntax). “The exponent marker ‘d’ in ‘3.0d7’ indicates that this 



number is to be represented as a double float.” 



|**Marker Meaning**|

| :- |

|<p>D or d <DictionaryLink styled={true} term={"double-float"}><b>double-float</b></DictionaryLink> </p><p>E or e <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> (see <DictionaryLink styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>) </p><p>F or f <DictionaryLink styled={true} term={"single-float"}><b>single-float</b></DictionaryLink> </p><p>L or l <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink> </p><p>S or s <DictionaryLink styled={true} term={"short-float"}><b>short-float</b></DictionaryLink></p>|





**Figure 26–1. Exponent Markers** 



<DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to add the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> to the list of *external symbols* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 







 



 



**exported** *adj.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) being an *external symbol* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**expressed adjustability** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) a *generalized boolean* that is conceptually (but not necessarily actually) associated with the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, representing whether the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> is *expressly adjustable*. See also *actual adjustability*. 



**expressed array element type** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is the *array element type* implied by a *type declaration* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, or which is the requested <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> 



*element type* at its time of creation, prior to any selection of an *upgraded array element type*. (Common Lisp does not provide a way of detecting this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> directly at run time, but an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to make assumptions about the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>’s contents and the operations which may be performed on the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> when this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded array element type* of the *expressed array element type*.) 



**expressed complex part type** *n.* (of a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ) the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is implied as the *complex part type* by a *type declaration* for the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> , or which is the requested *complex part type* at its time of creation, prior to any selection of an *upgraded complex part type*. (Common Lisp does not provide a way of detecting this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> directly at run time, but an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to make assumptions about the operations which may be performed on the <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> when this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is noted during code analysis, even if those assumptions would not be valid in general for the *upgraded complex part type* of the *expressed complex part type*.) 



**expression** *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, often used to emphasize the use of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to encode or represent information in a specialized format, such as program text. “The second expression in a <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> form is a list of bindings.” 2. the textual notation used to notate an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in a source file. “The expression ’sample is equivalent to (quote sample).” 



**expressly adjustable** *adj.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) being *actually adjustable* by virtue of an explicit request for this characteristic having been made at the time of its creation. All <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm> that are *expressly adjustable* are *actually adjustable*, but not necessarily vice versa. 



**extended character** *n.* a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"extended-char"}><b>extended-char</b></DictionaryLink>: a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is not a *base character* . 



**extended function designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and that is one of: a *function name* (denoting the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> it names in the *global environment*), or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (denoting itself). The consequences are undefined if a *function name* is used as an *extended function designator* but it does not have a global definition as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, or if it is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that has a global definition as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special form*. See also *function designator* . 



**extended lambda list** *n.* a list resembling an *ordinary lambda list* in form and 







 



 



purpose, but offering additional syntax or functionality not available in an *ordinary lambda list*. “<DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> uses extended lambda lists.” 



**extension** *n.* a facility in an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> of Common Lisp that is not specified by this standard. 



**extent** *n.* the interval of time during which a <GlossaryTerm styled={true} term={"reference"}><i>reference</i></GlossaryTerm> to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> , a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> is defined. 



**external file format** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature which 



determines one of possibly several <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> ways in which <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are encoded externally in a *character file*. 



**external file format designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for an *external file format*; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes an *external file format* and that is one of: the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> 



:default (denoting an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> default *external file format* that can accomodate at least the *base characters*), some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the 



<GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *external file format designator* (denoting an *implementation defined external file format*), or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *external file format* (denoting itself). 



**external symbol** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is part of the ‘external interface’ to the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and that are *inherited* <sub>3</sub> by any other <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"use"}><i>uses</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. When using the *Lisp reader* , if a *package prefix* is used, the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of an *external symbol* is separated from the *package name* by a single *package marker* while the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of an *internal symbol* is separated from the *package name* by a double *package marker* ; see Section 2.3.4 (Symbols as Tokens). 



**externalizable object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that can be used as a *literal object* in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> to be processed by the *file compiler* . 



**F** 



**false** *n.* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, used to represent the failure of a <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> test. 



**fbound** [ **ef ba\_und** ] *adj.* (of a *function name*) *bound* in the *function namespace*. (The <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> and *special operators* are <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, but the nature and <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is their <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Further, defining a *setf expander F* does not cause the *setf function* (setf *F*) to become defined; as such, if 



there is a such a definition of a *setf expander F*, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (setf *F*) can be <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm> if and only if, by design or coincidence, a function binding for (setf *F*) has been independently established.) See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"fboundp"}><b>fboundp</b></DictionaryLink> and <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. 



**feature** *n.* 1. an aspect or attribute of Common Lisp, of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, or of the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm><sub>1</sub>. See Section 24.1.2 (Features). “The :ansi-cl feature is present in all conforming implementations.” 







 



 



**feature expression** *n.* A boolean combination of <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> used by the #+ and #- *reader macros* in order to direct conditional *reading* of <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> by the *Lisp reader* . See Section 24.1.2.1 (Feature Expressions). 



**features list** *n.* the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink>. 



**file** *n.* a named entry in a *file system*, having an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> nature. 



**file compiler** *n.* any <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> which *compiles source code* contained in a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>, producing a *compiled file* as output. The <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> function is the only interface to such a <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> provided by Common Lisp, but there might be other, <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> mechanisms for invoking the *file compiler* . 



**file position** *n.* (in a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a non-negative *integer* that represents a position in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. Not all <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> are able to represent the notion of *file position*; in the description of any <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> which manipulates *file positions*, the behavior for <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> that don’t have this notion must be explicitly stated. For *binary streams*, the *file position* represents the number of preceding <GlossaryTerm styled={true} term={"byte"}><i>bytes</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. For *character streams*, the constraint is more relaxed: *file positions* must increase monotonically, the amount of the increase between *file positions* corresponding to any two successive characters in the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**file position designator** *n.* (in a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *file position* in that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>; that is, the symbol :start (denoting 0, the first *file position* in that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>), the symbol :end (denoting the last *file position* in that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>; *i.e.*, the position 



following the last <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>), or a *file position* (denoting itself). 



**file stream** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-stream"}><b>file-stream</b></DictionaryLink>. 



**file system** *n.* a facility which permits aggregations of data to be stored in named <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> on some medium that is external to the *Lisp image* and that therefore persists from <GlossaryTerm styled={true} term={"session"}><i>session</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"session"}><i>session</i></GlossaryTerm>. 



**filename** *n.* a handle, not necessarily ever directly represented as an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, that can be used to refer to a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> in a *file system*. *Pathnames* and <GlossaryTerm styled={true} term={"namestring"}><i>namestrings</i></GlossaryTerm> are two kinds of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that substitute for <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> in Common Lisp. 



**fill pointer** *n.* (of a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> ) an *integer* associated with a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> that represents the index above which no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"active"}><i>active</i></GlossaryTerm>. (A *fill pointer* is a non-negative *integer* no larger than the total number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . Not all <GlossaryTerm styled={true} term={"vector"}><i>vectors</i></GlossaryTerm> have *fill pointers*.) 



**finite** *adj.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) having a finite number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>. “The type specifier 



(integer 0 5) denotes a finite type, but the type specifiers <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> and (integer 0) do not.” 







 



 



<DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink> *n.* an *integer* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink>. 



**for-value** *adj.* (of a <GlossaryTerm styled={true} term={"reference"}><i>reference</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>) being a <GlossaryTerm styled={true} term={"reference"}><i>reference</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm><sub>1</sub> the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 



**form** *n.* 1. any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> meant to be *evaluated*. 2. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, a *compound form*, or a *self-evaluating object*. 3. (for an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> , as in “⟨operator ii form*”) a *compound form* having that <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> as its first element. “A <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> form is a constant form.” 



**formal argument** *n. Trad.* a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> . 



**formal parameter** *n. Trad.* a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> . 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> *v.t.* (a *format control* and *format arguments*) to perform output as if by <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>, using the *format string* and *format arguments*. 



**format argument** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is used as data by functions such as <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> which interpret *format controls*. 



**format control** *n.* a *format string*, or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that obeys the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> conventions for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> returned by the <DictionaryLink styled={true} term={"formatter"}><b>formatter</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. See Section 22.2.1.3 (Compiling Format Strings). 



**format directive** *n.* 1. a sequence of <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in a *format string* which is introduced by a *tilde*, and which is specially interpreted by <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> which processes *format strings* to mean that some special operation should be performed, possibly involving data supplied by the *format arguments* that accompanied the *format string*. See the 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>. “In "&#126;D base 10 = &#126;8R", the character sequences ‘&#126;D’ and ‘&#126;8R’ are format directives.” 2. the conceptual category of all *format directives*<sub>1</sub> which use the same dispatch character. “Both "&#126;3d" and "&#126;3,’0D" are valid uses of the ‘&#126;D’ format directive.” 



**format string** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> which can contain both ordinary text and *format directives*, and which is used in conjunction with *format arguments* to describe how text output should be formatted by certain functions, such as <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>. 



**free declaration** *n.* a declaration that is not a *bound declaration*. See <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>. 



**fresh** *adj.* 1. (of an *object yielded* by a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) having been newly-allocated by that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. (The caller of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that returns a *fresh object* may freely modify the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> without fear that such modification will compromise the future correct behavior of that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>.) 2. (of a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>) newly-allocated; not shared with other <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> for that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 







 



 



**freshline** *n.* a conceptual operation on a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, implemented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink> and by the *format directive* &#126;&amp;, which advances the display position to the beginning of the next line (as if a <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> had been typed, or the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> had been called) unless the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is already known to be positioned at the beginning of a line. Unlike <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"freshline"}><i>freshline</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**funbound** [ **efunba\_und** ] *n.* (of a *function name*) not <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *n.* 1. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> representing code, which can be *called* with zero or more <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, and which produces zero or more <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 2. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. 



**function block name** *n.* (of a *function name*) The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that would be used as the name of an *implicit block* which surrounds the body of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> having that *function name*. If the *function name* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, its *function block name* is the *function name* itself. If the *function name* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> and whose <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, 



its *function block name* is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> of the *function name*. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> which supports additional kinds of *function names* must specify for each how the corresponding *function block name* is computed. 



**function cell** *n. Trad.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> which holds the *definition* of the global *function binding*, if any, named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and which is *accessed* by <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"cell"}><i>cell</i></GlossaryTerm>. 



**function designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and that is one of: a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (denoting the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the *global environment*), or a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (denoting itself). The consequences are undefined if a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is used as a *function designator* but it does not have a global definition as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, or it has a global definition as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or a *special form*. See also *extended function designator* . 



**function form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and that has a first element which is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be called on <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> which are the result of *evaluating* subsequent elements of the *function form*. 



**function name** *n.* 1. (in an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>) A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) that is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 2. A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**functional evaluation** *n.* the process of extracting a *functional value* from a *function name* or a *lambda expression*. The evaluator performs *functional evaluation* implicitly when it encounters a *function name* or a *lambda expression* in the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of a *compound form*, or explicitly when it encounters a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*. Neither a use of a 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> as a *function designator* nor a use of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> to extract the *functional value* of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is considered a *functional evaluation*. 



**functional value** *n.* 1. (of a *function name N* in an *environment E*) The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> named *N* in the *function namespace* for *environment E*; that is, the 







 



 



contents of the *function cell* named *N* in *environment E*. 2. (of an *fbound symbol S*) the contents of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *function cell*; that is, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> named *S* in the *function namespace* of the *global environment*. (A <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is a *macro name* in the *global environment* or is a *special operator* might or might not be <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. But if *S* is such a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>, the specific nature of its *functional value* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; in particular, it might or might not be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>.) 



**further compilation** *n. implementation-dependent* compilation beyond *minimal compilation*. Further compilation is permitted to take place at *run time*. “Block compilation and generation of machine-specific instructions are examples of further compilation.” 



**G** 



**general** *adj.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) having *element type* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, and consequently able to have any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. 



**generalized boolean** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> used as a truth value, where the symbol <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



represents <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and all other <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> represent <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm>. 



**generalized instance** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of which is either that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> itself, or some subclass of that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. (Because of the correspondence between types and classes, the term “generalized instance of *X*” implies “object of type *X*” and in cases where *X* is a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> (or *class name*) the reverse is also true. The former terminology emphasizes the view of *X* as a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> while the latter emphasizes the view of *X* as a *type specifier* .) 



**generalized reference** *n.* a reference to a location storing an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as if to a 



<GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. (Such a reference can be either to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> the location.) See Section 5.1 (Generalized Reference). See also <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**generalized synonym stream** *n.* (with a *synonym stream symbol*) 1. (to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) a *synonym stream* to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or a *composite stream* which has as a target a 



*generalized synonym stream* to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 2. (to a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) a *synonym stream* to the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or a *composite stream* which has as a target a *generalized synonym stream* to the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**generic function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> whose behavior depends on the *classes* or identities of the arguments supplied to it and whose parts include, among other things, a set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, a *lambda list*, and a *method combination* type. 



**generic function lambda list** *n.* A *lambda list* that is used to describe data flow into a *generic function*. See Section 3.4.2 (Generic Function Lambda Lists). 



<DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink> *n. Trad.* an *uninterned symbol*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink>. 







 



 



**global declaration** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that makes certain kinds of information about code globally available; that is, a <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> or a <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**global environment** *n.* that part of an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> with *indefinite scope* and *indefinite extent*. 



**global variable** *n.* a *dynamic variable* or a *constant variable*. 



**glyph** *n.* a visual representation. “Graphic characters have associated glyphs.” 



<DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> *v.* to transfer control to a *go point*. See the *special operator* <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>. 



**go point** one of possibly several *exit points* that are *established* by <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> (or other abstractions, such as **prog**, which are built from <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>). 



**go tag** *n.* the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or *integer* that, within the *lexical scope* of a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, names an *exit point established* by that <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**graphic** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being a “printing” or “displayable” <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that has a standard visual representation as a single <GlossaryTerm styled={true} term={"glyph"}><i>glyph</i></GlossaryTerm>, such as A or \* or =. <GlossaryTerm styled={true} term={"space"}><i>Space</i></GlossaryTerm> is defined to be <GlossaryTerm styled={true} term={"graphic"}><i>graphic</i></GlossaryTerm>. Of the *standard characters*, all but <GlossaryTerm styled={true} term={"newline"}><i>newline</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"graphic"}><i>graphic</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"non-graphic"}><i>non-graphic</i></GlossaryTerm>. 



**H** 



**handle** *v.* (of a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being *signaled*) to perform a non-local transfer of control, terminating the ongoing *signaling* of the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



**handler** *n.* a *condition handler* . 



**hash table** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"hash-table"}><b>hash-table</b></DictionaryLink>, which provides a mapping from <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 



**home package** *n.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, if any, which is contents of the *package cell* of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and which dictates how the *Lisp printer* prints the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> when it is not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the *current package*. (<GlossaryTerm styled={true} term={"symbol"}><i>Symbols</i></GlossaryTerm> which have <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> in their *package cell* are said to have no *home package*, and also to be *apparently uninterned*.) 



**I** 



**I/O customization variable** *n.* one of the *stream variables* in Figure 26–2, or some other (<GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) *stream variable* that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *I/O customization variable*. 







 



 



|<p>\*debug-io\* \*error-io\* query-io\* </p><p>\*standard-input\* \*standard-output\* \*trace-output\*</p>|

| :- |





**Figure 26–2. Standardized I/O Customization Variables** 



**identical** *adj.* the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink>. 



**identifier** *n.* 1. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> used to identify or to distinguish <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> used the same way. 



**immutable** *adj.* not subject to change, either because no <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is provided which is capable of effecting such change or because some constraint exists which prohibits the use of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> that might otherwise be capable of effecting such a change. Except as explicitly indicated otherwise, <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> are not required to detect attempts to modify *immutable objects* or <GlossaryTerm styled={true} term={"cell"}><i>cells</i></GlossaryTerm>; the consequences of attempting to make such 



modification are undefined. “Numbers are immutable.” 



**implementation** *n.* a system, mechanism, or body of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that implements the semantics of Common Lisp. 



**implementation limit** *n.* a restriction imposed by an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



**implementation-defined** *adj. implementation-dependent*, but required by this 



specification to be defined by each *conforming implementation* and to be documented by the corresponding implementor. 



**implementation-dependent** *adj.* describing a behavior or aspect of Common 



Lisp which has been deliberately left unspecified, that might be defined in some 



*conforming implementations* but not in others, and whose details may differ between <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>. A *conforming implementation* is encouraged (but not required) to document its treatment of each item in this specification which is marked 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, although in some cases such documentation might simply identify the item as “undefined.” 



**implementation-independent** *adj.* used to identify or emphasize a behavior or aspect of Common Lisp which does not vary between *conforming implementations*. 



**implicit block** *n.* a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> introduced by a *macro form* rather than by an explicit <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**implicit compilation** *n. compilation* performed during <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. 



**implicit progn** *n.* an ordered set of adjacent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> appearing in another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and defined by their context in that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be executed as if within a <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink>. 







 



 



**implicit tagbody** *n.* an ordered set of adjacent <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> and/or <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> appearing in another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and defined by their context in that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be executed as if within a <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> into a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to make the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. **improper list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which is not a *proper list*: a *circular list* or a *dotted list*. 



**inaccessible** *adj.* not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm>. 



**indefinite extent** *n.* an <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> whose duration is unlimited. “Most Common Lisp objects have indefinite extent.” 



**indefinite scope** *n. scope* that is unlimited. 



**indicator** *n.* a *property indicator* . 



**indirect instance** *n.* (of a *class C*<sub>1</sub>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of *class C*<sub>2</sub>, where *C*<sub>2</sub> is a <GlossaryTerm styled={true} term={"subclass"}><i>subclass</i></GlossaryTerm> of *C*<sub>1</sub>. “An integer is an indirect instance of the class <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>.” 



**inherit** *v.t.* 1. to receive or acquire a quality, trait, or characteristic; to gain access to a feature defined elsewhere. 2. (a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) to acquire the structure and behavior defined by a <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm>. 3. (a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to make *symbols exported* by another *package accessible* by using <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>. 



**initial pprint dispatch table** *n.* the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> at the time the *Lisp image* is started. 



**initial readtable** *n.* the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"readtable"}><b>\*readtable\*</b></DictionaryLink> at the time the *Lisp image* is started. 



**initialization argument list** *n.* a *property list* of initialization argument <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> used in the protocol for initializing and reinitializing <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of *classes*. See Section 7.1 (Object Creation and Initialization). 



**initialization form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> used to supply the initial <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. “The initialization form for a slot in a <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form is introduced by the keyword :initform.” 



**input** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) supporting input operations (*i.e.*, being a “data source”). An *input stream* might also be an *output stream*, in which case it is sometimes called a *bidirectional stream*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **input-stream-p**. 



**instance** *n.* 1. a *direct instance*. 2. a *generalized instance*. 3. an *indirect instance*. <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>, which represents a mathematical integer. 







 



 



**interactive stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> on which it makes sense to perform interactive 



querying. See Section 21.1.1.1.3 (Interactive Streams). 



<DictionaryLink styled={true} term={"intern"}><b>intern</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to look up the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, returning either a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> which was already <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> or a newly created *internal symbol* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 2. *Idiom.* generally, to observe a protocol whereby objects which are equivalent or have equivalent names under some predicate defined by the protocol are mapped to a single canonical object. 



**internal symbol** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) a symbol which is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, but which is not an *external symbol* of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**internal time** *n. time*, represented as an *integer* number of *internal time units*. *Absolute internal time* is measured as an offset from an arbitrarily chosen, 



<GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> base. See Section 25.1.4.3 (Internal Time). 



**internal time unit** *n.* a unit of time equal to 1*/n* of a second, for some *implementation defined integer* value of *n*. See the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"internal-time-units-per-second"}><b>internal-time-units-per-second</b></DictionaryLink>. 



**interned** *adj. Trad.* 1. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm><sub>3</sub> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 2. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a specific <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**interpreted function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is not a *compiled function*. (It is possible for there to be a *conforming implementation* which has no *interpreted functions*, but a *conforming program* must not assume that all <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> are *compiled functions*.) 



**interpreted implementation** *n.* an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that uses an execution strategy for *interpreted functions* that does not involve a one-time semantic analysis pre-pass, and instead uses “lazy” (and sometimes repetitious) semantic analysis of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> as they are encountered during execution. 



**interval designator** *n.* (of *type T*) an ordered pair of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that describe a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm> by delimiting an interval on the real number line. See Section 12.1.6 (Interval Designators). 



**invalid** *n.*, *adj.* 1. *n.* a possible *constituent trait* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> which if present signifies that the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> cannot ever appear in a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> except under the control of a *single escape character* . For details, see Section 2.1.4.1 (Constituent Characters). 2. *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that has *syntax type constituent* in the *current readtable* and that has the *constituent trait invalid* <sub>1</sub>. See Figure 2–8. 



**iteration form** *n.* a *compound form* whose <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is named in Figure 26–3, or a *compound form* that has an *implementation-defined operator* and that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be an *iteration form*. 







 



 



|<p>**do do-external-symbols dotimes do\* do-symbols loop** </p><p>**do-all-symbols dolist**</p>|

| :- |





**Figure 26–3. Standardized Iteration Forms** 



**iteration variable** *n.* a *variable V* , the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which was created by an *explicit use* of *V* in an *iteration form*. 



**K** 



**key** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> used for selection during retrieval. See *association list<GlossaryTerm styled={true} term={"t"}><i>, </i></GlossaryTerm>property list*, and *hash table*. Also, see Section 17.1 (Sequence Concepts). 



<DictionaryLink styled={true} term={"keyword"}><b>keyword</b></DictionaryLink> *n.* 1. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> the *home package* of which is the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 2. 



any <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, usually but not necessarily in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, that is used as an identifying marker in keyword-style argument passing. See <DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink>. 3. *Idiom.* a *lambda list keyword*. 



**keyword parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding keyword <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is optional. (There is no such thing as a required keyword <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>.) If the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not supplied, a default value is used. See also *supplied-p parameter* . 



**keyword/value pair** *n.* two successive <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> (a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, respectively) of a *property list*. 



**L** 



**lambda combination** *n. Trad.* a *lambda form*. 



**lambda expression** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> which can be used in place of a *function name* in certain contexts to denote a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> by directly describing its behavior rather than indirectly by referring to the name of an *established function*; its name derives from the fact that its first element is the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> lambda. See <DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink>. 



**lambda form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and that has a first element which is a *lambda expression* representing a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be called on <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> which are the result of *evaluating* subsequent elements of the *lambda form*. 



**lambda list** *n.* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that specifies a set of <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> (sometimes called *lambda variables*) and a protocol for receiving <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> for those <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm>; that is, an *ordinary lambda list*, an *extended lambda list*, or a *modified lambda list*. 







 



 



**lambda list keyword** *n.* a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> begins with <GlossaryTerm styled={true} term={"ampersand"}><i>ampersand</i></GlossaryTerm> and that is specially recognized in a *lambda list*. Note that no *standardized lambda list keyword* is in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**lambda variable** *n.* a *formal parameter* , used to emphasize the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>’s relation to the *lambda list* that *established* it. 



**leaf** *n.* 1. an <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm><sub>1</sub>. 2. a terminal node of a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm><sub>2</sub>. 



**leap seconds** *n.* additional one-second intervals of time that are occasionally inserted into the true calendar by official timekeepers as a correction similar to “leap years.” All Common Lisp <GlossaryTerm styled={true} term={"time"}><i>time</i></GlossaryTerm> representations ignore *leap seconds*; every day is assumed to be exactly 86400 seconds long. 



**left-parenthesis** *n.* the *standard character* “(”, that is variously called “left 



parenthesis” or “open parenthesis” See Figure 2–5. 



<DictionaryLink styled={true} term={"length"}><b>length</b></DictionaryLink> *n.* (of a *sequence*) the number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in the *sequence*. (Note that if the *sequence* is a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> with a *fill pointer* , its <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> is the same as the *fill pointer* even though the total allocated size of the <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> might be larger.) 



**lexical binding** *n.* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in a *lexical environment*. 



**lexical closure** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that, when invoked on <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, executes the body of a *lambda expression* in the *lexical environment* that was captured at the time of the creation of the *lexical closure*, augmented by <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"parameter"}><i>parameters</i></GlossaryTerm> to the corresponding <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



**lexical environment** *n.* that part of the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> that contains <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> whose names have *lexical scope*. A *lexical environment* contains, among other things: 



ordinary <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of *variable names* to <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, lexically *established bindings* of *function names* to <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>, *symbol macros*, *blocks*, *tags*, and *local declarations* (see <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>). 



**lexical scope** *n. scope* that is limited to a spatial or textual region within the 



establishing <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. “The names of parameters to a function normally are lexically scoped.” 



**lexical variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> for which is in the *lexical environment*. 



**Lisp image** *n.* a running instantiation of a Common Lisp <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. A *Lisp image* is characterized by a single address space in which any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can directly refer to any another in conformance with this specification, and by a single, common, *global environment*. (External operating systems sometimes call this a “core image,” “fork,” “incarnation,” “job,” or “process.” Note however, that the issue of a “process” in such 







 



 



an operating system is technically orthogonal to the issue of a *Lisp image* being defined here. Depending on the operating system, a single “process” might have multiple *Lisp images*, and multiple “processes” might reside in a single *Lisp image*. Hence, it is the idea of a fully shared address space for direct reference among all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> which is the defining characteristic. Note, too, that two “processes” which have a communication 



area that permits the sharing of some but not all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are considered to be distinct *Lisp images*.) 



**Lisp printer** *n. Trad.* the procedure that prints the character representation of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> onto a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. (This procedure is implemented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>.) 



**Lisp read-eval-print loop** *n. Trad.* an endless loop that <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm><sub>2</sub> a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"evaluate"}><i>evaluates</i></GlossaryTerm> it, and prints (*i.e.*, <GlossaryTerm styled={true} term={"write"}><i>writes</i></GlossaryTerm><sub>2</sub>) the results. In many <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>, the default mode of interaction with Common Lisp during program development is through such a loop. 



**Lisp reader** *n. Trad.* the procedure that parses character representations of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, producing <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. (This procedure is implemented by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>.) 



<DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> *n.* 1. a chain of *conses* in which the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of each <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> is either the next link in the chain or a terminating <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>. See also *proper list<GlossaryTerm styled={true} term={"t"}><i>, </i></GlossaryTerm>dotted list*, or *circular list*. 2. the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that is the union of <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> and <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink>. 



**list designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and that is one of: a *non-nil atom* (denoting a *singleton list* whose <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> is that *non-nil atom*) or a *proper list* (denoting itself). 



<b>list structure</b> <i>n.</i> (of a <i>list</i>) the set of <i>conses</i> that make up the <i>list</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>list structure</i>, the <i>objects</i> that are <i>elements</i> of the <i>list</i> (<i>i.e.</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>list</i>) are not themselves part of its <i>list structure</i>, even if they are <i>conses</i>, except in the (<i>circular</i> <sub>2</sub>) case where the <i>list</i> actually contains one of its <i>tails</i> as an <i>element</i>. (The <i>list structure</i> of a <i>list</i> is sometimes redundantly referred to as its “top-level list structure” in order to emphasize that any <i>conses</i> that are <i>elements</i> of the <i>list</i> are not involved.) 



**literal** *adj.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) referenced directly in a program rather than being computed by the program; that is, appearing as data in a <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, or, if the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *self evaluating object*, appearing as unquoted data. “In the form (cons "one" ’("two")), the expressions "one", ("two"), and "two" are literal objects.” 



<DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) to cause the <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> contained in the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> to be *executed*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. 



**load time** *n.* the duration of time that the loader is *loading compiled code*. 







 



 



**load time value** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> referred to in <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> by a <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of such a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is some specific <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which can only be computed in the 



run-time <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. In the case of *file compilation*, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is computed once as part of the process of *loading* the *compiled file*, and not again. See the *special operator* <DictionaryLink styled={true} term={"load-time-value"}><b>load-time-value</b></DictionaryLink>. 



**loader** *n.* a facility that is part of Lisp and that <GlossaryTerm styled={true} term={"load"}><i>loads</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"load"}><b>load</b></DictionaryLink>. 



**local declaration** *n.* an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> which may appear only in specially designated positions of certain <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, and which provides information about the code contained within the containing <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; that is, a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>. 



**local precedence order** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> consisting of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> followed by its *direct superclasses* in the order mentioned in the defining <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



**local slot** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a *slot accessible* in only one <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, namely the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> is allocated. 



**logical block** *n.* a conceptual grouping of related output used by the *pretty printer* . See the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> and Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). 



**logical host** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> nature that is used as the representation of a “host” in a *logical pathname*, and that has an associated set of translation rules for converting *logical pathnames* belonging to that host into *physical pathnames*. See Section 19.3 (Logical Pathnames). 



**logical host designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a *logical host*; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a *logical host* and that is one of: a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> (denoting the *logical host* that it names), or a *logical host* (denoting itself). (Note that because the representation of a *logical host* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, it is possible that an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> might represent a *logical host* as the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names it.) 



**logical pathname** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>. 



**long float** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"long-float"}><b>long-float</b></DictionaryLink>. 



**loop keyword** *n. Trad.* a symbol that is a specially recognized part of the syntax of an extended <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Such symbols are recognized by their <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> (using <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink>), not by their identity; as such, they may be in any package. A *loop keyword* is not a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm>. 



**lowercase** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being among *standard characters* corresponding to the small letters a through z, or being some other *implementation-defined character* that 







 



 



is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm>. See Section 13.1.4.3 (Characters With Case). 



**M** 



**macro** *n.* 1. a *macro form* 2. a *macro function*. 3. a *macro name*. 



**macro character** *n.* a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> which, when encountered by the *Lisp reader* in its main dispatch loop, introduces a *reader macro*<sub>1</sub>. (*Macro characters* have nothing to do with <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm>.) 



**macro expansion** *n.* 1. the process of translating a *macro form* into another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 2. the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> resulting from this process. 



**macro form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that stands for another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (*e.g.*, for the purposes of 



abstraction, information hiding, or syntactic convenience); that is, either a *compound form* whose first element is a *macro name*, or a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names a *symbol macro*. 



**macro function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of two arguments, a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, that implements *macro expansion* by producing a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be evaluated in place of the original argument <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**macro lambda list** *n.* an *extended lambda list* used in <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that *establish macro* definitions, such as <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink> and <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>. See Section 3.4.4 (Macro Lambda Lists). 



**macro name** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> for which <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and which when used as the first element of a *compound form* identifies that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as a *macro form*. 



**macroexpand hook** *n.* the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*macroexpand-hook\***. 



**mapping** *n.* 1. a type of iteration in which a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is successively applied to <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> taken from corresponding entries in collections such as *sequences* or *hash tables*. 2. *Math.* a relation between two sets in which each element of the first set (the “domain”) is assigned one element of the second set (the “range”). 



**metaclass** *n.* 1. a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose instances are *classes*. 2. (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Metaobject Protocol** *n.* one of many possible descriptions of how a *conforming implementation* might implement various aspects of the object system. This description is beyond the scope of this document, and no *conforming implementation* is required to adhere to it except as noted explicitly in this specification. Nevertheless, its existence helps to establish normative practice, and implementors with no reason to diverge from it are encouraged to consider making their <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> adhere to it where possible. It is described in detail in *The Art of the Metaobject Protocol*. 







 



 



<DictionaryLink styled={true} term={"method"}><b>method</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is part of a *generic function* and which provides information about how that *generic function* should behave when its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of certain *classes* or with certain identities. 



**method combination** *n.* 1. generally, the composition of a set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> to produce an *effective method* for a *generic function*. 2. an object of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>, which represents the details of how the *method combination*<sub>1</sub> for one or more specific *generic functions* is to be performed. 



**method-defining form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that defines a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a *generic function*, whether explicitly or implicitly. See Section 7.6.1 (Introduction to Generic Functions). 



**method-defining operator** *n.* an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> corresponding to a *method-defining form*. See Figure 7–1. 



**minimal compilation** *n.* actions the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> must take at compile time. See Section 3.2.2 (Compilation Semantics). 



**modified lambda list** *n.* a list resembling an *ordinary lambda list* in form and 



purpose, but which deviates in syntax or functionality from the definition of an 



*ordinary lambda list*. See *ordinary lambda list*. “<DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink> uses a modified lambda list.” 



**most recent** *adj.* innermost; that is, having been *established* (and not yet 



*disestablished*) more recently than any other of its kind. 



**multiple escape** *n.*, *adj.* 1. *n.* the *syntax type* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that is used in pairs to indicate that the enclosed <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are to be treated as <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> with their <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> preserved. For details, see Section 2.1.4.5 (Multiple Escape Characters). 2. *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) having the *multiple escape syntax type*. 3. *n.* a *multiple escape*<sub>2</sub> *character* . (In the *standard readtable*, *vertical-bar* is a *multiple escape character* .) 



**multiple values** *n.* 1. more than one <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. “The function <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> returns multiple values.” 2. a variable number of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, possibly including zero or one. “The function <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> returns multiple values.” 3. a fixed number of values other than one. “The macro <DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink> is among the few operators in Common Lisp which can detect and manipulate multiple values.” 



**N** 



**name** *n.*, *v.t.* 1. *n.* an <GlossaryTerm styled={true} term={"identifier"}><i>identifier</i></GlossaryTerm> by which an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, or an *exit point* is referred to by association using a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 2. *v.t.* to give a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> to. 3. *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> having a name component) the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is that component. “The string 



which is a symbol’s name is returned by <DictionaryLink styled={true} term={"symbol-name"}><b>symbol-name</b></DictionaryLink>.” 4. *n.* (of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>) a. the name component, returned by **pathname-name**. b. the entire namestring, returned by <DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink>. 5. *n.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that names the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> and that 







 



 



has <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> greater than one. (All *non-graphic characters* are required to have <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> unless they have some *implementation-defined attribute* which is not <GlossaryTerm styled={true} term={"null"}><i>null</i></GlossaryTerm>. Whether or not other <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> have <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>.) 



**named constant** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that is defined by Common Lisp, by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, or by user code (see the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink>) to always <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the same <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> when *evaluated*. “The value of a named constant may not be changed by assignment or by binding.” 



**namespace** *n.* 1. <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> whose denotations are restricted to a particular kind. “The bindings of names to tags is the tag namespace.” 2. any <GlossaryTerm styled={true} term={"mapping"}><i>mapping</i></GlossaryTerm> whose domain is a set of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm>. “A package defines a namespace.” 



<DictionaryLink styled={true} term={"namestring"}><b>namestring</b></DictionaryLink> *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that represents a <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> using either the <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> notation for naming *logical pathnames* described in Section 19.3.1 (Syntax of Logical Pathname Namestrings), or some <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> notation for naming a 



*physical pathname*. 



**newline** *n.* the *standard character hNewlinei*, notated for the *Lisp reader* as #\Newline. 



**next method** *n.* the next <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> to be invoked with respect to a given <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a particular set of arguments or argument *classes*. See Section 7.6.6.1.3 (Applying method combination to the sorted list of applicable methods). 



**nickname** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) one of possibly several <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> that can be used to refer to the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> but that is not the primary <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> *n.* the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is at once the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named "NIL" in the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the *empty list*, the <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> (or *generalized boolean*) representing <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *empty type*. 



**non-atomic** *adj.* being other than an <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm>; *i.e.*, being a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



**non-constant variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that is not a *constant variable*. 



**non-correctable** *adj.* (of an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> ) not intentionally <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm>. (Because of the dynamic nature of <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm>, it is neither possible nor generally useful to completely prohibit an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> from being <GlossaryTerm styled={true} term={"correctable"}><i>correctable</i></GlossaryTerm>. This term is used in order to express an 



intent that no special effort should be made by <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> signaling an <GlossaryTerm styled={true} term={"error"}><i>error</i></GlossaryTerm> to make that *error correctable*; however, there is no actual requirement on *conforming programs* or *conforming implementations* imposed by this term.) 



**non-empty** *adj.* having at least one <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm>. 



**non-generic function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is not a *generic function*. 







 



 



**non-graphic** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) not <GlossaryTerm styled={true} term={"graphic"}><i>graphic</i></GlossaryTerm>. See Section 13.1.4.1 (Graphic 



Characters). 



**non-list** *n.*, *adj.* other than a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>; *i.e.*, a *non-nil atom*. 



**non-local exit** *n.* a transfer of control (and sometimes <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) to an *exit point* for reasons other than a *normal return*. “The operators <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, and <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> cause a non-local exit.” 



**non-nil** *n.*, *adj.* not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Technically, any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> can be referred to as <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, but that would tend to imply a unique view of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as a *generalized boolean*. Referring to such an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> avoids this implication. 



**non-null lexical environment** *n.* a *lexical environment* that has additional 



information not present in the *global environment*, such as one or more <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. 



**non-simple** *adj.* not <GlossaryTerm styled={true} term={"simple"}><i>simple</i></GlossaryTerm>. 



**non-terminating** *adj.* (of a *macro character* ) being such that it is treated as a 



constituent <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> when it appears in the middle of an extended token. See Section 2.2 (Reader Algorithm). 



**non-top-level form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that, by virtue of its position as a <GlossaryTerm styled={true} term={"subform"}><i>subform</i></GlossaryTerm> of another <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, is not a *top level form*. See Section 3.2.3.1 (Processing of Top Level Forms). 



**normal return** *n.* the natural transfer of control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> which occurs after the complete *execution* of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**normalized** *adj.*, *ANSI*, *IEEE* (of a <GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm>) conforming to the description of 



“normalized” as described by *IEEE Standard for Binary Floating-Point Arithmetic*. See <GlossaryTerm styled={true} term={"denormalized"}><i>denormalized</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> *adj.*, *n.* 1. *adj.* a. (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) having no <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>: empty. See *empty list*. b. (of a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) having a <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of zero. (It is common, both within this document and in observed spoken behavior, to refer to an empty string by an apparent definite reference, as in “the *null string*” even though no attempt is made to <GlossaryTerm styled={true} term={"intern"}><i>intern</i></GlossaryTerm><sub>2</sub> null strings. The phrase “a *null string*” is technically more correct, but is generally considered awkward by most Lisp programmers. As such, the phrase “the *null string*” should be treated as an indefinite reference in all cases except for anaphoric references.) c. (of an *implementation-defined attribute* of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to which the value of that <GlossaryTerm styled={true} term={"attribute"}><i>attribute</i></GlossaryTerm> defaults if no specific value was requested. 2. *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"null"}><b>null</b></DictionaryLink> (the only such <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> being <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>). 



**null lexical environment** *n.* the *lexical environment* which has no <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"number"}><b>number</b></DictionaryLink>. 



**numeric** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being one of the *standard characters* 0 through *9* , or being some other *graphic character* defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"numeric"}><i>numeric</i></GlossaryTerm>. 



**O** 



**object** *n.* 1. any Lisp datum. “The function <DictionaryLink styled={true} term={"cons"}><b>cons</b></DictionaryLink> creates an object which refers to two other objects.” 2. (immediately following the name of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, used to emphasize that the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is not just a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> for an object of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> but really an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> in cases where <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (such as <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> or <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink>) are commonly referred to by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. “The function <DictionaryLink styled={true} term={"symbol-function"}><b>symbol-function</b></DictionaryLink> takes a function name and returns a function object.” 



**object-traversing** *adj.* operating in succession on components of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



“The operators <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink>, <DictionaryLink styled={true} term={"maphash"}><b>maphash</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-package-iterator"}><b>with-package-iterator</b></DictionaryLink> and <DictionaryLink styled={true} term={"count"}><b>count</b></DictionaryLink> perform 



object-traversing operations.” 



<DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> *adj.*, *v.t.* (a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>) 1. *v.t.* to create and return a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. 2. *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) having been *opened* <sub>1</sub>, but not yet <GlossaryTerm styled={true} term={"closed"}><i>closed</i></GlossaryTerm>. 



**operator** *n.* 1. a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* . 2. a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that names such a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* . 3. (in a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*) the <GlossaryTerm styled={true} term={"cadr"}><i>cadr</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *special form*, which might be either an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> <sub>2</sub> or a *lambda expression*. 4. (of a *compound form*) the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the *compound form*, which might be either an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> <sub>2</sub> or a *lambda expression*, and which is never (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



**optimize quality** *n.* one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an <DictionaryLink styled={true} term={"optimize"}><b>optimize</b></DictionaryLink> <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. The *standardized optimize qualities* are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). <GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> may define additional *optimize qualities*. 



**optional parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding positional <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is optional. If the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> is not supplied, a default value is used. See also *supplied-p parameter* . 



**ordinary function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that is not a *generic function*. 



**ordinary lambda list** *n.* the kind of *lambda list* used by <DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink>. See *modified lambda list* and *extended lambda list*. “<DictionaryLink styled={true} term={"defun"}><b>defun</b></DictionaryLink> uses an ordinary lambda list.” 







 



 



**otherwise inaccessible part** *n.* (of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *O*<sub>1</sub>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *O*<sub>2</sub>, which would 



be made <GlossaryTerm styled={true} term={"inaccessible"}><i>inaccessible</i></GlossaryTerm> if *O*<sub>1</sub> were made <GlossaryTerm styled={true} term={"inaccessible"}><i>inaccessible</i></GlossaryTerm>. (Every <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is an *otherwise inaccessible part* of itself.) 



**output** *adj.* (of a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) supporting output operations (*i.e.*, being a “data sink”). An *output stream* might also be an *input stream*, in which case it is sometimes called a *bidirectional stream*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **output-stream-p**. 



**P** 



<DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink>. 



**package cell** *n. Trad.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that holds one of possibly several <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> in which the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm>, called the *home package*, or which holds <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if no such <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> exists or is known. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol-package"}><b>symbol-package</b></DictionaryLink>. 



**package designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> and that is one of: a *string designator* (denoting the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> that has the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that it designates as its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> or as one of its <GlossaryTerm styled={true} term={"nickname"}><i>nicknames</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> (denoting itself). 



**package marker** *n.* a character which is used in the textual notation for a symbol to separate the package name from the symbol name, and which is <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> in the *standard readtable*. See Section 2.1 (Character Syntax). 



**package prefix** *n.* a notation preceding the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in text that is processed by the *Lisp reader* , which uses a *package name* followed by one or more *package markers*, and which indicates that the symbol is looked up in the indicated <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**package registry** *n.* A mapping of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> to *package objects*. It is possible for there to be a *package object* which is not in this mapping; such a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> is called an *unregistered package*. *Operators* such as <DictionaryLink styled={true} term={"find-package"}><b>find-package</b></DictionaryLink> consult this mapping in order to find a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> from its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"operator"}><i>Operators</i></GlossaryTerm> such as <DictionaryLink styled={true} term={"do-all-symbols"}><b>do-all-symbols</b></DictionaryLink>, <DictionaryLink styled={true} term={"find-all-symbols"}><b>find-all-symbols</b></DictionaryLink>, and <DictionaryLink styled={true} term={"list-all-packages"}><b>list-all-packages</b></DictionaryLink> operate only on <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that exist in the *package registry*. 



**pairwise** *adv.* (of an adjective on a set) applying individually to all possible pairings of elements of the set. “The types *A*, *B*, and *C* are pairwise disjoint if *A* and *B* are disjoint, *B* and *C* are disjoint, and *A* and *C* are disjoint.” 



**parallel** *adj. Trad.* (of <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or *assignment*) done in the style of <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink>, <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, or <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>; that is, first evaluating all of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that produce <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>, and only then *assigning* or <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> (or <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm>). Note that this does not imply traditional 



computational “parallelism” since the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that produce <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are evaluated 



<GlossaryTerm styled={true} term={"sequentially"}><i>sequentially</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"sequential"}><i>sequential</i></GlossaryTerm>. 







 



 



**parameter** *n.* 1. (of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> in the definition of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which takes on the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of a corresponding <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> (or of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of corresponding arguments) to that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> when it is called, or which in some cases is given a default value because there is no corresponding <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 2. (of a *format directive*) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> received as 



data flow by a *format directive* due to a prefix notation within the *format string* at the *format directive*’s point of use. See Section 22.3 (Formatted Output). “In "&#126;3,’0D", the number 3 and the character #\0 are parameters to the &#126;D format directive.” 



**parameter specializer** *n.* 1. (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> which constrains the 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> to be applicable only to <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> sequences in which the corresponding 



<GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> matches the *parameter specializer* . 2. a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (eql <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>). 



**parameter specializer name** *n.* 1. (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> definition) an expression used in code to name a *parameter specializer* . See Section 7.6.2 (Introduction to Methods). 2. a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> (eql <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, which is a structured representation of the name of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> has six components: a “host,” a “device,” a “directory,” a “name,” a “type,” and a “version.” 



**pathname designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> and that is one of: a *pathname namestring* (denoting the corresponding <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>), a *stream associated with a file* (denoting the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> used to open the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>; this may be, but is not required to be, the actual name of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> (denoting itself). See Section 21.1.1.1.2 (Open and Closed Streams). 



**physical pathname** *n.* a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that is not a *logical pathname*. 



**place** *n.* 1. a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> which is suitable for use as a *generalized reference*. 2. the 



conceptual location referred to by such a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm><sub>1</sub>. 



**plist** [ **p—e list** ] *n.* a *property list*. 



**portable** *adj.* (of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) required to produce equivalent results and observable side effects in all *conforming implementations*. 



**potential copy** *n.* (of an *object O*<sub>1</sub> subject to constriants) an *object O*<sub>2</sub> that if the specified constraints are satisfied by *O*<sub>1</sub> without any modification might or might not be <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to *O*<sub>1</sub>, or else that must be a *fresh object* that resembles a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> of *O*<sub>1</sub> except that it has been modified as necessary to satisfy the constraints. 



**potential number** *n.* A textual notation that might be parsed by the *Lisp reader* in some *conforming implementation* as a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> but is not required to be parsed as a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> . No <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *potential number*—either an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> or it is not. See Section 2.3.1.1 (Potential Numbers as Tokens). 







 



 



**pprint dispatch table** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that can be the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> and hence can control how <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are printed when <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. See Section 22.2.1.4 (Pretty Print Dispatch Tables). 



**predicate** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that returns a *generalized boolean* as its first value. 



**present** *n.* 1. (of a <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> in a *Lisp image*) a state of being that is in effect if and only if the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> naming the <GlossaryTerm styled={true} term={"feature"}><i>feature</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *features list*. 2. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) being accessible in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> directly, rather than being inherited from another <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**pretty print** *v.t.* (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) to invoke the *pretty printer* on the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**pretty printer** *n.* the procedure that prints the character representation of an 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> onto a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, and that uses layout techniques (*e.g.*, indentation) that tend to highlight the structure of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in a way that makes it easier for human readers to parse visually. See the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> and Section 22.2 (The Lisp Pretty Printer). 



**pretty printing stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that does pretty printing. Such streams are created by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> as a link between the output stream and the logical block. 



**primary method** *n.* a member of one of two sets of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> (the set of *auxiliary methods* is the other) that form an exhaustive partition of the set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s *generic function*. How these sets are determined is dependent on the *method combination* type; see Section 7.6.2 (Introduction to Methods). 



**primary value** *n.* (of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) the first <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, if any, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are no <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. “The primary value returned by <DictionaryLink styled={true} term={"truncate"}><b>truncate</b></DictionaryLink> is an integer quotient, truncated toward zero.” 



**principal** *adj.* (of a value returned by a Common Lisp <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that implements a mathematically irrational or transcendental function defined in the complex domain) of possibly many (sometimes an infinite number of) correct values for the mathematical function, being the particular <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> which the corresponding Common Lisp <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> has been defined to return. 



**print name** *n. Trad.* (usually of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm><sub>3</sub>. 



**printer control variable** *n.* a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> whose specific purpose is to control some action of the *Lisp printer* ; that is, one of the <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> in Figure 22–1, or else some *implementation-defined variable* which is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *printer control variable*. 







 



 



**printer escaping** *n.* The combined state of the *printer control variables* 



<DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>. If the value of either <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> 



or <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then *printer escaping* is “enabled”; otherwise (if the values of both <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> are <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>), then *printer escaping* is “disabled”. 



**printing** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being a *graphic character* other than <GlossaryTerm styled={true} term={"space"}><i>space</i></GlossaryTerm>. 



**process** *v.t.* (a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> by the <GlossaryTerm styled={true} term={"compiler"}><i>compiler</i></GlossaryTerm> ) to perform *minimal compilation*, determining the time of evaluation for a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and possibly *evaluating* that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> (if required). 



**processor** *n.*, *ANSI* an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"establish"}><i>establish</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm>. 



**proclamation** *n.* a *global declaration*. 



**prog tag** *n. Trad.* a *go tag*. 



**program** *n. Trad.* Common Lisp <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. 



**programmer** *n.* an active entity, typically a human, that writes a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>, and that might or might not also be a <GlossaryTerm styled={true} term={"user"}><i>user</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>. 



**programmer code** *n. code* that is supplied by the programmer; that is, <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that is not *system code*. 



**proper list** *n.* A <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> terminated by the *empty list*. (The *empty list* is a *proper list*.) See *improper list*. 



**proper name** *n.* (of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"class-name"}><b>class-name</b></DictionaryLink> and <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>. 



**proper sequence** *n.* a *sequence* which is not an *improper list*; that is, a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> or a *proper list*. 



**proper subtype** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is not the *same type* as the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (*i.e.*, its <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> are a “proper subset” of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>). 



**property** *n.* (of a *property list*) 1. a conceptual pairing of a *property indicator* and its associated *property value* on a *property list*. 2. a *property value*. 



**property indicator** *n.* (of a *property list*) the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> part of a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>, used as a <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> when looking up a *property value* on a *property list*. 







 



 



**property list** *n.* 1. a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> containing an even number of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> that are alternating <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> (sometimes called <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"key"}><i>keys</i></GlossaryTerm>) and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> (sometimes called *properties*). When there is more than one <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> pair with the *identical name* in 



a *property list*, the first such pair determines the <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. 2. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) the component of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> containing a *property list*. 



**property value** *n.* (of a *property indicator* on a *property list*) the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> associated with the *property indicator* on the *property list*. 



**purports to conform** *v.* makes a good-faith claim of conformance. This term 



expresses intention to conform, regardless of whether the goal of that intention is realized in practice. For example, language implementations have been known to have bugs, and while an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> of this specification with bugs might not be a *conforming implementation*, it can still *purport to conform*. This is an important distinction in certain specific cases; *e.g.*, see the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink>. 



**Q** 



**qualified method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> that has one or more <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



**qualifier** *n.* (of a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a *generic function*) one of possibly several <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> used to annotate the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> in a way that identifies its role in the *method combination*. The *method combination type* determines how many <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> are permitted for each <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>, which <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> are permitted, and the semantics of those <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



**query I/O** *n.* the *bidirectional stream* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> **\*query-io\***. **quoted object** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> which is the second element of a <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**R** 



**radix** *n.* an *integer* between 2 and 36, inclusive, which can be used to designate a base with respect to which certain kinds of numeric input or output are performed. (There are *n* valid digit characters for any given *radix n*, and those digits are the first *n* digits in the sequence 0, 1, *. . .*, 9, A, B, *. . .*, Z, which have the weights 0, 1, *. . .*, 9, 10, 11, *. . .*, 



35, respectively. Case is not significant in parsing numbers of radix greater than 10, so “9b8a” and “9B8A” denote the same <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> 16 number.) 



**random state** *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"random-state"}><b>random-state</b></DictionaryLink>. 



**rank** *n.* a non-negative *integer* indicating the number of <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"ratio"}><b>ratio</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"ratio"}><b>ratio</b></DictionaryLink>. 







 



 



**ratio marker** *n.* a character which is used in the textual notation for a <GlossaryTerm styled={true} term={"ratio"}><i>ratio</i></GlossaryTerm> to separate the numerator from the denominator, and which is <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> in the *standard readtable*. See Section 2.1 (Character Syntax). 



<DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"rational"}><b>rational</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> or component) to obtain the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 2. (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) to parse an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> from its representation on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**readably** *adv.* (of a manner of printing an *object O*<sub>1</sub>) in such a way as to permit the *Lisp Reader* to later *parse* the printed output into an *object O*<sub>2</sub> that is <GlossaryTerm styled={true} term={"similar"}><i>similar</i></GlossaryTerm> to *O*<sub>1</sub>. 



**reader** *n.* 1. a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"read"}><i>reads</i></GlossaryTerm><sub>1</sub> a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 2. the *Lisp reader* . 



**reader macro** *n.* 1. a textual notation introduced by dispatch on one or two 



<GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that defines special-purpose syntax for use by the *Lisp reader* , and that is implemented by a *reader macro function*. See Section 2.2 (Reader Algorithm). 2. the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> that introduce a *reader macro*<sub>1</sub>; that is, a *macro character* or the conceptual pairing of a *dispatching macro character* and the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> that follows 



it. (A *reader macro* is not a kind of <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>.) 



**reader macro function** *n.* a *function designator* that denotes a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> 



that implements a *reader macro*<sub>2</sub>. See the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> and 



**set-dispatch-macro-character**. 



<DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"readtable"}><b>readtable</b></DictionaryLink>. 



**readtable case** *n.* an attribute of a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> whose value is a *case sensitivity mode*, and that selects the manner in which <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> are to be treated by the *Lisp reader* and the *Lisp printer* . See Section 23.1.2 (Effect of Readtable Case on the Lisp Reader) and Section 22.1.3.3.2 (Effect of Readtable Case on the Lisp 



Printer). 



**readtable designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> and that is one of: <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> (denoting the *standard readtable*), or a <GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm> (denoting itself). 



**recognizable subtype** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which can be reliably detected to be such by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"subtypep"}><b>subtypep</b></DictionaryLink>. 



**reference** *n.*, *v.t.* 1. *n.* an act or occurrence of referring to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 2. *v.t.* to refer to an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, an *exit point*, a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>, or an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, usually by <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>. 







 



 



**registered package** *n.* a *package object* that is installed in the *package registry*. (Every *registered package* has a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, as well as zero or more <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> nicknames. All <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that are initially specified by Common Lisp or created by <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink> or <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> are *registered packages*. *Registered packages* can be turned into *unregistered packages* by <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>.) 



**relative** *adj.* 1. (of a <GlossaryTerm styled={true} term={"time"}><i>time</i></GlossaryTerm>) representing an offset from an *absolute time* in the 



units appropriate to that time. For example, a *relative internal time* is the difference between two *absolute internal times*, and is measured in *internal time units*. 2. (of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>) representing a position in a directory hierarchy by motion from a position other than the root, which might therefore vary. “The notation #P"../foo.text" 



denotes a relative pathname if the host file system is Unix.” See <GlossaryTerm styled={true} term={"absolute"}><i>absolute</i></GlossaryTerm>. 



**repertoire** *n.*, *ISO* a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of <DictionaryLink styled={true} term={"character"}><b>character</b></DictionaryLink>. See Section 13.1.2.2 (Character 



Repertoires). 



**report** *n.* (of a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> on the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> in an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> where the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



**report message** *n.* the text that is output by a *condition reporter* . 



**required parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> for which a corresponding positional <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> must be supplied when *calling* the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**rest list** *n.* (of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> having a *rest parameter* ) The <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> to which the *rest parameter* is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> on some particular <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



**rest parameter** *n.* A <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> which was introduced by **&amp;rest**. 



<DictionaryLink styled={true} term={"restart"}><b>restart</b></DictionaryLink> *n.* an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"restart"}><b>restart</b></DictionaryLink>. 



**restart designator** *n.* a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>; that is, an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> and that is one of: a *non-nil symbol* (denoting the most recently established *active restart* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>), or a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> (denoting itself). 



**restart function** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that invokes a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, as if by <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. 



The primary purpose of a *restart function* is to provide an alternate interface. By convention, a *restart function* usually has the same name as the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> which it invokes. Figure 26–4 shows a list of the *standardized restart functions*. 



|<p>**abort muffle-warning use-value** </p><p>**continue store-value**</p>|

| :- |





**Figure 26–4. Standardized Restart Functions** 







 



 



<DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> *v.t.* (of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) 1. (from a <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm>) to transfer control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> from the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm>; that is, to cause the <GlossaryTerm styled={true} term={"block"}><i>block</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> immediately without doing any further evaluation of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in its body. 2. (from a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) to <GlossaryTerm styled={true} term={"yield"}><i>yield</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 



**return value** *n. Trad.* a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm><sub>1</sub> 



**right-parenthesis** *n.* the *standard character* “)”, that is variously called “right 



parenthesis” or “close parenthesis” See Figure 2–5. 



**run time** *n.* 1. *load time* 2. *execution time* 



**run-time compiler** *n.* refers to the <DictionaryLink styled={true} term={"compile"}><b>compile</b></DictionaryLink> function or to *implicit compilation*, for which the compilation and run-time <GlossaryTerm styled={true} term={"environment"}><i>environments</i></GlossaryTerm> are maintained in the same *Lisp image*. 



**run-time definition** *n.* a definition in the *run-time environment*. 



**run-time environment** *n.* the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> in which a program is *executed*. 



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



**T** 



<DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> *n.* 1. a. the <GlossaryTerm styled={true} term={"boolean"}><i>boolean</i></GlossaryTerm> representing true. b. the canonical *generalized boolean* 



representing true. (Although any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> other than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is considered <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> as a 



*generalized boolean*, t is generally used when there is no special reason to prefer one such <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> over another.) 2. the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> to which all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> belong—the <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of all <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> (including itself). 3. the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> of all *classes* except itself. 



**tag** *n.* 1. a *catch tag*. 2. a *go tag*. 







 



 



**tail** *n.* (of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as either some <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> which makes up that <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or the <GlossaryTerm styled={true} term={"atom"}><i>atom</i></GlossaryTerm> (if any) which terminates the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. “The empty list is a tail of every proper list.” 



**target** *n.* 1. (of a *constructed stream*) a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> of the *constructed stream*. “The target of a synonym stream is the value of its synonym stream symbol.” 2. (of a *displaced array*) the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> to which the *displaced array* is displaced. (In the case of a chain of *constructed streams* or *displaced arrays*, the unqualified term “<GlossaryTerm styled={true} term={"target"}><i>target</i></GlossaryTerm>” always refers to the immediate <GlossaryTerm styled={true} term={"target"}><i>target</i></GlossaryTerm> of the first item in the chain, not the immediate target of the last item.) 



**terminal I/O** *n.* the *bidirectional stream* that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> 



<DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**terminating** *n.* (of a *macro character* ) being such that, if it appears while parsing a token, it terminates that token. See Section 2.2 (Reader Algorithm). 



**tertiary value** *n.* (of <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) the third <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, if any, or else <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are fewer than three <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> *v.* to transfer control and <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"catch"}><i>catch</i></GlossaryTerm>. See the *special operator* <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>. **tilde** *n.* the *standard character* that is called “tilde” (&#126;). See Figure 2–5. 



<DictionaryLink styled={true} term={"time"}><b>time</b></DictionaryLink> a representation of a point (*absolute time*) or an interval (*relative time*) on a time line. See *decoded time*, *internal time*, and *universal time*. 



**time zone** *n.* a <GlossaryTerm styled={true} term={"rational"}><i>rational</i></GlossaryTerm> multiple of 1/3600 between -24 (inclusive) and 24 (inclusive) that represents a time zone as a number of hours offset from Greenwich Mean Time. Time zone values increase with motion to the west, so Massachusetts, U.S.A. is in time zone 5, California, U.S.A. is time zone 8, and Moscow, Russia is time zone *-3* . (When “daylight savings time” is separately represented as an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> or *return value*, the *time zone* that accompanies it does not depend on whether daylight savings time is in effect.) 



**token** *n.* a textual representation for a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. See Section 2.3 



(Interpretation of Tokens). 



**top level form** *n.* a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> which is processed specially by <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> for the purposes of enabling *compile time evaluation* of that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. *Top level forms* include those <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> which are not <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of any other <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, and certain other cases. See Section 3.2.3.1 (Processing of Top Level Forms). 



**trace output** *n.* the *output stream* which is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *dynamic variable* 



**\*trace-output\***. 







 



 



**tree** *n.* 1. a binary recursive data structure made up of *conses* and <GlossaryTerm styled={true} term={"atom"}><i>atoms</i></GlossaryTerm>: the *conses* are themselves also <GlossaryTerm styled={true} term={"tree"}><i>trees</i></GlossaryTerm> (sometimes called “subtrees” or “branches”), and the <GlossaryTerm styled={true} term={"atom"}><i>atoms</i></GlossaryTerm> are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 2. in general, any recursive data structure that has some notion of “branches” and *leaves*. 



<b>tree structure</b> <i>n.</i> (of a <i>tree</i><sub>1</sub>) the set of <i>conses</i> that make up the <i>tree</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>tree structure</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>tree</i> are not themselves part of its <i>tree structure</i> unless they are also <i>conses</i>. 



**true** *n.* any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is not <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and that is used to represent the success of a <GlossaryTerm styled={true} term={"predicate"}><i>predicate</i></GlossaryTerm> test. See <GlossaryTerm styled={true} term={"t"}><i>t</i></GlossaryTerm><sub>1</sub>. 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> *n.* 1. the canonical <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> in the *file system*. See Section 20.1.3 (Truenames). 2. a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> representing a <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm><sub>1</sub>. 



**two-way stream** *n.* a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"two-way-stream"}><b>two-way-stream</b></DictionaryLink>, which is a <GlossaryTerm styled={true} term={"bidirectional"}><i>bidirectional</i></GlossaryTerm> 



*composite stream* that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



<b>type</b> <i>n.</i> 1. a set of <i>objects</i>, usually with common structure, behavior, or purpose. (Note that the expression “<i>X</i> is of type <i>S<sub>a</sub></i>” naturally implies that “<i>X</i> is of type <i>S<sub>b</sub></i>” if <i>S<sub>a</sub></i> is a <i>subtype</i> of <i>S<sub>b</sub></i>.) 2. (immediately following the name of a <i>type</i>) a <i>subtype</i> of that <i>type</i>. “The type <b>vector</b> is an array type.” 



**type declaration** *n.* a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> that asserts that every reference to a specified <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> within the scope of the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> results in some <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of the specified <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



**type equivalent** *adj.* (of two *types X* and *Y* ) having the same <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm>; that is, *X* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *Y* and *Y* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of *X*. 



**type expand** *n.* to fully expand a *type specifier* , removing any references to *derived types*. (Common Lisp provides no program interface to cause this to occur, but the semantics of Common Lisp are such that every <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> must be able to do 



this internally, and some situations involving *type specifiers* are most easily described in terms of a fully expanded *type specifier* .) 



**type specifier** *n.* an <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> that denotes a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. “The symbol random-state, the list (integer 3 5), the list (and list (not null)), and the class named standard-class are type specifiers.” 



**U** 



**unbound** *adj.* not having an associated denotation in a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. See <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm>. 







 



 



**unbound variable** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is syntactically plausible as the name of a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> but which is not <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> in the *variable namespace*. 



**undefined function** *n.* a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that is syntactically plausible as the name of a 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> but which is not <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> in the *function namespace*. 



<DictionaryLink styled={true} term={"unintern"}><b>unintern</b></DictionaryLink> *v.t.* (a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) to make the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> not be <GlossaryTerm styled={true} term={"present"}><i>present</i></GlossaryTerm> in that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. (The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> might continue to be <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> by inheritance.) 



**uninterned** *adj.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>; *i.e.*, not <GlossaryTerm styled={true} term={"interned"}><i>interned</i></GlossaryTerm> <sub>1</sub>. 



**universal time** *n. time*, represented as a non-negative *integer* number of seconds. *Absolute universal time* is measured as an offset from the beginning of the year 1900 (ignoring *leap seconds*). See Section 25.1.4.2 (Universal Time). 



**unqualified method** *n.* a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> with no <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>. 



**unregistered package** *n.* a *package object* that is not present in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> 



*registry*. An *unregistered package* has no <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>; *i.e.*, its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"delete-package"}><b>delete-package</b></DictionaryLink>. 



**unsafe** *adj.* (of <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>) not <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm>. (Note that, unless explicitly specified otherwise, if a particular kind of error checking is guaranteed only in a <GlossaryTerm styled={true} term={"safe"}><i>safe</i></GlossaryTerm> context, the same checking might or might not occur in that context if it were <GlossaryTerm styled={true} term={"unsafe"}><i>unsafe</i></GlossaryTerm>; describing a 



context as <GlossaryTerm styled={true} term={"unsafe"}><i>unsafe</i></GlossaryTerm> means that certain kinds of error checking are not reliably enabled but does not guarantee that error checking is definitely disabled.) 



**unsafe call** *n.* a <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm> that is not a *safe call*. For more detailed information, see Section 3.5.1.1 (Safe and Unsafe Calls). 



**upgrade** *v.t.* (a declared <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> to an actual <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) 1. (when creating an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) 



to substitute an *actual array element type* for an *expressed array element type* 



when choosing an appropriately *specialized array* representation. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-array-element-type"}><b>upgraded-array-element-type</b></DictionaryLink>. 2. (when creating a <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> ) to substitute an *actual complex part type* for an *expressed complex part type* when choosing an appropriately *specialized complex* representation. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 



**upgraded array element type** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and that is used instead of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> whenever the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is used as an *array element type* for object creation or type discrimination. See Section 15.1.2.1 (Array Upgrading). 



**upgraded complex part type** *n.* (of a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> that is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and that is used instead of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> whenever the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> is used as a *complex part type* for object creation or type discrimination. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink>. 







 



 



**uppercase** *adj.* (of a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> ) being among *standard characters* corresponding to the capital letters A through Z, or being some other *implementation-defined character* that is defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be <GlossaryTerm styled={true} term={"uppercase"}><i>uppercase</i></GlossaryTerm>. See Section 13.1.4.3 (Characters With Case). 



**use** *v.t.* (a *package P*<sub>1</sub>) to <GlossaryTerm styled={true} term={"inherit"}><i>inherit</i></GlossaryTerm> the *external symbols* of *P*<sub>1</sub>. (If a package *P*<sub>2</sub> uses *P*<sub>1</sub>, the *external symbols* of *P*<sub>1</sub> become *internal symbols* of *P*<sub>2</sub> unless they are explicitly <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>.) “The package CL-USER uses the package CL.” 



**use list** *n.* (of a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) a (possibly empty) <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> associated with each <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> which determines what other <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> are currently being *used* by that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



**user** *n.* an active entity, typically a human, that invokes or interacts with a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm> at run time, but that is not necessarily a <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> . 



**V** 



**valid array dimension** *n.* a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as an *array dimension*. 



Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"array-dimension-limit"}><b>array-dimension-limit</b></DictionaryLink>. When multiple *array dimensions* are to be used together to specify a multi-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, there is also an implied constraint that the product of all of the <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm> be less than the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"array-total-size-limit"}><b>array-total-size-limit</b></DictionaryLink>. 



**valid array index** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as one of possibly several indices needed to name an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> according to a multi-dimensional Cartesian coordinate system. Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and must be less than the corresponding <GlossaryTerm styled={true} term={"dimension"}><i>dimension</i></GlossaryTerm><sub>1</sub> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. (Unless otherwise explicitly specified, the phrase “a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *valid array indices*” further implies that the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> must be the same as the <GlossaryTerm styled={true} term={"rank"}><i>rank</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>.) “For a 2 by 3 array, valid array indices for the first dimension are 0 and 1, and valid array indices for the second dimension are 0, 1 and 2.” 



**valid array row-major index** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, which might have any number of <GlossaryTerm styled={true} term={"dimension"}><i>dimensions</i></GlossaryTerm><sub>2</sub>) a single <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use in naming any <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, by viewing the array’s storage as a linear series of <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> in row-major order. Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than the *array total size* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**valid fill pointer** *n.* (of an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>) a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> suitable for use as a *fill pointer* for the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. Such a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm> must be greater than or equal to zero, and less than or equal to the *array total size* of the <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**valid logical pathname host** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> that has been defined as the name of a *logical host*. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **load-logical-pathname-translations**. 







 



 



**valid pathname device** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :unspecific, or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid pathname device*. 



**valid pathname directory** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific, or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid directory component*. 



**valid pathname host** *n.* a *valid physical pathname host* or a *valid logical pathname host*. 



**valid pathname name** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific, or some other <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *valid pathname name*. 



**valid pathname type** *n.* a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, :wild, :unspecific. 



**valid pathname version** *n.* a non-negative *integer* , or one of :wild, :newest, 



:unspecific, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The symbols :oldest, :previous, and :installed are *semi* 



*standard* special version symbols. 



**valid physical pathname host** *n.* any of a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, or the symbol :unspecific, that is recognized by the implementation as the name of a host. 



**valid sequence index** *n.* (of a *sequence*) an *integer* suitable for use to name an <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of the *sequence*. Such an *integer* must be greater than or equal to zero, and must be less than the <GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> of the *sequence*. (If the *sequence* is an <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>, the *valid sequence index* is further constrained to be a <GlossaryTerm styled={true} term={"fixnum"}><i>fixnum</i></GlossaryTerm>.) 



**value** *n.* 1. a. one of possibly several <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are the result of an <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. b. (in a situation where exactly one value is expected from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) the *primary value* returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. c. (of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in an *implicit progn*) one of possibly 



several <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that result from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 2. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> associated with a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> in a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>. 3. (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *dynamic variable* named by that symbol. 4. an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> associated with a <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> in an *association list*, a *property list*, or a *hash table*. 



**value cell** *n. Trad.* (of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>) The <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> which holds the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>, if any, of the *dynamic variable* named by that <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, and which is *accessed* by <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink>. See <GlossaryTerm styled={true} term={"cell"}><i>cell</i></GlossaryTerm>. 



**variable** *n.* a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> in the “variable” <GlossaryTerm styled={true} term={"namespace"}><i>namespace</i></GlossaryTerm>. See Section 3.1.2.1.1 (Symbols as Forms). 



<DictionaryLink styled={true} term={"vector"}><b>vector</b></DictionaryLink> *n.* a one-dimensional <GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>. 



**vertical-bar** *n.* the *standard character* that is called “vertical bar” (|). See Figure 2–5. 



 



 



**W** 



<b>whitespace</b> <i>n.</i> 1. one or more <i>characters</i> that are either the <i>graphic character</i> #\Space or else <i>non-graphic</i> characters such as #\Newline that only move the print position. 2. a. <i>n.</i> the <i>syntax type</i> of a <i>character</i> that is a <i>token</i> separator. For details, see Section 2.1.4.7 (Whitespace Characters). b. <i>adj.</i> (of a <i>character</i> ) having the <i>whitespace</i><sub>2<i>a</i></sub> 



<i>syntax type</i><sub>2</sub>. c. <i>n.</i> a <i>whitespace</i><sub>2<i>b</i></sub> character . 



**wild** *adj.* 1. (of a <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm>) using an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> syntax for naming files, which might “match” any of possibly several possible <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm>, and which can therefore be used to refer to the aggregate of the <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> named by those <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm>. 2. (of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>) a structured representation of a name which might “match” any of 



possibly several <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>, and which can therefore be used to refer to the aggregate of the <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> named by those <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>. The set of *wild pathnames* includes, but is not restricted to, <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> which have a component which is :wild, or which have a directory component which contains :wild or :wild-inferors. See the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> *v.t.* 1. (a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> or component) to change the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 2. (an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>) to output a representation of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**writer** *n.* a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that <GlossaryTerm styled={true} term={"write"}><i>writes</i></GlossaryTerm><sub>1</sub> a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. 



**Y** 



**yield** *v.t.* (<GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>) to produce the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> as the result of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>. “The form (+ 2 3) yields 5.” 







 



 





