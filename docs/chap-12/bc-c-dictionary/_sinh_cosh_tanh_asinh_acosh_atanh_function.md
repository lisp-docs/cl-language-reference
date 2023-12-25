**sinh, cosh, tanh, asinh, acosh, atanh** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"sinh"}><b>sinh</b></DictionaryLink> *number → result*

<DictionaryLink  term={"cosh"}><b>cosh</b></DictionaryLink> *number → result*

<DictionaryLink  term={"tanh"}><b>tanh</b></DictionaryLink> *number → result*

<DictionaryLink  term={"asinh"}><b>asinh</b></DictionaryLink> *number → result*

<DictionaryLink  term={"acosh"}><b>acosh</b></DictionaryLink> *number → result*

<DictionaryLink  term={"atanh"}><b>atanh</b></DictionaryLink> *number → result*

**Arguments and Values:**

<GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm>—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

*result*—a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> .

**Description:**

These functions compute the hyperbolic sine, cosine, tangent, arc sine, arc cosine, and arc tangent functions, which are mathematically defined for an argument *x* as given in Figure 12–16.

|**Function Definition**|

| :- |

|<p>Hyperbolic sine (<i>e<sup>x</sup> − e<sup>−x</sup></i>)<i>/</i>2 </p>
<p>Hyperbolic cosine (<i>e<sup>x</sup></i> + <i>e<sup>−x</sup></i>)<i>/</i>2 </p>
<p>Hyperbolic tangent (<i>e<sup>x</sup> − e<sup>−x</sup></i>)<i>/</i>(<i>e<sup>x</sup></i> + <i>e<sup>−x</sup></i>) </p>
<p><sub>Hyperbolic arc sine log (<i>x</i> +</sub><i><sup>√</sup></i>1 + <i>x</i>`<s>`<sup>2</sup>) </p>
<p><sub>Hyperbolic arc cosine 2 log (</sub><sup>p</sup><sub>(<i>x</i> + 1)<i>/</i>2 +</sub> <sup>p</sup>(<i>x −</i> 1)<i>/</i>2) </p>
<p>Hyperbolic arc tangent (log (1 + *x*) *−* log (1 *− x*))*/*2</p>|

**Figure 12–16. Mathematical definitions for hyperbolic functions**

The following definition for the inverse hyperbolic cosine determines the range and branch cuts:

arccosh *z* = 2 log

``<sup>p</sup><sub>(<i>z</i> + 1)<i>/</i>2 +</sub> <sup>p</sup><sub>(<i>z −</i> 1)<i>/</i>2</sub> <i>.</i>

The branch cut for the inverse hyperbolic cosine function lies along the real axis to the left of 1 (inclusive), extending indefinitely along the negative real axis, continuous with quadrant II and (between 0 and 1) with quadrant I. The range is that half-strip of the complex plane containing

numbers whose real part is non-negative and whose imaginary part is between *−π* (exclusive) and *π* (inclusive). A number with real part zero is in the range if its imaginary part is between zero (inclusive) and *π* (inclusive).

**sinh, cosh, tanh, asinh, acosh, atanh**

The following definition for the inverse hyperbolic sine determines the range and branch cuts:

arcsinh *z* = log

<sub><i>z</i> +</sub><sup>p</sup>1 + <i>z</i><sup>2</sup> <i>.</i>

The branch cut for the inverse hyperbolic sine function is in two pieces: one along the positive imaginary axis above *i* (inclusive), continuous with quadrant I, and one along the negative imaginary axis below *−i* (inclusive), continuous with quadrant III. The range is that strip of the complex plane containing numbers whose imaginary part is between *−π/*2 and *π/*2. A number with imaginary part equal to *−π/*2 is in the range if and only if its real part is non-positive; a number with imaginary part equal to *π/*2 is in the range if and only if its imaginary part is non-negative.

The following definition for the inverse hyperbolic tangent determines the range and branch cuts: arctanh <i>z</i> =<sup>log (1 + <i>z</i>) <i>−</i> log (1 <i>− z</i>)</sup>

<sub>2</sub>▷

Note that:

*i* arctan *z* = arctanh *iz.*

The branch cut for the inverse hyperbolic tangent function is in two pieces: one along the negative real axis to the left of *−*1 (inclusive), continuous with quadrant III, and one along the positive real axis to the right of 1 (inclusive), continuous with quadrant I. The points *−*1 and 1 are excluded from the domain. The range is that strip of the complex plane containing numbers whose imaginary part is between *−π/*2 and *π/*2. A number with imaginary part equal to *−π/*2 is in the range if and only if its real part is strictly negative; a number with imaginary part equal to *π/*2 is in the range if and only if its imaginary part is strictly positive. Thus the range of the inverse hyperbolic tangent function is identical to that of the inverse hyperbolic sine function with the points *−πi/*2 and *πi/*2 excluded.

**Examples:**

```lisp

(sinh 0) → 0.0 
(cosh (complex 0 -1)) → #C(0.540302 -0.0) 
```

**Exceptional Situations:**

Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> . Might signal <DictionaryLink  term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>.

**See Also:**

<DictionaryLink  term={"log"}><b>log</b></DictionaryLink>, <DictionaryLink  term={"sqrt"}><b>sqrt</b></DictionaryLink>, Section 12.1.3.3 (Rule of Float Substitutability)

**Notes:**

The result of <DictionaryLink  term={"acosh"}><b>acosh</b></DictionaryLink> may be a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> even if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> ; this occurs when <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is less than one. Also, the result of <DictionaryLink  term={"atanh"}><b>atanh</b></DictionaryLink> may be a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> even if <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is not a <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> ; this occurs when the absolute value of <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> is greater than one.

The branch cut formulae are mathematically correct, assuming completely accurate computation. Implementors should consult a good text on numerical analysis. The formulae given above are not necessarily the simplest ones for real-valued computations; they are chosen to define the branch cuts in desirable ways for the complex case.
