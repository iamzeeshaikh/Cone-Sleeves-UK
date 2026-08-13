import type { BlogPost } from '../types';

/** Articles covering the physical decisions: size, board, print, finish. */
export const FUNDAMENTALS: BlogPost[] = [
  {
    slug: 'how-to-choose-the-right-cone-sleeve-size',
    title: 'How to Choose the Right Cone Sleeve Size',
    seoTitle: 'How to Choose the Right Cone Sleeve Size | Guide',
    seoDescription:
      'Measure a cone properly, allow for batch variation, and set wrap depth so a sleeve grips instead of sliding down.',
    published: '2026-06-11',
    updated: '2026-08-12',
    author: 'Cone Sleeves UK',
    topic: 'Sizing',
    standfirst:
      'Two measurements decide whether a sleeve grips or slides. Neither of them is the cone\'s stated size.',
    imageFrom: 'custom-waffle-cone-sleeves',
    imageAlt: 'A waffle cone wrapped in a printed sleeve, showing where the wrap sits below the rim',
    related: [
      'preparing-artwork-for-custom-cone-sleeves',
      'paperboard-options-for-printed-cone-sleeves',
      'cone-sleeves-for-ice-cream-shops-and-dessert-brands',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Why cone size is not a number you can order from',
        body: [
          'Cones are sold by name rather than by dimension. A supplier will offer a "standard waffle cone" and a "large waffle cone", and two suppliers using those words will send you cones that differ by several millimetres.',
          'For most purposes that does not matter. For a sleeve it matters a great deal, because a wrap cut a few millimetres too wide slides down the taper the moment the cone warms up.',
          'This is the single most common reason a first order of cone sleeves gets replaced, and it is entirely avoidable.',
        ],
      },
      {
        kind: 'steps',
        heading: 'The two measurements that set the die',
        intro:
          'You need a cone, a ruler and about a minute. Do this with a cone from your current stock, not a photograph from a catalogue.',
        steps: [
          {
            title: 'Measure the top diameter',
            body: 'Across the open rim, outside edge to outside edge, at the widest point. Cones are rarely perfectly round, so take the widest reading rather than an average.',
          },
          {
            title: 'Measure the slant height',
            body: 'From the rim, down the outside of the cone, to the point where you want the sleeve to stop. This is along the sloping side, not straight down through the middle — that distinction matters and is the step most often got wrong.',
          },
          {
            title: 'Repeat on two more cones',
            body: 'Take three cones from the same box and measure all three. If they differ by more than a millimetre or two, that variation has to be built into the die.',
          },
          {
            title: 'Decide how much wafer stays visible',
            body: 'Most parlours leave two to three centimetres of cone showing below the rim, so the wafer is part of what the customer sees. Covering to the rim protects better and hides the product.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Slant height, not vertical height',
        body: [
          'A cone is a triangle in profile. The distance from the rim down the sloping side is longer than the vertical drop from the rim to the same point, and it is the slant measurement that determines how much board wraps around the cone.',
          'Using the vertical height produces a sleeve that is consistently too short, usually by enough to be obvious but not enough for anyone to work out why.',
          'If you are unsure, lay the cone on its side against a ruler and measure along the edge you can see. That is the slant.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What changes the answer',
        intro:
          'Several things shift the ideal size away from a straight measurement of the cone:',
        items: [
          'Batch variation — baked cones are not dimensionally consistent, so a die cut to the tightest possible fit will fail on a slightly larger delivery.',
          'Scoop weight — a heavier serve pulls the cone down through the customer\'s grip, which argues for a sleeve that sits a little higher.',
          'Service temperature — a warm shop softens wafer cones slightly, changing how firmly a sleeve holds.',
          'Whether the cone is pre-sleeved — a sleeve fitted before filling can be a fraction tighter than one pushed on afterwards.',
          'Whether you also use a cone holder, since the holder grips the same taper the sleeve sits on.',
        ],
        outro:
          'A small tolerance built into the die covers most of this. Too much tolerance and the sleeve spins; too little and a normal batch variation makes the whole order unusable.',
        link: {
          href: '/ice-cream-cone-holder/',
          anchor: 'cone holders that grip the same taper',
          sentence:
            'If you use {link}, tell us at the same time so the two are cut to work together.',
        },
      },
      {
        kind: 'prose',
        heading: 'Sizing for more than one cone',
        body: [
          'Sites selling both waffle and cake cones almost always need two dies. A cake cone tapers more sharply and has a narrower rim, so a sleeve cut for a waffle cone sits loose on it and rotates as the customer eats.',
          'That is not a compromise worth making. The artwork can be identical across both, which keeps the design cost to one job, and only the die changes.',
          'Children\'s cones are a third case again, and scaling the adult artwork down rarely works — type becomes unreadable and fine detail drops below what the press holds on board.',
        ],
        link: {
          href: '/custom-child-size-waffle-cone-sleeves/',
          anchor: 'why children\'s sleeves need their own layout',
          sentence: 'We cover {link} separately, because it is not a scaling exercise.',
        },
      },
      {
        kind: 'compare',
        heading: 'Short band against deep wrap',
        intro:
          'Depth is a choice rather than a measurement, and it changes the cost as well as the performance.',
        columns: ['Short band', 'Deep wrap'],
        rows: [
          ['Cone visible', 'Most of it', 'Very little'],
          ['Drip control', 'Catches the first drips only', 'Catches melt running down the side'],
          ['Board used', 'Less, so a lower unit cost', 'More'],
          ['Suits', 'Indoor counters, artisan presentation', 'Hot days, children, mobile units'],
          ['Grip', 'Adequate', 'Better, particularly with small hands'],
        ],
        outro:
          'Plenty of seaside sites run a deep wrap through the summer and a short band the rest of the year, from one artwork file and two dies.',
      },
      {
        kind: 'prose',
        heading: 'The simplest way to get this right',
        body: [
          'Post us three cones. It removes every measurement question at once, including the ones you would not have thought to ask about, such as how much the rim varies within a single box.',
          'We cut the die from the physical cone, allow a working tolerance, and send a flat sample you can wrap around a real cone before anything is printed.',
          'That last step is worth taking seriously. Changes at the flat-sample stage cost nothing; changes after a run has printed cost the run.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Things worth measuring at the same time',
        intro:
          'While you have a cone and a ruler out, these save a second round of questions later:',
        items: [
          'The rim thickness, which affects how firmly a sleeve grips near the top.',
          'The overall cone height, useful if you are also considering a holder or a carrier.',
          'The weight of a typical filled cone, which informs the board recommendation.',
          'How much a cone varies within one box, measured across three or four samples.',
          'Whether your cones sit in a stand before filling, which changes where the wrap can start.',
        ],
        outro:
          'None of these are essential, and all of them make the first quote more accurate than it would otherwise be.',
      },
    ],
    faqs: [
      {
        q: 'What if we change cone supplier later?',
        a: 'Send a cone from the new supplier and we will check it against the existing die. Small differences are often inside the tolerance already built in; a genuinely different shape needs a new die, which is worth knowing before you commit to the new cone rather than after.',
      },
      {
        q: 'Can one sleeve cover waffle and sugar cones?',
        a: 'Rarely. A sugar cone is narrower at the rim and tapers more steeply, so a waffle sleeve sits loose and rotates. Two dies from one artwork file is the normal answer.',
      },
      {
        q: 'How much tolerance should a sleeve have?',
        a: 'Enough to absorb normal batch variation in your cones and no more. That is why we prefer to measure three cones from the same box rather than one — the spread between them tells us what the tolerance needs to be.',
      },
    ],
  },

  {
    slug: 'paperboard-options-for-printed-cone-sleeves',
    title: 'Paperboard Options for Printed Cone Sleeves',
    seoTitle: 'Paperboard Options for Printed Cone Sleeves | Guide',
    seoDescription:
      'Coated white, kraft and greaseproof-lined board compared for cone sleeves, with what each costs you in print and grip.',
    published: '2026-06-25',
    author: 'Cone Sleeves UK',
    topic: 'Materials',
    standfirst:
      'Board choice decides how a sleeve prints, how it feels, how long it lasts and what you can honestly say about recycling it.',
    imageFrom: 'custom-cardboard-cone-sleeves',
    imageAlt: 'Cone sleeves in different board weights stacked flat before assembly',
    related: [
      'how-to-choose-the-right-cone-sleeve-size',
      'matte-and-gloss-finishes-for-cone-sleeves',
      'food-safe-considerations-for-cone-sleeve-packaging',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Three decisions hiding inside one word',
        body: [
          'When a supplier says "board", they are actually describing three separate things: what the board is made from, how heavy it is, and what has been done to its surface.',
          'Those three interact, and changing one usually changes what the others need to be. A heavier board on an unlaminated surface behaves quite differently from a lighter board with a coating.',
          'Getting them right is mostly about being honest with yourself about how your product is actually served.',
        ],
      },
      {
        kind: 'compare',
        heading: 'The three board families',
        intro: 'Almost every cone sleeve is one of these.',
        columns: ['Coated white board', 'Uncoated kraft'],
        rows: [
          ['Colour accuracy', 'High — inks land on a neutral white base', 'Colours shift warm and dark'],
          ['Print detail', 'Holds fine type and small marks cleanly', 'Softer, more absorbent'],
          ['Look', 'Clean, retail, deliberate', 'Plain, unmanufactured, independent'],
          ['Cost', 'Standard', 'Similar board cost, often lower ink cost'],
          ['Grease resistance', 'Needs a lining or coating added', 'Also needs one added'],
        ],
        outro:
          'The third family is greaseproof-lined board, which is either of the above with a barrier bonded to the inner face. It costs more and it is not optional for savoury cones.',
      },
      {
        kind: 'prose',
        heading: 'Weight, and why heavier is not automatically better',
        body: [
          'A heavier board holds its shape under a large scoop, survives being pre-assembled and stacked, and feels more substantial in the hand.',
          'It also costs more per unit, takes more storage space per thousand, and is firmer for staff to roll during a rush. On a high-volume kiosk turning over hundreds of cones an hour, that last point is a real operational cost.',
          'The useful question is how long the cone sits in a customer\'s hand. Two minutes at a counter is well within what a light board handles. Fifteen minutes on a warm promenade is not.',
        ],
        link: {
          href: '/custom-paper-cone-sleeves/',
          anchor: 'the lightest option and where it works',
          sentence: 'For quick counter service, {link} usually outperform a heavier specification on cost without failing.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Signs your board is too light',
        intro: 'These show up within days of a first order rather than months:',
        items: [
          'A visible crease where the customer\'s thumb sits, appearing before they finish the cone.',
          'Sleeves going translucent along the bottom edge where melt collects.',
          'Pre-assembled stock flattening in the stack before it is used.',
          'Staff reporting that sleeves tear when pushed onto a cone.',
          'The wrap gaping at the seam after a few minutes in a warm hand.',
        ],
        outro:
          'Any two of these together is a board problem rather than a design one, and no amount of lamination fixes it.',
      },
      {
        kind: 'prose',
        heading: 'Grease resistance is a separate axis',
        body: [
          'It is tempting to assume a heavier board resists grease better. It does not, in any meaningful way — it simply has more material to absorb before the staining shows.',
          'Genuine grease resistance comes from a liner or a coating on the inner face, and it can be specified on any board weight. For ice cream it is usually unnecessary. For chips, fried chicken or anything from a fryer it is the whole specification.',
          'If your cone sleeve holds savoury food, treat this as the first decision rather than an upgrade to consider later.',
        ],
        link: {
          href: '/custom-chicken-cone-sleeves/',
          anchor: 'sleeves specified for fried savoury cones',
          sentence: 'The difference is set out on {link}, where the board is the entire product.',
        },
      },
      {
        kind: 'prose',
        heading: 'What board choice does to recycling claims',
        body: [
          'Uncoated, unlaminated board is the simplest thing to put into an ordinary paper stream. Every layer added on top — a lamination film, a grease barrier, a metallic finish — makes it more of a mixed material.',
          'That is a genuine trade rather than a marketing point. An unlaminated sleeve is easier to recycle and less able to cope with a melting scoop on a hot day.',
          'Whichever way you go, the claim printed on the sleeve should describe what a customer can actually do where they throw it away, not what is theoretically possible.',
        ],
        link: {
          href: '/custom-eco-friendly-cone-sleeves/',
          anchor: 'what an unlaminated specification gives up',
          sentence: 'We set out both sides of that trade on {link} rather than only the flattering half.',
        },
      },
      {
        kind: 'prose',
        heading: 'A practical way to choose',
        body: [
          'Start with the food. Savoury and fried narrows you to a lined board immediately. Ice cream leaves the choice open.',
          'Then take the longest time a customer holds the product before finishing it, and specify for that rather than for the average. Packaging is judged by its worst outcome, not its typical one.',
          'Finally, decide the surface. If colour accuracy matters, that means white board. If the plain look is the point, kraft, and design around the colour shift rather than fighting it.',
        ],
      },
      {
        kind: 'compare',
        heading: 'Storage and handling, which rarely appear on a spec sheet',
        intro:
          'Two boards that perform identically in service can behave quite differently behind the counter.',
        columns: ['Lighter board', 'Heavier board'],
        rows: [
          ['Space per thousand', 'Compact — matters in a kiosk or a van', 'Noticeably more shelf space'],
          ['Assembly speed', 'Rolls and tucks quickly', 'Firmer; staff notice it on the first box'],
          ['Pre-assembling for a rush', 'Flattens in the stack', 'Holds shape once formed'],
          ['Carriage cost', 'Lower weight per thousand', 'Higher'],
          ['Feel in the hand', 'Light, disposable', 'Substantial, considered'],
        ],
        outro:
          'For a site with a genuinely small back-of-house, storage can decide the board on its own, whatever the performance argument says.',
      },
      {
        kind: 'steps',
        heading: 'Settling the board in four questions',
        intro:
          'Working through these in order gets to a specification without a long conversation.',
        steps: [
          {
            title: 'Is the food fried or oily?',
            body: 'If it is, you need a grease-resistant lining and the rest of the choices follow from that. If not, the field stays open.',
          },
          {
            title: 'How long is it held before it is finished?',
            body: 'Two minutes at a counter tolerates a light board. Fifteen on a warm promenade does not.',
          },
          {
            title: 'Does the colour have to be accurate?',
            body: 'If a brand colour must match, that means white board. If the plain look is the point, kraft, designed around the shift rather than against it.',
          },
          {
            title: 'What can your customers recycle?',
            body: 'Answer that before adding lamination, because it is the layer that most often takes the sleeve out of a paper stream.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does a heavier board resist grease better?',
        a: 'Only in the sense that it has more material to soak before staining shows. Real grease resistance comes from a liner or coating on the inner face, and that can be specified on any weight.',
      },
      {
        q: 'Is kraft board more environmentally friendly than white?',
        a: 'It skips a bleaching stage, which is a genuine difference. It does not change whether the finished sleeve is recycled, which depends on lamination, coatings and the collection available where it is thrown away.',
      },
      {
        q: 'Can we change board without changing the die?',
        a: 'Usually yes, within limits — a much heavier board can behave differently on the same die. If you are considering a change at reorder, ask us to check rather than assuming the tool transfers directly.',
      },
    ],
  },

  {
    slug: 'how-cone-sleeve-printing-works',
    title: 'How Cone Sleeve Printing Works',
    seoTitle: 'How Cone Sleeve Printing Works | Litho, Digital & Spot',
    seoDescription:
      'How cone sleeves are actually printed, why run length decides the method, and what that means for cost and colour.',
    published: '2026-07-02',
    author: 'Cone Sleeves UK',
    topic: 'Printing',
    standfirst:
      'The print method is chosen by your run length, and it decides your colour accuracy, your setup cost and how many designs you can have.',
    imageFrom: 'custom-two-colour-cone-sleeves',
    imageAlt: 'Printed cone sleeve flats showing two spot colours on white board',
    related: [
      'preparing-artwork-for-custom-cone-sleeves',
      'paperboard-options-for-printed-cone-sleeves',
      'matte-and-gloss-finishes-for-cone-sleeves',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Printing happens flat, before anything is a cone',
        body: [
          'A cone sleeve is printed as a flat shape on a large sheet alongside many others, then cut out by a die and shipped flat. The cone shape only appears when a member of your staff rolls it.',
          'That is worth understanding because it explains almost everything else: why artwork has to be built on an arc, why the print quality depends on the board surface rather than the finished shape, and why changing the size means changing a physical tool.',
        ],
      },
      {
        kind: 'compare',
        heading: 'The two methods you will be quoted',
        intro:
          'Almost every cone sleeve job runs on one of these, and the deciding factor is quantity.',
        columns: ['Digital', 'Conventional (litho or flexo)'],
        rows: [
          ['Setup cost', 'Very low — no plates', 'Higher — plates per colour'],
          ['Cost per unit at low volume', 'Lower', 'Higher'],
          ['Cost per unit at high volume', 'Higher', 'Much lower'],
          ['Several designs in one run', 'Straightforward, low extra cost', 'Each design carries its own setup'],
          ['Spot colour matching', 'Simulated from process inks', 'True spot inks available'],
          ['Typical use', 'Short runs, seasonal sets, first orders', 'Ongoing supply at volume'],
        ],
        outro:
          'There is a crossover point where conventional printing becomes cheaper, and it moves with the number of colours and designs. It is always worth asking for both prices rather than assuming.',
      },
      {
        kind: 'prose',
        heading: 'Spot colours against process colours',
        body: [
          'Process printing builds every colour from four inks: cyan, magenta, yellow and black. It can reproduce a photograph, and it approximates any specific colour rather than matching it.',
          'A spot colour is a single ink mixed to a specific recipe before it goes on the press. It matches a brand colour closely and holds that match across a long run, where a process build drifts.',
          'For a logo and a background colour — which is most cone sleeve artwork — two spot inks usually cost less than four process inks and look better.',
        ],
        link: {
          href: '/custom-two-colour-cone-sleeves/',
          anchor: 'getting five tones out of two inks',
          sentence: 'Spot printing is more flexible than it sounds, as {link} explains.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What actually drives the price of a print job',
        intro:
          'Cost is less about how much of the sleeve is covered than most people expect:',
        items: [
          'The number of inks, because each one is a separate plate or a separate pass.',
          'The run length, which decides whether setup cost is spread thinly or thickly.',
          'The number of distinct designs, on conventional printing especially.',
          'Whether a lamination or coating step is added after printing.',
          'Whether the die already exists or has to be made.',
        ],
        outro:
          'Coverage barely appears on that list. A one-colour pattern across the whole sleeve prices much like a one-colour logo in the corner.',
      },
      {
        kind: 'steps',
        heading: 'What happens between your order and your delivery',
        intro: 'A typical job runs through five stages.',
        steps: [
          {
            title: 'The die is made or retrieved',
            body: 'A new size needs a new physical cutting tool. A reorder uses the existing one, which is why repeat orders are quicker.',
          },
          {
            title: 'Artwork is placed on the die line',
            body: 'Your file is positioned on a template showing the cut, the fold, the overlap and the safe area.',
          },
          {
            title: 'A digital proof is issued',
            body: 'This shows the layout on the die. It confirms position and content rather than exact colour, which a screen cannot show reliably.',
          },
          {
            title: 'The job prints and is finished',
            body: 'Printing, then any lamination, then die cutting. Each is a separate pass through a machine.',
          },
          {
            title: 'Sleeves are packed flat and dispatched',
            body: 'Flat packing protects the printed face and keeps the carriage cost down.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why colour on your screen is not colour on board',
        body: [
          'A screen emits light and paper reflects it, so the two can never match exactly. A colour that looks vivid backlit will always look more muted printed.',
          'On top of that, board absorbs ink to different degrees, and an uncoated or kraft surface changes a colour further still.',
          'If a colour genuinely matters — a brand colour customers would notice being wrong — the answer is a Pantone reference and, where the run justifies it, a printed sample. Approving colour from a screen is the most common route to disappointment.',
        ],
        link: {
          href: '/artwork-guidelines/',
          anchor: 'how to specify colour in a supplied file',
          sentence: 'Our {link} sets out how to name colours so they arrive as intended.',
        },
      },
      {
        kind: 'prose',
        heading: 'What this means for your first order',
        body: [
          'If you are ordering cone sleeves for the first time, digital printing almost certainly makes sense. It avoids plate costs, it makes a modest quantity viable, and it lets you find out how many you actually use before committing to a long run.',
          'Once your usage is known and stable, ask for a conventional price against your annual volume. The saving at that point is often substantial, and the die you already own carries over.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Where the cost actually sits on a small order',
        body: [
          'On a first order of a few thousand sleeves, the printing itself is rarely the largest line. Setup, tooling and the minimum quantity the press will accept usually dominate.',
          'That is why the price per unit falls so sharply between two thousand and twenty thousand: the fixed costs are being spread across ten times as many sleeves rather than the ink getting cheaper.',
          'It is also why asking for a price at two quantities is more useful than asking for one. The shape of that curve tells you where your own reorder point should sit.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to send so a quote comes back accurate',
        intro:
          'Every one of these changes the price, and leaving one out means the quote gets revised later:',
        items: [
          'The quantity, and your realistic annual usage as well as the first order.',
          'The number of distinct designs, and how the quantity splits between them.',
          'Whether the die already exists or the size is new.',
          'The number of colours, and whether any must match a Pantone reference exactly.',
          'Whether a lamination or coating is wanted after printing.',
        ],
        outro:
          'A quote produced without those is an estimate with a decimal point rather than a price you can plan against.',
      },
    ],
    faqs: [
      {
        q: 'Which print method will we be quoted?',
        a: 'It follows from your quantity, colour count and number of designs. For a first order it is usually digital; for an established annual volume a conventional press is often much cheaper. Ask for both and compare.',
      },
      {
        q: 'Does full coverage cost more than a small logo?',
        a: 'Less than people expect. Price follows the number of inks and the run length rather than how much of the surface they cover, so a one-colour pattern prices much like a one-colour logo.',
      },
      {
        q: 'Can we get a printed sample before the full run?',
        a: 'Sometimes, depending on the print method quoted for your job. Digital jobs make samples far easier than conventional ones. Ask at quote stage and we will tell you what is available and what it costs.',
      },
    ],
  },

  {
    slug: 'matte-and-gloss-finishes-for-cone-sleeves',
    title: 'Comparing Matt and Gloss Finishes for Cone Sleeves',
    seoTitle: 'Matt vs Gloss Cone Sleeve Finishes | Which to Choose',
    seoDescription:
      'How matt, gloss and unlaminated finishes behave on cone sleeves in real service — handling marks, grip and cost.',
    published: '2026-07-16',
    author: 'Cone Sleeves UK',
    topic: 'Finishing',
    standfirst:
      'Finish is the decision most often made on a screen and judged in a customer\'s hand. Those are different tests.',
    imageFrom: 'custom-black-cone-sleeve',
    imageAlt: 'Matt laminated black cone sleeve showing how the surface handles fingerprints',
    related: [
      'paperboard-options-for-printed-cone-sleeves',
      'how-cone-sleeve-printing-works',
      'reducing-packaging-waste-in-dessert-businesses',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'What lamination actually is',
        body: [
          'Lamination is a thin film bonded to the printed surface after the ink is dry. It is not a varnish or a coating applied by the press — it is a separate material and a separate production step.',
          'That matters for two reasons. It adds cost and lead time, and it changes the sleeve from a single material into a laminated one, which affects how it should be disposed of.',
          'It also does something genuinely useful: it protects the print from the scuffing that handling causes within minutes on an unprotected surface.',
        ],
      },
      {
        kind: 'compare',
        heading: 'The three options side by side',
        intro: 'Judged on how they behave in service rather than how they look in a proof.',
        columns: ['Matt lamination', 'Gloss lamination'],
        rows: [
          ['Handling marks', 'Hides fingerprints and scuffs well', 'Shows every fingerprint clearly'],
          ['Colour', 'Slightly deeper, more subdued', 'More saturated and vivid'],
          ['Grip', 'Better — a slightly softer surface', 'Slippery, especially with damp hands'],
          ['Photographs', 'No hotspots under lighting', 'Reflects and can flare'],
          ['Reads as', 'Considered, premium', 'Bright, energetic, mass market'],
        ],
        outro:
          'The third option is no lamination at all, which costs least, recycles most easily and scuffs fastest.',
      },
      {
        kind: 'prose',
        heading: 'Grip is the underrated factor',
        body: [
          'A cone sleeve is held by someone whose hand may be damp from condensation or from the melting product itself. Gloss lamination is noticeably slippery in that state.',
          'Matt is not dramatically better, but it is better, and on a warm day with a heavy scoop that difference shows up as fewer dropped cones.',
          'Unlaminated board grips most securely of all, right up until it absorbs enough moisture to go soft, at which point it grips nothing.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'When to choose matt',
        intro: 'Matt earns its cost in specific situations rather than universally:',
        items: [
          'Dark artwork, especially solid blacks, where gloss makes every fingerprint visible.',
          'Products that photograph heavily, since gloss creates hotspots under phone flash.',
          'Sites that pre-assemble sleeves and stack them, where handling happens before the customer sees it.',
          'Premium positioning, where the tactile difference is part of what you are charging for.',
          'Anywhere hands are likely to be damp, which on a dessert counter is most of the time.',
        ],
        outro:
          'Almost every solid-colour sleeve we quote ends up matt for the first reason on that list.',
      },
      {
        kind: 'bullets',
        heading: 'When gloss is the better answer',
        intro: 'Gloss is not simply the cheaper cousin — it does some things better:',
        items: [
          'Bright, saturated artwork where the extra vividness is the point.',
          'Photographic images, which look flatter under matt.',
          'Packaging that has to stand out on a busy display or a market stall.',
          'Products aimed at children, where energy matters more than restraint.',
        ],
        outro:
          'On pale artwork the fingerprint problem largely disappears, which removes gloss\'s main disadvantage.',
      },
      {
        kind: 'prose',
        heading: 'The case for no lamination at all',
        body: [
          'An unlaminated sleeve costs less, ships sooner because it skips a production step, and is far easier to put into an ordinary paper recycling stream.',
          'What it gives up is durability. Ink on an unprotected board scuffs along the seam during assembly, and melt reaching the surface softens it quickly.',
          'For a business selling cones that are eaten within two or three minutes indoors, that is often an acceptable trade. For a seafront kiosk in August it is not, and pretending otherwise leads to a summer of complaints.',
        ],
        link: {
          href: '/custom-eco-friendly-cone-sleeves/',
          anchor: 'the unlaminated specification and its limits',
          sentence: 'We set out {link} honestly, including where it underperforms.',
        },
      },
      {
        kind: 'prose',
        heading: 'How to actually decide',
        body: [
          'Ask for samples in both finishes with your own artwork if the run justifies it, then do two things with them. Handle one for a minute with slightly damp hands, and photograph the other under the lighting your customers will use.',
          'Those two tests answer the question faster than any amount of comparing swatches, because they replicate what the sleeve is genuinely for.',
          'If samples are not available for your print method, choose matt for dark artwork and gloss for bright artwork, and you will be right most of the time.',
        ],
        link: {
          href: '/cone-sleeves/',
          anchor: 'the sleeve range and the finishes available on each',
          sentence: 'Finish options vary a little by board, which is noted across {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'What lamination costs you beyond the price',
        body: [
          'Two costs are easy to miss when comparing a laminated quote against an unlaminated one. The first is lead time: lamination is a separate pass through a separate machine, and on a busy schedule that can add days rather than hours.',
          'The second is disposal. An unlaminated board is a single material and goes into an ordinary paper stream in most areas. Bond a film to it and it becomes a mixed material, which needs a facility able to separate the two.',
          'Neither is a reason to avoid lamination on a product that genuinely needs it. Both are reasons to be deliberate about it rather than treating it as a default upgrade on every job.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Questions worth asking before you decide',
        intro:
          'Five minutes on these usually settles the finish without needing a sample:',
        items: [
          'How long is the product in a hand? Two minutes indoors is a different test from fifteen on a promenade.',
          'How dark is the artwork? Solid colours show handling marks that pale designs hide completely.',
          'Are sleeves assembled to order or in advance? Pre-assembled stock is handled far more before a customer sees it.',
          'Does the packaging get photographed? Gloss creates hotspots under a phone flash that matt does not.',
          'What can your customers actually recycle? That decides whether the unlaminated option is worth its trade-off.',
        ],
        outro:
          'Where two of these point the same way, the answer is usually clear without needing a printed sample at all.',
      },
      {
        kind: 'steps',
        heading: 'Testing a finish properly',
        intro:
          'If samples are available for your job, these four tests answer the question in about five minutes.',
        steps: [
          {
            title: 'Handle one with slightly damp hands',
            body: 'This is how the sleeve is actually held. Gloss is noticeably more slippery once condensation is involved.',
          },
          {
            title: 'Rub a thumb firmly across the print',
            body: 'Scuffing shows immediately on unlaminated board and barely at all on a laminated one.',
          },
          {
            title: 'Photograph it under your own lighting',
            body: 'Gloss creates hotspots under a phone flash that are invisible under daylight.',
          },
          {
            title: 'Leave one under a melting scoop',
            body: 'Ten minutes tells you more about how the finish copes with moisture than any specification sheet does.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does lamination make a sleeve waterproof?',
        a: 'No. It resists moisture on the laminated face and slows absorption considerably, but the cut edges are still exposed board. Nothing in this range is designed to hold standing liquid.',
      },
      {
        q: 'Is soft-touch lamination worth considering?',
        a: 'It feels excellent and marks more readily than standard matt, so it suits packaging assembled to order rather than pre-assembled and stacked. It also costs more, which is easier to justify on a premium product.',
      },
      {
        q: 'Does lamination add to the lead time?',
        a: 'It is a separate production step after printing, so yes, usually. If your date is tight, ask us whether an unlaminated version could be produced sooner before assuming lamination is fixed.',
      },
    ],
  },
];
