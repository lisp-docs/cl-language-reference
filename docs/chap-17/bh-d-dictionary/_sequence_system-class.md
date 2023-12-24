**sequence** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



*Sequences* are ordered collections of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>, called the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the *sequence*. 



The <ClLinks styled={true} term={"type"}><i>types</i></ClLinks> <ClLinks styled={true} term={"vector"}><b>vector</b></ClLinks> and the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"list"}><b>list</b></ClLinks> are *disjoint subtypes* of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"sequence"}><b>sequence</b></ClLinks>, but are not necessarily an *exhaustive partition* of *sequence*. 



When viewing a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> as a *sequence*, only the *active elements* of that <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> are considered <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of the *sequence*; that is, *sequence* operations respect the *fill pointer* when given *sequences* represented as <ClLinks styled={true} term={"vector"}><i>vectors</i></ClLinks>. 



