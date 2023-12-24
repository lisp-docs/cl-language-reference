 



The KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> contains <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks>, called <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks><sub>1</sub>, that are typically used as special markers in <ClLinks styled={true} term={"program"}><i>programs</i></ClLinks> and their associated data <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks><sub>1</sub>. 



*Symbol tokens* that start with a *package marker* are parsed by the *Lisp reader* as <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>; see Section 2.3.4 (Symbols as Tokens). This makes it notationally convenient to use <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks> when communicating between programs in different <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. For example, the mechanism for passing *keyword parameters* in a <ClLinks styled={true} term={"call"}><i>call</i></ClLinks> uses <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks><sub>1</sub> to name the corresponding <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>; see Section 3.4.1 (Ordinary Lambda Lists). 



<ClLinks styled={true} term={"symbol"}><i>Symbols</i></ClLinks> in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> are, by definition, of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"keyword"}><b>keyword</b></ClLinks>. 



