 



In the *for-as-on-list* subclause, the for or as construct iterates over a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. It checks for the end of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> as if by using <DictionaryLink styled={true} term={"atom"}><b>atom</b></DictionaryLink>. The variable *var* is bound to the successive tails of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> in *form1*. At the end of each iteration, the function *step-fun* is applied to the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>; the default value for *step-fun* is <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>. The *loop keywords* on and by serve as valid prepositions in this syntax. The for or as construct causes termination when the end of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is reached. 



