 



Any <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> that is not a *potential number* , does not contain a *package marker* , and does not consist entirely of dots will always be interpreted as a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. Any <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> that is a *potential number* but does not fit the number syntax is a reserved <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> and has an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> interpretation. In all other cases, the <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> is construed to be the name of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



Examples of the printed representation of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> are in Figure 2–15. For presentational simplicity, these examples assume that the *readtable case* of the *current readtable* is :upcase. 



|<p>FROBBOZ The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is FROBBOZ. </p><p>frobboz Another way to notate the same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. </p><p>fRObBoz Yet another way to notate it. </p><p>unwind-protect A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with a hyphen in its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. </p><p>+$ The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> named +$. </p><p>1+ The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> named 1+. </p><p>+1 This is the *integer* 1, not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. </p><p>pascal style This <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has an underscore in its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. </p><p>file.rel.43 This <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has periods in its <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. </p><p>\( The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is (. </p><p>\+1 The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is +1. </p><p>+\1 Also the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is +1. </p><p>\frobboz The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is fROBBOZ. </p><p>3\.14159265\s0 The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is 3.14159265s0. </p><p>3\.14159265\S0 A different <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is 3.14159265S0. 3.14159265s0 A possible *short float* approximation to *π*.</p>|

| :- |





**Figure 2–15. Examples of the printed representation of symbols (Part 1 of 2)** 











|<p>APL\\360 The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is APL\360. </p><p>apl\\360 Also the <i>symbol</i> whose <i>name</i> is APL\360. \(b<i><sup>∧</sup></i>2\)\ -\ 4*a*c The <i>name</i> is (B<i><sup>∧</sup></i>2) - 4*A*C. </p><p>Parentheses and two spaces in it. </p><p>\(\b<i><sup>∧</sup></i>2\)\ -\4*\a*\c The <i>name</i> is (b<i><sup>∧</sup></i>2) - 4*a*c. </p><p>Letters explicitly lowercase. </p><p>|"| The same as writing \". </p><p>|(b<i><sup>∧</sup></i>2) - 4*a*c| The <i>name</i> is (b<i><sup>∧</sup></i>2) - 4*a*c. </p><p>|frobboz| The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is frobboz, not FROBBOZ. </p><p>|APL\360| The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is APL360. </p><p>|APL\\360| The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is APL\360. </p><p>|apl\\360| The <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is apl\360. </p><p>|\|\|| Same as \|\| —the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is ||. </p><p>|(B<i><sup>∧</sup></i>2) - 4*A*C| The <i>name</i> is (B<i><sup>∧</sup></i>2) - 4*A*C. </p><p>Parentheses and two spaces in it. </p><p>|(b<i><sup>∧</sup></i>2) - 4*a*c| The <i>name</i> is (b<i><sup>∧</sup></i>2) - 4*a*c.</p>|

| :- |





**Figure 2–16. Examples of the printed representation of symbols (Part 2 of 2)** 



In the process of parsing a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> which *implementation-defined attributes* are removed from the <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> forming a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> that represents a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



When parsing the syntax for a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, the *Lisp reader* looks up the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the *current package*. This lookup may involve looking in other <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks> whose *external symbols* are inherited by the *current package*. If the name is found, the corresponding <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is returned. If the name is not found (that is, there is no <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> of that name <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the *current package*), 



a new <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is created and is placed in the *current package* as an *internal symbol*. The *current package* becomes the owner (*home package*) of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, and the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> becomes interned in the *current package*. If the name is later read again while this same <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is current, the same <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> will be found and returned. 



