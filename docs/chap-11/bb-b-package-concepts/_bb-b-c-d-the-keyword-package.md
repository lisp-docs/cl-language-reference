 



The KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> contains <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>, called <ClLinks  term={"keyword"}><i>keywords</i></ClLinks><sub>1</sub>, that are typically used as special markers in <ClLinks  term={"program"}><i>programs</i></ClLinks> and their associated data <ClLinks  term={"expression"}><i>expressions</i></ClLinks><sub>1</sub>. 



*Symbol tokens* that start with a *package marker* are parsed by the *Lisp reader* as <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks>; see Section 2.3.4 (Symbols as Tokens). This makes it notationally convenient to use <ClLinks  term={"keyword"}><i>keywords</i></ClLinks> when communicating between programs in different <ClLinks  term={"package"}><i>packages</i></ClLinks>. For example, the mechanism for passing *keyword parameters* in a <ClLinks  term={"call"}><i>call</i></ClLinks> uses <ClLinks  term={"keyword"}><i>keywords</i></ClLinks><sub>1</sub> to name the corresponding <ClLinks  term={"argument"}><i>arguments</i></ClLinks>; see Section 3.4.1 (Ordinary Lambda Lists). 



<ClLinks  term={"symbol"}><i>Symbols</i></ClLinks> in the KEYWORD <ClLinks  term={"package"}><i>package</i></ClLinks> are, by definition, of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"keyword"}><b>keyword</b></ClLinks>. 



