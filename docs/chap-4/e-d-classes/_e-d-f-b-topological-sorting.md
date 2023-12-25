 



Topological sorting proceeds by finding a class <i>C</i> in <i>S<sub>C</sub></i> such that no other <i>class</i> precedes that element according to the elements in <i>R</i>. The class <i>C</i> is placed first in the result. Remove <i>C</i> from <i>S<sub>C</sub></i> , and remove all pairs of the form (<i>C, D</i>), <i>D ∈ S<sub>C</sub></i> , from <i>R</i>. Repeat the process, adding <i>classes</i> with no predecessors to the end of the result. Stop when no element can be found that has no predecessor. 



If <i>S<sub>C</sub></i> is not empty and the process has stopped, the set <i>R</i> is inconsistent. If every <i>class</i> in the finite set of <i>classes</i> is preceded by another, then <i>R</i> contains a loop. That is, there is a chain of classes <i>C</i><sub>1</sub><i>, . . . , C<sub>n</sub></i> such that <i>C<sub>i</sub></i> precedes <i>C<sub>i</sub></i>+1, 1 <i>≤ i</i> &lt; <i>n</i>, and <i>C<sub>n</sub></i> precedes <i>C</i><sub>1</sub>. 



Sometimes there are several <i>classes</i> from <i>S<sub>C</sub></i> with no predecessors. In this case select the one that has a direct <i>subclass</i> rightmost in the <i>class precedence list</i> computed so far. (If there is no such candidate <i>class</i>, <i>R</i> does not generate a partial ordering—the <i>R<sub>c</sub></i>, <i>c ∈ S<sub>C</sub></i> , are inconsistent.)  







In more precise terms, let <i>\{N</i><sub>1</sub><i>, . . . , N<sub>m</sub>\}</i>, <i>m ≥</i> 2, be the <i>classes</i> from <i>S<sub>C</sub></i> with no predecessors. Let (<i>C</i><sub>1</sub> <i>. . . C<sub>n</sub></i>), <i>n ≥</i> 1, be the <i>class precedence list</i> constructed so far. <i>C</i><sub>1</sub> is the most specific <i>class</i>, and <i>C<sub>n</sub></i> is the least specific. Let 1 <i>≤ j ≤ n</i> be the largest number such that there exists an <i>i</i> where 1 <i>≤ i ≤ m</i> and <i>N<sub>i</sub></i>is a direct <i>superclass</i> of <i>C<sub>j</sub></i> ; <i>N<sub>i</sub></i>is placed next. 



The effect of this rule for selecting from a set of *classes* with no predecessors is that the *classes* in a simple <GlossaryTerm styled={true} term={"superclass"}><i>superclass</i></GlossaryTerm> chain are adjacent in the *class precedence list* and that *classes* in each relatively separated subgraph are adjacent in the *class precedence list*. For example, let <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>1</sub> and <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>2</sub> be subgraphs whose only element in common is the class *J*. Suppose that no superclass of *J* appears in either <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>1</sub> or <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>2</sub>, and that *J* is in the superclass chain of every class in both <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>1</sub> and <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>2</sub>. Let *C*<sub>1</sub> be the bottom of <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>1</sub>; and let *C*<sub>2</sub> be the bottom of <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>2</sub>. Suppose *C* is a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose direct *superclasses* are *C*<sub>1</sub> and *C*<sub>2</sub> in that order, then the *class precedence list* for *C* starts with *C* and is followed by all *classes* in <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>1</sub> except *J*. All the *classes* of <GlossaryTerm styled={true} term={"t"}><i>T</i></GlossaryTerm><sub>2</sub> are next. The *class J* and its *superclasses* appear last. 



