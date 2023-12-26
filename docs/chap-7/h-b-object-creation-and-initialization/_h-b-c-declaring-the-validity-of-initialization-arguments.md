 



Initialization arguments are checked for validity in each of the four situations that use them. An initialization argument may be valid in one situation and not another. For example, the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> defined for the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink> checks the validity of its initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid in that situation. 



There are two means for declaring initialization arguments valid. 



*•* Initialization arguments that fill <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are declared as valid by the :initarg slot option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>. The :initarg slot option is inherited from *superclasses*. Thus the set of valid 







 



 



initialization arguments that fill <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> for a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is the union of the initialization arguments that fill <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> declared as valid by that <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. Initialization arguments that fill <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are valid in all four contexts. 



*•* Initialization arguments that supply arguments to <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are declared as valid by defining those <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. The keyword name of each keyword parameter specified in the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> becomes an initialization argument for all *classes* for which the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is applicable. The presence of &amp;allow-other-keys in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of an applicable method disables validity checking of initialization arguments. Thus <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> inheritance controls the set of valid initialization arguments that supply arguments to <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> for which <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> definitions serve to declare initialization arguments valid are as follows: 



– Making an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>: <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink>, <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, and 



<DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initialization arguments declared as valid by these <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are 



valid when making an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



– Re-initializing an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>: <DictionaryLink  term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> and <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initializa tion arguments declared as valid by these <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are valid when re-initializing an 



<GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



– Updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>: 



**update-instance-for-redefined-class** and <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initialization ar 



guments declared as valid by these <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are valid when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



– Updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>: 



**update-instance-for-different-class** and <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initialization 



arguments declared as valid by these <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are valid when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> 



to conform to the definition of a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



The set of valid initialization arguments for a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> is the set of valid initialization arguments that either fill <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> or supply arguments to <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>, along with the predefined initialization argument :allow-other-keys. The default value for :allow-other-keys is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. Validity checking of initialization arguments is disabled if the value of the initialization argument :allow-other-keys is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>. 



