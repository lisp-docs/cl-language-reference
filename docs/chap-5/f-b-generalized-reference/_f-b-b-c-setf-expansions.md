 



Sometimes it is possible to avoid evaluating <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> multiple times or in the wrong order. A *setf expansion* for a given access form can be expressed as an ordered collection of five <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>: 



**List of temporary variables** 



a list of symbols naming temporary variables to be bound sequentially, as if by <DictionaryLink styled={true} term={"let"}><b>let\*</b></DictionaryLink>, to <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from value forms. 



**List of value forms** 



a list of forms (typically, <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>) which when evaluated yield the values to which the corresponding temporary variables should be bound. 



**List of store variables** 



a list of symbols naming temporary store variables which are to hold the new values that will be assigned to the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



**Storing form** 



a form which can reference both the temporary and the store variables, and which changes the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and guarantees to return as its values the values of the store variables, which are the correct values for <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> to return. 



**Accessing form** 



a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> which can reference the temporary variables, and which returns the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



The value returned by the accessing form is affected by execution of the storing form, but either of these forms might be evaluated any number of times. 



Data and Control 











It is possible to do more than one <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> in parallel via <DictionaryLink styled={true} term={"psetf"}><b>psetf</b></DictionaryLink>, <DictionaryLink styled={true} term={"shiftf"}><b>shiftf</b></DictionaryLink>, and <DictionaryLink styled={true} term={"rotatef"}><b>rotatef</b></DictionaryLink>. Because of this, the *setf expander* must produce new temporary and store variable names every time. For examples of how to do this, see <DictionaryLink styled={true} term={"gensym"}><b>gensym</b></DictionaryLink>. 



For each <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> accessor function *F*, unless it is explicitly documented otherwise, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the ability to use an *F form* as a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is implemented by a *setf expander* or a *setf function*. Also, it follows from this that it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether the name (setf *F*) is <GlossaryTerm styled={true} term={"fbound"}><i>fbound</i></GlossaryTerm>. 



