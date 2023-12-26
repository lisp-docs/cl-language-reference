**logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"logand"}><b>logand</b></DictionaryLink> &amp;rest *integers → result-integer* 



<DictionaryLink  term={"logandc1"}><b>logandc1</b></DictionaryLink> *integer-1 integer-2 → result-integer* 



<DictionaryLink  term={"logandc2"}><b>logandc2</b></DictionaryLink> *integer-1 integer-2 → result-integer* 



<DictionaryLink  term={"logeqv"}><b>logeqv</b></DictionaryLink> &amp;rest *integers → result-integer* 



<DictionaryLink  term={"logior"}><b>logior</b></DictionaryLink> &amp;rest *integers → result-integer* 



<DictionaryLink  term={"lognand"}><b>lognand</b></DictionaryLink> *integer-1 integer-2 → result-integer* 



<DictionaryLink  term={"lognor"}><b>lognor</b></DictionaryLink> *integer-1 integer-2 → result-integer* 



<DictionaryLink  term={"lognot"}><b>lognot</b></DictionaryLink> *integer → result-integer* 



<DictionaryLink  term={"logorc1"}><b>logorc1</b></DictionaryLink> *integer-1 integer-2 → result-integer* 



<DictionaryLink  term={"logorc2"}><b>logorc2</b></DictionaryLink> *integer-1 integer-2 → result-integer* 



<DictionaryLink  term={"logxor"}><b>logxor</b></DictionaryLink> &amp;rest *integers → result-integer* 



**Arguments and Values:** 



*integers*—*integers*. 



*integer*—an *integer* . 



*integer-1*—an *integer* . 



*integer-2*—an *integer* . 



*result-integer*—an *integer* . 



**Description:** 



The <ClLinks  term={"function"}><i>functions</i></ClLinks> <DictionaryLink  term={"logandc1"}><b>logandc1</b></DictionaryLink>, <DictionaryLink  term={"logandc2"}><b>logandc2</b></DictionaryLink>, <DictionaryLink  term={"logand"}><b>logand</b></DictionaryLink>, <DictionaryLink  term={"logeqv"}><b>logeqv</b></DictionaryLink>, <DictionaryLink  term={"logior"}><b>logior</b></DictionaryLink>, <DictionaryLink  term={"lognand"}><b>lognand</b></DictionaryLink>, <DictionaryLink  term={"lognor"}><b>lognor</b></DictionaryLink>, <DictionaryLink  term={"lognot"}><b>lognot</b></DictionaryLink>, <DictionaryLink  term={"logorc1"}><b>logorc1</b></DictionaryLink>, <DictionaryLink  term={"logorc2"}><b>logorc2</b></DictionaryLink>, and <DictionaryLink  term={"logxor"}><b>logxor</b></DictionaryLink> perform bit-wise logical operations on their <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, that are treated as if they were binary. 



Figure 12–18 lists the meaning of each of the <ClLinks  term={"function"}><i>functions</i></ClLinks>. Where an ‘identity’ is shown, it indicates the *value yielded* by the <ClLinks  term={"function"}><i>function</i></ClLinks> when no <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are supplied. 







 



 



**logand, logandc1, logandc2, logeqv, logior, lognand,** *. . .* 



|**Function Identity Operation performed**|

| :- |

|<p><DictionaryLink  term={"logandc1"}><b>logandc1</b></DictionaryLink> — and complement of *integer-1* with *integer-2* <DictionaryLink  term={"logandc2"}><b>logandc2</b></DictionaryLink> — and *integer-1* with complement of *integer-2* <DictionaryLink  term={"logand"}><b>logand</b></DictionaryLink> -1 and </p><p><DictionaryLink  term={"logeqv"}><b>logeqv</b></DictionaryLink> -1 equivalence (exclusive nor) </p><p><DictionaryLink  term={"logior"}><b>logior</b></DictionaryLink> 0 inclusive or </p><p><DictionaryLink  term={"lognand"}><b>lognand</b></DictionaryLink> — complement of *integer-1* and *integer-2* <DictionaryLink  term={"lognor"}><b>lognor</b></DictionaryLink> — complement of *integer-1* or *integer-2* <DictionaryLink  term={"lognot"}><b>lognot</b></DictionaryLink> — complement </p><p><DictionaryLink  term={"logorc1"}><b>logorc1</b></DictionaryLink> — or complement of *integer-1* with *integer-2* <DictionaryLink  term={"logorc2"}><b>logorc2</b></DictionaryLink> — or *integer-1* with complement of *integer-2* <DictionaryLink  term={"logxor"}><b>logxor</b></DictionaryLink> 0 exclusive or</p>|





**Figure 12–18. Bit-wise Logical Operations on Integers** 



Negative *integers* are treated as if they were in two’s-complement notation. 



**Examples:**
```lisp
(logior 1 2 4 8) → 15 
(logxor 1 3 7 15) → 10 
(logeqv) → -1 
(logand 16 31) → 16 
(lognot 0) → -1 
(lognot 1) → -2 
(lognot -1) → 0 
(lognot (1+ (lognot 1000))) → 999 
;;; In the following example, m is a mask. For each bit in 
;;; the mask that is a 1, the corresponding bits in x and y are 
;;; exchanged. For each bit in the mask that is a 0, the 
;;; corresponding bits of x and y are left unchanged. 
(flet ((show (m x y) 
	 (format t "~%m = #o~6,’0O~%x = #o~6,’0O~%y = #o~6,’0O~%" 
		 m x y))) 
  (let ((m #o007750) 
	(x #o452576) 
	(y #o317407)) 
    (show m x y) 
    (let ((z (logand (logxor x y) m))) 
      (setq x (logxor z x)) 
      (setq y (logxor z y)) 
      (show m x y)))) 
▷ m = #o007750 

▷ x = #o452576 
▷ y = #o317407 
▷ 
▷ m = #o007750 
▷ x = #o457426 
▷ y = #o312557 
→ NIL 
```
**Exceptional Situations:** 



Should signal <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if any argument is not an *integer* . 



**See Also:** 



<DictionaryLink  term={"boole"}><b>boole</b></DictionaryLink> 



**Notes:** 



(logbitp *k* -1) returns <ClLinks  term={"true"}><i>true</i></ClLinks> for all values of *k*. 



Because the following functions are not associative, they take exactly two arguments rather than any number of arguments. 



(lognand *n1 n2*) *≡* (lognot (logand *n1 n2*)) 



(lognor *n1 n2*) *≡* (lognot (logior *n1 n2*)) 



(logandc1 *n1 n2*) *≡* (logand (lognot *n1*) *n2*) 



(logandc2 *n1 n2*) *≡* (logand *n1* (lognot *n2*)) 



(logiorc1 *n1 n2*) *≡* (logior (lognot *n1*) *n2*) 



(logiorc2 *n1 n2*) *≡* (logior *n1* (lognot *n2*)) 



(logbitp *j* (lognot *x*)) *≡* (not (logbitp *j x*)) 



