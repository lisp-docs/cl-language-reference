"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[37277],{96513:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var i=r(85893),l=r(11151);function s(e){const n={em:"em",p:"p",strong:"strong",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log"})," ",(0,i.jsx)(n.em,{children:"number"})," &optional ",(0,i.jsx)(n.em,{children:"base \u2192 logarithm"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"number"}),"\u2014a non-zero ",(0,i.jsx)(n.em,{children:"number"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"base"}),"\u2014a ",(0,i.jsx)(n.em,{children:"number"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"logarithm"}),"\u2014a ",(0,i.jsx)(n.em,{children:"number"})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log"})," returns the logarithm of ",(0,i.jsx)(n.em,{children:"number"})," in base ",(0,i.jsx)(n.em,{children:"base"}),". If ",(0,i.jsx)(n.em,{children:"base"})," is not supplied its value is ",(0,i.jsx)(n.em,{children:"e"}),", the base of the natural logarithms."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"log"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"log"})," may return a ",(0,i.jsx)(n.em,{children:"complex"})," when given a ",(0,i.jsx)(n.em,{children:"real"})," negative ",(0,i.jsx)(n.em,{children:"number"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["(log -1.0) ",(0,i.jsx)(n.em,{children:"\u2261"})," (complex 0.0 (float pi 0.0))"]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"base"})," is zero, ",(0,i.jsx)(n.strong,{children:"log"})," returns zero."]}),"\n",(0,i.jsx)(n.p,{children:"The result of (log 8 2) may be either 3 or 3.0, depending on the implementation. An implementation can use floating-point calculations even if an exact integer result is possible."}),"\n",(0,i.jsx)(n.p,{children:"The branch cut for the logarithm function of one argument (natural logarithm) lies along the negative real axis, continuous with quadrant II. The domain excludes the origin."}),"\n",(0,i.jsx)(n.p,{children:"The mathematical definition of a complex logarithm is as follows, whether or not minus zero is supported by the implementation:"}),"\n",(0,i.jsxs)(n.p,{children:["(log ",(0,i.jsx)(n.em,{children:"x"}),") ",(0,i.jsx)(n.em,{children:"\u2261"})," (complex (log (abs ",(0,i.jsx)(n.em,{children:"x"}),")) (phase ",(0,i.jsx)(n.em,{children:"x"}),"))"]}),"\n",(0,i.jsxs)(n.p,{children:["Therefore the range of the one-argument logarithm function is that strip of the complex plane containing numbers with imaginary parts between ",(0,i.jsx)(n.em,{children:"\u2212\u03c0"})," (exclusive) and ",(0,i.jsx)(n.em,{children:"\u03c0"})," (inclusive) if minus zero is not supported, or ",(0,i.jsx)(n.em,{children:"\u2212\u03c0"})," (inclusive) and ",(0,i.jsx)(n.em,{children:"\u03c0"})," (inclusive) if minus zero is supported."]}),"\n",(0,i.jsx)(n.p,{children:"The two-argument logarithm function is defined as"}),"\n",(0,i.jsxs)(n.p,{children:["(log ",(0,i.jsx)(n.em,{children:"base number"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2261"})," (/ (log ",(0,i.jsx)(n.em,{children:"number"}),") (log ",(0,i.jsx)(n.em,{children:"base"}),"))"]}),"\n",(0,i.jsxs)(n.p,{children:["This defines the ",(0,i.jsx)(n.em,{children:"principal values"})," precisely. The range of the two-argument logarithm function is the entire complex plane."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.p,{children:"(log 100 10)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192"})," 2.0"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192"})," 2"]}),"\n",(0,i.jsxs)(n.p,{children:["(log 100.0 10) ",(0,i.jsx)(n.em,{children:"\u2192"})," 2.0"]}),"\n",(0,i.jsx)(n.p,{children:"(log #c(0 1) #c(0 -1))"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"\u2192"})," #C(-1.0 0.0)"]}),"\n",(0,i.jsx)(n.p,{children:"<i><sup>or</sup>\u2192</i> #C(-1 0)"}),"\n",(0,i.jsxs)(n.p,{children:["(log 8.0 2) ",(0,i.jsx)(n.em,{children:"\u2192"})," 3.0"]}),"\n",(0,i.jsxs)(n.p,{children:["(log #c(-16 16) #c(2 2)) ",(0,i.jsx)(n.em,{children:"\u2192"})," 3 or approximately #c(3.0 0.0)"]}),"\n",(0,i.jsx)(n.p,{children:"or approximately 3.0 (unlikely)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsx)(n.p,{children:"The implementation."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"exp"}),", ",(0,i.jsx)(n.strong,{children:"expt"}),", Section 12.1.3.3 (Rule of Float Substitutability)"]})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const c={},t="log",a={id:"chap-12/bc-c-dictionary/log",title:"log",description:"Expanded Reference: log",source:"@site/docs/chap-12/bc-c-dictionary/log.md",sourceDirName:"chap-12/bc-c-dictionary",slug:"/chap-12/bc-c-dictionary/log",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/log",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-12/bc-c-dictionary/log.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lcm",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/lcm"},next:{title:"logand, logandc1, logandc2, logeqv, logior, lognand, lognor, lognot, logorc1, logorc2, logxor",permalink:"/cl-language-reference/docs/chap-12/bc-c-dictionary/logandaalogandc1aalogandc2aalogeqvaalogioraalognandaalognoraalognotaalogorc1aalogorc2aalogxor"}},d={},h=[{value:"Expanded Reference: log",id:"expanded-reference-log",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"log",children:"log"}),"\n","\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-log",children:"Expanded Reference: log"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(log )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var i=r(67294);const l={},s=i.createContext(l);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);