 



Any <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> that is not a *potential number* , does not contain a *package marker* , and does not consist entirely of dots will always be interpreted as a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. Any <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> that is a *potential number* but does not fit the number syntax is a reserved <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> and has an <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> interpretation. In all other cases, the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is construed to be the name of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



Examples of the printed representation of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> are in Figure 2–15. For presentational simplicity, these examples assume that the *readtable case* of the *current readtable* is :upcase. 



|<p>FROBBOZ The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is FROBBOZ. </p><p>frobboz Another way to notate the same <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. </p><p>fRObBoz Yet another way to notate it. </p><p>unwind-protect A <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with a hyphen in its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. </p><p>+$ The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named +$. </p><p>1+ The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> named 1+. </p><p>+1 This is the *integer* 1, not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. </p><p>pascal style This <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has an underscore in its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. </p><p>file.rel.43 This <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has periods in its <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>. </p><p>\( The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is (. </p><p>\+1 The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is +1. </p><p>+\1 Also the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is +1. </p><p>\frobboz The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is fROBBOZ. </p><p>3\.14159265\s0 The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is 3.14159265s0. </p><p>3\.14159265\S0 A different <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is 3.14159265S0. 3.14159265s0 A possible *short float* approximation to *π*.</p>|

| :- |





**Figure 2–15. Examples of the printed representation of symbols (Part 1 of 2)** 











|<p>APL\\360 The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is APL\360. </p><p>apl\\360 Also the <i>symbol</i> whose <i>name</i> is APL\360. \(b<i><sup>∧</sup></i>2\)\ -\ 4*a*c The <i>name</i> is (B<i><sup>∧</sup></i>2) - 4*A*C. </p><p>Parentheses and two spaces in it. </p><p>\(\b<i><sup>∧</sup></i>2\)\ -\4*\a*\c The <i>name</i> is (b<i><sup>∧</sup></i>2) - 4*a*c. </p><p>Letters explicitly lowercase. </p><p>|"| The same as writing \". </p><p>|(b<i><sup>∧</sup></i>2) - 4*a*c| The <i>name</i> is (b<i><sup>∧</sup></i>2) - 4*a*c. </p><p>|frobboz| The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is frobboz, not FROBBOZ. </p><p>|APL\360| The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is APL360. </p><p>|APL\\360| The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is APL\360. </p><p>|apl\\360| The <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is apl\360. </p><p>|\|\|| Same as \|\| —the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is ||. </p><p>|(B<i><sup>∧</sup></i>2) - 4*A*C| The <i>name</i> is (B<i><sup>∧</sup></i>2) - 4*A*C. </p><p>Parentheses and two spaces in it. </p><p>|(b<i><sup>∧</sup></i>2) - 4*a*c| The <i>name</i> is (b<i><sup>∧</sup></i>2) - 4*a*c.</p>|

| :- |





**Figure 2–16. Examples of the printed representation of symbols (Part 2 of 2)** 



In the process of parsing a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> which *implementation-defined attributes* are removed from the <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> forming a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> that represents a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



When parsing the syntax for a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, the *Lisp reader* looks up the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of that <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the *current package*. This lookup may involve looking in other <GlossaryTerm  term={"package"}><i>packages</i></GlossaryTerm> whose *external symbols* are inherited by the *current package*. If the name is found, the corresponding <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is returned. If the name is not found (that is, there is no <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> of that name <GlossaryTerm  term={"accessible"}><i>accessible</i></GlossaryTerm> in the *current package*), 



a new <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is created and is placed in the *current package* as an *internal symbol*. The *current package* becomes the owner (*home package*) of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, and the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> becomes interned in the *current package*. If the name is later read again while this same <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm> is current, the same <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> will be found and returned. 



