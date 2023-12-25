**boole** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink> *op integer-1 integer-2 → result-integer* 



**Arguments and Values:** 



*Op*—a *bit-wise logical operation specifier* . 



*integer-1*—an *integer* . 







 



 



<DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink> 



*integer-2*—an *integer* . 



*result-integer*—an *integer* . 



**Description:** 



<DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink> performs bit-wise logical operations on *integer-1* and *integer-2*, which are treated as if they were binary and in two’s complement representation. 



The operation to be performed and the return value are determined by *op*. 



<DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink> returns the values specified for any *op* in Figure 12–17. 



|**Op Result**|

| :- |

|<p><DictionaryLink styled={true} term={"boole-1"}><b>boole-1</b></DictionaryLink> *integer-1* </p><p><DictionaryLink styled={true} term={"boole-2"}><b>boole-2</b></DictionaryLink> *integer-2* </p><p><DictionaryLink styled={true} term={"boole-andc1"}><b>boole-andc1</b></DictionaryLink> and complement of *integer-1* with *integer-2* </p><p><DictionaryLink styled={true} term={"boole-andc2"}><b>boole-andc2</b></DictionaryLink> and *integer-1* with complement of *integer-2* </p><p><DictionaryLink styled={true} term={"boole-and"}><b>boole-and</b></DictionaryLink> and </p><p><DictionaryLink styled={true} term={"boole-c1"}><b>boole-c1</b></DictionaryLink> complement of *integer-1* </p><p><DictionaryLink styled={true} term={"boole-c2"}><b>boole-c2</b></DictionaryLink> complement of *integer-2* </p><p><DictionaryLink styled={true} term={"boole-clr"}><b>boole-clr</b></DictionaryLink> always 0 (all zero bits) </p><p><DictionaryLink styled={true} term={"boole-eqv"}><b>boole-eqv</b></DictionaryLink> equivalence (exclusive nor) </p><p><DictionaryLink styled={true} term={"boole-ior"}><b>boole-ior</b></DictionaryLink> inclusive or </p><p><DictionaryLink styled={true} term={"boole-nand"}><b>boole-nand</b></DictionaryLink> not-and </p><p><DictionaryLink styled={true} term={"boole-nor"}><b>boole-nor</b></DictionaryLink> not-or </p><p><DictionaryLink styled={true} term={"boole-orc1"}><b>boole-orc1</b></DictionaryLink> or complement of *integer-1* with *integer-2* </p><p><DictionaryLink styled={true} term={"boole-orc2"}><b>boole-orc2</b></DictionaryLink> or *integer-1* with complement of *integer-2* </p><p><DictionaryLink styled={true} term={"boole-set"}><b>boole-set</b></DictionaryLink> always -1 (all one bits) </p><p><DictionaryLink styled={true} term={"boole-xor"}><b>boole-xor</b></DictionaryLink> exclusive or</p>|





**Figure 12–17. Bit-Wise Logical Operations** 



