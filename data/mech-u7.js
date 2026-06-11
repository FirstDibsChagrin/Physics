/* data/mech-u7.js — Unit 7: Oscillations */
AP.registerUnit({
  id: 7,
  course: "mech",
  title: "Oscillations",
  weight: "10–15%",
  tagline: "The physics of anything that wiggles: restoring forces, sinusoids, and the differential equation behind them.",
  bigIdeas: [
    "Simple harmonic motion happens whenever the restoring force (or torque) is proportional to displacement — the defining equation is the differential equation ẍ = −ω²x.",
    "The period of SHM depends on the system's inertia and stiffness, not on the amplitude.",
    "Energy in SHM sloshes between kinetic and potential forms while the total stays fixed at ½kA²."
  ],
  topics: [
    {
      id: "7.1",
      title: "Defining Simple Harmonic Motion (SHM)",
      blurb: "One condition — restoring force proportional to displacement — and the same sinusoidal motion appears everywhere from springs to floating logs.",
      objectives: [
        "Identify the conditions for simple harmonic motion: a restoring force linear in displacement from a stable equilibrium.",
        "Translate Newton's second law into the SHM differential equation a = −ω²x and read off ω.",
        "Show that constant forces (like gravity on a vertical spring) shift the equilibrium without changing the oscillation."
      ],
      sections: [
        {
          heading: "The Core Idea",
          content: String.raw`<p>Displace a mass on a spring by $x$ from equilibrium and Hooke's law pulls it back: $F = -kx$. The minus sign is everything — the force always points <em>toward</em> equilibrium, so it is a <strong>restoring force</strong>. Newton's second law gives</p>
<p>$$ma = -kx \quad\Rightarrow\quad a = -\frac{k}{m}\,x.$$</p>
<p>Define $\omega^2 \equiv k/m$ and you get the fingerprint of simple harmonic motion:</p>
<p>$$a = -\omega^2 x \qquad\text{equivalently}\qquad \frac{d^2x}{dt^2} = -\omega^2 x.$$</p>
<p>Any system whose acceleration is proportional to displacement and oppositely directed performs SHM, no matter what physically provides the force — spring, buoyancy, gravity along a pendulum arc, even electric forces. Your job in every SHM problem is the same: write Newton's second law, massage it into the form above, and read off $\omega$ from the coefficient.</p>
<div class="callout key">SHM test: is $a \propto -x$ about a stable equilibrium, with a constant of proportionality? If yes, $\omega = \sqrt{\text{that constant}}$ and you know everything about the motion.</div>`
        },
        {
          heading: "Why Linear? Small Oscillations About Stable Equilibrium",
          content: String.raw`<p>Why does $F = -kx$ show up so often? Take any potential energy $U(x)$ with a stable equilibrium at $x_0$ (a minimum). Taylor-expand about the minimum:</p>
<p>$$U(x) \approx U(x_0) + \tfrac{1}{2}U''(x_0)(x - x_0)^2,$$</p>
<p>since $U'(x_0) = 0$ at a minimum. The force is $F = -\dfrac{dU}{dx} \approx -U''(x_0)(x - x_0)$ — automatically linear in displacement, with effective spring constant $k_{\text{eff}} = U''(x_0)$.</p>
<p><strong>Every</strong> stable equilibrium looks like a spring if you don't push it too far. That's why molecules vibrate sinusoidally, why a marble in any smooth bowl rocks harmonically near the bottom, and why "small oscillations" is one of the most reusable ideas in physics.</p>
<p>If the restoring force is <em>not</em> linear — say $F = -cx^3$ — the motion still oscillates, but it is not SHM: the period depends on amplitude and the motion is not sinusoidal.</p>`
        },
        {
          heading: "Interactive: The Spring–Mass Oscillator",
          sim: "shm",
          simCaption: "Displace the mass and release it. Watch the a(t) graph: it is always the upside-down mirror of x(t), scaled by ω². At the extremes a is largest; at equilibrium a is zero but v is maximal.",
          content: String.raw`<p>Pause the sim at several instants and check the defining relation: wherever $x$ is positive, $a$ is negative and proportionally large. Note also what is <em>not</em> true: the acceleration is not constant, so none of your kinematics equations from Unit 1 apply here.</p>`
        },
        {
          heading: "Worked Connection: The Vertical Spring",
          content: String.raw`<p>Hang a mass $m$ from a vertical spring of constant $k$. Gravity stretches the spring to a new equilibrium at $d = mg/k$ below the natural length. Measure $y$ <em>downward from this new equilibrium</em>. The net force at position $y$ is</p>
<p>$$F = mg - k(d + y) = mg - kd - ky = -ky,$$</p>
<p>since $kd = mg$. Newton's second law: $m\ddot{y} = -ky$, i.e. $\ddot{y} = -\frac{k}{m}y$ — exactly the horizontal-spring equation. Gravity has <em>shifted the equilibrium</em> but contributes nothing to the oscillation: same $\omega = \sqrt{k/m}$, same sinusoidal motion.</p>
<p>This generalizes: any constant force added to a linear restoring force relocates the equilibrium point without changing the frequency. On the exam, define your coordinate from the <em>new</em> equilibrium and the constant force vanishes from the equation of motion.</p>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Using constant-acceleration kinematics.</strong> In SHM, $a$ changes every instant; $v = v_0 + at$ and friends are never valid.</li>
<li><strong>Thinking $a = 0$ means the motion stops.</strong> At equilibrium the acceleration is zero but the speed is maximal — the mass sails through.</li>
<li><strong>Thinking $v = 0$ means $a = 0$.</strong> At the turning points it's the reverse: zero speed, maximum acceleration.</li>
<li><strong>Believing gravity changes the frequency of a vertical spring.</strong> It only shifts the equilibrium; $\omega = \sqrt{k/m}$ either way.</li>
<li><strong>Calling every oscillation SHM.</strong> The restoring force must be <em>linear</em> in displacement; $F \propto -x^3$ oscillates but isn't simple harmonic.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`F = -kx`, note: "Linear restoring force (Hooke's law); the defining condition for SHM." },
        { latex: String.raw`\frac{d^2x}{dt^2} = -\omega^2 x`, note: "The SHM differential equation; every SHM problem reduces to this form." },
        { latex: String.raw`\omega = \sqrt{\frac{k}{m}}`, note: "Angular frequency of a spring–mass system, from the coefficient in a = −(k/m)x." },
        { latex: String.raw`k_{\text{eff}} = U''(x_0)`, note: "Effective spring constant for small oscillations about a potential-energy minimum." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>Which condition is both necessary and sufficient for an object to undergo simple harmonic motion?</p>`,
          choices: [
            String.raw`Its acceleration is proportional to its displacement from equilibrium and oppositely directed.`,
            String.raw`Its motion repeats at regular intervals.`,
            String.raw`A constant force acts toward a fixed point.`,
            String.raw`Its speed is greatest at the endpoints of the motion.`
          ],
          answer: 0,
          solution: String.raw`<p>SHM is defined by $a = -\omega^2 x$. Mere periodicity (choice 2) is not enough — a bouncing ball is periodic but not SHM. A constant restoring force (choice 3) gives triangular-wave motion, not sinusoidal. And speed is greatest at <em>equilibrium</em>, zero at the endpoints.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A $0.50\,\text{kg}$ block on a frictionless surface is attached to a spring with $k = 200\,\text{N/m}$. When the block is $0.10\,\text{m}$ from equilibrium, the magnitude of its acceleration is</p>`,
          choices: [
            String.raw`$40\,\text{m/s}^2$`,
            String.raw`$20\,\text{m/s}^2$`,
            String.raw`$4.0\,\text{m/s}^2$`,
            String.raw`$400\,\text{m/s}^2$`
          ],
          answer: 0,
          solution: String.raw`<p>$|a| = \frac{k}{m}|x| = \frac{200}{0.50}(0.10) = 40\,\text{m/s}^2$. The distractor $20$ is the spring <em>force</em> $kx = 20\,\text{N}$ mistaken for the acceleration — don't skip the division by $m$.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A block oscillates on a horizontal spring with angular frequency $\omega$. The same block is then hung from the same spring and set oscillating vertically. Which statement is correct?</p>`,
          choices: [
            String.raw`The motion is SHM about a lower equilibrium point, with the same $\omega$.`,
            String.raw`The motion is SHM about the spring's natural length, with the same $\omega$.`,
            String.raw`The motion is SHM with a smaller $\omega$, since gravity weakens the restoring force.`,
            String.raw`The motion is not SHM, because gravity is a constant force that breaks the linearity.`
          ],
          answer: 0,
          solution: String.raw`<p>Gravity stretches the spring to a new equilibrium $d = mg/k$ below the natural length. Measuring displacement $y$ from there, $F_{\text{net}} = mg - k(d+y) = -ky$, so the motion is SHM about the <em>shifted</em> equilibrium with the unchanged $\omega = \sqrt{k/m}$. A constant added force can never change the frequency of a linear oscillator — it only relocates the center.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>A block of mass $m$ hangs at rest from a light vertical spring of force constant $k$ attached to the ceiling. The block is then pulled down a small distance and released.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Derive an expression for the distance $d$ the spring is stretched when the block hangs in equilibrium.</p>`,
              solution: String.raw`<p>At equilibrium the net force is zero: spring force up equals weight down, $kd = mg$, so $$d = \frac{mg}{k}.$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Let $y$ be the block's displacement below the equilibrium position. Apply Newton's second law to show that the block's motion satisfies $\ddot{y} = -\dfrac{k}{m}y$.</p>`,
              solution: String.raw`<p>Taking downward as positive, with the spring stretched a total of $d + y$: $$m\ddot{y} = mg - k(d + y) = mg - kd - ky = -ky,$$ using $kd = mg$ from part (a). Dividing by $m$: $\ddot{y} = -\frac{k}{m}y$, the SHM equation.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>State the angular frequency of the oscillation, and explain in one or two sentences why gravity does not appear in your answer.</p>`,
              solution: String.raw`<p>$\omega = \sqrt{k/m}$, identical to a horizontal spring–mass system. Gravity is a constant force, and constant forces only shift the equilibrium position ($d = mg/k$); once displacement is measured from the new equilibrium, gravity cancels out of the equation of motion entirely.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>A uniform solid cylinder of height $H$, cross-sectional area $A$, and density $\rho_c$ floats upright in a liquid of density $\rho_\ell$ (with $\rho_c < \rho_\ell$). It is pushed straight down a small distance and released. Neglect drag from the liquid.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Derive an expression for the depth $h_0$ to which the cylinder is submerged when floating in equilibrium.</p>`,
              solution: String.raw`<p>Equilibrium: buoyant force equals weight. $\rho_\ell g A h_0 = \rho_c g A H$, so $$h_0 = \frac{\rho_c}{\rho_\ell}H.$$ (Sensible: $\rho_c < \rho_\ell$ gives $h_0 < H$ — it floats.)</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Let $x$ be the additional depth below equilibrium. Show that the net force on the cylinder is $F = -\rho_\ell g A x$, and explain why this guarantees simple harmonic motion.</p>`,
              solution: String.raw`<p>Pushed down by $x$, the submerged depth is $h_0 + x$, so taking downward positive: $$F = \rho_c g A H - \rho_\ell g A (h_0 + x) = \underbrace{(\rho_c g A H - \rho_\ell g A h_0)}_{=\,0 \text{ by (a)}} - \rho_\ell g A x = -\rho_\ell g A x.$$ The net force is linear in the displacement and directed back toward equilibrium — exactly the SHM condition $F = -k_{\text{eff}}x$ with $k_{\text{eff}} = \rho_\ell g A$.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Derive an expression for the angular frequency $\omega$ of the bobbing motion in terms of $\rho_c$, $\rho_\ell$, $g$, and $H$.</p>`,
              solution: String.raw`<p>The cylinder's mass is $m = \rho_c A H$. Newton's second law: $\rho_c A H\,\ddot{x} = -\rho_\ell g A x$, so $$\ddot{x} = -\frac{\rho_\ell\,g}{\rho_c H}\,x \quad\Rightarrow\quad \omega = \sqrt{\frac{\rho_\ell\,g}{\rho_c H}}.$$ Note $A$ cancels: a wide log and a thin dowel of the same height and density bob at the same frequency.</p>`
            }
          ]
        }
      ]
    },
    {
      id: "7.2",
      title: "Frequency and Period of SHM",
      blurb: "Why a stopwatch can weigh an astronaut: the clock rate of an oscillator is set by stiffness and inertia — and nothing else.",
      objectives: [
        "Calculate the period, frequency, and angular frequency of a spring–mass oscillator and convert among them.",
        "Explain why the period of SHM is independent of amplitude, and predict how T changes when m or k changes.",
        "Design and analyze an experiment (e.g., T² vs. m) to extract a spring constant from oscillation data."
      ],
      sections: [
        {
          heading: "The Core Idea",
          content: String.raw`<p>An oscillator with $\ddot{x} = -\omega^2 x$ repeats its motion every time the phase $\omega t$ advances by $2\pi$. So the <strong>period</strong>, frequency, and angular frequency are locked together:</p>
<p>$$T = \frac{2\pi}{\omega}, \qquad f = \frac{1}{T}, \qquad \omega = 2\pi f.$$</p>
<p>For a spring–mass system, $\omega = \sqrt{k/m}$ gives the marquee result:</p>
<p>$$T = 2\pi\sqrt{\frac{m}{k}}.$$</p>
<p>The structure makes sense: more inertia ($m$) means sluggish response and a longer period; more stiffness ($k$) means stronger restoring forces and a shorter one. Because both appear under a square root, quadrupling the mass only doubles the period.</p>
<p>Notice what is <em>absent</em>: amplitude, gravity, and the phase constant. A spring–mass oscillator in deep space and one hanging in your lab tick at exactly the same rate — which is precisely how astronauts "weigh" themselves in orbit, by sitting in a chair on springs and timing the oscillations.</p>`
        },
        {
          heading: "Why Amplitude Doesn't Matter",
          content: String.raw`<p>Double the amplitude of an oscillator and you double the distance it must cover each cycle — yet the period is unchanged. Why?</p>
<p>Because the restoring force is linear, a bigger swing comes with proportionally bigger forces. At twice the displacement the acceleration is twice as large everywhere along the path, the speeds end up twice as large (e.g. $v_{\max} = A\omega$), and "twice the distance at twice the speed" takes exactly the same time. The linearity of $F = -kx$ is doing all the work; this property is called <strong>isochronism</strong>.</p>
<p>You can see it in the math: the solution $x = A\cos(\omega t + \phi)$ has $\omega$ fixed by $k/m$ alone, with $A$ a free constant set by initial conditions. Amplitude and frequency are independent dials.</p>
<div class="callout warn">Amplitude independence is a property of <em>linear</em> restoring forces. Anharmonic oscillators (and pendulums beyond small angles) do have amplitude-dependent periods.</div>`
        },
        {
          heading: "Interactive: Timing the Oscillator",
          sim: "shm",
          simCaption: "Time one full cycle. Now double the amplitude — the period readout doesn't budge. Then quadruple the mass and confirm the period doubles, and increase k to watch it shrink.",
          content: String.raw`<p>Make quantitative checks against $T = 2\pi\sqrt{m/k}$: quadruple $m$ (expect $T \times 2$), quadruple $k$ (expect $T \div 2$). Building these scaling instincts pays off on multiple-choice questions where no calculator time is available.</p>`
        },
        {
          heading: "Reading the Graph: Linearizing T² vs. m",
          graph: {
            xLabel: "m (kg)", yLabel: "T² (s²)", xMin: 0, xMax: 5, yMin: 0, yMax: 4.5,
            fns: [ { expr: "(4*Math.PI*Math.PI/50)*x", label: "T² = (4π²/k)m, k = 50 N/m", color: "#60a5fa" } ]
          },
          graphCaption: "Plot T² against m and SHM data falls on a line through the origin with slope 4π²/k.",
          content: String.raw`<p>The lab-skills question loves this: $T = 2\pi\sqrt{m/k}$ is not linear in $m$, but square both sides:</p>
<p>$$T^2 = \frac{4\pi^2}{k}\,m.$$</p>
<p>Plot $T^2$ on the vertical axis versus $m$ on the horizontal and you get a straight line through the origin whose slope is $4\pi^2/k$. Measure the slope, and the spring constant follows: $k = 4\pi^2/\text{slope}$.</p>
<p>A real data set often shows a small positive intercept. That's physics, not failure: the spring itself has mass, and its moving coils contribute an effective extra mass (about one-third of the spring's mass), shifting the line upward. Recognizing what an intercept <em>means</em> is a classic AP experimental-design point.</p>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Confusing $\omega$ with $f$.</strong> They differ by $2\pi$: $\omega = 2\pi f$. Check units — $\omega$ is in rad/s, $f$ in Hz.</li>
<li><strong>Inverting the period formula.</strong> $T = 2\pi\sqrt{m/k}$, mass on top. A stiffer spring gives a <em>shorter</em> period.</li>
<li><strong>Expecting amplitude to change the period.</strong> It never does for ideal SHM — a favorite trap answer.</li>
<li><strong>Linear scaling instead of square-root scaling.</strong> Doubling $m$ multiplies $T$ by $\sqrt{2}$, not 2.</li>
<li><strong>Plotting $T$ vs. $m$ and expecting a line.</strong> Linearize first: $T^2$ vs. $m$ (or $T$ vs. $\sqrt{m}$).</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`T = 2\pi\sqrt{\frac{m}{k}}`, note: "Period of a spring–mass oscillator; independent of amplitude and of g." },
        { latex: String.raw`f = \frac{1}{T}`, note: "Frequency in hertz (cycles per second)." },
        { latex: String.raw`\omega = 2\pi f = \frac{2\pi}{T} = \sqrt{\frac{k}{m}}`, note: "Angular frequency in rad/s — the bridge between T and the equation of motion." },
        { latex: String.raw`T^2 = \frac{4\pi^2}{k}\,m`, note: "Linearized form for experiments: slope of T² vs. m gives 4π²/k." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>A block oscillates on a spring with period $T$. The block is replaced by one with four times the mass. The new period is</p>`,
          choices: [
            String.raw`$2T$`,
            String.raw`$4T$`,
            String.raw`$T/2$`,
            String.raw`$\sqrt{2}\,T$`
          ],
          answer: 0,
          solution: String.raw`<p>$T \propto \sqrt{m}$, so quadrupling the mass multiplies the period by $\sqrt{4} = 2$. Choosing $4T$ means forgetting the square root — the most common scaling slip in this unit.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A $2.0\,\text{kg}$ block is attached to a spring with $k = 50\,\text{N/m}$ and set into SHM. Its period is closest to</p>`,
          choices: [
            String.raw`$1.3\,\text{s}$`,
            String.raw`$5.0\,\text{s}$`,
            String.raw`$0.20\,\text{s}$`,
            String.raw`$31\,\text{s}$`
          ],
          answer: 0,
          solution: String.raw`<p>$\omega = \sqrt{k/m} = \sqrt{50/2.0} = 5.0\,\text{rad/s}$, so $T = 2\pi/\omega = 2\pi/5.0 \approx 1.26\,\text{s}$. The distractor $5.0$ is $\omega$ itself; $31\,\text{s}$ comes from inverting the ratio to $2\pi\sqrt{k/m}$.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>The amplitude of a spring–mass oscillator is doubled. Which of the following correctly describes the changes in the period and the maximum speed?</p>`,
          choices: [
            String.raw`Period unchanged; maximum speed doubles.`,
            String.raw`Period doubles; maximum speed doubles.`,
            String.raw`Period unchanged; maximum speed quadruples.`,
            String.raw`Period increases by $\sqrt{2}$; maximum speed unchanged.`
          ],
          answer: 0,
          solution: String.raw`<p>The period of ideal SHM is amplitude-independent (isochronism): $T = 2\pi\sqrt{m/k}$ contains no $A$. The maximum speed is $v_{\max} = A\omega$, linear in amplitude, so it doubles. The oscillator covers twice the distance in the same time because the restoring force — and hence every speed along the path — also doubles.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>A block of mass $m$ on a frictionless horizontal surface is attached between two walls by two springs of force constants $k_1$ and $k_2$, one on each side. Both springs are at their natural lengths when the block is at its equilibrium position.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>The block is displaced a distance $x$ to the right. Determine the net force on the block, and show that the two-spring system behaves like a single spring of constant $k_{\text{eff}} = k_1 + k_2$.</p>`,
              solution: String.raw`<p>Displaced right by $x$, one spring stretches and the other compresses, but <em>both</em> push the block back toward equilibrium (a stretched spring pulls left; a compressed spring pushes left): $$F = -k_1 x - k_2 x = -(k_1 + k_2)x.$$ This is Hooke's law with $k_{\text{eff}} = k_1 + k_2$ — springs acting on opposite sides add their stiffnesses, just like springs in parallel.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Derive an expression for the period of oscillation of the block.</p>`,
              solution: String.raw`<p>Newton's second law gives $\ddot{x} = -\frac{k_1+k_2}{m}x$, so $\omega = \sqrt{(k_1+k_2)/m}$ and $$T = 2\pi\sqrt{\frac{m}{k_1 + k_2}}.$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>If $k_1 = k_2 = k$, how does the period compare with that of the same block on a single spring of constant $k$? Justify your answer.</p>`,
              solution: String.raw`<p>With $k_{\text{eff}} = 2k$, the period is $T = 2\pi\sqrt{m/2k} = \frac{1}{\sqrt{2}}\left(2\pi\sqrt{m/k}\right)$ — shorter by a factor of $\sqrt{2}$. The doubled stiffness produces stronger restoring forces, so the block completes each cycle faster, scaling as $1/\sqrt{k_{\text{eff}}}$.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>Students hang various masses $m$ from a spring, set each into vertical oscillation with small amplitude, and use a stopwatch to time 20 complete cycles, from which they compute the period $T$ for each mass.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>The students want to plot their data so that the points fall on a straight line. State what they should plot on each axis, and derive the expression for the slope of the expected line.</p>`,
              solution: String.raw`<p>Square $T = 2\pi\sqrt{m/k}$ to get $$T^2 = \frac{4\pi^2}{k}\,m.$$ Plot $T^2$ on the vertical axis versus $m$ on the horizontal axis: the result is a straight line through the origin with slope $4\pi^2/k$.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>A best-fit line through their data has slope $1.6\,\text{s}^2/\text{kg}$. Calculate the spring constant.</p>`,
              solution: String.raw`<p>$$k = \frac{4\pi^2}{\text{slope}} = \frac{4\pi^2}{1.6} \approx 25\,\text{N/m}.$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>The best-fit line has a small positive vertical intercept rather than passing through the origin. Offer a physical explanation, and state whether this affects the value of $k$ obtained from the slope.</p>`,
              solution: String.raw`<p>The spring itself has mass, and its coils also oscillate; the system behaves as if an extra effective mass $m_s$ (about one-third of the spring's mass) were added: $T^2 = \frac{4\pi^2}{k}(m + m_s)$. This shifts the line upward by $\frac{4\pi^2 m_s}{k}$ — a positive intercept — but leaves the slope, and therefore the extracted $k$, unaffected. (Timing 20 cycles instead of 1 reduces random timing error but does not cause a systematic intercept.)</p>`
            }
          ]
        }
      ]
    },
    {
      id: "7.3",
      title: "Representing and Analyzing SHM",
      blurb: "One sinusoid to rule them all: solve ẍ = −ω²x, fix A and φ from initial conditions, and read motion straight off the graphs.",
      objectives: [
        "Verify by substitution that x(t) = A cos(ωt + φ) solves the SHM differential equation, and interpret A and φ.",
        "Differentiate x(t) to obtain v(t) and a(t), including the maximum values Aω and Aω².",
        "Determine amplitude and phase constant from initial position and velocity, and translate fluently between graphs and equations."
      ],
      sections: [
        {
          heading: "Solving the Differential Equation",
          content: String.raw`<p>SHM hands you a second-order differential equation: $\ddot{x} = -\omega^2 x$. We need a function whose second derivative is itself times $-\omega^2$ — and sinusoids do exactly that. Propose</p>
<p>$$x(t) = A\cos(\omega t + \phi)$$</p>
<p>and check by direct substitution:</p>
<p>$$\dot{x} = -A\omega\sin(\omega t + \phi), \qquad \ddot{x} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x.\;\checkmark$$</p>
<p>It works for <em>any</em> values of $A$ and $\phi$ — and a second-order equation needs exactly two free constants, so this is the general solution. The two constants encode the two initial conditions:</p>
<ul>
<li>$A$, the <strong>amplitude</strong>: the maximum excursion from equilibrium.</li>
<li>$\phi$, the <strong>phase constant</strong>: where in the cycle the clock starts. $\phi = 0$ means "released from rest at $+A$"; $\phi = -\pi/2$ gives $x = A\sin\omega t$, i.e. "starts at equilibrium moving in $+x$."</li>
</ul>
<div class="callout">The equivalent form $x = B\cos\omega t + C\sin\omega t$ is often easier for initial conditions: $B = x(0)$ and $C = v(0)/\omega$ immediately.</div>`
        },
        {
          heading: "Position, Velocity, Acceleration: One Family of Curves",
          graph: {
            xLabel: "t (s)", yLabel: "x, v, a (SI)", xMin: 0, xMax: 6.3, yMin: -2.3, yMax: 2.3,
            fns: [
              { expr: "0.5*Math.cos(2*x)", label: "x(t) = 0.5 cos(2t)  (m)", color: "#fbbf24" },
              { expr: "-Math.sin(2*x)", label: "v(t) = −1.0 sin(2t)  (m/s)", color: "#34d399" },
              { expr: "-2*Math.cos(2*x)", label: "a(t) = −2.0 cos(2t)  (m/s²)", color: "#f87171" }
            ],
            vlines: [ { x: 3.14, label: "t = T/2" } ]
          },
          graphCaption: "An oscillator with A = 0.5 m and ω = 2 rad/s. Velocity leads position by a quarter cycle; acceleration is position flipped upside down and scaled by ω².",
          content: String.raw`<p>Differentiating once and twice gives the whole kinematic family:</p>
<p>$$x = A\cos(\omega t + \phi), \quad v = -A\omega\sin(\omega t + \phi), \quad a = -A\omega^2\cos(\omega t + \phi).$$</p>
<p>Read the relationships off the graph: $v$ is a <strong>quarter cycle ahead</strong> of $x$ (it peaks where $x$ crosses zero), and $a$ is exactly <strong>half a cycle</strong> from $x$ — always its mirror image, magnified by $\omega^2$. The peak values stack up by factors of $\omega$:</p>
<p>$$v_{\max} = A\omega, \qquad a_{\max} = A\omega^2.$$</p>
<p>Exam skill: given any one graph, you should be able to sketch the other two, including correct zero crossings and peak alignment.</p>`
        },
        {
          heading: "Interactive: Match the Graphs",
          sim: "shm",
          simCaption: "Watch x(t), v(t), and a(t) draw themselves in real time. Pause at a turning point: x is extreme, v is zero, a is extreme with the opposite sign. Pause at equilibrium: the roles swap.",
          content: String.raw`<p>Use the sim to internalize the quarter-cycle relays: position extreme → velocity extreme → position extreme (other side), each separated by $T/4$. If you can name what $x$, $v$, and $a$ are doing at any instant of the cycle, the multiple-choice questions on phase become free points.</p>`
        },
        {
          heading: "Worked Connection: From Initial Conditions to the Full Solution",
          content: String.raw`<p>A block with $\omega = 4.0\,\text{rad/s}$ is at $x_0 = 0.30\,\text{m}$ moving at $v_0 = -1.6\,\text{m/s}$ at $t = 0$. Find $x(t)$.</p>
<p>Apply the initial conditions to $x = A\cos(\omega t + \phi)$:</p>
<p>$$x(0) = A\cos\phi = 0.30, \qquad v(0) = -A\omega\sin\phi = -1.6 \;\Rightarrow\; A\sin\phi = 0.40.$$</p>
<p>Square and add (using $\cos^2 + \sin^2 = 1$): $A = \sqrt{0.30^2 + 0.40^2} = 0.50\,\text{m}$. Divide: $\tan\phi = 0.40/0.30$, and since both $\cos\phi$ and $\sin\phi$ are positive, $\phi = 0.927\,\text{rad}$ (first quadrant). So</p>
<p>$$x(t) = 0.50\cos(4.0\,t + 0.927)\ \text{m}.$$</p>
<p>The general pattern: $A = \sqrt{x_0^2 + (v_0/\omega)^2}$ — the amplitude is bigger than $|x_0|$ whenever the oscillator starts with nonzero velocity, because it still has somewhere to go.</p>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Quoting $v_{\max} = A\omega^2$ or $a_{\max} = A\omega$.</strong> Each derivative brings down one factor of $\omega$: $v_{\max} = A\omega$, $a_{\max} = A\omega^2$.</li>
<li><strong>Assuming $A = x_0$.</strong> Only true if the oscillator is released from rest; otherwise $A = \sqrt{x_0^2 + (v_0/\omega)^2}$.</li>
<li><strong>Degrees vs. radians.</strong> Everything in $\omega t + \phi$ is in radians; set your calculator accordingly.</li>
<li><strong>Misreading phase on graphs.</strong> Velocity leads position by $T/4$; acceleration is in antiphase with position, never "ahead by $T/4$."</li>
<li><strong>Thinking the object spends equal time everywhere.</strong> It moves slowest near $\pm A$, so it lingers near the turning points and zips through equilibrium.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`x(t) = A\cos(\omega t + \phi)`, note: "General solution of the SHM equation; A and φ are fixed by initial conditions." },
        { latex: String.raw`v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)`, note: "Velocity leads position by a quarter cycle; v_max = Aω." },
        { latex: String.raw`a(t) = \frac{d^2x}{dt^2} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x`, note: "Acceleration is antiphase with position; a_max = Aω²." },
        { latex: String.raw`A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2}`, note: "Amplitude from initial position and velocity." },
        { latex: String.raw`v^2 = \omega^2\left(A^2 - x^2\right)`, note: "Speed at any position — no time needed." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>An object's position is $x(t) = 0.040\cos(5.0\,t)$ (SI units). Its maximum speed is</p>`,
          choices: [
            String.raw`$0.20\,\text{m/s}$`,
            String.raw`$0.040\,\text{m/s}$`,
            String.raw`$1.0\,\text{m/s}$`,
            String.raw`$5.0\,\text{m/s}$`
          ],
          answer: 0,
          solution: String.raw`<p>$v(t) = \dot{x} = -(0.040)(5.0)\sin(5.0t)$, so $v_{\max} = A\omega = 0.20\,\text{m/s}$. The distractor $1.0$ is $A\omega^2$ — the maximum <em>acceleration</em> — and $5.0$ is just $\omega$.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>At $t = 0$ an oscillator is at $x = 0$ and moving in the $+x$ direction. Which function describes its position?</p>`,
          choices: [
            String.raw`$x = A\sin(\omega t)$`,
            String.raw`$x = A\cos(\omega t)$`,
            String.raw`$x = -A\cos(\omega t)$`,
            String.raw`$x = -A\sin(\omega t)$`
          ],
          answer: 0,
          solution: String.raw`<p>Check both initial conditions. $A\sin(\omega t)$ gives $x(0) = 0$ and $v(0) = A\omega\cos(0) = +A\omega > 0$. ✓ The cosine options fail $x(0) = 0$, and $-A\sin(\omega t)$ starts at zero but moving in the $-x$ direction.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>An object in SHM is released from rest at $x = A$ at $t = 0$, with period $T$. At what time does it <em>first</em> pass through $x = A/2$?</p>`,
          choices: [
            String.raw`$T/6$`,
            String.raw`$T/4$`,
            String.raw`$T/8$`,
            String.raw`$T/12$`
          ],
          answer: 0,
          solution: String.raw`<p>With this start, $x = A\cos(\omega t)$. Set $A\cos(\omega t) = A/2$: $\omega t = \pi/3$ (first solution), so $t = \frac{\pi/3}{2\pi/T} = T/6$. The tempting answer $T/8$ assumes the object covers equal distances in equal times — but SHM moves slowly near the endpoint, so reaching the halfway position takes longer than an eighth of a period... in fact $T/6 > T/8$, reflecting the slow start near $x = A$.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>An oscillator satisfies the differential equation $\dfrac{d^2x}{dt^2} = -\omega^2 x$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Show by direct substitution that $x(t) = A\cos(\omega t + \phi)$ satisfies this equation for any constants $A$ and $\phi$.</p>`,
              solution: String.raw`<p>Differentiate twice using the chain rule: $$\frac{dx}{dt} = -A\omega\sin(\omega t + \phi), \qquad \frac{d^2x}{dt^2} = -A\omega^2\cos(\omega t + \phi).$$ But $A\cos(\omega t + \phi) = x$, so $\frac{d^2x}{dt^2} = -\omega^2 x$ for every $t$, independent of $A$ and $\phi$. ✓ Since a second-order ODE admits exactly two arbitrary constants, this is the general solution.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Starting from $x(t)$ and $v(t)$, derive the relation $v^2 = \omega^2(A^2 - x^2)$, valid at every instant.</p>`,
              solution: String.raw`<p>From $x = A\cos(\omega t+\phi)$ and $v = -A\omega\sin(\omega t+\phi)$: $$\frac{x^2}{A^2} + \frac{v^2}{A^2\omega^2} = \cos^2(\omega t+\phi) + \sin^2(\omega t+\phi) = 1.$$ Multiplying through by $A^2\omega^2$ and rearranging: $v^2 = \omega^2(A^2 - x^2)$.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Use the result of part (b) to identify where the speed is maximum and where it is zero, and give the maximum speed.</p>`,
              solution: String.raw`<p>$v^2$ is largest when $x = 0$ (equilibrium), giving $v_{\max} = \omega A$; it vanishes when $x = \pm A$, the turning points. This matches the physical picture: the restoring force does positive work on the way in to equilibrium and negative work on the way out.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>A block of mass $m$ on a spring of constant $k$ oscillates with angular frequency $\omega = \sqrt{k/m}$. At $t = 0$ the block is at position $x_0 > 0$ with velocity $v_0 > 0$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Writing the motion as $x(t) = A\cos(\omega t + \phi)$, apply the initial conditions to obtain two equations involving $A$ and $\phi$.</p>`,
              solution: String.raw`<p>Position: $x(0) = A\cos\phi = x_0$. Velocity: $v(0) = -A\omega\sin\phi = v_0$, i.e. $A\sin\phi = -\dfrac{v_0}{\omega}$.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Derive expressions for the amplitude $A$ and the phase constant $\phi$ in terms of $x_0$, $v_0$, and $\omega$.</p>`,
              solution: String.raw`<p>Square the two equations and add, using $\cos^2\phi + \sin^2\phi = 1$: $$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2}.$$ Divide them: $\tan\phi = -\dfrac{v_0}{\omega x_0}$; with $x_0 > 0$ and $v_0 > 0$ we need $\cos\phi > 0$ and $\sin\phi < 0$, so $\phi$ lies in the fourth quadrant, $\phi = -\arctan\!\left(\dfrac{v_0}{\omega x_0}\right)$.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Explain physically why $A > x_0$ whenever $v_0 \neq 0$.</p>`,
              solution: String.raw`<p>The amplitude is the position of farthest excursion, where the block is momentarily at rest. A block at $x_0$ that is still moving outward (or has kinetic energy in any direction) has not yet reached — or will swing out to — a point beyond $x_0$ before turning around. Energetically, $\tfrac{1}{2}kA^2 = \tfrac{1}{2}kx_0^2 + \tfrac{1}{2}mv_0^2 > \tfrac{1}{2}kx_0^2$, forcing $A > x_0$.</p>`
            }
          ]
        }
      ]
    },
    {
      id: "7.4",
      title: "Energy of Simple Harmonic Oscillators",
      blurb: "Kinetic and potential energy trade places twice per cycle while their sum, ½kA², never wavers.",
      objectives: [
        "Express the kinetic, potential, and total energy of a spring–mass oscillator as functions of position and of time.",
        "Prove, using the equation of motion, that total mechanical energy is conserved in SHM.",
        "Use energy methods to find speeds at given positions and to relate amplitude to total energy."
      ],
      sections: [
        {
          heading: "The Core Idea",
          content: String.raw`<p>A spring–mass oscillator stores energy in two accounts: kinetic energy $K = \tfrac{1}{2}mv^2$ and spring potential energy $U = \tfrac{1}{2}kx^2$. At the turning points ($x = \pm A$) the motion stops and everything is potential; at equilibrium ($x = 0$) the spring is relaxed and everything is kinetic:</p>
<p>$$E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2.$$</p>
<p>Between those extremes the books always balance:</p>
<p>$$E = \tfrac{1}{2}mv^2 + \tfrac{1}{2}kx^2 = \tfrac{1}{2}kA^2 \quad\text{at every instant.}$$</p>
<p>Solve for the speed at any position — no timing information needed:</p>
<p>$$v = \pm\,\omega\sqrt{A^2 - x^2}.$$</p>
<p>Note the quadratic dependence on amplitude: doubling $A$ quadruples the total energy. And because $E \propto A^2$ with no dependence on phase, two oscillators with the same $A$, $k$, and $m$ carry identical energy regardless of when they were started.</p>
<div class="callout key">Energy methods answer "how fast at this position?" instantly. Save $x(t)$ for questions that ask "when?"</div>`
        },
        {
          heading: "Proving Conservation with Calculus",
          content: String.raw`<p>Don't just assert conservation — derive it. Define $E(t) = \tfrac{1}{2}m\dot{x}^2 + \tfrac{1}{2}kx^2$ and differentiate with respect to time (chain rule):</p>
<p>$$\frac{dE}{dt} = m\dot{x}\ddot{x} + kx\dot{x} = \dot{x}\left(m\ddot{x} + kx\right).$$</p>
<p>But the equation of motion says $m\ddot{x} = -kx$, so the parenthesis is identically zero:</p>
<p>$$\frac{dE}{dt} = \dot{x}\,(0) = 0.$$</p>
<p>Total mechanical energy is constant — not approximately, not on average, but at every instant. The derivation also shows exactly what would break it: add a damping force $-b\dot{x}$ and the same computation yields $\frac{dE}{dt} = -b\dot{x}^2 \le 0$, a steady drain of energy into heat that dies only when the motion does.</p>
<p>This two-line argument — differentiate the energy, substitute the equation of motion — is a template you will reuse across mechanics and E&M (the LC circuit in particular).</p>`
        },
        {
          heading: "Energy vs. Position: Two Parabolas",
          graph: {
            xLabel: "x (m)", yLabel: "Energy (J)", xMin: -0.22, xMax: 0.22, yMin: 0, yMax: 2.4,
            fns: [
              { expr: "50*x*x", label: "U(x) = ½kx²,  k = 100 N/m", color: "#60a5fa" },
              { expr: "2 - 50*x*x", label: "K(x) = E − U", color: "#34d399" }
            ],
            hlines: [ { y: 2, label: "E = ½kA² = 2 J" } ],
            vlines: [ { x: -0.2, label: "−A" }, { x: 0.2, label: "+A" } ]
          },
          graphCaption: "k = 100 N/m, A = 0.20 m. U is an upward parabola, K its upside-down twin; they always sum to the flat line E = 2 J. The motion is trapped where U ≤ E.",
          content: String.raw`<p>The potential-energy curve $U = \tfrac{1}{2}kx^2$ is a parabola, and the kinetic energy $K = E - U$ is the gap between the flat total-energy line and that parabola. The turning points sit where the curves intersect ($U = E$, $K = 0$) — the motion can never escape the region $|x| \le A$.</p>
<p>Two readings worth practicing: the curves cross where $K = U = E/2$, which happens at $x = \pm A/\sqrt{2}$ (not $\pm A/2$!); and as functions of <em>time</em>, $U \propto \cos^2(\omega t)$ and $K \propto \sin^2(\omega t)$ each oscillate at frequency $2\omega$ — twice per position cycle, since the oscillator visits maximum speed twice per period.</p>`
        },
        {
          heading: "Interactive: Watch the Energy Slosh",
          sim: "shm",
          simCaption: "Focus on the energy bars. K empties exactly when U fills, twice per cycle, while the total bar stays frozen. Double the amplitude and confirm the total energy quadruples.",
          content: String.raw`<p>Watch one full period and count: $K$ peaks twice, $U$ peaks twice, total never moves. Then test the $E \propto A^2$ scaling by doubling the amplitude. If the sim lets you add damping, watch $\tfrac{dE}{dt} = -b\dot{x}^2$ in action: energy drains fastest where the mass moves fastest.</p>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Putting $K = U$ at $x = A/2$.</strong> Equality happens where $\tfrac{1}{2}kx^2 = \tfrac{1}{2}\cdot\tfrac{1}{2}kA^2$, i.e. $x = \pm A/\sqrt{2} \approx 0.71A$.</li>
<li><strong>Doubling amplitude, doubling energy.</strong> $E = \tfrac{1}{2}kA^2$ is quadratic: double $A$ → quadruple $E$.</li>
<li><strong>Thinking K and U oscillate at frequency $\omega$.</strong> They oscillate at $2\omega$ — each completes two full cycles per period of the motion.</li>
<li><strong>Sign confusion in $v = \pm\omega\sqrt{A^2 - x^2}$.</strong> Energy fixes the speed, not the direction; the $\pm$ reflects passing the same point moving either way.</li>
<li><strong>For vertical springs, juggling gravitational PE separately.</strong> Measure $x$ from the hanging equilibrium and $\tfrac{1}{2}kx^2$ (with the same $k$) already accounts for the combined spring + gravity potential energy.</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`U = \tfrac{1}{2}kx^2`, note: "Elastic potential energy; a parabola in position." },
        { latex: String.raw`K = \tfrac{1}{2}mv^2 = \tfrac{1}{2}k\left(A^2 - x^2\right)`, note: "Kinetic energy at position x, from energy conservation." },
        { latex: String.raw`E = K + U = \tfrac{1}{2}kA^2 = \tfrac{1}{2}mv_{\max}^2`, note: "Total mechanical energy is constant and quadratic in amplitude." },
        { latex: String.raw`v = \pm\,\omega\sqrt{A^2 - x^2}`, note: "Speed at any position, no timing required." },
        { latex: String.raw`\frac{dE}{dt} = \dot{x}\left(m\ddot{x} + kx\right) = 0`, note: "Conservation proven from the equation of motion mẍ = −kx." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>A block oscillates on a spring with $k = 100\,\text{N/m}$ and amplitude $0.20\,\text{m}$. The total mechanical energy of the oscillation is</p>`,
          choices: [
            String.raw`$2.0\,\text{J}$`,
            String.raw`$4.0\,\text{J}$`,
            String.raw`$20\,\text{J}$`,
            String.raw`$1.0\,\text{J}$`
          ],
          answer: 0,
          solution: String.raw`<p>$E = \tfrac{1}{2}kA^2 = \tfrac{1}{2}(100)(0.20)^2 = 2.0\,\text{J}$. The distractor $20$ forgets to square the amplitude's decimal ($kA^2$ without the square is $100 \times 0.2 = 20$); $4.0$ drops the factor of $\tfrac{1}{2}$.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>For a spring–mass oscillator of amplitude $A$, at what displacement is the kinetic energy equal to the potential energy?</p>`,
          choices: [
            String.raw`$x = \pm A/\sqrt{2}$`,
            String.raw`$x = \pm A/2$`,
            String.raw`$x = \pm A/4$`,
            String.raw`$x = \pm \sqrt{2}\,A$`
          ],
          answer: 0,
          solution: String.raw`<p>Set $U = E/2$: $\tfrac{1}{2}kx^2 = \tfrac{1}{2}\left(\tfrac{1}{2}kA^2\right)$, so $x^2 = A^2/2$ and $x = \pm A/\sqrt{2} \approx \pm 0.71A$. The instinctive answer $A/2$ fails because energy is quadratic in displacement: at $x = A/2$, $U$ is only a quarter of $E$, not half.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>An oscillator has maximum speed $v_{\max}$. Its speed when it passes through $x = A/2$ is</p>`,
          choices: [
            String.raw`$\dfrac{\sqrt{3}}{2}\,v_{\max}$`,
            String.raw`$\dfrac{1}{2}\,v_{\max}$`,
            String.raw`$\dfrac{3}{4}\,v_{\max}$`,
            String.raw`$\dfrac{1}{\sqrt{2}}\,v_{\max}$`
          ],
          answer: 0,
          solution: String.raw`<p>$v = \omega\sqrt{A^2 - x^2} = \omega\sqrt{A^2 - A^2/4} = \omega A\frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{2}v_{\max} \approx 0.87\,v_{\max}$. Choosing $v_{\max}/2$ assumes speed falls linearly with displacement; it actually stays high until near the turning point because energy depends on $v^2$.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>A block of mass $m$ attached to a spring of constant $k$ moves according to $m\ddot{x} = -kx$. Define the total mechanical energy $E = \tfrac{1}{2}m\dot{x}^2 + \tfrac{1}{2}kx^2$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Differentiate $E$ with respect to time and use the equation of motion to prove that $E$ is constant.</p>`,
              solution: String.raw`<p>By the chain rule, $$\frac{dE}{dt} = m\dot{x}\ddot{x} + kx\dot{x} = \dot{x}(m\ddot{x} + kx).$$ The equation of motion gives $m\ddot{x} + kx = 0$ identically, so $\frac{dE}{dt} = 0$ at every instant: $E$ is conserved.</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>The block is released from rest at $x = A$. Use energy conservation to derive an expression for its maximum speed, and state where it occurs.</p>`,
              solution: String.raw`<p>At release, $E = \tfrac{1}{2}kA^2$ (all potential). Speed is maximal where $U$ is minimal, i.e. at $x = 0$: $\tfrac{1}{2}mv_{\max}^2 = \tfrac{1}{2}kA^2$, so $$v_{\max} = A\sqrt{\frac{k}{m}} = A\omega, \text{ at the equilibrium position.}$$</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Now suppose a damping force $F_d = -b\dot{x}$ also acts. Repeat the calculation of part (a) to find $\dfrac{dE}{dt}$, and interpret the sign of your result.</p>`,
              solution: String.raw`<p>The equation of motion becomes $m\ddot{x} = -kx - b\dot{x}$, so $m\ddot{x} + kx = -b\dot{x}$ and $$\frac{dE}{dt} = \dot{x}(m\ddot{x} + kx) = -b\dot{x}^2 \le 0.$$ Mechanical energy is never gained and is lost whenever the block moves ($\dot{x} \neq 0$), at a rate proportional to the square of the speed — the signature of energy dissipated to thermal energy by the damping force.</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>An oscillator moves as $x(t) = A\cos(\omega t)$, with $\omega = \sqrt{k/m}$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Write expressions for the kinetic energy $K(t)$ and potential energy $U(t)$, and verify explicitly that their sum is constant.</p>`,
              solution: String.raw`<p>$v = -A\omega\sin\omega t$, so $$K(t) = \tfrac{1}{2}mA^2\omega^2\sin^2\omega t = \tfrac{1}{2}kA^2\sin^2\omega t, \qquad U(t) = \tfrac{1}{2}kA^2\cos^2\omega t,$$ using $m\omega^2 = k$. Their sum is $\tfrac{1}{2}kA^2(\sin^2\omega t + \cos^2\omega t) = \tfrac{1}{2}kA^2$, constant. ✓</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>By integrating over one period, show that the time-averaged kinetic and potential energies are each $E/2$. You may use $\displaystyle\int_0^T \sin^2(\omega t)\,dt = \int_0^T \cos^2(\omega t)\,dt = \frac{T}{2}$.</p>`,
              solution: String.raw`<p>$$\langle K\rangle = \frac{1}{T}\int_0^T \tfrac{1}{2}kA^2\sin^2(\omega t)\,dt = \tfrac{1}{2}kA^2\cdot\frac{1}{T}\cdot\frac{T}{2} = \tfrac{1}{4}kA^2 = \frac{E}{2},$$ and identically $\langle U\rangle = \tfrac{1}{4}kA^2 = E/2$. On average, the energy is split evenly between the two stores.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>$K(t)$ and $U(t)$ oscillate in time. Determine their oscillation frequency in terms of the motion's frequency $f$, and explain the factor physically.</p>`,
              solution: String.raw`<p>Using $\sin^2\theta = \tfrac{1}{2}(1 - \cos 2\theta)$, $K(t) = \tfrac{1}{4}kA^2\left(1 - \cos 2\omega t\right)$: the energies oscillate at angular frequency $2\omega$, i.e. frequency $2f$. Physically, the block reaches maximum speed twice per cycle — once moving left, once moving right — and visits each turning point once, so the energy completes two full exchanges every period.</p>`
            }
          ]
        }
      ]
    },
    {
      id: "7.5",
      title: "Simple and Physical Pendulums",
      blurb: "Gravity as the spring: small-angle swings are SHM, whether the pendulum is a point mass on a string or a swinging meter stick.",
      objectives: [
        "Derive the equation of motion for a simple pendulum and apply the small-angle approximation to obtain SHM.",
        "Calculate the period of simple and physical pendulums, identifying I, m, and the pivot-to-center-of-mass distance d.",
        "Predict how pendulum periods respond to changes in length, mass, gravitational field, and amplitude."
      ],
      sections: [
        {
          heading: "The Simple Pendulum, Done Honestly",
          content: String.raw`<p>A mass $m$ swings on a light string of length $L$. At angle $\theta$ from vertical, gravity exerts a torque about the pivot: $\tau = -mgL\sin\theta$ (restoring — hence the sign). Rotational Newton's second law with $I = mL^2$:</p>
<p>$$mL^2\,\ddot{\theta} = -mgL\sin\theta \quad\Rightarrow\quad \ddot{\theta} = -\frac{g}{L}\sin\theta.$$</p>
<p>This is <em>not</em> the SHM equation — $\sin\theta$ is not linear in $\theta$. The pendulum is only <em>approximately</em> simple harmonic, in the <strong>small-angle limit</strong> where $\sin\theta \approx \theta$ (in radians):</p>
<p>$$\ddot{\theta} = -\frac{g}{L}\,\theta \quad\Rightarrow\quad \omega = \sqrt{\frac{g}{L}}, \qquad T = 2\pi\sqrt{\frac{L}{g}}.$$</p>
<p>Mass cancels — the same cancellation as in free fall, and for the same reason: gravity provides both the force and the inertia is proportional to the same $m$. The period depends only on $L$ and $g$, which is why pendulums made good clocks and still make good gravimeters.</p>`
        },
        {
          heading: "How Small Is 'Small'? ",
          graph: {
            xLabel: "θ (rad)", yLabel: "restoring term", xMin: 0, xMax: 1.5, yMin: 0, yMax: 1.6,
            fns: [
              { expr: "x", label: "θ (small-angle approximation)", color: "#fbbf24" },
              { expr: "Math.sin(x)", label: "sin θ (exact)", color: "#60a5fa" }
            ],
            vlines: [ { x: 0.26, label: "15°" } ]
          },
          graphCaption: "sin θ hugs the line θ for small angles and falls below it as the angle grows — the true restoring torque is weaker than the linear model, so real periods run slightly long.",
          content: String.raw`<p>The graph shows the entire content of the small-angle approximation: near the origin, $\sin\theta$ and $\theta$ are indistinguishable (they differ by $\theta^3/6$, the next Taylor term). At $15^\circ \approx 0.26$ rad the difference is about $1\%$; at large angles the true restoring torque is noticeably <em>weaker</em> than linear.</p>
<p>Consequence: a large-amplitude pendulum experiences a feebler pull-back than SHM predicts, so its period is slightly <em>longer</em> than $2\pi\sqrt{L/g}$, and the period now grows with amplitude (about $+1.7\%$ at $30^\circ$). This is the precise sense in which pendulum isochronism is an approximation — and a favorite "justify your answer" question.</p>`
        },
        {
          heading: "Interactive: Pendulum vs. the Small-Angle Prediction",
          sim: "pendulum",
          simCaption: "At 5–10° release angles the measured period matches 2π√(L/g) beautifully. Crank the amplitude past 60° and watch the real period drift above the prediction. Changing the bob's mass does nothing.",
          content: String.raw`<p>Three experiments to run: (1) verify $T \propto \sqrt{L}$ by quadrupling the length; (2) confirm mass independence; (3) map how the period grows with amplitude and identify roughly where the small-angle model breaks down by your own standards (1%? 5%?).</p>`
        },
        {
          heading: "The Physical Pendulum",
          content: String.raw`<p>Swing an extended object — a meter stick, a leg, a swinging door with a spring — about a pivot, and the same derivation goes through with two generalizations: the rotational inertia about the pivot is $I$ (not $mL^2$), and gravity acts at the center of mass, a distance $d$ from the pivot:</p>
<p>$$I\ddot{\theta} = -mgd\sin\theta \;\xrightarrow{\;\theta\,\text{small}\;}\; \ddot{\theta} = -\frac{mgd}{I}\,\theta \quad\Rightarrow\quad T = 2\pi\sqrt{\frac{I}{mgd}}.$$</p>
<p>Sanity check: a point mass on a string has $I = mL^2$ and $d = L$, so $T = 2\pi\sqrt{mL^2/(mgL)} = 2\pi\sqrt{L/g}$. ✓</p>
<p>Worked example — a uniform rod of length $L$ pivoted at one end: $I = \tfrac{1}{3}mL^2$ and $d = L/2$, so</p>
<p>$$T = 2\pi\sqrt{\frac{\tfrac{1}{3}mL^2}{mg\,(L/2)}} = 2\pi\sqrt{\frac{2L}{3g}}.$$</p>
<p>The rod swings like a simple pendulum of length $2L/3$ — shorter than $L$, because much of the rod's mass rides closer to the pivot than its tip. The ratio $I/(md)$ is called the <em>equivalent length</em>.</p>
<div class="callout key">For any physical pendulum you need three ingredients: $I$ about the pivot (parallel-axis theorem!), the total mass $m$, and the distance $d$ from pivot to center of mass.</div>`
        },
        {
          heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Including mass in the simple-pendulum period.</strong> It cancels: $T = 2\pi\sqrt{L/g}$, no $m$ anywhere.</li>
<li><strong>Confusing the spring and pendulum formulas.</strong> Spring: $T = 2\pi\sqrt{m/k}$ — blind to gravity. Pendulum: $T = 2\pi\sqrt{L/g}$ — blind to mass. On the Moon only the pendulum slows down.</li>
<li><strong>Using $\sin\theta \approx \theta$ with degrees.</strong> The approximation (and $\omega$, and $\ddot{\theta}$) lives in radians.</li>
<li><strong>Forgetting the parallel-axis theorem for physical pendulums.</strong> $I$ must be about the <em>pivot</em>, not the center of mass: $I = I_{\text{cm}} + md^2$.</li>
<li><strong>Using the full length instead of $d$.</strong> In $T = 2\pi\sqrt{I/(mgd)}$, $d$ is the pivot-to-center-of-mass distance — for an end-pivoted rod, $L/2$, not $L$.</li>
<li><strong>Claiming the period is exactly amplitude-independent.</strong> Only in the small-angle limit; large swings run slow (longer $T$).</li>
</ul>`
        }
      ],
      equations: [
        { latex: String.raw`\ddot{\theta} = -\frac{g}{L}\sin\theta \;\approx\; -\frac{g}{L}\,\theta`, note: "Exact pendulum equation and its small-angle (radians!) linearization." },
        { latex: String.raw`T = 2\pi\sqrt{\frac{L}{g}}`, note: "Simple pendulum, small angles; independent of mass and (approximately) amplitude." },
        { latex: String.raw`T = 2\pi\sqrt{\frac{I}{mgd}}`, note: "Physical pendulum: I about the pivot, d from pivot to center of mass." },
        { latex: String.raw`I = I_{\text{cm}} + md^2`, note: "Parallel-axis theorem — almost always needed to find I about the pivot." },
        { latex: String.raw`L_{\text{eq}} = \frac{I}{md}`, note: "Equivalent simple-pendulum length of a physical pendulum." }
      ],
      problems: [
        {
          type: "mcq",
          q: String.raw`<p>A simple pendulum has period $T$. To double its period, its length should be</p>`,
          choices: [
            String.raw`quadrupled`,
            String.raw`doubled`,
            String.raw`halved`,
            String.raw`increased by a factor of $\sqrt{2}$`
          ],
          answer: 0,
          solution: String.raw`<p>$T \propto \sqrt{L}$, so doubling $T$ requires $L \to 4L$. Doubling $L$ (the tempting answer) only stretches the period by $\sqrt{2} \approx 1.41$.</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A pendulum clock keeps perfect time on Earth. It is taken to the Moon, where $g_{\text{Moon}} = g/6$. The period of its pendulum becomes</p>`,
          choices: [
            String.raw`$\sqrt{6}\,T$`,
            String.raw`$6T$`,
            String.raw`$T/\sqrt{6}$`,
            String.raw`$T$ — pendulum periods don't depend on $g$.`
          ],
          answer: 0,
          solution: String.raw`<p>$T = 2\pi\sqrt{L/g} \propto 1/\sqrt{g}$. With $g$ six times smaller, $T \to \sqrt{6}\,T \approx 2.4T$: weaker gravity means a weaker restoring torque and a lazier swing, so the clock runs slow. (It's the <em>spring</em>-mass oscillator whose period ignores $g$.)</p>`
        },
        {
          type: "mcq",
          q: String.raw`<p>A uniform rod of mass $m$ and length $L$ is pivoted about a horizontal axis through one end and swings with small amplitude. Its period is</p>`,
          choices: [
            String.raw`$2\pi\sqrt{\dfrac{2L}{3g}}$`,
            String.raw`$2\pi\sqrt{\dfrac{L}{g}}$`,
            String.raw`$2\pi\sqrt{\dfrac{L}{2g}}$`,
            String.raw`$2\pi\sqrt{\dfrac{L}{3g}}$`
          ],
          answer: 0,
          solution: String.raw`<p>Physical pendulum with $I = \tfrac{1}{3}mL^2$ about the end and $d = L/2$ to the center of mass: $$T = 2\pi\sqrt{\frac{\tfrac{1}{3}mL^2}{mg(L/2)}} = 2\pi\sqrt{\frac{2L}{3g}}.$$ Choosing $2\pi\sqrt{L/g}$ treats the rod as a point mass at its tip; using $d = L$ instead of $L/2$ gives the (wrong) $2\pi\sqrt{L/3g}$.</p>`
        },
        {
          type: "frq",
          q: String.raw`<p>A small sphere of mass $m$ hangs from a light string of length $L$ and is displaced by an angle $\theta_0$ from the vertical, then released from rest.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Using torque about the pivot (or the tangential component of Newton's second law), derive the exact equation of motion for $\theta(t)$.</p>`,
              solution: String.raw`<p>Gravity's torque about the pivot is $\tau = -mgL\sin\theta$ (negative because it opposes the displacement); the rotational inertia of the sphere about the pivot is $I = mL^2$. Then $I\ddot{\theta} = \tau$ gives $$mL^2\ddot{\theta} = -mgL\sin\theta \quad\Rightarrow\quad \ddot{\theta} = -\frac{g}{L}\sin\theta.$$ (Equivalently, the tangential equation $ma_t = -mg\sin\theta$ with $a_t = L\ddot{\theta}$.)</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Apply the small-angle approximation to show that the motion is simple harmonic, and derive the period.</p>`,
              solution: String.raw`<p>For $\theta \ll 1$ rad, $\sin\theta \approx \theta$, so $$\ddot{\theta} = -\frac{g}{L}\theta,$$ which has the SHM form $\ddot{\theta} = -\omega^2\theta$ with $\omega = \sqrt{g/L}$. Hence $$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L}{g}},$$ and the solution is $\theta(t) = \theta_0\cos(\omega t)$ for release from rest at $\theta_0$.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Explain why the period is independent of the sphere's mass.</p>`,
              solution: String.raw`<p>Mass enters both the driving torque ($mgL\sin\theta$, gravitational) and the rotational inertia ($mL^2$, inertial) linearly, so it cancels in $\ddot{\theta} = -(g/L)\sin\theta$. This is the same equivalence that makes all masses fall with the same $g$ — the pendulum is essentially constrained free fall.</p>`
            },
            {
              label: "(d)",
              prompt: String.raw`<p>If the pendulum is instead released from a large angle (say $60^\circ$), is the true period longer than, shorter than, or equal to $2\pi\sqrt{L/g}$? Justify your answer using your equation from part (a).</p>`,
              solution: String.raw`<p>Longer. For large $\theta$, $\sin\theta < \theta$, so the true restoring torque is weaker than the linear approximation assumes at every angle along the swing. A weaker pull-back produces a slower oscillation, so the actual period exceeds the small-angle value $2\pi\sqrt{L/g}$ (by roughly $7\%$ at $60^\circ$).</p>`
            }
          ]
        },
        {
          type: "frq",
          q: String.raw`<p>A uniform disk of mass $M$ and radius $R$ is pivoted about a fixed horizontal axle through a point on its rim and is free to swing in its own plane as a physical pendulum. The rotational inertia of a uniform disk about its center is $I_{\text{cm}} = \tfrac{1}{2}MR^2$.</p>`,
          parts: [
            {
              label: "(a)",
              prompt: String.raw`<p>Determine the rotational inertia of the disk about the rim pivot.</p>`,
              solution: String.raw`<p>Parallel-axis theorem with pivot-to-center distance $d = R$: $$I = I_{\text{cm}} + MR^2 = \tfrac{1}{2}MR^2 + MR^2 = \tfrac{3}{2}MR^2.$$</p>`
            },
            {
              label: "(b)",
              prompt: String.raw`<p>Derive an expression for the period of small oscillations.</p>`,
              solution: String.raw`<p>The center of mass is the disk's center, at distance $d = R$ from the pivot. For small angles, $I\ddot{\theta} = -Mgd\,\theta$, so $$T = 2\pi\sqrt{\frac{I}{Mgd}} = 2\pi\sqrt{\frac{\tfrac{3}{2}MR^2}{MgR}} = 2\pi\sqrt{\frac{3R}{2g}}.$$ Note that $M$ cancels, as it must for any gravity-driven pendulum.</p>`
            },
            {
              label: "(c)",
              prompt: String.raw`<p>Find the length of the simple pendulum that has the same period, and explain why it is not equal to $R$.</p>`,
              solution: String.raw`<p>Match $2\pi\sqrt{L_{\text{eq}}/g} = 2\pi\sqrt{3R/(2g)}$: $$L_{\text{eq}} = \frac{I}{Md} = \frac{\tfrac{3}{2}MR^2}{MR} = \frac{3R}{2}.$$ It exceeds $R$ (the pivot-to-CM distance) because the disk's mass is spread out: the extra rotational inertia of the distributed mass ($I > Md^2$ whenever $I_{\text{cm}} > 0$) makes the disk respond more sluggishly than a point mass hung at its center would, lengthening the equivalent pendulum.</p>`
            }
          ]
        }
      ]
    }
  ]
});
