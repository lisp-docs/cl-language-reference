"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[21755],{38493:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var s=r(85893),i=r(11151);function t(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-trim, string-left-trim, string-right-trim"})," ",(0,s.jsx)(e.em,{children:"Func tion"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-trim"})," ",(0,s.jsx)(e.em,{children:"character-bag string \u2192 trimmed-string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-left-trim"})," ",(0,s.jsx)(e.em,{children:"character-bag string \u2192 trimmed-string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-right-trim"})," ",(0,s.jsx)(e.em,{children:"character-bag string \u2192 trimmed-string"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"character-bag"}),"\u2014a ",(0,s.jsx)(e.em,{children:"sequence"})," containing ",(0,s.jsx)(e.em,{children:"characters"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"string"}),"\u2014a ",(0,s.jsx)(e.em,{children:"string designator"})," ."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"trimmed-string"}),"\u2014a ",(0,s.jsx)(e.em,{children:"string"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-trim"})," returns a substring of ",(0,s.jsx)(e.em,{children:"string"}),", with all characters in ",(0,s.jsx)(e.em,{children:"character-bag"})," stripped off the beginning and end. ",(0,s.jsx)(e.strong,{children:"string-left-trim"})," is similar but strips characters off only the beginning; ",(0,s.jsx)(e.strong,{children:"string-right-trim"})," strips off only the end."]}),"\n",(0,s.jsxs)(e.p,{children:["If no ",(0,s.jsx)(e.em,{children:"characters"})," need to be trimmed from the ",(0,s.jsx)(e.em,{children:"string"}),", then either ",(0,s.jsx)(e.em,{children:"string"})," itself or a copy of it may be returned, at the discretion of the implementation."]}),"\n",(0,s.jsxs)(e.p,{children:["All of these ",(0,s.jsx)(e.em,{children:"functions"})," observe the ",(0,s.jsx)(e.em,{children:"fill pointer"})," ."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:' \n\n(string-trim "abc" "abcaakaaakabcaaa") \u2192 "kaaak" \n\n(string-trim \u2019(#\\Space #\\Tab #\\Newline) " garbanzo beans \n\n") \u2192 "garbanzo beans" \n\n(string-trim " (\\*)" " ( \\*three (silly) words\\* ) ") \n\n\u2192 "three (silly) words" \n\n(string-left-trim "abc" "labcabcabc") \u2192 "labcabcabc" \n\n(string-left-trim " (\\*)" " ( \\*three (silly) words\\* ) ") \n\n\u2192 "three (silly) words\\* ) " \n\n(string-right-trim " (\\*)" " ( \\*three (silly) words\\* ) ") \n\n\u2192 " ( \\*three (silly) words" \n\n\n\n \n\n \n\n\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.em,{children:"implementation"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string=, string/=, string"}),(0,s.jsx)("i",{children:"<"}),(0,s.jsx)(e.strong,{children:", string"}),(0,s.jsx)("i",{children:">"}),(0,s.jsx)(e.strong,{children:", string"}),(0,s.jsx)("i",{children:"<"}),(0,s.jsxs)(e.strong,{children:["=, ",(0,s.jsx)("sup",{children:"string"})]}),">",(0,s.jsx)(e.strong,{children:"=, string-equal, string-not-equal, string lessp, string-greaterp, string-not-greaterp, string not-lessp"})," ",(0,s.jsx)("i",{children:"Function"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"= ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 generalized-boolean"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string/"}),"= ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"< ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"> ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"<= ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),">= ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-equal"})," ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 generalized-boolean"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-not-equal"})," ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,s.jsx)(e.strong,{children:"string-lessp"})," ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,s.jsx)(e.strong,{children:"string-greaterp"})," ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,s.jsx)(e.strong,{children:"string-not-greaterp"})," ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})," ",(0,s.jsx)(e.strong,{children:"string-not-lessp"})," ",(0,s.jsx)(e.em,{children:"string1 string2"})," &key ",(0,s.jsx)(e.em,{children:"start1 end1 start2 end2 \u2192 mismatch-index"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"string1"}),"\u2014a ",(0,s.jsx)(e.em,{children:"string designator"})," ."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"string2"}),"\u2014a ",(0,s.jsx)(e.em,{children:"string designator"})," ."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"start1"}),", ",(0,s.jsx)(e.em,{children:"end1"}),"\u2014",(0,s.jsx)(e.em,{children:"bounding index designators"})," of ",(0,s.jsx)(e.em,{children:"string1"}),". The defaults for ",(0,s.jsx)(e.em,{children:"start"})," and ",(0,s.jsx)(e.em,{children:"end"})," are 0 and ",(0,s.jsx)(e.strong,{children:"nil"}),", respectively."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"start2"}),", ",(0,s.jsx)(e.em,{children:"end2"}),"\u2014",(0,s.jsx)(e.em,{children:"bounding index designators"})," of ",(0,s.jsx)(e.em,{children:"string2"}),". The defaults for ",(0,s.jsx)(e.em,{children:"start"})," and ",(0,s.jsx)(e.em,{children:"end"})," are 0 and ",(0,s.jsx)(e.strong,{children:"nil"}),", respectively."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(e.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"mismatch-index"}),"\u2014a ",(0,s.jsx)(e.em,{children:"bounding index"})," of ",(0,s.jsx)(e.em,{children:"string1"}),", or ",(0,s.jsx)(e.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:["These functions perform lexicographic comparisons on ",(0,s.jsx)(e.em,{children:"string1"})," and ",(0,s.jsx)(e.em,{children:"string2"}),". ",(0,s.jsx)(e.strong,{children:"string="})," and ",(0,s.jsx)(e.strong,{children:"string-equal"})," are called equality functions; the others are called inequality functions. The"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string=, string/=, string"}),"*<",(0,s.jsx)(e.em,{children:(0,s.jsx)(e.strong,{children:", string"})}),">",(0,s.jsx)(e.em,{children:(0,s.jsx)(e.strong,{children:", string"})}),"<*",(0,s.jsx)(e.strong,{children:"=,"})," ",(0,s.jsx)(e.em,{children:". . ."})]}),"\n",(0,s.jsxs)(e.p,{children:["comparison operations these ",(0,s.jsx)(e.em,{children:"functions"})," perform are restricted to the subsequence of ",(0,s.jsx)(e.em,{children:"string1 bounded"})," by ",(0,s.jsx)(e.em,{children:"start1"})," and ",(0,s.jsx)(e.em,{children:"end1"})," and to the subsequence of ",(0,s.jsx)(e.em,{children:"string2 bounded"})," by ",(0,s.jsx)(e.em,{children:"start2"})," and ",(0,s.jsx)(e.em,{children:"end2"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["A string ",(0,s.jsx)(e.em,{children:"a"})," is equal to a string ",(0,s.jsx)(e.em,{children:"b"})," if it contains the same number of characters, and the corresponding characters are the ",(0,s.jsx)(e.em,{children:"same"})," under ",(0,s.jsx)(e.strong,{children:"char="})," or ",(0,s.jsx)(e.strong,{children:"char-equal"}),", as appropriate."]}),"\n",(0,s.jsxs)(e.p,{children:["A string ",(0,s.jsx)(e.em,{children:"a"})," is less than a string ",(0,s.jsx)(e.em,{children:"b"})," if in the first position in which they differ the character of ",(0,s.jsx)(e.em,{children:"a"})," is less than the corresponding character of ",(0,s.jsx)(e.em,{children:"b"})," according to ",(0,s.jsx)(e.strong,{children:"char"}),"< or ",(0,s.jsx)(e.strong,{children:"char-lessp"})," as appropriate, or if string ",(0,s.jsx)(e.em,{children:"a"})," is a proper prefix of string ",(0,s.jsx)(e.em,{children:"b"})," (of shorter length and matching in all the characters of ",(0,s.jsx)(e.em,{children:"a"}),")."]}),"\n",(0,s.jsxs)(e.p,{children:["The equality functions return a ",(0,s.jsx)(e.em,{children:"generalized boolean"})," that is ",(0,s.jsx)(e.em,{children:"true"})," if the strings are equal, or ",(0,s.jsx)(e.em,{children:"false"})," otherwise."]}),"\n",(0,s.jsxs)(e.p,{children:["The inequality functions return a ",(0,s.jsx)(e.em,{children:"mismatch-index"})," that is ",(0,s.jsx)(e.em,{children:"true"})," if the strings are not equal, or ",(0,s.jsx)(e.em,{children:"false"})," otherwise. When the ",(0,s.jsx)(e.em,{children:"mismatch-index"})," is ",(0,s.jsx)(e.em,{children:"true"}),", it is an ",(0,s.jsx)(e.em,{children:"integer"})," representing the first character position at which the two substrings differ, as an offset from the beginning of ",(0,s.jsx)(e.em,{children:"string1"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"The comparison has one of the following results:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"string="})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string="})," is ",(0,s.jsx)(e.em,{children:"true"})," if the supplied substrings are of the same length and contain the ",(0,s.jsx)(e.em,{children:"same"})," characters in corresponding positions; otherwise it is ",(0,s.jsx)(e.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"string/="})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string/="})," is ",(0,s.jsx)(e.em,{children:"true"})," if the supplied substrings are different; otherwise it is ",(0,s.jsx)(e.em,{children:"false"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"string-equal"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-equal"})," is just like ",(0,s.jsx)(e.strong,{children:"string="})," except that differences in case are ignored; two characters are considered to be the same if ",(0,s.jsx)(e.strong,{children:"char-equal"})," is ",(0,s.jsx)(e.em,{children:"true"})," of them."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"<"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"< is ",(0,s.jsx)(e.em,{children:"true"})," if substring1 is less than substring2; otherwise it is ",(0,s.jsx)(e.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),">"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"> is ",(0,s.jsx)(e.em,{children:"true"})," if substring1 is greater than substring2; otherwise it is ",(0,s.jsx)(e.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-lessp"}),", ",(0,s.jsx)(e.strong,{children:"string-greaterp"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-lessp"})," and ",(0,s.jsx)(e.strong,{children:"string-greaterp"})," are exactly like ",(0,s.jsx)(e.strong,{children:"string"}),"< and ",(0,s.jsx)(e.strong,{children:"string"}),">, respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if ",(0,s.jsx)(e.strong,{children:"char-lessp"})," were used instead of ",(0,s.jsx)(e.strong,{children:"char"}),"< for comparing characters."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"<",(0,s.jsx)(e.strong,{children:"="})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),"<",(0,s.jsx)(e.strong,{children:"="})," is ",(0,s.jsx)(e.em,{children:"true"})," if substring1 is less than or equal to substring2; otherwise it is ",(0,s.jsx)(e.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),">",(0,s.jsx)(e.strong,{children:"="})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"}),">",(0,s.jsx)(e.strong,{children:"="})," is ",(0,s.jsx)(e.em,{children:"true"})," if substring1 is greater than or equal to substring2; otherwise it is ",(0,s.jsx)(e.em,{children:"false"}),". ",(0,s.jsx)(e.strong,{children:"string-not-greaterp"}),", ",(0,s.jsx)(e.strong,{children:"string-not-lessp"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-not-greaterp"})," and ",(0,s.jsx)(e.strong,{children:"string-not-lessp"})," are exactly like ",(0,s.jsx)(e.strong,{children:"string"}),"<",(0,s.jsx)(e.strong,{children:"="})," and ",(0,s.jsx)(e.strong,{children:"string"}),">",(0,s.jsx)(e.strong,{children:"="}),", respectively, except that distinctions between uppercase and lowercase letters are ignored. It is as if ",(0,s.jsx)(e.strong,{children:"char-lessp"})," were used instead of ",(0,s.jsx)(e.strong,{children:"char"}),"< for comparing characters."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:' \n\n(string= "foo" "foo") \u2192 true \n\n(string= "foo" "Foo") \u2192 false \n\n(string= "foo" "bar") \u2192 false \n\n(string= "together" "frog" :start1 1 :end1 3 :start2 2) \u2192 true \n\n(string-equal "foo" "Foo") \u2192 true \n\n(string= "abcd" "01234abcd9012" :start2 5 :end2 9) \u2192 true \n\n(string< "aaaa" "aaab") \u2192 3 \n\n(string>= "aaaaa" "aaaa") \u2192 4 \n\n(string-not-greaterp "Abcde" "abcdE") \u2192 5 \n\n(string-lessp "012AAAA789" "01aaab6" :start1 3 :end1 7 \n\n:start2 2 :end2 6) \u2192 6 \n\n(string-not-equal "AAAA" "aaaA") \u2192 false \n\n\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"char="})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"equal"})," calls ",(0,s.jsx)(e.strong,{children:"string="})," if applied to two ",(0,s.jsx)(e.em,{children:"strings"}),"."]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}const d={},l="string-trim, string-left-trim, string-right-trim",h={id:"chap-16/bg-c-dictionary/stringtrim",title:"string-trim, string-left-trim, string-right-trim",description:"Expanded Reference: string-trim, string-left-trim, string-right-trim",source:"@site/docs/chap-16/bg-c-dictionary/stringtrim.md",sourceDirName:"chap-16/bg-c-dictionary",slug:"/chap-16/bg-c-dictionary/stringtrim",permalink:"/cl-language-reference/docs/chap-16/bg-c-dictionary/stringtrim",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-16/bg-c-dictionary/stringtrim.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stringp",permalink:"/cl-language-reference/docs/chap-16/bg-c-dictionary/stringp"},next:{title:"17. Sequences",permalink:"/cl-language-reference/docs/category/17-sequences"}},a={},g=[{value:"Expanded Reference: string-trim, string-left-trim, string-right-trim",id:"expanded-reference-string-trim-string-left-trim-string-right-trim",level:2}];function o(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"string-trim-string-left-trim-string-right-trim",children:"string-trim, string-left-trim, string-right-trim"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(e.h2,{id:"expanded-reference-string-trim-string-left-trim-string-right-trim",children:"Expanded Reference: string-trim, string-left-trim, string-right-trim"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:"(string-trim, string-left-trim, string-right-trim )\n"})})]})}function x(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>c});var s=r(67294);const i={},t=s.createContext(i);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);