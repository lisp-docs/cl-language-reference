"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[67972],{48766:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"rename-file"})," ",(0,i.jsx)(r,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"rename-file",children:(0,i.jsx)("b",{children:"rename-file"})})," ",(0,i.jsx)(n.em,{children:"filespec new-name \u2192 defaulted-new-name, old-truename, new-truename"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"filespec"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"new-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," other than a ",(0,i.jsx)(r,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"defaulted-new-name"}),"\u2014a ",(0,i.jsx)(r,{styled:!0,term:"pathname",children:(0,i.jsx)("i",{children:"pathname"})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"old-truename"}),"\u2014a ",(0,i.jsx)(n.em,{children:"physical pathname"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"new-truename"}),"\u2014a ",(0,i.jsx)(n.em,{children:"physical pathname"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"rename-file",children:(0,i.jsx)("b",{children:"rename-file"})})," modifies the file system in such a way that the file indicated by ",(0,i.jsx)(n.em,{children:"filespec"})," is renamed to ",(0,i.jsx)(n.em,{children:"defaulted-new-name"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It is an error to specify a filename containing a ",(0,i.jsx)(r,{styled:!0,term:"wild",children:(0,i.jsx)("i",{children:"wild"})})," component, for ",(0,i.jsx)(n.em,{children:"filespec"})," to contain a ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," component where the file system does not permit a ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," component, or for the result of defaulting missing components of ",(0,i.jsx)(n.em,{children:"new-name"})," from ",(0,i.jsx)(n.em,{children:"filespec"})," to contain a ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," component where the file system does not permit a ",(0,i.jsx)(r,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," component."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"new-name"})," is a ",(0,i.jsx)(n.em,{children:"logical pathname"}),", ",(0,i.jsx)(r,{styled:!0,term:"rename-file",children:(0,i.jsx)("b",{children:"rename-file"})})," returns a ",(0,i.jsx)(n.em,{children:"logical pathname"})," as its ",(0,i.jsx)(n.em,{children:"primary value"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"rename-file",children:(0,i.jsx)("b",{children:"rename-file"})})," returns three values if successful. The ",(0,i.jsx)(n.em,{children:"primary value"}),", ",(0,i.jsx)(n.em,{children:"defaulted-new-name"}),", is the resulting name which is composed of ",(0,i.jsx)(n.em,{children:"new-name"})," with any missing components filled in by performing a ",(0,i.jsx)(r,{styled:!0,term:"merge-pathnames",children:(0,i.jsx)("b",{children:"merge-pathnames"})})," operation using ",(0,i.jsx)(n.em,{children:"filespec"})," as the defaults. The ",(0,i.jsx)(n.em,{children:"secondary value"}),", ",(0,i.jsx)(n.em,{children:"old-truename"}),", is the ",(0,i.jsx)(r,{styled:!0,term:"truename",children:(0,i.jsx)("i",{children:"truename"})})," of the ",(0,i.jsx)(r,{styled:!0,term:"file",children:(0,i.jsx)("i",{children:"file"})})," before it was renamed. The ",(0,i.jsx)(n.em,{children:"tertiary value"}),", ",(0,i.jsx)(n.em,{children:"new-truename"}),", is the ",(0,i.jsx)(r,{styled:!0,term:"truename",children:(0,i.jsx)("i",{children:"truename"})})," of the ",(0,i.jsx)(r,{styled:!0,term:"file",children:(0,i.jsx)("i",{children:"file"})})," after it was renamed."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"filespec designator"})," is an open ",(0,i.jsx)(r,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})}),", then the ",(0,i.jsx)(r,{styled:!0,term:"stream",children:(0,i.jsx)("i",{children:"stream"})})," itself and the file associated with it are affected (if the ",(0,i.jsx)(n.em,{children:"file system"})," permits)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n;; An example involving logical pathnames. \n(with-open-file (stream "sys:chemistry;lead.text" \n\t\t\t:direction :output :if-exists :error) \n  (princ "eureka" stream) \n  (values (pathname stream) (truename stream))) \n\u2192 #P"SYS:CHEMISTRY;LEAD.TEXT.NEWEST", #P"Q:>sys>chem>lead.text.1" \n(rename-file "sys:chemistry;lead.text" "gold.text") \n\u2192 #P"SYS:CHEMISTRY;GOLD.TEXT.NEWEST", \n#P"Q:>sys>chem>lead.text.1", \n#P"Q:>sys>chem>gold.text.1" \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["If the renaming operation is not successful, an error of ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{styled:!0,term:"file-error",children:(0,i.jsx)("b",{children:"file-error"})})," is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(r,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{styled:!0,term:"file-error",children:(0,i.jsx)("b",{children:"file-error"})})," might be signaled if ",(0,i.jsx)(n.em,{children:"filespec"})," is ",(0,i.jsx)(r,{styled:!0,term:"wild",children:(0,i.jsx)("i",{children:"wild"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{styled:!0,term:"truename",children:(0,i.jsx)("b",{children:"truename"})}),", ",(0,i.jsx)(r,{styled:!0,term:"pathname",children:(0,i.jsx)("b",{children:"pathname"})}),", ",(0,i.jsx)(r,{styled:!0,term:"logical-pathname",children:(0,i.jsx)("b",{children:"logical-pathname"})}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const c={title:"rename-file"},a="rename-file",d={id:"chap-20/ca-c-dictionary/rename-file_function",title:"rename-file",description:"Expanded Reference: rename-file",source:"@site/docs/chap-20/ca-c-dictionary/rename-file_function.md",sourceDirName:"chap-20/ca-c-dictionary",slug:"/chap-20/ca-c-dictionary/rename-file_function",permalink:"/cl-language-reference/docs/chap-20/ca-c-dictionary/rename-file_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-20/ca-c-dictionary/rename-file_function.md",tags:[],version:"current",frontMatter:{title:"rename-file"},sidebar:"tutorialSidebar",previous:{title:"probe-file",permalink:"/cl-language-reference/docs/chap-20/ca-c-dictionary/probe-file_function"},next:{title:"truename",permalink:"/cl-language-reference/docs/chap-20/ca-c-dictionary/truename_function"}},m={},h=[{value:"Expanded Reference: rename-file",id:"expanded-reference-rename-file",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rename-file",children:"rename-file"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-rename-file",children:"Expanded Reference: rename-file"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(rename-file )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var i=r(67294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);