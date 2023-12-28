"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[7640],{80721:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>j,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=i(85893),r=i(11151);function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:l}=n;return i||c("DictionaryLink",!0),l||c("GlossaryTerm",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"pprint-fill, pprint-linear, pprint-tabular"})," ",(0,t.jsx)(l,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"pprint-fill",children:(0,t.jsx)("b",{children:"pprint-fill"})})," ",(0,t.jsx)(n.em,{children:"stream object"})," &optional ",(0,t.jsx)(n.em,{children:"colon-p at-sign-p \u2192"})," ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"pprint-linear",children:(0,t.jsx)("b",{children:"pprint-linear"})})," ",(0,t.jsx)(n.em,{children:"stream object"})," &optional ",(0,t.jsx)(n.em,{children:"colon-p at-sign-p \u2192"})," ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"pprint-tabular",children:(0,t.jsx)("b",{children:"pprint-tabular"})})," ",(0,t.jsx)(n.em,{children:"stream object"})," &optional ",(0,t.jsx)(n.em,{children:"colon-p at-sign-p tabsize \u2192"})," ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"\u2014an ",(0,t.jsx)(n.em,{children:"output stream designator"})," ."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(l,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"\u2014an ",(0,t.jsx)(l,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"colon-p"}),"\u2014a ",(0,t.jsx)(l,{styled:!0,term:"generalized boolean",children:(0,t.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,t.jsx)(l,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"at-sign-p"}),"\u2014a ",(0,t.jsx)(l,{styled:!0,term:"generalized boolean",children:(0,t.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,t.jsx)(l,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"tabsize"}),"\u2014a non-negative ",(0,t.jsx)(n.em,{children:"integer"})," . The default is 16."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["The functions ",(0,t.jsx)(i,{styled:!0,term:"pprint-fill",children:(0,t.jsx)("b",{children:"pprint-fill"})}),", ",(0,t.jsx)(i,{styled:!0,term:"pprint-linear",children:(0,t.jsx)("b",{children:"pprint-linear"})}),", and ",(0,t.jsx)(i,{styled:!0,term:"pprint-tabular",children:(0,t.jsx)("b",{children:"pprint-tabular"})})," specify particular ways of ",(0,t.jsx)(n.em,{children:"pretty printing"})," a ",(0,t.jsx)(l,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," to ",(0,t.jsx)(l,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),". Each function prints parentheses around the output if and only if ",(0,t.jsx)(n.em,{children:"colon-p"})," is ",(0,t.jsx)(l,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),". Each function ignores its ",(0,t.jsx)(n.em,{children:"at-sign-p"})," argument. (Both arguments are included even though only one is needed so that these functions can be used via ~/.../ and as ",(0,t.jsx)(i,{styled:!0,term:"set-pprint-dispatch",children:(0,t.jsx)("b",{children:"set-pprint-dispatch"})})," functions, as well as directly.) Each function handles abbreviation and the detection of circularity and sharing correctly, and uses ",(0,t.jsx)(i,{styled:!0,term:"write",children:(0,t.jsx)("b",{children:"write"})})," to print ",(0,t.jsx)(l,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," when it is a ",(0,t.jsx)(l,{styled:!0,term:"non-list",children:(0,t.jsx)("i",{children:"non-list"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(l,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," is a ",(0,t.jsx)(l,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," and if the ",(0,t.jsx)(l,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})})," of ",(0,t.jsx)(i,{styled:!0,term:"print-pretty",children:(0,t.jsx)("b",{children:"*print-pretty*"})})," is ",(0,t.jsx)(l,{styled:!0,term:"false",children:(0,t.jsx)("i",{children:"false"})}),", each of these functions prints ",(0,t.jsx)(l,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," using a minimum of ",(0,t.jsx)(l,{styled:!0,term:"whitespace",children:(0,t.jsx)("i",{children:"whitespace"})}),", as described in Section 22.1.3.5 (Printing Lists and Conses). Otherwise (if ",(0,t.jsx)(l,{styled:!0,term:"object",children:(0,t.jsx)("i",{children:"object"})})," is a ",(0,t.jsx)(l,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," and if the ",(0,t.jsx)(l,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})})," of ",(0,t.jsx)(i,{styled:!0,term:"print-pretty",children:(0,t.jsx)("b",{children:"*print-pretty*"})})," is ",(0,t.jsx)(l,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),"):"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",(0,t.jsx)(l,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(i,{styled:!0,term:"pprint-linear",children:(0,t.jsx)("b",{children:"pprint-linear"})})," prints a ",(0,t.jsx)(l,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," either all on one line, or with each ",(0,t.jsx)(l,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"element"})})," on a separate line."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",(0,t.jsx)(l,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(i,{styled:!0,term:"pprint-fill",children:(0,t.jsx)("b",{children:"pprint-fill"})})," prints a ",(0,t.jsx)(l,{styled:!0,term:"list",children:(0,t.jsx)("i",{children:"list"})})," with as many ",(0,t.jsx)(l,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"elements"})})," as possible on each line."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," The ",(0,t.jsx)(l,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(i,{styled:!0,term:"pprint-tabular",children:(0,t.jsx)("b",{children:"pprint-tabular"})})," is the same as ",(0,t.jsx)(i,{styled:!0,term:"pprint-fill",children:(0,t.jsx)("b",{children:"pprint-fill"})})," except that it prints the ",(0,t.jsx)(l,{styled:!0,term:"element",children:(0,t.jsx)("i",{children:"elements"})})," so that they line up in columns. The ",(0,t.jsx)(n.em,{children:"tabsize"})," specifies the column spacing in ",(0,t.jsx)(l,{styled:!0,term:"em",children:(0,t.jsx)("i",{children:"ems"})}),", which is the total spacing from the leading edge of one column to the leading edge of the next."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:'Evaluating the following with a line length of 25 produces the output shown. \n(progn (princ "Roads ") \n       \n       \n       (pprint-tabular \\*standard-output\\* \u2019(elm main maple center) nil nil 8)) \nRoads ELM MAIN \nMAPLE CENTER \n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["Performs output to the indicated ",(0,t.jsx)(l,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:["The cursor position on the indicated ",(0,t.jsx)(l,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),", if it can be determined."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(l,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(i,{styled:!0,term:"pprint-tabular",children:(0,t.jsx)("b",{children:"pprint-tabular"})})," could be defined as follows:"]}),"\n",(0,t.jsx)(n.p,{children:"(defun pprint-tabular (s list &optional (colon-p t) at-sign-p (tabsize nil))"}),"\n",(0,t.jsx)(n.p,{children:"(declare (ignore at-sign-p))"}),"\n",(0,t.jsx)(n.p,{children:"(when (null tabsize) (setq tabsize 16))"}),"\n",(0,t.jsxs)(n.p,{children:["(pprint-logical-block (s list ",":prefix",' (if colon-p "(" "")']}),"\n",(0,t.jsxs)(n.p,{children:[":suffix",' (if colon-p ")" ""))']}),"\n",(0,t.jsx)(n.p,{children:"(pprint-exit-if-list-exhausted)"}),"\n",(0,t.jsxs)(n.p,{children:["(loop (write (pprint-pop) ",":stream"," s)"]}),"\n",(0,t.jsx)(n.p,{children:"(pprint-exit-if-list-exhausted)"}),"\n",(0,t.jsx)(n.p,{children:"(write-char #\\Space s)"}),"\n",(0,t.jsxs)(n.p,{children:["(pprint-tab ",":section-relative"," 0 tabsize s)"]}),"\n",(0,t.jsxs)(n.p,{children:["(pprint-newline ",":fill"," s))))"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that it would have been inconvenient to specify this function using ",(0,t.jsx)(i,{styled:!0,term:"format",children:(0,t.jsx)("b",{children:"format"})}),", because of the need to pass its ",(0,t.jsx)(n.em,{children:"tabsize"})," argument through to a ~",":T"," format directive nested within an iteration over a list."]})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"pprint-fill, pprint-linear, pprint-tabular"},p="pprint-fill, pprint-linear, pprint-tabular",a={id:"chap-22/cc-e-dictionary/pprint-fill_pprint-linear_pprint-tabular_function",title:"pprint-fill, pprint-linear, pprint-tabular",description:"Expanded Reference: pprint-fill, pprint-linear, pprint-tabular",source:"@site/docs/chap-22/cc-e-dictionary/pprint-fill_pprint-linear_pprint-tabular_function.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/pprint-fill_pprint-linear_pprint-tabular_function",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-fill_pprint-linear_pprint-tabular_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/pprint-fill_pprint-linear_pprint-tabular_function.md",tags:[],version:"current",frontMatter:{title:"pprint-fill, pprint-linear, pprint-tabular"},sidebar:"tutorialSidebar",previous:{title:"pprint-exit-if-list-exhausted",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-exit-if-list-exhausted_local-macro"},next:{title:"pprint-indent",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-indent_function"}},h={},o=[{value:"Expanded Reference: pprint-fill, pprint-linear, pprint-tabular",id:"expanded-reference-pprint-fill-pprint-linear-pprint-tabular",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pprint-fill-pprint-linear-pprint-tabular",children:"pprint-fill, pprint-linear, pprint-tabular"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-pprint-fill-pprint-linear-pprint-tabular",children:"Expanded Reference: pprint-fill, pprint-linear, pprint-tabular"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(pprint-fill, pprint-linear, pprint-tabular )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var t=i(67294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);