---
title: T
sidebar_position: 116
---

**T** 



<DictionaryLink  term={"t"}><b>t</b></DictionaryLink> *n.* 1. a. the <GlossaryTerm  term={"boolean"}><i>boolean</i></GlossaryTerm> representing true. b. the canonical <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> 



representing true. (Although any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> other than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is considered <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> as a 



<GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>, t is generally used when there is no special reason to prefer one such <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> over another.) 2. the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> to which all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> belong—the <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of all <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> (including itself). 3. the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm  term={"superclass"}><i>superclass</i></GlossaryTerm> of all *classes* except itself. 



**tag** *n.* 1. a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>. 







 



 



**tail** *n.* (of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>) an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as either some <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> which makes up that <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> or the <GlossaryTerm  term={"atom"}><i>atom</i></GlossaryTerm> (if any) which terminates the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. “The empty list is a tail of every proper list.” 



**target** *n.* 1. (of a <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed stream</i></GlossaryTerm>) a <GlossaryTerm  term={"constituent"}><i>constituent</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed stream</i></GlossaryTerm>. “The target of a synonym stream is the value of its synonym stream symbol.” 2. (of a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>) the <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> to which the <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm> is displaced. (In the case of a chain of <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed streams</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"displaced array"}><i>displaced arrays</i></GlossaryTerm>, the unqualified term “<GlossaryTerm  term={"target"}><i>target</i></GlossaryTerm>” always refers to the immediate <GlossaryTerm  term={"target"}><i>target</i></GlossaryTerm> of the first item in the chain, not the immediate target of the last item.) 



**terminal I/O** *n.* the *bidirectional stream* that is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> 



<DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>. 



**terminating** *n.* (of a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> ) being such that, if it appears while parsing a token, it terminates that token. See Section 2.2 (Reader Algorithm). 



**tertiary value** *n.* (of <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) the third <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>, if any, or else <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if there are fewer than three <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm>. 



<DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> *v.* to transfer control and <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> to a <GlossaryTerm  term={"catch"}><i>catch</i></GlossaryTerm>. See the <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>. **tilde** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “tilde” (&#126;). See Figure 2–5. 



<DictionaryLink  term={"time"}><b>time</b></DictionaryLink> a representation of a point (*absolute time*) or an interval (*relative time*) on a time line. See <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"internal time"}><i>internal time</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>. 



**time zone** *n.* a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> multiple of 1/3600 between -24 (inclusive) and 24 (inclusive) that represents a time zone as a number of hours offset from Greenwich Mean Time. Time zone values increase with motion to the west, so Massachusetts, U.S.A. is in time zone 5, California, U.S.A. is time zone 8, and Moscow, Russia is time zone *-3* . (When “daylight savings time” is separately represented as an <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"return value"}><i>return value</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"time zone"}><i>time zone</i></GlossaryTerm> that accompanies it does not depend on whether daylight savings time is in effect.) 



**token** *n.* a textual representation for a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> or a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. See Section 2.3 



(Interpretation of Tokens). 



**top level form** *n.* a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> which is processed specially by <DictionaryLink  term={"compile-file"}><b>compile-file</b></DictionaryLink> for the purposes of enabling *compile time evaluation* of that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"top level form"}><i>Top level forms</i></GlossaryTerm> include those <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> which are not <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of any other <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, and certain other cases. See Section 3.2.3.1 (Processing of Top Level Forms). 



**trace output** *n.* the *output stream* which is the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> 



**\*trace-output\***. 







 



 



**tree** *n.* 1. a binary recursive data structure made up of *conses* and <GlossaryTerm  term={"atom"}><i>atoms</i></GlossaryTerm>: the *conses* are themselves also <GlossaryTerm  term={"tree"}><i>trees</i></GlossaryTerm> (sometimes called “subtrees” or “branches”), and the <GlossaryTerm  term={"atom"}><i>atoms</i></GlossaryTerm> are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 2. in general, any recursive data structure that has some notion of “branches” and *leaves*. 



<b>tree structure</b> <i>n.</i> (of a <i>tree</i><sub>1</sub>) the set of <i>conses</i> that make up the <i>tree</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>tree structure</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>tree</i> are not themselves part of its <i>tree structure</i> unless they are also <i>conses</i>. 



**true** *n.* any <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is not <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> and that is used to represent the success of a <GlossaryTerm  term={"predicate"}><i>predicate</i></GlossaryTerm> test. See <GlossaryTerm  term={"t"}><i>t</i></GlossaryTerm><sub>1</sub>. 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> *n.* 1. the canonical <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> of a <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. See Section 20.1.3 (Truenames). 2. a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> representing a <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm><sub>1</sub>. 



**two-way stream** *n.* a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"two-way-stream"}><b>two-way-stream</b></DictionaryLink>, which is a <GlossaryTerm  term={"bidirectional"}><i>bidirectional</i></GlossaryTerm> 



<GlossaryTerm styled={true} term={"composite stream"}><i>composite stream</i></GlossaryTerm> that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



<b>type</b> <i>n.</i> 1. a set of <i>objects</i>, usually with common structure, behavior, or purpose. (Note that the expression “<i>X</i> is of type <i>S<sub>a</sub></i>” naturally implies that “<i>X</i> is of type <i>S<sub>b</sub></i>” if <i>S<sub>a</sub></i> is a <i>subtype</i> of <i>S<sub>b</sub></i>.) 2. (immediately following the name of a <i>type</i>) a <i>subtype</i> of that <i>type</i>. “The type <b>vector</b> is an array type.” 



**type declaration** *n.* a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> that asserts that every reference to a specified <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> within the scope of the <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> results in some <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of the specified <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



**type equivalent** *adj.* (of two *types X* and *Y* ) having the same <GlossaryTerm  term={"element"}><i>elements</i></GlossaryTerm>; that is, *X* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of *Y* and *Y* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of *X*. 



**type expand** *n.* to fully expand a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , removing any references to <GlossaryTerm styled={true} term={"derived type"}><i>derived types</i></GlossaryTerm>. (Common Lisp provides no program interface to cause this to occur, but the semantics of Common Lisp are such that every <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> must be able to do 



this internally, and some situations involving <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> are most easily described in terms of a fully expanded <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .) 



**type specifier** *n.* an <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> that denotes a <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. “The symbol random-state, the list (integer 3 5), the list (and list (not null)), and the class named standard-class are type specifiers.” 



