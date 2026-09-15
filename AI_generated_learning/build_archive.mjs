import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const rawPath = path.join(root, 'conference_prep_website.txt');
const rawCapture = fs.readFileSync(rawPath, 'utf8');

const sourceUrl = 'https://chatgpt.com/share/6aa7f962-12dc-83eb-9f3a-00536aa28185';
const captureDate = '2026-09-14';
const title = 'Konferenzvorbereitung Moduli';

const userOpening = String.raw`I would like to be wel-prepared for the following conference: https://www.math.hu-berlin.de/~www-ag/Website_TwoCenturiesOfModuli/TwoCenturiesOfModuli.html
I think usually the problem is the conceptions, I'm not familiar with many notations, which I think is quick to fix beforehand
28s nachgedacht

You can ask me questions "if I know ..." to save time
46s nachgedacht`;

const assistantDiagnostic = String.raw`To save time, answer these with 0 = no / 1 = vaguely / 2 = comfortable. Don’t look anything up first; this is just diagnostic.

Curves: Do you know why a smooth projective complex algebraic curve can also be viewed as a compact Riemann surface, and what its genus $g$ measures?

Basic AG: schemes, $\operatorname{Spec} R$, projective varieties, divisors and line bundles?

Sheaves/cohomology: notation such as $H^i(X,\mathcal F)$, $\Omega_X^1$, $T_X$, canonical bundle $K_X$?

Moduli idea: what it means to “parameterize all objects up to isomorphism,” and the distinction between a family and an individual object?

Fine/coarse moduli: have you encountered why a moduli space may fail to represent the moduli problem?

Stacks: do you have an intuition for a stack and notation like $[X/G]$, particularly why automorphisms force us to remember more than points?

Main characters: $\mathcal M_g$, $\mathcal M_{g,n}$, $\overline{\mathcal M}_{g,n}$, stable curves and nodal curves?

Deformation theory: tangent/obstruction spaces; phrases such as “infinitesimal deformation” or $H^1(X,T_X)$?

Intersection theory: Chow groups, Chern classes, intersection numbers—and on $\overline{\mathcal M}_{g,n}$, symbols like $\psi_i,\lambda,\kappa_i$?

Jacobians/Hodge theory: Jacobian $J(C)$, Abel–Jacobi map, Hodge decomposition, period map?

GIT/stability: quotienting by a group action, stable/semistable points, wall crossing?

Enumerative geometry: Gromov–Witten/Donaldson–Thomas invariants, virtual fundamental classes?

Derived language: derived category $D^b(X)$, moduli of sheaves, Bridgeland stability?

Differential/Teichmüller side: Teichmüller space, character varieties, Higgs bundles, flat/translation surfaces?

Tropical/log geometry: tropicalization, tropical curves, logarithmic structures?

Birational/K-stability side: MMP, canonical/log canonical singularities, KSBA/K-stability?

You can literally reply something like:

1:2 2:2 3:1 4:2 5:0 6:0 7:1 8:0 9:0 10:1 11:1 12:0 13:0 14:0 15:0 16:0

From that I can strip out everything you already know and give you a high-yield crash course for tomorrow, especially the notation and mental pictures likely to occur repeatedly.

The speaker list is unusually broad—Alper, Kollár, Voisin, Hitchin, Maulik, Ranganathan, Payne, Xu, Zorich, van der Geer, etc.—so trying to learn everyone's specialty tonight would be counterproductive.

数学与计算机科学学院

The common language of curves → families → moduli → compactification → stacks → deformation/intersection theory is likely the much better investment.`;

const userSources = String.raw`Sources
1:2 2:2 3:2 4:2 5:2 6:1.3 7:1 8:1 9:0.8(learned but never fully remember) 10:2 11:1.5(not so familiar with wall crossing, and forget some examples of table/semistable points)  12:1.3 13:1.5(no for Bridgeland stability) 14:0.3 15:1 16:0`;

const assistantCheatSheet = String.raw`Good point. The previous version was too much like source material. For a train ride, you want the rendered mathematics and short explanations, not lots of commands. Here is a more readable version.

## Moduli Conference Train Cheat Sheet (Symbol Version)

# Moduli Conference — Train Cheat Sheet

## 1. The central question

A moduli space answers:

What is the space of all objects of a given type, up to isomorphism?

Examples:

Curves:

$$\mathcal M_g=\{\text{smooth genus }g\text{ curves}\}/\cong$$

$$\{(C,p_1,\dots,p_n)\}/\cong$$

$$\operatorname{Hom}(\pi_1(S),G)//G$$

$$\{(E,\phi)\}/\cong$$

## 2. Deformation theory

The tangent space to a moduli space:

$$T_{[X]}\mathcal M$$

is usually:

$$H^1(X,T_X)$$

or more generally:

$$\operatorname{Ext}^1(L_X,\mathcal O_X)$$

The dictionary:

$$\begin{array}{c|c}
\text{group} & \text{meaning}\\
\hline
\operatorname{Ext}^0(L_X,\mathcal O_X) & \text{infinitesimal automorphisms}\\
\operatorname{Ext}^1(L_X,\mathcal O_X) & \text{infinitesimal deformations}\\
\operatorname{Ext}^2(L_X,\mathcal O_X) & \text{obstructions}
\end{array}$$

For smooth $(X)$:

$$L_X\simeq\Omega_X$$

so people often write:

$$\operatorname{Ext}^1(\Omega_X,\mathcal O_X)$$

## 3. Moduli of curves

Dimension:

$$\dim \mathcal M_g=3g-3$$

because:

$$H^1(C,T_C)$$

and

$$H^0(C,K_C^2)$$

Therefore:

$$H^0(C,K_C^2)$$

Quadratic differentials are the cotangent directions.

## 4. Teichmüller space

Marked curves:

$$\{\text{complex structures on }S_g\}/\text{isotopy}$$

Mapping class group:

$$\operatorname{Diff}^+(S_g)/\operatorname{Diff}_0(S_g)$$

and:

$$\boxed{\mathcal M_g=\mathcal T_g/\operatorname{Mod}_g}$$

Important:

$$\operatorname{Mod}_g$$

is discrete.

Therefore:

$$\dim\mathcal M_g=3g-3$$

The quotient can create orbifold singularities from automorphisms.

## 5. Stable curves

Compactification:

$$\mathcal M_g\subset\overline{\mathcal M}_g$$

adds nodal curves.

Local node:

$$xy=0$$

Smoothing:

$$xy=t$$

where:

$(t=0)$: node

$(t\neq0)$: smooth

Each node gives one boundary direction.

## 6. Boundary strata

Separating node:

$$\Delta_i$$

comes from:

$$\overline{\mathcal M}_{i,1}\times\overline{\mathcal M}_{g-i,1}\longrightarrow\overline{\mathcal M}_g$$

by gluing the two marked points.

Non-separating node:

$$\Delta_{\mathrm{irr}}$$

comes from:

$$\overline{\mathcal M}_{g-1,2}\longrightarrow\overline{\mathcal M}_g$$

by identifying two points on the same curve.

Dual graph:

$$\text{node}\longleftrightarrow\text{edge}$$

## 7. Canonical bundle and nodes

Normalization:

$$\nu:\widetilde C\rightarrow C$$

A node gives two points:

$$q_+,q_-$$

The key formula:

$$\omega_{\widetilde C}(q_++q_-)$$

Meaning:

A differential downstairs becomes a differential upstairs allowed simple poles:

$$\frac{dz}{z}$$

with residue condition:

$$\operatorname{Res}_{q_+}+\operatorname{Res}_{q_-}=0$$

Node:

$$\text{logarithmic singularity}$$

Cusp:

$$\frac{dz}{z^2}$$

too singular.

## 8. Important classes on $(\overline{\mathcal M}_{g,n})$

Universal curve:

$$\pi:\overline{\mathcal M}_{g,n+1}\rightarrow\overline{\mathcal M}_{g,n}$$

Psi class

Cotangent line:

$$T^*_{p_i}C$$

Therefore:

$$\psi_i=c_1(L_i)$$

Hodge bundle

$$\mathbb E=\pi_*\omega_\pi$$

Fiber:

$$\mathbb E_C=H^0(C,K_C)$$

Classes:

$$\lambda_i=c_i(\mathbb E)$$

especially:

$$\lambda=\lambda_1$$

Kappa classes

Forget one point:

$$\pi:\overline{\mathcal M}_{g,n+1}\rightarrow\overline{\mathcal M}_{g,n}$$

Then:

$$\pi_*(\psi_{n+1}^{a+1})$$

Think:

"add a point, integrate it away."

## 9. KSBA stability

Stable curves:

$$\omega_C(p_1+\cdots+p_n)\text{ ample}$$

Higher dimensions:

$$K_X+\Delta$$

A KSBA stable object:

$$\boxed{(X,\Delta):\begin{cases}\text{slc}\\K_X+\Delta\text{ ample}\end{cases}}$$

## 10. Singularities

Discrepancy:

$$f^*(K_X+\Delta)+\sum a(E)E$$

Conditions:

$$\begin{aligned}\text{klt}:&\quad a(E)>-1\\\text{lc}:&\quad a(E)\ge-1\end{aligned}$$

For non-normal spaces:
normalize:

$$\nu:X^\nu\rightarrow X$$

add conductor divisor $(D)$:

$$X\text{ slc}\iff(X^\nu,D)\text{ lc}$$

Stable curves are slc.

## 11. Character varieties

A representation:

$$\rho:\pi_1(S)\rightarrow G$$

gives:

$$\operatorname{Hom}(\pi_1(S),G)//G$$

Interpretation:

$$\text{flat bundle}$$

$$\text{local system}$$

Teichmüller space:

$$\mathcal T_g\subset\mathcal X_{PSL_2(\mathbb R)}(S)$$

## 12. Higgs bundles

A Higgs bundle:

$$ (E,\phi) $$

where:

$$\phi:E\rightarrow E\otimes K_X$$

Think:

$$\phi=\text{matrix-valued holomorphic 1-form}$$

Nonabelian Hodge:

$$\boxed{\text{representations}\leftrightarrow\text{polystable Higgs bundles}}$$

## 13. Hitchin fibration

The characteristic polynomial:

$$\det(\lambda-\phi)$$

Here:

$$\lambda$$

is not a number globally.

It is the tautological section on:

$$\operatorname{Tot}(K_X)$$

Spectral curve:

$$\{(x,\lambda):\det(\lambda-\phi_x)=0\}$$

It records eigenvalues.

A line bundle:

$$L\rightarrow\Sigma$$

records eigenvectors.

Then:

$$E=\pi_*L$$

The Hitchin map:

$$h:\mathcal M_{\mathrm{Higgs}}\rightarrow\bigoplus_iH^0(K_X^{d_i})$$

records the characteristic polynomial.

## 14. The one mental map

Most talks fit:

$$\boxed{\text{objects}\rightarrow\text{families}\rightarrow\text{degenerations}\rightarrow\text{compactified moduli}}$$

Different languages:

$$\begin{array}{c|c}
\text{language}&\text{question}\\
\hline
\text{stacks}&\text{what about automorphisms?}\\
\text{deformation theory}&\text{what are tangent directions?}\\
\text{KSBA}&\text{which singular limits are allowed?}\\
\text{Higgs/Teichmüller}&\text{how to translate geometry into representations?}\\
\text{tropical/log}&\text{how do degenerations remember boundaries?}
\end{array}$$

This should be much more train-friendly: you can skim the boxes and equations and use it as a “decode the speaker” sheet rather than as something to study line-by-line.`;

