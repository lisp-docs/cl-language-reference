 



What qualifies as a <ClLinks styled={true} term={"digit"}><i>digit</i></ClLinks> depends on the <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> (an *integer* between 2 and 36, inclusive). The potential <ClLinks styled={true} term={"digit"}><i>digits</i></ClLinks> are: 



0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 



Their respective weights are 0, 1, 2, *. . .* 35. In any given radix *n*, only the first *n* potential <ClLinks styled={true} term={"digit"}><i>digits</i></ClLinks> are considered to be <ClLinks styled={true} term={"digit"}><i>digits</i></ClLinks>. For example, the digits in radix 2 are 0 and 1, the digits in radix 10 are 0 through 9, and the digits in radix 16 are 0 through F. 



<ClLinks styled={true} term={"case"}><i>Case</i></ClLinks> is not significant in <ClLinks styled={true} term={"digit"}><i>digits</i></ClLinks>; for example, in radix 16, both F and f are <ClLinks styled={true} term={"digit"}><i>digits</i></ClLinks> with weight 15.
 