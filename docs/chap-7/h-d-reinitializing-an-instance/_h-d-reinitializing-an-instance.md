 



The generic function <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> may be used to change the values of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> according to initialization arguments. 



The process of reinitialization changes the values of some <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> and performs any user-defined actions. It does not modify the structure of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to add or delete <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>, and it does not use any :initform forms to initialize <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>. 



The generic function <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> may be called directly. It takes one required argument, the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. It also takes any number of initialization arguments to be used by <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The arguments after the required <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> must form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



There is a system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> is the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. First this <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, and the initialization arguments it received. 



