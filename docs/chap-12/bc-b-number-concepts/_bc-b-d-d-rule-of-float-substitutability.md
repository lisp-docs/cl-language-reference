 



When the arguments to an irrational mathematical <ClLinks  term={"function"}><i>function</i></ClLinks> are all <ClLinks  term={"rational"}><i>rational</i></ClLinks> and the true mathe matical result is also (mathematically) rational, then unless otherwise noted an implementation is free to return either an accurate <ClLinks  term={"rational"}><i>rational</i></ClLinks> result or a *single float* approximation. If the arguments 



are all <ClLinks  term={"rational"}><i>rational</i></ClLinks> but the result cannot be expressed as a <ClLinks  term={"rational"}><i>rational</i></ClLinks> number, then a *single float* approximation is always returned. 



If the arguments to an irrational mathematical <ClLinks  term={"function"}><i>function</i></ClLinks> are all of type 



(or rational (complex rational)) and the true mathematical result is (mathematically) a complex number with rational real and imaginary parts, then unless otherwise noted an imple mentation is free to return either an accurate result of type (or rational (complex rational)) or a *single float* (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). If the arguments are all of type (or rational (complex rational)) but the result cannot be expressed as a <ClLinks  term={"rational"}><i>rational</i></ClLinks> or *complex rational*, then the returned value will be of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"single-float"}><b>single-float</b></ClLinks> (permissible only if the imaginary part of the true mathematical result is zero) or (complex single-float). 



Float substitutability applies neither to the rational <ClLinks  term={"function"}><i>functions</i></ClLinks> <ClLinks  term={"+"}><b>+</b></ClLinks>, <ClLinks  term={"-"}><b>-</b></ClLinks>, **\***, and <ClLinks  term={"/"}><b>/</b></ClLinks> nor to the related <ClLinks  term={"operator"}><i>operators</i></ClLinks> <ClLinks  term={"1+"}><b>1+</b></ClLinks>, **1-**, <ClLinks  term={"incf"}><b>incf</b></ClLinks>, <ClLinks  term={"decf"}><b>decf</b></ClLinks>, and <ClLinks  term={"conjugate"}><b>conjugate</b></ClLinks>. For rational <ClLinks  term={"function"}><i>functions</i></ClLinks>, if all arguments are <ClLinks  term={"rational"}><i>rational</i></ClLinks>, then the result is <ClLinks  term={"rational"}><i>rational</i></ClLinks>; if all arguments are of type (or rational (complex rational)), then the result is of type (or rational (complex rational)). 







 



 



|**Function Sample Results**|

| :- |

|<p><ClLinks  term={"abs"}><b>abs</b></ClLinks> (abs #c(3 4)) → 5 *or* 5.0 </p><p><ClLinks  term={"acos"}><b>acos</b></ClLinks> (acos 1) → 0 *or* 0.0 </p><p><ClLinks  term={"acosh"}><b>acosh</b></ClLinks> (acosh 1) → 0 *or* 0.0 </p><p><ClLinks  term={"asin"}><b>asin</b></ClLinks> (asin 0) → 0 *or* 0.0 </p><p><ClLinks  term={"asinh"}><b>asinh</b></ClLinks> (asinh 0) → 0 *or* 0.0 </p><p><ClLinks  term={"atan"}><b>atan</b></ClLinks> (atan 0) → 0 *or* 0.0 </p><p><ClLinks  term={"atanh"}><b>atanh</b></ClLinks> (atanh 0) → 0 *or* 0.0 </p><p><ClLinks  term={"cis"}><b>cis</b></ClLinks> (cis 0) → 1 *or* #c(1.0 0.0) </p><p><ClLinks  term={"cos"}><b>cos</b></ClLinks> (cos 0) → 1 *or* 1.0 </p><p><ClLinks  term={"cosh"}><b>cosh</b></ClLinks> (cosh 0) → 1 *or* 1.0 </p><p><ClLinks  term={"exp"}><b>exp</b></ClLinks> (exp 0) → 1 *or* 1.0 </p><p><ClLinks  term={"expt"}><b>expt</b></ClLinks> (expt 8 1/3) → 2 *or* 2.0 </p><p><ClLinks  term={"log"}><b>log</b></ClLinks> (log 1) → 0 *or* 0.0 </p><p>(log 8 2) → 3 *or* 3.0 </p><p><ClLinks  term={"phase"}><b>phase</b></ClLinks> (phase 7) → 0 *or* 0.0 </p><p><ClLinks  term={"signum"}><b>signum</b></ClLinks> (signum #c(3 4)) → #c(3/5 4/5) *or* #c(0.6 0.8) <ClLinks  term={"sin"}><b>sin</b></ClLinks> (sin 0) → 0 *or* 0.0 </p><p><ClLinks  term={"sinh"}><b>sinh</b></ClLinks> (sinh 0) → 0 *or* 0.0 </p><p><ClLinks  term={"sqrt"}><b>sqrt</b></ClLinks> (sqrt 4) → 2 *or* 2.0 </p><p>(sqrt 9/16) → 3/4 *or* 0.75 </p><p><ClLinks  term={"tan"}><b>tan</b></ClLinks> (tan 0) → 0 *or* 0.0 </p><p><ClLinks  term={"tanh"}><b>tanh</b></ClLinks> (tanh 0) → 0 *or* 0.0</p>|





**Figure 12–8. Functions Affected by Rule of Float Substitutability** 



