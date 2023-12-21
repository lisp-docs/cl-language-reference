"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[72706],{57972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=t(85893),i=t(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"print-object"})," ",(0,r.jsx)(n.em,{children:"Standard Generic Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"print-object"})," ",(0,r.jsx)(n.em,{children:"object stream \u2192 object"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Method Signatures:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"print-object"})," (",(0,r.jsx)(n.em,{children:"object standard-object"}),") ",(0,r.jsx)(n.em,{children:"stream"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"print-object"})," (",(0,r.jsx)(n.em,{children:"object structure-object"}),") ",(0,r.jsx)(n.em,{children:"stream"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"object"}),"\u2014an ",(0,r.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"print-object"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"generic function"})," ",(0,r.jsx)(n.strong,{children:"print-object"})," writes the printed representation of ",(0,r.jsx)(n.em,{children:"object"})," to ",(0,r.jsx)(n.em,{children:"stream"}),". The ",(0,r.jsx)(n.em,{children:"function"})," ",(0,r.jsx)(n.strong,{children:"print-object"})," is called by the ",(0,r.jsx)(n.em,{children:"Lisp printer"})," ; it should not be called by the user."]}),"\n",(0,r.jsxs)(n.p,{children:["Each implementation is required to provide a ",(0,r.jsx)(n.em,{children:"method"})," on the ",(0,r.jsx)(n.em,{children:"class"})," ",(0,r.jsx)(n.strong,{children:"standard-object"})," and on the ",(0,r.jsx)(n.em,{children:"class"})," ",(0,r.jsx)(n.strong,{children:"structure-object"}),". In addition, each ",(0,r.jsx)(n.em,{children:"implementation"})," must provide ",(0,r.jsx)(n.em,{children:"methods"})," on enough other ",(0,r.jsx)(n.em,{children:"classes"})," so as to ensure that there is always an applicable ",(0,r.jsx)(n.em,{children:"method"}),". Implementations are free to add ",(0,r.jsx)(n.em,{children:"methods"})," for other ",(0,r.jsx)(n.em,{children:"classes"}),". Users may write ",(0,r.jsx)(n.em,{children:"methods"})," for ",(0,r.jsx)(n.strong,{children:"print-object"})," for their own ",(0,r.jsx)(n.em,{children:"classes"})," if they do not wish to inherit an ",(0,r.jsx)(n.em,{children:"implementation-dependent method"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"method"})," on the ",(0,r.jsx)(n.em,{children:"class"})," ",(0,r.jsx)(n.strong,{children:"structure-object"})," prints the object in the default #S notation; see Section 22.1.3.12 (Printing Structures)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Methods"})," on ",(0,r.jsx)(n.strong,{children:"print-object"})," are responsible for implementing their part of the semantics of the ",(0,r.jsx)(n.em,{children:"printer control variables"}),", as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*print-readably*"})}),"\n",(0,r.jsxs)(n.p,{children:["All methods for ",(0,r.jsx)(n.strong,{children:"print-object"})," must obey ",(0,r.jsx)(n.strong,{children:"*print-readably*"}),". This includes both user-defined methods and ",(0,r.jsx)(n.em,{children:"implementation-defined"})," methods. Readable printing of ",(0,r.jsx)(n.em,{children:"structures"})," and ",(0,r.jsx)(n.em,{children:"standard objects"})," is controlled by their ",(0,r.jsx)(n.strong,{children:"print-object"})," method, not by their ",(0,r.jsx)(n.strong,{children:"make-load-form"})," ",(0,r.jsx)(n.em,{children:"method"}),". ",(0,r.jsx)(n.em,{children:"Similarity"})," for these ",(0,r.jsx)(n.em,{children:"objects"})," is application dependent and hence is defined to be whatever these ",(0,r.jsx)(n.em,{children:"methods"})," do; see Section 3.2.4.2 (Similarity of Literal Objects)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*print-escape*"})}),"\n",(0,r.jsxs)(n.p,{children:["Each ",(0,r.jsx)(n.em,{children:"method"})," must implement ",(0,r.jsx)(n.strong,{children:"*print-escape*"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*print-pretty*"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"method"})," may wish to perform specialized line breaking or other output conditional on the ",(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.strong,{children:"*print-pretty*"}),". For further information, see (for example) the ",(0,r.jsx)(n.em,{children:"macro"})," ",(0,r.jsx)(n.strong,{children:"pprint-fill"}),". See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*print-length*"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Methods"})," that produce output of indefinite length must obey ",(0,r.jsx)(n.strong,{children:"*print-length*"}),". For further information, see (for example) the ",(0,r.jsx)(n.em,{children:"macros"})," ",(0,r.jsx)(n.strong,{children:"pprint-logical-block"})," and ",(0,r.jsx)(n.strong,{children:"pprint-pop"}),". See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*print-level*"})}),"\n",(0,r.jsxs)(n.p,{children:["The printer takes care of ",(0,r.jsx)(n.strong,{children:"*print-level*"})," automatically, provided that each ",(0,r.jsx)(n.em,{children:"method"})," handles exactly one level of structure and calls ",(0,r.jsx)(n.strong,{children:"write"})," (or an equivalent ",(0,r.jsx)(n.em,{children:"function"}),") recursively if there are more structural levels. The printer\u2019s decision of whether an ",(0,r.jsx)(n.em,{children:"object"})," has components (and"]}),"\n",(0,r.jsxs)(n.p,{children:["therefore should not be printed when the printing depth is not less than ",(0,r.jsx)(n.strong,{children:"*print-level*"}),") is ",(0,r.jsx)(n.em,{children:"implementation-dependent"}),". In some implementations its ",(0,r.jsx)(n.strong,{children:"print-object"})," ",(0,r.jsx)(n.em,{children:"method"})," is not called; in others the ",(0,r.jsx)(n.em,{children:"method"})," is called, and the determination that the ",(0,r.jsx)(n.em,{children:"object"})," has components is based on what it tries to write to the ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*print-circle*"})}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.em,{children:"value"})," of ",(0,r.jsx)(n.strong,{children:"*print-circle*"})," is ",(0,r.jsx)(n.em,{children:"true"}),", a user-defined ",(0,r.jsx)(n.strong,{children:"print-object"})," ",(0,r.jsx)(n.em,{children:"method"})," can print ",(0,r.jsx)(n.em,{children:"objects"})," to the supplied ",(0,r.jsx)(n.em,{children:"stream"})," using ",(0,r.jsx)(n.strong,{children:"write"}),", ",(0,r.jsx)(n.strong,{children:"prin1"}),", ",(0,r.jsx)(n.strong,{children:"princ"}),", or ",(0,r.jsx)(n.strong,{children:"format"})," and expect circularities to be detected and printed using the #",(0,r.jsx)(n.em,{children:"n"}),"# syntax. If a user-defined ",(0,r.jsx)(n.strong,{children:"print-object"})," ",(0,r.jsx)(n.em,{children:"method"})," prints to a ",(0,r.jsx)(n.em,{children:"stream"})," other than the one that was supplied, then circularity detection starts over for that ",(0,r.jsx)(n.em,{children:"stream"}),". See ",(0,r.jsx)(n.strong,{children:"*print-circle*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"*print-base*"}),", ",(0,r.jsx)(n.strong,{children:"*print-radix*"}),", ",(0,r.jsx)(n.strong,{children:"*print-case*"}),", ",(0,r.jsx)(n.strong,{children:"*print-gensym*"}),", and ",(0,r.jsx)(n.strong,{children:"*print-array*"})]}),"\n",(0,r.jsxs)(n.p,{children:["These ",(0,r.jsx)(n.em,{children:"printer control variables"})," apply to specific types of ",(0,r.jsx)(n.em,{children:"objects"})," and are handled by the ",(0,r.jsx)(n.em,{children:"methods"})," for those ",(0,r.jsx)(n.em,{children:"objects"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If these rules are not obeyed, the results are undefined."}),"\n",(0,r.jsxs)(n.p,{children:["In general, the printer and the ",(0,r.jsx)(n.strong,{children:"print-object"})," methods should not rebind the print control variables as they operate recursively through the structure, but this is ",(0,r.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In some implementations the ",(0,r.jsx)(n.em,{children:"stream"})," argument passed to a ",(0,r.jsx)(n.strong,{children:"print-object"})," ",(0,r.jsx)(n.em,{children:"method"})," is not the original ",(0,r.jsx)(n.em,{children:"stream"}),", but is an intermediate ",(0,r.jsx)(n.em,{children:"stream"})," that implements part of the printer. ",(0,r.jsx)(n.em,{children:"methods"})," should therefore not depend on the identity of this ",(0,r.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"pprint-fill"}),", ",(0,r.jsx)(n.strong,{children:"pprint-logical-block"}),", ",(0,r.jsx)(n.strong,{children:"pprint-pop"}),", ",(0,r.jsx)(n.strong,{children:"write"}),", ",(0,r.jsx)(n.strong,{children:"*print-readably*"}),", ",(0,r.jsx)(n.strong,{children:"*print-escape*"}),", ",(0,r.jsx)(n.strong,{children:"*print-pretty*"}),", ",(0,r.jsx)(n.strong,{children:"*print-length*"}),", Section 22.1.3 (Default Print-Object Methods), Section 22.1.3.12 (Printing Structures), Section 22.2.1.4 (Pretty Print Dispatch Tables), Section 22.2.2 (Examples of using the Pretty Printer)"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const o={title:"print-object"},d="print-object",l={id:"chap-22/cc-e-dictionary/print-object_standard-generic-function",title:"print-object",description:"Expanded Reference: print-object",source:"@site/docs/chap-22/cc-e-dictionary/print-object_standard-generic-function.md",sourceDirName:"chap-22/cc-e-dictionary",slug:"/chap-22/cc-e-dictionary/print-object_standard-generic-function",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-object_standard-generic-function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-22/cc-e-dictionary/print-object_standard-generic-function.md",tags:[],version:"current",frontMatter:{title:"print-object"},sidebar:"tutorialSidebar",previous:{title:"print-not-readable",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-not-readable_condition-type"},next:{title:"print-pprint-dispatch",permalink:"/cl-language-reference/docs/chap-22/cc-e-dictionary/print-pprint-dispatch_variable"}},h={},a=[{value:"Expanded Reference: print-object",id:"expanded-reference-print-object",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"print-object",children:"print-object"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-print-object",children:"Expanded Reference: print-object"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(print-object )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);