const userCorrection = 'This is not rendered text though';

const assistantTrainNotes = String.raw`You are right — I misunderstood what you meant. I gave you a “source document” with LaTeX commands inside it, not a train note with already rendered mathematical notation.

For the train, it should look like this:

# Moduli Conference — Train Notes

## 1. The main question of moduli

A moduli space is:

the space of all mathematical objects of a certain type, up to isomorphism.

Examples:

Curves:

$$\mathcal M_g=\{\text{smooth genus }g\text{ curves}\}/\cong$$

Pointed curves:

$$\mathcal M_{g,n}=\{(C,p_1,\dots,p_n)\}/\cong$$

Representations:

$$\mathcal X_G(S)=\operatorname{Hom}(\pi_1(S),G)//G$$

## 2. Deformation theory

The tangent space of a moduli problem is usually:

$$T_{[X]}\mathcal M$$

For smooth varieties:

$$T_{[X]}\mathcal M\simeq H^1(X,T_X)$$

The general version uses the cotangent complex:

$$\operatorname{Ext}^i(L_X,\mathcal O_X)$$

with the dictionary:

- $i=0$: infinitesimal automorphisms
- $i=1$: infinitesimal deformations
- $i=2$: obstructions

For smooth $X$:

$$L_X\simeq\Omega_X$$

so you often see:

$$\operatorname{Ext}^1(\Omega_X,\mathcal O_X)$$

instead.

## 3. Curves

For $g\ge2$:

$$\dim_{\mathbb C}\mathcal M_g=3g-3$$

because:

$$T_{[C]}\mathcal M_g\simeq H^1(C,T_C)$$

and by Serre duality:

$$H^1(C,T_C)^*\simeq H^0(C,K_C^2)$$

Therefore:

$$T_{[C]}^*\mathcal M_g\simeq H^0(C,K_C^2)$$

So:

quadratic differentials = cotangent directions to moduli

## 4. Teichmüller space

Teichmüller space:

$$\mathcal T_g=\{\text{complex structures on }S_g\}/\text{isotopy}$$

A point is a marked curve.

The mapping class group:

$$\operatorname{Mod}_g=\operatorname{Diff}^+(S_g)/\operatorname{Diff}_0(S_g)$$

changes the marking.

Hence:

$$\mathcal M_g=\mathcal T_g/\operatorname{Mod}_g$$

Important:

$$\operatorname{Mod}_g$$

is discrete, so:

$$\dim\mathcal M_g=\dim\mathcal T_g=3g-3$$

The quotient may create orbifold singularities because of automorphisms.

## 5. Stable curves

The compactification:

$$\mathcal M_g\subset\overline{\mathcal M}_g$$

adds nodal curves.

A node looks locally like:

$$xy=0$$

and can be smoothed by:

$$xy=t$$

where:

$t=0$: singular node

$t\neq0$: smooth curve

One node corresponds to one smoothing parameter.

## 6. Boundary strata

A separating node:

$$\Delta_i$$

comes from gluing:

$$\overline{\mathcal M}_{i,1}\times\overline{\mathcal M}_{g-i,1}\longrightarrow\overline{\mathcal M}_g$$

A non-separating node:

$$\Delta_{\mathrm{irr}}$$

comes from:

$$\overline{\mathcal M}_{g-1,2}\longrightarrow\overline{\mathcal M}_g$$

by identifying two marked points.

The dual graph picture:

$$\text{node}\leftrightarrow\text{edge}$$

This is the format I should have produced originally: equations rendered, short explanations, and no raw commands.

I’ll make the full train sheet in this style (probably ~4–5 pages worth) rather than the previous source-style version.`;

const userKnown = 'These I already know and learned';

