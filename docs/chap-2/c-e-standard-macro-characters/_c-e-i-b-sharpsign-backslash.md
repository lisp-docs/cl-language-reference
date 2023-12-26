 



**Syntax:** #\⟨x⟩ 



When the *token x* is a single <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> long, this parses as the literal *character char*. <GlossaryTerm styled={true} term={"uppercase"}><i>Uppercase</i></GlossaryTerm> and <GlossaryTerm  term={"lowercase"}><i>lowercase</i></GlossaryTerm> letters are distinguished after #\; #\A and #\a denote different *character objects*. Any single <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> works after #\, even those that are normally special to <DictionaryLink  term={"read"}><b>read</b></DictionaryLink>, such as <GlossaryTerm  term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm> and <GlossaryTerm  term={"right-parenthesis"}><i>right-parenthesis</i></GlossaryTerm>. 



In the single <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> case, the *x* must be followed by a non-constituent <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . After #\ is read, the reader backs up over the <GlossaryTerm  term={"slash"}><i>slash</i></GlossaryTerm> and then reads a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, treating the initial <GlossaryTerm  term={"slash"}><i>slash</i></GlossaryTerm> as a *single escape character* (whether it really is or not in the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>). 



When the *token x* is more than one <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> long, the *x* must have the syntax of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> with no embedded <GlossaryTerm styled={true} term={"package marker"}><i>package markers</i></GlossaryTerm>. In this case, the *sharpsign backslash* notation parses as the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> whose <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is (string-upcase *x*); see Section 13.1.7 (Character Names). 



For information about how the *Lisp printer* prints *character objects*, see Section 22.1.3.2 (Printing Characters). 



