/* data/em-u12.js — Unit 12: Magnetic Fields and Electromagnetism */
AP.registerUnit({
  id: 12,
  course: "em",
  title: "Magnetic Fields and Electromagnetism",
  weight: "10–20%",
  tagline: "Moving charges make magnetic fields — and magnetic fields push back on moving charges.",
  bigIdeas: [
    "Magnetic field lines always close on themselves: there are no magnetic monopoles, so the net magnetic flux through any closed surface is zero.",
    "The magnetic force on a charge is always perpendicular to its velocity, so it steers particles without changing their speed.",
    "Biot–Savart builds a field by summing contributions of current elements; Ampère's law extracts the field instantly whenever the symmetry is high enough."
  ],
  topics: [

    /* ------------------------------------------------------------- 12.1 */
    {
      id: "12.1",
      title: "Magnetic Fields",
      blurb: "What magnetic fields are, why their field lines never end, and why you can't isolate a north pole.",
      objectives: [
        "Describe the properties of a magnetic field and interpret magnetic field line diagrams.",
        "Explain why magnetic field lines form closed loops and why no magnetic monopoles exist, using Gauss's law for magnetism.",
        "Compare the behavior of ferromagnetic, paramagnetic, and diamagnetic materials in terms of permeability."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>A magnetic field $\vec{B}$ is a vector field, measured in teslas ($1\,\text{T} = 1\,\text{N}/(\text{A}\cdot\text{m})$), that exerts forces on <strong>moving</strong> charges and on other magnets. Every magnetic field we know of is ultimately produced by moving charge: currents in wires, electron orbital motion, and intrinsic electron spin. A bar magnet is magnetic because countless atomic current loops inside it are aligned.</p>
<p>The field at a point tells you two things: the direction a compass needle would settle, and (through $\vec{F} = q\vec{v}\times\vec{B}$, coming in 12.2) how hard the field can push a moving charge. Field lines visualize this: the line's direction is the local $\vec{B}$ direction, and line density encodes field strength.</p>
<div class="callout key">Unlike electric field lines, magnetic field lines never start or stop anywhere. They always form closed loops.</div>` },
        { heading: "No Monopoles: Gauss's Law for Magnetism",
          content: String.raw`<p>Electric field lines begin on positive charges and end on negative ones, which is exactly what Gauss's law says: net flux out of a closed surface counts the enclosed charge. The magnetic analog would require a <em>magnetic charge</em> — an isolated north or south pole. No experiment has ever found one. Cut a bar magnet in half and you get two complete magnets, each with both poles, because the field is really made by aligned atomic current loops, and half a stack of loops is still a stack of loops.</p>
<p>Mathematically this is <strong>Gauss's law for magnetism</strong>:</p>
<p>$$\oint \vec{B}\cdot d\vec{A} = 0$$</p>
<p>For <em>any</em> closed surface — even one swallowing just the north end of a magnet — every field line that enters must also leave. As many lines pierce inward as outward, so the net flux is always exactly zero. This is one of Maxwell's four equations, and it holds with no exceptions.</p>` },
        { heading: "Interactive: Field of a Current-Carrying Wire",
          sim: "wireB",
          simParams: { "preset": "wire" },
          simCaption: "Increase the current and watch the circular field lines tighten around the wire. Flip the current direction and confirm the right-hand rule: thumb along I, fingers curl along B.",
          content: String.raw`<p>The simplest current that makes a field is a long straight wire. Its field lines are concentric circles around the wire — a perfect illustration that magnetic field lines close on themselves. Point your right thumb along the current; your curled fingers give the direction of $\vec{B}$. Notice the lines have no endpoints anywhere: no sources, no sinks.</p>` },
        { heading: "Magnetic Materials and Permeability",
          content: String.raw`<p>The constant $\mu_0 = 4\pi\times 10^{-7}\,\text{T}\cdot\text{m/A}$ — the <strong>permeability of free space</strong> — sets how much field a given current produces in vacuum. Inside matter, atomic dipoles respond to an applied field and modify it. We summarize the material with a relative permeability $\mu_r$, so the effective permeability is $\mu = \mu_r \mu_0$.</p>
<ul>
<li><strong>Ferromagnetic</strong> (iron, nickel, cobalt): atomic dipoles lock into aligned domains; $\mu_r$ can be in the hundreds or thousands. These materials strongly amplify fields and can remain magnetized.</li>
<li><strong>Paramagnetic</strong> (aluminum, oxygen): dipoles align weakly with the field; $\mu_r$ is barely above 1. Weakly attracted to magnets.</li>
<li><strong>Diamagnetic</strong> (copper, water, bismuth): induced dipoles oppose the field; $\mu_r$ is slightly below 1. Weakly repelled.</li>
</ul>
<p>On the AP exam you mainly need the qualitative picture: ferromagnets amplify and remember fields; the other two respond feebly.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Field lines do not stop at the poles.</strong> Inside a bar magnet the field continues from the south pole back to the north pole, completing the loop. Outside, lines run N to S; inside, S to N.</li>
<li><strong>Zero net flux does not mean zero field.</strong> $\oint \vec{B}\cdot d\vec{A} = 0$ for a closed surface in a strong field — flux in simply equals flux out.</li>
<li><strong>Magnetic fields are not "magnetic forces."</strong> A field can exist where it exerts no force at all (on a stationary charge, for instance).</li>
<li><strong>Cutting a magnet never isolates a pole.</strong> Each fragment has its own north and south, because magnetism comes from current loops, not magnetic charge.</li>
<li>Don't write Gauss's law for magnetism with $q_{enc}$ on the right side — that's the <em>electric</em> version. The magnetic version is always zero.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\oint \vec{B}\cdot d\vec{A} = 0`, note: "Gauss's law for magnetism: net magnetic flux through any closed surface is zero — no monopoles." },
        { latex: String.raw`\mu = \mu_r \mu_0`, note: "Permeability of a material; ferromagnets have large relative permeability." },
        { latex: String.raw`\mu_0 = 4\pi\times 10^{-7}\ \text{T}\cdot\text{m/A}`, note: "Permeability of free space; appears in every current-to-field formula." },
        { latex: String.raw`1\ \text{T} = 1\ \dfrac{\text{N}}{\text{A}\cdot\text{m}}`, note: "The tesla, defined from the force a field exerts per ampere per meter of wire." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>Which statement about magnetic field lines is correct?</p>`,
          choices: [
            String.raw`They begin on north poles and terminate on south poles.`,
            String.raw`They form closed loops with no beginning or end.`,
            String.raw`They begin and end on moving charges.`,
            String.raw`They point from low field strength toward high field strength.`
          ],
          answer: 1,
          solution: String.raw`<p>Because there are no magnetic monopoles, field lines cannot start or stop anywhere — they must close on themselves. Outside a bar magnet they run N to S, but they continue <em>through</em> the magnet from S back to N, completing closed loops. Choice A describes only the exterior portion and is the classic trap.</p>` },
        { type: "mcq",
          q: String.raw`<p>A closed Gaussian surface completely encloses the north-pole half of a bar magnet (the magnet sticks out through the surface is <em>not</em> the case — the entire north half, including the cut face region, is inside). The net magnetic flux through this closed surface is</p>`,
          choices: [
            String.raw`positive, because net field lines exit near the north pole`,
            String.raw`negative, because field lines must return to the magnet`,
            String.raw`exactly zero`,
            String.raw`impossible to determine without knowing the magnet's strength`
          ],
          answer: 2,
          solution: String.raw`<p>$\oint \vec{B}\cdot d\vec{A} = 0$ for <em>every</em> closed surface, no matter what it encloses. Even around "just the north end," every field line that exits the surface re-enters it somewhere else (lines pass through the magnet's interior and through the surface again). There is no magnetic charge to act as a source of net flux.</p>` },
        { type: "mcq",
          q: String.raw`<p>Inside a bar magnet, between its two poles, the magnetic field</p>`,
          choices: [
            String.raw`points from the north pole toward the south pole, antiparallel to the outside field`,
            String.raw`is zero, since field lines exist only outside the magnet`,
            String.raw`points from the south pole toward the north pole, completing closed loops`,
            String.raw`points radially outward from the magnet's central axis`
          ],
          answer: 2,
          solution: String.raw`<p>Field lines must form closed loops. Outside, they run from N to S; to close, they must run from S to N <em>inside</em> the magnet. The interior field is actually very strong — the lines are bunched tightly together there. Thinking the inside field runs N to S (like the electric field inside a charged capacitor or dipole) is the standard exam-level trap: an electric dipole's internal field opposes its dipole moment, but a magnet's internal $\vec{B}$ is parallel to its moment.</p>` },
        { type: "frq",
          q: String.raw`<p>A student claims: "Magnetic fields are just like electric fields, so if I cut a bar magnet in half at its midpoint, I will get an isolated north pole and an isolated south pole."</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>State Gauss's law for magnetism and contrast it with Gauss's law for electricity. Explain what the difference implies about magnetic field lines.</p>`,
              solution: String.raw`<p>Gauss's law for magnetism: $\oint \vec{B}\cdot d\vec{A} = 0$ for every closed surface. Gauss's law for electricity: $\oint \vec{E}\cdot d\vec{A} = q_{enc}/\varepsilon_0$, which can be nonzero because electric charges exist and act as sources/sinks of field lines. Since the magnetic flux integral is <em>always</em> zero, there is no magnetic analog of charge: no point where field lines begin or end. Therefore magnetic field lines must form closed loops.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Explain, in terms of the microscopic origin of magnetism, what actually happens when the magnet is cut in half. Is the student's claim correct?</p>`,
              solution: String.raw`<p>The claim is incorrect. A bar magnet's field arises from aligned atomic current loops (electron spin and orbital motion), not from magnetic charges sitting at the ends. Cutting the magnet leaves two shorter stacks of aligned current loops; each stack still has field lines exiting one face (its north pole) and entering the other (its south pole). Each half is a complete dipole magnet. No matter how finely you subdivide — down to a single electron — you always obtain dipoles, never isolated poles.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>If a magnetic monopole <em>did</em> exist and were placed inside a closed surface, what would $\oint \vec{B}\cdot d\vec{A}$ equal, qualitatively? Justify briefly.</p>`,
              solution: String.raw`<p>It would be nonzero — proportional to the enclosed "magnetic charge," in direct analogy with Gauss's law for electricity. Field lines would radiate from the monopole and terminate at infinity (or on an opposite monopole), so a surface enclosing it would have a net outward (north monopole) or inward (south monopole) flux. The experimental fact that this flux is always measured to be zero is the evidence that monopoles, if they exist at all, are not found in ordinary matter.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A closed surface is shaped like a soup can (a cylinder with two flat end caps), placed in a nonuniform magnetic field. Measurements give: magnetic flux <em>into</em> the left end cap, $\Phi_1 = 8.0\times 10^{-4}\,\text{Wb}$; magnetic flux <em>out of</em> the curved side wall, $\Phi_2 = 3.0\times 10^{-4}\,\text{Wb}$.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>State the physical law that determines the flux through the right end cap, and explain why it applies here even though the field is nonuniform.</p>`,
              solution: String.raw`<p>Gauss's law for magnetism: $\oint \vec{B}\cdot d\vec{A} = 0$ for any closed surface. It applies universally — uniform or nonuniform field, any shape of surface — because it expresses the absence of magnetic monopoles, not any special symmetry. The total outward flux summed over <em>all</em> pieces of the closed surface must vanish.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Calculate the magnitude and direction (into or out of the can) of the magnetic flux through the right end cap.</p>`,
              solution: String.raw`<p>Take outward flux as positive. Left cap: flux is into the can, so $\Phi_{left} = -8.0\times 10^{-4}\,\text{Wb}$. Side wall: $\Phi_{side} = +3.0\times 10^{-4}\,\text{Wb}$. Then
$$\Phi_{left} + \Phi_{side} + \Phi_{right} = 0$$
$$\Phi_{right} = -(-8.0 + 3.0)\times 10^{-4} = +5.0\times 10^{-4}\,\text{Wb}.$$
The flux through the right cap is $5.0\times 10^{-4}\,\text{Wb}$ directed <strong>out of</strong> the can.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>If the same surface were placed in an electric field instead, would the analogous statement (total electric flux equals zero) necessarily hold? Justify your answer.</p>`,
              solution: String.raw`<p>No. The electric flux through a closed surface equals $q_{enc}/\varepsilon_0$, which is zero only if the surface encloses no net charge. If the can enclosed, say, a positive point charge, the total electric flux would be positive. The magnetic result is special precisely because nature provides no magnetic charge for the surface to enclose.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------- 12.2 */
    {
      id: "12.2",
      title: "Magnetism and Moving Charges",
      blurb: "The cross-product force that steers charges in circles, sorts ions by mass, and pushes current-carrying wires.",
      objectives: [
        "Calculate the magnetic force on a moving charge using the vector cross product and the right-hand rule.",
        "Analyze circular and helical motion of charged particles in uniform magnetic fields, deriving the radius and period.",
        "Apply crossed electric and magnetic fields to velocity selectors and mass spectrometers.",
        "Calculate the force on a current-carrying wire in a magnetic field."
      ],
      sections: [
        { heading: "The Core Idea: a Sideways Force",
          content: String.raw`<p>A charge $q$ moving with velocity $\vec{v}$ through a magnetic field $\vec{B}$ feels</p>
<p>$$\vec{F} = q\,\vec{v}\times\vec{B}, \qquad |\vec{F}| = |q|\,v B \sin\theta$$</p>
<p>where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$. Three immediate consequences:</p>
<ul>
<li>A <strong>stationary</strong> charge ($v = 0$) feels nothing.</li>
<li>A charge moving <strong>parallel</strong> to $\vec{B}$ ($\theta = 0$ or $180^\circ$) feels nothing.</li>
<li>The force is always <strong>perpendicular to both</strong> $\vec{v}$ and $\vec{B}$.</li>
</ul>
<p>Right-hand rule: fingers point along $\vec{v}$, curl toward $\vec{B}$; your thumb gives $\vec{F}$ for a positive charge. For an electron or any negative charge, <em>reverse</em> the result.</p>
<div class="callout key">Because $\vec{F}\perp\vec{v}$ always, the magnetic force does <strong>zero work</strong>: $P = \vec{F}\cdot\vec{v} = 0$. It changes a particle's direction, never its speed or kinetic energy.</div>` },
        { heading: "Circular and Helical Motion",
          content: String.raw`<p>Launch a charge perpendicular to a uniform $\vec{B}$ and the constant-magnitude, always-perpendicular force is exactly what uniform circular motion requires. Newton's second law in the radial direction:</p>
<p>$$qvB = \frac{mv^2}{r} \quad\Longrightarrow\quad r = \frac{mv}{qB}$$</p>
<p>Faster or heavier particles sweep larger circles; stronger fields or larger charges tighten them. The period is</p>
<p>$$T = \frac{2\pi r}{v} = \frac{2\pi m}{qB}$$</p>
<p>— remarkably <em>independent of speed</em>. Fast particles travel bigger circles in the same time (this is the principle behind the cyclotron).</p>
<p>If the velocity also has a component $v_\parallel$ along $\vec{B}$, that component is untouched by the force (no force parallel to $\vec{B}$). The particle spirals: a circle of radius $r = m v_\perp / qB$ in the perpendicular plane, drifting along the field at $v_\parallel$ — a <strong>helix</strong> of pitch $p = v_\parallel T$.</p>` },
        { heading: "Interactive: Charge in a Magnetic Field",
          sim: "chargeInB",
          simCaption: "Increase the speed and watch the radius grow proportionally while the period stays fixed. Flip the sign of the charge and confirm the circulation direction reverses.",
          content: String.raw`<p>Verify $r = mv/qB$ live: double $v$ and the circle's radius doubles; double $B$ and it halves. Watch the speed readout — it never changes, because the magnetic force does no work.</p>` },
        { heading: "Velocity Selectors and Wires",
          content: String.raw`<p><strong>Velocity selector.</strong> Send charges through perpendicular ("crossed") $\vec{E}$ and $\vec{B}$ fields arranged so the electric force $q\vec{E}$ and the magnetic force $q\vec{v}\times\vec{B}$ oppose each other. They balance only when</p>
<p>$$qE = qvB \quad\Longrightarrow\quad v = \frac{E}{B}$$</p>
<p>Notice $q$ and $m$ cancel: <em>every</em> species with exactly this speed sails straight through, regardless of charge or mass. Faster particles are deflected one way, slower ones the other.</p>
<p><strong>Force on a wire.</strong> A current is a stream of moving charges, so a wire carrying current $I$ in a field feels a force. For a straight segment of length $L$ in a uniform field,</p>
<p>$$\vec{F} = I\,\vec{L}\times\vec{B}, \qquad |\vec{F}| = BIL\sin\theta$$</p>
<p>with $\vec{L}$ pointing along the current. For a curved wire or nonuniform field, integrate: $d\vec{F} = I\,d\vec{l}\times\vec{B}$.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Forgetting the negative charge flip.</strong> The right-hand rule gives the force on a <em>positive</em> charge. For electrons, reverse the answer (or use your left hand).</li>
<li><strong>Claiming magnetic forces change speed.</strong> They can't — $\vec{F}\perp\vec{v}$ means zero work, so kinetic energy is constant. Only the direction of $\vec{v}$ changes.</li>
<li><strong>Using total speed instead of the perpendicular component</strong> in $r = mv_\perp/qB$ for helical motion.</li>
<li><strong>Velocity selector confusion:</strong> $v = E/B$ is for crossed fields in balance; it has nothing to do with the circular-motion radius formula. In a mass spectrometer the selector comes <em>first</em>, then the field region where $r = mv/qB$ sorts by mass.</li>
<li><strong>Mixing up $\sin\theta$ and $\cos\theta$:</strong> maximum force when $\vec{v}\perp\vec{B}$, zero force when parallel.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{F} = q\,\vec{v}\times\vec{B}`, note: "Magnetic force on a moving charge; magnitude qvB sin θ, direction by the right-hand rule (reverse for negative q)." },
        { latex: String.raw`r = \dfrac{mv}{qB}`, note: "Radius of circular motion for a charge moving perpendicular to a uniform B; use the perpendicular velocity component for helices." },
        { latex: String.raw`T = \dfrac{2\pi m}{qB}`, note: "Period of the circular motion — independent of speed and radius." },
        { latex: String.raw`v = \dfrac{E}{B}`, note: "Speed passed by a velocity selector with crossed E and B fields; independent of charge and mass." },
        { latex: String.raw`\vec{F} = I\,\vec{L}\times\vec{B}`, note: "Force on a straight current-carrying segment in a uniform field; integrate dF = I dl × B otherwise." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A proton moves in the $+x$ direction through a uniform magnetic field pointing in the $+z$ direction. The magnetic force on the proton points in the</p>`,
          choices: [
            String.raw`$+y$ direction`,
            String.raw`$-y$ direction`,
            String.raw`$-x$ direction`,
            String.raw`$+z$ direction`
          ],
          answer: 1,
          solution: String.raw`<p>$\vec{F} = q\vec{v}\times\vec{B}$ with $\vec{v} = v\hat{x}$ and $\vec{B} = B\hat{z}$: since $\hat{x}\times\hat{z} = -\hat{y}$, the force is $qvB(-\hat{y})$, i.e. in the $-y$ direction for the positive proton. Choosing $+y$ is the classic cross-product order error ($\hat{z}\times\hat{x} = +\hat{y}$, but here the product is $\hat{x}\times\hat{z}$).</p>` },
        { type: "mcq",
          q: String.raw`<p>A charged particle moves in a circle in a uniform magnetic field. If its speed is doubled (same field, same particle), its period of revolution</p>`,
          choices: [
            String.raw`doubles`,
            String.raw`halves`,
            String.raw`is unchanged`,
            String.raw`quadruples`
          ],
          answer: 2,
          solution: String.raw`<p>$T = 2\pi m/(qB)$ contains neither $v$ nor $r$. Doubling the speed doubles the radius ($r = mv/qB$), so the particle travels twice the circumference at twice the speed — same time per lap. This speed-independence is what makes cyclotrons work with a fixed-frequency driving voltage.</p>` },
        { type: "mcq",
          q: String.raw`<p>A proton (mass $m$, charge $e$) and an alpha particle (mass $4m$, charge $2e$) are accelerated to the <em>same kinetic energy</em> and injected perpendicular to the same uniform magnetic field. The ratio of the alpha particle's orbital radius to the proton's, $r_\alpha / r_p$, is</p>`,
          choices: [
            String.raw`$2$`,
            String.raw`$\sqrt{2}$`,
            String.raw`$1$`,
            String.raw`$\tfrac{1}{2}$`
          ],
          answer: 2,
          solution: String.raw`<p>Write the radius in terms of kinetic energy: $p = \sqrt{2mK}$, so $r = \dfrac{mv}{qB} = \dfrac{\sqrt{2mK}}{qB}$. Then
$$\frac{r_\alpha}{r_p} = \frac{\sqrt{2(4m)K}\,/\,(2e)}{\sqrt{2mK}\,/\,e} = \frac{2\sqrt{2mK}}{2e}\cdot\frac{e}{\sqrt{2mK}} = 1.$$
The factor-of-4 mass advantage under the square root ($\times 2$) is exactly cancelled by the doubled charge. Picking 2 (mass effect only) or $\sqrt{2}$ are the standard partial-analysis traps.</p>` },
        { type: "frq",
          q: String.raw`<p>A mass spectrometer has two stages. Stage 1 is a velocity selector with a uniform electric field of magnitude $E$ (between parallel plates) and a uniform magnetic field of magnitude $B$, mutually perpendicular and both perpendicular to the incoming ion beam. Stage 2 is a region of uniform magnetic field $B_0$ perpendicular to the ions' velocity, in which ions of charge $q$ travel a semicircle and strike a detector a distance $d$ from the entrance slit.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Derive an expression for the speed $v$ of the ions that pass through the velocity selector undeflected. Explain why this speed is independent of the ion's mass and charge.</p>`,
              solution: String.raw`<p>An undeflected ion has zero net force, so the electric and magnetic forces balance: $qE = qvB$, giving
$$v = \frac{E}{B}.$$
Both forces are proportional to $q$, so the charge cancels; and since neither force depends on $m$, the mass never enters. Any ion moving at exactly $E/B$ goes straight, whatever its species; faster ions feel a larger magnetic force and deflect one way, slower ions deflect the other.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>In stage 2, derive an expression for the mass $m$ of an ion in terms of $q$, $B_0$, $d$, $E$, and $B$.</p>`,
              solution: String.raw`<p>In stage 2 the ion moves in a circle of radius $r = d/2$ (the detector sits a full diameter from the slit). Newton's second law for circular motion: $qvB_0 = mv^2/r$, so $m = qB_0 r/v$. Substituting $r = d/2$ and $v = E/B$:
$$m = \frac{qB_0 d}{2v} = \frac{q B_0 B d}{2E}.$$</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Two singly ionized isotopes pass through the selector and enter stage 2. Isotope 2 is heavier than isotope 1. Which strikes the detector farther from the entrance slit? Justify your answer.</p>`,
              solution: String.raw`<p>Both isotopes exit the selector with the <em>same speed</em> $v = E/B$ and carry the same charge. The orbit radius $r = mv/(qB_0)$ is therefore proportional to mass, so the heavier isotope 2 has the larger radius and lands at the larger diameter $d = 2r$ — farther from the slit. This is exactly how spectrometers separate isotopes that are chemically identical.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A straight, rigid conducting rod of mass $m$ and length $L$ rests on a horizontal table. It carries a current $I$ (direction along the rod) supplied through flexible, negligible-weight leads. The region contains a uniform magnetic field. The goal is to lift the rod off the table using the magnetic force alone.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>For the magnetic force on the rod to point vertically upward, what must be the orientation of $\vec{B}$ relative to the rod and to the vertical? Justify using the properties of the cross product.</p>`,
              solution: String.raw`<p>The force is $\vec{F} = I\vec{L}\times\vec{B}$, which is perpendicular to both $\vec{L}$ and $\vec{B}$. For $\vec{F}$ to be vertical, both $\vec{L}$ (horizontal, along the rod) and $\vec{B}$ must lie in the horizontal plane. The force is maximized when $\vec{B}\perp\vec{L}$. So: $\vec{B}$ horizontal and perpendicular to the rod, with its direction chosen (right-hand rule from $I\vec{L}$ to $\vec{B}$) so that $I\vec{L}\times\vec{B}$ points up.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>With $\vec{B}$ oriented as in part (a), derive an expression for the minimum field magnitude $B_{min}$ required to lift the rod.</p>`,
              solution: String.raw`<p>With $\vec{B}\perp\vec{L}$, the force magnitude is $F = BIL$. Lifting requires the magnetic force to at least balance gravity:
$$B I L \geq mg \quad\Longrightarrow\quad B_{min} = \frac{mg}{IL}.$$</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Suppose instead the field has magnitude $B$ but makes an angle $\theta$ with the rod (still horizontal). Derive the new condition on $B$ for liftoff, and evaluate the limiting cases $\theta = 90^\circ$ and $\theta \to 0$.</p>`,
              solution: String.raw`<p>The force magnitude becomes $F = BIL\sin\theta$ (still vertical, since both vectors are horizontal). Liftoff requires
$$B \geq \frac{mg}{IL\sin\theta}.$$
At $\theta = 90^\circ$ this reduces to part (b)'s $mg/(IL)$ — the most efficient geometry. As $\theta\to 0$ (field parallel to the rod) the required $B\to\infty$: a field along the current direction exerts no force at all, since $\vec{L}\times\vec{B} = 0$ for parallel vectors. The limits confirm the expression.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------- 12.3 */
    {
      id: "12.3",
      title: "Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law",
      blurb: "Build any magnetic field one current element at a time — and find out why parallel currents attract.",
      objectives: [
        "State the Biot–Savart law and use it to set up the field of a current distribution.",
        "Derive the magnetic field at the center of a circular current loop and use the field of a long straight wire.",
        "Calculate the force per unit length between parallel current-carrying wires and determine whether they attract or repel."
      ],
      sections: [
        { heading: "The Core Idea: Biot–Savart",
          content: String.raw`<p>Just as Coulomb's law gives the electric field of a point charge, the <strong>Biot–Savart law</strong> gives the magnetic field of an infinitesimal element of current:</p>
<p>$$d\vec{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec{l}\times\hat{r}}{r^2}$$</p>
<p>Here $I\,d\vec{l}$ is a tiny piece of wire carrying current in the direction $d\vec{l}$, $r$ is the distance from that piece to the field point, and $\hat{r}$ is the unit vector from the element <em>toward</em> the field point. Key features:</p>
<ul>
<li>The field falls off as $1/r^2$, like Coulomb's law.</li>
<li>The cross product makes $d\vec{B}$ perpendicular to both the current element and the line to the field point — this is why field lines circle around wires.</li>
<li>$d\vec{B} = 0$ along the line of the element itself ($d\vec{l}\parallel\hat{r}$).</li>
</ul>
<p>To get the total field, integrate over the whole circuit. The integral is only tractable for symmetric shapes — loops, arcs, straight segments — which is exactly what the AP exam asks.</p>` },
        { heading: "Worked Derivation: Center of a Circular Loop",
          content: String.raw`<p>Let a circular loop of radius $R$ carry current $I$; find $\vec{B}$ at the center. For every element $d\vec{l}$ on the loop, the vector $\hat{r}$ points from the element to the center, and $d\vec{l}$ (tangent to the circle) is exactly perpendicular to $\hat{r}$. So $|d\vec{l}\times\hat{r}| = dl$, and every element contributes a field of the same magnitude, in the same direction (along the loop's axis, by the right-hand rule):</p>
<p>$$dB = \frac{\mu_0}{4\pi}\frac{I\,dl}{R^2}$$</p>
<p>Integrating $dl$ around the circumference gives $\oint dl = 2\pi R$:</p>
<p>$$B = \frac{\mu_0 I}{4\pi R^2}(2\pi R) = \frac{\mu_0 I}{2R}$$</p>
<p>The same logic gives a circular <em>arc</em> subtending angle $\phi$ (in radians) a field $B = \dfrac{\mu_0 I \phi}{4\pi R}$ at its center — set $\phi = 2\pi$ to recover the full loop.</p>
<div class="callout">Straight segments aimed at the field point contribute nothing: $d\vec{l}\times\hat{r} = 0$. Use this to ignore the radial "feed" wires in arc problems.</div>` },
        { heading: "The Long Straight Wire and Parallel-Wire Forces",
          content: String.raw`<p>Integrating Biot–Savart along an infinite straight wire (a standard but lengthier calculation) yields the must-know result</p>
<p>$$B = \frac{\mu_0 I}{2\pi r}$$</p>
<p>at perpendicular distance $r$, with circular field lines given by the right-hand rule. Note the $1/r$ falloff — slower than a point source's $1/r^2$, because the whole infinite wire contributes.</p>
<p>Now place a second wire, parallel to the first at separation $d$, carrying $I_2$. Wire 1's field at wire 2 is $B_1 = \mu_0 I_1/(2\pi d)$, perpendicular to wire 2. The force on a length $L$ of wire 2 is $F = B_1 I_2 L$, so</p>
<p>$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$$</p>
<p>Apply $\vec{F} = I\vec{L}\times\vec{B}$ to get direction: <strong>parallel (same-direction) currents attract; antiparallel currents repel</strong>. By Newton's third law the two wires pull (or push) on each other with equal magnitudes.</p>` },
        { heading: "Interactive: Two Parallel Wires",
          sim: "wireB",
          simParams: { "preset": "twoWires" },
          simCaption: "Set the currents parallel, then antiparallel. Watch the field pattern between the wires (it cancels between parallel currents, reinforces between antiparallel ones) and check the force arrows: parallel attract, antiparallel repel.",
          content: String.raw`<p>A good memory check: between <em>parallel</em> currents the two fields oppose and partially cancel; between <em>antiparallel</em> currents they add. The force on each wire points from the strong-field side toward the weak-field side.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Mixing up the loop and wire formulas.</strong> Loop center: $\mu_0 I/(2R)$ — no $\pi$. Long straight wire: $\mu_0 I/(2\pi r)$ — with $\pi$. Writing $\mu_0 I / (2\pi R)$ for a loop is the single most common error.</li>
<li><strong>Direction of $\hat{r}$:</strong> it points from the current element <em>to the field point</em>, not the other way. Reversing it flips every direction.</li>
<li><strong>"Like attracts like" here:</strong> parallel currents <em>attract</em> — opposite to the "likes repel" intuition from charges. Antiparallel currents repel.</li>
<li><strong>Forgetting straight feeds vanish:</strong> in arc problems, wire segments that point directly at (or away from) the field point contribute zero field there.</li>
<li><strong>Superposition is vector addition.</strong> Fields from two wires at a point may add or cancel depending on direction — always draw the circles and apply the right-hand rule before adding magnitudes.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`d\vec{B} = \dfrac{\mu_0}{4\pi}\,\dfrac{I\,d\vec{l}\times\hat{r}}{r^2}`, note: "Biot–Savart law; r̂ points from the current element to the field point." },
        { latex: String.raw`B = \dfrac{\mu_0 I}{2\pi r}`, note: "Long straight wire at perpendicular distance r; field lines circle the wire (right-hand rule)." },
        { latex: String.raw`B = \dfrac{\mu_0 I}{2R}`, note: "At the center of a full circular loop of radius R; for an arc of angle φ, B = μ₀Iφ/(4πR)." },
        { latex: String.raw`\dfrac{F}{L} = \dfrac{\mu_0 I_1 I_2}{2\pi d}`, note: "Force per length between parallel wires separated by d; parallel currents attract, antiparallel repel." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>The magnetic field a distance $d$ from a long straight wire has magnitude $B_0$. If the current in the wire is doubled and the distance is also doubled, the new field magnitude is</p>`,
          choices: [
            String.raw`$B_0$`,
            String.raw`$2B_0$`,
            String.raw`$B_0/2$`,
            String.raw`$4B_0$`
          ],
          answer: 0,
          solution: String.raw`<p>$B = \mu_0 I/(2\pi r)$ is proportional to $I$ and inversely proportional to $r$. Doubling both leaves $I/r$ — and hence $B$ — unchanged. Note the wire's field falls off as $1/r$, not $1/r^2$; if you used an inverse-square law you'd incorrectly get $B_0/2$.</p>` },
        { type: "mcq",
          q: String.raw`<p>Two long parallel wires carry currents in the <em>same</em> direction. The magnetic force between them is</p>`,
          choices: [
            String.raw`attractive, because each wire sits in the other's field with $I\vec{L}\times\vec{B}$ pointing toward the other wire`,
            String.raw`repulsive, because like currents repel just as like charges do`,
            String.raw`zero, because the wires are electrically neutral`,
            String.raw`attractive on one wire and repulsive on the other`
          ],
          answer: 0,
          solution: String.raw`<p>Wire 1's field at wire 2 circles around wire 1; applying $\vec{F} = I\vec{L}\times\vec{B}$ to wire 2 gives a force pointing toward wire 1. Parallel currents attract. The charge analogy (choice B) fails — currents are not charges. Choice C confuses electric and magnetic forces: neutral wires feel no <em>electric</em> force, but moving charges in them feel magnetic forces. Choice D violates Newton's third law.</p>` },
        { type: "mcq",
          q: String.raw`<p>Two long parallel wires, separated by distance $d$, carry equal currents $I$ in <em>opposite</em> directions. The magnitude of the magnetic field at the point midway between them is</p>`,
          choices: [
            String.raw`$0$`,
            String.raw`$\dfrac{\mu_0 I}{2\pi d}$`,
            String.raw`$\dfrac{\mu_0 I}{\pi d}$`,
            String.raw`$\dfrac{2\mu_0 I}{\pi d}$`
          ],
          answer: 3,
          solution: String.raw`<p>Each wire is a distance $d/2$ from the midpoint, contributing $B = \dfrac{\mu_0 I}{2\pi (d/2)} = \dfrac{\mu_0 I}{\pi d}$. For antiparallel currents, the right-hand rule shows both contributions point in the <em>same</em> direction at the midpoint, so they add:
$$B_{total} = 2\cdot\frac{\mu_0 I}{\pi d} = \frac{2\mu_0 I}{\pi d}.$$
Choice A (zero) is correct only for <em>parallel</em> currents; choice B forgets that the distance is $d/2$, not $d$; choice C counts only one wire.</p>` },
        { type: "frq",
          q: String.raw`<p>A thin wire is bent into a circular arc of radius $R$ subtending angle $\phi$ (radians), with two straight radial segments connecting the arc's ends to the center region, where the leads exit. The wire carries current $I$. Point $P$ is at the center of the arc's circle.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Explain why the two straight radial segments contribute zero magnetic field at $P$.</p>`,
              solution: String.raw`<p>For every element of a radial segment, $d\vec{l}$ points along the line joining the element to $P$, so $d\vec{l}$ is parallel (or antiparallel) to $\hat{r}$. The Biot–Savart cross product $d\vec{l}\times\hat{r}$ then vanishes for every element, so the entire straight segments contribute $d\vec{B} = 0$ at $P$.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Starting from the Biot–Savart law, derive an expression for the magnitude of the magnetic field at $P$ due to the arc.</p>`,
              solution: String.raw`<p>On the arc, every element $d\vec{l}$ is tangent to the circle while $\hat{r}$ points radially inward to $P$, so $d\vec{l}\perp\hat{r}$ and $|d\vec{l}\times\hat{r}| = dl$. Every element is the same distance $R$ from $P$:
$$dB = \frac{\mu_0}{4\pi}\frac{I\,dl}{R^2}.$$
All contributions point the same way (perpendicular to the plane, by the right-hand rule), so magnitudes add. The arc length is $\int dl = R\phi$:
$$B = \frac{\mu_0 I}{4\pi R^2}\,(R\phi) = \frac{\mu_0 I \phi}{4\pi R}.$$</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Show that your result reduces to the expected field at the center of a complete circular loop, and state the direction of $\vec{B}$ at $P$ if the current flows counterclockwise as seen by the reader.</p>`,
              solution: String.raw`<p>Setting $\phi = 2\pi$:
$$B = \frac{\mu_0 I (2\pi)}{4\pi R} = \frac{\mu_0 I}{2R},$$
the standard full-loop result — the formula passes the limiting-case check. For counterclockwise current (as seen by the reader), curl the right-hand fingers along the current: the thumb points out of the page, so $\vec{B}$ at $P$ points <strong>out of the page</strong>, toward the reader.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>Two long, straight, horizontal wires are parallel to each other. The lower wire is fixed to a table and carries current $I_1$. The upper wire has mass per unit length $\lambda$, carries current $I_2$, and floats in equilibrium a distance $d$ directly above the lower wire, supported only by the magnetic interaction.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Starting from the field of a long straight wire and the force on a current-carrying wire, derive the force per unit length between two parallel wires separated by distance $d$.</p>`,
              solution: String.raw`<p>The lower wire creates a field of magnitude $B_1 = \dfrac{\mu_0 I_1}{2\pi d}$ at the location of the upper wire, directed horizontally and perpendicular to the upper wire (the field circles the lower wire). A length $L$ of the upper wire then feels $F = I_2 L B_1$ since $\vec{L}\perp\vec{B}_1$:
$$\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Must the currents $I_1$ and $I_2$ be in the same direction or in opposite directions for the upper wire to float? Justify with the right-hand rule.</p>`,
              solution: String.raw`<p>The magnetic force must point <em>upward</em> on the upper wire to balance gravity, i.e., the wires must <em>repel</em>... no — careful: the upper wire is <em>above</em> the lower one, so an upward force on it is a force <em>away</em> from the lower wire. Repulsion requires <strong>antiparallel currents</strong>. Check with the right-hand rule: let the lower current run east. Its field at the upper wire points north (horizontal, perpendicular). If the upper current runs west ($\vec{L}$ west, $\vec{B}$ north), then $I\vec{L}\times\vec{B}$ points up — wait, west × north = up? Using $\hat{x}$ = east, $\hat{y}$ = north, $\hat{z}$ = up: $(-\hat{x})\times\hat{y} = -\hat{z}$, which is down. So <em>antiparallel</em> currents give a downward force here — meaning antiparallel currents attract? No: recompute the field. Lower wire current east ($+\hat{x}$); directly above it, the right-hand rule (thumb east, fingers curl) gives $\vec{B}$ pointing north? $\vec{B} = \frac{\mu_0 I}{2\pi d}\,\hat{I}\times\hat{r}$ with $\hat{r} = \hat{z}$ (from lower wire up to field point): $\hat{x}\times\hat{z} = -\hat{y}$, so $\vec{B}$ points <em>south</em> ($-\hat{y}$) above the wire. Now the upper current parallel (east, $+\hat{x}$): $\vec{F}/L = I_2\,\hat{x}\times(-B\hat{y}) = -I_2 B\,\hat{z}$ — downward (attraction, as expected for parallel currents). Upper current antiparallel (west, $-\hat{x}$): $\vec{F}/L = I_2(-\hat{x})\times(-B\hat{y}) = +I_2 B\,\hat{z}$ — upward. Conclusion: the currents must be in <strong>opposite directions</strong>, since antiparallel currents repel, pushing the upper wire up against gravity.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Derive an expression for the current $I_2$ required for equilibrium, in terms of $\lambda$, $g$, $I_1$, $d$, and $\mu_0$. Then determine whether this equilibrium is stable against small vertical displacements, and justify your answer.</p>`,
              solution: String.raw`<p>Equilibrium: magnetic repulsion per length balances weight per length:
$$\frac{\mu_0 I_1 I_2}{2\pi d} = \lambda g \quad\Longrightarrow\quad I_2 = \frac{2\pi d\,\lambda g}{\mu_0 I_1}.$$
Stability: the magnetic force per length varies as $1/r$ with separation $r$, while the weight is constant. If the upper wire rises ($r > d$), the upward force weakens below $\lambda g$ and the net force is downward — restoring. If it sinks ($r < d$), the repulsion strengthens and pushes it back up — also restoring. The equilibrium is therefore <strong>stable</strong> for vertical displacements.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------- 12.4 */
    {
      id: "12.4",
      title: "Ampère's Law",
      blurb: "When the symmetry is right, one loop integral hands you the magnetic field — inside wires, solenoids, and toroids.",
      objectives: [
        "State Ampère's law and explain the meaning of the circulation integral and enclosed current.",
        "Derive the magnetic field inside and outside a long current-carrying wire with uniform current density.",
        "Derive the field of an ideal solenoid and of a toroid using appropriately chosen Amperian loops."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p><strong>Ampère's law</strong> relates the circulation of $\vec{B}$ around any closed loop to the net current threading through it:</p>
<p>$$\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$$</p>
<p>It is the magnetic cousin of Gauss's law: a statement that is <em>always true</em> (for steady currents), but only <em>useful for finding</em> $\vec{B}$ when symmetry lets you pull $B$ out of the integral. The strategy mirrors Gauss's law exactly:</p>
<ol>
<li>Use symmetry to guess the field's direction and what it can depend on.</li>
<li>Choose an <strong>Amperian loop</strong> on which $B$ is constant and parallel (or perpendicular) to $d\vec{l}$.</li>
<li>Evaluate $\oint \vec{B}\cdot d\vec{l}$ as $B \times (\text{path length})$ on the parallel parts.</li>
<li>Count $I_{enc}$ — only current passing <em>through</em> the loop, with sign from the right-hand rule (fingers along the loop direction, thumb gives positive current direction).</li>
</ol>
<div class="callout warn">Zero enclosed current means $\oint \vec{B}\cdot d\vec{l} = 0$ — it does <em>not</em> mean $\vec{B} = 0$ on the loop. The contributions can simply cancel around the path.</div>` },
        { heading: "Worked Derivation: Inside and Outside a Thick Wire",
          content: String.raw`<p>A long cylindrical wire of radius $R$ carries total current $I$ spread uniformly over its cross-section, so the current density is $J = I/(\pi R^2)$. By symmetry, $\vec{B}$ circles the axis with magnitude depending only on distance $r$. Choose circular Amperian loops centered on the axis.</p>
<p><strong>Outside</strong> ($r \geq R$): the loop encloses all of $I$:</p>
<p>$$B(2\pi r) = \mu_0 I \quad\Longrightarrow\quad B = \frac{\mu_0 I}{2\pi r}$$</p>
<p>— identical to a thin wire, just as a sphere's external gravity matches a point mass.</p>
<p><strong>Inside</strong> ($r < R$): the loop encloses only the current within radius $r$:</p>
<p>$$I_{enc} = J(\pi r^2) = I\frac{r^2}{R^2}, \qquad B(2\pi r) = \mu_0 I \frac{r^2}{R^2} \;\Longrightarrow\; B = \frac{\mu_0 I r}{2\pi R^2}$$</p>
<p>The field grows <em>linearly</em> from zero at the axis, peaks at the surface ($\mu_0 I / 2\pi R$), then falls as $1/r$. The two formulas agree at $r = R$ — always check this continuity.</p>` },
        { heading: "Graph: B(r) for a Thick Wire",
          graph: { xLabel: "r (in units of R/2)", yLabel: "B (arb. units)", xMin: 0, xMax: 8, yMin: 0, yMax: 1.4,
                   fns: [ { expr: "Math.min(x/2, 2/x)", label: "B(r): linear inside, 1/r outside", color: "#fbbf24" } ],
                   vlines: [ { x: 2, label: "r = R" } ] },
          graphCaption: "Inside the wire B rises linearly with r; outside it falls off as 1/r. The curve is continuous at the surface, where B is maximum.",
          content: String.raw`<p>This rise-then-fall profile is a favorite exam graph. Compare with the electric field of a uniformly charged sphere — same linear-then-inverse shape, except $E$ outside falls as $1/r^2$ while $B$ here falls as $1/r$ (line source, not point source).</p>` },
        { heading: "Solenoid and Toroid",
          sim: "wireB",
          simParams: { "preset": "solenoid" },
          simCaption: "Increase the turn density n and current I — the interior field grows as μ₀nI and stays remarkably uniform, while the exterior field stays near zero. Try the loop overlay to see the Amperian rectangle.",
          content: String.raw`<p><strong>Solenoid.</strong> An ideal (long, tightly wound) solenoid has a uniform field inside, parallel to the axis, and negligible field outside. Take a rectangular Amperian loop of length $\ell$ with one side inside (along the axis direction) and one side outside. Only the inside side contributes: $\oint \vec{B}\cdot d\vec{l} = B\ell$. The loop is threaded by $n\ell$ turns ($n$ = turns per length), each carrying $I$:</p>
<p>$$B\ell = \mu_0 (n\ell) I \quad\Longrightarrow\quad B = \mu_0 n I$$</p>
<p>Independent of position inside and of the solenoid's radius.</p>
<p><strong>Toroid</strong> (a solenoid bent into a doughnut with $N$ total turns): a circular Amperian loop of radius $r$ inside the windings encloses all $N$ currents:</p>
<p>$$B(2\pi r) = \mu_0 N I \quad\Longrightarrow\quad B = \frac{\mu_0 N I}{2\pi r}$$</p>
<p>Unlike the solenoid, the toroid's field is <em>not</em> uniform — stronger at the inner edge — and is zero both in the doughnut hole and outside the body.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>$I_{enc}$ counts only current threading the loop.</strong> Current outside the loop affects $\vec{B}$ locally but contributes nothing to $\oint \vec{B}\cdot d\vec{l}$.</li>
<li><strong>$\oint \vec{B}\cdot d\vec{l} = 0$ does not imply $B = 0$.</strong> A loop beside (not around) a wire has zero circulation, yet $B \ne 0$ everywhere on it.</li>
<li><strong>Inside a thick wire, scale the current:</strong> $I_{enc} = I r^2/R^2$ for uniform density. Forgetting the $r^2/R^2$ ratio (or using $r/R$) is the top algebra error.</li>
<li><strong>Solenoid: use turns per length.</strong> $B = \mu_0 n I$ with $n = N/\ell$. Doubling $N$ <em>and</em> doubling $\ell$ leaves $B$ unchanged.</li>
<li><strong>Toroid is not uniform:</strong> $B \propto 1/r$ across the doughnut's cross-section; quoting the solenoid's uniform $\mu_0 n I$ is only an approximation when the doughnut is thin.</li>
<li>Ampère's law in this form requires steady currents — changing electric fields add a displacement-current term (beyond the scope here, but flag it).</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}`, note: "Ampère's law (steady currents); sign of enclosed current from the right-hand rule on the loop's direction." },
        { latex: String.raw`B = \dfrac{\mu_0 I r}{2\pi R^2} \quad (r < R)`, note: "Inside a long wire of radius R with uniform current density; grows linearly from zero on the axis." },
        { latex: String.raw`B = \dfrac{\mu_0 I}{2\pi r} \quad (r \geq R)`, note: "Outside the wire — identical to a thin wire on the axis." },
        { latex: String.raw`B = \mu_0 n I`, note: "Ideal solenoid interior; n = N/ℓ is turns per unit length; field is uniform and axial, exterior field ≈ 0." },
        { latex: String.raw`B = \dfrac{\mu_0 N I}{2\pi r}`, note: "Inside the windings of a toroid with N total turns; zero in the hole and outside." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A closed Amperian loop lies entirely in a region where the magnetic field is nonzero, but no current passes through the loop. Which statement must be true?</p>`,
          choices: [
            String.raw`$\vec{B} = 0$ at every point on the loop`,
            String.raw`$\oint \vec{B}\cdot d\vec{l} = 0$ around the loop`,
            String.raw`$\vec{B}$ is constant in magnitude on the loop`,
            String.raw`$\vec{B}$ is perpendicular to the loop at every point`
          ],
          answer: 1,
          solution: String.raw`<p>Ampère's law guarantees only that the <em>circulation</em> vanishes when $I_{enc} = 0$: positive and negative contributions of $\vec{B}\cdot d\vec{l}$ cancel around the path. The field itself can be large and varying — for example, a loop placed next to (but not around) a current-carrying wire. Choices A, C, D all over-interpret the law.</p>` },
        { type: "mcq",
          q: String.raw`<p>A long cylindrical wire of radius $R$ carries current $I$ uniformly distributed over its cross-section. The magnitude of the magnetic field at $r = R/2$ (inside the wire) compared to the field $B_s$ at the surface $r = R$ is</p>`,
          choices: [
            String.raw`$B_s/4$`,
            String.raw`$B_s/2$`,
            String.raw`$B_s$`,
            String.raw`$2B_s$`
          ],
          answer: 1,
          solution: String.raw`<p>Inside, $B = \dfrac{\mu_0 I r}{2\pi R^2}$, linear in $r$. At $r = R/2$ that is half the surface value $B_s = \dfrac{\mu_0 I}{2\pi R}$. Choice A ($B_s/4$) comes from squaring incorrectly — the enclosed current scales as $r^2$, but the $2\pi r$ path length divides out one power of $r$, leaving $B \propto r$.</p>` },
        { type: "mcq",
          q: String.raw`<p>An ideal solenoid of length $\ell$ with $N$ total turns carries current $I$ and has interior field $B_0$. The solenoid is replaced by one with $2N$ turns wound over length $2\ell$, carrying the same current. The new interior field is</p>`,
          choices: [
            String.raw`$B_0/2$`,
            String.raw`$B_0$`,
            String.raw`$2B_0$`,
            String.raw`$4B_0$`
          ],
          answer: 1,
          solution: String.raw`<p>The solenoid field depends only on the turn <em>density</em>: $B = \mu_0 n I$ with $n = N/\ell$. Here $n_{new} = 2N/2\ell = N/\ell = n$, so the field is unchanged. The trap is fixating on "twice as many turns" (choice C) while ignoring that they're spread over twice the length. Total turn count alone never determines a solenoid's field.</p>` },
        { type: "frq",
          q: String.raw`<p>A long, straight, solid cylindrical conductor of radius $R$ carries total current $I$ distributed uniformly over its circular cross-section.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Using Ampère's law, derive an expression for the magnitude of the magnetic field at a distance $r > R$ from the axis. State explicitly how symmetry justifies your choice of Amperian loop.</p>`,
              solution: String.raw`<p>By the cylindrical symmetry of the current, $\vec{B}$ must be tangent to circles centered on the axis, with magnitude depending only on $r$ (rotating or sliding the wire along its axis changes nothing). Choose a concentric circular loop of radius $r > R$, traversed in the field's direction. Then $\vec{B}\parallel d\vec{l}$ with constant magnitude, so $\oint \vec{B}\cdot d\vec{l} = B(2\pi r)$. The loop encloses the full current: $I_{enc} = I$. Ampère's law gives
$$B(2\pi r) = \mu_0 I \quad\Longrightarrow\quad B = \frac{\mu_0 I}{2\pi r}.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Derive an expression for the field at a distance $r < R$ inside the conductor.</p>`,
              solution: String.raw`<p>Same symmetry, same circular loop, now with $r < R$. The uniform current density is $J = I/(\pi R^2)$, so the enclosed current is
$$I_{enc} = J\,\pi r^2 = I\,\frac{r^2}{R^2}.$$
Then
$$B(2\pi r) = \mu_0 I\frac{r^2}{R^2} \quad\Longrightarrow\quad B = \frac{\mu_0 I\,r}{2\pi R^2}.$$</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Sketch (describe) the graph of $B$ versus $r$ from $r = 0$ to $r = 3R$, identifying the value at $r = R$, and verify that your two expressions agree there.</p>`,
              solution: String.raw`<p>From the axis, $B$ rises linearly from zero, reaching a maximum at the surface; beyond $R$, it decays as $1/r$ (a hyperbola-like falloff), approaching zero at large $r$. At $r = R$ the inside formula gives $\dfrac{\mu_0 I R}{2\pi R^2} = \dfrac{\mu_0 I}{2\pi R}$ and the outside formula gives the same $\dfrac{\mu_0 I}{2\pi R}$ — the field is continuous, with maximum value $B_{max} = \mu_0 I/(2\pi R)$. At $r = 3R$, $B = B_{max}/3$.</p>` },
            { label: "(d)",
              prompt: String.raw`<p>Suppose instead all the current flowed only on the outer surface of the cylinder (a thin shell). How would the field for $r < R$ and for $r > R$ change, if at all? Justify with Ampère's law.</p>`,
              solution: String.raw`<p>For $r < R$, the Amperian loop now encloses zero current, and by symmetry $B$ is uniform on the loop, so $B(2\pi r) = 0$ forces $B = 0$ everywhere inside the shell. For $r > R$, the enclosed current is still the full $I$, so the exterior field is unchanged: $B = \mu_0 I/(2\pi r)$. Externally, a shell and a solid wire are indistinguishable.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>An ideal solenoid has $n$ turns per unit length and carries current $I$. Assume the field inside is uniform and axial, and the field outside is negligible.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Using Ampère's law with a clearly described rectangular Amperian loop, derive the magnitude of the magnetic field inside the solenoid.</p>`,
              solution: String.raw`<p>Take a rectangle of axial length $\ell$ with one long side inside the solenoid (parallel to the axis) and the other long side far outside. Going around the loop: the inside side contributes $B\ell$ (field parallel to path); the outside side contributes $\approx 0$ (negligible exterior field); the two short sides contribute zero because there $\vec{B}$ (axial) is perpendicular to $d\vec{l}$ (radial). So $\oint \vec{B}\cdot d\vec{l} = B\ell$. The rectangle is pierced by $n\ell$ wires, each carrying $I$, all in the same sense: $I_{enc} = n\ell I$. Ampère's law:
$$B\ell = \mu_0 n \ell I \quad\Longrightarrow\quad B = \mu_0 n I.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Explain why your derivation shows the interior field is uniform — independent of the distance from the axis.</p>`,
              solution: String.raw`<p>Nothing in the derivation fixed <em>where</em> inside the solenoid the interior side of the rectangle sits. Slide that side to any distance from the axis (keeping it inside): the enclosed current $n\ell I$ and the circulation $B\ell$ are unchanged, so $B$ must have the same value $\mu_0 n I$ at every interior position. (A loop with <em>both</em> long sides inside encloses zero current, forcing the two sides' fields to be equal — uniformity again.)</p>` },
            { label: "(c)",
              prompt: String.raw`<p>The solenoid is now bent into a toroid of $N$ total turns. Using a circular Amperian loop of radius $r$ inside the windings, derive $B(r)$ and explain why the toroidal field, unlike the solenoid's, is not uniform across its cross-section.</p>`,
              solution: String.raw`<p>By symmetry the field inside the windings circles around the toroid's central axis. A concentric circular loop of radius $r$ inside the doughnut body satisfies $\oint \vec{B}\cdot d\vec{l} = B(2\pi r)$ and encloses all $N$ turns: $I_{enc} = NI$. Thus
$$B = \frac{\mu_0 N I}{2\pi r}.$$
The path length $2\pi r$ grows with $r$ while the enclosed current stays fixed at $NI$, so $B$ falls off as $1/r$ across the cross-section: strongest at the inner radius, weakest at the outer radius. In the straight solenoid the analogous "path" never changed with position, so the field stayed uniform.</p>` }
          ] }
      ]
    }
  ]
});
