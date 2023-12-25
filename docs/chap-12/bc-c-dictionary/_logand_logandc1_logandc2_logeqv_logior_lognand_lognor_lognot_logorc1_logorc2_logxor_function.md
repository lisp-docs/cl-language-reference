**logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"logand"}><b>logand</b></ClLinks> &amp;rest *integers → result-integer* 



<ClLinks  term={"logandc1"}><b>logandc1</b></ClLinks> *integer-1 integer-2 → result-integer* 



<ClLinks  term={"logandc2"}><b>logandc2</b></ClLinks> *integer-1 integer-2 → result-integer* 



<ClLinks  term={"logeqv"}><b>logeqv</b></ClLinks> &amp;rest *integers → result-integer* 



<ClLinks  term={"logior"}><b>logior</b></ClLinks> &amp;rest *integers → result-integer* 



<ClLinks  term={"lognand"}><b>lognand</b></ClLinks> *integer-1 integer-2 → result-integer* 



<ClLinks  term={"lognor"}><b>lognor</b></ClLinks> *integer-1 integer-2 → result-integer* 



<ClLinks  term={"lognot"}><b>lognot</b></ClLinks> *integer → result-integer* 



<ClLinks  term={"logorc1"}><b>logorc1</b></ClLinks> *integer-1 integer-2 → result-integer* 



<ClLinks  term={"logorc2"}><b>logorc2</b></ClLinks> *integer-1 integer-2 → result-integer* 



<ClLinks  term={"logxor"}><b>logxor</b></ClLinks> &amp;rest *integers → result-integer* 



**Arguments and Values:** 



*integers*—*integers*. 



*integer*—an *integer* . 



*integer-1*—an *integer* . 



*integer-2*—an *integer* . 



*result-integer*—an *integer* . 



**Description:** 



The <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"logandc1"}><b>logandc1</b></ClLinks>, <ClLinks  term={"logandc2"}><b>logandc2</b></ClLinks>, <ClLinks  term={"logand"}><b>logand</b></ClLinks>, <ClLinks  term={"logeqv"}><b>logeqv</b></ClLinks>, <ClLinks  term={"logior"}><b>logior</b></ClLinks>, <ClLinks  term={"lognand"}><b>lognand</b></ClLinks>, <ClLinks  term={"lognor"}><b>lognor</b></ClLinks>, <ClLinks  term={"lognot"}><b>lognot</b></ClLinks>, <ClLinks  term={"logorc1"}><b>logorc1</b></ClLinks>, <ClLinks  term={"logorc2"}><b>logorc2</b></ClLinks>, and <ClLinks  term={"logxor"}><b>logxor</b></ClLinks> perform bit-wise logical operations on their <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, that are treated as if they were binary. 



Figure 12–18 lists the meaning of each of the <ClLinks  term={"function"}><i>functions</i></ClLinks>. Where an ‘identity’ is shown, it indicates the *value yielded* by the <ClLinks  term={"function"}><i>function</i></ClLinks> when no <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are supplied. 







 



 



**logand, logandc1, logandc2, logeqv, logior, lognand,** *. . .* 



|**Function Identity Operation performed**|

| :- |

|<p><ClLinks  term={"logandc1"}><b>logandc1</b></ClLinks> — and complement of *integer-1* with *integer-2* <ClLinks  term={"logandc2"}><b>logandc2</b></ClLinks> — and *integer-1* with complement of *integer-2* <ClLinks  term={"logand"}><b>logand</b></ClLinks> -1 and </p><p><ClLinks  term={"logeqv"}><b>logeqv</b></ClLinks> -1 equivalence (exclusive nor) </p><p><ClLinks  term={"logior"}><b>logior</b></ClLinks> 0 inclusive or </p><p><ClLinks  term={"lognand"}><b>lognand</b></ClLinks> — complement of *integer-1* and *integer-2* <ClLinks  term={"lognor"}><b>lognor</b></ClLinks> — complement of *integer-1* or *integer-2* <ClLinks  term={"lognot"}><b>lognot</b></ClLinks> — complement </p><p><ClLinks  term={"logorc1"}><b>logorc1</b></ClLinks> — or complement of *integer-1* with *integer-2* <ClLinks  term={"logorc2"}><b>logorc2</b></ClLinks> — or *integer-1* with complement of *integer-2* <ClLinks  term={"logxor"}><b>logxor</b></ClLinks> 0 exclusive or</p>|





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



Should signal <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if any argument is not an *integer* . 



**See Also:** 



<ClLinks  term={"boole"}><b>boole</b></ClLinks> 



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



