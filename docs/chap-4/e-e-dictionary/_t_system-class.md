**t** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The set of all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. The <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is a <GlossaryTerm  term={"supertype"}><i>supertype</i></GlossaryTerm> of every <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>, including itself. Every <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



**satisfies** <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Predicating. 



**Compound Type Specifier Syntax:** 



(satisfies *predicate-name*) 



**Compound Type Specifier Arguments:** 



*predicate-name*—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that satisfy the *predicate predicate-name*, which must be a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose global <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definition is a one-argument predicate. A name is required for *predicate-name*; <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expressions</i></GlossaryTerm> are not allowed. For example, the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (and integer (satisfies evenp)) denotes the set of all even integers. The form (typep *x* ’(satisfies *p*)) is equivalent to (if (*p x*) t nil).  







The argument is required. The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\*** can be the argument, but it denotes itself (the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> **\***), and does not represent an unspecified value. 



The symbol **satisfies** is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<DictionaryLink  term={"member"}><b>member</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(member <GlossaryTerm  term={"object"}><i>\{object\}</i></GlossaryTerm>\*) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



This denotes the set containing the named <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. An <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is of this <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> if and only if it is <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to one of the specified <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> (member) and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> are equivalent. **\*** can be among the <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm>, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The symbol <DictionaryLink  term={"member"}><b>member</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; and, specifically, it is not an abbreviation for either (member) or (member \*). 



**See Also:** 



the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> 



<DictionaryLink  term={"not"}><b>not</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(not *typespec*) 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .  







**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are not of the *type typespec*. 



The argument is required, and cannot be **\***. 



The symbol <DictionaryLink  term={"not"}><b>not</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<DictionaryLink  term={"and"}><b>and</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(and *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> determined by the intersection of the *typespecs*. **\*** is not permitted as an argument. 



The <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> (and) and <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> are equivalent. The symbol <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , and, specifically, it is not an abbreviation for (and). 



<DictionaryLink  term={"or"}><b>or</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(or *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .  







**Compound Type Specifier Description:** 



This denotes the set of all <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> of the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> determined by the union of the *typespecs*. For example, the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"list"}><b>list</b></DictionaryLink> by definition is the same as (or null cons). Also, the value returned by <DictionaryLink  term={"position"}><b>position</b></DictionaryLink> is an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> (or null (integer 0 \*)); *i.e.*, either <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or a non-negative *integer* . 



**\*** is not permitted as an argument. 



The <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> (or) and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> are equivalent. The symbol <DictionaryLink  term={"or"}><b>or</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; and, specifically, it is not an abbreviation for (or). 



<DictionaryLink  term={"values"}><b>values</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(values *↓value-typespec*) 



*value-typespec::*=*\{typespec\}*\* [&amp;optional *\{typespec\}*\*] [&amp;rest *typespec*] [**&amp;allow-other-keys**] 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Compound Type Specifier Description:** 



This <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> can be used only as the *value-type* in a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> or a <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. It is used to specify individual <GlossaryTerm  term={"type"}><i>types</i></GlossaryTerm> when <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm> are involved. The **&amp;optional** and **&amp;rest** markers can appear in the *value-type* list; they indicate the parameter list of a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that, when given to <DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> along with the values, would correctly receive those values. 



The symbol **\*** may not be among the *value-types*. 



The symbol <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; and, specifically, it is not an abbreviation for (values).  







<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(eql <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>) 



**Compound Type Specifier Arguments:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Compound Type Specifier Description:** 



Represents the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of all *x* for which (eql *object x*) is true. 



The argument <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is required. The <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> can be **\***, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is not valid as an <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifier</i></GlossaryTerm> . 



