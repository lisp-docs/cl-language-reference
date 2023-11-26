**5.1.1.2 Setf Expansions** 

Sometimes it is possible to avoid evaluating *subforms* of a *place* multiple times or in the wrong order. A *setf expansion* for a given access form can be expressed as an ordered collection of five *objects*: 

**List of temporary variables** 

a list of symbols naming temporary variables to be bound sequentially, as if by **let\***, to *values* resulting from value forms. 

**List of value forms** 

a list of forms (typically, *subforms* of the *place*) which when evaluated yield the values to which the corresponding temporary variables should be bound. 

**List of store variables** 

a list of symbols naming temporary store variables which are to hold the new values that will be assigned to the *place*. 

**Storing form** 

a form which can reference both the temporary and the store variables, and which changes the *value* of the *place* and guarantees to return as its values the values of the store variables, which are the correct values for **setf** to return. 

**Accessing form** 

a *form* which can reference the temporary variables, and which returns the *value* of the *place*. 

The value returned by the accessing form is affected by execution of the storing form, but either of these forms might be evaluated any number of times. 

Data and Control Flow **5–3**





It is possible to do more than one **setf** in parallel via **psetf**, **shiftf**, and **rotatef**. Because of this, the *setf expander* must produce new temporary and store variable names every time. For examples of how to do this, see **gensym**. 

For each *standardized* accessor function *F*, unless it is explicitly documented otherwise, it is *implementation-dependent* whether the ability to use an *F form* as a **setf** *place* is implemented by a *setf expander* or a *setf function*. Also, it follows from this that it is *implementation-dependent* whether the name (setf *F*) is *fbound*. 

