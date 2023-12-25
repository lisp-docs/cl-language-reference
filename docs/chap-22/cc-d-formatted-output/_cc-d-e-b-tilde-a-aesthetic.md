 



An *arg*, any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, is printed without escape characters (as by <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>). If *arg* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, its <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> will be output verbatim. If *arg* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> it will be printed as <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>; the <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> modifier (&#126;:A) will cause an *arg* of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> to be printed as (), but if *arg* is a composite structure, such as a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"vector"}><i>vector</i></GlossaryTerm> , any contained occurrences of <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> will still be printed as <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



&#126;*mincol*A inserts spaces on the right, if necessary, to make the width at least *mincol* columns. The @ modifier causes the spaces to be inserted on the left rather than the right. 



&#126;*mincol*,*colinc*,*minpad*,*padchar*A is the full form of &#126;A, which allows control of the padding. The <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is padded on the right (or on the left if the @ modifier is used) with at least *minpad* copies of *padchar* ; padding characters are then inserted *colinc* characters at a time until the total width is at least *mincol*. The defaults are 0 for *mincol* and *minpad*, 1 for *colinc*, and the space character 



for *padchar* . 



&#126;A binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



