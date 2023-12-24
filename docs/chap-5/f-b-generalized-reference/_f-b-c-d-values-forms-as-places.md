 



A <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> can be used as a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, provided that each of its <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> is also a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> form. A form such as 



(setf (values *place-1 . . . place-n*) *values-form*) 



does the following: 



1\. The <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of each nested <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are evaluated in left-to-right order. 



2\. The *values-form* is evaluated, and the first store variable from each <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is bound to its return values as if by <ClLinks styled={true} term={"multiple-value-bind"}><b>multiple-value-bind</b></ClLinks>. 



3\. If the *setf expansion* for any <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> involves more than one store variable, then the additional store variables are bound to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



4\. The storing forms for each <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> are evaluated in left-to-right order. 



The storing form in the *setf expansion* of <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> returns as *multiple values*<sub>2</sub> the values of the store variables in step 2. That is, the number of values returned is the same as the number of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> forms. This may be more or fewer values than are produced by the *values-form*. 



