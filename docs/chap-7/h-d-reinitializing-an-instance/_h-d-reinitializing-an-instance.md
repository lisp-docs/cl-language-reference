 



The generic function <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> may be used to change the values of <ClLinks  term={"slot"}><i>slots</i></ClLinks> according to initialization arguments. 



The process of reinitialization changes the values of some <ClLinks  term={"slot"}><i>slots</i></ClLinks> and performs any user-defined actions. It does not modify the structure of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to add or delete <ClLinks  term={"slot"}><i>slots</i></ClLinks>, and it does not use any :initform forms to initialize <ClLinks  term={"slot"}><i>slots</i></ClLinks>. 



The generic function <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> may be called directly. It takes one required argument, the <ClLinks  term={"instance"}><i>instance</i></ClLinks>. It also takes any number of initialization arguments to be used by <ClLinks  term={"method"}><i>methods</i></ClLinks> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> or for <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The arguments after the required <ClLinks  term={"instance"}><i>instance</i></ClLinks> must form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



There is a system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> whose <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> is the <ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>. First this <ClLinks  term={"method"}><i>method</i></ClLinks> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <ClLinks  term={"instance"}><i>instance</i></ClLinks>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, and the initialization arguments it received. 



