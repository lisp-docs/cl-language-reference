 



**Syntax:** #\⟨x⟩ 



When the *token x* is a single <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> long, this parses as the literal *character char*. *Uppercase* and <GlossaryTerm styled={true} term={"lowercase"}><i>lowercase</i></GlossaryTerm> letters are distinguished after #\; #\A and #\a denote different *character objects*. Any single <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> works after #\, even those that are normally special to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>, such as <GlossaryTerm styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></GlossaryTerm>. 



In the single <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> case, the *x* must be followed by a non-constituent <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . After #\ is read, the reader backs up over the <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> and then reads a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, treating the initial <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> as a *single escape character* (whether it really is or not in the *current readtable*). 



When the *token x* is more than one <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> long, the *x* must have the syntax of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> with no embedded *package markers*. In this case, the *sharpsign backslash* notation parses as the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is (string-upcase *x*); see Section 13.1.7 (Character Names). 



For information about how the *Lisp printer* prints *character objects*, see Section 22.1.3.2 (Printing Characters). 



