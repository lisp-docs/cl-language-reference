 



The *generic function* <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is used to fill the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> using initialization arguments and :initform forms when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is created, when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is re-initialized, when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is updated to conform to a redefined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, and when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is updated to conform to a different <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. It uses standard <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> combination. It takes the following 



arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to be initialized, a specification of a set of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of *slots accessible* in that <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, and any number of initialization arguments. The arguments after the first two must form an *initialization argument list*. 



The second argument to <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> may be one of the following: 



*•* It can be a (possibly empty) <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> names, which specifies the set of those <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> names. 



*•* It can be the symbol <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, which specifies the set of all of the <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



There is a system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> whose first *parameter specializer* is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. This <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> behaves as follows on each <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, whether shared or local: 



*•* If an initialization argument in the *initialization argument list* specifies a value for that <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, that value is stored into the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, even if a value has already been stored in the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> before the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is run. The affected <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are independent of which <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are indicated by the second argument to <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. 



*•* Any <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> indicated by the second argument that are still unbound at this point are initialized according to their :initform forms. For any such <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> that has an :initform form, that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment of its defining <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form and the result is stored into the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. For example, if a *before method* stores a value in the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>, the :initform form will not be used to supply a value for the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. If the second argument specifies a <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> that does not correspond to any *slots accessible* in the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, the results are unspecified. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called by the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-different-class**, **update-instance-for-redefined-class**, and <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. Thus, <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> can be written for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> to specify actions that should be taken in all of these contexts. 



