 



When the arguments to an irrational mathematical <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> are all <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> and the true mathe matical result is also (mathematically) rational, then unless otherwise noted an implementation is free to return either an accurate <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> result or a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm> approximation. If the arguments 



are all <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> but the result cannot be expressed as a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> number, then a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm> approximation is always returned. 



If the arguments to an irrational mathematical <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> are all of type 



(or rational (complex rational)) and the true mathematical result is (mathematically) a complex number with rational real and imaginary parts, then unless otherwise noted an imple mentation is free to return either an accurate result of type (or rational (complex rational)) or a <GlossaryTerm styled={true} term={"single float"}><i>single float</i></GlossaryTerm> (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). If the arguments are all of type (or rational (complex rational)) but the result cannot be expressed as a <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"complex rational"}><i>complex rational</i></GlossaryTerm>, then the returned value will be of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"single-float"}><b>single-float</b></DictionaryLink> (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). 



Float substitutability applies neither to the rational <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <ClLinks  term={"+"}><b>+</b></ClLinks>, <DictionaryLink  term={"-"}><b>-</b></DictionaryLink>, **\***, and <ClLinks  term={"/"}><b>/</b></ClLinks> nor to the related <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> <ClLinks  term={"1+"}><b>1+</b></ClLinks>, **1-**, <DictionaryLink  term={"incf"}><b>incf</b></DictionaryLink>, <DictionaryLink  term={"decf"}><b>decf</b></DictionaryLink>, and <DictionaryLink  term={"conjugate"}><b>conjugate</b></DictionaryLink>. For rational <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm>, if all arguments are <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>, then the result is <GlossaryTerm  term={"rational"}><i>rational</i></GlossaryTerm>; if all arguments are of type (or rational (complex rational)), then the result is of type (or rational (complex rational)). 







 



 



|**Function Sample Results**|

| :- |

|<p><DictionaryLink  term={"abs"}><b>abs</b></DictionaryLink> (abs #c(3 4)) → 5 *or* 5.0 </p><p><DictionaryLink  term={"acos"}><b>acos</b></DictionaryLink> (acos 1) → 0 *or* 0.0 </p><p><DictionaryLink  term={"acosh"}><b>acosh</b></DictionaryLink> (acosh 1) → 0 *or* 0.0 </p><p><DictionaryLink  term={"asin"}><b>asin</b></DictionaryLink> (asin 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"asinh"}><b>asinh</b></DictionaryLink> (asinh 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"atan"}><b>atan</b></DictionaryLink> (atan 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"atanh"}><b>atanh</b></DictionaryLink> (atanh 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"cis"}><b>cis</b></DictionaryLink> (cis 0) → 1 *or* #c(1.0 0.0) </p><p><DictionaryLink  term={"cos"}><b>cos</b></DictionaryLink> (cos 0) → 1 *or* 1.0 </p><p><DictionaryLink  term={"cosh"}><b>cosh</b></DictionaryLink> (cosh 0) → 1 *or* 1.0 </p><p><DictionaryLink  term={"exp"}><b>exp</b></DictionaryLink> (exp 0) → 1 *or* 1.0 </p><p><DictionaryLink  term={"expt"}><b>expt</b></DictionaryLink> (expt 8 1/3) → 2 *or* 2.0 </p><p><DictionaryLink  term={"log"}><b>log</b></DictionaryLink> (log 1) → 0 *or* 0.0 </p><p>(log 8 2) → 3 *or* 3.0 </p><p><DictionaryLink  term={"phase"}><b>phase</b></DictionaryLink> (phase 7) → 0 *or* 0.0 </p><p><DictionaryLink  term={"signum"}><b>signum</b></DictionaryLink> (signum #c(3 4)) → #c(3/5 4/5) *or* #c(0.6 0.8) <DictionaryLink  term={"sin"}><b>sin</b></DictionaryLink> (sin 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"sinh"}><b>sinh</b></DictionaryLink> (sinh 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink> (sqrt 4) → 2 *or* 2.0 </p><p>(sqrt 9/16) → 3/4 *or* 0.75 </p><p><DictionaryLink  term={"tan"}><b>tan</b></DictionaryLink> (tan 0) → 0 *or* 0.0 </p><p><DictionaryLink  term={"tanh"}><b>tanh</b></DictionaryLink> (tanh 0) → 0 *or* 0.0</p>|





**Figure 12–8. Functions Affected by Rule of Float Substitutability** 



