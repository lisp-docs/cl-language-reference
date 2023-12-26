 



A <GlossaryTerm styled={true} term={"pprint dispatch table"}><i>pprint dispatch table</i></GlossaryTerm> is a mapping from keys to pairs of values. Each key is a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . The values associated with a key are a “function” (specifically, a <GlossaryTerm styled={true} term={"function designator"}><i>function designator</i></GlossaryTerm> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>) and a “numerical priority” (specifically, a *real*). Basic insertion and retrieval is done based on the keys with the equality of keys being tested by <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>. 



When <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the <GlossaryTerm styled={true} term={"current pprint dispatch table"}><i>current pprint dispatch table</i></GlossaryTerm> (in <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks>) controls how <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> are printed. The information in this table takes precedence over all other mechanisms for specifying how to print <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. In particular, it has priority over user-defined <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> because the <GlossaryTerm styled={true} term={"current pprint dispatch table"}><i>current pprint dispatch table</i></GlossaryTerm> is consulted first. 



The function is chosen from the <GlossaryTerm styled={true} term={"current pprint dispatch table"}><i>current pprint dispatch table</i></GlossaryTerm> by finding the highest priority function that is associated with a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> that matches the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; if there is more than one such function, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> which is used. 



However, if there is no information in the table about how to <GlossaryTerm styled={true} term={"pretty print"}><i>pretty print</i></GlossaryTerm> a particular kind of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is invoked which uses <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> to print the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The value of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is still <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> when this function is *called*, and individual methods for <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> might still elect to produce output in a special format conditional on the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>. 



