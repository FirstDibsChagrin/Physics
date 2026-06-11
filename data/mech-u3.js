/* data/mech-u3.js — Unit 3: Work, Energy, and Power */
AP.registerUnit({
  id: 3,
  course: "mech",
  title: "Work, Energy, and Power",
  weight: "15–25%",
  tagline: "The scalar shortcut: track energy through a problem and skip the vector bookkeeping entirely.",
  bigIdeas: [
    "Work is a transfer of energy by a force: W = ∫F·dx. The net work on an object equals its change in kinetic energy.",
    "Conservative forces store energy as potential energy, with F = −dU/dx linking the two descriptions.",
    "When only conservative forces act, mechanical energy is constant — and even when they don't, energy is never lost, only relabeled.",
    "Power is the rate of energy transfer: P = dE/dt = F·v."
  ],
  topics: [

  /* ============================ 3.1 ============================ */
  {
    id: "3.1",
    title: "Translational Kinetic Energy",
    blurb: "The energy of motion — quadratic in speed, and the bookkeeping currency of this whole unit.",
    objectives: [
      "Calculate the translational kinetic energy K = ½mv² of an object or system.",
      "Explain why kinetic energy is a scalar and why it depends on the square of speed.",
      "Recognize that kinetic energy depends on reference frame.",
      "Relate changes in kinetic energy to net work (preview of the work–energy theorem)."
    ],
    sections: [
      { heading: "The Core Idea",
        content: String.raw`<p>An object of mass $m$ moving at speed $v$ carries <strong>kinetic energy</strong></p>
$$K = \tfrac{1}{2}mv^2.$$
<p>Kinetic energy is a <strong>scalar</strong> — no direction, never negative. A ball thrown left and a ball thrown right at the same speed have identical kinetic energy. What matters is the <em>square of the speed</em>, which has a brutal consequence: doubling your speed quadruples your kinetic energy, which is why highway crashes are so much worse than parking-lot ones — and why braking distance scales as $v^2$.</p>
<p>For a system of particles, kinetic energies simply add: $K_{sys} = \sum \tfrac{1}{2}m_i v_i^2$. There is no cancellation between particles moving opposite ways — energy doesn't care about direction.</p>
<div class="callout key">Momentum $p = mv$ is linear in $v$ and a vector; kinetic energy is quadratic in $v$ and a scalar. Two objects can have equal momentum but very different kinetic energies, and vice versa. Keeping these two ledgers separate is half of Units 3–4.</div>` },
      { heading: "K Grows as the Square of Speed",
        graph: { xLabel: "v (m/s)", yLabel: "K (J)", xMin: 0, xMax: 10, yMin: 0, yMax: 110,
                 fns: [ { expr: "0.5*2*x*x", label: "K = ½(2 kg)v²", color: "#fbbf24" },
                        { expr: "0.5*1*x*x", label: "K = ½(1 kg)v²", color: "#22d3ee" } ] },
        graphCaption: "Kinetic energy versus speed for 1 kg and 2 kg objects. The parabola means each extra m/s of speed costs more energy than the last.",
        content: String.raw`<p>Read two facts off the graph: at any speed, doubling the mass doubles $K$ (the curves are vertical scalings of each other), while doubling the speed quadruples $K$ (compare $v = 4$ to $v = 8$ on either curve). An 80 kg sprinter at $10\,\text{m/s}$ carries $4000\,\text{J}$ — about the energy of a textbook dropped from a 10-story building.</p>` },
      { heading: "Kinetic Energy and Momentum, Side by Side",
        content: String.raw`<p>It is often useful to write kinetic energy in terms of momentum:</p>
$$K = \frac{p^2}{2m}.$$
<p>This little identity does real work on the exam. Two objects with the <em>same momentum</em>: the lighter one has more kinetic energy ($K \propto 1/m$ at fixed $p$). Two objects with the <em>same kinetic energy</em>: the heavier one has more momentum ($p = \sqrt{2mK}$). In collision problems, momentum is conserved while kinetic energy often is not — being fluent in converting between the two descriptions saves minutes.</p>
<p>Also note kinetic energy is <strong>frame-dependent</strong>: a passenger walking up the aisle of a jet has a tiny $K$ in the plane's frame and an enormous $K$ in the ground frame. Energy bookkeeping is consistent <em>within</em> one inertial frame; never mix frames mid-problem.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Forgetting the square:</strong> tripling speed multiplies $K$ by 9, not 3. Scaling questions love this.</li>
<li><strong>Giving kinetic energy a direction or a sign:</strong> $K$ is a scalar and is never negative. Only <em>changes</em> $\Delta K$ can be negative.</li>
<li><strong>Confusing $K$ with momentum conservation:</strong> kinetic energy is not conserved in most collisions; momentum is. Use $K = p^2/2m$ to translate, not to conflate.</li>
<li><strong>Mixing reference frames:</strong> compute every energy in the same frame, start to finish.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`K = \tfrac{1}{2}mv^2`, note: "Translational kinetic energy; scalar, never negative." },
      { latex: String.raw`K = \frac{p^2}{2m}`, note: "Kinetic energy in terms of momentum — the collision-problem translator." },
      { latex: String.raw`K_{sys} = \sum_i \tfrac{1}{2}m_i v_i^2`, note: "System kinetic energy: a straight sum, no directional cancellation." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Car A has mass $m$ and speed $2v$; car B has mass $2m$ and speed $v$. The ratio $K_A/K_B$ is:</p>`,
        choices: [ String.raw`$2$`, String.raw`$1$`, String.raw`$4$`, String.raw`$1/2$` ],
        answer: 0,
        solution: String.raw`<p>$K_A = \tfrac{1}{2}m(2v)^2 = 2mv^2$ and $K_B = \tfrac{1}{2}(2m)v^2 = mv^2$, so $K_A/K_B = 2$. Speed enters squared; mass enters once.</p>` },
      { type: "mcq",
        q: String.raw`<p>Two objects have equal momentum. Object 1 has mass $m$, object 2 has mass $4m$. The ratio of their kinetic energies $K_1/K_2$ is:</p>`,
        choices: [ String.raw`$4$`, String.raw`$2$`, String.raw`$1/4$`, String.raw`$1$` ],
        answer: 0,
        solution: String.raw`<p>$K = p^2/2m$ with equal $p$: $K \propto 1/m$, so the lighter object carries $4\times$ the kinetic energy. (Think of a bullet vs. a slowly rolling boulder with the same momentum.)</p>` },
      { type: "mcq",
        q: String.raw`<p>A car traveling at speed $v$ requires distance $d$ to brake to a stop with constant braking force. At speed $3v$, the braking distance is:</p>`,
        choices: [ String.raw`$9d$`, String.raw`$3d$`, String.raw`$6d$`, String.raw`$\sqrt{3}\,d$` ],
        answer: 0,
        solution: String.raw`<p>The brakes must remove all of $K = \tfrac{1}{2}mv^2$ via work $Fd$. With $F$ fixed, $d \propto v^2$: tripling speed gives $9\times$ the stopping distance. This is the work–energy theorem in disguise.</p>` },
      { type: "frq",
        q: String.raw`<p>A particle of mass $m = 0.50\,\text{kg}$ moves along the x-axis with velocity $v(t) = 6t - 3t^2$ (SI units), for $0 \le t \le 2\,\text{s}$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the kinetic energy of the particle at $t = 1\,\text{s}$ and at $t = 2\,\text{s}$.</p>`,
            solution: String.raw`<p>$v(1) = 6 - 3 = 3\,\text{m/s}$, so $K(1) = \tfrac{1}{2}(0.50)(3)^2 = 2.25\,\text{J}$. $v(2) = 12 - 12 = 0$, so $K(2) = 0$. The particle has been brought momentarily to rest.</p>` },
          { label: "(b)", prompt: String.raw`<p>At what time is the kinetic energy maximum, and what is its value?</p>`,
            solution: String.raw`<p>$K$ is maximal when $|v|$ is maximal. $\dfrac{dv}{dt} = 6 - 6t = 0$ at $t = 1\,\text{s}$, giving $v_{max} = 3\,\text{m/s}$ and $K_{max} = 2.25\,\text{J}$. (Check endpoints: $v(0) = 0$, $v(2) = 0$ — the interior extremum wins.)</p>` },
          { label: "(c)", prompt: String.raw`<p>Find the net work done on the particle between $t = 0$ and $t = 1\,\text{s}$, without computing any force.</p>`,
            solution: String.raw`<p>By the work–energy theorem, $W_{net} = \Delta K = K(1) - K(0) = 2.25 - 0 = 2.25\,\text{J}$. The whole point of the energy ledger is that the detailed force history is unnecessary.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A bullet of mass $m$ and a rifle of mass $M \gg m$ are initially at rest. The rifle is fired; ignore external forces during the shot.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using momentum conservation, find the ratio of the bullet's kinetic energy to the rifle's recoil kinetic energy.</p>`,
            solution: String.raw`<p>Momentum: $0 = mv_b - MV \Rightarrow$ equal magnitudes $p$ for each. Then $\dfrac{K_b}{K_R} = \dfrac{p^2/2m}{p^2/2M} = \dfrac{M}{m}$. The light object carries almost all the kinetic energy.</p>` },
          { label: "(b)", prompt: String.raw`<p>The chemical energy released is $E$. Express the bullet's kinetic energy in terms of $E$, $m$, and $M$, and evaluate the limit $M \to \infty$.</p>`,
            solution: String.raw`<p>$K_b + K_R = E$ with $K_R = \dfrac{m}{M}K_b$: $K_b\left(1 + \dfrac{m}{M}\right) = E$, so $K_b = \dfrac{E}{1 + m/M} = \dfrac{ME}{M+m}$. As $M \to \infty$, $K_b \to E$: an infinitely heavy rifle doesn't recoil, and the bullet gets everything.</p>` }
        ] }
    ]
  },

  /* ============================ 3.2 ============================ */
  {
    id: "3.2",
    title: "Work",
    blurb: "Force times distance — but really a dot product, and really an integral.",
    objectives: [
      "Compute work as W = ∫F·dr, including cases of varying force and force at an angle to displacement.",
      "Interpret work as the area under an F–x graph, with sign.",
      "Apply the work–energy theorem W_net = ΔK.",
      "Identify when a force does zero or negative work."
    ],
    sections: [
      { heading: "The Definition, in Full Generality",
        content: String.raw`<p>The work done by a force $\vec{F}$ on an object moving along a path is</p>
$$W = \int \vec{F}\cdot d\vec{r},$$
<p>which collapses, for a constant force and straight-line displacement, to the familiar $W = Fd\cos\theta$. The dot product carries the physics:</p>
<ul>
<li>Force component <em>along</em> the motion does positive work (speeds things up).</li>
<li>Force component <em>against</em> the motion does negative work (slows things down).</li>
<li>Force <em>perpendicular</em> to the motion does <strong>zero work</strong> — the normal force on a sliding block, tension in a circular pendulum's string, the magnetic force later in E&amp;M.</li>
</ul>
<p>Work is a scalar measured in joules. It is a <em>transfer</em> of energy by a force, not a thing an object "has."</p>
<div class="callout warn">Zero work surprises people: carry a heavy box at constant height across a room and you do no work on it ($\vec F \perp d\vec r$ the whole way). Tired muscles are biology, not physics.</div>` },
      { heading: "Interactive: Work as Area",
        sim: "forceArea",
        simParams: { mode: "work" },
        simCaption: "Slide the upper limit and watch the shaded area accumulate — that area IS the work. Try the three force profiles and confirm the constant-force case reproduces W = Fd.",
        content: String.raw`<p>For one-dimensional motion, $W = \int_{x_i}^{x_f} F_x\,dx$ is literally the signed area under the $F_x$–$x$ curve. Force below the axis (opposing displacement) sweeps out negative area: negative work.</p>` },
      { heading: "The Work–Energy Theorem",
        content: String.raw`<p>The theorem that powers this unit: the <strong>net</strong> work done by <strong>all</strong> forces equals the change in kinetic energy,</p>
$$W_{net} = \Delta K = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_i^2.$$
<p>It is not a new law — it is Newton's second law integrated over distance. The one-line derivation, using the chain-rule trick you should know cold:</p>
$$W_{net} = \int F\,dx = \int m\frac{dv}{dt}dx = \int m\frac{dv}{dx}\underbrace{\frac{dx}{dt}}_{v}\,dx = \int_{v_i}^{v_f} m v\,dv = \tfrac{1}{2}mv_f^2 - \tfrac{1}{2}mv_i^2.$$
<p>Use it whenever a problem connects <em>force, distance, and speed</em> without asking about time. (If time appears, impulse–momentum is usually the better tool.)</p>` },
      { heading: "Worked Example: Variable Force",
        content: String.raw`<p>A $2\,\text{kg}$ block at rest is pushed by $F(x) = 12 - 3x$ (N, with $x$ in m) from $x=0$ to $x=4\,\text{m}$ on a frictionless floor. Find its final speed.</p>
$$W = \int_0^4 (12 - 3x)\,dx = \left[12x - \tfrac{3}{2}x^2\right]_0^4 = 48 - 24 = 24\,\text{J}$$
$$\tfrac{1}{2}(2)v_f^2 = 24 \;\Rightarrow\; v_f = \sqrt{24} \approx 4.9\,\text{m/s}.$$
<p>Note the force hits zero at $x = 4\,\text{m}$ — the block's speed is maximal exactly where the force changes sign, a pattern worth internalizing for potential-energy wells in 3.3.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Using $W = Fd$ for a varying force:</strong> if $F$ depends on $x$, you must integrate (or take area under the graph).</li>
<li><strong>Dropping $\cos\theta$:</strong> only the force component along the displacement counts.</li>
<li><strong>Work–energy with one force instead of the net:</strong> $\Delta K$ equals the <em>total</em> work by all forces. Individual forces have individual works that need not equal $\Delta K$.</li>
<li><strong>Sign carelessness:</strong> friction on a sliding object does negative work; gravity does positive work on the way down and negative on the way up.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`W = \int \vec{F}\cdot d\vec{r}`, note: "General definition; reduces to Fd cos θ for constant force, straight path." },
      { latex: String.raw`W = \int_{x_i}^{x_f} F_x\,dx`, note: "1D form: signed area under the F–x graph." },
      { latex: String.raw`W_{net} = \Delta K`, note: "Work–energy theorem — Newton's 2nd law integrated over distance." },
      { latex: String.raw`W_{spring} = -\tfrac{1}{2}k x_f^2 + \tfrac{1}{2}k x_i^2`, note: "Work done BY a spring; negative when stretching away from natural length." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A force $F(x) = 4x$ (N) acts on an object as it moves from $x = 0$ to $x = 3\,\text{m}$. The work done by the force is:</p>`,
        choices: [ String.raw`$18\,\text{J}$`, String.raw`$12\,\text{J}$`, String.raw`$36\,\text{J}$`, String.raw`$6\,\text{J}$` ],
        answer: 0,
        solution: String.raw`<p>$W = \int_0^3 4x\,dx = 2x^2\big|_0^3 = 18\,\text{J}$ — the area of a triangle of base 3 and height 12. Choosing $F(3)\cdot 3 = 36\,\text{J}$ ignores that the force starts at zero.</p>` },
      { type: "mcq",
        q: String.raw`<p>A pendulum bob swings through a full arc. The work done by the string tension over the swing is:</p>`,
        choices: [ String.raw`zero`, String.raw`positive on the way down, negative on the way up`, String.raw`negative always`, String.raw`equal to $\Delta K$` ],
        answer: 0,
        solution: String.raw`<p>Tension is always perpendicular to the bob's velocity (it points along the string; motion is along the arc), so $\vec T \cdot d\vec r = 0$ at every instant. Perpendicular forces do no work — they redirect, they don't energize.</p>` },
      { type: "mcq",
        q: String.raw`<p>A crate is pushed $5.0\,\text{m}$ across a rough floor at constant velocity by a $40\,\text{N}$ horizontal force. The net work done on the crate is:</p>`,
        choices: [ String.raw`$0\,\text{J}$`, String.raw`$200\,\text{J}$`, String.raw`$-200\,\text{J}$`, String.raw`$400\,\text{J}$` ],
        answer: 0,
        solution: String.raw`<p>Constant velocity ⇒ $\Delta K = 0$ ⇒ $W_{net} = 0$. The push does $+200\,\text{J}$ and friction does $-200\,\text{J}$; they cancel in the net. Individual works are nonzero; the net is zero.</p>` },
      { type: "frq",
        q: String.raw`<p>A $3.0\,\text{kg}$ block slides on a frictionless horizontal surface with initial speed $2.0\,\text{m/s}$ in the $+x$ direction. From $x = 0$ to $x = 2.0\,\text{m}$ it experiences the force shown: $F_x$ rises linearly from $0$ to $+6.0\,\text{N}$ over $[0, 1.0\,\text{m}]$, then drops linearly back to $0$ over $[1.0, 2.0\,\text{m}]$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Determine the total work done on the block by this force.</p>`,
            solution: String.raw`<p>Area under the triangle: $W = \tfrac{1}{2}(\text{base})(\text{height}) = \tfrac{1}{2}(2.0)(6.0) = 6.0\,\text{J}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the block's speed at $x = 2.0\,\text{m}$.</p>`,
            solution: String.raw`<p>$W_{net} = \Delta K$: $6.0 = \tfrac{1}{2}(3.0)v_f^2 - \tfrac{1}{2}(3.0)(2.0)^2 = 1.5v_f^2 - 6.0$. So $v_f^2 = 8.0$ and $v_f = 2.8\,\text{m/s}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>At what position is the block's speed greatest? Justify without calculation.</p>`,
            solution: String.raw`<p>At $x = 2.0\,\text{m}$ (and beyond). The force is in the $+x$ direction over the entire interval, so it does positive work the whole way — kinetic energy increases monotonically until the force ends. (Had the force gone negative after $1.0\,\text{m}$, the answer would be where $F = 0$.)</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A block of mass $m$ is pressed against a spring of constant $k$, compressing it a distance $d$ from natural length, on a horizontal surface. The block is released; the surface is frictionless except for a rough patch of length $L$ (coefficient $\mu_k$) located beyond the spring.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using the work–energy theorem, derive the block's speed just after it leaves the spring (before the rough patch).</p>`,
            solution: String.raw`<p>The spring does work $W_s = \int_{-d}^{0}(-kx)\,dx = +\tfrac{1}{2}kd^2$ on the block. Then $\tfrac{1}{2}mv^2 = \tfrac{1}{2}kd^2$ gives $v = d\sqrt{k/m}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive the block's speed after crossing the rough patch, and the condition on $d$ for it to make it across at all.</p>`,
            solution: String.raw`<p>Friction does $W_f = -\mu_k mg L$. Work–energy from launch to exit: $\tfrac{1}{2}mv_f^2 = \tfrac{1}{2}kd^2 - \mu_k mgL$, so $v_f = \sqrt{\dfrac{kd^2}{m} - 2\mu_k g L}$. It crosses iff $\tfrac{1}{2}kd^2 > \mu_k mgL$, i.e. $d > \sqrt{2\mu_k mgL/k}$.</p>` }
        ] }
    ]
  },

  /* ============================ 3.3 ============================ */
  {
    id: "3.3",
    title: "Potential Energy",
    blurb: "Stored work: how conservative forces bank energy in configuration — and how to read a U(x) graph like a landscape.",
    objectives: [
      "Distinguish conservative from nonconservative forces using path independence.",
      "Calculate gravitational PE (near-Earth and universal) and spring PE.",
      "Use F_x = −dU/dx to extract forces and equilibria from potential energy functions.",
      "Analyze U(x) graphs: turning points, allowed regions, stable and unstable equilibria."
    ],
    sections: [
      { heading: "Conservative Forces Bank Energy",
        content: String.raw`<p>A force is <strong>conservative</strong> if the work it does is <em>path-independent</em> — equivalently, zero around any closed loop. Gravity and spring forces qualify; friction does not (it always does negative work, every leg of every trip). Only conservative forces get potential energies, defined by</p>
$$\Delta U = -W_{cons} = -\int \vec{F}\cdot d\vec{r}.$$
<p>The minus sign says: when the force does positive work (ball falls), stored energy decreases; when you work <em>against</em> the force (lift the ball), the store fills. The standard catalog:</p>
$$U_g = mgh \;\;(\text{near Earth}), \qquad U_s = \tfrac{1}{2}kx^2, \qquad U_G = -\frac{GMm}{r} \;\;(\text{universal}).$$
<p>Only <em>changes</em> in $U$ matter — you choose the zero. Near-Earth, put $U=0$ wherever it's convenient. For universal gravitation the convention is $U = 0$ at infinite separation, which forces bound systems to negative $U$.</p>` },
      { heading: "Force Is the Negative Slope of U",
        content: String.raw`<p>Differentiating the definition gives the master relation</p>
$$F_x = -\frac{dU}{dx}.$$
<p>The force pushes <em>downhill</em> on the energy landscape. Check it on the catalog: $U_s = \tfrac12 kx^2 \Rightarrow F = -kx$ ✔; $U_G = -GMm/r \Rightarrow F_r = -dU/dr = -GMm/r^2$ (attractive) ✔.</p>
<p>This relation turns any $U(x)$ graph into a complete dynamical story:</p>
<ul>
<li><strong>Slope</strong> ⇒ force (steeper = stronger, sign flipped).</li>
<li><strong>Minima</strong> ⇒ stable equilibrium (restoring force on either side).</li>
<li><strong>Maxima</strong> ⇒ unstable equilibrium (any nudge runs away).</li>
<li><strong>Horizontal line at total energy $E$</strong> ⇒ the motion: $K = E - U$ is the gap between line and curve; where they intersect, $K = 0$ — a <strong>turning point</strong>.</li>
</ul>` },
      { heading: "Reading an Energy Well",
        graph: { xLabel: "x (m)", yLabel: "energy (J)", xMin: 0, xMax: 8, yMin: -2, yMax: 14,
                 fns: [ { expr: "10 - 9*Math.exp(-(x-3)*(x-3)/1.4) + 0.18*(x-5.5)*(x-5.5)*(x>5.5?1:0)", label: "U(x)", color: "#fbbf24" } ],
                 hlines: [ { y: 6, label: "E total = 6 J" } ] },
        graphCaption: "A particle with total energy E = 6 J is trapped where U(x) ≤ E. The horizontal gaps between the E line and the U curve are its kinetic energy.",
        content: String.raw`<p>For the well shown, the particle oscillates between the two intersection points; its speed peaks at the bottom of the well (largest $E-U$ gap) and vanishes at the turning points. To escape, it would need its total energy raised above the barrier on the right. Every statement came from the graph — no equations needed. The AP exam asks exactly this kind of reading.</p>` },
      { heading: "Interactive: The Linear Force and Its Parabolic Well",
        sim: "hookesLaw",
        simCaption: "The spring's F–x line has slope −k; the shaded area is the stored ½kx². A linear restoring force and a parabolic potential well are the same fact viewed twice.",
        content: String.raw`<p>Near <em>any</em> stable equilibrium, $U(x)$ is approximately parabolic (Taylor-expand it), which is why so much of physics looks like a mass on a spring — the deep reason behind Unit 7.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Assigning friction a potential energy:</strong> only conservative (path-independent) forces have one.</li>
<li><strong>Dropping the minus sign in $F = -dU/dx$:</strong> force points toward decreasing $U$. A positive slope means a negative (leftward) force.</li>
<li><strong>Panicking over negative $U_G$:</strong> with $U=0$ at infinity, bound orbits must have negative potential (and total) energy. Negative is fine; only differences matter.</li>
<li><strong>Spring PE with displacement from the wrong point:</strong> $x$ in $\tfrac12 kx^2$ is measured from <em>natural length</em>, always.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\Delta U = -\int \vec{F}\cdot d\vec{r}`, note: "Definition of potential energy change for a conservative force." },
      { latex: String.raw`F_x = -\frac{dU}{dx}`, note: "Force is the negative gradient: it points downhill in energy." },
      { latex: String.raw`U_g = mgh`, note: "Near-Earth gravitational PE; zero level is your choice." },
      { latex: String.raw`U_s = \tfrac{1}{2}kx^2`, note: "Ideal spring PE; x from natural length." },
      { latex: String.raw`U_G = -\frac{GMm}{r}`, note: "Universal gravitational PE; zero at infinite separation, negative when bound." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A particle's potential energy is $U(x) = 3x^2 - 12x$ (J, $x$ in m). The force on the particle at $x = 1\,\text{m}$ is:</p>`,
        choices: [ String.raw`$+6\,\text{N}$`, String.raw`$-6\,\text{N}$`, String.raw`$-9\,\text{N}$`, String.raw`$+9\,\text{N}$` ],
        answer: 0,
        solution: String.raw`<p>$F = -dU/dx = -(6x - 12) = 12 - 6x$. At $x=1$: $F = +6\,\text{N}$. Forgetting the overall minus sign gives $-6$ — the most popular wrong answer.</p>` },
      { type: "mcq",
        q: String.raw`<p>For the same $U(x) = 3x^2 - 12x$, the equilibrium at $x = 2\,\text{m}$ is:</p>`,
        choices: [ String.raw`stable, because U has a minimum there`, String.raw`unstable, because U has a maximum there`, String.raw`stable, because F is positive there`, String.raw`not an equilibrium` ],
        answer: 0,
        solution: String.raw`<p>$F = 12 - 6x = 0$ at $x = 2$ ✔ equilibrium. $d^2U/dx^2 = 6 > 0$: the parabola opens upward, a minimum — displacements in either direction produce a restoring force. Stable.</p>` },
      { type: "mcq",
        q: String.raw`<p>A satellite is moved from a circular orbit of radius $r$ to one of radius $2r$. Its gravitational potential energy:</p>`,
        choices: [ String.raw`increases (becomes less negative)`, String.raw`decreases (becomes more negative)`, String.raw`is halved in magnitude and stays positive`, String.raw`doesn't change — only height matters near Earth` ],
        answer: 0,
        solution: String.raw`<p>$U = -GMm/r$ goes from $-GMm/r$ to $-GMm/2r$: it increases (toward zero). Raising an orbit always costs energy. (C) is half-right about the magnitude but $U$ is negative; (D) misapplies the near-Earth approximation.</p>` },
      { type: "frq",
        q: String.raw`<p>A particle of mass $0.40\,\text{kg}$ moves along the x-axis with potential energy $U(x) = x^3 - 6x^2 + 9x + 1$ (J, $x$ in m), for $x \ge 0$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find all equilibrium positions and classify each as stable or unstable.</p>`,
            solution: String.raw`<p>$F = -dU/dx = -(3x^2 - 12x + 9) = -3(x-1)(x-3)$. Equilibria at $x = 1$ and $x = 3$. Second derivative $U'' = 6x - 12$: at $x=1$, $U'' = -6 < 0$ — a maximum, <strong>unstable</strong>; at $x=3$, $U'' = +6 > 0$ — a minimum, <strong>stable</strong>.</p>` },
          { label: "(b)", prompt: String.raw`<p>The particle is released from rest at $x = 1\,\text{m}$... almost. It starts just to the right of the maximum. Find its speed when it passes the stable equilibrium at $x = 3\,\text{m}$.</p>`,
            solution: String.raw`<p>$U(1) = 1 - 6 + 9 + 1 = 5\,\text{J}$; $U(3) = 27 - 54 + 27 + 1 = 1\,\text{J}$. Energy conservation: $K = U(1) - U(3) = 4\,\text{J}$, so $v = \sqrt{2K/m} = \sqrt{2(4)/0.40} = \sqrt{20} \approx 4.5\,\text{m/s}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>Describe the subsequent motion of the particle. Does it ever return to $x = 1\,\text{m}$? Justify with energy reasoning.</p>`,
            solution: String.raw`<p>With total energy $E = 5\,\text{J}$, the particle oscillates in the well around $x = 3$, with turning points where $U(x) = 5$ again. One turning point is arbitrarily close to $x = 1$ (it approaches the barrier top with vanishing speed but, starting infinitesimally to the right, takes arbitrarily long to creep back). For any release point strictly below the barrier energy, the motion is bounded oscillation in the well — it never crosses to $x < 1$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>Consider gravitational potential energy at planetary scale: a projectile of mass $m$ is launched straight up from the surface of an airless planet of mass $M$ and radius $R$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Starting from $F = -GMm/r^2$, derive $U(r) = -GMm/r$ by integration, taking $U(\infty) = 0$.</p>`,
            solution: String.raw`<p>$U(r) - U(\infty) = -\displaystyle\int_\infty^r F\,dr' = -\int_\infty^r \left(-\frac{GMm}{r'^2}\right)dr' = -\left[\frac{GMm}{r'}\right]_\infty^r = -\frac{GMm}{r}$. With $U(\infty)=0$: $U(r) = -GMm/r$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive the escape speed from the surface.</p>`,
            solution: String.raw`<p>"Escape" means arriving at $r \to \infty$ with nothing to spare: $E = 0$. So $\tfrac{1}{2}mv_e^2 - \dfrac{GMm}{R} = 0$, giving $v_e = \sqrt{\dfrac{2GM}{R}}$. Mass of the projectile cancels.</p>` },
          { label: "(c)", prompt: String.raw`<p>The projectile is instead launched at half the escape speed. Find the maximum distance from the planet's center that it reaches.</p>`,
            solution: String.raw`<p>$E = \tfrac{1}{2}m\left(\tfrac{v_e}{2}\right)^2 - \dfrac{GMm}{R} = \tfrac{1}{8}m\cdot\dfrac{2GM}{R} - \dfrac{GMm}{R} = -\dfrac{3GMm}{4R}$. At the top, $K=0$: $-\dfrac{GMm}{r_{max}} = -\dfrac{3GMm}{4R}$, so $r_{max} = \dfrac{4R}{3}$ — only $R/3$ of altitude, despite half the escape speed. Energy, not speed, is the right currency.</p>` }
        ] }
    ]
  },

  /* ============================ 3.4 ============================ */
  {
    id: "3.4",
    title: "Conservation of Energy",
    blurb: "The most powerful shortcut in mechanics: if you can name where the energy went, you've solved the problem.",
    objectives: [
      "Apply conservation of mechanical energy when only conservative forces do work.",
      "Extend the energy equation to include work by friction and other nonconservative forces.",
      "Choose between energy methods and Newton's laws strategically.",
      "Track energy in multi-stage problems (spring → kinetic → height → heat)."
    ],
    sections: [
      { heading: "The Master Equation",
        content: String.raw`<p>Define mechanical energy $E = K + U$ (all relevant potential energies included). Then:</p>
$$K_i + U_i + W_{nc} = K_f + U_f$$
<p>where $W_{nc}$ is the work done by nonconservative forces (friction, air resistance, a push). Two regimes:</p>
<ul>
<li><strong>Only conservative forces act</strong> (or others do zero work): $W_{nc} = 0$ and mechanical energy is conserved: $K_i + U_i = K_f + U_f$.</li>
<li><strong>Friction acts:</strong> $W_{nc} = -f_k d$ (with $d$ the path length actually slid). The "missing" mechanical energy shows up as thermal energy $\Delta E_{th} = f_k d$ — never truly lost, just relabeled.</li>
</ul>
<div class="callout key">Energy methods are blind to path and time — that is their superpower. If the question asks "how fast at the bottom?" use energy. If it asks "how long to get there?" or "what is the tension?", you need kinematics or Newton's laws.</div>` },
      { heading: "Interactive: Watch the Ledger Balance",
        sim: "energyTrack",
        simCaption: "Release the ball and watch KE and PE trade while their sum stays fixed. Then add friction and watch the thermal bar grow to claim the difference.",
        content: String.raw`<p>Notice the ball returns to its release height with zero speed when friction is off — and falls short when it's on, by exactly the energy in the thermal bar. The turning-point logic from 3.3, animated.</p>` },
      { heading: "A Strategy, Not Just a Formula",
        content: String.raw`<p>A reliable four-step routine:</p>
<ol>
<li><strong>Define the system</strong> (block + Earth + spring is typical) and the start/end snapshots.</li>
<li><strong>Choose zero levels</strong> for each PE — pick locations that kill terms.</li>
<li><strong>Write the ledger:</strong> every form of energy at the start, every form at the end, friction in between.</li>
<li><strong>Solve, then sanity-check limits</strong> (set $\mu = 0$, $\theta = 90^\circ$, etc., and confirm it reduces to something you know).</li>
</ol>
<p>Worked example: a block slides from rest down a ramp of height $h$ (frictionless), then across a floor with friction $\mu_k$ for distance $d$, then compresses a spring by $x$ before stopping:</p>
$$mgh = \mu_k mg\,d + \tfrac{1}{2}kx^2.$$
<p>One line, three physical stages — that's the whole solution.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Using energy conservation while friction acts</strong> without the $-f_k d$ term. Ask: does anything slide on anything?</li>
<li><strong>Friction distance vs. displacement:</strong> $d$ in $f_k d$ is total path length slid (back-and-forth trips add up), not net displacement.</li>
<li><strong>Double-counting gravity:</strong> if you use $U_g$, gravity is already in the ledger — don't also include its "work."</li>
<li><strong>Asking energy for vectors:</strong> energy methods give speeds, not velocity directions or times. Pair with kinematics when needed.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`K_i + U_i + W_{nc} = K_f + U_f`, note: "Energy bookkeeping with nonconservative work included." },
      { latex: String.raw`E = K + U = \text{const}`, note: "Mechanical energy conservation: valid when W_nc = 0." },
      { latex: String.raw`\Delta E_{th} = f_k\,d`, note: "Thermal energy generated by sliding friction over path length d." },
      { latex: String.raw`\frac{dE}{dt} = P_{nc}`, note: "Rate form: mechanical energy changes at the rate nonconservative forces deliver power." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A ball is thrown with speed $v_0$ at $40^\circ$ above the horizontal from the edge of a cliff of height $h$. Ignoring air resistance, its speed when it hits the ground below is:</p>`,
        choices: [ String.raw`$\sqrt{v_0^2 + 2gh}$`, String.raw`$v_0 + \sqrt{2gh}$`, String.raw`dependent on the launch angle`, String.raw`$\sqrt{2gh}$` ],
        answer: 0,
        solution: String.raw`<p>Energy conservation: $\tfrac{1}{2}mv_f^2 = \tfrac{1}{2}mv_0^2 + mgh$, so $v_f = \sqrt{v_0^2 + 2gh}$ — for <em>any</em> launch angle. Angle changes where and when it lands, not how fast. (B) wrongly adds speeds instead of energies.</p>` },
      { type: "mcq",
        q: String.raw`<p>A block slides down a rough incline of height $h$ and arrives at the bottom with speed $v < \sqrt{2gh}$. The energy dissipated by friction is:</p>`,
        choices: [ String.raw`$mgh - \tfrac{1}{2}mv^2$`, String.raw`$\tfrac{1}{2}mv^2 - mgh$`, String.raw`$\tfrac{1}{2}mv^2$`, String.raw`$mgh$` ],
        answer: 0,
        solution: String.raw`<p>Ledger: start with $mgh$, end with $\tfrac{1}{2}mv^2$, difference went to heat: $\Delta E_{th} = mgh - \tfrac{1}{2}mv^2$. Positive, as it must be.</p>` },
      { type: "mcq",
        q: String.raw`<p>A pendulum is released from rest with the string horizontal. At the lowest point of the swing (string length $L$), its speed is:</p>`,
        choices: [ String.raw`$\sqrt{2gL}$`, String.raw`$\sqrt{gL}$`, String.raw`$2\sqrt{gL}$`, String.raw`$gL$` ],
        answer: 0,
        solution: String.raw`<p>Drop height is $L$ (from horizontal to bottom). $\tfrac{1}{2}mv^2 = mgL \Rightarrow v = \sqrt{2gL}$. Tension does no work (always ⊥ motion), so pure energy conservation applies.</p>` },
      { type: "frq",
        q: String.raw`<p>A $0.50\,\text{kg}$ block is released from rest at the top of a frictionless ramp of height $1.8\,\text{m}$. At the bottom it crosses a horizontal rough patch $2.0\,\text{m}$ long ($\mu_k = 0.30$), then hits a spring of constant $k = 200\,\text{N/m}$ on frictionless ground beyond.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the block's speed entering the spring.</p>`,
            solution: String.raw`<p>$mgh - \mu_k mg d = \tfrac{1}{2}mv^2$: $(0.50)(9.8)(1.8) - (0.30)(0.50)(9.8)(2.0) = 8.82 - 2.94 = 5.88\,\text{J}$. So $v = \sqrt{2(5.88)/0.50} = 4.85 \approx 4.8\,\text{m/s}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the maximum compression of the spring.</p>`,
            solution: String.raw`<p>All remaining kinetic energy becomes spring PE: $\tfrac{1}{2}kx^2 = 5.88\,\text{J} \Rightarrow x = \sqrt{2(5.88)/200} = 0.24\,\text{m}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>After rebounding, does the block make it back up to its starting height? If not, what height does it reach? Assume it recrosses the same rough patch once.</p>`,
            solution: String.raw`<p>The spring returns all $5.88\,\text{J}$; the return trip across the patch costs another $2.94\,\text{J}$, leaving $2.94\,\text{J}$ at the ramp's base. Height: $mgh' = 2.94 \Rightarrow h' = \dfrac{2.94}{(0.50)(9.8)} = 0.60\,\text{m}$. Far short of $1.8\,\text{m}$ — each crossing of the patch eats $2.94\,\text{J}$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A small block of mass $m$ starts from rest at the top of a frictionless hemispherical dome of radius $R$ and slides down the outside surface.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the block's speed as a function of the angle $\theta$ measured from the vertical (top of the dome).</p>`,
            solution: String.raw`<p>Height fallen: $R - R\cos\theta$. Energy conservation: $\tfrac{1}{2}mv^2 = mgR(1 - \cos\theta)$, so $v = \sqrt{2gR(1-\cos\theta)}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Write Newton's second law along the radial direction at angle $\theta$ and derive the angle at which the block leaves the surface.</p>`,
            solution: String.raw`<p>Radially (toward center): $mg\cos\theta - N = \dfrac{mv^2}{R}$. The block leaves when $N = 0$: $g\cos\theta = \dfrac{v^2}{R} = 2g(1 - \cos\theta)$, so $3\cos\theta = 2$ and $\theta = \cos^{-1}(2/3) \approx 48.2^\circ$. Energy provided $v(\theta)$; Newton provided the leaving condition — the two methods are partners, not rivals.</p>` }
        ] }
    ]
  },

  /* ============================ 3.5 ============================ */
  {
    id: "3.5",
    title: "Power",
    blurb: "Energy per second: the difference between lifting a piano slowly and lifting it fast.",
    objectives: [
      "Compute average and instantaneous power, P = dW/dt = F·v.",
      "Analyze constant-power motion, where acceleration is not constant.",
      "Interpret areas and slopes on P–t and E–t graphs.",
      "Estimate power in real systems (cars, motors, humans)."
    ],
    sections: [
      { heading: "Rate of Energy Transfer",
        content: String.raw`<p><strong>Power</strong> is how fast work is done (or energy is converted):</p>
$$P_{avg} = \frac{W}{\Delta t}, \qquad P = \frac{dW}{dt} = \vec{F}\cdot\vec{v}.$$
<p>The second form, $P = \vec F\cdot\vec v$, comes from $dW = \vec F\cdot d\vec r$ divided by $dt$, and it is the workhorse: instantaneous power depends on force <em>and current velocity</em>. Units: watts ($1\,\text{W} = 1\,\text{J/s}$); the kilowatt-hour on your electric bill is energy, $3.6\times10^6\,\text{J}$.</p>
<div class="callout">A car at top speed accelerates no further not because the engine quit but because at $v_{max}$, all available power goes to fighting drag: $P_{engine} = F_{drag}v_{max}$. Top speed is a power statement.</div>` },
      { heading: "Constant Power ≠ Constant Force",
        content: String.raw`<p>A car delivering constant power $P$ from rest obeys $P = Fv = m\dfrac{dv}{dt}v$, i.e. $mv\,dv = P\,dt$. Integrating:</p>
$$\tfrac{1}{2}mv^2 = Pt \;\;\Longrightarrow\;\; v(t) = \sqrt{\frac{2Pt}{m}}.$$
<p>Speed grows like $\sqrt{t}$, so acceleration <em>decreases</em> with time ($a = P/mv \to$ large at low speed, small at high speed). That matches experience: punchy launch, sluggish at highway speed. None of the constant-acceleration formulas apply here — a favorite exam trap.</p>` },
      { heading: "Graph: Constant Power From Rest",
        graph: { xLabel: "t (s)", yLabel: "v (m/s)", xMin: 0, xMax: 10, yMin: 0, yMax: 32,
                 fns: [ { expr: "Math.sqrt(2*500*x/10)", label: "v(t) = √(2Pt/m), P = 500 W, m = 10 kg", color: "#22d3ee" },
                        { expr: "3.2*x", label: "constant-a car (same v at t = 10 s)", color: "rgba(251,191,36,0.55)" } ] },
        graphCaption: "Constant power gives a square-root speed curve — fast start, flattening growth — unlike the straight line of constant acceleration.",
        content: String.raw`<p>The curves cross at $t = 10\,\text{s}$ by construction, but look at the start: the constant-power car is way ahead early (huge $a$ when $v$ is small), then gets reeled in. Slope = acceleration; watch it die off along the cyan curve.</p>` },
      { heading: "Power in Lifting and Climbing",
        content: String.raw`<p>To hoist a mass at constant speed $v$, the applied force equals $mg$, so the power required is</p>
$$P = mgv.$$
<p>This little formula handles elevators, cranes, pumps (lifting water), and hill-climbing cars (use the vertical component: $P = mgv\sin\theta$ + drag terms). Typical magnitudes worth knowing: a human sustains $\sim100\,\text{W}$ (sprinting $\sim1000\,\text{W}$ briefly); a horsepower is $746\,\text{W}$; a car cruising at highway speed uses $\sim15$–$25\,\text{kW}$ fighting drag.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Using kinematics under constant power:</strong> acceleration is not constant. Go back to $P = Fv$ and integrate.</li>
<li><strong>Average vs. instantaneous:</strong> $W/\Delta t$ is an average; $\vec F\cdot \vec v$ is this-instant. They agree only when power is steady.</li>
<li><strong>Forgetting the angle:</strong> $P = Fv\cos\theta$. A force perpendicular to velocity delivers zero power (consistent with zero work).</li>
<li><strong>kW vs. kWh:</strong> kilowatts measure rate, kilowatt-hours measure amount. "A 2 kW heater for 3 hours" = 6 kWh of energy.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`P = \frac{dW}{dt} = \vec{F}\cdot\vec{v}`, note: "Instantaneous power; the dot product handles angled forces." },
      { latex: String.raw`P_{avg} = \frac{\Delta E}{\Delta t}`, note: "Average power over an interval." },
      { latex: String.raw`v(t) = \sqrt{\frac{2Pt}{m}}`, note: "Speed under constant power from rest — NOT constant acceleration." },
      { latex: String.raw`P = mgv`, note: "Power to lift (or climb) at constant speed v." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A motor lifts a $20\,\text{kg}$ crate at a constant $1.5\,\text{m/s}$. The power delivered by the motor is approximately:</p>`,
        choices: [ String.raw`$290\,\text{W}$`, String.raw`$30\,\text{W}$`, String.raw`$196\,\text{W}$`, String.raw`$440\,\text{W}$` ],
        answer: 0,
        solution: String.raw`<p>Constant speed ⇒ applied force $= mg = 196\,\text{N}$; $P = Fv = 196(1.5) = 294 \approx 290\,\text{W}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A car's maximum power is fixed. If drag force is proportional to $v^2$, doubling the top speed would require the engine power to increase by a factor of:</p>`,
        choices: [ String.raw`$8$`, String.raw`$4$`, String.raw`$2$`, String.raw`$16$` ],
        answer: 0,
        solution: String.raw`<p>At top speed, $P = F_{drag}v = (cv^2)v = cv^3$. Power scales as the <em>cube</em> of top speed: doubling $v_{max}$ needs $2^3 = 8\times$ the power. This is why top-speed bragging rights are so expensive.</p>` },
      { type: "mcq",
        q: String.raw`<p>An object starts from rest and is driven at constant power. Its kinetic energy as a function of time is:</p>`,
        choices: [ String.raw`linear in $t$`, String.raw`proportional to $t^2$`, String.raw`proportional to $\sqrt{t}$`, String.raw`constant` ],
        answer: 0,
        solution: String.raw`<p>$P = dK/dt$ constant ⇒ $K = Pt$: kinetic energy grows linearly. (Speed grows as $\sqrt{t}$, since $K \propto v^2$.)</p>` },
      { type: "frq",
        q: String.raw`<p>A car of mass $m$ accelerates from rest along a straight, level road. Its engine delivers constant power $P$ to the wheels; ignore resistive forces.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive $v(t)$ starting from $P = \vec F\cdot\vec v$.</p>`,
            solution: String.raw`<p>$P = Fv = mv\dfrac{dv}{dt}$. Separate: $mv\,dv = P\,dt$, integrate from rest: $\tfrac{1}{2}mv^2 = Pt$, so $v(t) = \sqrt{\dfrac{2Pt}{m}}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive the position as a function of time.</p>`,
            solution: String.raw`<p>$x(t) = \displaystyle\int_0^t \sqrt{\frac{2P}{m}}\,t'^{1/2}\,dt' = \sqrt{\frac{2P}{m}}\cdot\frac{2}{3}t^{3/2} = \frac{2}{3}\sqrt{\frac{2P}{m}}\;t^{3/2}$.</p>` },
          { label: "(c)", prompt: String.raw`<p>Show that the car's acceleration diverges as $t \to 0$ and explain why this is unphysical for a real car.</p>`,
            solution: String.raw`<p>$a = \dfrac{dv}{dt} = \sqrt{\dfrac{P}{2mt}} \to \infty$ as $t \to 0$: constant power at zero speed would demand infinite force ($F = P/v$). Real cars are <em>traction-limited</em> at low speed — the tires can only deliver $\mu_s mg$ — so the launch is constant-force until power becomes the binding constraint.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A pump raises water from a well of depth $h = 20\,\text{m}$ and ejects it at the surface with speed $v = 10\,\text{m/s}$, at a rate of $\dfrac{dm}{dt} = 2.0\,\text{kg/s}$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the power needed to lift the water (potential-energy term alone).</p>`,
            solution: String.raw`<p>$P_{lift} = \dfrac{d}{dt}(mgh) = \dfrac{dm}{dt}gh = 2.0(9.8)(20) = 392\,\text{W}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Find the additional power needed to give the water its exit kinetic energy, and the total power.</p>`,
            solution: String.raw`<p>$P_{KE} = \dfrac{d}{dt}\left(\tfrac{1}{2}mv^2\right) = \tfrac{1}{2}\dfrac{dm}{dt}v^2 = \tfrac{1}{2}(2.0)(100) = 100\,\text{W}$. Total: $P = 392 + 100 = 492 \approx 490\,\text{W}$. Energy bookkeeping per second — power problems are just energy problems with a clock.</p>` }
        ] }
    ]
  }
  ]
});
