"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[33619],{53976:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=i(85893),r=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"pprint-newline"})," ",(0,t.jsx)(i,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"pprint-newline",children:(0,t.jsx)("b",{children:"pprint-newline"})})," ",(0,t.jsx)(n.em,{children:"kind"})," &optional ",(0,t.jsx)(n.em,{children:"stream \u2192"})," ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"kind"}),"\u2014one of ",":linear",", ",":fill",", ",":miser",", or ",":mandatory","."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"\u2014a ",(0,t.jsx)(n.em,{children:"stream designator"})," . The default is ",(0,t.jsx)(n.em,{children:"standard output"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(i,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})})," is a ",(0,t.jsx)(n.em,{children:"pretty printing stream"})," and the ",(0,t.jsx)(i,{styled:!0,term:"value",children:(0,t.jsx)("i",{children:"value"})})," of ",(0,t.jsx)(i,{styled:!0,term:"print-pretty",children:(0,t.jsx)("b",{children:"*print-pretty*"})})," is ",(0,t.jsx)(i,{styled:!0,term:"true",children:(0,t.jsx)("i",{children:"true"})}),", a line break is inserted in the output when the appropriate condition below is satisfied; otherwise, ",(0,t.jsx)(i,{styled:!0,term:"pprint-newline",children:(0,t.jsx)("b",{children:"pprint-newline"})})," has no effect."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Kind"})," specifies the style of conditional newline. This ",(0,t.jsx)(i,{styled:!0,term:"parameter",children:(0,t.jsx)("i",{children:"parameter"})})," is treated as follows:"]}),"\n",(0,t.jsx)(i,{styled:!0,term:"pprint-newline",children:(0,t.jsx)("b",{children:"pprint-newline"})}),"\n",(0,t.jsx)(n.p,{children:":linear"}),"\n",(0,t.jsxs)(n.p,{children:["This specifies a \u201clinear-style\u201d ",(0,t.jsx)(n.em,{children:"conditional newline"}),". A line break is inserted if and only if the immediately containing ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"section"})})," cannot be printed on one line. The effect of this is that line breaks are either inserted at every linear-style conditional newline in a logical block or at none of them."]}),"\n",(0,t.jsx)(n.p,{children:":miser"}),"\n",(0,t.jsxs)(n.p,{children:["This specifies a \u201cmiser-style\u201d ",(0,t.jsx)(n.em,{children:"conditional newline"}),". A line break is inserted if and only if the immediately containing ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"section"})})," cannot be printed on one line and miser style is in effect in the immediately containing logical block. The effect of this is that miser-style conditional newlines act like linear-style conditional newlines, but only when miser style is in effect. Miser style is in effect for a logical block if and only if the starting position of the logical block is less than or equal to ",(0,t.jsx)(i,{styled:!0,term:"print-miser-width",children:(0,t.jsx)("b",{children:"*print-miser-width*"})})," ",(0,t.jsx)(i,{styled:!0,term:"em",children:(0,t.jsx)("i",{children:"ems"})})," from the right margin."]}),"\n",(0,t.jsx)(n.p,{children:":fill"}),"\n",(0,t.jsxs)(n.p,{children:["This specifies a \u201cfill-style\u201d ",(0,t.jsx)(n.em,{children:"conditional newline"}),". A line break is inserted if and only if either (a) the following ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"section"})})," cannot be printed on the end of the current line, (b) the preceding ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"section"})})," was not printed on a single line, or (c) the immediately containing ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"section"})})," cannot be printed on one line and miser style is in effect in the immediately containing logical block. If a logical block is broken up into a number of subsections by fill-style conditional newlines, the basic effect is that the logical block is printed with as many subsections as possible on each line. However, if miser style is in effect, fill-style conditional newlines act like linear-style conditional newlines."]}),"\n",(0,t.jsx)(n.p,{children:":mandatory"}),"\n",(0,t.jsxs)(n.p,{children:["This specifies a \u201cmandatory-style\u201d ",(0,t.jsx)(n.em,{children:"conditional newline"}),". A line break is always inserted. This implies that none of the containing ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"sections"})})," can be printed on a single line and will therefore trigger the insertion of line breaks at linear-style conditional newlines in these ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"sections"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When a line break is inserted by any type of conditional newline, any blanks that immediately precede the conditional newline are omitted from the output and indentation is introduced at the beginning of the next line. By default, the indentation causes the following line to begin in the same horizontal position as the first character in the immediately containing logical block. (The indentation can be changed via ",(0,t.jsx)(i,{styled:!0,term:"pprint-indent",children:(0,t.jsx)("b",{children:"pprint-indent"})}),".)"]}),"\n",(0,t.jsxs)(n.p,{children:["There are a variety of ways unconditional newlines can be introduced into the output (",(0,t.jsx)(n.em,{children:"i.e."}),", via ",(0,t.jsx)(i,{styled:!0,term:"terpri",children:(0,t.jsx)("b",{children:"terpri"})})," or by printing a string containing a newline character). As with mandatory conditional newlines, this prevents any of the containing ",(0,t.jsx)(i,{styled:!0,term:"section",children:(0,t.jsx)("i",{children:"sections"})})," from being printed on one line. In general, when an unconditional newline is encountered, it is printed out without suppression of the preceding blanks and without any indentation following it. However, if a per-line prefix has been specified (see ",(0,t.jsx)(i,{styled:!0,term:"pprint-logical-block",children:(0,t.jsx)("b",{children:"pprint-logical-block"})}),"), this prefix will always be printed no matter how a newline originates."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\nSee Section 22.2.2 (Examples of using the Pretty Printer). \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["Output to ",(0,t.jsx)(i,{styled:!0,term:"stream",children:(0,t.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"print-pretty",children:(0,t.jsx)("b",{children:"*print-pretty*"})}),", ",(0,t.jsx)(n.strong,{children:"*print-miser*"}),". The presence of containing logical blocks. The placement of newlines and conditional newlines."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(n.p,{children:["An error of ",(0,t.jsx)(i,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(i,{styled:!0,term:"type-error",children:(0,t.jsx)("b",{children:"type-error"})})," is signaled if ",(0,t.jsx)(n.em,{children:"kind"})," is not one of ",":linear",", ",":fill",", ",":miser",", or ",":mandatory","."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsx)(n.p,{children:"Section 22.3.5.1 (Tilde Underscore: Conditional Newline), Section 22.2.2 (Examples of using the Pretty Printer)"})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const c={title:"pprint-newline"},o="pprint-newline",d={id:"chap-22/cc-e-dictionary/pprint-newline_function",title:"pprint-newline",description:"Expanded Reference: pprint-newline",source:"@site/docs/chap-22/cc-e-dictionary/pprint-newline_function.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/pprint-newline_function",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-newline_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/pprint-newline_function.md",tags:[],version:"current",frontMatter:{title:"pprint-newline"},sidebar:"tutorialSidebar",previous:{title:"pprint-logical-block",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-logical-block_macro"},next:{title:"pprint-pop",permalink:"/cl-language-reference/chap-22/cc-e-dictionary/pprint-pop_local-macro"}},a={},p=[{value:"Expanded Reference: pprint-newline",id:"expanded-reference-pprint-newline",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pprint-newline",children:"pprint-newline"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-pprint-newline",children:"Expanded Reference: pprint-newline"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(pprint-newline )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var t=i(67294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);