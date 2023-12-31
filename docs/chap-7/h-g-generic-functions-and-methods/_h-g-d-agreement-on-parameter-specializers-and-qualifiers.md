 



Two <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> are said to agree with each other on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> if the following conditions hold: 



1\. Both methods have the same number of required parameters. Suppose the <i>parameter specializers</i> of the two methods are <i>P</i><sub>1<i>,</i>1</sub> <i>. . . P</i><sub>1<i>,n</i></sub> and <i>P</i><sub>2<i>,</i>1</sub> <i>. . . P</i><sub>2<i>,n</i></sub>. 



2\. For each 1 <i>≤ i ≤ n</i>, <i>P</i><sub>1<i>,i</i></sub> agrees with <i>P</i><sub>2<i>,i</i></sub>. The <i>parameter specializer P</i><sub>1<i>,i</i></sub> agrees with <i>P</i><sub>2<i>,i</i></sub> if <i>P</i><sub>1<i>,i</i></sub> and <i>P</i><sub>2<i>,i</i></sub> are the same class or if <i>P</i><sub>1<i>,i</i></sub> = (<b>eql</b> <i>object</i><sub>1</sub>), <i>P</i><sub>2<i>,i</i></sub> = (<b>eql</b> <i>object</i><sub>2</sub>), and (<b>eql</b> <i>object</i><sub>1</sub> <i>object</i><sub>2</sub>). Otherwise <i>P</i><sub>1<i>,i</i></sub> and <i>P</i><sub>2<i>,i</i></sub> do not agree. 



3\. The two <GlossaryTerm  term={"list"}><i>lists</i></GlossaryTerm> of <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> are the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> under <DictionaryLink  term={"equal"}><b>equal</b></DictionaryLink>. 



