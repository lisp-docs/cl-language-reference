 



A <GlossaryTerm styled={true} term={"boa lambda list"}><i>boa lambda list</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> that is syntactically like an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>, but that is processed in “**b**y **o**rder of **a**rgument” style. 



A <GlossaryTerm styled={true} term={"boa lambda list"}><i>boa lambda list</i></GlossaryTerm> is used only in a <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, when explicitly specifying the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of a constructor <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (sometimes called a “boa constructor”). 



The **&amp;optional**, **&amp;rest**, **&amp;aux**, **&amp;key**, and **&amp;allow-other-keys** <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> are recognized in a <GlossaryTerm styled={true} term={"boa lambda list"}><i>boa lambda list</i></GlossaryTerm>. The way these <GlossaryTerm styled={true} term={"lambda list keyword"}><i>lambda list keywords</i></GlossaryTerm> differ from their use in an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm> follows. 



Consider this example, which describes how **destruct** processes its :constructor option. Evaluation and 









"""text
(:constructor create-foo
  (a &optional b (c ’sea) &rest d &aux e (f ’eff)))
"""



This defines create-foo to be a constructor of one or more arguments. The first argument is used to initialize the a slot. The second argument is used to initialize the b slot. If there isn’t any second argument, then the default value given in the body of the <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> (if given) is used instead. The third argument is used to initialize the c slot. If there isn’t any third argument, then the symbol 



sea is used instead. Any arguments following the third argument are collected into a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> and used to initialize the d slot. If there are three or fewer arguments, then <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is placed in the d slot. The e slot is not initialized; its initial value is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. Finally, the f slot is initialized to contain the symbol eff. **&amp;key** and **&amp;allow-other-keys** arguments default in a manner similar to that of **&amp;optional** arguments: if no default is supplied in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> then the default value given in the body of the <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink> (if given) is used instead. For example: 



"""text
(defstruct (foo (:constructor CREATE-FOO (a &optional b (c ’sea)
                                        &key (d 2)
                                        &aux e (f ’eff))))
  (a 1) (b 2) (c 3) (d 4) (e 5) (f 6))
"""



"""text
(create-foo 10) → #S(FOO A 10 B 2 C SEA D 2 E *implemention-dependent* F EFF)
"""

"""text
(create-foo 10 ’bee ’see :d ’dee)
→ #S(FOO A 10 B BEE C SEE D DEE E *implemention-dependent* F EFF)
"""



If keyword arguments of the form `((*key var*) [default [svar ]])` are specified, the *slot name* is matched with *var* (not <GlossaryTerm term={"key"}><i>key</i></GlossaryTerm>).



The actions taken in the b and e cases were carefully chosen to allow the user to specify all possible behaviors. The **&amp;aux** variables can be used to completely override the default initializations given in the body. 



If no default value is supplied for an <GlossaryTerm styled={true} term={"aux variable"}><i>aux variable</i></GlossaryTerm> variable, the consequences are undefined if an attempt is later made to read the corresponding <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm>’s value before a value is explicitly assigned. If such a <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> has a :type option specified, this suppressed initialization does not imply a type mismatch situation; the declared type is only required to apply when the <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> is finally assigned. 



With this definition, the following can be written:

"""text
(create-foo 1 2)
"""

instead of

"""text
(make-foo :a 1 :b 2)
"""



and create-foo provides defaulting different from that of make-foo. 



Additional arguments that do not correspond to slot names but are merely present to supply values used in subsequent initialization computations are allowed. For example, in the definition 



"""text
(defstruct (frob (:constructor create-frob
  (a &key (b 3 have-b) (c-token ’c)
     (c (list c-token (if have-b 7 2))))))
  a b c)
"""



the c-token argument is used merely to supply a value used in the initialization of the c slot. The <GlossaryTerm styled={true} term={"supplied-p parameter"}><i>supplied-p parameters</i></GlossaryTerm> associated with <GlossaryTerm styled={true} term={"optional parameter"}><i>optional parameters</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"keyword parameter"}><i>keyword parameters</i></GlossaryTerm> might also be used this way. 