const assistantVocabulary = String.raw`Good — then I should not waste your train time on $\mathcal M_g$, deformation basics, $\psi/\lambda/\kappa$, etc. You already have those.

Given your earlier diagnostics, the highest return remaining material is:

Teichmüller ↔ character varieties ↔ Higgs bundles
(we started this, but I would make a compact “recognition sheet”)

Log geometry ↔ tropical geometry ↔ degenerations
(very likely in modern moduli talks, and it connects directly to the $xy=t$ picture you now understand)

Bridgeland stability and wall crossing
(because you know some derived geometry but not the stability language)

K-stability / moduli of Kähler–Einstein varieties
(you now know KSBA; K-stability is the other “stability” word likely to appear)

I would not spend train time on:

more discrepancy calculations;

more stable curve intersection theory;

basic stacks;

basic deformation theory.

A better train document would therefore look like:

# Moduli Conference: New Vocabulary Sheet

## A. Character varieties

A point:

$$\rho:\pi_1(S)\rightarrow G$$

is a representation of the fundamental group.

The moduli space:

$$\mathcal X_G(S)=\operatorname{Hom}(\pi_1(S),G)//G$$

means:

“all flat $G$-bundles on $S$, modulo gauge equivalence.”

Mental translation:

representation = flat bundle = local system

## B. Teichmüller theory inside character varieties

A Riemann surface gives a hyperbolic structure:

$$X\simeq\mathbb H/\Gamma$$

and therefore:

$$\rho:\pi_1(S)\rightarrow PSL_2(\mathbb R)$$

Teichmüller space appears as a special component:

$$\mathcal T_g\subset\mathcal X_{PSL_2(\mathbb R)}(S)$$

Generalization:

$$PSL_2(\mathbb R)\rightsquigarrow PSL_n(\mathbb R)$$

gives higher Teichmüller theory.

## C. Higgs bundles

A Higgs bundle:

$$ (E,\varphi) $$

where

$$\varphi:E\rightarrow E\otimes K_X$$

Think:

$$\varphi=\text{a holomorphic matrix-valued 1-form}$$

Nonabelian Hodge:

representation $\leftrightarrow$ Higgs bundle

More precisely:

$$\operatorname{Hom}(\pi_1(S),G)//G$$

corresponds to polystable $G$-Higgs bundles.

## D. Hitchin fibration

The characteristic polynomial:

$$\det(\lambda-\varphi)$$

produces:

$$h:\mathcal M_{\mathrm{Higgs}}\rightarrow\bigoplus_iH^0(X,K_X^{d_i})$$

The target is the Hitchin base.

The spectral curve:

$$\Sigma=\{(x,\lambda):\det(\lambda-\varphi_x)=0\}\subset\operatorname{Tot}(K_X)$$

Meaning:

$\lambda$: eigenvalue of $\varphi$;

$\Sigma$: all eigenvalues as $x$ varies.

A line bundle

$$L\rightarrow\Sigma$$

records eigenvectors.

Then:

$$E=\pi_*L$$

## E. Log and tropical geometry

Start from:

$$xy=t$$

For $t\neq0$:

smooth curve.

For $t=0$:

node.

The central fiber gives a graph:

components ↔ vertices

nodes ↔ edges

A tropical curve is essentially:

dual graph + edge lengths

Log geometry remembers the boundary information needed to make degenerations behave well.

## F. Bridgeland stability

A stability condition is:

$$\sigma=(Z,\mathcal A)$$

where:

$\mathcal A$ = heart of a $t$-structure;

$Z$ = central charge.

The central charge:

$$Z(E)\in\mathbb C$$

gives a phase:

$$\phi(E)=\frac{1}{\pi}\arg Z(E)$$

Objects are stable if they cannot be decomposed into pieces with larger phase.

The key picture:

stability space has walls and chambers

Crossing a wall changes which objects are stable.

## G. K-stability

Do not confuse with KSBA.

KSBA:

which singular limits are allowed?

K-stability:

which degenerations are numerically acceptable?

A test configuration:

$$\mathcal X\rightarrow\mathbb A^1$$

is a one-parameter degeneration.

It has:

$$\operatorname{DF}(\mathcal X)$$

(Donaldson–Futaki invariant).

K-stability:

$$\operatorname{DF}(\mathcal X)\ge0$$

for all test configurations.

Mental analogy:

K-stability is like GIT stability, but with degenerations instead of group elements.

For your train tomorrow, I would read these sections in order:

Higgs/character varieties

Log/tropical

Bridgeland

K-stability

You already have the “curve moduli grammar”; these are the dialects that will make the talks intelligible.`;

const messages = [
  { role: 'user', label: 'You', text: userOpening },
  { role: 'assistant', label: 'ChatGPT', text: assistantDiagnostic },
  { role: 'user', label: 'You', text: userSources },
  { role: 'assistant', label: 'ChatGPT', text: assistantCheatSheet },
  { role: 'user', label: 'You', text: userCorrection },
  { role: 'assistant', label: 'ChatGPT', text: assistantTrainNotes },
  { role: 'user', label: 'You', text: userKnown },
  { role: 'assistant', label: 'ChatGPT', text: assistantVocabulary },
];

const archive = {
  title,
  sourceUrl,
  captured: captureDate,
  conversationDate: 'Sun, Sep 6 at 5:12 PM',
  handwritten: 'Binder1.pdf',
  rawRecord: 'conference_prep_website.txt',
  messages,
};

const safeJson = value => JSON.stringify(value).replace(/</g, '\\u003c');

