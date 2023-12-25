 



An *arg*, any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, is printed without escape characters (as by <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>). If *arg* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, its <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> will be output verbatim. If *arg* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> it will be printed as <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>; the <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> modifier (&#126;:A) will cause an *arg* of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> to be printed as (), but if *arg* is a composite structure, such as a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> or <ClLinks styled={true} term={"vector"}><i>vector</i></ClLinks> , any contained occurrences of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> will still be printed as <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



&#126;*mincol*A inserts spaces on the right, if necessary, to make the width at least *mincol* columns. The @ modifier causes the spaces to be inserted on the left rather than the right. 



&#126;*mincol*,*colinc*,*minpad*,*padchar*A is the full form of &#126;A, which allows control of the padding. The <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> is padded on the right (or on the left if the @ modifier is used) with at least *minpad* copies of *padchar* ; padding characters are then inserted *colinc* characters at a time until the total width is at least *mincol*. The defaults are 0 for *mincol* and *minpad*, 1 for *colinc*, and the space character 



for *padchar* . 



&#126;A binds <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



