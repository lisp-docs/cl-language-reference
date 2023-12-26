 



The <GlossaryTerm  term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm> initiates reading of a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>. <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> is called recursively to read successive <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> until a right parenthesis is found in the input <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. A <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> read is returned. Thus 



(a b c) 



is read as a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of three <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> (the <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> a, b, and c). The right parenthesis need not immediately follow the printed representation of the last <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>; <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> characters and comments may precede it. 



If no <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> precede the right parenthesis, it reads as a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of zero <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> (the <GlossaryTerm styled={true} term={"empty list"}><i>empty list</i></GlossaryTerm>). 



If a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> that is just a dot not immediately preceded by an escape character is read after some <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> then exactly one more <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> must follow the dot, possibly preceded or followed by <GlossaryTerm  term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> or a comment, followed by the right parenthesis: 



(a b c . d) 



This means that the <GlossaryTerm  term={"cdr"}><i>cdr</i></GlossaryTerm> of the last <GlossaryTerm  term={"cons"}><i>cons</i></GlossaryTerm> in the <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> is not <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, but rather the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> whose representation followed the dot. The above example might have been the result of evaluating 



(cons ’a (cons ’b (cons ’c ’d))) 



Similarly, 



(cons ’this-one ’that-one) → (this-one . that-one) 



It is permissible for the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> following the dot to be a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm>: 



(a b c d . (e f . (g))) *≡* (a b c d e f g) 



For information on how the *Lisp printer* prints <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm> and *conses*, see Section 22.1.3.5 (Printing Lists and Conses). 



