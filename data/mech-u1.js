/* data/mech-u1.js — Unit 1: Kinematics */
AP.registerUnit({
  id: 1,
  course: "mech",
  title: "Kinematics",
  weight: "10–15%",
  tagline: "Describing motion with calculus: position, velocity, and acceleration in one and two dimensions.",
  bigIdeas: [
    "Velocity and acceleration are derivatives of position; displacement is an integral of velocity.",
    "Graphs, equations, and vectors are three equivalent languages for describing the same motion.",
    "There is no preferred reference frame: velocities measured by different observers are related by simple vector addition."
  ],
  topics: [

    /* ============================== 1.1 ============================== */
    {
      id: "1.1",
      title: "Scalars and Vectors",
      blurb: "Why direction matters: building, breaking apart, and combining the arrows that describe motion.",
      objectives: [
        "Classify physical quantities as scalars or vectors and explain the difference operationally.",
        "Resolve a vector into perpendicular components and reassemble magnitude and direction.",
        "Add and subtract vectors graphically (tip-to-tail) and analytically (component-wise).",
        "Recognize bounds on the magnitude of a vector sum and what they imply geometrically."
      ],
      sections: [
        { heading: "The Core Idea",
          content: String.raw`<p>A <strong>scalar</strong> is a single number with units: mass, time, speed, distance, energy. A <strong>vector</strong> carries a magnitude <em>and</em> a direction: displacement, velocity, acceleration, force. The test is operational: if reversing the direction of the quantity changes the physics, it is a vector. Walking $3\,\text{m}$ east is genuinely different from walking $3\,\text{m}$ west, so displacement is a vector; but a $3\,\text{kg}$ mass has no direction to reverse.</p>
<p>In AP Physics C we almost always work with vectors through their <strong>components</strong>. A vector $\vec{A}$ in the plane is written $\vec{A} = A_x\,\hat{i} + A_y\,\hat{j}$, where $\hat{i}$ and $\hat{j}$ are unit vectors along $x$ and $y$. Components turn geometry into arithmetic: to add vectors, just add components.</p>
<div class="callout key">Vectors add component-by-component: $(\vec{A}+\vec{B})_x = A_x + B_x$ and $(\vec{A}+\vec{B})_y = A_y + B_y$. Nearly every multi-dimensional problem in this course starts with this move.</div>` },
        { heading: "Components: Breaking and Rebuilding",
          content: String.raw`<p>Given a magnitude $A$ and an angle $\theta$ measured from the $+x$ axis, the components are $A_x = A\cos\theta$ and $A_y = A\sin\theta$. Going the other way, $A = \sqrt{A_x^2 + A_y^2}$ and $\theta = \tan^{-1}(A_y/A_x)$ — but always sketch the vector first, because the inverse tangent only returns angles between $-90^\circ$ and $+90^\circ$ and cannot tell quadrant II from quadrant IV.</p>
<p>Two useful geometric facts about the sum $\vec{R} = \vec{A} + \vec{B}$:</p>
<ul>
<li>Its magnitude is bounded: $|A - B| \le R \le A + B$. The maximum occurs when the vectors are parallel, the minimum when they are antiparallel.</li>
<li>If $|\vec{A}+\vec{B}| = |\vec{A}-\vec{B}|$, the vectors are perpendicular — the diagonals of the parallelogram they form are equal only for a rectangle.</li>
</ul>
<p>Subtraction is addition of the reverse: $\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$. This shows up constantly in relative velocity and in $\Delta\vec{v}$ for acceleration.</p>` },
        { heading: "Interactive: Adding Vectors",
          sim: "vectorAddition",
          simCaption: "Adjust each vector's magnitude and direction. Watch the tip-to-tail construction and check that the resultant's components are just the sums of the individual components.",
          content: String.raw`<p>Use the sim to verify the bounds above: make the two vectors parallel, then antiparallel, and watch the resultant's magnitude run between $A+B$ and $|A-B|$. Then set them perpendicular and confirm the Pythagorean result.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Auto-piloting $\cos$ for $x$:</strong> $A_x = A\cos\theta$ only when $\theta$ is measured from the $x$-axis. If the angle is measured from the vertical (incline problems love this), the roles of sine and cosine swap. Always ask "adjacent or opposite to my angle?"</li>
<li><strong>Adding magnitudes instead of vectors:</strong> a $5\,\text{N}$ and a $12\,\text{N}$ force do not generally add to $17\,\text{N}$ — only if they point the same way.</li>
<li><strong>Dropping signs of components:</strong> a vector in quadrant III has both components negative. The signs <em>are</em> the direction information.</li>
<li><strong>Trusting $\tan^{-1}$ blindly:</strong> $(-3, -4)$ and $(3, 4)$ give the same inverse tangent. Sketch first, then add $180^\circ$ if needed.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{A} = A_x\,\hat{i} + A_y\,\hat{j}`, note: "Unit-vector form; components carry the signs." },
        { latex: String.raw`A_x = A\cos\theta, \quad A_y = A\sin\theta`, note: "Valid when θ is measured from the +x axis." },
        { latex: String.raw`A = \sqrt{A_x^2 + A_y^2}, \quad \theta = \tan^{-1}\!\left(\frac{A_y}{A_x}\right)`, note: "Rebuild magnitude and direction; check the quadrant by sketching." },
        { latex: String.raw`|A - B| \;\le\; |\vec{A} + \vec{B}| \;\le\; A + B`, note: "Bounds on the magnitude of a vector sum." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A displacement vector is $\vec{d} = (3.0\,\hat{i} + 4.0\,\hat{j})\,\text{m}$. What is its magnitude?</p>`,
          choices: [ String.raw`$5.0\,\text{m}$`, String.raw`$7.0\,\text{m}$`, String.raw`$25\,\text{m}$`, String.raw`$3.5\,\text{m}$` ],
          answer: 0,
          solution: String.raw`<p>$d = \sqrt{3^2 + 4^2} = \sqrt{25} = 5.0\,\text{m}$. Choice B is the trap of adding components directly; choice C forgets the square root.</p>` },
        { type: "mcq",
          q: String.raw`<p>Two vectors have magnitudes $5$ and $12$. Which of the following <strong>cannot</strong> be the magnitude of their sum?</p>`,
          choices: [ String.raw`$7$`, String.raw`$13$`, String.raw`$17$`, String.raw`$4$` ],
          answer: 3,
          solution: String.raw`<p>The sum's magnitude must lie between $|12-5| = 7$ (antiparallel) and $12+5 = 17$ (parallel). $13$ corresponds to perpendicular vectors ($5$-$12$-$13$ triangle). $4 < 7$, so it is impossible.</p>` },
        { type: "mcq",
          q: String.raw`<p>For two nonzero vectors, $|\vec{A} + \vec{B}| = |\vec{A} - \vec{B}|$. What must be true?</p>`,
          choices: [ String.raw`$\vec{A}$ and $\vec{B}$ are parallel`, String.raw`$\vec{A}$ and $\vec{B}$ have equal magnitudes`, String.raw`$\vec{A}$ and $\vec{B}$ are perpendicular`, String.raw`$\vec{B} = -\vec{A}$` ],
          answer: 2,
          solution: String.raw`<p>Square both sides: $A^2 + B^2 + 2\vec{A}\cdot\vec{B} = A^2 + B^2 - 2\vec{A}\cdot\vec{B}$, so $\vec{A}\cdot\vec{B} = 0$ — the vectors are perpendicular. Geometrically, the two diagonals of a parallelogram are equal only when it is a rectangle.</p>` },
        { type: "frq",
          q: String.raw`<p>A hiker walks three straight legs: $4.0\,\text{km}$ due east, then $3.0\,\text{km}$ at $60^\circ$ north of east, then $2.0\,\text{km}$ due north. Take east as $+x$ and north as $+y$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Find the $x$- and $y$-components of the total displacement.</p>`,
              solution: String.raw`<p>Add the legs component-wise. $R_x = 4.0 + 3.0\cos 60^\circ + 0 = 4.0 + 1.5 = 5.5\,\text{km}$. $R_y = 0 + 3.0\sin 60^\circ + 2.0 = 2.60 + 2.0 = 4.60\,\text{km}$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Find the magnitude of the total displacement.</p>`,
              solution: String.raw`<p>$R = \sqrt{R_x^2 + R_y^2} = \sqrt{(5.5)^2 + (4.60)^2} = \sqrt{30.25 + 21.2} = \sqrt{51.4} \approx 7.2\,\text{km}$. Note this is much less than the $9.0\,\text{km}$ of path walked — displacement is not distance.</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the direction of the total displacement as an angle north of east. Justify that your calculator's answer is in the correct quadrant.</p>`,
              solution: String.raw`<p>$\theta = \tan^{-1}(R_y/R_x) = \tan^{-1}(4.60/5.5) \approx 40^\circ$ north of east. Both components are positive, so the vector lies in the first quadrant and the inverse-tangent value needs no correction.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>Two vectors are given by $\vec{A} = 2\,\hat{i} + 3\,\hat{j}$ and $\vec{B} = -\hat{i} + 4\,\hat{j}$ (magnitudes in meters).</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Compute $\vec{A} + \vec{B}$ and its magnitude.</p>`,
              solution: String.raw`<p>$\vec{A}+\vec{B} = (2-1)\,\hat{i} + (3+4)\,\hat{j} = \hat{i} + 7\,\hat{j}$. Magnitude: $\sqrt{1^2 + 7^2} = \sqrt{50} = 5\sqrt{2} \approx 7.1\,\text{m}$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Find the scalar $c$ such that $\vec{A} + c\vec{B}$ is parallel to the $x$-axis.</p>`,
              solution: String.raw`<p>Parallel to the $x$-axis means the $y$-component vanishes: $3 + 4c = 0$, so $c = -\tfrac{3}{4}$. Check: $\vec{A} - \tfrac{3}{4}\vec{B} = (2 + \tfrac{3}{4})\,\hat{i} = \tfrac{11}{4}\,\hat{i}$, purely along $x$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Determine the angle each vector makes with the $+x$ axis, and state which vector is "more vertical." Justify briefly.</p>`,
              solution: String.raw`<p>$\theta_A = \tan^{-1}(3/2) \approx 56^\circ$. For $\vec{B}$, the components $(-1, 4)$ put it in quadrant II: $\theta_B = 180^\circ - \tan^{-1}(4/1) \approx 180^\circ - 76^\circ = 104^\circ$. $\vec{B}$ is more vertical: the ratio $|B_y/B_x| = 4$ exceeds $|A_y/A_x| = 1.5$.</p>` }
          ] }
      ]
    },

    /* ============================== 1.2 ============================== */
    {
      id: "1.2",
      title: "Displacement, Velocity, and Acceleration",
      blurb: "Position, velocity, and acceleration form a derivative chain — and integration runs it in reverse.",
      objectives: [
        "Define displacement, velocity, and acceleration as vectors, distinguishing average from instantaneous values.",
        "Differentiate a position function to obtain velocity and acceleration; integrate acceleration or velocity with initial conditions.",
        "Use the chain-rule identity a = v(dv/dx) when acceleration is known as a function of position.",
        "Distinguish distance from displacement and speed from velocity in nonuniform motion."
      ],
      sections: [
        { heading: "The Derivative Chain",
          content: String.raw`<p><strong>Displacement</strong> is the change in position, $\Delta x = x_f - x_i$ — a vector, unlike the scalar distance traveled. <strong>Average velocity</strong> is $\bar{v} = \Delta x / \Delta t$; the <strong>instantaneous velocity</strong> is its limit,</p>
<p>$$v = \lim_{\Delta t \to 0}\frac{\Delta x}{\Delta t} = \frac{dx}{dt},$$</p>
<p>and acceleration is the next derivative: $a = dv/dt = d^2x/dt^2$. That is the whole conceptual content of kinematics — everything else is applying calculus to it. Speed is the magnitude $|v|$, so an object can have constant speed and nonzero acceleration if its direction changes (circular motion, coming in Unit 2).</p>
<div class="callout warn">An object is <em>not</em> necessarily momentarily at rest where acceleration is zero, and acceleration is <em>not</em> necessarily zero where the object is momentarily at rest. A ball at the top of its flight has $v = 0$ but $a = -g$.</div>` },
        { heading: "Running the Chain Backwards: Integration",
          content: String.raw`<p>Differentiation goes down the chain $x \to v \to a$; integration climbs back up, but each integral needs an initial condition:</p>
<p>$$v(t) = v_0 + \int_0^t a\,dt', \qquad x(t) = x_0 + \int_0^t v\,dt'.$$</p>
<p>When $a$ is constant these integrals generate the familiar kinematics equations — they are theorems, not axioms, and they fail the instant $a$ varies. For time-varying acceleration you must integrate directly.</p>
<p>A third tool handles acceleration given as a function of <em>position</em>. By the chain rule,</p>
<p>$$a = \frac{dv}{dt} = \frac{dv}{dx}\frac{dx}{dt} = v\frac{dv}{dx},$$</p>
<p>so $\int v\,dv = \int a\,dx$. This identity is the seed of the work–energy theorem in Unit 3 and is a favorite on free-response questions: if you know $a(x)$, separate and integrate to get $v(x)$ without ever finding $t$.</p>` },
        { heading: "Reading Displacement as Area",
          graph: { xLabel: "t (s)", yLabel: "v (m/s)", xMin: 0, xMax: 3, yMin: 0, yMax: 28,
                   fns: [ { expr: "3*x*x", label: "v(t) = 3t²", color: "#fbbf24" } ],
                   shade: { expr: "3*x*x", from: 0, to: 2 } },
          graphCaption: "The shaded area under v(t) = 3t² from 0 to 2 s is the displacement: ∫3t² dt = t³ = 8 m.",
          content: String.raw`<p>The graph shows a velocity that grows like $t^2$ — constant-acceleration formulas would be flat wrong here. The displacement over the first two seconds is the shaded area, $\Delta x = \int_0^2 3t^2\,dt = \left[t^3\right]_0^2 = 8\,\text{m}$. If the velocity ever dips below the axis, that area counts as negative displacement, while the <em>distance</em> traveled adds all areas as positive. Splitting the integral at the zeros of $v(t)$ is the standard technique for distance problems.</p>` },
        { heading: "Interactive: One-Dimensional Motion",
          sim: "kinematics1d",
          simCaption: "Pick a scenario and watch x(t), v(t), and a(t) evolve together. Pause at a moment when v = 0 and check whether a is also zero — usually it isn't.",
          content: String.raw`<p>As you run the sim, narrate the chain to yourself: the slope of the $x$ graph at each instant is the height of the $v$ graph, and the slope of $v$ is the height of $a$. Fluency in that triple-reading is exactly what the exam tests.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Using $v = v_0 + at$ when $a$ is not constant.</strong> If the problem gives $a(t)$ or $a(x)$ that actually varies, you must integrate. The constant-$a$ equations are special cases, not laws.</li>
<li><strong>Confusing distance with displacement.</strong> If $v(t)$ changes sign, find the turnaround times first, then add the magnitudes of the pieces.</li>
<li><strong>Average velocity is not the average of velocities</strong> unless acceleration is constant. In general $\bar{v} = \Delta x/\Delta t$, full stop.</li>
<li><strong>Sign sloppiness:</strong> deceleration is not "negative acceleration" — an object moving in the $-x$ direction that slows down has <em>positive</em> $a$. Acceleration opposite to velocity means slowing; same sign means speeding up.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2x}{dt^2}`, note: "Definitions — always true, no assumptions." },
        { latex: String.raw`\Delta x = \int_{t_1}^{t_2} v\,dt, \qquad \Delta v = \int_{t_1}^{t_2} a\,dt`, note: "Areas under the curves; signed quantities." },
        { latex: String.raw`a = v\frac{dv}{dx}`, note: "Use when acceleration is given as a function of position." },
        { latex: String.raw`v = v_0 + at, \qquad x = x_0 + v_0 t + \tfrac{1}{2}at^2`, note: "Constant acceleration only." },
        { latex: String.raw`v^2 = v_0^2 + 2a\,\Delta x`, note: "Constant acceleration only; time eliminated." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A particle's position is $x(t) = 2t^3 + 5t$ (SI units). What is its velocity at $t = 2\,\text{s}$?</p>`,
          choices: [ String.raw`$29\,\text{m/s}$`, String.raw`$26\,\text{m/s}$`, String.raw`$17\,\text{m/s}$`, String.raw`$24\,\text{m/s}$` ],
          answer: 0,
          solution: String.raw`<p>$v = \dfrac{dx}{dt} = 6t^2 + 5$, so $v(2) = 24 + 5 = 29\,\text{m/s}$. Choice B is $x(2)/t$ confusion; D forgets the $+5$.</p>` },
        { type: "mcq",
          q: String.raw`<p>A particle has velocity $v(t) = 6t^2 - 4$ (SI units). What is its displacement from $t = 0$ to $t = 2\,\text{s}$?</p>`,
          choices: [ String.raw`$4\,\text{m}$`, String.raw`$8\,\text{m}$`, String.raw`$16\,\text{m}$`, String.raw`$20\,\text{m}$` ],
          answer: 1,
          solution: String.raw`<p>$\Delta x = \int_0^2 (6t^2 - 4)\,dt = \left[2t^3 - 4t\right]_0^2 = 16 - 8 = 8\,\text{m}$. You cannot use $\frac{1}{2}at^2$ here — the acceleration $a = 12t$ is not constant.</p>` },
        { type: "mcq",
          q: String.raw`<p>A particle moves along the $x$-axis with speed given as a function of position by $v(x) = \beta x^2$, where $\beta$ is a positive constant. Its acceleration as a function of $x$ is</p>`,
          choices: [ String.raw`$\beta^2 x^3$`, String.raw`$2\beta x$`, String.raw`$2\beta^2 x^3$`, String.raw`$\beta^2 x^4$` ],
          answer: 2,
          solution: String.raw`<p>With $v$ known as a function of position, use $a = v\dfrac{dv}{dx} = (\beta x^2)(2\beta x) = 2\beta^2 x^3$. Choice B is just $dv/dx$ — that has the wrong units and forgets the chain rule factor of $v$.</p>` },
        { type: "frq",
          q: String.raw`<p>A particle moves along the $x$-axis with acceleration $a(t) = 6t - 12$ (SI units). At $t = 0$ it is at the origin with velocity $+9\,\text{m/s}$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive expressions for $v(t)$ and $x(t)$.</p>`,
              solution: String.raw`<p>Integrate with initial conditions: $v(t) = 9 + \int_0^t (6t' - 12)\,dt' = 3t^2 - 12t + 9$. Then $x(t) = 0 + \int_0^t v\,dt' = t^3 - 6t^2 + 9t$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Find all times at which the particle is momentarily at rest.</p>`,
              solution: String.raw`<p>Set $v = 0$: $3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$, so $t = 1\,\text{s}$ and $t = 3\,\text{s}$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the particle's position at each of those times.</p>`,
              solution: String.raw`<p>$x(1) = 1 - 6 + 9 = 4\,\text{m}$; $x(3) = 27 - 54 + 27 = 0\,\text{m}$. The particle goes out to $+4\,\text{m}$, then returns to the origin.</p>` },
            { label: "(d)", prompt: String.raw`<p>Find the total <em>distance</em> traveled between $t = 0$ and $t = 3\,\text{s}$, and explain why it differs from the displacement.</p>`,
              solution: String.raw`<p>The velocity changes sign at $t = 1\,\text{s}$, so split there: from $0$ to $1\,\text{s}$ the particle moves $0 \to 4\,\text{m}$ ($4\,\text{m}$ forward); from $1$ to $3\,\text{s}$ it moves $4 \to 0\,\text{m}$ ($4\,\text{m}$ backward). Distance $= 4 + 4 = 8\,\text{m}$, while displacement $= 0$. They differ because displacement is the signed net change, and the two legs cancel.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A boat shuts off its engine at $t = 0$ while moving with speed $v_0$. The water slows it with an acceleration proportional to its velocity: $a = -kv$, where $k$ is a positive constant with units $\text{s}^{-1}$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Using separation of variables, derive $v(t)$.</p>`,
              solution: String.raw`<p>$\dfrac{dv}{dt} = -kv \Rightarrow \displaystyle\int_{v_0}^{v}\frac{dv'}{v'} = -k\int_0^t dt' \Rightarrow \ln\frac{v}{v_0} = -kt$, so $v(t) = v_0 e^{-kt}$. The speed decays exponentially with time constant $1/k$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive $x(t)$, taking $x(0) = 0$.</p>`,
              solution: String.raw`<p>$x(t) = \displaystyle\int_0^t v_0 e^{-kt'}\,dt' = \frac{v_0}{k}\left(1 - e^{-kt}\right)$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Determine the total distance the boat coasts as $t \to \infty$, and check your answer's units and limiting behavior.</p>`,
              solution: String.raw`<p>As $t \to \infty$, $e^{-kt} \to 0$, so $x \to v_0/k$ — the boat never quite stops, but its travel distance converges to a finite value $v_0/k$. Units: $(\text{m/s})/(\text{s}^{-1}) = \text{m}$. ✓ Limiting check: stronger damping (larger $k$) gives a shorter coasting distance, as expected.</p>` }
          ] }
      ]
    },

    /* ============================== 1.3 ============================== */
    {
      id: "1.3",
      title: "Representing Motion",
      blurb: "One motion, three graphs: learn to translate fluently among x(t), v(t), and a(t).",
      objectives: [
        "Translate between position, velocity, and acceleration graphs using slopes and areas.",
        "Extract turnaround points, direction of motion, and speeding-up/slowing-down intervals from any one graph.",
        "Compute displacement and distance from a velocity–time graph, including signed areas.",
        "Sketch the corresponding graphs one derivative up or down from a given graph."
      ],
      sections: [
        { heading: "Slopes Down, Areas Up",
          content: String.raw`<p>The three kinematic graphs are linked by calculus: moving <em>down</em> the chain $x \to v \to a$ you take slopes, moving <em>up</em> you take areas.</p>
<table>
<thead><tr><th>To find...</th><th>From...</th><th>Read...</th></tr></thead>
<tbody>
<tr><td>$v$ at an instant</td><td>$x(t)$ graph</td><td>slope of the tangent line</td></tr>
<tr><td>$a$ at an instant</td><td>$v(t)$ graph</td><td>slope of the tangent line</td></tr>
<tr><td>$\Delta x$ over an interval</td><td>$v(t)$ graph</td><td>signed area under the curve</td></tr>
<tr><td>$\Delta v$ over an interval</td><td>$a(t)$ graph</td><td>signed area under the curve</td></tr>
</tbody>
</table>
<p>Two readings the exam loves: on an $x(t)$ graph, <strong>curvature</strong> is acceleration (concave up means $a > 0$); and an object <strong>speeds up</strong> exactly when $v$ and $a$ have the same sign — equivalently, when the $v(t)$ graph is moving <em>away</em> from the time axis.</p>` },
        { heading: "A Position Graph, Decoded",
          graph: { xLabel: "t (s)", yLabel: "x (m)", xMin: 0, xMax: 5, yMin: -5, yMax: 6,
                   fns: [ { expr: "x*x - 4*x", label: "x(t) = t² − 4t", color: "#60a5fa" } ],
                   vlines: [ { x: 2, label: "turnaround" } ] },
          graphCaption: "x(t) = t² − 4t. The slope starts negative, flattens to zero at t = 2 s, then turns positive. Concave up throughout, so a > 0 the entire time.",
          content: String.raw`<p>Read this curve like a story. For $t < 2\,\text{s}$ the slope is negative: the object moves in the $-x$ direction. The slope's magnitude is shrinking, so it is <em>slowing down</em> — consistent with the constant positive acceleration implied by the upward curvature. At $t = 2\,\text{s}$ the tangent is horizontal: momentarily at rest, but still accelerating. Afterward it moves in $+x$ and speeds up. Note that the object passes through $x = 0$ at $t = 4\,\text{s}$ — crossing the axis means "back at the origin," <em>not</em> "at rest." That distinction alone is worth points on the exam.</p>` },
        { heading: "The Matching Velocity Graph",
          graph: { xLabel: "t (s)", yLabel: "v (m/s)", xMin: 0, xMax: 5, yMin: -5, yMax: 7,
                   fns: [ { expr: "2*x - 4", label: "v(t) = 2t − 4", color: "#34d399" } ],
                   shade: { expr: "2*x - 4", from: 0, to: 4 } },
          graphCaption: "v(t) = 2t − 4, the derivative of the position graph above. The shaded area from 0 to 4 s nets to zero: equal triangles below and above the axis.",
          content: String.raw`<p>This is the slope of the previous graph plotted as its own function. The straight line confirms constant acceleration $a = 2\,\text{m/s}^2$. The shaded region from $0$ to $4\,\text{s}$ contains a triangle of area $-4\,\text{m}$ below the axis and one of $+4\,\text{m}$ above: the displacement is zero, matching the position graph's return to $x = 0$. The <em>distance</em> traveled, however, is $4 + 4 = 8\,\text{m}$. Whenever a velocity graph crosses the axis, split your area calculation there.</p>` },
        { heading: "The Acceleration Graph and the Full Set",
          graph: { xLabel: "t (s)", yLabel: "a (m/s²)", xMin: 0, xMax: 5, yMin: -1, yMax: 4,
                   fns: [ { expr: "2", label: "a(t) = 2", color: "#f87171" } ] },
          graphCaption: "a(t) = 2 m/s², the slope of the v(t) line. Its area from 0 to t gives Δv = 2t, matching the velocity graph.",
          content: String.raw`<p>The flat acceleration graph completes the family: parabola $\to$ line $\to$ constant, each one derivative apart. When sketching graphs on the exam, build them in this order and check consistency at landmark times — zeros of $v$ must align with extrema of $x$, and zeros of $a$ with extrema of $v$.</p>
<div class="callout">Exam strategy: annotate landmark times across all three graphs with light vertical lines before answering anything. Most graph-translation errors come from misaligned features, not bad calculus.</div>` },
        { heading: "Interactive: Watch All Three at Once",
          sim: "kinematics1d",
          simCaption: "Choose a scenario with a turnaround. Pause exactly at the turnaround and verify: x is at an extreme, v crosses zero, and a is whatever it is — generally not zero.",
          content: String.raw`<p>Try to predict each graph's shape <em>before</em> running the motion. Prediction-then-check is the fastest way to build graph fluency.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Reading the graph as a picture of the path.</strong> An $x(t)$ graph that curves downhill does not mean the object moves "downhill" — it is a plot of position versus time, not a trajectory.</li>
<li><strong>"The graphs cross, so they meet."</strong> Two $v(t)$ curves crossing means equal <em>velocities</em> at that instant, not equal positions.</li>
<li><strong>Forgetting signed area.</strong> Area below the time axis subtracts from displacement.</li>
<li><strong>Zero crossing vs. zero slope.</strong> On $x(t)$: crossing the axis = at the origin; horizontal tangent = at rest. Students swap these constantly under time pressure.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`v = \frac{dx}{dt} \;\;\Rightarrow\;\; \text{slope of } x(t)`, note: "Instantaneous velocity is the tangent slope of the position graph." },
        { latex: String.raw`a = \frac{dv}{dt} \;\;\Rightarrow\;\; \text{slope of } v(t)`, note: "Instantaneous acceleration is the tangent slope of the velocity graph." },
        { latex: String.raw`\Delta x = \int_{t_1}^{t_2} v\,dt`, note: "Signed area under v(t); split at zero crossings for distance." },
        { latex: String.raw`\Delta v = \int_{t_1}^{t_2} a\,dt`, note: "Signed area under a(t)." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>The slope of a velocity–time graph at an instant gives the object's</p>`,
          choices: [ String.raw`displacement`, String.raw`acceleration`, String.raw`position`, String.raw`speed` ],
          answer: 1,
          solution: String.raw`<p>$a = dv/dt$, and the derivative is the slope of the graph. Displacement is the <em>area</em> under $v(t)$, not its slope.</p>` },
        { type: "mcq",
          q: String.raw`<p>An object's position–time graph is concave up with a negative slope. The object is</p>`,
          choices: [ String.raw`moving in the $-x$ direction and speeding up`, String.raw`moving in the $-x$ direction and slowing down`, String.raw`moving in the $+x$ direction and speeding up`, String.raw`moving in the $+x$ direction and slowing down` ],
          answer: 1,
          solution: String.raw`<p>Negative slope means $v < 0$ (moving in $-x$). Concave up means $a > 0$. Since $v$ and $a$ have opposite signs, the object is slowing down.</p>` },
        { type: "mcq",
          q: String.raw`<p>An object's velocity is $v(t) = 4 - 2t$ (m/s) for $0 \le t \le 4\,\text{s}$. What total <strong>distance</strong> does it travel in that interval?</p>`,
          choices: [ String.raw`$0\,\text{m}$`, String.raw`$4\,\text{m}$`, String.raw`$8\,\text{m}$`, String.raw`$16\,\text{m}$` ],
          answer: 2,
          solution: String.raw`<p>$v = 0$ at $t = 2\,\text{s}$. From $0$ to $2\,\text{s}$ the area is $\tfrac{1}{2}(2)(4) = +4\,\text{m}$; from $2$ to $4\,\text{s}$ it is $-4\,\text{m}$. Displacement is $0$ (choice A's trap), but distance adds the magnitudes: $8\,\text{m}$.</p>` },
        { type: "frq",
          q: String.raw`<p>A cart moves along a straight track. Its velocity–time graph consists of three straight segments: from $t = 0$ to $2\,\text{s}$, $v$ rises linearly from $0$ to $8\,\text{m/s}$; from $2$ to $6\,\text{s}$, $v$ is constant at $8\,\text{m/s}$; from $6$ to $10\,\text{s}$, $v$ falls linearly from $8\,\text{m/s}$ to $0$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Find the acceleration during each of the three intervals.</p>`,
              solution: String.raw`<p>Slopes of the segments: $a_1 = \dfrac{8 - 0}{2} = 4\,\text{m/s}^2$; $a_2 = 0$; $a_3 = \dfrac{0 - 8}{4} = -2\,\text{m/s}^2$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Find the total displacement of the cart.</p>`,
              solution: String.raw`<p>Total area under the graph: triangle $\tfrac{1}{2}(2)(8) = 8\,\text{m}$, rectangle $(4)(8) = 32\,\text{m}$, triangle $\tfrac{1}{2}(4)(8) = 16\,\text{m}$. Total: $\Delta x = 8 + 32 + 16 = 56\,\text{m}$. (Equivalently, the whole figure is a trapezoid: $\tfrac{1}{2}(4 + 10)(8) = 56\,\text{m}$.)</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the cart's average velocity over the full $10\,\text{s}$.</p>`,
              solution: String.raw`<p>$\bar{v} = \Delta x/\Delta t = 56/10 = 5.6\,\text{m/s}$. Note this is <em>not</em> the average of $0$ and $8$ — that shortcut requires constant acceleration over the whole interval, which we don't have.</p>` },
            { label: "(d)", prompt: String.raw`<p>Describe the shape of the position–time graph in each interval (assume $x = 0$ at $t = 0$).</p>`,
              solution: String.raw`<p>From $0$ to $2\,\text{s}$: a parabola, concave up, starting with zero slope (reaching $x = 8\,\text{m}$). From $2$ to $6\,\text{s}$: a straight line of slope $8\,\text{m/s}$ (reaching $40\,\text{m}$). From $6$ to $10\,\text{s}$: a parabola, concave down, leveling off to a horizontal tangent at $x = 56\,\text{m}$. The pieces join smoothly because $v$ is continuous.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>An object starts from rest at the origin. Its acceleration–time graph is: $a = +3\,\text{m/s}^2$ from $t = 0$ to $2\,\text{s}$; $a = 0$ from $2$ to $4\,\text{s}$; $a = -3\,\text{m/s}^2$ from $4$ to $6\,\text{s}$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Find the velocity at $t = 2$, $4$, and $6\,\text{s}$ using areas under the $a(t)$ graph.</p>`,
              solution: String.raw`<p>$\Delta v$ is the area under $a(t)$. $v(2) = 0 + (3)(2) = 6\,\text{m/s}$; $v(4) = 6 + 0 = 6\,\text{m/s}$; $v(6) = 6 + (-3)(2) = 0$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Sketch (in words) the velocity–time graph, then find the total displacement at $t = 6\,\text{s}$.</p>`,
              solution: String.raw`<p>$v(t)$ rises linearly $0 \to 6\,\text{m/s}$ over $[0,2]$, stays flat at $6$ over $[2,4]$, then falls linearly back to $0$ over $[4,6]$ — a symmetric trapezoid. Displacement = trapezoid area $= \tfrac{1}{2}(2 + 6)(6) = 24\,\text{m}$. (Pieces: $6 + 12 + 6 = 24\,\text{m}$.)</p>` },
            { label: "(c)", prompt: String.raw`<p>At what time is the object farthest from the origin within $0 \le t \le 6\,\text{s}$? Justify using the graphs.</p>`,
              solution: String.raw`<p>The velocity never goes negative, so the object never backtracks — position increases monotonically the whole time. It is farthest at $t = 6\,\text{s}$, at $x = 24\,\text{m}$. (Had $v$ gone negative after $t = 6\,\text{s}$, the maximum would occur at the zero crossing of $v$.)</p>` }
          ] }
      ]
    },

    /* ============================== 1.4 ============================== */
    {
      id: "1.4",
      title: "Reference Frames and Relative Motion",
      blurb: "Velocity is always measured relative to something — and changing the something is just vector addition.",
      objectives: [
        "Explain why velocity measurements depend on the observer's reference frame.",
        "Relate velocities in different frames using vector addition with consistent subscript notation.",
        "Solve river-crossing and wind-drift problems, including aiming to cancel the current.",
        "Apply relative position and velocity to two-body pursuit and closest-approach problems."
      ],
      sections: [
        { heading: "The Subscript Game",
          content: String.raw`<p>A velocity only means something once you say what it is measured <em>relative to</em>. The bookkeeping is handled by one identity:</p>
<p>$$\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C},$$</p>
<p>read "$A$ relative to $C$ equals $A$ relative to $B$ plus $B$ relative to $C$." The inner subscripts ($B$) cancel like units in dimensional analysis — that chaining trick makes even three-frame problems mechanical. You will also need $\vec{v}_{A/B} = -\vec{v}_{B/A}$: if the train sees you drift backward, you see the train drift forward.</p>
<div class="callout key">Write every velocity in a problem with two subscripts (object/frame) before doing any math. Most relative-motion errors are really labeling errors.</div>
<p>All frames moving at constant velocity relative to one another (<strong>inertial frames</strong>) measure the <em>same acceleration</em>: differentiating the equation above kills the constant $\vec{v}_{B/C}$ term. That is why Newton's laws, coming in Unit 2, work equally well in any inertial frame.</p>` },
        { heading: "The Classic: Crossing a River",
          content: String.raw`<p>A boat moves at speed $v_{b}$ relative to the <em>water</em>; the water moves at $v_{w}$ relative to the <em>ground</em>. Two standard strategies:</p>
<ul>
<li><strong>Head straight across.</strong> The crossing component is the full $v_b$, so the crossing time $t = D/v_b$ is the minimum possible — but the current carries the boat downstream a distance $v_w t = v_w D / v_b$. The crossing time is completely independent of the current: the perpendicular components are independent.</li>
<li><strong>Land directly opposite.</strong> Aim upstream at angle $\theta$ with $\sin\theta = v_w/v_b$ so the upstream component of the boat's water-velocity cancels the current. The ground speed across is $\sqrt{v_b^2 - v_w^2}$, giving the longer time $t = D/\sqrt{v_b^2 - v_w^2}$. This is only possible if $v_b > v_w$.</li>
</ul>
<p>Notice the trade-off: fastest crossing and zero drift are <em>different</em> headings. Exam questions love asking which goal a given heading achieves.</p>` },
        { heading: "Interactive: Boat in a Current",
          sim: "riverboat",
          simCaption: "Set the boat speed and current, then vary the heading. Find the heading that lands you directly opposite, and confirm the crossing time is minimized by heading straight across — not by canceling the drift.",
          content: String.raw`<p>While experimenting, watch the two arrows: the heading (velocity relative to water) and the ground track (velocity relative to ground). They differ by exactly the current vector — the subscript identity made visible.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Aiming upstream to cross faster.</strong> Aiming upstream <em>cancels drift</em> but lengthens the crossing time, because only the component of $\vec{v}_{b/w}$ across the river moves you across.</li>
<li><strong>Using $\tan\theta$ where $\sin\theta$ belongs.</strong> To land straight across, the upstream component must equal the current: $v_b \sin\theta = v_w$. Drawing the right triangle — hypotenuse $v_b$, not $v_w$ — prevents this.</li>
<li><strong>Mixing frames mid-problem.</strong> Each vector equation must keep every term in a consistent pair of frames; chain subscripts, don't improvise.</li>
<li><strong>Forgetting the impossibility condition.</strong> If the current exceeds the boat's speed, no heading lands directly opposite; the best you can do is minimize drift.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{v}_{A/C} = \vec{v}_{A/B} + \vec{v}_{B/C}`, note: "Frame-chaining rule; inner subscripts cancel." },
        { latex: String.raw`\vec{v}_{A/B} = -\vec{v}_{B/A}`, note: "Swapping observer and object reverses the vector." },
        { latex: String.raw`t_{\text{straight}} = \frac{D}{v_b}, \qquad \text{drift} = \frac{v_w D}{v_b}`, note: "Heading straight across a river of width D." },
        { latex: String.raw`\sin\theta = \frac{v_w}{v_b}, \qquad t = \frac{D}{\sqrt{v_b^2 - v_w^2}}`, note: "Aim upstream at θ to land directly opposite (requires v_b > v_w)." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A boat can move at $4\,\text{m/s}$ relative to still water. It heads straight across a river whose current is $3\,\text{m/s}$. What is the boat's speed relative to the ground?</p>`,
          choices: [ String.raw`$1\,\text{m/s}$`, String.raw`$3.5\,\text{m/s}$`, String.raw`$5\,\text{m/s}$`, String.raw`$7\,\text{m/s}$` ],
          answer: 2,
          solution: String.raw`<p>The boat's water-velocity ($4\,\text{m/s}$ across) and the current ($3\,\text{m/s}$ downstream) are perpendicular, so they add as a 3-4-5 right triangle: $\sqrt{4^2 + 3^2} = 5\,\text{m/s}$. Choice D adds magnitudes; choice A subtracts them — both ignore direction.</p>` },
        { type: "mcq",
          q: String.raw`<p>The river above is $100\,\text{m}$ wide. With the boat heading straight across, how long does the crossing take?</p>`,
          choices: [ String.raw`$20\,\text{s}$`, String.raw`$25\,\text{s}$`, String.raw`$33\,\text{s}$`, String.raw`It depends on the current speed` ],
          answer: 1,
          solution: String.raw`<p>Only the component of velocity <em>across</em> the river moves the boat across, and that component is the full $4\,\text{m/s}$: $t = 100/4 = 25\,\text{s}$. The current displaces the boat downstream but has zero effect on the crossing time — perpendicular components are independent.</p>` },
        { type: "mcq",
          q: String.raw`<p>A boat moves at $5\,\text{m/s}$ relative to the water; the current is $3\,\text{m/s}$. The pilot aims upstream so the boat travels directly across the river. What is the boat's speed relative to the ground?</p>`,
          choices: [ String.raw`$3\,\text{m/s}$`, String.raw`$4\,\text{m/s}$`, String.raw`$5\,\text{m/s}$`, String.raw`$8\,\text{m/s}$` ],
          answer: 1,
          solution: String.raw`<p>The upstream component of the boat's water-velocity must cancel the $3\,\text{m/s}$ current, leaving the across-stream component as the ground speed: $\sqrt{5^2 - 3^2} = 4\,\text{m/s}$. Choice C forgets that part of the boat's speed is "spent" fighting the current.</p>` },
        { type: "frq",
          q: String.raw`<p>A river of width $D$ flows with uniform speed $u$. A boat moves with speed $v$ relative to the water, with $v > u$.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>The boat heads straight across (perpendicular to the banks). Derive expressions for the crossing time and the downstream distance the boat drifts.</p>`,
              solution: String.raw`<p>Across the river: $t_1 = D/v$, since the entire water-speed $v$ points across and the current contributes nothing perpendicular to itself. Downstream, the boat moves with the current the whole time: drift $= u t_1 = uD/v$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Now the pilot aims upstream at angle $\theta$ from straight-across so the boat lands directly opposite its start. Derive $\theta$ and the new crossing time.</p>`,
              solution: String.raw`<p>Zero net downstream motion requires $v\sin\theta = u$, so $\theta = \sin^{-1}(u/v)$. The across-river component is then $v\cos\theta = \sqrt{v^2 - u^2}$, giving $t_2 = \dfrac{D}{\sqrt{v^2 - u^2}}$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Which strategy crosses the river in less time? Justify your answer mathematically and explain the physical trade-off.</p>`,
              solution: String.raw`<p>Compare: $t_1 = D/v$ versus $t_2 = D/\sqrt{v^2 - u^2}$. Since $\sqrt{v^2 - u^2} < v$ whenever $u \ne 0$, we get $t_2 > t_1$: heading straight across is always faster. The trade-off: the straight-across heading devotes all of $v$ to crossing but accepts drift; the upstream heading spends part of $v$ canceling the current, slowing the crossing.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>At $t = 0$, car A is at the origin moving east ($+x$) at $20\,\text{m/s}$, and car B is $200\,\text{m}$ due north of the origin moving south ($-y$) at $15\,\text{m/s}$. Both velocities are constant.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Find the velocity of car B relative to car A (components and magnitude).</p>`,
              solution: String.raw`<p>$\vec{v}_{B/A} = \vec{v}_B - \vec{v}_A = (0 - 20)\,\hat{i} + (-15 - 0)\,\hat{j} = (-20\,\hat{i} - 15\,\hat{j})\,\text{m/s}$. Magnitude: $\sqrt{20^2 + 15^2} = 25\,\text{m/s}$, pointing south of west.</p>` },
            { label: "(b)", prompt: String.raw`<p>Write an expression for the distance between the cars as a function of time.</p>`,
              solution: String.raw`<p>Positions: $\vec{r}_A = (20t,\, 0)$ and $\vec{r}_B = (0,\, 200 - 15t)$. Separation vector: $\Delta\vec{r} = \vec{r}_B - \vec{r}_A = (-20t,\, 200 - 15t)$, so $s(t) = \sqrt{400t^2 + (200 - 15t)^2}$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Using calculus, find the time of closest approach and the minimum distance between the cars.</p>`,
              solution: String.raw`<p>Minimize $s^2 = 400t^2 + (200 - 15t)^2$ (same minimum, easier algebra): $\dfrac{d(s^2)}{dt} = 800t + 2(200 - 15t)(-15) = 800t - 6000 + 450t = 1250t - 6000 = 0$, so $t = 4.8\,\text{s}$. Then $\Delta\vec{r} = (-96,\, 128)\,\text{m}$ and $s_{\min} = \sqrt{96^2 + 128^2} = 160\,\text{m}$ (a 3-4-5 triangle scaled by 32). Second-derivative check: $d^2(s^2)/dt^2 = 1250 > 0$, confirming a minimum.</p>` }
          ] }
      ]
    },

    /* ============================== 1.5 ============================== */
    {
      id: "1.5",
      title: "Motion in Two or Three Dimensions",
      blurb: "Independence of components turns 2D motion into two 1D problems — projectiles are the showcase.",
      objectives: [
        "Use vector-valued functions r(t) to find velocity and acceleration by differentiation.",
        "Analyze projectile motion by treating horizontal and vertical components independently.",
        "Derive expressions for time of flight, maximum height, and range, including launches from a height.",
        "Interpret the shape of a trajectory and the velocity vector's relationship to it."
      ],
      sections: [
        { heading: "Position as a Vector Function",
          content: String.raw`<p>In two or three dimensions, position becomes a vector function of time, and the derivative chain acts on each component independently:</p>
<p>$$\vec{r}(t) = x(t)\,\hat{i} + y(t)\,\hat{j}, \qquad \vec{v} = \frac{d\vec{r}}{dt} = \dot{x}\,\hat{i} + \dot{y}\,\hat{j}, \qquad \vec{a} = \frac{d\vec{v}}{dt}.$$</p>
<p>Because $\hat{i}$ and $\hat{j}$ are constant vectors, differentiating a vector function is just differentiating its components. Two geometric facts to internalize: the velocity vector is always <strong>tangent to the trajectory</strong>, and the acceleration vector generally is <em>not</em> — it has a component along the path (changing speed) and one perpendicular to it (changing direction).</p>
<div class="callout key">The single most powerful idea in 2D kinematics: perpendicular components are <em>independent</em>. The $x$ motion neither knows nor cares what the $y$ motion is doing — they share only the clock.</div>` },
        { heading: "Projectile Motion: Two Problems Sharing a Clock",
          content: String.raw`<p>For a projectile launched with speed $v_0$ at angle $\theta$ (taking $+y$ up, ignoring air resistance), the acceleration is purely vertical: $a_x = 0$, $a_y = -g$. Each direction is a 1D problem you already know:</p>
<ul>
<li><strong>Horizontal:</strong> constant velocity. $x = (v_0\cos\theta)\,t$.</li>
<li><strong>Vertical:</strong> constant acceleration. $y = (v_0\sin\theta)\,t - \tfrac{1}{2}gt^2$, with $v_y = v_0\sin\theta - gt$.</li>
</ul>
<p>Time is the bridge between them: find $t$ from one direction, use it in the other. At the peak, $v_y = 0$ but $v_x$ is untouched, so the speed there is $v_0\cos\theta$, not zero. Eliminating $t$ between the two equations gives the trajectory $y = x\tan\theta - \dfrac{g x^2}{2v_0^2\cos^2\theta}$ — a parabola. For level ground, the range $R = \dfrac{v_0^2 \sin 2\theta}{g}$ is maximized at $45^\circ$, and complementary angles ($30^\circ$ and $60^\circ$) share the same range while spending different times in the air.</p>` },
        { heading: "Reading a Trajectory",
          graph: { xLabel: "x (m)", yLabel: "y (m)", xMin: 0, xMax: 80, yMin: 0, yMax: 25,
                   fns: [ { expr: "x - x*x/80", label: "y(x) for v₀ = 20 m/s, θ = 45°", color: "#22d3ee" } ],
                   vlines: [ { x: 40, label: "apex" } ] },
          graphCaption: "Trajectory y = x − x²/80 for a 45° launch at 20 m/s (g = 10 m/s²). Apex at (40 m, 20 m); range 80 m. The parabola is symmetric about the apex for level ground.",
          content: String.raw`<p>This is a graph of $y$ versus $x$ — an actual picture of the path, unlike the $x(t)$ graphs of Topic 1.3. Equal horizontal slices are covered in equal times (constant $v_x$), so the projectile spends most of its <em>time</em> near the apex, where it moves slowest. The launch and landing angles are equal and opposite for level ground, and the speed at any height on the way up equals the speed at the same height on the way down — a symmetry that becomes obvious with energy methods in Unit 3.</p>` },
        { heading: "Interactive: Projectile Lab",
          sim: "projectile",
          simCaption: "Fix the speed and try 30° versus 60°: same range, different flight times. Then add launch height and watch the optimal angle drop below 45°.",
          content: String.raw`<p>Watch the velocity vector as the projectile flies: its horizontal piece never changes, while the vertical piece shrinks, vanishes at the apex, and regrows downward. That decomposition <em>is</em> the physics.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Setting $v = 0$ at the top.</strong> Only $v_y = 0$ there; the projectile still moves horizontally at $v_0\cos\theta$, and the acceleration is still $g$ downward.</li>
<li><strong>Using the range formula off level ground.</strong> $R = v_0^2\sin 2\theta/g$ assumes launch and landing at the same height. From a cliff, go back to the component equations and solve the quadratic for $t$.</li>
<li><strong>Mixing components:</strong> never put $v_0$ (the full speed) into a $y$-equation that needs $v_0\sin\theta$.</li>
<li><strong>Wrong sign convention midstream.</strong> Choose $+y$ up (so $a_y = -g$) or $+y$ down, and keep it for the entire problem. Half-switched signs are the most common projectile error.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{v} = \frac{d\vec{r}}{dt}, \qquad \vec{a} = \frac{d\vec{v}}{dt}`, note: "Differentiate component-by-component; v is tangent to the path." },
        { latex: String.raw`x = (v_0\cos\theta)\,t, \qquad y = (v_0\sin\theta)\,t - \tfrac{1}{2}gt^2`, note: "Projectile components, +y up, level-launch origin." },
        { latex: String.raw`v_y = v_0\sin\theta - gt, \qquad v_x = v_0\cos\theta`, note: "Vertical velocity changes; horizontal never does." },
        { latex: String.raw`y = x\tan\theta - \frac{g x^2}{2v_0^2\cos^2\theta}`, note: "Trajectory equation: a parabola in x." },
        { latex: String.raw`R = \frac{v_0^2\sin 2\theta}{g}`, note: "Range on level ground only; max at θ = 45°." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>At the highest point of its flight, a projectile launched at an angle has</p>`,
          choices: [ String.raw`zero velocity and zero acceleration`, String.raw`horizontal velocity and zero acceleration`, String.raw`zero velocity and acceleration $g$ downward`, String.raw`horizontal velocity and acceleration $g$ downward` ],
          answer: 3,
          solution: String.raw`<p>Gravity never pauses: $\vec{a} = g$ downward at every instant of flight. At the apex only the vertical velocity component is zero; the horizontal component $v_0\cos\theta$ persists. So the velocity is horizontal and nonzero.</p>` },
        { type: "mcq",
          q: String.raw`<p>Two projectiles are launched from level ground at the same speed, one at $30^\circ$ and one at $60^\circ$. Which statement is correct?</p>`,
          choices: [ String.raw`The $60^\circ$ projectile has the greater range`, String.raw`The $30^\circ$ projectile is in the air longer`, String.raw`They have equal ranges, but the $60^\circ$ projectile is in the air longer`, String.raw`They have equal ranges and equal flight times` ],
          answer: 2,
          solution: String.raw`<p>$R \propto \sin 2\theta$, and $\sin 60^\circ = \sin 120^\circ$, so the ranges match. But flight time $t = 2v_0\sin\theta/g$ grows with $\theta$: the $60^\circ$ shot flies higher and longer, just slower horizontally — the products come out equal.</p>` },
        { type: "mcq",
          q: String.raw`<p>A ball is thrown horizontally at $20\,\text{m/s}$ from a cliff $45\,\text{m}$ high ($g = 10\,\text{m/s}^2$). What is its speed just before hitting the ground?</p>`,
          choices: [ String.raw`$30\,\text{m/s}$`, String.raw`$36\,\text{m/s}$`, String.raw`$50\,\text{m/s}$`, String.raw`$20\,\text{m/s}$` ],
          answer: 1,
          solution: String.raw`<p>Fall time: $45 = \tfrac{1}{2}(10)t^2 \Rightarrow t = 3\,\text{s}$, so $v_y = gt = 30\,\text{m/s}$ while $v_x = 20\,\text{m/s}$ is unchanged. Speed $= \sqrt{20^2 + 30^2} = \sqrt{1300} \approx 36\,\text{m/s}$. Choice A is just $v_y$; choice C adds magnitudes ($20+30$) instead of adding the perpendicular components in quadrature.</p>` },
        { type: "frq",
          q: String.raw`<p>A projectile is launched with speed $v_0$ at angle $\theta$ above the horizontal from the edge of a cliff of height $h$, landing on the level ground below. Use $g$ for gravitational acceleration and ignore air resistance. Take the launch point as the origin with $+y$ upward.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive an expression for the time for the projectile to reach its maximum height, and for the maximum height above the ground.</p>`,
              solution: String.raw`<p>At the peak $v_y = 0$: $v_0\sin\theta - gt_{\text{peak}} = 0 \Rightarrow t_{\text{peak}} = \dfrac{v_0\sin\theta}{g}$. Height gained above launch: $\dfrac{(v_0\sin\theta)^2}{2g}$ (from $v_y^2 = (v_0\sin\theta)^2 - 2g\,\Delta y$ with $v_y = 0$). Above the ground: $H = h + \dfrac{v_0^2\sin^2\theta}{2g}$.</p>` },
            { label: "(b)", prompt: String.raw`<p>Derive an expression for the total time of flight.</p>`,
              solution: String.raw`<p>Landing means $y = -h$: $-h = (v_0\sin\theta)t - \tfrac{1}{2}gt^2$, i.e. $\tfrac{1}{2}gt^2 - (v_0\sin\theta)t - h = 0$. The quadratic formula (keeping the positive root) gives $t_f = \dfrac{v_0\sin\theta + \sqrt{v_0^2\sin^2\theta + 2gh}}{g}$. Check: $h = 0$ recovers the level-ground result $2v_0\sin\theta/g$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Derive an expression for the horizontal distance from the cliff base to the landing point, and the speed at impact.</p>`,
              solution: String.raw`<p>Horizontal: $R = (v_0\cos\theta)\,t_f$ with $t_f$ from part (b). Impact speed is easiest by components: $v_x = v_0\cos\theta$ and $v_y^2 = v_0^2\sin^2\theta + 2gh$, so $v = \sqrt{v_x^2 + v_y^2} = \sqrt{v_0^2 + 2gh}$ — remarkably, independent of $\theta$ (a preview of energy conservation).</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A particle moves in the $xy$-plane with position $\vec{r}(t) = 3t^2\,\hat{i} + (4t - t^3)\,\hat{j}$, in SI units.</p>`,
          parts: [
            { label: "(a)", prompt: String.raw`<p>Derive expressions for the velocity and acceleration vectors.</p>`,
              solution: String.raw`<p>Differentiate componentwise: $\vec{v}(t) = 6t\,\hat{i} + (4 - 3t^2)\,\hat{j}$ and $\vec{a}(t) = 6\,\hat{i} - 6t\,\hat{j}$.</p>` },
            { label: "(b)", prompt: String.raw`<p>At what time $t > 0$ is the particle moving purely horizontally? Find its velocity at that instant.</p>`,
              solution: String.raw`<p>Purely horizontal means $v_y = 0$: $4 - 3t^2 = 0 \Rightarrow t = \sqrt{4/3} = \dfrac{2}{\sqrt{3}} \approx 1.15\,\text{s}$. Then $\vec{v} = 6(2/\sqrt{3})\,\hat{i} = \dfrac{12}{\sqrt{3}}\,\hat{i} \approx 6.9\,\hat{i}\,\text{m/s}$.</p>` },
            { label: "(c)", prompt: String.raw`<p>Find the particle's speed at $t = 1\,\text{s}$.</p>`,
              solution: String.raw`<p>$\vec{v}(1) = 6\,\hat{i} + 1\,\hat{j}$, so $|\vec{v}| = \sqrt{36 + 1} = \sqrt{37} \approx 6.1\,\text{m/s}$. Speed is the magnitude of the velocity vector, not the sum of components.</p>` },
            { label: "(d)", prompt: String.raw`<p>Is this projectile-like motion (constant acceleration)? Justify your answer.</p>`,
              solution: String.raw`<p>No. $\vec{a}(t) = 6\,\hat{i} - 6t\,\hat{j}$ depends on time, so the acceleration is not constant — the constant-acceleration kinematics equations (and the parabolic-trajectory result) do not apply. Any analysis must go through the derivatives/integrals directly.</p>` }
          ] }
      ]
    }
  ]
});
