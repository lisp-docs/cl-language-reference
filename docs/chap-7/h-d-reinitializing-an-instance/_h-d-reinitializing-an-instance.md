 



The generic function <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> may be used to change the values of <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> according to initialization arguments. 



The process of reinitialization changes the values of some <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> and performs any user-defined actions. It does not modify the structure of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to add or delete <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, and it does not use any :initform forms to initialize <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>. 



The generic function <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> may be called directly. It takes one required argument, the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. It also takes any number of initialization arguments to be used by <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or for <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The arguments after the required <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> must form an *initialization argument list*. 



There is a system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> whose *parameter specializer* is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. First this <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, and the initialization arguments it received. 



