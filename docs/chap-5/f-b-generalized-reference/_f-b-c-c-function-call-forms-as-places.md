 



A *function form* can be used as a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> if it falls into one of the following categories: 



*•* A function call form whose first element is the name of any one of the functions in Figure 5–7. 



Data and Control 











|<p>**aref cdadr get** </p><p>**bit cdar gethash** </p><p>**caaaar cddaar logical-pathname-translations caaadr cddadr macro-function** </p><p>**caaar cddar ninth** </p><p>**caadar cdddar nth** </p><p>**caaddr cddddr readtable-case** </p><p>**caadr cdddr rest** </p><p>**caar cddr row-major-aref** </p><p>**cadaar cdr sbit** </p><p>**cadadr char schar** </p><p>**cadar class-name second** </p><p>**caddar compiler-macro-function seventh** </p><p>**cadddr documentation sixth** </p><p>**caddr eighth slot-value** </p><p>**cadr elt subseq** </p><p>**car fdefinition svref** </p><p>**cdaaar fifth symbol-function** </p><p>**cdaadr fill-pointer symbol-plist** </p><p>**cdaar find-class symbol-value** </p><p>**cdadar first tenth** </p><p>**cdaddr fourth third**</p>|

| :- |





**Figure 5–7. Functions that setf can be used with—1** 



In the case of <DictionaryLink styled={true} term={"subseq"}><b>subseq</b></DictionaryLink>, the replacement value must be a *sequence* whose elements might be contained by the sequence argument to <DictionaryLink styled={true} term={"subseq"}><b>subseq</b></DictionaryLink>, but does not have to be a *sequence* of the same <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> as the *sequence* of which the subsequence is specified. If the length of the replacement value does not equal the length of the subsequence to be replaced, then the shorter length determines the number of elements to be stored, as for <DictionaryLink styled={true} term={"replace"}><b>replace</b></DictionaryLink>. 



*•* A function call form whose first element is the name of a selector function constructed by <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>. The function name must refer to the global function definition, rather than a locally defined <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. 



*•* A function call form whose first element is the name of any one of the functions in Figure 5–8, provided that the supplied argument to that function is in turn a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> form; in this case the new <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> has stored back into it the result of applying the supplied “update” function. 















|**Function name Argument that is a** <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> **Update function used**|

| :- |

|<p><DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> second <DictionaryLink styled={true} term={"dpb"}><b>dpb</b></DictionaryLink> </p><p><DictionaryLink styled={true} term={"mask-field"}><b>mask-field</b></DictionaryLink> second <DictionaryLink styled={true} term={"deposit-field"}><b>deposit-field</b></DictionaryLink> </p><p><DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> first <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm></p>|





**Figure 5–8. Functions that setf can be used with—2** 



During the <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> expansion of these <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, it is necessary to call <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> in order to figure out how the inner, nested generalized variable must be treated. 



The information from <DictionaryLink styled={true} term={"get-setf-expansion"}><b>get-setf-expansion</b></DictionaryLink> is used as follows. 



<DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> 



In a form such as: 



(setf (ldb *byte-spec place-form*) *value-form*) 



the place referred to by the *place-form* must always be both <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> and *written*; note 



that the update is to the generalized variable specified by *place-form*, not to any 



object of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"integer"}><b>integer</b></DictionaryLink>. 



Thus this <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> should generate code to do the following: 



1\. Evaluate *byte-spec* (and bind it into a temporary variable). 



2\. Bind the temporary variables for *place-form*. 



3\. Evaluate *value-form* (and bind its value or values into the store variable). 



4\. Do the <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> from *place-form*. 



5\. Do the <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> into *place-form* with the given bits of the *integer* fetched in 



step 4 replaced with the value from step 3. 



If the evaluation of *value-form* in step 3 alters what is found in *place-form*, such as 



setting different bits of *integer* , then the change of the bits denoted by *byte-spec* 



is to that altered *integer* , because step 4 is done after the *value-form* evaluation. 



Nevertheless, the evaluations required for <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> the temporary variables are 



done in steps 1 and 2, and thus the expected left-to-right evaluation order is seen. 



For example: 



(setq integer #x69) *→* #x69 



(rotatef (ldb (byte 4 4) integer) 



(ldb (byte 4 0) integer)) 



integer *→* #x96 



;;; This example is trying to swap two independent bit fields 



;;; in an integer. Note that the generalized variable of 



;;; interest here is just the (possibly local) program variable 



Data and Control 











;;; integer. 



<DictionaryLink styled={true} term={"mask-field"}><b>mask-field</b></DictionaryLink> 



This case is the same as <DictionaryLink styled={true} term={"ldb"}><b>ldb</b></DictionaryLink> in all essential aspects. 



<DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink> 



In a form such as: 



(setf (getf *place-form ind-form*) *value-form*) 



the place referred to by *place-form* must always be both <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> and *written*; note that 



the update is to the generalized variable specified by *place-form*, not necessarily to 



the particular <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that is the property list in question. 



Thus this <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> should generate code to do the following: 



1\. Bind the temporary variables for *place-form*. 



2\. Evaluate *ind-form* (and bind it into a temporary variable). 



3\. Evaluate *value-form* (and bind its value or values into the store variable). 



4\. Do the <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> from *place-form*. 



5\. Do the <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm> into *place-form* with a possibly-new property list obtained 



by combining the values from steps 2, 3, and 4. (Note that the phrase 



“possibly-new property list” can mean that the former property list is 



somehow destructively re-used, or it can mean partial or full copying of 



it. Since either copying or destructive re-use can occur, the treatment 



of the resultant value for the possibly-new property list must proceed as 



if it were a different copy needing to be stored back into the generalized 



variable.) 



If the evaluation of *value-form* in step 3 alters what is found in *place-form*, such 



as setting a different named property in the list, then the change of the property 



denoted by *ind-form* is to that altered list, because step 4 is done after the 



*value-form* evaluation. Nevertheless, the evaluations required for <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> the 



temporary variables are done in steps 1 and 2, and thus the expected left-to-right 



evaluation order is seen. 



For example: 



(setq s (setq r (list (list ’a 1 ’b 2 ’c 3)))) *→* ((a 1 b 2 c 3)) 



(setf (getf (car r) ’b) 



(progn (setq r nil) 6)) *→* 6 



r *→* NIL 



s *→* ((A 1 B 6 C 3)) 



;;; Note that the (setq r nil) does not affect the actions of 















;;; the SETF because the value of R had already been saved in 



;;; a temporary variable as part of the step 1. Only the CAR 



;;; of this value will be retrieved, and subsequently modified 



;;; after the value computation. 



