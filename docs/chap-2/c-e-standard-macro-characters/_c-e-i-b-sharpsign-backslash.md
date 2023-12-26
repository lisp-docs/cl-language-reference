 



**Syntax:** #\⟨x⟩ 



When the *token x* is a single <ClLinks  term={"character"}><i>character</i></ClLinks> long, this parses as the literal *character char*. <GlossaryTerm styled={true} term={"uppercase"}><i>Uppercase</i></GlossaryTerm> and <ClLinks  term={"lowercase"}><i>lowercase</i></ClLinks> letters are distinguished after #\; #\A and #\a denote different *character objects*. Any single <ClLinks  term={"character"}><i>character</i></ClLinks> works after #\, even those that are normally special to <ClLinks  term={"read"}><b>read</b></ClLinks>, such as <ClLinks  term={"left-parenthesis"}><i>left-parenthesis</i></ClLinks> and <ClLinks  term={"right-parenthesis"}><i>right-parenthesis</i></ClLinks>. 



In the single <ClLinks  term={"character"}><i>character</i></ClLinks> case, the *x* must be followed by a non-constituent <ClLinks  term={"character"}><i>character</i></ClLinks> . After #\ is read, the reader backs up over the <ClLinks  term={"slash"}><i>slash</i></ClLinks> and then reads a <ClLinks  term={"token"}><i>token</i></ClLinks>, treating the initial <ClLinks  term={"slash"}><i>slash</i></ClLinks> as a *single escape character* (whether it really is or not in the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>). 



When the *token x* is more than one <ClLinks  term={"character"}><i>character</i></ClLinks> long, the *x* must have the syntax of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> with no embedded <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm>. In this case, the *sharpsign backslash* notation parses as the <ClLinks  term={"character"}><i>character</i></ClLinks> whose <ClLinks  term={"name"}><i>name</i></ClLinks> is (string-upcase *x*); see Section 13.1.7 (Character Names). 



For information about how the *Lisp printer* prints *character objects*, see Section 22.1.3.2 (Printing Characters). 