const runtime = String.raw`
function esc(value) {
  return String(value).replace(/[&<>"']/g, function (ch) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];
  });
}

var symbolMap = {
  alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ϵ', varepsilon:'ε', zeta:'ζ', eta:'η', theta:'θ', vartheta:'ϑ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', varpi:'ϖ', rho:'ρ', varrho:'ϱ', sigma:'σ', varsigma:'ς', tau:'τ', upsilon:'υ', phi:'ϕ', varphi:'φ', chi:'χ', psi:'ψ', omega:'ω',
  Gamma:'Γ', Delta:'Δ', Theta:'Θ', Lambda:'Λ', Xi:'Ξ', Pi:'Π', Sigma:'Σ', Upsilon:'Υ', Phi:'Φ', Psi:'Ψ', Omega:'Ω',
  infty:'∞', partial:'∂', nabla:'∇', ell:'ℓ', cdot:'⋅', times:'×', pm:'±', mp:'∓',
  le:'≤', leq:'≤', ge:'≥', geq:'≥', neq:'≠', ne:'≠', approx:'≈', sim:'∼', simeq:'≃', cong:'≅',
  to:'→', rightarrow:'→', longrightarrow:'⟶', leftarrow:'←', longleftarrow:'⟵', leftrightarrow:'↔', longleftrightarrow:'⟷', mapsto:'↦', iff:'⇔', implies:'⇒', rightsquigarrow:'⇝',
  in:'∈', notin:'∉', subset:'⊂', subseteq:'⊆', supset:'⊃', supseteq:'⊇', cap:'∩', cup:'∪', oplus:'⊕', otimes:'⊗',
  ast:'∗', star:'⋆', circ:'∘', bullet:'•', dots:'…', ldots:'…', cdots:'⋯', vdots:'⋮', ddots:'⋱',
  sum:'∑', prod:'∏', bigcup:'⋃', bigcap:'⋂', bigoplus:'⨁', bigotimes:'⨂',
};

function trimBraces(value) {
  var s = String(value).trim();
  if (s[0] === '{' && s[s.length - 1] === '}') return s.slice(1, -1);
  return s;
}

function readBalanced(source, start) {
  var open = source[start];
  var close = open === '[' ? ']' : '}';
  if (open !== '{' && open !== '[') return { value: source[start] || '', end: start + 1 };
  var depth = 0;
  for (var i = start; i < source.length; i += 1) {
    if (source[i] === open) depth += 1;
    if (source[i] === close) {
      depth -= 1;
      if (depth === 0) return { value: source.slice(start + 1, i), end: i + 1 };
    }
  }
  return { value: source.slice(start + 1), end: source.length };
}

function readArgument(source, start) {
  while (/\s/.test(source[start] || '')) start += 1;
  if (source[start] === '{' || source[start] === '[') return readBalanced(source, start);
  if (source[start] === '\\') {
    var m = source.slice(start + 1).match(/^[A-Za-z]+/);
    if (m) return { value: source.slice(start, start + 1 + m[0].length), end: start + 1 + m[0].length };
  }
  return { value: source[start] || '', end: start + 1 };
}

function atom(tag, body, attrs) {
  var a = attrs || '';
  return '<' + tag + (a ? ' ' + a : '') + '>' + body + '</' + tag + '>';
}

function textAtom(text, variant) {
  return '<mtext' + (variant ? ' mathvariant="' + variant + '"' : '') + '>' + esc(text) + '</mtext>';
}

function simpleAtom(text, tag) {
  return '<' + (tag || 'mi') + '>' + esc(text) + '</' + (tag || 'mi') + '>';
}

function commandAtom(name, source, index) {
  var arg, body;
  if (name === 'frac' || name === 'dfrac' || name === 'tfrac') {
    arg = readArgument(source, index); body = readArgument(source, arg.end);
    return { html: '<mfrac>' + parseLatex(arg.value) + parseLatex(body.value) + '</mfrac>', end: body.end };
  }
  if (name === 'sqrt') {
    var next = index;
    while (/\s/.test(source[next] || '')) next += 1;
    var degree = '';
    if (source[next] === '[') { var d = readBalanced(source, next); degree = '<mrow>' + parseLatex(d.value) + '</mrow>'; next = d.end; }
    arg = readArgument(source, next);
    return { html: degree ? '<mroot>' + parseLatex(arg.value) + degree + '</mroot>' : '<msqrt>' + parseLatex(arg.value) + '</msqrt>', end: arg.end };
  }
  if (name === 'text' || name === 'mbox') {
    arg = readArgument(source, index); return { html: textAtom(arg.value), end: arg.end };
  }
  if (name === 'mathrm' || name === 'textnormal') {
    arg = readArgument(source, index); return { html: '<mrow mathvariant="normal">' + parseLatex(arg.value) + '</mrow>', end: arg.end };
  }
  if (name === 'mathcal' || name === 'mathscr' || name === 'mathbb' || name === 'mathbf' || name === 'boldsymbol') {
    arg = readArgument(source, index); var v = name === 'mathbb' ? 'double-struck' : name === 'mathcal' || name === 'mathscr' ? 'script' : 'bold';
    return { html: '<mrow mathvariant="' + v + '">' + parseLatex(arg.value) + '</mrow>', end: arg.end };
  }
  if (name === 'operatorname') {
    arg = readArgument(source, index); return { html: '<mi mathvariant="normal">' + esc(arg.value) + '</mi>', end: arg.end };
  }
  if (name === 'boxed') {
    arg = readArgument(source, index); return { html: '<menclose notation="box">' + parseLatex(arg.value) + '</menclose>', end: arg.end };
  }
  if (name === 'overline' || name === 'bar' || name === 'hat' || name === 'tilde' || name === 'vec' || name === 'underline') {
    arg = readArgument(source, index);
    var accent = name === 'underline' ? 'bottom' : name === 'bar' ? '¯' : name === 'hat' ? '^' : name === 'tilde' ? '~' : name === 'vec' ? '→' : 'top';
    if (accent === 'top' || accent === 'bottom') return { html: '<menclose notation="' + accent + '">' + parseLatex(arg.value) + '</menclose>', end: arg.end };
    return { html: '<mover accent="true">' + parseLatex(arg.value) + '<mo>' + accent + '</mo></mover>', end: arg.end };
  }
  if (name === 'left' || name === 'right' || name === 'big' || name === 'Big' || name === 'bigg' || name === 'Bigg') {
    var delim = source[index] || ''; return { html: delim && delim !== '.' ? '<mo>' + esc(delim) + '</mo>' : '', end: index + 1 };
  }
  if (name === 'begin') {
    arg = readArgument(source, index); var env = trimBraces(arg.value); var endToken = '\\end{' + env + '}'; var endAt = source.indexOf(endToken, arg.end);
    if (endAt >= 0 && /array|aligned|cases|matrix|pmatrix/.test(env)) return { html: arrayMath(source.slice(arg.end, endAt), env), end: endAt + endToken.length };
    return { html: '', end: arg.end };
  }
  if (name === 'quad' || name === 'qquad' || name === ',' || name === ';' || name === ':' || name === '!') return { html: '<mspace width="' + (name === 'qquad' ? '2em' : '0.6em') + '"></mspace>', end: index };
  if (name === 'limits' || name === 'displaystyle' || name === 'scriptstyle') return { html: '', end: index };
  if (symbolMap[name]) return { html: '<mo>' + esc(symbolMap[name]) + '</mo>', end: index };
  if (name === 'vert' || name === 'mid') return { html: '<mo>|</mo>', end: index };
  if (name === 'langle') return { html: '<mo>⟨</mo>', end: index };
  if (name === 'rangle') return { html: '<mo>⟩</mo>', end: index };
  return { html: '<mi>' + esc(name) + '</mi>', end: index };
}

function arrayMath(content, env) {
  var cleaned = content.replace(/\\hline/g, '').replace(/^\s*\{[^{}]*\}/, '');
  var rows = cleaned.replace(/\r/g, '').split(/\\\\/).filter(function (r) { return r.trim(); });
  var html = rows.map(function (row) {
    var cells = row.split('&').map(function (cell) { return '<mtd>' + parseLatex(cell.trim()) + '</mtd>'; }).join('');
    return '<mtr>' + cells + '</mtr>';
  }).join('');
  return '<mtable columnalign="left">' + html + '</mtable>';
}

function parseLatex(source) {
  var s = String(source).replace(/\r/g, '').replace(/\\[ \t]*$/gm, '');
  var pos = 0;
  function skip() { while (/\s/.test(s[pos] || '')) pos += 1; }
  function scriptArgument() {
    skip();
    if (s[pos] === '{') { var group = readBalanced(s, pos); pos = group.end; return '<mrow>' + parseLatex(group.value) + '</mrow>'; }
    if (s[pos] === '[') { var bracket = readBalanced(s, pos); pos = bracket.end; return '<mrow><mo>[</mo>' + parseLatex(bracket.value) + '<mo>]</mo></mrow>'; }
    return base();
  }
  function base() {
    skip();
    if (pos >= s.length) return '';
    var ch = s[pos];
    if (ch === '{') { var group = readBalanced(s, pos); pos = group.end; return '<mrow>' + parseLatex(group.value) + '</mrow>'; }
    if (ch === '[') { var bracket = readBalanced(s, pos); pos = bracket.end; return '<mrow><mo>[</mo>' + parseLatex(bracket.value) + '<mo>]</mo></mrow>'; }
    if (ch === '\\') {
      var cmdMatch = s.slice(pos + 1).match(/^[A-Za-z]+|^./); var name = cmdMatch ? cmdMatch[0] : '';
      var result = commandAtom(name, s, pos + 1 + name.length); pos = result.end; return result.html;
    }
    pos += 1;
    if (/[0-9]/.test(ch)) return '<mn>' + ch + '</mn>';
    if ('=+\-*/(),.:[\]|'.indexOf(ch) >= 0) return '<mo>' + esc(ch) + '</mo>';
    return '<mi>' + esc(ch) + '</mi>';
  }
  function sequence(stop) {
    var out = '';
    while (pos < s.length) {
      skip();
      if (stop && s[pos] === stop) { pos += 1; break; }
      if (pos >= s.length) break;
      var item = base(); if (!item) break;
      var sub = null, sup = null;
      while (true) {
        skip(); var op = s[pos];
        if (op !== '^' && op !== '_') break;
        pos += 1; var arg = scriptArgument(); if (op === '^') sup = arg; else sub = arg;
      }
      if (sub && sup) item = '<msubsup>' + item + sub + sup + '</msubsup>';
      else if (sub) item = '<msub>' + item + sub + '</msub>';
      else if (sup) item = '<msup>' + item + sup + '</msup>';
      out += item;
    }
    return out;
  }
  return sequence('');
}

function visualArray(content) {
  var cleaned = content.replace(/\\hline/g, '').replace(/^\s*\{[^{}]*\}/, '');
  var rows = cleaned.replace(/\r/g, '').split(/\\\\/).filter(function (r) { return r.trim(); });
  return '<span class="array">' + rows.map(function (row) {
    return '<span class="array-row">' + row.split('&').map(function (cell) { return '<span class="array-cell">' + parseVisual(cell.trim()) + '</span>'; }).join('') + '</span>';
  }).join('') + '</span>';
}

function visualCommandAtom(name, source, index) {
  var arg, body;
  if (name === 'frac' || name === 'dfrac' || name === 'tfrac') {
    arg = readArgument(source, index); body = readArgument(source, arg.end);
    return { html: '<span class="mfrac"><span class="frac-num">' + parseVisual(arg.value) + '</span><span class="frac-den">' + parseVisual(body.value) + '</span></span>', end: body.end };
  }
  if (name === 'sqrt') {
    var next = index; while (/\s/.test(source[next] || '')) next += 1;
    var degree = ''; if (source[next] === '[') { var d = readBalanced(source, next); degree = '<span class="root-degree">' + parseVisual(d.value) + '</span>'; next = d.end; }
    arg = readArgument(source, next);
    return { html: '<span class="sqrt">' + (degree ? degree : '<span class="radical">√</span>') + '<span class="radicand">' + parseVisual(arg.value) + '</span></span>', end: arg.end };
  }
  if (name === 'text' || name === 'mbox') { arg = readArgument(source, index); return { html: '<span class="mord text">' + esc(arg.value).replace(/ /g, '&nbsp;') + '</span>', end: arg.end }; }
  if (name === 'mathrm' || name === 'textnormal') { arg = readArgument(source, index); return { html: '<span class="mordmathrm">' + parseVisual(arg.value) + '</span>', end: arg.end }; }
  if (name === 'mathcal' || name === 'mathscr' || name === 'mathbb' || name === 'mathbf' || name === 'boldsymbol') {
    arg = readArgument(source, index); var v = name === 'mathbb' ? 'mathbb' : name === 'mathcal' || name === 'mathscr' ? 'mathcal' : 'mathbf';
    return { html: '<span class="mord ' + v + '">' + parseVisual(arg.value) + '</span>', end: arg.end };
  }
  if (name === 'operatorname') { arg = readArgument(source, index); return { html: '<span class="mop">' + esc(arg.value) + '</span>', end: arg.end }; }
  if (name === 'overline' || name === 'bar' || name === 'hat' || name === 'tilde' || name === 'widetilde' || name === 'vec' || name === 'underline') {
    arg = readArgument(source, index); var accent = name === 'underline' ? 'accent-underline' : name === 'hat' ? 'accent-hat' : name === 'tilde' || name === 'widetilde' ? 'accent-tilde' : name === 'vec' ? 'accent-vec' : 'accent-overline';
    return { html: '<span class="' + accent + '">' + parseVisual(arg.value) + '</span>', end: arg.end };
  }
  if (name === 'boxed') { arg = readArgument(source, index); return { html: '<span class="boxed">' + parseVisual(arg.value) + '</span>', end: arg.end }; }
  if (name === 'left' || name === 'right' || name === 'big' || name === 'Big' || name === 'bigg' || name === 'Bigg') {
    var delim = source[index] || ''; var dc = delim === ')' || delim === ']' || delim === '}' ? 'mclose' : delim === '(' || delim === '[' || delim === '{' ? 'mopen' : 'mord'; return { html: delim && delim !== '.' ? '<span class="' + dc + ' delim">' + esc(delim) + '</span>' : '', end: index + 1 };
  }
  if (name === 'begin') {
    arg = readArgument(source, index); var env = trimBraces(arg.value); var endToken = '\\end{' + env + '}'; var endAt = source.indexOf(endToken, arg.end);
    if (endAt >= 0 && /array|aligned|cases|matrix|pmatrix/.test(env)) return { html: visualArray(source.slice(arg.end, endAt)), end: endAt + endToken.length };
    return { html: '', end: arg.end };
  }
  if (name === 'quad' || name === 'qquad' || name === ',' || name === ';' || name === ':' || name === '!') {
    var space = name === 'qquad' ? '2em' : name === 'quad' ? '1em' : name === ',' ? '.1667em' : name === ';' ? '.2778em' : name === ':' ? '.2222em' : '-.1667em';
    return { html: '<span class="mspace" style="width:' + space + '"></span>', end: index };
  }
  if (name === 'limits' || name === 'displaystyle' || name === 'scriptstyle') return { html: '', end: index };
  if (symbolMap[name]) {
    var sym = symbolMap[name], symClass = /^(=|≤|≥|≠|≈|∼|≃|≅|→|⟶|↔|⟷|⇔|⇒|∈|⊂|⊆|⊃|⊇)$/.test(sym) ? 'mrel' : /^(×|±|∓|∗|⋆|⊕|⊗|∘|•)$/.test(sym) ? 'mbin' : /^(∑|∏|⋃|⋂|⨁|⨂)$/.test(sym) ? 'op-symbol' : 'mord';
    var gap = symClass === 'mrel' ? '.2778em' : symClass === 'mbin' ? '.2222em' : '';
    return { html: gap ? '<span class="mspace" style="width:' + gap + '"></span><span class="' + symClass + '">' + esc(sym) + '</span><span class="mspace" style="width:' + gap + '"></span>' : '<span class="' + symClass + '">' + esc(sym) + '</span>', end: index };
  }
  if (name === '{' || name === '}' || name === '[' || name === ']') return { html: '<span class="' + (name === '}' || name === ']' ? 'mclose' : 'mopen') + '">' + esc(name) + '</span>', end: index };
  if (/^(dim|det|arg|Hom|Ext|Spec|Tot|DF|mod)$/.test(name)) return { html: '<span class="mop">' + esc(name) + '</span>', end: index };
  return { html: '<span class="mord mathnormal">' + esc(name) + '</span>', end: index };
}

function parseVisual(source) {
  var s = String(source).replace(/\r/g, '').replace(/\\[ \t]*$/gm, '');
  var pos = 0;
  function skip() { while (/\s/.test(s[pos] || '')) pos += 1; }
  function scriptArgument() {
    skip();
    if (s[pos] === '{') { var group = readBalanced(s, pos); pos = group.end; return '<span class="script-group">' + parseVisual(group.value) + '</span>'; }
    if (s[pos] === '[') { var bracket = readBalanced(s, pos); pos = bracket.end; return '<span class="script-group"><span class="mopen">[</span>' + parseVisual(bracket.value) + '<span class="mclose">]</span></span>'; }
    return base();
  }
  function base() {
    skip(); if (pos >= s.length) return '';
    var ch = s[pos];
    if (ch === '{') { var group = readBalanced(s, pos); pos = group.end; return '<span class="mord">' + parseVisual(group.value) + '</span>'; }
    if (ch === '[') { var bracket = readBalanced(s, pos); pos = bracket.end; return '<span class="mopen">[</span>' + parseVisual(bracket.value) + '<span class="mclose">]</span>'; }
    if (ch === '\\') { var cmdMatch = s.slice(pos + 1).match(/^[A-Za-z]+|^./); var name = cmdMatch ? cmdMatch[0] : ''; var result = visualCommandAtom(name, s, pos + 1 + name.length); pos = result.end; return result.html; }
    pos += 1;
    if (/[0-9]/.test(ch)) return '<span class="mord mathnormal">' + esc(ch) + '</span>';
    if (ch === '(' || ch === '[') return '<span class="mopen">' + esc(ch) + '</span>';
    if (ch === ')' || ch === ']') return '<span class="mclose">' + esc(ch) + '</span>';
    if (',;'.indexOf(ch) >= 0) return '<span class="mpunct">' + esc(ch) + '</span><span class="mspace" style="width:.1667em"></span>';
    if ('=<>'.indexOf(ch) >= 0) return '<span class="mspace" style="width:.2778em"></span><span class="mrel">' + esc(ch) + '</span><span class="mspace" style="width:.2778em"></span>';
    if ('+-*/'.indexOf(ch) >= 0) return '<span class="mspace" style="width:.2222em"></span><span class="mbin">' + esc(ch) + '</span><span class="mspace" style="width:.2222em"></span>';
    return '<span class="mord mathnormal">' + esc(ch) + '</span>';
  }
  function sequence(stop) {
    var out = '';
    while (pos < s.length) {
      skip(); if (stop && s[pos] === stop) { pos += 1; break; } if (pos >= s.length) break;
      var item = base(); if (!item) break; var sub = null, sup = null;
      while (true) { skip(); var op = s[pos]; if (op !== '^' && op !== '_') break; pos += 1; var arg = scriptArgument(); if (op === '^') sup = arg; else sub = arg; }
      if (sub || sup) item = '<span class="scripted">' + item + '<span class="msupsub ' + (sub && sup ? 'both' : '') + '">' + (sup ? '<span class="sup">' + sup + '</span>' : '') + (sub ? '<span class="sub">' + sub + '</span>' : '') + '</span></span>';
      out += item;
    }
    return out;
  }
  return sequence('');
}

function mathHtml(tex, display) {
  var source = String(tex).trim();
  var math = '<math xmlns="http://www.w3.org/1998/Math/MathML" class="math" ' + (display ? 'display="block"' : '') + ' aria-label="' + esc(source) + '"><mrow>' + parseLatex(source) + '</mrow></math>';
  var visible = '<span class="katex-html" aria-hidden="true">' + parseVisual(source) + '</span><span class="katex-mathml">' + math + '</span>';
  return display ? '<span class="katex-display"><span class="katex">' + visible + '</span></span>' : '<span class="katex">' + visible + '</span>';
}

function renderInline(value, tokenMap) {
  var html = esc(value);
  html = html.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/__([^_]+)__/g, '<strong>$1</strong>');
  html = html.replace(/\`([^\`]+)\`/g, '<code>$1</code>');
  Object.keys(tokenMap).forEach(function (key) { html = html.split(key).join(tokenMap[key]); });
  return html;
}

function renderMarkdown(source) {
  var text = String(source).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  var tokens = {};
  var tokenIndex = 0;
  function token(html) { var key = '%%ARCHIVE_TOKEN_' + (tokenIndex++) + '%%'; tokens[key] = html; return key; }
  text = text.replace(/\`\`\`([^\n]*)\n([\s\S]*?)\`\`\`/g, function (_, lang, body) { return token('<pre><code class="language-' + esc(lang.trim()) + '">' + esc(body) + '</code></pre>'); });
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, function (_, body) { return token(mathHtml(body, true)); });
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, function (_, body) { return token(mathHtml(body, true)); });
  text = text.replace(/\\\(([^\n]*?)\\\)/g, function (_, body) { return token(mathHtml(body, false)); });
  text = text.replace(/(?<![A-Za-z0-9])\$([^$\n]+)\$/g, function (_, body) { return token(mathHtml(body, false)); });
  var lines = text.split('\n');
  var html = ''; var paragraph = []; var list = null;
  function flushParagraph() { if (paragraph.length) { html += '<p>' + renderInline(paragraph.join('\n'), tokens).replace(/\n/g, '<br>') + '</p>'; paragraph = []; } }
  function closeList() { if (!list) return; html += '</' + list + '>'; list = null; }
  lines.forEach(function (line) {
    var trimmed = line.trim();
    if (!trimmed) { flushParagraph(); closeList(); return; }
    if (/^%%ARCHIVE_TOKEN_\d+%%$/.test(trimmed) && tokens[trimmed].indexOf('display="block"') >= 0) { flushParagraph(); closeList(); html += '<div class="display-math">' + tokens[trimmed] + '</div>'; return; }
    var heading = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (heading) { flushParagraph(); closeList(); html += '<h' + heading[1].length + '>' + renderInline(heading[2], tokens) + '</h' + heading[1].length + '>'; return; }
    var bullet = trimmed.match(/^[-*]\s+(.*)$/); var ordered = trimmed.match(/^\d+[.)]\s+(.*)$/);
    if (bullet || ordered) { flushParagraph(); var wanted = bullet ? 'ul' : 'ol'; if (list !== wanted) { closeList(); list = wanted; html += '<' + list + '>'; } html += '<li>' + renderInline((bullet || ordered)[1], tokens) + '</li>'; return; }
    if (trimmed.indexOf('> ') === 0) { flushParagraph(); closeList(); html += '<blockquote>' + renderInline(trimmed.slice(2), tokens) + '</blockquote>'; return; }
    paragraph.push(line);
  });
  flushParagraph(); closeList();
  return html;
}

function renderMessage(message, index) {
  var role = message.role === 'user' ? 'user' : 'assistant';
  return '<article id="message-' + (index + 1) + '" class="message ' + role + '"><div class="message-meta"><span class="role-dot"></span><span>' + esc(message.label || (role === 'user' ? 'You' : 'ChatGPT')) + '</span><button class="copy-source" data-index="' + index + '">Copy source</button></div><div class="message-content">' + renderMarkdown(message.text) + '</div></article>';
}

function wireCopyButtons(container, messages) {
  container.querySelectorAll('.copy-source').forEach(function (button) {
    button.addEventListener('click', function () {
      var message = messages[Number(button.dataset.index)];
      if (navigator.clipboard) navigator.clipboard.writeText(message.text).then(function () { button.textContent = 'Copied'; setTimeout(function () { button.textContent = 'Copy source'; }, 1200); });
    });
  });
}

function buildSectionNav(container) {
  var nav = document.getElementById('section-nav');
  if (!nav) return;
  var prompts = container.querySelectorAll('.message.user');
  prompts.forEach(function (prompt, index) {
    var label = (prompt.querySelector('.message-content').textContent || '').replace(/\s+/g, ' ').trim() || ('Prompt ' + (index + 1));
    if (label.length > 140) label = label.slice(0, 137).trimEnd() + '…';
    var link = document.createElement('a');
    link.href = '#' + prompt.id;
    link.className = 'nav-item';
    link.setAttribute('aria-label', 'Prompt ' + (index + 1) + ': ' + label);
    link.title = label;
    link.dataset.label = label;
    nav.appendChild(link);
  });
  if (!prompts.length) { nav.hidden = true; return; }
  if ('IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(nav.querySelectorAll('.nav-item'));
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (link) { link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id); });
        }
      });
    }, { rootMargin: '-12% 0px -72% 0px', threshold: 0 });
    prompts.forEach(function (prompt) { observer.observe(prompt); });
  }
}
`;

