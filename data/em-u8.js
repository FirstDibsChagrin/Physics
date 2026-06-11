/* data/em-u8.js — Unit 8: Electric Charges, Fields, and Gauss's Law */
AP.registerUnit({
  id: 8,
  course: "em",
  title: "Electric Charges, Fields, and Gauss's Law",
  weight: "15–25%",
  tagline: "From Coulomb's force between point charges to the field concept and the elegant shortcut of Gauss's law.",
  bigIdeas: [
    "Charge is conserved and quantized; charges interact through an inverse-square force that obeys superposition.",
    "The electric field is the force per unit charge a test charge would feel — fields of continuous distributions are built by integration.",
    "Electric flux through a closed surface depends only on the enclosed charge, which makes highly symmetric fields easy to compute."
  ],
  topics: [

    /* ============================ 8.1 ============================ */
    {
      id: "8.1",
      title: "Electric Charge and Electric Force",
      blurb: "Coulomb's law gives the inverse-square force between point charges — and superposition lets you add as many as you like.",
      objectives: [
        "State Coulomb's law and use it to calculate the magnitude and direction of the force between point charges.",
        "Apply the principle of superposition to find the net electric force from several point charges.",
        "Compare the electric force to the gravitational force and explain why electricity dominates at the atomic scale."
      ],
      sections: [
        { heading: "The Core Idea: Charge and Coulomb's Law",
          content: String.raw`<p>Electric charge comes in two signs. Like charges repel; unlike charges attract. The strength of the interaction between two <strong>point charges</strong> $q_1$ and $q_2$ separated by a distance $r$ is given by <strong>Coulomb's law</strong>:</p>
$$F = \frac{1}{4\pi\varepsilon_0}\,\frac{|q_1 q_2|}{r^2} = k\,\frac{|q_1 q_2|}{r^2}$$
<p>with $k = 8.99\times10^{9}\,\text{N·m}^2/\text{C}^2$ and $\varepsilon_0 = 8.85\times10^{-12}\,\text{C}^2/(\text{N·m}^2)$. The force acts along the line joining the charges, and the pair of forces forms a Newton's-third-law pair: equal magnitude, opposite direction, <em>regardless</em> of which charge is bigger.</p>
<div class="callout key">Coulomb's law is an inverse-square law, structurally identical to Newton's law of gravitation — but it can attract <em>or</em> repel, and it is enormously stronger. For two protons, $F_E/F_g \approx 10^{36}$.</div>` },
        { heading: "Superposition: Adding Forces as Vectors",
          content: String.raw`<p>Coulomb's law only ever describes a <em>pair</em> of charges. When several charges act on one charge $q_0$, the net force is the <strong>vector sum</strong> of the individual pairwise forces:</p>
$$\vec{F}_{net} = \sum_i \vec{F}_{i0} = k q_0 \sum_i \frac{q_i}{r_i^2}\,\hat{r}_i$$
<p>Each term is computed as if the other charges did not exist — charges do not "screen" or modify each other's Coulomb forces. The practical recipe:</p>
<ol>
<li>Draw the force from each source charge on $q_0$, using signs to decide push vs. pull.</li>
<li>Resolve each force into components: $F_x = F\cos\theta$, $F_y = F\sin\theta$.</li>
<li>Add components, then reassemble magnitude $\sqrt{F_x^2+F_y^2}$ and direction.</li>
</ol>
<p>A classic trap: forces from different charges never simply add as magnitudes unless they happen to be collinear and in the same direction. Symmetry is your friend — in symmetric arrangements, perpendicular components often cancel before you compute anything.</p>` },
        { heading: "Interactive: Coulomb's Law",
          sim: "efield",
          simParams: { "preset": "coulomb" },
          simCaption: "Drag the charges closer together and watch the force readout. Halve the separation — does the force quadruple? Flip a sign to switch between attraction and repulsion.",
          content: String.raw`<p>Use the simulation to internalize the inverse-square scaling: doubling $r$ cuts $F$ by a factor of 4; tripling $r$ cuts it by 9. Notice that both charges always feel forces of <em>equal magnitude</em>, even when one charge is much larger than the other.</p>` },
        { heading: "Worked Connection: Hanging Charges",
          content: String.raw`<p>A favorite exam setup: two identical balls of mass $m$, each carrying charge $q$, hang from strings of length $L$ attached to the same point, and settle into equilibrium with each string at angle $\theta$ from the vertical. Each ball is in equilibrium under three forces: tension $T$, gravity $mg$, and the Coulomb repulsion $F_E$.</p>
<p>Components: $T\cos\theta = mg$ and $T\sin\theta = F_E$. Dividing,</p>
$$\tan\theta = \frac{F_E}{mg} = \frac{kq^2}{mg\,(2L\sin\theta)^2}$$
<p>since the separation between the balls is $r = 2L\sin\theta$. Solving for the charge:</p>
$$q = 2L\sin\theta\,\sqrt{\frac{mg\tan\theta}{k}}$$
<p>This single problem rehearses everything in this topic: Coulomb's law, free-body diagrams, and the geometry of equilibrium. If you can derive this cleanly, you are in good shape for the FRQ below.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Plugging signs into the magnitude formula.</strong> Use $|q_1 q_2|$ for the magnitude; use the signs (and a diagram) to determine direction. A negative $F$ from blind substitution has no automatic meaning.</li>
<li><strong>Forgetting to square $r$</strong>, or using the distance to the wrong point in multi-charge problems.</li>
<li><strong>Adding force magnitudes instead of vectors.</strong> If forces are not collinear, you must use components.</li>
<li><strong>Thinking the bigger charge pushes harder.</strong> Newton's third law guarantees the two forces in a pair are equal in magnitude.</li>
<li><strong>Unit slips:</strong> microcoulombs ($1\,\mu\text{C} = 10^{-6}\,\text{C}$) and nanocoulombs ($10^{-9}\,\text{C}$) must be converted before using $k$ in SI units.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`F = \frac{1}{4\pi\varepsilon_0}\frac{|q_1 q_2|}{r^2}`, note: "Coulomb's law: magnitude of the force between two point charges; attractive for opposite signs, repulsive for like signs." },
        { latex: String.raw`k = \frac{1}{4\pi\varepsilon_0} = 8.99\times10^{9}\ \text{N·m}^2/\text{C}^2`, note: "Coulomb constant; ε₀ is the permittivity of free space." },
        { latex: String.raw`\vec{F}_{net} = \sum_i \vec{F}_i`, note: "Superposition: net force is the vector sum of pairwise Coulomb forces, each computed independently." },
        { latex: String.raw`e = 1.602\times10^{-19}\ \text{C}`, note: "Elementary charge — magnitude of the charge of the proton and electron." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>Point charges of $+3.0\,\mu\text{C}$ and $-2.0\,\mu\text{C}$ are separated by $0.30\,\text{m}$. What is the electric force between them?</p>`,
          choices: [
            String.raw`$0.18\,\text{N}$, attractive`,
            String.raw`$0.60\,\text{N}$, repulsive`,
            String.raw`$0.60\,\text{N}$, attractive`,
            String.raw`$1.8\,\text{N}$, attractive`
          ],
          answer: 2,
          solution: String.raw`<p>$F = k|q_1q_2|/r^2 = (8.99\times10^9)(3.0\times10^{-6})(2.0\times10^{-6})/(0.30)^2 \approx 0.60\,\text{N}$. Opposite signs mean the force is attractive. The $0.18\,\text{N}$ distractor comes from forgetting to square $r$ in the denominator correctly ($0.054/0.30$), and "repulsive" misreads the signs.</p>` },
        { type: "mcq",
          q: String.raw`<p>Two charges exert a force of magnitude $F$ on each other. The distance between them is doubled and one charge is tripled. The new force magnitude is</p>`,
          choices: [
            String.raw`$\tfrac{3}{2}F$`,
            String.raw`$\tfrac{3}{4}F$`,
            String.raw`$3F$`,
            String.raw`$\tfrac{1}{4}F$`
          ],
          answer: 1,
          solution: String.raw`<p>$F \propto q_1q_2/r^2$. Tripling one charge multiplies $F$ by 3; doubling $r$ divides $F$ by $2^2 = 4$. Net factor: $3/4$. The most common error is dividing by 2 instead of 4 — the inverse-<em>square</em> law punishes that.</p>` },
        { type: "mcq",
          q: String.raw`<p>A charge $+4q$ is fixed at $x = 0$ and a charge $+q$ is fixed at $x = 3d$. At what point on the $x$-axis would a third charge experience zero net electric force?</p>`,
          choices: [
            String.raw`$x = 2d$`,
            String.raw`$x = d$`,
            String.raw`$x = 1.5d$`,
            String.raw`$x = 2.25d$`
          ],
          answer: 0,
          solution: String.raw`<p>The null point must lie <em>between</em> the two positive charges (outside, both forces point the same way). Setting magnitudes equal at position $x$: $\dfrac{k(4q)}{x^2} = \dfrac{kq}{(3d-x)^2}$, so $\dfrac{2}{x} = \dfrac{1}{3d-x}$, giving $2(3d - x) = x$ and $x = 2d$. The point sits closer to the <em>smaller</em> charge, as it must.</p>` },
        { type: "frq",
          q: String.raw`<p>Two small conducting balls, each of mass $m$ and carrying identical charge $q$, hang from a common point by insulating threads of length $L$. In equilibrium, each thread makes angle $\theta$ with the vertical.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Draw (or describe) the free-body diagram for one ball, and write the two equilibrium equations.</p>`,
              solution: String.raw`<p>Three forces act on each ball: tension $T$ along the thread, weight $mg$ downward, and the horizontal Coulomb repulsion $F_E$ pointing away from the other ball. Equilibrium gives:</p>
$$T\cos\theta = mg \qquad\text{(vertical)}$$
$$T\sin\theta = F_E \qquad\text{(horizontal)}$$` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the charge $q$ in terms of $m$, $g$, $L$, $\theta$, and $k$.</p>`,
              solution: String.raw`<p>Dividing the equilibrium equations eliminates $T$: $\tan\theta = F_E/(mg)$. The separation between the balls is $r = 2L\sin\theta$, so $F_E = \dfrac{kq^2}{(2L\sin\theta)^2}$. Then</p>
$$mg\tan\theta = \frac{kq^2}{4L^2\sin^2\theta} \;\;\Rightarrow\;\; q = 2L\sin\theta\sqrt{\frac{mg\tan\theta}{k}}$$` },
            { label: "(c)", prompt: String.raw`<p>One ball slowly leaks its charge to the air until its charge is halved (the other is unchanged). Does the equilibrium angle of each thread increase, decrease, or stay the same? Justify your answer.</p>`,
              solution: String.raw`<p>The angle <strong>decreases</strong>. The product $q_1q_2$ drops to half its original value, so at the original separation the Coulomb force is halved. With $\tan\theta = F_E/(mg)$ now smaller, each ball swings inward to a new, smaller equilibrium angle. (Both threads still make equal angles — by Newton's third law the balls feel equal-magnitude forces even with unequal charges.)</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>Three point charges, each $+q$, are fixed at three corners of a square of side $a$. A fourth charge $+q$ is placed at the remaining (empty) corner. Take the fourth charge to sit at the origin with the two adjacent charges located at distance $a$ along the $+x$ and $+y$ directions, and the third charge at the opposite corner of the square.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Describe the direction of the force on the fourth charge from each of the other three charges.</p>`,
              solution: String.raw`<p>All charges are positive, so each force on the corner charge is repulsive, pointing <em>away</em> from its source. The charge at distance $a$ on the $+x$-axis pushes in the $-x$ direction; the charge at distance $a$ on the $+y$-axis pushes in the $-y$ direction; the diagonal charge (distance $a\sqrt{2}$) pushes along the diagonal, in the direction $(-\hat{x}-\hat{y})/\sqrt{2}$. All three forces have components driving the charge outward along the square's diagonal.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the magnitude of the net force on the fourth charge.</p>`,
              solution: String.raw`<p>The two adjacent charges each exert $F_1 = kq^2/a^2$ along $-\hat{x}$ and $-\hat{y}$ respectively. Their vector sum has magnitude $\sqrt{2}\,kq^2/a^2$ directed along the outward diagonal. The diagonal charge is at distance $a\sqrt{2}$, so it exerts $F_2 = \dfrac{kq^2}{(a\sqrt{2})^2} = \dfrac{kq^2}{2a^2}$, also along the outward diagonal. Since all contributions are collinear along the diagonal:</p>
$$F_{net} = \frac{kq^2}{a^2}\left(\sqrt{2} + \frac{1}{2}\right) \approx 1.91\,\frac{kq^2}{a^2}$$` },
            { label: "(c)", prompt: String.raw`<p>In what direction does the net force point? Justify briefly using symmetry.</p>`,
              solution: String.raw`<p>Along the square's diagonal, directed away from the center of the square. The configuration is mirror-symmetric about that diagonal: for every force component perpendicular to the diagonal from one adjacent charge, the other adjacent charge supplies the equal-and-opposite component. Only the components along the diagonal survive, and they all point outward.</p>` }
          ] }
      ]
    },

    /* ============================ 8.2 ============================ */
    {
      id: "8.2",
      title: "Conservation of Electric Charge and the Process of Charging",
      blurb: "Charge is never created or destroyed — only moved. Friction, conduction, and induction are three ways to move it.",
      objectives: [
        "State and apply conservation of charge and charge quantization ($q = Ne$).",
        "Describe charging by friction, by conduction (contact), and by induction, predicting the sign of the final charge in each case.",
        "Explain the role of grounding and of polarization in attracting neutral objects."
      ],
      sections: [
        { heading: "The Core Idea: Charge Is Conserved and Quantized",
          content: String.raw`<p>Two bedrock facts govern every charging process. First, <strong>conservation of charge</strong>: the total charge of an isolated system never changes. Charging an object never creates charge — it just relocates electrons. When you rub a rubber rod with fur, electrons jump from fur to rubber; the rod ends up negative and the fur ends up positive by <em>exactly</em> the same amount.</p>
<p>Second, <strong>quantization</strong>: charge comes in integer multiples of the elementary charge,</p>
$$q = N e, \qquad e = 1.602\times10^{-19}\,\text{C}$$
<p>Any macroscopic charge corresponds to a staggering number of electrons — a mere $-1\,\mu\text{C}$ means about $6\times10^{12}$ excess electrons. Because $e$ is so small, charge looks continuous at lab scale, which is why we can use continuous charge densities in topic 8.4.</p>
<div class="callout key">Only electrons move in solids. A "positively charged" metal sphere has not gained protons — it has <em>lost electrons</em>.</div>` },
        { heading: "Conductors vs. Insulators; Friction and Conduction",
          content: String.raw`<p>In a <strong>conductor</strong> (metals), some electrons are free to roam the entire object; in an <strong>insulator</strong> (rubber, glass, plastic), charge stays where you put it. This distinction controls how charging plays out.</p>
<p><strong>Charging by friction</strong> transfers electrons between two rubbed insulators. The signs are set by which material binds electrons more tightly (the triboelectric series); the two objects acquire equal and opposite charges.</p>
<p><strong>Charging by conduction</strong> means touching a charged object to a neutral (or differently charged) conductor. Charge flows until the objects reach a common potential; for two <em>identical</em> conducting spheres, the total charge simply splits equally:</p>
$$q_1' = q_2' = \frac{q_1 + q_2}{2}$$
<p>Conduction always leaves the second object with the <em>same sign</em> as the charging object. Note the identical-spheres rule is a special symmetry result — unequal spheres share unequally (they equalize potential, not charge).</p>` },
        { heading: "Induction and Grounding",
          content: String.raw`<p><strong>Charging by induction</strong> charges a conductor <em>without contact</em>, and produces the <em>opposite</em> sign. The standard four-step sequence with a negative rod and a neutral metal sphere:</p>
<ol>
<li>Bring the rod near (not touching). Free electrons in the sphere are repelled to the far side; the near side becomes positive (polarization).</li>
<li>Ground the far side (touch it with a finger or wire to Earth). Repelled electrons escape to ground.</li>
<li>Remove the ground connection <em>while the rod is still in place</em>.</li>
<li>Remove the rod. The sphere is left with a net <strong>positive</strong> charge that redistributes over its surface.</li>
</ol>
<div class="callout warn">Order matters: if you remove the rod before disconnecting the ground, the electrons flow right back and the sphere ends up neutral.</div>
<p>Polarization also explains why a charged balloon sticks to a neutral wall: induced surface charge of opposite sign sits slightly closer than the like-signed charge, and the inverse-square law makes the attraction win.</p>` },
        { heading: "Interactive: Like Charges",
          sim: "efield",
          simParams: { "preset": "like" },
          simCaption: "Two like charges repel. Drag them around and watch the field between them weaken — there is a null point at the midpoint. Imagine free electrons in a conductor responding to a nearby charge this way.",
          content: String.raw`<p>The field pattern of like charges helps you visualize polarization: free electrons inside a conductor feel forces along these field lines and migrate until the interior field vanishes — that migration is the heart of induction.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Saying protons move.</strong> In ordinary solids only electrons are mobile. Positive charging is electron <em>removal</em>.</li>
<li><strong>Induction gives the same sign.</strong> No — induction yields the <em>opposite</em> sign of the inducing object; conduction yields the <em>same</em> sign.</li>
<li><strong>Splitting charge equally between unequal spheres.</strong> The 50–50 split holds only for identical conductors; in general they equalize <em>potential</em>.</li>
<li><strong>Forgetting that neutral objects can be attracted.</strong> Polarization makes a charged object attract neutral conductors and insulators alike — attraction alone never proves an object is charged.</li>
<li><strong>Removing the rod before the ground.</strong> The induced charge is locked in only if the ground connection is broken first.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`q = N e`, note: "Charge quantization: any charge is an integer multiple of the elementary charge e = 1.602×10⁻¹⁹ C." },
        { latex: String.raw`\sum q_{initial} = \sum q_{final}`, note: "Conservation of charge for an isolated system — charging only relocates electrons." },
        { latex: String.raw`q_1' = q_2' = \frac{q_1 + q_2}{2}`, note: "Charge sharing by conduction between two identical conducting spheres." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A metal sphere carries a charge of $-4.8\,\mu\text{C}$. How many excess electrons does it hold?</p>`,
          choices: [
            String.raw`$1.6\times10^{13}$`,
            String.raw`$4.8\times10^{13}$`,
            String.raw`$7.5\times10^{12}$`,
            String.raw`$3.0\times10^{13}$`
          ],
          answer: 3,
          solution: String.raw`<p>$N = |q|/e = (4.8\times10^{-6})/(1.6\times10^{-19}) = 3.0\times10^{13}$ electrons. Quantization means charge is always a whole number of elementary charges — and that number is astronomically large for everyday charges.</p>` },
        { type: "mcq",
          q: String.raw`<p>Two identical conducting spheres carry charges $+6\,\mu\text{C}$ and $-2\,\mu\text{C}$. They are touched together and then separated. What is the final charge on each sphere?</p>`,
          choices: [
            String.raw`$+2\,\mu\text{C}$ each`,
            String.raw`$+4\,\mu\text{C}$ each`,
            String.raw`$+6\,\mu\text{C}$ and $-2\,\mu\text{C}$ (unchanged)`,
            String.raw`$+3\,\mu\text{C}$ and $+1\,\mu\text{C}$`
          ],
          answer: 0,
          solution: String.raw`<p>Total charge is conserved: $+6 + (-2) = +4\,\mu\text{C}$. Identical spheres split it equally, $+2\,\mu\text{C}$ each. The $+4\,\mu\text{C}$ distractor adds the magnitudes ($6+2$) before halving — a sign error that violates conservation of charge.</p>` },
        { type: "mcq",
          q: String.raw`<p>A negatively charged rod is brought near (not touching) a neutral metal sphere on an insulating stand. The far side of the sphere is briefly grounded, the ground wire is removed, and then the rod is taken away. The sphere is now</p>`,
          choices: [
            String.raw`negatively charged, because electrons jumped from the rod`,
            String.raw`neutral, because the rod never touched it`,
            String.raw`positively charged, because electrons were driven to ground`,
            String.raw`impossible to determine without knowing the rod's charge magnitude`
          ],
          answer: 2,
          solution: String.raw`<p>The negative rod repels free electrons to the far side of the sphere; grounding lets those electrons escape to Earth. Once the ground is removed (rod still in place), the sphere has a locked-in electron deficit. Removing the rod leaves it <strong>positive</strong> — opposite the rod's sign, the signature of induction. No contact means no charge transfer from the rod itself.</p>` },
        { type: "frq",
          q: String.raw`<p>A student has a hard-rubber rod, a piece of fur, a neutral electroscope (a metal knob connected to two thin metal leaves inside a glass case), and a grounding wire. Rubbing the rod with fur gives the rod a negative charge.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>The charged rod is brought near (not touching) the electroscope knob and the leaves spread apart. Explain why, even though the electroscope is neutral.</p>`,
              solution: String.raw`<p>The nearby negative rod repels free electrons in the metal: they migrate from the knob down into the leaves. The electroscope's <em>total</em> charge is still zero, but it is now polarized — the knob is positive and both leaves carry excess negative charge. The like-charged leaves repel each other and spread. Polarization, not net charge, causes the deflection.</p>` },
            { label: "(b)", prompt: String.raw`<p>Describe a step-by-step procedure, using the equipment listed, to give the electroscope a permanent <em>positive</em> charge without ever touching it with the rod.</p>`,
              solution: String.raw`<p>Charge by induction: (1) Rub the rod with fur to charge it negatively, and hold it near the knob — electrons are driven into the leaves. (2) While the rod is held in place, touch the grounding wire to the electroscope; the repelled electrons flow to ground and the leaves partially collapse. (3) Disconnect the ground wire <em>first</em>. (4) Then remove the rod. The electroscope is left with a deficit of electrons — a net positive charge — and the leaves spread again and stay spread.</p>` },
            { label: "(c)", prompt: String.raw`<p>Where did the rod's "extra" negative charge originally come from? Use conservation of charge to account for the charges of the rod and the fur.</p>`,
              solution: String.raw`<p>Rubbing transferred electrons from the fur to the rubber rod (rubber binds electrons more tightly). No charge was created: if the rod acquired charge $-Q$, the fur acquired exactly $+Q$, so the rod-plus-fur system still has zero total charge. Conservation of charge holds at every step — including the induction step, where the electrons lost by the electroscope now reside in the Earth.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>Identical small conducting spheres A and B sit on insulating stands. Sphere A initially carries charge $+8.0\,\mu\text{C}$; sphere B is neutral.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>The spheres are touched together and then separated. Determine the final charge on each sphere, citing the physical principles you use.</p>`,
              solution: String.raw`<p>By conservation of charge the total remains $+8.0\,\mu\text{C}$; by the symmetry of identical conductors (they must reach equal potential, and identical geometry means equal charge), the charge splits evenly: $q_A = q_B = +4.0\,\mu\text{C}$. Microscopically, electrons flowed from neutral B to positive A until equilibrium.</p>` },
            { label: "(b)", prompt: String.raw`<p>The spheres are then placed with their centers $0.50\,\text{m}$ apart. Calculate the magnitude of the electric force between them and state whether it is attractive or repulsive. (Treat them as point charges.)</p>`,
              solution: String.raw`<p>$F = \dfrac{kq_Aq_B}{r^2} = \dfrac{(8.99\times10^9)(4.0\times10^{-6})^2}{(0.50)^2} = \dfrac{(8.99\times10^9)(1.6\times10^{-11})}{0.25} \approx 0.58\,\text{N}$.</p>
<p>Both spheres are positive, so the force is <strong>repulsive</strong>.</p>` },
            { label: "(c)", prompt: String.raw`<p>In a second experiment, sphere B (neutral again) is grounded while charged sphere A is held nearby; the ground is removed, then A is moved away. State the sign of B's final charge and explain why the force between A and B is now attractive at any separation.</p>`,
              solution: String.raw`<p>Sphere A is positive, so it attracts electrons up from ground onto sphere B; breaking the ground connection traps them. B's final charge is <strong>negative</strong> — induction yields the opposite sign. With A positive and B negative, the Coulomb force between them is attractive. (Even before grounding, A attracted neutral B via polarization; induction makes the attraction permanent and stronger.)</p>` }
          ] }
      ]
    },

    /* ============================ 8.3 ============================ */
    {
      id: "8.3",
      title: "Electric Fields",
      blurb: "The field is the middleman: charges create a field everywhere in space, and the field tells other charges how to move.",
      objectives: [
        "Define the electric field as force per unit charge and compute the field of one or more point charges by superposition.",
        "Predict the force on a charge placed in a known field, including direction for positive and negative charges.",
        "Draw and interpret electric field line diagrams using the standard rules."
      ],
      sections: [
        { heading: "The Core Idea: Force per Unit Charge",
          content: String.raw`<p>Rather than thinking of charges acting on each other across empty space, we split the interaction in two: source charges set up an <strong>electric field</strong> $\vec{E}$ throughout space, and the field exerts a force on any charge placed in it. The field is defined operationally with a small positive <em>test charge</em> $q_0$:</p>
$$\vec{E} = \frac{\vec{F}}{q_0} \qquad\text{so that}\qquad \vec{F} = q\vec{E}$$
<p>Units: newtons per coulomb (N/C), equivalently volts per meter. The field at a point exists whether or not a charge is there to feel it. A positive charge feels a force <em>along</em> $\vec{E}$; a negative charge feels a force <em>opposite</em> $\vec{E}$.</p>
<div class="callout">The test charge must be small — both in charge (so it doesn't disturb the sources) and conceptually: $\vec{E}$ describes the sources, not the test charge. A field $\vec{E}$ exists at a point even if $q_0$ is removed.</div>` },
        { heading: "Field of Point Charges and Superposition",
          content: String.raw`<p>Dividing Coulomb's law by the test charge gives the field of a point charge $q$ at distance $r$:</p>
$$\vec{E} = \frac{kq}{r^2}\,\hat{r}$$
<p>where $\hat{r}$ points from the source charge toward the field point. For $q &gt; 0$ the field points radially <em>outward</em>; for $q &lt; 0$, radially <em>inward</em>. Like forces, fields obey <strong>superposition</strong>:</p>
$$\vec{E}_{net} = \sum_i \frac{kq_i}{r_i^2}\,\hat{r}_i$$
<p>Example: charges $+q$ and $-q$ sit at $x = -a$ and $x = +a$ (a dipole). At the origin, the positive charge's field points in $+\hat{x}$ (away from it) with magnitude $kq/a^2$, and the negative charge's field <em>also</em> points in $+\hat{x}$ (toward it) with magnitude $kq/a^2$. The fields add: $E = 2kq/a^2$ toward the negative charge. Between opposite charges the fields reinforce; between like charges they cancel at the midpoint.</p>` },
        { heading: "Interactive: The Dipole Field",
          sim: "efield",
          simParams: { "preset": "dipole" },
          simCaption: "Trace field lines from the positive charge to the negative one. Move a charge and watch the pattern respond. Find where the field is strongest (between the charges) and check the direction at the midpoint.",
          content: String.raw`<p>The dipole is the most important two-charge pattern in physics — molecules like water are dipoles. Notice every field line leaves the positive charge and lands on the negative charge, and lines crowd together where the field is strong.</p>` },
        { heading: "Field Line Rules",
          content: String.raw`<p>Field line diagrams encode the field's direction and relative strength. The rules:</p>
<ul>
<li>Lines begin on positive charges and end on negative charges (or extend to infinity).</li>
<li>The tangent to a field line at any point gives the direction of $\vec{E}$ there.</li>
<li>Line density (lines per area crossing perpendicular) is proportional to field magnitude — crowded lines mean strong field.</li>
<li>The number of lines drawn starting or ending on a charge is proportional to $|q|$.</li>
<li>Field lines <strong>never cross</strong>: the field has a unique direction at each point.</li>
</ul>
<div class="callout warn">Field lines are <em>not</em> trajectories. A charged particle's acceleration is along the line, but its velocity generally is not — a particle launched sideways in a curved field does not slide along a field line.</div>
<p>Uniform fields (as between charged parallel plates) are drawn as evenly spaced parallel lines: same direction and magnitude everywhere.</p>` },
        { heading: "Worked Connection: A Charge in a Uniform Field",
          content: String.raw`<p>An electron (charge $-e$, mass $m_e$) enters a region of uniform field $\vec{E}$ with initial velocity perpendicular to the field. The force $\vec{F} = -e\vec{E}$ is constant, so the acceleration is constant:</p>
$$a = \frac{eE}{m_e} \qquad\text{(directed opposite }\vec{E}\text{)}$$
<p>This is projectile motion with $eE/m_e$ replacing $g$. If the electron's horizontal speed is $v_0$ and the field region has length $L$, it spends time $t = L/v_0$ inside and deflects</p>
$$y = \frac{1}{2}at^2 = \frac{eEL^2}{2m_ev_0^2}$$
<p>Gravity is utterly negligible here: for typical fields, $eE/m_e$ exceeds $g$ by a factor of $10^{12}$ or more. This setup — the heart of the old cathode-ray tube — is a perennial exam favorite because it merges kinematics with the field concept.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Field direction for negative charges.</strong> The field of a negative source points <em>toward</em> it; the force on a negative charge is <em>opposite</em> the local field. Keep these two facts separate.</li>
<li><strong>Thinking $\vec{E}$ depends on the test charge.</strong> It doesn't — $F$ doubles when $q$ doubles, so the ratio $F/q$ is fixed by the sources.</li>
<li><strong>Crossing field lines</strong> in sketches, or drawing lines that start and end on the same positive charge.</li>
<li><strong>Treating field lines as particle paths.</strong> Acceleration follows the line; velocity need not.</li>
<li><strong>Forgetting vector addition.</strong> $E = 0$ midway between <em>like</em> charges, but $E = 2kq/a^2$ midway between a dipole's charges — same geometry, opposite outcome.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{E} = \frac{\vec{F}}{q_0}`, note: "Definition of the electric field: force per unit positive test charge; units N/C = V/m." },
        { latex: String.raw`\vec{F} = q\vec{E}`, note: "Force on a charge in a field; antiparallel to E if q < 0." },
        { latex: String.raw`\vec{E} = \frac{kq}{r^2}\hat{r}`, note: "Field of a point charge; outward for q > 0, inward for q < 0." },
        { latex: String.raw`\vec{E}_{net} = \sum_i \vec{E}_i`, note: "Superposition: fields from multiple sources add as vectors." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>What is the magnitude of the electric field $2.0\,\text{m}$ from an $+8.0\,\mu\text{C}$ point charge?</p>`,
          choices: [
            String.raw`$3.6\times10^{4}\,\text{N/C}$`,
            String.raw`$1.8\times10^{4}\,\text{N/C}$`,
            String.raw`$9.0\times10^{3}\,\text{N/C}$`,
            String.raw`$1.8\times10^{3}\,\text{N/C}$`
          ],
          answer: 1,
          solution: String.raw`<p>$E = kq/r^2 = (8.99\times10^9)(8.0\times10^{-6})/(2.0)^2 = 1.8\times10^4\,\text{N/C}$, directed radially away from the positive charge. The $3.6\times10^4$ distractor divides by $r$ instead of $r^2$.</p>` },
        { type: "mcq",
          q: String.raw`<p>Charges $+q$ and $-q$ are fixed at $x = -a$ and $x = +a$, respectively. The electric field at the origin is</p>`,
          choices: [
            String.raw`zero`,
            String.raw`$\dfrac{kq}{a^2}$, toward the negative charge`,
            String.raw`$\dfrac{2kq}{a^2}$, toward the negative charge`,
            String.raw`$\dfrac{2kq}{a^2}$, toward the positive charge`
          ],
          answer: 2,
          solution: String.raw`<p>At the origin, the field of $+q$ points away from it (in $+\hat{x}$, toward $-q$) and the field of $-q$ points toward it (also $+\hat{x}$). Each has magnitude $kq/a^2$, so they <em>add</em>: $E = 2kq/a^2$ toward the negative charge. "Zero" is correct for two <em>like</em> charges, not a dipole.</p>` },
        { type: "mcq",
          q: String.raw`<p>A proton and an electron are released from rest in the same uniform electric field. Which statement correctly compares their motions? ($m_p \approx 1836\,m_e$)</p>`,
          choices: [
            String.raw`They accelerate in the same direction with equal magnitudes.`,
            String.raw`The proton's acceleration is about 1836 times the electron's, and they move in opposite directions.`,
            String.raw`They feel forces of different magnitudes, so their accelerations differ in magnitude.`,
            String.raw`The electron's acceleration is about 1836 times the proton's, and they accelerate in opposite directions.`
          ],
          answer: 3,
          solution: String.raw`<p>Both have charge of magnitude $e$, so both feel force $|F| = eE$ — equal magnitudes, opposite directions (the proton along $\vec{E}$, the electron against it). But $a = F/m$, and the electron's mass is about 1836 times smaller, so its acceleration is about 1836 times larger. Equal force does <em>not</em> mean equal acceleration.</p>` },
        { type: "frq",
          q: String.raw`<p>Two point charges, each $+q$, are fixed on the $y$-axis at $y = +a$ and $y = -a$. Consider points on the positive $x$-axis.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for the electric field $\vec{E}(x)$ at a point on the $x$-axis a distance $x$ from the origin.</p>`,
              solution: String.raw`<p>Each charge is a distance $r = \sqrt{x^2 + a^2}$ from the field point, contributing a field of magnitude $kq/(x^2+a^2)$ directed away from itself. By symmetry the $y$-components cancel and the $x$-components add. Each $x$-component is the magnitude times $\cos\theta = x/\sqrt{x^2+a^2}$:</p>
$$E_x = 2\,\frac{kq}{x^2+a^2}\cdot\frac{x}{\sqrt{x^2+a^2}} = \frac{2kqx}{(x^2+a^2)^{3/2}}\,,\qquad \vec{E} = E_x\,\hat{x}$$` },
            { label: "(b)", prompt: String.raw`<p>Show that your expression reduces to the expected result when $x \gg a$, and explain why the field is zero at the origin.</p>`,
              solution: String.raw`<p>For $x \gg a$, $(x^2+a^2)^{3/2} \to x^3$, so $E \to \dfrac{2kq}{x^2} = \dfrac{k(2q)}{x^2}$ — from far away the pair looks like a single point charge $2q$. Check passed. At the origin ($x=0$), the two fields have equal magnitude $kq/a^2$ but point in opposite directions (each away from its source), so they cancel exactly: $E(0)=0$, consistent with the formula.</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the value of $x$ at which the field magnitude is maximum.</p>`,
              solution: String.raw`<p>Set $\dfrac{dE}{dx} = 0$. With $E = 2kqx(x^2+a^2)^{-3/2}$:</p>
$$\frac{dE}{dx} = 2kq\left[(x^2+a^2)^{-3/2} - 3x^2(x^2+a^2)^{-5/2}\right] = 0$$
<p>Multiplying through by $(x^2+a^2)^{5/2}$: $(x^2+a^2) - 3x^2 = 0$, so $a^2 = 2x^2$ and</p>
$$x = \frac{a}{\sqrt{2}}$$
<p>This is a genuine maximum: $E$ vanishes at $x=0$ and as $x\to\infty$, and is positive between.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>An electron (mass $m$, charge $-e$) enters midway between two horizontal parallel plates with horizontal velocity $v_0$. The plates have length $L$ and produce a uniform field of magnitude $E$ pointing vertically downward between them. Ignore gravity and edge effects.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Determine the magnitude and direction of the electron's acceleration between the plates.</p>`,
              solution: String.raw`<p>The force on the electron is $\vec{F} = (-e)\vec{E}$. Since $\vec{E}$ points downward, the force — and therefore the acceleration — points <strong>upward</strong>, with magnitude</p>
$$a = \frac{eE}{m}$$
<p>The negative charge guarantees the force is antiparallel to the field.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the vertical deflection of the electron as it exits the plates.</p>`,
              solution: String.raw`<p>The horizontal velocity is unaffected (no horizontal force), so the transit time is $t = L/v_0$. Starting with zero vertical velocity, the vertical deflection is</p>
$$y = \frac{1}{2}at^2 = \frac{1}{2}\,\frac{eE}{m}\left(\frac{L}{v_0}\right)^2 = \frac{eEL^2}{2mv_0^2}\quad\text{(upward)}$$
<p>This is projectile motion with the electric acceleration playing the role of $g$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the angle the electron's velocity makes with the horizontal as it exits, and describe its path after leaving the field region.</p>`,
              solution: String.raw`<p>At exit, $v_y = at = \dfrac{eEL}{mv_0}$ (upward) while $v_x = v_0$, so</p>
$$\tan\theta = \frac{v_y}{v_x} = \frac{eEL}{mv_0^2}$$
<p>After leaving the plates there is no force (gravity is ignored), so by Newton's first law the electron travels in a <strong>straight line</strong> at that angle. The parabolic arc exists only where the field does.</p>` }
          ] }
      ]
    },

    /* ============================ 8.4 ============================ */
    {
      id: "8.4",
      title: "Electric Fields of Charge Distributions",
      blurb: "When charge is smeared over lines, rings, and planes, the field becomes an integral — set up dq, exploit symmetry, integrate.",
      objectives: [
        "Use linear (λ), surface (σ), and volume (ρ) charge densities to express the charge element dq.",
        "Derive by integration the electric field on the axis of a uniformly charged ring and the field of an infinite line of charge.",
        "Explain why the field between oppositely charged parallel plates is approximately uniform, and use limiting cases to check derived fields."
      ],
      sections: [
        { heading: "From Sums to Integrals: Charge Densities",
          content: String.raw`<p>A continuous charge distribution is a limit of point charges: chop it into infinitesimal elements $dq$, write the field of each, and integrate:</p>
$$\vec{E} = \int \frac{k\,dq}{r^2}\,\hat{r}$$
<p>The charge element is expressed through a density:</p>
<ul>
<li>Line: $dq = \lambda\,d\ell$, where $\lambda$ is charge per length (C/m).</li>
<li>Surface: $dq = \sigma\,dA$, where $\sigma$ is charge per area (C/m²).</li>
<li>Volume: $dq = \rho\,dV$, where $\rho$ is charge per volume (C/m³).</li>
</ul>
<p>The hard part is never the calculus — it's the setup. Always: (1) draw the element $dq$ and the vector from it to the field point; (2) write $d\vec{E}$ with the correct geometry; (3) use symmetry to identify which components cancel <em>before</em> integrating; (4) integrate only the surviving component; (5) check limiting cases — far away, every finite distribution must look like a point charge $kQ/r^2$.</p>` },
        { heading: "Derivation: Ring of Charge, On Axis",
          content: String.raw`<p>A ring of radius $R$ carries total charge $Q$ uniformly distributed. Find $\vec{E}$ at a point on the axis, distance $z$ from the center.</p>
<p>Every element $dq$ is the <em>same</em> distance $r = \sqrt{z^2 + R^2}$ from the field point, so each contributes $dE = \dfrac{k\,dq}{z^2+R^2}$. By symmetry, components perpendicular to the axis cancel in pairs (each $dq$ has a partner across the ring). The surviving axial component carries a factor $\cos\theta = \dfrac{z}{\sqrt{z^2+R^2}}$:</p>
$$E_z = \int \frac{k\,dq}{z^2+R^2}\cdot\frac{z}{\sqrt{z^2+R^2}} = \frac{kz}{(z^2+R^2)^{3/2}}\int dq = \frac{kQz}{(z^2+R^2)^{3/2}}$$
<p>The geometric factor came out of the integral because it is the same for every element — only $\int dq = Q$ remained. Checks: $E = 0$ at the center ($z = 0$, full cancellation by symmetry), and $E \to kQ/z^2$ for $z \gg R$ (point-charge limit). Setting $dE_z/dz = 0$ shows the field peaks at $z = R/\sqrt{2}$.</p>` },
        { heading: "Derivation: Infinite Line of Charge",
          content: String.raw`<p>An infinite straight line carries uniform density $\lambda$. Find $\vec{E}$ at perpendicular distance $d$. Put the line on the $y$-axis and the field point at $(d, 0)$. An element $dq = \lambda\,dy$ at height $y$ is a distance $r = \sqrt{d^2+y^2}$ away. By symmetry (every $+y$ element pairs with a $-y$ element), components parallel to the line cancel; the perpendicular component carries $\cos\theta = d/\sqrt{d^2+y^2}$:</p>
$$E = \int_{-\infty}^{\infty} \frac{k\lambda\,dy}{d^2+y^2}\cdot\frac{d}{\sqrt{d^2+y^2}} = k\lambda d\int_{-\infty}^{\infty}\frac{dy}{(d^2+y^2)^{3/2}}$$
<p>The standard integral gives $\displaystyle\int_{-\infty}^{\infty}\frac{dy}{(d^2+y^2)^{3/2}} = \left[\frac{y}{d^2\sqrt{d^2+y^2}}\right]_{-\infty}^{\infty} = \frac{2}{d^2}$, so</p>
$$E = \frac{2k\lambda}{d} = \frac{\lambda}{2\pi\varepsilon_0 d}$$
<p>directed radially away from the line (for $\lambda &gt; 0$). Note the $1/d$ falloff — slower than a point charge's $1/d^2$, because more line charge "comes into view" as you back away.</p>` },
        { heading: "Interactive: A Row of Charges",
          sim: "efield",
          simParams: { "preset": "row" },
          simCaption: "A row of discrete charges approximates a line of charge. Look near the middle of the row: the field is nearly perpendicular to the line, just as the symmetry argument predicts. Near the ends, the cancellation fails.",
          content: String.raw`<p>This is the integral made visible: each charge in the row is one "$dq$." Close to the center of a long row the field looks like the infinite-line result; far away, the row looks like a single point charge.</p>` },
        { heading: "Parallel Plates: The Uniform Field",
          content: String.raw`<p>A large uniformly charged plane produces a field that does not depend on distance at all:</p>
$$E_{plane} = \frac{\sigma}{2\varepsilon_0}$$
<p>(You can get this by integrating rings to build a disk, $E = \dfrac{\sigma}{2\varepsilon_0}\left[1 - \dfrac{z}{\sqrt{z^2+R^2}}\right]$, and letting $R \to \infty$ — or far more easily with Gauss's law in 8.6.) Intuition: as you move away, each patch of charge contributes less, but more patches sit within a given solid angle; for an infinite plane the effects exactly balance.</p>
<p>Two parallel plates with charge densities $+\sigma$ and $-\sigma$ create the classic <strong>capacitor geometry</strong>: between the plates the two fields point the same way and add to $E = \sigma/\varepsilon_0$; outside, they oppose and cancel. The result is a nearly uniform field confined between the plates — the standard way to create a constant field in the lab, and the setting for the projectile-style problems of topic 8.3.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Integrating magnitudes without symmetry analysis.</strong> $d\vec{E}$ is a vector; decide which components cancel <em>before</em> integrating, and integrate only the surviving component.</li>
<li><strong>Treating $r$ as constant when it isn't.</strong> On a ring's axis every $dq$ is equidistant — that's special. For a line or disk, $r$ depends on the integration variable.</li>
<li><strong>Mixing up falloffs:</strong> point charge $\propto 1/r^2$, infinite line $\propto 1/r$, infinite plane constant. Memorize this ladder and use it to sanity-check answers.</li>
<li><strong>Forgetting limiting-case checks.</strong> Any finite distribution must reduce to $kQ/r^2$ far away. If yours doesn't, the setup is wrong.</li>
<li><strong>Confusing $\sigma/2\varepsilon_0$ (one sheet) with $\sigma/\varepsilon_0$ (between capacitor plates, or just outside a conductor).</strong></li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{E} = \int \frac{k\,dq}{r^2}\,\hat{r}`, note: "Master integral for any continuous distribution; dq = λdℓ, σdA, or ρdV." },
        { latex: String.raw`E_{ring} = \frac{kQz}{(z^2+R^2)^{3/2}}`, note: "On the axis of a uniform ring, distance z from center, directed along the axis; zero at center, max at z = R/√2." },
        { latex: String.raw`E_{line} = \frac{2k\lambda}{r} = \frac{\lambda}{2\pi\varepsilon_0 r}`, note: "Infinite line of charge; field is radial and falls off as 1/r." },
        { latex: String.raw`E_{plane} = \frac{\sigma}{2\varepsilon_0}`, note: "Infinite sheet of charge: uniform, independent of distance." },
        { latex: String.raw`E_{capacitor} = \frac{\sigma}{\varepsilon_0}`, note: "Between two oppositely charged parallel plates (fields add); zero outside." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A ring of radius $R$ carries total charge $+Q$ distributed uniformly. The electric field at the exact center of the ring is</p>`,
          choices: [
            String.raw`zero`,
            String.raw`$kQ/R^2$, along the axis`,
            String.raw`$2kQ/R^2$, in the plane of the ring`,
            String.raw`$kQ/(2R^2)$, along the axis`
          ],
          answer: 0,
          solution: String.raw`<p>Every charge element $dq$ has a diametrically opposite partner whose field at the center is equal in magnitude and opposite in direction. The contributions cancel in pairs, so $E = 0$. The formula agrees: $E = kQz/(z^2+R^2)^{3/2} = 0$ at $z = 0$. (The <em>potential</em> there is not zero — that's topic 9.2.)</p>` },
        { type: "mcq",
          q: String.raw`<p>For the same ring, at what distance $z$ along the axis is the electric field magnitude greatest?</p>`,
          choices: [
            String.raw`$z = R$`,
            String.raw`$z = R/2$`,
            String.raw`$z = R/\sqrt{2}$`,
            String.raw`$z = R\sqrt{2}$`
          ],
          answer: 2,
          solution: String.raw`<p>Maximize $E(z) = kQz(z^2+R^2)^{-3/2}$: $\dfrac{dE}{dz} = kQ\left[(z^2+R^2)^{-3/2} - 3z^2(z^2+R^2)^{-5/2}\right] = 0$ gives $z^2+R^2 = 3z^2$, so $z = R/\sqrt{2}$. Physically, $E$ vanishes at the center (symmetry) and far away (point-charge falloff), so it must peak in between.</p>` },
        { type: "mcq",
          q: String.raw`<p>A thin semicircular arc of radius $R$ carries total charge $+Q$ distributed uniformly. The magnitude of the electric field at the center of curvature is</p>`,
          choices: [
            String.raw`$\dfrac{kQ}{R^2}$`,
            String.raw`$\dfrac{2kQ}{\pi R^2}$`,
            String.raw`zero`,
            String.raw`$\dfrac{\pi kQ}{2R^2}$`
          ],
          answer: 1,
          solution: String.raw`<p>With $\lambda = Q/(\pi R)$ and the arc parametrized by angle $\theta$ from $0$ to $\pi$, each element $dq = \lambda R\,d\theta$ contributes $dE = k\lambda\,d\theta/R$ toward the center; by symmetry only the components along the symmetry axis survive, each weighted by $\sin\theta$:</p>
$$E = \frac{k\lambda}{R}\int_0^{\pi}\sin\theta\,d\theta = \frac{2k\lambda}{R} = \frac{2kQ}{\pi R^2}$$
<p>It is not zero — a semicircle, unlike a full ring, has no opposing partner for each element.</p>` },
        { type: "frq",
          q: String.raw`<p>A thin insulating rod of length $2L$ lies along the $y$-axis, centered on the origin, carrying total charge $Q$ spread uniformly along its length. Point $P$ lies on the $x$-axis at distance $d$ from the origin.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Set up, with a clearly defined charge element, the integral for the electric field at $P$, and identify which component survives by symmetry.</p>`,
              solution: String.raw`<p>Let $\lambda = Q/(2L)$ and take an element $dq = \lambda\,dy$ at height $y$. Its distance to $P$ is $r = \sqrt{d^2+y^2}$, so $dE = \dfrac{k\lambda\,dy}{d^2+y^2}$. For every element at $+y$ there is a mirror element at $-y$ whose $y$-component of field cancels; only the $x$-component survives, weighted by $\cos\theta = d/\sqrt{d^2+y^2}$:</p>
$$E_x = \int_{-L}^{L}\frac{k\lambda\,dy}{d^2+y^2}\cdot\frac{d}{\sqrt{d^2+y^2}} = k\lambda d\int_{-L}^{L}\frac{dy}{(d^2+y^2)^{3/2}}$$` },
            { label: "(b)", prompt: String.raw`<p>Evaluate the integral to derive $E$ at $P$ in terms of $k$, $Q$, $L$, and $d$. (You may use $\displaystyle\int\frac{dy}{(d^2+y^2)^{3/2}} = \frac{y}{d^2\sqrt{d^2+y^2}}$.)</p>`,
              solution: String.raw`<p>Using the antiderivative:</p>
$$E_x = k\lambda d\left[\frac{y}{d^2\sqrt{d^2+y^2}}\right]_{-L}^{L} = k\lambda d\cdot\frac{2L}{d^2\sqrt{d^2+L^2}} = \frac{2k\lambda L}{d\sqrt{d^2+L^2}}$$
<p>Substituting $\lambda = Q/(2L)$:</p>
$$E = \frac{kQ}{d\sqrt{d^2+L^2}}\,,\quad\text{directed away from the rod (for } Q &gt; 0\text{)}$$` },
            { label: "(c)", prompt: String.raw`<p>Show that your result has the correct behavior in the two limits $d \gg L$ and $L \gg d$, identifying the physical meaning of each.</p>`,
              solution: String.raw`<p><strong>Far away</strong> ($d \gg L$): $\sqrt{d^2+L^2} \to d$, so $E \to kQ/d^2$ — the rod looks like a point charge. <strong>Very long rod</strong> ($L \gg d$): $\sqrt{d^2+L^2} \to L$, so $E \to \dfrac{kQ}{dL} = \dfrac{2k\lambda}{d}$ — exactly the infinite-line result with $1/d$ falloff. Both limits check out, confirming the derivation.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A thin disk of radius $R$ carries charge $Q$ spread uniformly over its surface (surface density $\sigma = Q/\pi R^2$). Point $P$ lies on the disk's axis at distance $z$ from its center. You may use the ring result $E_{ring} = \dfrac{kz\,dq}{(z^2+r'^2)^{3/2}}$ for a thin ring of radius $r'$ carrying charge $dq$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Treating the disk as a set of nested rings, write the charge $dq$ of the ring of radius $r'$ and width $dr'$, and set up the integral for $E$ at $P$.</p>`,
              solution: String.raw`<p>The ring of radius $r'$ and width $dr'$ has area $dA = 2\pi r'\,dr'$, so $dq = \sigma\,2\pi r'\,dr'$. Summing the axial fields of all rings:</p>
$$E = \int_0^R \frac{kz\,(2\pi\sigma r')\,dr'}{(z^2+r'^2)^{3/2}} = 2\pi k\sigma z\int_0^R\frac{r'\,dr'}{(z^2+r'^2)^{3/2}}$$` },
            { label: "(b)", prompt: String.raw`<p>Evaluate the integral and express $E$ in terms of $\sigma$, $z$, $R$, and $\varepsilon_0$.</p>`,
              solution: String.raw`<p>Substituting $u = z^2 + r'^2$, $du = 2r'\,dr'$:</p>
$$\int_0^R\frac{r'\,dr'}{(z^2+r'^2)^{3/2}} = \left[-\frac{1}{\sqrt{z^2+r'^2}}\right]_0^R = \frac{1}{z} - \frac{1}{\sqrt{z^2+R^2}}$$
<p>So $E = 2\pi k\sigma z\left(\dfrac{1}{z} - \dfrac{1}{\sqrt{z^2+R^2}}\right)$. With $2\pi k = \dfrac{1}{2\varepsilon_0}$:</p>
$$E = \frac{\sigma}{2\varepsilon_0}\left[1 - \frac{z}{\sqrt{z^2+R^2}}\right]$$` },
            { label: "(c)", prompt: String.raw`<p>Take the limit $R \to \infty$ and interpret the result. Then show that for $z \gg R$ the disk behaves like a point charge. (Hint: $(1+u)^{-1/2} \approx 1 - u/2$ for small $u$.)</p>`,
              solution: String.raw`<p><strong>Infinite sheet</strong> ($R \to \infty$): the bracket $\to 1$, giving $E = \sigma/(2\varepsilon_0)$, uniform and independent of $z$ — the infinite-plane field.</p>
<p><strong>Far away</strong> ($z \gg R$): write $\dfrac{z}{\sqrt{z^2+R^2}} = \left(1 + \dfrac{R^2}{z^2}\right)^{-1/2} \approx 1 - \dfrac{R^2}{2z^2}$. Then</p>
$$E \approx \frac{\sigma}{2\varepsilon_0}\cdot\frac{R^2}{2z^2} = \frac{\sigma \pi R^2}{4\pi\varepsilon_0 z^2} = \frac{kQ}{z^2}$$
<p>using $Q = \sigma\pi R^2$ — the point-charge limit, as required.</p>` }
          ] }
      ]
    },

    /* ============================ 8.5 ============================ */
    {
      id: "8.5",
      title: "Electric Flux",
      blurb: "Flux counts field lines through a surface — the bookkeeping concept that turns Gauss's law into a one-line calculation.",
      objectives: [
        "Calculate the electric flux through a flat surface in a uniform field using Φ = EA cos θ.",
        "Evaluate flux integrals Φ = ∫E·dA for simple nonuniform fields and curved surfaces.",
        "Distinguish open from closed surfaces and apply the sign convention for outward normals."
      ],
      sections: [
        { heading: "The Core Idea: Counting Field Lines",
          content: String.raw`<p><strong>Electric flux</strong> measures how much electric field "flows through" a surface — visually, the net number of field lines piercing it. For a uniform field $\vec{E}$ crossing a flat surface of area $A$:</p>
$$\Phi_E = \vec{E}\cdot\vec{A} = EA\cos\theta$$
<p>where $\vec{A}$ is the <strong>area vector</strong>: magnitude $A$, direction perpendicular (normal) to the surface, and $\theta$ is the angle between $\vec{E}$ and that normal. The three benchmark cases:</p>
<ul>
<li>$\theta = 0$ (field perpendicular to surface, parallel to normal): maximum flux, $\Phi = EA$.</li>
<li>$\theta = 90^\circ$ (field skims along the surface): zero flux — nothing pierces through.</li>
<li>$\theta = 180^\circ$: $\Phi = -EA$ — flux is negative when the field enters against the normal.</li>
</ul>
<p>Units: N·m²/C. Flux is a <em>scalar</em> — it can be positive, negative, or zero, but it has no direction.</p>` },
        { heading: "The General Definition: A Surface Integral",
          content: String.raw`<p>If the field varies over the surface, or the surface curves, chop it into patches $d\vec{A}$ small enough that $\vec{E}$ is uniform over each, and sum:</p>
$$\Phi_E = \int \vec{E}\cdot d\vec{A}$$
<p>For a <strong>closed</strong> surface (one that encloses a volume, like a sphere or a box) we write $\Phi_E = \oint\vec{E}\cdot d\vec{A}$ and adopt the universal convention: $d\vec{A}$ points <strong>outward</strong>. Then outgoing field lines count positive and incoming lines count negative — the closed-surface flux is the <em>net outflow</em> of field lines.</p>
<p>In practice the integral is rarely computed brute-force. Two simplifications do almost all the work: (1) where $\vec{E}\perp d\vec{A}$ (field skims the surface), that patch contributes zero; (2) where $E$ is constant in magnitude and parallel to $d\vec{A}$ everywhere on the patch, $\int\vec{E}\cdot d\vec{A} = EA$. Choosing surfaces so that every face falls into one of these two categories is the entire art of Gauss's law (next topic).</p>` },
        { heading: "Graph: Flux Through a Tilting Loop",
          graph: { xLabel: "θ, angle between E and normal (degrees)", yLabel: "Φ (N·m²/C)", xMin: 0, xMax: 180, yMin: -110, yMax: 110,
                   fns: [ { expr: "100*Math.cos(x*Math.PI/180)", label: "Φ = EA cos θ  (EA = 100 N·m²/C)", color: "#fbbf24" } ],
                   vlines: [ { x: 90, label: "θ = 90°: Φ = 0" } ] },
          graphCaption: "As a flat loop tilts in a uniform field, the flux follows a cosine — maximal when the normal aligns with E, zero when the field skims the surface, negative beyond 90°.",
          content: String.raw`<p>The cosine captures the <em>projection</em> idea: only the component of the area facing the field counts. Equivalently, $\Phi = E\,A_\perp$ where $A_\perp = A\cos\theta$ is the surface's "shadow" perpendicular to the field. This same cosine will return in magnetic flux and Faraday's law next semester.</p>` },
        { heading: "Open vs. Closed Surfaces and the Zero-Enclosed-Charge Result",
          content: String.raw`<p>An <strong>open</strong> surface (a disk, a rectangle, a hemisphere shell) has a rim; its normal direction is a choice you must state. A <strong>closed</strong> surface has no rim and its outward normal is fixed by convention.</p>
<p>Key fact: in any field created by charges <em>outside</em> a closed surface, every field line that enters must also exit, so the net flux is zero. Example: a cube in a uniform field. The face where the field enters contributes $-EA$, the exit face $+EA$, and the four side faces (field skimming, $\theta = 90^\circ$) contribute nothing: total $\Phi = 0$.</p>
<p>You can also use this to dodge hard integrals. To find the flux through a <em>hemisphere</em> of radius $R$ in a uniform field $E$ aligned with its axis: close the surface with the flat disk. The closed surface has zero net flux, and the disk's flux is $E\pi R^2$ inward — so the curved surface must carry $\Phi = \pi R^2 E$ outward. No surface integral needed.</p>
<div class="callout">Whenever a curved-surface flux looks nasty, close the surface and use what you know about the flat parts.</div>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Using the angle to the surface instead of to the normal.</strong> $\theta$ in $EA\cos\theta$ is measured from the <em>normal</em>. If a problem gives the angle to the plane of the surface, convert: the two angles are complementary.</li>
<li><strong>Thinking zero flux means zero field.</strong> A closed surface with no enclosed charge has zero <em>net</em> flux even in a strong external field — lines in equal lines out.</li>
<li><strong>Treating flux as a vector.</strong> It's a signed scalar; "the direction of the flux" is meaningless.</li>
<li><strong>Dropping the sign on inward flux.</strong> With outward normals, field entering a closed surface contributes negative flux.</li>
<li><strong>Confusing area $A$ with its perpendicular projection $A\cos\theta$.</strong> Only the projected area facing the field counts.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\Phi_E = \vec{E}\cdot\vec{A} = EA\cos\theta`, note: "Flux of a uniform field through a flat surface; θ measured from the surface normal." },
        { latex: String.raw`\Phi_E = \int \vec{E}\cdot d\vec{A}`, note: "General definition for any field and surface; reduces to EA when E is uniform and normal." },
        { latex: String.raw`\oint \vec{E}\cdot d\vec{A} = 0 \quad (q_{enc} = 0)`, note: "Net flux through a closed surface vanishes when no charge is enclosed — every entering line exits." },
        { latex: String.raw`[\Phi_E] = \text{N·m}^2/\text{C}`, note: "SI units of electric flux (equivalently V·m)." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A flat sheet of area $0.50\,\text{m}^2$ sits in a uniform field of $200\,\text{N/C}$. The normal to the sheet makes a $60^\circ$ angle with the field. The flux through the sheet is</p>`,
          choices: [
            String.raw`$100\,\text{N·m}^2/\text{C}$`,
            String.raw`$0$`,
            String.raw`$87\,\text{N·m}^2/\text{C}$`,
            String.raw`$50\,\text{N·m}^2/\text{C}$`
          ],
          answer: 3,
          solution: String.raw`<p>$\Phi = EA\cos\theta = (200)(0.50)\cos 60^\circ = 100\times 0.5 = 50\,\text{N·m}^2/\text{C}$. The $87$ distractor uses $\sin 60^\circ$ — the error you'd make by measuring the angle from the surface instead of from the normal.</p>` },
        { type: "mcq",
          q: String.raw`<p>A closed cubical box of side $s$ sits in a uniform electric field $\vec{E}$ perpendicular to two of its faces. The net electric flux through the box is</p>`,
          choices: [
            String.raw`zero`,
            String.raw`$Es^2$`,
            String.raw`$2Es^2$`,
            String.raw`$6Es^2$`
          ],
          answer: 0,
          solution: String.raw`<p>The entry face contributes $-Es^2$ (field opposes the outward normal), the exit face $+Es^2$, and the four parallel faces contribute zero ($\vec{E}\perp d\vec{A}$... i.e., the field skims them). Net: zero — consistent with no enclosed charge. A uniform field encloses no sources.</p>` },
        { type: "mcq",
          q: String.raw`<p>A hemispherical shell of radius $R$ is placed in a uniform field $\vec{E}$ with its flat circular face perpendicular to the field. The magnitude of the flux through the <em>curved</em> surface is</p>`,
          choices: [
            String.raw`$2\pi R^2 E$`,
            String.raw`$\pi R^2 E$`,
            String.raw`zero`,
            String.raw`$\tfrac{1}{2}\pi R^2 E$`
          ],
          answer: 1,
          solution: String.raw`<p>Close the surface with the flat disk: net flux through the closed surface must be zero (no enclosed charge). The disk intercepts flux of magnitude $E\cdot\pi R^2$, so the curved surface must pass exactly the same amount: $\Phi = \pi R^2 E$. Choosing $2\pi R^2 E$ uses the hemisphere's <em>area</em> — but flux depends on the projected area, not the surface area.</p>` },
        { type: "frq",
          q: String.raw`<p>A region contains a nonuniform field $\vec{E} = bx\,\hat{x}$, where $b$ is a positive constant. A closed cubical surface of side $s$ has one corner at the origin with edges along the $+x$, $+y$, $+z$ axes.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Determine the flux through each of the six faces of the cube.</p>`,
              solution: String.raw`<p>The field points along $\hat{x}$ everywhere, so the four faces whose normals are $\pm\hat{y}$ or $\pm\hat{z}$ have $\vec{E}\cdot d\vec{A} = 0$: zero flux. On the face at $x = 0$ the field magnitude is $b(0) = 0$, so its flux is zero as well. On the face at $x = s$, $\vec{E} = bs\,\hat{x}$ is uniform over the face and parallel to the outward normal $+\hat{x}$:</p>
$$\Phi_{x=s} = (bs)(s^2) = bs^3$$` },
            { label: "(b)", prompt: String.raw`<p>Find the net flux through the cube.</p>`,
              solution: String.raw`<p>Summing all six faces: $\Phi_{net} = 0 + 0 + 0 + 0 + 0 + bs^3 = bs^3$. The net flux is positive — more field exits than enters — which is only possible because the field <em>grows</em> with $x$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Is there charge inside the cube? Justify your answer using your flux result, without doing any further calculation.</p>`,
              solution: String.raw`<p>Yes. A nonzero net outward flux through a closed surface is impossible unless field lines <em>begin</em> inside it — and field lines begin only on positive charge. Since $\Phi_{net} = bs^3 &gt; 0$, the cube must enclose net positive charge. (Gauss's law, coming in 8.6, quantifies it: $q_{enc} = \varepsilon_0 b s^3$.)</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A point charge $+q$ sits at the center of an imaginary sphere of radius $r$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>By direct integration of $\Phi = \oint\vec{E}\cdot d\vec{A}$, compute the net flux through the sphere.</p>`,
              solution: String.raw`<p>By symmetry the field $\vec{E} = \dfrac{kq}{r^2}\hat{r}$ is everywhere radial — parallel to the outward normal $d\vec{A}$ — and has the same magnitude at every point of the sphere. The integral collapses:</p>
$$\Phi = \oint E\,dA = E\oint dA = \frac{kq}{r^2}\,(4\pi r^2) = 4\pi kq = \frac{q}{\varepsilon_0}$$` },
            { label: "(b)", prompt: String.raw`<p>Explain, in terms of both the mathematics and the field-line picture, why the answer does not depend on the radius $r$.</p>`,
              solution: String.raw`<p>Mathematically, $E$ falls off as $1/r^2$ while the area grows as $r^2$ — the factors cancel exactly. That cancellation is special to the inverse-square law. Pictorially, every field line leaving the charge crosses <em>every</em> concentric sphere exactly once; bigger spheres intercept the same number of lines, just spread more thinly. The flux counts lines, not line density, so it is the same for all $r$.</p>` },
            { label: "(c)", prompt: String.raw`<p>The same charge is now placed at the center of a cube. Using a symmetry argument (no integration), determine the flux through one face of the cube.</p>`,
              solution: String.raw`<p>The total flux through any closed surface around the charge is the same $q/\varepsilon_0$ — the count of field lines doesn't care about the surface's shape, only that it encloses the charge. A cube centered on the charge treats all six faces identically by symmetry, so each face carries one sixth:</p>
$$\Phi_{face} = \frac{q}{6\varepsilon_0}$$
<p>No integral over the awkward flat-face geometry is ever needed — symmetry does all the work.</p>` }
          ] }
      ]
    },

    /* ============================ 8.6 ============================ */
    {
      id: "8.6",
      title: "Gauss's Law",
      blurb: "Net flux through any closed surface equals enclosed charge over ε₀ — and with the right symmetry, fields fall out in one line.",
      objectives: [
        "State Gauss's law and explain why the flux depends only on the enclosed charge.",
        "Choose appropriate Gaussian surfaces to derive the fields of spheres, infinite lines, and infinite planes of charge.",
        "Apply Gauss's law to conductors in electrostatic equilibrium: zero interior field, surface charge, and induced charges on cavity walls."
      ],
      sections: [
        { heading: "The Core Idea: Flux Counts Enclosed Charge",
          content: String.raw`<p><strong>Gauss's law</strong> is the inverse-square law repackaged as a statement about flux:</p>
$$\oint \vec{E}\cdot d\vec{A} = \frac{q_{enc}}{\varepsilon_0}$$
<p>The net flux through <em>any</em> closed surface equals the enclosed charge divided by $\varepsilon_0$ — regardless of the surface's shape or size, and regardless of where the enclosed charges sit inside. Charges <em>outside</em> the surface contribute field but zero <em>net</em> flux (their lines pass in and back out).</p>
<p>Read it carefully: the $\vec{E}$ in the integral is the <em>total</em> field from all charges everywhere; only $q_{enc}$ on the right side is restricted to the inside. Gauss's law is always true, but it is only <em>useful</em> for finding $E$ when symmetry lets you pull $E$ out of the integral. Three symmetries qualify: <strong>spherical</strong>, <strong>cylindrical</strong> (infinite line/cylinder), and <strong>planar</strong> (infinite sheet).</p>
<div class="callout key">The recipe: (1) identify the symmetry and the direction of E; (2) choose a Gaussian surface on which E is either constant-and-perpendicular or skimming; (3) write Φ = E·(area of the perpendicular part); (4) set it equal to q_enc/ε₀ and solve.</div>` },
        { heading: "Interactive: Gaussian Surfaces",
          sim: "gauss",
          simCaption: "Drag charges in and out of the Gaussian surface and resize it. Watch the flux readout: it jumps only when a charge crosses the boundary — never when you reshape the surface or move outside charges around.",
          content: String.raw`<p>This is the entire content of Gauss's law in one interactive picture: flux is blind to everything except the total enclosed charge.</p>` },
        { heading: "Derivation: Spherical Symmetry",
          content: String.raw`<p>Take a uniformly charged sphere (an insulator) of radius $R$ and total charge $Q$, with $\rho = \dfrac{Q}{\tfrac{4}{3}\pi R^3}$. Symmetry forces $\vec{E}$ to be radial with magnitude depending only on $r$. Choose a concentric spherical Gaussian surface of radius $r$, so $\Phi = E\,(4\pi r^2)$ on any such sphere.</p>
<p><strong>Outside</strong> ($r \ge R$): the surface encloses all of $Q$:</p>
$$E(4\pi r^2) = \frac{Q}{\varepsilon_0} \;\Rightarrow\; E = \frac{Q}{4\pi\varepsilon_0 r^2} = \frac{kQ}{r^2}$$
<p>Identical to a point charge at the center — true for <em>any</em> spherically symmetric distribution.</p>
<p><strong>Inside</strong> ($r &lt; R$): the enclosed charge is only $q_{enc} = \rho\cdot\tfrac{4}{3}\pi r^3 = Q\,\dfrac{r^3}{R^3}$:</p>
$$E(4\pi r^2) = \frac{Qr^3}{\varepsilon_0 R^3} \;\Rightarrow\; E = \frac{kQr}{R^3}$$
<p>The field grows <em>linearly</em> from zero at the center, peaks at the surface with value $kQ/R^2$, then falls off as $1/r^2$. The two expressions agree at $r = R$ — fields of smooth charge distributions are continuous.</p>` },
        { heading: "Derivations: Line and Plane",
          content: String.raw`<p><strong>Infinite line</strong>, density $\lambda$: symmetry makes $\vec{E}$ point radially outward from the line with magnitude depending only on distance $r$. Choose a coaxial cylinder of radius $r$ and length $\ell$. The end caps contribute nothing ($\vec{E}$ skims them); the curved wall has $E$ constant and perpendicular:</p>
$$E\,(2\pi r\ell) = \frac{\lambda\ell}{\varepsilon_0} \;\Rightarrow\; E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}$$
<p>— the same result that took a hard integral in 8.4, now in one line.</p>
<p><strong>Infinite plane</strong>, density $\sigma$: symmetry makes $\vec{E}$ perpendicular to the plane, pointing away on both sides, with magnitude independent of position along the plane. Choose a "pillbox" cylinder of face area $A$ poking symmetrically through the sheet. Both caps catch outgoing flux $EA$; the side wall is skimmed:</p>
$$2EA = \frac{\sigma A}{\varepsilon_0} \;\Rightarrow\; E = \frac{\sigma}{2\varepsilon_0}$$
<p>independent of distance — confirming the disk limit from 8.4. Each derivation rests entirely on the symmetry argument; without it, $E$ cannot come out of the integral.</p>` },
        { heading: "Conductors in Electrostatic Equilibrium",
          content: String.raw`<p>Gauss's law plus one fact — charges in a conductor move freely until they stop — yields four powerful conclusions about conductors in equilibrium:</p>
<ul>
<li>$\vec{E} = 0$ <strong>everywhere inside the conducting material.</strong> If it weren't, free charges would still be moving.</li>
<li><strong>All excess charge resides on the surface.</strong> A Gaussian surface just inside the conductor has zero flux everywhere, so it encloses zero net charge.</li>
<li><strong>Just outside the surface</strong>, $\vec{E}$ is perpendicular to it with magnitude $E = \sigma/\varepsilon_0$ (pillbox with one cap inside, where $E = 0$).</li>
<li><strong>Cavities:</strong> a charge $+q$ inside a cavity induces exactly $-q$ on the cavity wall (Gaussian surface within the metal encloses zero net charge), pushing the balance to the outer surface.</li>
</ul>
<div class="callout warn">Note the factor-of-two trap: an isolated sheet of charge gives σ/2ε₀, but the field just outside a conductor's surface is σ/ε₀. The conductor's other charges fold the "other half" of the field into the total.</div>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>"Zero flux means zero field."</strong> No — zero net flux means zero <em>enclosed charge</em>. External charges can still produce a strong field on the surface.</li>
<li><strong>Forgetting that outside charges still shape $\vec{E}$.</strong> They drop out of the flux, not out of the field.</li>
<li><strong>Using Gauss's law without symmetry.</strong> For a dipole or a finite rod, the law is still true but you cannot pull $E$ out of the integral — it tells you nothing directly about $E$.</li>
<li><strong>Wrong enclosed charge for $r &lt; R$:</strong> inside a uniform sphere you must scale by volume, $q_{enc} = Q(r/R)^3$ — not use all of $Q$.</li>
<li><strong>Conductor vs. insulator interiors:</strong> $E = 0$ inside a conductor in equilibrium, but inside a charged <em>insulator</em> $E = kQr/R^3 \ne 0$.</li>
<li><strong>Mixing $\sigma/2\varepsilon_0$ (isolated sheet) with $\sigma/\varepsilon_0$ (conductor surface).</strong></li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\oint \vec{E}\cdot d\vec{A} = \frac{q_{enc}}{\varepsilon_0}`, note: "Gauss's law: net flux through any closed surface equals enclosed charge over ε₀." },
        { latex: String.raw`E_{outside} = \frac{kQ}{r^2}, \qquad E_{inside} = \frac{kQr}{R^3}`, note: "Uniformly charged insulating sphere of radius R: point-charge field outside, linear growth inside." },
        { latex: String.raw`E_{line} = \frac{\lambda}{2\pi\varepsilon_0 r}`, note: "Infinite line of charge, from a coaxial cylindrical Gaussian surface." },
        { latex: String.raw`E_{plane} = \frac{\sigma}{2\varepsilon_0}`, note: "Infinite sheet of charge, from a pillbox Gaussian surface." },
        { latex: String.raw`E_{cond.\ surface} = \frac{\sigma}{\varepsilon_0}`, note: "Field just outside a conductor in equilibrium; E = 0 inside the conducting material." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A closed surface encloses two point charges: $+3.0\,\mu\text{C}$ and $-5.0\,\mu\text{C}$. A third charge of $+7.0\,\mu\text{C}$ sits just outside the surface. The net electric flux through the surface is approximately</p>`,
          choices: [
            String.raw`$+2.3\times10^{5}\,\text{N·m}^2/\text{C}$`,
            String.raw`$-9.0\times10^{5}\,\text{N·m}^2/\text{C}$`,
            String.raw`$-2.3\times10^{5}\,\text{N·m}^2/\text{C}$`,
            String.raw`zero`
          ],
          answer: 2,
          solution: String.raw`<p>Only enclosed charge counts: $q_{enc} = +3.0 - 5.0 = -2.0\,\mu\text{C}$. Then $\Phi = q_{enc}/\varepsilon_0 = (-2.0\times10^{-6})/(8.85\times10^{-12}) \approx -2.3\times10^{5}\,\text{N·m}^2/\text{C}$. The outside $+7\,\mu\text{C}$ alters the field on the surface but contributes zero net flux.</p>` },
        { type: "mcq",
          q: String.raw`<p>An insulating sphere of radius $R$ carries total charge $Q$ distributed uniformly throughout its volume. The electric field magnitude at $r = R/2$ from the center is</p>`,
          choices: [
            String.raw`$\dfrac{4kQ}{R^2}$`,
            String.raw`$\dfrac{kQ}{4R^2}$`,
            String.raw`$\dfrac{kQ}{R^2}$`,
            String.raw`$\dfrac{kQ}{2R^2}$`
          ],
          answer: 3,
          solution: String.raw`<p>Inside a uniform sphere, $E = kQr/R^3$. At $r = R/2$: $E = kQ(R/2)/R^3 = kQ/(2R^2)$. The $kQ/(4R^2)$ distractor wrongly applies the point-charge formula $kQ/r^2$ with all of $Q$ — but a Gaussian sphere at $R/2$ encloses only $Q(1/2)^3 = Q/8$ of the charge.</p>` },
        { type: "mcq",
          q: String.raw`<p>A point charge $+q$ sits at the center of a neutral... wait, no — at the center of a conducting spherical shell that carries net charge $-3q$. The charge on the shell's <em>outer</em> surface is</p>`,
          choices: [
            String.raw`$-2q$`,
            String.raw`$-3q$`,
            String.raw`$-4q$`,
            String.raw`$-q$`
          ],
          answer: 0,
          solution: String.raw`<p>A Gaussian surface inside the conducting metal must enclose zero net charge (since $E = 0$ there). It encloses $+q$ plus the inner-surface charge, so the inner surface holds $-q$. The shell's total is $-3q$, leaving $-3q - (-q) = -2q$ on the outer surface. Outside the shell, the field looks like a point charge of $+q + (-3q) = -2q$ at the center.</p>` },
        { type: "frq",
          q: String.raw`<p>An insulating solid sphere of radius $R$ carries charge $Q$ distributed uniformly throughout its volume.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Use Gauss's law to derive the electric field magnitude for $r \ge R$. State your choice of Gaussian surface and the symmetry argument that justifies it.</p>`,
              solution: String.raw`<p>Spherical symmetry: $\vec{E}$ must point radially and its magnitude can depend only on $r$. Choose a concentric Gaussian sphere of radius $r \ge R$; on it, $\vec{E}\parallel d\vec{A}$ with constant magnitude, so $\oint\vec{E}\cdot d\vec{A} = E(4\pi r^2)$. The surface encloses the full charge $Q$:</p>
$$E(4\pi r^2) = \frac{Q}{\varepsilon_0} \;\Rightarrow\; E = \frac{kQ}{r^2}$$
<p>Outside, the sphere is indistinguishable from a point charge at its center.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive the field magnitude for $r &lt; R$ in terms of $k$, $Q$, $r$, and $R$.</p>`,
              solution: String.raw`<p>Same Gaussian sphere, now with $r &lt; R$. The enclosed charge scales with enclosed volume:</p>
$$q_{enc} = \rho\cdot\frac{4}{3}\pi r^3 = \frac{Q}{\frac{4}{3}\pi R^3}\cdot\frac{4}{3}\pi r^3 = Q\frac{r^3}{R^3}$$
<p>Gauss's law: $E(4\pi r^2) = \dfrac{Qr^3}{\varepsilon_0 R^3}$, so</p>
$$E = \frac{kQr}{R^3}$$
<p>linear in $r$, vanishing at the center.</p>` },
            { label: "(c)", prompt: String.raw`<p>Sketch (or describe precisely) the graph of $E(r)$ from $r = 0$ to $r = 3R$, giving the value at $r = R$ and commenting on continuity.</p>`,
              solution: String.raw`<p>$E$ rises linearly from $0$ at the center to a maximum $E(R) = kQ/R^2$ at the surface, then decreases as $kQ/r^2$: at $r = 2R$ it is $kQ/4R^2$, at $r = 3R$ it is $kQ/9R^2$. The two branches meet at $r = R$ with the same value, so $E(r)$ is continuous — as expected for a smooth volume distribution (only idealized <em>surface</em> charges produce discontinuous jumps in E).</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A long straight wire carries uniform linear charge density $+\lambda$. It is surrounded coaxially by a long <em>neutral</em> conducting cylindrical shell of inner radius $a$ and outer radius $b$. Treat the system as infinitely long.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Use Gauss's law to derive the electric field in the region between the wire and the shell ($r &lt; a$, outside the wire).</p>`,
              solution: String.raw`<p>Cylindrical symmetry: $\vec{E}$ is radial with magnitude depending only on $r$. Choose a coaxial Gaussian cylinder of radius $r$ ($r &lt; a$) and length $\ell$. End caps are skimmed (zero flux); the curved wall gives $\Phi = E(2\pi r\ell)$. Enclosed charge: $\lambda\ell$.</p>
$$E(2\pi r\ell) = \frac{\lambda\ell}{\varepsilon_0} \;\Rightarrow\; E = \frac{\lambda}{2\pi\varepsilon_0 r}\,,\quad\text{radially outward}$$` },
            { label: "(b)", prompt: String.raw`<p>Determine the induced charge per unit length on the inner ($r = a$) and outer ($r = b$) surfaces of the shell. Justify with Gaussian surfaces.</p>`,
              solution: String.raw`<p>Take a Gaussian cylinder with $a &lt; r &lt; b$, inside the conducting metal where $E = 0$: the flux is zero, so the enclosed charge per length must vanish. It encloses $+\lambda$ (wire) plus $\lambda_{inner}$, so</p>
$$\lambda_{inner} = -\lambda$$
<p>The shell is neutral overall, so the outer surface must carry</p>
$$\lambda_{outer} = +\lambda$$
<p>The wire's field drives electrons of the shell to its inner wall, exposing positive charge on the outer wall.</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the electric field for $a &lt; r &lt; b$ and for $r &gt; b$. Comment on what the shell does — and does not — change about the external field.</p>`,
              solution: String.raw`<p>For $a &lt; r &lt; b$ (inside the metal): $E = 0$, by the defining property of a conductor in equilibrium. For $r &gt; b$: a Gaussian cylinder encloses $+\lambda - \lambda + \lambda = +\lambda$ per unit length, so</p>
$$E = \frac{\lambda}{2\pi\varepsilon_0 r}$$
<p>— exactly the bare wire's field. The neutral shell rearranges its own charge and creates a field-free zone within its metal, but it cannot alter the net enclosed charge, so the exterior field is completely unchanged.</p>` }
          ] }
      ]
    }
  ]
});
