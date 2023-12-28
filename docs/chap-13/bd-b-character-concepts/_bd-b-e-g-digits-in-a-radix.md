 



What qualifies as a <GlossaryTerm styled={true} term={"digit"}><i>digit</i></GlossaryTerm> depends on the <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> (an *integer* between 2 and 36, inclusive). The potential <GlossaryTerm styled={true} term={"digit"}><i>digits</i></GlossaryTerm> are: 



0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 



Their respective weights are 0, 1, 2, *. . .* 35. In any given radix *n*, only the first *n* potential <GlossaryTerm styled={true} term={"digit"}><i>digits</i></GlossaryTerm> are considered to be <GlossaryTerm styled={true} term={"digit"}><i>digits</i></GlossaryTerm>. For example, the digits in radix 2 are 0 and 1, the digits in radix 10 are 0 through 9, and the digits in radix 16 are 0 through F. 



<GlossaryTerm styled={true} term={"case"}><i>Case</i></GlossaryTerm> is not significant in <GlossaryTerm styled={true} term={"digit"}><i>digits</i></GlossaryTerm>; for example, in radix 16, both F and f are <GlossaryTerm styled={true} term={"digit"}><i>digits</i></GlossaryTerm> with weight 15.
 