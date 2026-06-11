/* data/em-u13.js — Unit 13: Electromagnetic Induction */
AP.registerUnit({
  id: 13,
  course: "em",
  title: "Electromagnetic Induction",
  weight: "10–20%",
  tagline: "Changing magnetic flux creates emf — the principle behind generators, transformers, inductors, and the grand finale of the course.",
  bigIdeas: [
    "Magnetic flux Φ = ∫B·dA measures field through a loop; emf comes only from CHANGING flux: ε = −dΦ/dt.",
    "Lenz's law — induced effects oppose the change creating them — is energy conservation in magnetic disguise.",
    "Inductors store energy in magnetic fields and resist changes in current: ε = −L dI/dt.",
    "LR circuits decay/grow exponentially with τ = L/R; LC circuits oscillate at ω = 1/√(LC) — SHM returns one last time."
  ],
  topics: [

  /* ============================ 13.1 ============================ */
  {
    id: "13.1",
    title: "Magnetic Flux",
    blurb: "How much field threads the loop — the single quantity whose change drives all of induction.",
    objectives: [
      "Compute magnetic flux Φ_B = ∫B·dA for uniform and non-uniform fields.",
      "Identify the three ways flux changes: B changes, area changes, orientation changes.",
      "Use flux units (webers) and interpret flux sign via the chosen normal.",
      "Evaluate flux integrals when B varies over the surface (e.g., near a wire)."
    ],
    sections: [
      { heading: "The Definition",
        content: String.raw`<p><strong>Magnetic flux</strong> through a surface counts the field threading it:</p>
$$\Phi_B = \int \vec{B}\cdot d\vec{A}, \qquad 1\,\text{Wb} = 1\,\text{T·m}^2.$$
<p>For a uniform field through a flat loop of area $A$ whose normal makes angle $\theta$ with $\vec B$:</p>
$$\Phi_B = BA\cos\theta.$$
<p>Face-on ($\theta = 0$): maximum flux. Edge-on ($\theta = 90^\circ$): zero — the field skims the loop without threading it. Flux is a signed scalar; the sign follows your choice of normal direction (and that choice, via the right-hand rule, sets which circulation direction counts as positive current — keep both consistent).</p>
<div class="callout key">Through any <em>closed</em> surface, $\oint \vec B\cdot d\vec A = 0$ always — there are no magnetic monopoles, so field lines that enter must leave. (This is one of Maxwell's equations, and the deep reason B-field lines always close on themselves.)</div>` },
      { heading: "Three Knobs That Change Flux",
        content: String.raw`<p>Since $\Phi = BA\cos\theta$, there are exactly three ways to change it — and each is a technology:</p>
<ul>
<li><strong>Change $B$:</strong> ramp an electromagnet, move a magnet toward a coil — transformers live here.</li>
<li><strong>Change $A$:</strong> slide a bar along rails, stretch or shrink a loop.</li>
<li><strong>Change $\theta$:</strong> rotate the loop in the field — this is precisely a <strong>generator</strong>: $\Phi = BA\cos(\omega t)$.</li>
</ul>
<p>If $B$ varies over the surface you must genuinely integrate. Standard example — a rectangular loop (width $w$, length $\ell$, near side at distance $d$) beside a long straight wire carrying $I$: strips at distance $r$ carry $dA = \ell\,dr$ and $B = \mu_0I/2\pi r$, so</p>
$$\Phi = \int_d^{d+w} \frac{\mu_0 I}{2\pi r}\,\ell\,dr = \frac{\mu_0 I \ell}{2\pi}\ln\!\frac{d+w}{d}.$$` },
      { heading: "Flux of a Rotating Loop",
        graph: { xLabel: "t (s)", yLabel: "Φ and ε (arb.)", xMin: 0, xMax: 6.3, yMin: -1.4, yMax: 1.4,
                 fns: [ { expr: "Math.cos(2*x)", label: "Φ(t) = BA cos ωt", color: "#c084fc" },
                        { expr: "2*Math.sin(2*x)/2", label: "ε(t) = −dΦ/dt (scaled)", color: "#fbbf24" } ] },
        graphCaption: "A loop rotating at constant ω: the flux is a cosine, and the induced emf — its negative derivative — is a sine. Note ε peaks where Φ crosses ZERO (fastest change), not where Φ peaks.",
        content: String.raw`<p>This phase relationship is the most-tested graph in Unit 13: <strong>emf is maximal when flux is zero and momentarily zero when flux is maximal</strong>, because emf cares about the slope of flux, never its value. It is also why your wall outlets carry sinusoidal AC — they're wired to rotating loops.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>θ confusion:</strong> the angle is between $\vec B$ and the <em>normal</em> to the loop, not the loop's plane. A loop "parallel to B" (plane containing B) has ZERO flux.</li>
<li><strong>Big flux ⇒ big emf:</strong> no — only changing flux matters. A loop soaking in a huge static field induces nothing.</li>
<li><strong>Skipping the integral when B varies:</strong> $BA\cos\theta$ assumes uniform B over the surface.</li>
<li><strong>N turns:</strong> a coil of $N$ turns links the flux $N$ times — flux linkage is $N\Phi$, and the emf will be $N$ times bigger.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\Phi_B = \int \vec{B}\cdot d\vec{A}`, note: "General definition; reduces to BA cos θ for uniform fields and flat loops." },
      { latex: String.raw`\Phi_B = BA\cos\theta`, note: "θ measured from the loop NORMAL to B." },
      { latex: String.raw`\oint \vec{B}\cdot d\vec{A} = 0`, note: "Gauss's law for magnetism: no monopoles; closed surfaces net zero flux." },
      { latex: String.raw`\Phi = \frac{\mu_0 I \ell}{2\pi}\ln\frac{d+w}{d}`, note: "Loop beside a long wire — the standard non-uniform-B integration." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A circular loop of radius $0.10\,\text{m}$ lies with its plane at $30^\circ$ to a uniform $0.50\,\text{T}$ field. The flux through it is closest to:</p>`,
        choices: [ String.raw`$7.9\times10^{-3}\,\text{Wb}$`, String.raw`$1.4\times10^{-2}\,\text{Wb}$`, String.raw`$1.6\times10^{-2}\,\text{Wb}$`, String.raw`$3.9\times10^{-3}\,\text{Wb}$` ],
        answer: 0,
        solution: String.raw`<p>Plane at $30^\circ$ to B means the normal is at $60^\circ$: $\Phi = BA\cos 60^\circ = 0.50(\pi\times0.01)(0.50) = 7.9\times10^{-3}\,\text{Wb}$. The plane/normal switch is the entire question.</p>` },
      { type: "mcq",
        q: String.raw`<p>The net magnetic flux through a closed cube-shaped surface in an arbitrary magnetic field is:</p>`,
        choices: [ String.raw`zero`, String.raw`$B \times 6L^2$`, String.raw`positive if the field is strong`, String.raw`dependent on the field's uniformity` ],
        answer: 0,
        solution: String.raw`<p>$\oint\vec B\cdot d\vec A = 0$ for every closed surface — no magnetic charges exist for the lines to end on. Whatever enters, exits.</p>` },
      { type: "mcq",
        q: String.raw`<p>A generator loop rotates at constant angular speed in a uniform field. At the instant the flux through the loop is maximum, the induced emf is:</p>`,
        choices: [ String.raw`zero`, String.raw`maximum`, String.raw`half its maximum`, String.raw`equal to $BA\omega$` ],
        answer: 0,
        solution: String.raw`<p>$\varepsilon = -d\Phi/dt$: at the cosine's peak the slope is zero. Flux and emf are 90° out of phase — emf peaks as the flux sweeps through zero.</p>` },
      { type: "frq",
        q: String.raw`<p>A square loop of side $a$ lies in the $xy$-plane in a field $\vec{B} = B_0\left(\frac{x}{a}\right)\hat{k}$ — into/out of the plane with strength growing linearly in $x$. The loop spans $0 \le x \le a$, $0 \le y \le a$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Compute the flux through the loop.</p>`,
            solution: String.raw`<p>Strips of width $dx$ at position $x$ have area $a\,dx$ and field $B_0x/a$: $\Phi = \displaystyle\int_0^a \frac{B_0x}{a}\,a\,dx = B_0\frac{a^2}{2}$ — exactly half of $B_0a^2$, since the average field over the loop is $B_0/2$.</p>` },
          { label: "(b)", prompt: String.raw`<p>If $B_0$ grows in time as $B_0(t) = \beta t$, find the magnitude of the induced emf.</p>`,
            solution: String.raw`<p>$\varepsilon = \left|\dfrac{d\Phi}{dt}\right| = \dfrac{a^2}{2}\dfrac{dB_0}{dt} = \dfrac{\beta a^2}{2}$, constant in time. (Direction: by Lenz, the induced current circulates to oppose the growing flux.)</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A rectangular loop (length $\ell$ parallel to a long straight wire, width $w$) sits with its near side a distance $d$ from the wire, which carries current $I$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive the flux through the loop by integration.</p>`,
            solution: String.raw`<p>$B(r) = \dfrac{\mu_0I}{2\pi r}$, uniform along each strip of area $\ell\,dr$: $\Phi = \displaystyle\int_d^{d+w}\frac{\mu_0I}{2\pi r}\ell\,dr = \frac{\mu_0I\ell}{2\pi}\ln\frac{d+w}{d}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>The loop now slides directly away from the wire at speed $v = dd/dt$. Without full differentiation, state whether the induced emf is constant, increasing, or decreasing in magnitude as it recedes, and justify.</p>`,
            solution: String.raw`<p>Decreasing. $|\varepsilon| = \dfrac{d\Phi}{dt} = \dfrac{\mu_0I\ell}{2\pi}\left(\dfrac{1}{d} - \dfrac{1}{d+w}\right)v$ — the bracket shrinks as $d$ grows (the field, and especially its variation across the loop, weakens with distance). Far away, the field is nearly uniform across the loop and barely changes as it moves: little emf.</p>` }
        ] }
    ]
  },

  /* ============================ 13.2 ============================ */
  {
    id: "13.2",
    title: "Electromagnetic Induction",
    blurb: "Faraday's law and Lenz's law: changing flux makes emf, and nature charges interest on the change.",
    objectives: [
      "Apply Faraday's law ε = −N dΦ/dt to coils and loops.",
      "Use Lenz's law to determine induced current directions.",
      "Analyze motional emf ε = BLv from the magnetic-force and the flux viewpoints.",
      "Explain that induced E fields are nonconservative and circulate around changing flux."
    ],
    sections: [
      { heading: "Faraday's Law",
        content: String.raw`<p>A changing magnetic flux through a loop induces an electromotive force:</p>
$$\varepsilon = -N\frac{d\Phi_B}{dt}$$
<p>($N$ = number of turns). The magnitude is the <em>rate</em> of flux change; the minus sign is <strong>Lenz's law</strong>: the induced current flows in the direction whose own magnetic field <em>opposes the change</em> in flux. Increasing flux into the page? Induced current runs counterclockwise... no — careful: counterclockwise current makes flux <em>out</em> of the page — yes, opposing the increase. ✔</p>
<div class="callout key">Lenz's law is energy conservation. If induction <em>aided</em> the change, you'd get runaway free energy: push a magnet toward a coil and the coil would suck it in, accelerating it, increasing the change, forever. Instead, induced effects always make you work for the energy you extract.</div>` },
      { heading: "Motional emf: Two Ways to See It",
        content: String.raw`<p>Slide a conducting bar of length $L$ at speed $v$ through field $B$ (all mutually perpendicular):</p>
<ul>
<li><strong>Force picture:</strong> each carrier in the bar moves with it, feeling $\vec F = q\vec v\times\vec B$ along the bar. Charge piles up until the internal field balances: the bar becomes a battery with $\varepsilon = BLv$.</li>
<li><strong>Flux picture:</strong> on rails, the circuit's area grows at $dA/dt = Lv$, so $|\varepsilon| = B\,dA/dt = BLv$.</li>
</ul>
<p>Same answer, guaranteed. The rail circuit then carries $I = BLv/R$, and the field pushes back on that current with force $F = BIL = B^2L^2v/R$ opposing the motion (Lenz again) — whoever pulls the bar supplies exactly the power $Fv = \varepsilon I$ that the resistor dissipates.</p>` },
      { heading: "Interactive: The Sliding Rail",
        sim: "induction",
        simCaption: "Drag the velocity slider and watch flux, emf, induced current, and the opposing force respond together. Reverse v and every induced quantity flips — Lenz never sleeps.",
        content: String.raw`<p>Watch the live graphs: when the bar moves at constant speed, flux ramps linearly and emf sits constant; stop the bar and the emf vanishes instantly even though plenty of flux still threads the circuit. Slope, not value.</p>` },
      { heading: "Induced Electric Fields Are Different",
        content: String.raw`<p>What pushes charges in a stationary loop around a changing flux? A <strong>induced electric field</strong> that curls around the flux change:</p>
$$\oint \vec{E}\cdot d\vec{l} = -\frac{d\Phi_B}{dt}$$
<p>— the full Faraday–Maxwell equation. This $\vec E$ is <em>nonconservative</em>: its loop integral is nonzero, so no potential function describes it (the electrostatic rule $\oint\vec E\cdot d\vec l = 0$ is repealed when fluxes change). Inside a solenoid with ramping current, the induced field lines are concentric circles — this is exactly how a transformer's secondary coil gets pushed, with no wires touching.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Opposing the FLUX instead of the CHANGE:</strong> Lenz's law opposes $d\Phi/dt$. Decreasing into-page flux induces a current that ADDS into-page flux.</li>
<li><strong>emf from big static flux:</strong> zero. Only the derivative induces.</li>
<li><strong>Dropping N for coils:</strong> 200 turns means 200× the emf.</li>
<li><strong>Applying potential/voltage ideas to induced fields:</strong> induced E is nonconservative; "the potential difference around the loop" is not a meaningful phrase — emf is.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\varepsilon = -N\frac{d\Phi_B}{dt}`, note: "Faraday's law; minus sign = Lenz's law (oppose the change)." },
      { latex: String.raw`\varepsilon = BLv`, note: "Motional emf of a bar, B ⊥ L ⊥ v." },
      { latex: String.raw`F_{opposing} = \frac{B^2L^2v}{R}`, note: "Retarding force on a bar feeding a resistance R — magnetic braking." },
      { latex: String.raw`\oint \vec{E}\cdot d\vec{l} = -\frac{d\Phi_B}{dt}`, note: "Induced E fields circulate around changing flux; nonconservative." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A bar magnet falls north-pole-first toward a horizontal conducting ring (viewed from above, with the magnet descending toward you... take the view from above the ring, magnet approaching from above). The induced current in the ring, viewed from above, is:</p>`,
        choices: [ String.raw`counterclockwise, creating an upward flux to repel the approaching north pole`, String.raw`clockwise, attracting the magnet`, String.raw`zero until the magnet touches the ring`, String.raw`alternating` ],
        answer: 0,
        solution: String.raw`<p>Approaching north pole increases downward... careful: a descending north pole sends increasing flux <em>downward</em> through the ring? Field lines exit a north pole — pointing down toward the ring, so downward flux increases. The ring opposes with upward flux: counterclockwise viewed from above (right-hand rule), making the ring's top face a north pole that repels the incoming magnet. Lenz = the ring fights the approach.</p>` },
      { type: "mcq",
        q: String.raw`<p>A 50-turn coil of area $0.020\,\text{m}^2$ sits in a field that drops uniformly from $0.60\,\text{T}$ to zero in $0.30\,\text{s}$ (field along the coil axis). The average induced emf is:</p>`,
        choices: [ String.raw`$2.0\,\text{V}$`, String.raw`$0.040\,\text{V}$`, String.raw`$0.60\,\text{V}$`, String.raw`$100\,\text{V}$` ],
        answer: 0,
        solution: String.raw`<p>$\varepsilon = N\dfrac{\Delta\Phi}{\Delta t} = 50\cdot\dfrac{0.60\times0.020}{0.30} = 2.0\,\text{V}$. Forgetting $N$ gives 0.040 V.</p>` },
      { type: "mcq",
        q: String.raw`<p>A conducting loop is pulled at constant velocity completely through a region of uniform field (entering, crossing, exiting). The induced current is:</p>`,
        choices: [ String.raw`nonzero while entering and exiting, zero while fully inside`, String.raw`constant the entire time`, String.raw`zero always — the field is uniform`, String.raw`maximum while fully inside` ],
        answer: 0,
        solution: String.raw`<p>Flux changes only while the boundary crosses the loop. Fully inside, $\Phi$ is large but constant — no emf. And the entering/exiting currents flow in opposite directions (flux increasing, then decreasing).</p>` },
      { type: "frq",
        q: String.raw`<p>A conducting bar of mass $m$ and length $L$ slides on frictionless horizontal rails connected by a resistor $R$, in a uniform vertical field $B$. The bar is given an initial speed $v_0$ and released (no applied force afterward).</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Show that the bar's velocity obeys $m\dfrac{dv}{dt} = -\dfrac{B^2L^2}{R}v$ and solve for $v(t)$.</p>`,
            solution: String.raw`<p>Motional emf $BLv$ drives $I = BLv/R$; the field exerts $F = BIL = B^2L^2v/R$ opposing the motion (Lenz). Newton: $m\dot v = -\dfrac{B^2L^2}{R}v$ — same form as linear drag. Solution: $v(t) = v_0e^{-t/\tau}$ with $\tau = \dfrac{mR}{B^2L^2}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the total distance traveled and verify that the total heat dissipated equals the initial kinetic energy.</p>`,
            solution: String.raw`<p>$x = \displaystyle\int_0^\infty v_0e^{-t/\tau}dt = v_0\tau = \dfrac{mRv_0}{B^2L^2}$ — finite. Energy: all kinetic energy must end as resistor heat, since the magnetic force does no net work on the system (it transfers energy from bar to circuit): $\int I^2R\,dt = \int \frac{B^2L^2v^2}{R}dt = \frac{B^2L^2v_0^2}{R}\cdot\frac{\tau}{2} = \frac{1}{2}mv_0^2$ ✔. Magnetic braking, quantified.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A generator consists of an $N$-turn rectangular coil of area $A$ rotating at angular speed $\omega$ in a uniform field $B$, about an axis perpendicular to the field.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive the emf as a function of time and identify its peak value.</p>`,
            solution: String.raw`<p>$\Phi = BA\cos\omega t$ per turn, so $\varepsilon = -N\dfrac{d\Phi}{dt} = NBA\omega\sin\omega t$, with peak $\varepsilon_0 = NBA\omega$ — output grows linearly with rotation rate.</p>` },
          { label: "(b)", prompt: String.raw`<p>The coil drives a resistance $R$. Find the average mechanical power required to keep it rotating (ignore the coil's own resistance).</p>`,
            solution: String.raw`<p>$P(t) = \dfrac{\varepsilon^2}{R} = \dfrac{(NBA\omega)^2}{R}\sin^2\omega t$, and $\langle\sin^2\rangle = \tfrac{1}{2}$: $\langle P\rangle = \dfrac{(NBA\omega)^2}{2R}$. The crank-turner supplies this — induced torques oppose the rotation (Lenz), and the work against them becomes electrical energy. Nothing is free.</p>` }
        ] }
    ]
  },

  /* ============================ 13.3 ============================ */
  {
    id: "13.3",
    title: "Induced Currents and Magnetic Forces",
    blurb: "Close the loop and induction gets mechanical: braking forces, eddy currents, and terminal velocities.",
    objectives: [
      "Compute induced currents in complete circuits and the magnetic forces on them.",
      "Trace the full energy chain: mechanical work → electrical energy → heat.",
      "Analyze terminal velocity of conductors falling/moving through fields.",
      "Explain eddy currents and magnetic damping qualitatively."
    ],
    sections: [
      { heading: "From emf to Force",
        content: String.raw`<p>The standard pipeline for any moving-conductor problem:</p>
$$v \;\xrightarrow{\;\varepsilon = BLv\;}\; \varepsilon \;\xrightarrow{\;I = \varepsilon/R\;}\; I \;\xrightarrow{\;F = BIL\;}\; F_{opposing} = \frac{B^2L^2v}{R}.$$
<p>The force is proportional to velocity and opposite to it — <strong>magnetic braking</strong> behaves exactly like the viscous drag of Mechanics 2.9, with all the same exponential mathematics. The power extracted from the motion equals the electrical power dissipated:</p>
$$P_{mech} = Fv = \frac{B^2L^2v^2}{R} = I^2R = P_{heat}.$$
<p>That equality IS the physics: the magnetic field is a perfect middleman, converting mechanical work to electrical energy without keeping any.</p>` },
      { heading: "Terminal Velocity in a Field",
        content: String.raw`<p>Drop a conducting bar down vertical rails (or a loop past a magnet): gravity pulls down with $mg$; braking pushes up with $B^2L^2v/R$. The bar accelerates until they balance:</p>
$$mg = \frac{B^2L^2v_T}{R} \;\Longrightarrow\; v_T = \frac{mgR}{B^2L^2}.$$
<p>At terminal velocity the entire gravitational power $mgv_T$ funnels into resistor heat. Every limiting-value instinct from drag problems transfers: set the net force to zero, skip the differential equation when only $v_T$ is asked.</p>` },
      { heading: "Interactive: Feel the Brake",
        sim: "induction",
        simCaption: "Set a high velocity and watch the opposing force readout. Then double B: the braking force quadruples (B appears twice — once making the emf, once acting on the current).",
        content: String.raw`<p>The $B^2$ scaling is the most-tested feature: doubling the field at fixed speed doubles the induced current AND doubles the force per ampere — a fourfold brake.</p>` },
      { heading: "Eddy Currents",
        content: String.raw`<p>A solid conductor moving through a non-uniform field develops swirling <strong>eddy currents</strong> — closed loops of current induced wherever flux changes inside the bulk metal. By Lenz, their forces always oppose the relative motion: a copper plate swung between magnet poles stops as if moving through molasses; a magnet dropped down a copper pipe descends in slow motion (the pipe is never touched — the braking is pure induction).</p>
<p>Eddy currents power induction cooktops, train brakes, and metal detectors; where they're unwanted (transformer cores), engineers laminate the metal into insulated sheets to interrupt the current loops.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Forgetting the force opposes <em>relative</em> motion:</strong> Lenz's law sets the direction every time; you never need to memorize cases.</li>
<li><strong>Single-counting B:</strong> the braking force scales as $B^2$, not $B$.</li>
<li><strong>Energy double-booking:</strong> $Fv$ and $I^2R$ are the same energy at two pipeline stages — don't add them.</li>
<li><strong>Assuming the magnet in the copper pipe touches the walls:</strong> the drag is electromagnetic; with a plastic pipe it free-falls.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`I = \frac{BLv}{R}`, note: "Induced current in a rail circuit." },
      { latex: String.raw`F = BIL = \frac{B^2L^2v}{R}`, note: "Braking force on the moving conductor: ∝ v, ∝ B²." },
      { latex: String.raw`v_T = \frac{mgR}{B^2L^2}`, note: "Terminal velocity of a falling bar/loop: gravity balances magnetic braking." },
      { latex: String.raw`P_{mech} = Fv = I^2R`, note: "Energy pipeline: mechanical power in = electrical power dissipated." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A bar slides on rails through field $B$ at constant speed $v$, driving current through resistor $R$. If the field is doubled (same speed maintained), the power dissipated in $R$:</p>`,
        choices: [ String.raw`quadruples`, String.raw`doubles`, String.raw`is unchanged`, String.raw`increases 8-fold` ],
        answer: 0,
        solution: String.raw`<p>$P = \varepsilon^2/R = (BLv)^2/R \propto B^2$. (The agent pulling the bar must also supply 4× the power.)</p>` },
      { type: "mcq",
        q: String.raw`<p>A magnet takes 4 s to fall through a copper pipe. Through an identical-size plastic pipe it takes:</p>`,
        choices: [ String.raw`much less time — essentially free-fall`, String.raw`the same 4 s`, String.raw`more time`, String.raw`it depends on the magnet's polarity` ],
        answer: 0,
        solution: String.raw`<p>Plastic is an insulator: no eddy currents, no Lenz braking, just free fall. The copper pipe's drama is entirely electromagnetic. Polarity is irrelevant — flipping the magnet flips the induced currents too.</p>` },
      { type: "mcq",
        q: String.raw`<p>A falling conducting loop reaches terminal velocity passing a magnet. At terminal velocity, the rate of heat generation in the loop equals:</p>`,
        choices: [ String.raw`$mgv_T$`, String.raw`$\tfrac{1}{2}mv_T^2$`, String.raw`zero`, String.raw`$mg$` ],
        answer: 0,
        solution: String.raw`<p>Constant speed ⇒ constant KE ⇒ all gravitational power $mgv_T$ converts to electrical heat. ($\tfrac{1}{2}mv_T^2$ is an energy, not a rate.)</p>` },
      { type: "frq",
        q: String.raw`<p>A square loop of side $L$, mass $m$, and resistance $R$ falls vertically; its top edge remains inside a region of horizontal field $B$ (pointing out of the page) while its bottom edge is below the field region.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the emf, the induced current (with direction), and the net magnetic force on the loop when it falls at speed $v$.</p>`,
            solution: String.raw`<p>Only the top edge moves through the field region boundary effectively changing flux: $\varepsilon = BLv$, $I = BLv/R$. Flux out of the page is decreasing (loop exiting downward), so induced current flows counterclockwise to replenish it. Force on the top edge ($I$ flowing through field $B$): $F = BIL = B^2L^2v/R$, directed <em>upward</em> — opposing the fall, as Lenz demands. (Side-edge forces cancel.)</p>` },
          { label: "(b)", prompt: String.raw`<p>Write Newton's second law and find the terminal velocity.</p>`,
            solution: String.raw`<p>$m\dfrac{dv}{dt} = mg - \dfrac{B^2L^2}{R}v$; setting $dv/dt = 0$: $v_T = \dfrac{mgR}{B^2L^2}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>Sketch (describe) $v(t)$ for a loop released from rest, and identify the time constant.</p>`,
            solution: String.raw`<p>Identical mathematics to linear drag: $v(t) = v_T(1 - e^{-t/\tau})$ with $\tau = \dfrac{mR}{B^2L^2}$. Starts with slope $g$, bends over, asymptotes at $v_T$ — at $t = \tau$ it has reached 63% of terminal velocity.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A horizontal bar of mass $m$ and length $L$ slides on frictionless rails inclined... rather: a horizontal bar on level rails is pulled by a constant applied force $F_{app}$ starting from rest, through uniform vertical field $B$, with circuit resistance $R$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Show that the bar approaches a maximum speed and find it.</p>`,
            solution: String.raw`<p>$m\dfrac{dv}{dt} = F_{app} - \dfrac{B^2L^2}{R}v$. The braking term grows with $v$ until it cancels $F_{app}$: $v_{max} = \dfrac{F_{app}R}{B^2L^2}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>At maximum speed, account for every watt the applied force delivers.</p>`,
            solution: String.raw`<p>$P_{app} = F_{app}v_{max} = \dfrac{F_{app}^2R}{B^2L^2}$. KE is constant, so all of it is dissipated: $I^2R = \left(\dfrac{BLv_{max}}{R}\right)^2 R = \dfrac{B^2L^2v_{max}^2}{R} = F_{app}v_{max}$ ✔. The bar is a mechanical-to-electrical transducer running at steady state — a linear generator.</p>` }
        ] }
    ]
  },

  /* ============================ 13.4 ============================ */
  {
    id: "13.4",
    title: "Inductance",
    blurb: "A coil's flux is fed by its own current — so it fights every change in that current, and stores energy in its field.",
    objectives: [
      "Define self-inductance L = NΦ/I and derive L for a solenoid.",
      "Apply ε = −L dI/dt to find induced emfs from current changes.",
      "Calculate energy stored, U = ½LI², and the field energy density u = B²/2μ₀.",
      "Interpret an inductor's opposition to current changes via Lenz's law."
    ],
    sections: [
      { heading: "Self-Inductance",
        content: String.raw`<p>A coil's own current creates flux through itself; flux linkage is proportional to current, and the constant is the <strong>self-inductance</strong>:</p>
$$L = \frac{N\Phi_B}{I} \qquad (\text{henries: } 1\,\text{H} = 1\,\text{V·s/A}).$$
<p>Derive it for the workhorse case, a solenoid (length $\ell$, $N$ turns, area $A$): inside, $B = \mu_0 n I$ with $n = N/\ell$, so each turn links $\Phi = \mu_0 nIA$ and</p>
$$L = \frac{N\Phi}{I} = \frac{N\mu_0(N/\ell)IA}{I} = \frac{\mu_0N^2A}{\ell} = \mu_0n^2A\ell.$$
<p>Note $N^2$: doubling the turns doubles the flux <em>and</em> the linkage count. Like capacitance, inductance is pure geometry (times $\mu_0$) — it doesn't depend on the current flowing.</p>` },
      { heading: "The Back-emf",
        content: String.raw`<p>Faraday's law applied to the coil's own flux gives</p>
$$\varepsilon = -L\frac{dI}{dt}.$$
<p>The minus sign is Lenz aimed inward: the induced emf opposes <em>changes in the coil's own current</em>. Steady current: an ideal inductor is invisible (just wire). Rising current: it pushes back like a battery facing you. Falling current: it pushes forward, fighting to keep the current alive. An inductor is <strong>electrical inertia</strong> — the circuit analog of mass, complete with the danger that interrupting a large current suddenly ($dI/dt \to -\infty$) spikes an enormous emf: that's the arc across a yanked plug, and the entire operating principle of a car's ignition coil.</p>` },
      { heading: "Energy in the Field",
        content: String.raw`<p>Building a current against the back-emf costs work: $P = I\varepsilon_{against} = LI\dfrac{dI}{dt}$, so</p>
$$U = \int_0^I LI'\,dI' = \tfrac{1}{2}LI^2.$$
<p>That energy lives in the magnetic field itself. For the solenoid, substitute $L = \mu_0n^2A\ell$ and $I = B/\mu_0n$:</p>
$$U = \tfrac{1}{2}\mu_0n^2A\ell\frac{B^2}{\mu_0^2n^2} = \frac{B^2}{2\mu_0}(A\ell) \;\Longrightarrow\; u_B = \frac{B^2}{2\mu_0}\ \text{(energy per volume)},$$
<p>the perfect partner to the electric field's $u_E = \tfrac{1}{2}\varepsilon_0E^2$. Fields are not bookkeeping fictions — they carry energy by the cubic meter.</p>` },
      { heading: "Interactive: Inertia in Copper",
        sim: "lr",
        simCaption: "Close the switch and watch the inductor throttle the current's rise; open it and watch the inductor refuse to let the current die instantly. The glow tracks stored energy ½LI².",
        content: String.raw`<p>Mechanical analogy to keep: $L \leftrightarrow m$, $I \leftrightarrow v$, $\tfrac{1}{2}LI^2 \leftrightarrow \tfrac{1}{2}mv^2$, back-emf $\leftrightarrow$ inertial resistance to force. It will pay off fully in the LC circuit.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>"Inductors oppose current":</strong> they oppose <em>changes</em> in current. A steady current sails through an ideal inductor with zero voltage drop.</li>
<li><strong>$N$ vs. $N^2$:</strong> solenoid inductance scales as turns squared.</li>
<li><strong>Energy linear in I:</strong> it's $\tfrac{1}{2}LI^2$ — quadratic, like every energy in this course.</li>
<li><strong>Ignoring the opened-switch spike:</strong> interrupting an inductive circuit forces a huge $|dI/dt|$ and a correspondingly violent emf. Real circuits add diodes or resistors to absorb it.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`L = \frac{N\Phi_B}{I}`, note: "Definition of self-inductance: flux linkage per ampere." },
      { latex: String.raw`L_{solenoid} = \frac{\mu_0N^2A}{\ell}`, note: "Solenoid inductance — geometry only, scales as N²." },
      { latex: String.raw`\varepsilon = -L\frac{dI}{dt}`, note: "Back-emf opposes changes in the coil's own current." },
      { latex: String.raw`U = \tfrac{1}{2}LI^2`, note: "Energy stored in an inductor's magnetic field." },
      { latex: String.raw`u_B = \frac{B^2}{2\mu_0}`, note: "Magnetic energy density; partner of u_E = ½ε₀E²." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>The current through a $0.50\,\text{H}$ inductor increases at a steady $40\,\text{A/s}$. The magnitude of the back-emf is:</p>`,
        choices: [ String.raw`$20\,\text{V}$`, String.raw`$80\,\text{V}$`, String.raw`$0.0125\,\text{V}$`, String.raw`zero — the current isn't changing direction` ],
        answer: 0,
        solution: String.raw`<p>$|\varepsilon| = L|dI/dt| = 0.50 \times 40 = 20\,\text{V}$, polarity opposing the rise.</p>` },
      { type: "mcq",
        q: String.raw`<p>A solenoid's length is doubled while keeping the same total number of turns and area. Its inductance:</p>`,
        choices: [ String.raw`halves`, String.raw`doubles`, String.raw`quadruples`, String.raw`is unchanged` ],
        answer: 0,
        solution: String.raw`<p>$L = \mu_0N^2A/\ell$ with fixed $N$: doubling $\ell$ halves $L$ (the turns spread out, weakening the internal field each ampere makes).</p>` },
      { type: "mcq",
        q: String.raw`<p>Two inductors carry equal currents, but inductor A stores 4× the energy of B. The ratio $L_A/L_B$ is:</p>`,
        choices: [ String.raw`$4$`, String.raw`$2$`, String.raw`$16$`, String.raw`$1/4$` ],
        answer: 0,
        solution: String.raw`<p>$U = \tfrac{1}{2}LI^2$ at equal $I$: energy ratio = inductance ratio = 4.</p>` },
      { type: "frq",
        q: String.raw`<p>A long solenoid has $n = 1000$ turns/m, cross-section $A = 4.0\times10^{-4}\,\text{m}^2$, and length $\ell = 0.50\,\text{m}$. ($\mu_0 = 4\pi\times10^{-7}$ T·m/A.)</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive and evaluate its self-inductance.</p>`,
            solution: String.raw`<p>$L = \mu_0n^2A\ell = (4\pi\times10^{-7})(10^6)(4.0\times10^{-4})(0.50) = 2.5\times10^{-4}\,\text{H} = 0.25\,\text{mH}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>With $I = 2.0\,\text{A}$ flowing, find the field inside, the stored energy via $\tfrac{1}{2}LI^2$, and confirm via the energy density $B^2/2\mu_0$.</p>`,
            solution: String.raw`<p>$B = \mu_0nI = (4\pi\times10^{-7})(1000)(2.0) = 2.5\times10^{-3}\,\text{T}$. $U = \tfrac{1}{2}(2.5\times10^{-4})(4.0) = 5.0\times10^{-4}\,\text{J}$. Check: $u_B = \dfrac{B^2}{2\mu_0} = \dfrac{(2.5\times10^{-3})^2}{8\pi\times10^{-7}} = 2.5\,\text{J/m}^3$; volume $= A\ell = 2.0\times10^{-4}\,\text{m}^3$; $U = 2.5\times2.0\times10^{-4} = 5.0\times10^{-4}\,\text{J}$ ✔.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>The current through an inductor $L$ varies as $I(t) = I_0\sin\omega t$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the inductor's voltage and show it leads the current by a quarter cycle.</p>`,
            solution: String.raw`<p>$V_L = L\dfrac{dI}{dt} = LI_0\omega\cos\omega t = LI_0\omega\sin(\omega t + 90^\circ)$ — a sine shifted a quarter period ahead of the current. Voltage peaks where current crosses zero with maximum slope.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the stored energy as a function of time and the average power delivered to the inductor over a full cycle.</p>`,
            solution: String.raw`<p>$U(t) = \tfrac{1}{2}LI_0^2\sin^2\omega t$, oscillating between 0 and $\tfrac{1}{2}LI_0^2$ twice per cycle. Average power: $\langle P\rangle = \langle dU/dt\rangle = 0$ — over a full cycle the inductor returns every joule it borrows. Ideal inductors (like ideal capacitors) store and release; only resistors consume.</p>` }
        ] }
    ]
  },

  /* ============================ 13.5 ============================ */
  {
    id: "13.5",
    title: "LR Circuits",
    blurb: "Resistor sets the destination, inductor sets the pace: exponential current growth and decay with τ = L/R.",
    objectives: [
      "Analyze LR circuits at t = 0 (inductor = open) and t → ∞ (inductor = wire).",
      "Solve the LR differential equation for current growth and decay.",
      "Use τ = L/R to read and sketch I(t) curves.",
      "Track energy flow among battery, resistor, and inductor."
    ],
    sections: [
      { heading: "The Two Limits — Mirror Images of RC",
        content: String.raw`<p>An inductor's rule is "current cannot jump" (a jump would need infinite emf). So:</p>
<ul>
<li><strong>$t = 0$ (just switched):</strong> the current is whatever it was the instant before. From rest, that's zero — the inductor momentarily acts like an <em>open switch</em>.</li>
<li><strong>$t \to \infty$ (steady state):</strong> current is constant, $dI/dt = 0$, zero back-emf — the ideal inductor acts like a <em>plain wire</em>. Resistors alone set the final current.</li>
</ul>
<p>Note the beautiful inversion of the capacitor's limits (wire first, open later). Capacitors hate voltage jumps; inductors hate current jumps.</p>` },
      { heading: "Growth: Solving the Differential Equation",
        content: String.raw`<p>Close the switch on $\varepsilon$, $R$, $L$ in series. Loop rule:</p>
$$\varepsilon - IR - L\frac{dI}{dt} = 0 \;\Longrightarrow\; \frac{dI}{dt} = \frac{\varepsilon - IR}{L}.$$
<p>Separate variables and integrate from $I(0) = 0$:</p>
$$I(t) = \frac{\varepsilon}{R}\left(1 - e^{-t/\tau}\right), \qquad \tau = \frac{L}{R}.$$
<p>Current climbs from 0 toward $I_{max} = \varepsilon/R$ (63% at one $\tau$). The inductor's voltage starts at the full $\varepsilon$ (it absorbs everything at first) and decays as $V_L = \varepsilon e^{-t/\tau}$. For <strong>decay</strong> — short out the battery or switch the energized inductor across $R$ — the loop rule gives $L\dot I = -IR$ and</p>
$$I(t) = I_0e^{-t/\tau}.$$
<p>Same $\tau$, same exponential machinery as RC, drag, and magnetic braking. By now you should recognize the entire family on sight.</p>` },
      { heading: "Interactive: Watch τ = L/R Do Its Thing",
        sim: "lr",
        simCaption: "Close the switch and check the 63% rule against the dashed I_max line. Then double L (slower rise, same destination) and double R (faster time constant, LOWER destination).",
        content: String.raw`<p>The two knobs do different jobs: $R$ sets where the current ends up AND shortens $\tau$; $L$ only sets how stubbornly the circuit gets there.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>τ upside down:</strong> it's $L/R$, not $R/L$ (and not $RL$). Dimension check: H/Ω = (V·s/A)/(V/A) = s ✔.</li>
<li><strong>Wrong t = 0 behavior:</strong> inductor = open at the switch-on instant (if previously unenergized) — opposite of the capacitor.</li>
<li><strong>Assuming current dies instantly when the source disconnects:</strong> the inductor forces it to decay through whatever path exists — or arcs if none does.</li>
<li><strong>Energy amnesia:</strong> in steady state the inductor holds $\tfrac{1}{2}LI_{max}^2$; during decay, exactly that much heat appears in the resistor.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`I(t) = \frac{\varepsilon}{R}\left(1 - e^{-t/\tau}\right)`, note: "Current growth after switch-on; I_max = ε/R." },
      { latex: String.raw`I(t) = I_0e^{-t/\tau}`, note: "Decay through resistance R." },
      { latex: String.raw`\tau = \frac{L}{R}`, note: "LR time constant — bigger L or smaller R means slower." },
      { latex: String.raw`V_L = \varepsilon e^{-t/\tau}`, note: "Inductor voltage during growth: starts at ε, dies to zero." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Immediately after the switch closes in a series $\varepsilon$–$R$–$L$ circuit (no initial current), the voltage across the inductor is:</p>`,
        choices: [ String.raw`$\varepsilon$`, String.raw`zero`, String.raw`$\varepsilon/2$`, String.raw`$\varepsilon R/L$` ],
        answer: 0,
        solution: String.raw`<p>$I = 0$ at that instant, so the resistor drops nothing; the loop rule puts the entire $\varepsilon$ across the inductor, which is what forces $dI/dt = \varepsilon/L$ to begin.</p>` },
      { type: "mcq",
        q: String.raw`<p>An LR circuit has $L = 0.20\,\text{H}$ and $R = 50\,\Omega$. The time for the current to reach 63% of its final value is:</p>`,
        choices: [ String.raw`$4.0\,\text{ms}$`, String.raw`$250\,\text{ms}$`, String.raw`$10\,\text{ms}$`, String.raw`$0.25\,\text{ms}$` ],
        answer: 0,
        solution: String.raw`<p>$\tau = L/R = 0.20/50 = 4.0\times10^{-3}\,\text{s}$. (250 ms is the upside-down $R/L$.)</p>` },
      { type: "mcq",
        q: String.raw`<p>In steady state, a real inductor (with some wire resistance) connected to a battery behaves like:</p>`,
        choices: [ String.raw`a small resistor`, String.raw`an open circuit`, String.raw`a capacitor`, String.raw`a perfect conductor with the full ε across it` ],
        answer: 0,
        solution: String.raw`<p>Steady current ⇒ no back-emf; all that remains is the winding's ohmic resistance. (An ideal inductor would be a perfect wire with ZERO voltage across it.)</p>` },
      { type: "frq",
        q: String.raw`<p>A $12\,\text{V}$ battery, switch, $R = 6.0\,\Omega$, and $L = 3.0\,\text{H}$ are in series. The switch closes at $t = 0$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive $I(t)$ from the loop rule by separation of variables.</p>`,
            solution: String.raw`<p>$12 - 6I - 3\dfrac{dI}{dt} = 0 \Rightarrow \displaystyle\int_0^I\frac{dI'}{12 - 6I'} = \int_0^t\frac{dt'}{3}$. Left side: $-\tfrac{1}{6}\ln\dfrac{12-6I}{12}$; so $12 - 6I = 12e^{-2t}$ and $I(t) = 2.0(1 - e^{-t/0.5})\,\text{A}$, with $\tau = L/R = 0.50\,\text{s}$ and $I_{max} = 2.0\,\text{A}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>At $t = \tau$, find the rates: power from the battery, power into the resistor, and power into the inductor's field; verify they balance.</p>`,
            solution: String.raw`<p>$I(\tau) = 2.0(1 - e^{-1}) = 1.26\,\text{A}$. Battery: $\varepsilon I = 15.2\,\text{W}$. Resistor: $I^2R = 9.6\,\text{W}$. Inductor: $V_LI = (\varepsilon e^{-1})I = (4.41)(1.26) = 5.6\,\text{W}$. Sum: $9.6 + 5.6 = 15.2$ ✔ — energy splits between heat and field-building, with the split shifting toward heat as the current saturates.</p>` },
          { label: "(c)", prompt: String.raw`<p>After a long time the battery is replaced by a wire. How much total heat is subsequently dissipated in $R$?</p>`,
            solution: String.raw`<p>All the field energy drains through the resistor: $Q = \tfrac{1}{2}LI_{max}^2 = \tfrac{1}{2}(3.0)(2.0)^2 = 6.0\,\text{J}$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>In a circuit, a battery $\varepsilon$ with series resistor $R_1$ connects to a parallel pair: $R_2$ and an ideal inductor $L$ (in parallel with each other). The switch has been closed a long time.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the steady-state current through each element.</p>`,
            solution: String.raw`<p>Steady state: inductor = wire, shorting $R_2$ (all parallel current prefers the zero-resistance path). $I_L = \varepsilon/R_1$, $I_{R_2} = 0$, battery supplies $\varepsilon/R_1$.</p>` },
          { label: "(b)", prompt: String.raw`<p>The switch now opens, disconnecting the battery and $R_1$. Find the current through $R_2$ immediately after, and the voltage across $R_2$ at that instant. Comment on the surprising magnitude if $R_2 \gg R_1$.</p>`,
            solution: String.raw`<p>The inductor's current cannot jump: $I_L = \varepsilon/R_1$ continues, now forced through $R_2$ (the only remaining loop). So $I_{R_2} = \varepsilon/R_1$ immediately, giving $V = I_LR_2 = \varepsilon\dfrac{R_2}{R_1}$ — if $R_2 \gg R_1$ this hugely exceeds the battery voltage! This inductive kick is how a 12 V car battery fires a 10,000 V spark plug: interrupt a current through an inductor and it names its own price. The current then decays as $e^{-t/(L/R_2)}$.</p>` }
        ] }
    ]
  },

  /* ============================ 13.6 ============================ */
  {
    id: "13.6",
    title: "LC Circuits",
    blurb: "Capacitor and inductor alone: charge sloshes back and forth forever — simple harmonic motion's electrical encore.",
    objectives: [
      "Derive the LC oscillation equation q̈ = −q/LC from the loop rule.",
      "Compute ω = 1/√(LC), the period, and q(t), I(t) waveforms.",
      "Track energy oscillating between the capacitor's E field and inductor's B field.",
      "Map the LC circuit onto the mass–spring analogy term by term."
    ],
    sections: [
      { heading: "The Loop Rule Becomes SHM",
        content: String.raw`<p>Charge a capacitor to $q_0$, connect it across an ideal inductor, and stand back. With $I = -dq/dt$ (discharging), the loop rule reads</p>
$$\frac{q}{C} - L\frac{dI}{dt} = 0 \;\Longrightarrow\; \frac{d^2q}{dt^2} = -\frac{1}{LC}\,q.$$
<p>That is <em>exactly</em> the simple harmonic oscillator equation $\ddot x = -\omega^2x$ from Mechanics Unit 7, with</p>
$$\omega = \frac{1}{\sqrt{LC}}, \qquad T = 2\pi\sqrt{LC}.$$
<p>Solution with the capacitor initially full and no current:</p>
$$q(t) = q_0\cos\omega t, \qquad I(t) = q_0\omega\sin\omega t.$$
<p>Charge and current run 90° out of phase: when the capacitor is full the current is zero; when the capacitor is empty the current — and the inductor's stored energy — is maximal, and the inductor's inertia recharges the capacitor with reversed polarity. Repeat forever (in the ideal case).</p>` },
      { heading: "The Dictionary, Completed",
        content: String.raw`<p>The mechanical–electrical analogy is exact, term for term:</p>
<table>
<thead><tr><th>Mass–spring</th><th>LC circuit</th></tr></thead>
<tbody>
<tr><td>position $x$</td><td>charge $q$</td></tr>
<tr><td>velocity $v = \dot x$</td><td>current $I = \dot q$</td></tr>
<tr><td>mass $m$ (inertia)</td><td>inductance $L$ (electrical inertia)</td></tr>
<tr><td>spring constant $k$</td><td>$1/C$ (stiffness of the charge "spring")</td></tr>
<tr><td>$\omega = \sqrt{k/m}$</td><td>$\omega = 1/\sqrt{LC}$</td></tr>
<tr><td>$\tfrac{1}{2}kx^2$ (spring PE)</td><td>$q^2/2C$ (capacitor energy)</td></tr>
<tr><td>$\tfrac{1}{2}mv^2$ (kinetic)</td><td>$\tfrac{1}{2}LI^2$ (inductor energy)</td></tr>
<tr><td>friction</td><td>resistance (damps the ringing)</td></tr>
</tbody>
</table>
<p>Every SHM fact transfers: energy conservation, quarter-period energy swaps, amplitude independence of frequency. Add resistance and you get damped oscillation — the electrical analog of friction bleeding the swing.</p>` },
      { heading: "Interactive: Energy Sloshing",
        sim: "lc",
        simCaption: "Watch q(t) and I(t) chase each other 90° apart while the energy bars trade U_E ↔ U_B with constant total. Change L or C and verify T = 2π√(LC).",
        content: String.raw`<p>Energy check at all times: $\dfrac{q^2}{2C} + \dfrac{LI^2}{2} = \dfrac{q_0^2}{2C}$. Maximum current follows directly: set $q=0$ and solve — $I_{max} = q_0/\sqrt{LC} = q_0\omega$.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Expecting exponential behavior:</strong> with no resistor there is no decay — LC is oscillatory, not RC/LR-like. The presence of BOTH energy-storage elements is what makes it ring.</li>
<li><strong>ω vs. f vs. T slips:</strong> $\omega = 1/\sqrt{LC}$ is rad/s; $f = \omega/2\pi$; $T = 2\pi\sqrt{LC}$.</li>
<li><strong>"Current is max when charge is max":</strong> opposite — they're a quarter cycle apart, exactly like x and v in SHM.</li>
<li><strong>Energy splitting evenly at all times:</strong> the SPLIT oscillates; only the TOTAL is constant. (They're equal twice per quarter-cycle, at $q = q_0/\sqrt2$.)</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\frac{d^2q}{dt^2} = -\frac{1}{LC}q`, note: "The LC loop rule — simple harmonic motion in charge." },
      { latex: String.raw`\omega = \frac{1}{\sqrt{LC}}, \quad T = 2\pi\sqrt{LC}`, note: "Natural frequency and period of oscillation." },
      { latex: String.raw`q(t) = q_0\cos\omega t, \quad I(t) = q_0\omega\sin\omega t`, note: "Starting from a full capacitor at rest; I lags q by 90°." },
      { latex: String.raw`\frac{q^2}{2C} + \frac{LI^2}{2} = \frac{q_0^2}{2C}`, note: "Energy conservation: E-field and B-field energies trade, total fixed." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>An LC circuit has $L = 2.0\,\text{mH}$ and $C = 5.0\,\mu\text{F}$. Its angular frequency of oscillation is:</p>`,
        choices: [ String.raw`$10^4\,\text{rad/s}$`, String.raw`$10^8\,\text{rad/s}$`, String.raw`$100\,\text{rad/s}$`, String.raw`$10^{-4}\,\text{rad/s}$` ],
        answer: 0,
        solution: String.raw`<p>$LC = (2.0\times10^{-3})(5.0\times10^{-6}) = 10^{-8}$, so $\omega = 1/\sqrt{10^{-8}} = 10^4\,\text{rad/s}$ (about 1.6 kHz).</p>` },
      { type: "mcq",
        q: String.raw`<p>In an oscillating LC circuit, at the instant the capacitor's charge is maximum, the energy stored in the inductor is:</p>`,
        choices: [ String.raw`zero`, String.raw`maximum`, String.raw`half the total`, String.raw`equal to the capacitor's energy` ],
        answer: 0,
        solution: String.raw`<p>Max charge ⇔ zero current ($I = \dot q = 0$ at the cosine's peak) ⇔ zero inductor energy. All energy sits in the E field at that instant — the turning point of the oscillation.</p>` },
      { type: "mcq",
        q: String.raw`<p>To halve the oscillation frequency of an LC circuit, you could:</p>`,
        choices: [ String.raw`quadruple the capacitance`, String.raw`double the capacitance`, String.raw`halve the inductance`, String.raw`quadruple the inductance and quadruple the capacitance` ],
        answer: 0,
        solution: String.raw`<p>$f \propto 1/\sqrt{LC}$: quadrupling $C$ (or $L$) halves $f$. Doubling only divides by $\sqrt2$; option (D) would quarter it.</p>` },
      { type: "frq",
        q: String.raw`<p>A capacitor $C = 8.0\,\mu\text{F}$ is charged to $V_0 = 50\,\text{V}$, then connected across an ideal inductor $L = 0.20\,\text{H}$ at $t = 0$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Starting from the loop rule, derive the differential equation for $q(t)$ and write its solution with these initial conditions.</p>`,
            solution: String.raw`<p>$\dfrac{q}{C} = L\dfrac{d^2q}{dt^2}\cdot(-1)$... carefully: with $I = -\dot q$, the loop rule gives $\ddot q = -\dfrac{q}{LC}$. With $q(0) = CV_0 = 4.0\times10^{-4}\,\text{C}$ and $\dot q(0) = 0$: $q(t) = (4.0\times10^{-4})\cos(\omega t)$, where $\omega = 1/\sqrt{LC} = 1/\sqrt{1.6\times10^{-6}} = 790\,\text{rad/s}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the maximum current and the first time it occurs.</p>`,
            solution: String.raw`<p>$I_{max} = q_0\omega = (4.0\times10^{-4})(790) = 0.32\,\text{A}$, first reached a quarter period in: $t = \dfrac{T}{4} = \dfrac{2\pi/\omega}{4} = \dfrac{\pi}{2(790)} \approx 2.0\,\text{ms}$. (Energy check: $\tfrac{1}{2}LI_{max}^2 = \tfrac{1}{2}(0.20)(0.32)^2 = 0.010\,\text{J} = \tfrac{1}{2}CV_0^2$ ✔.)</p>` },
          { label: "(c)", prompt: String.raw`<p>A small resistance is now present in the loop. Describe qualitatively how the charge oscillation changes and where the energy goes.</p>`,
            solution: String.raw`<p>The oscillation becomes <em>damped</em>: $q(t)$ still rings at (approximately) $\omega$, but inside an exponentially shrinking envelope, because every cycle the current loses energy $I^2R$ to heat. The electrical analog of a pendulum with air resistance — amplitude decays, frequency barely shifts (for small R), and eventually all $\tfrac{1}{2}CV_0^2$ has been dissipated.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>In an oscillating LC circuit with initial charge $q_0$ on the capacitor, find where the energy lives.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Determine the charge on the capacitor at the moment the energy is shared equally between capacitor and inductor.</p>`,
            solution: String.raw`<p>$\dfrac{q^2}{2C} = \tfrac{1}{2}\cdot\dfrac{q_0^2}{2C} \Rightarrow q = \dfrac{q_0}{\sqrt{2}} \approx 0.707q_0$ — the same $1/\sqrt2$ that appears for equal KE/PE in a mass–spring system, because it IS the same problem.</p>` },
          { label: "(b)", prompt: String.raw`<p>What fraction of the period elapses between a fully-charged capacitor and the first equal-share moment?</p>`,
            solution: String.raw`<p>$q_0\cos\omega t = q_0/\sqrt2 \Rightarrow \omega t = \pi/4 \Rightarrow t = \dfrac{\pi}{4\omega} = \dfrac{T}{8}$. One-eighth of a period — energy halves its home twice every quarter cycle, hitting equal shares at the odd eighths.</p>` }
        ] }
    ]
  }
  ]
});
