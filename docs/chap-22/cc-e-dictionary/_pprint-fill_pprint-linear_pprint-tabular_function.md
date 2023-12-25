**pprint-fill, pprint-linear, pprint-tabular** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink> *stream object* &amp;optional *colon-p at-sign-p →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink styled={true} term={"pprint-linear"}><b>pprint-linear</b></DictionaryLink> *stream object* &amp;optional *colon-p at-sign-p →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



<DictionaryLink styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></DictionaryLink> *stream object* &amp;optional *colon-p at-sign-p tabsize →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream designator* . 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*colon-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



*at-sign-p*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



*tabsize*—a non-negative *integer* . The default is 16. 



**Description:** 



The functions <DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-linear"}><b>pprint-linear</b></DictionaryLink>, and <DictionaryLink styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></DictionaryLink> specify particular ways of *pretty printing* a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. Each function prints parentheses around the output if and only if *colon-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. Each function ignores its *at-sign-p* argument. (Both arguments are included even though only one is needed so that these functions can be used via &#126;/.../ and as <DictionaryLink styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></DictionaryLink> functions, as well as directly.) Each function handles abbreviation and the detection of circularity and sharing correctly, and uses <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> to print <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> when it is a <GlossaryTerm styled={true} term={"non-list"}><i>non-list</i></GlossaryTerm>. 



If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and if the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, each of these functions prints <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> using a minimum of <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm>, as described in Section 22.1.3.5 (Printing Lists and Conses). Otherwise (if <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> and if the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>): 



*•* The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-linear"}><b>pprint-linear</b></DictionaryLink> prints a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> either all on one line, or with each <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> on a separate line. 



*•* The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink> prints a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> with as many <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> as possible on each line. 



*•* The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></DictionaryLink> is the same as <DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink> except that it prints the <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> so that they line up in columns. The *tabsize* specifies the column spacing in <GlossaryTerm styled={true} term={"em"}><i>ems</i></GlossaryTerm>, which is the total spacing from the leading edge of one column to the leading edge of the next. 



**Examples:**
```lisp

Evaluating the following with a line length of 25 produces the output shown. 
(progn (princ "Roads ") 

       
       
       (pprint-tabular \*standard-output\* ’(elm main maple center) nil nil 8)) 
Roads ELM MAIN 
MAPLE CENTER 

```
**Side Effects:** 



Performs output to the indicated <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Affected By:** 



The cursor position on the indicated <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, if it can be determined. 



**Notes:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></DictionaryLink> could be defined as follows: 



(defun pprint-tabular (s list &amp;optional (colon-p t) at-sign-p (tabsize nil)) 



(declare (ignore at-sign-p)) 



(when (null tabsize) (setq tabsize 16)) 



(pprint-logical-block (s list :prefix (if colon-p "(" "") 



:suffix (if colon-p ")" "")) 



(pprint-exit-if-list-exhausted) 



(loop (write (pprint-pop) :stream s) 



(pprint-exit-if-list-exhausted) 



(write-char #\Space s) 



(pprint-tab :section-relative 0 tabsize s) 



(pprint-newline :fill s)))) 



Note that it would have been inconvenient to specify this function using <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>, because of the need to pass its *tabsize* argument through to a &#126;:T format directive nested within an iteration over a list. 



