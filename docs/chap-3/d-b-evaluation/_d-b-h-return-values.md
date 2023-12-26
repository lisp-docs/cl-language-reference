 



Ordinarily the result of calling a <ClLinks  term={"function"}><i>function</i></ClLinks> is a single <ClLinks  term={"object"}><i>object</i></ClLinks>. Sometimes, however, it is convenient for a function to compute several <ClLinks  term={"object"}><i>objects</i></ClLinks> and return them. 



In order to receive other than exactly one value from a <ClLinks  term={"form"}><i>form</i></ClLinks>, one of several <GlossaryTerm styled={true} term={"special form"}><i>special forms</i></GlossaryTerm> or <ClLinks  term={"macro"}><i>macros</i></ClLinks> must be used to request those values. If a <ClLinks  term={"form"}><i>form</i></ClLinks> produces <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm> which were not requested in this way, then the first value is given to the caller and all others are discarded; if the <ClLinks  term={"form"}><i>form</i></ClLinks> produces zero values, then the caller receives <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> as a value. 



Figure 3–5 lists some <ClLinks  term={"operator"}><i>operators</i></ClLinks> for receiving <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub>. These <ClLinks  term={"operator"}><i>operators</i></ClLinks> can be used to specify one or more <ClLinks  term={"form"}><i>forms</i></ClLinks> to <ClLinks  term={"evaluate"}><i>evaluate</i></ClLinks> and where to put the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by those <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



|<p>**multiple-value-bind multiple-value-prog1 return-from multiple-value-call multiple-value-setq throw** </p><p>**multiple-value-list return**</p>|

| :- |





**Figure 3–5. Some operators applicable to receiving multiple values** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> can produce <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub>. (values) returns zero values; (values <ClLinks  term={"form"}><i>form</i></ClLinks>) returns the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> returned by <ClLinks  term={"form"}><i>form</i></ClLinks>; (values *form1 form2*) returns two values, the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of *form1* and the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of *form2*; and so on. 



See <DictionaryLink  term={"multiple-values-limit"}><b>multiple-values-limit</b></DictionaryLink> and <DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink>.  







