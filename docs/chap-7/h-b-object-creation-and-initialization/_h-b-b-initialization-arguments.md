 



An initialization argument controls <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> creation and initialization. It is often convenient to use keyword <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> to name initialization arguments, but the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of an initialization argument can be any <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, including <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. An initialization argument can be used in two ways: to fill a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> with 



a value or to provide an argument for an initialization <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. A single initialization argument can be used for both purposes. 



An <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of initialization argument names and values. Its structure is identical to a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> and also to the portion of an argument list processed for **&amp;key** parameters. As in those lists, if an initialization argument name appears more than once in an initialization argument list, the leftmost occurrence supplies the value and the remaining 



occurrences are ignored. The arguments to <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> (after the first argument) form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



An initialization argument can be associated with a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. If the initialization argument has a value in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>, the value is stored into the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the newly created <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, overriding any :initform form associated with the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. A single initialization argument can initialize more than one <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>. An initialization argument that initializes a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> stores its value into the <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, replacing any previous value. 



An initialization argument can be associated with a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>. When an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is created and a particular initialization argument is supplied, the <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> <DictionaryLink  term={"initialize-instance"}><b>initialize-instance</b></DictionaryLink>, <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, and <DictionaryLink  term={"allocate-instance"}><b>allocate-instance</b></DictionaryLink> are called with that initialization argument’s name and value as a keyword argument pair. If a value for the initialization argument is not supplied in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>, the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> supplies a default value. 



Initialization arguments are used in four situations: when making an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, when re-initializing an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to a redefined <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, and when updating an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of a different <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



Because initialization arguments are used to control the creation and initialization of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of some particular <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, we say that an initialization argument is “an initialization argument for” that <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



