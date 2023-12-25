 



Initialization arguments are checked for validity in each of the four situations that use them. An initialization argument may be valid in one situation and not another. For example, the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> defined for the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink> checks the validity of its initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid in that situation. 



There are two means for declaring initialization arguments valid. 



*•* Initialization arguments that fill <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are declared as valid by the :initarg slot option to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>. The :initarg slot option is inherited from *superclasses*. Thus the set of valid 







 



 



initialization arguments that fill <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is the union of the initialization arguments that fill <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> declared as valid by that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and its *superclasses*. Initialization arguments that fill <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are valid in all four contexts. 



*•* Initialization arguments that supply arguments to <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are declared as valid by defining those <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. The keyword name of each keyword parameter specified in the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s *lambda list* becomes an initialization argument for all *classes* for which the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable. The presence of &amp;allow-other-keys in the *lambda list* of an applicable method disables validity checking of initialization arguments. Thus <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> inheritance controls the set of valid initialization arguments that supply arguments to <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. The *generic functions* for which <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> definitions serve to declare initialization arguments valid are as follows: 



– Making an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>: <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, and 



<DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initialization arguments declared as valid by these <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are 



valid when making an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



– Re-initializing an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>: <DictionaryLink styled={true} term={"reinitialize-instance"}><b>reinitialize-instance</b></DictionaryLink> and <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initializa tion arguments declared as valid by these <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are valid when re-initializing an 



<GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



– Updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to conform to a redefined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>: 



**update-instance-for-redefined-class** and <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initialization ar 



guments declared as valid by these <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are valid when updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



to conform to a redefined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



– Updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of a different <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>: 



**update-instance-for-different-class** and <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. Initialization 



arguments declared as valid by these <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> are valid when updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> 



to conform to the definition of a different <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



The set of valid initialization arguments for a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> is the set of valid initialization arguments that either fill <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> or supply arguments to <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, along with the predefined initialization argument :allow-other-keys. The default value for :allow-other-keys is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Validity checking of initialization arguments is disabled if the value of the initialization argument :allow-other-keys is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



