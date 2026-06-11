/* data/em-u11.js — Unit 11: Electric Circuits */
AP.registerUnit({
  id: 11,
  course: "em",
  title: "Electric Circuits",
  weight: "15–25%",
  tagline: "Charge in motion: from the microscopic drift of electrons to Kirchhoff's bookkeeping and the exponential life of RC circuits.",
  bigIdeas: [
    "Current is the rate of charge flow, I = dQ/dt, sustained microscopically by a slow drift of carriers.",
    "Resistance converts electrical energy to heat at rate P = IV; geometry and material set R = ρL/A.",
    "Kirchhoff's rules are conservation laws in disguise: the junction rule conserves charge, the loop rule conserves energy.",
    "Capacitors give circuits memory: RC circuits charge and discharge exponentially with time constant τ = RC."
  ],
  topics: [

  /* ============================ 11.1 ============================ */
  {
    id: "11.1",
    title: "Electric Current",
    blurb: "Amperes are coulombs per second — carried, surprisingly, by electrons drifting slower than honey.",
    objectives: [
      "Define current as I = dQ/dt and compute charge transferred from I(t) graphs.",
      "Relate current to the microscopic picture: I = nqAv_d.",
      "Distinguish conventional current direction from electron motion.",
      "Explain why drift speeds are tiny while signals travel near light speed."
    ],
    sections: [
      { heading: "Current Is a Rate",
        content: String.raw`<p><strong>Electric current</strong> is the rate at which charge passes a cross-section:</p>
$$I = \frac{dQ}{dt}, \qquad 1\,\text{A} = 1\,\text{C/s}.$$
<p>If $I$ varies, the charge delivered is the integral $Q = \int I\,dt$ — the area under the $I$–$t$ graph, a direct echo of impulse and work integrals from Mechanics. <strong>Conventional current</strong> points the way <em>positive</em> charge would move; in metals the actual carriers are electrons drifting the opposite way. Every rule in this unit (Kirchhoff, Ohm, power) works flawlessly with the conventional direction — you never need to track electron directions.</p>` },
      { heading: "The Microscopic Picture: Drift Velocity",
        content: String.raw`<p>Inside a wire with $n$ free carriers per unit volume, each of charge $q$, drifting at average speed $v_d$ through cross-sectional area $A$: in time $dt$ a "slab" of length $v_d\,dt$ crosses any plane, containing charge $nqAv_d\,dt$. Hence</p>
$$I = nqAv_d.$$
<p>Plug in copper numbers ($n \approx 8.5\times10^{28}\,\text{m}^{-3}$) for a 1.5 A current in a typical wire: $v_d$ is a fraction of a <em>millimeter per second</em>. The light turns on instantly anyway because the electric field that pushes electrons everywhere along the wire is established at nearly the speed of light — all the electrons start drifting essentially at once, like water in an already-full hose.</p>
<div class="callout">Same current, thinner wire ⇒ faster drift ($v_d = I/nqA$). This will explain why thin filaments get hot and, in 11.3, where resistance comes from.</div>` },
      { heading: "Interactive: Watching Charge Flow",
        sim: "circuit",
        simParams: { preset: "series" },
        simCaption: "The moving dots are conventional current. Crank the emf and watch the flow rate rise everywhere at once — and note the SAME current passes through both series resistors.",
        content: String.raw`<p>The dots' speed is proportional to current. In a series loop there is exactly one current: charge has nowhere else to go, and none accumulates anywhere. That single sentence is most of circuit analysis.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Thinking electrons race through wires:</strong> drift is ~mm/s. The <em>field</em> propagates fast, not the carriers.</li>
<li><strong>"Current gets used up":</strong> the current entering a resistor equals the current leaving it. What gets used up is energy (potential), not charge.</li>
<li><strong>Sign worry about electron flow:</strong> conventional current handles all bookkeeping. Mention electrons only if explicitly asked.</li>
<li><strong>Confusing $Q = It$ with varying current:</strong> that's the constant-$I$ special case; in general integrate.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`I = \frac{dQ}{dt}`, note: "Definition; charge through a cross-section per unit time." },
      { latex: String.raw`Q = \int I\,dt`, note: "Charge delivered = area under the I–t graph." },
      { latex: String.raw`I = nqAv_d`, note: "Microscopic model: carrier density × charge × area × drift speed." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>The current through a wire varies as $I(t) = 6t^2$ (A, $t$ in s). The charge passing a point between $t = 0$ and $t = 2\,\text{s}$ is:</p>`,
        choices: [ String.raw`$16\,\text{C}$`, String.raw`$24\,\text{C}$`, String.raw`$48\,\text{C}$`, String.raw`$12\,\text{C}$` ],
        answer: 0,
        solution: String.raw`<p>$Q = \int_0^2 6t^2\,dt = 2t^3\big|_0^2 = 16\,\text{C}$. Using $I(2)\times 2 = 48$ ignores that the current started small.</p>` },
      { type: "mcq",
        q: String.raw`<p>A wire narrows to half its diameter. For the same current, the drift speed in the narrow section is:</p>`,
        choices: [ String.raw`4 times larger`, String.raw`2 times larger`, String.raw`unchanged`, String.raw`4 times smaller` ],
        answer: 0,
        solution: String.raw`<p>$v_d = I/(nqA)$ and $A \propto d^2$: half the diameter is a quarter the area, so $v_d$ quadruples. Continuity of current — charge doesn't pile up.</p>` },
      { type: "mcq",
        q: String.raw`<p>In a metal wire carrying conventional current to the right, the electrons are moving:</p>`,
        choices: [ String.raw`left, slowly (drift speed)`, String.raw`right, slowly`, String.raw`left, near light speed`, String.raw`right, near light speed` ],
        answer: 0,
        solution: String.raw`<p>Electrons (negative) drift opposite conventional current — leftward — at sub-mm/s drift speeds. The near-light-speed thing is the field/signal, not the carriers.</p>` },
      { type: "frq",
        q: String.raw`<p>A copper wire of cross-sectional area $A = 3.0\times10^{-6}\,\text{m}^2$ carries $I = 5.0\,\text{A}$. Copper has $n = 8.5\times10^{28}$ free electrons per m³.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Calculate the drift speed of the electrons.</p>`,
            solution: String.raw`<p>$v_d = \dfrac{I}{nqA} = \dfrac{5.0}{(8.5\times10^{28})(1.6\times10^{-19})(3.0\times10^{-6})} = 1.2\times10^{-4}\,\text{m/s}$ — about 0.12 mm/s.</p>` },
          { label: "(b)", prompt: String.raw`<p>How long would one electron take to drift the 30 cm from a switch to a bulb? Reconcile with the bulb lighting "instantly."</p>`,
            solution: String.raw`<p>$t = d/v_d = 0.30/1.2\times10^{-4} \approx 2500\,\text{s}$ — over 40 minutes! The bulb lights immediately because closing the switch establishes the electric field along the whole circuit at nearly light speed; electrons <em>everywhere</em> in the filament begin drifting (and colliding, heating it) at once. Current is a collective motion, not a relay race.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>The current into an initially uncharged capacitor is $I(t) = I_0e^{-t/\tau}$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive the total charge delivered to the capacitor as $t \to \infty$.</p>`,
            solution: String.raw`<p>$Q = \displaystyle\int_0^\infty I_0e^{-t/\tau}dt = I_0\tau$. Finite area under an infinite-duration curve — same mathematics as the drag-force cart in Mechanics.</p>` },
          { label: "(b)", prompt: String.raw`<p>At what time has half of the total charge been delivered?</p>`,
            solution: String.raw`<p>$\dfrac{Q(t)}{Q_\infty} = \dfrac{I_0\tau(1 - e^{-t/\tau})}{I_0\tau} = 1 - e^{-t/\tau} = \tfrac{1}{2}$, so $t = \tau\ln 2 \approx 0.69\,\tau$ — the half-life of an exponential process, a number worth memorizing for RC and LR circuits alike.</p>` }
        ] }
    ]
  },

  /* ============================ 11.2 ============================ */
  {
    id: "11.2",
    title: "Simple Circuits",
    blurb: "emf, terminal voltage, and why a battery's advertised volts aren't quite what you get.",
    objectives: [
      "Distinguish emf (energy per charge supplied) from terminal voltage.",
      "Model real batteries as an ideal emf in series with internal resistance r.",
      "Calculate terminal voltage V = ε − Ir under load and ε + Ir when charging.",
      "Analyze maximum-current (short-circuit) and open-circuit limits."
    ],
    sections: [
      { heading: "emf: The Charge Pump",
        content: String.raw`<p>A battery is a chemical pump that lifts charge uphill in potential. Its <strong>electromotive force</strong> (emf, symbol $\varepsilon$ — a historic misnomer; it's energy, not force) is the work done per unit charge:</p>
$$\varepsilon = \frac{dW}{dq} \quad (\text{volts}).$$
<p>Real batteries also impede the very current they drive — collisions inside the electrolyte act like a small <strong>internal resistance</strong> $r$ in series with the ideal emf. The voltage actually available at the terminals while delivering current $I$ is</p>
$$V_{term} = \varepsilon - Ir.$$
<p>Open circuit ($I = 0$): the terminals read the full $\varepsilon$. Heavy load (large $I$): the terminal voltage sags — the car's headlights dim while the starter cranks. Short circuit: $I_{max} = \varepsilon/r$, with every watt dissipated inside the battery (hence the heat and the hazard).</p>
<div class="callout key">When a battery is being <em>charged</em> (current forced backward through it), the terminal voltage is $V = \varepsilon + Ir$ — you must pay the chemistry AND the internal heating.</div>` },
      { heading: "A Complete Simple Circuit",
        content: String.raw`<p>Battery ($\varepsilon$, $r$) driving an external resistor $R$:</p>
$$I = \frac{\varepsilon}{R + r}, \qquad V_{term} = IR = \varepsilon\frac{R}{R+r}.$$
<p>Energy audit per second: the chemistry supplies $\varepsilon I$; the load receives $I^2R$; the battery wastes $I^2r$ internally. Power to the load is maximized when $R = r$ (worth verifying by taking $\tfrac{dP}{dR}$ of $P = \varepsilon^2R/(R+r)^2$ — a classic FRQ), but <em>efficiency</em> keeps improving as $R$ grows.</p>` },
      { heading: "Interactive: Sag Under Load",
        sim: "circuit",
        simParams: { preset: "series" },
        simCaption: "Treat R₁ as the battery's internal resistance and R₂ as the load. Shrink the load resistance and watch the load's share of the emf — the terminal voltage — sag.",
        content: String.raw`<p>The two series resistors divide the emf in proportion to resistance: $V_2 = \varepsilon\,\dfrac{R_2}{R_1+R_2}$. Internal resistance is just the divider you can't remove.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Equating emf with terminal voltage:</strong> they agree only at zero current.</li>
<li><strong>Putting $r$ somewhere other than in series:</strong> the model is ideal emf + series $r$, inside the battery's casing.</li>
<li><strong>Forgetting internal dissipation in energy audits:</strong> $\varepsilon I = I^2R + I^2r$ — the books must balance.</li>
<li><strong>Maximum power vs. maximum efficiency:</strong> $R = r$ maximizes power transferred; efficiency there is only 50%.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`V_{term} = \varepsilon - Ir`, note: "Terminal voltage of a discharging battery under load." },
      { latex: String.raw`I = \frac{\varepsilon}{R + r}`, note: "Current in a single-loop circuit with internal resistance." },
      { latex: String.raw`P_{chem} = \varepsilon I = I^2R + I^2r`, note: "Energy audit: supplied = delivered + internally wasted." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A battery with $\varepsilon = 12.0\,\text{V}$ and $r = 0.50\,\Omega$ delivers $4.0\,\text{A}$ to a load. Its terminal voltage is:</p>`,
        choices: [ String.raw`$10.0\,\text{V}$`, String.raw`$12.0\,\text{V}$`, String.raw`$14.0\,\text{V}$`, String.raw`$8.0\,\text{V}$` ],
        answer: 0,
        solution: String.raw`<p>$V = \varepsilon - Ir = 12.0 - 4.0(0.50) = 10.0\,\text{V}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>The same battery is short-circuited by a wire of negligible resistance. The current is:</p>`,
        choices: [ String.raw`$24\,\text{A}$`, String.raw`infinite`, String.raw`$6\,\text{A}$`, String.raw`zero — no load, no current` ],
        answer: 0,
        solution: String.raw`<p>$I = \varepsilon/r = 12.0/0.50 = 24\,\text{A}$. Internal resistance is the only thing standing between a battery and infinity — all $\varepsilon I = 288\,\text{W}$ cooks the battery itself.</p>` },
      { type: "mcq",
        q: String.raw`<p>As more identical bulbs are added in parallel across a real battery, the terminal voltage:</p>`,
        choices: [ String.raw`decreases, because the total current through r increases`, String.raw`increases, because resistance decreases`, String.raw`stays exactly ε`, String.raw`drops to zero immediately` ],
        answer: 0,
        solution: String.raw`<p>Parallel bulbs lower the external resistance, raising total $I$, and $V = \varepsilon - Ir$ sags accordingly. Each added bulb slightly dims the others — the telltale signature of internal resistance.</p>` },
      { type: "frq",
        q: String.raw`<p>A student measures a battery's terminal voltage as $V_1 = 11.6\,\text{V}$ when it drives $I_1 = 0.80\,\text{A}$, and $V_2 = 10.7\,\text{V}$ when it drives $I_2 = 2.6\,\text{A}$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Determine the emf and internal resistance of the battery.</p>`,
            solution: String.raw`<p>Two equations: $\varepsilon - 0.80r = 11.6$ and $\varepsilon - 2.6r = 10.7$. Subtracting: $1.8r = 0.9 \Rightarrow r = 0.50\,\Omega$, then $\varepsilon = 11.6 + 0.80(0.50) = 12.0\,\text{V}$. (Graphically: $V$ vs. $I$ is a line with intercept $\varepsilon$ and slope $-r$.)</p>` },
          { label: "(b)", prompt: String.raw`<p>At the higher current, find the fraction of the battery's chemical power lost internally.</p>`,
            solution: String.raw`<p>$P_{int} = I^2r = (2.6)^2(0.50) = 3.38\,\text{W}$; $P_{chem} = \varepsilon I = 12.0(2.6) = 31.2\,\text{W}$. Fraction $= 3.38/31.2 \approx 11\%$. Equivalently $Ir/\varepsilon = 1.3/12$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A battery ($\varepsilon$, internal resistance $r$) is connected to a variable load resistor $R$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive the power delivered to the load as a function of $R$, and find the $R$ that maximizes it.</p>`,
            solution: String.raw`<p>$P(R) = I^2R = \dfrac{\varepsilon^2R}{(R+r)^2}$. Maximize: $\dfrac{dP}{dR} = \varepsilon^2\dfrac{(R+r)^2 - R\cdot 2(R+r)}{(R+r)^4} = \varepsilon^2\dfrac{r - R}{(R+r)^3} = 0 \Rightarrow R = r$, a maximum (sign of $dP/dR$ flips + to −). $P_{max} = \varepsilon^2/4r$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Show that the efficiency (load power ÷ chemical power) at $R = r$ is 50%, and explain why power companies nevertheless run far from this point.</p>`,
            solution: String.raw`<p>$\eta = \dfrac{I^2R}{\varepsilon I} = \dfrac{R}{R+r}$; at $R = r$, $\eta = \tfrac{1}{2}$ — half the energy heats the source. Utilities want minimal waste, not maximal instantaneous transfer, so they operate with effective $R \gg r$ ($\eta \to 1$). Matched loads matter when the goal is squeezing maximum power from a weak source (antennas, sensors), not efficiency.</p>` }
        ] }
    ]
  },

  /* ============================ 11.3 ============================ */
  {
    id: "11.3",
    title: "Resistance, Resistivity, and Ohm's Law",
    blurb: "Geometry times material: R = ρL/A, and the linear V–I law that (some) materials obey.",
    objectives: [
      "Compute resistance from geometry and resistivity: R = ρL/A.",
      "Apply Ohm's law V = IR and identify ohmic vs. non-ohmic behavior on V–I graphs.",
      "Predict how reshaping a conductor changes its resistance.",
      "Explain resistivity's microscopic origin and temperature dependence qualitatively."
    ],
    sections: [
      { heading: "Where Resistance Comes From",
        content: String.raw`<p>Drifting electrons constantly collide with the lattice, converting ordered drift into thermal jiggling. The material property quantifying this is <strong>resistivity</strong> $\rho$ (Ω·m); the resistance of a uniform conductor is</p>
$$R = \frac{\rho L}{A}.$$
<p>Longer ⇒ more collisions in series ⇒ more resistance. Fatter ⇒ more parallel paths ⇒ less. The mnemonic is plumbing: long thin straws are hard to drink through. Resistivity spans an absurd range — $10^{-8}$ Ω·m for copper to $10^{16}$ for quartz — the widest-varying material property in physics.</p>
<div class="callout warn">Stretching a wire changes BOTH factors: volume is conserved, so stretching to double length halves the area — $R = \rho L/A$ goes up by $2/\tfrac12 = 4\times$. Reshaping questions are really volume-conservation questions.</div>` },
      { heading: "Ohm's Law — a Behavior, Not a Law of Nature",
        content: String.raw`<p>For many conductors at fixed temperature, current is proportional to applied voltage:</p>
$$V = IR, \quad R\ \text{constant} \;\Rightarrow\; \text{“ohmic.”}$$
<p>An <strong>ohmic</strong> device graphs as a straight line through the origin on $V$–$I$ axes (slope $= R$). Plenty of devices are <strong>non-ohmic</strong>: a tungsten filament's resistance climbs as it heats (its $I$–$V$ curve bends over); diodes conduct in only one direction. For these, $R = V/I$ still <em>defines</em> a ratio at each operating point, but it isn't constant.</p>
<p>Temperature matters because hotter lattices vibrate more, scattering electrons more often: for metals $\rho$ rises roughly linearly with temperature.</p>` },
      { heading: "Ohmic vs. Non-Ohmic, Graphically",
        graph: { xLabel: "I (A)", yLabel: "V (V)", xMin: 0, xMax: 5, yMin: 0, yMax: 25,
                 fns: [ { expr: "4*x", label: "ohmic resistor (R = 4 Ω, straight)", color: "#22d3ee" },
                        { expr: "2*x + 0.7*x*x", label: "filament (R grows as it heats)", color: "#fbbf24" } ] },
        graphCaption: "On V–I axes the ohmic resistor is a line of slope R. The filament curves upward: each extra ampere heats it, raising the resistance it presents to the next.",
        content: String.raw`<p>Exam reading skills: slope of the chord from the origin gives $R = V/I$ at that point. For the filament, that chord steepens with current — the operating resistance of a lit bulb can be 10× its cold value.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>"Ohm's law applies to everything":</strong> $V = IR$ defines $R$; only ohmic devices keep it constant.</li>
<li><strong>Stretching = just longer:</strong> volume conservation shrinks $A$ too; $R \propto L^2$ for a stretched wire of fixed volume.</li>
<li><strong>Confusing resistivity (material) with resistance (object):</strong> $\rho$ has no geometry in it; $R$ does.</li>
<li><strong>Axes swaps:</strong> on $I$–$V$ axes the slope is $1/R$. Check the labels before reading slopes.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`R = \frac{\rho L}{A}`, note: "Resistance from material (ρ) and geometry (L, A)." },
      { latex: String.raw`V = IR`, note: "Ohm's law; R constant only for ohmic materials at fixed temperature." },
      { latex: String.raw`J = \frac{I}{A} = \sigma E`, note: "Microscopic form: current density proportional to field, σ = 1/ρ." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A wire has resistance $R$. A second wire of the same material has twice the length and twice the diameter. Its resistance is:</p>`,
        choices: [ String.raw`$R/2$`, String.raw`$R$`, String.raw`$2R$`, String.raw`$4R$` ],
        answer: 0,
        solution: String.raw`<p>$R' = \rho\dfrac{2L}{4A} = \dfrac{R}{2}$: doubling the diameter quadruples the area, which beats the doubled length.</p>` },
      { type: "mcq",
        q: String.raw`<p>A wire of resistance $6.0\,\Omega$ is stretched (volume conserved) to three times its original length. Its new resistance is:</p>`,
        choices: [ String.raw`$54\,\Omega$`, String.raw`$18\,\Omega$`, String.raw`$2.0\,\Omega$`, String.raw`$6.0\,\Omega$` ],
        answer: 0,
        solution: String.raw`<p>$L \to 3L$ forces $A \to A/3$: $R \propto L/A \to 9R = 54\,\Omega$. Stretched-wire resistance scales as $L^2$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A lightbulb filament's $V$–$I$ curve bends upward (concave up, V on the vertical axis). This indicates that as current increases, the filament's resistance:</p>`,
        choices: [ String.raw`increases, because it heats up`, String.raw`decreases, because it heats up`, String.raw`is constant — the bulb is ohmic`, String.raw`is negative` ],
        answer: 0,
        solution: String.raw`<p>Slope (and chord-slope) on $V$–$I$ axes is resistance; bending upward means each ampere requires more additional volts than the last. Hot tungsten scatters electrons more: $\rho$ rises with $T$.</p>` },
      { type: "frq",
        q: String.raw`<p>A cylindrical resistor of length $L$, radius $a$, and resistivity $\rho$ carries current $I$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive its resistance and the electric field strength inside it (assume uniform current density).</p>`,
            solution: String.raw`<p>$R = \dfrac{\rho L}{\pi a^2}$. The voltage across it is $V = IR = \dfrac{\rho L I}{\pi a^2}$, and the field is uniform: $E = \dfrac{V}{L} = \dfrac{\rho I}{\pi a^2} = \rho J$ — the microscopic Ohm's law.</p>` },
          { label: "(b)", prompt: String.raw`<p>The same volume of material is recast into a cylinder of half the radius. Find the new resistance in terms of the old $R$.</p>`,
            solution: String.raw`<p>Volume fixed: $\pi a^2 L = \pi (a/2)^2 L' \Rightarrow L' = 4L$. Then $R' = \dfrac{\rho(4L)}{\pi a^2/4} = 16\dfrac{\rho L}{\pi a^2} = 16R$. Geometry punishes thinness twice — once in $L$, once in $A$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A student collects $(I, V)$ data for a mystery component: $(0.5, 1.0)$, $(1.0, 2.0)$, $(2.0, 4.0)$, $(3.0, 7.5)$, $(4.0, 12.0)$ (amps, volts).</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Is the component ohmic? Use the data to justify your answer quantitatively.</p>`,
            solution: String.raw`<p>Compute $R = V/I$ pointwise: $2.0, 2.0, 2.0, 2.5, 3.0\ \Omega$. Constant up to 2 A, then rising — ohmic at low current, non-ohmic beyond (consistent with self-heating). A single straight line cannot fit the last two points through the origin.</p>` },
          { label: "(b)", prompt: String.raw`<p>Estimate the power dissipated at the highest data point, and the resistance there.</p>`,
            solution: String.raw`<p>$P = IV = 4.0 \times 12.0 = 48\,\text{W}$; $R = V/I = 3.0\,\Omega$ at that operating point (50% above its cold value — typical of a warming filament).</p>` }
        ] }
    ]
  },

  /* ============================ 11.4 ============================ */
  {
    id: "11.4",
    title: "Electric Power",
    blurb: "P = IV and its two disguises — where the joules go, and how fast.",
    objectives: [
      "Derive and apply P = IV = I²R = V²/R for circuit elements.",
      "Choose the correct power formula for the constraint at hand (same current vs. same voltage).",
      "Compute energy from power over time, including kilowatt-hours.",
      "Audit power in complete circuits: sources vs. sinks."
    ],
    sections: [
      { heading: "Power: The Master Formula and Its Children",
        content: String.raw`<p>Charge $dq$ falling through potential difference $V$ releases energy $dU = V\,dq$; per unit time,</p>
$$P = VI.$$
<p>This holds for <em>every</em> element: resistors, bulbs, batteries, motors. For resistors specifically, substitute Ohm's law to taste:</p>
$$P = I^2R = \frac{V^2}{R}.$$
<p>The art is picking the form whose variables are actually fixed in your situation:</p>
<ul>
<li><strong>Series elements share $I$</strong> ⇒ use $P = I^2R$: the bigger resistor dissipates more.</li>
<li><strong>Parallel elements share $V$</strong> ⇒ use $P = V^2/R$: the <em>smaller</em> resistor dissipates more.</li>
</ul>
<div class="callout key">The same two resistors swap who runs hotter depending on the wiring. This single inversion powers a dozen AP multiple-choice questions. Decide what's shared first; then pick the formula.</div>` },
      { heading: "Interactive: Brightness Is Power",
        sim: "circuit",
        simParams: { preset: "parallel" },
        simCaption: "The glow on each resistor scales with its power. In parallel, shrink R₂ and watch it outshine R₁ — small resistance hogs power when voltage is shared.",
        content: String.raw`<p>Then mentally rewire in series: now the large resistor would glow brighter ($P = I^2R$ with common $I$). If you can predict the brightness ordering both ways, you own this topic.</p>` },
      { heading: "Energy, Bills, and Ratings",
        content: String.raw`<p>Energy is power integrated over time: $E = \int P\,dt$ ($= Pt$ when steady). The utility's kilowatt-hour is just a convenient joule bundle: $1\,\text{kWh} = 3.6\times10^6\,\text{J}$.</p>
<p>Appliance ratings like "60 W, 120 V" specify the power <em>at the rated voltage</em>; from them you can extract the operating resistance $R = V^2/P = 240\,\Omega$ and current $I = P/V = 0.5\,\text{A}$. Run the same bulb at half voltage and (if $R$ stayed fixed) it would draw a quarter of the power — $P = V^2/R$ again.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Using $V^2/R$ with the battery's full voltage</strong> for one series resistor — it only gets its share of the voltage.</li>
<li><strong>"More resistance always means more heat":</strong> true at fixed current, exactly backwards at fixed voltage.</li>
<li><strong>kW vs. kWh:</strong> rate vs. amount, again. The bill charges for energy.</li>
<li><strong>Forgetting internal resistance in audits:</strong> total source power $\varepsilon I$ splits between load and the battery's own $I^2r$.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`P = IV`, note: "Universal: power delivered to (or by) any circuit element." },
      { latex: String.raw`P = I^2R`, note: "Resistor form when current is the shared/known quantity (series)." },
      { latex: String.raw`P = \frac{V^2}{R}`, note: "Resistor form when voltage is shared/known (parallel)." },
      { latex: String.raw`E = \int P\,dt`, note: "Energy delivered; 1 kWh = 3.6 MJ." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Resistors $2\,\Omega$ and $6\,\Omega$ are in <em>series</em> with a battery. Which dissipates more power?</p>`,
        choices: [ String.raw`the 6 Ω, by a factor of 3`, String.raw`the 2 Ω, by a factor of 3`, String.raw`equal power`, String.raw`the 6 Ω, by a factor of 9` ],
        answer: 0,
        solution: String.raw`<p>Series ⇒ same $I$ ⇒ $P = I^2R \propto R$: the 6 Ω dissipates 3× more.</p>` },
      { type: "mcq",
        q: String.raw`<p>The same two resistors are reconnected in <em>parallel</em> across the battery. Now which dissipates more power?</p>`,
        choices: [ String.raw`the 2 Ω, by a factor of 3`, String.raw`the 6 Ω, by a factor of 3`, String.raw`equal power`, String.raw`the 2 Ω, by a factor of 9` ],
        answer: 0,
        solution: String.raw`<p>Parallel ⇒ same $V$ ⇒ $P = V^2/R \propto 1/R$: the 2 Ω now wins by 3×. Same parts, opposite ranking — the constraint decides.</p>` },
      { type: "mcq",
        q: String.raw`<p>A "1200 W, 120 V" space heater is mistakenly run at 60 V. Assuming constant resistance, it draws:</p>`,
        choices: [ String.raw`$300\,\text{W}$`, String.raw`$600\,\text{W}$`, String.raw`$1200\,\text{W}$`, String.raw`$2400\,\text{W}$` ],
        answer: 0,
        solution: String.raw`<p>$P = V^2/R$ with $R$ fixed: half the voltage means one quarter the power, $300\,\text{W}$.</p>` },
      { type: "frq",
        q: String.raw`<p>A battery ($\varepsilon = 9.0\,\text{V}$, $r = 1.0\,\Omega$) drives a $3.5\,\Omega$ resistor.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the current, terminal voltage, and the power delivered to the resistor.</p>`,
            solution: String.raw`<p>$I = \dfrac{9.0}{3.5 + 1.0} = 2.0\,\text{A}$; $V_{term} = \varepsilon - Ir = 7.0\,\text{V}$; $P_R = I^2R = (2.0)^2(3.5) = 14\,\text{W}$ (equivalently $IV_{term}$).</p>` },
          { label: "(b)", prompt: String.raw`<p>Verify the complete energy audit and compute the circuit's efficiency.</p>`,
            solution: String.raw`<p>Source: $\varepsilon I = 18\,\text{W}$. Sinks: $P_R = 14\,\text{W}$, $P_r = I^2r = 4\,\text{W}$. $14 + 4 = 18$ ✔. Efficiency $= 14/18 \approx 78\%$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>An electric kettle rated 1500 W at 120 V heats 0.50 kg of water ($c = 4186\,\text{J/kg·K}$) from $20^\circ$C to $100^\circ$C.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the kettle's resistance and operating current.</p>`,
            solution: String.raw`<p>$R = \dfrac{V^2}{P} = \dfrac{120^2}{1500} = 9.6\,\Omega$; $I = \dfrac{P}{V} = 12.5\,\text{A}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Assuming all electrical energy heats the water, how long does it take, and how much does it cost at \$0.15/kWh?</p>`,
            solution: String.raw`<p>Heat needed: $Q = mc\Delta T = 0.50(4186)(80) = 1.67\times10^5\,\text{J}$. Time: $t = Q/P = 1.67\times10^5/1500 \approx 112\,\text{s}$ (~2 minutes). Energy in kWh: $1.67\times10^5/3.6\times10^6 = 0.047\,\text{kWh}$, costing $0.047\times\$0.15 \approx \$0.007$ — under a cent.</p>` }
        ] }
    ]
  },

  /* ============================ 11.5 ============================ */
  {
    id: "11.5",
    title: "Compound Direct Current (DC) Circuits",
    blurb: "Series adds, parallel reciprocates — and any resistor maze unravels one reduction at a time.",
    objectives: [
      "Combine resistors in series and parallel into equivalent resistances.",
      "Reduce compound networks step by step, then expand back to find every element's I and V.",
      "Predict how adding/removing elements changes total resistance and current.",
      "Analyze circuits with switches and changing configurations."
    ],
    sections: [
      { heading: "The Two Combination Rules",
        content: String.raw`<p><strong>Series</strong> (same current, voltages add):</p>
$$R_{eq} = R_1 + R_2 + \cdots$$
<p><strong>Parallel</strong> (same voltage, currents add):</p>
$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$$
<p>Parallel always yields <em>less</em> than the smallest branch — adding a path can only help the flow. Two handy specials: equal pair in parallel gives $R/2$; the two-resistor shortcut $R_{eq} = \dfrac{R_1R_2}{R_1+R_2}$ ("product over sum").</p>
<div class="callout">Resistors combine opposite to capacitors: series resistors add, series capacitors reciprocate. One mnemonic: resistance is <em>obstruction</em> (obstacles in a row add up); capacitance is <em>storage</em> (tanks side by side add up).</div>` },
      { heading: "The Reduce–Expand Algorithm",
        content: String.raw`<p>For any compound network:</p>
<ol>
<li><strong>Reduce:</strong> repeatedly collapse obvious series chains and parallel clusters until one $R_{eq}$ faces the battery. Find the total current $I = \varepsilon/R_{eq}$.</li>
<li><strong>Expand:</strong> walk backwards through your reductions. Un-merging a series chain: same $I$, split the voltage ($V_i = IR_i$). Un-merging a parallel cluster: same $V$, split the current ($I_i = V/R_i$).</li>
<li><strong>Audit:</strong> every loop's voltages must sum to the emf; every junction's currents must balance; powers must total $\varepsilon I$.</li>
</ol>
<p>Sliding intuition: adding a resistor in series anywhere increases $R_{eq}$ and dims everything; adding one in parallel anywhere decreases $R_{eq}$ and increases the battery current.</p>` },
      { heading: "Interactive: A Combo Network, Solved Live",
        sim: "circuit",
        simParams: { preset: "combo" },
        simCaption: "R₁ in series with the parallel pair R₂‖R₃. Watch the current split at the junction and recombine; the per-resistor readouts update as you drag any slider.",
        content: String.raw`<p>Check the algorithm against the sim: $R_{eq} = R_1 + \dfrac{R_2R_3}{R_2+R_3}$, total current from the emf, then $V_{pair} = \varepsilon - IR_1$ shared by both branch resistors. Predict before you peek.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Forgetting the final reciprocal:</strong> $1/R_{eq} = 0.75$ means $R_{eq} = 1.33\,\Omega$, not $0.75\,\Omega$. The classic.</li>
<li><strong>Series/parallel misdiagnosis:</strong> series = no junction between them; parallel = both ends shared. Trace nodes, not drawing positions.</li>
<li><strong>Applying the battery's full voltage to an inner element:</strong> only elements directly across the battery get $\varepsilon$.</li>
<li><strong>Stopping after reduction:</strong> the question usually wants a specific element's $I$ or $V$ — you must expand back out.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`R_{eq} = R_1 + R_2 + \cdots`, note: "Series: same current, voltages add." },
      { latex: String.raw`\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots`, note: "Parallel: same voltage, currents add; result < smallest branch." },
      { latex: String.raw`R_{eq} = \frac{R_1R_2}{R_1+R_2}`, note: "Two-resistor parallel shortcut (product over sum)." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Three $6.0\,\Omega$ resistors: two in parallel, that pair in series with the third. $R_{eq} = $</p>`,
        choices: [ String.raw`$9.0\,\Omega$`, String.raw`$18\,\Omega$`, String.raw`$4.0\,\Omega$`, String.raw`$2.0\,\Omega$` ],
        answer: 0,
        solution: String.raw`<p>Parallel pair: $6/2 = 3.0\,\Omega$; plus series 6.0: $9.0\,\Omega$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A circuit has two bulbs in series. A third bulb is added in parallel with the <em>second</em> bulb. The first bulb:</p>`,
        choices: [ String.raw`gets brighter`, String.raw`gets dimmer`, String.raw`is unchanged`, String.raw`goes out` ],
        answer: 0,
        solution: String.raw`<p>Paralleling the second bulb lowers that section's resistance, lowering $R_{eq}$, so total current — which all passes through bulb 1 — rises. Bulb 1 brightens (and bulb 2 dims, now sharing both voltage and current).</p>` },
      { type: "mcq",
        q: String.raw`<p>$N$ identical resistors $R$ connected in parallel have equivalent resistance:</p>`,
        choices: [ String.raw`$R/N$`, String.raw`$NR$`, String.raw`$R/N^2$`, String.raw`$R$` ],
        answer: 0,
        solution: String.raw`<p>$1/R_{eq} = N/R \Rightarrow R_{eq} = R/N$. $N$ identical paths carry $N\times$ the current at the same voltage.</p>` },
      { type: "frq",
        q: String.raw`<p>A $24\,\text{V}$ ideal battery drives the network: $R_1 = 4.0\,\Omega$ in series with the parallel combination of $R_2 = 6.0\,\Omega$ and $R_3 = 12\,\Omega$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the equivalent resistance and the battery current.</p>`,
            solution: String.raw`<p>$R_{23} = \dfrac{6\times12}{6+12} = 4.0\,\Omega$; $R_{eq} = 4.0 + 4.0 = 8.0\,\Omega$; $I = 24/8.0 = 3.0\,\text{A}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the current through and voltage across each resistor.</p>`,
            solution: String.raw`<p>$R_1$: carries the full $3.0\,\text{A}$, $V_1 = 12\,\text{V}$. The pair shares $V_{23} = 24 - 12 = 12\,\text{V}$: $I_2 = 12/6.0 = 2.0\,\text{A}$, $I_3 = 12/12 = 1.0\,\text{A}$. Junction check: $2.0 + 1.0 = 3.0$ ✔.</p>` },
          { label: "(c)", prompt: String.raw`<p>Verify the power audit.</p>`,
            solution: String.raw`<p>$P_1 = 3^2(4) = 36$, $P_2 = 12^2/6 = 24$, $P_3 = 12^2/12 = 12$; total $72\,\text{W} = \varepsilon I = 24(3)$ ✔.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>In the circuit above, a switch S in series with $R_3$ is now opened, removing that branch.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the new current through each remaining resistor.</p>`,
            solution: String.raw`<p>Now a simple series loop: $R_{eq} = 4.0 + 6.0 = 10\,\Omega$, $I = 2.4\,\text{A}$ through both $R_1$ and $R_2$.</p>` },
          { label: "(b)", prompt: String.raw`<p>State whether the power in $R_2$ increased or decreased when S opened, and explain physically.</p>`,
            solution: String.raw`<p>Before: $P_2 = 24\,\text{W}$; after: $P_2 = (2.4)^2(6.0) = 34.6\,\text{W}$ — increased. Opening S raised the network resistance and cut total current, but $R_2$ no longer shares its section's voltage with a parallel partner; its own voltage jumped from 12 V to $2.4\times6 = 14.4\,\text{V}$. Local beats global here.</p>` }
        ] }
    ]
  },

  /* ============================ 11.6 ============================ */
  {
    id: "11.6",
    title: "Kirchhoff's Loop Rule",
    blurb: "Walk any closed loop and the potential changes sum to zero — energy conservation with a sign convention.",
    objectives: [
      "State the loop rule and connect it to conservation of energy and path-independence of potential.",
      "Apply consistent sign conventions for batteries and resistors while traversing loops.",
      "Write loop equations for multi-loop circuits.",
      "Use the loop rule to reason about potential at labeled circuit points."
    ],
    sections: [
      { heading: "Why Loops Sum to Zero",
        content: String.raw`<p>Potential is a single-valued function of position: walk any closed path through a circuit and you must return to the potential you started at. Therefore</p>
$$\sum_{\text{closed loop}} \Delta V = 0.$$
<p>That's energy conservation per coulomb: the lifts (emfs) must equal the drops (resistors) around every loop. Sign conventions, fixed once and used forever:</p>
<ul>
<li>Crossing a battery from − to + terminal: $+\varepsilon$ (uphill); + to −: $-\varepsilon$.</li>
<li>Crossing a resistor <em>with</em> the assumed current: $-IR$ (downhill); against it: $+IR$.</li>
</ul>
<p>If a solved current comes out negative, the actual flow is opposite your guess — the magnitude is still right. Don't restart; just interpret.</p>` },
      { heading: "Worked Multi-Source Loop",
        content: String.raw`<p>One loop, two opposing batteries: $\varepsilon_1 = 12\,\text{V}$ drives clockwise, $\varepsilon_2 = 5\,\text{V}$ opposes, with $R_1 = 2\,\Omega$ and $R_2 = 5\,\Omega$ in the loop. Assume clockwise $I$ and walk clockwise:</p>
$$+12 - 2I - 5 - 5I = 0 \;\Longrightarrow\; I = 1.0\,\text{A}.$$
<p>The 5 V battery is being <em>charged</em> — current enters its + terminal, banking energy at $5I = 5\,\text{W}$ while the resistors burn $I^2(2+5) = 7\,\text{W}$ and the 12 V source supplies $12\,\text{W}$. Audit ✔. The loop rule handles any topology where series/parallel reduction fails — including circuits with sources in different branches.</p>` },
      { heading: "Interactive: Track the Potential Around the Loop",
        sim: "circuit",
        simParams: { preset: "combo" },
        simCaption: "Pick either loop in this two-loop network and sum the voltage readouts with loop-rule signs — you'll get zero every time, for any slider setting.",
        content: String.raw`<p>Practice "potential plots": graph $V$ versus position as you walk a loop — up the battery, flat along ideal wires, down each resistor. The plot must close back at its starting height. Sketching this once cures most sign confusion permanently.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Mixing traversal direction and current direction:</strong> the ±IR sign depends on whether your <em>walk</em> agrees with the <em>assumed current</em>, not on which way you guessed the current.</li>
<li><strong>Changing assumed directions mid-problem:</strong> assume once, label the diagram, stay consistent. Negative answers self-correct.</li>
<li><strong>Battery sign by "which way current flows":</strong> no — battery sign depends only on which terminal you enter, − to + is positive, period (even while charging).</li>
<li><strong>Forgetting internal resistance is a separate −Ir drop</strong> inside the source.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\sum_{loop} \Delta V = 0`, note: "Kirchhoff's loop rule: potential is single-valued — energy conservation per charge." },
      { latex: String.raw`\Delta V_{battery} = \pm\varepsilon`, note: "+ when traversed − → +, regardless of current direction." },
      { latex: String.raw`\Delta V_{resistor} = \mp IR`, note: "− when walking with the assumed current, + against it." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Walking around a loop, a student crosses a $6\,\Omega$ resistor against the assumed $2\,\text{A}$ current. The potential change is:</p>`,
        choices: [ String.raw`$+12\,\text{V}$`, String.raw`$-12\,\text{V}$`, String.raw`$+3\,\text{V}$`, String.raw`$0$` ],
        answer: 0,
        solution: String.raw`<p>Against the current means moving from the low-potential end to the high-potential end: $+IR = +12\,\text{V}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>Solving a loop equation, a student finds $I = -0.75\,\text{A}$. This means:</p>`,
        choices: [ String.raw`the current is 0.75 A opposite to the assumed direction`, String.raw`an arithmetic mistake — current can't be negative`, String.raw`the circuit cannot operate`, String.raw`the battery is dead` ],
        answer: 0,
        solution: String.raw`<p>Negative simply flips the direction of the initial guess; the magnitude stands. This is a feature of the method, not a bug in the circuit.</p>` },
      { type: "mcq",
        q: String.raw`<p>A 12 V and a 4 V battery oppose each other in a single loop with total resistance $8\,\Omega$. The current is:</p>`,
        choices: [ String.raw`$1.0\,\text{A}$`, String.raw`$2.0\,\text{A}$`, String.raw`$1.5\,\text{A}$`, String.raw`$0.5\,\text{A}$` ],
        answer: 0,
        solution: String.raw`<p>Net emf $= 12 - 4 = 8\,\text{V}$ around the loop; $I = 8/8 = 1.0\,\text{A}$, flowing the 12 V battery's way and charging the 4 V one.</p>` },
      { type: "frq",
        q: String.raw`<p>A single loop contains, in order: battery $\varepsilon_1 = 9.0\,\text{V}$ (driving clockwise), resistor $R_1 = 3.0\,\Omega$, battery $\varepsilon_2 = 3.0\,\text{V}$ oriented to oppose $\varepsilon_1$, and resistor $R_2 = 1.0\,\Omega$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Write the loop equation (assume clockwise current) and solve for $I$.</p>`,
            solution: String.raw`<p>Clockwise walk: $+9.0 - 3.0I - 3.0 - 1.0I = 0 \Rightarrow 4.0I = 6.0 \Rightarrow I = 1.5\,\text{A}$ clockwise.</p>` },
          { label: "(b)", prompt: String.raw`<p>Determine the power supplied or absorbed by each element and verify the audit.</p>`,
            solution: String.raw`<p>$\varepsilon_1$ supplies $9.0(1.5) = 13.5\,\text{W}$. $\varepsilon_2$ absorbs (charges) $3.0(1.5) = 4.5\,\text{W}$. Resistors: $1.5^2(3.0) = 6.75\,\text{W}$ and $1.5^2(1.0) = 2.25\,\text{W}$. Sinks: $4.5 + 6.75 + 2.25 = 13.5\,\text{W}$ ✔.</p>` },
          { label: "(c)", prompt: String.raw`<p>Taking the negative terminal of $\varepsilon_1$ as $V = 0$, find the potential at the point between $R_1$ and $\varepsilon_2$.</p>`,
            solution: String.raw`<p>Walk from the reference through $\varepsilon_1$ (+9.0 V) then through $R_1$ with the current ($-IR_1 = -4.5\,\text{V}$): $V = 9.0 - 4.5 = 4.5\,\text{V}$. Potential maps are just partial loop walks.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>Two batteries and three resistors form a two-loop circuit: left loop has $\varepsilon_1 = 12\,\text{V}$ and $R_1 = 4.0\,\Omega$; right loop has $\varepsilon_2 = 6.0\,\text{V}$ and $R_2 = 2.0\,\Omega$; the shared central branch contains $R_3 = 2.0\,\Omega$. (Both battery + terminals are at the top; define $I_1$ down the left branch, $I_2$ down the right branch, $I_3$ down the center, with $I_1 + I_2 = I_3$... wait — take $I_1$ and $I_2$ flowing INTO the top node and $I_3$ out through the center.)</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Write the junction equation and two loop equations.</p>`,
            solution: String.raw`<p>Junction: $I_1 + I_2 = I_3$. Left loop (battery 1 through center): $12 - 4I_1 - 2I_3 = 0$. Right loop: $6 - 2I_2 - 2I_3 = 0$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Solve the system for all three currents.</p>`,
            solution: String.raw`<p>From the loops: $I_1 = (12 - 2I_3)/4 = 3 - 0.5I_3$ and $I_2 = (6 - 2I_3)/2 = 3 - I_3$. Junction: $3 - 0.5I_3 + 3 - I_3 = I_3 \Rightarrow 6 = 2.5I_3 \Rightarrow I_3 = 2.4\,\text{A}$, $I_1 = 1.8\,\text{A}$, $I_2 = 0.6\,\text{A}$. All positive — guesses were right. Check the left loop: $12 - 7.2 - 4.8 = 0$ ✔.</p>` }
        ] }
    ]
  },

  /* ============================ 11.7 ============================ */
  {
    id: "11.7",
    title: "Kirchhoff's Junction Rule and the Conservation of Electric Charge",
    blurb: "Current in equals current out — charge has no parking spots in a steady-state circuit.",
    objectives: [
      "State the junction rule and connect it to conservation of charge.",
      "Combine junction and loop equations to solve multi-loop circuits systematically.",
      "Count independent equations correctly (n−1 junctions, plus loops).",
      "Interpret ammeter/voltmeter placement and ideal-meter assumptions."
    ],
    sections: [
      { heading: "Charge Doesn't Pile Up",
        content: String.raw`<p>At any junction (node) in steady state,</p>
$$\sum I_{in} = \sum I_{out}.$$
<p>This is <strong>conservation of charge</strong> plus the steady-state condition that charge doesn't accumulate at nodes. Together with the loop rule it forms a complete method: the two Kirchhoff rules are charge conservation and energy conservation wearing circuit clothes, and they solve <em>any</em> resistor–battery network, including every configuration where series/parallel shortcuts fail (bridges, multiple sources).</p>
<div class="callout key">Equation counting: a circuit with $n$ nodes and $b$ branches needs $b$ unknown currents; you get $n - 1$ independent junction equations (the last node repeats information) and $b - (n-1)$ independent loop equations. For the standard two-loop circuit: 3 branches, 2 nodes ⇒ 1 junction + 2 loops.</div>` },
      { heading: "The Standard Method, Start to Finish",
        content: String.raw`<ol>
<li>Label every branch current with a name and an assumed arrow.</li>
<li>Write junction equations at all but one node.</li>
<li>Write loop equations (sign conventions from 11.6) until you have as many equations as unknowns.</li>
<li>Solve the linear system; negative results flip arrows, magnitudes stand.</li>
<li>Audit: powers balance, every loop closes.</li>
</ol>
<p>Meters, while we're here: an ideal <strong>ammeter</strong> (in series, measures $I$) has zero resistance; an ideal <strong>voltmeter</strong> (in parallel, measures $V$) has infinite resistance. Real meters perturb circuits in exactly the ways those ideals avoid — an FRQ favorite.</p>` },
      { heading: "Interactive: Watch the Split Obey the Rule",
        sim: "circuit",
        simParams: { preset: "parallel" },
        simCaption: "The dot streams split at the top junction and merge at the bottom. Add the two branch current readouts — they equal the battery current at every slider setting.",
        content: String.raw`<p>Notice the inverse split: the smaller resistance takes the larger current, in exact ratio $I_1/I_2 = R_2/R_1$. For two parallel resistors the current-divider shortcut is $I_1 = I_{tot}\dfrac{R_2}{R_1+R_2}$.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Junction equations at every node:</strong> the final one is redundant; using it instead of a loop equation leaves the system unsolvable.</li>
<li><strong>Same current name across a junction:</strong> each branch gets its own current. Currents change only at junctions — and they always change there.</li>
<li><strong>Ammeter in parallel / voltmeter in series:</strong> the first shorts the element (and possibly the fuse); the second reads nothing useful.</li>
<li><strong>Arithmetic over physics:</strong> after solving, spend 20 seconds on the power audit — it catches nearly every algebra slip.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\sum I_{in} = \sum I_{out}`, note: "Junction rule: steady-state charge conservation at every node." },
      { latex: String.raw`I_1 = I_{tot}\frac{R_2}{R_1 + R_2}`, note: "Current divider for two parallel resistors — the OTHER resistance goes on top." },
      { latex: String.raw`b = (n-1) + \ell`, note: "Independent equations: n−1 junctions plus ℓ loops cover b branch currents." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>At a junction, $3.0\,\text{A}$ and $1.5\,\text{A}$ flow in, and $2.0\,\text{A}$ flows out along one wire. The current in the remaining (fourth) wire is:</p>`,
        choices: [ String.raw`$2.5\,\text{A}$ out`, String.raw`$2.5\,\text{A}$ in`, String.raw`$6.5\,\text{A}$ out`, String.raw`$0.5\,\text{A}$ out` ],
        answer: 0,
        solution: String.raw`<p>In: 4.5 A; out so far: 2.0 A; the remainder, 2.5 A, must leave. Charge doesn't accumulate.</p>` },
      { type: "mcq",
        q: String.raw`<p>A total of $6.0\,\text{A}$ reaches a junction feeding $2.0\,\Omega$ and $4.0\,\Omega$ resistors in parallel. The current in the $2.0\,\Omega$ resistor is:</p>`,
        choices: [ String.raw`$4.0\,\text{A}$`, String.raw`$2.0\,\text{A}$`, String.raw`$3.0\,\text{A}$`, String.raw`$6.0\,\text{A}$` ],
        answer: 0,
        solution: String.raw`<p>Divider: $I_2 = 6.0\cdot\dfrac{4.0}{2.0+4.0} = 4.0\,\text{A}$. Smaller resistor, bigger share — and $4.0 + 2.0 = 6.0$ ✔.</p>` },
      { type: "mcq",
        q: String.raw`<p>An ideal voltmeter is connected across one resistor of a series pair. The current drawn by the voltmeter is:</p>`,
        choices: [ String.raw`zero`, String.raw`equal to the circuit current`, String.raw`half the circuit current`, String.raw`infinite` ],
        answer: 0,
        solution: String.raw`<p>Ideal voltmeters have infinite resistance: they sample the potential difference without providing a current path. (A real voltmeter draws a little, slightly lowering the reading.)</p>` },
      { type: "frq",
        q: String.raw`<p>Currents meet at node A: $I_1$ arrives through $R_1 = 2.0\,\Omega$ from a $10\,\text{V}$ battery's + terminal; $I_2$ arrives through $R_2 = 3.0\,\Omega$ from a $5.0\,\text{V}$ battery's + terminal; $I_3$ leaves through $R_3 = 6.0\,\Omega$ to the common ground shared by both batteries' − terminals.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Set up the junction equation and two loop equations in terms of the node potential $V_A$ or the currents.</p>`,
            solution: String.raw`<p>Cleanest with the node potential: $I_1 = \dfrac{10 - V_A}{2.0}$, $I_2 = \dfrac{5.0 - V_A}{3.0}$, $I_3 = \dfrac{V_A}{6.0}$, and the junction demands $I_1 + I_2 = I_3$. (These ARE the loop equations, each written from a battery to ground.)</p>` },
          { label: "(b)", prompt: String.raw`<p>Solve for $V_A$ and the three currents.</p>`,
            solution: String.raw`<p>$\dfrac{10-V_A}{2} + \dfrac{5-V_A}{3} = \dfrac{V_A}{6}$. Multiply by 6: $3(10-V_A) + 2(5-V_A) = V_A \Rightarrow 40 - 5V_A = V_A \Rightarrow V_A = \dfrac{40}{6} = 6.67\,\text{V}$. Then $I_1 = 1.67\,\text{A}$, $I_2 = -0.56\,\text{A}$ (actually flows <em>toward</em> the 5 V battery — it's being charged), $I_3 = 1.11\,\text{A}$. Check: $1.67 - 0.56 = 1.11$ ✔.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A real ammeter (resistance $R_A = 0.10\,\Omega$) and a real voltmeter (resistance $R_V = 10\,\text{k}\Omega$) are used to measure a nominal $100\,\Omega$ resistor driven by an ideal $10\,\text{V}$ battery.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>The ammeter is placed in series and the voltmeter directly across the resistor. The voltmeter reads the true resistor voltage, but the resistor "seen" by the pair is altered by the voltmeter's draw. Compute the parallel combination of $R$ and $R_V$, the circuit current, and the value of $R$ the student would infer from meter readings $V/I$.</p>`,
            solution: String.raw`<p>$R\|R_V = \dfrac{100\times10000}{10100} = 99.0\,\Omega$. Circuit: $I = \dfrac{10}{0.10 + 99.0} = 0.1009\,\text{A}$ (read by the ammeter — this includes the voltmeter's share). Voltmeter reads $V = I\times 99.0 = 9.99\,\text{V}$. Inferred $R = V/I = 99.0\,\Omega$ — about 1% low.</p>` },
          { label: "(b)", prompt: String.raw`<p>Explain which measurement (this "voltmeter-close" arrangement or moving the voltmeter to span resistor + ammeter) would be preferable for a very LARGE unknown resistance, and why.</p>`,
            solution: String.raw`<p>For large $R$ (comparable to $R_V$), the voltmeter's parallel draw badly distorts the measurement, so you'd rather have the voltmeter span resistor + ammeter: then the ammeter reads only the true resistor current, and the small extra $I R_A$ in the voltage reading is negligible since $R \gg R_A$. Rule of thumb: voltmeter-close for small $R$, ammeter-close for large $R$ — pick the arrangement whose meter error is the small one.</p>` }
        ] }
    ]
  },

  /* ============================ 11.8 ============================ */
  {
    id: "11.8",
    title: "Resistor-Capacitor (RC) Circuits",
    blurb: "Add one capacitor and the circuit gets a memory: exponential charging, τ = RC, and a differential equation you can solve cold.",
    objectives: [
      "Analyze RC circuits at t = 0 (capacitor acts like a wire) and t → ∞ (acts like an open switch).",
      "Derive q(t) and I(t) for charging and discharging by solving the loop-rule differential equation.",
      "Interpret the time constant τ = RC on graphs and in calculations.",
      "Audit energy in RC circuits, including the famous half-lost-to-heat result."
    ],
    sections: [
      { heading: "The Two Limits You Get for Free",
        content: String.raw`<p>Before any calculus, two snapshots solve most multiple-choice questions:</p>
<ul>
<li><strong>$t = 0$ (just switched, capacitor uncharged):</strong> $V_C = q/C = 0$ — the capacitor momentarily acts like a <em>bare wire</em>. Currents are set by resistors alone.</li>
<li><strong>$t \to \infty$ (steady state):</strong> the capacitor is full, no current flows into it — it acts like an <em>open switch</em>. Solve the resistor circuit with that branch deleted; the capacitor's voltage equals the potential difference across the gap it occupies.</li>
</ul>
<p>Between the limits, everything is a smooth exponential ride with time constant $\tau = RC$ — units check: ohms × farads = (V/A)(C/V) = C/(C/s) = seconds ✔.</p>` },
      { heading: "Charging: Solve the Differential Equation",
        content: String.raw`<p>Loop rule for battery $\varepsilon$, resistor $R$, capacitor $C$ in series (charge $q$ on the capacitor, $I = dq/dt$):</p>
$$\varepsilon - IR - \frac{q}{C} = 0 \;\;\Longrightarrow\;\; \frac{dq}{dt} = \frac{\varepsilon C - q}{RC}.$$
<p>Separate and integrate from $q(0) = 0$:</p>
$$\int_0^q \frac{dq'}{\varepsilon C - q'} = \int_0^t \frac{dt'}{RC} \;\Longrightarrow\; q(t) = \varepsilon C\left(1 - e^{-t/RC}\right),$$
$$I(t) = \frac{dq}{dt} = \frac{\varepsilon}{R}e^{-t/RC}.$$
<p>Current starts at the bare-wire value $\varepsilon/R$ and dies exponentially; charge saturates at $q_{max} = \varepsilon C$. At $t = \tau$: charge is at 63%, current down to 37%. <strong>Discharging</strong> through $R$ from $q_0$: same separation gives $q(t) = q_0e^{-t/RC}$ — everything decays with the same $\tau$.</p>` },
      { heading: "Interactive: τ on Demand",
        sim: "rc",
        simCaption: "Charge, discharge, and reset while watching q(t) and I(t). Double R or C and confirm the 63% marker shifts to the new τ = RC.",
        content: String.raw`<p>Note what each knob does: $R$ throttles the flow (stretches time, same final charge); $C$ deepens the tank (stretches time AND raises $q_{max}$ when charging from a battery).</p>` },
      { heading: "The Energy Audit — and Its Famous Surprise",
        content: String.raw`<p>Charge a capacitor from zero through any resistor: the battery delivers $W_{batt} = q_{max}\varepsilon = C\varepsilon^2$. The capacitor stores $U = \tfrac{1}{2}C\varepsilon^2$. Where's the other half?</p>
$$E_{heat} = \int_0^\infty I^2R\,dt = \int_0^\infty \frac{\varepsilon^2}{R}e^{-2t/RC}dt = \frac{\varepsilon^2}{R}\cdot\frac{RC}{2} = \tfrac{1}{2}C\varepsilon^2.$$
<p><strong>Exactly half the battery's energy is dissipated, no matter the value of $R$.</strong> Small $R$ just burns it faster. This independence-of-$R$ result is a perennial FRQ closer.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Steady-state current "through" a capacitor:</strong> zero, always, in DC. Delete the branch and solve.</li>
<li><strong>Using the battery's ε as the capacitor's final voltage</strong> when other resistors share the loop — the capacitor charges to the steady-state voltage <em>across its own position</em>.</li>
<li><strong>τ with the wrong R:</strong> the relevant resistance is what the capacitor "sees" during that phase (e.g., the discharge path), not necessarily every resistor in the diagram.</li>
<li><strong>Half-energy amnesia:</strong> battery energy $C\varepsilon^2$, stored $\tfrac{1}{2}C\varepsilon^2$, heat $\tfrac{1}{2}C\varepsilon^2$ — independent of R.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`q(t) = \varepsilon C\left(1 - e^{-t/RC}\right)`, note: "Charging from empty; q_max = εC." },
      { latex: String.raw`I(t) = \frac{\varepsilon}{R}e^{-t/RC}`, note: "Charging current: starts at ε/R, decays with τ = RC." },
      { latex: String.raw`q(t) = q_0e^{-t/RC}`, note: "Discharging through R." },
      { latex: String.raw`\tau = RC`, note: "Time constant: 63% charged / 37% remaining at one τ." },
      { latex: String.raw`U_C = \frac{q^2}{2C} = \tfrac{1}{2}CV^2`, note: "Energy stored in the capacitor at any instant." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Immediately after the switch closes in a series $\varepsilon$–$R$–$C$ circuit (capacitor initially uncharged), the current is:</p>`,
        choices: [ String.raw`$\varepsilon/R$`, String.raw`zero`, String.raw`$\varepsilon/(R + C)$`, String.raw`infinite` ],
        answer: 0,
        solution: String.raw`<p>An empty capacitor has $V_C = 0$: momentarily a plain wire, so the resistor sets the current at $\varepsilon/R$. ($R + C$ isn't even dimensionally legal — a classic distractor.)</p>` },
      { type: "mcq",
        q: String.raw`<p>A capacitor discharges through a resistor. After 2 time constants, the fraction of the initial <em>stored energy</em> remaining is about:</p>`,
        choices: [ String.raw`$2\%$`, String.raw`$14\%$`, String.raw`$37\%$`, String.raw`$25\%$` ],
        answer: 0,
        solution: String.raw`<p>$q = q_0e^{-2}$, and energy $\propto q^2$: $e^{-4} \approx 0.018 \approx 2\%$. Energy decays twice as fast (in exponent) as charge — squaring the exponential doubles its rate.</p>` },
      { type: "mcq",
        q: String.raw`<p>In steady state, a capacitor sits in parallel with resistor $R_2$, and that pair is in series with $R_1$ across a battery $\varepsilon$. The capacitor's voltage is:</p>`,
        choices: [ String.raw`$\varepsilon\dfrac{R_2}{R_1+R_2}$`, String.raw`$\varepsilon$`, String.raw`$\varepsilon\dfrac{R_1}{R_1+R_2}$`, String.raw`zero` ],
        answer: 0,
        solution: String.raw`<p>Steady state: no current in the capacitor branch, so $R_1$ and $R_2$ form a simple divider, and the capacitor reads $R_2$'s share: $\varepsilon R_2/(R_1+R_2)$.</p>` },
      { type: "frq",
        q: String.raw`<p>A $12\,\text{V}$ battery, $R = 2.0\,\text{k}\Omega$, and $C = 500\,\mu\text{F}$ are in series with an open switch; the capacitor is uncharged.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Starting from the loop rule, derive $q(t)$ after the switch closes.</p>`,
            solution: String.raw`<p>$\varepsilon - R\dfrac{dq}{dt} - \dfrac{q}{C} = 0 \Rightarrow \dfrac{dq}{\varepsilon C - q} = \dfrac{dt}{RC}$. Integrating from $(0,0)$: $-\ln\!\dfrac{\varepsilon C - q}{\varepsilon C} = \dfrac{t}{RC}$, so $q(t) = \varepsilon C(1 - e^{-t/RC}) = 6.0\times10^{-3}\left(1 - e^{-t/1.0}\right)\,\text{C}$, with $\tau = RC = (2000)(5.0\times10^{-4}) = 1.0\,\text{s}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the time for the capacitor to reach 90% of full charge.</p>`,
            solution: String.raw`<p>$0.90 = 1 - e^{-t/\tau} \Rightarrow e^{-t/\tau} = 0.10 \Rightarrow t = \tau\ln 10 = 2.3\,\text{s}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>Compute the total heat dissipated in the resistor over the full charging process, without integrating.</p>`,
            solution: String.raw`<p>Battery supplies $q_{max}\varepsilon = (6.0\times10^{-3})(12) = 72\,\text{mJ}$; capacitor stores $\tfrac{1}{2}C\varepsilon^2 = 36\,\text{mJ}$; heat = difference = $36\,\text{mJ}$ — half, independent of $R$, by the general theorem.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>In the circuit, $\varepsilon = 9.0\,\text{V}$ drives $R_1 = 30\,\Omega$ in series with a parallel pair: $R_2 = 60\,\Omega$ and capacitor $C = 200\,\mu\text{F}$ (in parallel with each other). The switch closes at $t=0$ with $C$ uncharged.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the current through the battery at $t = 0$ and as $t \to \infty$.</p>`,
            solution: String.raw`<p>$t=0$: capacitor = wire, shorting $R_2$; current $= \varepsilon/R_1 = 0.30\,\text{A}$. $t\to\infty$: capacitor = open; series circuit $R_1 + R_2 = 90\,\Omega$, $I = 0.10\,\text{A}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the final charge on the capacitor.</p>`,
            solution: String.raw`<p>Final $V_C = V_{R_2} = IR_2 = 0.10(60) = 6.0\,\text{V}$, so $q = CV = (200\times10^{-6})(6.0) = 1.2\times10^{-3}\,\text{C}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>The battery is then disconnected (switch opens). Find the time constant of the capacitor's discharge and its charge 10 ms later.</p>`,
            solution: String.raw`<p>The capacitor sees only $R_2$ as its discharge path: $\tau = R_2C = 60(200\times10^{-6}) = 12\,\text{ms}$. Then $q = q_0e^{-10/12} = 1.2\times10^{-3}e^{-0.83} = 5.2\times10^{-4}\,\text{C}$. The "which R does the capacitor see?" question is the whole point of part (c).</p>` }
        ] }
    ]
  }
  ]
});
