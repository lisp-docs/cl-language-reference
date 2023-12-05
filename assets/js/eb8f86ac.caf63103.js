"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[46257],{11737:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>h,toc:()=>o});var s=r(85893),i=r(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This section describes the algorithm used by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," to parse ",(0,s.jsx)(n.em,{children:"objects"})," from an ",(0,s.jsx)(n.em,{children:"input character stream"}),", including how the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," processes ",(0,s.jsx)(n.em,{children:"macro characters"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When dealing with ",(0,s.jsx)(n.em,{children:"tokens"}),", the reader\u2019s basic function is to distinguish representations of ",(0,s.jsx)(n.em,{children:"symbols"})," from those of ",(0,s.jsx)(n.em,{children:"numbers"}),". When a ",(0,s.jsx)(n.em,{children:"token"})," is accumulated, it is assumed to represent a ",(0,s.jsx)(n.em,{children:"number"})," if it satisfies the syntax for numbers listed in Figure 2\u20139. If it does not represent a ",(0,s.jsx)(n.em,{children:"number"})," , it is then assumed to be a ",(0,s.jsx)(n.em,{children:"potential number"})," if it satisfies the rules governing the syntax for a ",(0,s.jsx)(n.em,{children:"potential number"})," . If a valid ",(0,s.jsx)(n.em,{children:"token"})," is neither a representation of a ",(0,s.jsx)(n.em,{children:"number"})," nor a ",(0,s.jsx)(n.em,{children:"potential number"})," , it represents a ",(0,s.jsx)(n.em,{children:"symbol"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The algorithm performed by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," is as follows:"]}),"\n",(0,s.jsxs)(n.p,{children:["1. If at end of file, end-of-file processing is performed as specified in ",(0,s.jsx)(n.strong,{children:"read"}),". Otherwise, one ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"x"}),", is read from the ",(0,s.jsx)(n.em,{children:"input stream"}),", and dispatched according to the ",(0,s.jsx)(n.em,{children:"syntax type"})," of ",(0,s.jsx)(n.em,{children:"x"})," to one of steps 2 to 7."]}),"\n",(0,s.jsxs)(n.p,{children:["2. If ",(0,s.jsx)(n.em,{children:"x"})," is an ",(0,s.jsx)(n.em,{children:"invalid character"})," , an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"reader-error"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:["3. If ",(0,s.jsx)(n.em,{children:"x"})," is a ",(0,s.jsx)(n.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(n.em,{children:"character"})," , then it is discarded and step 1 is re-entered."]}),"\n",(0,s.jsxs)(n.p,{children:["4. If ",(0,s.jsx)(n.em,{children:"x"})," is a ",(0,s.jsx)(n.em,{children:"terminating"})," or ",(0,s.jsx)(n.em,{children:"non-terminating macro character"})," then its associated ",(0,s.jsx)(n.em,{children:"reader macro function"})," is called with two ",(0,s.jsx)(n.em,{children:"arguments"}),", the ",(0,s.jsx)(n.em,{children:"input stream"})," and ",(0,s.jsx)(n.em,{children:"x"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"reader macro function"})," may read ",(0,s.jsx)(n.em,{children:"characters"})," from the ",(0,s.jsx)(n.em,{children:"input stream"}),"; if it does, it will see those ",(0,s.jsx)(n.em,{children:"characters"})," following the ",(0,s.jsx)(n.em,{children:"macro character"})," . The ",(0,s.jsx)(n.em,{children:"Lisp reader"})," may be invoked recursively from the ",(0,s.jsx)(n.em,{children:"reader macro function"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"reader macro function"})," must not have any side effects other than on the ",(0,s.jsx)(n.em,{children:"input stream"}),"; because of backtracking and restarting of the ",(0,s.jsx)(n.strong,{children:"read"})," operation, front ends to the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," (",(0,s.jsx)(n.em,{children:"e.g."}),", \u201ceditors\u201d and \u201crubout handlers\u201d) may cause the ",(0,s.jsx)(n.em,{children:"reader macro function"})," to be called repeatedly during the reading of a single ",(0,s.jsx)(n.em,{children:"expression"})," in which ",(0,s.jsx)(n.em,{children:"x"})," only appears once."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"reader macro function"})," may return zero values or one value. If one value is returned, then that value is returned as the result of the read operation; the algorithm is done. If zero values are returned, then step 1 is re-entered."]}),"\n",(0,s.jsxs)(n.p,{children:["5. If ",(0,s.jsx)(n.em,{children:"x"})," is a ",(0,s.jsx)(n.em,{children:"single escape character"})," then the next ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"y"}),", is read, or an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled if at the end of file. ",(0,s.jsx)(n.em,{children:"y"})," is treated as if it is a ",(0,s.jsx)(n.em,{children:"constituent"})," whose only ",(0,s.jsx)(n.em,{children:"constituent trait"})," is ",(0,s.jsx)(n.em,{children:"alphabetic"}),(0,s.jsx)("sub",{children:"2"}),". ",(0,s.jsx)(n.em,{children:"y"})," is used to begin a ",(0,s.jsx)(n.em,{children:"token"}),", and step 8 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:["6. If ",(0,s.jsx)(n.em,{children:"x"})," is a ",(0,s.jsx)(n.em,{children:"multiple escape character"})," then a ",(0,s.jsx)(n.em,{children:"token"})," (initially containing no ",(0,s.jsx)(n.em,{children:"characters"}),") is begun and step 9 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:["7. If ",(0,s.jsx)(n.em,{children:"x"})," is a ",(0,s.jsx)(n.em,{children:"constituent character"})," , then it begins a ",(0,s.jsx)(n.em,{children:"token"}),". After the ",(0,s.jsx)(n.em,{children:"token"})," is read in, it will be interpreted either as a Lisp ",(0,s.jsx)(n.em,{children:"object"})," or as being of invalid syntax. If the ",(0,s.jsx)(n.em,{children:"token"})," represents an"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"object"}),", that ",(0,s.jsx)(n.em,{children:"object"})," is returned as the result of the read operation. If the ",(0,s.jsx)(n.em,{children:"token"})," is of invalid syntax, an error is signaled. If ",(0,s.jsx)(n.em,{children:"x"})," is a ",(0,s.jsx)(n.em,{children:"character"})," with ",(0,s.jsx)(n.em,{children:"case"}),", it might be replaced with the corresponding ",(0,s.jsx)(n.em,{children:"character"})," of the opposite ",(0,s.jsx)(n.em,{children:"case"}),", depending on the ",(0,s.jsx)(n.em,{children:"readtable case"})," of the ",(0,s.jsx)(n.em,{children:"current readtable"}),", as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). ",(0,s.jsx)(n.em,{children:"X"})," is used to begin a ",(0,s.jsx)(n.em,{children:"token"}),", and step 8 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:["8. At this point a ",(0,s.jsx)(n.em,{children:"token"})," is being accumulated, and an even number of ",(0,s.jsx)(n.em,{children:"multiple escape characters"})," have been encountered. If at end of file, step 10 is entered. Otherwise, a ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"y"}),", is read, and one of the following actions is performed according to its ",(0,s.jsx)(n.em,{children:"syntax type"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"constituent"})," or ",(0,s.jsx)(n.em,{children:"non-terminating macro character"})," :"]}),"\n",(0,s.jsxs)(n.p,{children:["\u2013 If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"character"})," with ",(0,s.jsx)(n.em,{children:"case"}),", it might be replaced with the corresponding"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"character"})," of the opposite ",(0,s.jsx)(n.em,{children:"case"}),", depending on the ",(0,s.jsx)(n.em,{children:"readtable case"})," of the ",(0,s.jsx)(n.em,{children:"current"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"readtable"}),", as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp"]}),"\n",(0,s.jsx)(n.p,{children:"Reader)."}),"\n",(0,s.jsxs)(n.p,{children:["\u2013 ",(0,s.jsx)(n.em,{children:"Y"})," is appended to the ",(0,s.jsx)(n.em,{children:"token"})," being built."]}),"\n",(0,s.jsx)(n.p,{children:"\u2013 Step 8 is repeated."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"single escape character"})," , then the next ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"z"}),", is read, or an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled if at end of file. ",(0,s.jsx)(n.em,{children:"Z"})," is treated as if it is a ",(0,s.jsx)(n.em,{children:"constituent"})," whose only ",(0,s.jsx)(n.em,{children:"constituent trait"})," is ",(0,s.jsx)(n.em,{children:"alphabetic"}),(0,s.jsx)("sub",{children:"2"}),". ",(0,s.jsx)(n.em,{children:"Z"})," is appended to the ",(0,s.jsx)(n.em,{children:"token"})," being built, and step 8 is repeated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"multiple escape character"})," , then step 9 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is an ",(0,s.jsx)(n.em,{children:"invalid character"})," , an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"reader-error"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"terminating macro character"})," , then it terminates the ",(0,s.jsx)(n.em,{children:"token"}),". First the ",(0,s.jsx)(n.em,{children:"character y"})," is unread (see ",(0,s.jsx)(n.strong,{children:"unread-char"}),"), and then step 10 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(n.em,{children:"character"})," , then it terminates the ",(0,s.jsx)(n.em,{children:"token"}),". First the ",(0,s.jsx)(n.em,{children:"character y"})," is unread if appropriate (see ",(0,s.jsx)(n.strong,{children:"read-preserving-whitespace"}),"), and then step 10 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:["9. At this point a ",(0,s.jsx)(n.em,{children:"token"})," is being accumulated, and an odd number of ",(0,s.jsx)(n.em,{children:"multiple escape characters"})," have been encountered. If at end of file, an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled. Otherwise, a ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"y"}),", is read, and one of the following actions is performed according to its ",(0,s.jsx)(n.em,{children:"syntax type"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"constituent"}),", macro, or ",(0,s.jsx)(n.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"y"})," is treated as a ",(0,s.jsx)(n.em,{children:"constituent"})," whose only ",(0,s.jsx)(n.em,{children:"constituent trait"})," is ",(0,s.jsx)(n.em,{children:"alphabetic"}),(0,s.jsx)("sub",{children:"2"}),". ",(0,s.jsx)(n.em,{children:"Y"})," is appended to the ",(0,s.jsx)(n.em,{children:"token"})," being built, and step 9 is repeated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"single escape character"})," , then the next ",(0,s.jsx)(n.em,{children:"character"})," , ",(0,s.jsx)(n.em,{children:"z"}),", is read, or an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled if at end of file. ",(0,s.jsx)(n.em,{children:"Z"})," is treated as a ",(0,s.jsx)(n.em,{children:"constituent"})," whose only ",(0,s.jsx)(n.em,{children:"constituent trait"})," is ",(0,s.jsx)(n.em,{children:"alphabetic"}),(0,s.jsx)("sub",{children:"2"}),". ",(0,s.jsx)(n.em,{children:"Z"})," is appended to the ",(0,s.jsx)(n.em,{children:"token"})," being built, and step 9 is repeated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is a ",(0,s.jsx)(n.em,{children:"multiple escape character"})," , then step 8 is entered."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2022"})," If ",(0,s.jsx)(n.em,{children:"y"})," is an ",(0,s.jsx)(n.em,{children:"invalid character"})," , an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"reader-error"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:["10. An entire ",(0,s.jsx)(n.em,{children:"token"})," has been accumulated. The ",(0,s.jsx)(n.em,{children:"object"})," represented by the ",(0,s.jsx)(n.em,{children:"token"})," is returned as the result of the read operation, or an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"reader-error"})," is signaled if the ",(0,s.jsx)(n.em,{children:"token"})," is not of valid syntax."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const a={title:"2.2 Reader Algorithm"},d="2.2 Reader Algorithm",h={id:"chap-2/c-c-reader-algorithm",title:"2.2 Reader Algorithm",description:"",source:"@site/docs/chap-2/c-c-reader-algorithm.md",sourceDirName:"chap-2",slug:"/chap-2/c-c-reader-algorithm",permalink:"/cl-language-reference/docs/chap-2/c-c-reader-algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-2/c-c-reader-algorithm.md",tags:[],version:"current",frontMatter:{title:"2.2 Reader Algorithm"},sidebar:"tutorialSidebar",previous:{title:"2.1 Character Syntax",permalink:"/cl-language-reference/docs/chap-2/c-b-character-syntax"},next:{title:"2.3 Interpretation of Tokens",permalink:"/cl-language-reference/docs/chap-2/c-d-interpretation-of-tokens"}},l={},o=[];function m(e){const n={h1:"h1",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"22-reader-algorithm",children:"2.2 Reader Algorithm"}),"\n","\n","\n",(0,s.jsx)(c,{})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var s=r(67294);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);