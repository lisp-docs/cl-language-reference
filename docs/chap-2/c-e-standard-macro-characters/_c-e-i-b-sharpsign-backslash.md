 



**Syntax:** #\⟨x⟩ 



When the *token x* is a single <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> long, this parses as the literal *character char*. *Uppercase* and <ClLinks styled={true} term={"lowercase"}><i>lowercase</i></ClLinks> letters are distinguished after #\; #\A and #\a denote different *character objects*. Any single <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> works after #\, even those that are normally special to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>, such as <ClLinks styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></ClLinks> and <ClLinks styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></ClLinks>. 



In the single <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> case, the *x* must be followed by a non-constituent <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> . After #\ is read, the reader backs up over the <ClLinks styled={true} term={"slash"}><i>slash</i></ClLinks> and then reads a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks>, treating the initial <ClLinks styled={true} term={"slash"}><i>slash</i></ClLinks> as a *single escape character* (whether it really is or not in the *current readtable*). 



When the *token x* is more than one <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> long, the *x* must have the syntax of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> with no embedded *package markers*. In this case, the *sharpsign backslash* notation parses as the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is (string-upcase *x*); see Section 13.1.7 (Character Names). 



For information about how the *Lisp printer* prints *character objects*, see Section 22.1.3.2 (Printing Characters). 



