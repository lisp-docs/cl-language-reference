"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[92263],{19580:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=r(85893),t=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remprop"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remprop"})," ",(0,s.jsx)(n.em,{children:"symbol indicator \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"symbol"}),"\u2014a ",(0,s.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"indicator"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remprop"})," removes from the ",(0,s.jsx)(n.em,{children:"property list"})," ",(0,s.jsx)("sub",{children:"2"})," of ",(0,s.jsx)(n.em,{children:"symbol"})," a ",(0,s.jsx)(n.em,{children:"property"}),(0,s.jsx)("sub",{children:"1"})," with a ",(0,s.jsx)(n.em,{children:"property indicator identical"})," to ",(0,s.jsx)(n.em,{children:"indicator"}),". If there are multiple ",(0,s.jsx)(n.em,{children:"properties"}),(0,s.jsx)("sub",{children:"1"})," with the ",(0,s.jsx)(n.em,{children:"identical"})," key, ",(0,s.jsx)(n.strong,{children:"remprop"})," only removes the first such ",(0,s.jsx)(n.em,{children:"property"}),". ",(0,s.jsx)(n.strong,{children:"remprop"})," returns ",(0,s.jsx)(n.em,{children:"false"})," if no such ",(0,s.jsx)(n.em,{children:"property"})," was found, or ",(0,s.jsx)(n.em,{children:"true"})," if a property was found."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"property indicator"})," and the corresponding ",(0,s.jsx)(n.em,{children:"property value"})," are removed in an undefined order by destructively splicing the property list. The permissible side-effects correspond to those permitted for ",(0,s.jsx)(n.strong,{children:"remf"}),", such that:"]}),"\n",(0,s.jsxs)(n.p,{children:["(remprop ",(0,s.jsx)(n.em,{children:"x y"}),") ",(0,s.jsx)(n.em,{children:"\u2261"})," (remf (symbol-plist ",(0,s.jsx)(n.em,{children:"x"}),") ",(0,s.jsx)(n.em,{children:"y"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'(setq test (make-symbol "PSEUDO-PI")) \u2192 #:PSEUDO-PI \n(symbol-plist test) \u2192 () \n(setf (get test \u2019constant) t) \u2192 T \n(setf (get test \u2019approximation) 3.14) \u2192 3.14 \n(setf (get test \u2019error-range) \u2019noticeable) \u2192 NOTICEABLE \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE APPROXIMATION 3.14 CONSTANT T) \n(setf (get test \u2019approximation) nil) \u2192 NIL \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE APPROXIMATION NIL CONSTANT T) \n(get test \u2019approximation) \u2192 NIL \n\n(remprop test \u2019approximation) \u2192 true \n(get test \u2019approximation) \u2192 NIL \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE CONSTANT T) \n(remprop test \u2019approximation) \u2192 NIL \n(symbol-plist test) \n\u2192 (ERROR-RANGE NOTICEABLE CONSTANT T) \n(remprop test \u2019error-range) \u2192 true \n(setf (get test \u2019approximation) 3) \u2192 3 \n(symbol-plist test) \n\u2192 (APPROXIMATION 3 CONSTANT T) \n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"property list"})," of ",(0,s.jsx)(n.em,{children:"symbol"})," is modified."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["Should signal an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"type-error"})," if ",(0,s.jsx)(n.em,{children:"symbol"})," is not a ",(0,s.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remf"}),", ",(0,s.jsx)(n.strong,{children:"symbol-plist"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Numbers"})," and ",(0,s.jsx)(n.em,{children:"characters"})," are not recommended for use as ",(0,s.jsx)(n.em,{children:"indicators"})," in portable code since ",(0,s.jsx)(n.strong,{children:"remprop"})," tests with ",(0,s.jsx)(n.strong,{children:"eq"})," rather than ",(0,s.jsx)(n.strong,{children:"eql"}),", and consequently the effect of using such ",(0,s.jsx)(n.em,{children:"indicators"})," is ",(0,s.jsx)(n.em,{children:"implementation-dependent"}),". Of course, if you\u2019ve gotten as far as needing to remove such a ",(0,s.jsx)(n.em,{children:"property"}),", you don\u2019t have much choice\u2014the time to have been thinking about this was when you used ",(0,s.jsx)(n.strong,{children:"setf"})," of ",(0,s.jsx)(n.strong,{children:"get"})," to establish the ",(0,s.jsx)(n.em,{children:"property"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const c={},l="remprop",d={id:"chap-10/ba-c-dictionary/remprop",title:"remprop",description:"Expanded Reference: remprop",source:"@site/docs/chap-10/ba-c-dictionary/remprop.md",sourceDirName:"chap-10/ba-c-dictionary",slug:"/chap-10/ba-c-dictionary/remprop",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/remprop",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-10/ba-c-dictionary/remprop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"makunbound",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/makunbound"},next:{title:"set",permalink:"/cl-language-reference/docs/chap-10/ba-c-dictionary/set"}},p={},a=[{value:"Expanded Reference: remprop",id:"expanded-reference-remprop",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"remprop",children:"remprop"}),"\n","\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-remprop",children:"Expanded Reference: remprop"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(remprop )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var s=r(67294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);