**style-warning** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>, <DictionaryLink styled={true} term={"warning"}><b>warning</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink> includes those <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> that represent <GlossaryTerm styled={true} term={"situation"}><i>situations</i></GlossaryTerm> involving <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that is *conforming code* but that is nevertheless considered to be faulty or substandard. 



**See Also:** 



**muffle-warning** 



**Notes:** 



An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> might signal such a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> if it encounters <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> that uses deprecated features or that appears unaesthetic or inefficient. 



An ‘unused variable’ warning must be of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"style-warning"}><b>style-warning</b></DictionaryLink>. 



In general, the question of whether <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> is faulty or substandard is a subjective decision to be made by the facility processing that <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm>. The intent is that whenever such a facility wishes to complain about <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> on such subjective grounds, it should use this *condition type* so that any 



clients who wish to redirect or muffle superfluous warnings can do so without risking that they will be redirecting or muffling other, more serious warnings. 



