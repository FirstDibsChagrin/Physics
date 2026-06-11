/* data/mech-u2.js — Unit 2: Force and Translational Dynamics */
AP.registerUnit({
  id: 2,
  course: "mech",
  title: "Force and Translational Dynamics",
  weight: "20–25%",
  tagline: "Why motion changes: forces, Newton's laws, and the differential equations they generate.",
  bigIdeas: [
    "A net external force changes a system's momentum: F = dp/dt. When mass is constant, that is F = ma.",
    "Forces are interactions — they always come in equal-and-opposite pairs acting on different objects.",
    "The center of mass of a system moves as if all external forces acted on a single particle located there.",
    "Velocity-dependent forces (drag, friction) turn Newton's second law into a differential equation you can actually solve."
  ],
  topics: [

  /* ============================ 2.1 ============================ */
  {
    id: "2.1",
    title: "Systems and Center of Mass",
    blurb: "Treat a whole collection of objects as one point — the center of mass — and watch the bookkeeping simplify.",
    objectives: [
      "Define a system and decide when it can be modeled as a single point particle.",
      "Calculate the center of mass of discrete mass distributions and, with integration, of continuous ones.",
      "Relate the motion of a system's center of mass to the net external force on the system."
    ],
    sections: [
      { heading: "The Core Idea",
        content: String.raw`<p>A <strong>system</strong> is whatever collection of objects you choose to analyze. Forces between objects <em>inside</em> the system are internal; forces from outside are external. The payoff for this bookkeeping is enormous: internal forces cancel in pairs (Newton's third law), so only <strong>external</strong> forces can change the motion of the system as a whole.</p>
        <p>The "motion of the system as a whole" is the motion of its <strong>center of mass</strong> (CM), the mass-weighted average position:</p>
        $$x_{\text{cm}} = \frac{\sum_i m_i x_i}{\sum_i m_i}$$
        <p>If you throw a wrench so it tumbles through the air, every bolt-hole and handle-end traces a complicated curve — but the CM traces a clean parabola, exactly as if the wrench were a single point particle. That is when the point-particle model is valid: whenever you only care about translational motion, you may collapse the system to a dot at the CM.</p>` },
      { heading: "Continuous Bodies: Integrate",
        content: String.raw`<p>For a continuous object, the sum becomes an integral over mass elements $dm$:</p>
        $$x_{\text{cm}} = \frac{1}{M}\int x\, dm$$
        <p>The standard move is to convert $dm$ into a spatial element using a density. For a thin rod along the $x$-axis with linear density $\lambda(x)$ (mass per length), $dm = \lambda(x)\,dx$.</p>
        <p><strong>Worked example:</strong> a rod of length $L$ has $\lambda(x) = \lambda_0 \dfrac{x}{L}$ (light at $x=0$, dense at $x=L$). First the total mass:</p>
        $$M = \int_0^L \lambda_0 \frac{x}{L}\,dx = \frac{\lambda_0 L}{2}$$
        <p>Then the CM:</p>
        $$x_{\text{cm}} = \frac{1}{M}\int_0^L x\,\lambda_0\frac{x}{L}\,dx = \frac{\lambda_0 L^2/3}{\lambda_0 L/2} = \frac{2L}{3}$$
        <p>Sanity check: more mass sits near $x = L$, so the CM should sit past the midpoint — and $2L/3 > L/2$. Always run this check.</p>` },
      { heading: "Interactive: Center of Mass",
        sim: "centerOfMass",
        simCaption: "Slide the masses along the line and change their values. Notice the CM marker always sits closer to the heavier mass, and that moving a small mass barely budges it.",
        content: String.raw`<p>Build intuition before you compute: the CM is a weighted average, so it is always pulled toward the larger mass. Try making one mass three times the other and verify the CM divides the separation in a 1 : 3 ratio (closer to the big mass).</p>` },
      { heading: "Why the CM Matters: Newton for Systems",
        content: String.raw`<p>Differentiate the CM position twice and multiply by total mass $M$. Internal forces cancel pairwise, leaving</p>
        $$\vec{F}_{\text{net, ext}} = M\,\vec{a}_{\text{cm}}$$
        <p>This is Newton's second law for an entire system: <em>the CM accelerates as if it were a single particle of mass $M$ acted on by only the external forces.</em></p>
        <p>Powerful consequence: if the net external force is zero, $\vec{v}_{\text{cm}}$ is constant. A firework shell explodes at the top of its arc — the explosion is internal, so the fragments' CM keeps sailing along the original parabola. A person walking along a canoe on frictionless water cannot move the system's CM at all: the canoe slides backward to compensate.</p>
        <div class="callout key">No internal rearrangement — explosions, walking, pushing off — can ever move a system's center of mass if external forces are absent.</div>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
          <li><strong>Averaging positions instead of mass-weighting them.</strong> The CM of a 1 kg and a 3 kg mass is not midway between them — it is three times closer to the 3 kg mass.</li>
          <li><strong>Forgetting that the CM needs no mass at its location.</strong> The CM of a donut is in the hole. That is fine.</li>
          <li><strong>Using $dm = \lambda\,dx$ with a variable $\lambda$ pulled outside the integral.</strong> If $\lambda$ depends on $x$, it stays inside.</li>
          <li><strong>Computing total mass as $\lambda(L)\cdot L$ for a nonuniform rod.</strong> Total mass is $\int \lambda\,dx$, never density-at-a-point times length.</li>
          <li><strong>Letting an internal force "move the system."</strong> Internal forces can rearrange parts but never accelerate the CM.</li>
        </ul>` }
    ],
    equations: [
      { latex: String.raw`x_{\text{cm}} = \frac{\sum_i m_i x_i}{\sum_i m_i}`, note: "Discrete masses; apply separately to each coordinate (x, y, z)." },
      { latex: String.raw`x_{\text{cm}} = \frac{1}{M}\int x\,dm`, note: "Continuous bodies; convert dm using a density, e.g. dm = λ(x) dx for a rod." },
      { latex: String.raw`\vec{v}_{\text{cm}} = \frac{\sum_i m_i \vec{v}_i}{M}`, note: "Velocity of the CM equals total momentum divided by total mass." },
      { latex: String.raw`\vec{F}_{\text{net, ext}} = M\,\vec{a}_{\text{cm}}`, note: "Only external forces accelerate the center of mass; internal forces cancel in third-law pairs." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A $2\,\text{kg}$ mass sits at $x = 0$ and a $6\,\text{kg}$ mass sits at $x = 4\,\text{m}$. Where is the center of mass of the two-mass system?</p>`,
        choices: [ String.raw`$x = 1\,\text{m}$`, String.raw`$x = 2\,\text{m}$`, String.raw`$x = 3\,\text{m}$`, String.raw`$x = 4\,\text{m}$` ],
        answer: 2,
        solution: String.raw`<p>$x_{\text{cm}} = \dfrac{(2)(0) + (6)(4)}{2+6} = \dfrac{24}{8} = 3\,\text{m}$. The CM is a mass-weighted average, so it sits three times closer to the 6 kg mass than to the 2 kg mass — 1 m from the heavy one, 3 m from the light one.</p>` },
      { type: "mcq",
        q: String.raw`<p>A $60\,\text{kg}$ person stands at one end of a $120\,\text{kg}$, $3.0\,\text{m}$-long boat floating on frictionless water, initially at rest. The person walks to the other end of the boat. How far does the <strong>boat</strong> move relative to the water?</p>`,
        choices: [ String.raw`$1.0\,\text{m}$`, String.raw`$1.5\,\text{m}$`, String.raw`$2.0\,\text{m}$`, String.raw`$3.0\,\text{m}$` ],
        answer: 0,
        solution: String.raw`<p>No external horizontal force acts, so the system's CM stays fixed. If the boat moves a distance $d$ backward, the person moves $3.0 - d$ forward relative to the water. Setting the CM displacement to zero: $60(3.0 - d) = 120\,d$, so $180 = 180\,d$ and $d = 1.0\,\text{m}$. Equivalently $d = \dfrac{m_{\text{person}}}{m_{\text{person}}+m_{\text{boat}}}L = \dfrac{60}{180}(3.0\,\text{m}) = 1.0\,\text{m}$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A projectile is launched and would land a horizontal distance $R$ away on level ground. At the very top of its trajectory it explodes into two fragments of equal mass. One fragment drops from rest (relative to the ground) and lands directly below the explosion point, at $R/2$. Where does the other fragment land? (Neglect air resistance.)</p>`,
        choices: [ String.raw`$R$`, String.raw`$\dfrac{5R}{4}$`, String.raw`$\dfrac{3R}{2}$`, String.raw`$2R$` ],
        answer: 2,
        solution: String.raw`<p>The explosion is internal, so the CM continues on the original parabola and lands at $R$. With equal masses landing at the same time, the CM landing point is the average of the two landing points: $\dfrac{\tfrac{R}{2} + x}{2} = R$, giving $x = \dfrac{3R}{2}$.</p>` },
      { type: "frq",
        q: String.raw`<p>A thin rod of length $L$ lies along the $x$-axis from $x = 0$ to $x = L$. Its linear mass density increases with position: $\lambda(x) = \lambda_0\left(1 + \dfrac{x}{L}\right)$, where $\lambda_0$ is a positive constant.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive an expression for the total mass $M$ of the rod in terms of $\lambda_0$ and $L$.</p>`,
            solution: String.raw`<p>$M = \displaystyle\int_0^L \lambda(x)\,dx = \int_0^L \lambda_0\left(1 + \frac{x}{L}\right)dx = \lambda_0\left[x + \frac{x^2}{2L}\right]_0^L = \lambda_0\left(L + \frac{L}{2}\right) = \frac{3\lambda_0 L}{2}.$</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the position of the rod's center of mass.</p>`,
            solution: String.raw`<p>$\displaystyle\int_0^L x\,\lambda(x)\,dx = \int_0^L \lambda_0\left(x + \frac{x^2}{L}\right)dx = \lambda_0\left[\frac{x^2}{2} + \frac{x^3}{3L}\right]_0^L = \lambda_0\left(\frac{L^2}{2} + \frac{L^2}{3}\right) = \frac{5\lambda_0 L^2}{6}.$</p>
            <p>Then $x_{\text{cm}} = \dfrac{1}{M}\displaystyle\int_0^L x\,dm = \dfrac{5\lambda_0 L^2/6}{3\lambda_0 L/2} = \dfrac{5L}{9}.$</p>` },
          { label: "(c)", prompt: String.raw`<p>Without recomputing, explain why your answer to part (b) must be greater than $L/2$, and verify that it reduces correctly in the limit where the density becomes uniform.</p>`,
            solution: String.raw`<p>The density grows with $x$, so more than half the mass lies in the right half of the rod; the mass-weighted average position must therefore exceed $L/2$, and indeed $5L/9 \approx 0.556L > 0.5L$. If instead $\lambda$ were uniform (drop the $x/L$ term), the same integrals give $M = \lambda_0 L$ and $x_{\text{cm}} = \dfrac{\lambda_0 L^2/2}{\lambda_0 L} = \dfrac{L}{2}$, the geometric center, as required.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A person of mass $m$ stands at the left end of a uniform plank of mass $M$ and length $L$. The plank rests on frictionless ice, and the system is initially at rest. The person then walks to the right end of the plank and stops.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Explain why the center of mass of the person–plank system does not move during the walk, even though both the person and the plank move.</p>`,
            solution: String.raw`<p>The ice is frictionless, so the only external forces are gravity and the normal force, both vertical. The net external horizontal force is zero, so $a_{\text{cm},x} = 0$. Since the system starts at rest, $v_{\text{cm},x} = 0$ throughout, and the CM stays at a fixed horizontal position. The forces between the person's feet and the plank are internal third-law pairs and cannot move the system's CM.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the distance the plank slides (relative to the ice) by the time the person reaches the right end.</p>`,
            solution: String.raw`<p>Let the plank slide a distance $d$ to the left. Relative to the plank the person moves $L$ to the right, so relative to the ice the person moves $L - d$ to the right. Zero net CM displacement requires the mass-weighted displacements to cancel: $m(L - d) = M d$. Solving: $mL = (m + M)d$, so $d = \dfrac{mL}{m + M}.$</p>` },
          { label: "(c)", prompt: String.raw`<p>Determine how far the <em>person</em> moves relative to the ice, and check both expressions in the limits $M \gg m$ and $M \ll m$.</p>`,
            solution: String.raw`<p>The person moves $L - d = L - \dfrac{mL}{m+M} = \dfrac{ML}{m + M}$ relative to the ice.</p>
            <p>Limits: if $M \gg m$ (massive plank), $d \to 0$ and the person moves $\approx L$ — the plank acts like solid ground. If $M \ll m$ (massive person), the person barely moves ($ML/(m{+}M) \to 0$) while the plank slides nearly its full length $L$ underneath, like a log rolling back under a heavy walker. Both limits make physical sense.</p>` }
        ] }
    ]
  },

  /* ============================ 2.2 ============================ */
  {
    id: "2.2",
    title: "Forces and Free-Body Diagrams",
    blurb: "Every dynamics problem starts the same way: isolate the object, draw every force on it, and pick smart axes.",
    objectives: [
      "Identify the forces acting on an object and classify them as contact or long-range interactions.",
      "Draw a complete, correct free-body diagram for an object in any mechanical situation.",
      "Resolve forces into components along well-chosen axes and translate an FBD into Newton's-law equations."
    ],
    sections: [
      { heading: "The Core Idea",
        content: String.raw`<p>A <strong>force</strong> is an interaction between two objects — every force has a "from" and an "on." If you cannot name the object exerting a force, the force does not exist (there is no "force of motion" or "force of the throw" still pushing a ball in flight).</p>
        <p>Forces come in two families. <strong>Long-range forces</strong> act without contact; in mechanics that means gravity, $F_g = mg$ near Earth's surface, acting at the center of mass, pointing down. <strong>Contact forces</strong> arise where surfaces or objects touch: the normal force $F_N$ (perpendicular to the surface), friction $F_f$ (parallel to the surface), tension $F_T$ (along a rope, pulling only), spring force, and air drag.</p>
        <div class="callout key">The normal force is a constraint force: it takes whatever value is needed to prevent interpenetration. There is no formula for it — you solve for it from Newton's second law.</div>` },
      { heading: "Building a Free-Body Diagram",
        content: String.raw`<p>A free-body diagram (FBD) shows <em>one</em> object, reduced to a dot, with every force <em>on that object</em> drawn as an arrow starting on the dot. The recipe:</p>
        <ol>
          <li><strong>Isolate the object.</strong> Mentally cut every rope and remove every surface, replacing each with the force it exerts.</li>
          <li><strong>Draw gravity first</strong> ($mg$, straight down), then one contact force for each thing touching the object.</li>
          <li><strong>Do not draw</strong> components alongside the full force, velocity vectors, or forces the object exerts on other things.</li>
          <li><strong>Label with the interaction</strong>: "$F_N$ from incline on block," not just "N."</li>
        </ol>
        <p>On the AP exam, a stray extra arrow (like a phantom "force of motion") loses the FBD point even if everything else is right. Arrows should have roughly correct relative lengths when the problem gives enough information to know them.</p>` },
      { heading: "Interactive: Forces on an Incline",
        sim: "incline",
        simCaption: "Watch the free-body diagram as you raise the incline angle: the normal force shrinks as mg cos θ, the gravity component along the incline grows as mg sin θ, and friction adjusts — until the block must slide.",
        content: String.raw`<p>The incline is the classic testing ground for FBDs. Note that exactly three forces act on the block: gravity, normal, and friction. The "component arrows" $mg\sin\theta$ and $mg\cos\theta$ are not separate forces — they are gravity, rewritten in tilted coordinates.</p>` },
      { heading: "Choosing Axes: Work With the Acceleration, Not Against It",
        content: String.raw`<p>You may point your axes anywhere, but algebra is lightest when <strong>one axis lies along the acceleration</strong>. On an incline, tilt the axes: let $+x$ point down the slope and $+y$ perpendicular to it. Then only gravity needs decomposing:</p>
        $$\Sigma F_x = mg\sin\theta - F_f = ma_x, \qquad \Sigma F_y = F_N - mg\cos\theta = 0$$
        <p>The $y$-equation gives $F_N = mg\cos\theta$ <em>for this geometry</em> — but never memorize "$F_N = mg\cos\theta$" as a law. Add a rope pulling at an angle, or let the incline accelerate, and the normal force changes. Re-derive it every time from $\Sigma F_y = ma_y$.</p>
        <p>A useful check on any decomposition: as $\theta \to 0$ the slope becomes a floor ($F_N \to mg$, no sliding force), and as $\theta \to 90^\circ$ it becomes a wall ($F_N \to 0$, free fall). If your sines and cosines fail these limits, they are swapped.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
          <li><strong>Drawing a "force of motion."</strong> Velocity is not a force. A ball in flight has only gravity (and possibly drag) acting on it.</li>
          <li><strong>Assuming $F_N = mg$ always.</strong> True only for a horizontal surface with no other vertical force components and no vertical acceleration.</li>
          <li><strong>Putting both a force and its components on the FBD.</strong> Choose one representation; on the AP exam, draw whole forces only.</li>
          <li><strong>Drawing forces the object exerts on other things.</strong> An FBD shows only forces <em>on</em> the chosen object.</li>
          <li><strong>Swapping $\sin\theta$ and $\cos\theta$ on inclines.</strong> Check the limits $\theta \to 0$ and $\theta \to 90^\circ$.</li>
        </ul>` }
    ],
    equations: [
      { latex: String.raw`F_g = mg`, note: "Gravitational force near Earth's surface; acts at the center of mass, straight down. g = 9.8 m/s²." },
      { latex: String.raw`\Sigma F_x = ma_x, \quad \Sigma F_y = ma_y`, note: "Newton's second law, applied independently along each axis after resolving forces into components." },
      { latex: String.raw`F_{g,\parallel} = mg\sin\theta, \quad F_{g,\perp} = mg\cos\theta`, note: "Components of gravity along and perpendicular to an incline of angle θ. Check limits: θ → 0 and θ → 90°." },
      { latex: String.raw`F_N = mg\cos\theta`, note: "Normal force on an incline ONLY when nothing else has a perpendicular component. Always re-derive from ΣF⊥ = 0." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A book rests on a horizontal table. The normal force exerted by the table on the book is equal in magnitude to the book's weight. The best justification is:</p>`,
        choices: [
          String.raw`The normal force and the weight form a Newton's third law pair, so they must be equal.`,
          String.raw`The book's acceleration is zero, so Newton's second law requires the net vertical force on it to be zero.`,
          String.raw`The normal force on an object always equals the object's weight.`,
          String.raw`The table is rigid, so it reflects the gravitational force back onto the book.`
        ],
        answer: 1,
        solution: String.raw`<p>Both forces act on the <em>same</em> object (the book), so they cannot be a third-law pair. They balance because the book is in equilibrium: $\Sigma F_y = F_N - mg = ma_y = 0$. Choice (C) is false in general — press down on the book and $F_N > mg$; put the book in a descending, slowing elevator and $F_N > mg$ too.</p>` },
      { type: "mcq",
        q: String.raw`<p>A block slides down a frictionless incline that makes a $30^\circ$ angle with the horizontal. What is the magnitude of the block's acceleration?</p>`,
        choices: [ String.raw`$9.8\,\text{m/s}^2$`, String.raw`$4.9\,\text{m/s}^2$`, String.raw`$8.5\,\text{m/s}^2$`, String.raw`$5.7\,\text{m/s}^2$` ],
        answer: 1,
        solution: String.raw`<p>Along the incline, the only force component is gravity's parallel part: $ma = mg\sin\theta$, so $a = g\sin 30^\circ = (9.8)(0.5) = 4.9\,\text{m/s}^2$. The mass cancels. The distractor $8.5\,\text{m/s}^2$ is $g\cos 30^\circ$ — the classic sine–cosine swap.</p>` },
      { type: "mcq",
        q: String.raw`<p>A $10\,\text{kg}$ lantern hangs from the junction of two ropes: one rope is horizontal and attached to a wall, and the other runs up to the ceiling, making an angle of $30^\circ$ above the horizontal. What is the tension in the angled rope?</p>`,
        choices: [ String.raw`$170\,\text{N}$`, String.raw`$113\,\text{N}$`, String.raw`$196\,\text{N}$`, String.raw`$98\,\text{N}$` ],
        answer: 2,
        solution: String.raw`<p>Only the angled rope has a vertical component, so it alone supports the weight: $T\sin 30^\circ = mg$, giving $T = \dfrac{(10)(9.8)}{0.5} = 196\,\text{N}$. Note $T > mg$: a shallow rope must pull very hard to get enough vertical component. The distractor $170\,\text{N}$ is the horizontal rope's tension, $T\cos 30^\circ$.</p>` },
      { type: "frq",
        q: String.raw`<p>A block of mass $m$ is held at rest on a <em>frictionless</em> incline of angle $\theta$ by a force $\vec{F}$ that is applied <strong>horizontally</strong> (parallel to the ground, pressing the block toward the incline surface).</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Describe the free-body diagram of the block: list each force and its direction.</p>`,
            solution: String.raw`<p>Three forces act on the block: (1) gravity $mg$, straight down; (2) the normal force $F_N$, perpendicular to the incline surface (pointing away from the surface); (3) the applied force $F$, horizontal, directed into the slope. There is no friction. No other arrows belong on the diagram.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the magnitude of $\vec{F}$ required to hold the block in place, in terms of $m$, $g$, and $\theta$.</p>`,
            solution: String.raw`<p>Use incline axes ($x$ along the slope, $y$ perpendicular). Equilibrium along the incline: the component of $F$ up the slope must balance gravity's component down the slope:</p>
            $$F\cos\theta = mg\sin\theta \quad\Rightarrow\quad F = mg\tan\theta.$$
            <p>(The horizontal force makes angle $\theta$ with the incline surface, so its along-incline component is $F\cos\theta$; gravity's is $mg\sin\theta$.)</p>` },
          { label: "(c)", prompt: String.raw`<p>Derive an expression for the normal force on the block, and explain physically why it is larger than $mg\cos\theta$.</p>`,
            solution: String.raw`<p>Perpendicular to the incline: $F_N = mg\cos\theta + F\sin\theta = mg\cos\theta + mg\tan\theta\sin\theta = mg\dfrac{\cos^2\theta + \sin^2\theta}{\cos\theta} = \dfrac{mg}{\cos\theta}.$</p>
            <p>It exceeds $mg\cos\theta$ because the horizontal applied force has a component $F\sin\theta$ pressing the block <em>into</em> the surface, and the surface must push back harder to prevent penetration. The normal force is a constraint force — it grew because the situation demanded it.</p>` },
          { label: "(d)", prompt: String.raw`<p>Evaluate your expressions for $F$ and $F_N$ in the limits $\theta \to 0$ and $\theta \to 90^\circ$, and explain whether each limit is physically reasonable.</p>`,
            solution: String.raw`<p>As $\theta \to 0$: $F = mg\tan\theta \to 0$ and $F_N \to mg$. Reasonable — on a flat floor no horizontal force is needed and the floor supports the full weight. As $\theta \to 90^\circ$: both $F = mg\tan\theta$ and $F_N = mg/\cos\theta$ diverge. Also reasonable — a horizontal force cannot support a block against a vertical wall no matter how hard it pushes, since pushing into a vertical surface produces no upward component. The divergence signals an impossible task.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>Two blocks, of masses $m_1$ and $m_2$, sit side by side in contact on a frictionless horizontal floor. A horizontal force of magnitude $F$ is applied to block 1, pushing the pair to the right (block 1 is behind block 2).</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive an expression for the acceleration of the two-block system.</p>`,
            solution: String.raw`<p>Treat both blocks as one system of mass $m_1 + m_2$. The contact force between them is internal and cancels. The only external horizontal force is $F$:</p>
            $$a = \frac{F}{m_1 + m_2}.$$</p>` },
          { label: "(b)", prompt: String.raw`<p>Draw (describe) the free-body diagram of block 2 alone, and derive an expression for the magnitude of the contact force that block 1 exerts on block 2.</p>`,
            solution: String.raw`<p>Block 2 experiences gravity $m_2 g$ (down), the normal force from the floor (up), and one horizontal force: the contact push $F_{12}$ from block 1. The applied force $F$ does <em>not</em> act on block 2 — it acts on block 1. Horizontally:</p>
            $$F_{12} = m_2 a = \frac{m_2}{m_1 + m_2}\,F.$$</p>` },
          { label: "(c)", prompt: String.raw`<p>Suppose instead the same force $F$ is applied to block 2, pushing the pair to the left. Derive the new contact force magnitude, and explain physically why it differs from your answer in (b).</p>`,
            solution: String.raw`<p>Now block 1 is the front block, and the contact force is the only horizontal force on it: $F_{21}' = m_1 a = \dfrac{m_1}{m_1+m_2}F$.</p>
            <p>The contact force differs because in each case it must push only the <em>front</em> block. The contact interaction transmits exactly the share of $F$ needed to give the front block the common acceleration — a larger front mass demands a larger contact force. The two answers agree only if $m_1 = m_2$, and they sum to $F$ in the sense that each is $F$ minus the force needed to accelerate the pushed block.</p>` }
        ] }
    ]
  },

  /* ============================ 2.3 ============================ */
  {
    id: "2.3",
    title: "Newton's Third Law",
    blurb: "Forces never come alone: every push is met by an equal and opposite push — on the other object.",
    objectives: [
      "Identify Newton's third law force pairs and state the two objects involved in each interaction.",
      "Explain why third-law pair forces never cancel: they act on different objects.",
      "Use the third law with the second law to analyze interacting objects, including collisions and contact problems."
    ],
    sections: [
      { heading: "The Core Idea",
        content: String.raw`<p>Forces are <strong>interactions</strong>. When object A exerts a force on object B, then B simultaneously exerts a force on A that is equal in magnitude and opposite in direction:</p>
        $$\vec{F}_{A \text{ on } B} = -\vec{F}_{B \text{ on } A}$$
        <p>This is exact and universal — true for gravity, normal forces, friction, tension, magnetic forces, everything; true whether the objects are in equilibrium or accelerating wildly; true regardless of the objects' masses or speeds.</p>
        <div class="callout key">The two forces of a third-law pair act on <strong>different objects</strong>. That is why they never cancel: cancellation requires forces on the <em>same</em> object.</div>
        <p>The quickest identification test: a third-law pair is always the same interaction with the names swapped. "Earth pulls apple down" pairs with "apple pulls Earth up." "Table pushes book up" pairs with "book pushes table down." If swapping the names does not produce your candidate force, it is not the pair.</p>` },
      { heading: "Equal Forces, Unequal Consequences",
        content: String.raw`<p>A truck and a small car collide head-on. Which experiences the larger force? Neither — the forces are an interaction pair and are exactly equal at every instant. But the <em>accelerations</em> are wildly different, because acceleration is force divided by mass:</p>
        $$a_{\text{car}} = \frac{F}{m_{\text{car}}} \gg a_{\text{truck}} = \frac{F}{m_{\text{truck}}}$$
        <p>The same logic answers "if the apple pulls Earth as hard as Earth pulls the apple, why doesn't Earth fall up?" It does accelerate toward the apple — by about $10^{-25}\,\text{m/s}^2$, hopelessly unobservable.</p>
        <p>In momentum language: since $\vec{F}_{AB} = -\vec{F}_{BA}$ at every instant, the impulses are equal and opposite, so $\dfrac{d\vec{p}_A}{dt} = -\dfrac{d\vec{p}_B}{dt}$. Interacting objects exchange momentum in equal and opposite amounts — this is exactly why momentum of an isolated system is conserved (Unit 4 will build on this).</p>` },
      { heading: "Interactive: Interaction Forces in a Collision",
        sim: "collision",
        simCaption: "Collide a light cart with a heavy cart. During contact the carts push on each other with equal-magnitude, opposite forces — yet the light cart's velocity changes far more. Try extreme mass ratios.",
        content: String.raw`<p>The collision sim makes the third law visceral: the momentum changes of the two carts are always equal and opposite, no matter how lopsided the masses, because the contact forces (and contact times) are identical for both.</p>` },
      { heading: "How Anything Ever Moves: Propulsion",
        content: String.raw`<p>If every force is matched by an opposite force, how does a horse pull a cart forward? Resolve the classic "paradox" by drawing separate FBDs. The horse pushes <em>backward on the ground</em>; the ground pushes <em>forward on the horse</em> (friction). That forward force acts on the horse–cart system, while the backward partner acts on the Earth — different objects, no cancellation. The system accelerates if the ground's forward push on the horse exceeds the resistive forces on the cart.</p>
        <p>Every form of locomotion works this way: you walk by pushing the ground backward, a rocket pushes exhaust gas backward and the gas pushes the rocket forward (no ground needed), a propeller pushes air backward. <strong>You accelerate by pushing on something else</strong> — the reaction to your push is the external force that moves you.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
          <li><strong>Calling weight and the normal force a third-law pair.</strong> Both act on the same object, and they involve different interactions (Earth–book gravity vs. table–book contact). The pair of "table pushes book up" is "book pushes table down."</li>
          <li><strong>Thinking the larger or faster object exerts the larger force.</strong> Interaction forces are always exactly equal in magnitude.</li>
          <li><strong>"The forces cancel, so nothing can move."</strong> The pair forces act on different objects; each object responds only to forces on itself.</li>
          <li><strong>Believing the third law holds only in equilibrium.</strong> It holds at every instant of any interaction, however violent.</li>
          <li><strong>Forgetting the pair exists.</strong> When a problem asks for the force on the wall, compute the force the wall exerts and flip the direction.</li>
        </ul>` }
    ],
    equations: [
      { latex: String.raw`\vec{F}_{A \text{ on } B} = -\vec{F}_{B \text{ on } A}`, note: "Newton's third law: equal magnitude, opposite direction, acting on different objects. Always exact." },
      { latex: String.raw`\frac{d\vec{p}_A}{dt} = -\frac{d\vec{p}_B}{dt}`, note: "Third-law pairs transfer momentum in equal and opposite amounts at every instant." },
      { latex: String.raw`a_A = \frac{F}{m_A}, \quad a_B = \frac{F}{m_B}`, note: "Same interaction force magnitude F, but accelerations are inversely proportional to the masses." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>Earth pulls on a falling apple with a gravitational force of magnitude $F$. The gravitational force the apple exerts on Earth is:</p>`,
        choices: [
          String.raw`zero, because the apple is too small to pull on a planet`,
          String.raw`much smaller than $F$, in proportion to the apple's mass`,
          String.raw`exactly equal in magnitude to $F$, directed from Earth toward the apple`,
          String.raw`equal to $F$ only after the apple lands and reaches equilibrium`
        ],
        answer: 2,
        solution: String.raw`<p>Gravity is a single interaction between Earth and the apple, so the two forces form a third-law pair: exactly equal magnitudes, opposite directions, at every instant — equilibrium is irrelevant. Earth's response is tiny only because its <em>acceleration</em> $a = F/M_E$ is tiny, not because the force is.</p>` },
      { type: "mcq",
        q: String.raw`<p>A large truck collides head-on with a small car. During the collision, which statement is correct?</p>`,
        choices: [
          String.raw`The truck exerts a larger force on the car than the car exerts on the truck.`,
          String.raw`The car exerts a larger force on the truck because it undergoes the larger velocity change.`,
          String.raw`The forces are equal in magnitude, and the car experiences the larger acceleration.`,
          String.raw`The forces are equal in magnitude, and the accelerations are also equal.`
        ],
        answer: 2,
        solution: String.raw`<p>The contact forces form a third-law pair, so they are equal in magnitude at every instant — regardless of mass or speed. The consequences differ because $a = F/m$: the small car, with less mass, gets the larger acceleration and the larger velocity change. That asymmetry comes from the second law, not from unequal forces.</p>` },
      { type: "mcq",
        q: String.raw`<p>A book rests on a table. The table exerts an upward normal force $\vec{F}_N$ on the book. Which force is the Newton's third law partner of $\vec{F}_N$?</p>`,
        choices: [
          String.raw`The gravitational force of Earth on the book`,
          String.raw`The gravitational force of the book on Earth`,
          String.raw`The normal force of the floor on the table`,
          String.raw`The downward contact force the book exerts on the table`
        ],
        answer: 3,
        solution: String.raw`<p>Swap the names in the same interaction: "table pushes book up" pairs with "book pushes table down" — same contact interaction, objects exchanged. Choice (A) is the classic trap: weight acts on the same object (the book) and belongs to a different interaction (gravity, with Earth), so it cannot be the partner even though it happens to have equal magnitude here.</p>` },
      { type: "frq",
        q: String.raw`<p>Two carts on a frictionless horizontal track, of masses $m_1$ and $m_2$ with $m_2 > m_1$, are held together with a compressed massless spring between them. The system is initially at rest. The carts are released, the spring expands, and the carts separate, moving in opposite directions with final speeds $v_1$ and $v_2$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using Newton's third law, explain why the carts' momenta have equal magnitudes at every instant during the push-off.</p>`,
            solution: String.raw`<p>While the spring acts, it pushes the carts with forces of equal magnitude and opposite direction (the spring is massless, so it transmits a third-law-style equal pair to the two carts). Then $\dfrac{dp_1}{dt} = -\dfrac{dp_2}{dt}$ at every instant. Integrating from rest, $p_1(t) = -p_2(t)$ throughout: equal magnitudes, opposite directions. No external horizontal force acts, so nothing disturbs this balance.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the ratio of the final speeds $v_1/v_2$ in terms of the masses.</p>`,
            solution: String.raw`<p>Equal momentum magnitudes: $m_1 v_1 = m_2 v_2$, so</p>
            $$\frac{v_1}{v_2} = \frac{m_2}{m_1} > 1.$$
            <p>The lighter cart leaves faster, in inverse proportion to the masses.</p>` },
          { label: "(c)", prompt: String.raw`<p>Derive an expression for the ratio of the carts' final kinetic energies, $K_1/K_2$, and state which cart carries more of the spring's released energy. Justify your answer.</p>`,
            solution: String.raw`<p>$\dfrac{K_1}{K_2} = \dfrac{\tfrac{1}{2}m_1 v_1^2}{\tfrac{1}{2}m_2 v_2^2} = \dfrac{m_1}{m_2}\left(\dfrac{m_2}{m_1}\right)^2 = \dfrac{m_2}{m_1} > 1.$</p>
            <p>The <em>lighter</em> cart carries more kinetic energy. Equivalently, $K = \dfrac{p^2}{2m}$ with equal $|p|$ for both carts, so the smaller mass gets the larger $K$. The spring does more work on the lighter cart because that cart moves farther while the (equal) spring forces act.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>Block 1 (mass $m_1$) and block 2 (mass $m_2$) rest on a frictionless horizontal surface, connected by a light, inextensible rope. A horizontal force of magnitude $F$ is applied to block 1, dragging both blocks to the right (the rope trails behind block 1 and pulls block 2).</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive an expression for the acceleration of the system.</p>`,
            solution: String.raw`<p>The rope is internal to the two-block system, so its forces cancel in third-law pairs. The only external horizontal force is $F$:</p>
            $$a = \frac{F}{m_1 + m_2}.$$</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the tension in the rope, and explain — using Newton's third law — why the tension must be less than $F$.</p>`,
            solution: String.raw`<p>Apply the second law to block 2 alone; the rope's pull is the only horizontal force on it:</p>
            $$T = m_2 a = \frac{m_2}{m_1 + m_2}\,F < F.$$
            <p>Why less? Check block 1: it feels $F$ forward and the rope's third-law reaction $T$ <em>backward</em> (block 2 pulls back on the rope, the rope pulls back on block 1). For block 1 to accelerate forward we need $F - T = m_1 a > 0$, forcing $T < F$. The rope transmits only the share of $F$ that block 2 needs.</p>` },
          { label: "(c)", prompt: String.raw`<p>Identify the Newton's third law partner of the force the rope exerts on block 2, and the third-law partner of the normal force the surface exerts on block 1.</p>`,
            solution: String.raw`<p>The rope pulls block 2 forward; the partner is <strong>block 2 pulling backward on the rope</strong> with equal magnitude (same rope–block interaction, names swapped). The surface pushes up on block 1 with the normal force; the partner is <strong>block 1 pushing down on the surface</strong> with equal magnitude. Note that block 1's weight (Earth's pull on block 1) is <em>not</em> the partner of the normal force — its partner is block 1's gravitational pull on Earth.</p>` },
          { label: "(d)", prompt: String.raw`<p>If the rope were replaced by one of non-negligible mass $m_r$, would the force the rope exerts on block 2 still equal the force block 1 exerts on the rope? Justify your answer using Newton's second law.</p>`,
            solution: String.raw`<p>No. Applying the second law to the rope itself: $F_{\text{1 on rope}} - F_{\text{2 on rope}} = m_r a$. Since the rope accelerates and now has mass, the force at its front end must exceed the force at its back end by $m_r a$. The tension varies along a massive accelerating rope. (Each individual third-law pair is still exactly equal — what changes is that the two <em>ends</em> of the rope are different interactions.) Only in the massless limit $m_r \to 0$ is tension uniform.</p>` }
        ] }
    ]
  },

  /* ============================ 2.4 ============================ */
  {
    id: "2.4",
    title: "Newton's First Law",
    blurb: "Objects don't need a force to keep moving — they need one to change how they move.",
    objectives: [
      "State Newton's first law and use inertia to predict motion when the net force is zero.",
      "Recognize translational equilibrium as ΣF = 0 and connect it to constant-velocity motion graphs.",
      "Apply the equilibrium conditions ΣF_x = 0 and ΣF_y = 0 to solve for unknown forces."
    ],
    sections: [
      { heading: "The Core Idea",
        content: String.raw`<p>Newton's first law: <strong>an object's velocity is constant — in magnitude and direction — unless a net external force acts on it.</strong> Rest is just the special case $v = 0$. The property of resisting changes in velocity is <strong>inertia</strong>, and mass is its measure.</p>
        <p>This overturns the everyday intuition (Aristotle's) that motion requires a sustained push. Your coffee cup slides to a stop because friction acts on it, not because motion "runs out." Remove the friction — a puck on smooth ice, a probe in deep space — and motion continues forever, no engine needed.</p>
        <p>The first law also defines where the second law is valid: in <em>inertial reference frames</em>, frames moving at constant velocity. Inside an accelerating car, objects seem to lurch with no force acting; that frame is non-inertial, and Newton's laws in their simple form do not apply there.</p>
        <div class="callout">Constant velocity and rest are dynamically identical: both mean $\Sigma \vec{F} = 0$. The exam loves this equivalence.</div>` },
      { heading: "Reading Equilibrium from Graphs",
        graph: { xLabel: "t (s)", yLabel: "x (m)  and  v (m/s)", xMin: 0, xMax: 5, yMin: 0, yMax: 12,
                 fns: [ { expr: "2*x", label: "x(t) = 2t  (straight line, constant slope)", color: "#fbbf24" },
                        { expr: "2", label: "v(t) = 2  (horizontal line)", color: "#34d399" } ] },
        graphCaption: "Zero net force in graph form: x(t) is a straight line, v(t) is flat, and a(t) (not shown) is identically zero.",
        content: String.raw`<p>The kinematic signature of $\Sigma \vec{F} = 0$ is unmistakable: position changes <em>linearly</em> with time ($x(t) = x_0 + vt$, constant slope) and velocity is a horizontal line. Whenever a problem says "constant speed in a straight line," "moves at steady velocity," or shows you a straight $x(t)$ graph, translate it immediately to $\Sigma F_x = 0$ and $\Sigma F_y = 0$ — that is usually the whole key to the problem.</p>
        <p>Conversely, any bend in $x(t)$ or slope in $v(t)$ announces a net force. The graphs are a force detector.</p>` },
      { heading: "Equilibrium Problems: ΣF = 0 Component by Component",
        content: String.raw`<p>Translational equilibrium means the forces sum to zero <em>as vectors</em>, which in practice means two scalar equations:</p>
        $$\Sigma F_x = 0 \qquad \text{and} \qquad \Sigma F_y = 0$$
        <p><strong>Worked example:</strong> a sign of mass $m$ hangs from two cables, each making angle $\theta$ above the horizontal. By symmetry the tensions are equal ($T$). Vertically: $2T\sin\theta - mg = 0$, so</p>
        $$T = \frac{mg}{2\sin\theta}$$
        <p>Notice what happens as the cables are pulled taut and horizontal: $\theta \to 0$ makes $T \to \infty$. You can never hang a mass from a perfectly horizontal cable — some sag is mandatory, because the cable needs a vertical component to fight gravity. This single limiting case has powered many AP questions.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
          <li><strong>"Moving means there's a net force in the direction of motion."</strong> No — constant velocity means zero net force. Force relates to <em>change</em> in velocity.</li>
          <li><strong>Treating rest as special.</strong> An object at rest and one cruising at constant 30 m/s are in identical dynamical states: $\Sigma F = 0$.</li>
          <li><strong>Thinking equilibrium means no forces act.</strong> Plenty of forces can act — they just sum to zero as vectors.</li>
          <li><strong>Believing an object in equilibrium must be at rest.</strong> Equilibrium fixes acceleration at zero, not velocity.</li>
          <li><strong>Applying Newton's laws inside an accelerating frame.</strong> The "force" throwing you sideways in a turning car is your inertia viewed from a non-inertial frame, not a real interaction.</li>
        </ul>` }
    ],
    equations: [
      { latex: String.raw`\Sigma \vec{F} = 0 \;\Longleftrightarrow\; \vec{a} = 0 \;\Longleftrightarrow\; \vec{v} = \text{constant}`, note: "The three equivalent statements of translational equilibrium." },
      { latex: String.raw`\Sigma F_x = 0, \quad \Sigma F_y = 0`, note: "Equilibrium must hold along each axis independently." },
      { latex: String.raw`x(t) = x_0 + v t`, note: "Kinematic signature of zero net force: linear position, constant velocity." },
      { latex: String.raw`T = \frac{mg}{2\sin\theta}`, note: "Tension in each of two symmetric cables at angle θ above horizontal supporting weight mg; diverges as θ → 0." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A hockey puck slides across frictionless ice at constant velocity. The net force on the puck is:</p>`,
        choices: [
          String.raw`directed forward, in the direction of motion`,
          String.raw`zero`,
          String.raw`directed backward, gradually slowing the puck`,
          String.raw`equal to the puck's weight, directed forward`
        ],
        answer: 1,
        solution: String.raw`<p>Constant velocity means zero acceleration, so by Newton's second law the net force is zero (gravity and the normal force cancel; nothing acts horizontally). No forward force is needed to maintain motion — that is precisely the content of Newton's first law.</p>` },
      { type: "mcq",
        q: String.raw`<p>A block hangs at rest from two cables that each make an angle $\theta$ above the horizontal. If the cables are re-rigged so that $\theta$ becomes <strong>smaller</strong> (the cables more nearly horizontal), the tension in each cable:</p>`,
        choices: [
          String.raw`decreases, because the cables are shorter`,
          String.raw`stays the same, because the weight has not changed`,
          String.raw`increases, because each cable's vertical component must still support half the weight`,
          String.raw`decreases, because the horizontal components begin to support the weight`
        ],
        answer: 2,
        solution: String.raw`<p>Vertical equilibrium gives $2T\sin\theta = mg$, so $T = \dfrac{mg}{2\sin\theta}$. Shrinking $\theta$ shrinks $\sin\theta$, so $T$ must grow to keep the vertical components equal to the weight. Horizontal components can never help support a vertical load — they only fight each other.</p>` },
      { type: "mcq",
        q: String.raw`<p>A ball attached to a string travels in a horizontal circle on a frictionless table. At the instant the ball is at point $P$, the string suddenly breaks. Viewed from above, the ball subsequently:</p>`,
        choices: [
          String.raw`moves in a straight line along the tangent to the circle at $P$`,
          String.raw`moves radially outward, directly away from the center`,
          String.raw`spirals outward, gradually straightening`,
          String.raw`continues along the circle, slowing down`
        ],
        answer: 0,
        solution: String.raw`<p>With the string gone, no horizontal force acts, so Newton's first law takes over: the ball keeps the velocity it had at the moment of release — which is tangent to the circle at $P$ — and moves in a straight line at constant speed. "Flying outward" is the non-inertial-frame illusion; no outward force ever existed.</p>` },
      { type: "frq",
        q: String.raw`<p>A traffic light of mass $m$ hangs at rest from two cables attached to poles on either side of the road. Each cable makes an angle $\theta$ above the horizontal, and the geometry is symmetric.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Describe the free-body diagram of the traffic light, and write the equilibrium equations along both axes.</p>`,
            solution: String.raw`<p>Three forces act on the light: gravity $mg$ straight down, and the two cable tensions $T_1$ and $T_2$, each directed along its cable, at angle $\theta$ above horizontal on opposite sides. Equilibrium:</p>
            $$\Sigma F_x = T_2\cos\theta - T_1\cos\theta = 0 \qquad \Sigma F_y = T_1\sin\theta + T_2\sin\theta - mg = 0$$
            <p>The $x$-equation immediately gives $T_1 = T_2 \equiv T$, as symmetry suggests.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the tension in each cable in terms of $m$, $g$, and $\theta$.</p>`,
            solution: String.raw`<p>With $T_1 = T_2 = T$, the vertical equation becomes $2T\sin\theta = mg$, so</p>
            $$T = \frac{mg}{2\sin\theta}.$$</p>` },
          { label: "(c)", prompt: String.raw`<p>A city engineer proposes pulling the cables perfectly taut so they are exactly horizontal. Using your expression from (b), explain why this is physically impossible.</p>`,
            solution: String.raw`<p>As $\theta \to 0$, $\sin\theta \to 0$ and $T = \dfrac{mg}{2\sin\theta} \to \infty$. A horizontal cable has zero vertical force component, so no finite tension — however enormous — can supply the upward force needed to balance the light's weight. Every real suspended cable must sag at least slightly; the flatter the cable, the more brutal the tension. Any real cable pulled toward horizontal would snap first.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A worker drags a crate of mass $m$ across a rough horizontal floor at <strong>constant velocity</strong> by pulling on a rope that makes an angle $\theta$ above the horizontal. The coefficient of kinetic friction between crate and floor is $\mu_k$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Explain what the phrase "constant velocity" tells you about the forces on the crate, and write the resulting component equations. (Use $F$ for the rope force and note that kinetic friction has magnitude $\mu_k F_N$.)</p>`,
            solution: String.raw`<p>Constant velocity means zero acceleration, so the crate is in translational equilibrium even though it is moving: $\Sigma F_x = 0$ and $\Sigma F_y = 0$. Four forces act: gravity $mg$ down, normal force $F_N$ up, rope force $F$ at angle $\theta$, and kinetic friction $\mu_k F_N$ opposing the motion.</p>
            $$x:\; F\cos\theta - \mu_k F_N = 0 \qquad y:\; F_N + F\sin\theta - mg = 0$$</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive an expression for the required rope force $F$ in terms of $m$, $g$, $\mu_k$, and $\theta$.</p>`,
            solution: String.raw`<p>From the $y$-equation, $F_N = mg - F\sin\theta$ — note the rope's upward component <em>reduces</em> the normal force. Substitute into the $x$-equation:</p>
            $$F\cos\theta = \mu_k (mg - F\sin\theta)$$
            $$F(\cos\theta + \mu_k \sin\theta) = \mu_k mg \quad\Rightarrow\quad F = \frac{\mu_k mg}{\cos\theta + \mu_k\sin\theta}.$$</p>` },
          { label: "(c)", prompt: String.raw`<p>Evaluate your expression in the limit $\theta = 0$ and interpret the result. Then explain qualitatively why pulling at a small upward angle can require <em>less</em> force than pulling horizontally.</p>`,
            solution: String.raw`<p>At $\theta = 0$: $F = \mu_k mg$, exactly the force needed to balance friction when the full weight presses on the floor — the expected flat-pull result.</p>
            <p>Pulling slightly upward sacrifices a little horizontal pull ($\cos\theta$ barely drops below 1 for small angles) but lifts some weight off the floor, cutting $F_N$ and therefore friction roughly in proportion to $\mu_k\sin\theta$. For small $\theta$ the friction savings beat the horizontal-component loss, so the denominator $\cos\theta + \mu_k\sin\theta$ grows and $F$ shrinks. (Calculus aside: $F$ is minimized when $\tan\theta = \mu_k$.)</p>` }
        ] }
    ]
  },

  /* ============================ 2.5 ============================ */
  {
    id: "2.5",
    title: "Newton's Second Law",
    blurb: "The engine of mechanics: F = dp/dt links what pushes on an object to how its motion changes.",
    objectives: [
      "State Newton's second law in its general form F = dp/dt and its constant-mass form F = ma.",
      "Apply the second law in component form to single objects with multiple forces.",
      "Analyze systems of connected objects (Atwood machines, pulleys, ropes) using both whole-system and single-object equations."
    ],
    sections: [
      { heading: "The Core Idea: F = dp/dt",
        content: String.raw`<p>Newton actually wrote his second law in terms of momentum $\vec{p} = m\vec{v}$:</p>
        $$\Sigma\vec{F} = \frac{d\vec{p}}{dt}$$
        <p>The net force on a system equals the rate of change of its momentum. When the mass is constant — true for almost everything in this course — the product rule collapses it to the familiar form:</p>
        $$\Sigma\vec{F} = \frac{d(m\vec{v})}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a}$$
        <p>Three things to internalize. First, it is a <em>vector</em> equation: it holds component by component. Second, $\Sigma\vec{F}$ means the <em>net</em> force — add every force first, then equate to $ma$. Third, the acceleration responds <em>instantaneously</em> to the net force: the moment the net force changes, so does $a$, while velocity and position take time to respond.</p>
        <div class="callout key">$F = dp/dt$ is the more fundamental statement; it survives even when mass changes (rockets, raindrops gathering mist) and it is the form the AP exam expects you to quote when asked.</div>` },
      { heading: "The Standard Procedure",
        content: String.raw`<p>Every second-law problem yields to the same five steps:</p>
        <ol>
          <li><strong>Choose the object</strong> (or system) and draw its free-body diagram.</li>
          <li><strong>Choose axes</strong>, ideally with one axis along the acceleration.</li>
          <li><strong>Write $\Sigma F_x = ma_x$ and $\Sigma F_y = ma_y$</strong>, decomposing forces as needed.</li>
          <li><strong>Solve</strong> the algebra, keeping everything symbolic until the end.</li>
          <li><strong>Check</strong> units, signs, and limiting cases.</li>
        </ol>
        <p>For a block sliding down a frictionless incline: along the slope, $mg\sin\theta = ma$ gives $a = g\sin\theta$; perpendicular, $F_N = mg\cos\theta$. The mass cancels from the acceleration — a recurring theme whenever gravity is the driving force.</p>` },
      { heading: "Interactive: Second Law on an Incline",
        sim: "incline",
        simCaption: "Increase the angle and watch the acceleration readout track g sin θ (frictionless) — and see how friction shifts the threshold and reduces a once the block slides.",
        content: String.raw`<p>Use the sim to verify the limiting cases of $a = g\sin\theta$: zero acceleration on a flat surface, free fall at $90^\circ$. Then add friction and confirm that the block accelerates only when $mg\sin\theta$ exceeds the maximum static friction.</p>` },
      { heading: "Systems of Connected Objects",
        content: String.raw`<p>When objects are linked by ropes and pulleys, you have two complementary tools:</p>
        <ul>
          <li><strong>Whole-system view:</strong> if everything shares one acceleration magnitude $a$, then (net external driving force) $= (\text{total mass})\,a$. Internal tensions cancel. Fastest way to get $a$.</li>
          <li><strong>Single-object view:</strong> apply $\Sigma F = ma$ to one object alone to expose internal forces like tension. Required whenever the question asks for $T$.</li>
        </ul>
        <p><strong>Atwood machine</strong> ($m_2 > m_1$ hanging over an ideal pulley): the driving force is the weight difference, the inertia is the total mass:</p>
        $$a = \frac{(m_2 - m_1)g}{m_1 + m_2}, \qquad T = \frac{2m_1 m_2}{m_1 + m_2}g$$
        <p>Check: equal masses give $a = 0$, $T = mg$; let $m_2 \gg m_1$ and $a \to g$ with $T \to 2m_1 g$. The tension always lies <em>between</em> the two weights — it must, to pull the light mass up and let the heavy one sink.</p>` },
      { heading: "When the Force Depends on Time: Bring Calculus",
        content: String.raw`<p>If $F$ is not constant, the kinematics formulas die, but the second law lives on as a differential equation. Given $F(t)$ on mass $m$ starting from rest:</p>
        $$a(t) = \frac{F(t)}{m}, \qquad v(t) = \int_0^t \frac{F(t')}{m}\,dt', \qquad x(t) = \int_0^t v(t')\,dt'$$
        <p>Example: $F(t) = kt$ on mass $m$ from rest gives $v(t) = \dfrac{kt^2}{2m}$ and $x(t) = \dfrac{kt^3}{6m}$. The integral of force over time is the impulse — exactly the change in momentum, by $F = dp/dt$. Velocity-dependent forces (drag) produce richer differential equations; Topic 2.9 solves them in full.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
          <li><strong>Setting a single force equal to $ma$.</strong> Only the <em>net</em> force equals $ma$. Sum first.</li>
          <li><strong>Assuming tension equals the weight of the hanging mass.</strong> In an Atwood machine the hanging mass accelerates, so $T \ne m_2 g$; if it did equal it, nothing would accelerate.</li>
          <li><strong>Assuming the same rope has different tensions at its two ends.</strong> For a massless rope over a massless, frictionless pulley, tension is uniform.</li>
          <li><strong>Mixing sign conventions between connected objects.</strong> Choose a consistent positive direction along the rope (e.g., "the direction the system moves") before writing equations.</li>
          <li><strong>Using constant-acceleration kinematics when $F$ varies.</strong> If $F$ depends on $t$, $x$, or $v$, you must integrate.</li>
        </ul>` }
    ],
    equations: [
      { latex: String.raw`\Sigma\vec{F} = \frac{d\vec{p}}{dt}`, note: "The fundamental form; valid even when mass changes." },
      { latex: String.raw`\Sigma\vec{F} = m\vec{a}`, note: "Constant-mass form; apply component by component." },
      { latex: String.raw`a = \frac{(m_2 - m_1)g}{m_1 + m_2}`, note: "Atwood machine: weight difference drives, total mass resists. Check m₁ = m₂ and m₂ ≫ m₁ limits." },
      { latex: String.raw`T = \frac{2m_1 m_2}{m_1 + m_2}g`, note: "Atwood tension; always between m₁g and m₂g." },
      { latex: String.raw`v(t) = v_0 + \int_0^t \frac{F(t')}{m}dt'`, note: "Velocity from a time-dependent force — kinematics equations do not apply unless F is constant." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A net force of $12\,\text{N}$ acts on a $3.0\,\text{kg}$ object. The magnitude of the object's acceleration is:</p>`,
        choices: [ String.raw`$36\,\text{m/s}^2$`, String.raw`$0.25\,\text{m/s}^2$`, String.raw`$4.0\,\text{m/s}^2$`, String.raw`$9.8\,\text{m/s}^2$` ],
        answer: 2,
        solution: String.raw`<p>$a = \dfrac{\Sigma F}{m} = \dfrac{12}{3.0} = 4.0\,\text{m/s}^2$. The distractor $36$ multiplies instead of divides; $0.25$ inverts the ratio; $9.8$ is a reflex, not a calculation.</p>` },
      { type: "mcq",
        q: String.raw`<p>An Atwood machine has $m_1 = 3.0\,\text{kg}$ and $m_2 = 5.0\,\text{kg}$ hanging from an ideal pulley. The magnitude of the system's acceleration is:</p>`,
        choices: [ String.raw`$g$`, String.raw`$\dfrac{g}{4}$`, String.raw`$\dfrac{5g}{8}$`, String.raw`$\dfrac{g}{2}$` ],
        answer: 1,
        solution: String.raw`<p>$a = \dfrac{(m_2 - m_1)g}{m_1 + m_2} = \dfrac{(5-3)g}{8} = \dfrac{g}{4} \approx 2.45\,\text{m/s}^2$. The net driving force is the 2 kg weight <em>difference</em>, but it must accelerate all 8 kg of the system. The distractor $5g/8$ uses only $m_2$'s weight as the driver — forgetting that $m_1$'s weight fights back.</p>` },
      { type: "mcq",
        q: String.raw`<p>Starting from rest at $t = 0$, an object of mass $m$ experiences a net force $F(t) = kt$, where $k$ is a positive constant. What is the object's speed at time $T$?</p>`,
        choices: [ String.raw`$\dfrac{kT}{m}$`, String.raw`$\dfrac{kT^2}{m}$`, String.raw`$\dfrac{kT^2}{2m}$`, String.raw`$\dfrac{2kT^2}{m}$` ],
        answer: 2,
        solution: String.raw`<p>The force varies, so integrate: $v(T) = \displaystyle\int_0^T \frac{F(t)}{m}dt = \frac{1}{m}\int_0^T kt\,dt = \frac{kT^2}{2m}$. Equivalently, the impulse is the area of a triangle, $\tfrac{1}{2}(kT)(T)$, divided by $m$. Choice (A) wrongly treats $F(T)$ as if it had acted the whole time; (B) forgets the factor of $\tfrac{1}{2}$ from the integral.</p>` },
      { type: "frq",
        q: String.raw`<p>A block of mass $m_1$ rests on a frictionless horizontal table. A light string runs from the block over an ideal (massless, frictionless) pulley at the table's edge and down to a hanging block of mass $m_2$. The system is released from rest.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Draw (describe) the free-body diagram for each block, and write Newton's second law for each along its direction of motion.</p>`,
            solution: String.raw`<p>Block 1 (on table): gravity $m_1 g$ down, normal $F_N$ up, tension $T$ horizontal toward the pulley. Block 2 (hanging): gravity $m_2 g$ down, tension $T$ up. Taking the direction of motion (block 1 toward the pulley, block 2 downward) as positive, and noting the inextensible string makes both accelerations equal in magnitude $a$:</p>
            $$\text{Block 1: } T = m_1 a \qquad\qquad \text{Block 2: } m_2 g - T = m_2 a$$</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive expressions for the acceleration of the system and the tension in the string.</p>`,
            solution: String.raw`<p>Add the two equations — the tensions cancel:</p>
            $$m_2 g = (m_1 + m_2)a \quad\Rightarrow\quad a = \frac{m_2}{m_1 + m_2}\,g$$
            <p>Then from block 1's equation:</p>
            $$T = m_1 a = \frac{m_1 m_2}{m_1 + m_2}\,g.$$</p>` },
          { label: "(c)", prompt: String.raw`<p>Show that your expressions behave correctly in the limits $m_1 \to 0$ and $m_1 \gg m_2$, and explain the physics of each limit.</p>`,
            solution: String.raw`<p>$m_1 \to 0$: $a \to g$ and $T \to 0$. With nothing to drag, the hanging block free-falls and the string goes slack-taut with vanishing tension. $m_1 \gg m_2$: $a \to \dfrac{m_2}{m_1}g \to 0$ and $T \to m_2 g$. The enormous table block barely budges, so the hanging block hangs in near-equilibrium and the string supports essentially its full weight. Both limits confirm the algebra.</p>` },
          { label: "(d)", prompt: String.raw`<p>A student claims the tension should equal $m_2 g$ because "the string holds up the hanging block." Identify the flaw in this reasoning.</p>`,
            solution: String.raw`<p>If $T$ equaled $m_2 g$, the hanging block would have zero net force and could not accelerate — but it does accelerate downward. Newton's second law for block 2 requires $m_2 g - T = m_2 a > 0$, so $T < m_2 g$ whenever the system speeds up. The string does not "hold up" the block; it merely reduces the block's downward acceleration below $g$.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A cart of mass $m$ on a frictionless horizontal track starts from rest at $t = 0$. A motor applies a horizontal force that decreases linearly with time: $F(t) = F_0\left(1 - \dfrac{t}{T}\right)$ for $0 \le t \le T$, after which the force is zero.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive an expression for the cart's velocity $v(t)$ for $0 \le t \le T$.</p>`,
            solution: String.raw`<p>$a(t) = \dfrac{F(t)}{m} = \dfrac{F_0}{m}\left(1 - \dfrac{t}{T}\right)$. Integrate from rest:</p>
            $$v(t) = \int_0^t \frac{F_0}{m}\left(1 - \frac{t'}{T}\right)dt' = \frac{F_0}{m}\left(t - \frac{t^2}{2T}\right).$$</p>` },
          { label: "(b)", prompt: String.raw`<p>Determine the cart's speed at $t = T$, and verify it using the impulse–momentum theorem.</p>`,
            solution: String.raw`<p>$v(T) = \dfrac{F_0}{m}\left(T - \dfrac{T}{2}\right) = \dfrac{F_0 T}{2m}.$</p>
            <p>Check via impulse: the $F$–$t$ graph is a triangle of base $T$ and height $F_0$, so $J = \tfrac{1}{2}F_0 T = \Delta p = m\,v(T)$, giving $v(T) = \dfrac{F_0 T}{2m}$. ✓ The two methods agree because $J = \int F\,dt$ is just $F = dp/dt$ integrated.</p>` },
          { label: "(c)", prompt: String.raw`<p>Derive an expression for the distance the cart travels between $t = 0$ and $t = T$.</p>`,
            solution: String.raw`<p>$x(T) = \displaystyle\int_0^T v(t)\,dt = \frac{F_0}{m}\int_0^T \left(t - \frac{t^2}{2T}\right)dt = \frac{F_0}{m}\left(\frac{T^2}{2} - \frac{T^3}{6T}\right) = \frac{F_0}{m}\left(\frac{T^2}{2} - \frac{T^2}{6}\right) = \frac{F_0 T^2}{3m}.$</p>` },
          { label: "(d)", prompt: String.raw`<p>Describe the cart's motion for $t > T$. Justify your answer with an appropriate physical law.</p>`,
            solution: String.raw`<p>For $t > T$ the net force is zero (frictionless track, motor off), so by Newton's first law the cart continues at constant velocity $v = \dfrac{F_0 T}{2m}$ in a straight line indefinitely. Its position grows linearly: $x(t) = \dfrac{F_0 T^2}{3m} + \dfrac{F_0 T}{2m}(t - T)$.</p>` }
        ] }
    ]
  },
  /* ============================ 2.6 ============================ */
  {
    id: "2.6",
    title: "Gravitational Force",
    blurb: "From mg near the ground to Newton's universal law — one force, every scale.",
    objectives: [
      "Apply Newton's law of universal gravitation to point masses and spheres.",
      "Relate the local gravitational field g to GM/r² and predict how it varies with altitude and with depth inside a planet.",
      "Distinguish gravitational mass from inertial mass and state the experimental result that they are equivalent.",
      "Calculate apparent weight in accelerating reference frames."
    ],
    sections: [
      { heading: "The Universal Law",
        content: String.raw`<p>Every pair of masses attracts with a force along the line joining them:</p>
$$F_g = \frac{G m_1 m_2}{r^2}, \qquad G = 6.67\times10^{-11}\ \text{N·m}^2/\text{kg}^2$$
<p>The force is an inverse square: double the separation and the force drops by a factor of four. For spherically symmetric bodies (planets, stars), the shell theorem lets you treat all the mass as concentrated at the center — that is why $r$ is measured <em>center to center</em>, not surface to surface.</p>
<div class="callout key">The two forces in the pair are equal in magnitude even when the masses are wildly different. The Earth pulls on you with the same force you pull on the Earth — Newton's third law has no exceptions.</div>` },
      { heading: "The Gravitational Field g(r)",
        content: String.raw`<p>The <strong>gravitational field</strong> is force per unit mass: $\vec{g} = \vec{F}_g/m$. Outside a spherical planet of mass $M$,</p>
$$g(r) = \frac{GM}{r^2}$$
<p>At Earth's surface this evaluates to $9.8\,\text{m/s}^2$. At one Earth radius of altitude ($r = 2R_E$), $g$ falls to $9.8/4 \approx 2.5\,\text{m/s}^2$ — astronauts in low orbit are emphatically <em>not</em> beyond gravity; they are in free fall.</p>
<p><em>Inside</em> a uniform sphere only the mass closer to the center than you pulls (the outer shell cancels), so $M_{enc} = M r^3/R^3$ and</p>
$$g_{inside}(r) = \frac{G M r}{R^3} \quad\text{— linear in } r.$$
<p>The field is maximal at the surface, falls off as $1/r^2$ outside, and ramps down linearly to zero at the center.</p>` },
      { heading: "Interactive: Orbits Are Falling",
        sim: "orbit",
        simCaption: "Launch the satellite at different fractions of circular speed. Watch the gravitational force vector always point at the star while the velocity vector turns — the satellite perpetually falls around the body it orbits.",
        content: String.raw`<p>Set the launch speed to exactly $1.00\,v_c$ for a circle, slightly less for an ellipse that dips inward, slightly more for an ellipse that swings outward, and past $\sqrt{2}\,v_c \approx 1.41\,v_c$ to escape entirely.</p>` },
      { heading: "Gravitational vs. Inertial Mass, and Apparent Weight",
        content: String.raw`<p>Mass plays two logically separate roles: <strong>gravitational mass</strong> (how strongly gravity pulls on you, $F = m_g g$) and <strong>inertial mass</strong> (how much you resist acceleration, $F = m_i a$). Experimentally $m_g = m_i$ to better than one part in $10^{13}$ — which is exactly why all objects free-fall with the same $a$ regardless of mass: in $m_g g = m_i a$, the masses cancel.</p>
<p><strong>Apparent weight</strong> is the normal force a scale exerts. In an elevator accelerating upward with $a$: $N - mg = ma$, so $N = m(g+a) > mg$ — you read heavier. In free fall $N = 0$: "weightlessness" is just the scale falling with you.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Using surface-to-surface distance:</strong> $r$ in $GMm/r^2$ runs between <em>centers</em>. An altitude of $R_E$ means $r = 2R_E$.</li>
<li><strong>"No gravity in space":</strong> at the ISS altitude $g \approx 8.7\,\text{m/s}^2$, almost 90% of the surface value. Orbiting means falling sideways fast enough to keep missing the ground.</li>
<li><strong>Scaling errors:</strong> if both $M$ and $R$ double, $g = GM/R^2$ <em>halves</em> — track each power separately.</li>
<li><strong>Inside a planet:</strong> the field decreases as you tunnel down, not increases. Only enclosed mass counts.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`F_g = \frac{G m_1 m_2}{r^2}`, note: "Universal gravitation; r is center-to-center. Always attractive." },
      { latex: String.raw`g(r) = \frac{GM}{r^2}`, note: "Field outside a spherical mass; equals 9.8 m/s² at Earth's surface." },
      { latex: String.raw`g_{inside}(r) = \frac{GMr}{R^3}`, note: "Inside a uniform sphere: only enclosed mass pulls; linear in r." },
      { latex: String.raw`N = m(g + a_y)`, note: "Apparent weight in a frame accelerating upward at a_y (negative if downward)." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A planet has twice Earth's mass and twice Earth's radius. The gravitational field at its surface is closest to:</p>`,
        choices: [ String.raw`$4.9\,\text{m/s}^2$`, String.raw`$9.8\,\text{m/s}^2$`, String.raw`$19.6\,\text{m/s}^2$`, String.raw`$2.45\,\text{m/s}^2$` ],
        answer: 0,
        solution: String.raw`<p>$g = GM/R^2 \to G(2M)/(2R)^2 = \tfrac{2}{4}\,GM/R^2 = \tfrac{1}{2}(9.8) = 4.9\,\text{m/s}^2$. Doubling the mass doubles $g$, but doubling the radius cuts it by four.</p>` },
      { type: "mcq",
        q: String.raw`<p>A satellite orbits at an altitude equal to one Earth radius above the surface. The gravitational force on it, compared with its weight on the surface, is:</p>`,
        choices: [ String.raw`one-half as large`, String.raw`one-quarter as large`, String.raw`the same`, String.raw`zero — it is in orbit` ],
        answer: 1,
        solution: String.raw`<p>Center-to-center distance is $r = R_E + R_E = 2R_E$, and $F \propto 1/r^2$ gives a factor of $1/4$. Choice (D) is the classic trap: orbiting objects are fully subject to gravity — that's what holds the orbit.</p>` },
      { type: "mcq",
        q: String.raw`<p>An elevator accelerates downward at $2.0\,\text{m/s}^2$. A $50\,\text{kg}$ student stands on a scale inside. The scale reads:</p>`,
        choices: [ String.raw`$390\,\text{N}$`, String.raw`$490\,\text{N}$`, String.raw`$590\,\text{N}$`, String.raw`$100\,\text{N}$` ],
        answer: 0,
        solution: String.raw`<p>Taking up as positive: $N - mg = m(-2.0)$, so $N = m(g - 2.0) = 50(7.8) = 390\,\text{N}$. Accelerating downward → apparent weight less than $mg = 490\,\text{N}$.</p>` },
      { type: "frq",
        q: String.raw`<p>A uniform spherical planet has mass $M$ and radius $R$. A narrow tunnel is drilled from the surface to the center.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Using the shell theorem, derive an expression for the gravitational field $g(r)$ at a distance $r < R$ from the center.</p>`,
            solution: String.raw`<p>Only the mass enclosed within radius $r$ exerts a net force. For uniform density $\rho = M / \tfrac{4}{3}\pi R^3$, the enclosed mass is $M_{enc} = \rho\,\tfrac{4}{3}\pi r^3 = M\dfrac{r^3}{R^3}$. Then $g(r) = \dfrac{G M_{enc}}{r^2} = \dfrac{GM r}{R^3}$, directed toward the center.</p>` },
          { label: "(b)", prompt: String.raw`<p>Show that an object dropped into the tunnel undergoes simple harmonic motion, and find the period of oscillation in terms of $G$, $M$, and $R$.</p>`,
            solution: String.raw`<p>The force on mass $m$ at position $r$ is $F = -\dfrac{GMm}{R^3}r$ — a linear restoring force of the form $F = -kx$ with effective $k = GMm/R^3$. This is the defining condition for SHM. The angular frequency is $\omega = \sqrt{k/m} = \sqrt{GM/R^3}$, so $T = 2\pi\sqrt{\dfrac{R^3}{GM}}$ — remarkably, the same as the period of a circular orbit skimming the surface.</p>` },
          { label: "(c)", prompt: String.raw`<p>Evaluate the speed of the object as it passes the center, in terms of $G$, $M$, and $R$.</p>`,
            solution: String.raw`<p>For SHM with amplitude $R$, the maximum speed is $v_{max} = \omega A = \sqrt{GM/R^3}\cdot R = \sqrt{GM/R}$. (You can also get this from energy using the interior potential, but the SHM shortcut is cleaner.)</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>Two stars, of masses $M$ and $4M$, are separated by a fixed center-to-center distance $d$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Find the distance from the smaller star $M$ to the point where the net gravitational field is zero.</p>`,
            solution: String.raw`<p>At distance $x$ from $M$ (and $d-x$ from $4M$), set the magnitudes equal: $\dfrac{GM}{x^2} = \dfrac{G(4M)}{(d-x)^2}$. Taking square roots: $\dfrac{1}{x} = \dfrac{2}{d-x}$, so $d - x = 2x$ and $x = d/3$. The null point sits closer to the smaller mass, as it must.</p>` },
          { label: "(b)", prompt: String.raw`<p>A probe of mass $m$ sits exactly at that null point. Is this equilibrium stable along the line joining the stars? Justify your answer physically.</p>`,
            solution: String.raw`<p>No — it is unstable along the line. Displace the probe slightly toward $M$: the $1/x^2$ pull from $M$ grows while the pull from $4M$ shrinks, so the net force points <em>further</em> toward $M$, away from equilibrium. Any displacement along the axis is amplified rather than restored.</p>` }
        ] }
    ]
  },

  /* ============================ 2.7 ============================ */
  {
    id: "2.7",
    title: "Kinetic and Static Friction",
    blurb: "The force with a split personality: glue until it breaks, then drag forever after.",
    objectives: [
      "Distinguish static friction (an inequality, f ≤ μsN) from kinetic friction (an equality, f = μkN).",
      "Determine the magnitude and direction of friction from the rest of the problem, not from a formula reflex.",
      "Analyze blocks on the verge of slipping, stacked blocks, and friction as the centripetal force.",
      "Explain why static friction can do zero work while still enabling motion (walking, rolling)."
    ],
    sections: [
      { heading: "Two Regimes, Two Rules",
        content: String.raw`<p><strong>Static friction</strong> acts when surfaces do not slide relative to each other. It is an <em>adjustable</em> constraint force: it takes whatever value is needed to prevent slipping, up to a ceiling,</p>
$$f_s \le \mu_s N.$$
<p>Push a refrigerator gently and friction matches your push exactly; the formula $\mu_s N$ tells you only the breaking point. <strong>Kinetic friction</strong> acts during sliding and has a definite value,</p>
$$f_k = \mu_k N, \qquad \mu_k < \mu_s,$$
<p>directed opposite the <em>relative sliding</em> of the surfaces. Because $\mu_k < \mu_s$, the instant an object breaks loose, the friction force drops — which is why a stuck box lurches forward.</p>
<div class="callout warn">$f = \mu N$ uses the <em>normal force</em>, not $mg$. On an incline, or with a hand pressing down, or in an accelerating elevator, $N \ne mg$. Solve for $N$ first, always.</div>` },
      { heading: "Interactive: Breaking Loose",
        sim: "frictionBlock",
        simCaption: "Slowly increase the applied force and watch the friction graph: static friction tracks your push one-for-one along the 45° line, then collapses to the lower kinetic value the instant F exceeds μsN.",
        content: String.raw`<p>This graph — friction force versus applied force — is a favorite AP multiple-choice figure. Know its three features: the unit-slope rise, the cliff at $\mu_s N$, and the flat kinetic plateau at $\mu_k N$.</p>` },
      { heading: "Friction Picks Its Own Direction",
        content: String.raw`<p>Friction opposes <em>relative slipping between the surfaces</em>, which is not always "opposite the motion":</p>
<ul>
<li><strong>Walking:</strong> your foot pushes backward on the ground, so static friction pushes <em>forward</em> on you. It is the external force that accelerates you.</li>
<li><strong>A box on an accelerating truck bed:</strong> if the box moves with the truck, static friction on the box points <em>forward</em> — it is the only horizontal force on the box, so it must supply $ma$. The box slips when the required force exceeds $\mu_s N$, i.e. when $a > \mu_s g$.</li>
<li><strong>Circular motion:</strong> for a car rounding a flat curve, static friction points toward the center, supplying $mv^2/r$. Maximum speed: $\mu_s mg = mv^2/r \Rightarrow v_{max} = \sqrt{\mu_s g r}$ — independent of the car's mass.</li>
</ul>
<p>Note that a rolling tire that isn't skidding experiences <em>static</em> friction (the contact patch is momentarily at rest), which is why anti-lock brakes outperform a skid: $\mu_s > \mu_k$.</p>` },
      { heading: "Worked Connection: The Verge of Slipping",
        content: String.raw`<p>"On the verge of slipping" is code for $f_s = \mu_s N$ exactly — the one moment static friction has a known value. Classic example: a block rests on an incline whose angle slowly increases. Along the incline, $mg\sin\theta = f_s$; perpendicular, $N = mg\cos\theta$. At the critical angle, $mg\sin\theta_c = \mu_s mg\cos\theta_c$, so</p>
$$\boxed{\tan\theta_c = \mu_s}$$
<p>— a clean experimental method for measuring $\mu_s$ with nothing but a protractor. Once sliding starts, the acceleration is $a = g(\sin\theta - \mu_k\cos\theta)$.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Writing $f_s = \mu_s N$ automatically:</strong> that's only the maximum. A parked car on a gentle hill experiences $f_s = mg\sin\theta$, which may be far below $\mu_s N$.</li>
<li><strong>Friction "always opposes motion":</strong> it opposes relative <em>slipping</em>. On drive wheels and on objects carried by accelerating surfaces, friction points along the motion.</li>
<li><strong>$N = mg$ reflex:</strong> add the applied force's vertical component, incline geometry, or vertical acceleration first.</li>
<li><strong>Mass appearing in skid answers:</strong> in $v_{max} = \sqrt{\mu_s g r}$ and $\theta_c = \tan^{-1}\mu_s$, mass cancels. If your answer keeps $m$, recheck.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`f_s \le \mu_s N`, note: "Static friction is an inequality — it equals whatever prevents slipping, up to this max." },
      { latex: String.raw`f_k = \mu_k N`, note: "Kinetic friction during sliding; opposes relative surface motion; μk < μs." },
      { latex: String.raw`\tan\theta_c = \mu_s`, note: "Critical incline angle at which a resting block begins to slip." },
      { latex: String.raw`a = g(\sin\theta - \mu_k \cos\theta)`, note: "Acceleration of a block sliding down a rough incline." },
      { latex: String.raw`v_{max} = \sqrt{\mu_s g r}`, note: "Top speed for a flat, unbanked curve — mass independent." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A $10\,\text{kg}$ crate rests on a floor with $\mu_s = 0.50$ and $\mu_k = 0.30$. A horizontal force of $30\,\text{N}$ is applied. The friction force on the crate is:</p>`,
        choices: [ String.raw`$30\,\text{N}$`, String.raw`$49\,\text{N}$`, String.raw`$29\,\text{N}$`, String.raw`$98\,\text{N}$` ],
        answer: 0,
        solution: String.raw`<p>Maximum static friction is $\mu_s mg = 0.50(98) = 49\,\text{N}$. The $30\,\text{N}$ push is below that ceiling, so the crate stays put and static friction simply matches the push: $f_s = 30\,\text{N}$. Choosing 49 N is the single most common friction error on the exam.</p>` },
      { type: "mcq",
        q: String.raw`<p>A block slides down an incline of angle $\theta$ at <em>constant velocity</em>. The coefficient of kinetic friction is:</p>`,
        choices: [ String.raw`$\mu_k = \tan\theta$`, String.raw`$\mu_k = \sin\theta$`, String.raw`$\mu_k = \cos\theta$`, String.raw`$\mu_k = 1/\tan\theta$` ],
        answer: 0,
        solution: String.raw`<p>Constant velocity means zero net force: $mg\sin\theta = f_k = \mu_k mg\cos\theta$, so $\mu_k = \tan\theta$. (Same algebra as the static critical angle, but with $\mu_k$ because the block is sliding.)</p>` },
      { type: "mcq",
        q: String.raw`<p>A flatbed truck carries a toolbox; $\mu_s = 0.40$ between box and bed. The maximum acceleration the truck can have without the toolbox sliding is:</p>`,
        choices: [ String.raw`$3.9\,\text{m/s}^2$`, String.raw`$9.8\,\text{m/s}^2$`, String.raw`$0.40\,\text{m/s}^2$`, String.raw`It depends on the toolbox's mass.` ],
        answer: 0,
        solution: String.raw`<p>Static friction is the only horizontal force on the box, so $f_s = ma \le \mu_s mg$, giving $a \le \mu_s g = 0.40(9.8) = 3.9\,\text{m/s}^2$. Mass cancels — (D) is bait.</p>` },
      { type: "frq",
        q: String.raw`<p>Block A (mass $m_A$) sits on top of block B (mass $m_B$), which rests on a frictionless floor. The coefficient of static friction between the blocks is $\mu_s$. A horizontal force $F$ is applied to block B.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Assuming the blocks move together, derive an expression for their common acceleration and for the friction force on block A.</p>`,
            solution: String.raw`<p>System: $a = \dfrac{F}{m_A + m_B}$. Block A alone is accelerated solely by friction from B's top surface, so $f = m_A a = \dfrac{m_A F}{m_A + m_B}$, directed forward (in the direction of $F$).</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive the maximum force $F_{max}$ for which the blocks move together.</p>`,
            solution: String.raw`<p>Slipping begins when the needed friction reaches the ceiling: $\dfrac{m_A F_{max}}{m_A + m_B} = \mu_s m_A g$. Thus $F_{max} = \mu_s g\,(m_A + m_B)$.</p>` },
          { label: "(c)", prompt: String.raw`<p>If $F > F_{max}$, describe the motion of each block and write the acceleration of each.</p>`,
            solution: String.raw`<p>The surfaces now slip, so kinetic friction $\mu_k m_A g$ acts: forward on A, backward on B. Block A: $a_A = \mu_k g$. Block B: $a_B = \dfrac{F - \mu_k m_A g}{m_B}$, with $a_B > a_A$ — B slides out from under A.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A car of mass $m$ travels around a flat, unbanked circular curve of radius $r$. The coefficient of static friction between tires and road is $\mu_s$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Explain why <em>static</em> (not kinetic) friction provides the centripetal force for a car that is not skidding, and derive the maximum constant speed for the curve.</p>`,
            solution: String.raw`<p>The contact patch of a rolling tire is momentarily at rest relative to the road — no slipping — so the road exerts static friction. Toward the center: $f_s = \dfrac{mv^2}{r} \le \mu_s mg$. Setting the equality gives $v_{max} = \sqrt{\mu_s g r}$, independent of mass.</p>` },
          { label: "(b)", prompt: String.raw`<p>The same curve is now banked at angle $\theta$, and the road is icy (frictionless). Derive the single speed at which the car can round the curve without sliding.</p>`,
            solution: String.raw`<p>With no friction, only $N$ and $mg$ act. Vertical: $N\cos\theta = mg$. Horizontal (centripetal): $N\sin\theta = \dfrac{mv^2}{r}$. Dividing: $\tan\theta = \dfrac{v^2}{rg}$, so $v = \sqrt{rg\tan\theta}$. Note the normal force — not a "banking force" — supplies the centripetal component.</p>` }
        ] }
    ]
  },

  /* ============================ 2.8 ============================ */
  {
    id: "2.8",
    title: "Spring Forces",
    blurb: "The ideal spring: a force that reads its own displacement — and the seed of every oscillation to come.",
    objectives: [
      "Apply Hooke's law F = −kx, interpreting the sign as a restoring direction.",
      "Determine effective spring constants for springs in series and in parallel.",
      "Analyze equilibrium and dynamics of objects attached to springs, including vertical spring systems.",
      "Connect the linear force law to the energy ½kx² stored in a stretched or compressed spring."
    ],
    sections: [
      { heading: "Hooke's Law",
        content: String.raw`<p>An ideal spring stretched or compressed by $x$ from its natural length pushes back with</p>
$$F_s = -kx,$$
<p>where $k$ (N/m) is the <strong>spring constant</strong> — the stiffness. The minus sign is the whole story: the force always points back toward the natural length, making it a <strong>restoring force</strong>. Stiff springs (large $k$) need large force for small stretch; soft springs the reverse.</p>
<p>Ideal springs are massless and perfectly linear. Real springs obey Hooke's law only up to an elastic limit, but AP problems live in the linear regime.</p>
<div class="callout">A vertical spring with a hanging mass just shifts the equilibrium point: at rest, $kx_0 = mg$, so $x_0 = mg/k$. Measured <em>from the new equilibrium</em>, the physics (and any oscillation) is identical to a horizontal spring — gravity drops out.</div>` },
      { heading: "Interactive: Force vs. Stretch",
        sim: "hookesLaw",
        simCaption: "Drag the displacement and stiffness sliders. The F–x graph is a straight line of slope −k, and the shaded triangle is the stored energy ½kx².",
        content: String.raw`<p>Notice the force–extension graph is the linear special case of the general rule $F_x = -dU/dx$ that you will meet in Unit 3: a linear force corresponds to a parabolic energy well.</p>` },
      { heading: "Combining Springs",
        content: String.raw`<p><strong>Parallel</strong> (side by side, sharing the displacement): each spring stretches the same $x$ and the forces add,</p>
$$k_{par} = k_1 + k_2.$$
<p><strong>Series</strong> (end to end, sharing the force): the same tension $F$ acts in each spring (they're massless), and the stretches add: $x = F/k_1 + F/k_2$, giving</p>
$$\frac{1}{k_{ser}} = \frac{1}{k_1} + \frac{1}{k_2}.$$
<p>Parallel combinations are stiffer; series combinations are softer. A neat corollary: cutting a spring of constant $k$ in half produces two springs of constant $2k$ each — half the coils stretch half as much for the same force.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>$x$ is displacement from natural length</strong>, not the spring's total length, and not displacement from wherever the problem starts.</li>
<li><strong>Series/parallel swapped:</strong> springs combine like capacitors, not resistors — series springs are <em>softer</em>.</li>
<li><strong>Forgetting the pre-stretch in vertical systems:</strong> the spring force at equilibrium already balances gravity. Oscillations about that point behave as if gravity didn't exist.</li>
<li><strong>Sign confusion:</strong> $F = -kx$ is the force <em>by the spring on the object</em>. The force you exert to hold it stretched is $+kx$.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`\vec{F}_s = -k\vec{x}`, note: "Hooke's law; x measured from natural length; minus sign = restoring." },
      { latex: String.raw`k_{par} = k_1 + k_2`, note: "Springs in parallel share displacement; stiffness adds." },
      { latex: String.raw`\frac{1}{k_{ser}} = \frac{1}{k_1} + \frac{1}{k_2}`, note: "Springs in series share force; compliances add." },
      { latex: String.raw`x_0 = \frac{mg}{k}`, note: "Equilibrium stretch of a vertical spring with hanging mass m." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A spring of constant $k$ is cut into two equal halves. The spring constant of each half is:</p>`,
        choices: [ String.raw`$2k$`, String.raw`$k/2$`, String.raw`$k$`, String.raw`$4k$` ],
        answer: 0,
        solution: String.raw`<p>The original spring is two half-springs in series: $\tfrac{1}{k} = \tfrac{1}{k_h} + \tfrac{1}{k_h}$ gives $k_h = 2k$. Physically, the same tension stretches half as many coils half as far.</p>` },
      { type: "mcq",
        q: String.raw`<p>Two identical springs ($k$ each) support a weight $W$, first in parallel and then in series. The ratio of the total stretch in series to the total stretch in parallel is:</p>`,
        choices: [ String.raw`$4$`, String.raw`$2$`, String.raw`$1/2$`, String.raw`$1/4$` ],
        answer: 0,
        solution: String.raw`<p>Parallel: $k_{par} = 2k$, stretch $W/2k$. Series: $k_{ser} = k/2$, stretch $2W/k$. Ratio $= \dfrac{2W/k}{W/2k} = 4$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A $2.0\,\text{kg}$ mass hangs at rest from a vertical spring, stretching it $5.0\,\text{cm}$. The spring constant is approximately:</p>`,
        choices: [ String.raw`$390\,\text{N/m}$`, String.raw`$39\,\text{N/m}$`, String.raw`$98\,\text{N/m}$`, String.raw`$3.9\,\text{N/m}$` ],
        answer: 0,
        solution: String.raw`<p>Equilibrium: $kx_0 = mg \Rightarrow k = \dfrac{2.0(9.8)}{0.050} = 392 \approx 390\,\text{N/m}$. Watch the cm → m conversion; 39 N/m is the decimal-slip distractor.</p>` },
      { type: "frq",
        q: String.raw`<p>A block of mass $m$ on a frictionless horizontal surface is attached to a wall by a spring of constant $k$. A second identical spring is then added.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>The second spring is attached side-by-side with the first (both from wall to block). The block is displaced $x$ and held. Derive the net spring force and the effective spring constant.</p>`,
            solution: String.raw`<p>Both springs stretch by the same $x$, each pulling with $kx$: $F_{net} = -2kx$. Effective constant $k_{eff} = 2k$ (parallel).</p>` },
          { label: "(b)", prompt: String.raw`<p>Instead, the two springs are connected end-to-end between the wall and the block. Derive the effective spring constant, explaining why both springs carry the same tension.</p>`,
            solution: String.raw`<p>The springs are ideal (massless), so the net force on each must be zero even while accelerating the junction would require zero force — hence the tension $F$ is the same throughout. Each stretches $F/k$; total stretch $x = 2F/k$, so $F = (k/2)x$ and $k_{eff} = k/2$.</p>` },
          { label: "(c)", prompt: String.raw`<p>For each configuration, state how the magnitude of the block's initial acceleration compares when released from the same displacement $x$. Justify briefly.</p>`,
            solution: String.raw`<p>$a = k_{eff}x/m$. Parallel: $a = 2kx/m$ — four times the series value $a = kx/2m$. Stiffer combination → larger restoring force at the same displacement → larger acceleration.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A $0.50\,\text{kg}$ block hangs from a spring of constant $k = 98\,\text{N/m}$. It is pulled down $3.0\,\text{cm}$ below its equilibrium position and held.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Calculate the total stretch of the spring from its natural length, and the net force on the block while held.</p>`,
            solution: String.raw`<p>Equilibrium stretch: $x_0 = mg/k = 0.50(9.8)/98 = 0.050\,\text{m}$. Total stretch $= 5.0 + 3.0 = 8.0\,\text{cm}$. Net force: spring pulls up $kx = 98(0.080) = 7.84\,\text{N}$; gravity pulls down $4.9\,\text{N}$; net $= 2.94\,\text{N} \approx 2.9\,\text{N}$ upward — equivalently $k$ times the $3.0\,\text{cm}$ displacement from equilibrium: $98(0.030) = 2.94\,\text{N}$. ✔</p>` },
          { label: "(b)", prompt: String.raw`<p>The block is released. Explain, using the equilibrium-shift idea, why the subsequent motion is identical to that of the same block on a horizontal spring displaced $3.0\,\text{cm}$, and find the block's maximum acceleration.</p>`,
            solution: String.raw`<p>Let $y$ be displacement from the hanging equilibrium. The net force is $F = -k(y + x_0) + mg = -ky$ since $kx_0 = mg$. Gravity is absorbed into the equilibrium shift, leaving a pure Hooke's-law force in $y$. Maximum acceleration occurs at maximum displacement: $a_{max} = kA/m = 98(0.030)/0.50 = 5.9\,\text{m/s}^2$.</p>` }
        ] }
    ]
  },

  /* ============================ 2.9 ============================ */
  {
    id: "2.9",
    title: "Resistive Forces",
    blurb: "When force depends on velocity, F = ma becomes a differential equation — and you can solve it.",
    objectives: [
      "Model resistive forces as F = −bv or F ∝ v² and identify when each model applies.",
      "Set up and solve dv/dt = g − (b/m)v by separation of variables.",
      "Determine terminal velocity by setting acceleration to zero, for any drag model.",
      "Interpret the time constant τ = m/b and sketch v(t), a(t) for falling with drag."
    ],
    sections: [
      { heading: "Velocity-Dependent Forces",
        content: String.raw`<p>Drag forces oppose motion through a fluid and grow with speed. Two standard models:</p>
<ul>
<li><strong>Linear drag</strong> $\;\vec{F} = -b\vec{v}$ — small, slow objects (mist droplets, viscous fluids).</li>
<li><strong>Quadratic drag</strong> $\;F = cv^2$ opposite $\vec v$ — large, fast objects (skydivers, baseballs).</li>
</ul>
<p>Either way, Newton's second law for a falling object becomes a <strong>differential equation</strong>, because the force changes as the velocity changes:</p>
$$m\frac{dv}{dt} = mg - bv \qquad (\text{taking down as positive}).$$
<p>The qualitative story: at $v=0$ the acceleration is a full $g$; as $v$ grows, drag eats into the net force; acceleration fades toward zero and $v$ levels off at <strong>terminal velocity</strong>.</p>` },
      { heading: "Terminal Velocity Without Solving Anything",
        content: String.raw`<p>Terminal velocity is the equilibrium of the equation: set $dv/dt = 0$.</p>
$$\text{linear: } v_T = \frac{mg}{b} \qquad\qquad \text{quadratic: } v_T = \sqrt{\frac{mg}{c}}$$
<p>This move — find the constant solution by zeroing the derivative — works on every "approaches a limiting value" problem on the exam (RC circuits and LR circuits in E&amp;M use the same trick). Heavier objects have larger $v_T$, which is why a crumpled paper ball outraces a flat sheet: same $m$, very different $b$.</p>
<div class="callout key">If a question asks only for terminal velocity, do not solve the differential equation. Set the net force to zero and read off the answer.</div>` },
      { heading: "Solving the Differential Equation",
        content: String.raw`<p>Separate variables in $m\,dv/dt = mg - bv$:</p>
$$\int_0^v \frac{dv'}{g - (b/m)v'} = \int_0^t dt' \;\;\Longrightarrow\;\; -\frac{m}{b}\ln\!\left(\frac{g - (b/m)v}{g}\right) = t$$
<p>Exponentiating and solving for $v$:</p>
$$v(t) = \frac{mg}{b}\left(1 - e^{-bt/m}\right) = v_T\left(1 - e^{-t/\tau}\right), \qquad \tau = \frac{m}{b}.$$
<p>The <strong>time constant</strong> $\tau$ sets the approach: after one $\tau$ the object has reached $63\%$ of $v_T$; after $3\tau$, $95\%$. The acceleration decays as a pure exponential, $a(t) = g\,e^{-t/\tau}$. Check limits: $t=0$ gives $v=0,\ a=g$; $t\to\infty$ gives $v\to v_T,\ a\to 0$. ✔</p>` },
      { heading: "Interactive: Approach to Terminal Velocity",
        sim: "drag",
        simCaption: "Drop the object and watch v(t) bend over toward the dashed terminal-velocity asymptote. Switch between linear and quadratic drag and see how mass and drag coefficient move the asymptote.",
        content: String.raw`<p>Try doubling the mass with linear drag: $v_T$ doubles and so does $\tau = m/b$ — heavier objects fall faster <em>and</em> take longer to get there.</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Plugging drag into constant-acceleration formulas:</strong> $v = v_0 + at$ is dead the moment force depends on velocity. Integrate or reason from the differential equation.</li>
<li><strong>Terminal velocity as "maximum possible":</strong> an object thrown downward faster than $v_T$ <em>decelerates</em> toward $v_T$ from above — drag exceeds gravity.</li>
<li><strong>Sign errors in setup:</strong> choose a positive direction, write each force with its sign in that convention, and keep it for the whole solution.</li>
<li><strong>Forgetting the limit checks:</strong> graders (and good students) verify $t=0$ and $t\to\infty$ behavior immediately.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`m\frac{dv}{dt} = mg - bv`, note: "Newton's 2nd law for falling with linear drag (down positive)." },
      { latex: String.raw`v_T = \frac{mg}{b} \quad\text{or}\quad v_T = \sqrt{\frac{mg}{c}}`, note: "Terminal velocity: set dv/dt = 0. Linear / quadratic models." },
      { latex: String.raw`v(t) = v_T\left(1 - e^{-t/\tau}\right),\quad \tau = \frac{m}{b}`, note: "Solution from rest; 63% of terminal at t = τ." },
      { latex: String.raw`a(t) = g\,e^{-t/\tau}`, note: "Acceleration decays exponentially from g to zero." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>An object falling from rest experiences drag $F = -bv$. At the instant its speed is half the terminal velocity, its acceleration is:</p>`,
        choices: [ String.raw`$g/2$`, String.raw`$g$`, String.raw`$g/4$`, String.raw`zero` ],
        answer: 0,
        solution: String.raw`<p>$a = g - \dfrac{b}{m}v = g - \dfrac{b}{m}\cdot\dfrac{mg}{2b} = g - \dfrac{g}{2} = \dfrac{g}{2}$. At half of $v_T$, drag cancels exactly half the weight.</p>` },
      { type: "mcq",
        q: String.raw`<p>For quadratic drag $F = cv^2$, a skydiver's terminal velocity is $v_T$. If her mass (with gear) doubles while $c$ is unchanged, the new terminal velocity is:</p>`,
        choices: [ String.raw`$\sqrt{2}\,v_T$`, String.raw`$2v_T$`, String.raw`$v_T$`, String.raw`$v_T/\sqrt{2}$` ],
        answer: 0,
        solution: String.raw`<p>$v_T = \sqrt{mg/c} \propto \sqrt{m}$, so doubling $m$ multiplies $v_T$ by $\sqrt{2}$. Choice (B) would be right for <em>linear</em> drag — the model matters.</p>` },
      { type: "mcq",
        q: String.raw`<p>A ball is thrown straight <em>down</em> with initial speed $2v_T$ (twice its terminal speed), with linear drag. Immediately after release the ball:</p>`,
        choices: [ String.raw`decelerates, approaching $v_T$ from above`, String.raw`accelerates, since it moves downward`, String.raw`moves at constant velocity`, String.raw`decelerates, stops, then falls back up` ],
        answer: 0,
        solution: String.raw`<p>At $v = 2v_T$, drag $= bv = 2mg$ exceeds the weight $mg$, so the net force is <em>upward</em>: the ball slows down, asymptotically approaching $v_T$ from above. Terminal velocity is an attractor from both directions.</p>` },
      { type: "frq",
        q: String.raw`<p>A sphere of mass $m$ is released from rest in a fluid that exerts a resistive force $\vec{F} = -b\vec{v}$. Take downward as positive.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Write Newton's second law for the sphere as a differential equation and state the terminal velocity.</p>`,
            solution: String.raw`<p>$m\dfrac{dv}{dt} = mg - bv$. Setting $dv/dt = 0$: $v_T = \dfrac{mg}{b}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Solve the differential equation by separation of variables to obtain $v(t)$.</p>`,
            solution: String.raw`<p>$\displaystyle\int_0^v \frac{dv'}{mg - bv'} = \int_0^t \frac{dt'}{m}$. The left side is $-\tfrac{1}{b}\ln\!\dfrac{mg-bv}{mg}$, so $\ln\!\dfrac{mg-bv}{mg} = -\dfrac{bt}{m}$, giving $mg - bv = mg\,e^{-bt/m}$ and finally $v(t) = \dfrac{mg}{b}\left(1 - e^{-bt/m}\right)$. Limits check: $v(0)=0$; $v(\infty) = mg/b = v_T$. ✔</p>` },
          { label: "(c)", prompt: String.raw`<p>Derive an expression for the distance fallen as a function of time.</p>`,
            solution: String.raw`<p>Integrate: $y(t) = \displaystyle\int_0^t v\,dt' = \frac{mg}{b}\left[t + \frac{m}{b}\left(e^{-bt/m} - 1\right)\right]$. For large $t$ this approaches $v_T t - v_T\tau$ — terminal-speed motion delayed by one time constant's worth of distance.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A cart of mass $m$ moves on a horizontal frictionless track with initial velocity $v_0$. The only horizontal force is air resistance $F = -bv$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Solve for $v(t)$ and sketch its graph (describe the key features).</p>`,
            solution: String.raw`<p>$m\,dv/dt = -bv \Rightarrow \dfrac{dv}{v} = -\dfrac{b}{m}dt \Rightarrow v(t) = v_0 e^{-bt/m}$. Pure exponential decay: starts at $v_0$ with slope $-bv_0/m$, concave up, asymptote $v = 0$, falling to $v_0/e \approx 0.37v_0$ at $t = m/b$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Show that although the cart never stops, the total distance it travels is finite, and find that distance.</p>`,
            solution: String.raw`<p>$x_{total} = \displaystyle\int_0^\infty v_0 e^{-bt/m}dt = v_0\cdot\frac{m}{b} = \frac{mv_0}{b}$. The integral of a decaying exponential converges: infinitely long travel time, finite distance. (Slick alternative: $m\,dv = -b\,dx$, so $\Delta x = -\tfrac{m}{b}\Delta v = \tfrac{m v_0}{b}$.)</p>` }
        ] }
    ]
  },

  /* ============================ 2.10 ============================ */
  {
    id: "2.10",
    title: "Circular Motion",
    blurb: "Turning is accelerating: where the net force points to the center and speed alone tells you nothing.",
    objectives: [
      "Apply Newton's second law along the radial direction with a_c = v²/r toward the center.",
      "Identify the real forces (tension, gravity, normal, friction) whose components supply the centripetal force.",
      "Analyze banked curves, vertical circles, and conical pendulums.",
      "Decompose acceleration into radial and tangential parts for non-uniform circular motion."
    ],
    sections: [
      { heading: "Centripetal Acceleration Is Not a New Force",
        content: String.raw`<p>An object in uniform circular motion has constant speed but ever-changing velocity <em>direction</em>, so it accelerates — toward the center, with magnitude</p>
$$a_c = \frac{v^2}{r} = \omega^2 r.$$
<p>Newton's second law in the radial direction reads $\sum F_{radial} = \dfrac{mv^2}{r}$. Crucially, <strong>"centripetal force" is a job description, not a force</strong>: it is whatever real force (or component) happens to point at the center — tension for a ball on a string, gravity for the Moon, friction for a car, a normal-force component on a banked track.</p>
<div class="callout warn">Never draw a "centripetal force" arrow on a free-body diagram, and never add a "centrifugal force." Draw real forces, then demand that their radial components sum to $mv^2/r$.</div>` },
      { heading: "Interactive: Velocity Turns, Acceleration Points In",
        sim: "circular",
        simCaption: "Watch the velocity vector stay tangent while the acceleration vector points dead at the center. Double the speed at fixed radius and the centripetal acceleration quadruples.",
        content: String.raw`<p>Confirm the scalings: $a_c \propto v^2$ at fixed $r$, and $a_c \propto 1/r$ at fixed $v$ (gentler curves need less acceleration).</p>` },
      { heading: "The Greatest Hits",
        content: String.raw`<p><strong>Flat curve (friction):</strong> $\mu_s mg \ge \dfrac{mv^2}{r} \Rightarrow v_{max} = \sqrt{\mu_s g r}$.</p>
<p><strong>Banked curve, frictionless:</strong> $N\sin\theta = \dfrac{mv^2}{r}$ and $N\cos\theta = mg$ give the design speed $v = \sqrt{rg\tan\theta}$.</p>
<p><strong>Vertical circle, top:</strong> both gravity and any normal/tension point down (toward center): $N + mg = \dfrac{mv^2}{r}$. The minimum speed to maintain contact comes from $N \to 0$:</p>
$$v_{min,\,top} = \sqrt{gr}.$$
<p><strong>Vertical circle, bottom:</strong> $N - mg = \dfrac{mv^2}{r}$, so $N = m\!\left(g + \dfrac{v^2}{r}\right) > mg$ — you feel heaviest at the bottom of the loop.</p>
<p><strong>Conical pendulum:</strong> tension's vertical component holds the weight, horizontal component turns the bob: $\tan\theta = \dfrac{v^2}{rg}$ — the same geometry as the banked curve.</p>` },
      { heading: "Non-Uniform Circular Motion",
        content: String.raw`<p>If the speed changes too, the acceleration has two perpendicular pieces:</p>
$$a_{radial} = \frac{v^2}{r} \;(\text{center-pointing}), \qquad a_{tangential} = \frac{d|v|}{dt} \;(\text{along the path}),$$
<p>with total magnitude $a = \sqrt{a_c^2 + a_t^2}$. A pendulum mid-swing, a car speeding up around a bend, a ball whirling in a vertical circle — all carry both components except at special points (the pendulum's lowest point has $a_t = 0$; its endpoints have $a_c = 0$ since $v = 0$).</p>` },
      { heading: "Common Pitfalls",
        content: String.raw`<ul>
<li><strong>Adding a fictitious outward force:</strong> in an inertial frame there is no centrifugal force. The "thrown outward" feeling is your inertia continuing straight while the car turns.</li>
<li><strong>Top-of-loop sign error:</strong> at the top, $N$ and $mg$ <em>both</em> point toward the center. $N - mg$ there is wrong.</li>
<li><strong>Using $v = $ constant formulas when speed changes:</strong> $a_c = v^2/r$ still holds instantaneously, but there is also a tangential piece.</li>
<li><strong>String tension at angle:</strong> for a conical pendulum the radius is $L\sin\theta$, not $L$.</li>
</ul>` }
    ],
    equations: [
      { latex: String.raw`a_c = \frac{v^2}{r} = \omega^2 r`, note: "Center-pointing acceleration for circular motion at speed v." },
      { latex: String.raw`\sum F_{radial} = \frac{mv^2}{r}`, note: "Newton's 2nd law, radial direction. Real forces only." },
      { latex: String.raw`v = \sqrt{rg\tan\theta}`, note: "Design speed of a frictionless banked curve (also conical pendulum geometry)." },
      { latex: String.raw`v_{min} = \sqrt{gr}`, note: "Minimum speed at the top of a vertical circle (N or T = 0; gravity alone turns the object)." },
      { latex: String.raw`a = \sqrt{a_c^2 + a_t^2}`, note: "Non-uniform circular motion: radial and tangential components are perpendicular." }
    ],
    problems: [
      { type: "mcq",
        q: String.raw`<p>A car rounds a flat curve at speed $v$. If it then rounds the same curve at $2v$, the friction force required is:</p>`,
        choices: [ String.raw`4 times as large`, String.raw`2 times as large`, String.raw`the same`, String.raw`8 times as large` ],
        answer: 0,
        solution: String.raw`<p>$f = mv^2/r \propto v^2$: doubling speed quadruples the needed centripetal force. This is why speed is so punishing on curves.</p>` },
      { type: "mcq",
        q: String.raw`<p>A ball on a string moves in a <em>vertical</em> circle of radius $r$ at the minimum speed that keeps the string taut at the top. The tension at the top is:</p>`,
        choices: [ String.raw`zero`, String.raw`$mg$`, String.raw`$2mg$`, String.raw`$mv^2/r$` ],
        answer: 0,
        solution: String.raw`<p>"Minimum speed" means tension just reaches zero at the top; gravity alone supplies the entire centripetal force: $mg = mv^2/r$, i.e. $v = \sqrt{gr}$, with $T = 0$.</p>` },
      { type: "mcq",
        q: String.raw`<p>A pendulum bob swings through its lowest point at speed $v$ on a string of length $L$. The tension there is:</p>`,
        choices: [ String.raw`$mg + \dfrac{mv^2}{L}$`, String.raw`$mg$`, String.raw`$mg - \dfrac{mv^2}{L}$`, String.raw`$\dfrac{mv^2}{L}$` ],
        answer: 0,
        solution: String.raw`<p>At the bottom, the center is straight up: $T - mg = \dfrac{mv^2}{L}$, so $T = mg + \dfrac{mv^2}{L}$. Tension must both hold the weight <em>and</em> bend the path upward — the string is tautest at the bottom.</p>` },
      { type: "frq",
        q: String.raw`<p>A small block of mass $m$ rides on the inside wall of a rotating cylindrical drum of radius $R$ (a "rotor ride"). The drum spins at angular speed $\omega$ about its vertical axis, and the floor drops away. The coefficient of static friction between block and wall is $\mu_s$.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Draw/describe the free-body diagram of the block and identify which force plays the centripetal role.</p>`,
            solution: String.raw`<p>Three forces: weight $mg$ down; normal force $N$ from the wall pointing horizontally <em>inward</em> (toward the axis); static friction $f_s$ pointing <em>up</em> along the wall. The normal force is the centripetal force — friction handles gravity.</p>` },
          { label: "(b)", prompt: String.raw`<p>Derive the minimum angular speed $\omega_{min}$ for which the block does not slide down.</p>`,
            solution: String.raw`<p>Radial: $N = m\omega^2 R$. Vertical equilibrium: $f_s = mg$, with $f_s \le \mu_s N = \mu_s m\omega^2 R$. Thus $mg \le \mu_s m \omega^2 R$, giving $\omega_{min} = \sqrt{\dfrac{g}{\mu_s R}}$. Note the mass cancels — everyone sticks or no one does.</p>` },
          { label: "(c)", prompt: String.raw`<p>If the drum spins faster than $\omega_{min}$, what happens to the friction force? Justify.</p>`,
            solution: String.raw`<p>It stays exactly $mg$. Static friction is a constraint force: vertical equilibrium still requires $f_s = mg$, while its <em>ceiling</em> $\mu_s N = \mu_s m\omega^2 R$ rises. Spinning faster increases the safety margin, not the friction itself.</p>` }
        ] },
      { type: "frq",
        q: String.raw`<p>A conical pendulum consists of a bob of mass $m$ on a string of length $L$, swinging in a horizontal circle with the string at constant angle $\theta$ from the vertical.</p>`,
        parts: [
          { label: "(a)", prompt: String.raw`<p>Derive expressions for the string tension and the bob's speed in terms of $m$, $g$, $L$, and $\theta$.</p>`,
            solution: String.raw`<p>Vertical: $T\cos\theta = mg \Rightarrow T = \dfrac{mg}{\cos\theta}$. Horizontal: $T\sin\theta = \dfrac{mv^2}{r}$ with $r = L\sin\theta$. Substituting $T$: $mg\tan\theta = \dfrac{mv^2}{L\sin\theta}$, so $v = \sqrt{gL\sin\theta\tan\theta}$.</p>` },
          { label: "(b)", prompt: String.raw`<p>Show that the period of revolution is $T_{period} = 2\pi\sqrt{\dfrac{L\cos\theta}{g}}$ and comment on the limit $\theta \to 0$.</p>`,
            solution: String.raw`<p>$T_{period} = \dfrac{2\pi r}{v} = \dfrac{2\pi L\sin\theta}{\sqrt{gL\sin\theta\tan\theta}} = 2\pi\sqrt{\dfrac{L\cos\theta}{g}}$. As $\theta \to 0$ this becomes $2\pi\sqrt{L/g}$ — exactly the simple-pendulum period, a satisfying consistency check between two different motions.</p>` }
        ] }
    ]
  }
  ]
});
