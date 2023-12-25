 



To compare the precedence of two methods, their *parameter specializers* are examined in order. The default examination order is from left to right, but an alternative order may be specified by the :argument-precedence-order option to <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink> or to any of the other operators that specify generic function options. 



The corresponding *parameter specializers* from each method are compared. When a pair of *parameter specializers* agree, the next pair are compared for agreement. If all corresponding parameter specializers agree, the two methods must have different <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>; in this case, either method can be selected to precede the other. For information about agreement, see Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers). 



If some corresponding *parameter specializers* do not agree, the first pair of *parameter specializers* that do not agree determines the precedence. If both *parameter specializers* are classes, the more specific of the two methods is the method whose *parameter specializer* appears earlier in the *class precedence list* of the corresponding argument. Because of the way in which the set of applicable methods is chosen, the *parameter specializers* are guaranteed to be present in the class precedence list of the class of the argument. 



If just one of a pair of corresponding *parameter specializers* is (eql <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>), the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> with that *parameter specializer* precedes the other <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. If both *parameter specializers* are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm>, the specializers must agree (otherwise the two <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> would not both have been applicable to this argument). 



The resulting list of *applicable methods* has the most specific <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> first and the least specific <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> last. 