**Examples:**
```lisp
 
(boole boole-ior 1 16) *→* 17 
(boole boole-and -2 5) *→* 4 
(boole boole-eqv 17 15) *→* -31 
;;; These examples illustrate the result of applying BOOLE and each 
;;; of the possible values of OP to each possible combination of bits. 
(progn 
(format t "~&Results of (BOOLE <op> #b0011 #b0101) ...~ 
~%–-Op–––-Decimal––-Binary––Bits–-~%") 
(dolist (symbol ’(boole-1 boole-2 boole-and boole-andc1 
boole-andc2 boole-c1 boole-c2 boole-clr 
boole-eqv boole-ior boole-nand boole-nor 

 
 
**boole** 
boole-orc1 boole-orc2 boole-set boole-xor)) 
(let ((result (boole (symbol-value symbol) #b0011 #b0101))) 
(format t "~& ~A~13T~3,’ D~23T~:\*~5,’ B~31T ...~4,’0B~%" 
symbol result (logand result #b1111))))) 
▷ Results of (BOOLE <op> #b0011 #b0101) ... 
▷ –-Op–––-Decimal––-Binary––Bits–- 
▷ BOOLE-1 3 11 ...0011 
▷ BOOLE-2 5 101 ...0101 
▷ BOOLE-AND 1 1 ...0001 
▷ BOOLE-ANDC1 4 100 ...0100 
▷ BOOLE-ANDC2 2 10 ...0010 
▷ BOOLE-C1 -4 -100 ...1100 
▷ BOOLE-C2 -6 -110 ...1010 
▷ BOOLE-CLR 0 0 ...0000 
▷ BOOLE-EQV -7 -111 ...1001 
▷ BOOLE-IOR 7 111 ...0111 
▷ BOOLE-NAND -2 -10 ...1110 
▷ BOOLE-NOR -8 -1000 ...1000 
▷ BOOLE-ORC1 -3 -11 ...1101 
▷ BOOLE-ORC2 -5 -101 ...1011 
▷ BOOLE-SET -1 -1 ...1111 
▷ BOOLE-XOR 6 110 ...0110 
*→* NIL 

```
**Exceptional Situations:** 



Should signal <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if its first argument is not a *bit-wise logical operation specifier* or if any subsequent argument is not an *integer* . 



**See Also:** 



<DictionaryLink styled={true} term={"logand"}><b>logand</b></DictionaryLink> 



**Notes:** 



In general, 



(boole boole-and x y) *≡* (logand x y) 



<GlossaryTerm styled={true} term={"programmer"}><i>Programmers</i></GlossaryTerm> who would prefer to use numeric indices rather than *bit-wise logical operation specifiers* can get an equivalent effect by a technique such as the following: 



;; The order of the values in this ‘table’ are such that 



;; (logand (boole (elt boole-n-vector n) #b0101 #b0011) #b1111) =&gt; n 



(defconstant boole-n-vector 



(vector boole-clr boole-and boole-andc1 boole-2 



boole-andc2 boole-1 boole-xor boole-ior 



boole-nor boole-eqv boole-c1 boole-orc1 







 



 



boole-c2 boole-orc2 boole-nand boole-set)) 



*→* BOOLE-N-VECTOR 



(proclaim ’(inline boole-n)) 



*→ implementation-dependent* 



(defun boole-n (n integer &amp;rest more-integers) 



(apply #’boole (elt boole-n-vector n) integer more-integers)) 



*→* BOOLE-N 



(boole-n #b0111 5 3) *→* 7 



(boole-n #b0001 5 3) *→* 1 



(boole-n #b1101 5 3) *→* -3 



(loop for n from #b0000 to #b1111 collect (boole-n n 5 3)) 



*→* (0 1 2 3 4 5 6 7 -8 -7 -6 -5 -4 -3 -2 -1) 



<b><sup>boole-1, boole-2, boole-and, boole-andc1, boole</sup> andc2, boole-c1, boole-c2, boole-clr, boole-eqv, boole-ior, boole-nand, boole-nor, boole-orc1, boole-orc2, boole-set, boole-xor</b> <i>Constant Variable</i> 



**Constant Value:** 



The identity and nature of the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of each of these <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, except that it must be <GlossaryTerm styled={true} term={"distinct"}><i>distinct</i></GlossaryTerm> from each of the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of the others, and it must be a valid first <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink>. 



**Description:** 



Each of these <GlossaryTerm styled={true} term={"constant"}><i>constants</i></GlossaryTerm> has a <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> which is one of the sixteen possible *bit-wise logical operation specifiers*. 



**Examples:**
```lisp

(boole boole-ior 1 16) *→* 17 
(boole boole-and -2 5) *→* 4 
(boole boole-eqv 17 15) *→* -31 

```
**See Also:** 



<DictionaryLink styled={true} term={"boole"}><b>boole</b></DictionaryLink> 







 



 



**logand, logandc1, logandc2, logeqv, logior, lognand,** *. . .* 



