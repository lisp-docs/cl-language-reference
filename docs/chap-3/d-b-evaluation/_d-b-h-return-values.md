 



Ordinarily the result of calling a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> is a single <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. Sometimes, however, it is convenient for a function to compute several <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> and return them. 



In order to receive other than exactly one value from a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, one of several <GlossaryTerm styled={true} term={"special form"}><i>special forms</i></GlossaryTerm> or <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> must be used to request those values. If a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> produces <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm> which were not requested in this way, then the first value is given to the caller and all others are discarded; if the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> produces zero values, then the caller receives <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> as a value. 



Figure 3–5 lists some <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> for receiving <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub>. These <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> can be used to specify one or more <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> to <GlossaryTerm  term={"evaluate"}><i>evaluate</i></GlossaryTerm> and where to put the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by those <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



|<p>`multiple-value-bind` `multiple-value-prog1` `return-from` `multiple-value-call` `multiple-value-setq` `throw`</p><p>`multiple-value-list` `return`</p>|

| :- |





**Figure 3–5. Some operators applicable to receiving multiple values** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> can produce <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm><sub>2</sub>. (values) returns zero values; (values <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>) returns the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> returned by <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; (values *form1 form2*) returns two values, the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of *form1* and the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> of *form2*; and so on. 



See <DictionaryLink  term={"multiple-values-limit"}><b>multiple-values-limit</b></DictionaryLink> and <DictionaryLink  term={"values-list"}><b>values-list</b></DictionaryLink>.







