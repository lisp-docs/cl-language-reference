 



An argument, any <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, is printed obeying every printer control variable (as by <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>). In addition, &#126;W interacts correctly with depth abbreviation, by not resetting the depth counter to zero. &#126;W does not accept parameters. If given the <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> modifier, &#126;W binds <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. If given the <ClLinks styled={true} term={"at-sign"}><i>at-sign</i></ClLinks> modifier, &#126;W binds **\*print-level\*** and <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



&#126;W provides automatic support for the detection of circularity and sharing. If the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and &#126;W is applied to an argument that is a circular (or shared) reference, an appropriate #*n*# marker is inserted in the output instead of printing the argument. 



