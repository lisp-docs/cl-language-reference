 



A <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> can be used as a <ClLinks  term={"place"}><i>place</i></ClLinks>, provided that each of its <ClLinks  term={"subform"}><i>subforms</i></ClLinks> is also a <ClLinks  term={"place"}><i>place</i></ClLinks> form. A form such as 



(setf (values *place-1 . . . place-n*) *values-form*) 



does the following: 



1\. The <ClLinks  term={"subform"}><i>subforms</i></ClLinks> of each nested <ClLinks  term={"place"}><i>place</i></ClLinks> are evaluated in left-to-right order. 



2\. The *values-form* is evaluated, and the first store variable from each <ClLinks  term={"place"}><i>place</i></ClLinks> is bound to its return values as if by <DictionaryLink  term={"multiple-value-bind"}><b>multiple-value-bind</b></DictionaryLink>. 



3\. If the <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> for any <ClLinks  term={"place"}><i>place</i></ClLinks> involves more than one store variable, then the additional store variables are bound to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



4\. The storing forms for each <ClLinks  term={"place"}><i>place</i></ClLinks> are evaluated in left-to-right order. 



The storing form in the <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> of <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> returns as <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub> the values of the store variables in step 2. That is, the number of values returned is the same as the number of <ClLinks  term={"place"}><i>place</i></ClLinks> forms. This may be more or fewer values than are produced by the *values-form*. 



