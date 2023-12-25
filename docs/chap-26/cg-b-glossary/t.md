---
title: T
sidebar_position: 116
---

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



