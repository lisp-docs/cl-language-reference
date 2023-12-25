 



The *Lisp printer* makes its determination of how to print an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> as follows: 



If the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, printing is controlled by the *current pprint dispatch table*; see Section 22.2.1.4 (Pretty Print Dispatch Tables). 



Otherwise (if the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>), the object’s <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> method is used; see Section 22.1.3 (Default Print-Object Methods). 



