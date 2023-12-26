**bit, sbit** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink> *bit-array* &amp;rest *subscripts → bit* 



<!-- <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink> *bit-array* &amp;rest *subscripts → bit*  -->
**sbit** *bit-array* &amp;rest *subscripts → bit* 



<!-- **(setf (bit** *bit-array* &amp;rest *subscripts***)** *new-bit<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->



<!-- **(setf (sbit** *bit-array* &amp;rest *subscripts***)** *new-bit<ClLinks  term={"t"}><b>*)</b></ClLinks>  -->
**(setf (bit** *bit-array* &amp;rest *subscripts***)** *new-bit***)** 



**(setf (sbit** *bit-array* &amp;rest *subscripts***)** *new-bit***)** 



**Arguments and Values:** 



*bit-array*—for <DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"bit array"}><i>bit array</i></GlossaryTerm>; for <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"simple bit array"}><i>simple bit array</i></GlossaryTerm>. 



*subscripts*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of *valid array indices* for the *bit-array*. 



<GlossaryTerm  term={"bit"}><i>bit</i></GlossaryTerm>—a <GlossaryTerm  term={"bit"}><i>bit</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink> and <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink> <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the *bit-array element* specified by *subscripts*. 



These <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> ignore the <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> when *accessing elements*. 



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



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



<DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink> and <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink> are like <DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink> except that they require <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm> to be a <GlossaryTerm styled={true} term={"bit array"}><i>bit array</i></GlossaryTerm> and a <GlossaryTerm styled={true} term={"simple bit array"}><i>simple bit array</i></GlossaryTerm>, respectively. 



<DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink> and <DictionaryLink  term={"sbit"}><b>sbit</b></DictionaryLink>, unlike <DictionaryLink  term={"char"}><b>char</b></DictionaryLink> and <DictionaryLink  term={"schar"}><b>schar</b></DictionaryLink>, allow the first argument to be an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> of any <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm>. 



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



*bit-array*, *bit-array1*, *bit-array2*—a <GlossaryTerm styled={true} term={"bit array"}><i>bit array</i></GlossaryTerm>. 



*Opt-arg*—a <GlossaryTerm styled={true} term={"bit array"}><i>bit array</i></GlossaryTerm>, or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*Bit-array*, *bit-array1*, *bit-array2*, and *opt-arg* (if an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm>) must all be of the same <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> and <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>. 



*resulting-bit-array*—a <GlossaryTerm styled={true} term={"bit array"}><i>bit array</i></GlossaryTerm>. 



**Description:** 



These functions perform bit-wise logical operations on *bit-array1* and *bit-array2* and return an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> of matching <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> and <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm>, such that any given bit of the result is produced by operating on corresponding bits from each of the arguments. 







 



 



In the case of **bit-not**, an <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> of <GlossaryTerm  term={"rank"}><i>rank</i></GlossaryTerm> and <GlossaryTerm  term={"dimension"}><i>dimensions</i></GlossaryTerm> matching *bit-array* is returned that contains a copy of *bit-array* with all the bits inverted. 



If *opt-arg* is of type (array bit) the contents of the result are destructively placed into *opt-arg*. If *opt-arg* is the symbol <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, *bit-array* or *bit-array1* is replaced with the result; if *opt-arg* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or omitted, a new <GlossaryTerm  term={"array"}><i>array</i></GlossaryTerm> is created to contain the result. 



Figure 15–4 indicates the logical operation performed by each of the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>. 



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



<DictionaryLink  term={"lognot"}><b>lognot</b></DictionaryLink>, <DictionaryLink  term={"logand"}><b>logand</b></DictionaryLink> 







 



 



