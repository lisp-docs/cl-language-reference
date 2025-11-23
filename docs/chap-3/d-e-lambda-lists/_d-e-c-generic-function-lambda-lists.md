 



A <GlossaryTerm styled={true} term={"generic function lambda list"}><i>generic function lambda list</i></GlossaryTerm> is used to describe the overall shape of the argument list to be accepted by a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. Individual *method signatures* might contribute additional <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"effective method"}><i>effective method</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"generic function lambda list"}><i>generic function lambda list</i></GlossaryTerm> is used by <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"generic function lambda list"}><i>generic function lambda list</i></GlossaryTerm> has the following syntax: 



```text
lambda-list::=({var}*
  [&optional {var | (var)}*]
  [&rest var]
  [&key {var | ({var | (keyword-name var)}) }*
    [&allow-other-keys]])
```



A <GlossaryTerm styled={true} term={"generic function lambda list"}><i>generic function lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–14. 



| Keywords |
| :------- |
| **&amp;allow-other-keys** |
| **&amp;optional** |
| **&amp;key** |
| **&amp;rest** |

**Figure 3–14. Lambda List Keywords used by Generic Function Lambda Lists**











A <GlossaryTerm styled={true} term={"generic function lambda list"}><i>generic function lambda list</i></GlossaryTerm> differs from an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> in the following ways: 



**Required arguments** 



Zero or more <GlossaryTerm styled={true} term={"required parameter"}><i>required parameters</i></GlossaryTerm> must be specified. 



**Optional and keyword arguments** 



<GlossaryTerm styled={true} term={"optional parameter"}><i>Optional parameters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> may not have default initial value forms nor 



use supplied-p parameters. 



**Use of &amp;aux** 



The use of **&amp;aux** is not allowed. 



