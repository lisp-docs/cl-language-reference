**pprint-tab** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pprint-tab"}><b>pprint-tab</b></ClLinks> *kind colnum colinc* &amp;optional *stream →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 







 



 



**Arguments and Values:** 



*kind*—one of :line, :section, :line-relative, or :section-relative. 



*colnum*—a non-negative *integer* . 



*colinc*—a non-negative *integer* . 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream designator* . 



**Description:** 



Specifies tabbing to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> as performed by the standard &#126;T format directive. If <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is a <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm> and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, tabbing is performed; otherwise, <ClLinks styled={true} term={"pprint-tab"}><b>pprint-tab</b></ClLinks> has no effect. 



The arguments *colnum* and *colinc* correspond to the two <ClLinks styled={true} term={"parameter"}><i>parameters</i></ClLinks> to &#126;T and are in terms of <ClLinks styled={true} term={"em"}><i>ems</i></ClLinks>. The *kind* argument specifies the style of tabbing. It must be one of :line (tab as by &#126;T), :section (tab as by &#126;:T, but measuring horizontal positions relative to the start of the dynamically enclosing section), :line-relative (tab as by &#126;@T), or :section-relative (tab as by &#126;:@T, but measuring 



horizontal positions relative to the start of the dynamically enclosing section). 



**Exceptional Situations:** 



An error is signaled if *kind* is not one of :line, :section, :line-relative, or :section-relative. 



**See Also:** 



<ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> 



