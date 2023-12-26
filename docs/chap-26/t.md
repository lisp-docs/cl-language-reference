---
title: T
sidebar_position: 116
---

**T** 



<ClLinks  term={"t"}><b>t</b></ClLinks> *n.* 1. a. the <ClLinks  term={"boolean"}><i>boolean</i></ClLinks> representing true. b. the canonical <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> 



representing true. (Although any <ClLinks  term={"object"}><i>object</i></ClLinks> other than <ClLinks  term={"nil"}><b>nil</b></ClLinks> is considered <ClLinks  term={"true"}><i>true</i></ClLinks> as a 



<GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>, t is generally used when there is no special reason to prefer one such <ClLinks  term={"object"}><i>object</i></ClLinks> over another.) 2. the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> to which all <ClLinks  term={"object"}><i>objects</i></ClLinks> belong—the <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of all <ClLinks  term={"type"}><i>types</i></ClLinks> (including itself). 3. the <ClLinks  term={"name"}><i>name</i></ClLinks> of the <ClLinks  term={"superclass"}><i>superclass</i></ClLinks> of all *classes* except itself. 



**tag** *n.* 1. a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>. 2. a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>. 







 



 



**tail** *n.* (of a <ClLinks  term={"list"}><i>list</i></ClLinks>) an <ClLinks  term={"object"}><i>object</i></ClLinks> that is the <ClLinks  term={"same"}><i>same</i></ClLinks> as either some <ClLinks  term={"cons"}><i>cons</i></ClLinks> which makes up that <ClLinks  term={"list"}><i>list</i></ClLinks> or the <ClLinks  term={"atom"}><i>atom</i></ClLinks> (if any) which terminates the <ClLinks  term={"list"}><i>list</i></ClLinks>. “The empty list is a tail of every proper list.” 



**target** *n.* 1. (of a <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed stream</i></GlossaryTerm>) a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> of the <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed stream</i></GlossaryTerm>. “The target of a synonym stream is the value of its synonym stream symbol.” 2. (of a <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm>) the <ClLinks  term={"array"}><i>array</i></ClLinks> to which the <GlossaryTerm styled={true} term={"displaced array"}><i>displaced array</i></GlossaryTerm> is displaced. (In the case of a chain of <GlossaryTerm styled={true} term={"constructed stream"}><i>constructed streams</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"displaced array"}><i>displaced arrays</i></GlossaryTerm>, the unqualified term “<ClLinks  term={"target"}><i>target</i></ClLinks>” always refers to the immediate <ClLinks  term={"target"}><i>target</i></ClLinks> of the first item in the chain, not the immediate target of the last item.) 



**terminal I/O** *n.* the *bidirectional stream* that is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <ClLinks  term={"variable"}><i>variable</i></ClLinks> 



<ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>. 



**terminating** *n.* (of a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> ) being such that, if it appears while parsing a token, it terminates that token. See Section 2.2 (Reader Algorithm). 



**tertiary value** *n.* (of <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of a <ClLinks  term={"form"}><i>form</i></ClLinks>) the third <ClLinks  term={"value"}><i>value</i></ClLinks>, if any, or else <ClLinks  term={"nil"}><b>nil</b></ClLinks> if there are fewer than three <ClLinks  term={"value"}><i>values</i></ClLinks>. 



<ClLinks  term={"throw"}><b>throw</b></ClLinks> *v.* to transfer control and <ClLinks  term={"value"}><i>values</i></ClLinks> to a <ClLinks  term={"catch"}><i>catch</i></ClLinks>. See the <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> <ClLinks  term={"throw"}><b>throw</b></ClLinks>. **tilde** *n.* the <GlossaryTerm styled={true} term={"standard character"}><i>standard character</i></GlossaryTerm> that is called “tilde” (&#126;). See Figure 2–5. 



<ClLinks  term={"time"}><b>time</b></ClLinks> a representation of a point (*absolute time*) or an interval (*relative time*) on a time line. See <GlossaryTerm styled={true} term={"decoded time"}><i>decoded time</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"internal time"}><i>internal time</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm>. 



**time zone** *n.* a <ClLinks  term={"rational"}><i>rational</i></ClLinks> multiple of 1/3600 between -24 (inclusive) and 24 (inclusive) that represents a time zone as a number of hours offset from Greenwich Mean Time. Time zone values increase with motion to the west, so Massachusetts, U.S.A. is in time zone 5, California, U.S.A. is time zone 8, and Moscow, Russia is time zone *-3* . (When “daylight savings time” is separately represented as an <ClLinks  term={"argument"}><i>argument</i></ClLinks> or <GlossaryTerm styled={true} term={"return value"}><i>return value</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"time zone"}><i>time zone</i></GlossaryTerm> that accompanies it does not depend on whether daylight savings time is in effect.) 



**token** *n.* a textual representation for a <ClLinks  term={"number"}><i>number</i></ClLinks> or a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. See Section 2.3 



