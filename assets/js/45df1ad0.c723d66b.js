"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[28511],{58150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var r=t(85893),o=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"go"})," ",(0,r.jsx)(n.em,{children:"Special Operator"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"go"})," ",(0,r.jsx)(n.em,{children:"tag \u2192"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tag"}),"\u2014a ",(0,r.jsx)(n.em,{children:"go tag"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"go"})," transfers control to the point in the body of an enclosing ",(0,r.jsx)(n.strong,{children:"tagbody"})," form labeled by a tag ",(0,r.jsx)(n.strong,{children:"eql"})," to ",(0,r.jsx)(n.em,{children:"tag"}),". If there is no such ",(0,r.jsx)(n.em,{children:"tag"})," in the body, the bodies of lexically containing ",(0,r.jsx)(n.strong,{children:"tagbody"})," ",(0,r.jsx)(n.em,{children:"forms"})," (if any) are examined as well. If several tags are ",(0,r.jsx)(n.strong,{children:"eql"})," to ",(0,r.jsx)(n.em,{children:"tag"}),", control is transferred to whichever matching ",(0,r.jsx)(n.em,{children:"tag"})," is contained in the innermost ",(0,r.jsx)(n.strong,{children:"tagbody"})," form that contains the ",(0,r.jsx)(n.strong,{children:"go"}),". The consequences are undefined if there is no matching ",(0,r.jsx)(n.em,{children:"tag"})," lexically visible to the point of the ",(0,r.jsx)(n.strong,{children:"go"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The transfer of control initiated by ",(0,r.jsx)(n.strong,{children:"go"})," is performed as described in Section 5.2 (Transfer of Control to an Exit Point)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(tagbody \n   (setq val 2) \n   (go lp) \n   (incf val 3) \n lp (incf val 4)) \u2192 NIL \n\nval \u2192 6 \nThe following is in error because there is a normal exit of the **tagbody** before the **go** is executed. \n(let ((a nil)) \n  (tagbody t (setq a #\u2019(lambda () (go t)))) \n  (funcall a)) \nThe following is in error because the **tagbody** is passed over before the **go** *form* is executed. \n(funcall (block nil \n\t   (tagbody a (return #\u2019(lambda () (go a)))))) \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"tagbody"})})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},a="go",d={id:"chap-5/f-d-dictionary/go",title:"go",description:"Expanded Reference: go",source:"@site/docs/chap-5/f-d-dictionary/go.md",sourceDirName:"chap-5/f-d-dictionary",slug:"/chap-5/f-d-dictionary/go",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/go",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-5/f-d-dictionary/go.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get-setf-expansion",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/getsetfexpansion"},next:{title:"identity",permalink:"/cl-language-reference/docs/chap-5/f-d-dictionary/identity"}},l={},g=[{value:"Expanded Reference: go",id:"expanded-reference-go",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"go",children:"go"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-go",children:"Expanded Reference: go"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(go )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);