 



Ordinarily the result of calling a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is a single <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. Sometimes, however, it is convenient for a function to compute several <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> and return them. 



In order to receive other than exactly one value from a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, one of several *special forms* or <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> must be used to request those values. If a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> produces *multiple values* which were not requested in this way, then the first value is given to the caller and all others are discarded; if the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> produces zero values, then the caller receives <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> as a value. 



Figure 3–5 lists some <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> for receiving *multiple values*<sub>2</sub>. These <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> can be used to specify one or more <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> to <ClLinks styled={true} term={"evaluate"}><i>evaluate</i></ClLinks> and where to put the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by those <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



|<p>**multiple-value-bind multiple-value-prog1 return-from multiple-value-call multiple-value-setq throw** </p><p>**multiple-value-list return**</p>|

| :- |





**Figure 3–5. Some operators applicable to receiving multiple values** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"values"}><b>values</b></ClLinks> can produce *multiple values*<sub>2</sub>. (values) returns zero values; (values <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>) returns the *primary value* returned by <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; (values *form1 form2*) returns two values, the *primary value* of *form1* and the *primary value* of *form2*; and so on. 



See <ClLinks styled={true} term={"multiple-values-limit"}><b>multiple-values-limit</b></ClLinks> and <ClLinks styled={true} term={"values-list"}><b>values-list</b></ClLinks>.  







