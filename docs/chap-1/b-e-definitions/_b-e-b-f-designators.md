 



A <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that denotes another <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



Where a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is described as a <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> , the description of the <GlossaryTerm styled={true} term={"operator"}><i>operator</i></GlossaryTerm> is written in a way that assumes that the value of the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is the denoted <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; that is, that the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is already of the denoted <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. (The specific nature of the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> denoted by a “⟨typeii designator*” or a “<GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a ⟨type⟩” can be found in the Glossary entry for “⟨typeii designator* .”) 



For example, “<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>” and “the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of **\*standard-output\***” are operationally indistinguishable as *stream designators*. Similarly, the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> foo and the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> "FOO" are operationally indistinguishable as *string designators*. 



Except as otherwise noted, in a situation where the denoted <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> might be used multiple times, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is coerced only once or whether the coercion occurs each time the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> must be used. 











For example, <DictionaryLink styled={true} term={"mapcar"}><b>mapcar</b></DictionaryLink> receives a *function designator* as an argument, and its description is written as if this were simply a function. In fact, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the *function designator* is coerced right away or whether it is carried around internally in the form that it was given as an <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> and re-coerced each time it is needed. In most cases, *conforming programs* cannot detect the distinction, but there are some pathological situations (particularly those involving self-redefining or mutually-redefining functions) which do conform and which can detect this difference. The following program is a *conforming program*, but might or might not have portably correct results, depending on whether its correctness depends on one or the other of the results: 



(defun add-some (x) 



(defun add-some (x) (+ x 2)) 



(+ x 1)) *→* ADD-SOME 



(mapcar ’add-some ’(1 2 3 4)) 



*→* (2 3 4 5) 



<i><sup>or</sup>→</i> (2 4 5 6) 



In a few rare situations, there may be a need in a dictionary entry to refer to the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that was the original <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> . Since naming the <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> would refer to the denoted <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, the phrase “the ⟨parameter-nameii designator*” can be used to refer to the <GlossaryTerm styled={true} term={"designator"}><i>designator</i></GlossaryTerm> which was the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> from which the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of ⟨parameter-name⟩ was computed. 



