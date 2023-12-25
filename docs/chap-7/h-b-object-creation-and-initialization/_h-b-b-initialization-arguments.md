 



An initialization argument controls <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> creation and initialization. It is often convenient to use keyword <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> to name initialization arguments, but the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of an initialization argument can be any <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, including <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. An initialization argument can be used in two ways: to fill a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> with 



a value or to provide an argument for an initialization <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. A single initialization argument can be used for both purposes. 



An *initialization argument list* is a *property list* of initialization argument names and values. Its structure is identical to a *property list* and also to the portion of an argument list processed for **&amp;key** parameters. As in those lists, if an initialization argument name appears more than once in an initialization argument list, the leftmost occurrence supplies the value and the remaining 



occurrences are ignored. The arguments to <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> (after the first argument) form an *initialization argument list*. 



An initialization argument can be associated with a <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. If the initialization argument has a value in the *initialization argument list*, the value is stored into the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the newly created <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, overriding any :initform form associated with the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. A single initialization argument can initialize more than one <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm>. An initialization argument that initializes a *shared slot* stores its value into the *shared slot*, replacing any previous value. 



An initialization argument can be associated with a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. When an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is created and a particular initialization argument is supplied, the *generic functions* <DictionaryLink styled={true} term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, and <DictionaryLink styled={true} term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> are called with that initialization argument’s name and value as a keyword argument pair. If a value for the initialization argument is not supplied in the *initialization argument list*, the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s *lambda list* supplies a default value. 



Initialization arguments are used in four situations: when making an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, when re-initializing an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, when updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to conform to a redefined <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, and when updating an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of a different <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



Because initialization arguments are used to control the creation and initialization of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of some particular <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, we say that an initialization argument is “an initialization argument for” that <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



