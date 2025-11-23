 



An <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> is used to describe how a set of <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> is received by an <GlossaryTerm styled={true} term={"ordinary function"}><i>ordinary function</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> in Figure 3–12 are those which use <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda lists</i></GlossaryTerm>:  







| Operators |
| :-------- |
| **define-method-combination handler-case restart-case defun labels** |
| **flet lambda** |





**Figure 3–12. Standardized Operators that use Ordinary Lambda Lists** 



An <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–13. 



| Keywords |
| :------- |
| **&amp;allow-other-keys &amp;key &amp;rest** |
| **&amp;aux &amp;optional** |





**Figure 3–13. Lambda List Keywords used by Ordinary Lambda Lists** 



Each <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> is either a parameter specifier or a <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keyword</i></GlossaryTerm>. Implementations are free to provide additional <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm>. For a list of all <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> used by the implementation, see <DictionaryLink  term={"lambda-list-keywords"}><b>lambda-list-keywords</b></DictionaryLink>. 



The syntax for <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda lists</i></GlossaryTerm> is as follows: 



*lambda-list::*=(*\{var\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* 



[&amp;allow-other-keys]] 



[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*]) 



A *var* or *supplied-p-parameter* must be a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is not the name of a <GlossaryTerm styled={true} term={"constant variable"}><i>constant variable</i></GlossaryTerm>. 



An *init-form* can be any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. Whenever any *init-form* is evaluated for any parameter specifier, that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> may refer to any parameter variable to the left of the specifier in which the *init-form* appears, including any *supplied-p-parameter* variables, and may rely on the fact that no other parameter variable has yet been bound (including its own parameter variable). 



A *keyword-name* can be any <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, but by convention is normally a <GlossaryTerm  term={"keyword"}><i>keyword</i></GlossaryTerm> <sub>1</sub>; all *standardized functions* follow that convention. 



An <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> has five parts, any or all of which may be empty. For information about the treatment of argument mismatches, see Section 3.5 (Error Checking in Function Calls).  







