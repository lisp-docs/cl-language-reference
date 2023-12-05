 



An *ordinary lambda list* is used to describe how a set of *arguments* is received by an *ordinary function*. The *defined names* in Figure 3–12 are those which use *ordinary lambda lists*:  







|<p>**define-method-combination handler-case restart-case defun labels** </p><p>**flet lambda**</p>|

| :- |





**Figure 3–12. Standardized Operators that use Ordinary Lambda Lists** 



An *ordinary lambda list* can contain the *lambda list keywords* shown in Figure 3–13. 



|<p>**&amp;allow-other-keys &amp;key &amp;rest** </p><p>**&amp;aux &amp;optional**</p>|

| :- |





**Figure 3–13. Lambda List Keywords used by Ordinary Lambda Lists** 



Each *element* of a *lambda list* is either a parameter specifier or a *lambda list keyword*. Implementations are free to provide additional *lambda list keywords*. For a list of all *lambda list keywords* used by the implementation, see **lambda-list-keywords**. 



The syntax for *ordinary lambda lists* is as follows: 



*lambda-list::*=(*\{var\}*\* 



[&amp;optional *\{var |* (*var* [*init-form* [*supplied-p-parameter*]])*\}*\*] 



[&amp;rest *var*] 



[&amp;key *\{var |* (*\{var |* (*keyword-name var*)*\}* [*init-form* [*supplied-p-parameter*]])*\}*\* 



[&amp;allow-other-keys]] 



[&amp;aux *\{var |* (*var* [*init-form*])*\}*\*]) 



A *var* or *supplied-p-parameter* must be a *symbol* that is not the name of a *constant variable*. 



An *init-form* can be any *form*. Whenever any *init-form* is evaluated for any parameter specifier, that *form* may refer to any parameter variable to the left of the specifier in which the *init-form* appears, including any *supplied-p-parameter* variables, and may rely on the fact that no other parameter variable has yet been bound (including its own parameter variable). 



A *keyword-name* can be any *symbol*, but by convention is normally a *keyword* <sub>1</sub>; all *standardized functions* follow that convention. 



An *ordinary lambda list* has five parts, any or all of which may be empty. For information about the treatment of argument mismatches, see Section 3.5 (Error Checking in Function Calls).  







