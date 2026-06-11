/* data/mech-u4.js — Unit 4: Linear Momentum */
AP.registerUnit({
  id: 4,
  course: "mech",
  title: "Linear Momentum",
  weight: "10–20%",
  tagline: "Mass in motion: impulse, conservation, and what survives a collision.",
  bigIdeas: [
    "Momentum is the quantity that net force changes over time: F = dp/dt, and impulse is the integral of force.",
    "When the net external force on a system is zero, the total momentum of the system cannot change — no matter how violent the internal interactions are.",
    "Kinetic energy may or may not survive a collision, but momentum always does (for an isolated system)."
  ],
  topics: [
    {
      id: "4.1",
      title: "Linear Momentum",
      blurb: "Why a slow truck can be harder to stop than a fast baseball — and how momentum recasts Newton's second law.",
      objectives: [
        "Calculate the momentum of an object or a system of objects, treating momentum as a vector.",
        "Relate the net external force on an object or system to the time rate of change of its momentum.",
        "Apply F = dp/dt to situations where mass flows, such as a stream of water striking a surface."
      ],
      sections: [
        {
          heading: "The Core Idea",
          content: String.raw`<p>Momentum is mass in motion: $\vec{p} = m\vec{v}$. It is a <strong>vector</strong> that points in the same direction as the velocity, with SI units of $\text{kg}\cdot\text{m/s}$ (equivalently $\text{N}\cdot\text{s}$). Two objects can have the same kinetic energy but very different momenta, because momentum grows linearly with $v$ while kinetic energy grows with $v^2$.</p>
<p>For a <strong>system</strong> of particles, the total momentum is the vector sum:</p>
<p>$$\vec{p}_{\text{sys}} = \sum_i m_i \vec{v}_i = M\vec{v}_{\text{cm}}$$</p>
<p>That last equality is worth memorizing: the total momentum of any system equals the total mass times the velocity of the center of mass. A complicated tumbling, vibrating, exploding system still has a perfectly simple total momentum — it is just $M\vec{v}_{\text{cm}}$.</p>
<div class="callout key">Momentum is a vector. Always pick a positive direction first, and let signs (or components) carry the directional information.</div>`
        },
        {
          heading: "Newton's Second Law, the Way Newton Wrote It",
          content: String.raw`<p>Newton originally stated his second law in terms of momentum, and the momentum form is more general than $\vec{F} = m\vec{a}$:</p>
<p>$$\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}$$</p>
<p>If the mass is constant, the product rule gives $\frac{d}{dt}(m\vec{v}) = m\frac{d\vec{v}}{dt} = m\vec{a}$, recovering the familiar form. But when mass enters or leaves the system — rocket exhaust, sand pouring onto a moving cart, a water jet striking a wall — you must work with $d\vec{p}/dt$ directly.</p>
<p>For example, a stream of water (density $\rho$, cross-sectional area $A$, speed $v$) that hits a wall and stops delivers mass at a rate $\frac{dm}{dt} = \rho A v$. Each kilogram loses momentum $v$, so the wall must exert (and therefore feels) a force of magnitude</p>
<p>$$F = v\,\frac{dm}{dt} = \rho A v^2.$$</p>
<p>Notice the $v^2$: doubling the speed of the stream quadruples the force, because you stop twice the mass per second <em>and</em> each bit carries twice the momentum.</p>`
        },
        {
          heading: "Interactive: Momentum in a Collision",
          sim: "collision",
          simCaption: "Give the carts different masses and speeds. Watch the momentum readouts before and after: individual momenta change, but their sum does not. Compare a heavy slow cart to a light fast one with the same p.",
          content: String.raw`<p>Run a few collisions and keep your eye on the <em>system</em> momentum readout rather than the individual carts. The forces during the collision are huge and messy, but they are internal — cart 1 pushes cart 2 exactly as hard as cart 2 pushes back (Newton's third law), so the momentum one cart loses, the other gains. This is the seed of the conservation law you will formalize in Topic 4.3.</p>`
        },
        {
          heading: "Worked Connection: Force from a Changing Momentum",
          content: String.raw`<p>Suppose a $2.0\,\text{kg}$ cart has momentum $p(t) = 6t^2 - 4t$ (in $\text{kg}\cdot\text{m/s}$, with $t$ in seconds). The net force on it at any instant is the derivative:</p>
<p>$$F = \frac{dp}{dt} = 12t - 4 \quad (\text{N})$$</p>
<p>At $t = 2\,\text{s}$, $F = 20\,\text{N}$ — even though the momentum itself is $p(2) = 16\,\text{kg}\cdot\text{m/s}$. Don't confuse the value of $p$ with its rate of change: on a $p$–$t$ graph, force is the <strong>slope</strong>.</p>
<p>Conversely, if you know the force, you integrate to recover the momentum change: $\Delta p = \int F\,dt$. That integral gets its own name — impulse — and its own topic next.</p>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Treating momentum as a scalar.</strong> A ball that bounces off a wall and reverses direction at the same speed has $\Delta p = 2mv$ in magnitude, not zero.</li>
<li><strong>Confusing momentum with kinetic energy.</strong> Equal momenta do not mean equal kinetic energies. For the same $p$, the lighter object carries more KE since $K = p^2/2m$.</li>
<li><strong>Reading force from the value of $p$ instead of its slope</strong> on a $p$ vs. $t$ graph.</li>
<li><strong>Forgetting that $\vec{F} = m\vec{a}$ fails when mass flows.</strong> Use $F = \frac{dp}{dt}$ for jets, chains, and rockets.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`\vec{p} = m\vec{v}`, note: "Momentum of a single object; a vector along the velocity." },
        { latex: String.raw`\vec{p}_{\text{sys}} = \sum_i m_i\vec{v}_i = M\vec{v}_{\text{cm}}`, note: "System momentum equals total mass times center-of-mass velocity." },
        { latex: String.raw`\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}`, note: "The general form of Newton's second law; reduces to ma for constant mass." },
        { latex: String.raw`K = \frac{p^2}{2m}`, note: "Handy bridge between momentum and kinetic energy." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>A $0.50\,\text{kg}$ ball travels east at $10\,\text{m/s}$. What is the magnitude of its momentum?</p>`,
          choices: [
            String.raw`$5.0\,\text{kg}\cdot\text{m/s}$`,
            String.raw`$25\,\text{kg}\cdot\text{m/s}$`,
            String.raw`$50\,\text{kg}\cdot\text{m/s}$`,
            String.raw`$0.05\,\text{kg}\cdot\text{m/s}$`
          ],
          answer: 0,
          solution: String.raw`<p>$p = mv = (0.50)(10) = 5.0\,\text{kg}\cdot\text{m/s}$, directed east. The distractor $25$ is the kinetic energy $\tfrac{1}{2}mv^2$ in joules — a classic mix-up; momentum is linear in $v$, not quadratic.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>The momentum of an object is $p(t) = 6t^2 - 4t$, in $\text{kg}\cdot\text{m/s}$. What is the net force on the object at $t = 2\,\text{s}$?</p>`,
          choices: [
            String.raw`$20\,\text{N}$`,
            String.raw`$16\,\text{N}$`,
            String.raw`$24\,\text{N}$`,
            String.raw`$8\,\text{N}$`
          ],
          answer: 0,
          solution: String.raw`<p>Force is the time derivative of momentum: $F = \frac{dp}{dt} = 12t - 4$. At $t = 2\,\text{s}$, $F = 24 - 4 = 20\,\text{N}$. Choosing $16$ means you evaluated $p(2)$ itself — the value of the momentum, not its rate of change.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>Two objects of masses $m$ and $4m$ have the <em>same kinetic energy</em>. What is the ratio of the momentum of the lighter object to that of the heavier object?</p>`,
          choices: [
            String.raw`$1:2$`,
            String.raw`$1:4$`,
            String.raw`$1:1$`,
            String.raw`$2:1$`
          ],
          answer: 0,
          solution: String.raw`<p>From $K = \frac{p^2}{2m}$, equal kinetic energies give $p = \sqrt{2mK}$, so $p \propto \sqrt{m}$. The momentum ratio is $\sqrt{m}:\sqrt{4m} = 1:2$. At fixed KE, the heavier object carries <em>more</em> momentum because it moves slower but momentum only scales linearly with speed.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>A horizontal stream of water of density $\rho$ and circular cross-sectional area $A$ moves with speed $v$ and strikes a vertical wall head-on.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Derive an expression for the rate $\frac{dm}{dt}$ at which mass arrives at the wall.</p>`,
              solution: String.raw`<p>In time $dt$, a cylinder of water of length $v\,dt$ and cross-section $A$ reaches the wall. Its mass is $dm = \rho A v\,dt$, so $$\frac{dm}{dt} = \rho A v.$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Assuming the water stops when it hits the wall (it runs down without rebounding), derive an expression for the magnitude of the force the stream exerts on the wall. Justify your use of Newton's laws.</p>`,
              solution: String.raw`<p>Each mass element arrives with momentum $v\,dm$ and leaves with zero horizontal momentum, so the wall removes momentum at the rate $$F = \frac{dp}{dt} = v\frac{dm}{dt} = \rho A v^2.$$ This is the force the wall exerts on the water; by Newton's third law the water pushes on the wall with the same magnitude $\rho A v^2$, directed into the wall.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>If instead the water rebounded elastically (leaving with speed $v$ in the opposite direction), how would the force compare? Justify your answer without re-deriving from scratch.</p>`,
              solution: String.raw`<p>The momentum change per mass element would double: from $\Delta p = v\,dm$ to $\Delta p = 2v\,dm$, since the velocity reverses rather than merely vanishing. The force would therefore double to $F = 2\rho A v^2$. Reversing motion always requires more impulse than stopping it.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>Two carts on a frictionless horizontal track are connected by a light spring. Cart 1 has mass $m_1$ and cart 2 has mass $m_2$. A constant horizontal external force $F$ is applied to cart 1, and the carts oscillate on the spring as the system moves.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Derive an expression for the acceleration of the center of mass of the two-cart system. Justify why the spring force does not appear in your expression.</p>`,
              solution: String.raw`<p>For the system, $\vec{F}_{\text{ext}} = \frac{d\vec{p}_{\text{sys}}}{dt} = (m_1+m_2)\vec{a}_{\text{cm}}$. The spring forces on the two carts are an internal action–reaction pair: they are equal in magnitude and opposite in direction, so they cancel in the sum over the system. Only the external force survives: $$a_{\text{cm}} = \frac{F}{m_1+m_2}.$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>The system starts from rest. Derive an expression for the total momentum of the system at time $t$.</p>`,
              solution: String.raw`<p>Since $F$ is constant, integrate $\frac{dp_{\text{sys}}}{dt} = F$: $$p_{\text{sys}}(t) = \int_0^t F\,dt' = Ft.$$ The total momentum grows linearly in time regardless of how the carts trade momentum back and forth through the spring.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>At a certain instant, cart 1 happens to be momentarily at rest. Determine the velocity of cart 2 at that instant in terms of $F$, $t$, and the masses.</p>`,
              solution: String.raw`<p>The total momentum must still be $Ft$: $m_1(0) + m_2 v_2 = Ft$, so $$v_2 = \frac{Ft}{m_2}.$$ Internal oscillations redistribute momentum between the carts but cannot change the total — a perfect illustration of why $p_{\text{sys}} = M v_{\text{cm}}$ is so useful.</p>`
            }
          ]
        }
      ]
    },
    {
      id: "4.2",
      title: "Change in Momentum and Impulse",
      blurb: "Why airbags save lives: the same momentum change can come from a huge force briefly or a gentle force stretched out in time.",
      objectives: [
        "Calculate impulse as the time integral of force, including from F(t) graphs as the area under the curve.",
        "Apply the impulse–momentum theorem to relate impulse to the change in an object's momentum.",
        "Estimate average force from a momentum change and an interaction time, and explain real-world force-mitigation design."
      ],
      sections: [
        {
          heading: "The Core Idea",
          content: String.raw`<p>Integrate Newton's second law $\vec{F}_{\text{net}} = \frac{d\vec{p}}{dt}$ over the duration of an interaction and you get the <strong>impulse–momentum theorem</strong>:</p>
<p>$$\vec{J} = \int_{t_1}^{t_2} \vec{F}_{\text{net}}\,dt = \Delta\vec{p}$$</p>
<p>Impulse $\vec{J}$ is a vector with the same units as momentum ($\text{N}\cdot\text{s} = \text{kg}\cdot\text{m/s}$). The theorem is exact — no assumptions about constant force or constant mass of the net-force kind. It says the <em>time-accumulated</em> force equals the momentum change, full stop.</p>
<p>This is the physics behind airbags, crumple zones, and bending your knees when you land: the momentum change $\Delta p$ is fixed by the situation (you must stop), so stretching the stopping time $\Delta t$ shrinks the average force, since $F_{\text{avg}} = \Delta p/\Delta t$.</p>
<div class="callout key">Impulse equals the change in momentum, and on an $F$–$t$ graph it is the area under the curve.</div>`
        },
        {
          heading: "Reading F(t): Impulse as Area",
          graph: {
            xLabel: "t (s)", yLabel: "F (N)", xMin: 0, xMax: 0.4, yMin: 0, yMax: 230,
            fns: [ { expr: "200*Math.sin(Math.PI*x/0.4)", label: "F(t) during a collision", color: "#fbbf24" } ],
            shade: { expr: "200*Math.sin(Math.PI*x/0.4)", from: 0, to: 0.4 }
          },
          graphCaption: "A realistic collision force: it ramps up, peaks, and dies away. The shaded area is the impulse — here about 51 N·s.",
          content: String.raw`<p>Real collision forces are never constant; they look like the pulse above. You usually cannot (and need not) know $F(t)$ in detail. Two strategies cover the exam:</p>
<ul>
<li><strong>Geometry:</strong> for piecewise-linear graphs, add up the areas of triangles and rectangles.</li>
<li><strong>Calculus:</strong> for an explicit $F(t)$, integrate. For the pulse shown, $F(t) = F_{\max}\sin(\pi t/T)$ with $F_{\max} = 200\,\text{N}$ and $T = 0.4\,\text{s}$, so $J = \int_0^T F\,dt = \frac{2F_{\max}T}{\pi} \approx 51\,\text{N}\cdot\text{s}$.</li>
</ul>
<p>The <strong>average force</strong> is defined so that a constant force of that size delivers the same impulse: $F_{\text{avg}} = \frac{1}{T}\int_0^T F\,dt = J/T$. Graphically, it is the height of the rectangle with the same area as the pulse.</p>`
        },
        {
          heading: "Interactive: Area Under the Force Curve",
          sim: "forceArea",
          simParams: { "mode": "impulse" },
          simCaption: "Reshape the force curve and watch the accumulated area. Make a tall narrow spike and a low wide bump deliver the same impulse — then compare their peak forces.",
          content: String.raw`<p>Try to build two different force profiles with equal areas. Both produce identical $\Delta p$, but the peak forces can differ enormously. This is exactly what a crumple zone does to the force profile of a crash: same area, lower and wider.</p>`
        },
        {
          heading: "Worked Connection: A Bounce Is Bigger Than a Stop",
          content: String.raw`<p>Drop a ball of mass $m$ from height $h$. It arrives at the floor with speed $v_1 = \sqrt{2gh}$ (downward) and rebounds to height $h/4$, so it leaves with $v_2 = \sqrt{2g(h/4)} = \tfrac{1}{2}\sqrt{2gh}$ (upward).</p>
<p>Take up as positive. The floor's impulse on the ball is</p>
<p>$$J = \Delta p = m v_2 - (-m v_1) = m\left(\tfrac{1}{2}\sqrt{2gh} + \sqrt{2gh}\right) = \tfrac{3}{2}m\sqrt{2gh},$$</p>
<p>directed upward. Two takeaways: (1) signs do the directional bookkeeping — the initial momentum is negative; (2) the impulse is <em>larger</em> than just stopping the ball ($m\sqrt{2gh}$), because the floor must also launch it back up. A reversal always costs more impulse than a stop.</p>
<div class="callout warn">If the contact time is short, gravity's impulse $mg\,\Delta t$ during the bounce is usually negligible compared with the normal force's — but on the AP exam, say so explicitly if you neglect it.</div>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Dropping the sign on a reversal.</strong> Bouncing from $-v$ to $+v$ gives $\Delta p = 2mv$, not $0$ and not $mv$.</li>
<li><strong>Using $J = F\Delta t$ when the force isn't constant.</strong> That formula needs $F_{\text{avg}}$; for a given $F(t)$, integrate or take the area.</li>
<li><strong>Confusing peak force with average force.</strong> The peak of the pulse can be far larger than $J/\Delta t$.</li>
<li><strong>Thinking a smaller force means a smaller momentum change.</strong> Airbags don't reduce $\Delta p$ — they reduce $F$ by increasing $\Delta t$ for the same $\Delta p$.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`\vec{J} = \int_{t_1}^{t_2} \vec{F}\,dt`, note: "Impulse is the time integral of force — the area under an F–t graph." },
        { latex: String.raw`\vec{J} = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i`, note: "Impulse–momentum theorem; exact for any force profile." },
        { latex: String.raw`\vec{F}_{\text{avg}} = \frac{\Delta\vec{p}}{\Delta t}`, note: "Average force: the constant force that would deliver the same impulse." },
        { latex: String.raw`F\,\Delta t = \Delta p`, note: "Constant-force special case only." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>A $0.20\,\text{kg}$ ball hits a wall horizontally at $5.0\,\text{m/s}$ and rebounds along the same line at $5.0\,\text{m/s}$. What is the magnitude of the impulse the wall exerts on the ball?</p>`,
          choices: [
            String.raw`$2.0\,\text{N}\cdot\text{s}$`,
            String.raw`$1.0\,\text{N}\cdot\text{s}$`,
            String.raw`$0$`,
            String.raw`$4.0\,\text{N}\cdot\text{s}$`
          ],
          answer: 0,
          solution: String.raw`<p>The velocity reverses, so $\Delta v = 5.0 - (-5.0) = 10\,\text{m/s}$ and $J = m\,\Delta v = (0.20)(10) = 2.0\,\text{N}\cdot\text{s}$. Answering $1.0$ means you forgot the rebound; answering $0$ confuses "same speed" with "same velocity."</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A net force $F(t) = 6t^2$ (in newtons, $t$ in seconds) acts on an object from $t = 0$ to $t = 2\,\text{s}$. What impulse is delivered?</p>`,
          choices: [
            String.raw`$16\,\text{N}\cdot\text{s}$`,
            String.raw`$24\,\text{N}\cdot\text{s}$`,
            String.raw`$48\,\text{N}\cdot\text{s}$`,
            String.raw`$8\,\text{N}\cdot\text{s}$`
          ],
          answer: 0,
          solution: String.raw`<p>$J = \int_0^2 6t^2\,dt = \left[2t^3\right]_0^2 = 16\,\text{N}\cdot\text{s}$. The distractor $24$ is $F(2)$ — the force at the end, not its integral — and $48$ is $F(2)\cdot t$, which only works for constant force.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A ball of mass $m$ is dropped from height $h$ and rebounds to height $h/4$. Taking upward as positive, the impulse delivered to the ball by the floor has magnitude</p>`,
          choices: [
            String.raw`$\tfrac{3}{2}m\sqrt{2gh}$`,
            String.raw`$\tfrac{1}{2}m\sqrt{2gh}$`,
            String.raw`$m\sqrt{2gh}$`,
            String.raw`$\tfrac{5}{4}m\sqrt{2gh}$`
          ],
          answer: 0,
          solution: String.raw`<p>Arrival speed: $\sqrt{2gh}$ downward. Rebound speed: $\sqrt{2g(h/4)} = \tfrac{1}{2}\sqrt{2gh}$ upward. So $J = m\left(\tfrac{1}{2}\sqrt{2gh}\right) - m\left(-\sqrt{2gh}\right) = \tfrac{3}{2}m\sqrt{2gh}$. The distractor $\tfrac{1}{2}m\sqrt{2gh}$ comes from subtracting magnitudes instead of signed momenta.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>A batter strikes a baseball of mass $m$ that arrives horizontally with speed $v_0$. During contact, the bat exerts a horizontal force on the ball of magnitude $F(t) = F_{\max}\sin\!\left(\dfrac{\pi t}{T}\right)$ for $0 \le t \le T$, directed opposite to the ball's initial motion. Neglect gravity during the brief contact.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Derive an expression for the magnitude of the impulse the bat delivers to the ball.</p>`,
              solution: String.raw`<p>$$J = \int_0^T F_{\max}\sin\!\left(\frac{\pi t}{T}\right)dt = F_{\max}\left[-\frac{T}{\pi}\cos\!\left(\frac{\pi t}{T}\right)\right]_0^T = \frac{F_{\max}T}{\pi}\left(1 - (-1)\right) = \frac{2F_{\max}T}{\pi}.$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Taking the ball's final motion (away from the bat) as positive, derive an expression for the ball's speed when it leaves the bat. Assume the impulse is large enough to reverse the ball's motion.</p>`,
              solution: String.raw`<p>With the final direction positive, the ball arrives with momentum $-mv_0$ and the impulse $+J$ gives $mv_f = -mv_0 + J$, so $$v_f = \frac{2F_{\max}T}{\pi m} - v_0.$$ The condition for reversal is $\frac{2F_{\max}T}{\pi} > mv_0$, consistent with the assumption.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Determine the average force exerted on the ball during contact, and explain in one or two sentences how it compares with $F_{\max}$.</p>`,
              solution: String.raw`<p>$$F_{\text{avg}} = \frac{J}{T} = \frac{2F_{\max}}{\pi} \approx 0.64\,F_{\max}.$$ The average is less than the peak because the force ramps up from zero and back down; the rectangle of height $F_{\text{avg}}$ has the same area as the sine pulse.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>A $5.0\,\text{kg}$ cart moves at $2.0\,\text{m/s}$ in the $+x$ direction on a frictionless track. A force in the $+x$ direction is then applied with the following profile: it increases linearly from $0$ to $200\,\text{N}$ between $t = 0$ and $t = 0.10\,\text{s}$, stays constant at $200\,\text{N}$ until $t = 0.30\,\text{s}$, then decreases linearly to $0$ at $t = 0.40\,\text{s}$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Using the area under the $F$–$t$ graph, calculate the impulse delivered to the cart.</p>`,
              solution: String.raw`<p>The graph is a trapezoid: a triangle ($\tfrac{1}{2}\cdot 0.10 \cdot 200 = 10$), a rectangle ($0.20 \cdot 200 = 40$), and a triangle ($\tfrac{1}{2}\cdot 0.10 \cdot 200 = 10$). $$J = 10 + 40 + 10 = 60\,\text{N}\cdot\text{s}, \text{ in the } +x \text{ direction.}$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Calculate the cart's velocity at $t = 0.40\,\text{s}$.</p>`,
              solution: String.raw`<p>Impulse–momentum theorem: $\Delta v = J/m = 60/5.0 = 12\,\text{m/s}$. $$v_f = 2.0 + 12 = 14\,\text{m/s} \text{ in the } +x \text{ direction.}$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Calculate the average force on the cart over the interval $0 \le t \le 0.40\,\text{s}$, and explain why it is less than $200\,\text{N}$.</p>`,
              solution: String.raw`<p>$$F_{\text{avg}} = \frac{J}{\Delta t} = \frac{60}{0.40} = 150\,\text{N}.$$ It is less than the $200\,\text{N}$ peak because the force spends the first and last $0.10\,\text{s}$ below its maximum; the average is the constant force that would sweep out the same area in the same time.</p>`
            }
          ]
        }
      ]
    },
    {
      id: "4.3",
      title: "Conservation of Linear Momentum",
      blurb: "Explosions, recoils, and collisions all obey one bookkeeping rule: an isolated system's total momentum never changes.",
      objectives: [
        "Justify, from Newton's third law, why internal forces cannot change a system's total momentum.",
        "Apply conservation of momentum to collisions, explosions, and recoil problems in one and two dimensions.",
        "Use the center-of-mass velocity as a shortcut: it is constant for an isolated system, before, during, and after any internal interaction."
      ],
      sections: [
        {
          heading: "The Core Idea",
          content: String.raw`<p>Start from $\vec{F}_{\text{net,ext}} = \frac{d\vec{p}_{\text{sys}}}{dt}$. If the net <em>external</em> force on a system is zero, then $\frac{d\vec{p}_{\text{sys}}}{dt} = 0$, so</p>
<p>$$\vec{p}_{\text{sys}} = \text{constant}.$$</p>
<p>Why don't internal forces count? Newton's third law: when particle 1 pushes particle 2 with force $\vec{F}_{12}$, particle 2 pushes back with $-\vec{F}_{12}$. Summed over the whole system, internal forces cancel in pairs. They can shuffle momentum <em>between</em> parts of the system at any rate they like, but the total is untouchable.</p>
<p>This is why momentum conservation works even for violent, messy events — explosions, car crashes, bullets embedding in blocks — where energy bookkeeping is hopeless. You never need to know the forces; you only compare totals before and after.</p>
<div class="callout key">Conservation of momentum is a vector statement: it holds component by component. In 2D, write separate equations for $p_x$ and $p_y$.</div>`
        },
        {
          heading: "Choosing the System (and Checking It's Isolated)",
          content: String.raw`<p>Momentum conservation is only as good as your system choice. Ask two questions: <em>What objects are in my system?</em> and <em>Is the net external force zero (or negligible) during the event?</em></p>
<ul>
<li><strong>Two carts colliding on a track:</strong> include both carts. Gravity and normal forces cancel vertically; with a frictionless track, horizontal momentum is conserved.</li>
<li><strong>Bullet embedding in a block:</strong> during the few milliseconds of impact, the enormous internal impact forces dwarf friction's impulse, so momentum is conserved <em>during the collision</em> even if friction acts afterward.</li>
<li><strong>Projectile exploding mid-flight:</strong> gravity is external, so the total momentum changes — but the explosion itself (internal) conserves momentum across the instant of the blast, and the center of mass continues on the original parabola.</li>
</ul>
<p>That last point is the famous result: internal forces cannot deflect the center of mass. The fragments scatter, but $\vec{v}_{\text{cm}}$ the instant after the explosion equals $\vec{v}_{\text{cm}}$ the instant before.</p>`
        },
        {
          heading: "Interactive: Total Momentum Never Budges",
          sim: "collision",
          simCaption: "Run collisions at several elasticity settings, including an 'explosion' (carts initially together, then pushed apart). The kinetic energy readout jumps around — the total momentum readout never does.",
          content: String.raw`<p>Set up an explosion: start the carts at rest together and let the spring fling them apart. Total momentum before is zero, so it must be zero after — the carts recoil with momenta of equal magnitude and opposite direction, meaning the lighter cart leaves faster: $m_1 v_1 = m_2 v_2$.</p>`
        },
        {
          heading: "The Center-of-Mass Frame",
          content: String.raw`<p>A powerful trick: view the collision from a frame moving with the center of mass, $v_{\text{cm}} = \dfrac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$. In that frame the total momentum is exactly zero — the two objects always approach with equal and opposite momenta, collide, and leave with equal and opposite momenta.</p>
<p>For example, cart 1 ($m$, moving at $v_0$) approaches cart 2 ($2m$, at rest). Then $v_{\text{cm}} = v_0/3$. In the CM frame, cart 1 moves at $v_0 - v_0/3 = \tfrac{2}{3}v_0$ and cart 2 at $-\tfrac{1}{3}v_0$; their momenta are $+\tfrac{2}{3}mv_0$ and $-\tfrac{2}{3}mv_0$. Perfectly balanced, as conservation demands.</p>
<p>In the CM frame, a perfectly inelastic collision is trivial: everything just stops (zero total momentum, one combined object). And an elastic collision simply <em>reverses</em> each velocity. Transform back by adding $v_{\text{cm}}$ and you have the lab-frame answers with almost no algebra.</p>
<div class="callout">Whenever a collision problem looks algebra-heavy, try it in the CM frame — especially elastic collisions.</div>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Conserving momentum when a net external force acts</strong> — e.g., during a collision with a wall or the Earth, the system (ball alone) is not isolated; its momentum changes.</li>
<li><strong>Adding momenta as scalars in 2D.</strong> Conserve $p_x$ and $p_y$ separately; magnitudes of momentum do not add.</li>
<li><strong>Assuming kinetic energy is conserved too.</strong> Momentum conservation says nothing about KE; explosions <em>increase</em> KE, inelastic collisions decrease it.</li>
<li><strong>Forgetting that conservation holds during the collision even with friction present</strong>, because the collision impulse dominates over the short contact time.</li>
<li><strong>Sign errors in recoil problems.</strong> If the system starts at rest, the final momenta must be opposite in direction — one of them is negative.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`\sum \vec{F}_{\text{ext}} = 0 \;\Rightarrow\; \vec{p}_{\text{sys}} = \text{constant}`, note: "Conservation of linear momentum for an isolated system." },
        { latex: String.raw`m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = m_1\vec{v}_{1f} + m_2\vec{v}_{2f}`, note: "Two-object form; apply per component in 2D." },
        { latex: String.raw`\vec{v}_{\text{cm}} = \frac{m_1\vec{v}_1 + m_2\vec{v}_2}{m_1 + m_2}`, note: "Center-of-mass velocity; constant for an isolated system." },
        { latex: String.raw`0 = m_1\vec{v}_1 + m_2\vec{v}_2`, note: "Explosion/recoil from rest: final momenta are equal and opposite." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>Two ice skaters start at rest and push off each other on frictionless ice. The $40\,\text{kg}$ skater moves away at $3.0\,\text{m/s}$. What is the speed of the $60\,\text{kg}$ skater?</p>`,
          choices: [
            String.raw`$2.0\,\text{m/s}$`,
            String.raw`$3.0\,\text{m/s}$`,
            String.raw`$4.5\,\text{m/s}$`,
            String.raw`$1.3\,\text{m/s}$`
          ],
          answer: 0,
          solution: String.raw`<p>Total momentum starts (and stays) zero: $m_1 v_1 = m_2 v_2$, so $v = \frac{(40)(3.0)}{60} = 2.0\,\text{m/s}$, opposite the first skater. The heavier skater moves slower — equal momenta, not equal speeds.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A shell moving horizontally with speed $v$ at the top of its trajectory explodes into two fragments of equal mass. One fragment's velocity is exactly zero just after the explosion. What is the speed of the other fragment just after the explosion?</p>`,
          choices: [
            String.raw`$2v$`,
            String.raw`$v$`,
            String.raw`$v/2$`,
            String.raw`$\sqrt{2}\,v$`
          ],
          answer: 0,
          solution: String.raw`<p>The explosion is internal, so momentum is conserved across the blast: $Mv = \frac{M}{2}(0) + \frac{M}{2}v'$, giving $v' = 2v$, still horizontal. The center of mass continues at $v$ — the dead fragment's loss is exactly the other fragment's gain.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A person of mass $m$ stands at rest on a plank of mass $M$ that rests on frictionless ice. The person walks so that their velocity relative to the <em>ice</em> is $v$ to the right. What is the plank's velocity?</p>`,
          choices: [
            String.raw`$\dfrac{mv}{M}$ to the left`,
            String.raw`$\dfrac{mv}{M+m}$ to the left`,
            String.raw`$v$ to the left`,
            String.raw`$\dfrac{Mv}{m}$ to the left`
          ],
          answer: 0,
          solution: String.raw`<p>The system starts at rest, so total momentum stays zero: $mv + MV = 0 \Rightarrow V = -\frac{mv}{M}$. The distractor $\frac{mv}{M+m}$ is what you would get if $v$ were the person's speed <em>relative to the plank</em> — read relative-velocity statements carefully.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>An object of mass $3m$ is at rest when an internal explosion breaks it into three pieces, each of mass $m$. Immediately afterward, piece 1 moves with velocity $v_0\,\hat{x}$ and piece 2 moves with velocity $v_0\,\hat{y}$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Determine the velocity (magnitude and direction) of piece 3 immediately after the explosion.</p>`,
              solution: String.raw`<p>Total momentum must remain zero, component by component: $$\vec{p}_3 = -(\vec{p}_1 + \vec{p}_2) = -mv_0\,\hat{x} - mv_0\,\hat{y} \;\Rightarrow\; \vec{v}_3 = -v_0(\hat{x} + \hat{y}).$$ Magnitude: $v_3 = \sqrt{v_0^2 + v_0^2} = \sqrt{2}\,v_0$, directed at $45^\circ$ below the $-x$ axis (i.e., $225^\circ$ from $+x$).</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Calculate the total kinetic energy released by the explosion in terms of $m$ and $v_0$.</p>`,
              solution: String.raw`<p>Initial KE is zero, so the released energy equals the final KE: $$K = \tfrac{1}{2}mv_0^2 + \tfrac{1}{2}mv_0^2 + \tfrac{1}{2}m(\sqrt{2}v_0)^2 = \tfrac{1}{2}mv_0^2 + \tfrac{1}{2}mv_0^2 + mv_0^2 = 2mv_0^2.$$ This energy came from chemical (internal) energy — momentum conservation does not forbid KE from appearing.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Describe the motion of the system's center of mass after the explosion, and justify your answer.</p>`,
              solution: String.raw`<p>It remains at rest at the original location. The explosion forces are entirely internal, so they cannot change the system's total momentum, which was zero; since $\vec{p}_{\text{sys}} = (3m)\vec{v}_{\text{cm}}$, the center of mass stays put even as the fragments fly apart.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>On a frictionless track, cart 1 (mass $m$, speed $v_0$ to the right) approaches cart 2 (mass $2m$, at rest). They are about to collide.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Determine the velocity of the center of mass of the two-cart system before the collision.</p>`,
              solution: String.raw`<p>$$v_{\text{cm}} = \frac{m v_0 + 2m(0)}{m + 2m} = \frac{v_0}{3}, \text{ to the right.}$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Determine each cart's velocity in the center-of-mass reference frame, and show explicitly that the total momentum in that frame is zero.</p>`,
              solution: String.raw`<p>Subtract $v_{\text{cm}}$ from each lab velocity: $u_1 = v_0 - \frac{v_0}{3} = \frac{2v_0}{3}$ and $u_2 = 0 - \frac{v_0}{3} = -\frac{v_0}{3}$. Total momentum: $$m\left(\frac{2v_0}{3}\right) + 2m\left(-\frac{v_0}{3}\right) = \frac{2mv_0}{3} - \frac{2mv_0}{3} = 0.\;\checkmark$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>The carts collide and stick together. Using the center-of-mass frame (or otherwise), determine their common final velocity in the lab frame, and explain why the answer is immediate in the CM frame.</p>`,
              solution: String.raw`<p>In the CM frame the total momentum is zero, so when the carts merge into one object, that object must be at rest <em>in the CM frame</em>. Transforming back to the lab frame, the combined cart moves at $v_{\text{cm}} = \frac{v_0}{3}$ to the right. (Check with lab-frame conservation: $mv_0 = 3m\,v_f \Rightarrow v_f = v_0/3$. ✓)</p>`
            },
            {
              label: "(d)",
              prompt: String.raw`<p>Is the velocity of the center of mass changed by the collision? Justify your answer in one or two sentences.</p>`,
              solution: String.raw`<p>No. The collision forces are internal to the two-cart system and the track is frictionless, so the net external force is zero; therefore $\vec{p}_{\text{sys}}$ — and with it $\vec{v}_{\text{cm}} = \vec{p}_{\text{sys}}/3m$ — is constant throughout.</p>`
            }
          ]
        }
      ]
    },
    {
      id: "4.4",
      title: "Elastic and Inelastic Collisions",
      blurb: "Momentum is always conserved in collisions — kinetic energy is the part you have to audit.",
      objectives: [
        "Classify collisions as elastic, inelastic, or perfectly inelastic based on what happens to kinetic energy.",
        "Derive and apply the final velocities for a 1D elastic collision, and check them in limiting cases.",
        "Analyze 2D collisions by conserving momentum components, and account for kinetic energy converted to other forms."
      ],
      sections: [
        {
          heading: "The Core Idea: A Taxonomy of Collisions",
          content: String.raw`<p>In <em>every</em> collision between objects forming an isolated system, momentum is conserved. Kinetic energy is the variable that distinguishes the types:</p>
<ul>
<li><strong>Elastic:</strong> total KE is the same before and after. Idealized — billiard balls and atomic collisions come close.</li>
<li><strong>Inelastic:</strong> some KE is converted to thermal energy, sound, or deformation. Most real collisions.</li>
<li><strong>Perfectly inelastic:</strong> the objects stick together and move with a common velocity. This is the <em>maximum possible</em> KE loss consistent with momentum conservation — the only KE left is the unavoidable $\tfrac{1}{2}(m_1+m_2)v_{\text{cm}}^2$ of the center of mass.</li>
</ul>
<p>For sticking collisions, one equation does it all:</p>
<p>$$v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$</p>
<p>— which is just $v_{\text{cm}}$. Of course it is: when everything moves together, everything moves with the center of mass.</p>
<div class="callout warn">"Perfectly inelastic" does not mean "all KE is lost." KE associated with center-of-mass motion can never be destroyed by internal forces.</div>`
        },
        {
          heading: "Deriving the 1D Elastic Results",
          content: String.raw`<p>Let $m_1$ with velocity $v_0$ strike $m_2$ at rest, elastically. Conservation of momentum and of kinetic energy give:</p>
<p>$$m_1 v_0 = m_1 v_1 + m_2 v_2, \qquad \tfrac{1}{2}m_1 v_0^2 = \tfrac{1}{2}m_1 v_1^2 + \tfrac{1}{2}m_2 v_2^2.$$</p>
<p>Rearrange each: $m_1(v_0 - v_1) = m_2 v_2$ and $m_1(v_0^2 - v_1^2) = m_2 v_2^2$. Divide the second by the first (assuming $v_2 \neq 0$):</p>
<p>$$v_0 + v_1 = v_2,$$</p>
<p>which is the elegant statement that <strong>the relative velocity reverses</strong>: $v_{\text{approach}} = v_{\text{separation}}$. Substituting back:</p>
<p>$$v_1 = \frac{m_1 - m_2}{m_1 + m_2}\,v_0, \qquad v_2 = \frac{2m_1}{m_1 + m_2}\,v_0.$$</p>
<p>Limiting cases (always check!): equal masses ($m_1 = m_2$) → $v_1 = 0$, $v_2 = v_0$: the carts <em>exchange velocities</em>. Heavy target ($m_2 \gg m_1$) → $v_1 \approx -v_0$: the projectile bounces straight back. Heavy projectile ($m_1 \gg m_2$) → $v_1 \approx v_0$, $v_2 \approx 2v_0$: the target is flung forward at twice the projectile's speed.</p>`
        },
        {
          heading: "Interactive: Slide the Elasticity",
          sim: "collision",
          simCaption: "Set m₁ = m₂ with the target at rest. At elasticity 1, watch the velocities swap; at 0, watch the carts stick and exactly half the KE vanish. Then make m₂ huge and watch the bounce-back.",
          content: String.raw`<p>The elasticity slider interpolates between the two extremes you just derived. Verify each limiting case from the derivation above — especially that the momentum readout is identical at every slider setting while the KE readout is not.</p>`
        },
        {
          heading: "KE Bookkeeping",
          graph: {
            xLabel: "elasticity e", yLabel: "KE retained / KE initial", xMin: 0, xMax: 1, yMin: 0, yMax: 1.1,
            fns: [ { expr: "(1 + x*x)/2", label: "equal masses, target at rest", color: "#34d399" } ],
            hlines: [ { y: 0.5, label: "perfectly inelastic floor" } ]
          },
          graphCaption: "Fraction of kinetic energy surviving an equal-mass collision (target initially at rest) as elasticity varies. Sticking (e = 0) keeps exactly half; elastic (e = 1) keeps all of it.",
          content: String.raw`<p>For equal masses with the target at rest, the final velocities at elasticity $e$ are $v_1 = \tfrac{1-e}{2}v_0$ and $v_2 = \tfrac{1+e}{2}v_0$, so the surviving KE fraction is $\frac{(1-e)^2 + (1+e)^2}{4} = \frac{1+e^2}{2}$ — the curve above.</p>
<p>More generally, when $m_1$ sticks to a stationary $m_2$, the fraction of KE <em>lost</em> is $\dfrac{m_2}{m_1+m_2}$: a bullet ($m_1$ small) embedding in a heavy block loses almost all its KE to heat and deformation. This is why a ballistic pendulum must be solved in two stages — momentum conservation for the collision, then energy conservation for the swing — never energy straight through.</p>
<p>In <strong>2D</strong>, conserve $p_x$ and $p_y$ separately. A famous special case: when equal masses collide elastically and one is initially at rest (a glancing billiards shot), the final velocities are perpendicular. Proof sketch: $\vec{v}_0 = \vec{v}_1 + \vec{v}_2$ (momentum) and $v_0^2 = v_1^2 + v_2^2$ (energy); squaring the first and comparing forces $\vec{v}_1 \cdot \vec{v}_2 = 0$.</p>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Assuming KE conservation in every collision.</strong> Only elastic collisions conserve KE. Momentum is the universally conserved quantity.</li>
<li><strong>Using energy conservation across the embedding stage of a ballistic pendulum.</strong> The collision is perfectly inelastic; energy conservation applies only to the swing afterward.</li>
<li><strong>Thinking sticking collisions destroy all KE.</strong> The CM keeps moving; only the KE of relative motion is lost.</li>
<li><strong>Misapplying the elastic formulas when the target is moving.</strong> The formulas derived here assume $v_{2i} = 0$; otherwise use the relative-velocity-reversal rule $v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$ together with momentum conservation.</li>
<li><strong>Treating 2D momenta as scalars.</strong> Set up $x$ and $y$ component equations; magnitudes don't simply add or subtract.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}`, note: "Perfectly inelastic (sticking) collision — the objects share the CM velocity." },
        { latex: String.raw`v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}\,v_{1i}`, note: "1D elastic collision, target initially at rest." },
        { latex: String.raw`v_{2f} = \frac{2m_1}{m_1 + m_2}\,v_{1i}`, note: "1D elastic collision, target initially at rest." },
        { latex: String.raw`v_{1i} - v_{2i} = -(v_{1f} - v_{2f})`, note: "Elastic collisions reverse the relative velocity; valid even if both objects move initially." },
        { latex: String.raw`\frac{\Delta K}{K_i} = \frac{m_2}{m_1 + m_2}`, note: "Fraction of KE lost when m₁ sticks to a stationary m₂." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>A $3.0\,\text{kg}$ cart moving at $4.0\,\text{m/s}$ collides with and sticks to a $1.0\,\text{kg}$ cart at rest. What is their common speed after the collision?</p>`,
          choices: [
            String.raw`$3.0\,\text{m/s}$`,
            String.raw`$4.0\,\text{m/s}$`,
            String.raw`$2.0\,\text{m/s}$`,
            String.raw`$1.0\,\text{m/s}$`
          ],
          answer: 0,
          solution: String.raw`<p>Momentum conservation: $v_f = \frac{(3.0)(4.0) + 0}{3.0 + 1.0} = \frac{12}{4} = 3.0\,\text{m/s}$. Kinetic energy is <em>not</em> conserved here (it drops from $24\,\text{J}$ to $18\,\text{J}$), so any approach based on KE would be wrong.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>Cart A moving at speed $v$ collides head-on and <em>elastically</em> with identical cart B, which is at rest. What happens?</p>`,
          choices: [
            String.raw`A stops; B moves off at $v$.`,
            String.raw`They move off together at $v/2$.`,
            String.raw`A rebounds at $v/2$; B moves at $v/2$.`,
            String.raw`A continues at $v/2$; B moves at $v/2$.`
          ],
          answer: 0,
          solution: String.raw`<p>For equal masses, the elastic formulas give $v_A = \frac{m-m}{2m}v = 0$ and $v_B = \frac{2m}{2m}v = v$: the carts exchange velocities. The "move together at $v/2$" outcome is the <em>perfectly inelastic</em> result — it conserves momentum but loses half the KE, so it can't be the elastic answer.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A billiard ball moving with velocity $\vec{v}_0$ strikes an identical, stationary ball in a glancing, <em>elastic</em> collision. Neither ball is left at rest. The angle between the two balls' final velocities is</p>`,
          choices: [
            String.raw`$90^\circ$ always`,
            String.raw`$45^\circ$ always`,
            String.raw`$60^\circ$ always`,
            String.raw`dependent on how off-center the hit is`
          ],
          answer: 0,
          solution: String.raw`<p>Momentum: $\vec{v}_0 = \vec{v}_1 + \vec{v}_2$. Squaring: $v_0^2 = v_1^2 + v_2^2 + 2\vec{v}_1\cdot\vec{v}_2$. Elastic KE conservation (equal masses): $v_0^2 = v_1^2 + v_2^2$. Subtracting forces $\vec{v}_1 \cdot \vec{v}_2 = 0$ — the velocities are perpendicular regardless of impact parameter (as long as both balls move). The off-center geometry changes how speed is shared, not the $90^\circ$ opening angle.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>An object of mass $m_1$ moving with speed $v_0$ collides head-on and elastically with an object of mass $m_2$ initially at rest on a frictionless surface.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Write the two conservation equations that govern this collision.</p>`,
              solution: String.raw`<p>Momentum: $m_1 v_0 = m_1 v_1 + m_2 v_2$. Kinetic energy (elastic): $\tfrac{1}{2}m_1 v_0^2 = \tfrac{1}{2}m_1 v_1^2 + \tfrac{1}{2}m_2 v_2^2$.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Derive expressions for the final velocities $v_1$ and $v_2$ in terms of $m_1$, $m_2$, and $v_0$.</p>`,
              solution: String.raw`<p>Rewrite the equations as $m_1(v_0 - v_1) = m_2 v_2$ and $m_1(v_0 - v_1)(v_0 + v_1) = m_2 v_2^2$. Dividing the second by the first (valid since $v_2 \ne 0$) gives $v_0 + v_1 = v_2$. Substitute into the momentum equation: $m_1 v_0 = m_1 v_1 + m_2(v_0 + v_1)$, so $$v_1 = \frac{m_1 - m_2}{m_1 + m_2}\,v_0, \qquad v_2 = v_0 + v_1 = \frac{2m_1}{m_1 + m_2}\,v_0.$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Evaluate your expressions in the limits $m_1 = m_2$, $m_2 \gg m_1$, and $m_1 \gg m_2$, and state in one sentence each what the result means physically.</p>`,
              solution: String.raw`<p>$m_1 = m_2$: $v_1 = 0$, $v_2 = v_0$ — the objects exchange velocities, like billiard balls head-on. $m_2 \gg m_1$: $v_1 \to -v_0$, $v_2 \to 0$ — the light projectile bounces back off the massive target at nearly its original speed, like a ball off a wall. $m_1 \gg m_2$: $v_1 \to v_0$, $v_2 \to 2v_0$ — the heavy projectile barrels on almost unaffected while the light target is flung forward at twice the incoming speed.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>A ballistic pendulum: a bullet of mass $m$ traveling horizontally at speed $v$ embeds itself in a wooden block of mass $M$ hanging from light strings. The block (with the bullet inside) swings up, rising a maximum height $h$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Derive an expression for the speed of the block-plus-bullet immediately after the bullet embeds, in terms of $m$, $M$, and $v$. State the physical principle you used and why it applies.</p>`,
              solution: String.raw`<p>During the few milliseconds of embedding, the impact forces are internal to the bullet–block system and far exceed gravity and string tension, so horizontal momentum is conserved: $$mv = (m+M)v' \;\Rightarrow\; v' = \frac{m}{m+M}\,v.$$ Kinetic energy is <em>not</em> conserved here — the bullet does enormous deforming work on the wood.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Derive an expression for the initial bullet speed $v$ in terms of $m$, $M$, $g$, and the measured rise height $h$.</p>`,
              solution: String.raw`<p>After the collision, the swing is smooth and the strings do no work, so mechanical energy is conserved: $\tfrac{1}{2}(m+M)v'^2 = (m+M)gh$, giving $v' = \sqrt{2gh}$. Combining with part (a): $$v = \frac{m+M}{m}\sqrt{2gh}.$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Determine the fraction of the bullet's initial kinetic energy that is converted to thermal energy and deformation during the embedding, and explain why a student who applied energy conservation to the entire process would badly miscalculate $v$.</p>`,
              solution: String.raw`<p>$$\frac{K_f}{K_i} = \frac{\tfrac{1}{2}(m+M)v'^2}{\tfrac{1}{2}mv^2} = \frac{(m+M)}{m}\cdot\frac{m^2}{(m+M)^2} = \frac{m}{m+M},$$ so the fraction lost is $\dfrac{M}{m+M}$ — nearly all of it when $M \gg m$. A student equating $\tfrac{1}{2}mv^2 = (m+M)gh$ ignores this loss and would infer a bullet speed that is far too small, by the factor $\sqrt{m/(m+M)}$. The collision and the swing must be handled with different conservation laws.</p>`
            }
          ]
        }
      ]
    }
  ]
});
