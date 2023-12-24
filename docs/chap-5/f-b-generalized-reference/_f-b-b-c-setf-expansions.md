 



Sometimes it is possible to avoid evaluating <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> multiple times or in the wrong order. A *setf expansion* for a given access form can be expressed as an ordered collection of five <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>: 



**List of temporary variables** 



a list of symbols naming temporary variables to be bound sequentially, as if by <ClLinks styled={true} term={"let"}><b>let\*</b></ClLinks>, to <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from value forms. 



**List of value forms** 



a list of forms (typically, <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>) which when evaluated yield the values to which the corresponding temporary variables should be bound. 



**List of store variables** 



a list of symbols naming temporary store variables which are to hold the new values that will be assigned to the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**Storing form** 



a form which can reference both the temporary and the store variables, and which changes the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> and guarantees to return as its values the values of the store variables, which are the correct values for <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> to return. 



**Accessing form** 



a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> which can reference the temporary variables, and which returns the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



The value returned by the accessing form is affected by execution of the storing form, but either of these forms might be evaluated any number of times. 



Data and Control 











It is possible to do more than one <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> in parallel via <ClLinks styled={true} term={"psetf"}><b>psetf</b></ClLinks>, <ClLinks styled={true} term={"shiftf"}><b>shiftf</b></ClLinks>, and <ClLinks styled={true} term={"rotatef"}><b>rotatef</b></ClLinks>. Because of this, the *setf expander* must produce new temporary and store variable names every time. For examples of how to do this, see <ClLinks styled={true} term={"gensym"}><b>gensym</b></ClLinks>. 



For each <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> accessor function *F*, unless it is explicitly documented otherwise, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the ability to use an *F form* as a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> is implemented by a *setf expander* or a *setf function*. Also, it follows from this that it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether the name (setf *F*) is <ClLinks styled={true} term={"fbound"}><i>fbound</i></ClLinks>. 