(Interpretation of Tokens). 



**top level form** *n.* a <ClLinks  term={"form"}><i>form</i></ClLinks> which is processed specially by <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> for the purposes of enabling *compile time evaluation* of that <ClLinks  term={"form"}><i>form</i></ClLinks>. <GlossaryTerm styled={true} term={"top level form"}><i>Top level forms</i></GlossaryTerm> include those <ClLinks  term={"form"}><i>forms</i></ClLinks> which are not <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of any other <ClLinks  term={"form"}><i>form</i></ClLinks>, and certain other cases. See Section 3.2.3.1 (Processing of Top Level Forms). 



**trace output** *n.* the *output stream* which is the <ClLinks  term={"value"}><i>value</i></ClLinks> of the <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variable</i></GlossaryTerm> 



**\*trace-output\***. 







 



 



**tree** *n.* 1. a binary recursive data structure made up of *conses* and <ClLinks  term={"atom"}><i>atoms</i></ClLinks>: the *conses* are themselves also <ClLinks  term={"tree"}><i>trees</i></ClLinks> (sometimes called “subtrees” or “branches”), and the <ClLinks  term={"atom"}><i>atoms</i></ClLinks> are terminal nodes (sometimes called *leaves*). Typically, the *leaves* represent data while the branches establish some relationship among that data. 2. in general, any recursive data structure that has some notion of “branches” and *leaves*. 



<b>tree structure</b> <i>n.</i> (of a <i>tree</i><sub>1</sub>) the set of <i>conses</i> that make up the <i>tree</i>. Note that while the <i>car</i> <sub>1<i>b</i></sub> component of each such <i>cons</i> is part of the <i>tree structure</i>, the <i>objects</i> that are the <i>cars</i><sub>2</sub> of each <i>cons</i> in the <i>tree</i> are not themselves part of its <i>tree structure</i> unless they are also <i>conses</i>. 



**true** *n.* any <ClLinks  term={"object"}><i>object</i></ClLinks> that is not <ClLinks  term={"false"}><i>false</i></ClLinks> and that is used to represent the success of a <ClLinks  term={"predicate"}><i>predicate</i></ClLinks> test. See <ClLinks  term={"t"}><i>t</i></ClLinks><sub>1</sub>. 



<ClLinks  term={"truename"}><b>truename</b></ClLinks> *n.* 1. the canonical <ClLinks  term={"filename"}><i>filename</i></ClLinks> of a <ClLinks  term={"file"}><i>file</i></ClLinks> in the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. See Section 20.1.3 (Truenames). 2. a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> representing a <ClLinks  term={"truename"}><i>truename</i></ClLinks><sub>1</sub>. 



**two-way stream** *n.* a <ClLinks  term={"stream"}><i>stream</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"two-way-stream"}><b>two-way-stream</b></ClLinks>, which is a <ClLinks  term={"bidirectional"}><i>bidirectional</i></ClLinks> 



<GlossaryTerm styled={true} term={"composite stream"}><i>composite stream</i></GlossaryTerm> that receives its input from an associated *input stream* and sends its output to an associated *output stream*. 



<b>type</b> <i>n.</i> 1. a set of <i>objects</i>, usually with common structure, behavior, or purpose. (Note that the expression “<i>X</i> is of type <i>S<sub>a</sub></i>” naturally implies that “<i>X</i> is of type <i>S<sub>b</sub></i>” if <i>S<sub>a</sub></i> is a <i>subtype</i> of <i>S<sub>b</sub></i>.) 2. (immediately following the name of a <i>type</i>) a <i>subtype</i> of that <i>type</i>. “The type <b>vector</b> is an array type.” 



**type declaration** *n.* a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> that asserts that every reference to a specified <ClLinks  term={"binding"}><i>binding</i></ClLinks> within the scope of the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> results in some <ClLinks  term={"object"}><i>object</i></ClLinks> of the specified <ClLinks  term={"type"}><i>type</i></ClLinks>. 



**type equivalent** *adj.* (of two *types X* and *Y* ) having the same <ClLinks  term={"element"}><i>elements</i></ClLinks>; that is, *X* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *Y* and *Y* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of *X*. 



**type expand** *n.* to fully expand a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , removing any references to <GlossaryTerm styled={true} term={"derived type"}><i>derived types</i></GlossaryTerm>. (Common Lisp provides no program interface to cause this to occur, but the semantics of Common Lisp are such that every <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> must be able to do 



this internally, and some situations involving <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> are most easily described in terms of a fully expanded <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .) 



**type specifier** *n.* an <ClLinks  term={"expression"}><i>expression</i></ClLinks> that denotes a <ClLinks  term={"type"}><i>type</i></ClLinks>. “The symbol random-state, the list (integer 3 5), the list (and list (not null)), and the class named standard-class are type specifiers.” 



