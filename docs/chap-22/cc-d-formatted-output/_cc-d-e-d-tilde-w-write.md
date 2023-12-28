 



An argument, any <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, is printed obeying every printer control variable (as by <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>). In addition, &#126;W interacts correctly with depth abbreviation, by not resetting the depth counter to zero. &#126;W does not accept parameters. If given the <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> modifier, &#126;W binds <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. If given the <GlossaryTerm styled={true} term={"at-sign"}><i>at-sign</i></GlossaryTerm> modifier, &#126;W binds **\*print-level\*** and <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



&#126;W provides automatic support for the detection of circularity and sharing. If the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and &#126;W is applied to an argument that is a circular (or shared) reference, an appropriate #*n*# marker is inserted in the output instead of printing the argument. 



