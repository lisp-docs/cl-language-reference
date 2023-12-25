"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[49363],{21681:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var t=i(85893),r=i(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"decode-universal-time"})," ",(0,t.jsx)(i,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"Function"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"decode-universal-time",children:(0,t.jsx)("b",{children:"decode-universal-time"})})," ",(0,t.jsx)(n.em,{children:"universal-time"})," &optional ",(0,t.jsx)(n.em,{children:"time-zone"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"\u2192 second, minute, hour, date, month, year, day, daylight-p, zone"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"universal-time"}),"\u2014a ",(0,t.jsx)(n.em,{children:"universal time"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"time-zone"}),"\u2014a ",(0,t.jsx)(n.em,{children:"time zone"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"second"}),", ",(0,t.jsx)(n.em,{children:"minute"}),", ",(0,t.jsx)(n.em,{children:"hour"}),", ",(0,t.jsx)(n.em,{children:"date"}),", ",(0,t.jsx)(n.em,{children:"month"}),", ",(0,t.jsx)(n.em,{children:"year"}),", ",(0,t.jsx)(n.em,{children:"day"}),", ",(0,t.jsx)(n.em,{children:"daylight-p"}),", ",(0,t.jsx)(n.em,{children:"zone"}),"\u2014a ",(0,t.jsx)(n.em,{children:"decoded time"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the ",(0,t.jsx)(n.em,{children:"decoded time"})," represented by the given ",(0,t.jsx)(n.em,{children:"universal time"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"time-zone"})," is not supplied, it defaults to the current time zone adjusted for daylight saving time. If ",(0,t.jsx)(n.em,{children:"time-zone"})," is supplied, daylight saving time information is ignored. The daylight saving time flag is ",(0,t.jsx)(i,{styled:!0,term:"nil",children:(0,t.jsx)("b",{children:"nil"})})," if ",(0,t.jsx)(n.em,{children:"time-zone"})," is supplied."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"\n(decode-universal-time 0 0) \u2192 0, 0, 0, 1, 1, 1900, 0, *false*, 0 \n;; The next two examples assume Eastern Daylight Time. \n(decode-universal-time 2414296800 5) \u2192 0, 0, 1, 4, 7, 1976, 6, *false*, 5 \n(decode-universal-time 2414293200) \u2192 0, 0, 1, 4, 7, 1976, 6, *true*, 5 \n;; This example assumes that the time zone is Eastern Daylight Time \n;; (and that the time zone is constant throughout the example). \n(let\\* ((here (nth 8 (multiple-value-list (get-decoded-time)))) ;Time zone \n\t(recently (get-universal-time)) \n\t(a (nthcdr 7 (multiple-value-list (decode-universal-time recently)))) \n\t(b (nthcdr 7 (multiple-value-list (decode-universal-time recently here))))) \n       (list a b (equal a b))) \u2192 ((T 5) (NIL 5) NIL) \n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"Implementation-dependent"})})," mechanisms for calculating when or if daylight savings time is in effect for any given session."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{styled:!0,term:"encode-universal-time",children:(0,t.jsx)("b",{children:"encode-universal-time"})}),", ",(0,t.jsx)(i,{styled:!0,term:"get-universal-time",children:(0,t.jsx)("b",{children:"get-universal-time"})}),", Section 25.1.4 (Time)"]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const d={title:"decode-universal-time"},l="decode-universal-time",o={id:"chap-25/cf-c-dictionary/decode-universal-time_function",title:"decode-universal-time",description:"Expanded Reference: decode-universal-time",source:"@site/docs/chap-25/cf-c-dictionary/decode-universal-time_function.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/decode-universal-time_function",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/decode-universal-time_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/decode-universal-time_function.md",tags:[],version:"current",frontMatter:{title:"decode-universal-time"},sidebar:"tutorialSidebar",previous:{title:"apropos, apropos-list",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/apropos_apropos-list_function"},next:{title:"describe-object",permalink:"/cl-language-reference/chap-25/cf-c-dictionary/describe-object_standard-generic-function"}},a={},m=[{value:"Expanded Reference: decode-universal-time",id:"expanded-reference-decode-universal-time",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"decode-universal-time",children:"decode-universal-time"}),"\n","\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h2,{id:"expanded-reference-decode-universal-time",children:"Expanded Reference: decode-universal-time"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lisp",children:"(decode-universal-time )\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>c});var t=i(67294);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);