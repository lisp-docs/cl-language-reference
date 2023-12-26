 



To compare the precedence of two methods, their <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are examined in order. The default examination order is from left to right, but an alternative order may be specified by the :argument-precedence-order option to <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> or to any of the other operators that specify generic function options. 



The corresponding <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> from each method are compared. When a pair of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> agree, the next pair are compared for agreement. If all corresponding parameter specializers agree, the two methods must have different <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks>; in this case, either method can be selected to precede the other. For information about agreement, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



If some corresponding <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> do not agree, the first pair of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> that do not agree determines the precedence. If both <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are classes, the more specific of the two methods is the method whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> appears earlier in the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of the corresponding argument. Because of the way in which the set of applicable methods is chosen, the <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are guaranteed to be present in the class precedence list of the class of the argument. 



If just one of a pair of corresponding <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> is (eql <ClLinks  term={"object"}><i>object</i></ClLinks>), the <ClLinks  term={"method"}><i>method</i></ClLinks> with that <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> precedes the other <ClLinks  term={"method"}><i>method</i></ClLinks>. If both <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <ClLinks  term={"expression"}><i>expressions</i></ClLinks>, the specializers must agree (otherwise the two <ClLinks  term={"method"}><i>methods</i></ClLinks> would not both have been applicable to this argument). 



The resulting list of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> has the most specific <ClLinks  term={"method"}><i>method</i></ClLinks> first and the least specific <ClLinks  term={"method"}><i>method</i></ClLinks> last. 



