 



During the *dynamic extent* of the *signaling* process for a particular *condition object<GlossaryTerm styled={true} term={"t"}><i>, </i></GlossaryTerm>*signaling** the same *condition object* again is permitted if and only if the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> represented in both cases are the same. 



For example, a <GlossaryTerm styled={true} term={"handler"}><i>handler</i></GlossaryTerm> might legitimately <GlossaryTerm styled={true} term={"signal"}><i>signal</i></GlossaryTerm> the *condition object* that is its <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> in order to allow outer <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> first opportunity to <GlossaryTerm styled={true} term={"handle"}><i>handle</i></GlossaryTerm> the condition. (Such a <GlossaryTerm styled={true} term={"handler"}><i>handlers</i></GlossaryTerm> is sometimes called a “default handler.”) This action is permitted because the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> which the second *signaling* process is addressing is really the same <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm>. 



On the other hand, in an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> that implemented asynchronous keyboard events by interrupting the user process with a call to <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, it would not be permissible for two distinct asynchronous keyboard events to *signal identical condition objects* at the same time for different situations. 



