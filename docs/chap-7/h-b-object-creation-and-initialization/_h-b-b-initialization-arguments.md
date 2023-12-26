 



An initialization argument controls <ClLinks  term={"object"}><i>object</i></ClLinks> creation and initialization. It is often convenient to use keyword <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to name initialization arguments, but the <ClLinks  term={"name"}><i>name</i></ClLinks> of an initialization argument can be any <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, including <ClLinks  term={"nil"}><b>nil</b></ClLinks>. An initialization argument can be used in two ways: to fill a <ClLinks  term={"slot"}><i>slot</i></ClLinks> with 



a value or to provide an argument for an initialization <ClLinks  term={"method"}><i>method</i></ClLinks>. A single initialization argument can be used for both purposes. 



An <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> of initialization argument names and values. Its structure is identical to a <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> and also to the portion of an argument list processed for **&amp;key** parameters. As in those lists, if an initialization argument name appears more than once in an initialization argument list, the leftmost occurrence supplies the value and the remaining 



occurrences are ignored. The arguments to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> (after the first argument) form an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



An initialization argument can be associated with a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. If the initialization argument has a value in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>, the value is stored into the <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the newly created <ClLinks  term={"object"}><i>object</i></ClLinks>, overriding any :initform form associated with the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. A single initialization argument can initialize more than one <ClLinks  term={"slot"}><i>slot</i></ClLinks>. An initialization argument that initializes a <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm> stores its value into the <GlossaryTerm styled={true} term={"shared slot"}><i>shared slot</i></GlossaryTerm>, replacing any previous value. 



An initialization argument can be associated with a <ClLinks  term={"method"}><i>method</i></ClLinks>. When an <ClLinks  term={"object"}><i>object</i></ClLinks> is created and a particular initialization argument is supplied, the <GlossaryTerm styled={true} term={"generic function"}><i>generic functions</i></GlossaryTerm> <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, and <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> are called with that initialization argument’s name and value as a keyword argument pair. If a value for the initialization argument is not supplied in the <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>, the <ClLinks  term={"method"}><i>method</i></ClLinks>’s <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> supplies a default value. 



Initialization arguments are used in four situations: when making an <ClLinks  term={"instance"}><i>instance</i></ClLinks>, when re-initializing an <ClLinks  term={"instance"}><i>instance</i></ClLinks>, when updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to a redefined <ClLinks  term={"class"}><i>class</i></ClLinks>, and when updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to the definition of a different <ClLinks  term={"class"}><i>class</i></ClLinks>. 



Because initialization arguments are used to control the creation and initialization of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of some particular <ClLinks  term={"class"}><i>class</i></ClLinks>, we say that an initialization argument is “an initialization argument for” that <ClLinks  term={"class"}><i>class</i></ClLinks>. 



