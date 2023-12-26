 



To compare the precedence of two methods, their <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are examined in order. The default examination order is from left to right, but an alternative order may be specified by the :argument-precedence-order option to <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink> or to any of the other operators that specify generic function options. 



The corresponding <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> from each method are compared. When a pair of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> agree, the next pair are compared for agreement. If all corresponding parameter specializers agree, the two methods must have different <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>; in this case, either method can be selected to precede the other. For information about agreement, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



If some corresponding <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> do not agree, the first pair of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> that do not agree determines the precedence. If both <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are classes, the more specific of the two methods is the method whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> appears earlier in the <GlossaryTerm styled={true} term={"class precedence list"}><i>class precedence list</i></GlossaryTerm> of the corresponding argument. Because of the way in which the set of applicable methods is chosen, the <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are guaranteed to be present in the class precedence list of the class of the argument. 



If just one of a pair of corresponding <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> is (eql <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>), the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> precedes the other <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. If both <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expressions</i></GlossaryTerm>, the specializers must agree (otherwise the two <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> would not both have been applicable to this argument). 



The resulting list of <GlossaryTerm styled={true} term={"applicable method"}><i>applicable methods</i></GlossaryTerm> has the most specific <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> first and the least specific <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> last. 



