"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[90245],{78049:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>g});var i=n(85893),s=n(11151);function t(r){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...r.components},{ClLinks:n,GlossaryTerm:t}=e;return n||l("ClLinks",!0),t||l("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-trim, string-left-trim, string-right-trim"})," ",(0,i.jsx)(e.em,{children:"Func tion"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string-trim",children:(0,i.jsx)("b",{children:"string-trim"})})," ",(0,i.jsx)(e.em,{children:"character-bag string \u2192 trimmed-string"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string-left-trim",children:(0,i.jsx)("b",{children:"string-left-trim"})})," ",(0,i.jsx)(e.em,{children:"character-bag string \u2192 trimmed-string"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string-right-trim",children:(0,i.jsx)("b",{children:"string-right-trim"})})," ",(0,i.jsx)(e.em,{children:"character-bag string \u2192 trimmed-string"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"character-bag"}),"\u2014a ",(0,i.jsx)(e.em,{children:"sequence"})," containing ",(0,i.jsx)(n,{term:"character",children:(0,i.jsx)("i",{children:"characters"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"string designator",children:(0,i.jsx)("i",{children:"string designator"})})," ."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"trimmed-string"}),"\u2014a ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string-trim",children:(0,i.jsx)("b",{children:"string-trim"})})," returns a substring of ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),", with all characters in ",(0,i.jsx)(e.em,{children:"character-bag"})," stripped off the beginning and end. ",(0,i.jsx)(n,{term:"string-left-trim",children:(0,i.jsx)("b",{children:"string-left-trim"})})," is similar but strips characters off only the beginning; ",(0,i.jsx)(n,{term:"string-right-trim",children:(0,i.jsx)("b",{children:"string-right-trim"})})," strips off only the end."]}),"\n",(0,i.jsxs)(e.p,{children:["If no ",(0,i.jsx)(n,{term:"character",children:(0,i.jsx)("i",{children:"characters"})})," need to be trimmed from the ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})}),", then either ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"string"})})," itself or a copy of it may be returned, at the discretion of the implementation."]}),"\n",(0,i.jsxs)(e.p,{children:["All of these ",(0,i.jsx)(n,{term:"function",children:(0,i.jsx)("i",{children:"functions"})})," observe the ",(0,i.jsx)(t,{styled:!0,term:"fill pointer",children:(0,i.jsx)("i",{children:"fill pointer"})})," ."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:' \n(string-trim "abc" "abcaakaaakabcaaa") \u2192 "kaaak" \n(string-trim \u2019(#\\Space #\\Tab #\\Newline) " garbanzo beans \n") \u2192 "garbanzo beans" \n(string-trim " (\\*)" " ( \\*three (silly) words\\* ) ") \n\u2192 "three (silly) words" \n(string-left-trim "abc" "labcabcabc") \u2192 "labcabcabc" \n(string-left-trim " (\\*)" " ( \\*three (silly) words\\* ) ") \n\u2192 "three (silly) words\\* ) " \n(string-right-trim " (\\*)" " ( \\*three (silly) words\\* ) ") \n\u2192 " ( \\*three (silly) words" \n \n \n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(n,{term:"implementation",children:(0,i.jsx)("i",{children:"implementation"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)("b",{children:"string=, string/=, string"}),(0,i.jsx)("i",{children:"<"}),(0,i.jsx)("b",{children:", string"}),(0,i.jsx)("i",{children:">"}),(0,i.jsx)("b",{children:", string"}),(0,i.jsx)("i",{children:"<"}),(0,i.jsxs)("b",{children:["=, ",(0,i.jsx)("sup",{children:"string"})]}),">",(0,i.jsx)("b",{children:"=, string-equal, string-not-equal, string lessp, string-greaterp, string-not-greaterp, string not-lessp"})," ",(0,i.jsx)("i",{children:"Function"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"= ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 generalized-boolean"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string/"})}),"= ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"< ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"> ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"<= ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),">= ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-equal"})," ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 generalized-boolean"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-not-equal"})," ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,i.jsx)(e.strong,{children:"string-lessp"})," ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,i.jsx)(e.strong,{children:"string-greaterp"})," ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,i.jsx)(e.strong,{children:"string-not-greaterp"})," ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,i.jsx)(e.strong,{children:"string-not-lessp"})," ",(0,i.jsx)(e.em,{children:"string1 string2"})," &key ",(0,i.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"string1"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"string designator",children:(0,i.jsx)("i",{children:"string designator"})})," ."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"string2"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"string designator",children:(0,i.jsx)("i",{children:"string designator"})})," ."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"start1"}),", ",(0,i.jsx)(e.em,{children:"end1"}),"\u2014",(0,i.jsx)(t,{styled:!0,term:"bounding index designator",children:(0,i.jsx)("i",{children:"bounding index designators"})})," of ",(0,i.jsx)(e.em,{children:"string1"}),". The defaults for ",(0,i.jsx)(e.em,{children:"start"})," and ",(0,i.jsx)(e.em,{children:"end"})," are 0 and ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"start2"}),", ",(0,i.jsx)(e.em,{children:"end2"}),"\u2014",(0,i.jsx)(t,{styled:!0,term:"bounding index designator",children:(0,i.jsx)("i",{children:"bounding index designators"})})," of ",(0,i.jsx)(e.em,{children:"string2"}),". The defaults for ",(0,i.jsx)(e.em,{children:"start"})," and ",(0,i.jsx)(e.em,{children:"end"})," are 0 and ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"generalized-boolean"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.em,{children:"mismatch-index"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"bounding index",children:(0,i.jsx)("i",{children:"bounding index"})})," of ",(0,i.jsx)(e.em,{children:"string1"}),", or ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(e.p,{children:["These functions perform lexicographic comparisons on ",(0,i.jsx)(e.em,{children:"string1"})," and ",(0,i.jsx)(e.em,{children:"string2"}),". ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string="})})," and ",(0,i.jsx)(e.strong,{children:"string-equal"})," are called equality functions; the others are called inequality functions. The"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string=, string/=, string"}),"*<",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:", string"})}),">",(0,i.jsx)(e.em,{children:(0,i.jsx)(e.strong,{children:", string"})}),"<*",(0,i.jsx)(e.strong,{children:"=,"})," ",(0,i.jsx)(e.em,{children:". . ."})]}),"\n",(0,i.jsxs)(e.p,{children:["comparison operations these ",(0,i.jsx)(n,{term:"function",children:(0,i.jsx)("i",{children:"functions"})})," perform are restricted to the subsequence of ",(0,i.jsx)(e.em,{children:"string1 bounded"})," by ",(0,i.jsx)(e.em,{children:"start1"})," and ",(0,i.jsx)(e.em,{children:"end1"})," and to the subsequence of ",(0,i.jsx)(e.em,{children:"string2 bounded"})," by ",(0,i.jsx)(e.em,{children:"start2"})," and ",(0,i.jsx)(e.em,{children:"end2"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["A string ",(0,i.jsx)(e.em,{children:"a"})," is equal to a string ",(0,i.jsx)(e.em,{children:"b"})," if it contains the same number of characters, and the corresponding characters are the ",(0,i.jsx)(n,{term:"same",children:(0,i.jsx)("i",{children:"same"})})," under ",(0,i.jsx)(n,{term:"char=",children:(0,i.jsx)("b",{children:"char="})})," or ",(0,i.jsx)(n,{term:"char-equal",children:(0,i.jsx)("b",{children:"char-equal"})}),", as appropriate."]}),"\n",(0,i.jsxs)(e.p,{children:["A string ",(0,i.jsx)(e.em,{children:"a"})," is less than a string ",(0,i.jsx)(e.em,{children:"b"})," if in the first position in which they differ the character of ",(0,i.jsx)(e.em,{children:"a"})," is less than the corresponding character of ",(0,i.jsx)(e.em,{children:"b"})," according to ",(0,i.jsx)(n,{term:"char",children:(0,i.jsx)("b",{children:"char"})}),"< or ",(0,i.jsx)(n,{term:"char-lessp",children:(0,i.jsx)("b",{children:"char-lessp"})})," as appropriate, or if string ",(0,i.jsx)(e.em,{children:"a"})," is a proper prefix of string ",(0,i.jsx)(e.em,{children:"b"})," (of shorter length and matching in all the characters of ",(0,i.jsx)(e.em,{children:"a"}),")."]}),"\n",(0,i.jsxs)(e.p,{children:["The equality functions return a ",(0,i.jsx)(t,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})})," that is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if the strings are equal, or ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})})," otherwise."]}),"\n",(0,i.jsxs)(e.p,{children:["The inequality functions return a ",(0,i.jsx)(e.em,{children:"mismatch-index"})," that is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if the strings are not equal, or ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})})," otherwise. When the ",(0,i.jsx)(e.em,{children:"mismatch-index"})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", it is an ",(0,i.jsx)(e.em,{children:"integer"})," representing the first character position at which the two substrings differ, as an offset from the beginning of ",(0,i.jsx)(e.em,{children:"string1"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"The comparison has one of the following results:"}),"\n",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string="})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string="})})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if the supplied substrings are of the same length and contain the ",(0,i.jsx)(n,{term:"same",children:(0,i.jsx)("i",{children:"same"})})," characters in corresponding positions; otherwise it is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string/="})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string/="})})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if the supplied substrings are different; otherwise it is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"string-equal"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-equal"})," is just like ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string="})})," except that differences in case are ignored; two characters are considered to be the same if ",(0,i.jsx)(n,{term:"char-equal",children:(0,i.jsx)("b",{children:"char-equal"})})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," of them."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"<"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"< is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if substring1 is less than substring2; otherwise it is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),">"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"> is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if substring1 is greater than substring2; otherwise it is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-lessp"}),", ",(0,i.jsx)(e.strong,{children:"string-greaterp"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-lessp"})," and ",(0,i.jsx)(e.strong,{children:"string-greaterp"})," are exactly like ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"< and ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),">, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if ",(0,i.jsx)(n,{term:"char-lessp",children:(0,i.jsx)("b",{children:"char-lessp"})})," were used instead of ",(0,i.jsx)(n,{term:"char",children:(0,i.jsx)("b",{children:"char"})}),"< for comparing characters."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"<",(0,i.jsx)(n,{term:"=",children:(0,i.jsx)("b",{children:"="})})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"<",(0,i.jsx)(n,{term:"=",children:(0,i.jsx)("b",{children:"="})})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if substring1 is less than or equal to substring2; otherwise it is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),">",(0,i.jsx)(n,{term:"=",children:(0,i.jsx)("b",{children:"="})})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),">",(0,i.jsx)(n,{term:"=",children:(0,i.jsx)("b",{children:"="})})," is ",(0,i.jsx)(n,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," if substring1 is greater than or equal to substring2; otherwise it is ",(0,i.jsx)(n,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),". ",(0,i.jsx)(e.strong,{children:"string-not-greaterp"}),", ",(0,i.jsx)(e.strong,{children:"string-not-lessp"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"string-not-greaterp"})," and ",(0,i.jsx)(e.strong,{children:"string-not-lessp"})," are exactly like ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),"<",(0,i.jsx)(n,{term:"=",children:(0,i.jsx)("b",{children:"="})})," and ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string"})}),">",(0,i.jsx)(n,{term:"=",children:(0,i.jsx)("b",{children:"="})}),", respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if ",(0,i.jsx)(n,{term:"char-lessp",children:(0,i.jsx)("b",{children:"char-lessp"})})," were used instead of ",(0,i.jsx)(n,{term:"char",children:(0,i.jsx)("b",{children:"char"})}),"< for comparing characters."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:'(string= "foo" "foo") \u2192 true \n(string= "foo" "Foo") \u2192 false \n(string= "foo" "bar") \u2192 false \n(string= "together" "frog" :start1 1 :end1 3 :start2 2) \u2192 true \n(string-equal "foo" "Foo") \u2192 true \n(string= "abcd" "01234abcd9012" :start2 5 :end2 9) \u2192 true \n(string< "aaaa" "aaab") \u2192 3 \n(string>= "aaaaa" "aaaa") \u2192 4 \n(string-not-greaterp "Abcde" "abcdE") \u2192 5 \n(string-lessp "012AAAA789" "01aaab6" :start1 3 :end1 7 \n\t      :start2 2 :end2 6) \u2192 6 \n(string-not-equal "AAAA" "aaaA") \u2192 false \n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n,{term:"char=",children:(0,i.jsx)("b",{children:"char="})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(n,{term:"equal",children:(0,i.jsx)("b",{children:"equal"})})," calls ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("b",{children:"string="})})," if applied to two ",(0,i.jsx)(n,{term:"string",children:(0,i.jsx)("i",{children:"strings"})}),"."]})]})}function c(r={}){const{wrapper:e}={...(0,s.a)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(t,{...r})}):t(r)}function l(r,e){throw new Error("Expected "+(e?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"string-trim, string-left-trim, string-right-trim"},h="string-trim, string-left-trim, string-right-trim",a={id:"chap-16/bg-c-dictionary/string-trim_string-left-trim_string-right-trim_func-tion",title:"string-trim, string-left-trim, string-right-trim",description:"Expanded Reference: string-trim, string-left-trim, string-right-trim",source:"@site/docs/chap-16/bg-c-dictionary/string-trim_string-left-trim_string-right-trim_func-tion.md",sourceDirName:"chap-16/bg-c-dictionary",slug:"/chap-16/bg-c-dictionary/string-trim_string-left-trim_string-right-trim_func-tion",permalink:"/cl-language-reference/chap-16/bg-c-dictionary/string-trim_string-left-trim_string-right-trim_func-tion",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-16/bg-c-dictionary/string-trim_string-left-trim_string-right-trim_func-tion.md",tags:[],version:"current",frontMatter:{title:"string-trim, string-left-trim, string-right-trim"},sidebar:"tutorialSidebar",previous:{title:"simple-string",permalink:"/cl-language-reference/chap-16/bg-c-dictionary/simple-string_type"},next:{title:"string",permalink:"/cl-language-reference/chap-16/bg-c-dictionary/string_function"}},x={},g=[{value:"Expanded Reference: string-trim, string-left-trim, string-right-trim",id:"expanded-reference-string-trim-string-left-trim-string-right-trim",level:2}];function j(r){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"string-trim-string-left-trim-string-right-trim",children:"string-trim, string-left-trim, string-right-trim"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(e.h2,{id:"expanded-reference-string-trim-string-left-trim-string-right-trim",children:"Expanded Reference: string-trim, string-left-trim, string-right-trim"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lisp",children:"(string-trim, string-left-trim, string-right-trim )\n"})})]})}function m(r={}){const{wrapper:e}={...(0,s.a)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(j,{...r})}):j(r)}},11151:(r,e,n)=>{n.d(e,{Z:()=>l,a:()=>c});var i=n(67294);const s={},t=i.createContext(s);function c(r){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function l(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:c(r.components),i.createElement(t.Provider,{value:e},r.children)}}}]);