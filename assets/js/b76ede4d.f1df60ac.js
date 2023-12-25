"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[80823],{40090:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=n(85893),l=n(11151);function t(e){const i={em:"em",p:"p",strong:"strong",...(0,l.a)(),...e.components},{ClLinks:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"compile-file"})," ",(0,r.jsx)(n,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," ",(0,r.jsx)(i.em,{children:"input-file"})," &key ",(0,r.jsx)(i.em,{children:"output-file verbose"})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"print external-format"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"\u2192 output-truename, warnings-p, failure-p"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"input-file"}),"\u2014a ",(0,r.jsx)(i.em,{children:"pathname designator"})," . (Default fillers for unspecified components are taken from ",(0,r.jsx)(n,{term:"default-pathname-defaults",children:(0,r.jsx)("b",{children:"*default-pathname-defaults*"})}),".)"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"output-file"}),"\u2014a ",(0,r.jsx)(i.em,{children:"pathname designator"})," . The default is ",(0,r.jsx)(n,{term:"implementation-defined",children:(0,r.jsx)("i",{children:"implementation-defined"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"verbose"}),"\u2014a ",(0,r.jsx)(i.em,{children:"generalized boolean"}),". The default is the ",(0,r.jsx)(n,{term:"value",children:(0,r.jsx)("i",{children:"value"})})," of ",(0,r.jsx)(n,{term:"compile-verbose",children:(0,r.jsx)("b",{children:"*compile-verbose*"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"print"}),"\u2014a ",(0,r.jsx)(i.em,{children:"generalized boolean"}),". The default is the ",(0,r.jsx)(n,{term:"value",children:(0,r.jsx)("i",{children:"value"})})," of ",(0,r.jsx)(i.strong,{children:"*compile-print*"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"external-format"}),"\u2014an ",(0,r.jsx)(i.em,{children:"external file format designator"})," . The default is ",":default","."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"output-truename"}),"\u2014a ",(0,r.jsx)(n,{term:"pathname",children:(0,r.jsx)("i",{children:"pathname"})})," (the ",(0,r.jsx)(n,{term:"truename",children:(0,r.jsx)("b",{children:"truename"})})," of the output ",(0,r.jsx)(n,{term:"file",children:(0,r.jsx)("i",{children:"file"})}),"), or ",(0,r.jsx)(n,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"warnings-p"}),"\u2014a ",(0,r.jsx)(i.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"failure-p"}),"\u2014a ",(0,r.jsx)(i.em,{children:"generalized boolean"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," transforms the contents of the file specified by ",(0,r.jsx)(i.em,{children:"input-file"})," into ",(0,r.jsx)(n,{term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})})," binary data which are placed in the file specified by ",(0,r.jsx)(i.em,{children:"output-file"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(n,{term:"file",children:(0,r.jsx)("i",{children:"file"})})," to which ",(0,r.jsx)(i.em,{children:"input-file"})," refers should be a ",(0,r.jsx)(i.em,{children:"source file"}),". ",(0,r.jsx)(i.em,{children:"output-file"})," can be used to specify an output ",(0,r.jsx)(n,{term:"pathname",children:(0,r.jsx)("i",{children:"pathname"})}),"; the actual ",(0,r.jsx)(n,{term:"pathname",children:(0,r.jsx)("i",{children:"pathname"})})," of the ",(0,r.jsx)(i.em,{children:"compiled file"})," to which ",(0,r.jsx)(i.em,{children:"compiled code"})," will be output is computed as if by calling ",(0,r.jsx)(n,{term:"compile-file-pathname",children:(0,r.jsx)("b",{children:"compile-file-pathname"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["If ",(0,r.jsx)(i.em,{children:"input-file"})," or ",(0,r.jsx)(i.em,{children:"output-file"})," is a ",(0,r.jsx)(i.em,{children:"logical pathname"}),", it is translated into a ",(0,r.jsx)(i.em,{children:"physical pathname"})," as if by calling ",(0,r.jsx)(n,{term:"translate-logical-pathname",children:(0,r.jsx)("b",{children:"translate-logical-pathname"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["If ",(0,r.jsx)(i.em,{children:"verbose"})," is ",(0,r.jsx)(n,{term:"true",children:(0,r.jsx)("i",{children:"true"})}),", ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," prints a message in the form of a comment (",(0,r.jsx)(i.em,{children:"i.e."}),", with a leading ",(0,r.jsx)(n,{term:"semicolon",children:(0,r.jsx)("i",{children:"semicolon"})}),") to ",(0,r.jsx)(i.em,{children:"standard output"})," indicating what ",(0,r.jsx)(n,{term:"file",children:(0,r.jsx)("i",{children:"file"})})," is being ",(0,r.jsx)(i.em,{children:"compiled"})," and other useful information. If ",(0,r.jsx)(i.em,{children:"verbose"})," is ",(0,r.jsx)(n,{term:"false",children:(0,r.jsx)("i",{children:"false"})}),", ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," does not print this information."]}),"\n",(0,r.jsxs)(i.p,{children:["If ",(0,r.jsx)(i.em,{children:"print"})," is ",(0,r.jsx)(n,{term:"true",children:(0,r.jsx)("i",{children:"true"})}),", information about ",(0,r.jsx)(i.em,{children:"top level forms"})," in the file being compiled is printed to ",(0,r.jsx)(i.em,{children:"standard output"}),". Exactly what is printed is ",(0,r.jsx)(n,{term:"implementation-dependent",children:(0,r.jsx)("i",{children:"implementation-dependent"})}),", but nevertheless some information is printed. If ",(0,r.jsx)(i.em,{children:"print"})," is ",(0,r.jsx)(n,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})}),", no information is printed."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"external-format"})," specifies the ",(0,r.jsx)(i.em,{children:"external file format"})," to be used when opening the ",(0,r.jsx)(n,{term:"file",children:(0,r.jsx)("i",{children:"file"})}),"; see the System"]}),"\n",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(n,{term:"open",children:(0,r.jsx)("b",{children:"open"})}),". ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," and ",(0,r.jsx)(n,{term:"load",children:(0,r.jsx)("b",{children:"load"})})," must cooperate in such a way that the resulting ",(0,r.jsx)(i.em,{children:"compiled file"})," can be ",(0,r.jsx)(i.em,{children:"loaded"})," without specifying an ",(0,r.jsx)(i.em,{children:"external file format"})," anew; see the ",(0,r.jsx)(n,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(n,{term:"load",children:(0,r.jsx)("b",{children:"load"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," binds ",(0,r.jsx)(n,{term:"readtable",children:(0,r.jsx)("b",{children:"*readtable*"})})," and ",(0,r.jsx)(n,{term:"package",children:(0,r.jsx)("b",{children:"*package*"})})," to the values they held before processing the file."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile-file-truename",children:(0,r.jsx)("b",{children:"*compile-file-truename*"})})," is bound by ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," to hold the ",(0,r.jsx)(n,{term:"truename",children:(0,r.jsx)("i",{children:"truename"})})," of the ",(0,r.jsx)(n,{term:"pathname",children:(0,r.jsx)("i",{children:"pathname"})})," of the file being compiled."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile-file-pathname",children:(0,r.jsx)("b",{children:"*compile-file-pathname*"})})," is bound by ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})})," to hold a ",(0,r.jsx)(n,{term:"pathname",children:(0,r.jsx)("i",{children:"pathname"})})," denoted by the first argu ment to ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})}),", merged against the defaults; that is, (pathname (merge-pathnames ",(0,r.jsx)(i.em,{children:"input-file"}),"))."]}),"\n",(0,r.jsxs)(i.p,{children:["The compiled ",(0,r.jsx)(n,{term:"function",children:(0,r.jsx)("i",{children:"functions"})})," contained in the ",(0,r.jsx)(i.em,{children:"compiled file"})," become available for use when the ",(0,r.jsx)(i.em,{children:"compiled file"})," is ",(0,r.jsx)(i.em,{children:"loaded"})," into Lisp. Any function definition that is processed by the compiler, including #\u2019(lambda ...) forms and local function definitions made by ",(0,r.jsx)(n,{term:"flet",children:(0,r.jsx)("b",{children:"flet"})}),", ",(0,r.jsx)(n,{term:"labels",children:(0,r.jsx)("b",{children:"labels"})})," and ",(0,r.jsx)(n,{term:"defun",children:(0,r.jsx)("b",{children:"defun"})})," forms, result in an ",(0,r.jsx)(n,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," of ",(0,r.jsx)(n,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"compiled-function",children:(0,r.jsx)("b",{children:"compiled-function"})}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"primary value"})," returned by ",(0,r.jsx)(n,{term:"compile-file",children:(0,r.jsx)("b",{children:"compile-file"})}),", ",(0,r.jsx)(i.em,{children:"output-truename"}),", is the ",(0,r.jsx)(n,{term:"truename",children:(0,r.jsx)("b",{children:"truename"})})," of the output file, or ",(0,r.jsx)(n,{term:"nil",children:(0,r.jsx)("b",{children:"nil"})})," if the file could not be created."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"secondary value"}),", ",(0,r.jsx)(i.em,{children:"warnings-p"}),", is ",(0,r.jsx)(n,{term:"false",children:(0,r.jsx)("i",{children:"false"})})," if no ",(0,r.jsx)(n,{term:"condition",children:(0,r.jsx)("i",{children:"conditions"})})," of ",(0,r.jsx)(n,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"error",children:(0,r.jsx)("b",{children:"error"})})," or ",(0,r.jsx)(n,{term:"warning",children:(0,r.jsx)("b",{children:"warning"})})," were detected by the compiler, and ",(0,r.jsx)(n,{term:"true",children:(0,r.jsx)("i",{children:"true"})})," otherwise."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"tertiary value"}),", ",(0,r.jsx)(i.em,{children:"failure-p"}),", is ",(0,r.jsx)(n,{term:"false",children:(0,r.jsx)("i",{children:"false"})})," if no ",(0,r.jsx)(n,{term:"condition",children:(0,r.jsx)("i",{children:"conditions"})})," of ",(0,r.jsx)(n,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"error",children:(0,r.jsx)("b",{children:"error"})})," or ",(0,r.jsx)(n,{term:"warning",children:(0,r.jsx)("b",{children:"warning"})})," (other than ",(0,r.jsx)(n,{term:"style-warning",children:(0,r.jsx)("b",{children:"style-warning"})}),") were detected by the compiler, and ",(0,r.jsx)(n,{term:"true",children:(0,r.jsx)("i",{children:"true"})})," otherwise."]}),"\n",(0,r.jsxs)(i.p,{children:["For general information about how ",(0,r.jsx)(n,{term:"file",children:(0,r.jsx)("i",{children:"files"})})," are processed by the ",(0,r.jsx)(i.em,{children:"file compiler"})," , see Section 3.2.3 (File Compilation)."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"program",children:(0,r.jsx)("i",{children:"Programs"})})," to be compiled by the ",(0,r.jsx)(i.em,{children:"file compiler"})," must only contain ",(0,r.jsx)(i.em,{children:"externalizable objects"}),"; for details on such ",(0,r.jsx)(n,{term:"object",children:(0,r.jsx)("i",{children:"objects"})}),", see Section 3.2.4 (Literal Objects in Compiled Files). For information on how to extend the set of ",(0,r.jsx)(i.em,{children:"externalizable objects"}),", see the ",(0,r.jsx)(n,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(n,{term:"make-load-form",children:(0,r.jsx)("b",{children:"make-load-form"})})," and Section 3.2.4.4 (Additional Constraints on Externalizable Objects)."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"*error-output*"}),", ",(0,r.jsx)(i.strong,{children:"*standard-output*"}),", ",(0,r.jsx)(n,{term:"compile-verbose",children:(0,r.jsx)("b",{children:"*compile-verbose*"})}),", ",(0,r.jsx)(i.strong,{children:"*compile-print*"})]}),"\n",(0,r.jsx)(i.p,{children:"The computer\u2019s file system."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsx)(i.p,{children:"For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Situations in the Compiler)."}),"\n",(0,r.jsxs)(i.p,{children:["An error of ",(0,r.jsx)(n,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"file-error",children:(0,r.jsx)("b",{children:"file-error"})})," might be signaled if (wild-pathname-p ",(0,r.jsx)(i.em,{children:"input-file"}),") returns true."]}),"\n",(0,r.jsxs)(i.p,{children:["If either the attempt to open the ",(0,r.jsx)(i.em,{children:"source file"})," for input or the attempt to open the ",(0,r.jsx)(i.em,{children:"compiled file"})," for output fails, an error of ",(0,r.jsx)(n,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(n,{term:"file-error",children:(0,r.jsx)("b",{children:"file-error"})})," is signaled."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(n,{term:"compile",children:(0,r.jsx)("b",{children:"compile"})}),", ",(0,r.jsx)(n,{term:"declare",children:(0,r.jsx)("b",{children:"declare"})}),", ",(0,r.jsx)(n,{term:"eval-when",children:(0,r.jsx)("b",{children:"eval-when"})}),", ",(0,r.jsx)(n,{term:"pathname",children:(0,r.jsx)("b",{children:"pathname"})}),", ",(0,r.jsx)(n,{term:"logical-pathname",children:(0,r.jsx)("b",{children:"logical-pathname"})}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]})]})}function c(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const s={title:"compile-file"},d="compile-file",o={id:"chap-24/ce-c-dictionary/compile-file_function",title:"compile-file",description:"Expanded Reference: compile-file",source:"@site/docs/chap-24/ce-c-dictionary/compile-file_function.md",sourceDirName:"chap-24/ce-c-dictionary",slug:"/chap-24/ce-c-dictionary/compile-file_function",permalink:"/cl-language-reference/chap-24/ce-c-dictionary/compile-file_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-24/ce-c-dictionary/compile-file_function.md",tags:[],version:"current",frontMatter:{title:"compile-file"},sidebar:"tutorialSidebar",previous:{title:"compile-file-truename",permalink:"/cl-language-reference/chap-24/ce-c-dictionary/compile-file-truename_variable"},next:{title:"compile-verbose",permalink:"/cl-language-reference/chap-24/ce-c-dictionary/compile-verbose_variable"}},h={},a=[{value:"Expanded Reference: compile-file",id:"expanded-reference-compile-file",level:2}];function m(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"compile-file",children:"compile-file"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(i.h2,{id:"expanded-reference-compile-file",children:"Expanded Reference: compile-file"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-lisp",children:"(compile-file )\n"})})]})}function x(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>c});var r=n(67294);const l={},t=r.createContext(l);function c(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);