 



The <GlossaryTerm styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm> initiates reading of a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> is called recursively to read successive <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> until a right parenthesis is found in the input <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> read is returned. Thus 



(a b c) 



is read as a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of three <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> (the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> a, b, and c). The right parenthesis need not immediately follow the printed representation of the last <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> characters and comments may precede it. 



If no <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> precede the right parenthesis, it reads as a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of zero <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> (the *empty list*). 



If a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> that is just a dot not immediately preceded by an escape character is read after some <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> then exactly one more <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> must follow the dot, possibly preceded or followed by <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> or a comment, followed by the right parenthesis: 



(a b c . d) 



This means that the <GlossaryTerm styled={true} term={"cdr"}><i>cdr</i></GlossaryTerm> of the last <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, but rather the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> whose representation followed the dot. The above example might have been the result of evaluating 



(cons ’a (cons ’b (cons ’c ’d))) 



Similarly, 



(cons ’this-one ’that-one) *→* (this-one . that-one) 



It is permissible for the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> following the dot to be a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>: 



(a b c d . (e f . (g))) *≡* (a b c d e f g) 



For information on how the *Lisp printer* prints <GlossaryTerm styled={true} term={"list"}><i>lists</i></GlossaryTerm> and *conses*, see Section 22.1.3.5 (Printing Lists and Conses). 



