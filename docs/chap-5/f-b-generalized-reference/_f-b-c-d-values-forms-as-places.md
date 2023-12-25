 



A <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> can be used as a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, provided that each of its <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> is also a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> form. A form such as 



(setf (values *place-1 . . . place-n*) *values-form*) 



does the following: 



1\. The <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of each nested <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are evaluated in left-to-right order. 



2\. The *values-form* is evaluated, and the first store variable from each <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is bound to its return values as if by <DictionaryLink styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink>. 



3\. If the *setf expansion* for any <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> involves more than one store variable, then the additional store variables are bound to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



4\. The storing forms for each <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are evaluated in left-to-right order. 



The storing form in the *setf expansion* of <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> returns as *multiple values*<sub>2</sub> the values of the store variables in step 2. That is, the number of values returned is the same as the number of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> forms. This may be more or fewer values than are produced by the *values-form*. 



