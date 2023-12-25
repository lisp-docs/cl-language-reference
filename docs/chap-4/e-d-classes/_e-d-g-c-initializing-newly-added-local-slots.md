 



The second step initializes the newly added *local slots* and performs any other user-defined actions. This step is implemented by the generic function **update-instance-for-redefined-class**, which is called after completion of the first step of modifying the structure of the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



The generic function **update-instance-for-redefined-class** takes four required arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> being updated after it has undergone the first step, a list of the names of *local slots* that were added, a list of the names of *local slots* that were discarded, and a property list containing the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> names and values of <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that were discarded and had values. Included among the discarded <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> that were local in the old <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and that are shared in the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



The generic function **update-instance-for-redefined-class** also takes any number of initialization arguments. When it is called by the system to update an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> has been redefined, no initialization arguments are provided. 



There is a system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for **update-instance-for-redefined-class** whose *parameter specializer* for its <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> argument is the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>. First this <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> checks the validity of initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid. (For more information, see Section 7.1.2 (Declaring the Validity of Initialization Arguments).) Then it calls the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, the list of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of the newly added <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, and the initialization arguments it received. 



