 



The <ClLinks  term={"left-parenthesis"}><i>left-parenthesis</i></ClLinks> initiates reading of a <ClLinks  term={"list"}><i>list</i></ClLinks>. <ClLinks  term={"read"}><b>read</b></ClLinks> is called recursively to read successive <ClLinks  term={"object"}><i>objects</i></ClLinks> until a right parenthesis is found in the input <ClLinks  term={"stream"}><i>stream</i></ClLinks>. A <ClLinks  term={"list"}><i>list</i></ClLinks> of the <ClLinks  term={"object"}><i>objects</i></ClLinks> read is returned. Thus 



(a b c) 



is read as a <ClLinks  term={"list"}><i>list</i></ClLinks> of three <ClLinks  term={"object"}><i>objects</i></ClLinks> (the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> a, b, and c). The right parenthesis need not immediately follow the printed representation of the last <ClLinks  term={"object"}><i>object</i></ClLinks>; <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> characters and comments may precede it. 



If no <ClLinks  term={"object"}><i>objects</i></ClLinks> precede the right parenthesis, it reads as a <ClLinks  term={"list"}><i>list</i></ClLinks> of zero <ClLinks  term={"object"}><i>objects</i></ClLinks> (the *empty list*). 



If a <ClLinks  term={"token"}><i>token</i></ClLinks> that is just a dot not immediately preceded by an escape character is read after some <ClLinks  term={"object"}><i>object</i></ClLinks> then exactly one more <ClLinks  term={"object"}><i>object</i></ClLinks> must follow the dot, possibly preceded or followed by <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> or a comment, followed by the right parenthesis: 



(a b c . d) 



This means that the <ClLinks  term={"cdr"}><i>cdr</i></ClLinks> of the last <ClLinks  term={"cons"}><i>cons</i></ClLinks> in the <ClLinks  term={"list"}><i>list</i></ClLinks> is not <ClLinks  term={"nil"}><b>nil</b></ClLinks>, but rather the <ClLinks  term={"object"}><i>object</i></ClLinks> whose representation followed the dot. The above example might have been the result of evaluating 



(cons ’a (cons ’b (cons ’c ’d))) 



Similarly, 



(cons ’this-one ’that-one) → (this-one . that-one) 



It is permissible for the <ClLinks  term={"object"}><i>object</i></ClLinks> following the dot to be a <ClLinks  term={"list"}><i>list</i></ClLinks>: 



(a b c d . (e f . (g))) *≡* (a b c d e f g) 



For information on how the *Lisp printer* prints <ClLinks  term={"list"}><i>lists</i></ClLinks> and *conses*, see Section 22.1.3.5 (Printing Lists and Conses). 



