**loop** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



The “simple” <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>: 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> *\{compound-form\}*\* *→ \{result\}*\* 



The “extended” <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>: 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> [*↓name-clause*] *\{↓variable-clause\}*\* *\{↓main-clause\}*\* *→ \{result\}*\* 



*name-clause::*=named <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> 



*variable-clause::*=*↓with-clause | ↓initial-final | ↓for-as-clause* 



*with-clause::*=with *var1* [*type-spec*] [= *form1*] *\{*and *var2* [*type-spec*] [= *form2*]*\}*\* 



*main-clause::*=*↓unconditional | ↓accumulation | ↓conditional | ↓termination-test | ↓initial-final initial-final::*=initially *\{compound-form\}*<sup>+</sup>*|* finally *\{compound-form\}*<sup>+</sup> 



*unconditional::*=*\{*do *|* doing*\} \{compound-form\}*<sup>+</sup>*|* return *\{form |* it<GlossaryTerm styled={true} term={"t"}><i>\}</i></GlossaryTerm> 



*accumulation::*=*↓list-accumulation | ↓numeric-accumulation* 



*list-accumulation::*=*\{*collect *|* collecting *|* append *|* appending *|* nconc *|* nconcing*\} \{form |* it<GlossaryTerm styled={true} term={"t"}><i>\}</i></GlossaryTerm> [into *simple-var*] 







 



 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> 



*numeric-accumulation::*=*\{*count *|* counting *|* sum *|* summing *|* 



maximize *|* maximizing *|* minimize *|* minimizing*\} \{form |* it<GlossaryTerm styled={true} term={"t"}><i>\}</i></GlossaryTerm> 



[into *simple-var*] [*type-spec*] 



*conditional::*=*\{*if *|* when *|* unless*\} form ↓selectable-clause \{*and *↓selectable-clause\}*\* 



[else *↓selectable-clause \{*and *↓selectable-clause\}*\*] 



[end] 



*selectable-clause::*=*↓unconditional | ↓accumulation | ↓conditional* 



*termination-test::*=while *form |* until *form |* repeat *form |* always *form |* never *form |* thereis *form for-as-clause::*=*\{*for *|* as*\} ↓for-as-subclause \{*and *↓for-as-subclause\}*\* 



*for-as-subclause::*=*↓for-as-arithmetic | ↓for-as-in-list | ↓for-as-on-list | ↓for-as-equals-then | ↓for-as-across | ↓for-as-hash | ↓for-as-package* 



*for-as-arithmetic::*=*var* [*type-spec*] *↓for-as-arithmetic-subclause* 



*for-as-arithmetic-subclause::*=*↓arithmetic-up | ↓arithmetic-downto | ↓arithmetic-downfrom arithmetic-up::*=[[ *\{*from *|* upfrom*\} form1 | \{*to *|* upto *|* below*\} form2 |* by *form3* ]]<sup>+</sup> 



*arithmetic-downto::*=[[ *\{*from *form1\}*<sup>1</sup>*| \{\{*downto *|* above*\} form2\}*<sup>1</sup>*|* by *form3* ]] 



*arithmetic-downfrom::*=[[ *\{*downfrom *form1\}*<sup>1</sup>*| \{*to *|* downto *|* above*\} form2 |* by *form3* ]] *for-as-in-list::*=*var* [*type-spec*] in *form1* [by *step-fun*] 



*for-as-on-list::*=*var* [*type-spec*] on *form1* [by *step-fun*] 



*for-as-equals-then::*=*var* [*type-spec*] = *form1* [then *form2*] 



*for-as-across::*=*var* [*type-spec*] across <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> 



*for-as-hash::*=*var* [*type-spec*] being *\{*each *|* the*\}* 



*\{\{*hash-key *|* hash-keys*\} \{*in *|* of*\} hash-table* 



[using (hash-value *other-var*)] *|* 



*\{*hash-value *|* hash-values*\} \{*in *|* of*\} hash-table* 



[using (hash-key *other-var*)]*\}* 







 



 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> 



*for-as-package::*=*var* [*type-spec*] being *\{*each *|* the*\}* 



*\{*symbol *|* symbols *|* 



present-symbol *|* present-symbols *|* 



external-symbol *|* external-symbols*\}* 



[*\{*in *|* of*\} package*] 



*type-spec::*=*↓simple-type-spec | ↓destructured-type-spec* 



*simple-type-spec::*=<DictionaryLink styled={true} term={"fixnum"}><b>fixnum</b></DictionaryLink> *|* <DictionaryLink styled={true} term={"float"}><b>float</b></DictionaryLink> *|* <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> *|* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



*destructured-type-spec::*=of-type *d-type-spec* 



*d-type-spec::*=*type-specifier |* (*d-type-spec* . *d-type-spec*) 



*var::*=*↓d-var-spec* 



*var1::*=*↓d-var-spec* 



*var2::*=*↓d-var-spec* 



*other-var::*=*↓d-var-spec* 



*d-var-spec::*=*simple-var |* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> *|* (*↓d-var-spec* . *↓d-var-spec*) 



**Arguments and Values:** 



*compound-form*—a *compound form*. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*simple-var*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> (a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> name). 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, *form1*, *form2*, *form3*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*step-fun*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that evaluates to a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that evaluates to a <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> . 



*hash-table*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that evaluates to a *hash table*. 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that evaluates to a *package designator* . 



*type-specifier*—a *type specifier* . This might be either an *atomic type specifier* or a *compound type specifier* , which introduces some additional complications to proper parsing in the face of destructuring; for further information, see Section 6.1.1.7 (Destructuring). 



*result*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> 



**Description:** 



For details, see Section 6.1 (The LOOP Facility). 



**Examples:**
```lisp

;; An example of the simple form of LOOP. 
(defun sqrt-advisor () 
  (loop (format t "~&Number: ") 
   (let ((n (parse-integer (read-line) :junk-allowed t))) 
     (when (not n) (return)) 
     (format t "~&The square root of ~D is ~D.~%" n (sqrt n))))) 
*→* SQRT-ADVISOR 
(sqrt-advisor) 
▷ Number: 5*←-* 
▷ The square root of 5 is 2.236068. 
▷ Number: 4*←-* 
▷ The square root of 4 is 2. 
▷ Number: done*←-* 
*→* NIL 
;; An example of the extended form of LOOP. 
(defun square-advisor () 
  (loop as n = (progn (format t "~&Number: ") 
		      (parse-integer (read-line) :junk-allowed t)) 
	while n 
	do (format t "~&The square of ~D is ~D.~%" n (\* n n)))) 
*→* SQUARE-ADVISOR 
(square-advisor) 
▷ Number: 4*←-* 
▷ The square of 4 is 16. 
▷ Number: 23*←-* 
▷ The square of 23 is 529. 
▷ Number: done*←-* 
*→* NIL 
;; Another example of the extended form of LOOP. 
(loop for n from 1 to 10 
      when (oddp n) 
      collect n) 
*→* (1 3 5 7 9) 

```
**See Also:** 



<DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>, <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink>, <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink>, <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, Section 6.1.1.7 (Destructuring) 







 



 



**Notes:** 



Except that <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> cannot be used within a simple <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, a simple <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is related to an extended <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the following way: 



(loop *\{compound-form\}*\*) *≡* (loop do *\{compound-form\}*\*) 



