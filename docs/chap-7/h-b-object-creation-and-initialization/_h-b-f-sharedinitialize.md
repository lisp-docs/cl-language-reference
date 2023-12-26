 



The <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is used to fill the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> using initialization arguments and :initform forms when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is created, when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is re-initialized, when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is updated to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, and when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is updated to conform to a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. It uses standard <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> combination. It takes the following 



arguments: the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to be initialized, a specification of a set of <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of *slots accessible* in that <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, and any number of initialization arguments. The arguments after the first two must form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



The second argument to <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> may be one of the following: 



*•* It can be a (possibly empty) <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> names, which specifies the set of those <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> names. 



*•* It can be the symbol <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, which specifies the set of all of the <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



There is a system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> whose first <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. This <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> behaves as follows on each <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, whether shared or local: 



*•* If an initialization argument in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm> specifies a value for that <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, that value is stored into the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, even if a value has already been stored in the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> before the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is run. The affected <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are independent of which <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are indicated by the second argument to <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. 



*•* Any <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> indicated by the second argument that are still unbound at this point are initialized according to their :initform forms. For any such <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> that has an :initform form, that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated in the lexical environment of its defining <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> form and the result is stored into the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. For example, if a <GlossaryTerm styled={true} term={"before method"}><i>before method</i></GlossaryTerm> stores a value in the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>, the :initform form will not be used to supply a value for the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. If the second argument specifies a <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> that does not correspond to any *slots accessible* in the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, the results are unspecified. 



*•* The rules mentioned in Section 7.1.4 (Rules for Initialization Arguments) are obeyed. 



The generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is called by the system-supplied primary <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink>, **update-instance-for-different-class**, **update-instance-for-redefined-class**, and <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>. Thus, <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> can be written for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> to specify actions that should be taken in all of these contexts. 



