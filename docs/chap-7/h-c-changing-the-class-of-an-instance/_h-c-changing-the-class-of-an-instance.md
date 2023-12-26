 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> can be used to change the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> from its current class, *C*<sub>from</sub>, to a different class, *C*<sub>to</sub>; it changes the structure of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to conform to the definition of the class *C*<sub>to</sub>. 



Note that changing the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> may cause <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> to be added or deleted. Changing the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> does not change its identity as defined by the <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> function. 



When <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked on an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, a two-step updating process takes place. The first step modifies the structure of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> by adding new <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> and discarding <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> that are not specified in the new version of the <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. The second step initializes the newly added <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> and performs any other user-defined actions. These two steps are further described in the two following sections. 



