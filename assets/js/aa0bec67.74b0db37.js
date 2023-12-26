"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[86178],{79220:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>x});var s=r(85893),i=r(11151);function t(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components},{ClLinks:r,GlossaryTerm:t}=e;return r||d("ClLinks",!0),t||d("GlossaryTerm",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string"})," ",(0,s.jsx)(r,{term:"function",children:(0,s.jsx)("i",{children:"Function"})})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("b",{children:"string"})})," ",(0,s.jsx)(e.em,{children:"x \u2192 string"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"x"}),"\u2014a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),", a ",(0,s.jsx)(r,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),", or a ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"character"})})," ."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"\u2014a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:["Returns a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," described by ",(0,s.jsx)(e.em,{children:"x"}),"; specifically:"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"\u2022"})," If ",(0,s.jsx)(e.em,{children:"x"})," is a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),", it is returned."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"\u2022"})," If ",(0,s.jsx)(e.em,{children:"x"})," is a ",(0,s.jsx)(r,{term:"symbol",children:(0,s.jsx)("i",{children:"symbol"})}),", its ",(0,s.jsx)(r,{term:"name",children:(0,s.jsx)("i",{children:"name"})})," is returned."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"\u2022"})," If ",(0,s.jsx)(e.em,{children:"x"})," is a ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"character"})})," , then a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," containing that one ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"character"})})," is returned."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"\u2022"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("b",{children:"string"})})," might perform additional, ",(0,s.jsx)(r,{term:"implementation-defined",children:(0,s.jsx)("i",{children:"implementation-defined"})})," conversions."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:' \n(string "already a string") \u2192 "already a string" \n(string \u2019elm) \u2192 "ELM" \n(string #\\c) \u2192 "c" \n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(e.p,{children:["In the case where a conversion is defined neither by this specification nor by the ",(0,s.jsx)(r,{term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})}),", an error of ",(0,s.jsx)(r,{term:"type",children:(0,s.jsx)("i",{children:"type"})})," ",(0,s.jsx)(r,{term:"type-error",children:(0,s.jsx)("b",{children:"type-error"})})," is signaled."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"coerce",children:(0,s.jsx)("b",{children:"coerce"})}),", ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("b",{children:"string"})})," (",(0,s.jsx)(r,{term:"type",children:(0,s.jsx)("i",{children:"type"})}),")."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"coerce",children:(0,s.jsx)("b",{children:"coerce"})})," can be used to convert a ",(0,s.jsx)(e.em,{children:"sequence"})," of ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"characters"})})," to a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"prin1-to-string",children:(0,s.jsx)("b",{children:"prin1-to-string"})}),", ",(0,s.jsx)(r,{term:"princ-to-string",children:(0,s.jsx)("b",{children:"princ-to-string"})}),", ",(0,s.jsx)(r,{term:"write-to-string",children:(0,s.jsx)("b",{children:"write-to-string"})}),", or ",(0,s.jsx)(r,{term:"format",children:(0,s.jsx)("b",{children:"format"})})," (with a first argument of ",(0,s.jsx)(r,{term:"nil",children:(0,s.jsx)("b",{children:"nil"})}),") can be used to get a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," representation of a ",(0,s.jsx)(r,{term:"number",children:(0,s.jsx)("i",{children:"number"})})," or any other ",(0,s.jsx)(r,{term:"object",children:(0,s.jsx)("i",{children:"object"})}),"."]}),"\n",(0,s.jsxs)("b",{children:["string-upcase, string-downcase, string-capitalize, ",(0,s.jsx)("sup",{children:"nstring-upcase, nstring-downcase, nstring"})," capitalize"]}),"\n",(0,s.jsx)("i",{children:"Function"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-upcase"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," &key ",(0,s.jsx)(e.em,{children:"start end \u2192 cased-string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-downcase"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," &key ",(0,s.jsx)(e.em,{children:"start end \u2192 cased-string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-capitalize"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," &key ",(0,s.jsx)(e.em,{children:"start end \u2192 cased-string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nstring-upcase"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," &key ",(0,s.jsx)(e.em,{children:"start end \u2192 string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nstring-downcase"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," &key ",(0,s.jsx)(e.em,{children:"start end \u2192 string"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nstring-capitalize"})," ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," &key ",(0,s.jsx)(e.em,{children:"start end \u2192 string"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"\u2014a ",(0,s.jsx)(t,{styled:!0,term:"string designator",children:(0,s.jsx)("i",{children:"string designator"})})," . For ",(0,s.jsx)(e.strong,{children:"nstring-upcase"}),", ",(0,s.jsx)(e.strong,{children:"nstring-downcase"}),", and ",(0,s.jsx)(e.strong,{children:"nstring-capitalize"}),", the ",(0,s.jsx)(t,{styled:!0,term:"string designator",children:(0,s.jsx)("i",{children:"string designator"})})," must be a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"start"}),", ",(0,s.jsx)(e.em,{children:"end"}),"\u2014",(0,s.jsx)(t,{styled:!0,term:"bounding index designator",children:(0,s.jsx)("i",{children:"bounding index designators"})})," of ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),". The defaults for ",(0,s.jsx)(e.em,{children:"start"})," and ",(0,s.jsx)(e.em,{children:"end"})," are 0 and ",(0,s.jsx)(r,{term:"nil",children:(0,s.jsx)("b",{children:"nil"})}),", respectively."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"cased-string"}),"\u2014a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-upcase"}),", ",(0,s.jsx)(e.strong,{children:"string-downcase"}),", ",(0,s.jsx)(e.strong,{children:"string-capitalize"}),", ",(0,s.jsx)(e.strong,{children:"nstring-upcase"}),", ",(0,s.jsx)(e.strong,{children:"nstring-downcase"}),", ",(0,s.jsx)(e.strong,{children:"nstring-capitalize"})," change the case of the subsequence of ",(0,s.jsx)(e.em,{children:"string bounded"})," by ",(0,s.jsx)(e.em,{children:"start"})," and ",(0,s.jsx)(e.em,{children:"end"})," as follows:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"string-upcase"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-upcase"})," returns a ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," just like ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," with all lowercase characters replaced by the corresponding uppercase characters. More precisely, each character of the result ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," is produced by applying the ",(0,s.jsx)(r,{term:"function",children:(0,s.jsx)("i",{children:"function"})})," ",(0,s.jsx)(r,{term:"char-upcase",children:(0,s.jsx)("b",{children:"char-upcase"})})," to the corresponding character of ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"string-downcase"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-downcase"})," is like ",(0,s.jsx)(e.strong,{children:"string-upcase"})," except that all uppercase characters are replaced by the corresponding lowercase characters (using ",(0,s.jsx)(r,{term:"char-downcase",children:(0,s.jsx)("b",{children:"char-downcase"})}),")."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-upcase, string-downcase, string-capitalize,"})," ",(0,s.jsx)(e.em,{children:". . ."})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"string-capitalize"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"string-capitalize"})," produces a copy of ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," such that, for every word in the copy, the first ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"character"})})," of the \u201cword,\u201d if it has ",(0,s.jsx)(r,{term:"case",children:(0,s.jsx)("i",{children:"case"})}),", is ",(0,s.jsx)(r,{term:"uppercase",children:(0,s.jsx)("i",{children:"uppercase"})})," and any other ",(0,s.jsx)(r,{term:"character",children:(0,s.jsx)("i",{children:"characters"})})," with ",(0,s.jsx)(r,{term:"case",children:(0,s.jsx)("i",{children:"case"})})," in the word are ",(0,s.jsx)(r,{term:"lowercase",children:(0,s.jsx)("i",{children:"lowercase"})}),". For the purposes of ",(0,s.jsx)(e.strong,{children:"string-capitalize"}),", a \u201cword\u201d is defined to be a consecutive subsequence consisting of ",(0,s.jsx)(e.em,{children:"alphanumeric characters"}),", delimited at each end either by a non-",(0,s.jsx)(e.em,{children:"alphanumeric character"})," or by an end of the ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"nstring-upcase, nstring-downcase, nstring-capitalize"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nstring-upcase"}),", ",(0,s.jsx)(e.strong,{children:"nstring-downcase"}),", and ",(0,s.jsx)(e.strong,{children:"nstring-capitalize"})," are identical to ",(0,s.jsx)(e.strong,{children:"string-upcase"}),", ",(0,s.jsx)(e.strong,{children:"string-downcase"}),", and ",(0,s.jsx)(e.strong,{children:"string-capitalize"})," respectively except that they modify ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["For ",(0,s.jsx)(e.strong,{children:"string-upcase"}),", ",(0,s.jsx)(e.strong,{children:"string-downcase"}),", and ",(0,s.jsx)(e.strong,{children:"string-capitalize"}),", ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," is not modified. However, if no characters in ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," require conversion, the result may be either ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," or a copy of it, at the implementation\u2019s discretion."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:'(string-upcase "abcde") \u2192 "ABCDE" \n(string-upcase "Dr. Livingston, I presume?") \n\u2192 "DR. LIVINGSTON, I PRESUME?" \n(string-upcase "Dr. Livingston, I presume?" :start 6 :end 10) \n\u2192 "Dr. LiVINGston, I presume?" \n(string-downcase "Dr. Livingston, I presume?") \n\u2192 "dr. livingston, i presume?" \n(string-capitalize "elm 13c arthur;fig don\u2019t") \u2192 "Elm 13c Arthur;Fig Don\u2019T" \n(string-capitalize " hello ") \u2192 " Hello " \n(string-capitalize "occlUDeD cASEmenTs FOreSTAll iNADVertent DEFenestraTION") \u2192 "Occluded Casements Forestall Inadvertent Defenestration" \n(string-capitalize \u2019kludgy-hash-search) \u2192 "Kludgy-Hash-Search" \n(string-capitalize "DON\u2019T!") \u2192 "Don\u2019T!" ;not "Don\u2019t!" \n(string-capitalize "pipe 13a, foo16c") \u2192 "Pipe 13a, Foo16c" \n(setq str (copy-seq "0123ABCD890a")) \u2192 "0123ABCD890a" \n(nstring-downcase str :start 5 :end 7) \u2192 "0123AbcD890a" \nstr \u2192 "0123AbcD890a" \n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"nstring-upcase"}),", ",(0,s.jsx)(e.strong,{children:"nstring-downcase"}),", and ",(0,s.jsx)(e.strong,{children:"nstring-capitalize"})," modify ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})})," as appropriate rather than constructing a new ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r,{term:"char-upcase",children:(0,s.jsx)("b",{children:"char-upcase"})}),", ",(0,s.jsx)(r,{term:"char-downcase",children:(0,s.jsx)("b",{children:"char-downcase"})})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(e.p,{children:["The result is always of the same length as ",(0,s.jsx)(r,{term:"string",children:(0,s.jsx)("i",{children:"string"})}),"."]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"string"},h="string",a={id:"chap-16/bg-c-dictionary/string_function",title:"string",description:"Expanded Reference: string",source:"@site/docs/chap-16/bg-c-dictionary/string_function.md",sourceDirName:"chap-16/bg-c-dictionary",slug:"/chap-16/bg-c-dictionary/string_function",permalink:"/cl-language-reference/chap-16/bg-c-dictionary/string_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-16/bg-c-dictionary/string_function.md",tags:[],version:"current",frontMatter:{title:"string"},sidebar:"tutorialSidebar",previous:{title:"string-trim, string-left-trim, string-right-trim",permalink:"/cl-language-reference/chap-16/bg-c-dictionary/string-trim_string-left-trim_string-right-trim_func-tion"},next:{title:"string",permalink:"/cl-language-reference/chap-16/bg-c-dictionary/string_system-class"}},o={},x=[{value:"Expanded Reference: string",id:"expanded-reference-string",level:2}];function g(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"string",children:"string"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(e.h2,{id:"expanded-reference-string",children:"Expanded Reference: string"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lisp",children:"(string )\n"})})]})}function j(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>c});var s=r(67294);const i={},t=s.createContext(i);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);