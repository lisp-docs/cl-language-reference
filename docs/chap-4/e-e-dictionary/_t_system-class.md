**t** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The set of all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> is a <GlossaryTerm styled={true} term={"supertype"}><i>supertype</i></GlossaryTerm> of every <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, including itself. Every <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



**satisfies** *Type Specifier* 



**Compound Type Specifier Kind:** 



Predicating. 



**Compound Type Specifier Syntax:** 



(satisfies *predicate-name*) 



**Compound Type Specifier Arguments:** 



*predicate-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that satisfy the *predicate predicate-name*, which must be a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose global <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definition is a one-argument predicate. A name is required for *predicate-name*; *lambda expressions* are not allowed. For example, the *type specifier* (and integer (satisfies evenp)) denotes the set of all even integers. The form (typep *x* ’(satisfies *p*)) is equivalent to (if (*p x*) t nil).  







The argument is required. The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** can be the argument, but it denotes itself (the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> **\***), and does not represent an unspecified value. 



The symbol **satisfies** is not valid as a *type specifier* . 



<DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(member <GlossaryTerm styled={true} term={"object"}><i>\{object\}</i></GlossaryTerm>\*) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



This denotes the set containing the named <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. An <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is of this <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> if and only if it is <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> to one of the specified <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 



The *type specifiers* (member) and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> are equivalent. **\*** can be among the <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The symbol <DictionaryLink styled={true} term={"member"}><b>member</b></DictionaryLink> is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for either (member) or (member \*). 



**See Also:** 



the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> 



<DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(not *typespec*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are not of the *type typespec*. 



The argument is required, and cannot be **\***. 



The symbol <DictionaryLink styled={true} term={"not"}><b>not</b></DictionaryLink> is not valid as a *type specifier* . 



<DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(and *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> determined by the intersection of the *typespecs*. **\*** is not permitted as an argument. 



The *type specifiers* (and) and <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> are equivalent. The symbol <DictionaryLink styled={true} term={"and"}><b>and</b></DictionaryLink> is not valid as a *type specifier* , and, specifically, it is not an abbreviation for (and). 



<DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(or *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* .  







**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> determined by the union of the *typespecs*. For example, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink> by definition is the same as (or null cons). Also, the value returned by <DictionaryLink styled={true} term={"position"}><b>position</b></DictionaryLink> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (or null (integer 0 \*)); *i.e.*, either <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> or a non-negative *integer* . 



**\*** is not permitted as an argument. 



The *type specifiers* (or) and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> are equivalent. The symbol <DictionaryLink styled={true} term={"or"}><b>or</b></DictionaryLink> is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (or). 



<DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> *Type Specifier* 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(values *↓value-typespec*) 



*value-typespec::*=*\{typespec\}*\* [&amp;optional *\{typespec\}*\*] [&amp;rest *typespec*] [**&amp;allow-other-keys**] 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This *type specifier* can be used only as the *value-type* in a <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> *type specifier* or a <DictionaryLink styled={true} term={"the"}><b>the</b></DictionaryLink> *special form*. It is used to specify individual <GlossaryTerm styled={true} term={"type"}><i>types</i></GlossaryTerm> when *multiple values* are involved. The **&amp;optional** and **&amp;rest** markers can appear in the *value-type* list; they indicate the parameter list of a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that, when given to <DictionaryLink styled={true} term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> along with the values, would correctly receive those values. 



The symbol **\*** may not be among the *value-types*. 



The symbol <DictionaryLink styled={true} term={"values"}><b>values</b></DictionaryLink> is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (values).  







<DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> *Type Specifier* 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(eql <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



Represents the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of all *x* for which (eql *object x*) is true. 



The argument <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is required. The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> can be **\***, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> is not valid as an *atomic type specifier* . 



