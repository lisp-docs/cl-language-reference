---
title: T
sidebar_position: 116
---

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



