**bit, sbit** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks> *bit-array* &amp;rest *subscripts → bit* 



<!-- <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks> *bit-array* &amp;rest *subscripts → bit*  -->
**sbit** *bit-array* &amp;rest *subscripts → bit* 



<!-- **(setf (bit** *bit-array* &amp;rest *subscripts***)** *new-bit<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->



<!-- **(setf (sbit** *bit-array* &amp;rest *subscripts***)** *new-bit<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (bit** *bit-array* &amp;rest *subscripts***)** *new-bit***)** 



**(setf (sbit** *bit-array* &amp;rest *subscripts***)** *new-bit***)** 



**Arguments and Values:** 



*bit-array*—for <ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks>, a *bit array*; for <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks>, a *simple bit array*. 



*subscripts*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *valid array indices* for the *bit-array*. 



<ClLinks styled={true} term={"bit"}><i>bit</i></ClLinks>—a <ClLinks styled={true} term={"bit"}><i>bit</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks> and <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks> <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the *bit-array element* specified by *subscripts*. 



These <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> ignore the *fill pointer* when *accessing elements*. 



**Examples:**
```lisp
 
(bit (setq ba (make-array 8 
:element-type ’bit 
:initial-element 1)) 
\3) → 1 
(setf (bit ba 3) 0) → 0 
(bit ba 3) → 0 
(sbit ba 5) → 1 
(setf (sbit ba 5) 1) → 1 

 
 
(sbit ba 5) → 1 

```
**See Also:** 



<ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks> and <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks> are like <ClLinks styled={true} term={"aref"}><b>aref</b></ClLinks> except that they require <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> to be a *bit array* and a *simple bit array*, respectively. 



<ClLinks styled={true} term={"bit"}><b>bit</b></ClLinks> and <ClLinks styled={true} term={"sbit"}><b>sbit</b></ClLinks>, unlike <ClLinks styled={true} term={"char"}><b>char</b></ClLinks> and <ClLinks styled={true} term={"schar"}><b>schar</b></ClLinks>, allow the first argument to be an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> of any <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks>. 



<b><sup>bit-and, bit-andc1, bit-andc2, bit-eqv, bit-ior, bit</sup> nand, bit-nor, bit-not, bit-orc1, bit-orc2, bit-xor</b> <i>Function</i> 



**Syntax:** 



**bit-and** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-andc1** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-andc2** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-eqv** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-ior** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-nand** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-nor** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-orc1** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-orc2** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-xor** *bit-array1 bit-array2* &amp;optional *opt-arg → resulting-bit-array* 



**bit-not** *bit-array* &amp;optional *opt-arg → resulting-bit-array* 



**Arguments and Values:** 



*bit-array*, *bit-array1*, *bit-array2*—a *bit array*. 



*Opt-arg*—a *bit array*, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*Bit-array*, *bit-array1*, *bit-array2*, and *opt-arg* (if an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>) must all be of the same <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> and <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>. 



*resulting-bit-array*—a *bit array*. 



**Description:** 



These functions perform bit-wise logical operations on *bit-array1* and *bit-array2* and return an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> of matching <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> and <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks>, such that any given bit of the result is produced by operating on corresponding bits from each of the arguments. 







 



 



In the case of **bit-not**, an <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> of <ClLinks styled={true} term={"rank"}><i>rank</i></ClLinks> and <ClLinks styled={true} term={"dimension"}><i>dimensions</i></ClLinks> matching *bit-array* is returned that contains a copy of *bit-array* with all the bits inverted. 



If *opt-arg* is of type (array bit) the contents of the result are destructively placed into *opt-arg*. If *opt-arg* is the symbol <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, *bit-array* or *bit-array1* is replaced with the result; if *opt-arg* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> or omitted, a new <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> is created to contain the result. 



Figure 15–4 indicates the logical operation performed by each of the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks>. 



|**Function Operation**|

| :- |

|<p>**bit-and** and </p><p>**bit-eqv** equivalence (exclusive nor) </p><p>**bit-not** complement </p><p>**bit-ior** inclusive or </p><p>**bit-xor** exclusive or </p><p>**bit-nand** complement of *bit-array1* and *bit-array2* </p><p>**bit-nor** complement of *bit-array1* or *bit-array2* </p><p>**bit-andc1** and complement of *bit-array1* with *bit-array2* </p><p>**bit-andc2** and *bit-array1* with complement of *bit-array2* </p><p>**bit-orc1** or complement of *bit-array1* with *bit-array2* </p><p>**bit-orc2** or *bit-array1* with complement of *bit-array2*</p>|





**Figure 15–4. Bit-wise Logical Operations on Bit Arrays** 



**Examples:**
```lisp

(bit-and (setq ba #\*11101010) #\*01101011) → #\*01101010 
(bit-and #\*1100 #\*1010) → #\*1000 
(bit-andc1 #\*1100 #\*1010) → #\*0010 
(setq rba (bit-andc2 ba #\*00110011 t)) → #\*11001000 
(eq rba ba) → true 
(bit-not (setq ba #\*11101010)) → #\*00010101 
(setq rba (bit-not ba 
		   (setq tba (make-array 8 
					 :element-type ’bit)))) 
→ #\*00010101 
(equal rba tba) → true 
(bit-xor #\*1100 #\*1010) → #\*0110 

```
**See Also:** 



<ClLinks styled={true} term={"lognot"}><b>lognot</b></ClLinks>, <ClLinks styled={true} term={"logand"}><b>logand</b></ClLinks> 







 



 



