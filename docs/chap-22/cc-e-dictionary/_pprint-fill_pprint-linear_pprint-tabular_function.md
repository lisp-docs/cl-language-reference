**pprint-fill, pprint-linear, pprint-tabular** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks> *stream object* &amp;optional *colon-p at-sign-p →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



<ClLinks styled={true} term={"pprint-linear"}><b>pprint-linear</b></ClLinks> *stream object* &amp;optional *colon-p at-sign-p →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



<ClLinks styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></ClLinks> *stream object* &amp;optional *colon-p at-sign-p tabsize →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream designator* . 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*colon-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



*at-sign-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



*tabsize*—a non-negative *integer* . The default is 16. 



**Description:** 



The functions <ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks>, <ClLinks styled={true} term={"pprint-linear"}><b>pprint-linear</b></ClLinks>, and <ClLinks styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></ClLinks> specify particular ways of *pretty printing* a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. Each function prints parentheses around the output if and only if *colon-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. Each function ignores its *at-sign-p* argument. (Both arguments are included even though only one is needed so that these functions can be used via &#126;/.../ and as <ClLinks styled={true} term={"set-pprint-dispatch"}><b>set-pprint-dispatch</b></ClLinks> functions, as well as directly.) Each function handles abbreviation and the detection of circularity and sharing correctly, and uses <ClLinks styled={true} term={"write"}><b>write</b></ClLinks> to print <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> when it is a <ClLinks styled={true} term={"non-list"}><i>non-list</i></ClLinks>. 



If <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and if the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, each of these functions prints <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> using a minimum of <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks>, as described in Section 22.1.3.5 (Printing Lists and Conses). Otherwise (if <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> and if the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>): 



*•* The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-linear"}><b>pprint-linear</b></ClLinks> prints a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> either all on one line, or with each <ClLinks styled={true} term={"element"}><i>element</i></ClLinks> on a separate line. 



*•* The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks> prints a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> with as many <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> as possible on each line. 



*•* The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></ClLinks> is the same as <ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks> except that it prints the <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> so that they line up in columns. The *tabsize* specifies the column spacing in <ClLinks styled={true} term={"em"}><i>ems</i></ClLinks>, which is the total spacing from the leading edge of one column to the leading edge of the next. 



**Examples:**
```lisp
Evaluating the following with a line length of 25 produces the output shown. 
(progn (princ "Roads ") 
       
       
       (pprint-tabular \*standard-output\* ’(elm main maple center) nil nil 8)) 
Roads ELM MAIN 
MAPLE CENTER 
```
**Side Effects:** 



Performs output to the indicated <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Affected By:** 



The cursor position on the indicated <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, if it can be determined. 



**Notes:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"pprint-tabular"}><b>pprint-tabular</b></ClLinks> could be defined as follows: 



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



Note that it would have been inconvenient to specify this function using <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>, because of the need to pass its *tabsize* argument through to a &#126;:T format directive nested within an iteration over a list. 



