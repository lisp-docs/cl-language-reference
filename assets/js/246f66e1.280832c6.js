"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[78606],{6362:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=r(85893),c=r(11151);function i(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"trace, untrace"})," ",(0,t.jsx)(n.em,{children:"Macro"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"trace"})," ",(0,t.jsx)(n.em,{children:"{function-name}"}),"* ",(0,t.jsx)(n.em,{children:"\u2192 trace-result"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"untrace"})," ",(0,t.jsx)(n.em,{children:"{function-name}"}),"* ",(0,t.jsx)(n.em,{children:"\u2192 untrace-result"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"function-name"}),"\u2014a ",(0,t.jsx)(n.em,{children:"function name"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"trace-result"}),"\u2014",(0,t.jsx)(n.em,{children:"implementation-dependent"}),", unless no ",(0,t.jsx)(n.em,{children:"function-names"})," are supplied, in which case ",(0,t.jsx)(n.em,{children:"trace-result"})," is a ",(0,t.jsx)(n.em,{children:"list"})," of ",(0,t.jsx)(n.em,{children:"function names"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"untrace-result"}),"\u2014",(0,t.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"trace"})," and ",(0,t.jsx)(n.strong,{children:"untrace"})," control the invocation of the trace facility."]}),"\n",(0,t.jsxs)(n.p,{children:["Invoking ",(0,t.jsx)(n.strong,{children:"trace"})," with one or more ",(0,t.jsx)(n.em,{children:"function-names"})," causes the denoted ",(0,t.jsx)(n.em,{children:"functions"})," to be \u201ctraced.\u201d Whenever a traced ",(0,t.jsx)(n.em,{children:"function"})," is invoked, information about the call, about the arguments passed, and about any eventually returned values is printed to ",(0,t.jsx)(n.em,{children:"trace output"}),". If ",(0,t.jsx)(n.strong,{children:"trace"})," is used with no ",(0,t.jsx)(n.em,{children:"function-names"}),", no tracing action is performed; instead, a list of the ",(0,t.jsx)(n.em,{children:"functions"})," currently being traced is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["Invoking ",(0,t.jsx)(n.strong,{children:"untrace"})," with one or more function names causes those functions to be \u201cuntraced\u201d (",(0,t.jsx)(n.em,{children:"i.e."}),", no longer traced). If ",(0,t.jsx)(n.strong,{children:"untrace"})," is used with no ",(0,t.jsx)(n.em,{children:"function-names"}),", all ",(0,t.jsx)(n.em,{children:"functions"})," currently being traced are untraced."]}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(n.em,{children:"function"})," to be traced has been open-coded (",(0,t.jsx)(n.em,{children:"e.g."}),", because it was declared ",(0,t.jsx)(n.strong,{children:"inline"}),"), a call to that ",(0,t.jsx)(n.em,{children:"function"})," might not produce trace output."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.p,{children:"(defun fact (n) (if (zerop n) 1 (* n (fact (- n 1)))))"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2192"})," FACT"]}),"\n",(0,t.jsx)(n.p,{children:"(trace fact)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2192"})," (FACT)"]}),"\n",(0,t.jsx)(n.p,{children:";; Of course, the format of traced output is implementation-dependent."}),"\n",(0,t.jsx)(n.p,{children:"(fact 3)"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 1 Enter FACT 3"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 | 2 Enter FACT 2"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 | 3 Enter FACT 1"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 | | 4 Enter FACT 0"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 | | 4 Exit FACT 1"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 | 3 Exit FACT 1"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 | 2 Exit FACT 2"}),"\n",(0,t.jsx)(n.p,{children:"\u25b7 1 Exit FACT 6"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2192"})," 6"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,t.jsxs)(n.p,{children:["Might change the definitions of the ",(0,t.jsx)(n.em,{children:"functions"})," named by ",(0,t.jsx)(n.em,{children:"function-names"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsx)(n.p,{children:"Whether the functions named are defined or already being traced."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsx)(n.p,{children:"Tracing an already traced function, or untracing a function not currently being traced, should produce no harmful effects, but might signal a warning."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"*trace-output*"}),", ",(0,t.jsx)(n.strong,{children:"step"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"trace"})," and ",(0,t.jsx)(n.strong,{children:"untrace"})," may also accept additional ",(0,t.jsx)(n.em,{children:"implementation-dependent"})," argument formats. The format of the trace output is ",(0,t.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Although ",(0,t.jsx)(n.strong,{children:"trace"})," can be extended to permit non-standard options, ",(0,t.jsx)(n.em,{children:"implementations"})," are nevertheless encouraged (but not required) to warn about the use of syntax or options that are neither specified by this standard nor added as an extension by the ",(0,t.jsx)(n.em,{children:"implementation"}),", since they could be symptomatic of typographical errors or of reliance on features supported in ",(0,t.jsx)(n.em,{children:"implementations"})," other than the current ",(0,t.jsx)(n.em,{children:"implementation"}),"."]})]})}function s(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const a={},d="trace, untrace",o={id:"chap-25/cf-c-dictionary/traceaauntrace",title:"trace, untrace",description:"Expanded Reference: trace, untrace",source:"@site/docs/chap-25/cf-c-dictionary/traceaauntrace.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/traceaauntrace",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/traceaauntrace",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/traceaauntrace.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"time",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/time"},next:{title:"user-homedir-pathname",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/userhomedirpathname"}},l={},h=[{value:"Expanded Reference: trace, untrace",id:"expanded-reference-trace-untrace",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"trace-untrace",children:"trace, untrace"}),"\n","\n","\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-trace-untrace",children:"Expanded Reference: trace, untrace"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(trace, untrace )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const c={},i=t.createContext(c);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);