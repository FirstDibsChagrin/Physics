/* data/em-u9.js — Unit 9: Electric Potential */
AP.registerUnit({
  id: 9,
  course: "em",
  title: "Electric Potential",
  weight: "10–20%",
  tagline: "The scalar side of electrostatics: energy per charge, downhill forces, and the calculus bridge between V and E.",
  bigIdeas: [
    "The electrostatic force is conservative, so charge configurations store potential energy U = kq₁q₂/r.",
    "Electric potential V = U/q describes the landscape itself, independent of any test charge placed in it.",
    "Field and potential are calculus partners: V = −∫E·dl and E = −dV/dx — E points downhill in V.",
    "Energy conservation with qV terms solves charged-particle motion without ever touching the field."
  ],
  topics: [

  /* ============================ 9.1 ============================ */
  {
    id: "9.1",
    title: "Electric Potential Energy",
    blurb: "Charges store energy in their arrangement — positive for like pairs forced together, negative for bound opposite pairs.",
    objectives: [
      "Calculate the electric potential energy of a pair, and of an assembly, of point charges.",
      "Relate work done by/against the electric force to changes in potential energy.",
      "Interpret the sign of U physically (bound vs. repulsive configurations).",
      "Use energy methods for charges moving under electrostatic forces."
    ],
    sections: [
      { heading: "A Conservative Force Stores Energy",
        content: String.raw`<p>Coulomb's force is an inverse-square central force, mathematically identical in form to gravity — so it is <strong>conservative</strong>, and a potential energy exists. Integrating the work done by the Coulomb force as two point charges move from separation $\infty$ to $r$ (with $U(\infty) = 0$):</p>
$$U = -\int_\infty^r \frac{kq_1q_2}{r'^2}\,dr' = \frac{kq_1q_2}{r}, \qquad k = \frac{1}{4\pi\varepsilon_0}.$$
<p>No $\cos$, no components — $U$ is a scalar of the separation only. The sign comes along automatically from the charges:</p>
<ul>
<li><strong>Like charges:</strong> $U > 0$. You did positive work shoving them together; released, they fly apart, cashing $U$ into kinetic energy.</li>
<li><strong>Opposite charges:</strong> $U < 0$. They are <em>bound</em>; you must supply energy to separate them (this is, almost literally, chemistry's ionization energy).</li>
</ul>
<div class="callout key">Note $1/r$, not $1/r^2$: energy goes as one power softer than force, exactly as gravity's $-GMm/r$ pairs with $-GMm/r^2$. If you write $U = kq_1q_2/r^2$ on the exam, that's a force–energy mix-up the graders see hourly.</div>` },
      { heading: "Assemblies: Sum Over Pairs",
        content: String.raw`<p>For several point charges, the total stored energy is the sum over every <em>pair</em>, counted once:</p>
$$U_{total} = \sum_{pairs} \frac{kq_iq_j}{r_{ij}}.$$
<p>Three charges have three pairs (12, 13, 23); four charges have six. Physically, $U_{total}$ is the work an external agent must do to assemble the configuration, bringing charges in one at a time from infinity: the first comes free, the second feels the first, the third feels both, and so on. Negative total energy means the assembly is net-bound — it would cost energy to scatter it back to infinity.</p>` },
      { heading: "Interactive: Energy on the Landscape",
        sim: "potentialField",
        simParams: { preset: "point" },
        simCaption: "The upper curve is the potential near a positive point charge. A positive test charge released on this hill slides downhill — losing U, gaining K. Drag the probe and watch E = −dV/dx track the slope.",
        content: String.raw`<p>Multiply the plotted $V(x)$ by a test charge $q$ and you get its potential energy curve $U(x) = qV(x)$ — every intuition from the mechanical energy wells of Mechanics 3.3 (turning points, downhill forces, stable minima) transfers without modification.</p>` },
      { heading: "Energy Method in Action",
        content: String.raw`<p>Two protons ($q = +e$, mass $m_p$) are released from rest at separation $d$. How fast are they moving when far apart? The ledger: initial $U = ke^2/d$, final $U \to 0$, and by symmetry each proton carries half the kinetic energy:</p>
$$\frac{ke^2}{d} = 2\cdot\tfrac{1}{2}m_pv^2 \;\Longrightarrow\; v = \sqrt{\frac{ke^2}{m_p d}}.$$
<p>No forces, no fields, no integrals over the trajectory — the conservative force's entire history is prepaid in $U$. This is the workflow for accelerated particles, closest-approach problems, and "speed at infinity" questions.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>$1/r^2$ in the energy:</strong> potential energy is $kq_1q_2/r$. The square belongs to the force.</li>
<li><strong>Dropping signs of charge:</strong> plug charges in <em>with</em> their signs; the sign of $U$ is physics, not decoration.</li>
<li><strong>Counting pairs twice</strong> (or forgetting one) in assemblies: list them explicitly — for 3 charges: $U_{12} + U_{13} + U_{23}$.</li>
<li><strong>Giving all the kinetic energy to one particle</strong> when both are free to move: momentum conservation splits it (equal masses ⇒ equal shares).</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`U = \frac{kq_1q_2}{r} = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r}`, note: "Pair of point charges; zero reference at infinite separation; signs included." },
      { latex: String.raw`U_{total} = \sum_{pairs}\frac{kq_iq_j}{r_{ij}}`, note: "Assembly energy: sum over each pair exactly once." },
      { latex: String.raw`W_{ext} = \Delta U`, note: "Work by an external agent (moving charges quasi-statically) fills or drains the store." },
      { latex: String.raw`K_i + U_i = K_f + U_f`, note: "Energy conservation for charges moving under electrostatic forces alone." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Two charges $+q$ and $-q$ are separated by distance $d$. To double their separation to $2d$, an external agent must do work equal to:</p>`,
        choices: [ String.raw`$+\dfrac{kq^2}{2d}$`, String.raw`$-\dfrac{kq^2}{2d}$`, String.raw`$+\dfrac{kq^2}{d}$`, String.raw`zero` ],
        answer: 0,
        solution: String.raw`<p>$W_{ext} = \Delta U = U_f - U_i = -\dfrac{kq^2}{2d} - \left(-\dfrac{kq^2}{d}\right) = +\dfrac{kq^2}{2d}$. Pulling bound opposite charges apart costs positive work, as intuition demands.</p>` },
      { type: "mcq",
        q: String.raw`<p>Three identical charges $+q$ sit at the corners of an equilateral triangle of side $a$. The total potential energy of the configuration is:</p>`,
        choices: [ String.raw`$\dfrac{3kq^2}{a}$`, String.raw`$\dfrac{kq^2}{a}$`, String.raw`$\dfrac{6kq^2}{a}$`, String.raw`$\dfrac{kq^2}{3a}$` ],
        answer: 0,
        solution: String.raw`<p>Three pairs, each at separation $a$, each contributing $kq^2/a$: total $3kq^2/a$. (Six would be double-counting each pair.)</p>` },
      { type: "mcq",
        q: String.raw`<p>An alpha particle (charge $+2e$) is fired directly at a heavy gold nucleus (charge $+79e$, effectively fixed) with kinetic energy $K_0$. Its distance of closest approach is proportional to:</p>`,
        choices: [ String.raw`$1/K_0$`, String.raw`$1/\sqrt{K_0}$`, String.raw`$K_0$`, String.raw`$1/K_0^2$` ],
        answer: 0,
        solution: String.raw`<p>At closest approach (head-on) the alpha is momentarily at rest: $K_0 = \dfrac{k(2e)(79e)}{r_{min}}$, so $r_{min} = \dfrac{158ke^2}{K_0} \propto 1/K_0$. This calculation is literally Rutherford's estimate of the nuclear size.</p>` },
      { type: "frq",
        q: String.raw`<p>Charges $q_1 = +3.0\,\mu\text{C}$ and $q_2 = +3.0\,\mu\text{C}$ are fixed $0.40\,\text{m}$ apart. A third charge $q_3 = -2.0\,\mu\text{C}$ is brought from infinity to the midpoint between them. (Use $k = 8.99\times10^9$ N·m²/C².)</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Calculate the work done by the external agent to bring $q_3$ to the midpoint (moving it slowly).</p>`,
            solution: String.raw`<p>Only pairs involving $q_3$ change ($q_1$–$q_2$ never moves): $\Delta U = \dfrac{kq_1q_3}{0.20} + \dfrac{kq_2q_3}{0.20} = 2\cdot\dfrac{(8.99\times10^9)(3.0\times10^{-6})(-2.0\times10^{-6})}{0.20} = -0.54\,\text{J}$. So $W_{ext} = \Delta U = -0.54\,\text{J}$ — the field does the pulling; the agent holds it back.</p>` },
          { label: "(b)", prompt: String.raw`<p>Calculate the total potential energy of the final three-charge configuration.</p>`,
            solution: String.raw`<p>Add the fixed pair: $U_{12} = \dfrac{k(3.0\times10^{-6})^2}{0.40} = +0.20\,\text{J}$. Total $U = 0.20 + (-0.54) = -0.34\,\text{J}$. Net negative: the assembly is bound.</p>` },
          { label: "(c)", prompt: String.raw`<p>If $q_3$ is released from the midpoint, describe its subsequent motion qualitatively.</p>`,
            solution: String.raw`<p>The midpoint is an equilibrium (the two pulls cancel by symmetry) — but along the line it is <em>stable</em> (displacing toward either positive charge increases the nearer attraction... careful: for a negative charge between two positives, moving toward one increases that attraction, pulling it further — along the axis the equilibrium is <strong>unstable</strong>; perpendicular to the axis the attractions pull it back — <strong>stable</strong> transversely). Released exactly at rest at the midpoint it stays; any axial nudge sends it accelerating into one of the positive charges, gaining kinetic energy as $U$ decreases.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>Two small spheres, each of mass $m$ and charge $+q$, are released from rest at separation $d$ on a frictionless horizontal surface.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the speed of each sphere when they are very far apart.</p>`,
            solution: String.raw`<p>Energy: $\dfrac{kq^2}{d} = 2\left(\tfrac{1}{2}mv^2\right)$ (equal masses share equally by momentum conservation), so $v = \sqrt{\dfrac{kq^2}{md}} = q\sqrt{\dfrac{k}{md}}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Now suppose one sphere has mass $m$ and the other $3m$ (same charges). Find each final speed.</p>`,
            solution: String.raw`<p>Momentum: $mv_1 = 3mv_2 \Rightarrow v_1 = 3v_2$. Energy: $\dfrac{kq^2}{d} = \tfrac{1}{2}mv_1^2 + \tfrac{1}{2}(3m)v_2^2 = \tfrac{1}{2}m(9v_2^2) + \tfrac{3}{2}mv_2^2 = 6mv_2^2$. So $v_2 = q\sqrt{\dfrac{k}{6md}}$ and $v_1 = 3q\sqrt{\dfrac{k}{6md}}$. The light sphere gets 3× the speed and 3× the kinetic energy ($K \propto p^2/2m$ at equal momenta).</p>` }
        ] }
    ]
  },

  /* ============================ 9.2 ============================ */
  {
    id: "9.2",
    title: "Electric Potential",
    blurb: "Strip the test charge out of potential energy and what's left — volts — describes the landscape itself.",
    objectives: [
      "Define electric potential V = U/q and compute V for point charges and superpositions.",
      "Relate V and E by V = −∫E·dl and E_x = −dV/dx.",
      "Sketch and interpret equipotential surfaces and their perpendicularity to field lines.",
      "Compute potentials of continuous distributions by integration (ring, disk on axis)."
    ],
    sections: [
      { heading: "Potential Is Potential Energy Per Charge",
        content: String.raw`<p>Just as the field $\vec E = \vec F/q$ removes the test charge from force, the <strong>potential</strong> removes it from energy:</p>
$$V = \frac{U}{q}, \qquad \text{units: } 1\,\text{volt} = 1\,\text{J/C}.$$
<p>For a point charge $q$ (with $V(\infty) = 0$):</p>
$$V = \frac{kq}{r},$$
<p>a <em>signed scalar</em>: positive charges create hills, negative charges create wells. Superposition is gloriously easy — just add numbers:</p>
$$V_{total} = \sum_i \frac{kq_i}{r_i}.$$
<p>No components, no angles. This is why potential is often the smart first thing to compute: get the scalar landscape, then differentiate for the field if needed.</p>
<div class="callout warn">$V$ can be zero where $\vec E$ is not (midpoint of a dipole), and $\vec E$ can be zero where $V$ is not (center of two equal positive charges). Zero potential means zero <em>energy cost to bring a charge there from infinity</em> — nothing more.</div>` },
      { heading: "The Calculus Bridge: V ↔ E",
        content: String.raw`<p>Since $U = qV$ and $F_x = -dU/dx$, dividing by $q$ links field and potential both ways:</p>
$$V_B - V_A = -\int_A^B \vec{E}\cdot d\vec{l} \qquad\qquad E_x = -\frac{dV}{dx}$$
<p>In words: <em>potential differences are field integrals; fields are (negative) potential slopes.</em> The field points from high $V$ to low $V$ — downhill. For the uniform field between parallel plates, the integral collapses to the workhorse</p>
$$|\Delta V| = Ed \qquad\Longleftrightarrow\qquad E = \frac{|\Delta V|}{d}\;\;(\text{V/m}).$$
<p>Sanity checks: the point-charge pair ($V = kq/r$, $E = kq/r^2$) satisfies $E = -dV/dr$ ✔; inside a conductor $E = 0$ forces $V$ constant ✔ (flat is the only slope-free landscape).</p>` },
      { heading: "Interactive: Read the Landscape Two Ways",
        sim: "potentialField",
        simParams: { preset: "dipole" },
        simCaption: "A dipole's V(x) along its axis, with E(x) = −dV/dx plotted beneath. Drag the probe: wherever V crosses zero with a steep slope, E is large — zero potential, strong field.",
        content: String.raw`<p>Also revisit the field-map sim from Unit 8 in "potential map" mode: the colored bands are equipotential regions, and field lines cross them at right angles everywhere. Along an equipotential, $\vec E\cdot d\vec l = 0$ — moving a charge along one costs zero work.</p>` },
      { heading: "Continuous Distributions: Integrate the Scalar",
        content: String.raw`<p>For spread-out charge, sum $dV = k\,dq/r$ over the distribution. The classic: a <strong>ring</strong> of radius $R$, total charge $Q$, evaluated on its axis at distance $z$. Every element $dq$ sits at the same distance $\sqrt{z^2 + R^2}$, so the integral is trivial:</p>
$$V(z) = \frac{kQ}{\sqrt{z^2 + R^2}}.$$
<p>Now differentiate to recover the field result from Unit 8: $E_z = -\dfrac{dV}{dz} = \dfrac{kQz}{(z^2+R^2)^{3/2}}$ ✔ — deriving $E$ by differentiating a scalar is usually far easier than vector-integrating Coulomb's law. Check the far field: $z \gg R$ gives $V \to kQ/z$, a point charge, as it must.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Treating $V$ as a vector:</strong> potentials add as signed numbers. There are no components of $V$.</li>
<li><strong>"$V = 0$ ⇒ $E = 0$" (or vice versa):</strong> value and slope are independent. Check the dipole midpoint and the two-positive-charges midpoint.</li>
<li><strong>Sign loss in $E = -dV/dx$:</strong> the field points downhill. Positive slope ⇒ negative $E_x$.</li>
<li><strong>Using $V = kq/r$ for distributions where $r$ varies</strong> without integrating — only the ring's axial symmetry made it a one-liner.</li>
<li><strong>Forgetting equipotentials ⊥ field lines:</strong> if asked to sketch one family, draw the other first and cross at right angles.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`V = \frac{kq}{r}`, note: "Point charge, zero at infinity; a signed scalar." },
      { latex: String.raw`V_B - V_A = -\int_A^B \vec{E}\cdot d\vec{l}`, note: "Potential difference as a line integral of the field — path independent." },
      { latex: String.raw`E_x = -\frac{dV}{dx}`, note: "Field is the negative slope of potential; E points from high V to low V." },
      { latex: String.raw`E = \frac{|\Delta V|}{d}`, note: "Uniform field (parallel plates); the everyday lab version." },
      { latex: String.raw`V(z) = \frac{kQ}{\sqrt{z^2+R^2}}`, note: "On-axis potential of a charged ring — the template scalar integration." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>At the midpoint between the charges of a dipole ($+q$ and $-q$ separated by $d$):</p>`,
        choices: [ String.raw`$V = 0$ and $E \neq 0$`, String.raw`$V \neq 0$ and $E = 0$`, String.raw`both are zero`, String.raw`both are nonzero` ],
        answer: 0,
        solution: String.raw`<p>Potentials cancel ($+kq/(d/2) - kq/(d/2) = 0$) because they're signed scalars; the fields both point from $+$ toward $-$ and <em>add</em>. Zero potential, double-strength field.</p>` },
      { type: "mcq",
        q: String.raw`<p>The potential in a region is $V(x) = 5x^2 - 4x$ (volts, $x$ in m). The electric field at $x = 1\,\text{m}$ is:</p>`,
        choices: [ String.raw`$-6\,\hat{i}\ \text{V/m}$`, String.raw`$+6\,\hat{i}\ \text{V/m}$`, String.raw`$-1\,\hat{i}\ \text{V/m}$`, String.raw`$+14\,\hat{i}\ \text{V/m}$` ],
        answer: 0,
        solution: String.raw`<p>$E_x = -dV/dx = -(10x - 4) = 4 - 10x$. At $x=1$: $E_x = -6\,\text{V/m}$. The minus sign in the definition is the usual casualty — the field points toward decreasing potential.</p>` },
      { type: "mcq",
        q: String.raw`<p>An equipotential surface:</p>`,
        choices: [ String.raw`is everywhere perpendicular to the electric field`, String.raw`carries no electric field on it`, String.raw`is parallel to the field lines`, String.raw`can be crossed by a charge only if work is done` ],
        answer: 0,
        solution: String.raw`<p>Along an equipotential $dV = -\vec E\cdot d\vec l = 0$, so $\vec E \perp d\vec l$ everywhere on it. The field can be large <em>at</em> the surface (B is wrong) — it just points straight through it. Moving <em>along</em> the surface is the free direction; crossing between different equipotentials is what costs work.</p>` },
      { type: "frq",
        q: String.raw`<p>A thin ring of radius $R$ carries total charge $+Q$ uniformly distributed. Consider points on its central axis, a distance $z$ from the center.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive $V(z)$ by integrating $dV = k\,dq/r$.</p>`,
            solution: String.raw`<p>Every charge element is the same distance $r = \sqrt{z^2 + R^2}$ from the axial point, so $V = \displaystyle\int \frac{k\,dq}{\sqrt{z^2+R^2}} = \frac{k}{\sqrt{z^2+R^2}}\int dq = \frac{kQ}{\sqrt{z^2+R^2}}$. The symmetry did the integral for us.</p>` },
          { label: "(b)", prompt: String.raw`<p>Obtain $E_z(z)$ from your potential and identify where on the axis the field is strongest.</p>`,
            solution: String.raw`<p>$E_z = -\dfrac{dV}{dz} = \dfrac{kQz}{(z^2+R^2)^{3/2}}$. Maximize: $\dfrac{dE_z}{dz} = 0$ gives $(z^2+R^2)^{3/2} = z\cdot 3z(z^2+R^2)^{1/2}$, i.e. $z^2 + R^2 = 3z^2$, so $z = R/\sqrt{2}$. At the center $E = 0$ (symmetry) yet $V = kQ/R$ is maximal — value vs. slope again.</p>` },
          { label: "(c)", prompt: String.raw`<p>An electron is released from rest on the axis at large $z$. Describe its motion and find its speed as it passes the center, in terms of $k$, $Q$, $e$, $m_e$, $R$.</p>`,
            solution: String.raw`<p>The negative electron is attracted toward the positive ring and accelerates inward along the axis. Energy from $z \to \infty$ ($V = 0$) to the center ($V = kQ/R$): $\Delta U = (-e)\left(\dfrac{kQ}{R} - 0\right) = -\dfrac{keQ}{R}$, so $\tfrac{1}{2}m_ev^2 = \dfrac{keQ}{R}$ and $v = \sqrt{\dfrac{2keQ}{m_eR}}$. It then overshoots and oscillates back and forth through the ring along the axis.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>The electric field in a region points only in the $x$ direction, with $E_x(x) = 6x$ (V/m, $x$ in m). Take $V(0) = 0$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find $V(x)$.</p>`,
            solution: String.raw`<p>$V(x) - V(0) = -\displaystyle\int_0^x E_x\,dx' = -\int_0^x 6x'\,dx' = -3x^2$. So $V(x) = -3x^2$ — a potential hill at the origin falling off parabolically both ways (the field $6x$ points away from the origin on both sides).</p>` },
          { label: "(b)", prompt: String.raw`<p>A proton (charge $+e$, mass $m_p$) is released from rest at $x = 2.0\,\text{m}$. Find its kinetic energy when it reaches $x = 4.0\,\text{m}$, in eV and in terms of $e$.</p>`,
            solution: String.raw`<p>$\Delta K = -\Delta U = -e[V(4) - V(2)] = -e[(-48) - (-12)] = +36e\ \text{J per coulomb} = 36\,\text{eV}$. In SI: $K = 36(1.6\times10^{-19}) = 5.8\times10^{-18}\,\text{J}$. The proton runs downhill, away from the origin, exactly as the outward field demands.</p>` }
        ] }
    ]
  },

  /* ============================ 9.3 ============================ */
  {
    id: "9.3",
    title: "Conservation of Electric Energy",
    blurb: "qΔV is the only entry you need in the energy ledger to predict how fast charges fly.",
    objectives: [
      "Apply conservation of energy to charges moving through potential differences: ΔK = −qΔV.",
      "Use the electron-volt fluently as an energy unit.",
      "Analyze accelerating gaps, classical particle accelerators, and turning points.",
      "Combine electric potential energy with other energy forms in mixed problems."
    ],
    sections: [
      { heading: "The One-Line Energy Law",
        content: String.raw`<p>A charge $q$ moving between points at potentials $V_A$ and $V_B$ changes potential energy by $\Delta U = q\Delta V = q(V_B - V_A)$. If the electric force is the only one doing work,</p>
$$\Delta K = -q\,\Delta V.$$
<p>Sign logic, worth automating: <strong>positive charges accelerate from high to low potential</strong> (downhill); <strong>negative charges accelerate from low to high</strong> (their energy $U = qV$ goes downhill when $V$ goes <em>up</em>). Either way, particles of both signs fall toward lower <em>potential energy</em>.</p>
<div class="callout key">A particle of charge $e$ crossing a 1-volt gap gains exactly one <strong>electron-volt</strong>: $1\,\text{eV} = 1.6\times10^{-19}\,\text{J}$. An X-ray tube at 50 kV gives electrons 50 keV — read energies straight off the voltage, no calculation.</div>` },
      { heading: "Interactive: Falling Through a Potential",
        sim: "potentialField",
        simParams: { preset: "uniform" },
        simCaption: "A uniform field's potential is a straight ramp. Slide the probe and watch V change linearly while E stays constant — the geometry of every parallel-plate accelerating gap.",
        content: String.raw`<p>Between plates separated by $d$ with voltage $\Delta V$: a charge released at the high-$U$ plate arrives at the other with $K = |q\Delta V|$, regardless of $d$ — the gap spacing changes the field and the travel time, but not the energy. That is the magic of potential: geometry drops out.</p>` },
      { heading: "Worked Examples: The Standard Repertoire",
        content: String.raw`<p><strong>Electron gun:</strong> an electron accelerated from rest through $\Delta V$: $\tfrac{1}{2}m_ev^2 = e\Delta V \Rightarrow v = \sqrt{2e\Delta V/m_e}$. At 100 V that's already $5.9\times10^6$ m/s — 2% of light speed; the formula's nonrelativistic clock runs out around tens of kV.</p>
<p><strong>Closest approach:</strong> a charge $q_1$ with kinetic energy $K$ fired head-on at fixed $q_2$ stops where $K = kq_1q_2/r_{min}$.</p>
<p><strong>Mixed ledgers:</strong> a charged pendulum or a charge on a spring in a field just adds $qV$ terms to the mechanical ledger: $K + U_{grav} + U_{spring} + qV = $ constant. Energy methods don't care which force banked the energy.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Sign chaos:</strong> write $\Delta K = -q\Delta V$ and substitute <em>signed</em> $q$ and signed $\Delta V$. Then trust the algebra, not your gut.</li>
<li><strong>eV as a voltage:</strong> the electron-volt is an <em>energy</em> unit. "An electron at 5 eV" describes kinetic energy, not potential.</li>
<li><strong>Using kinematics where energy suffices:</strong> "how fast at the far plate" needs no $E$-field, no force, no time — just $q\Delta V$.</li>
<li><strong>Assuming the field does work on a charge moving along an equipotential:</strong> it doesn't; $W = -q\Delta V = 0$ there.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\Delta U = q\,\Delta V`, note: "Energy cost of moving charge q through potential difference ΔV." },
      { latex: String.raw`\Delta K = -q\,\Delta V`, note: "Energy conservation when only the electric force does work." },
      { latex: String.raw`v = \sqrt{\frac{2q\Delta V}{m}}`, note: "Speed of a charge accelerated from rest through ΔV (nonrelativistic)." },
      { latex: String.raw`1\,\text{eV} = 1.6\times10^{-19}\,\text{J}`, note: "Energy gained by charge e crossing one volt." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>An electron and a proton are each accelerated from rest through the same potential difference. They emerge with the same:</p>`,
        choices: [ String.raw`kinetic energy`, String.raw`speed`, String.raw`momentum`, String.raw`velocity` ],
        answer: 0,
        solution: String.raw`<p>Both carry charge magnitude $e$, so both gain $K = e\Delta V$. Speeds differ enormously ($v \propto 1/\sqrt{m}$, the electron ~43× faster), and so do momenta ($p = \sqrt{2mK}$, the proton's larger).</p>` },
      { type: "mcq",
        q: String.raw`<p>A proton is released from rest in a region where the potential decreases in the $+x$ direction. The proton will:</p>`,
        choices: [ String.raw`accelerate in the $+x$ direction`, String.raw`accelerate in the $-x$ direction`, String.raw`remain at rest — V, not E, is what matters`, String.raw`move at constant velocity in $+x$` ],
        answer: 0,
        solution: String.raw`<p>$E_x = -dV/dx > 0$ when $V$ decreases with $x$; positive charge feels $F = qE$ in $+x$. Positive charges roll downhill on the potential landscape.</p>` },
      { type: "mcq",
        q: String.raw`<p>An electron accelerated from rest through $\Delta V$ acquires speed $v$. To give it speed $2v$, the accelerating voltage must be:</p>`,
        choices: [ String.raw`$4\Delta V$`, String.raw`$2\Delta V$`, String.raw`$\sqrt{2}\,\Delta V$`, String.raw`$8\Delta V$` ],
        answer: 0,
        solution: String.raw`<p>$e\Delta V = \tfrac{1}{2}mv^2 \Rightarrow \Delta V \propto v^2$: doubling the speed quadruples the required voltage.</p>` },
      { type: "frq",
        q: String.raw`<p>In a cathode-ray tube, electrons ($m_e = 9.11\times10^{-31}\,\text{kg}$) are accelerated from rest through $\Delta V = 2000\,\text{V}$, then enter a field-free drift region.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the electrons' exit speed from the accelerating gap.</p>`,
            solution: String.raw`<p>$v = \sqrt{\dfrac{2e\Delta V}{m_e}} = \sqrt{\dfrac{2(1.6\times10^{-19})(2000)}{9.11\times10^{-31}}} = 2.65\times10^7\,\text{m/s}$ — about 9% of $c$, so the classical formula is still serviceable.</p>` },
          { label: "(b)", prompt: String.raw`<p>Explain why doubling the gap spacing (at the same 2000 V) changes neither the exit speed nor the exit kinetic energy.</p>`,
            solution: String.raw`<p>The kinetic energy gained equals $e\Delta V$, fixed by the <em>potential difference</em> alone. A wider gap means a weaker field ($E = \Delta V/d$) acting over a proportionally longer distance — the work $eEd = e\Delta V$ is unchanged. (Travel time does increase.)</p>` },
          { label: "(c)", prompt: String.raw`<p>Express the electrons' kinetic energy in electron-volts and state the conversion you used.</p>`,
            solution: String.raw`<p>$K = e \times 2000\,\text{V} = 2000\,\text{eV} = 2.0\,\text{keV}$; in SI, $2000 \times 1.6\times10^{-19} = 3.2\times10^{-16}\,\text{J}$. The eV makes accelerator energetics arithmetic-free.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A small sphere of mass $m = 0.20\,\text{g}$ carrying charge $q = +50\,\text{nC}$ hangs from an insulating thread between vertical parallel plates separated by $d = 4.0\,\text{cm}$. When the plates are connected to a battery of voltage $\Delta V$, the thread settles at $8.0^\circ$ from vertical.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Draw/describe the free-body diagram and derive an expression for the electric field between the plates in terms of $m$, $g$, $q$, and $\theta$.</p>`,
            solution: String.raw`<p>Forces: weight $mg$ down, tension $T$ along the thread, electric force $qE$ horizontal. Equilibrium: $T\sin\theta = qE$, $T\cos\theta = mg$. Dividing: $E = \dfrac{mg\tan\theta}{q}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Calculate the battery voltage.</p>`,
            solution: String.raw`<p>$E = \dfrac{(2.0\times10^{-4})(9.8)\tan 8.0^\circ}{50\times10^{-9}} = \dfrac{(1.96\times10^{-3})(0.1405)}{5.0\times10^{-8}} = 5.5\times10^3\,\text{V/m}$. Then $\Delta V = Ed = (5.5\times10^3)(0.040) \approx 220\,\text{V}$. A statics problem and a potential problem stapled together — the uniform-field bridge $\Delta V = Ed$ is the staple.</p>` }
        ] }
    ]
  }
  ]
});
