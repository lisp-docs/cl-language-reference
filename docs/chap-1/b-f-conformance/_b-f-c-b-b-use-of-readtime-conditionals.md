 



Use of #+ and #- does not automatically disqualify a program from being conforming. A program which uses #+ and #- is considered conforming if there is no set of <GlossaryTerm styled={true} term={"feature"}><i>features</i></GlossaryTerm> in which the program would not be conforming. Of course, *conforming programs* are not necessarily working programs. The following program is conforming: 



(defun foo () 



#+ACME (acme:initialize-something) 



(print ’hello-there)) 



However, this program might or might not work, depending on whether the presence of the feature ACME really implies that a function named acme:initialize-something is present in the environment. In effect, using #+ or #- in a *conforming program* means that the variable <DictionaryLink styled={true} term={"features"}><b>\*features\*</b></DictionaryLink> becomes just one more piece of input data to that program. Like any other data coming into a program, the 



programmer is responsible for assuring that the program does not make unwarranted assumptions on the basis of input data. 



