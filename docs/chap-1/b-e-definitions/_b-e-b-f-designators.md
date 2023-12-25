 



A <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> is an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that denotes another <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



Where a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is described as a <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> , the description of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is written in a way that assumes that the value of the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is the denoted <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; that is, that the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is already of the denoted <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. (The specific nature of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> denoted by a “⟨typeii designator*” or a “<ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a ⟨type⟩” can be found in the Glossary entry for “⟨typeii designator* .”) 



For example, “<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>” and “the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*standard-output\***” are operationally indistinguishable as *stream designators*. Similarly, the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> foo and the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> "FOO" are operationally indistinguishable as *string designators*. 



Except as otherwise noted, in a situation where the denoted <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> might be used multiple times, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is coerced only once or whether the coercion occurs each time the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> must be used. 











For example, <ClLinks styled={true} term={"mapcar"}><b>mapcar</b></ClLinks> receives a *function designator* as an argument, and its description is written as if this were simply a function. In fact, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the *function designator* is coerced right away or whether it is carried around internally in the form that it was given as an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> and re-coerced each time it is needed. In most cases, *conforming programs* cannot detect the distinction, but there are some pathological situations (particularly those involving self-redefining or mutually-redefining functions) which do conform and which can detect this difference. The following program is a *conforming program*, but might or might not have portably correct results, depending on whether its correctness depends on one or the other of the results: 



(defun add-some (x) 



(defun add-some (x) (+ x 2)) 



(+ x 1)) → ADD-SOME 



(mapcar ’add-some ’(1 2 3 4)) 



→ (2 3 4 5) 



<i><sup>or</sup>→</i> (2 4 5 6) 



In a few rare situations, there may be a need in a dictionary entry to refer to the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that was the original <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> for a <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> . Since naming the <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> would refer to the denoted <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, the phrase “the ⟨parameter-nameii designator*” can be used to refer to the <ClLinks styled={true} term={"designator"}><i>designator</i></ClLinks> which was the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> from which the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of ⟨parameter-name⟩ was computed. 



