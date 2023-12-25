 



Ordinarily the result of calling a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is a single <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. Sometimes, however, it is convenient for a function to compute several <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> and return them. 



In order to receive other than exactly one value from a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, one of several *special forms* or <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> must be used to request those values. If a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> produces *multiple values* which were not requested in this way, then the first value is given to the caller and all others are discarded; if the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> produces zero values, then the caller receives <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> as a value. 



Figure 3–5 lists some <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> for receiving *multiple values*<sub>2</sub>. These <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> can be used to specify one or more <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"evaluate"}><i>evaluate</i></GlossaryTerm> and where to put the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by those <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 



|<p>**multiple-value-bind multiple-value-prog1 return-from multiple-value-call multiple-value-setq throw** </p><p>**multiple-value-list return**</p>|

| :- |





**Figure 3–5. Some operators applicable to receiving multiple values** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> can produce *multiple values*<sub>2</sub>. (values) returns zero values; (values <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) returns the *primary value* returned by <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; (values *form1 form2*) returns two values, the *primary value* of *form1* and the *primary value* of *form2*; and so on. 



See <DictionaryLink styled={true} term={"multiple-values-limit"}><b>multiple-values-limit</b></DictionaryLink> and <DictionaryLink styled={true} term={"values-list"}><b>values-list</b></DictionaryLink>.  







