 



During the *dynamic extent* of the *signaling* process for a particular *condition object<ClLinks styled={true} term={"t"}><i>, </i></ClLinks>*signaling** the same *condition object* again is permitted if and only if the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> represented in both cases are the same. 



For example, a <ClLinks styled={true} term={"handler"}><i>handler</i></ClLinks> might legitimately <ClLinks styled={true} term={"signal"}><i>signal</i></ClLinks> the *condition object* that is its <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> in order to allow outer <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> first opportunity to <ClLinks styled={true} term={"handle"}><i>handle</i></ClLinks> the condition. (Such a <ClLinks styled={true} term={"handler"}><i>handlers</i></ClLinks> is sometimes called a “default handler.”) This action is permitted because the <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks> which the second *signaling* process is addressing is really the same <ClLinks styled={true} term={"situation"}><i>situation</i></ClLinks>. 



On the other hand, in an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> that implemented asynchronous keyboard events by interrupting the user process with a call to <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks>, it would not be permissible for two distinct asynchronous keyboard events to *signal identical condition objects* at the same time for different situations. 



