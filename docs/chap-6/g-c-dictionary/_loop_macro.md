**loop** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks>

**Syntax:**

The “simple” <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>:

<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> *\{compound-form\}*\* → \{result\}\*

The “extended” <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>:

<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> [*↓name-clause*] *\{↓variable-clause\}*\* *\{↓main-clause\}*\* → \{result\}\*

*name-clause::*=named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>

*variable-clause::*=*↓with-clause | ↓initial-final | ↓for-as-clause*

*with-clause::*=with *var1* [*type-spec*] [= *form1*] *\{*and *var2* [*type-spec*] [= *form2*]*\}*\*

*main-clause::*=*↓unconditional | ↓accumulation | ↓conditional | ↓termination-test | ↓initial-final initial-final::*=initially *\{compound-form\}*<sup>+</sup>*|* finally *\{compound-form\}*<sup>+</sup>

*unconditional::*=*\{*do *|* doing*\} \{compound-form\}*<sup>+</sup>*|* return *\{form |* it<ClLinks styled={true} term={"t"}><i>\}</i></ClLinks>

*accumulation::*=*↓list-accumulation | ↓numeric-accumulation*

*list-accumulation::*=*\{*collect *|* collecting *|* append *|* appending *|* nconc *|* nconcing*\} \{form |* it<ClLinks styled={true} term={"t"}><i>\}</i></ClLinks> [into *simple-var*]

<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>

*numeric-accumulation::*=*\{*count *|* counting *|* sum *|* summing *|*

maximize *|* maximizing *|* minimize *|* minimizing*\} \{form |* it<ClLinks styled={true} term={"t"}><i>\}</i></ClLinks>

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

*for-as-across::*=*var* [*type-spec*] across <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>

*for-as-hash::*=*var* [*type-spec*] being *\{*each *|* the*\}*

*\{\{*hash-key *|* hash-keys*\} \{*in *|* of*\} hash-table*

[using (hash-value *other-var*)] *|*

*\{*hash-value *|* hash-values*\} \{*in *|* of*\} hash-table*

[using (hash-key *other-var*)]*\}*

<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>

*for-as-package::*=*var* [*type-spec*] being *\{*each *|* the*\}*

*\{*symbol *|* symbols *|*

present-symbol *|* present-symbols *|*

external-symbol *|* external-symbols*\}*

[*\{*in *|* of*\} package*]

*type-spec::*=*↓simple-type-spec | ↓destructured-type-spec*

*simple-type-spec::*=<ClLinks styled={true} term={"fixnum"}><b>fixnum</b></ClLinks> *|* <ClLinks styled={true} term={"float"}><b>float</b></ClLinks> *|* <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> *|* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>

*destructured-type-spec::*=of-type *d-type-spec*

*d-type-spec::*=*type-specifier |* (*d-type-spec* . *d-type-spec*)

*var::*=*↓d-var-spec*

*var1::*=*↓d-var-spec*

*var2::*=*↓d-var-spec*

*other-var::*=*↓d-var-spec*

*d-var-spec::*=*simple-var |* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> *|* (*↓d-var-spec* . *↓d-var-spec*)

**Arguments and Values:**

*compound-form*—a *compound form*.

<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>.

*simple-var*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> (a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> name).

<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, *form1*, *form2*, *form3*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>.

*step-fun*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that evaluates to a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> of one <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>.

<ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that evaluates to a <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> .

*hash-table*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that evaluates to a *hash table*.

<ClLinks styled={true} term={"package"}><i>package</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that evaluates to a *package designator* .

*type-specifier*—a *type specifier* . This might be either an *atomic type specifier* or a *compound type specifier* , which introduces some additional complications to proper parsing in the face of destructuring; for further information, see Section 6.1.1.7 (Destructuring).

*result*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>.

<ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>

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
→ SQRT-ADVISOR 
(sqrt-advisor) 
▷ Number: 5← 
▷ The square root of 5 is 2.236068. 
▷ Number: 4← 
▷ The square root of 4 is 2. 
▷ Number: done← 
→ NIL 
;; An example of the extended form of LOOP. 
(defun square-advisor () 
  (loop as n = (progn (format t "~&Number: ") 
		      (parse-integer (read-line) :junk-allowed t)) 
	while n 
	do (format t "~&The square of ~D is ~D.~%" n (\* n n)))) 
→ SQUARE-ADVISOR 
(square-advisor) 
▷ Number: 4← 
▷ The square of 4 is 16. 
▷ Number: 23← 
▷ The square of 23 is 529. 
▷ Number: done← 
→ NIL 
;; Another example of the extended form of LOOP. 
(loop for n from 1 to 10 
      when (oddp n) 
      collect n) 
→ (1 3 5 7 9) 
```

**See Also:**

<ClLinks styled={true} term={"do"}><b>do</b></ClLinks>, <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks>, <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks>, <ClLinks styled={true} term={"return"}><b>return</b></ClLinks>, <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, Section 6.1.1.7 (Destructuring)

**Notes:**

Except that <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> cannot be used within a simple <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, a simple <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is related to an extended <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the following way:

(loop *\{compound-form\}*\*) *≡* (loop do *\{compound-form\}*\*)
