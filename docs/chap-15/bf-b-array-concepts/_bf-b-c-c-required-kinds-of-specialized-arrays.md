 



<ClLinks  term={"vector"}><i>Vectors</i></ClLinks> whose <ClLinks  term={"element"}><i>elements</i></ClLinks> are restricted to <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"character"}><b>character</b></DictionaryLink> or a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of <DictionaryLink  term={"character"}><b>character</b></DictionaryLink> are called <ClLinks  term={"string"}><i>strings</i></ClLinks>. <ClLinks  term={"string"}><i>Strings</i></ClLinks> are of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"string"}><b>string</b></DictionaryLink>. Figure 15–2 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> related to <ClLinks  term={"string"}><i>strings</i></ClLinks>. 



<ClLinks  term={"string"}><i>Strings</i></ClLinks> are *specialized arrays* and might logically have been included in this chapter. However, for purposes of readability most information about <ClLinks  term={"string"}><i>strings</i></ClLinks> does not appear in this chapter; see instead Chapter 16 (Strings). 



|<p>**char string-equal string-upcase make-string string-greaterp string**/= </p><p>**nstring-capitalize string-left-trim string**&lt; </p><p>**nstring-downcase string-lessp string**&lt;= </p><p>**nstring-upcase string-not-equal string**= </p><p>**schar string-not-greaterp string**&gt; </p><p>**string string-not-lessp string**&gt;= </p><p>**string-capitalize string-right-trim** </p><p>**string-downcase string-trim**</p>|

| :- |





**Figure 15–2. Operators that Manipulate Strings** 



<ClLinks  term={"vector"}><i>Vectors</i></ClLinks> whose <ClLinks  term={"element"}><i>elements</i></ClLinks> are restricted to <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"bit"}><b>bit</b></DictionaryLink> are called <GlossaryTerm styled={true} term={"bit vector"}><i>bit vectors</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"bit vector"}><i>Bit vectors</i></GlossaryTerm> are of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"bit-vector"}><b>bit-vector</b></DictionaryLink>. Figure 15–3 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> for operations on <GlossaryTerm styled={true} term={"bit array"}><i>bit arrays</i></GlossaryTerm>. 







 



 



|<p>**bit bit-ior bit-orc2** </p><p>**bit-and bit-nand bit-xor** </p><p>**bit-andc1 bit-nor sbit** </p><p>**bit-andc2 bit-not** </p><p>**bit-eqv bit-orc1**</p>|

| :- |





**Figure 15–3. Operators that Manipulate Bit Arrays** 







 



 



