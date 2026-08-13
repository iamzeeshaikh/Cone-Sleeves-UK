import type { Product } from '../types';

/**
 * The cone sleeve range. Each record picks its own section mix: shape-led
 * products lead with geometry, material-led products lead with board,
 * design-led products lead with print.
 */
export const CONE_SLEEVES: Product[] = [
  {
    slug: 'custom-ice-cream-cone-sleeves',
    name: 'Custom Printed Ice Cream Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Custom Ice Cream Cone Sleeves | Printed UK Supplier',
    seoDescription:
      'Full-colour printed ice cream cone sleeves cut to your cone. Board, finish and artwork set for UK parlours and dessert bars.',
    h1: 'Custom Printed Ice Cream Cone Sleeves',
    cardBlurb: 'Full-colour printed sleeves cut to the cone you already serve.',
    enquiryLabel: 'printed ice cream cone sleeves',
    intro: [
      'The sleeve is the last thing you hand over and the first thing a customer photographs. On a busy seafront or a Saturday high street, a hundred printed sleeves an hour do more visible advertising than most independents pay for anywhere else.',
      'These are full-colour sleeves cut to your own cone shape. Nothing here is a stock size — the die is set from the cone you already buy, so the wrap finishes exactly where you want it against the scoop.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'What a Printed Sleeve Has to Survive',
        body: [
          'A cone sleeve is gripped hard, twisted while the customer eats around the scoop, and sits in a warm hand for ten minutes. Ink on an unprotected surface scuffs along the seam long before the ice cream is finished.',
          'Lamination is the usual answer on saturated designs, and it also stops the board going limp when a drip runs down the outside. Lighter designs on kraft can go unlaminated and often look better for it.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Cone types', 'Waffle, sugar, cake and rolled — sized individually'],
          ['Board', 'Coated white board, kraft, or greaseproof-lined'],
          ['Print', 'Full-colour CMYK, with spot colours where a brand needs an exact match'],
          ['Printed faces', 'Outside as standard; inside available where the inner wrap shows'],
          ['Finish', 'Matt lamination, gloss lamination or unlaminated'],
          ['Supply', 'Die-cut flat, assembled at the counter'],
          ['Sizing', 'From a sample cone or from measured diameter and slant height'],
        ],
        note:
          'Minimum quantity, lead time and unit price depend on board, print method and run length, and are confirmed in writing on your quote.',
      },
      {
        kind: 'bullets',
        heading: 'Design Points That Matter on a Cone Shape',
        intro:
          'A cone sleeve is a curved surface cut from a flat arc, which catches out designs made for a rectangle:',
        items: [
          'Type set horizontally on the flat will curve upwards once wrapped. Set it on the arc instead.',
          'Keep the wordmark away from the overlap — that area is hidden on every assembled sleeve.',
          'The narrow end has very little width. Anything placed there is effectively invisible.',
          'Full-bleed colour needs artwork extended past the die line so no white edge shows at the cut.',
          'A single logo repeated two or three times around the wrap reads from any angle in a queue.',
        ],
        link: {
          href: '/blog/preparing-artwork-for-custom-cone-sleeves/',
          anchor: 'setting up artwork on a cone-shaped die line',
          sentence:
            'Our note on {link} covers the arc geometry with a worked example.',
        },
      },
      {
        kind: 'steps',
        heading: 'From Enquiry to Delivered Stock',
        steps: [
          {
            title: 'Send the Cone and the Quantity',
            body: 'Two or three sample cones, or the top diameter and slant height, plus the run length you have in mind.',
          },
          {
            title: 'Agree the Specification',
            body: 'Board, finish, printed faces and whether you need a printed sample. We confirm lead time and minimum quantity here.',
          },
          {
            title: 'Supply Artwork on the Die Line',
            body: 'We send a template cut to your cone. Artwork is placed on it rather than resized to fit afterwards.',
          },
          {
            title: 'Approve the Proof, Then Print',
            body: 'A digital proof shows the layout on the die. Once signed off, the run is scheduled.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you print a sleeve to match cones I already have in stock?',
        a: 'That is the normal route. Send two or three of the cones you use and the die is cut to their shape, so the new sleeves work with the stock already in your freezer rather than requiring you to change supplier.',
      },
      {
        q: 'How far up the cone should a sleeve reach?',
        a: 'Most parlours stop the sleeve two to three centimetres below the rim so the wafer is visible at the top. Covering to the rim protects better but hides the cone, which is part of what customers are buying.',
      },
      {
        q: 'Does a printed sleeve make the cone harder to hold?',
        a: 'The opposite, usually. The extra layer gives a drier grip and keeps warm fingers off the wafer, which is the main reason parlours introduce them in the first place.',
      },
      {
        q: 'How long does it take staff to learn to assemble them?',
        a: 'Most people are fluent after twenty or thirty sleeves. They arrive flat, and the motion is a roll and a tuck. It is worth having whoever works the counter try a box before a busy weekend rather than during one.',
      },
      {
        q: 'Can the sleeve carry a QR code?',
        a: 'Yes, provided it sits where a right-handed grip does not cover it and it is printed large enough to scan from a phone at arm\'s length. Test a printed sample rather than a screen mock-up.',
      },
      {
        q: 'Do you supply a die template for our designer?',
        a: 'Yes, as an editable vector file with the cut line, the fold, the overlap and the safe area on separate layers. Ask for it before design work starts rather than after.',
      },
      {
        q: 'What happens if our artwork is low resolution?',
        a: 'We will tell you before printing rather than after. Anything under 300 dpi at final size shows softness on board, and a logo pulled from a website is usually well below that.',
      },
      {
        q: 'Can we order two designs in one run?',
        a: 'On digital printing, yes, and the cost depends on how the quantity splits between them. On a longer conventional run each design carries its own setup, which changes the arithmetic.',
      },
      {
        q: 'Do sleeves need to be stored in any particular way?',
        a: 'Flat, dry and off the floor. Board takes up moisture from a damp store room, and a pallet left against an outside wall can soften before it reaches the counter.',
      },
      {
        q: 'Will the printed sleeve mark a customer\'s hands?',
        a: 'Not on a properly cured print. If ink transfers, that is a fault worth reporting immediately with the batch details so it can be traced to a specific run.',
      },
    ],
    related: [
      'custom-waffle-cone-sleeves',
      'custom-ice-cream-cone-wrappers',
      'custom-two-colour-cone-sleeves',
      'custom-eco-friendly-cone-sleeves',
    ],
  },

  {
    slug: 'custom-ice-cream-cone-wrappers',
    name: 'Custom Ice Cream Cone Wrappers',
    category: 'cone-sleeves',
    seoTitle: 'Ice Cream Cone Wrappers UK | Custom Printed Wraps',
    seoDescription:
      'Cone wrappers covering more of the wafer than a short sleeve. Plain or printed, sized to the cones your UK site already uses.',
    h1: 'Ice Cream Cone Wrappers',
    cardBlurb: 'Deeper wraps covering most of the wafer, plain or lightly printed.',
    enquiryLabel: 'ice cream cone wrappers',
    intro: [
      '"Wrapper" and "sleeve" get used for the same thing, but in practice buyers asking for a wrapper usually want more coverage — a wrap that takes in most of the wafer rather than a short band near the top.',
      'That depth suits vendors handing cones to children, mobile units where cones travel a few steps before they are eaten, and anywhere melt runs down the outside faster than customers can keep up.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Wrapper Depth Against Short Sleeve',
        intro: 'The same die, cut to two different depths, behaves very differently.',
        columns: ['Full wrapper', 'Short sleeve'],
        rows: [
          ['Coverage', 'Most of the wafer, down towards the point', 'A band near the rim only'],
          ['Drip control', 'Catches melt running down the side', 'Catches the first drips at the top'],
          ['Cone visible', 'Little of it', 'Most of it'],
          ['Board used', 'More per unit, so a higher unit price', 'Less material, lower cost'],
          ['Suits', 'Children, mobile units, hot days', 'Counter service, artisan presentation'],
        ],
        outro:
          'Sites that sell both to families and to adults often run a deeper wrap in summer and a shorter one the rest of the year, from the same artwork.',
      },
      {
        kind: 'prose',
        heading: 'Plain Wrappers Still Do a Job',
        body: [
          'Not every wrapper needs printing. Plenty of vendors take a plain white or kraft wrap simply to keep hands clean, and put the branding budget into something the customer keeps.',
          'If a plain wrap is what you need, say so — it is a shorter, cheaper conversation than a printed run, and the sizing work is identical.',
        ],
        link: {
          href: '/custom-ice-cream-cone-sleeves/',
          anchor: 'full-colour printed cone sleeves',
          sentence:
            'Where the wrap is meant to carry the brand, {link} are set up for exactly that.',
        },
      },
      {
        kind: 'callout',
        heading: 'Deeper Wraps Need a Stiffer Board',
        body: 'A short sleeve is held in place by the cone taper. A deep wrapper has more unsupported area and will buckle on a thin board, particularly once condensation softens it. We specify board weight against the depth you choose rather than using one grade throughout.',
      },
    ],
    faqs: [
      {
        q: 'Is a wrapper different from a sleeve?',
        a: 'The words are used interchangeably in the trade. When customers ask for a wrapper they usually mean deeper coverage, so we treat it as a depth question and size accordingly rather than assuming which one you mean.',
      },
      {
        q: 'Can wrappers be supplied unprinted?',
        a: 'Yes. Plain white and kraft are both straightforward, and the sizing process is the same. It is a common choice for vendors who want clean hands without a print budget.',
      },
      {
        q: 'Do deep wraps make the cone harder to eat from?',
        a: 'They can if the wrap sits too close to the rim, because the customer bites into board. Leaving a clear centimetre or two below the rim avoids it entirely, and we set that on the die rather than leaving it to chance.',
      },
      {
        q: 'How much extra board does a deeper wrap use?',
        a: 'Enough to show on the unit price, because the flat shape is larger. Whether that is worth paying depends on how much melt your trade actually produces on a warm day.',
      },
      {
        q: 'Can we run a shallow wrap in winter and a deep one in summer?',
        a: 'Plenty of seaside sites do exactly that, from one artwork file and two dies. The tooling is paid for once and both versions reorder as print-only jobs afterwards.',
      },
      {
        q: 'Do plain wrappers still need a die?',
        a: 'Yes. The shape has to match your cone whether or not anything is printed on it, so the sizing conversation is identical and only the print stage is skipped.',
      },
      {
        q: 'Will a deep wrapper hide our branding?',
        a: 'It gives you more printed area, not less. What it hides is the cone, which is worth thinking about if the wafer is part of what you are selling.',
      },
      {
        q: 'Can wrappers be printed on the inside face?',
        a: 'On a deep wrap the inner face is visible whenever the customer looks down at the cone, so it is worth considering. It adds a press pass, so decide before quoting.',
      },
      {
        q: 'Are wrappers suitable for soft serve as well as scooped?',
        a: 'Yes, though soft serve sits lower in the cone and melts faster, which usually argues for the deeper end of the range rather than a short band.',
      },
      {
        q: 'Do you supply unprinted wrappers in small quantities?',
        a: 'Plain stock has different economics from a printed run. Send the quantity you have in mind and we will tell you what is realistic rather than quoting a general minimum.',
      },
    ],
    related: [
      'custom-ice-cream-cone-sleeves',
      'custom-paper-cone-sleeves',
      'custom-child-size-waffle-cone-sleeves',
      'custom-waffle-cone-sleeves',
    ],
  },

  {
    slug: 'custom-waffle-cone-sleeves',
    name: 'Custom Waffle Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Custom Waffle Cone Sleeves UK | Printed to Your Cone',
    seoDescription:
      'Printed waffle cone sleeves cut to the taper of your own cones. Board and finish chosen for warm hands and heavy scoops.',
    h1: 'Custom Waffle Cone Sleeves',
    cardBlurb: 'Sleeves cut to the wide taper of a waffle cone.',
    enquiryLabel: 'waffle cone sleeves',
    intro: [
      'Waffle cones are the widest cone in normal use and the heaviest once loaded. A sleeve cut for anything narrower will sit too high, grip the wrong part of the taper, and slide down as the cone warms.',
      'These sleeves are cut to a waffle taper specifically, from the cones you already serve.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Why Waffle Cones Need Their Own Die',
        body: [
          'A waffle cone opens out at a shallower angle than a sugar or cake cone and has a much wider rim. The flat shape that wraps it is a broader arc with a different radius.',
          'Using a sleeve cut for a cake cone means the top gapes while the bottom grips, which is exactly the failure that makes staff stop using them.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What a Waffle Sleeve Has to Cope With',
        items: [
          'The weight of two or three scoops, which pulls the cone downward through the grip.',
          'A textured surface, so the sleeve holds by taper rather than by friction against a smooth wall.',
          'Warmth from the hand transferring into a wafer that softens as it goes.',
          'Melt travelling down the outside, particularly on the side facing the sun.',
          'Being carried, put down and picked up again while the customer takes a photograph.',
        ],
        outro:
          'A board with some stiffness handles all of this better than the lightest option available.',
      },
      {
        kind: 'specs',
        heading: 'Sizing Information We Need',
        intro: 'Two measurements set the die; the rest is preference.',
        rows: [
          ['Top diameter', 'Across the open rim of your waffle cone, outside edge to outside edge'],
          ['Slant height', 'From the rim down the side to where the sleeve should stop'],
          ['Wrap depth', 'How much of the wafer you want covered'],
          ['Board', 'Coated white, kraft or greaseproof-lined'],
          ['Finish', 'Matt, gloss or none'],
          ['Quantity', 'Opening order and expected annual usage'],
        ],
        note: 'Posting us three sample cones removes all of the measurement risk.',
      },
      {
        kind: 'callout',
        heading: 'Cones Vary Between Batches',
        body: 'Baked cones are not dimensionally identical from one delivery to the next, and a sleeve cut to the tightest possible fit will be unusable on a slightly larger batch. We build a small tolerance into the die for this reason.',
      },
    ],
    faqs: [
      {
        q: 'Will a waffle cone sleeve fit a sugar cone as well?',
        a: 'No. A sugar cone is narrower at the rim and tapers more steeply, so a waffle sleeve sits loose and rotates. Sites selling both usually run two dies from the same artwork.',
      },
      {
        q: 'What happens if my cone supplier changes?',
        a: 'Send a cone from the new supplier and we will check it against the existing die. Small differences are often within tolerance; a genuinely different shape needs a new die, which is worth knowing before you commit to the new cone.',
      },
      {
        q: 'Do these work with a double scoop?',
        a: 'Yes, and the extra weight is one reason to choose a stiffer board. Tell us if double scoops are your normal serve and we will factor it into the board recommendation.',
      },
      {
        q: 'How many cones should we send you?',
        a: 'Three is ideal. One tells us the shape; three tell us how much that shape varies inside a single box, which is what the tolerance in the die is built around.',
      },
      {
        q: 'Can you work from a photograph instead?',
        a: 'For a first conversation, yes. For cutting a die, no — a photograph carries no reliable scale, and a sleeve cut from one is a guess that costs a whole run to correct.',
      },
      {
        q: 'Do waffle sleeves work with a flat-bottomed waffle cone?',
        a: 'A flat-bottomed cone tapers differently, so it needs its own die. Tell us which you use, because the two are easy to confuse by name and behave differently in the hand.',
      },
      {
        q: 'What board weight do you recommend for double scoops?',
        a: 'Something firmer than the lightest option, because the extra weight pulls the cone down through the customer\'s grip. We recommend against the serve you describe rather than a default.',
      },
      {
        q: 'Can the sleeve be printed to look like the wafer pattern?',
        a: 'It can, though the effect competes with the real wafer visible above it. Most sites get a better result with a plain or branded wrap that contrasts with the cone.',
      },
      {
        q: 'Do you offer a matching cone holder?',
        a: 'Yes, cut from the same cone measurements so the holder grips where the sleeve does not. Ordering both together keeps the fit consistent and shares the setup cost.',
      },
      {
        q: 'How far in advance should we reorder?',
        a: 'Before you are down to your last case. Reorders skip tooling and artwork, so they are quicker than a first order, but production lead time still applies and moves with the season.',
      },
    ],
    related: [
      'custom-child-size-waffle-cone-sleeves',
      'custom-sugar-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
      'custom-cardboard-cone-sleeves',
    ],
  },

  {
    slug: 'custom-sugar-cone-sleeves',
    name: 'Custom Sugar Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Custom Sugar Cone Sleeves UK | Printed Cone Wraps',
    seoDescription:
      'Printed sugar cone sleeves cut for a narrow, steep taper. Sized from your own cones for UK gelaterias and scoop shops.',
    h1: 'Custom Sugar Cone Sleeves',
    cardBlurb: 'Narrow sleeves cut for the steep taper of a sugar cone.',
    enquiryLabel: 'sugar cone sleeves',
    intro: [
      'Sugar cones are narrow, steeply tapered and considerably stiffer than a waffle cone. They also crack rather than bend, which changes what a sleeve needs to do.',
      'A sleeve on a sugar cone is mostly about grip and presentation rather than structural support, and the die reflects that.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Steeper Taper Is Less Forgiving',
        body: [
          'Because a sugar cone narrows quickly, a sleeve that is a few millimetres too wide slides straight down to the point. There is no gradual section for it to catch on.',
          'That makes accurate sizing more important here than on any other cone in the range. A sample cone is worth more than a set of measurements.',
        ],
        link: {
          href: '/blog/how-to-choose-the-right-cone-sleeve-size/',
          anchor: 'measuring taper as well as diameter',
          sentence:
            'Our sizing guide explains {link}, which is the step people skip on narrow cones.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where Sugar Cone Sleeves Suit the Counter',
        items: [
          'Gelaterias serving a single dense scoop that sits low in the cone.',
          'Scoop shops using sugar cones as the standard and waffle as an upgrade.',
          'Sites that want the wafer pattern visible, so a short band works better than a deep wrap.',
          'Anywhere cones are pre-loaded into a stand before service.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Lighter weights are usually adequate; the cone carries itself'],
          ['Print', 'Full colour, or one or two spot colours on kraft'],
          ['Finish', 'Matt, gloss or unlaminated'],
          ['Depth', 'Typically a short band; deeper wraps available'],
          ['Sizing', 'From a sample cone — recommended on this shape'],
        ],
        note: 'Board weight, minimum quantity and lead time are confirmed per quote.',
      },
    ],
    faqs: [
      {
        q: 'Do sugar cones need a sleeve at all?',
        a: 'Structurally, less than a waffle cone — they are stiffer and hold their own weight. The reasons to add one are hygiene, a dry grip and the printed surface, rather than support.',
      },
      {
        q: 'Can a sleeve crack the cone when it is fitted?',
        a: 'It can if the sleeve is too tight, because a sugar cone does not flex. A small tolerance in the die avoids this, and it is one reason we prefer to size from a physical sample.',
      },
      {
        q: 'Why do sugar cones crack when a sleeve is fitted?',
        a: 'Because they do not flex. A sleeve cut too tight forces the cone to give, and it splits rather than bending. Building tolerance into the die is the fix.',
      },
      {
        q: 'Can one sleeve cover our sugar and cake cones?',
        a: 'Rarely. Both are narrow, but the tapers differ enough that a sleeve gripping one slides on the other. Two dies from one artwork file is the usual answer.',
      },
      {
        q: 'Is a lighter board acceptable on a sugar cone?',
        a: 'Usually, because the cone carries its own weight and the sleeve is doing grip and branding rather than support. That makes it one of the cheaper sleeves in the range.',
      },
      {
        q: 'How much of the cone should stay visible?',
        a: 'Most gelaterias leave the top third showing so the wafer reads as part of the product. Covering more protects better and hides what the customer is partly buying.',
      },
      {
        q: 'Do sugar cones vary as much as waffle cones?',
        a: 'Less, because they are denser and hold their shape better in transit. They still vary enough to matter, which is why we size from three samples rather than one.',
      },
      {
        q: 'Can we print full colour on a short band?',
        a: 'You can, though the visible area is small and detail gets lost. A one or two colour design at that size usually reads better and costs less.',
      },
      {
        q: 'Will the sleeve stay on if the cone is pre-loaded into a stand?',
        a: 'Yes, and pre-sleeving before filling is common on busy counters. Tell us if that is your process, because a sleeve fitted before filling can be a fraction tighter.',
      },
      {
        q: 'Do you supply samples of the board before we commit?',
        a: 'Board samples are usually straightforward. Printed samples depend on the print method quoted for your job, so ask at quote stage and we will tell you what is available.',
      },
    ],
    related: [
      'custom-waffle-cone-sleeves',
      'custom-cake-cone-sleeves',
      'custom-small-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'custom-cake-cone-sleeves',
    name: 'Custom Cake Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Custom Cake Cone Sleeves UK | Printed Wafer Cone Wraps',
    seoDescription:
      'Printed sleeves for cake and wafer cones, cut to a flat-bottomed taper for soft serve on UK vans, kiosks and seaside pitches.',
    h1: 'Custom Cake Cone Sleeves',
    cardBlurb: 'Sleeves for flat-bottomed cake and wafer cones used with soft serve.',
    enquiryLabel: 'cake cone sleeves',
    intro: [
      'Cake cones — the light, flat-bottomed wafer cones used across the UK for soft serve — are the thinnest cone in normal service. They dent under a firm grip and go soft quickly once ice cream is in them.',
      'A sleeve here is doing real structural work, not just carrying a logo.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Sleeve Holds the Cone Together',
        body: [
          'A cake cone wall is thin enough that a customer gripping firmly can crush it. That is the single most common complaint on soft-serve vans, and it happens more with children.',
          'A sleeve spreads that grip across a wider area. On this cone type it is worth specifying a slightly stiffer board than the print alone would need.',
        ],
      },
      {
        kind: 'uses',
        heading: 'Where Cake Cone Sleeves Are Used',
        items: [
          {
            title: 'Ice Cream Vans and Mobile Units',
            body: 'High volume, quick service and a lot of cones handed to children. Grip and mess control matter more than presentation.',
          },
          {
            title: 'Seaside and Park Kiosks',
            body: 'Cones are carried a short distance in warm weather. A wrap catches the first melt before it reaches the hand.',
          },
          {
            title: 'Events and Fetes',
            body: 'A printed sleeve on a plain cone is the cheapest way to make a temporary stand look organised.',
          },
        ],
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'planning packaging for a one-off event',
          sentence:
            'For a single weekend rather than an ongoing supply, {link} covers what to order and when.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Cone type', 'Flat-bottomed cake and wafer cones'],
          ['Board', 'Slightly stiffer than the print requires, for grip support'],
          ['Print', 'Full colour or spot colours'],
          ['Finish', 'Matt lamination suits vans; unlaminated suits dry indoor service'],
          ['Sizing', 'From sample cones, allowing for batch variation'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will a sleeve stop children crushing the cone?',
        a: 'It reduces it considerably. A grip that would dent bare wafer is spread across the sleeve instead, which is why mobile operators tend to adopt them after a summer of complaints rather than before.',
      },
      {
        q: 'Do cake cones vary enough to matter?',
        a: 'They do, more than sugar or waffle cones, because they are thinner and handled more roughly in transit. We build tolerance into the die and recommend checking a new batch against an existing sleeve before reordering.',
      },
      {
        q: 'How much does a sleeve reduce cone breakage?',
        a: 'Enough that most mobile operators notice it within a week. The grip is spread across the sleeve rather than concentrated on thin wafer, which is where the crushing happens.',
      },
      {
        q: 'Are cake cones the same as wafer cones?',
        a: 'They are the same thing under two names — the light, flat-bottomed cone used across the UK for soft serve. Tell us the brand you buy and we will size from it.',
      },
      {
        q: 'Can the sleeve be deep enough to cover the whole cone?',
        a: 'It can, though a full-height wrap on a cake cone hides the product entirely. Most vans stop two or three centimetres below the rim as a compromise.',
      },
      {
        q: 'Do cake cone sleeves need lamination?',
        a: 'On a van in summer, it helps considerably. Indoors with quick service, an unlaminated board is usually adequate and cheaper. It depends on how long the cone is held.',
      },
      {
        q: 'Will the sleeve fit if we change cone supplier?',
        a: 'Send a cone from the new supplier before reordering. Cake cones vary more between manufacturers than any other type, because they are thin and handled roughly in transit.',
      },
      {
        q: 'Can we print a children\'s design on these?',
        a: 'Cake cones are heavily used for children\'s servings, so a brighter palette often suits. Keep the type large — small detail disappears on a cone this narrow.',
      },
      {
        q: 'How quickly can staff sleeve a cone during a rush?',
        a: 'A couple of seconds once practised. Pre-assembling a batch during a quiet period is common on vans, and a slightly firmer board holds shape better in the stack.',
      },
      {
        q: 'Do you supply these unprinted?',
        a: 'Yes. Plain white or kraft sleeves are a common choice for operators who want the grip and hygiene without a print budget, and the sizing work is identical.',
      },
    ],
    related: [
      'custom-sugar-cone-sleeves',
      'custom-child-size-waffle-cone-sleeves',
      'custom-waffle-cone-sleeves',
      'custom-paper-cone-sleeves',
    ],
  },

  {
    slug: 'custom-child-size-waffle-cone-sleeves',
    name: 'Custom Child Size Waffle Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Child Size Cone Sleeves UK | Printed Mini Waffle Wraps',
    seoDescription:
      'Smaller printed cone sleeves for children\'s waffle cones, with artwork re-laid for the shape rather than simply shrunk down.',
    h1: 'Child Size Waffle Cone Sleeves',
    cardBlurb: 'Scaled-down waffle sleeves for children’s portions.',
    enquiryLabel: 'child size waffle cone sleeves',
    intro: [
      'A child\'s cone is not simply a smaller version of the adult one. It is usually shorter with a proportionally wider rim, so a scaled-down adult die produces a sleeve that fits nothing.',
      'These are cut to the children\'s cone itself, with artwork re-laid rather than shrunk.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Artwork Does Not Scale Down Cleanly',
        body: [
          'Reducing an adult sleeve design by a third makes the type too small to read and pushes fine detail below what the press can hold on board.',
          'The practical answer is to keep one or two elements at a readable size and drop the rest. A children\'s sleeve carrying just a wordmark usually looks better than one carrying everything at 60 per cent.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Points Worth Deciding Early',
        items: [
          'Whether the children\'s sleeve shares artwork with the adult one or has its own design.',
          'How much of the wafer to cover — deeper helps, because children grip lower down.',
          'Whether a brighter palette is wanted for the children\'s version.',
          'The split between adult and children\'s quantities, which affects how the run is priced.',
        ],
        outro:
          'Running both sizes in one order is normally cheaper than two separate jobs, so plan them together.',
      },
      {
        kind: 'callout',
        heading: 'Deeper Coverage Suits Smaller Hands',
        body: 'Children hold a cone lower and less carefully than adults, so a wrap that extends further down catches more of the mess. It costs slightly more per unit and saves a good deal of wiping.',
      },
    ],
    faqs: [
      {
        q: 'Can we run the same design on both adult and child sleeves?',
        a: 'The elements can be shared but the layout has to be re-set, because the flat shape is a different arc. We do that from your original artwork rather than scaling the adult file.',
      },
      {
        q: 'Is there much price difference between the two sizes?',
        a: 'A smaller sleeve uses less board, but the setup work is much the same. Running both in one order shares that setup and is usually the more sensible route.',
      },
      {
        q: 'Can children\'s sleeves share a die with the adult size?',
        a: 'No. The children\'s cone is a different shape rather than a scaled version, so it needs its own tool. The artwork is what carries across, not the die.',
      },
      {
        q: 'Should the children\'s design be different?',
        a: 'Not necessarily, but it usually has to be simpler. There is far less printable area, so elements that work on the adult sleeve often need dropping rather than shrinking.',
      },
      {
        q: 'Are children\'s cones more prone to being dropped?',
        a: 'They are held less carefully and lower down, which is the argument for a deeper wrap. It catches more of the mess and gives smaller hands something to grip.',
      },
      {
        q: 'What proportion of our order should be children\'s size?',
        a: 'Only your till data can answer that. Sites that guess usually over-order the children\'s size, because it feels like a large share of trade and rarely is.',
      },
      {
        q: 'Can both sizes be produced in one run?',
        a: 'Yes, and it is the sensible route. The setup is shared across both rather than repeated, which makes the second size considerably cheaper than ordering it separately.',
      },
      {
        q: 'Do children\'s sleeves need a different board?',
        a: 'Usually the same or slightly lighter, because the serve is smaller and lighter. The grip support matters more than structural strength at this size.',
      },
      {
        q: 'Will an adult sleeve work at a push?',
        a: 'It will sit loose and slide, which defeats the point. If you only want one die, size for the cone you sell most of and accept the other fits poorly.',
      },
      {
        q: 'Can we add a name or message for parties?',
        a: 'Short digital runs make that workable. Send the quantity and the date and we will tell you what is realistic rather than quoting an ongoing supply price.',
      },
    ],
    related: [
      'custom-waffle-cone-sleeves',
      'custom-small-cone-sleeves',
      'custom-cake-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'custom-small-cone-sleeves',
    name: 'Custom Small Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Small Cone Sleeves UK | Printed Mini Cone Wraps',
    seoDescription:
      'Compact printed cone sleeves for mini cones, canapé service and dessert platters, with short runs quoted for UK event work.',
    h1: 'Small Cone Sleeves',
    cardBlurb: 'Compact wraps for mini cones, tasters and dessert platters.',
    enquiryLabel: 'small cone sleeves',
    intro: [
      'Mini cones turn up in places full-size ones cannot go: canapé trays, dessert flights, wedding receptions and tasting menus. The packaging problem is different — these are usually served several at a time, on a tray, to seated guests.',
      'A small sleeve here is doing presentation work first and mess control second.',
    ],
    sections: [
      {
        kind: 'uses',
        heading: 'Where Mini Cones Get Served',
        items: [
          {
            title: 'Event Catering and Canapés',
            body: 'Handed round on trays, eaten in two bites. The sleeve keeps fingers off the wafer as the tray moves between guests.',
          },
          {
            title: 'Dessert Flights and Tasting Menus',
            body: 'Three or four cones presented together. Sleeves in different colours separate the flavours visually.',
          },
          {
            title: 'Weddings and Private Functions',
            body: 'A short printed run with a name or date, ordered once for a single occasion.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Small Runs Are a Different Conversation',
        body: [
          'A wedding needs two hundred sleeves, not twenty thousand. That changes the sensible print method and it changes the economics.',
          'Tell us the quantity in your first message. A short run is quoted differently from an ongoing supply, and there is no point pricing one as the other.',
        ],
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'ordering packaging for a single event',
          sentence:
            'Our guide to {link} covers timings for one-off runs like these.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Sizing', 'Cut to the mini cone supplied or specified'],
          ['Print', 'Digital suits the short runs typical here'],
          ['Colours', 'Full colour, or plain board with a single foil-style spot colour'],
          ['Finish', 'Matt is the usual choice for table presentation'],
          ['Quantity', 'Short runs quoted individually'],
        ],
        note: 'Minimum quantities for short-run work are confirmed per enquiry.',
      },
    ],
    faqs: [
      {
        q: 'What is the smallest quantity worth ordering?',
        a: 'That depends on the print method rather than a fixed rule. Digital printing makes a few hundred workable where a long-run press would not. Send the quantity and the date and we will tell you what is realistic.',
      },
      {
        q: 'Can each sleeve in a set be a different colour?',
        a: 'Yes, and it is a common request for tasting flights. On a digital run the cost of several colourways is modest; on a long run it is a different calculation, so tell us the split.',
      },
      {
        q: 'How small can a cone sleeve usefully be?',
        a: 'Small enough for a two-bite canapé cone, though below a certain size the printable area stops carrying anything readable. We will tell you what will hold at your dimensions.',
      },
      {
        q: 'Can we have several colours in one order?',
        a: 'On digital printing, yes, and it is a common request for tasting flights where each colour marks a flavour. Send the split between colours rather than a single total.',
      },
      {
        q: 'Do mini cones need a deep wrap?',
        a: 'Rarely. They are eaten in two bites and usually served on a tray, so a short band is enough and keeps more of the cone visible.',
      },
      {
        q: 'Is there a minimum for a single event?',
        a: 'It depends on the print method rather than a fixed rule. Digital printing makes a few hundred workable where a conventional press would not. Send the quantity and the date together.',
      },
      {
        q: 'Can the sleeves be foil blocked for a wedding?',
        a: 'Speciality finishes are quoted per job because availability varies with the run size. Tell us what you have in mind and we will confirm what can be produced.',
      },
      {
        q: 'How far ahead should we order for an event?',
        a: 'Work backwards from the date rather than forwards from today, and allow time for proofing as well as production. We confirm the lead time on the quote.',
      },
      {
        q: 'Will mini sleeves work with a cone holder?',
        a: 'Only with a holder cut for that cone size. A standard holder lets a mini cone drop straight through, so the two need sizing together.',
      },
      {
        q: 'Can leftovers be used at a later event?',
        a: 'If the artwork carries no date. A sleeve printed with a specific occasion cannot be reused, which is the main argument for keeping event artwork undated.',
      },
    ],
    related: [
      'custom-child-size-waffle-cone-sleeves',
      'custom-sugar-cone-sleeves',
      'custom-die-cut-sleeves',
      'custom-cake-cone-sleeves',
    ],
  },

  {
    slug: 'custom-rolled-ice-cream-cone-sleeves',
    name: 'Rolled Ice Cream Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Rolled Ice Cream Cone Sleeves UK | Printed Wraps',
    seoDescription:
      'Sleeves for rolled ice cream in cones, using a heavier lined board for a wetter product and the longer serve times it brings.',
    h1: 'Rolled Ice Cream Cone Sleeves',
    cardBlurb: 'Heavier wraps for the dense, wet product rolled ice cream produces.',
    enquiryLabel: 'rolled ice cream cone sleeves',
    intro: [
      'Rolled ice cream is made to order on a cold plate, which means the customer waits, watches, and films it. By the time the rolls are lifted into a cone the product is softer and wetter than a scoop from a cabinet.',
      'A sleeve for this needs more board and more coverage than a standard scoop wrap.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Wetter Product, Different Failure Mode',
        body: [
          'Rolls carry more surface moisture than a firm scoop and they start to slump as soon as they leave the plate. Melt reaches the sleeve early and keeps coming.',
          'A greaseproof-lined or coated board resists that far longer than plain board, which goes translucent and loses stiffness within a few minutes.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What Tends to Matter on a Rolled Ice Cream Counter',
        items: [
          'The serve is filmed, so the sleeve is on camera for the whole preparation.',
          'Cones are often loaded with toppings that overhang the rim.',
          'Queues move slowly, so a customer holds the finished cone while waiting for a friend\'s.',
          'Portions are heavy relative to the cone, which stresses the grip.',
        ],
        outro:
          'A stiffer board and a deeper wrap answer all four at once.',
      },
      {
        kind: 'callout',
        heading: 'Toppings Change the Geometry',
        body: 'Rolled ice cream is usually finished with sauces and toppings that sit above the rim. If your serve is built high, the sleeve should stop lower so the customer has somewhere clean to hold without touching the toppings.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Greaseproof-lined or coated, heavier than a standard scoop sleeve'],
          ['Depth', 'Deeper wrap than a cabinet scoop, set below the topping line'],
          ['Print', 'Full colour; the sleeve appears in customer video'],
          ['Finish', 'Matt lamination is the usual choice for handling marks'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Why not use the same sleeve as our scoop cones?',
        a: 'You can, and plenty of sites do at first. The board tends to soften faster because the product is wetter, and the topping height often means the wrap sits in the wrong place. Both are cheap to fix on a second order.',
      },
      {
        q: 'Does the sleeve need to be waterproof?',
        a: 'Not waterproof, but grease and moisture resistant. Nothing in board packaging is designed to hold standing liquid — the aim is to stay stiff and clean for the ten minutes the customer is eating.',
      },
      {
        q: 'Do rolled ice cream cones need a different die from scoop cones?',
        a: 'Often not, if the cone is the same. What changes is the board and the depth, because the product is wetter and usually built higher above the rim.',
      },
      {
        q: 'How high should the sleeve stop below the toppings?',
        a: 'Far enough that the customer can hold it without touching sauce, which on a heavily finished serve is lower than you would expect. Measure a made-up cone rather than an empty one.',
      },
      {
        q: 'Does the sleeve appear in customer videos?',
        a: 'Almost always, because the preparation is filmed. That is a genuine argument for a laminated finish, which holds its appearance under the lights better than uncoated board.',
      },
      {
        q: 'Will a standard scoop sleeve work to start with?',
        a: 'It will, and many sites begin there. The board tends to soften faster because the product is wetter, which is usually the first thing they change at reorder.',
      },
      {
        q: 'Can the sleeve carry a social handle?',
        a: 'It is one of the better places for it, since the cone is filmed. Keep it large enough to read on a phone screen and clear of the overlap.',
      },
      {
        q: 'Do rolled cones need a stiffer board than waffle cones?',
        a: 'Generally yes. The serve is heavier and wetter, and the cone spends longer in the hand while the customer photographs it before eating.',
      },
      {
        q: 'How do we stop the sleeve softening in a humid shop?',
        a: 'Store stock away from the preparation area and specify a coated or lined board. A cold plate throws moisture into the air continuously through a service.',
      },
      {
        q: 'Can we match the sleeve to our cup and tub packaging?',
        a: 'Yes, and running them together keeps the colour consistent. Printed separately months apart, the same brand colour drifts enough to be visible side by side.',
      },
    ],
    related: [
      'custom-ice-cream-cone-sleeves',
      'custom-waffle-cone-sleeves',
      'crepe-cone-packaging',
      'custom-cardboard-cone-sleeves',
    ],
  },

  {
    slug: 'custom-black-cone-sleeve',
    name: 'Custom Black Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Black Cone Sleeves UK | Custom Printed Dark Wraps',
    seoDescription:
      'Solid black cone sleeves with a matt finish, sized to your cones, plus advice on building a black that stays even in print.',
    h1: 'Black Cone Sleeves',
    cardBlurb: 'Solid black wraps with a matt finish for a dark counter look.',
    enquiryLabel: 'black cone sleeves',
    intro: [
      'A black sleeve makes ice cream look like the product rather than the packaging. Against a dark wrap the colour of the scoop is the only thing the eye goes to, which is why so many dessert bars have moved to it.',
      'Solid black is also the hardest colour to print evenly, and worth understanding before ordering.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Solid Black Is a Printing Problem',
        body: [
          'A large flat black area shows every inconsistency. Ink density varies slightly across a press sheet, and on any other colour nobody notices — on black it reads as patchiness or a slight brown cast.',
          'The usual fix is a rich black built from more than one ink rather than black alone, or a spot colour. Both cost a little more and hold far better across a long run.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Handling Marks on Dark Packaging',
        intro:
          'Dark surfaces show fingerprints and scuffs in a way pale ones do not:',
        items: [
          'Matt lamination hides handling marks better than gloss, which highlights every smear.',
          'Unlaminated black scuffs along the seam within minutes of assembly.',
          'A soft-touch style finish looks superb and marks the most — consider it only where sleeves are assembled to order.',
          'Pale foods against black show crumbs and drips clearly, which is a presentation gain and a cleaning cost.',
        ],
        outro:
          'Almost every black sleeve we quote ends up matt laminated for these reasons.',
      },
      {
        kind: 'compare',
        heading: 'Black Against White as a Base',
        columns: ['Black sleeve', 'White sleeve'],
        rows: [
          ['Product stands out', 'Strongly — the scoop is the only colour', 'Less so; white competes with pale ice cream'],
          ['Print cost', 'Higher; full coverage plus a rich black build', 'Lower; the board is already white'],
          ['Handling marks', 'Visible without a matt finish', 'Largely invisible'],
          ['Logo reproduction', 'Reversed out, so fine type needs care', 'Printed positive, so fine type is easier'],
          ['Feel', 'Premium, deliberate', 'Clean, neutral'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does black print sometimes look brown?',
        a: 'Black built from a single ink can read warm when it is laid thinly. Building it from more than one ink, or using a spot black, gives a deeper and more consistent result across the run.',
      },
      {
        q: 'Can a logo be left unprinted so the board shows through?',
        a: 'Yes, and reversing a mark out of solid black looks striking. Fine lines and small type need a little weight added, because ink spread closes up thin gaps on board.',
      },
      {
        q: 'Does a black sleeve cost more than a white one?',
        a: 'Yes, because the colour is ink across the whole surface rather than only where a design sits, and a properly built black uses more than one ink to stay even.',
      },
      {
        q: 'Will the black rub off on hands?',
        a: 'Not on a cured, laminated print. Unlaminated heavy ink coverage can scuff along the seam during assembly, which is one reason black sleeves are usually laminated.',
      },
      {
        q: 'Can we have a matt black with a gloss logo?',
        a: 'Spot finishing effects are quoted per job because availability depends on the print method. Tell us the effect you want and we will confirm what can be produced.',
      },
      {
        q: 'Does black show melt and drips?',
        a: 'Less than white, which is one of its practical advantages. What it does show is fingerprints and scuffs, which is why matt lamination is the usual specification.',
      },
      {
        q: 'Is a reversed-out logo hard to print?',
        a: 'Not hard, but fine lines need slight weight added because ink spreads into board and closes small gaps. Send vector artwork and we will flag anything at risk.',
      },
      {
        q: 'Can we run black sleeves alongside a white version?',
        a: 'Yes, and both can run in one job on digital printing. Tell us the split between them so the quantities are priced properly rather than assumed even.',
      },
      {
        q: 'Does black board exist, or is it always printed?',
        a: 'Printed, in this range. A dyed black board behaves differently and is quoted separately, so tell us if the material itself needs to be black through the section.',
      },
      {
        q: 'Will the unprinted rim margin be obvious?',
        a: 'More than on a pale sleeve, yes. Every printed sleeve leaves a small unprinted margin where it is cut and formed, and on solid black it reads as a thin light line.',
      },
    ],
    related: [
      'custom-white-cone-sleeve',
      'custom-two-colour-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
      'abstract-design-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'custom-white-cone-sleeve',
    name: 'Custom White Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'White Cone Sleeves UK | Printed & Plain Cone Wraps',
    seoDescription:
      'Clean white cone sleeves, plain or printed. The lowest-cost way to keep hands off the wafer and add a simple one-colour logo.',
    h1: 'White Cone Sleeves',
    cardBlurb: 'Clean white wraps, plain or printed with a simple logo.',
    enquiryLabel: 'white cone sleeves',
    intro: [
      'White is the default for a reason. The board arrives white, so there is no full-coverage ink cost, colours print accurately on it, and a single logo is often all a sleeve needs.',
      'It is the cheapest sleeve to produce and the easiest to get right.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Printing on White Costs Less',
        body: [
          'A coloured sleeve needs ink across the entire surface. A white one needs ink only where the design sits, which on a one-colour logo might be a few per cent of the area.',
          'For a business testing printed sleeves for the first time, that difference is often what makes the first order affordable.',
        ],
        link: {
          href: '/custom-two-colour-cone-sleeves/',
          anchor: 'two-colour printing on a white base',
          sentence:
            'If one colour feels sparse, {link} adds depth without moving to full coverage.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where White Works and Where It Does Not',
        items: [
          'Works well with colourful ice cream, which reads clearly against a neutral wrap.',
          'Works well for clinical, clean brand positioning — frozen yoghurt in particular.',
          'Works less well with pale products, where white on cream looks washed out.',
          'Shows drips and melt more obviously than a dark or kraft board.',
        ],
        outro:
          'Where staining is a concern, a light lamination keeps the surface wipeable during a service.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Coated white board; greaseproof-lined available'],
          ['Print', 'One colour, two colours, or full CMYK'],
          ['Finish', 'Unlaminated as standard; matt or gloss available'],
          ['Plain option', 'Unprinted white sleeves supplied to the same die'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Is an unprinted white sleeve worth ordering?',
        a: 'For hygiene and grip alone, yes — plenty of vendors run plain sleeves and put the budget elsewhere. You still need the die cut to your cone, so the sizing conversation is identical.',
      },
      {
        q: 'Will melt stain a white sleeve during service?',
        a: 'It marks visibly, which is one of the few real drawbacks. A light lamination lets staff wipe the outside, and most sites accept a little marking as the trade-off for the lower print cost.',
      },
      {
        q: 'Is a plain white sleeve cheaper than a printed one?',
        a: 'Considerably, because there is no ink and no artwork stage. You still need a die cut to your cone, so the sizing conversation and its cost are unchanged.',
      },
      {
        q: 'Will white board look grey?',
        a: 'Only on a low-grade stock. If you are going minimal, board quality matters more than usual, because there is no printing to distract from the surface itself.',
      },
      {
        q: 'Can we start plain and add printing later?',
        a: 'Yes, and it is a sensible way to test sizing before committing to artwork. The die carries over, so the printed reorder is a print-only job.',
      },
      {
        q: 'How well do brand colours print on white?',
        a: 'As accurately as this process allows, because the ink sits on a neutral base. If colour matters, white board is the specification to ask for.',
      },
      {
        q: 'Does white show melt more than other colours?',
        a: 'Yes, particularly around the lower edge. A light lamination lets staff wipe the outside during service, which is the usual answer where marking is a concern.',
      },
      {
        q: 'Is white suitable for savoury cones?',
        a: 'The colour is fine; the board is the question. Anything fried needs a grease-resistant lining, which can be specified on a white board like any other.',
      },
      {
        q: 'Can we print one colour on white and keep the cost down?',
        a: 'That is the cheapest branded sleeve there is. Ink covers only a few per cent of the surface, and the board was being bought regardless.',
      },
      {
        q: 'Will a white sleeve look cheap next to a coloured one?',
        a: 'Not if the board is good and the mark is well placed. Plenty of well-regarded parlours use white deliberately, because it lets the ice cream provide the colour.',
      },
    ],
    related: [
      'custom-black-cone-sleeve',
      'custom-paper-cone-sleeves',
      'custom-two-colour-cone-sleeves',
      'custom-ice-cream-cone-wrappers',
    ],
  },

  {
    slug: 'custom-two-colour-cone-sleeves',
    name: 'Custom Two Colour Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Two Colour Cone Sleeves UK | Spot Colour Printing',
    seoDescription:
      'Two-colour spot printed cone sleeves giving accurate brand colours at a lower cost than full-colour process printing does.',
    h1: 'Two Colour Cone Sleeves',
    cardBlurb: 'Spot-colour printing in two inks, for accurate brand colour at lower cost.',
    enquiryLabel: 'two colour cone sleeves',
    intro: [
      'Most brand marks are one or two colours. Printing them in full CMYK means building those colours from four inks, which costs more and holds less accurately across a run than printing them directly.',
      'Two-colour spot printing gives a closer match for less money, provided the design suits it.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Spot Colour Against Full-Colour Process',
        intro: 'Which is cheaper depends entirely on the artwork.',
        columns: ['Two spot colours', 'Full CMYK'],
        rows: [
          ['Colour accuracy', 'Very close to a Pantone reference', 'Approximated from four inks; shifts across a run'],
          ['Cost on long runs', 'Lower — two inks instead of four', 'Higher'],
          ['Photographs', 'Cannot reproduce them', 'Reproduces them well'],
          ['Gradients', 'Limited to tints of the two inks', 'Full range available'],
          ['Suits', 'Logos, flat colour, line illustration, pattern', 'Photography, illustration with many colours'],
        ],
        outro:
          'A logo and a background colour is the classic two-colour job, and it is where the saving is largest.',
      },
      {
        kind: 'prose',
        heading: 'Getting More than Two Colours Out of Two Inks',
        body: [
          'Tints extend the palette considerably. A solid colour at 100 per cent, the same ink at 40 per cent, and the two inks overprinted give five distinct tones from two plates.',
          'Designers used to working in CMYK sometimes forget this. It is worth asking yours to work in spot from the start rather than converting afterwards.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Supplying Artwork for Spot Printing',
        items: [
          'Send vector artwork with the colours named as Pantone references, not as CMYK builds.',
          'Keep the file to exactly two named colours plus any unprinted areas.',
          'Avoid drop shadows and soft gradients, which convert badly to spot separations.',
          'Tell us which colour is more critical if only one can be matched exactly.',
        ],
        link: {
          href: '/artwork-guidelines/',
          anchor: 'our artwork specification for print-ready files',
          sentence:
            'Everything we need is set out in {link}, including file formats and colour naming.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is two-colour always cheaper than full colour?',
        a: 'On longer runs, usually. On short digital runs the difference narrows or disappears, because digital presses lay down all colours in one pass. Ask for both prices when the quantity is modest.',
      },
      {
        q: 'Can we add a third colour later?',
        a: 'It becomes a different job rather than an adjustment, since each ink is a separate plate on a conventional press. If a third colour is likely, it is worth pricing the three-colour version now.',
      },
      {
        q: 'How do we know if our logo suits two-colour printing?',
        a: 'Count the flat colours in it. If it is a mark and a background with no photographs or soft gradients, it suits spot printing and will usually cost less than full colour.',
      },
      {
        q: 'Can we get more than two tones from two inks?',
        a: 'Yes. Each ink at full strength, each at a lighter tint, and the two overprinted gives five distinct tones from two plates, which surprises most people the first time.',
      },
      {
        q: 'What if our brand has three colours?',
        a: 'Then price the three-colour version as well as a two-colour simplification. On a conventional press each ink is a separate plate, so the third one is a real cost rather than a rounding.',
      },
      {
        q: 'Do we need to supply Pantone references?',
        a: 'For spot printing, yes. A CMYK build or a hex code describes a colour approximately; a Pantone reference describes a specific mixed ink, which is the point of the process.',
      },
      {
        q: 'Will two spot colours match across reorders?',
        a: 'Far more closely than a process build, because the ink is mixed to a recipe rather than assembled from four separates. That consistency is the main reason to choose spot.',
      },
      {
        q: 'Can we add a photograph later?',
        a: 'Not to a two-colour job. Photographs need process printing, so adding one converts the whole design and changes the price. Decide before the artwork is built.',
      },
      {
        q: 'Is two-colour cheaper on a short digital run?',
        a: 'Often not. Digital presses lay all colours in one pass, so the saving comes on longer conventional runs. Ask for both prices when the quantity is modest.',
      },
      {
        q: 'What should we send our designer?',
        a: 'Our die template, and an instruction to work in two named Pantone colours rather than CMYK. Converting a CMYK file to spot afterwards rarely produces a clean separation.',
      },
    ],
    related: [
      'custom-white-cone-sleeve',
      'custom-black-cone-sleeve',
      'custom-ice-cream-cone-sleeves',
      'polka-designs-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'polka-designs-ice-cream-cone-sleeves',
    name: 'Polka Dot Ice Cream Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Polka Dot Cone Sleeves UK | Patterned Ice Cream Wraps',
    seoDescription:
      'Polka dot cone sleeves printed in your own colours. A repeating pattern reads correctly from any angle in a busy UK queue.',
    h1: 'Polka Dot Cone Sleeves',
    cardBlurb: 'Repeating dot patterns in your own colours, readable from any angle.',
    enquiryLabel: 'polka dot cone sleeves',
    intro: [
      'A repeating pattern solves a problem single logos have on cones: whichever way the customer holds it, the design looks intentional. There is no wrong side.',
      'Dots are the most forgiving pattern to print on a curved, tapered surface, which is why they have stayed popular on ice cream packaging for decades.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Why Patterns Suit a Cone Better than a Single Mark',
        body: [
          'A cone sleeve is a tapered band. A logo placed once sits in a different position on every assembled sleeve and faces away from the viewer half the time.',
          'A pattern covers the whole surface evenly, so the sleeve reads the same from any angle. The brand mark can then sit once, small, in a fixed position on the pattern.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Making a Dot Pattern Work on a Taper',
        items: [
          'Dots compress towards the narrow end as the sleeve wraps — the artwork should account for it rather than fight it.',
          'Two sizes of dot in the same colour add depth without a second ink.',
          'Keeping one clear area in the pattern gives the logo somewhere to sit without clutter.',
          'A pattern in a single spot colour on white board is one of the cheapest printed sleeves to produce.',
        ],
        outro:
          'This is a good candidate for two-colour printing, since a pattern rarely needs photographic reproduction.',
        link: {
          href: '/custom-two-colour-cone-sleeves/',
          anchor: 'two-colour spot printing for flat pattern work',
          sentence:
            'Patterns like these are exactly what {link} is suited to.',
        },
      },
      {
        kind: 'callout',
        heading: 'Patterns Hide Handling Marks',
        body: 'A busy surface disguises the scuffs and fingerprints that show clearly on a flat solid colour. On sites that assemble sleeves in advance and stack them, this is a practical advantage as much as a design one.',
      },
    ],
    faqs: [
      {
        q: 'Can we use our own pattern rather than dots?',
        a: 'Yes. The same reasoning applies to stripes, checks or any repeating motif. Dots simply tolerate the taper distortion better than a strict grid does.',
      },
      {
        q: 'Does a pattern cost more than a plain sleeve?',
        a: 'Not necessarily. Cost follows the number of inks rather than how much of the surface they cover, so a one-colour pattern prices much like a one-colour logo.',
      },
      {
        q: 'Can we choose the dot size and spacing?',
        a: 'Yes, and it changes the character considerably. Larger, sparser dots read as playful; small, dense ones read closer to a texture. We can show both on the die template.',
      },
      {
        q: 'Will the dots distort on the cone?',
        a: 'They compress slightly towards the narrow end, which is the taper doing its work. Dots absorb that far better than a strict grid, which is why the pattern has lasted.',
      },
      {
        q: 'Does a pattern cost more than a logo?',
        a: 'Not usually. Price follows the number of inks rather than the area they cover, so a one-colour pattern prices much like a one-colour mark.',
      },
      {
        q: 'Where should our logo sit on a patterned sleeve?',
        a: 'In a deliberately clear area of the pattern rather than on top of it. Leaving that gap in the artwork looks intentional; dropping a logo onto a busy field does not.',
      },
      {
        q: 'Can we use two dot colours?',
        a: 'Yes, and two sizes of dot in one colour is another way to add depth without a second ink. Both are worth pricing before deciding.',
      },
      {
        q: 'Does a pattern hide handling marks?',
        a: 'Noticeably. A busy surface disguises the scuffs and fingerprints that show clearly on a flat solid colour, which helps on sites that pre-assemble and stack sleeves.',
      },
      {
        q: 'Can we change the pattern seasonally?',
        a: 'Easily, because the die stays the same. Only the print changes, so a seasonal version is a shorter job than the original order was.',
      },
      {
        q: 'Will small dots hold at print size?',
        a: 'Very small dots can close up or drop out on board. Send the artwork and we will tell you what will hold before the run rather than after it.',
      },
    ],
    related: [
      'abstract-design-ice-cream-cone-sleeves',
      'custom-two-colour-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
      'custom-white-cone-sleeve',
    ],
  },

  {
    slug: 'abstract-design-ice-cream-cone-sleeves',
    name: 'Abstract Design Ice Cream Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Abstract Print Cone Sleeves UK | Designed Wraps',
    seoDescription:
      'Cone sleeves with abstract illustrated artwork built around the taper on our die line, rather than dropped onto a rectangle.',
    h1: 'Abstract Design Cone Sleeves',
    cardBlurb: 'Illustrated and abstract artwork laid out for the cone shape.',
    enquiryLabel: 'abstract design cone sleeves',
    intro: [
      'Abstract artwork gives a cone sleeve a shelf presence that a logo alone cannot. It also gives a designer somewhere to put brand colours without printing a solid block of them.',
      'The catch is that free-form artwork has to be built on the die line from the start. Laid out on a rectangle and wrapped afterwards, it distorts in ways that are obvious on the finished sleeve.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Design on the Arc, Not on a Rectangle',
        body: [
          'The flat shape of a cone sleeve is a curved band, wider at one end. Straight lines drawn across it become curves once wrapped, and a horizontal band across the middle rises at both ends.',
          'Designers who have not worked on cones before usually want the template before they start rather than after. We send it as an editable file at the beginning of the job.',
        ],
        link: {
          href: '/blog/preparing-artwork-for-custom-cone-sleeves/',
          anchor: 'how the flat die line maps onto a wrapped cone',
          sentence:
            'We set out {link} with a diagram, which is worth passing to whoever designs your artwork.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Artwork That Survives the Wrap',
        items: [
          'Organic shapes and texture distort gracefully; strict grids and straight borders do not.',
          'Anything crossing the seam will be interrupted, so keep key elements clear of it.',
          'A design that runs off all four edges avoids the awkward question of where it stops.',
          'Full-bleed artwork needs extending past the die line so the cut never exposes white board.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Print', 'Full-colour CMYK; abstract work usually needs process printing'],
          ['Finish', 'Matt lamination protects heavy ink coverage'],
          ['Artwork', 'Vector or high-resolution raster, supplied on our die template'],
          ['Proofing', 'Digital proof on the die line before print'],
        ],
        note: 'Printed samples may be available depending on the print method quoted.',
      },
    ],
    faqs: [
      {
        q: 'Can you supply the die template to our designer?',
        a: 'Yes, and it is worth asking for it before design work starts. The template shows the cut line, the fold, the overlap and the safe area, which are the four things a rectangle-based layout gets wrong.',
      },
      {
        q: 'Will heavy ink coverage make the sleeve harder to assemble?',
        a: 'Not the coverage itself, but an unlaminated heavy print can scuff where the overlap is pressed together. Lamination removes the issue and is the usual specification on designs like these.',
      },
      {
        q: 'What does our designer need before starting?',
        a: 'The die template, as an editable vector file. Everything else follows from it, and artwork built without it almost always needs rebuilding rather than adjusting.',
      },
      {
        q: 'Will straight lines look straight on the cone?',
        a: 'No. A line drawn straight across the flat becomes a curve once wrapped, which is why designs for cones use organic shapes or lines set on the die\'s arc.',
      },
      {
        q: 'Can we use a photographic background?',
        a: 'Yes, at 300 dpi or better at final size, printed in full colour. Bear in mind that a third of it is under a hand for the life of the cone.',
      },
      {
        q: 'How do we avoid the design being cut off?',
        a: 'Extend everything past the die line rather than stopping at it, and keep anything that matters inside the safe area. Both are marked on the template.',
      },
      {
        q: 'Does heavy ink coverage need lamination?',
        a: 'It benefits from it. Unlaminated saturated print scuffs where the overlap is pressed together during assembly, which shows immediately on a dark or detailed design.',
      },
      {
        q: 'Can we see a proof before printing?',
        a: 'Yes, a digital proof showing your artwork positioned on the die. It confirms layout, content and spelling; colour accuracy needs a printed sample rather than a screen.',
      },
      {
        q: 'Is there a limit to how many colours we can use?',
        a: 'Not on process printing, which builds everything from four inks. The practical limit is what reads at the size a customer actually sees it from.',
      },
      {
        q: 'Can the design run across the seam?',
        a: 'It can, but it will be interrupted there on every assembled sleeve. Keep anything that has to read continuously away from the overlap.',
      },
    ],
    related: [
      'polka-designs-ice-cream-cone-sleeves',
      'custom-black-cone-sleeve',
      'custom-ice-cream-cone-sleeves',
      'custom-die-cut-sleeves',
    ],
  },

  {
    slug: 'custom-eco-friendly-cone-sleeves',
    name: 'Eco-Friendly Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Eco Friendly Cone Sleeves UK | Recyclable Wraps',
    seoDescription:
      'Unlaminated and recyclable-stream cone sleeves for UK dessert businesses, with claims kept to what the material supports.',
    h1: 'Eco-Friendly Cone Sleeves',
    cardBlurb: 'Unlaminated board sleeves specified for recyclability, without overclaiming.',
    enquiryLabel: 'eco-friendly cone sleeves',
    intro: [
      'Most of what makes a cone sleeve hard to recycle is added after the board: lamination, heavy ink coverage, and coatings that improve grease resistance.',
      'Removing those is what "eco-friendly" means in practice here. It involves genuine trade-offs, and this page sets out both sides rather than only the good half.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'What You Gain and What You Give Up',
        intro:
          'An unlaminated sleeve on uncoated board is the simplest to recycle and the least protective.',
        columns: ['Unlaminated, uncoated', 'Laminated, coated'],
        rows: [
          ['Recycling stream', 'Ordinary paper stream in most areas', 'Often needs separation; check locally'],
          ['Grease resistance', 'Limited — suits dry-served cones', 'Considerably better'],
          ['Appearance over time', 'Marks and softens with melt', 'Wipeable, holds appearance through service'],
          ['Print', 'Slightly softer, matt look', 'Sharper, more saturated'],
          ['Cost', 'Usually lower', 'Higher'],
        ],
        outro:
          'Ice cream that melts quickly on a hot day is the hardest test for an unlaminated sleeve. Sites in that position often keep a laminated sleeve for summer.',
      },
      {
        kind: 'prose',
        heading: 'Claims Have to Match What Actually Happens',
        body: [
          'Whether a sleeve is recycled depends on the collection available where it is thrown away, not only on the material. A sleeve printed with a recycling instruction that local facilities do not offer is worse than one with no instruction at all.',
          'We will tell you what a quoted board and finish consist of. Checking that against your own waste contractor, and against the bins available to your customers, is a step worth taking before the wording goes on the print.',
        ],
      },
      {
        kind: 'callout',
        heading: 'Certification and Recycled Content Are Confirmed per Order',
        body: 'Board grades, recycled content percentages and any certification available for a given stock are confirmed in writing on your quote. We do not publish a general claim here, because the answer depends on the specific board a job runs on.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Is an unlaminated sleeve strong enough for ice cream?',
        a: 'For counter service where the cone is eaten quickly, generally yes. For a hot day, a long walk or a heavy double scoop, the board softens noticeably. It is a judgement about your own trade rather than a yes or no.',
      },
      {
        q: 'Can you supply board with recycled content?',
        a: 'Recycled-content stocks exist across the range, with availability and cost varying by grade and by what is in the mill at the time. We confirm what is available for your specification when we quote.',
      },
      {
        q: 'Does an eco specification cost more?',
        a: 'Removing lamination usually reduces cost. Moving to a specialist board can increase it. The two often cancel out, which surprises people expecting a premium.',
      },
      {
        q: 'Is unlaminated board cheaper?',
        a: 'Usually, because it removes a production step. Moving to a specialist recycled stock can add some of that back, so the two often cancel out.',
      },
      {
        q: 'Can you supply certified board?',
        a: 'Which certifications are available depends on the specific stock and what is in supply when your job runs. We confirm that in writing on your quote rather than claiming it generally.',
      },
      {
        q: 'What percentage recycled content can we get?',
        a: 'It varies by grade and availability, so we do not publish a figure. Tell us it matters and we will confirm what is achievable for your specification.',
      },
      {
        q: 'Can we print a recycling symbol on the sleeve?',
        a: 'Only if it describes what a customer can actually do where they throw it away. We will tell you the material; checking it against local collection is the step that makes the claim honest.',
      },
      {
        q: 'Does removing lamination affect print quality?',
        a: 'Slightly. Colours read a little softer and less saturated on an uncoated surface. Many brands prefer that look, which is worth seeing before deciding.',
      },
      {
        q: 'Are these suitable for savoury cones?',
        a: 'Usually not. Grease resistance comes from a lining or coating, which is exactly what an unlaminated, uncoated specification leaves out.',
      },
      {
        q: 'What is the single biggest improvement we could make?',
        a: 'If you have seating, serving eat-in customers in reusables. It almost always outweighs every material substitution available on the disposable range put together.',
      },
    ],
    related: [
      'custom-paper-cone-sleeves',
      'custom-cardboard-cone-sleeves',
      'eco-friendly-beverage-sleeves',
      'custom-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'custom-cardboard-cone-sleeves',
    name: 'Custom Cardboard Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Cardboard Cone Sleeves UK | Rigid Printed Wraps',
    seoDescription:
      'Heavier cardboard cone sleeves for large scoops and long serves, holding their shape where a lighter board creases and flexes.',
    h1: 'Cardboard Cone Sleeves',
    cardBlurb: 'Heavier board wraps that hold their shape under a large scoop.',
    enquiryLabel: 'cardboard cone sleeves',
    intro: [
      'Where a paper sleeve is a wrap, a cardboard sleeve is closer to a holder. The extra thickness stops it collapsing when a customer grips hard, and it keeps its shape through a longer serve.',
      'The trade-off is bulk: heavier board takes more storage space and costs more per unit.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'When the Extra Thickness Is Worth Paying For',
        body: [
          'Large scoops, loaded toppings and warm weather all push a light sleeve past what it can hold. The first sign is the wrap creasing where the customer\'s thumb sits.',
          'A heavier board resists that, and it also survives being pre-assembled and stacked before a rush, which lighter stock does not do well.',
        ],
      },
      {
        kind: 'uses',
        heading: 'Where Cardboard Sleeves Suit the Operation',
        items: [
          {
            title: 'High-Volume Sites That Pre-Assemble',
            body: 'Sleeves rolled during a quiet period and stacked ready for a rush need to hold their shape in the stack.',
          },
          {
            title: 'Heavy or Loaded Serves',
            body: 'Double scoops, toppings and sauces put weight and moisture into the cone at the same time.',
          },
          {
            title: 'Outdoor and Seaside Trade',
            body: 'Sun, wind and a walk to the beach are harder on packaging than an indoor counter.',
          },
        ],
        link: {
          href: '/ice-cream-cone-holder/',
          anchor: 'cone holders that stand a filled cone on a counter',
          sentence:
            'Where customers need both hands free, {link} do a job no sleeve can.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Heavier caliper board; exact grade confirmed per quote'],
          ['Print', 'Full colour or spot; the surface takes print as well as lighter board'],
          ['Finish', 'Matt, gloss or unlaminated'],
          ['Storage', 'Ships flat; takes more space per thousand than paper sleeves'],
          ['Assembly', 'Slightly firmer to roll, which staff notice on the first box'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a cardboard sleeve harder for staff to assemble?',
        a: 'A little firmer to roll and tuck, and staff notice it for the first day. Against that, it holds its shape once formed, so pre-assembled stock stays usable rather than flattening in the stack.',
      },
      {
        q: 'Does heavier board improve grease resistance?',
        a: 'Only in the sense that there is more material to absorb before it shows. Genuine grease resistance comes from a liner or coating, which can be specified on any board weight.',
      },
      {
        q: 'How much more storage does a heavier board need?',
        a: 'Enough to notice in a small back-of-house. The sleeves still ship flat, but each case holds fewer, so the pallet footprint per thousand goes up.',
      },
      {
        q: 'Is a heavier board harder to roll?',
        a: 'Firmer, and staff notice it on the first box. Against that, it holds shape once formed, so pre-assembled stock stays usable rather than flattening in the stack.',
      },
      {
        q: 'Does heavier board resist grease better?',
        a: 'Only in the sense that there is more material to absorb before staining shows. Genuine grease resistance comes from a lining, which can be added at any weight.',
      },
      {
        q: 'Will it feel more expensive to a customer?',
        a: 'Most people register the difference in the hand without being able to name it. That perceived quality is a large part of why sites move up a weight.',
      },
      {
        q: 'Can we use the same artwork as our lighter sleeve?',
        a: 'Yes, if the size is unchanged. Board weight does not affect the die line, so the artwork transfers directly and only the stock changes.',
      },
      {
        q: 'Is it worth it for indoor counter service?',
        a: 'Often not. A heavier board earns its cost on large scoops, long serves and outdoor trading. Indoors with quick turnover, a lighter sleeve usually performs identically.',
      },
      {
        q: 'Does the extra weight increase carriage cost?',
        a: 'Marginally, since carriage is priced on both weight and volume. It is rarely the deciding factor next to the difference in board cost itself.',
      },
      {
        q: 'Can we trial it before switching a whole order?',
        a: 'Splitting a run across two board weights is worth asking about. Tell us the quantities and we will price it rather than assuming one specification for everything.',
      },
    ],
    related: [
      'custom-paper-cone-sleeves',
      'custom-rolled-ice-cream-cone-sleeves',
      'custom-waffle-cone-sleeves',
      'custom-eco-friendly-cone-sleeves',
    ],
  },

  {
    slug: 'custom-paper-cone-sleeves',
    name: 'Custom Paper Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Paper Cone Sleeves UK | Lightweight Printed Wraps',
    seoDescription:
      'Lightweight paper cone sleeves for quick counter service, at the lowest unit cost and the smallest storage space in the range.',
    h1: 'Paper Cone Sleeves',
    cardBlurb: 'Lightweight wraps at the lowest unit cost, for fast counter service.',
    enquiryLabel: 'paper cone sleeves',
    intro: [
      'A paper sleeve is the lightest option in the range. It costs the least per unit, stores in almost no space, and does everything a sleeve needs to do for a cone that is eaten within a few minutes.',
      'For a busy kiosk turning over hundreds of cones a day, that combination usually beats a heavier specification.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'What a Light Paper Sleeve Does Well',
        items: [
          'Costs the least of any option here, which matters at volume.',
          'Takes very little cupboard space — a real consideration in a kiosk or van.',
          'Rolls and tucks quickly, so service does not slow down.',
          'Suits unlaminated, recyclable-stream specifications naturally.',
        ],
        outro:
          'What it does less well is hold up under a heavy, wet or slow-eaten serve.',
      },
      {
        kind: 'prose',
        heading: 'Matching the Paper to the Serve Time',
        body: [
          'The useful question is how long the cone is in the customer\'s hand. Two or three minutes at a kiosk is well within what light paper handles.',
          'Fifteen minutes on a warm promenade is not, and that is where a heavier or lined board earns its cost.',
        ],
        link: {
          href: '/custom-cardboard-cone-sleeves/',
          anchor: 'heavier board for longer serves',
          sentence:
            'Where cones are carried rather than eaten on the spot, {link} holds up considerably better.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Stock', 'Lightweight paper and light board'],
          ['Print', 'One or two colours suits this stock; full colour available'],
          ['Finish', 'Usually unlaminated'],
          ['Storage', 'Very compact per thousand'],
          ['Suits', 'High-volume, quick-turnover service'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will a paper sleeve go soggy?',
        a: 'It will eventually, and how quickly depends on how wet the product is and how long it is held. For quick counter service it is not usually an issue; for a cone carried across a park in August it is.',
      },
      {
        q: 'Is the print quality lower on paper?',
        a: 'Slightly softer than on coated board, because paper absorbs ink. One and two colour designs look fine. Photographic artwork is better on a coated stock.',
      },
      {
        q: 'How much less storage does paper stock need?',
        a: 'Substantially. A case holds far more than the same case of heavy board, which is often the deciding factor in a van or a kiosk with one cupboard.',
      },
      {
        q: 'Will paper sleeves tear during assembly?',
        a: 'Not with normal handling. They are lighter to roll, which is why high-volume counters like them, but they are less forgiving of being forced onto an oversized cone.',
      },
      {
        q: 'Are they strong enough for a double scoop?',
        a: 'For a cone eaten within a few minutes, generally yes. For a heavy serve carried any distance, a firmer board holds its shape considerably better.',
      },
      {
        q: 'Can paper sleeves be laminated?',
        a: 'They can, though laminating a lightweight stock removes much of the cost advantage that made it attractive. It is worth pricing both before deciding.',
      },
      {
        q: 'Do they suit an unlaminated recycling specification?',
        a: 'They are the natural fit for it. A light uncoated paper with a one or two colour print is the simplest thing in this range to put into a paper stream.',
      },
      {
        q: 'How does print quality compare with board?',
        a: 'Slightly softer, because paper absorbs ink. One and two colour designs look fine; photographic artwork is noticeably better on a coated stock.',
      },
      {
        q: 'Are they the cheapest option in the range?',
        a: 'Per unit, yes, on a like-for-like print. Whether they are the cheapest overall depends on whether they survive your service without being replaced.',
      },
      {
        q: 'Which service type suits them?',
        a: 'Quick counter turnover where the cone is eaten within a few minutes. A promenade kiosk in August is the case where they struggle.',
      },
    ],
    related: [
      'custom-cardboard-cone-sleeves',
      'custom-white-cone-sleeve',
      'custom-eco-friendly-cone-sleeves',
      'custom-ice-cream-cone-wrappers',
    ],
  },

  {
    slug: 'aluminium-foil-cone-sleeves',
    name: 'Aluminium Foil Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Foil Cone Sleeves UK | Metallic Ice Cream Wraps',
    seoDescription:
      'Foil-faced cone sleeves with a reflective metallic surface, used for moisture resistance and for premium and festive ranges.',
    h1: 'Aluminium Foil Cone Sleeves',
    cardBlurb: 'Foil-faced wraps with a metallic surface and added moisture resistance.',
    enquiryLabel: 'foil cone sleeves',
    intro: [
      'Foil-faced sleeves do two things a board sleeve cannot: they resist moisture completely on the faced side, and they catch light in a way that reads as premium on a counter.',
      'They are a specialist option rather than an everyday one, and the printing works differently.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Printing Onto a Reflective Surface',
        body: [
          'Ink on foil behaves unlike ink on board. The surface reflects light back through the ink, so colours look brighter and more transparent than the same file printed on white.',
          'Designs usually need adjusting for this. Solid areas can look thin, and pale tints can nearly disappear, so a white underbase is often printed first where opacity matters.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where a Foil Sleeve Is Chosen',
        items: [
          'Premium and limited-edition serves where the packaging is part of the price.',
          'Products with high moisture where a faced surface resists soaking through.',
          'Seasonal runs — festive ranges in particular, where metallic reads as celebratory.',
          'Photography-led brands, since foil catches light well in pictures.',
        ],
        outro:
          'It is a more expensive sleeve, so it tends to be used alongside a standard one rather than instead of it.',
      },
      {
        kind: 'callout',
        heading: 'Check Disposal Before Printing a Claim',
        body: 'A foil-faced board is a mixed material, which affects how it should be disposed of. Do not print a recycling instruction on a foil sleeve without confirming what your local stream accepts — the material and the instruction have to match.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Does foil keep ice cream colder?',
        a: 'Marginally, by reflecting radiant heat, but the effect over the few minutes a cone is held is small. The moisture barrier and the appearance are the real reasons to choose it.',
      },
      {
        q: 'Can we print full colour on foil?',
        a: 'Yes, though the result differs from the same artwork on white board. A white underbase restores opacity where needed. It is worth asking for a proof on the actual material rather than judging from screen.',
      },
      {
        q: 'Why do colours look different on foil?',
        a: 'Because the surface reflects light back through the ink. Colours read brighter and more transparent than the same file on white board, and pale tints can nearly disappear.',
      },
      {
        q: 'Can we print a solid colour on foil?',
        a: 'Yes, usually over a white underbase so the colour reads as intended rather than as a tint of the metal beneath it. That adds a printing pass.',
      },
      {
        q: 'Are foil sleeves recyclable?',
        a: 'A foil-faced board is a mixed material, which changes the disposal route. Do not print a recycling instruction on one without confirming what your local stream accepts.',
      },
      {
        q: 'Do they cost much more than board?',
        a: 'Noticeably more, which is why most sites use them for a premium or seasonal line alongside a standard sleeve rather than instead of one.',
      },
      {
        q: 'Will the foil crease when assembled?',
        a: 'A faced board creases like any other along the fold. What it does not do is crack the way a heavily inked unlaminated surface can.',
      },
      {
        q: 'Do foil sleeves keep ice cream colder?',
        a: 'Marginally, by reflecting radiant heat, but over the few minutes a cone is held the effect is small. The moisture barrier and the appearance are the real reasons to use them.',
      },
      {
        q: 'Can we get a proof on the actual material?',
        a: 'Ask at quote stage. Foil is one of the cases where judging from a screen is genuinely misleading, so a physical sample is worth more than usual.',
      },
      {
        q: 'Are they suitable for hot savoury cones?',
        a: 'The facing resists moisture well, but grease resistance is a separate specification. Tell us what goes inside and we will confirm rather than assume.',
      },
    ],
    related: [
      'custom-black-cone-sleeve',
      'custom-cardboard-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
      'abstract-design-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'custom-chicken-cone-sleeves',
    name: 'Custom Chicken Cone Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Chicken Cone Sleeves UK | Printed Savoury Cone Wraps',
    seoDescription:
      'Grease-resistant cone sleeves for popcorn chicken, wings and fried savoury portions, with a reinforced point for small pieces.',
    h1: 'Chicken Cone Sleeves',
    cardBlurb: 'Grease-resistant wraps for popcorn chicken and fried savoury cones.',
    enquiryLabel: 'chicken cone sleeves',
    intro: [
      'Serving fried chicken in a cone is a street-food format that works because it frees a hand and looks generous for the portion size. It also puts hot oil directly against the packaging.',
      'That is a materially different specification from an ice cream sleeve, even though the shape is similar.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Hot Oil, Not Cold Melt',
        body: [
          'Fried food arrives at temperature and continues to release oil into the packaging for several minutes. A board specified for ice cream goes translucent quickly under it.',
          'A grease-resistant liner or coating is not optional here. It is the difference between a sleeve that looks fine at the end of service and one the customer is holding by their fingertips.',
        ],
        link: {
          href: '/food-boxes/',
          anchor: 'chip and fried food packaging in other formats',
          sentence:
            'If a cone is not the right shape for your portion, {link} covers scoops and cartons.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Street-Food Traders Ask for on These',
        items: [
          'Grease-resistant board as standard rather than an upgrade.',
          'A deeper wrap, because savoury cones are usually filled higher than ice cream.',
          'A closed or reinforced point, since small pieces work their way down.',
          'A finish that stays gripped when hands are oily.',
          'Print that still reads under bright festival lighting.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Grease-resistant lined or coated board'],
          ['Depth', 'Deeper than an ice cream wrap, set from your portion'],
          ['Point', 'Reinforced or closed to hold small pieces'],
          ['Print', 'Full colour or spot; matt finish grips better than gloss'],
          ['Portion sizing', 'Set from the weight you serve, not a nominal volume'],
        ],
        note: 'Grease-resistant grades are confirmed against your fryer temperature and holding time on the quote.',
      },
    ],
    faqs: [
      {
        q: 'Can we use our ice cream cone sleeves for chicken?',
        a: 'The shape often works but the board rarely does. Untreated stock soaks through within minutes of hot chicken going in, so the sensible route is the same die in a grease-resistant board.',
      },
      {
        q: 'How do you stop small pieces falling through the point?',
        a: 'A reinforced or closed point on the die. It is worth specifying explicitly, since a sleeve designed to wrap a solid cone assumes there is a cone in there holding everything up.',
      },
      {
        q: 'What board do you recommend for fried chicken?',
        a: 'A grease-resistant lined or coated board, specified against your fryer temperature and how long portions are held before they are eaten. We confirm the grade on the quote.',
      },
      {
        q: 'How do we stop small pieces falling out?',
        a: 'A reinforced or closed point on the die. A sleeve designed to wrap a solid cone assumes something is holding the contents up, which loose pieces are not.',
      },
      {
        q: 'Can we use the same die as our ice cream cones?',
        a: 'The shape often works. The board rarely does, because untreated stock soaks through within minutes of hot chicken going in.',
      },
      {
        q: 'How deep should the wrap be?',
        a: 'Deeper than an ice cream sleeve, because savoury cones are filled higher. Measure a made-up portion rather than working from the empty cone.',
      },
      {
        q: 'Will the sleeve stay gripped with oily hands?',
        a: 'A matt finish grips considerably better than gloss when hands are greasy, which is why it is the usual specification for fried food.',
      },
      {
        q: 'Do these work at festivals and markets?',
        a: 'They are mostly bought for exactly that, because a cone leaves the customer a free hand. Outdoor trading argues for a laminated finish as well.',
      },
      {
        q: 'Can we print full colour on a grease-resistant board?',
        a: 'Yes. The grease resistance is a lining on the inner face, so the printable outer surface behaves like any other coated board.',
      },
      {
        q: 'How do we size for a portion by weight?',
        a: 'Weigh a typical serving on your own scales and send us the figure. Portion descriptions vary far too much between kitchens to size from.',
      },
    ],
    related: [
      'cone-fries-packaging',
      'french-fry-boxes',
      'custom-fries-sleeves',
      'fried-chicken-packaging',
    ],
  },

  {
    slug: 'crepe-cone-packaging',
    name: 'Crepe Cone Packaging',
    category: 'cone-sleeves',
    seoTitle: 'Crepe Cone Packaging UK | Printed Crepe Holders',
    seoDescription:
      'Printed cone holders for rolled crepes: wider at the top, grease-resistant, and cut deeper because there is no wafer inside.',
    h1: 'Crepe Cone Packaging',
    cardBlurb: 'Cone holders sized for rolled crepes, with a wider opening than an ice cream wrap.',
    enquiryLabel: 'crepe cone packaging',
    intro: [
      'A rolled crepe is wider, heavier and considerably wetter than an ice cream cone. Fillings move, sauces run, and the whole thing is warm.',
      'Packaging for it is closer to a chip cone than an ice cream sleeve, despite the shape being similar.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Crepe Cones Against Ice Cream Cones',
        intro: 'The differences all push in the same direction: more board, more coverage.',
        columns: ['Crepe cone', 'Ice cream cone'],
        rows: [
          ['Top diameter', 'Wider — a rolled crepe opens out considerably', 'Set by the wafer'],
          ['Weight', 'Heavier once filled', 'Lighter'],
          ['Moisture', 'Warm, wet fillings and sauces', 'Cold melt, slower'],
          ['Structure', 'The wrap holds the crepe; there is no rigid cone inside', 'The wafer holds itself'],
          ['Board needed', 'Grease-resistant, heavier', 'Standard board is usually adequate'],
        ],
        outro:
          'The structural point is the important one: a crepe cone holder is doing the job the wafer does in an ice cream cone.',
      },
      {
        kind: 'prose',
        heading: 'The Holder Is the Structure',
        body: [
          'With no rigid cone inside, the packaging carries the whole load. A light wrap folds and the crepe collapses out of the bottom.',
          'That is why crepe holders are cut deeper and in heavier board than an ice cream sleeve of the same top diameter.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to Confirm Before Ordering',
        items: [
          'The diameter of your rolled crepe at its widest, measured after filling.',
          'Whether sauces are added on top, which sets how high the holder should reach.',
          'Whether the crepe is served immediately or held briefly under a lamp.',
          'How much of the crepe you want visible for presentation.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a crepe holder be printed on the inside?',
        a: 'It can, and on a deep holder the inner face is visible every time the customer looks down. It adds a press pass, so decide before quoting rather than after.',
      },
      {
        q: 'Do crepe cones need a closed point?',
        a: 'A closed or tightly folded point is worth specifying. Warm fillings settle downwards, and an open point turns into a slow leak by the time the customer reaches the bottom.',
      },
      {
        q: 'How is a crepe holder different from an ice cream sleeve?',
        a: 'It is doing the job the wafer does in an ice cream cone. With nothing rigid inside, the holder carries the whole load, so it is cut deeper and in a heavier board.',
      },
      {
        q: 'What measurement do you need?',
        a: 'The diameter of your rolled crepe at its widest, measured after filling, plus how high the toppings sit. Both change with pan size and how tightly your team rolls.',
      },
      {
        q: 'Do crepe holders need a closed point?',
        a: 'Worth specifying. Warm fillings settle downwards, and an open point becomes a slow leak by the time the customer reaches the bottom.',
      },
      {
        q: 'Can the inside be printed?',
        a: 'On a deep holder the inner face is visible whenever the customer looks down, so it is worth considering. It adds a press pass, so decide before quoting.',
      },
      {
        q: 'Will chocolate sauce soak through?',
        a: 'Not through a greaseproof-lined board within a normal serve. On plain board it shows as a dark patch within a few minutes.',
      },
      {
        q: 'Are these suitable for savoury crepes?',
        a: 'Yes, and savoury fillings are often oilier, which strengthens the case for a lined board rather than a plain one.',
      },
      {
        q: 'Can we use one holder for folded and rolled crepes?',
        a: 'No. A folded crepe is a triangle and a rolled one is a cone, so the dies have nothing in common. Sites serving both need two items.',
      },
      {
        q: 'How do they ship?',
        a: 'Flat and die-cut, assembled at the counter. A deeper holder uses more board per unit but still stores far more compactly than a formed container.',
      },
    ],
    related: [
      'custom-crepe-sleeves',
      'custom-crepe-trays',
      'custom-chicken-cone-sleeves',
      'custom-rolled-ice-cream-cone-sleeves',
    ],
  },

  {
    slug: 'paper-mache-cones',
    name: 'Paper Mache Cones',
    category: 'cone-sleeves',
    seoTitle: 'Paper Mache Cones UK | Rigid Moulded Food Cones',
    seoDescription:
      'Rigid moulded paper cones that hold their own shape for chips, snacks and served portions, arriving formed rather than flat.',
    h1: 'Paper Mache Cones',
    cardBlurb: 'Rigid moulded cones that stand on their own without a wafer inside.',
    enquiryLabel: 'paper mache cones',
    intro: [
      'A moulded paper cone is a container in its own right, not a wrap around something else. It arrives already cone-shaped and rigid enough to hold a portion with nothing inside it.',
      'That makes it a different product from everything else on this page, and it suits food that has no structure of its own.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Formed, Not Folded',
        body: [
          'Where a sleeve is die-cut flat and rolled by staff, a moulded cone arrives in its final shape. There is no assembly step, which speeds up service and removes a training point.',
          'The cost of that is storage. Formed cones nest but still take considerably more space than flat stock, which matters in a van or a small kiosk.',
        ],
      },
      {
        kind: 'compare',
        heading: 'Moulded Cone Against a Flat Sleeve',
        columns: ['Moulded cone', 'Flat sleeve'],
        rows: [
          ['Assembly', 'None — ready to fill', 'Rolled and tucked per unit'],
          ['Holds food alone', 'Yes', 'No — needs a cone or a solid item inside'],
          ['Storage space', 'Considerably more', 'Minimal'],
          ['Print options', 'More limited on a formed shape', 'Full flat-sheet printing'],
          ['Unit cost', 'Higher', 'Lower'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where They Suit a Business',
        items: [
          'Chips and fried snacks served without a wafer or carton.',
          'Market stalls where speed of service outweighs storage cost.',
          'Sweets, nuts and dry snacks at events and fairs.',
          'Any serve where the customer needs a rigid container they can hold at the point.',
        ],
        link: {
          href: '/cone-fries-packaging/',
          anchor: 'cone-shaped chip packaging',
          sentence:
            'For chips specifically, {link} covers both the moulded and the folded approaches.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can moulded cones be printed?',
        a: 'Printing on a formed shape is more limited than printing flat, so designs are usually simpler — a logo and a colour rather than full artwork. We will confirm what is available for the size you need.',
      },
      {
        q: 'Are they suitable for hot, oily food?',
        a: 'With a grease-resistant specification, yes. Confirm the grade against your food rather than assuming, since a moulded cone is often chosen for chips, which are the hardest test.',
      },
      {
        q: 'How much storage do moulded cones need?',
        a: 'Considerably more than flat stock, even though they nest. In a van or a small kiosk that is usually the deciding factor against them.',
      },
      {
        q: 'Can they be printed?',
        a: 'More simply than flat stock. Printing onto a formed shape is limited, so designs are usually a logo and a colour rather than full artwork. We confirm what is available per size.',
      },
      {
        q: 'Are they suitable for hot chips?',
        a: 'With a grease-resistant specification, yes, and chips are one of the most common uses. Confirm the grade against your fryer rather than assuming.',
      },
      {
        q: 'Do they stand up on their own?',
        a: 'They are rigid, but a cone cannot stand unaided on a flat surface. If customers sit down to eat, plan for a holder as part of the order.',
      },
      {
        q: 'How do they compare on cost with a folded sleeve?',
        a: 'Higher per unit, because they arrive formed rather than flat. What you buy back is service speed, since there is no assembly step at all.',
      },
      {
        q: 'Can we use them for sweets and dry snacks?',
        a: 'Yes, and dry goods are the easiest case, since no lining is needed. That makes them cheaper than the same cone specified for fried food.',
      },
      {
        q: 'Do they need a die?',
        a: 'Not a cutting die, because they are moulded rather than die-cut. Tooling for a moulded shape works differently, which we confirm on the quote.',
      },
      {
        q: 'Are they available in colours?',
        a: 'Availability of coloured stock varies by size and run length. Tell us what you need and we will confirm rather than listing options that may not be produced.',
      },
    ],
    related: [
      'cone-fries-packaging',
      'custom-chicken-cone-sleeves',
      'french-fry-boxes',
      'ice-cream-cone-holder',
    ],
  },

  {
    slug: 'custom-die-cut-sleeves',
    name: 'Custom Die-Cut Sleeves',
    category: 'cone-sleeves',
    seoTitle: 'Custom Die Cut Sleeves UK | Shaped Packaging Sleeves',
    seoDescription:
      'Sleeves cut to a shape of your own, including windows, contours and locking tabs, on a bespoke tool rather than a stock die.',
    h1: 'Custom Die-Cut Sleeves',
    cardBlurb: 'Sleeves cut to a shape of your own, including windows and contoured edges.',
    enquiryLabel: 'custom die-cut sleeves',
    intro: [
      'Everything else in this range starts from a known shape. This page is for the jobs that do not — a sleeve with a window, a contoured top edge, an unusual product profile, or a shape nobody has cut before.',
      'A bespoke die costs more up front and then costs nothing extra per unit, which changes how you should think about the quantity.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Tooling Is a One-Off, Not a Per-Unit Cost',
        body: [
          'A die is a physical tool. It is made once, paid for once, and used for every reorder afterwards.',
          'That means the tooling cost spreads across everything you ever print from it. On a first order of a few thousand it looks expensive; across three years of reorders it usually is not.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Shapes Worth a Bespoke Tool',
        items: [
          'A window that shows the product through the sleeve.',
          'A contoured top edge that follows the shape of what it wraps.',
          'A locking tab so the sleeve holds without glue.',
          'A profile matching a product that no standard sleeve fits.',
          'A hanging or display feature for retail rather than counter sale.',
        ],
        outro:
          'Anything that can be drawn as a closed outline can generally be cut, within limits on very fine detail.',
      },
      {
        kind: 'steps',
        heading: 'How a Bespoke Die Job Runs',
        steps: [
          {
            title: 'Describe the Shape and the Product',
            body: 'A sketch and the product\'s dimensions are enough to start. A physical sample is better.',
          },
          {
            title: 'We Produce a Die Line',
            body: 'A drawing showing cut, crease, overlap and safe area, which your designer works onto.',
          },
          {
            title: 'Check a Plain Cut Sample',
            body: 'An unprinted sample cut on the tool, wrapped around the real product. Changes are cheapest here.',
          },
          {
            title: 'Print from the Approved Tool',
            body: 'Once the shape is signed off the artwork is placed and the run scheduled.',
          },
        ],
        link: {
          href: '/artwork-guidelines/',
          anchor: 'what we need in an artwork file',
          sentence:
            'Our {link} covers the file formats and layers that make this stage quick.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do we own the die once it is made?',
        a: 'Ownership, storage and reuse terms are set out on your quote. It is a fair question to ask before committing, and we would rather put it in writing than leave it assumed.',
      },
      {
        q: 'Can a window be cut without adding film behind it?',
        a: 'Yes — an open cut-out with no film is common and avoids a mixed material. The trade-off is that the product is exposed at that point, which suits a wrapped item and not a loose one.',
      },
      {
        q: 'How small can cut detail be?',
        a: 'Fine detail is limited by the board thickness — a thick board cannot hold a sharp small feature cleanly. Send the shape and we will tell you what will and will not cut before you commit.',
      },
      {
        q: 'How long does a new die take to make?',
        a: 'It is a separate step ahead of printing, and its lead time is confirmed with your quote. A first order with new tooling always runs longer than a reorder from the same tool.',
      },
      {
        q: 'Can you cut any shape?',
        a: 'Anything that can be drawn as a closed outline, within limits on very fine detail. Board thickness sets how sharp a small feature can be, and we will tell you before you commit.',
      },
      {
        q: 'Do we need to supply a technical drawing?',
        a: 'No. A sketch and the product\'s dimensions are enough to start, and a physical sample is better still. We produce the die line from that.',
      },
      {
        q: 'Can we see the shape before printing?',
        a: 'Yes, as an unprinted sample cut on the tool. Wrapping that around the real product is the cheapest possible moment to change anything.',
      },
      {
        q: 'Is a window cheaper without film?',
        a: 'Yes, and it avoids a mixed material. The trade-off is that the product is exposed at that point, which suits a wrapped item more than a loose one.',
      },
      {
        q: 'Can the die include a locking tab?',
        a: 'Yes, and it removes the need for glue on some formats. It has to be designed into the shape rather than added later, so raise it early.',
      },
      {
        q: 'What happens to the die between orders?',
        a: 'Storage and reuse terms are set out on your quote. It is a fair question to ask before committing, and we would rather put it in writing than leave it assumed.',
      },
    ],
    related: [
      'abstract-design-ice-cream-cone-sleeves',
      'custom-gift-card-sleeves',
      'custom-small-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
    ],
  },
];
