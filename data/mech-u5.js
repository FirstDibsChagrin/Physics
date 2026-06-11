/* data/mech-u5.js — Unit 5: Torque and Rotational Dynamics */
AP.registerUnit({
  id: 5,
  course: "mech",
  title: "Torque and Rotational Dynamics",
  weight: "10–15%",
  tagline: "Everything you know about forces and acceleration, rebuilt for things that spin.",
  bigIdeas: [
    "Rotational motion has a perfect dictionary with linear motion: θ ↔ x, ω ↔ v, α ↔ a, τ ↔ F, I ↔ m.",
    "Torque, not force, causes angular acceleration — where and in what direction you push matters as much as how hard.",
    "Rotational inertia depends on how mass is distributed about the axis, and calculus (I = ∫r²dm) lets you compute it for real objects."
  ],
  topics: [

    /* ------------------------------------------------------------------ */
    {
      id: "5.1",
      title: "Rotational Kinematics",
      blurb: "Angle, angular velocity, and angular acceleration — kinematics all over again, one derivative at a time.",
      objectives: [
        "Define angular position, angular velocity, and angular acceleration as calculus relationships: ω = dθ/dt and α = dω/dt.",
        "Apply the constant-angular-acceleration equations to rotating objects.",
        "Translate between θ(t), ω(t), and α(t) graphs using slopes and areas.",
        "Use integration to handle non-constant angular acceleration."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>To describe a spinning object you do not track every particle — you track one number: the <strong>angular position</strong> $\theta$, measured in radians from a reference line. Everything else follows by differentiation, exactly as in Unit 1:</p>
<p>$$\omega = \frac{d\theta}{dt}, \qquad \alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$</p>
<p>Angular velocity $\omega$ (rad/s) tells you how fast the angle sweeps; angular acceleration $\alpha$ (rad/s²) tells you how fast $\omega$ changes. Signs encode direction: pick counterclockwise as positive (the standard choice) and stick with it. If $\omega$ and $\alpha$ have the same sign the rotation speeds up; opposite signs mean it slows down — same rule you learned for $v$ and $a$.</p>
<div class="callout key">Radians are mandatory. Every formula in this unit ($s = r\theta$, $v = r\omega$, $K = \tfrac{1}{2}I\omega^2$) silently assumes angles in radians, not degrees or revolutions.</div>` },
        { heading: "Constant α: The Same Four Equations",
          content: String.raw`<p>If $\alpha$ is constant, integrate twice. From $\alpha = d\omega/dt$:</p>
<p>$$\omega = \omega_0 + \alpha t, \qquad \theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2$$</p>
<p>Eliminating $t$ gives the time-free workhorse $\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta$. These are the linear kinematics equations with letters swapped — if you can solve a braking-car problem, you can solve a slowing-flywheel problem.</p>
<p>When $\alpha$ is <em>not</em> constant, drop the shortcuts and integrate directly:</p>
<p>$$\omega(t) = \omega_0 + \int_0^t \alpha\,dt', \qquad \theta(t) = \theta_0 + \int_0^t \omega\,dt'$$</p>
<p>AP Physics C loves this move: given $\alpha(t) = 6t$, you must integrate, not plug into $\omega = \omega_0 + \alpha t$. Always check whether the problem says "constant angular acceleration" before reaching for the standard four.</p>` },
        { heading: "Interactive: Watching ω in Action",
          sim: "circular",
          simCaption: "Watch the angular position sweep around. Change the rotation rate and notice how the velocity vector's direction constantly changes even when ω is steady.",
          content: String.raw`<p>In the sim, the dot's angular position $\theta$ grows steadily when $\omega$ is constant — the $\theta(t)$ graph would be a straight line whose slope is $\omega$. Uniform circular motion is the rotational analog of constant-velocity motion.</p>` },
        { heading: "Reading the Graphs",
          graph: { xLabel: "t (s)", yLabel: "ω (rad/s)", xMin: 0, xMax: 5, yMin: 0, yMax: 16,
                   fns: [ { expr: "2 + 3*x", label: "ω(t) = 2 + 3t", color: "#fbbf24" } ],
                   shade: { expr: "2 + 3*x", from: 0, to: 4 } },
          graphCaption: "Slope of ω(t) is α (here 3 rad/s²); the shaded area from 0 to 4 s is the angular displacement Δθ = 32 rad.",
          content: String.raw`<p>Graph fluency transfers directly from Unit 1:</p>
<ul>
<li>Slope of $\theta(t)$ → $\omega$. Slope of $\omega(t)$ → $\alpha$.</li>
<li>Area under $\omega(t)$ → $\Delta\theta$. Area under $\alpha(t)$ → $\Delta\omega$.</li>
</ul>
<p>For the line shown, $\Delta\theta = \int_0^4 (2 + 3t)\,dt = 2(4) + \tfrac{3}{2}(16) = 32$ rad. You could also read it geometrically as a trapezoid: average $\omega$ of $(2+14)/2 = 8$ rad/s times 4 s. On the exam, a quick trapezoid beats an integral when the graph is straight lines.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Degrees and revolutions:</strong> convert to radians first. One revolution is $2\pi$ rad — a wheel doing "300 rpm" has $\omega = 300 \times 2\pi/60 = 10\pi$ rad/s.</li>
<li><strong>Using constant-α equations when α varies:</strong> if $\alpha$ depends on $t$, $\theta$, or $\omega$, you must integrate (or use energy methods later).</li>
<li><strong>Sign confusion:</strong> "decelerating" means $\alpha$ opposes $\omega$, not that $\alpha$ is automatically negative. Define positive direction explicitly.</li>
<li><strong>Mixing up $\omega = 0$ and $\alpha = 0$:</strong> at the instant a rotating object reverses direction, $\omega = 0$ but $\alpha \neq 0$ — the rotational version of a ball at the top of its flight.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\omega = \frac{d\theta}{dt}, \qquad \alpha = \frac{d\omega}{dt}`, note: "Definitions — always true, constant α or not." },
        { latex: String.raw`\omega = \omega_0 + \alpha t`, note: "Constant angular acceleration only." },
        { latex: String.raw`\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2`, note: "Constant angular acceleration only." },
        { latex: String.raw`\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta`, note: "Constant α; eliminates time — great for 'after how many radians' questions." },
        { latex: String.raw`\Delta\theta = \int \omega\,dt, \qquad \Delta\omega = \int \alpha\,dt`, note: "Use these when α is not constant." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A wheel's angular position is $\theta(t) = 2t^3 - t^2$ rad. What is its angular acceleration at $t = 1\,\text{s}$?</p>`,
          choices: [ String.raw`$4\,\text{rad/s}^2$`, String.raw`$10\,\text{rad/s}^2$`, String.raw`$12\,\text{rad/s}^2$`, String.raw`$5\,\text{rad/s}^2$` ],
          answer: 1,
          solution: String.raw`<p>Differentiate twice: $\omega = 6t^2 - 2t$ and $\alpha = 12t - 2$. At $t = 1$ s, $\alpha = 10\,\text{rad/s}^2$. The value $4\,\text{rad/s}^2$ is actually $\omega(1)$ — a classic trap of stopping after one derivative.</p>` },
        { type: "mcq",
          q: String.raw`<p>A flywheel spinning at $20\,\text{rad/s}$ slows uniformly to rest while turning through $50\,\text{rad}$. What is its angular acceleration?</p>`,
          choices: [ String.raw`$-2\,\text{rad/s}^2$`, String.raw`$-4\,\text{rad/s}^2$`, String.raw`$-8\,\text{rad/s}^2$`, String.raw`$-0.4\,\text{rad/s}^2$` ],
          answer: 1,
          solution: String.raw`<p>No time given, so use the time-free equation: $\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta$ gives $0 = (20)^2 + 2\alpha(50)$, so $\alpha = -400/100 = -4\,\text{rad/s}^2$. Negative because it opposes the (positive) rotation.</p>` },
        { type: "mcq",
          q: String.raw`<p>A turntable starts from rest at $\theta = 0$ with angular acceleration $\alpha(t) = 6t\ \text{rad/s}^2$. Through what angle has it turned at $t = 2\,\text{s}$?</p>`,
          choices: [ String.raw`$12\,\text{rad}$`, String.raw`$24\,\text{rad}$`, String.raw`$8\,\text{rad}$`, String.raw`$6\,\text{rad}$` ],
          answer: 2,
          solution: String.raw`<p>$\alpha$ is not constant, so integrate: $\omega = \int 6t\,dt = 3t^2$, then $\theta = \int 3t^2\,dt = t^3$. At $t = 2$ s, $\theta = 8$ rad. If you (wrongly) used $\theta = \tfrac{1}{2}\alpha t^2$ with $\alpha = \alpha(2) = 12$, you would get the distractor 24 rad; the value 12 rad/s is $\omega(2)$, not the angle.</p>` },
        { type: "frq",
          q: String.raw`<p>A motorized turntable has angular position $\theta(t) = 4t^2 - t^3$, with $\theta$ in radians and $t$ in seconds, valid for $t \ge 0$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive expressions for the angular velocity $\omega(t)$ and angular acceleration $\alpha(t)$.</p>`,
              solution: String.raw`<p>$\omega(t) = \dfrac{d\theta}{dt} = 8t - 3t^2$ rad/s and $\alpha(t) = \dfrac{d\omega}{dt} = 8 - 6t$ rad/s². Note that $\alpha$ is not constant, so the standard kinematics equations do not apply here.</p>` },
            { label: "(b)", prompt: String.raw`<p>Determine the time at which the turntable momentarily reverses its direction of rotation. Justify your answer.</p>`,
              solution: String.raw`<p>The turntable reverses when $\omega = 0$ with $\alpha \neq 0$: $8t - 3t^2 = t(8 - 3t) = 0$, so $t = 8/3\,\text{s} \approx 2.67$ s (the $t = 0$ root is just the start). At that instant $\alpha = 8 - 6(8/3) = -8\,\text{rad/s}^2 \neq 0$, confirming a genuine reversal rather than a permanent stop.</p>` },
            { label: "(c)", prompt: String.raw`<p>Calculate the angular displacement between $t = 0$ and the reversal time found in (b).</p>`,
              solution: String.raw`<p>Since $\omega$ does not change sign on $(0, 8/3)$, the displacement is just $\theta(8/3) - \theta(0) = 4\left(\tfrac{8}{3}\right)^2 - \left(\tfrac{8}{3}\right)^3 = \tfrac{256}{9} - \tfrac{512}{27} = \tfrac{768 - 512}{27} = \tfrac{256}{27} \approx 9.5$ rad.</p>` },
            { label: "(d)", prompt: String.raw`<p>Calculate the average angular velocity over the interval from $t = 0$ to the reversal time.</p>`,
              solution: String.raw`<p>$\bar{\omega} = \dfrac{\Delta\theta}{\Delta t} = \dfrac{256/27}{8/3} = \dfrac{256}{27} \cdot \dfrac{3}{8} = \dfrac{32}{9} \approx 3.6\,\text{rad/s}$. This is an average of the function $\omega(t)$, not the average of initial and final values — that shortcut only works for constant $\alpha$.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A flywheel spinning with initial angular speed $\omega_0$ is subject to fluid friction in its bearings, giving it an angular acceleration $\alpha = -k\omega$, where $k$ is a positive constant with units of $\text{s}^{-1}$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for $\omega(t)$.</p>`,
              solution: String.raw`<p>This is a separable differential equation: $\dfrac{d\omega}{dt} = -k\omega \Rightarrow \displaystyle\int_{\omega_0}^{\omega} \frac{d\omega'}{\omega'} = -k\int_0^t dt'$, so $\ln(\omega/\omega_0) = -kt$ and $\omega(t) = \omega_0 e^{-kt}$. Exponential decay — the same math as a discharging capacitor.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the angle $\theta(t)$ turned through after time $t$, taking $\theta(0) = 0$.</p>`,
              solution: String.raw`<p>$\theta(t) = \displaystyle\int_0^t \omega_0 e^{-kt'}\,dt' = \frac{\omega_0}{k}\left(1 - e^{-kt}\right)$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Determine the total angle the flywheel turns through before coming to rest.</p>`,
              solution: String.raw`<p>Take $t \to \infty$: $\theta_{\text{total}} = \dfrac{\omega_0}{k}$. The wheel never strictly stops, but the total angle converges — a finite limit from an infinite time, just like total charge in an RC discharge.</p>` },
            { label: "(d)", prompt: String.raw`<p>Explain why the equation $\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta$ may not be used for this flywheel.</p>`,
              solution: String.raw`<p>That equation is derived assuming $\alpha$ is constant. Here $\alpha = -k\omega$ changes continuously as $\omega$ decays, so the constant-$\alpha$ kinematics equations are invalid; calculus (or, later, energy methods) must be used instead.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "5.2",
      title: "Connecting Linear and Rotational Motion",
      blurb: "One wheel, many speeds: how r converts angular quantities into the linear motion of each point.",
      objectives: [
        "Relate arc length, speed, and tangential acceleration of a point to the angular quantities: s = rθ, v = rω, a_t = rα.",
        "Compute centripetal acceleration a_c = rω² = v²/r for a point on a rotating object.",
        "Combine tangential and centripetal components to find the total acceleration vector of a point."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>Every point on a rigid rotating body shares the <em>same</em> $\theta$, $\omega$, and $\alpha$ — that is what "rigid" means. What differs from point to point is the linear motion, and the conversion factor is simply the distance $r$ from the axis:</p>
<p>$$s = r\theta, \qquad v = r\omega, \qquad a_t = r\alpha$$</p>
<p>Each is the derivative of the previous one with $r$ held constant: $v = ds/dt = r\,d\theta/dt = r\omega$, and $a_t = dv/dt = r\,d\omega/dt = r\alpha$. A point twice as far from the axis moves twice as fast and gains speed twice as quickly, while completing each revolution in exactly the same time.</p>
<div class="callout key">These formulas require radians. They come from the arc-length definition $s = r\theta$, which is only true when $\theta$ is in radians.</div>` },
        { heading: "Two Accelerations, One Vector",
          content: String.raw`<p>A point on a spinning object generally has <strong>two</strong> perpendicular acceleration components:</p>
<ul>
<li><strong>Tangential</strong>, $a_t = r\alpha$: along the direction of motion, present only when the spin rate changes.</li>
<li><strong>Centripetal</strong>, $a_c = r\omega^2 = v^2/r$: pointing toward the axis, present whenever $\omega \neq 0$, because the velocity direction is always turning.</li>
</ul>
<p>The total acceleration is their vector sum:</p>
<p>$$|\vec{a}| = \sqrt{a_t^2 + a_c^2} = r\sqrt{\alpha^2 + \omega^4}$$</p>
<p>and it makes angle $\phi$ with the inward radial direction where $\tan\phi = a_t/a_c$. For uniform circular motion ($\alpha = 0$) the acceleration is purely centripetal; at the instant something starts from rest ($\omega = 0$) it is purely tangential. In between, it tilts.</p>` },
        { heading: "Interactive: Velocity and Acceleration Vectors",
          sim: "circular",
          simCaption: "Watch the velocity vector (always tangent) and the centripetal acceleration vector (always pointing inward). Increase the speed and notice a_c grow like ω² — doubling ω quadruples a_c at fixed r.",
          content: String.raw`<p>The sim shows uniform circular motion: speed constant, yet acceleration nonzero because the velocity <em>direction</em> changes. That inward acceleration is what the $r\omega^2$ term captures.</p>` },
        { heading: "Reading the Graph: a_c Grows Like ω²",
          graph: { xLabel: "ω (rad/s)", yLabel: "a_c (m/s²)", xMin: 0, xMax: 6, yMin: 0, yMax: 20,
                   fns: [ { expr: "0.5*x*x", label: "a_c = rω² (r = 0.5 m)", color: "#34d399" } ] },
          graphCaption: "Centripetal acceleration vs angular speed at fixed r = 0.5 m. The quadratic growth is why centrifuges at high rpm reach thousands of g.",
          content: String.raw`<p>Because $a_c = r\omega^2$, modest increases in spin rate produce dramatic increases in centripetal acceleration. A lab centrifuge at $\omega = 3000\ \text{rpm} \approx 314\ \text{rad/s}$ with $r = 0.1$ m gives $a_c \approx 9.9 \times 10^3\ \text{m/s}^2$ — about 1000g. Watch the two equivalent forms: $a_c = r\omega^2$ is natural when you know the spin rate; $a_c = v^2/r$ when you know the point's speed. They agree because $v = r\omega$.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Comparing points on the same wheel with $v^2/r$:</strong> at fixed $\omega$, a point at $2r$ has $a_c = \omega^2(2r) = 2a_c$, not $4a_c$. The speed also doubles, so $(2v)^2/(2r) = 2v^2/r$. Use $a_c = r\omega^2$ when comparing points on one rigid body.</li>
<li><strong>Forgetting $a_c$ exists when α ≠ 0:</strong> a speeding-up wheel has <em>both</em> $a_t$ and $a_c$; the total acceleration is not just $r\alpha$.</li>
<li><strong>Thinking the "same ω" rule applies across connected wheels:</strong> two pulleys joined by a belt share the same <em>rim speed</em> $v$, not the same $\omega$. Points on one rigid object share $\omega$, not $v$.</li>
<li><strong>Degrees again:</strong> $v = r\omega$ fails spectacularly if $\omega$ is in deg/s or rpm.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`s = r\theta`, note: "Arc length; θ in radians." },
        { latex: String.raw`v = r\omega`, note: "Speed of a point a distance r from the axis." },
        { latex: String.raw`a_t = r\alpha`, note: "Tangential acceleration — changes the point's speed." },
        { latex: String.raw`a_c = r\omega^2 = \frac{v^2}{r}`, note: "Centripetal acceleration — changes the velocity's direction; points toward the axis." },
        { latex: String.raw`|\vec{a}| = \sqrt{a_t^2 + a_c^2}`, note: "Total acceleration when the rotation rate is changing; components are perpendicular." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A point sits $0.50\,\text{m}$ from the axis of a wheel rotating at $\omega = 4.0\,\text{rad/s}$. What is the point's speed?</p>`,
          choices: [ String.raw`$8.0\,\text{m/s}$`, String.raw`$2.0\,\text{m/s}$`, String.raw`$4.0\,\text{m/s}$`, String.raw`$1.0\,\text{m/s}$` ],
          answer: 1,
          solution: String.raw`<p>$v = r\omega = (0.50)(4.0) = 2.0\,\text{m/s}$. The distractor $8.0$ comes from dividing the wrong way; $4.0$ from forgetting $r$ entirely.</p>` },
        { type: "mcq",
          q: String.raw`<p>A wheel spins with $\omega = 2.0\,\text{rad/s}$ while speeding up with $\alpha = 3.0\,\text{rad/s}^2$. What is the magnitude of the total acceleration of a point $2.0\,\text{m}$ from the axis?</p>`,
          choices: [ String.raw`$6.0\,\text{m/s}^2$`, String.raw`$8.0\,\text{m/s}^2$`, String.raw`$10\,\text{m/s}^2$`, String.raw`$14\,\text{m/s}^2$` ],
          answer: 2,
          solution: String.raw`<p>Tangential: $a_t = r\alpha = 6.0\,\text{m/s}^2$. Centripetal: $a_c = r\omega^2 = (2.0)(4.0) = 8.0\,\text{m/s}^2$. They are perpendicular, so $|\vec{a}| = \sqrt{6^2 + 8^2} = 10\,\text{m/s}^2$ — a 3-4-5 triangle. The distractor 14 adds the components like scalars.</p>` },
        { type: "mcq",
          q: String.raw`<p>Points A and B are on the same rotating disk. B is twice as far from the axis as A. Which statement is correct while the disk spins at constant $\omega$?</p>`,
          choices: [ String.raw`B has twice the speed and twice the centripetal acceleration of A`, String.raw`B has twice the speed and four times the centripetal acceleration of A`, String.raw`B has the same speed and twice the centripetal acceleration of A`, String.raw`B has twice the speed and the same centripetal acceleration as A` ],
          answer: 0,
          solution: String.raw`<p>All points share $\omega$, so $v = r\omega$ doubles and $a_c = r\omega^2$ doubles. The tempting "four times" answer misuses $a_c = v^2/r$ by doubling $v$ but forgetting $r$ also doubles: $(2v)^2/(2r) = 2(v^2/r)$.</p>` },
        { type: "frq",
          q: String.raw`<p>A centrifuge sample sits at radius $R$ from the rotation axis. Starting from rest at $t = 0$, the centrifuge has constant angular acceleration $\alpha$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for the time $t_1$ at which the magnitude of the sample's centripetal acceleration equals the magnitude of its tangential acceleration.</p>`,
              solution: String.raw`<p>With $\omega = \alpha t$, we need $a_c = a_t$: $R\omega^2 = R\alpha \Rightarrow (\alpha t_1)^2 = \alpha \Rightarrow t_1 = \dfrac{1}{\sqrt{\alpha}}$. (Dimensionally consistent: $\alpha$ has units $\text{s}^{-2}$, so $1/\sqrt{\alpha}$ has units of seconds.)</p>` },
            { label: "(b)", prompt: String.raw`<p>Determine the magnitude of the sample's total acceleration at time $t_1$, in terms of $\alpha$ and $R$.</p>`,
              solution: String.raw`<p>At $t_1$ both components equal $R\alpha$, and they are perpendicular, so $|\vec{a}| = \sqrt{(R\alpha)^2 + (R\alpha)^2} = \sqrt{2}\,R\alpha$. The acceleration vector points $45^\circ$ between the inward radial and forward tangential directions.</p>` },
            { label: "(c)", prompt: String.raw`<p>Calculate the angle (in radians) through which the centrifuge has rotated by time $t_1$. Comment on the result.</p>`,
              solution: String.raw`<p>$\theta = \tfrac{1}{2}\alpha t_1^2 = \tfrac{1}{2}\alpha \cdot \dfrac{1}{\alpha} = \tfrac{1}{2}\ \text{rad}$. Remarkably, this is independent of both $\alpha$ and $R$: every uniformly accelerating rotor has turned exactly half a radian when its centripetal and tangential accelerations first match.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A thin rod of length $L$ rotates about a fixed axis through one end. Its angular speed grows as $\omega(t) = bt^2$, where $b$ is a positive constant.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive expressions for the speed and the tangential acceleration of the rod's free tip as functions of time.</p>`,
              solution: String.raw`<p>The tip is at $r = L$, so $v = L\omega = Lbt^2$. Then $a_t = \dfrac{dv}{dt} = 2Lbt$ (equivalently $a_t = L\alpha$ with $\alpha = d\omega/dt = 2bt$).</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the centripetal acceleration of the tip as a function of time.</p>`,
              solution: String.raw`<p>$a_c = L\omega^2 = L(bt^2)^2 = Lb^2t^4$. It points from the tip toward the axis along the rod.</p>` },
            { label: "(c)", prompt: String.raw`<p>Let $\phi$ be the angle between the tip's total acceleration vector and the rod. Derive an expression for $\tan\phi$ and describe how $\phi$ behaves as $t \to \infty$. Justify your answer.</p>`,
              solution: String.raw`<p>The centripetal component lies along the rod (inward) and the tangential component is perpendicular to it, so $\tan\phi = \dfrac{a_t}{a_c} = \dfrac{2Lbt}{Lb^2t^4} = \dfrac{2}{bt^3}$. As $t \to \infty$, $\tan\phi \to 0$, so $\phi \to 0$: the centripetal term grows like $t^4$ while the tangential term grows only like $t$, so at high spin rates the acceleration becomes almost purely centripetal, aligned with the rod.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "5.3",
      title: "Torque",
      blurb: "The turning effectiveness of a force: why doorknobs live far from hinges.",
      objectives: [
        "Calculate torque as τ = rF sin θ and interpret it via the lever arm (moment arm).",
        "Use the vector definition τ = r × F and the right-hand rule to find torque direction.",
        "Apply a consistent sign convention to sum torques from multiple forces about a chosen pivot."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>Forces cause linear acceleration; <strong>torques</strong> cause angular acceleration. Torque measures how effectively a force twists an object about a chosen axis:</p>
<p>$$\tau = rF\sin\theta$$</p>
<p>where $r$ is the distance from the axis to the point where the force is applied, and $\theta$ is the angle between $\vec{r}$ and $\vec{F}$. Three independent knobs control the twist: push harder ($F$), push farther from the axis ($r$), or push more perpendicular ($\sin\theta$). A force aimed straight at or away from the axis ($\theta = 0$ or $180^\circ$) produces zero torque no matter how large it is — you cannot open a door by pulling along its plane toward the hinge.</p>
<div class="callout">Two equivalent groupings: $\tau = r(F\sin\theta) = rF_\perp$ (perpendicular component of force) or $\tau = (r\sin\theta)F = r_\perp F$ (lever arm). Pick whichever the geometry hands you.</div>` },
        { heading: "The Lever Arm Picture",
          content: String.raw`<p>The <strong>lever arm</strong> $r_\perp = r\sin\theta$ is the perpendicular distance from the axis to the <em>line of action</em> of the force — the infinite line along which the force points. To find it: extend the force vector in both directions, then drop a perpendicular from the pivot to that line.</p>
<p>This picture explains a key fact: sliding a force along its own line of action changes nothing about its torque, because the line of action — and hence the lever arm — is unchanged. It also gives you instant answers: a force whose line of action passes through the pivot has zero lever arm and zero torque. That is why, in equilibrium problems, you choose the pivot at the point where the most unknown forces act: their torques vanish from the equation, and the unknowns disappear with them.</p>` },
        { heading: "Torque as a Cross Product",
          content: String.raw`<p>Formally, torque is a vector:</p>
<p>$$\vec{\tau} = \vec{r} \times \vec{F}$$</p>
<p>Its magnitude is $rF\sin\theta$ and its direction comes from the right-hand rule: point fingers along $\vec{r}$, curl toward $\vec{F}$; your thumb gives $\vec{\tau}$, along the rotation axis. Counterclockwise rotations (viewed in the standard $xy$-plane) give $+\hat{k}$ torques.</p>
<p>For vectors in the $xy$-plane the cross product collapses to a single component:</p>
<p>$$\tau_z = xF_y - yF_x$$</p>
<p>In practice you will mostly work in two dimensions with a scalar sign convention: call counterclockwise positive, clockwise negative, and add torques algebraically. The full vector machinery becomes essential in 6.3, where angular momentum $\vec{L} = \vec{r} \times \vec{p}$ uses the same structure.</p>` },
        { heading: "Interactive: Balancing Torques",
          sim: "torqueSeesaw",
          simCaption: "Place masses at different distances and watch the net torque readout. Try making a small mass balance a large one — what does the small mass need that the large one has?",
          content: String.raw`<p>The seesaw is pure torque arithmetic: each weight contributes $\tau = mgd$ about the fulcrum, clockwise on one side and counterclockwise on the other. Balance happens when the sums match — a 1 kg mass at 2 m exactly cancels a 2 kg mass at 1 m.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Wrong angle:</strong> $\theta$ is the angle between $\vec{r}$ and $\vec{F}$. If the problem gives the angle between the force and the <em>rod</em>, that often is the right angle — but if it gives the angle to the perpendicular, you need cosine instead. Draw the picture.</li>
<li><strong>Torque is pivot-dependent:</strong> "the torque of this force" is meaningless without naming the axis. The same force can give positive, negative, or zero torque about different pivots.</li>
<li><strong>Units:</strong> torque is N·m, but it is <em>not</em> energy. Work is force·(parallel displacement); torque is force·(perpendicular distance). The radian quietly distinguishes them: $W = \tau\,\Delta\theta$.</li>
<li><strong>Forgetting sign convention:</strong> when summing multiple torques, assign CCW/CW signs consistently before adding; a dropped minus sign is the most common error on statics FRQs.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{\tau} = \vec{r} \times \vec{F}`, note: "Vector definition; direction from the right-hand rule." },
        { latex: String.raw`\tau = rF\sin\theta = r_\perp F = rF_\perp`, note: "Magnitude; θ is the angle between r and F; r⊥ is the lever arm." },
        { latex: String.raw`\tau_z = xF_y - yF_x`, note: "Cross product shortcut for vectors in the xy-plane." },
        { latex: String.raw`\tau_{\text{net}} = \sum_i \tau_i`, note: "Torques about the same axis add algebraically (CCW positive)." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A $10\,\text{N}$ force is applied perpendicular to a wrench handle, $0.50\,\text{m}$ from the bolt. What torque does it exert on the bolt?</p>`,
          choices: [ String.raw`$2.0\,\text{N·m}$`, String.raw`$5.0\,\text{N·m}$`, String.raw`$10\,\text{N·m}$`, String.raw`$20\,\text{N·m}$` ],
          answer: 1,
          solution: String.raw`<p>$\tau = rF\sin 90^\circ = (0.50)(10)(1) = 5.0\,\text{N·m}$. Perpendicular application means the full force contributes.</p>` },
        { type: "mcq",
          q: String.raw`<p>A $40\,\text{N}$ force is applied to the end of a $0.20\,\text{m}$ wrench, making a $30^\circ$ angle with the handle. What is the torque about the bolt?</p>`,
          choices: [ String.raw`$8.0\,\text{N·m}$`, String.raw`$6.9\,\text{N·m}$`, String.raw`$4.0\,\text{N·m}$`, String.raw`$2.0\,\text{N·m}$` ],
          answer: 2,
          solution: String.raw`<p>The angle between $\vec{r}$ (along the handle) and $\vec{F}$ is $30^\circ$, so $\tau = rF\sin 30^\circ = (0.20)(40)(0.5) = 4.0\,\text{N·m}$. The distractor $6.9$ uses $\cos 30^\circ$ — the perpendicular <em>component</em> of the force is $F\sin\theta$, not $F\cos\theta$, when $\theta$ is measured from the handle.</p>` },
        { type: "mcq",
          q: String.raw`<p>A force $\vec{F} = (4\hat{i} - 2\hat{j})\,\text{N}$ acts at the point $\vec{r} = (2\hat{i} + 3\hat{j})\,\text{m}$ relative to a pivot at the origin. What is the torque about the pivot?</p>`,
          choices: [ String.raw`$+16\hat{k}\,\text{N·m}$`, String.raw`$-16\hat{k}\,\text{N·m}$`, String.raw`$-4\hat{k}\,\text{N·m}$`, String.raw`$+8\hat{k}\,\text{N·m}$` ],
          answer: 1,
          solution: String.raw`<p>$\tau_z = xF_y - yF_x = (2)(-2) - (3)(4) = -4 - 12 = -16$, so $\vec{\tau} = -16\hat{k}\,\text{N·m}$ (a clockwise twist when viewed from the $+z$ axis). The distractor $-4\hat{k}$ keeps only the first term; $+16\hat{k}$ flips the order of the cross product.</p>` },
        { type: "frq",
          q: String.raw`<p>A uniform horizontal beam of mass $M$ and length $L$ is attached to a wall by a frictionless pin at its left end. A rope attached to the beam at a point $3L/4$ from the pin pulls upward at angle $\theta$ above the horizontal beam.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for the torque exerted by gravity about the pin. State its sense (clockwise or counterclockwise).</p>`,
              solution: String.raw`<p>Gravity $Mg$ acts at the beam's center, a distance $L/2$ from the pin, directed straight down — perpendicular to $\vec{r}$. Its magnitude is $\tau_g = \dfrac{MgL}{2}$, and it tends to rotate the beam clockwise (downward on the free end), so with the CCW-positive convention $\tau_g = -MgL/2$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the torque exerted by the rope tension $T$ about the pin.</p>`,
              solution: String.raw`<p>The tension acts at $r = 3L/4$ at angle $\theta$ to the beam (which lies along $\vec{r}$), so $\tau_T = +\dfrac{3L}{4}T\sin\theta$, counterclockwise. Equivalently, only the vertical component $T\sin\theta$ has a lever arm ($3L/4$); the horizontal component's line of action passes through the pin's height... more precisely, the component along the beam points through the pivot and contributes nothing.</p>` },
            { label: "(c)", prompt: String.raw`<p>Determine the tension required for the net torque about the pin to be zero.</p>`,
              solution: String.raw`<p>Set $\tau_T + \tau_g = 0$: $\dfrac{3L}{4}T\sin\theta = \dfrac{MgL}{2}$, so $T = \dfrac{2Mg}{3\sin\theta}$. Note $L$ cancels, and as $\theta \to 0$ the required tension diverges — a horizontal rope has no lever arm to fight gravity.</p>` },
            { label: "(d)", prompt: String.raw`<p>Without further calculation, explain why the pin force did not appear in your torque equation, and why that made the pin a smart choice of pivot.</p>`,
              solution: String.raw`<p>The pin force acts <em>at</em> the pivot, so its position vector $\vec{r} = 0$ and its torque about the pin is identically zero regardless of the force's size or direction. Choosing the pivot at the pin eliminates the unknown pin force from the torque equation, letting us solve for $T$ directly with one equation.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A cyclist pushes straight down with constant force $F$ on a bicycle pedal. The crank arm has length $r$ and makes angle $\phi$ with the vertical (so $\phi = 0$ when the pedal is at the top of its circle, and $\phi$ increases as the crank rotates forward).</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for the torque about the crank axle as a function of $\phi$.</p>`,
              solution: String.raw`<p>The angle between the crank arm $\vec{r}$ (at $\phi$ from vertical) and the downward force is $\phi$ itself, so $\tau(\phi) = rF\sin\phi$. Equivalently, the lever arm is the horizontal distance from axle to pedal, $r\sin\phi$, and the full force $F$ acts on it.</p>` },
            { label: "(b)", prompt: String.raw`<p>At what crank positions is the torque maximum? At what positions is it zero? Explain physically.</p>`,
              solution: String.raw`<p>Maximum at $\phi = 90^\circ$ (crank horizontal): the pedal is farthest horizontally from the axle, so a vertical push has its largest lever arm. Zero at $\phi = 0$ and $\phi = 180^\circ$ (pedal at top or bottom): there the downward force's line of action passes straight through the axle — pushing accomplishes no twist, which is why cyclists feel "dead spots" at the top and bottom of the stroke.</p>` },
            { label: "(c)", prompt: String.raw`<p>Using calculus, derive the average torque over the half revolution from $\phi = 0$ to $\phi = \pi$ and compare it to the maximum torque.</p>`,
              solution: String.raw`<p>$\bar{\tau} = \dfrac{1}{\pi}\displaystyle\int_0^{\pi} rF\sin\phi\,d\phi = \dfrac{rF}{\pi}\left[-\cos\phi\right]_0^{\pi} = \dfrac{2rF}{\pi}$. Compared to $\tau_{\max} = rF$, the average is $2/\pi \approx 64\%$ of the peak — a constant vertical push is a fairly inefficient way to drive a crank, which is why good pedaling technique applies force perpendicular to the crank throughout the stroke.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "5.4",
      title: "Rotational Inertia",
      blurb: "Mass resists pushes; rotational inertia resists twists — and it depends on where the mass sits.",
      objectives: [
        "Calculate rotational inertia for systems of point masses using I = Σmr².",
        "Set up and evaluate I = ∫r²dm for continuous objects, including a uniform rod about its end and its center.",
        "Apply the parallel-axis theorem I = I_cm + Md² to shift between axes.",
        "Rank objects' rotational inertias by reasoning about mass distribution."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p><strong>Rotational inertia</strong> (moment of inertia) $I$ plays the role of mass in rotation: it measures resistance to angular acceleration. For point masses,</p>
<p>$$I = \sum_i m_i r_i^2$$</p>
<p>where $r_i$ is each mass's distance from the <em>axis</em> — not from the center of the object. The $r^2$ is the whole story: mass far from the axis counts enormously more than mass near it. Doubling a mass's distance quadruples its contribution. That is why a figure skater's extended arms matter so much, and why flywheels are built as rims, not solid plugs.</p>
<div class="callout key">$I$ is not a property of an object alone — it is a property of an object <em>and an axis</em>. The same rod has $I = ML^2/12$ about its center but $ML^2/3$ about its end.</div>` },
        { heading: "The Integral: Deriving I for a Uniform Rod",
          content: String.raw`<p>For continuous objects, slice into mass elements and integrate:</p>
<p>$$I = \int r^2\,dm$$</p>
<p><strong>Rod about its end.</strong> Take a uniform rod of mass $M$, length $L$, axis through $x = 0$. Linear density $\lambda = M/L$, so a slice at position $x$ has $dm = \lambda\,dx$ and sits at distance $r = x$:</p>
<p>$$I_{\text{end}} = \int_0^L x^2 \frac{M}{L}\,dx = \frac{M}{L}\cdot\frac{L^3}{3} = \frac{1}{3}ML^2$$</p>
<p><strong>Rod about its center.</strong> Same setup, but integrate from $-L/2$ to $+L/2$:</p>
<p>$$I_{\text{cm}} = \frac{M}{L}\int_{-L/2}^{L/2} x^2\,dx = \frac{M}{L}\cdot\frac{2}{3}\left(\frac{L}{2}\right)^3 = \frac{1}{12}ML^2$$</p>
<p>The center axis gives a smaller $I$ because the mass huddles closer to the axis — no slice is farther than $L/2$. This integral setup (define $\lambda$, write $dm$, identify $r$, choose limits) is exactly what AP free-response derivations expect.</p>` },
        { heading: "The Parallel-Axis Theorem",
          content: String.raw`<p>If you know $I$ about an axis through the center of mass, you can get it about any parallel axis a distance $d$ away:</p>
<p>$$I = I_{\text{cm}} + Md^2$$</p>
<p>Check it on the rod: $I_{\text{end}} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2 = \frac{1}{3}ML^2$. ✓</p>
<p>Two consequences worth internalizing. First, the center-of-mass axis gives the <em>minimum</em> rotational inertia among all parallel axes, since $Md^2 \ge 0$. Second, the theorem only connects an axis to the parallel axis <em>through the center of mass</em> — you cannot hop directly between two arbitrary off-center axes; go through the cm both times.</p>
<p>Standard results to memorize: hoop $MR^2$, solid disk/cylinder $\tfrac{1}{2}MR^2$, solid sphere $\tfrac{2}{5}MR^2$, hollow sphere $\tfrac{2}{3}MR^2$, rod $\tfrac{1}{12}ML^2$ (center) and $\tfrac{1}{3}ML^2$ (end).</p>` },
        { heading: "Interactive: Mass Placement and I",
          sim: "rotInertia",
          simCaption: "Slide the point masses outward along the rod and apply the same torque. Watch α drop as I = Σmr² grows — distance matters quadratically.",
          content: String.raw`<p>Move a mass from $r$ to $2r$ and the same torque produces one quarter... not quite — it produces an $\alpha$ reduced by however much that mass's $4\times$ larger contribution inflates the total $I$. The sim makes the $r^2$ dependence visceral.</p>` },
        { heading: "Graph: Parallel-Axis Growth",
          graph: { xLabel: "d (m)", yLabel: "I (kg·m²)", xMin: 0, xMax: 2, yMin: 0, yMax: 14,
                   fns: [ { expr: "2 + 3*x*x", label: "I = I_cm + Md² (I_cm = 2, M = 3)", color: "#60a5fa" } ],
                   hlines: [ { y: 2, label: "I_cm" } ] },
          graphCaption: "Rotational inertia vs axis offset d for a 3-kg object with I_cm = 2 kg·m². The minimum is always at the center of mass.",
          content: String.raw`<p>The parabola never dips below $I_{\text{cm}}$ — shifting the axis away from the center of mass always costs you $Md^2$. This is the graphical statement that objects "prefer" (resist least) rotation about their center of mass.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Measuring r from the wrong place:</strong> $r$ in $I = \sum mr^2$ is the perpendicular distance to the <em>axis</em>, not to the center of the object or to another mass.</li>
<li><strong>Misusing the parallel-axis theorem:</strong> $I_{\text{cm}}$ must be about the axis through the center of mass. Going from one off-center axis to another requires two applications (subtract back to cm, then add out).</li>
<li><strong>Nonuniform objects:</strong> if density varies, $\lambda$ is a function of position — find total mass by $M = \int \lambda\,dx$ first so you can express the answer in terms of $M$.</li>
<li><strong>Treating I as fixed:</strong> if an object's shape changes (skater's arms, beads sliding outward), $I$ changes too — central to Unit 6.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`I = \sum_i m_i r_i^2`, note: "Point masses; r is the perpendicular distance to the axis." },
        { latex: String.raw`I = \int r^2\,dm`, note: "Continuous bodies; write dm via density, then integrate." },
        { latex: String.raw`I_{\text{rod,cm}} = \tfrac{1}{12}ML^2, \qquad I_{\text{rod,end}} = \tfrac{1}{3}ML^2`, note: "Uniform thin rod, axis perpendicular to the rod." },
        { latex: String.raw`I = I_{\text{cm}} + Md^2`, note: "Parallel-axis theorem; d is the distance between the cm axis and the new parallel axis." },
        { latex: String.raw`I_{\text{disk}} = \tfrac{1}{2}MR^2, \quad I_{\text{hoop}} = MR^2, \quad I_{\text{sphere}} = \tfrac{2}{5}MR^2`, note: "Standard results worth memorizing (axes through the center)." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>Two $2.0\,\text{kg}$ point masses sit at the ends of a light rod of length $1.0\,\text{m}$. What is the rotational inertia about an axis through the rod's center, perpendicular to the rod?</p>`,
          choices: [ String.raw`$0.5\,\text{kg·m}^2$`, String.raw`$1.0\,\text{kg·m}^2$`, String.raw`$2.0\,\text{kg·m}^2$`, String.raw`$4.0\,\text{kg·m}^2$` ],
          answer: 1,
          solution: String.raw`<p>Each mass is $r = 0.50$ m from the axis: $I = 2 \times (2.0)(0.50)^2 = 1.0\,\text{kg·m}^2$. The distractor $4.0$ uses the full length $1.0$ m as $r$; the rod is "light," so it contributes nothing.</p>` },
        { type: "mcq",
          q: String.raw`<p>A uniform solid disk has mass $M$ and radius $R$. What is its rotational inertia about an axis perpendicular to the disk through a point on its rim?</p>`,
          choices: [ String.raw`$\tfrac{1}{2}MR^2$`, String.raw`$MR^2$`, String.raw`$\tfrac{3}{2}MR^2$`, String.raw`$2MR^2$` ],
          answer: 2,
          solution: String.raw`<p>Parallel-axis theorem with $d = R$: $I = I_{\text{cm}} + MR^2 = \tfrac{1}{2}MR^2 + MR^2 = \tfrac{3}{2}MR^2$. Choosing $\tfrac{1}{2}MR^2$ forgets to shift the axis; $MR^2$ is the hoop value, not the shifted disk.</p>` },
        { type: "mcq",
          q: String.raw`<p>A rod of length $L$ has nonuniform linear density $\lambda(x) = cx$, where $x$ is measured from the light end and $c$ is a constant. In terms of its total mass $M$, the rotational inertia about an axis through the light end ($x=0$), perpendicular to the rod, is:</p>`,
          choices: [ String.raw`$\tfrac{1}{3}ML^2$`, String.raw`$\tfrac{1}{2}ML^2$`, String.raw`$\tfrac{1}{4}ML^2$`, String.raw`$\tfrac{1}{12}ML^2$` ],
          answer: 1,
          solution: String.raw`<p>First the mass: $M = \int_0^L cx\,dx = \tfrac{1}{2}cL^2$, so $c = 2M/L^2$. Then $I = \int_0^L x^2(cx)\,dx = \tfrac{1}{4}cL^4 = \tfrac{1}{4}\cdot\tfrac{2M}{L^2}\cdot L^4 = \tfrac{1}{2}ML^2$. Bigger than the uniform rod's $\tfrac{1}{3}ML^2$, as expected: the mass is concentrated at the far end, where $r^2$ is large.</p>` },
        { type: "frq",
          q: String.raw`<p>A uniform thin rod has mass $M$ and length $L$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Using integration, derive the rotational inertia of the rod about an axis through its center, perpendicular to the rod.</p>`,
              solution: String.raw`<p>Place the axis at $x = 0$ with the rod spanning $-L/2$ to $L/2$. With uniform density $\lambda = M/L$, a slice $dx$ at position $x$ has $dm = (M/L)dx$ and distance $|x|$ from the axis:</p><p>$$I_{\text{cm}} = \int_{-L/2}^{L/2} x^2\,\frac{M}{L}\,dx = \frac{M}{L}\left[\frac{x^3}{3}\right]_{-L/2}^{L/2} = \frac{M}{L}\cdot\frac{2}{3}\cdot\frac{L^3}{8} = \frac{1}{12}ML^2$$</p>` },
            { label: "(b)", prompt: String.raw`<p>Using integration (not the parallel-axis theorem), derive the rotational inertia about an axis through one end, perpendicular to the rod.</p>`,
              solution: String.raw`<p>Now the rod spans $0$ to $L$ with the axis at $x = 0$:</p><p>$$I_{\text{end}} = \int_0^L x^2\,\frac{M}{L}\,dx = \frac{M}{L}\cdot\frac{L^3}{3} = \frac{1}{3}ML^2$$</p><p>Larger than $I_{\text{cm}}$ because the average value of $x^2$ over the rod is larger when measured from an end.</p>` },
            { label: "(c)", prompt: String.raw`<p>Show that your two results are consistent with the parallel-axis theorem.</p>`,
              solution: String.raw`<p>The end axis is $d = L/2$ from the center axis, so the theorem predicts $I_{\text{end}} = I_{\text{cm}} + M(L/2)^2 = \tfrac{1}{12}ML^2 + \tfrac{1}{4}ML^2 = \tfrac{4}{12}ML^2 + ... = \tfrac{1}{12}ML^2 + \tfrac{3}{12}ML^2 = \tfrac{1}{3}ML^2$, exactly matching (b). ✓</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A rod of length $L$ has linear mass density $\lambda(x) = \lambda_0\left(1 + \dfrac{x}{L}\right)$, where $x$ is measured from the left end and $\lambda_0$ is a positive constant. The rod's center of mass is located at $x_{\text{cm}} = \dfrac{5L}{9}$ (you may use this without proof).</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for the total mass $M$ of the rod in terms of $\lambda_0$ and $L$.</p>`,
              solution: String.raw`<p>$M = \displaystyle\int_0^L \lambda_0\left(1 + \frac{x}{L}\right)dx = \lambda_0\left(L + \frac{L}{2}\right) = \frac{3\lambda_0 L}{2}$. Equivalently $\lambda_0 = \dfrac{2M}{3L}$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive the rotational inertia of the rod about an axis through the left end ($x = 0$), perpendicular to the rod, in terms of $M$ and $L$.</p>`,
              solution: String.raw`<p>$$I_0 = \int_0^L x^2\lambda_0\left(1 + \frac{x}{L}\right)dx = \lambda_0\left(\frac{L^3}{3} + \frac{L^3}{4}\right) = \frac{7\lambda_0 L^3}{12}$$</p><p>Substituting $\lambda_0 = 2M/(3L)$: $I_0 = \dfrac{7}{12}\cdot\dfrac{2M}{3L}\cdot L^3 = \dfrac{7}{18}ML^2$. Sanity check: this exceeds the uniform rod's $\tfrac{1}{3}ML^2 = \tfrac{6}{18}ML^2$ because extra mass is loaded toward the far end.</p>` },
            { label: "(c)", prompt: String.raw`<p>Using the parallel-axis theorem, determine the rotational inertia about the axis through the rod's center of mass, perpendicular to the rod.</p>`,
              solution: String.raw`<p>The theorem gives $I_0 = I_{\text{cm}} + Mx_{\text{cm}}^2$, so</p><p>$$I_{\text{cm}} = \frac{7}{18}ML^2 - M\left(\frac{5L}{9}\right)^2 = ML^2\left(\frac{7}{18} - \frac{25}{81}\right) = ML^2\,\frac{63 - 50}{162} = \frac{13}{162}ML^2$$</p><p>As required, $I_{\text{cm}} \approx 0.080\,ML^2$ is less than $\tfrac{1}{12}ML^2 \approx 0.083\,ML^2$... and indeed less than $I_0$ — the cm axis always minimizes $I$.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "5.5",
      title: "Rotational Equilibrium and Newton's First Law in Rotational Form",
      blurb: "Ladders, beams, and signs that don't fall: when both the net force and the net torque vanish.",
      objectives: [
        "State the conditions for static equilibrium: ΣF = 0 and Στ = 0 about any axis.",
        "Solve extended-body statics problems (beams, ladders) by choosing a strategic pivot.",
        "Explain why the choice of pivot is free when the net torque is zero, and exploit it to eliminate unknowns."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>A rigid body is in <strong>static equilibrium</strong> when two independent conditions hold:</p>
<p>$$\sum \vec{F} = 0 \qquad \text{and} \qquad \sum \tau = 0 \ \text{(about any axis)}$$</p>
<p>The first prevents the center of mass from accelerating; the second prevents angular acceleration. Both are needed: a pair of equal and opposite forces applied at different points (a "couple") gives zero net force but nonzero net torque — the object spins without translating.</p>
<p>The rotational condition is Newton's first law in rotational form: an object with zero net torque keeps its angular velocity constant. "Equilibrium" on the AP exam usually means at rest, but a beam rotating at constant $\omega$ also satisfies $\Sigma\tau = 0$.</p>
<div class="callout key">When $\Sigma\tau = 0$ about one axis <em>and</em> $\Sigma F = 0$, the net torque is zero about <strong>every</strong> axis. You get to pick the pivot that kills the most unknowns.</div>` },
        { heading: "Strategy: The Statics Recipe",
          content: String.raw`<p>Every statics problem yields to the same five steps:</p>
<ol>
<li><strong>Draw an extended free-body diagram</strong> — forces drawn at their actual points of application (a point FBD hides the torque information).</li>
<li><strong>Locate weights at the center of mass</strong> of each object.</li>
<li><strong>Choose the pivot</strong> where the most unknown forces act — their torques vanish.</li>
<li><strong>Write $\Sigma\tau = 0$</strong> with a consistent sign convention, computing each lever arm carefully.</li>
<li><strong>Write $\Sigma F_x = 0$ and $\Sigma F_y = 0$</strong> to mop up remaining unknowns.</li>
</ol>
<p>That gives three equations in two dimensions — enough for three unknowns. If a problem seems to have four, look again: usually a direction is known, or the question only asks for one quantity, reachable from the torque equation alone.</p>` },
        { heading: "The Ladder Problem, Done Right",
          content: String.raw`<p>A uniform ladder of mass $M$ leans at angle $\theta$ (from the floor) against a <em>frictionless</em> wall. Forces: weight $Mg$ at the center, wall normal $N_w$ (horizontal, since the wall is frictionless), floor normal $N_f$ (vertical), and floor friction $f$ (horizontal, toward the wall).</p>
<p>Force balance: $N_f = Mg$ and $f = N_w$. Torque about the <em>base</em> (killing both floor forces), with ladder length $L$:</p>
<p>$$N_w (L\sin\theta) = Mg\left(\frac{L}{2}\cos\theta\right) \;\Rightarrow\; N_w = \frac{Mg}{2\tan\theta}$$</p>
<p>So $f = \dfrac{Mg}{2\tan\theta}$: a steeper ladder needs less friction. Requiring $f \le \mu_s N_f$ gives the no-slip condition $\mu_s \ge \dfrac{1}{2\tan\theta}$. When a person climbs, their weight adds a torque term that grows with height — which is why ladders slip when you near the top, not the bottom.</p>` },
        { heading: "Interactive: Balance the Beam",
          sim: "torqueSeesaw",
          simCaption: "Set up an unequal balance: a heavy mass close in versus a light mass far out. Then predict where a third mass must go to restore Στ = 0 before placing it.",
          content: String.raw`<p>The seesaw is the simplest statics lab: the fulcrum supplies the unknown normal force, so taking torques about it leaves only the weights. Check your predictions against the net-torque readout.</p>` },
        { heading: "Graph: Friction Needed vs Ladder Angle",
          graph: { xLabel: "θ (rad)", yLabel: "f required / Mg", xMin: 0.3, xMax: 1.5, yMin: 0, yMax: 1.8,
                   fns: [ { expr: "1/(2*Math.tan(x))", label: "f/Mg = 1/(2 tan θ)", color: "#f87171" } ] },
          graphCaption: "Friction force (as a fraction of the ladder's weight) needed to hold a uniform ladder against a frictionless wall, vs the angle from the floor.",
          content: String.raw`<p>The curve diverges as $\theta \to 0$: a nearly horizontal ladder is unholdable, while a nearly vertical one ($\theta \to \pi/2$) needs almost no friction. The condition $\mu_s \ge 1/(2\tan\theta)$ defines the minimum safe angle for a given floor: with $\mu_s = 0.5$, you need $\tan\theta \ge 1$, i.e. $\theta \ge 45^\circ$.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Putting forces at the wrong place:</strong> weight acts at the center of mass; normal forces act at the contact point. An extended FBD prevents this.</li>
<li><strong>Lever-arm geometry on the ladder:</strong> for a ladder at angle $\theta$ from the <em>floor</em>, the weight's lever arm about the base involves $\cos\theta$ and the wall force's involves $\sin\theta$. Mixing these up is the single most common statics error.</li>
<li><strong>Assuming friction is at its maximum:</strong> $f = \mu_s N$ only at the verge of slipping. In ordinary equilibrium, $f$ is whatever the torque/force balance demands, up to that ceiling.</li>
<li><strong>Forgetting hinge forces:</strong> hinges and pins exert forces with both components. You can ignore them in the torque equation (pivot there!) but not in the force equations.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\sum \vec{F} = 0`, note: "Translational equilibrium — write x and y components separately." },
        { latex: String.raw`\sum \tau = 0 \ \text{(about any axis)}`, note: "Rotational equilibrium; pivot choice is free, so choose it to eliminate unknowns." },
        { latex: String.raw`f \le \mu_s N`, note: "Static friction inequality — equality only at the verge of slipping." },
        { latex: String.raw`N_w = \frac{Mg}{2\tan\theta}`, note: "Wall force for a uniform ladder at angle θ from the floor, frictionless wall." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A $30\,\text{kg}$ child sits $2.0\,\text{m}$ from a seesaw's fulcrum. How far from the fulcrum, on the other side, must a $40\,\text{kg}$ child sit to balance?</p>`,
          choices: [ String.raw`$1.0\,\text{m}$`, String.raw`$1.5\,\text{m}$`, String.raw`$2.0\,\text{m}$`, String.raw`$2.7\,\text{m}$` ],
          answer: 1,
          solution: String.raw`<p>Balance torques about the fulcrum: $(30)g(2.0) = (40)g\,d$, so $d = 60/40 = 1.5\,\text{m}$. Heavier child, shorter lever arm. The distractor $2.7$ m flips the ratio.</p>` },
        { type: "mcq",
          q: String.raw`<p>A uniform $20\,\text{kg}$ plank of length $4.0\,\text{m}$ rests on supports at its two ends. A $60\,\text{kg}$ person stands $1.0\,\text{m}$ from the left end. Using $g = 10\,\text{m/s}^2$, what force does the <em>left</em> support exert?</p>`,
          choices: [ String.raw`$550\,\text{N}$`, String.raw`$250\,\text{N}$`, String.raw`$400\,\text{N}$`, String.raw`$800\,\text{N}$` ],
          answer: 0,
          solution: String.raw`<p>Take torques about the <em>right</em> end to eliminate the right support: $N_L(4.0) = (200\,\text{N})(2.0) + (600\,\text{N})(3.0) = 400 + 1800$, so $N_L = 550\,\text{N}$. Check: $N_R = 800 - 550 = 250\,\text{N}$ (the distractor), and indeed more load sits nearer the left support.</p>` },
        { type: "mcq",
          q: String.raw`<p>A uniform ladder of mass $m$ leans against a frictionless wall, making angle $\theta$ with the <em>floor</em>. The friction force the floor must exert on the ladder is:</p>`,
          choices: [ String.raw`$\dfrac{mg\tan\theta}{2}$`, String.raw`$\dfrac{mg}{\tan\theta}$`, String.raw`$\dfrac{mg}{2\tan\theta}$`, String.raw`$\dfrac{mg}{2}$` ],
          answer: 2,
          solution: String.raw`<p>Torque about the base: $N_w L\sin\theta = mg\frac{L}{2}\cos\theta$ gives $N_w = \frac{mg}{2\tan\theta}$, and horizontal force balance requires $f = N_w = \dfrac{mg}{2\tan\theta}$. Limiting cases confirm it: a vertical ladder ($\theta \to 90^\circ$) needs no friction; a flat one needs infinite friction. The first distractor has the trig flipped and wrongly grows with steepness.</p>` },
        { type: "frq",
          q: String.raw`<p>A uniform ladder of mass $M$ and length $L$ leans against a frictionless vertical wall, making angle $\theta$ with the horizontal floor. The floor has coefficient of static friction $\mu_s$. A person of mass $m$ stands on the ladder a distance $d$ from its base (measured along the ladder).</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>On an extended free-body diagram, identify all forces on the ladder and where they act. Then derive an expression for the normal force from the wall, $N_w$, in terms of $M$, $m$, $d$, $L$, $\theta$, and $g$.</p>`,
              solution: String.raw`<p>Forces: weight $Mg$ at the midpoint ($L/2$ along the ladder), person's load $mg$ at distance $d$, wall normal $N_w$ (horizontal) at the top, floor normal $N_f$ (vertical) and friction $f$ (horizontal, toward the wall) at the base. Taking torques about the base eliminates $N_f$ and $f$:</p><p>$$N_w L\sin\theta = Mg\frac{L}{2}\cos\theta + mgd\cos\theta$$</p><p>$$N_w = \frac{g\cos\theta\left(\tfrac{ML}{2} + md\right)}{L\sin\theta} = \frac{g\left(\tfrac{M}{2} + \tfrac{md}{L}\right)}{\tan\theta}$$</p>` },
            { label: "(b)", prompt: String.raw`<p>Determine the friction force and the normal force exerted by the floor.</p>`,
              solution: String.raw`<p>Vertical: $N_f = (M + m)g$ — the floor supports all the weight, since the frictionless wall pushes only horizontally. Horizontal: $f = N_w = \dfrac{g\left(\tfrac{M}{2} + \tfrac{md}{L}\right)}{\tan\theta}$, directed toward the wall.</p>` },
            { label: "(c)", prompt: String.raw`<p>Derive an expression for the maximum distance $d_{\max}$ the person can climb before the ladder slips.</p>`,
              solution: String.raw`<p>Slipping begins when $f = \mu_s N_f$:</p><p>$$\frac{g\left(\tfrac{M}{2} + \tfrac{md_{\max}}{L}\right)}{\tan\theta} = \mu_s (M + m)g$$</p><p>Solving: $d_{\max} = \dfrac{L}{m}\left[\mu_s(M+m)\tan\theta - \dfrac{M}{2}\right]$. The result grows with $\mu_s$ and $\theta$, as expected; if it exceeds $L$, the person can safely reach the top, and if it is negative, the ladder cannot stand even unloaded.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A uniform horizontal beam of mass $M$ and length $L$ is attached to a wall by a hinge. A cable runs from the beam's far end up to the wall, making angle $\theta$ with the beam. A sign of mass $m$ hangs from the far end of the beam.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>By taking torques about the hinge, derive an expression for the tension in the cable.</p>`,
              solution: String.raw`<p>About the hinge, the hinge force contributes nothing. The cable's torque is $+TL\sin\theta$; the beam's weight gives $-Mg(L/2)$ and the sign $-mgL$:</p><p>$$TL\sin\theta = \frac{MgL}{2} + mgL \;\Rightarrow\; T = \frac{\left(\tfrac{M}{2} + m\right)g}{\sin\theta}$$</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive expressions for the horizontal and vertical components of the force the hinge exerts on the beam.</p>`,
              solution: String.raw`<p>Horizontal: the cable pulls toward the wall with $T\cos\theta$, so the hinge pushes outward: $H_x = T\cos\theta = \left(\tfrac{M}{2} + m\right)g\cot\theta$. Vertical: $H_y + T\sin\theta = (M + m)g$, so $H_y = (M+m)g - \left(\tfrac{M}{2}+m\right)g = \dfrac{Mg}{2}$, upward. Interesting: the hinge's vertical share is exactly half the beam's weight, independent of the sign's mass $m$ — the cable's geometry routes all of $m$'s load through the cable.</p>` },
            { label: "(c)", prompt: String.raw`<p>The cable has a breaking tension $T_{\max}$. Determine the maximum sign mass that can be hung, and explain why decreasing $\theta$ reduces this maximum.</p>`,
              solution: String.raw`<p>Set $T = T_{\max}$: $m_{\max} = \dfrac{T_{\max}\sin\theta}{g} - \dfrac{M}{2}$. Decreasing $\theta$ shrinks $\sin\theta$, shrinking the cable's lever arm about the hinge ($L\sin\theta$); a more nearly horizontal cable must pull much harder to supply the same torque, so it reaches $T_{\max}$ with a lighter sign.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: "5.6",
      title: "Newton's Second Law in Rotational Form",
      blurb: "Στ = Iα — the master equation of spinning things, from pulleys to falling chimneys.",
      objectives: [
        "Apply Στ = Iα to rigid bodies rotating about a fixed axis.",
        "Solve coupled systems (hanging masses, massive pulleys) using Newton's second law in both forms plus the constraint a = Rα.",
        "Explain why tensions differ on the two sides of a massive pulley.",
        "Analyze rigid bodies pivoted at a point, including the falling-rod problem."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>The rotational analog of $\Sigma F = ma$ is</p>
<p>$$\sum \tau = I\alpha$$</p>
<p>valid for a rigid body about a fixed axis (or about the center of mass even when the cm accelerates — the key fact behind rolling). It follows from Newton's second law: for each particle, the tangential equation $F_{t,i} = m_i r_i \alpha$ multiplied by $r_i$ and summed gives $\Sigma\tau = (\Sigma m_i r_i^2)\alpha = I\alpha$, with internal torques canceling in pairs.</p>
<p>The analogy runs deep: large torque → large angular acceleration; large rotational inertia → sluggish response. But remember $\alpha$, like $\tau$, is about a specific axis — compute $I$, the torques, and $\alpha$ all about the <em>same</em> axis.</p>
<div class="callout warn">Only <em>external</em> torques count, and forces acting at the axis contribute zero torque — they have no lever arm.</div>` },
        { heading: "Massive Pulleys: The Tension Must Differ",
          content: String.raw`<p>In Unit 2, pulleys were massless and tension was the same throughout the cord. A pulley with rotational inertia changes that: to give the pulley angular acceleration, the cord must exert a <em>net</em> torque, so the tensions on the two sides must differ.</p>
<p>The recipe for any pulley system:</p>
<ol>
<li>Newton's second law for each hanging mass (translational).</li>
<li>$\Sigma\tau = I\alpha$ for the pulley, torques from each tension at radius $R$.</li>
<li>The no-slip constraint $a = R\alpha$ linking them.</li>
</ol>
<p>For a single mass $m$ hanging from a cord wrapped around a disk-pulley of mass $M$, radius $R$: $mg - T = ma$ and $TR = \left(\tfrac{1}{2}MR^2\right)\alpha = \tfrac{1}{2}MRa$, so $T = \tfrac{1}{2}Ma$ and</p>
<p>$$a = \frac{mg}{m + \tfrac{M}{2}}$$</p>
<p>Limits check out: $M \to 0$ gives free-fall-like $a \to g$ with $T \to 0$; $M \to \infty$ freezes everything.</p>` },
        { heading: "Interactive: Torque In, α Out",
          sim: "rotInertia",
          simCaption: "Apply a fixed torque and read off α. Then slide the masses outward and apply the same torque again — α drops in exact proportion to the increase in I.",
          content: String.raw`<p>This sim is $\Sigma\tau = I\alpha$ made visible: with torque fixed, $\alpha \propto 1/I$. Doubling each mass's distance quadruples its $mr^2$ contribution, and the response slows accordingly.</p>` },
        { heading: "Graph: α vs I at Fixed Torque",
          graph: { xLabel: "I (kg·m²)", yLabel: "α (rad/s²)", xMin: 0.5, xMax: 6, yMin: 0, yMax: 25,
                   fns: [ { expr: "12/x", label: "α = τ/I (τ = 12 N·m)", color: "#c084fc" } ] },
          graphCaption: "Angular acceleration vs rotational inertia for a constant 12 N·m net torque — an inverse relationship, the rotational twin of a = F/m.",
          content: String.raw`<p>The hyperbola is the rotational version of the $a$ vs $m$ graph from Unit 2. On the exam, this shows up as experimental-design questions: plot $\alpha$ against $\tau$ at fixed $I$ to get a line of slope $1/I$, or plot $\alpha$ against $1/I$ at fixed $\tau$ to get a line of slope $\tau$. Linearizing the data is the expected move.</p>` },
        { heading: "Worked Example: The Falling Rod",
          content: String.raw`<p>A uniform rod of mass $M$, length $L$, pivoted at one end, is released from rest in a horizontal position. At the instant of release:</p>
<p>$$\alpha = \frac{\tau}{I} = \frac{Mg(L/2)}{\tfrac{1}{3}ML^2} = \frac{3g}{2L}$$</p>
<p>The free tip's tangential acceleration is $a_{\text{tip}} = \alpha L = \tfrac{3g}{2}$ — <em>greater than g</em>. Place a coin on the tip and release: the rod falls away from the coin. Nothing is wrong; the tip is not in free fall, it is driven by the pivot through the rigid rod. The center of mass accelerates at $a_{\text{cm}} = \alpha(L/2) = \tfrac{3g}{4}$, comfortably less than $g$, and Newton's second law for the whole rod, $Mg - F_{\text{pivot}} = Ma_{\text{cm}}$, gives an upward pivot force $F_{\text{pivot}} = Mg/4$ at that instant. As the rod swings down, the torque (and hence $\alpha$) changes with angle, so constant-$\alpha$ kinematics cannot track the motion — that is a job for energy methods in 6.1.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Assuming equal tensions around a massive pulley:</strong> if the pulley has $I \ne 0$ and $\alpha \ne 0$, the tensions must differ — that difference is what spins the pulley.</li>
<li><strong>Sign mismatches in coupled systems:</strong> define one positive sense for the whole system (e.g., "$m_1$ down, $m_2$ up, pulley CW") so $a$ and $\alpha$ stay consistent.</li>
<li><strong>Dropping the constraint:</strong> $a = R\alpha$ (cord doesn't slip) is the equation that ties the translational and rotational equations together; without it the system is unsolvable.</li>
<li><strong>Using weight at the pivot or normal forces in τ:</strong> forces through the axis exert zero torque; weight acts at the center of mass, giving $\tau = Mg(L/2)\cos\theta$ for a rod at angle $\theta$ below horizontal — not $MgL$.</li>
<li><strong>Treating α as constant when the torque varies:</strong> the falling rod's $\alpha$ depends on its angle. Use energy methods for "how fast at the bottom" questions.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\sum \tau = I\alpha`, note: "Rotational second law, about a fixed axis (or about the cm)." },
        { latex: String.raw`a = R\alpha`, note: "No-slip constraint linking a cord (or contact point) to the rotation." },
        { latex: String.raw`a = \frac{mg}{m + \tfrac{M}{2}}`, note: "Mass m hanging from a cord wrapped on a frictionless disk-pulley of mass M." },
        { latex: String.raw`a = \frac{(m_1 - m_2)g}{m_1 + m_2 + \tfrac{M}{2}}`, note: "Atwood machine with a disk-pulley of mass M (no slipping)." },
        { latex: String.raw`\alpha_{\text{rod,end}} = \frac{3g}{2L}\cos\theta`, note: "Uniform rod pivoted at one end, at angle θ below... measured from horizontal release (θ = 0 horizontal)." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A net torque of $20\,\text{N·m}$ acts on a wheel with rotational inertia $4.0\,\text{kg·m}^2$. What is the wheel's angular acceleration?</p>`,
          choices: [ String.raw`$80\,\text{rad/s}^2$`, String.raw`$5.0\,\text{rad/s}^2$`, String.raw`$0.20\,\text{rad/s}^2$`, String.raw`$24\,\text{rad/s}^2$` ],
          answer: 1,
          solution: String.raw`<p>$\alpha = \tau_{\text{net}}/I = 20/4.0 = 5.0\,\text{rad/s}^2$ — divide, don't multiply (80) or invert (0.20).</p>` },
        { type: "mcq",
          q: String.raw`<p>A $2.0\,\text{kg}$ block hangs from a light cord wrapped around a uniform solid disk-pulley of mass $4.0\,\text{kg}$ that rotates on a frictionless axle. Using $g = 10\,\text{m/s}^2$, the block's downward acceleration is:</p>`,
          choices: [ String.raw`$10\,\text{m/s}^2$`, String.raw`$6.7\,\text{m/s}^2$`, String.raw`$5.0\,\text{m/s}^2$`, String.raw`$3.3\,\text{m/s}^2$` ],
          answer: 2,
          solution: String.raw`<p>$a = \dfrac{mg}{m + M/2} = \dfrac{(2)(10)}{2 + 2} = 5.0\,\text{m/s}^2$. Only <em>half</em> the pulley's mass loads the system because a disk's $I = \tfrac{1}{2}MR^2$. The distractor $3.3$ uses the full pulley mass; $6.7$ uses $M/2$... incorrectly as $20/3$ from treating the pulley as a hoop with half its mass — check your $I$.</p>` },
        { type: "mcq",
          q: String.raw`<p>A uniform rod of length $L$ pivoted at one end is released from rest in a horizontal position. At the instant of release, the linear acceleration of the rod's free tip is:</p>`,
          choices: [ String.raw`$g$`, String.raw`$\dfrac{3g}{2}$`, String.raw`$\dfrac{3g}{4}$`, String.raw`$\dfrac{g}{2}$` ],
          answer: 1,
          solution: String.raw`<p>$\alpha = \dfrac{Mg(L/2)}{ML^2/3} = \dfrac{3g}{2L}$, so the tip's acceleration is $a = \alpha L = \dfrac{3g}{2}$ — faster than free fall, because the rigid rod's pivot end "whips" the tip downward. $\dfrac{3g}{4}$ is the <em>center of mass</em> acceleration, a meaningful but different quantity.</p>` },
        { type: "frq",
          q: String.raw`<p>An Atwood machine consists of blocks $m_1$ and $m_2$ ($m_1 > m_2$) connected by a light cord over a pulley that is a uniform disk of mass $M$ and radius $R$. The cord does not slip on the pulley, and the axle is frictionless.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Write Newton's second law for each block and the rotational second law for the pulley. Define your sign conventions.</p>`,
              solution: String.raw`<p>Take positive as: $m_1$ down, $m_2$ up, pulley turning with the cord. For the blocks: $m_1 g - T_1 = m_1 a$ and $T_2 - m_2 g = m_2 a$. For the pulley, $T_1$ drives it and $T_2$ resists: $(T_1 - T_2)R = I\alpha = \tfrac{1}{2}MR^2\alpha$. The no-slip constraint is $a = R\alpha$, so $(T_1 - T_2) = \tfrac{1}{2}Ma$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the acceleration of the blocks.</p>`,
              solution: String.raw`<p>Add the three equations (the tensions cancel): $m_1 g - m_2 g = \left(m_1 + m_2 + \tfrac{M}{2}\right)a$, so</p><p>$$a = \frac{(m_1 - m_2)g}{m_1 + m_2 + \tfrac{M}{2}}$$</p><p>Limiting case: $M \to 0$ recovers the massless-pulley Atwood result.</p>` },
            { label: "(c)", prompt: String.raw`<p>Derive expressions for the two tensions and explain physically why $T_1 \neq T_2$.</p>`,
              solution: String.raw`<p>$T_1 = m_1(g - a)$ and $T_2 = m_2(g + a)$, with $a$ from part (b). Since $m_1$ accelerates downward, $T_1 < m_1 g$, and since $m_2$ accelerates upward, $T_2 > m_2 g$; explicitly $T_1 - T_2 = \tfrac{1}{2}Ma > 0$. The difference is necessary: the pulley has rotational inertia, and only a tension <em>difference</em> provides the net torque $\left(T_1 - T_2\right)R$ that angularly accelerates it. A massless pulley needs no net torque, which is why tensions matched in Unit 2.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A uniform rod of mass $M$ and length $L$ is mounted on a frictionless pivot at one end. It is held horizontal and released from rest.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive the angular acceleration of the rod at the instant of release.</p>`,
              solution: String.raw`<p>Gravity acts at the center, lever arm $L/2$ while horizontal: $\tau = Mg\dfrac{L}{2}$. With $I = \tfrac{1}{3}ML^2$ about the end, $\alpha = \dfrac{Mg(L/2)}{ML^2/3} = \dfrac{3g}{2L}$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Explain why the angular acceleration does not remain constant as the rod swings down, and write (but do not solve) an expression for $\alpha$ when the rod makes angle $\theta$ below the horizontal.</p>`,
              solution: String.raw`<p>As the rod swings down, the weight's lever arm shrinks from $L/2$ to $(L/2)\cos\theta$, so the torque — and hence $\alpha$ — decreases with angle: $\alpha(\theta) = \dfrac{3g}{2L}\cos\theta$. Since $\alpha$ depends on $\theta$, the constant-$\alpha$ kinematics equations cannot be used; finding $\omega$ at the bottom requires energy methods or integrating $\alpha\,d\theta = \omega\,d\omega$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Determine the linear acceleration of the rod's center of mass at the instant of release.</p>`,
              solution: String.raw`<p>The cm is at $r = L/2$, so $a_{\text{cm}} = \alpha\dfrac{L}{2} = \dfrac{3g}{2L}\cdot\dfrac{L}{2} = \dfrac{3g}{4}$, directed downward (purely tangential, since $\omega = 0$ at release means zero centripetal term).</p>` },
            { label: "(d)", prompt: String.raw`<p>Determine the force the pivot exerts on the rod at the instant of release. Justify with Newton's second law for the rod as a whole.</p>`,
              solution: String.raw`<p>Apply $\Sigma F = Ma_{\text{cm}}$ to the entire rod, vertical direction (down positive): $Mg - F_{\text{pivot}} = M\left(\dfrac{3g}{4}\right)$, so $F_{\text{pivot}} = \dfrac{Mg}{4}$, upward. The pivot supports only a quarter of the weight at this instant because the rod is already "falling out from under itself"; there is no horizontal pivot force yet since $\omega = 0$ means no centripetal acceleration along the rod.</p>` }
          ] }
      ]
    }
  ]
});
