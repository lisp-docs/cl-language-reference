**bit, sbit** *Accessor* 



**Syntax:** 



**bit** *bit-array* &rest *subscripts → bit* 



**sbit** *bit-array* &rest *subscripts → bit* 



**(setf (bit** *bit-array* &rest *subscripts***)** *new-bit***)** 



**(setf (sbit** *bit-array* &rest *subscripts***)** *new-bit***)** 



**Arguments and Values:** 



*bit-array*—for **bit**, a *bit array*; for **sbit**, a *simple bit array*. 



*subscripts*—a *list* of *valid array indices* for the *bit-array*. 



*bit*—a *bit*. 



**Description:** 



**bit** and **sbit** *access* the *bit-array element* specified by *subscripts*. 



These *functions* ignore the *fill pointer* when *accessing elements*. 



**Examples:**
```lisp
 



(bit (setq ba (make-array 8 



:element-type ’bit 



:initial-element 1)) 



\3) *→* 1 



(setf (bit ba 3) 0) *→* 0 



(bit ba 3) *→* 0 



(sbit ba 5) *→* 1 



(setf (sbit ba 5) 1) *→* 1 







 



 



(sbit ba 5) *→* 1 




```
**See Also:** 



**aref**, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



**bit** and **sbit** are like **aref** except that they require *arrays* to be a *bit array* and a *simple bit array*, respectively. 



**bit** and **sbit**, unlike **char** and **schar**, allow the first argument to be an *array* of any *rank*. 



<b><sup>bit-and, bit-andc1, bit-andc2, bit-eqv, bit-ior, bit</sup> nand, bit-nor, bit-not, bit-orc1, bit-orc2, bit-xor</b> <i>Function</i> 



**Syntax:** 



**bit-and** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-andc1** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-andc2** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-eqv** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-ior** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-nand** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-nor** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-orc1** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-orc2** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-xor** *bit-array1 bit-array2* &optional *opt-arg → resulting-bit-array* 



**bit-not** *bit-array* &optional *opt-arg → resulting-bit-array* 



**Arguments and Values:** 



*bit-array*, *bit-array1*, *bit-array2*—a *bit array*. 



*Opt-arg*—a *bit array*, or **t**, or **nil**. The default is **nil**. 



*Bit-array*, *bit-array1*, *bit-array2*, and *opt-arg* (if an *array*) must all be of the same *rank* and *dimensions*. 



*resulting-bit-array*—a *bit array*. 



**Description:** 



These functions perform bit-wise logical operations on *bit-array1* and *bit-array2* and return an *array* of matching *rank* and *dimensions*, such that any given bit of the result is produced by operating on corresponding bits from each of the arguments. 







 



 



In the case of **bit-not**, an *array* of *rank* and *dimensions* matching *bit-array* is returned that contains a copy of *bit-array* with all the bits inverted. 



If *opt-arg* is of type (array bit) the contents of the result are destructively placed into *opt-arg*. If *opt-arg* is the symbol **t**, *bit-array* or *bit-array1* is replaced with the result; if *opt-arg* is **nil** or omitted, a new *array* is created to contain the result. 



Figure 15–4 indicates the logical operation performed by each of the *functions*. 



|**Function Operation**|

| :- |

|<p>**bit-and** and </p><p>**bit-eqv** equivalence (exclusive nor) </p><p>**bit-not** complement </p><p>**bit-ior** inclusive or </p><p>**bit-xor** exclusive or </p><p>**bit-nand** complement of *bit-array1* and *bit-array2* </p><p>**bit-nor** complement of *bit-array1* or *bit-array2* </p><p>**bit-andc1** and complement of *bit-array1* with *bit-array2* </p><p>**bit-andc2** and *bit-array1* with complement of *bit-array2* </p><p>**bit-orc1** or complement of *bit-array1* with *bit-array2* </p><p>**bit-orc2** or *bit-array1* with complement of *bit-array2*</p>|





**Figure 15–4. Bit-wise Logical Operations on Bit Arrays** 



**Examples:** 



(bit-and (setq ba #\*11101010) #\*01101011) *→* #\*01101010 



(bit-and #\*1100 #\*1010) *→* #\*1000 



(bit-andc1 #\*1100 #\*1010) *→* #\*0010 



(setq rba (bit-andc2 ba #\*00110011 t)) *→* #\*11001000 



(eq rba ba) *→ true* 



(bit-not (setq ba #\*11101010)) *→* #\*00010101 



(setq rba (bit-not ba 



(setq tba (make-array 8 



:element-type ’bit)))) 



*→* #\*00010101 



(equal rba tba) *→ true* 



(bit-xor #\*1100 #\*1010) *→* #\*0110 



**See Also:** 



**lognot**, **logand** 







 



 



