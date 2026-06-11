/* data/em-u10.js — Unit 10: Conductors and Capacitors */
AP.registerUnit({
  id: 10,
  course: "em",
  title: "Conductors and Capacitors",
  weight: "10–15%",
  tagline: "How free charges arrange themselves on conductors, and how capacitors bottle up energy in an electric field.",
  bigIdeas: [
    "In electrostatic equilibrium the field inside a conductor is zero, so excess charge lives entirely on the surface and the conductor is one equipotential.",
    "A capacitor's capacitance is set purely by geometry (and any dielectric); the energy it stores lives in the electric field between its plates."
  ],
  topics: [
    /* ------------------------------------------------------------ 10.1 */
    {
      id: "10.1",
      title: "Electrostatics with Conductors",
      blurb: "Why the field inside a conductor must vanish, why excess charge hides on the surface, and how conductors shield their interiors.",
      objectives: [
        "Explain why the electric field is zero everywhere inside a conductor in electrostatic equilibrium.",
        "Use Gauss's law to show that excess charge resides on the surface of a conductor and to find induced charges on cavity walls.",
        "Justify why field lines meet a conductor's surface perpendicularly and relate the surface field to the local charge density.",
        "Predict the behavior of conductors used as electrostatic shields (Faraday cages)."
      ],
      sections: [
        { heading: "The Core Idea: E = 0 Inside",
          content: String.raw`<p>A conductor is full of charges that are free to move. If there were any electric field inside the metal, those free charges would feel a force $\vec{F} = q\vec{E}$ and accelerate &mdash; which means the situation was not yet static. Charges keep rearranging until they produce a field that exactly cancels any applied field at every interior point. The end state, reached in a tiny fraction of a second, is <strong>electrostatic equilibrium</strong>: $\vec{E} = 0$ everywhere inside the conducting material.</p>
<p>Two immediate consequences follow. First, since $\vec{E} = -\dfrac{dV}{dx}$ in each direction, zero field means $V$ is constant: <strong>the entire conductor, surface included, is a single equipotential</strong>. Second, just outside the surface the field can be nonzero, but it must point perpendicular to the surface &mdash; any tangential component would push surface charges sideways, contradicting equilibrium.</p>
<div class="callout key">Inside a conductor in electrostatic equilibrium: $\vec{E} = 0$, $V$ is constant, and the net charge density is zero at every interior point.</div>` },
        { heading: "Where the Excess Charge Goes",
          content: String.raw`<p>Gauss's law turns the statement $\vec{E} = 0$ inside a conductor into a powerful bookkeeping tool. Draw a Gaussian surface that lies entirely within the conducting material. Since $\vec{E} = 0$ at every point of that surface, the flux is zero, so</p>
<p>$$\oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{enc}}}{\varepsilon_0} = 0 \quad\Rightarrow\quad q_{\text{enc}} = 0.$$</p>
<p>You can shrink-wrap such a surface just beneath the outer skin of the conductor, so <strong>any excess charge must sit on the surface</strong>. If the conductor has a cavity containing a point charge $+q$, a Gaussian surface drawn through the metal around the cavity must still enclose zero net charge &mdash; so the cavity wall acquires an induced charge of exactly $-q$, and (for a neutral conductor) $+q$ appears on the outer surface.</p>
<p>Just outside the surface, applying Gauss's law to a tiny pillbox gives the local field magnitude $E = \sigma/\varepsilon_0$, where $\sigma$ is the surface charge density at that spot. Stronger field, denser charge &mdash; and vice versa.</p>` },
        { heading: "Interactive: Flux and Enclosed Charge",
          sim: "gauss",
          simCaption: "Move the Gaussian surface so it sits inside the conductor, around the cavity, and outside everything. Watch the flux readout: it depends only on the charge enclosed, never on charge outside.",
          content: String.raw`<p>Use the simulation to test the induced-charge logic. A surface drawn through the metal always reports zero flux, forcing the inner-wall charge to cancel whatever sits in the cavity. A surface enclosing the whole conductor reports the total charge, no matter how it is distributed.</p>` },
        { heading: "Shielding and Induced Charges",
          content: String.raw`<p>Put an uncharged conductor in an external field $\vec{E}_0$ and free electrons drift against the field, piling up negative charge on one face and leaving positive charge on the other. These induced charges create their own field that cancels $\vec{E}_0$ inside the metal. For a slab with faces perpendicular to a uniform $\vec{E}_0$, the induced sheet densities satisfy $\sigma = \varepsilon_0 E_0$ so the interior field vanishes.</p>
<p>An <em>empty</em> cavity inside a conductor is completely shielded: with no charge in the cavity, $\vec{E} = 0$ throughout it regardless of what fields rage outside. This is the <strong>Faraday cage</strong> &mdash; why your car body or a metal enclosure protects what is inside. The shielding is one-way in a subtle sense: charge <em>inside</em> a cavity does make itself felt outside (through the induced charges), unless the conductor is grounded, in which case the outer-surface charge drains away and the exterior field disappears.</p>
<div class="callout">A grounded conductor "resets" its potential to zero by exchanging charge with the Earth &mdash; a key move in many shell problems.</div>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>"E = 0 inside" applies to the conducting material, not necessarily to a cavity.</strong> A cavity containing a charge has a nonzero field inside the cavity; only the metal itself is field-free.</li>
<li><strong>The potential inside a conductor is constant, not zero.</strong> Zero potential happens only if the conductor is grounded (or by coincidence of your reference choice).</li>
<li><strong>Induced charge on a cavity wall is always exactly $-q_{\text{cavity}}$</strong>, even if the cavity charge is off-center. The wall distribution becomes non-uniform, but the total is fixed by Gauss's law.</li>
<li><strong>The outer-surface distribution of a conductor with a cavity charge is uniform (for a spherical conductor) regardless of where the cavity charge sits</strong> &mdash; the metal screens the outside from the geometry inside.</li>
<li>Surface field is $\sigma/\varepsilon_0$, <em>not</em> $\sigma/2\varepsilon_0$. The factor of 2 difference from an isolated sheet comes from the conductor's other charges terminating the field on the inside.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`\vec{E}_{\text{inside}} = 0`, note: "Inside the material of any conductor in electrostatic equilibrium." },
        { latex: String.raw`\oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{enc}}}{\varepsilon_0}`, note: "Gauss's law — the tool for locating induced charge on conductors." },
        { latex: String.raw`E_{\text{surface}} = \frac{\sigma}{\varepsilon_0}`, note: "Field just outside a conductor's surface; perpendicular to the surface." },
        { latex: String.raw`V = \text{constant on a conductor}`, note: "Follows from E = 0 inside; the whole conductor is one equipotential." },
        { latex: String.raw`q_{\text{inner wall}} = -q_{\text{cavity}}`, note: "Induced charge on a cavity wall enclosing charge q, from a Gaussian surface in the metal." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A point charge $+q$ is placed at the center of a neutral, hollow conducting sphere. What is the total charge induced on the <em>inner</em> surface of the conductor?</p>`,
          choices: [ String.raw`$-q$`, String.raw`$+q$`, String.raw`$0$`, String.raw`$-q/2$` ],
          answer: 0,
          solution: String.raw`<p>A Gaussian surface drawn inside the metal must enclose zero net charge because $\vec{E}=0$ there gives zero flux. It encloses $+q$ plus the inner-surface charge, so the inner surface must carry exactly $-q$. (The outer surface then carries $+q$ to keep the conductor neutral.)</p>` },
        { type: "mcq",
          q: String.raw`<p>The surface of a charged conductor has local surface charge density $\sigma$ at point P. The magnitude of the electric field just outside the surface at P is:</p>`,
          choices: [ String.raw`$\dfrac{\sigma}{2\varepsilon_0}$`, String.raw`$\dfrac{\sigma}{\varepsilon_0}$`, String.raw`$\dfrac{2\sigma}{\varepsilon_0}$`, String.raw`$0$` ],
          answer: 1,
          solution: String.raw`<p>Use a tiny Gaussian pillbox straddling the surface. The flux escapes only through the outer face (the field inside the metal is zero): $EA = \sigma A/\varepsilon_0$, so $E = \sigma/\varepsilon_0$. The distractor $\sigma/2\varepsilon_0$ is the field of an isolated sheet of charge, where flux leaves through <em>both</em> faces.</p>` },
        { type: "mcq",
          q: String.raw`<p>A point charge $+q$ is held <em>off-center</em> inside the cavity of a neutral spherical conductor. Which statement about the charge on the <em>outer</em> surface is correct?</p>`,
          choices: [
            String.raw`It totals $+q$ and is distributed uniformly.`,
            String.raw`It totals $+q$ and is concentrated on the side nearest the point charge.`,
            String.raw`It totals $-q$ and is distributed uniformly.`,
            String.raw`It is zero because the conductor is neutral.` ],
          answer: 0,
          solution: String.raw`<p>The inner wall develops $-q$ (non-uniformly, bunched near the off-center charge), leaving $+q$ on the outer surface. Because the field in the metal is zero, the outer surface has no way to "know" where the cavity charge sits &mdash; the inner-wall charge completely screens it. The outer $+q$ therefore spreads uniformly over the sphere, exactly as if the conductor carried $+q$ with an empty cavity.</p>` },
        { type: "frq",
          q: String.raw`<p>A thick conducting spherical shell has inner radius $a$ and outer radius $b$ and carries net charge $+Q$. A point charge $+q$ is fixed at the center of the cavity. Express answers in terms of $q$, $Q$, $a$, $b$, $r$, and $\varepsilon_0$ (or $k = 1/4\pi\varepsilon_0$).</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Determine the charge on the inner surface ($r = a$) and the outer surface ($r = b$) of the shell. Justify using Gauss's law.</p>`,
              solution: String.raw`<p>Draw a Gaussian sphere of radius $r$ with $a < r < b$, inside the metal where $\vec{E}=0$. Zero flux requires $q_{\text{enc}} = q + q_{\text{inner}} = 0$, so $q_{\text{inner}} = -q$. Charge conservation on the shell then gives $q_{\text{outer}} = Q - q_{\text{inner}} = Q + q$.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Derive expressions for the electric field magnitude in the three regions $r < a$, $a < r < b$, and $r > b$.</p>`,
              solution: String.raw`<p>By spherical symmetry, Gauss's law gives $E(4\pi r^2) = q_{\text{enc}}/\varepsilon_0$ in each region.</p>
<p>For $r < a$: $q_{\text{enc}} = q$, so $E = \dfrac{q}{4\pi\varepsilon_0 r^2}$, radially outward.</p>
<p>For $a < r < b$: inside the conductor, $E = 0$ (consistent with $q_{\text{enc}} = q - q = 0$).</p>
<p>For $r > b$: $q_{\text{enc}} = q + Q$, so $E = \dfrac{q + Q}{4\pi\varepsilon_0 r^2}$, radially outward.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Derive an expression for the electric potential at $r = a/2$, taking $V = 0$ at infinity.</p>`,
              solution: String.raw`<p>Superpose the potentials of the three spherical charge distributions. At $r = a/2$ (inside both shell surfaces, outside nothing but the point charge):</p>
<p>$$V = \frac{kq}{a/2} + \frac{k(-q)}{a} + \frac{k(Q+q)}{b} = \frac{2kq}{a} - \frac{kq}{a} + \frac{k(Q+q)}{b} = \frac{kq}{a} + \frac{k(Q+q)}{b}.$$</p>
<p>Equivalently, integrate $V = -\int_\infty^{a/2} \vec{E}\cdot d\vec{r}$: from infinity to $b$ contributes $k(Q+q)/b$; through the metal contributes nothing ($E=0$); from $a$ to $a/2$ contributes $kq(2/a - 1/a) = kq/a$. Same result.</p>` },
            { label: "(d)",
              prompt: String.raw`<p>The outer surface of the shell is now connected to ground. What are the new surface charges, and what is the field for $r > b$? Justify briefly.</p>`,
              solution: String.raw`<p>Grounding fixes the shell at $V = 0$. The inner surface must still carry $-q$ (the Gauss's-law argument in the metal is unchanged). The outer surface charge flows to ground until the potential outside vanishes; with $q_{\text{outer}} = 0$ the total enclosed charge for $r > b$ is $q + (-q) + 0 = 0$, so $E = 0$ everywhere outside and $V = 0$ at the surface, consistent with grounding. The grounded shell completely shields the exterior from the cavity charge.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A large, neutral conducting slab (thickness $t$, faces of area $A$) is placed in a uniform external electric field $\vec{E}_0$ that points perpendicular to its faces, from left to right.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Explain, in terms of forces on free charges, why the electric field inside the slab must be zero once electrostatic equilibrium is reached.</p>`,
              solution: String.raw`<p>Free electrons in the slab feel a force $\vec{F} = -e\vec{E}$ and drift toward the left face (against $\vec{E}_0$), leaving the right face positively charged. These separated charges create an internal field pointing right-to-left that opposes $\vec{E}_0$ inside the metal. Drift continues &mdash; growing the induced charge &mdash; as long as any net interior field remains. Equilibrium is, by definition, when charges stop moving, which happens precisely when the total interior field is zero.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Use Gauss's law to derive the induced surface charge density $\sigma$ on each face in terms of $E_0$ and $\varepsilon_0$.</p>`,
              solution: String.raw`<p>The faces become two oppositely charged sheets, $-\sigma$ on the left face and $+\sigma$ on the right. Between them (inside the metal), each sheet contributes $\sigma/2\varepsilon_0$ pointing leftward (from + toward &minus;), for a total induced field $\sigma/\varepsilon_0$ opposing $\vec{E}_0$. Setting the net interior field to zero:</p>
<p>$$E_0 - \frac{\sigma}{\varepsilon_0} = 0 \quad\Rightarrow\quad \sigma = \varepsilon_0 E_0.$$</p>
<p>Equivalently, a pillbox through the left face with the external field $E_0$ entering gives $\sigma = \varepsilon_0 E_0$ directly, since the interior field is zero.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>A small empty cavity is hollowed out deep inside the slab. What is the electric field inside the cavity? Justify your answer.</p>`,
              solution: String.raw`<p>Zero. With no charge in the cavity, suppose a field existed there; field lines would have to start on positive charge at one part of the cavity wall and end on negative charge at another. Following such a line through the cavity and returning through the metal (where $E = 0$) would give $\oint \vec{E}\cdot d\vec{l} \neq 0$, violating the conservative nature of the electrostatic field. Hence no field lines can exist in an empty cavity: the conductor shields it completely (Faraday cage).</p>` },
            { label: "(d)",
              prompt: String.raw`<p>Explain why, at equilibrium, the field just outside any conductor must be perpendicular to its surface.</p>`,
              solution: String.raw`<p>Surface charges are free to move <em>along</em> the surface. A tangential component of $\vec{E}$ at the surface would exert a tangential force on these charges and make them slide, contradicting the assumption of electrostatic equilibrium. Charges rearrange until the tangential component vanishes everywhere, leaving only the normal component $E_\perp = \sigma/\varepsilon_0$. This is also why the surface is an equipotential: no work is done moving a test charge along it.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------ 10.2 */
    {
      id: "10.2",
      title: "Redistribution of Charge Between Conductors",
      blurb: "Connect two conductors and charge flows until they share one potential — with a surprising preference for small radii and sharp points.",
      objectives: [
        "Predict how charge redistributes between connected conductors by requiring them to reach a common potential.",
        "Derive the charge, surface-charge-density, and surface-field ratios for two connected spheres.",
        "Explain why charge density and electric field are largest at sharp points, and connect this to lightning rods and corona discharge."
      ],
      sections: [
        { heading: "The Core Idea: One Potential to Rule Them All",
          content: String.raw`<p>Connect two conductors with a conducting wire and the combined object is a <em>single</em> conductor &mdash; so in equilibrium it must be a single equipotential. If the two pieces started at different potentials, charge flows through the wire (from high $V$ to low $V$, for positive charge) until the potentials equalize. The flow is driven by potential difference, <em>not</em> by charge imbalance: a small sphere with little charge can still be at a higher potential than a big sphere with lots of charge.</p>
<p>For a far-apart pair of spheres connected by a long thin wire, each sphere's potential is approximately that of an isolated sphere,</p>
<p>$$V = \frac{kq}{R},$$</p>
<p>because each sphere's charge barely affects the other's potential at large separation. Setting $V_1 = V_2$ is the whole game.</p>
<div class="callout key">Conductors in contact share charge until they are at the same potential — never necessarily the same charge.</div>` },
        { heading: "The Two-Sphere Calculation",
          content: String.raw`<p>Let spheres of radii $R_1$ and $R_2$, far apart and connected by a fine wire, share total charge $Q = q_1 + q_2$. Equal potentials give</p>
<p>$$\frac{kq_1}{R_1} = \frac{kq_2}{R_2} \quad\Rightarrow\quad \frac{q_1}{q_2} = \frac{R_1}{R_2},$$</p>
<p>so $q_1 = \dfrac{R_1}{R_1 + R_2}\,Q$ and $q_2 = \dfrac{R_2}{R_1 + R_2}\,Q$: <strong>charge in proportion to radius</strong>. The bigger sphere takes more total charge. But now compare surface charge densities, $\sigma = q/4\pi R^2$:</p>
<p>$$\frac{\sigma_1}{\sigma_2} = \frac{q_1 R_2^2}{q_2 R_1^2} = \frac{R_2}{R_1}.$$</p>
<p>Density is <em>inversely</em> proportional to radius &mdash; the small sphere is more crowded. Since the field at each surface is $E = \sigma/\varepsilon_0 = kq/R^2$, the surface field is also stronger at the smaller sphere by the factor $R_{\text{large}}/R_{\text{small}}$.</p>` },
        { heading: "Reading the Graph: Who Gets the Charge?",
          graph: { xLabel: "radius ratio R₁/R₂", yLabel: "fraction of Q on sphere 1", xMin: 0, xMax: 5, yMin: 0, yMax: 1,
                   fns: [ { expr: "x/(x+1)", label: "q₁/Q = (R₁/R₂)/(R₁/R₂ + 1)", color: "#34d399" } ],
                   hlines: [ { y: 0.5, label: "equal split (R₁ = R₂)" } ] },
          graphCaption: "Charge fraction on sphere 1 versus the radius ratio. Equal radii split the charge evenly; as R₁ grows, sphere 1 hoards charge but its surface density and field still drop.",
          content: String.raw`<p>The curve $q_1/Q = \dfrac{R_1/R_2}{R_1/R_2 + 1}$ rises from 0 toward 1 as sphere 1 gets relatively larger. Check the limits: $R_1 \to 0$ gives $q_1 \to 0$ (a tiny sphere holds almost no charge at a given potential), and $R_1 = R_2$ gives the symmetric 50/50 split. Note that even though the big sphere takes more <em>charge</em>, the small sphere always ends with the larger <em>density</em> and surface field.</p>` },
        { heading: "Sharp Points, Lightning Rods, and Corona",
          content: String.raw`<p>A single conductor with a non-spherical shape behaves like many connected spheres of different radii: every part sits at the same potential, but regions of small radius of curvature carry high surface charge density and therefore intense surface fields ($E = \sigma/\varepsilon_0$). At a needle-like point, $E$ can exceed the dielectric strength of air ($\approx 3\times 10^6\ \text{V/m}$), ionizing nearby air molecules &mdash; corona discharge.</p>
<p>This is the physics of the <strong>lightning rod</strong>: a grounded sharp point above a building bleeds charge into the air gradually and, if a strike does occur, provides the preferred low-resistance path to ground. It is also why high-voltage equipment uses large, smooth, rounded electrodes: maximizing the radius of curvature keeps the surface field below breakdown for a given potential.</p>
<div class="callout">Mnemonic: charge $\propto R$, density $\propto 1/R$, surface field $\propto 1/R$ for connected spheres at a common potential.</div>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Connected conductors equalize potential, not charge.</strong> Equal charge happens only for identical conductors.</li>
<li><strong>Don't invert the ratios.</strong> Charge goes <em>with</em> radius ($q \propto R$); density and surface field go <em>against</em> it ($\sigma, E \propto 1/R$). Students often write $q \propto 1/R$ by analogy with density.</li>
<li><strong>The formula $V = kq/R$ assumes the spheres are far apart.</strong> If they are close, each sphere's charge raises the other's potential and the simple ratio is only approximate.</li>
<li><strong>Charge flow direction is set by potential difference.</strong> A heavily charged large sphere can still <em>receive</em> charge from a lightly charged small one if the small one is at higher potential.</li>
<li><strong>Energy is not conserved as electrostatic energy</strong> during redistribution &mdash; some is always dissipated in the wire (or radiated). Total charge, however, is exactly conserved.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`V = \frac{kq}{R}`, note: "Potential of an isolated conducting sphere (V = 0 at infinity)." },
        { latex: String.raw`\frac{q_1}{q_2} = \frac{R_1}{R_2}`, note: "Connected, far-apart spheres at a common potential: charge in proportion to radius." },
        { latex: String.raw`\frac{\sigma_1}{\sigma_2} = \frac{R_2}{R_1}`, note: "Surface charge density is inversely proportional to radius — small spheres are crowded." },
        { latex: String.raw`E_{\text{surface}} = \frac{\sigma}{\varepsilon_0} = \frac{kq}{R^2}`, note: "Surface field is strongest at small radii and sharp points." },
        { latex: String.raw`C_{\text{sphere}} = 4\pi\varepsilon_0 R`, note: "An isolated sphere is a capacitor; connected spheres act like capacitors in parallel." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>Two distant conducting spheres of radii $R$ and $2R$ are connected by a long thin wire. The pair carries total charge $3Q$. After equilibrium is reached, the charge on the larger sphere is:</p>`,
          choices: [ String.raw`$Q$`, String.raw`$1.5Q$`, String.raw`$2Q$`, String.raw`$3Q$` ],
          answer: 2,
          solution: String.raw`<p>Equal potentials require $q \propto R$, so the spheres split $3Q$ in the ratio $1:2$. The larger sphere takes $\dfrac{2R}{R + 2R}(3Q) = 2Q$, leaving $Q$ on the small one. Check: $V_{\text{small}} = kQ/R$ and $V_{\text{large}} = k(2Q)/(2R) = kQ/R$. Equal.</p>` },
        { type: "mcq",
          q: String.raw`<p>For the same two spheres (radii $R$ and $2R$) after connection, the ratio of surface charge densities $\dfrac{\sigma_{\text{small}}}{\sigma_{\text{large}}}$ is:</p>`,
          choices: [ String.raw`$\dfrac{1}{2}$`, String.raw`$1$`, String.raw`$2$`, String.raw`$4$` ],
          answer: 2,
          solution: String.raw`<p>$\sigma = q/4\pi R^2$ with $q \propto R$ gives $\sigma \propto 1/R$. So $\sigma_{\text{small}}/\sigma_{\text{large}} = 2R/R = 2$. Explicitly: $\sigma_{\text{small}} = Q/4\pi R^2$ and $\sigma_{\text{large}} = 2Q/4\pi(2R)^2 = Q/8\pi R^2$ &mdash; the small sphere's density is twice as large even though it holds half the charge.</p>` },
        { type: "mcq",
          q: String.raw`<p>An isolated conducting sphere of radius $R$ carries charge $Q$ and stores electrostatic energy $U_0$. It is then connected by a long wire to an identical, distant, uncharged sphere. After equilibrium, the total electrostatic energy of the system is:</p>`,
          choices: [ String.raw`$U_0$`, String.raw`$\dfrac{U_0}{2}$`, String.raw`$\dfrac{U_0}{4}$`, String.raw`$2U_0$` ],
          answer: 1,
          solution: String.raw`<p>Each sphere is a capacitor with $C = 4\pi\varepsilon_0 R$ and stored energy $U = q^2/2C$. Initially $U_0 = Q^2/2C$. Afterward each sphere holds $Q/2$: $U_f = 2 \times \dfrac{(Q/2)^2}{2C} = \dfrac{Q^2}{4C} = \dfrac{U_0}{2}$. Half the energy is lost to heat in the wire and radiation &mdash; charge is conserved, but field energy is not.</p>` },
        { type: "frq",
          q: String.raw`<p>Two conducting spheres of radii $R_1$ and $R_2$ (with $R_1 > R_2$) are separated by a distance much larger than either radius and connected by a long, fine conducting wire. The system carries total charge $Q$.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Derive expressions for the equilibrium charges $q_1$ and $q_2$ on the spheres in terms of $Q$, $R_1$, and $R_2$.</p>`,
              solution: String.raw`<p>The connected system is one conductor, so $V_1 = V_2$. Because the spheres are far apart, each potential is dominated by its own charge: $\dfrac{kq_1}{R_1} = \dfrac{kq_2}{R_2}$, giving $q_1/q_2 = R_1/R_2$. With $q_1 + q_2 = Q$:</p>
<p>$$q_1 = \frac{R_1}{R_1 + R_2}\,Q, \qquad q_2 = \frac{R_2}{R_1 + R_2}\,Q.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Derive the ratio of the electric field magnitudes at the two surfaces, $E_2/E_1$, and state which sphere has the stronger surface field.</p>`,
              solution: String.raw`<p>At each surface, $E_i = \dfrac{kq_i}{R_i^2}$. Substituting $q_i \propto R_i$:</p>
<p>$$E_i = \frac{kQ}{R_i (R_1 + R_2)} \quad\Rightarrow\quad \frac{E_2}{E_1} = \frac{R_1}{R_2} > 1.$$</p>
<p>The <em>smaller</em> sphere has the stronger surface field, by the inverse ratio of the radii.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Using your result from (b), explain why the tip of a lightning rod is made sharp and why charge "leaks" from sharp points on charged conductors.</p>`,
              solution: String.raw`<p>A sharp tip behaves like a connected sphere of very small radius of curvature: at fixed potential, the surface field scales as $1/R$, so the field at the tip can be enormous even when the conductor's potential is modest. When $E$ at the tip exceeds the breakdown field of air ($\approx 3\times 10^6\ \text{V/m}$), air molecules are ionized and become conducting, allowing charge to stream off the point (corona discharge). A lightning rod exploits this to neutralize charged clouds gradually and to give any strike a controlled, grounded path.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A conducting sphere of radius $R_1$ carries charge $Q$; a second, distant conducting sphere of radius $R_2$ is uncharged. They are then connected by a long, fine wire.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Show that an isolated conducting sphere of radius $R$ acts as a capacitor with capacitance $C = 4\pi\varepsilon_0 R$.</p>`,
              solution: String.raw`<p>With charge $q$ on the sphere, its potential relative to infinity is $V = \dfrac{q}{4\pi\varepsilon_0 R}$. Capacitance is defined as charge per unit potential:</p>
<p>$$C = \frac{q}{V} = \frac{q}{q/4\pi\varepsilon_0 R} = 4\pi\varepsilon_0 R.$$</p>
<p>It depends only on geometry (the radius), as capacitance always does.</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Find the initial stored energy $U_i$ and the final stored energy $U_f$ after connection, in terms of $Q$, $R_1$, $R_2$, and $\varepsilon_0$.</p>`,
              solution: String.raw`<p>Initially all charge is on sphere 1: $U_i = \dfrac{Q^2}{2C_1} = \dfrac{Q^2}{8\pi\varepsilon_0 R_1}$.</p>
<p>After connection the spheres share a common potential &mdash; they are capacitors in parallel with $C_{\text{eq}} = C_1 + C_2 = 4\pi\varepsilon_0(R_1 + R_2)$ and total charge still $Q$:</p>
<p>$$U_f = \frac{Q^2}{2C_{\text{eq}}} = \frac{Q^2}{8\pi\varepsilon_0 (R_1 + R_2)}.$$</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Show that $U_f < U_i$, derive the energy lost $\Delta U$, and explain physically where this energy goes.</p>`,
              solution: String.raw`<p>Since $R_1 + R_2 > R_1$, clearly $U_f < U_i$. The loss is</p>
<p>$$\Delta U = U_i - U_f = \frac{Q^2}{8\pi\varepsilon_0}\left(\frac{1}{R_1} - \frac{1}{R_1 + R_2}\right) = \frac{Q^2}{8\pi\varepsilon_0}\,\frac{R_2}{R_1(R_1 + R_2)} > 0.$$</p>
<p>During redistribution a transient current flows through the wire; the moving charges dissipate energy as Joule heating in the wire's resistance, and the accelerating charges also radiate electromagnetic energy. Remarkably, the <em>fraction</em> lost is independent of the wire's resistance &mdash; resistance only sets how fast equilibrium is reached.</p>` },
            { label: "(d)",
              prompt: String.raw`<p>Check the limiting case $R_2 \to 0$ and the case $R_2 = R_1$, and comment on whether each result makes sense.</p>`,
              solution: String.raw`<p>As $R_2 \to 0$: $\Delta U \to 0$ and $U_f \to U_i$ &mdash; sensible, since a vanishingly small sphere takes essentially no charge and nothing changes. For $R_2 = R_1$: $U_f = U_i/2$, so exactly half the energy is lost &mdash; the classic "two identical capacitors" result, consistent with each sphere ending with $Q/2$ and energy $\propto q^2$ summing to half the original.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------ 10.3 */
    {
      id: "10.3",
      title: "Capacitors",
      blurb: "Two plates, equal and opposite charge, and a field in between: derive C = ε₀A/d, the stored energy, and the series/parallel rules.",
      objectives: [
        "Define capacitance as C = Q/V and derive C = ε₀A/d for a parallel-plate capacitor from Gauss's law.",
        "Derive the stored energy U = Q²/2C = ½CV² by integrating the work to charge the capacitor, and express it as field energy density u = ½ε₀E².",
        "Reduce series and parallel capacitor networks to an equivalent capacitance and track charge and voltage through the network.",
        "Analyze how Q, V, E, and U change when geometry changes with the battery connected versus disconnected."
      ],
      sections: [
        { heading: "The Core Idea: Capacitance Measures Charge per Volt",
          content: String.raw`<p>A capacitor is any pair of conductors carrying equal and opposite charges $+Q$ and $-Q$. The charge creates a field between the conductors, and the field creates a potential difference $V$ between them. Doubling $Q$ doubles $E$ everywhere (superposition), which doubles $V$ &mdash; so the ratio is fixed by geometry alone. That ratio is the <strong>capacitance</strong>:</p>
<p>$$C = \frac{Q}{V}.$$</p>
<p>Units: farads, $1\ \text{F} = 1\ \text{C/V}$ (a huge unit; real capacitors are typically pF to mF). Big capacitance means the device swallows lots of charge without building up much voltage &mdash; think of it as the "capacity" of a charge bucket. Crucially, $C$ does <em>not</em> depend on $Q$ or $V$ individually; it depends only on the size, shape, and separation of the conductors, and on what fills the gap.</p>
<div class="callout warn">"The charge on a capacitor is $Q$" means $+Q$ on one plate and $-Q$ on the other — the <em>net</em> charge of the device is zero.</div>` },
        { heading: "Deriving C = ε₀A/d for Parallel Plates",
          content: String.raw`<p>Take two plates of area $A$ separated by $d \ll \sqrt{A}$, carrying $\pm Q$. The surface charge density is $\sigma = Q/A$. Each plate is a sheet producing field $\sigma/2\varepsilon_0$; between the plates the two contributions add, while outside they cancel:</p>
<p>$$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A} \quad \text{(uniform, from + plate to } - \text{ plate)}.$$</p>
<p>The potential difference is the line integral of this uniform field across the gap:</p>
<p>$$V = \int_0^d E\,dx = Ed = \frac{Qd}{\varepsilon_0 A}.$$</p>
<p>Then</p>
<p>$$C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d}.$$</p>
<p>Pure geometry, as promised: bigger plates store more charge per volt; a smaller gap means the same charge produces less potential difference, so $C$ grows as $d$ shrinks. Every capacitance formula on the exam comes from this same three-step recipe: <em>assume $\pm Q$, find $E$ by Gauss, integrate for $V$, divide.</em></p>` },
        { heading: "Interactive: Build a Capacitor",
          sim: "capacitorLab",
          simCaption: "Increase the plate area and watch C rise; increase the separation and watch it fall. Toggle between battery-connected (V fixed) and isolated (Q fixed) and note which quantities change in each mode.",
          content: String.raw`<p>The two operating modes are the heart of every trick question. <strong>Battery connected:</strong> $V$ is clamped, so changing $C$ changes $Q = CV$. <strong>Isolated (battery removed):</strong> charge has nowhere to go, so $Q$ is fixed and changing $C$ changes $V = Q/C$. Decide which quantity is frozen <em>before</em> you compute anything.</p>` },
        { heading: "Energy: Charging a Capacitor One dq at a Time",
          content: String.raw`<p>Charging a capacitor means hauling charge from the negative plate to the positive plate against an ever-growing potential difference. When charge $q$ is already in place, the gap voltage is $q/C$, so moving the next $dq$ costs $dW = \dfrac{q}{C}\,dq$. Integrate from empty to full:</p>
<p>$$U = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C} = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV.$$</p>
<p>The factor of $\tfrac{1}{2}$ exists because the early charge moved across a small voltage &mdash; the <em>average</em> voltage during charging is $V/2$. Where does the energy live? In the field. Substituting $C = \varepsilon_0 A/d$ and $V = Ed$ into $\tfrac{1}{2}CV^2$ gives $U = \tfrac{1}{2}\varepsilon_0 E^2 (Ad)$: energy equals an <strong>energy density</strong></p>
<p>$$u = \tfrac{1}{2}\varepsilon_0 E^2$$</p>
<p>times the volume of the field region. This formula is universal &mdash; any electric field anywhere stores energy at this density.</p>` },
        { heading: "Series and Parallel Combinations",
          content: String.raw`<p><strong>Parallel:</strong> plates tied together share the same $V$; total charge is the sum $Q = Q_1 + Q_2 = (C_1 + C_2)V$, so</p>
<p>$$C_{\text{p}} = C_1 + C_2 + \cdots$$</p>
<p>Parallel is effectively "more plate area," so capacitances add.</p>
<p><strong>Series:</strong> the same charge $Q$ appears on every capacitor &mdash; the isolated island of conductor between two series capacitors starts neutral, so $-Q$ induced on one plate forces $+Q$ on the next. Voltages add: $V = Q/C_1 + Q/C_2$, giving</p>
<p>$$\frac{1}{C_{\text{s}}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$$</p>
<p>Series is effectively "a wider gap," so the combination is always <em>smaller</em> than the smallest member. Note this is exactly backwards from resistors. Strategy for networks: collapse step by step to one equivalent, find total $Q$ or $V$, then expand back out, carrying "same $Q$ in series, same $V$ in parallel" at each step.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>$C$ never depends on $Q$ or $V$.</strong> If a problem doubles the voltage, the capacitance is unchanged; only the stored charge and energy change.</li>
<li><strong>Series capacitors all carry the same charge</strong>, even when their capacitances differ; the <em>smallest</em> $C$ gets the <em>largest</em> voltage ($V = Q/C$).</li>
<li><strong>Battery connected vs. isolated</strong> is the first question to ask: $V$ fixed with a battery, $Q$ fixed when isolated. Using $U = \tfrac{1}{2}CV^2$ in one case and $U = Q^2/2C$ in the other avoids chasing the changing variable.</li>
<li><strong>The field of one plate is $\sigma/2\varepsilon_0$; the field between both plates is $\sigma/\varepsilon_0$.</strong> Mixing these up costs factors of 2 (e.g., the force one plate exerts on the other uses the <em>other</em> plate's field: $F = QE_{\text{one plate}} = Q\sigma/2\varepsilon_0$).</li>
<li><strong>$U = \tfrac{1}{2}QV$, not $QV$.</strong> The work the battery does is $QV$; half is stored, half is dissipated during charging.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`C = \frac{Q}{V}`, note: "Definition of capacitance; Q is the magnitude of the charge on each plate." },
        { latex: String.raw`C = \frac{\varepsilon_0 A}{d}`, note: "Parallel-plate capacitor (vacuum); derived from E = σ/ε₀ and V = Ed." },
        { latex: String.raw`U_C = \frac{Q^2}{2C} = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV`, note: "Stored energy; from integrating dW = (q/C) dq." },
        { latex: String.raw`u = \tfrac{1}{2}\varepsilon_0 E^2`, note: "Energy density of any electric field (J/m³)." },
        { latex: String.raw`C_{\text{p}} = C_1 + C_2 + \cdots`, note: "Parallel: same V across each; charges add." },
        { latex: String.raw`\frac{1}{C_{\text{s}}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots`, note: "Series: same Q on each; voltages add. Result is smaller than any member." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A parallel-plate capacitor remains connected to a battery while the plate separation is doubled. The charge on the plates:</p>`,
          choices: [ String.raw`is halved`, String.raw`is doubled`, String.raw`is unchanged`, String.raw`is reduced to one quarter` ],
          answer: 0,
          solution: String.raw`<p>The battery clamps $V$. Doubling $d$ halves $C = \varepsilon_0 A/d$, so $Q = CV$ is halved &mdash; the excess charge flows back into the battery. (If the capacitor had been <em>isolated</em>, $Q$ would have stayed fixed and $V$ would have doubled instead.)</p>` },
        { type: "mcq",
          q: String.raw`<p>Capacitors $C$ and $2C$ are connected in series. The equivalent capacitance of the combination is:</p>`,
          choices: [ String.raw`$3C$`, String.raw`$\dfrac{3C}{2}$`, String.raw`$\dfrac{2C}{3}$`, String.raw`$\dfrac{C}{2}$` ],
          answer: 2,
          solution: String.raw`<p>$\dfrac{1}{C_{\text{s}}} = \dfrac{1}{C} + \dfrac{1}{2C} = \dfrac{3}{2C}$, so $C_{\text{s}} = \dfrac{2C}{3}$. Sanity check: a series combination must be smaller than the smallest member ($C$), which rules out $3C$ and $3C/2$ immediately. $3C$ is the <em>parallel</em> answer.</p>` },
        { type: "mcq",
          q: String.raw`<p>A charged parallel-plate capacitor is disconnected from its battery, and the plates are then pulled apart so the separation doubles. The energy stored in the capacitor:</p>`,
          choices: [ String.raw`is halved`, String.raw`is unchanged`, String.raw`is doubled`, String.raw`is quadrupled` ],
          answer: 2,
          solution: String.raw`<p>Isolated means $Q$ is fixed. Use $U = Q^2/2C$: doubling $d$ halves $C$, so $U$ doubles. Physically, the oppositely charged plates attract, so pulling them apart requires positive external work, which becomes field energy &mdash; the field $E = \sigma/\varepsilon_0$ stays the same but now fills twice the volume ($u \cdot \text{volume}$ doubles). Choosing $\tfrac{1}{2}CV^2$ with $V$ "fixed" is the classic error.</p>` },
        { type: "frq",
          q: String.raw`<p>A parallel-plate capacitor consists of two plates of area $A$ separated by a vacuum gap $d$ ($d$ is small compared to the plate dimensions). The plates carry charges $+Q$ and $-Q$.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Use Gauss's law to derive an expression for the electric field between the plates.</p>`,
              solution: String.raw`<p>Model each plate as an infinite sheet with $\sigma = Q/A$. By symmetry the field of one sheet is perpendicular to it; a Gaussian pillbox of face area $a$ straddling the sheet gives $2Ea = \sigma a/\varepsilon_0$, so each sheet contributes $E_{\text{sheet}} = \sigma/2\varepsilon_0$. Between the plates the two sheets' fields point the same way (from + to &minus;) and add; outside they cancel:</p>
<p>$$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\varepsilon_0 A}, \qquad \text{uniform across the gap.}$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Derive the potential difference between the plates and hence show that $C = \varepsilon_0 A/d$.</p>`,
              solution: String.raw`<p>For a uniform field, $V = \displaystyle\int_0^d E\,dx = Ed = \frac{Qd}{\varepsilon_0 A}$. Then by definition</p>
<p>$$C = \frac{Q}{V} = \frac{Q}{Qd/\varepsilon_0 A} = \frac{\varepsilon_0 A}{d}.$$</p>
<p>The charge cancels, confirming that $C$ is a purely geometric quantity.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Starting from the work required to move charge $dq$ across the gap, derive the stored energy and show it can be written as $u = \tfrac{1}{2}\varepsilon_0 E^2$ times the volume between the plates.</p>`,
              solution: String.raw`<p>When charge $q$ has been transferred, the gap voltage is $q/C$, so the next increment costs $dW = (q/C)\,dq$. Integrating:</p>
<p>$$U = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C}.$$</p>
<p>Substitute $Q = \varepsilon_0 A E$ (from part a) and $C = \varepsilon_0 A/d$:</p>
<p>$$U = \frac{(\varepsilon_0 A E)^2}{2\,\varepsilon_0 A/d} = \tfrac{1}{2}\varepsilon_0 E^2 (Ad).$$</p>
<p>Since $Ad$ is the volume of the field region, the energy density is $u = \tfrac{1}{2}\varepsilon_0 E^2$ &mdash; the energy is stored in the field itself.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>In the circuit below (described in words), a $12\ \text{V}$ battery is connected across a network: capacitor $C_1 = 6\ \mu\text{F}$ is in series with a parallel pair consisting of $C_2 = 2\ \mu\text{F}$ and $C_3 = 4\ \mu\text{F}$.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Find the equivalent capacitance of the network.</p>`,
              solution: String.raw`<p>Parallel pair first: $C_{23} = C_2 + C_3 = 2 + 4 = 6\ \mu\text{F}$. This sits in series with $C_1 = 6\ \mu\text{F}$:</p>
<p>$$\frac{1}{C_{\text{eq}}} = \frac{1}{6} + \frac{1}{6} = \frac{1}{3} \quad\Rightarrow\quad C_{\text{eq}} = 3\ \mu\text{F}.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Find the charge on and the voltage across each capacitor.</p>`,
              solution: String.raw`<p>Total charge drawn from the battery: $Q = C_{\text{eq}}V = (3\ \mu\text{F})(12\ \text{V}) = 36\ \mu\text{C}$. In a series chain this same $36\ \mu\text{C}$ sits on $C_1$ and on the parallel block:</p>
<p>$V_1 = Q/C_1 = 36/6 = 6\ \text{V}$; the parallel block gets $V_{23} = 12 - 6 = 6\ \text{V}$ (check: $36\ \mu\text{C}/6\ \mu\text{F} = 6\ \text{V}$ ✓).</p>
<p>Within the parallel pair, both see $6\ \text{V}$: $Q_2 = (2)(6) = 12\ \mu\text{C}$ and $Q_3 = (4)(6) = 24\ \mu\text{C}$. Check: $Q_2 + Q_3 = 36\ \mu\text{C}$, matching the series charge.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Compute the total energy stored in the network, and verify it equals the sum of the energies in the individual capacitors.</p>`,
              solution: String.raw`<p>From the equivalent: $U = \tfrac{1}{2}C_{\text{eq}}V^2 = \tfrac{1}{2}(3\ \mu\text{F})(12)^2 = 216\ \mu\text{J}$.</p>
<p>Individually: $U_1 = \tfrac{1}{2}(6)(6^2) = 108\ \mu\text{J}$, $U_2 = \tfrac{1}{2}(2)(6^2) = 36\ \mu\text{J}$, $U_3 = \tfrac{1}{2}(4)(6^2) = 72\ \mu\text{J}$. Sum: $108 + 36 + 72 = 216\ \mu\text{J}$ ✓.</p>` },
            { label: "(d)",
              prompt: String.raw`<p>The battery is now disconnected, leaving the network charged. Explain whether the charge on $C_1$ can change, and justify why the answer for $C_2$ and $C_3$ individually is different.</p>`,
              solution: String.raw`<p>With the battery removed, the outer plates of the network are isolated, so the <em>total</em> charge on the chain is locked: $C_1$ keeps its $36\ \mu\text{C}$. However, $C_2$ and $C_3$ share a pair of common nodes, and charge can in principle redistribute between them through the connecting wires &mdash; their individual charges are constrained only by (i) $Q_2 + Q_3 = 36\ \mu\text{C}$ and (ii) equal voltages $Q_2/C_2 = Q_3/C_3$. Since both conditions are already satisfied ($12$ and $24\ \mu\text{C}$ at $6\ \text{V}$), nothing actually moves &mdash; but the constraint structure (total fixed, voltages matched) is what would govern any rearrangement, e.g., if a dielectric were later inserted into $C_2$.</p>` }
          ] }
      ]
    },

    /* ------------------------------------------------------------ 10.4 */
    {
      id: "10.4",
      title: "Dielectrics",
      blurb: "Slide an insulator between the plates and polarization fights the field — capacitance climbs by the dielectric constant κ.",
      objectives: [
        "Describe microscopically how a dielectric polarizes and why the induced bound charge weakens the field inside it.",
        "Use the dielectric constant κ to compute capacitance, field, charge, voltage, and energy: C = κC₀.",
        "Analyze dielectric insertion with the battery connected (V fixed) versus the capacitor isolated (Q fixed), including energy bookkeeping."
      ],
      sections: [
        { heading: "The Core Idea: Polarization",
          content: String.raw`<p>A dielectric is an insulator: its charges cannot wander, but they can <em>shift</em>. In the field between capacitor plates, each molecule stretches into (or rotates as) a tiny dipole &mdash; electron clouds lean toward the positive plate, nuclei toward the negative plate. The material is <strong>polarized</strong>. In the bulk, every displaced positive charge sits next to a displaced negative one and cancels out, but at the two faces of the slab the cancellation fails: a layer of <strong>bound (induced) charge</strong> appears, negative on the face toward the positive plate and positive on the face toward the negative plate.</p>
<p>These bound layers act like a weak internal capacitor whose field opposes the applied field. The result: the net field inside the dielectric is <em>reduced</em>, not eliminated &mdash; the bound charges are tethered to molecules and cannot move far enough to cancel the field completely the way free charges in a conductor do.</p>
<div class="callout key">Conductor: induced free charge kills the interior field entirely. Dielectric: induced bound charge only weakens it, by the factor κ.</div>` },
        { heading: "The Dielectric Constant κ",
          content: String.raw`<p>For a slab completely filling the gap of a capacitor with fixed plate charge $Q$, the field inside the dielectric is reduced by the <strong>dielectric constant</strong> $\kappa \ge 1$:</p>
<p>$$E = \frac{E_0}{\kappa},$$</p>
<p>where $E_0 = \sigma/\varepsilon_0$ is the vacuum field of the same free charge. With a weaker field, the same charge produces less voltage, $V = Ed = V_0/\kappa$, so the capacitance rises:</p>
<p>$$C = \frac{Q}{V} = \kappa\,\frac{Q}{V_0} = \kappa C_0 = \frac{\kappa \varepsilon_0 A}{d}.$$</p>
<p>The induced surface charge density on the slab faces follows from Gauss's law applied to a pillbox enclosing the plate and the adjacent bound layer: the net enclosed density must be $\sigma_{\text{net}} = \varepsilon_0 E = \sigma/\kappa$, so</p>
<p>$$\sigma_{\text{ind}} = \sigma\left(1 - \frac{1}{\kappa}\right).$$</p>
<p>Limits check out: $\kappa = 1$ (vacuum) gives no induced charge; $\kappa \to \infty$ mimics a conductor, with $\sigma_{\text{ind}} \to \sigma$ and zero interior field. Typical values: air $1.0006$, paper $\approx 3.7$, water $\approx 80$.</p>` },
        { heading: "Scenario 1: Battery Connected (V fixed)",
          content: String.raw`<p>Insert a dielectric while the battery stays attached. The battery pins $V$ at its emf, so with $C \to \kappa C$ the plate charge must grow: $Q = CV \to \kappa Q_0$. The battery pushes extra free charge onto the plates. The field between the plates is $E = V/d$, which is <em>unchanged</em> &mdash; the new free charge exactly compensates the polarization. Stored energy:</p>
<p>$$U = \tfrac{1}{2}CV^2 \to \tfrac{1}{2}(\kappa C_0)V^2 = \kappa U_0 \quad \text{(increases)}.$$</p>
<p>Energy ledger: the battery delivers $W_{\text{batt}} = (\Delta Q)V = (\kappa - 1)C_0V^2$, but the capacitor's energy only rises by $\tfrac{1}{2}(\kappa - 1)C_0V^2$ &mdash; half the battery's output. The other half goes into mechanical work (the fringing field pulls the slab inward; if you lower it in gently, your hand absorbs energy) and any dissipation. This 50/50 split at constant voltage mirrors the charging of a bare capacitor.</p>` },
        { heading: "Scenario 2: Isolated Capacitor (Q fixed)",
          content: String.raw`<p>Now charge the capacitor to $Q_0$, disconnect the battery, then insert the slab. The free charge is trapped: $Q = Q_0$ forever. Capacitance still becomes $\kappa C_0$, so</p>
<p>$$V = \frac{Q_0}{\kappa C_0} = \frac{V_0}{\kappa}, \qquad E = \frac{E_0}{\kappa}, \qquad U = \frac{Q_0^2}{2\kappa C_0} = \frac{U_0}{\kappa}.$$</p>
<p>Everything drops by $\kappa$ except the charge. The lost energy $U_0(1 - 1/\kappa)$ is not mysterious: the polarized slab is <em>attracted</em> into the gap by the fringing field, so the field does positive work on the slab as it enters. If you let it go it would accelerate in, overshoot, and oscillate; in practice the energy ends up as work extracted by whoever guides it in (or eventually as heat).</p>
<div class="callout warn">A dielectric is always pulled <em>into</em> a charged capacitor in both scenarios — you never have to push it in.</div>` },
        { heading: "Interactive: Dielectric Insertion",
          sim: "capacitorLab",
          simCaption: "Charge the plates, then insert the dielectric in battery-connected mode and again in isolated mode. Track Q, V, E, and U in the readouts and confirm: V fixed makes Q and U grow by κ; Q fixed makes V, E, and U shrink by κ.",
          content: String.raw`<p>Run both experiments and fill in your own two-column table for $C$, $Q$, $V$, $E$, $U$. Committing this table to memory &mdash; or better, re-deriving each entry from "what's held fixed" plus $C = \kappa C_0$ &mdash; converts an entire class of exam questions into thirty-second problems.</p>` },
        { heading: "Common Pitfalls",
          content: String.raw`<ul>
<li><strong>Identify what's held fixed first.</strong> Battery connected: $V$ fixed, $Q$ changes. Isolated: $Q$ fixed, $V$ changes. Every other quantity follows from $C = \kappa C_0$.</li>
<li><strong>$E$ is unchanged in the battery case</strong> ($E = V/d$ with both fixed) but <strong>drops by $\kappa$ in the isolated case</strong>. Students often assume the dielectric "always weakens the field" &mdash; only the field <em>per unit free charge</em> is always weakened.</li>
<li><strong>Energy increases ($\times\kappa$) with the battery, decreases ($\div\kappa$) when isolated.</strong> If your energy answer requires the slab to be pushed in against a repulsion, recheck &mdash; the slab is always attracted inward.</li>
<li><strong>Induced charge is bound, not free.</strong> It cannot flow into the circuit, and it is $\sigma(1 - 1/\kappa)$, always less than the free charge density (until the conductor limit $\kappa \to \infty$).</li>
<li><strong>Battery energy isn't all stored.</strong> At constant $V$, the battery supplies $(\kappa - 1)C_0V^2$ but the capacitor keeps only half of that increment.</li>
</ul>` }
      ],
      equations: [
        { latex: String.raw`C = \kappa C_0 = \frac{\kappa\varepsilon_0 A}{d}`, note: "Dielectric filling the gap multiplies the capacitance by κ ≥ 1." },
        { latex: String.raw`E = \frac{E_0}{\kappa}`, note: "Field inside the dielectric at fixed free charge (isolated capacitor)." },
        { latex: String.raw`\sigma_{\text{ind}} = \sigma\left(1 - \frac{1}{\kappa}\right)`, note: "Bound surface charge on the slab faces; → σ as κ → ∞ (conductor limit)." },
        { latex: String.raw`U = \kappa U_0 \;\; (V \text{ fixed}), \qquad U = \frac{U_0}{\kappa} \;\; (Q \text{ fixed})`, note: "Energy after full insertion in the two canonical scenarios." },
        { latex: String.raw`u = \tfrac{1}{2}\kappa\varepsilon_0 E^2`, note: "Energy density inside a dielectric." }
      ],
      problems: [
        { type: "mcq",
          q: String.raw`<p>A parallel-plate capacitor is connected to a battery. A dielectric slab with $\kappa = 3$ is inserted, completely filling the gap, while the battery remains connected. The charge on the plates:</p>`,
          choices: [ String.raw`decreases to one third its original value`, String.raw`is unchanged`, String.raw`triples`, String.raw`increases by a factor of 9` ],
          answer: 2,
          solution: String.raw`<p>The battery holds $V$ fixed while the capacitance becomes $\kappa C_0 = 3C_0$. Then $Q = CV$ triples: the battery drives additional free charge onto the plates to keep the voltage at its emf despite the polarization of the slab.</p>` },
        { type: "mcq",
          q: String.raw`<p>A capacitor is charged to energy $U_0$, then disconnected from the battery. A dielectric with constant $\kappa$ is inserted, filling the gap. The stored energy becomes:</p>`,
          choices: [ String.raw`$\kappa U_0$`, String.raw`$U_0$`, String.raw`$\dfrac{U_0}{\kappa}$`, String.raw`$\dfrac{U_0}{\kappa^2}$` ],
          answer: 2,
          solution: String.raw`<p>Isolated means $Q$ is fixed, so use $U = Q^2/2C$. With $C \to \kappa C_0$, the energy drops to $U_0/\kappa$. The missing energy was delivered to the slab: the fringing field pulls the dielectric in, doing positive work on it as it enters. $U_0/\kappa^2$ would result from incorrectly letting <em>both</em> $V$ drop and using $\tfrac{1}{2}QV$ with an extra factor.</p>` },
        { type: "mcq",
          q: String.raw`<p>A capacitor remains connected to a battery while a dielectric ($\kappa$) is inserted to fill the gap. Which row correctly describes the changes?</p>`,
          choices: [
            String.raw`$E$ decreases by $\kappa$; $U$ decreases by $\kappa$`,
            String.raw`$E$ unchanged; $U$ increases by $\kappa$`,
            String.raw`$E$ unchanged; $U$ unchanged`,
            String.raw`$E$ increases by $\kappa$; $U$ increases by $\kappa^2$` ],
          answer: 1,
          solution: String.raw`<p>With the battery attached, $V$ is fixed, so $E = V/d$ cannot change. The extra free charge supplied by the battery exactly offsets the slab's polarization. Energy: $U = \tfrac{1}{2}CV^2$ with $C \to \kappa C$ and $V$ fixed gives $U \to \kappa U_0$. The "E decreases" intuition applies only to the isolated (fixed-$Q$) case.</p>` },
        { type: "frq",
          q: String.raw`<p>A parallel-plate capacitor (plate area $A$, separation $d$) is charged by a battery to charge $Q_0$ and voltage $V_0$, then <em>disconnected</em>. A dielectric slab of constant $\kappa$ and thickness $d$ is then inserted, completely filling the gap.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Determine the electric field, potential difference, and capacitance after insertion, in terms of the original values $E_0$, $V_0$, $C_0$, and $\kappa$.</p>`,
              solution: String.raw`<p>The free charge is trapped at $Q_0$. The slab polarizes, and its bound surface charge partially cancels the plate charge, reducing the field to $E = E_0/\kappa$. Then $V = Ed = V_0/\kappa$, and</p>
<p>$$C = \frac{Q_0}{V} = \frac{Q_0}{V_0/\kappa} = \kappa C_0.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Derive the induced (bound) surface charge density on the faces of the slab in terms of $\sigma_0 = Q_0/A$ and $\kappa$.</p>`,
              solution: String.raw`<p>Apply Gauss's law to a pillbox enclosing a patch of the positive plate and the adjacent bound layer. The field inside the dielectric is $E = E_0/\kappa = \sigma_0/\kappa\varepsilon_0$, so the net enclosed surface density must be $\varepsilon_0 E = \sigma_0/\kappa$. Since the plate contributes $+\sigma_0$ and the bound layer $-\sigma_{\text{ind}}$:</p>
<p>$$\sigma_0 - \sigma_{\text{ind}} = \frac{\sigma_0}{\kappa} \quad\Rightarrow\quad \sigma_{\text{ind}} = \sigma_0\left(1 - \frac{1}{\kappa}\right).$$</p>
<p>Check: $\kappa = 1$ gives zero induced charge; $\kappa \to \infty$ gives $\sigma_{\text{ind}} \to \sigma_0$, the conductor limit.</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Find the change in stored energy, and explain physically where the lost energy went. Would you need to do positive or negative work to insert the slab slowly?</p>`,
              solution: String.raw`<p>$U_0 = Q_0^2/2C_0$ becomes $U = Q_0^2/2\kappa C_0 = U_0/\kappa$, so</p>
<p>$$\Delta U = -U_0\left(1 - \frac{1}{\kappa}\right) < 0.$$</p>
<p>The non-uniform fringing field at the capacitor's edge polarizes the slab and pulls it inward, doing positive work on it. To insert the slab <em>slowly</em> you must hold it back &mdash; your hand does <em>negative</em> work of magnitude $U_0(1 - 1/\kappa)$, absorbing exactly the energy the field gives up. If released instead, the slab would gain kinetic energy and oscillate in and out of the gap.</p>` }
          ] },
        { type: "frq",
          q: String.raw`<p>A parallel-plate capacitor of capacitance $C_0$ is connected to a battery of emf $V$ and remains connected throughout. A dielectric slab of constant $\kappa$ is slowly inserted until it completely fills the gap.</p>`,
          parts: [
            { label: "(a)",
              prompt: String.raw`<p>Determine the additional charge $\Delta Q$ that flows through the battery during insertion.</p>`,
              solution: String.raw`<p>The voltage is fixed at $V$ while $C_0 \to \kappa C_0$. The plate charge goes from $C_0 V$ to $\kappa C_0 V$, so the battery delivers</p>
<p>$$\Delta Q = (\kappa - 1)C_0 V.$$</p>` },
            { label: "(b)",
              prompt: String.raw`<p>Compute the work done by the battery and the change in the capacitor's stored energy during insertion.</p>`,
              solution: String.raw`<p>The battery moves charge $\Delta Q$ through a constant potential difference $V$:</p>
<p>$$W_{\text{batt}} = \Delta Q \cdot V = (\kappa - 1)C_0 V^2.$$</p>
<p>The stored energy changes from $\tfrac{1}{2}C_0V^2$ to $\tfrac{1}{2}\kappa C_0 V^2$:</p>
<p>$$\Delta U = \tfrac{1}{2}(\kappa - 1)C_0 V^2.$$</p>` },
            { label: "(c)",
              prompt: String.raw`<p>Compare $W_{\text{batt}}$ and $\Delta U$, and account for the difference. Justify the direction of the electrical force on the slab during insertion.</p>`,
              solution: String.raw`<p>$\Delta U = \tfrac{1}{2}W_{\text{batt}}$: only half the battery's output is stored. The remainder, $\tfrac{1}{2}(\kappa - 1)C_0V^2$, is delivered as mechanical work by the fringing field, which <em>pulls the slab inward</em> (plus any dissipation in circuit resistance during the transient). The inward force can be confirmed energetically: at constant $V$, the system (capacitor + battery) can lower its total energy by drawing the slab in, since each increment of insertion lets the battery do work $V\,dq$ of which only half is stored &mdash; the surplus must appear as positive mechanical work on the slab. You would have to restrain the slab, not push it.</p>` },
            { label: "(d)",
              prompt: String.raw`<p>Now suppose the slab fills only the right half of the gap area (area $A/2$ with dielectric, $A/2$ vacuum, same separation $d$). Derive the resulting capacitance in terms of $C_0$ and $\kappa$.</p>`,
              solution: String.raw`<p>The two halves share the same plates and thus the same potential difference: they are capacitors in <em>parallel</em>, each with half the area.</p>
<p>$$C = \frac{\varepsilon_0 (A/2)}{d} + \frac{\kappa\varepsilon_0 (A/2)}{d} = \frac{\varepsilon_0 A}{2d}(1 + \kappa) = \frac{1 + \kappa}{2}\,C_0.$$</p>
<p>Check the limits: $\kappa = 1$ returns $C_0$; large $\kappa$ is dominated by the dielectric half, as expected.</p>` }
          ] }
      ]
    }
  ]
});
