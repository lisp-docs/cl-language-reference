**style-warning** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks>, <ClLinks styled={true} term={"warning"}><b>warning</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks> includes those <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> that represent <ClLinks styled={true} term={"situation"}><i>situations</i></ClLinks> involving <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that is *conforming code* but that is nevertheless considered to be faulty or substandard. 



**See Also:** 



**muffle-warning** 



**Notes:** 



An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> might signal such a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> if it encounters <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> that uses deprecated features or that appears unaesthetic or inefficient. 



An ‘unused variable’ warning must be of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"style-warning"}><b>style-warning</b></ClLinks>. 



In general, the question of whether <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> is faulty or substandard is a subjective decision to be made by the facility processing that <ClLinks styled={true} term={"code"}><i>code</i></ClLinks>. The intent is that whenever such a facility wishes to complain about <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> on such subjective grounds, it should use this *condition type* so that any 



clients who wish to redirect or muffle superfluous warnings can do so without risking that they will be redirecting or muffling other, more serious warnings. 