const baseCss = String.raw`
:root { color-scheme: light; --ink:#252525; --muted:#6b6b6b; --line:#e5e5e5; --paper:#ffffff; --soft:#f7f7f8; --user:#eef6ff; --accent:#1463d6; }
* { box-sizing: border-box; }
body { margin:0; background:var(--soft); color:var(--ink); font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif; line-height:1.58; font-size:16px; }
a { color:var(--accent); }
.topbar { background:var(--paper); border-bottom:1px solid var(--line); padding:24px max(20px,calc((100vw - 980px)/2)); }
.topbar h1 { margin:0 0 5px; font-size:25px; letter-spacing:-.01em; }
.topbar p { margin:4px 0; color:var(--muted); font-size:14px; }
.topbar nav { display:flex; flex-wrap:wrap; gap:10px 18px; margin-top:13px; font-size:14px; }
.reader { width:min(900px,calc(100% - 32px)); margin:28px auto 70px; }
.section-nav { position:fixed; z-index:10; top:50%; right:24px; transform:translateY(-50%); display:flex; flex-direction:column; align-items:flex-end; gap:8px; width:24px; overflow:visible; padding:4px; }
.section-nav[hidden] { display:none; }
.nav-item { position:relative; display:block; width:18px; height:2px; border-radius:3px; background:#c5c8cc; text-decoration:none; cursor:pointer; }
.nav-item:hover { background:#252525; }
.nav-item.active { width:24px; background:#252525; }
.nav-item:hover::after { content:attr(data-label); position:absolute; right:28px; top:50%; transform:translateY(-50%); width:max-content; max-width:min(330px,55vw); padding:7px 9px; border:1px solid var(--line); border-radius:8px; background:var(--paper); box-shadow:0 3px 14px rgba(0,0,0,.12); color:var(--ink); font-size:12px; line-height:1.35; pointer-events:none; }
.message { scroll-margin-top:24px; }
.message { margin:0 0 22px; padding:20px 23px 23px; border:1px solid var(--line); border-radius:15px; background:var(--paper); box-shadow:0 1px 1px rgba(0,0,0,.025); }
.message.user { background:var(--user); border-color:#d8e9fc; }
.message-meta { display:flex; align-items:center; gap:8px; color:var(--muted); font-size:13px; font-weight:650; margin-bottom:13px; }
.role-dot { width:9px; height:9px; border-radius:50%; background:#19a36a; display:inline-block; }
.user .role-dot { background:#4d82d8; }
.copy-source { margin-left:auto; border:1px solid var(--line); border-radius:7px; background:transparent; color:var(--muted); padding:3px 8px; font-size:12px; cursor:pointer; }
.message-content { max-width:820px; }
.message-content p { margin:0 0 14px; }
.message-content p:last-child { margin-bottom:0; }
.message-content h1,.message-content h2,.message-content h3 { line-height:1.25; margin:23px 0 10px; }
.message-content h1 { font-size:24px; }.message-content h2 { font-size:20px; }.message-content h3 { font-size:17px; }
.message-content ul,.message-content ol { margin:6px 0 15px; padding-left:27px; }
.message-content li { margin:4px 0; }
.message-content blockquote { margin:12px 0; padding:2px 16px; border-left:3px solid #cfd5dd; color:#555; }
code { background:#f0f1f2; border-radius:5px; padding:1px 5px; font-size:.92em; }
pre { overflow:auto; padding:13px 15px; border-radius:9px; background:#202124; color:#f2f2f2; }
pre code { background:none; padding:0; }
.display-math { max-width:100%; overflow:auto hidden; padding:0; text-align:center; }
.katex-display { display:block; max-width:100%; margin:16px 0; overflow:auto hidden; text-align:center; }
.katex { display:inline-block; text-rendering:auto; text-indent:0; direction:ltr; unicode-bidi:isolate; font:1.21em/1.2 "KaTeX_Main","Times New Roman",serif; white-space:nowrap; }
.katex-html { display:inline-block; white-space:nowrap; }
.katex .katex-mathml { clip:rect(1px,1px,1px,1px); border:0; width:1px; height:1px; padding:0; position:absolute; overflow:hidden; }
.katex-html .mord,.katex-html .mop,.katex-html .mrel,.katex-html .mbin,.katex-html .mpunct,.katex-html .mopen,.katex-html .mclose,.katex-html .op-symbol { display:inline; }
.katex-html .mathnormal { font-family:"Times New Roman",serif; font-style:italic; }
.katex-html .mathcal { font-family:"STIX Two Math","Cambria Math","Times New Roman",serif; font-style:normal; }
.katex-html .mathbb { font-family:"STIX Two Math","Cambria Math","Times New Roman",serif; font-style:normal; font-weight:500; }
.katex-html .mathbf { font-weight:700; }
.katex-html .mop { font-family:"Times New Roman",serif; font-style:normal; margin-right:.05em; }
.katex-html .mrel,.katex-html .mbin { margin:0; }
.katex-html .mpunct { margin-left:0; }
.katex-html .mopen,.katex-html .mclose { font-size:1em; }
.katex-html .op-symbol { font-size:1.3em; vertical-align:-.08em; }
.katex-html .scripted { display:inline-block; white-space:nowrap; }
/* TeX scripts are a separate, 70%-sized vertical list.  Keeping the list's
   baseline at the base atom (rather than lifting the whole list) is the
   important detail for subscripts such as M_g and x_i. */
.katex-html .msupsub { display:inline-block; position:relative; vertical-align:baseline; margin-left:.04em; font-size:.7em; line-height:1; text-align:left; }
.katex-html .msupsub .sup,.katex-html .msupsub .sub { display:block; position:relative; height:.78em; line-height:.78em; }
.katex-html .msupsub:not(.both) .sup { top:.06em; }
.katex-html .msupsub:not(.both) .sub { top:.36em; }
.katex-html .msupsub.both { vertical-align:.27em; }
.katex-html .msupsub.both .sup { top:.63em; }
.katex-html .msupsub.both .sub { top:.36em; }
.katex-html .script-group { display:inline-block; }
.katex-html .mfrac { display:inline-block; vertical-align:middle; text-align:center; line-height:1; font-size:.95em; min-width:.35em; margin:0 .08em; }
.katex-html .frac-num { display:block; border-bottom:.055em solid currentColor; padding:0 .18em .12em; }
.katex-html .frac-den { display:block; padding:.12em .18em 0; }
.katex-html .sqrt { display:inline-flex; align-items:flex-start; vertical-align:middle; }
.katex-html .radical { font-size:1.35em; line-height:.8; margin-right:.04em; }
.katex-html .radicand { border-top:.055em solid currentColor; padding:.04em .12em 0; }
.katex-html .root-degree { font-size:.6em; margin-right:-.2em; transform:translateY(-.25em); }
.katex-html .accent-overline { display:inline-block; border-top:.055em solid currentColor; padding-top:.035em; }
.katex-html .accent-underline { display:inline-block; border-bottom:.055em solid currentColor; }
.katex-html .accent-hat::before { content:"ˆ"; position:absolute; transform:translate(-.02em,-.48em); }
.katex-html .accent-hat,.katex-html .accent-tilde,.katex-html .accent-vec { display:inline-block; position:relative; }
.katex-html .accent-tilde::before { content:"˜"; position:absolute; transform:translate(.04em,-.43em); }
.katex-html .accent-vec::before { content:"→"; position:absolute; transform:translate(.02em,-.45em); font-size:.85em; }
.katex-html .boxed { display:inline-block; border:.055em solid currentColor; padding:.08em .18em; }
.katex-html .array { display:inline-table; vertical-align:middle; text-align:left; }
.katex-html .array-row { display:table-row; }
.katex-html .array-cell { display:table-cell; padding:0 .38em; }
math.math { display:inline-block; font-size:1em; font-family:"STIX Two Math","Cambria Math","Latin Modern Math","Times New Roman",serif; vertical-align:baseline; }
.katex-display .katex { display:inline-block; }
.footer-note { color:var(--muted); font-size:13px; text-align:center; margin-top:28px; }
.builder-shell { width:min(1120px,calc(100% - 32px)); margin:24px auto 60px; }
.panel { background:var(--paper); border:1px solid var(--line); border-radius:14px; padding:18px; margin-bottom:18px; }
.panel h2 { font-size:18px; margin:0 0 12px; }
.fields { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
label { display:flex; flex-direction:column; gap:5px; color:var(--muted); font-size:13px; font-weight:600; }
input,select,textarea { width:100%; border:1px solid #cfd2d6; border-radius:8px; padding:9px 10px; font:inherit; color:var(--ink); background:#fff; }
textarea { min-height:180px; resize:vertical; font-family:ui-monospace,SFMono-Regular,Consolas,monospace; font-size:13px; line-height:1.5; }
.new-message { display:grid; grid-template-columns:145px 1fr auto; gap:10px; align-items:start; }
button.primary,button.secondary { border:0; border-radius:8px; padding:9px 13px; font:inherit; cursor:pointer; }
button.primary { background:var(--accent); color:#fff; }.secondary { background:#eef0f2; color:var(--ink); }
.message-row { display:grid; grid-template-columns:1fr auto; gap:12px; align-items:start; border-top:1px solid var(--line); padding:15px 0; }
.message-row:first-child { border-top:0; }.row-actions { display:flex; flex-wrap:wrap; gap:6px; justify-content:flex-end; }
.row-actions button { border:1px solid var(--line); background:#fff; border-radius:6px; padding:5px 8px; cursor:pointer; }
.preview { background:var(--soft); border-radius:10px; padding:10px; }
.preview .message { margin-bottom:12px; }.preview .message:last-child { margin-bottom:0; }
.hint { color:var(--muted); font-size:13px; margin:0 0 12px; }
@media (max-width:760px) { .section-nav { display:none; } }
@media (max-width:700px) { .fields,.new-message { grid-template-columns:1fr; } .message { padding:16px; border-radius:11px; } .reader,.builder-shell { width:min(100% - 18px,900px); margin-top:14px; } .topbar { padding:18px 13px; } }
@media print { body { background:#fff; } .topbar nav,.copy-source,.section-nav { display:none; } .reader { width:100%; margin:0; } .message { box-shadow:none; break-inside:avoid; } }
`;

