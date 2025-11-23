 



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> is used by <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> has the following syntax: 



"""text
lambda-list::=({var}*
  [&optional {var | (var [init-form [supplied-p-parameter]])}*]
  [&rest var]
  [&key {var | ({var | (keyword-name var)} [init-form [supplied-p-parameter]])}*
    [&allow-other-keys]]
  [&environment var])
"""



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> can contain the <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> shown in Figure 3–19. 



| Keywords |
| :------- |
| **&amp;allow-other-keys** |
| **&amp;key** |
| **&amp;rest** |
| **&amp;environment** |
| **&amp;optional** |

**Figure 3–19. Lambda List Keywords used by Defsetf Lambda Lists**



A <GlossaryTerm styled={true} term={"defsetf lambda list"}><i>defsetf lambda list</i></GlossaryTerm> differs from an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> only in that it does not permit the use of **&amp;aux**, and that it permits use of **&amp;environment**, which introduces an <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> . 



