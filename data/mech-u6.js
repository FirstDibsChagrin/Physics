/* data/mech-u6.js — Unit 6: Energy and Momentum of Rotating Systems */
AP.registerUnit({
  id: 6,
  course: "mech",
  title: "Energy and Momentum of Rotating Systems",
  weight: "10–15%",
  tagline: "Rotation gets its own energy and its own momentum — and its own conservation law that figure skaters exploit nightly.",
  bigIdeas: [
    "A rotating body stores kinetic energy ½Iω², and rolling objects carry both translational and rotational shares.",
    "Torque does work W = ∫τ dθ and delivers power P = τω — the rotational copies of the linear laws.",
    "Angular momentum L = Iω changes only under external torque: τ = dL/dt.",
    "When the net external torque is zero, angular momentum is conserved — even while the moment of inertia changes."
  ],
  topics: [

  /* ============================ 6.1 ============================ */
  {
    id: "6.1",
    title: "Rotational Kinetic Energy",
    blurb: "Spinning is moving: every rotating body banks ½Iω² of kinetic energy on top of any translation.",
    objectives: [
      "Calculate rotational kinetic energy K = ½Iω² for rigid bodies.",
      "Split the kinetic energy of a rolling object into translational and rotational parts.",
      "Use the fraction K_rot/K_total to compare shapes (hoop, disk, sphere).",
      "Include rotational energy correctly in conservation-of-energy problems."
    ],
    sections: [
      { heading: "Where ½Iω² Comes From",
        content: String.raw`<p>A rigid body spinning at angular speed $\omega$ is a swarm of particles, each with speed $v_i = r_i\omega$. Add up their kinetic energies:</p>
$$K = \sum \tfrac{1}{2}m_i v_i^2 = \tfrac{1}{2}\left(\sum m_i r_i^2\right)\omega^2 = \tfrac{1}{2}I\omega^2.$$
<p>Nothing new was invented — rotational kinetic energy is ordinary kinetic energy organized around the axis, with $I$ playing the role of mass and $\omega$ the role of speed. Same units (joules), same ledger as Unit 3: it trades freely with potential energy, heat, and translational KE.</p>
<div class="callout key">For an object that both translates and rotates (a rolling wheel), the total is $K = \tfrac{1}{2}Mv_{cm}^2 + \tfrac{1}{2}I_{cm}\omega^2$ — center-of-mass translation plus rotation about the center of mass. This split is always valid for rigid bodies.</div>` },
      { heading: "Rolling Objects: How the Energy Splits",
        content: String.raw`<p>Write the moment of inertia of a round object as $I = \beta MR^2$ ($\beta = 1$ hoop, $\tfrac12$ disk, $\tfrac25$ sphere). For rolling without slipping, $v = R\omega$, so</p>
$$K = \tfrac{1}{2}Mv^2 + \tfrac{1}{2}\beta MR^2\frac{v^2}{R^2} = \tfrac{1}{2}Mv^2(1+\beta).$$
<p>The rotational share is $\dfrac{K_{rot}}{K_{total}} = \dfrac{\beta}{1+\beta}$: half the energy of a rolling hoop is rotational; a third for a disk; two-sevenths for a sphere. Notice $M$ and $R$ both cancel from the <em>fraction</em> — only the shape matters. This single fact decides every "race down the incline" question before it starts.</p>` },
      { heading: "Interactive: The Great Rolling Race",
        sim: "rolling",
        simCaption: "Race the hoop, disk, and sphere. The sphere wins every time — least β, so the smallest fraction of the gravitational energy is tied up in spinning.",
        content: String.raw`<p>Energy conservation down a height $h$: $Mgh = \tfrac{1}{2}Mv^2(1+\beta)$ gives $v = \sqrt{\dfrac{2gh}{1+\beta}}$ at the bottom — independent of mass and radius. A marble beats a bowling-ball-sized sphere by nothing; both beat any disk; every disk beats every hoop.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Forgetting the rotational share:</strong> a rolling object arriving at the bottom of a hill is moving slower than a sliding (frictionless) one — energy went into spin.</li>
<li><strong>Using $v = R\omega$ when slipping:</strong> the rolling constraint holds only without slipping. A skidding tire breaks the link.</li>
<li><strong>Adding $K$ about the contact point AND translational $K$:</strong> $\tfrac{1}{2}I_{contact}\omega^2$ already includes the translation (parallel-axis). Use one decomposition, not both.</li>
<li><strong>Letting mass or radius "matter" in the race:</strong> they cancel. Only $\beta$ — the distribution of mass — decides.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`K_{rot} = \tfrac{1}{2}I\omega^2`, note: "Rotational kinetic energy about a fixed axis." },
      { latex: String.raw`K = \tfrac{1}{2}Mv_{cm}^2 + \tfrac{1}{2}I_{cm}\omega^2`, note: "Total KE of a rigid body: translation of CM + rotation about CM." },
      { latex: String.raw`K = \tfrac{1}{2}Mv^2(1+\beta), \quad I = \beta MR^2`, note: "Rolling without slipping (v = Rω). β: hoop 1, disk ½, sphere 2/5." },
      { latex: String.raw`v_{bottom} = \sqrt{\frac{2gh}{1+\beta}}`, note: "Rolling from rest down height h — shape only, no M or R." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A uniform disk rolls without slipping. The fraction of its total kinetic energy that is rotational is:</p>`,
        choices: [ String.raw`$1/3$`, String.raw`$1/2$`, String.raw`$2/3$`, String.raw`$1/4$` ],
        answer: 0,
        solution: String.raw`<p>$\beta = \tfrac{1}{2}$ for a disk; fraction $= \dfrac{\beta}{1+\beta} = \dfrac{1/2}{3/2} = \dfrac{1}{3}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A hoop and a uniform sphere of equal mass and radius roll from rest down the same incline. At the bottom, the ratio of the sphere's speed to the hoop's speed is:</p>`,
        choices: [ String.raw`$\sqrt{10/7}$`, String.raw`$10/7$`, String.raw`$1$ — equal masses, equal energies`, String.raw`$\sqrt{7/10}$` ],
        answer: 0,
        solution: String.raw`<p>$v = \sqrt{2gh/(1+\beta)}$: sphere $\sqrt{2gh/(7/5)}$, hoop $\sqrt{2gh/2}$. Ratio $= \sqrt{\dfrac{2}{7/5}} = \sqrt{10/7} \approx 1.20$. Equal energies, yes — but the hoop hides more of its share in rotation.</p>` },
      { type: "mcq",
        q: String.raw`<p>A flywheel's angular speed is doubled and its moment of inertia is halved. Its rotational kinetic energy:</p>`,
        choices: [ String.raw`doubles`, String.raw`is unchanged`, String.raw`quadruples`, String.raw`halves` ],
        answer: 0,
        solution: String.raw`<p>$K = \tfrac{1}{2}I\omega^2 \to \tfrac{1}{2}(I/2)(2\omega)^2 = \tfrac{1}{2}I\omega^2 \times 2$. The square on $\omega$ beats the single factor on $I$.</p>` },
      { type: "frq",
        q: String.raw`<p>A uniform solid sphere ($I = \tfrac{2}{5}MR^2$) of mass $M$ and radius $R$ rolls without slipping down an incline of height $h$, starting from rest.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using energy conservation, derive the speed of the sphere's center at the bottom.</p>`,
            solution: String.raw`<p>$Mgh = \tfrac{1}{2}Mv^2 + \tfrac{1}{2}\left(\tfrac{2}{5}MR^2\right)\dfrac{v^2}{R^2} = \tfrac{7}{10}Mv^2$. Hence $v = \sqrt{\dfrac{10gh}{7}}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Explain why friction is required for rolling yet dissipates no energy here.</p>`,
            solution: String.raw`<p>Static friction supplies the torque that spins the sphere up (without it, the sphere would slide, not roll). But the contact point is instantaneously at rest — zero relative sliding — so static friction acts through zero sliding distance and does no net work on the rolling sphere. Energy conservation survives intact.</p>` },
          { label: "(c)", prompt: String.raw`<p>The same sphere now slides down a frictionless incline of the same height. Compare arrival speeds and explain the difference in one sentence.</p>`,
            solution: String.raw`<p>Sliding: $v = \sqrt{2gh} > \sqrt{10gh/7}$. All of $Mgh$ goes to translation when nothing makes the sphere spin; rolling diverts $\tfrac{2}{7}$ of the energy into rotation.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A yo-yo of mass $M$, axle radius $r$, and moment of inertia $I$ about its center unwinds from rest down its string.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>After falling a height $h$, use energy methods to find the speed of its center. (The string unwinds without slipping: $v = r\omega$.)</p>`,
            solution: String.raw`<p>$Mgh = \tfrac{1}{2}Mv^2 + \tfrac{1}{2}I\omega^2 = \tfrac{1}{2}Mv^2\left(1 + \dfrac{I}{Mr^2}\right)$, so $v = \sqrt{\dfrac{2gh}{1 + I/Mr^2}}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>For a yo-yo approximated as a uniform disk of radius $R$ with a thin axle $r \ll R$, explain why it falls much slower than free fall.</p>`,
            solution: String.raw`<p>$I = \tfrac{1}{2}MR^2$, so $\dfrac{I}{Mr^2} = \dfrac{R^2}{2r^2} \gg 1$: nearly all the gravitational energy is forced into rotation (large $\omega$ from the small unwind radius), leaving little for translation. The denominator $1 + I/Mr^2$ throttles the fall — which is exactly what makes a yo-yo "sleep-able."</p>` }
        ] }
    ]
  },

  /* ============================ 6.2 ============================ */
  {
    id: "6.2",
    title: "Torque and Work",
    blurb: "Torque through an angle is work, torque times angular velocity is power — the rotational dictionary entry for Unit 3.",
    objectives: [
      "Compute the work done by a torque, W = ∫τ dθ, including variable torques.",
      "Apply the rotational work–energy theorem W = ΔK_rot.",
      "Calculate the power delivered by a torque, P = τω.",
      "Translate fluently between linear and rotational energy quantities."
    ],
    sections: [
      { heading: "Work Done by a Torque",
        content: String.raw`<p>Push tangentially with force $F$ at radius $r$ while the body turns through $d\theta$: the contact point moves $ds = r\,d\theta$, so $dW = F\,ds = (Fr)\,d\theta = \tau\,d\theta$. In general,</p>
$$W = \int_{\theta_i}^{\theta_f} \tau\,d\theta,$$
<p>the area under a $\tau$–$\theta$ graph, exactly parallel to $W = \int F\,dx$. For constant torque, $W = \tau\,\Delta\theta$ (with $\Delta\theta$ in radians — degrees will silently wreck the units).</p>
<p>The <strong>rotational work–energy theorem</strong> follows by the same chain-rule trick as the linear one:</p>
$$W_{net} = \int \tau\,d\theta = \int I\frac{d\omega}{dt}\,d\theta = \int I\omega\,d\omega = \tfrac{1}{2}I\omega_f^2 - \tfrac{1}{2}I\omega_i^2.$$` },
      { heading: "Work as Area Under τ(θ)",
        graph: { xLabel: "θ (rad)", yLabel: "τ (N·m)", xMin: 0, xMax: 6.3, yMin: 0, yMax: 12,
                 fns: [ { expr: "10*Math.exp(-x/3)", label: "τ(θ) = 10e^(−θ/3)", color: "#fbbf24" } ],
                 shade: { expr: "10*Math.exp(-x/3)", from: 0, to: 4 } },
        graphCaption: "A motor whose torque fades as it spins up. The shaded area ∫τ dθ from 0 to 4 rad is the work delivered — here 10·3(1−e^(−4/3)) ≈ 22 J.",
        content: String.raw`<p>Variable torque is handled exactly like variable force: integrate or take graph area. Try it: $W = \int_0^4 10e^{-\theta/3}d\theta = 30\left(1 - e^{-4/3}\right) \approx 22.1\,\text{J}$.</p>` },
      { heading: "Power: P = τω",
        content: String.raw`<p>Divide $dW = \tau\,d\theta$ by $dt$:</p>
$$P = \tau\omega,$$
<p>the rotational twin of $P = Fv$. This relation runs the entire machinery world. An engine's horsepower and torque are not independent specs — power <em>is</em> torque times angular speed, which is why dynamometer charts show the power curve peaking at high RPM even as torque falls. Gearboxes trade $\tau$ for $\omega$ at (ideally) constant $P$: low gear means large torque and small $\omega$ at the wheels.</p>
<div class="callout">Sanity-check the dictionary: $x \to \theta$, $v \to \omega$, $F \to \tau$, $m \to I$, $p \to L$. Every linear energy/momentum formula has a rotational twin under this substitution. If you forget one, translate it.</div>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Degrees in $W = \tau\Delta\theta$:</strong> the formula's derivation used $s = r\theta$, which demands radians.</li>
<li><strong>Constant-torque formula for variable torque:</strong> if $\tau$ depends on $\theta$, integrate.</li>
<li><strong>Confusing torque with work:</strong> both have units N·m, but torque is a vector turning agent, work a scalar energy transfer. Context (and the radian) distinguishes them; never report torque in joules.</li>
<li><strong>Forgetting friction torques:</strong> bearings and axles do negative rotational work $-\tau_f\Delta\theta$ that belongs in the ledger.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`W = \int \tau\,d\theta`, note: "Work by a torque: area under the τ–θ curve (θ in radians)." },
      { latex: String.raw`W_{net} = \Delta K_{rot} = \tfrac{1}{2}I\omega_f^2 - \tfrac{1}{2}I\omega_i^2`, note: "Rotational work–energy theorem." },
      { latex: String.raw`P = \tau\omega`, note: "Power delivered by a torque — the rotational P = Fv." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A constant torque of $6.0\,\text{N·m}$ acts on a wheel as it turns through 5 complete revolutions. The work done is approximately:</p>`,
        choices: [ String.raw`$190\,\text{J}$`, String.raw`$30\,\text{J}$`, String.raw`$60\,\text{J}$`, String.raw`$940\,\text{J}$` ],
        answer: 0,
        solution: String.raw`<p>$\Delta\theta = 5(2\pi) = 31.4\,\text{rad}$; $W = \tau\Delta\theta = 6.0(31.4) \approx 188\,\text{J}$. Choice (B) used revolutions instead of radians.</p>` },
      { type: "mcq",
        q: String.raw`<p>An engine delivers a constant $200\,\text{N·m}$ of torque at $3000\,\text{rpm}$ ($\approx 314\,\text{rad/s}$). Its power output is closest to:</p>`,
        choices: [ String.raw`$63\,\text{kW}$`, String.raw`$600\,\text{kW}$`, String.raw`$6.3\,\text{kW}$`, String.raw`$200\,\text{kW}$` ],
        answer: 0,
        solution: String.raw`<p>$P = \tau\omega = 200 \times 314 \approx 6.3\times10^4\,\text{W} = 63\,\text{kW}$ (about 84 hp). RPM must be converted to rad/s first.</p>` },
      { type: "mcq",
        q: String.raw`<p>A torque $\tau(\theta) = 12 - 2\theta$ (N·m) acts on a flywheel from $\theta = 0$ until the torque drops to zero. The total work done is:</p>`,
        choices: [ String.raw`$36\,\text{J}$`, String.raw`$72\,\text{J}$`, String.raw`$12\,\text{J}$`, String.raw`$24\,\text{J}$` ],
        answer: 0,
        solution: String.raw`<p>Torque hits zero at $\theta = 6$ rad. $W = \int_0^6 (12 - 2\theta)d\theta = 72 - 36 = 36\,\text{J}$ — the area of a triangle with base 6 and height 12.</p>` },
      { type: "frq",
        q: String.raw`<p>A uniform disk of mass $M = 4.0\,\text{kg}$ and radius $R = 0.50\,\text{m}$ ($I = \tfrac{1}{2}MR^2$) is initially at rest on frictionless bearings. A constant tangential force $F = 10\,\text{N}$ is applied to its rim.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the work done by the force during the first 8.0 revolutions, and the disk's angular speed at that point.</p>`,
            solution: String.raw`<p>$\tau = FR = 5.0\,\text{N·m}$; $\Delta\theta = 8(2\pi) = 50.3\,\text{rad}$; $W = 5.0(50.3) = 251\,\text{J}$. Work–energy: $\tfrac{1}{2}I\omega^2 = 251$ with $I = \tfrac{1}{2}(4.0)(0.50)^2 = 0.50\,\text{kg·m}^2$: $\omega = \sqrt{2(251)/0.50} \approx 32\,\text{rad/s}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the instantaneous power delivered by the force at that moment, and explain why it has been increasing the whole time despite the force being constant.</p>`,
            solution: String.raw`<p>$P = \tau\omega = 5.0(32) \approx 160\,\text{W}$. Power is torque times angular <em>speed</em>; constant torque on a spinning-up disk delivers ever more power because the rim point moves ever faster under the same force ($P = Fv_{rim}$).</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A grinding wheel of moment of inertia $I$ spins at $\omega_0$ when the motor is switched off. A friction brake applies a constant torque and stops it after $N$ revolutions.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive the braking torque in terms of $I$, $\omega_0$, and $N$.</p>`,
            solution: String.raw`<p>Work–energy: $-\tau(2\pi N) = 0 - \tfrac{1}{2}I\omega_0^2$, so $\tau = \dfrac{I\omega_0^2}{4\pi N}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Where did the wheel's kinetic energy go? If the wheel instead stops in half as many revolutions, how do the torque and the total heat generated change?</p>`,
            solution: String.raw`<p>All $\tfrac{1}{2}I\omega_0^2$ became thermal energy at the brake pad–wheel interface. Halving $N$ doubles the required torque (same energy over half the angle), but the total heat is unchanged — it equals the initial kinetic energy regardless of how quickly it is extracted.</p>` }
        ] }
    ]
  },

  /* ============================ 6.3 ============================ */
  {
    id: "6.3",
    title: "Angular Momentum and Angular Impulse",
    blurb: "The rotational ledger's momentum entry: L = Iω for bodies, L = mvr⊥ for particles, and τ = dL/dt tying it to torque.",
    objectives: [
      "Calculate angular momentum of rigid bodies (L = Iω) and of point particles (L = mvr⊥).",
      "Recognize that a particle moving in a straight line can have angular momentum about a point.",
      "Apply τ = dL/dt, including the angular impulse–momentum theorem ∫τ dt = ΔL.",
      "Choose a reference point/axis wisely, since L depends on it."
    ],
    sections: [
      { heading: "Two Faces of Angular Momentum",
        content: String.raw`<p>For a rigid body spinning about a fixed axis,</p>
$$L = I\omega,$$
<p>the rotational twin of $p = mv$. For a single particle with momentum $\vec p$ at position $\vec r$ from a chosen origin,</p>
$$\vec{L} = \vec{r}\times\vec{p}, \qquad |L| = mvr_\perp = mvr\sin\phi,$$
<p>where $r_\perp$ is the perpendicular ("lever-arm") distance from the origin to the particle's line of motion. The startling consequence: <strong>a particle moving in a straight line at constant velocity has constant, nonzero angular momentum about any point off its path</strong>. As it passes, $r$ changes and $\sin\phi$ changes, but the product $r\sin\phi = r_\perp$ — the closest-approach distance — stays fixed.</p>
<div class="callout warn">Angular momentum is always "about" something. State your reference point before computing, and keep it fixed for the entire problem. Changing midstream is the classic self-inflicted wound.</div>` },
      { heading: "Torque Changes Angular Momentum",
        content: String.raw`<p>Differentiate $\vec L = \vec r\times\vec p$: the $\vec v\times m\vec v$ term vanishes, leaving</p>
$$\vec{\tau}_{net} = \frac{d\vec{L}}{dt}$$
<p>— Newton's second law in rotational form, more general than $\tau = I\alpha$ (which assumes rigid bodies and constant $I$). Integrating over time gives the <strong>angular impulse–momentum theorem</strong>:</p>
$$\int \tau\,dt = \Delta L,$$
<p>the area under a $\tau$–$t$ graph. A hard, brief tangential blow to a door delivers angular impulse $\tau\,\Delta t = Fr_\perp\Delta t$, setting its spin without any need to resolve the messy force history.</p>` },
      { heading: "Interactive: Same L, Different ω",
        sim: "skater",
        simCaption: "Pull the masses inward: I drops, so ω must rise to keep L = Iω fixed. The readout shows L frozen while kinetic energy climbs — preview of 6.4.",
        content: String.raw`<p>Treat this sim as a meter for $L = I\omega$: every change you make to $I$ is instantly compensated in $\omega$. No external torque acts about the spin axis, so $dL/dt = 0$.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>"Straight-line motion has no angular momentum":</strong> false about any point off the line. $L = mvr_\perp$, constant.</li>
<li><strong>Using $r$ instead of $r_\perp$:</strong> only the perpendicular distance to the line of motion (or of force, for torque) counts.</li>
<li><strong>Treating $L$ like a scalar in 2D collisions:</strong> assign consistent signs (counterclockwise positive) and keep them.</li>
<li><strong>Applying $\tau = I\alpha$ when $I$ changes:</strong> use $\tau = dL/dt = d(I\omega)/dt$; if $I$ varies, there's an extra $\omega\,dI/dt$ term. $\tau = I\alpha$ is the constant-$I$ special case.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`L = I\omega`, note: "Rigid body about a fixed axis." },
      { latex: String.raw`\vec{L} = \vec{r}\times\vec{p}, \quad |L| = mvr_\perp`, note: "Point particle about a chosen origin; r⊥ is the lever arm of the velocity line." },
      { latex: String.raw`\vec{\tau}_{net} = \frac{d\vec{L}}{dt}`, note: "Rotational second law — the fully general form." },
      { latex: String.raw`\int \tau\,dt = \Delta L`, note: "Angular impulse–momentum theorem: area under τ(t)." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A $2.0\,\text{kg}$ puck slides in a straight line at $3.0\,\text{m/s}$. Its line of motion passes $4.0\,\text{m}$ (at closest approach) from point P. Its angular momentum about P is:</p>`,
        choices: [ String.raw`$24\,\text{kg·m}^2/\text{s}$, constant`, String.raw`$24\,\text{kg·m}^2/\text{s}$ only at closest approach`, String.raw`zero — it moves in a straight line`, String.raw`increasing as it approaches P` ],
        answer: 0,
        solution: String.raw`<p>$L = mvr_\perp = 2.0(3.0)(4.0) = 24\,\text{kg·m}^2/\text{s}$, and since $r\sin\phi = r_\perp$ is the same everywhere along the line, $L$ is constant. No torque about P (the momentum's line never moves), so $L$ couldn't change anyway.</p>` },
      { type: "mcq",
        q: String.raw`<p>A torque varying as shown — rising linearly from 0 to $8\,\text{N·m}$ over $4\,\text{s}$ — acts on a stationary wheel with $I = 2\,\text{kg·m}^2$. The final angular speed is:</p>`,
        choices: [ String.raw`$8\,\text{rad/s}$`, String.raw`$16\,\text{rad/s}$`, String.raw`$4\,\text{rad/s}$`, String.raw`$32\,\text{rad/s}$` ],
        answer: 0,
        solution: String.raw`<p>Angular impulse = area under $\tau$–$t$: $\tfrac{1}{2}(4)(8) = 16\,\text{N·m·s} = \Delta L$. Then $\omega = L/I = 16/2 = 8\,\text{rad/s}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>The Earth orbits the Sun in an ellipse. About the Sun, the gravitational force on Earth exerts:</p>`,
        choices: [ String.raw`zero torque, so Earth's orbital angular momentum is constant`, String.raw`a torque that speeds Earth up near perihelion`, String.raw`a torque that is constant in magnitude`, String.raw`zero torque only when the orbit is circular` ],
        answer: 0,
        solution: String.raw`<p>Gravity points along $-\vec r$ (radially at the Sun), so $\vec\tau = \vec r\times\vec F = 0$ always — for any central force, circular orbit or not. The speed-up near perihelion happens <em>because</em> $L = mvr_\perp$ is constant while $r$ shrinks.</p>` },
      { type: "frq",
        q: String.raw`<p>A uniform door of mass $M = 20\,\text{kg}$ and width $w = 1.0\,\text{m}$ ($I = \tfrac{1}{3}Mw^2$ about its hinges) hangs at rest. A $0.10\,\text{kg}$ ball traveling horizontally at $15\,\text{m/s}$, perpendicular to the door, strikes it at the outer edge and bounces straight back at $5.0\,\text{m/s}$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Compute the angular momentum delivered to the door about the hinge.</p>`,
            solution: String.raw`<p>About the hinge, the ball's angular momentum changes from $+mv_iw = 0.10(15)(1.0) = 1.5$ to $-mv_fw = -0.10(5.0)(1.0) = -0.5\,\text{kg·m}^2/\text{s}$. The door receives $\Delta L = 1.5 - (-0.5) = 2.0\,\text{kg·m}^2/\text{s}$ (hinge forces exert zero torque about the hinge, so total $L$ about the hinge is conserved during the strike).</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the door's angular speed just after the impact.</p>`,
            solution: String.raw`<p>$I = \tfrac{1}{3}(20)(1.0)^2 = 6.67\,\text{kg·m}^2$. $\omega = \dfrac{\Delta L}{I} = \dfrac{2.0}{6.67} = 0.30\,\text{rad/s}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>Was linear momentum of the ball–door system conserved during the strike? Explain.</p>`,
            solution: String.raw`<p>No. The hinge exerts a large external impulsive <em>force</em> on the door during impact, so linear momentum is not conserved. But that hinge force acts <em>at</em> the hinge — zero lever arm — so it exerts no torque about the hinge, which is exactly why angular momentum about the hinge was the conserved quantity to use. Choosing the reference point at the hinge made the problem solvable.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A particle of mass $m$ moves with constant velocity $\vec{v} = v\hat{i}$ along the line $y = b$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Compute its angular momentum about the origin as a function of its $x$-position, and show it is constant.</p>`,
            solution: String.raw`<p>$\vec L = \vec r\times\vec p = (x\hat i + b\hat j)\times(mv\hat i) = -bmv\,\hat k$ (using $\hat j\times\hat i = -\hat k$; the $x\hat i\times\hat i$ term vanishes). Magnitude $mvb$, independent of $x$ — constant, pointing into the page for rightward motion above the origin.</p>` },
          { label: "(b)", prompt: String.raw`<p>Verify consistency with $\tau = dL/dt$ for this motion.</p>`,
            solution: String.raw`<p>The particle is free: $\vec F = 0$, so $\vec\tau = \vec r\times\vec F = 0$ about every point. Then $d\vec L/dt = 0$ demands constant $\vec L$ — exactly what part (a) found. Straight-line constant-velocity motion is the zero-torque case of rotational dynamics.</p>` }
        ] }
    ]
  },

  /* ============================ 6.4 ============================ */
  {
    id: "6.4",
    title: "Conservation of Angular Momentum",
    blurb: "No external torque, no change in L — even while the spinning object reshapes itself completely.",
    objectives: [
      "State and apply conservation of angular momentum for systems with zero net external torque.",
      "Analyze deformable systems (skaters, divers, collapsing stars) where I changes and ω compensates.",
      "Solve rotational 'collision' problems: objects sticking to rotating bodies, people walking on turntables.",
      "Account for kinetic-energy changes when I changes at constant L."
    ],
    sections: [
      { heading: "The Conservation Law",
        content: String.raw`<p>From $\vec\tau_{net} = d\vec L/dt$: if the net <em>external</em> torque on a system is zero,</p>
$$L_i = L_f \qquad\Longrightarrow\qquad I_i\omega_i = I_f\omega_f.$$
<p>Internal forces (muscles, glue, gravity between parts) can rearrange the system but cannot change its total angular momentum. This is the third great conservation law of mechanics, alongside energy and linear momentum — and like linear momentum, it holds even in violent, energy-dissipating events, as long as external torques are negligible.</p>
<div class="callout key">The skater's trick: pulling arms in halves $I$, so $\omega$ doubles. But $K = \tfrac{1}{2}I\omega^2 = \tfrac{L^2}{2I}$ — at fixed $L$, halving $I$ <em>doubles</em> the kinetic energy. The extra energy is real work done by the skater's muscles hauling mass inward against the spin.</div>` },
      { heading: "Interactive: Be the Skater",
        sim: "skater",
        simCaption: "Slide the arms in and out. L never budges; ω and the kinetic energy do. Where does the energy come from when you pull in? Your muscles — internal forces can change energy, never L.",
        content: String.raw`<p>The same physics governs a diver tucking (fast somersaults) and untucking (slow entry), and a collapsing star: shrink a spinning star's radius enormously and conservation of $L$ spins the resulting neutron star up to hundreds of revolutions per second.</p>` },
      { heading: "Rotational Collisions",
        content: String.raw`<p>When something grabs onto or pushes off a rotating object, treat it like a collision — conserve angular momentum about the rotation axis, and expect kinetic energy to change:</p>
<p><strong>Clay on a turntable:</strong> a lump of clay $m$ dropped at radius $r$ onto a disk ($I_d$, $\omega_0$) sticks. $L$ conserved: $I_d\omega_0 = (I_d + mr^2)\omega_f$ — the table slows. KE decreases (perfectly inelastic).</p>
<p><strong>Person walks on a disk:</strong> person and turntable start at rest, $L = 0$ forever (no external torque). If the person walks counterclockwise, the disk must rotate clockwise so the total stays zero: $I_p\omega_p + I_d\omega_d = 0$.</p>
<p><strong>Bullet into a pivoted rod:</strong> conserve $L$ about the pivot, $mvd = (I_{rod} + md^2)\omega$ — never linear momentum (the pivot pushes back).</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Conserving energy in rotational collisions:</strong> sticking/grabbing dissipates KE. Conserve $L$, then compute the energy change if asked.</li>
<li><strong>Conserving linear momentum with a pivot present:</strong> pivots exert external forces. Angular momentum about the pivot is the safe quantity.</li>
<li><strong>Forgetting the person's own $I$:</strong> a person at radius $r$ on a turntable contributes $mr^2$.</li>
<li><strong>Thinking constant $L$ means constant KE:</strong> $K = L^2/2I$ changes whenever $I$ does. The work comes from (or goes into) internal forces.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`I_i\omega_i = I_f\omega_f`, note: "Conservation of angular momentum (zero net external torque)." },
      { latex: String.raw`K = \frac{L^2}{2I}`, note: "At fixed L, smaller I means MORE kinetic energy — the skater does work." },
      { latex: String.raw`mvd = (I + md^2)\,\omega_f`, note: "Template for a projectile of mass m striking and sticking at lever arm d." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A skater spinning at $2.0\,\text{rev/s}$ pulls her arms in, reducing her moment of inertia to one-third of its original value. Her new spin rate is:</p>`,
        choices: [ String.raw`$6.0\,\text{rev/s}$`, String.raw`$0.67\,\text{rev/s}$`, String.raw`$2.0\,\text{rev/s}$`, String.raw`$18\,\text{rev/s}$` ],
        answer: 0,
        solution: String.raw`<p>$I\omega$ fixed: $\omega_f = \omega_i\,(I_i/I_f) = 2.0\times3 = 6.0\,\text{rev/s}$. (Rev/s works fine here since only ratios appear.)</p>` },
      { type: "mcq",
        q: String.raw`<p>In the previous situation, the skater's rotational kinetic energy:</p>`,
        choices: [ String.raw`triples`, String.raw`is conserved`, String.raw`drops to one-third`, String.raw`increases ninefold` ],
        answer: 0,
        solution: String.raw`<p>$K = L^2/2I$ with $L$ fixed and $I \to I/3$: $K \to 3K$. Her muscles supply the difference as work. (Ninefold would be right if $\omega$ tripled at constant $I$ — but $I$ changed too.)</p>` },
      { type: "mcq",
        q: String.raw`<p>A merry-go-round spins freely. A child standing at the rim walks toward the center. As she walks inward, the merry-go-round's angular speed:</p>`,
        choices: [ String.raw`increases`, String.raw`decreases`, String.raw`stays the same — no external torque`, String.raw`drops to zero` ],
        answer: 0,
        solution: String.raw`<p>System (child + platform) has constant $L$; her walk inward reduces the total $I$ ($mr^2$ shrinks), so $\omega$ rises. "No external torque" means constant $L$, not constant $\omega$ — that's the trap in (C).</p>` },
      { type: "frq",
        q: String.raw`<p>A uniform disk (mass $M = 10\,\text{kg}$, radius $R = 2.0\,\text{m}$, $I = \tfrac{1}{2}MR^2$) rotates freely at $\omega_0 = 3.0\,\text{rad/s}$. A $50\,\text{kg}$ person stands at the center and walks slowly out to the rim.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the angular speed when the person reaches the rim.</p>`,
            solution: String.raw`<p>$I_{disk} = \tfrac{1}{2}(10)(2.0)^2 = 20\,\text{kg·m}^2$. At the center the person adds nothing. At the rim: $I_f = 20 + 50(2.0)^2 = 220\,\text{kg·m}^2$. Conservation: $20(3.0) = 220\,\omega_f \Rightarrow \omega_f = 0.27\,\text{rad/s}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Compare the system's initial and final kinetic energies and account for the difference.</p>`,
            solution: String.raw`<p>$K_i = \tfrac{1}{2}(20)(3.0)^2 = 90\,\text{J}$; $K_f = \tfrac{1}{2}(220)(0.273)^2 \approx 8.2\,\text{J}$. About $82\,\text{J}$ disappeared from rotation: walking outward, the person must be decelerated tangentially by friction with the disk surface; the "missing" energy is dissipated in that interaction (and in the person's body). Moving mass outward at constant $L$ always lowers $K = L^2/2I$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A thin uniform rod (mass $M$, length $d$, $I_{cm} = \tfrac{1}{12}Md^2$) hangs from a frictionless pivot at its top end. A ball of putty (mass $m$, speed $v$, horizontal) strikes the bottom tip and sticks.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the angular speed of the rod-putty system just after impact.</p>`,
            solution: String.raw`<p>About the pivot: rod's $I = \tfrac{1}{12}Md^2 + M(d/2)^2 = \tfrac{1}{3}Md^2$ (parallel-axis); putty at the tip adds $md^2$. Conservation of $L$ about the pivot: $mvd = \left(\tfrac{1}{3}Md^2 + md^2\right)\omega$, so $\omega = \dfrac{mv}{\left(\tfrac{M}{3} + m\right)d}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the maximum angle the system swings through, in terms of $\omega$, the masses, and $d$. (Set up the energy equation; you need the rise of each center of mass.)</p>`,
            solution: String.raw`<p>After the (inelastic) impact, energy IS conserved during the swing. With $I_{tot} = (\tfrac{M}{3}+m)d^2$: $\tfrac{1}{2}I_{tot}\omega^2 = Mg\dfrac{d}{2}(1-\cos\theta) + mgd(1-\cos\theta)$. Solving: $1 - \cos\theta = \dfrac{\tfrac{1}{2}(\tfrac{M}{3}+m)d\,\omega^2}{g(\tfrac{M}{2}+m)}$, so $\theta = \cos^{-1}\!\left[1 - \dfrac{(\tfrac{M}{3}+m)d\,\omega^2}{2g(\tfrac{M}{2}+m)}\right]$. Two-stage logic: conserve $L$ through the collision, then energy through the swing — never both at once.</p>` }
        ] }
    ]
  },

  /* ============================ 6.5 ============================ */
  {
    id: "6.5",
    title: "Rolling",
    blurb: "Translation and rotation locked together by v = Rω — with static friction quietly running the show.",
    objectives: [
      "Apply the rolling-without-slipping constraint v = Rω, a = Rα.",
      "Analyze rolling on inclines with Newton's laws and with energy methods.",
      "Determine the role, direction, and magnitude of friction for rolling objects.",
      "Identify when rolling without slipping fails (slipping condition)."
    ],
    sections: [
      { heading: "The Rolling Constraint",
        content: String.raw`<p><strong>Rolling without slipping</strong> means the contact point is momentarily at rest relative to the ground. That single statement forces the kinematic locks</p>
$$v_{cm} = R\omega, \qquad a_{cm} = R\alpha.$$
<p>A useful picture: the wheel's contact point has velocity zero, its center moves at $v$, and its top moves at $2v$ — the body is instantaneously rotating about the contact point. Because the contact point doesn't slide, the friction acting there is <em>static</em>, and it does no work — rolling conserves mechanical energy even though friction is essential to it.</p>` },
      { heading: "Rolling Down an Incline: The Full Newtonian Treatment",
        content: String.raw`<p>For a round object ($I = \beta MR^2$) rolling down an incline of angle $\theta$, with static friction $f$ up the slope:</p>
$$\text{translation: } Mg\sin\theta - f = Ma \qquad\quad \text{rotation (about CM): } fR = I\alpha = \beta MR^2\frac{a}{R}$$
<p>The rotation equation gives $f = \beta Ma$; substituting:</p>
$$a = \frac{g\sin\theta}{1+\beta}, \qquad f = \frac{\beta}{1+\beta}Mg\sin\theta.$$
<p>Checks: $\beta \to 0$ (all mass at axis, nothing to spin up) recovers frictionless sliding $a = g\sin\theta$; a hoop ($\beta = 1$) accelerates at exactly half that. Friction here points <em>up</em> the slope — it is what creates the angular acceleration — and the result matches the energy method of 6.1, as it must.</p>
<div class="callout warn">Rolling requires $f \le \mu_s N$: $\frac{\beta}{1+\beta}Mg\sin\theta \le \mu_s Mg\cos\theta$, i.e. $\tan\theta \le \mu_s\frac{1+\beta}{\beta}$. Steeper than that, the object slips and you must switch to kinetic friction with $v \ne R\omega$.</div>` },
      { heading: "Interactive: Shape Decides the Race",
        sim: "rolling",
        simCaption: "Adjust the incline angle and race the three shapes. The acceleration formula a = g sinθ/(1+β) is printed live — verify the sphere's 5/7 g sinθ against the hoop's g sinθ/2.",
        content: String.raw`<p>Friction's direction surprises students: for an object rolling freely downhill it points uphill (to spin it up); for a wheel <em>driven</em> by a torque (car drive wheel), friction points forward — it is the external force that propels the car.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Assuming friction does negative work on a rolling body:</strong> static friction at a non-sliding contact does zero work. Mechanical energy is conserved in pure rolling.</li>
<li><strong>Dropping the friction force from the FBD:</strong> no friction, no torque about the CM, no rolling — the object would slide. (Exception: rolling at constant velocity on level ground needs no friction at all.)</li>
<li><strong>Using $v = R\omega$ after slipping starts:</strong> the constraint dies with traction. Check $f_{needed} \le \mu_s N$ first.</li>
<li><strong>Torque about inconsistent axes:</strong> pick CM or contact point and stick with it; mixing the two double-counts.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`v_{cm} = R\omega, \quad a_{cm} = R\alpha`, note: "Rolling-without-slipping constraints (contact point at rest)." },
      { latex: String.raw`a = \frac{g\sin\theta}{1+\beta}`, note: "Acceleration rolling down an incline; β = I/MR²." },
      { latex: String.raw`f = \frac{\beta}{1+\beta}Mg\sin\theta`, note: "Static friction required for rolling; must not exceed μsMg cosθ." },
      { latex: String.raw`\tan\theta_{max} = \mu_s\frac{1+\beta}{\beta}`, note: "Steepest incline for rolling without slipping." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A wheel rolls without slipping to the right at speed $v$. The velocity of the point at the very top of the wheel is:</p>`,
        choices: [ String.raw`$2v$ to the right`, String.raw`$v$ to the right`, String.raw`zero`, String.raw`$v$ to the left` ],
        answer: 0,
        solution: String.raw`<p>Top point velocity = $v_{cm} + R\omega = v + v = 2v$ forward. (The bottom point is the one at rest — that's the rolling condition itself.)</p>` },
      { type: "mcq",
        q: String.raw`<p>A uniform cylinder rolls without slipping down an incline. Compared with the same cylinder sliding down a frictionless version of the incline, the rolling cylinder reaches the bottom:</p>`,
        choices: [ String.raw`slower and later`, String.raw`at the same speed but later`, String.raw`slower but at the same time`, String.raw`at the same speed and time` ],
        answer: 0,
        solution: String.raw`<p>Rolling: $a = \tfrac{2}{3}g\sin\theta$ and $v_{bot} = \sqrt{4gh/3}$; sliding: $a = g\sin\theta$, $v_{bot} = \sqrt{2gh}$. Smaller acceleration ⇒ later; energy split with rotation ⇒ slower.</p>` },
      { type: "mcq",
        q: String.raw`<p>A ball rolls without slipping at constant velocity across a horizontal floor. The friction force on it is:</p>`,
        choices: [ String.raw`zero`, String.raw`$\mu_s mg$ backward`, String.raw`$\mu_k mg$ backward`, String.raw`$\mu_s mg$ forward` ],
        answer: 0,
        solution: String.raw`<p>Constant $v$ and constant $\omega$ need zero net force and zero net torque — friction must be zero. Static friction takes whatever value the dynamics requires, here nothing.</p>` },
      { type: "frq",
        q: String.raw`<p>A uniform solid cylinder ($M$, $R$, $I = \tfrac{1}{2}MR^2$) rolls without slipping down an incline of angle $\theta$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using Newton's second law in both translational and rotational form, derive the acceleration of the center of mass.</p>`,
            solution: String.raw`<p>Translation along slope: $Mg\sin\theta - f = Ma$. Rotation about CM: $fR = \tfrac{1}{2}MR^2\alpha$ with $\alpha = a/R$ gives $f = \tfrac{1}{2}Ma$. Substitute: $Mg\sin\theta - \tfrac{1}{2}Ma = Ma$, so $a = \dfrac{2}{3}g\sin\theta$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Determine the friction force and the minimum coefficient of static friction for rolling.</p>`,
            solution: String.raw`<p>$f = \tfrac{1}{2}Ma = \tfrac{1}{3}Mg\sin\theta$. Require $f \le \mu_s N = \mu_s Mg\cos\theta$: $\mu_s \ge \tfrac{1}{3}\tan\theta$.</p>` },
          { label: "(c)", prompt: String.raw`<p>If the incline is made frictionless, describe the motion and find the new acceleration.</p>`,
            solution: String.raw`<p>With no friction there is no torque about the CM: the cylinder slides without rotating (or keeps whatever spin it had), with $a = g\sin\theta$. It arrives faster but spinning uselessly slowly — all gravitational energy goes to translation.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A bowling ball ($I = \tfrac{2}{5}MR^2$) is thrown down the lane with initial speed $v_0$ and <em>no spin</em>. Kinetic friction (coefficient $\mu_k$) acts until rolling without slipping begins.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Explain why friction initially points backward, and write expressions for $v(t)$ and $\omega(t)$ during the sliding phase.</p>`,
            solution: String.raw`<p>The ball slides forward across the floor (contact point moves forward relative to the lane), so kinetic friction acts backward on the ball. It decelerates the translation and torques up the spin: $v(t) = v_0 - \mu_k g\,t$; $\;\tau = \mu_k MgR = \tfrac{2}{5}MR^2\alpha \Rightarrow \alpha = \dfrac{5\mu_k g}{2R}$, so $\omega(t) = \dfrac{5\mu_k g}{2R}t$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the time at which rolling without slipping begins, and the ball's speed at that moment.</p>`,
            solution: String.raw`<p>Rolling starts when $v = R\omega$: $v_0 - \mu_k g t = \tfrac{5}{2}\mu_k g t \Rightarrow t = \dfrac{2v_0}{7\mu_k g}$. Speed then: $v = v_0 - \mu_k g\,t = v_0\left(1 - \tfrac{2}{7}\right) = \dfrac{5v_0}{7}$ — a universal result, independent of $\mu_k$ (friction strength sets <em>when</em>, not <em>what</em>). Mechanical energy was lost to sliding friction during the skid; after $t$, friction drops to zero and the ball rolls at constant $5v_0/7$.</p>` }
        ] }
    ]
  },

  /* ============================ 6.6 ============================ */
  {
    id: "6.6",
    title: "Motion of Orbiting Satellites",
    blurb: "Kepler's laws, orbital energetics, and escape — gravity's greatest hits, solved with energy and angular momentum.",
    objectives: [
      "Derive circular-orbit speed, period, and energy from Newton's law of gravitation.",
      "Apply conservation of energy and angular momentum to elliptical orbits.",
      "State and use Kepler's three laws, including T² ∝ a³.",
      "Calculate escape speed and classify orbits by the sign of total energy."
    ],
    sections: [
      { heading: "Circular Orbits: One Equation, Everything Follows",
        content: String.raw`<p>Gravity is the centripetal force: $\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}$. Everything about circular orbits unspools from this line:</p>
$$v = \sqrt{\frac{GM}{r}}, \qquad T^2 = \frac{4\pi^2}{GM}r^3 \;(\text{Kepler III}), \qquad K = \frac{GMm}{2r}.$$
<p>Combining with $U = -GMm/r$ gives the famous energy bookkeeping of a circular orbit:</p>
$$E = K + U = -\frac{GMm}{2r}, \qquad K = -E = -\tfrac{1}{2}U.$$
<p>Total energy is <em>negative</em> (bound), and equal to half the potential energy. Strange corollary: drag on a satellite <em>lowers</em> its orbit, which <em>increases</em> its speed — losing energy makes it move faster, because $K = +GMm/2r$ grows as $r$ shrinks.</p>` },
      { heading: "Elliptical Orbits and Kepler's Laws",
        content: String.raw`<p><strong>Kepler I:</strong> orbits are ellipses with the central body at one focus. <strong>Kepler II:</strong> the orbit sweeps equal areas in equal times — which is nothing but conservation of angular momentum ($dA/dt = L/2m$, constant since gravity exerts no torque about the focus). <strong>Kepler III:</strong> $T^2 = \dfrac{4\pi^2}{GM}a^3$ with $a$ the semi-major axis.</p>
<p>For an ellipse, the conserved pair $(E, L)$ does all the work. With perigee ($r_p$, $v_p$) and apogee ($r_a$, $v_a$):</p>
$$m v_p r_p = m v_a r_a \quad(\text{angular momentum}), \qquad \tfrac{1}{2}v_p^2 - \frac{GM}{r_p} = \tfrac{1}{2}v_a^2 - \frac{GM}{r_a} \quad(\text{energy}),$$
<p>and the total energy generalizes neatly: $E = -\dfrac{GMm}{2a}$ — same form as the circle, with $a$ replacing $r$.</p>` },
      { heading: "Interactive: Sculpt an Orbit",
        sim: "orbit",
        simCaption: "Launch below circular speed for an inside ellipse, above it for an outside ellipse, at √2 × v_c to escape. Watch perigee speed exceed apogee speed — Kepler II live.",
        content: String.raw`<p>The energy readout classifies the orbit instantly: $E < 0$ bound (circle or ellipse), $E = 0$ parabolic escape with nothing to spare, $E > 0$ hyperbolic flyby. Escape speed is where $E$ first reaches zero: $v_{esc} = \sqrt{2GM/r} = \sqrt{2}\,v_{circ}$.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>"Faster orbit = higher orbit":</strong> backwards. Lower circular orbits are faster ($v \propto 1/\sqrt{r}$); GPS satellites crawl compared to the ISS.</li>
<li><strong>Treating speed as constant on an ellipse:</strong> only $E$ and $L$ are constant; speed peaks at perigee.</li>
<li><strong>Using $r$ instead of $a$ in Kepler III for ellipses:</strong> the law uses the semi-major axis.</li>
<li><strong>Energy sign errors:</strong> bound ⇒ $E < 0$. If your "orbit" has positive total energy, it's a flyby.</li>
<li><strong>Forgetting that orbital maneuvers conserve neither $K$ nor $U$ alone:</strong> engines change $E$; gravity then redistributes it.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`v_{circ} = \sqrt{\frac{GM}{r}}`, note: "Circular orbit speed, from gravity = centripetal force." },
      { latex: String.raw`T^2 = \frac{4\pi^2}{GM}a^3`, note: "Kepler's third law (a = radius for circles, semi-major axis for ellipses)." },
      { latex: String.raw`E = -\frac{GMm}{2a}`, note: "Total orbital energy; negative for all bound orbits." },
      { latex: String.raw`v_{esc} = \sqrt{\frac{2GM}{r}} = \sqrt{2}\,v_{circ}`, note: "Escape speed: total energy exactly zero." },
      { latex: String.raw`v_p r_p = v_a r_a`, note: "Angular momentum conservation between perigee and apogee (velocity ⊥ radius at both)." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Satellite A orbits at radius $r$; satellite B at radius $4r$ around the same planet. The ratio of their orbital speeds $v_A/v_B$ is:</p>`,
        choices: [ String.raw`$2$`, String.raw`$4$`, String.raw`$1/2$`, String.raw`$8$` ],
        answer: 0,
        solution: String.raw`<p>$v \propto 1/\sqrt{r}$: $v_A/v_B = \sqrt{4r/r} = 2$. Lower is faster.</p>` },
      { type: "mcq",
        q: String.raw`<p>A planet's year is 8 times Earth's. Its orbital radius (in AU, assuming a circular orbit around the same star) is:</p>`,
        choices: [ String.raw`$4$`, String.raw`$2$`, String.raw`$8$`, String.raw`$64$` ],
        answer: 0,
        solution: String.raw`<p>Kepler III: $T^2 \propto r^3 \Rightarrow r = T^{2/3} = 8^{2/3} = 4\,\text{AU}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A satellite in an elliptical orbit moves from apogee to perigee. During this half-orbit:</p>`,
        choices: [ String.raw`its kinetic energy increases and its potential energy decreases`, String.raw`both kinetic and potential energy increase`, String.raw`its total energy increases`, String.raw`its angular momentum increases` ],
        answer: 0,
        solution: String.raw`<p>Falling inward: $U = -GMm/r$ becomes more negative (decreases) and $K$ grows to compensate, with $E$ and $L$ both strictly constant. (C) and (D) violate the two conservation laws that define the orbit.</p>` },
      { type: "frq",
        q: String.raw`<p>A satellite of mass $m$ is in a circular orbit of radius $r$ about Earth (mass $M$).</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive the orbital speed and period, starting from Newton's second law.</p>`,
            solution: String.raw`<p>$\dfrac{GMm}{r^2} = \dfrac{mv^2}{r} \Rightarrow v = \sqrt{GM/r}$. Period: $T = \dfrac{2\pi r}{v} = 2\pi\sqrt{\dfrac{r^3}{GM}}$ — squaring gives Kepler III.</p>` },
          { label: "(b)", prompt: String.raw`<p>Show that the total mechanical energy is $E = -\dfrac{GMm}{2r}$.</p>`,
            solution: String.raw`<p>$K = \tfrac{1}{2}mv^2 = \dfrac{GMm}{2r}$; $U = -\dfrac{GMm}{r}$. Sum: $E = \dfrac{GMm}{2r} - \dfrac{GMm}{r} = -\dfrac{GMm}{2r}$. Negative, as required for a bound orbit; $|E| = K$.</p>` },
          { label: "(c)", prompt: String.raw`<p>How much additional energy must be supplied to move the satellite to a circular orbit of radius $2r$? To escape entirely?</p>`,
            solution: String.raw`<p>To $2r$: $\Delta E = -\dfrac{GMm}{4r} - \left(-\dfrac{GMm}{2r}\right) = \dfrac{GMm}{4r}$. To escape ($E_f = 0$): $\Delta E = \dfrac{GMm}{2r}$ — exactly twice the cost of doubling the orbital radius.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A comet orbits the Sun (mass $M$) on an ellipse with perihelion distance $r_p$ and aphelion distance $r_a = 9r_p$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using conservation of angular momentum and energy, derive the ratio $v_p/v_a$ and an expression for $v_p$.</p>`,
            solution: String.raw`<p>Angular momentum: $v_p r_p = v_a r_a \Rightarrow \dfrac{v_p}{v_a} = \dfrac{r_a}{r_p} = 9$. Energy: $\tfrac{1}{2}v_p^2 - \dfrac{GM}{r_p} = \tfrac{1}{2}v_a^2 - \dfrac{GM}{r_a}$. Substituting $v_a = v_p/9$ and $r_a = 9r_p$: $\tfrac{1}{2}v_p^2\left(1 - \tfrac{1}{81}\right) = GM\left(\dfrac{1}{r_p} - \dfrac{1}{9r_p}\right) = \dfrac{8GM}{9r_p}$. So $v_p^2 = \dfrac{2\cdot 81\cdot 8\,GM}{80\cdot 9\,r_p} = \dfrac{9GM}{5r_p}$, giving $v_p = \sqrt{\dfrac{9GM}{5r_p}} = 3\sqrt{\dfrac{GM}{5r_p}}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Verify that $v_p$ exceeds the circular-orbit speed at $r_p$ but is less than the escape speed there, and explain why both must be true.</p>`,
            solution: String.raw`<p>$v_{circ}^2 = GM/r_p = \tfrac{5}{9}v_p^2\cdot\tfrac{9}{5}\cdot\tfrac{5}{9}$ — compare directly: $v_p^2 = 1.8\,GM/r_p > GM/r_p = v_{circ}^2$ ✔, and $v_{esc}^2 = 2GM/r_p > 1.8\,GM/r_p$ ✔. Both must hold: perihelion is the orbit's <em>inner</em> turning point, so the comet must be moving faster than circular there (otherwise it would fall further in), yet it remains bound, so it must be slower than escape. The window $v_{circ} < v_p < v_{esc}$ is precisely the elliptical regime with perihelion at that point.</p>` }
        ] }
    ]
  }
  ]
});
