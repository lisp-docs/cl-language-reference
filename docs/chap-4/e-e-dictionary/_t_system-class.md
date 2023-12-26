**t** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The set of all <ClLinks  term={"object"}><i>objects</i></ClLinks>. The <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> is a <ClLinks  term={"supertype"}><i>supertype</i></ClLinks> of every <ClLinks  term={"type"}><i>type</i></ClLinks>, including itself. Every <ClLinks  term={"object"}><i>object</i></ClLinks> is of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>. 



**satisfies** <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Predicating. 



**Compound Type Specifier Syntax:** 



(satisfies *predicate-name*) 



**Compound Type Specifier Arguments:** 



*predicate-name*—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> that satisfy the *predicate predicate-name*, which must be a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose global <ClLinks  term={"function"}><i>function</i></ClLinks> definition is a one-argument predicate. A name is required for *predicate-name*; <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expressions</i></GlossaryTerm> are not allowed. For example, the <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (and integer (satisfies evenp)) denotes the set of all even integers. The form (typep *x* ’(satisfies *p*)) is equivalent to (if (*p x*) t nil).  







The argument is required. The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\*** can be the argument, but it denotes itself (the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> **\***), and does not represent an unspecified value. 



The symbol **satisfies** is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<DictionaryLink  term={"member"}><b>member</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(member <ClLinks  term={"object"}><i>\{object\}</i></ClLinks>\*) 



**Compound Type Specifier Arguments:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Compound Type Specifier Description:** 



This denotes the set containing the named <ClLinks  term={"object"}><i>objects</i></ClLinks>. An <ClLinks  term={"object"}><i>object</i></ClLinks> is of this <ClLinks  term={"type"}><i>type</i></ClLinks> if and only if it is <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to one of the specified <ClLinks  term={"object"}><i>objects</i></ClLinks>. 



The <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> (member) and <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> are equivalent. **\*** can be among the <ClLinks  term={"object"}><i>objects</i></ClLinks>, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The symbol <DictionaryLink  term={"member"}><b>member</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; and, specifically, it is not an abbreviation for either (member) or (member \*). 



**See Also:** 



the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> 



<DictionaryLink  term={"not"}><b>not</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(not *typespec*) 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .  







**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> that are not of the *type typespec*. 



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



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> determined by the intersection of the *typespecs*. **\*** is not permitted as an argument. 



The <GlossaryTerm styled={true} term={"type specifier"}><i>type specifiers</i></GlossaryTerm> (and) and <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> are equivalent. The symbol <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> , and, specifically, it is not an abbreviation for (and). 



<DictionaryLink  term={"or"}><b>or</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(or *\{typespec\}*\*) 



**Compound Type Specifier Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> .  







**Compound Type Specifier Description:** 



This denotes the set of all <ClLinks  term={"object"}><i>objects</i></ClLinks> of the <ClLinks  term={"type"}><i>type</i></ClLinks> determined by the union of the *typespecs*. For example, the <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"list"}><b>list</b></DictionaryLink> by definition is the same as (or null cons). Also, the value returned by <DictionaryLink  term={"position"}><b>position</b></DictionaryLink> is an <ClLinks  term={"object"}><i>object</i></ClLinks> of <ClLinks  term={"type"}><i>type</i></ClLinks> (or null (integer 0 \*)); *i.e.*, either <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> or a non-negative *integer* . 



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



This <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> can be used only as the *value-type* in a <DictionaryLink  term={"function"}><b>function</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> or a <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> <GlossaryTerm styled={true} term={"special form"}><i>special form</i></GlossaryTerm>. It is used to specify individual <ClLinks  term={"type"}><i>types</i></ClLinks> when <GlossaryTerm styled={true} term={"multiple values"}><i>multiple values</i></GlossaryTerm> are involved. The **&amp;optional** and **&amp;rest** markers can appear in the *value-type* list; they indicate the parameter list of a <ClLinks  term={"function"}><i>function</i></ClLinks> that, when given to <DictionaryLink  term={"multiple-value-call"}><b>multiple-value-call</b></DictionaryLink> along with the values, would correctly receive those values. 



The symbol **\*** may not be among the *value-types*. 



The symbol <DictionaryLink  term={"values"}><b>values</b></DictionaryLink> is not valid as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; and, specifically, it is not an abbreviation for (values).  







<DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> <GlossaryTerm styled={true} term={"type specifier"}><i>Type Specifier</i></GlossaryTerm> 



**Compound Type Specifier Kind:** 



Combining. 



**Compound Type Specifier Syntax:** 



(eql <ClLinks  term={"object"}><i>object</i></ClLinks>) 



**Compound Type Specifier Arguments:** 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Compound Type Specifier Description:** 



Represents the <ClLinks  term={"type"}><i>type</i></ClLinks> of all *x* for which (eql *object x*) is true. 



The argument <ClLinks  term={"object"}><i>object</i></ClLinks> is required. The <ClLinks  term={"object"}><i>object</i></ClLinks> can be **\***, but if so it denotes itself (the symbol **\***) and does not represent an unspecified value. The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> is not valid as an <GlossaryTerm styled={true} term={"atomic type specifier"}><i>atomic type specifier</i></GlossaryTerm> . 



