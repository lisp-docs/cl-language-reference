 



Initialization arguments are checked for validity in each of the four situations that use them. An initialization argument may be valid in one situation and not another. For example, the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> defined for the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> checks the validity of its initialization arguments and signals an error if an initialization argument is supplied that is not declared as valid in that situation. 



There are two means for declaring initialization arguments valid. 



*•* Initialization arguments that fill <ClLinks  term={"slot"}><i>slots</i></ClLinks> are declared as valid by the :initarg slot option to <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>. The :initarg slot option is inherited from *superclasses*. Thus the set of valid 







 



 



initialization arguments that fill <ClLinks  term={"slot"}><i>slots</i></ClLinks> for a <ClLinks  term={"class"}><i>class</i></ClLinks> is the union of the initialization arguments that fill <ClLinks  term={"slot"}><i>slots</i></ClLinks> declared as valid by that <ClLinks  term={"class"}><i>class</i></ClLinks> and its *superclasses*. Initialization arguments that fill <ClLinks  term={"slot"}><i>slots</i></ClLinks> are valid in all four contexts. 



*•* Initialization arguments that supply arguments to <ClLinks  term={"method"}><i>methods</i></ClLinks> are declared as valid by defining those <ClLinks  term={"method"}><i>methods</i></ClLinks>. The keyword name of each keyword parameter specified in the <ClLinks  term={"method"}><i>method</i></ClLinks>’s <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> becomes an initialization argument for all *classes* for which the <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable. The presence of &amp;allow-other-keys in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of an applicable method disables validity checking of initialization arguments. Thus <ClLinks  term={"method"}><i>method</i></ClLinks> inheritance controls the set of valid initialization arguments that supply arguments to <ClLinks  term={"method"}><i>methods</i></ClLinks>. The <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> for which <ClLinks  term={"method"}><i>method</i></ClLinks> definitions serve to declare initialization arguments valid are as follows: 



– Making an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>: <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks>, <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, and 



<ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. Initialization arguments declared as valid by these <ClLinks  term={"method"}><i>methods</i></ClLinks> are 



valid when making an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>. 



– Re-initializing an <ClLinks  term={"instance"}><i>instance</i></ClLinks>: <ClLinks  term={"reinitialize-instance"}><b>reinitialize-instance</b></ClLinks> and <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. Initializa tion arguments declared as valid by these <ClLinks  term={"method"}><i>methods</i></ClLinks> are valid when re-initializing an 



<ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



– Updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to a redefined <ClLinks  term={"class"}><i>class</i></ClLinks>: 



**update-instance-for-redefined-class** and <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. Initialization ar 



guments declared as valid by these <ClLinks  term={"method"}><i>methods</i></ClLinks> are valid when updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> 



to conform to a redefined <ClLinks  term={"class"}><i>class</i></ClLinks>. 



– Updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to the definition of a different <ClLinks  term={"class"}><i>class</i></ClLinks>: 



**update-instance-for-different-class** and <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. Initialization 



arguments declared as valid by these <ClLinks  term={"method"}><i>methods</i></ClLinks> are valid when updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> 



to conform to the definition of a different <ClLinks  term={"class"}><i>class</i></ClLinks>. 



The set of valid initialization arguments for a <ClLinks  term={"class"}><i>class</i></ClLinks> is the set of valid initialization arguments that either fill <ClLinks  term={"slot"}><i>slots</i></ClLinks> or supply arguments to <ClLinks  term={"method"}><i>methods</i></ClLinks>, along with the predefined initialization argument :allow-other-keys. The default value for :allow-other-keys is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. Validity checking of initialization arguments is disabled if the value of the initialization argument :allow-other-keys is <ClLinks  term={"true"}><i>true</i></ClLinks>. 



