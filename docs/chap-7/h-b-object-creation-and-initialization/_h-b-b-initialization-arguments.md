 



An initialization argument controls <ClLinks  term={"object"}><i>object</i></ClLinks> creation and initialization. It is often convenient to use keyword <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> to name initialization arguments, but the <ClLinks  term={"name"}><i>name</i></ClLinks> of an initialization argument can be any <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, including <ClLinks  term={"nil"}><b>nil</b></ClLinks>. An initialization argument can be used in two ways: to fill a <ClLinks  term={"slot"}><i>slot</i></ClLinks> with 



a value or to provide an argument for an initialization <ClLinks  term={"method"}><i>method</i></ClLinks>. A single initialization argument can be used for both purposes. 



An *initialization argument list* is a *property list* of initialization argument names and values. Its structure is identical to a *property list* and also to the portion of an argument list processed for **&amp;key** parameters. As in those lists, if an initialization argument name appears more than once in an initialization argument list, the leftmost occurrence supplies the value and the remaining 



occurrences are ignored. The arguments to <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> (after the first argument) form an *initialization argument list*. 



An initialization argument can be associated with a <ClLinks  term={"slot"}><i>slot</i></ClLinks>. If the initialization argument has a value in the *initialization argument list*, the value is stored into the <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the newly created <ClLinks  term={"object"}><i>object</i></ClLinks>, overriding any :initform form associated with the <ClLinks  term={"slot"}><i>slot</i></ClLinks>. A single initialization argument can initialize more than one <ClLinks  term={"slot"}><i>slot</i></ClLinks>. An initialization argument that initializes a *shared slot* stores its value into the *shared slot*, replacing any previous value. 



An initialization argument can be associated with a <ClLinks  term={"method"}><i>method</i></ClLinks>. When an <ClLinks  term={"object"}><i>object</i></ClLinks> is created and a particular initialization argument is supplied, the *generic functions* <ClLinks  term={"initialize-instance"}><b>initialize-instance</b></ClLinks>, <ClLinks  term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, and <ClLinks  term={"allocate-instance"}><b>allocate-instance</b></ClLinks> are called with that initialization argument’s name and value as a keyword argument pair. If a value for the initialization argument is not supplied in the *initialization argument list*, the <ClLinks  term={"method"}><i>method</i></ClLinks>’s *lambda list* supplies a default value. 



Initialization arguments are used in four situations: when making an <ClLinks  term={"instance"}><i>instance</i></ClLinks>, when re-initializing an <ClLinks  term={"instance"}><i>instance</i></ClLinks>, when updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to a redefined <ClLinks  term={"class"}><i>class</i></ClLinks>, and when updating an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to conform to the definition of a different <ClLinks  term={"class"}><i>class</i></ClLinks>. 



Because initialization arguments are used to control the creation and initialization of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of some particular <ClLinks  term={"class"}><i>class</i></ClLinks>, we say that an initialization argument is “an initialization argument for” that <ClLinks  term={"class"}><i>class</i></ClLinks>. 