const readerHtml = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — offline archive</title><style>${baseCss}</style></head>
<body><header class="topbar"><h1>${title}</h1><p>Offline, word-preserving reader · conversation dated ${archive.conversationDate}</p><p>Source: <a href="${sourceUrl}" target="_blank" rel="noreferrer">${sourceUrl}</a></p><nav><a href="${archive.rawRecord}">Literal text capture</a><a href="${archive.handwritten}">Handwritten note: ${archive.handwritten}</a><a href="chat_archive_builder.html">Open local archive builder</a></nav></header><aside id="section-nav" class="section-nav" aria-label="Conversation prompts"></aside><main id="conversation" class="reader"></main><p class="footer-note">This file is self-contained. Mathematical notation is rendered with native MathML; no network request is needed.</p><script>const ARCHIVE=${safeJson(archive)};${runtime}
const conversation=document.getElementById('conversation'); conversation.innerHTML=ARCHIVE.messages.map(renderMessage).join(''); wireCopyButtons(conversation,ARCHIVE.messages); buildSectionNav(conversation);
</script></body></html>`;

const builderHtml = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Local Chat Archive Builder</title><style>${baseCss}</style></head>
<body><header class="topbar"><h1>Local Chat Archive Builder</h1><p>Paste each message from ChatGPT’s Copy control, keep its role, preview it, then export a standalone offline reader.</p><nav><a href="conference_prep.html">Open conference archive</a><a href="Binder1.pdf">Open Binder1.pdf</a></nav></header>
<main class="builder-shell"><section class="panel"><h2>Archive details</h2><div class="fields"><label>Title<input id="title" value="My ChatGPT archive"></label><label>Source URL<input id="source" placeholder="https://chatgpt.com/share/..."></label><label>Handwritten document path<input id="handwritten" placeholder="Binder1.pdf"></label></div></section>
<section class="panel"><h2>Add a message</h2><p class="hint">Use the message’s Copy button in ChatGPT, paste the Markdown/LaTeX source here, and choose whether it is yours or ChatGPT’s. The source is kept as entered.</p><div class="new-message"><select id="role"><option value="user">User</option><option value="assistant">ChatGPT</option></select><textarea id="messageText" placeholder="Paste one copied message here…"></textarea><button class="primary" id="add">Add message</button></div></section>
<section class="panel"><h2>Message order</h2><div id="messageList"><p class="hint">No messages yet.</p></div></section>
<section class="panel"><h2>Preview</h2><div id="preview" class="preview"><p class="hint">Your rendered conversation will appear here.</p></div></section>
<section class="panel"><button class="primary" id="export">Download standalone HTML archive</button><span id="status" class="hint" style="margin-left:12px"></span></section></main>
<script>${runtime}
var state=[];
function rerender(){
  var list=document.getElementById('messageList');
  if(!state.length){list.innerHTML='<p class="hint">No messages yet.</p>';}
  else {list.innerHTML=state.map(function(m,i){return '<div class="message-row"><div><strong>'+(i+1)+'. '+esc(m.label)+'</strong><div class="hint">'+esc(m.text.slice(0,180))+(m.text.length>180?'…':'')+'</div></div><div class="row-actions"><button data-action="up" data-index="'+i+'">↑</button><button data-action="down" data-index="'+i+'">↓</button><button data-action="edit" data-index="'+i+'">Edit</button><button data-action="remove" data-index="'+i+'">Remove</button></div></div>';}).join('');}
  list.querySelectorAll('button').forEach(function(b){b.onclick=function(){var i=Number(b.dataset.index), action=b.dataset.action; if(action==='up'&&i>0){var t=state[i-1];state[i-1]=state[i];state[i]=t;} if(action==='down'&&i<state.length-1){var t2=state[i+1];state[i+1]=state[i];state[i]=t2;} if(action==='remove'){state.splice(i,1);} if(action==='edit'){var replacement=window.prompt('Edit the copied Markdown/LaTeX source:',state[i].text); if(replacement!==null) state[i].text=replacement;} rerender();};});
  var preview=document.getElementById('preview'); preview.innerHTML=state.length?state.map(renderMessage).join(''):'<p class="hint">Your rendered conversation will appear here.</p>'; wireCopyButtons(preview,state);
}
document.getElementById('add').onclick=function(){var text=document.getElementById('messageText').value; if(!text.trim()){document.getElementById('status').textContent='Paste a message first.';return;} var role=document.getElementById('role').value; state.push({role:role,label:role==='user'?'You':'ChatGPT',text:text}); document.getElementById('messageText').value=''; document.getElementById('status').textContent=''; rerender();};
document.getElementById('export').onclick=function(){if(!state.length){document.getElementById('status').textContent='Add at least one message first.';return;} var archive={title:document.getElementById('title').value||'ChatGPT archive',sourceUrl:document.getElementById('source').value,handwritten:document.getElementById('handwritten').value,rawRecord:'',captured:new Date().toISOString().slice(0,10),messages:state}; var heading=archive.sourceUrl?'<p>Source: <a href="'+esc(archive.sourceUrl)+'" target="_blank" rel="noreferrer">'+esc(archive.sourceUrl)+'</a></p>':''; var note=archive.handwritten?'<a href="'+esc(archive.handwritten)+'">Handwritten document</a>':''; var html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(archive.title)+'</title><style>'+${JSON.stringify(baseCss)}+'</style></head><body><header class="topbar"><h1>'+esc(archive.title)+'</h1><p>Standalone offline archive · captured '+esc(archive.captured)+'</p>'+heading+'<nav>'+note+'</nav></header><aside id="section-nav" class="section-nav" aria-label="Conversation prompts"></aside><main id="conversation" class="reader"></main><p class="footer-note">This file is self-contained. Mathematical notation is rendered with native MathML; no network request is needed.</p><script>const ARCHIVE='+JSON.stringify(archive).replace(/</g,'\\u003c')+';' + ${JSON.stringify(runtime)} + 'const conversation=document.getElementById("conversation");conversation.innerHTML=ARCHIVE.messages.map(renderMessage).join("");wireCopyButtons(conversation,ARCHIVE.messages);buildSectionNav(conversation);<\\/script></body></html>'; var blob=new Blob([html],{type:'text/html'}); var a=document.createElement('a'); a.href=URL.createObjectURL(blob); var slug=(archive.title||'chat_archive').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'')||'chat_archive'; a.download=slug+'.html'; a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);},1000); document.getElementById('status').textContent='Downloaded '+a.download;};
</script></body></html>`;

fs.writeFileSync(path.join(root, 'conference_prep.html'), readerHtml, 'utf8');
fs.writeFileSync(path.join(root, 'chat_archive_builder.html'), builderHtml, 'utf8');
console.log('Wrote conference_prep.html and chat_archive_builder.html');
console.log('Literal capture bytes preserved:', Buffer.byteLength(rawCapture, 'utf8'));
