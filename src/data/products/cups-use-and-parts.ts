import type { Product } from '../types';

/** Coffee cups, food cups, cardboard cups, cup parts, printed designs, drinking cups. */
export const CUPS_BY_USE: Product[] = [
  // --- Coffee cups ---------------------------------------------------------
  {
    slug: 'custom-paper-coffee-cups',
    name: 'Custom Paper Coffee Cups',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Custom Paper Coffee Cups UK | Branded Takeaway Cups',
    seoDescription:
      'Branded takeaway coffee cups for UK cafés, with artwork planned around the third of the cup a hand covers while it is held.',
    h1: 'Custom Paper Coffee Cups',
    cardBlurb: 'Branded takeaway cups, designed around how they are held.',
    enquiryLabel: 'custom printed coffee cups',
    intro: [
      'A takeaway cup is the most travelled object a café owns. It goes down the high street, sits on a desk for an hour, and turns up in the background of other people\'s photographs.',
      'Designing one well means accepting that a third of it is covered by a hand at any moment.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Third of the Cup Is Always Hidden',
        body: [
          'A right-handed grip covers a predictable band of the cup, and the customer will not rotate it to show your logo.',
          'Designs that repeat around the circumference survive this. A single mark placed once has roughly even odds of facing away for the entire life of the drink.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Sizes', 'Commonly 8oz and 12oz; 16oz for large and iced'],
          ['Wall', 'Single wall with a sleeve, or double wall'],
          ['Board', 'White for colour accuracy, kraft for a plain look'],
          ['Print', 'Flexo for long runs, digital for shorter runs or several designs'],
          ['Lids', 'Matched by rim diameter, not by stated volume'],
        ],
        note: 'Minimum quantities on printed cups are higher than on sleeves, and are confirmed per quote.',
      },
      {
        kind: 'callout',
        heading: 'Sleeves Are the Cheaper Way In',
        body: 'Printed cups carry die costs and minimum quantities that a single site often cannot justify. A printed sleeve on a plain cup achieves most of the branding effect for a fraction of the commitment, and it is where most independents start.',
        link: {
          href: '/custom-printed-coffee-sleeves/',
          anchor: 'printed sleeves on plain cups',
          sentence: 'For a first branded order, {link} are usually the more sensible route.',
        },
      },
    ],
    faqs: [
      {
        q: 'How many cups do we need to order to make printing worthwhile?',
        a: 'That depends on the print method rather than a fixed threshold. Digital printing makes far smaller runs viable than conventional flexo. Send your realistic annual usage and we will tell you which route fits.',
      },
      {
        q: 'Should the logo appear once or repeat around the cup?',
        a: 'Repeat it. A single logo faces away from the viewer about as often as it faces towards them, and customers do not turn the cup to help.',
      },
      {
        q: 'Should the logo repeat around the cup?',
        a: 'Yes. A hand covers roughly a third of the cup, so a single mark faces away as often as towards the viewer.',
      },
      {
        q: 'How many cups make printing worthwhile?',
        a: 'It depends on the print method rather than a threshold. Digital makes far smaller runs viable than conventional flexo does.',
      },
      {
        q: 'Are sleeves cheaper than printed cups?',
        a: 'For a single site, almost always. A printed sleeve on a plain cup avoids cup dies and minimum quantities entirely.',
      },
      {
        q: 'Which sizes should we print first?',
        a: '12oz, because it is the most ordered and the one that appears in photographs and on desks.',
      },
      {
        q: 'Do we need matching lids?',
        a: 'Only if drinks leave the building. Lids are matched by rim diameter rather than stated volume, so send a cup.',
      },
      {
        q: 'Can we run several sizes in one order?',
        a: 'Yes, and it shares the setup. Each size needs its own layout because the flat blank differs.',
      },
      {
        q: 'Will kraft change our brand colour?',
        a: 'Yes, warmer and darker. If the colour must be exact, that means white board or a white underbase.',
      },
      {
        q: 'How do we estimate annual usage?',
        a: 'Count a typical week of takeaway hot drinks and scale it. Annual guesses made without till data are usually well out.',
      },
    ],
    related: ['12-oz-paper-cups', 'kraft-coffee-cups', 'custom-printed-coffee-sleeves', 'paper-coffee-cup-lids'],
  },

  {
    slug: 'kraft-coffee-cups',
    name: 'Kraft Coffee Cups',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Kraft Coffee Cups UK | Brown Board Takeaway Cups',
    seoDescription:
      'Kraft takeaway coffee cups in unbleached brown board, suited to one and two colour designs rather than photographic artwork.',
    h1: 'Kraft Coffee Cups',
    cardBlurb: 'Brown board takeaway cups suited to simple, strong designs.',
    enquiryLabel: 'kraft coffee cups',
    intro: [
      'Kraft coffee cups are chosen by independents who want their packaging to look unmanufactured. The brown board does a lot of the work before any ink is applied.',
      'Designs that suit it are simple. Designs that fight it are the ones that arrive looking disappointing.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'What Works on Kraft',
        items: [
          'A single dark colour, which prints predictably on a warm base.',
          'Line illustration and hand-drawn marks, which suit the unbleached look.',
          'Type reversed out to the board colour, using the brown as a design element.',
          'A white ink accent, which reads brightly against brown.',
        ],
        outro: 'Photographs and pale gradients are the two things that consistently disappoint on kraft.',
        link: {
          href: '/kraft-paper-cups/',
          anchor: 'how inks behave on unbleached board',
          sentence: 'The colour-shift detail is covered on {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'Kraft and Double Wall Together',
        body: [
          'A double-wall kraft cup is a common café specification because the outer wall can be kraft while the inner one is standard, giving the look without changing what touches the drink.',
          'It also removes the need for a sleeve, which matters if you like the plain look but not the extra item.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we print our full-colour logo on a kraft cup?',
        a: 'You can, but it will read darker and warmer than intended. If the colours are critical, a white underbase restores accuracy at extra cost, or a white cup avoids the issue entirely.',
      },
      {
        q: 'Is kraft more expensive than white?',
        a: 'The board is usually similar. Where costs differ is in the artwork — a design needing a white underbase to sit correctly on kraft adds a printing pass.',
      },
      {
        q: 'What artwork suits kraft cups?',
        a: 'A single dark colour, line illustration, or type reversed to the board colour. Photographs and pale gradients consistently disappoint.',
      },
      {
        q: 'Can we use white ink on kraft?',
        a: 'Yes, and it reads brightly against the brown. It is an extra ink, so price it rather than assuming it is included.',
      },
      {
        q: 'Is a double-wall kraft cup possible?',
        a: 'Commonly, with a kraft outer and a standard inner. That gives the look without changing what touches the drink.',
      },
      {
        q: 'Do kraft cups need a sleeve?',
        a: 'On a single wall with a hot drink, yes, above about 8oz. A double-wall kraft cup removes that need.',
      },
      {
        q: 'Will the brown vary between orders?',
        a: 'A little, because unbleached board shifts between mill batches. It matters if cups sit beside other matched packaging.',
      },
      {
        q: 'Is kraft an environmental choice?',
        a: 'It skips a bleaching stage, which is real. It does not change the lining inside or how the cup is collected.',
      },
      {
        q: 'Can we print two colours on kraft?',
        a: 'Yes. Two well-chosen inks usually look better on kraft than four fighting the brown base, because every colour printed on unbleached board shifts warmer than it would on white.',
      },
      {
        q: 'Do kraft cups cost more?',
        a: 'The board is usually similar to white. Cost differs where artwork needs a white underbase to sit correctly.',
      },
    ],
    related: ['kraft-paper-cups', 'custom-paper-coffee-cups', 'brown-paper-cups', 'cardboard-coffee-cups'],
  },

  {
    slug: 'hot-chocolate-paper-cups',
    name: 'Hot Chocolate Paper Cups',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Hot Chocolate Cups UK | Printed Cups for Toppings',
    seoDescription:
      'Printed hot chocolate cups sized for cream, marshmallows and toppings that sit proud of the rim, and the lids that clear them.',
    h1: 'Hot Chocolate Paper Cups',
    cardBlurb: 'Cups sized for drinks finished with cream and toppings.',
    enquiryLabel: 'hot chocolate cups',
    intro: [
      'Hot chocolate is the fullest pour on most menus and it is usually finished above the rim with cream, marshmallows or a dusting.',
      'That combination — a full cup plus a topping that stands proud — makes lidding and carrying the real design question.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Toppings and Lids Do Not Coexist Easily',
        body: [
          'A flat lid crushes a cream topping. A domed lid clears it but adds cost and takes more storage space.',
          'The practical answer for many sites is to serve topped drinks without a lid for eat-in and offer a lidded version without the topping for takeaway.',
        ],
        link: {
          href: '/paper-coffee-cup-lids/',
          anchor: 'domed lids that clear a topping',
          sentence: 'Where topped drinks must travel, {link} are the part to specify.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Points Worth Deciding',
        items: [
          'Whether topped drinks are lidded at all.',
          'Cup volume allowing for a topping, which reduces the usable liquid fill further.',
          'Double wall, since hot chocolate is served very hot and held for longer.',
          'Whether a seasonal design runs on the same cup in winter.',
        ],
        outro: 'Hot chocolate volumes peak sharply in December, which is worth planning stock around.',
      },
    ],
    faqs: [
      {
        q: 'What size cup suits hot chocolate?',
        a: 'Usually a size up from your standard coffee, because the pour is fuller and a topping needs headspace. Many sites use 12oz for coffee and 16oz for hot chocolate for that reason.',
      },
      {
        q: 'Can a topped drink be lidded?',
        a: 'Only with a domed lid, and even then a tall cream swirl will touch it. Most sites accept that topped drinks are an eat-in offer and serve takeaway versions without.',
      },
      {
        q: 'What size suits hot chocolate?',
        a: 'Usually a size up from your standard coffee, because the pour is fuller and a topping needs headspace above it.',
      },
      {
        q: 'Do these need double wall?',
        a: 'Often. Hot chocolate is served very hot and held for longer than an espresso-based drink, so comfort matters more.',
      },
      {
        q: 'Will cream marks show on the print?',
        a: 'On a pale cup, yes. A darker or busier design disguises the inevitable drips down the outside.',
      },
      {
        q: 'Is demand seasonal?',
        a: 'Sharply. Hot chocolate volumes peak in December, which is worth planning stock and any seasonal print around.',
      },
      {
        q: 'Can we run a festive version?',
        a: 'Yes, and hot chocolate is the drink most often given a festive cup. Start the conversation in late summer rather than autumn.',
      },
      {
        q: 'Do we need a bigger lid?',
        a: 'A domed lid clears a topping where a flat one crushes it. Confirm the rim rather than the volume when matching.',
      },
      {
        q: 'How do we cost the drink?',
        a: 'Allow for the topping as well as the liquid. A topped 16oz cup delivers less drink than the number suggests.',
      },
      {
        q: 'Can we run a festive hot chocolate cup?',
        a: 'Yes, and it is one of the most common seasonal requests. Order earlier than feels necessary, because press capacity tightens.',
      },
    ],
    related: ['12-oz-paper-cups', 'custom-paper-coffee-cups', 'paper-coffee-cup-lids', 'christmas-coffee-cups'],
  },

  {
    slug: 'disposable-hot-cups',
    name: 'Disposable Hot Cups',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Disposable Hot Cups UK | Printed Hot Drink Cups',
    seoDescription:
      'Disposable hot drink cups specified for heat, covering the wall construction and lining that genuine hot service needs.',
    h1: 'Disposable Hot Cups',
    cardBlurb: 'Cups specified for heat — wall construction and lining for hot service.',
    enquiryLabel: 'disposable hot cups',
    intro: [
      'A hot cup is defined by its lining and its wall, not by its shape. Get either wrong and the cup either leaks or is too hot to hold.',
      'This page covers the specification rather than a particular size, for buyers who know they need hot cups and want to get the construction right.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Single Wall, Double Wall and Ripple',
        columns: ['Single wall', 'Double or ripple wall'],
        rows: [
          ['Comfort', 'Needs a sleeve above 8oz', 'Comfortable without one'],
          ['Cost per cup', 'Lower', 'Higher'],
          ['Total cost with sleeve', 'Often close to double wall', 'One item, one cost'],
          ['Storage', 'More cups per box', 'Bulkier'],
          ['Print', 'Smooth surface, sharp detail', 'Ripple texture softens fine detail'],
        ],
        outro: 'Compare the single-wall-plus-sleeve total against double wall before assuming single wall is cheaper.',
      },
      {
        kind: 'prose',
        heading: 'The Lining Is What Makes It a Hot Cup',
        body: [
          'Board on its own goes soft against a hot liquid within minutes. The lining is the barrier, and it has to tolerate the temperature the drink is served at.',
          'This is where wax-lined cups fail — the coating softens with heat, which is why they belong on cold service only.',
        ],
        link: {
          href: '/wax-paper-cups/',
          anchor: 'wax-lined cups and why they suit cold service',
          sentence: 'The contrast is set out on {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is single wall plus a sleeve cheaper than double wall?',
        a: 'Less often than people assume. Once you count both items and the extra handling at service, the totals are frequently close, and double wall removes a stock line.',
      },
      {
        q: 'What temperature can a hot cup handle?',
        a: 'Standard hot drink service is well within what a properly lined cup handles. If your application involves higher or sustained heat, tell us and we will confirm a suitable specification rather than assume.',
      },
      {
        q: 'Is single wall plus a sleeve cheaper?',
        a: 'Less often than assumed. Counting both items and the extra handling, the totals are frequently close to double wall.',
      },
      {
        q: 'Why do wax cups fail with hot drinks?',
        a: 'The coating softens with heat and transfers onto the drink. It is a cold and ambient material rather than a hot one.',
      },
      {
        q: 'What is ripple wall?',
        a: 'An outer layer with a fluted texture bonded to the cup, giving insulation similar to a sleeve without a separate item.',
      },
      {
        q: 'Does double wall print differently?',
        a: 'The outer surface is slightly textured, which softens fine detail. Single wall holds small type more cleanly.',
      },
      {
        q: 'How much storage does double wall need?',
        a: 'Noticeably more per thousand, because each cup is thicker. Worth checking against your store room before switching.',
      },
      {
        q: 'Do these need lids?',
        a: 'Only if drinks leave the building. Where they do, match the lid to the rim rather than the stated volume.',
      },
      {
        q: 'Can we mix wall types across sizes?',
        a: 'Yes, and some sites do — single wall with a sleeve on small drinks, double wall on large. Tell us the split.',
      },
      {
        q: 'Do you supply matching lids?',
        a: 'Yes, matched by rim diameter rather than volume. Ordering cups and lids together avoids the commonest fitting problem.',
      },
    ],
    related: ['single-wall-paper-cups', 'custom-paper-coffee-cups', 'paper-cup-sleeves', '12-oz-paper-cups'],
  },

  {
    slug: 'single-wall-paper-cups',
    name: 'Single Wall Paper Cups',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Single Wall Paper Cups UK | Printed Economy Cups',
    seoDescription:
      'Single wall printed paper cups: the lowest cost per unit and the sharpest print surface, normally paired with a sleeve.',
    h1: 'Single Wall Paper Cups',
    cardBlurb: 'Lowest cost per cup and the sharpest print surface, paired with a sleeve.',
    enquiryLabel: 'single wall paper cups',
    intro: [
      'A single wall cup is one layer of lined board. It costs the least, stores the most compactly, and prints the most sharply of any construction.',
      'What it does not do is insulate, which is why it is normally paired with a sleeve above 8oz.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Where Single Wall Is the Right Answer',
        items: [
          'Espresso and small hot drinks, where there is little heat against the hand.',
          'Cold drinks, which need no insulation at all.',
          'High-volume operations where storage space is limited.',
          'Any site already buying sleeves for branding reasons.',
        ],
        outro: 'If you are printing sleeves anyway, single wall cups plus sleeves is a coherent specification rather than a compromise.',
        link: {
          href: '/custom-printed-coffee-sleeves/',
          anchor: 'sleeves that add both grip and branding',
          sentence: 'The combination works particularly well with {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'The Smooth Surface Prints Most Cleanly',
        body: [
          'A ripple or double wall cup has a textured outer surface that softens fine detail. A single wall cup does not.',
          'For a brand with small type, a detailed mark or a QR code, single wall gives a noticeably cleaner result.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a single wall cup too hot to hold?',
        a: 'Above about 8oz with a hot drink, most people find it uncomfortable without a sleeve. Below that, and for cold drinks, it is fine on its own.',
      },
      {
        q: 'Does single wall print better than double wall?',
        a: 'Noticeably, for fine detail. The outer surface is smooth rather than textured, so small type and detailed marks hold cleanly.',
      },
      {
        q: 'Why does single wall print better?',
        a: 'The outer surface is smooth rather than textured, so small type, fine detail and QR codes hold cleanly.',
      },
      {
        q: 'How much storage do they save?',
        a: 'Considerably. A case holds far more single wall cups than double wall, which matters in a small back-of-house.',
      },
      {
        q: 'Do these suit cold drinks?',
        a: 'Very well, since no insulation is needed. Condensation on the outside is the only consideration, and a sleeve solves grip.',
      },
      {
        q: 'Should we pair them with sleeves?',
        a: 'If you are printing sleeves anyway, single wall cups plus sleeves is a coherent specification rather than a compromise.',
      },
      {
        q: 'Are they the cheapest hot cup?',
        a: 'Per cup, yes. Whether they are cheapest overall depends on whether you then buy sleeves to go with them.',
      },
      {
        q: 'Will they deform when squeezed?',
        a: 'At larger sizes with a full drink, a thin single wall can, which is what pops a lid. Wall stiffness matters above 16oz.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and this is the construction that reproduces it most cleanly, because the surface is smooth.',
      },
      {
        q: 'Do you supply these with sleeves?',
        a: 'Yes, and single wall plus a printed sleeve is a coherent specification rather than a compromise. Send both quantities.',
      },
    ],
    related: ['disposable-hot-cups', 'paper-cup-sleeves', '8-oz-paper-cups', 'custom-printed-coffee-sleeves'],
  },

  {
    slug: 'paper-coffee-cup-holders',
    name: 'Paper Coffee Cup Holders',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Coffee Cup Carriers UK | Printed 2 & 4 Cup Holders',
    seoDescription:
      'Printed cup carriers for two and four takeaway drinks, with holes cut to your cups so nothing rattles or tips in transit.',
    h1: 'Coffee Cup Carriers',
    cardBlurb: 'Two and four cup carriers sized to the cups you actually use.',
    enquiryLabel: 'coffee cup carriers',
    intro: [
      'A carrier is what turns one customer into an office order. Without one, nobody buys four coffees, because nobody can carry four coffees.',
      'It is one of the highest-return items a café can add, and it is frequently sized wrong.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Holes Have to Match Your Cups',
        body: [
          'A carrier grips the cup wall partway down. Cut for a wider cup, it lets yours rattle and tip; cut too small, staff force the cup and split the board.',
          'This is a measurement job, not a stock purchase. Send us the cups you use, including the largest.',
        ],
        link: {
          href: '/paper-cups/coffee-cups/',
          anchor: 'the cup range carriers are sized against',
          sentence: 'Carriers are normally ordered alongside {link} so both match.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Makes a Carrier Work in Practice',
        items: [
          'A handle or grip point that a hand can get into while holding a bag.',
          'Enough rigidity that the centre does not sag under four full cups.',
          'Hole spacing that stops cups knocking together and popping lids.',
          'A flat base so the carrier can be set down on a car seat.',
        ],
        outro: 'Four is the practical maximum; six-cup carriers exist but are awkward through doorways.',
      },
    ],
    faqs: [
      {
        q: 'Will one carrier fit all our cup sizes?',
        a: 'Often it will, if your sizes share a similar diameter at the grip point. Where an 8oz and a 20oz are both on the menu, they usually do not, and two carriers are needed.',
      },
      {
        q: 'Are carriers worth printing?',
        a: 'They travel into offices and meeting rooms and are seen by everyone the order is delivered to, which is a wider audience than the cups themselves reach. For most cafés, yes.',
      },
      {
        q: 'How many cups should a carrier take?',
        a: 'Two or four. Six exists but becomes awkward through doorways and the centre starts to flex.',
      },
      {
        q: 'Will cups rattle in transit?',
        a: 'Not with holes cut to your cups. A carrier sized for a wider cup lets yours tip, which is the usual complaint.',
      },
      {
        q: 'Do carriers need a handle?',
        a: 'Once four full cups are in one, yes. Without a grip point it needs two hands and the customer puts something down.',
      },
      {
        q: 'Will the centre sag?',
        a: 'Not with enough board rigidity. A carrier that folds at the centre under four cups is the failure worth testing on a sample.',
      },
      {
        q: 'How do they store?',
        a: 'Flat, and formed at the counter. That keeps storage small, which matters where they are used in bursts.',
      },
      {
        q: 'Do they increase order size?',
        a: 'They make a four-coffee order possible, which is usually why cafés add them. Nobody buys four coffees they cannot carry.',
      },
      {
        q: 'Can a carrier take different cup sizes at once?',
        a: 'With holes cut for a mix, yes. Tell us the combination you serve rather than assuming one hole size covers it.',
      },
      {
        q: 'Do carriers work with sleeved cups?',
        a: 'They need cutting to allow for the sleeve, which adds thickness exactly where the carrier grips. Tell us if cups are sleeved.',
      },
    ],
    related: ['paper-cups-with-lids', 'custom-paper-coffee-cups', '12-oz-paper-cups', 'paper-coffee-cup-lids'],
  },

  {
    slug: 'paper-coffee-cup-lids',
    name: 'Paper Coffee Cup Lids',
    category: 'paper-cups',
    subcategory: 'coffee-cups',
    seoTitle: 'Coffee Cup Lids UK | Sip, Flat & Domed Cup Lids',
    seoDescription:
      'Cup lids matched by rim diameter rather than stated volume, in sip, flat, vented and domed types for hot and cold drinks.',
    h1: 'Coffee Cup Lids',
    cardBlurb: 'Sip, flat and domed lids matched by rim diameter.',
    enquiryLabel: 'coffee cup lids',
    intro: [
      'Lids fit rims. They do not fit volumes, and two cups both sold as 12oz can take completely different lids.',
      'Almost every lid problem traces back to that one fact.',
    ],
    sections: [
      {
        kind: 'specs',
        heading: 'Lid Types and What Each Is For',
        rows: [
          ['Sip lid', 'Hot drinks; a raised drinking aperture'],
          ['Flat lid', 'Cold drinks, usually with a straw slot'],
          ['Domed lid', 'Toppings and whipped cream that stand above the rim'],
          ['Vented lid', 'Hot drinks carried a long way, releasing steam'],
          ['Sizing basis', 'Rim diameter across the outside of the rolled edge'],
        ],
        note: 'Send a cup or the rim measurement, not the stated volume, when asking about lids.',
      },
      {
        kind: 'prose',
        heading: 'Sharing a Lid Across Sizes',
        body: [
          'Many cup ranges use one rim across 8oz and 12oz, with the taller cup being the larger volume. That means one lid covers both.',
          'It halves the lid lines you hold and removes the commonest service mistake — the wrong lid grabbed during a rush.',
        ],
        link: {
          href: '/8-oz-paper-cups/',
          anchor: 'the 8oz and 12oz rim overlap',
          sentence: 'Whether your sizes share a lid is covered under {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can you supply lids for cups we bought elsewhere?',
        a: 'Usually, provided the rim measures to a diameter we can match. Send the measurement or a sample cup so we can confirm before quoting rather than after delivery.',
      },
      {
        q: 'Why does a lid that fits one 12oz cup not fit another?',
        a: 'Because the stated volume says nothing about the rim. Two cups holding the same amount can differ by a few millimetres at the rim, which is more than enough for a lid to sit loose.',
      },
      {
        q: 'Why will a lid not fit our cups?',
        a: 'Because lids match rims, not volumes. Two cups holding the same amount can differ by millimetres at the rim.',
      },
      {
        q: 'Can you supply lids for cups bought elsewhere?',
        a: 'Usually, provided the rim measures to a diameter we can match. Send the measurement or a sample cup.',
      },
      {
        q: 'What is the difference between lid types?',
        a: 'Sip lids suit hot drinks, flat lids suit cold with a straw, domed lids clear a topping, and vented lids release steam.',
      },
      {
        q: 'Can we reduce the number of lid lines?',
        a: 'Often, by choosing cup sizes that share a rim. An 8oz and a 12oz frequently can, taking two lines down to one.',
      },
      {
        q: 'Are lids printed?',
        a: 'Normally plain. Printing a lid adds cost for a surface largely hidden by a hand and a mouth once it is in use.',
      },
      {
        q: 'Do we need vented lids?',
        a: 'For drinks carried a long way, they help. Venting releases steam that would otherwise condense inside the lid.',
      },
      {
        q: 'How do we measure a rim?',
        a: 'Across the outside of the rolled edge, at the widest point. That measurement is what a lid is matched against.',
      },
      {
        q: 'Can lids be ordered in a different ratio?',
        a: 'Yes, and often should be. Sites serving some drinks without lids need fewer, so tell us the ratio you actually use.',
      },
    ],
    related: ['paper-cups-with-lids', 'custom-paper-coffee-cups', 'paper-coffee-cup-holders', 'hot-chocolate-paper-cups'],
  },

  // --- Food cups -----------------------------------------------------------
  {
    slug: 'paper-dessert-cups',
    name: 'Paper Dessert Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Dessert Cups UK | Printed Pudding & Sundae Cups',
    seoDescription:
      'Printed dessert cups for sundaes, layered puddings and takeaway desserts, sized around the lid you choose rather than after.',
    h1: 'Paper Dessert Cups',
    cardBlurb: 'Cups for sundaes, layered puddings and takeaway desserts.',
    enquiryLabel: 'paper dessert cups',
    intro: [
      'A dessert cup is chosen around its lid more than its volume. A domed lid adds capacity above the rim; a flat one takes it away.',
      'Deciding the lid first is the single most useful thing you can do before sizing.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Lid Changes the Portion',
        body: [
          'With a domed lid, a scoop can sit proud of the rim and the customer sees a generous serve. With a flat lid, the fill line drops below the rim and the same cup delivers noticeably less.',
          'Sites that pick the cup first and the lid second often end up serving smaller portions than they costed.',
        ],
        link: {
          href: '/ice-cream-paper-cups-with-lids/',
          anchor: 'cups supplied with matched lids',
          sentence: 'Ordering both together avoids the mismatch, as covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Details That Matter for Desserts',
        items: [
          'Condensation on the outside, if the dessert is chilled or frozen.',
          'Whether the cup is transparent enough to show layers, or opaque and printed.',
          'Spoon length against cup depth — a tall cup needs a long spoon.',
          'Stability, since a narrow tall cup tips easily on a table.',
        ],
        outro: 'For layered desserts sold on appearance, a clear cup usually beats a printed one.',
      },
    ],
    faqs: [
      {
        q: 'Should we choose the cup or the lid first?',
        a: 'The lid, because it decides how much of the cup you can actually fill. A domed lid lets you serve above the rim; a flat one caps you below it.',
      },
      {
        q: 'Do dessert cups need a different lining from drink cups?',
        a: 'For cold desserts, a coated outer face matters more than the inner lining, because condensation attacks the printed outside rather than the inside.',
      },
      {
        q: 'Do dessert cups need an outer coating?',
        a: 'For chilled or frozen desserts, yes. Condensation attacks the printed outside rather than the lining inside.',
      },
      {
        q: 'Will a scoop fit under a flat lid?',
        a: 'Only if the cup is filled below the rim, which reduces the portion. That is the trade a flat lid makes.',
      },
      {
        q: 'Can we use clear cups instead?',
        a: 'For layered desserts, often better. If the layers are the selling point, hiding them behind print works against you.',
      },
      {
        q: 'How long a spoon do we need?',
        a: 'Match it to the cup depth. A tall cup with a short spoon is a recurring complaint that packaging cannot fix afterwards.',
      },
      {
        q: 'Will a narrow cup tip on a table?',
        a: 'Tall narrow cups do. A wider base is more stable but shows less of a layered dessert from the side.',
      },
      {
        q: 'Can we run several designs?',
        a: 'On digital printing, yes. Send the split between them rather than a total so the quantities are priced properly.',
      },
      {
        q: 'Do these suit takeaway?',
        a: 'With a lid that seals, yes. Without one they are a counter and seated product rather than a travelling one.',
      },
      {
        q: 'Do you supply matching lids?',
        a: 'Yes, matched by rim diameter. Choose the lid type first, since it decides how much of the cup you can fill.',
      },
    ],
    related: ['ice-cream-paper-cups', 'bowl-paper-cups', 'paper-serving-cups', 'ice-cream-paper-cups-with-lids'],
  },

  {
    slug: 'ice-cream-paper-cups',
    name: 'Ice Cream Paper Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Ice Cream Paper Cups UK | Printed Scoop Cups',
    seoDescription:
      'Printed ice cream cups for scoop service, with a coated outer face that resists the condensation a cold cabinet produces.',
    h1: 'Ice Cream Paper Cups',
    cardBlurb: 'Scoop service cups with a coated face that handles condensation.',
    enquiryLabel: 'ice cream paper cups',
    intro: [
      'An ice cream cup spends its working life going from a cold cabinet into a warm hand, and condensation forms almost immediately.',
      'That moisture attacks the printed outside rather than the lined inside, which is the opposite of how most cups are specified.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Outside Is What Needs Protecting',
        body: [
          'A drink cup is lined inside because the liquid is inside. An ice cream cup is dry inside and wet outside within a minute of leaving the freezer.',
          'A coated or laminated outer face keeps the print sharp and stops the board going soft under a customer\'s grip.',
        ],
        link: {
          href: '/',
          anchor: 'cone sleeves for the same customers',
          sentence: 'Parlours ordering cups almost always order {link} alongside them.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Sizing Scoop Cups',
        items: [
          'Size by scoop count rather than by fluid volume — that is how customers order.',
          'Allow height for the scoop to stand proud, which is how it is served.',
          'Check the cup against your scoop size; a small cup makes a standard scoop look forced in.',
          'A wider cup shows the flavours better than a tall narrow one.',
        ],
        outro: 'Two sizes — a single and a double — cover most scoop counters.',
      },
    ],
    faqs: [
      {
        q: 'Why does our printed ice cream cup look tired by the end of the day?',
        a: 'Condensation on the outside, almost always. A coated or laminated outer face fixes it; an uncoated print softens and marks within minutes of leaving a cabinet.',
      },
      {
        q: 'Should ice cream cups be sized by volume or by scoops?',
        a: 'By scoops, because that is how the product is sold and portioned. A stated fluid volume tells you very little about whether two scoops will sit in it properly.',
      },
      {
        q: 'Why does the outside matter more than the inside?',
        a: 'Because the cup is dry inside and wet outside within a minute of leaving a freezer. Condensation attacks the print, not the lining.',
      },
      {
        q: 'Should we size by scoops or volume?',
        a: 'By scoops, because that is how the product is sold. A stated fluid volume says little about whether two scoops sit properly.',
      },
      {
        q: 'How many sizes do we need?',
        a: 'A single and a double covers most scoop counters. A third size is usually the one that sits unused.',
      },
      {
        q: 'Will the print survive a cabinet?',
        a: 'With a coated or laminated outer face, yes. Uncoated print softens and marks within minutes of leaving the cold.',
      },
      {
        q: 'Do we need lids?',
        a: 'Only if portions travel or are pre-filled. For scoop-to-order service, an open cup is quicker and cheaper.',
      },
      {
        q: 'Can we match these to cone sleeves?',
        a: 'Yes, and running both in one order keeps the colour consistent, which shows when the two sit together on a counter.',
      },
      {
        q: 'Will a wide cup show flavours better?',
        a: 'Noticeably. A wider, shallower cup displays the scoop where a tall narrow one hides it below the rim.',
      },
      {
        q: 'Do these suit gelato as well?',
        a: 'Yes, though gelato is usually served in a wider, shallower cup than hard scoop ice cream. Tell us which you serve.',
      },
    ],
    related: ['ice-cream-paper-cups-with-lids', 'paper-dessert-cups', 'custom-ice-cream-cone-sleeves', 'bowl-paper-cups'],
  },

  {
    slug: 'ice-cream-paper-cups-with-lids',
    name: 'Ice Cream Paper Cups With Lids',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Ice Cream Cups With Lids UK | Printed Takeaway Tubs',
    seoDescription:
      'Printed ice cream cups with matched lids for takeaway and pre-packed cabinet portions, ordered together to avoid a mismatch.',
    h1: 'Ice Cream Cups with Lids',
    cardBlurb: 'Cups supplied with matched lids for takeaway and pre-packed portions.',
    enquiryLabel: 'ice cream cups with lids',
    intro: [
      'Adding a lid turns a scoop cup into a takeaway product. It can be filled ahead, stacked in a cabinet, and sold without a member of staff at the scoop counter.',
      'It also introduces the mismatch problem, because lid and cup have to be sized together.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Domed Against Flat Lids for Ice Cream',
        columns: ['Domed lid', 'Flat lid'],
        rows: [
          ['Fill', 'Scoop can stand above the rim', 'Fill stops below the rim'],
          ['Stacking', 'Poor — the dome prevents it', 'Stacks cleanly in a cabinet'],
          ['Perceived portion', 'Larger, the scoop is visible', 'Smaller'],
          ['Storage', 'Bulkier', 'Compact'],
          ['Suits', 'Served-to-order takeaway', 'Pre-filled cabinet stock'],
        ],
        outro: 'Pre-packing for a cabinet effectively requires a flat lid, since domed tubs will not stack.',
      },
      {
        kind: 'prose',
        heading: 'Pre-Filling Changes the Whole Operation',
        body: [
          'A lidded tub can be filled in a quiet period and sold from a freezer without scooping. That is a labour saving, and it changes what the packaging has to do.',
          'It also means the cup sits in a freezer for hours, so the outer face needs to survive frost and condensation rather than a brief moment of handling.',
        ],
        link: {
          href: '/ice-cream-paper-cups/',
          anchor: 'open cups for scoop-to-order service',
          sentence: 'For counter scooping without a lid, {link} are the simpler option.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can we buy the cups now and lids later?',
        a: 'It is the most common way this goes wrong. Lids match the rim, and matching one afterwards means either a loose fit or replacing stock. Order them together.',
      },
      {
        q: 'Will pre-filled tubs stack in a freezer?',
        a: 'With flat lids, yes. With domed lids, no — the dome prevents a stable stack, which is why pre-packing operations almost always use flat.',
      },
      {
        q: 'Can we buy cups now and lids later?',
        a: 'It is the commonest way this goes wrong. Lids match the rim, so matching afterwards means a loose fit or replacing stock.',
      },
      {
        q: 'Does a domed lid increase the portion?',
        a: 'It lets a scoop sit proud of the rim, so the served portion looks and is larger for the same cup.',
      },
      {
        q: 'How long can we pre-fill ahead?',
        a: 'That is a food safety question for your own procedures. What packaging can do is survive the freezer without the print failing.',
      },
      {
        q: 'Do the cups need a coated outer face?',
        a: 'More than open cups do, because pre-filled tubs sit in frost and condensation for hours rather than minutes.',
      },
      {
        q: 'Can lids be printed?',
        a: 'They can, though a plain lid with a printed cup is the usual split. A label on the lid is often more practical.',
      },
      {
        q: 'Does this replace scoop service?',
        a: 'It supplements it. Pre-packing lets you sell from a freezer without a member of staff at the scoop counter.',
      },
      {
        q: 'Can we order lids in a different quantity?',
        a: 'Yes. Counters that scoop to order for some customers and pre-pack for others need far fewer lids than cups.',
      },
      {
        q: 'Can we order cups and lids in different quantities?',
        a: 'Yes, and you should if some portions are served open. Tell us the ratio rather than assuming one for one.',
      },
    ],
    related: ['ice-cream-paper-cups', 'paper-dessert-cups', 'paper-cups-with-lids', 'bowl-paper-cups'],
  },

  {
    slug: 'soup-paper-cups',
    name: 'Soup Paper Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Soup Cups UK | Printed Soup Containers',
    seoDescription:
      'Printed paper soup cups in a heavier board that takes a spoon pressed against the wall and holds sustained heat without softening.',
    h1: 'Paper Soup Cups',
    cardBlurb: 'Heavier board cups that take a spoon and hold sustained heat.',
    enquiryLabel: 'paper soup cups',
    intro: [
      'Soup is hot for longer than coffee and it gets a spoon pressed against the wall. Both are harder on board than a drink is.',
      'A soup cup is a heavier construction than a drink cup of the same volume, and it is not interchangeable with one.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Spoon Is a Structural Load',
        body: [
          'Scraping the last of a soup means pressing a spoon against the wall and the base. A drink cup flexes under that and can split at the seam.',
          'A heavier board resists it, which is the main reason food cups cost more than drink cups at the same volume.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Specifying for Hot Food',
        items: [
          'A board weight chosen for cutlery, not just for liquid.',
          'A lid that seals well enough for a takeaway journey.',
          'A rim strong enough to take a lid pressed on firmly while hot.',
          'A wide enough mouth for a spoon to work in comfortably.',
        ],
        outro: 'Deep narrow cups look generous and are awkward to eat from.',
        link: {
          href: '/paper-cups/food-cups/',
          anchor: 'the wider food cup range',
          sentence: 'Other hot food applications are covered across {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can we use coffee cups for soup?',
        a: 'They will hold it, but the wall flexes when a spoon presses against it and the heat is sustained rather than brief. A food-specified cup uses a heavier board for exactly that reason.',
      },
      {
        q: 'Do soup cups need a different lid?',
        a: 'Usually a flat lid that seals rather than a sip lid. Soup is eaten with a spoon, so a drinking aperture serves no purpose and is a route for spills.',
      },
      {
        q: 'What lid suits soup?',
        a: 'A flat lid that seals rather than a sip lid. Soup is eaten with a spoon, so a drinking aperture is a route for spills.',
      },
      {
        q: 'Why does the board need to be heavier?',
        a: 'Because a spoon scrapes the wall and the base. That is a mechanical load a drink cup is not built for.',
      },
      {
        q: 'Will the rim take a lid pressed on hot?',
        a: 'On a heavier board, yes. A thin rim distorts under thumb pressure and the lid never seats evenly afterwards.',
      },
      {
        q: 'How wide should the mouth be?',
        a: 'Wide enough for a spoon to work comfortably. Deep narrow cups look generous and are awkward to eat from.',
      },
      {
        q: 'Do these suit a delivery menu?',
        a: 'With a sealing lid, yes, and soup travels better than most hot food because it does not go soggy.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes. The lining is on the inner face, so the outer printable surface behaves like any other coated board.',
      },
      {
        q: 'Are these suitable for porridge?',
        a: 'Yes, and the requirements are much the same — sustained heat, a spoon against the wall, and a lid that seals.',
      },
      {
        q: 'Do you supply sealing lids?',
        a: 'Yes, and for a takeaway soup menu a lid that seals matters considerably more than a drinking aperture.',
      },
    ],
    related: ['bowl-paper-cups', 'paper-serving-cups', 'parchment-paper-cups', 'paper-cups-with-lids'],
  },

  {
    slug: 'bowl-paper-cups',
    name: 'Bowl Paper Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Bowl Cups UK | Printed Wide Food Bowls',
    seoDescription:
      'Wide printed paper bowls for salads, poke, pasta and hot food, where a shallow shape is easier to eat from with a fork.',
    h1: 'Paper Bowl Cups',
    cardBlurb: 'Wide, shallow bowls for salads, poke bowls and hot food.',
    enquiryLabel: 'paper bowls',
    intro: [
      'A bowl is a cup that has given up height for width, and that changes what it is good for. Food you eat with a fork wants to be spread out, not stacked in a tube.',
      'Salads, poke bowls, pasta and rice dishes all work better in a wide shallow shape.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Bowl Against a Tall Cup for Food',
        columns: ['Wide bowl', 'Tall cup'],
        rows: [
          ['Eating with a fork', 'Comfortable', 'Awkward at the bottom'],
          ['Showing the food', 'Everything is visible', 'Only the top layer'],
          ['Stability', 'Very stable', 'Tips more easily'],
          ['Storage', 'Takes more shelf space', 'Compact'],
          ['Suits', 'Salads, poke, pasta, rice', 'Soup, drinks, layered desserts'],
        ],
        outro: 'Food photographed by customers almost always looks better in a bowl than a cup.',
      },
      {
        kind: 'prose',
        heading: 'Presentation Is a Real Reason to Choose One',
        body: [
          'A poke bowl or a grain salad is arranged, and the arrangement is a large part of what the customer is paying for. In a tall cup none of it is visible.',
          'That is not a small consideration for businesses whose customers photograph the food before eating it.',
        ],
        link: {
          href: '/custom-bento-sleeves/',
          anchor: 'bands that brand a bowl or box',
          sentence: 'Where the bowl itself stays plain, {link} carry the branding instead.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do paper bowls hold dressing without leaking?',
        a: 'A properly lined bowl holds dressing for the length of a normal service. Standing liquid over a long delivery journey is a harder test, and a sealed lid matters as much as the bowl.',
      },
      {
        q: 'Are bowls harder to store than cups?',
        a: 'They take more shelf space per unit because they are wider. They do nest, so it is not as bad as it looks, but it is worth checking against your storage before switching.',
      },
      {
        q: 'Do paper bowls hold dressing?',
        a: 'A properly lined bowl holds dressing for a normal service. Standing liquid over a long delivery is a harder test, and the lid matters as much.',
      },
      {
        q: 'Why use a bowl rather than a tall cup?',
        a: 'Because food eaten with a fork wants to be spread out. In a tall cup only the top layer is visible or reachable.',
      },
      {
        q: 'Do bowls photograph better?',
        a: 'Noticeably, which matters for poke and grain salads where the arrangement is a large part of what is being sold.',
      },
      {
        q: 'Will a bowl tip over?',
        a: 'Far less than a tall cup. A wide base is one of the main practical advantages of the format.',
      },
      {
        q: 'What lid do bowls take?',
        a: 'Usually a flat or domed lid matched to the rim. Domed clears a piled portion where flat compresses it.',
      },
      {
        q: 'Can we print the inside?',
        a: 'Food covers it within seconds. The rim and outer wall are what customers see once the bowl is filled.',
      },
      {
        q: 'Do these suit hot food?',
        a: 'With the right lining, yes. Tell us whether the food is hot and wet, because that sets the grade rather than the shape.',
      },
      {
        q: 'Do you supply matching lids?',
        a: 'Yes, matched by rim diameter. A domed lid clears a piled portion where a flat one compresses it.',
      },
    ],
    related: ['soup-paper-cups', 'paper-serving-cups', 'paper-dessert-cups', 'custom-bento-sleeves'],
  },

  {
    slug: 'paper-snack-cups',
    name: 'Paper Snack Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Snack Cups UK | Printed Dry Snack Cups',
    seoDescription:
      'Printed snack cups for crisps, nuts and dry popcorn. Dry food needs no lining, which lowers both the cost and the disposal problem.',
    h1: 'Paper Snack Cups',
    cardBlurb: 'Unlined cups for dry snacks, at a lower cost than lined stock.',
    enquiryLabel: 'paper snack cups',
    intro: [
      'Dry snacks are the easiest thing a paper cup ever holds. Nothing wet touches the wall, so the lining that every other cup needs can be left out.',
      'That makes these among the cheapest printed cups available, and among the simplest to recycle.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'No Lining Means Lower Cost and Simpler Disposal',
        body: [
          'The lining inside a drink cup is what complicates its recycling and adds to its cost. A dry snack cup does not need one.',
          'That is a genuine advantage rather than a marketing point, and it is worth taking where the food allows it.',
        ],
        link: {
          href: '/recyclable-paper-cups/',
          anchor: 'why linings complicate cup recycling',
          sentence: 'The reason this matters is set out on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Counts as Dry Enough',
        items: [
          'Crisps, nuts and dry-seasoned popcorn — unlined board is fine.',
          'Buttered popcorn and dressed snacks — a lining is needed.',
          'Anything served warm from a fryer — treat as oily, not dry.',
          'Sweets and confectionery — dry, unless anything is glazed.',
        ],
        outro: 'If in doubt, leave a sample in a cup for an hour and see whether the board marks.',
      },
    ],
    faqs: [
      {
        q: 'Do snack cups really need no lining?',
        a: 'For genuinely dry snacks, no. Anything buttered, dressed or fried does need one, and the difference is easy to test by leaving a portion in a cup for an hour.',
      },
      {
        q: 'Are unlined cups cheaper?',
        a: 'Meaningfully so, and they are simpler to recycle. Where the food allows it, it is one of the few decisions that improves cost and disposal at the same time.',
      },
      {
        q: 'Do dry snacks really need no lining?',
        a: 'For genuinely dry food, no. Anything buttered, dressed or fried does, and the difference is easy to test by leaving a portion for an hour.',
      },
      {
        q: 'What counts as dry enough?',
        a: 'Crisps, nuts and dry-seasoned popcorn. Buttered popcorn and anything from a fryer should be treated as oily.',
      },
      {
        q: 'Will these hold up at an event?',
        a: 'Yes, and their low cost suits high-volume event service where each cup is used once and discarded.',
      },
      {
        q: 'Can we print in one colour?',
        a: 'Yes, and on a small cup a single strong colour usually reads better than a detailed design would.',
      },
      {
        q: 'Do these suit a bar?',
        a: 'They do, and bar snacks are one of the main uses alongside cinemas and standing events.',
      },
      {
        q: 'Will they denest cleanly?',
        a: 'With a denesting feature, yes. At event volumes stuck cups cost real time across a session.',
      },
      {
        q: 'Can we use these for sweets?',
        a: 'Yes, and confectionery is usually dry enough for an unlined cup unless anything is glazed or sticky.',
      },
      {
        q: 'Do these suit a cinema kiosk?',
        a: 'They do, alongside bars and standing events, and dry snacks keep the specification and the cost simple.',
      },
    ],
    related: ['custom-popcorn-sleeves', 'paper-serving-cups', 'paper-portion-cups', 'custom-snack-trays'],
  },

  {
    slug: 'paper-serving-cups',
    name: 'Paper Serving Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Serving Cups UK | Printed Food Service Cups',
    seoDescription:
      'General-purpose printed serving cups for canteens, events and street food, sized for a food portion rather than a drink.',
    h1: 'Paper Serving Cups',
    cardBlurb: 'General-purpose cups sized for a food portion rather than a drink.',
    enquiryLabel: 'paper serving cups',
    intro: [
      'A serving cup is the general-purpose option in this group — used where the menu changes and one container has to cover several dishes.',
      'It is the food equivalent of a general tray: adequate for most things, ideal for none.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'One Cup Across a Changing Menu',
        body: [
          'Event caterers and street food traders serve something different each week. Specifying a container per dish leaves dead stock when the menu moves on.',
          'A serving cup in two sizes and a lined board handles most of it, which is usually the right trade for a varied operation.',
        ],
        link: {
          href: '/custom-cardboard-food-trays/',
          anchor: 'the same approach in tray form',
          sentence: 'The tray equivalent of this thinking is covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Choosing Sizes for General Use',
        items: [
          'Two sizes cover most menus; a third rarely earns its storage.',
          'Specify the lining for your wettest, hottest dish.',
          'Keep both sizes on one lid diameter if you can.',
          'Check they nest, or storage becomes the limiting factor.',
        ],
        outro: 'Ordering both sizes in one run shares the setup across them.',
      },
    ],
    faqs: [
      {
        q: 'Is a general serving cup worse than a dish-specific one?',
        a: 'For any single dish, slightly. Across a menu that changes weekly it is usually better, because you are not holding four part-used lines of specialist containers.',
      },
      {
        q: 'What lining should a general cup have?',
        a: 'Specify for the most demanding thing you serve in it. A cup lined for hot wet food handles dry food perfectly well; the reverse is not true.',
      },
      {
        q: 'Is a general serving cup a compromise?',
        a: 'Knowingly so. It will not suit any single dish as well as a purpose-made container, which is the trade for a changing menu.',
      },
      {
        q: 'How many sizes should we hold?',
        a: 'Two in most cases. A third gets used rarely and takes the same storage as the ones that move.',
      },
      {
        q: 'Do these nest?',
        a: 'They should nest, or storage becomes the limiting factor behind a busy counter. It is worth confirming before ordering two sizes, since a mixed stack that will not seat wastes shelf space.',
      },
      {
        q: 'Can we order both sizes together?',
        a: 'Yes, and it shares the setup cost between them rather than repeating it on a second job.',
      },
      {
        q: 'Do these suit street food?',
        a: 'They are mostly bought for it, where the menu changes weekly and dish-specific containers become dead stock.',
      },
      {
        q: 'Will one artwork work across sizes?',
        a: 'The elements carry over, but each size needs its own layout because the flat blank differs. We re-lay it from your file.',
      },
      {
        q: 'Do we need lids?',
        a: 'Only where portions travel or sit on a shelf. For counter service an open cup is quicker to fill and cheaper per portion, and a lid nobody needs is a cost with no return.',
      },
      {
        q: 'What size suits a sauce or a dip?',
        a: 'The smallest in the range usually does, and portion control is the real reason to pick it: an oversized cup encourages staff to overfill it, which costs more than the cup ever did.',
      },
    ],
    related: ['bowl-paper-cups', 'soup-paper-cups', 'paper-snack-cups', 'custom-cardboard-food-trays'],
  },

  {
    slug: 'paper-portion-cups',
    name: 'Paper Portion Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Portion Cups UK | Printed Portion Control Pots',
    seoDescription:
      'Small paper portion cups for sauces, dressings and controlled servings, where clean denesting from a stack matters most.',
    h1: 'Paper Portion Cups',
    cardBlurb: 'Small pots for sauces and controlled portions, bought in volume.',
    enquiryLabel: 'paper portion cups',
    intro: [
      'Portion cups are bought by the tens of thousands and used for about ten seconds each. Nobody looks at them.',
      'That makes denesting — how cleanly one comes off the stack — more important than anything printed on the outside.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Denesting Is the Specification That Matters',
        body: [
          'During a rush, staff pull portion cups off a stack one-handed. Cups that stick together cost seconds every time, and seconds add up across a service.',
          'A slight step or rib in the wall keeps them separated. It is invisible to the customer and the single most useful feature on the product.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where Portion Cups Earn Their Place',
        items: [
          'Sauces and dips served alongside a main item.',
          'Dressings kept separate so a salad does not go soft.',
          'Portion control in canteens and institutional catering.',
          'Sampling where a fixed measure is needed.',
        ],
        outro: 'Lids matter if portions travel; without them a pot in a delivery bag empties itself.',
        link: {
          href: '/paper-sauce-cups/',
          anchor: 'sauce pots and the lids they need for delivery',
          sentence: 'For delivery in particular, {link} cover the sealing question.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is it worth printing portion cups?',
        a: 'Rarely. They are seen for seconds and bought in huge volumes, so the print budget almost always does more good on the item the customer carries out of the door.',
      },
      {
        q: 'Why do our portion cups stick together?',
        a: 'They lack a denesting feature, or the stack has been compressed in storage. A slight step in the wall keeps them separated, and it is worth specifying rather than assuming.',
      },
      {
        q: 'Do these need lids?',
        a: 'If portions travel, yes. Without one a pot in a delivery bag empties itself into the order.',
      },
      {
        q: 'What size should we choose?',
        a: 'Match it to your actual portion rather than a round number. An over-large pot looks mean when half full.',
      },
      {
        q: 'Are these the same as sauce cups?',
        a: 'Essentially, though sauce use puts more demand on the lining. Tell us what goes in them and we will specify accordingly.',
      },
      {
        q: 'Will they survive being stacked?',
        a: 'Yes, though a compressed stack is what causes sticking. Store them upright rather than on their side under weight.',
      },
      {
        q: 'Can we order in very large quantities?',
        a: 'This is a product bought by the tens of thousands, and the economics improve with volume. Send your annual usage.',
      },
      {
        q: 'Do these suit institutional catering?',
        a: 'They are widely used for portion control there, where a fixed measure matters more than any branding.',
      },
      {
        q: 'Should portion cups have lids?',
        a: 'If portions travel, yes. On a tray they are unnecessary and add cost to a very high-volume item.',
      },
      {
        q: 'How many sizes do we need?',
        a: 'Usually one, matched to your standard portion. A second size only earns its storage where you serve two clearly different measures.',
      },
    ],
    related: ['paper-sauce-cups', '2-oz-paper-cups', 'small-paper-cups', 'paper-snack-cups'],
  },

  {
    slug: 'paper-sauce-cups',
    name: 'Paper Sauce Cups',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Sauce Cups UK | Printed Dip Pots with Lids',
    seoDescription:
      'Paper sauce cups and dip pots with lids that seal for delivery, in a lining specified against oil and acidic sauces alike.',
    h1: 'Paper Sauce Cups',
    cardBlurb: 'Dip pots with lids that seal properly for delivery orders.',
    enquiryLabel: 'paper sauce cups',
    intro: [
      'A sauce pot that leaks into a delivery bag ruins the whole order, not just itself. That makes the lid seal the most consequential part of a very cheap item.',
      'Sauces are also more aggressive against board than most food, because they combine oil and acidity.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Lid Is the Product',
        body: [
          'A pot without a reliable lid is fine on a tray and useless in a courier bag. Most complaints about sauce packaging are actually complaints about lids.',
          'A lid that clicks positively into a rolled rim holds through a journey. One that rests on top does not.',
        ],
        link: {
          href: '/custom-take-out-bags/',
          anchor: 'bags that keep an order upright in transit',
          sentence: 'Sealing is only half the answer — {link} address the other half.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Sauces Do to Board',
        items: [
          'Oil-based sauces soak into an unlined wall quickly.',
          'Acidic sauces such as tomato and vinegar attack coatings over time.',
          'Warm sauces do both faster than cold ones.',
          'Coloured sauces stain visibly on a pale pot.',
        ],
        outro: 'Tell us which sauces you serve — the lining choice follows from it.',
      },
    ],
    faqs: [
      {
        q: 'Will a sauce pot lid survive a delivery?',
        a: 'A lid that clicks into a rolled rim generally will. One that simply rests on top will not, and that difference is worth testing with a sample and a bag rather than assuming.',
      },
      {
        q: 'Do hot sauces need a different pot?',
        a: 'Warm sauces work on a lining faster than cold ones, and acidic sauces faster still. If you serve either, say so, since the lining choice follows from what goes in the pot.',
      },
      {
        q: 'Will the lid survive a delivery?',
        a: 'A lid that clicks into a rolled rim generally will. One that rests on top will not, and that difference is worth testing with a bag.',
      },
      {
        q: 'Why do sauce pots leak?',
        a: 'Almost always the lid rather than the pot. Most complaints about sauce packaging are complaints about the closure.',
      },
      {
        q: 'Should we print sauce pots?',
        a: 'Rarely worth it. They are seen briefly and bought in volume, so the budget does more elsewhere.',
      },
      {
        q: 'What size suits a dip?',
        a: 'Match your actual portion. Customers notice a pot that is half full more than they notice a small one that is full.',
      },
      {
        q: 'Will coloured sauces stain?',
        a: 'Visibly on a pale pot. A darker pot or accepting the staining are the two honest options.',
      },
      {
        q: 'Can we order pots and lids together?',
        a: 'Yes, and you should. Matching a lid to a pot afterwards is the same rim-diameter problem as with cups.',
      },
      {
        q: 'Do these suit a delivery-led kitchen?',
        a: 'They are essential to one, and the lid specification matters more there than in any other setting.',
      },
      {
        q: 'Do you supply pots and lids together?',
        a: 'Yes, and you should. Matching a lid afterwards is the same rim-diameter problem as with drink cups.',
      },
    ],
    related: ['paper-portion-cups', '2-oz-paper-cups', 'paper-cups-with-lids', 'custom-take-out-bags'],
  },

  {
    slug: 'paper-tea-cups-with-handles',
    name: 'Paper Tea Cups With Handles',
    category: 'paper-cups',
    subcategory: 'food-cups',
    seoTitle: 'Paper Tea Cups With Handles UK | Printed Handled Cups',
    seoDescription:
      'Printed paper tea cups with handles for receptions and formal events, where a handle does the job a sleeve would otherwise do.',
    h1: 'Paper Tea Cups with Handles',
    cardBlurb: 'Handled cups for events, where a handle replaces a sleeve.',
    enquiryLabel: 'paper tea cups with handles',
    intro: [
      'A handle does what a sleeve does, in a form that reads as a teacup rather than a takeaway. That distinction matters more than it sounds at a reception or a formal occasion.',
      'It is the reason handled cups survive in a market otherwise dominated by sleeves.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Handle Against Sleeve',
        columns: ['Handle', 'Sleeve'],
        rows: [
          ['Look', 'Reads as a teacup', 'Reads as takeaway'],
          ['Heat protection', 'Complete — no contact with the wall', 'Partial — a band only'],
          ['Cost', 'Higher', 'Lower'],
          ['Storage', 'Bulkier; handles prevent tight nesting', 'Compact'],
          ['Suits', 'Functions, seated service, events', 'Takeaway, walking customers'],
        ],
        outro: 'Handled cups do not nest as tightly, which is the practical objection for a busy café.',
      },
      {
        kind: 'prose',
        heading: 'Where They Suit and Where They Do Not',
        body: [
          'Weddings, conferences and church functions use them because they look appropriate to a seated occasion where a takeaway cup would not.',
          'A busy café serving to walking customers is exactly the wrong application: they cost more, store worse and offer nothing a sleeve does not.',
        ],
        link: {
          href: '/custom-tea-cup-sleeves/',
          anchor: 'sleeves for takeaway tea',
          sentence: 'For tea served to walking customers, {link} are the practical option.',
        },
      },
    ],
    faqs: [
      {
        q: 'Are handled cups worth the extra cost?',
        a: 'At a seated reception, often — they look right in a way a takeaway cup does not. For counter service to walking customers, a sleeve does the same job for less.',
      },
      {
        q: 'Do handled cups stack?',
        a: 'They nest, but not tightly, because the handles hold the cups apart. Expect them to take noticeably more storage space than the same number of plain cups.',
      },
      {
        q: 'Are handled cups worth the cost?',
        a: 'At a seated reception, often, because they look right where a takeaway cup does not. For counter service a sleeve does the same job for less.',
      },
      {
        q: 'Will the handle take the weight?',
        a: 'On a properly attached handle, yes. It is worth testing a sample with a full cup rather than assuming.',
      },
      {
        q: 'Do these suit a busy café?',
        a: 'Poorly. They cost more, store worse and slow service. They suit functions and seated events instead.',
      },
      {
        q: 'Can handled cups be printed?',
        a: 'Yes, though the handle interrupts the printable area. Keep key elements away from where it attaches.',
      },
      {
        q: 'Are they available with lids?',
        a: 'Sometimes, though a handled cup is usually a seated product where a lid serves little purpose. Confirm at quote stage.',
      },
      {
        q: 'Do they suit outdoor events?',
        a: 'Less well than a sleeve, because the handle adds bulk and the format reads formal. Indoor functions are the natural fit.',
      },
      {
        q: 'Why choose a handle over a sleeve?',
        a: 'It removes hand contact with the wall entirely, which on near-boiling tea is a real difference rather than a stylistic one.',
      },
      {
        q: 'Do you supply these for weddings and events?',
        a: 'Yes, and short runs suit one-off occasions where a takeaway cup would look out of place.',
      },
    ],
    related: ['custom-tea-cup-sleeves', 'paper-cups-with-handles', 'paper-cups-with-lids', '8-oz-paper-cups'],
  },

  // --- Cardboard cups ------------------------------------------------------
  {
    slug: 'cardboard-coffee-cups',
    name: 'Cardboard Coffee Cups',
    category: 'paper-cups',
    subcategory: 'cardboard',
    seoTitle: 'Cardboard Coffee Cups UK | Heavy Board Hot Cups',
    seoDescription:
      'Heavier cardboard coffee cups for offices, venues and events, with a rim that takes a lid without deforming under a thumb.',
    h1: 'Cardboard Coffee Cups',
    cardBlurb: 'Heavier board hot cups with a rim that seats a lid properly.',
    enquiryLabel: 'cardboard coffee cups',
    intro: [
      '"Cardboard cup" usually means the plainer, heavier end of the paper cup range rather than a different material.',
      'It gets specified where a cup is carried further than a few steps and a thin rim would deform under a lid.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Rim Is Why the Weight Matters',
        body: [
          'Pressing a lid onto a thin cup distorts the rim, and the lid never seats evenly afterwards. In an office where cups are carried along corridors, that becomes a recurring spill.',
          'A heavier rim holds its shape under thumb pressure, which is most of what buyers in this part of the range are paying for.',
        ],
        link: {
          href: '/paper-coffee-cup-lids/',
          anchor: 'how lids seat on a rolled rim',
          sentence: 'The mechanics are covered under {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Typical Buyers',
        items: [
          'Offices and meeting rooms with a coffee machine.',
          'Conference and event caterers serving in volume.',
          'Venues wanting a plain cup with a single printed mark.',
          'Sites where cups are carried a genuine distance before being drunk.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a cardboard cup different from a paper cup?',
        a: 'Not in construction — both are lined board. The word usually signals a heavier, plainer cup, so it is worth confirming the board weight rather than relying on the name.',
      },
      {
        q: 'Do we need a heavier cup for an office?',
        a: 'If cups are lidded and carried along corridors, yes. A thin rim deforms when a lid is pressed on, and that is the source of most office coffee spills.',
      },
      {
        q: 'Why does the rim matter in an office?',
        a: 'Because cups are lidded and carried along corridors. A thin rim deforms under thumb pressure and the lid never seats evenly.',
      },
      {
        q: 'Do these suit conference catering?',
        a: 'They are frequently bought for it, where volume and reliability matter more than a café-standard finish.',
      },
      {
        q: 'Can we print a single logo?',
        a: 'Yes, and that is the usual specification here. A plain cup with one mark suits offices and venues better than a full design.',
      },
      {
        q: 'Are they heavier to store?',
        a: 'Slightly, and each case holds fewer than a lightweight cup. Worth checking against your storage before switching.',
      },
      {
        q: 'Do they need sleeves?',
        a: 'Less than a thin single wall, though a very hot drink in a large size is still more comfortable with one.',
      },
      {
        q: 'Can we order plain and printed together?',
        a: 'Yes, and many buildings do — printed for reception, plain for staff areas. Send the split.',
      },
      {
        q: 'Do they take standard lids?',
        a: 'Matched by rim diameter as with any cup. Send a cup or the rim measurement rather than the stated volume.',
      },
      {
        q: 'Do you supply these plain?',
        a: 'Yes, and many offices take plain stock with a printed cup only for reception and client areas.',
      },
    ],
    related: ['cardboard-cups-with-lids', 'small-cardboard-cups', 'custom-paper-coffee-cups', 'disposable-hot-cups'],
  },

  {
    slug: 'cardboard-cups-with-lids',
    name: 'Cardboard Cups With Lids',
    category: 'paper-cups',
    subcategory: 'cardboard',
    seoTitle: 'Cardboard Cups With Lids UK | Matched Cup & Lid Sets',
    seoDescription:
      'Cardboard cups supplied with matched lids, removing the rim mismatch that causes most complaints about lids on paper cups.',
    h1: 'Cardboard Cups with Lids',
    cardBlurb: 'Cups and lids supplied together, matched on rim diameter.',
    enquiryLabel: 'cardboard cups with lids',
    intro: [
      'Buying cups and lids separately is where most lid problems begin. Rim diameters differ between manufacturers even at identical stated volumes.',
      'Ordering them as a set removes the problem entirely, which is the whole point of this page.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Matched Sets Remove a Whole Category of Problem',
        body: [
          'A lid that is close but not right pops off in a bag, leaks in a car, and is blamed on the lid when it is really a mismatch.',
          'Cups and lids quoted together are checked against each other before they ship, which is not something you can do reliably across two suppliers.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What a Set Covers',
        rows: [
          ['Cup', 'Board weight and lining specified for the drink'],
          ['Lid', 'Matched to the rim, in sip, flat or domed'],
          ['Sizes', 'Multiple sizes sharing a lid where the rims allow'],
          ['Print', 'On the cup; lids are normally plain'],
          ['Supply', 'Quantities matched so you do not run out of one'],
        ],
        note: 'Ordering lids in the same ratio as cups avoids the common problem of holding one long after the other has gone.',
      },
    ],
    faqs: [
      {
        q: 'Can lids be ordered in a different quantity from cups?',
        a: 'They can, and often should — sites that serve some drinks without lids need fewer. Tell us the ratio you actually use rather than defaulting to one for one.',
      },
      {
        q: 'Do lids come printed?',
        a: 'They are normally plain, since printing a lid adds cost for a surface that is largely hidden once it is on the cup and covered by a hand and a mouth.',
      },
      {
        q: 'Why order cups and lids together?',
        a: 'Because rim diameters differ between manufacturers even at identical stated volumes, and matching afterwards means a loose fit or replacing stock.',
      },
      {
        q: 'Can lids be a different quantity from cups?',
        a: 'Yes. Many sites lid only takeaway drinks, so the lid quantity is well below the cup quantity. Send us your actual ratio.',
      },
      {
        q: 'Are lids printed?',
        a: 'Normally plain, since printing a lid adds cost for a surface hidden by a hand and a mouth.',
      },
      {
        q: 'Which lid type should we choose?',
        a: 'Sip for hot, flat for cold with a straw, domed for a topping. Confirm the rim rather than the volume when matching.',
      },
      {
        q: 'Will a lid pop off in a bag?',
        a: 'A close-fitting lid on an undeformed rim will not. A thin rim squeezed during handling is what causes it.',
      },
      {
        q: 'Do sets cost more than buying separately?',
        a: 'Usually less overall, because a mismatch means replacing one or the other. The saving is in not getting it wrong.',
      },
      {
        q: 'Can we add a second cup size later?',
        a: 'Yes, and if it shares a rim you may be able to keep the same lid, which is worth checking before choosing the size.',
      },
      {
        q: 'Do these suit an office coffee machine?',
        a: 'They do, and machine compatibility is worth confirming with the model rather than assuming from the volume.',
      },
    ],
    related: ['cardboard-coffee-cups', 'paper-cups-with-lids', 'paper-coffee-cup-lids', 'small-cardboard-cups'],
  },

  {
    slug: 'small-cardboard-cups',
    name: 'Small Cardboard Cups',
    category: 'paper-cups',
    subcategory: 'cardboard',
    seoTitle: 'Small Cardboard Cups UK | Heavy Board Mini Cups',
    seoDescription:
      'Small heavy-board cups for tasting, sampling and portions, where a lighter cup would crush in a hand held for several minutes.',
    h1: 'Small Cardboard Cups',
    cardBlurb: 'Heavier small cups that do not crush when picked up.',
    enquiryLabel: 'small cardboard cups',
    intro: [
      'The problem with very small cups is that they are easy to crush. A light 4oz cup picked up firmly folds, and whatever is in it goes on the floor.',
      'A heavier board at the same volume solves it, at a modest extra cost per unit.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Small Cups Get Gripped Harder',
        body: [
          'People wrap a whole hand around a small cup rather than holding it by the rim, which puts more pressure on the wall than a large cup ever sees.',
          'At tasting events, where people hold a cup while talking, that grip is sustained for minutes at a time.',
        ],
        link: {
          href: '/small-paper-cups/',
          anchor: 'the lighter small cup options',
          sentence: 'Where cost matters more than sturdiness, {link} are the cheaper route.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where the Heavier Board Is Worth It',
        items: [
          'Tasting events, where cups are held for several minutes.',
          'Sampling with hot liquids, where a crushed cup is a burn risk.',
          'Care and clinical settings, where reliability matters more than unit cost.',
          'Premium sampling where a flimsy cup undermines the product.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why not just use a standard small cup?',
        a: 'For a quick sample handed over and drunk, a standard cup is fine. Where cups are held for minutes, or contain anything hot, the heavier board avoids a genuine crushing problem.',
      },
      {
        q: 'Do heavier small cups cost much more?',
        a: 'A modest amount per unit, which matters at sampling volumes. It is worth pricing both and deciding against your actual usage rather than assuming.',
      },
      {
        q: 'Why not use a standard small cup?',
        a: 'For a quick sample handed over and drunk, a standard cup is fine. Where cups are held for minutes, the heavier board avoids crushing.',
      },
      {
        q: 'Why do small cups get crushed?',
        a: 'Because people wrap a whole hand around them rather than holding by the rim, which puts more pressure on the wall.',
      },
      {
        q: 'Do these suit tasting events?',
        a: 'They do, and cups held for several minutes during conversation are exactly the case where a light cup fails.',
      },
      {
        q: 'Are they suitable for hot samples?',
        a: 'With a hot lining, yes, and a crushed cup with a hot liquid in it is a burn risk, which is part of the argument.',
      },
      {
        q: 'Can we print them?',
        a: 'Yes, though the area is small. One element usually reads better than several shrunk to fit.',
      },
      {
        q: 'Will they denest cleanly?',
        a: 'With a denesting feature. A heavier board actually helps here, because the cups hold their shape in the stack.',
      },
      {
        q: 'Do these suit clinical settings?',
        a: 'They are used in care and dental settings where reliability matters more than unit cost.',
      },
      {
        q: 'Do these suit clinical or care settings?',
        a: 'They are used there, where reliability and hygiene matter more than unit cost or appearance.',
      },
    ],
    related: ['small-paper-cups', '4-oz-paper-cups', 'cardboard-coffee-cups', 'paper-portion-cups'],
  },

  // --- Cup structure and parts ---------------------------------------------
  {
    slug: 'paper-cups-with-lids',
    name: 'Paper Cups With Lids',
    category: 'paper-cups',
    subcategory: 'structure',
    seoTitle: 'Paper Cups With Lids UK | Matched Cup & Lid Supply',
    seoDescription:
      'Paper cups supplied with matched lids across hot and cold ranges, sized by rim diameter rather than by the stated volume.',
    h1: 'Paper Cups with Lids',
    cardBlurb: 'Cups and lids matched on rim diameter across hot and cold ranges.',
    enquiryLabel: 'paper cups with lids',
    intro: [
      'The most common ordering mistake in this whole catalogue is buying cups first and lids second.',
      'Rim diameters are not standardised across manufacturers, so a lid bought separately may simply not fit, whatever the box says.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Getting Cups and Lids Right First Time',
        steps: [
          {
            title: 'Decide Whether You Need Lids at All',
            body: 'Eat-in service often does not. Every lid line is stock, storage and a service decision.',
          },
          {
            title: 'Choose the Lid Type Before the Cup Size',
            body: 'A domed lid adds usable volume above the rim; a flat lid takes it away.',
          },
          {
            title: 'Check Which Sizes Can Share a Rim',
            body: 'One lid across two cup sizes halves your lid lines and removes a service error.',
          },
          {
            title: 'Order Both Together',
            body: 'Matching afterwards means accepting a loose fit or replacing stock.',
          },
        ],
        link: {
          href: '/paper-coffee-cup-lids/',
          anchor: 'the lid types and what each suits',
          sentence: 'The individual lid formats are covered on {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'Lids Are a Service Decision as Well as a Product',
        body: [
          'Every lid on a counter is a moment of staff time and a chance to grab the wrong one. Sites that reduce from four lid lines to two usually report faster service, not just lower stock.',
          'Sharing a rim across sizes is the simplest way to get there.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we reduce the number of lid lines we hold?',
        a: 'Often, by choosing cup sizes that share a rim diameter. An 8oz and a 12oz frequently can, which takes two lid lines down to one.',
      },
      {
        q: 'Do all cups need lids?',
        a: 'Eat-in service usually does not, and every lid line adds stock and a service step. It is worth checking how many of your drinks actually leave the building.',
      },
      {
        q: 'How do we reduce the number of lid lines?',
        a: 'Choose cup sizes that share a rim diameter. An 8oz and a 12oz frequently can, taking two lines down to one.',
      },
      {
        q: 'Which do we choose first, cup or lid?',
        a: 'The lid, because it decides how much of the cup you can fill. A domed lid adds capacity; a flat one caps it.',
      },
      {
        q: 'Can we match lids to existing cups?',
        a: 'In most cases, as long as the rim falls on a diameter we hold. A sample cup settles it faster than a measurement does.',
      },
      {
        q: 'Why does a lid fit one 12oz cup and not another?',
        a: 'Because the stated volume says nothing about the rim. A few millimetres is enough for a lid to sit loose.',
      },
      {
        q: 'Do vented lids help?',
        a: 'On drinks carried a long way, yes. Venting releases steam that would otherwise condense inside the lid.',
      },
      {
        q: 'Should lids be ordered in equal quantity?',
        a: 'Only if every drink gets one. Tell us the ratio you actually use rather than defaulting to one for one.',
      },
      {
        q: 'Can lids be printed?',
        a: 'They can, though it is rarely worth it. A hand and a mouth cover most of the surface in use.',
      },
      {
        q: 'Can we add a size later?',
        a: 'Yes, and if it shares a rim with an existing size you may keep the same lid, which is worth checking before choosing.',
      },
    ],
    related: ['paper-coffee-cup-lids', 'cardboard-cups-with-lids', 'paper-cup-cover', 'ice-cream-paper-cups-with-lids'],
  },

  {
    slug: 'paper-cups-with-handles',
    name: 'Paper Cups With Handles',
    category: 'paper-cups',
    subcategory: 'structure',
    seoTitle: 'Paper Cups With Handles UK | Printed Handled Cups',
    seoDescription:
      'Paper cups with attached handles for receptions and very hot service, where a sleeve leaves fingers touching the cup wall.',
    h1: 'Paper Cups with Handles',
    cardBlurb: 'Attached handles for functions and very hot service.',
    enquiryLabel: 'paper cups with handles',
    intro: [
      'A handle removes hand contact with the cup wall completely, which no sleeve does. For very hot drinks that is a real difference rather than a stylistic one.',
      'It costs more and stores worse, and those two facts decide most purchasing decisions here.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Complete Separation from the Wall',
        body: [
          'A sleeve protects a band of the cup. Fingers still touch above and below it, which on a near-boiling drink is noticeable.',
          'A handle keeps the hand off entirely, which is why they persist for tea and for service to people who hold a drink for a long time.',
        ],
        link: {
          href: '/paper-tea-cups-with-handles/',
          anchor: 'handled cups for tea service specifically',
          sentence: 'For tea at functions, {link} cover the same construction in context.',
        },
      },
      {
        kind: 'bullets',
        heading: 'The Practical Objections',
        items: [
          'Cups do not nest tightly, so storage per thousand goes up considerably.',
          'Unit cost is higher than a cup plus a sleeve.',
          'Handles can catch when cups are pulled from a stack quickly.',
          'They read as formal, which suits some settings and not others.',
        ],
        outro: 'For a high-volume takeaway counter, a sleeve is almost always the better answer.',
      },
    ],
    faqs: [
      {
        q: 'Is a handle better than a sleeve?',
        a: 'For heat protection, yes — it removes hand contact entirely. For cost, storage and service speed, no. Which wins depends on whether you are serving a reception or a queue.',
      },
      {
        q: 'How much more storage do handled cups need?',
        a: 'Noticeably more, because the handles hold cups apart in a stack. It is worth measuring against your shelf space before switching a whole line.',
      },
      {
        q: 'Do handles catch when pulling from a stack?',
        a: 'They can during a rush, which is one of the practical objections alongside cost and storage.',
      },
      {
        q: 'Where should print go on a handled cup?',
        a: 'Away from the handle attachment, which interrupts the printable band. Keep key elements on the opposite face.',
      },
      {
        q: 'Do these suit takeaway?',
        a: 'Poorly. They read as formal and cost more, which suits functions and seated events rather than a walking customer.',
      },
      {
        q: 'Will the handle hold a full cup?',
        a: 'On a properly attached handle, yes. Test a sample with a full cup rather than assuming, since attachment is the failure point.',
      },
      {
        q: 'Are they available in all sizes?',
        a: 'Availability is narrower than plain cups. Tell us the size you need and we will confirm rather than assume.',
      },
      {
        q: 'Why choose these for tea?',
        a: 'Because tea goes in near boiling with no cold milk, and a handle keeps the hand off the wall entirely.',
      },
      {
        q: 'Are handled cups available with lids?',
        a: 'Sometimes, though a handled cup is usually a seated product where a lid adds little. Confirm at quote stage.',
      },
      {
        q: 'What sizes do handled cups come in?',
        a: 'Availability is narrower than plain cups. Tell us the volume you pour and we will confirm what can be produced.',
      },
    ],
    related: ['paper-tea-cups-with-handles', 'paper-cup-sleeves', 'paper-cups-with-lids', 'disposable-hot-cups'],
  },

  {
    slug: 'paper-cone-cups',
    name: 'Paper Cone Cups',
    category: 'paper-cups',
    subcategory: 'structure',
    seoTitle: 'Paper Cone Cups UK | Printed Water Cone Cups',
    seoDescription:
      'Cone-shaped paper cups for water dispensers and tasting stations, designed so they cannot be put down and reused by someone else.',
    h1: 'Paper Cone Cups',
    cardBlurb: 'Cone-shaped cups for dispensers and tasting, used and discarded immediately.',
    enquiryLabel: 'paper cone cups',
    intro: [
      'A cone cup has no base, so it cannot be put down. That sounds like a flaw and is actually the design intent.',
      'It guarantees the cup is used once and discarded, which is exactly what a water dispenser or a tasting station wants.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'No Base Means No Abandoned Cups',
        body: [
          'Flat-bottomed cups at a water cooler get put down, forgotten, and topped up by someone else. Cone cups cannot be, so each one serves one person once.',
          'They also use less material than a flat-bottomed cup of the same capacity and take almost no storage space in a dispenser.',
        ],
        link: {
          href: '/paper-water-cups/',
          anchor: 'flat-bottomed cups for the same dispensers',
          sentence: 'Where people want to set a drink down, {link} are the alternative.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where Cone Cups Are Used',
        items: [
          'Water dispensers in offices, gyms and public buildings.',
          'Tasting stations where each sample is drunk immediately.',
          'Events where cups would otherwise accumulate on surfaces.',
          'Sports and clinical settings needing single-use discipline.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why would we choose a cup that cannot be put down?',
        a: 'Because it guarantees single use. At a water cooler, flat-bottomed cups get abandoned and reused by other people, which cone cups make impossible.',
      },
      {
        q: 'Do cone cups fit standard dispensers?',
        a: 'They fit cone dispensers, which are a different fitting from flat-bottom cup dispensers. Confirm which you have before ordering, since the two are not interchangeable.',
      },
      {
        q: 'Why would we want a cup that cannot be put down?',
        a: 'Because it guarantees single use. At a water cooler, flat-bottomed cups get abandoned and reused by other people; a cone cannot be.',
      },
      {
        q: 'Do they use less material?',
        a: 'Yes, less than a flat-bottomed cup of the same capacity, and they take almost no storage space in a dispenser tube.',
      },
      {
        q: 'Can these be printed?',
        a: 'They can, though the printable area is small and the cup is used for seconds. A single mark is usually all that pays back.',
      },
      {
        q: 'Are they suitable for hot drinks?',
        a: 'Rarely used for them, because there is nowhere to set the cup down while it cools. Cold water and tasting are the main uses.',
      },
      {
        q: 'Do they suit tasting stations?',
        a: 'Very well, because each sample is drunk immediately and cups cannot accumulate on surfaces waiting to be reused.',
      },
      {
        q: 'What size are cone cups?',
        a: 'Typically small, in the 4 to 7oz range. Tell us your dispenser and we will confirm what fits it.',
      },
      {
        q: 'Do they need a lining?',
        a: 'For water, a light barrier is enough. Tell us if anything other than water goes in them.',
      },
      {
        q: 'Do you supply these in bulk for events?',
        a: 'Yes, and event and sampling use is where the single-use discipline of a cone cup is most useful.',
      },
    ],
    related: ['paper-water-cups', 'paper-drinking-cups', 'paper-bathroom-cups', '7-oz-paper-cups'],
  },

  {
    slug: 'paper-cup-cover',
    name: 'Paper Cup Covers',
    category: 'paper-cups',
    subcategory: 'structure',
    seoTitle: 'Paper Cup Covers UK | Printed Cup Lids & Toppers',
    seoDescription:
      'Paper cup covers and toppers for cabinet display and short transport, keeping dust off without adding a moulded plastic lid.',
    h1: 'Paper Cup Covers',
    cardBlurb: 'Paper covers that keep dust off without using a plastic lid.',
    enquiryLabel: 'paper cup covers',
    intro: [
      'A cover is not a lid. It keeps dust and handling off a filled cup sitting in a cabinet; it does not seal for transport.',
      'Knowing which of the two you need saves a lot of confusion at quote stage.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Cover Against Lid',
        columns: ['Paper cover', 'Fitted lid'],
        rows: [
          ['Seals for transport', 'No', 'Yes'],
          ['Keeps dust off in a cabinet', 'Yes', 'Yes'],
          ['Material', 'Paper or board', 'Usually a moulded lid'],
          ['Cost', 'Lower', 'Higher'],
          ['Printed', 'Easily', 'Rarely worth it'],
        ],
        outro: 'A cover is for display and short holding; a lid is for anything that moves.',
      },
      {
        kind: 'prose',
        heading: 'Where a Paper Cover Is the Right Choice',
        body: [
          'Pre-filled dessert cups in a chilled cabinet need protection from dust and from customers touching them. They do not need a seal, because they go straight onto a tray.',
          'For that job a printed paper cover is cheaper, prints better, and avoids adding a moulded lid to the order.',
        ],
        link: {
          href: '/paper-cups-with-lids/',
          anchor: 'fitted lids for anything that travels',
          sentence: 'Where cups leave the building, {link} are the right specification.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can a paper cover replace a lid for takeaway?',
        a: 'No. Covers are for cups that stay put in a cabinet. The moment a cup travels, only a fitted lid will keep the contents in.',
      },
      {
        q: 'Are covers worth printing?',
        a: 'They are, because on a cabinet-filled cup the cover is the face the customer sees. It is one of the few parts where printing a lid-type item genuinely pays back.',
      },
      {
        q: 'Can a cover replace a lid for takeaway?',
        a: 'No. A cover keeps dust off a cup standing still; it will not hold contents in a bag. Anything that moves needs a fitted lid.',
      },
      {
        q: 'What are covers actually for?',
        a: 'Keeping dust and handling off a filled cup in a display cabinet, and giving a printed face where a moulded lid would be plain.',
      },
      {
        q: 'Are they cheaper than lids?',
        a: 'Generally yes, and they avoid adding a moulded item to the order, which some sites prefer for disposal reasons.',
      },
      {
        q: 'Will a cover stay on if knocked?',
        a: 'It sits rather than seals, so it will come off. That is the distinction between a cover and a lid.',
      },
      {
        q: 'Do these suit a dessert counter?',
        a: 'They do, for pre-filled cups sitting in a chilled cabinet before being handed straight to a tray.',
      },
      {
        q: 'Can covers be die-cut to a shape?',
        a: 'Yes, and a shaped cover is a bespoke die. Send a sketch and the cup and we will tell you what will cut.',
      },
      {
        q: 'Do they fit any cup?',
        a: 'They are matched to the rim like a lid. Send a cup or the rim measurement rather than the volume.',
      },
      {
        q: 'Can covers be printed in full colour?',
        a: 'Yes, and on a cabinet-filled cup the cover is the face the customer sees, so it is worth the ink.',
      },
    ],
    related: ['paper-cups-with-lids', 'paper-dessert-cups', 'ice-cream-paper-cups-with-lids', 'paper-coffee-cup-lids'],
  },

  {
    slug: 'paper-cup-sleeves',
    name: 'Paper Cup Sleeves',
    category: 'paper-cups',
    subcategory: 'structure',
    seoTitle: 'Paper Cup Sleeves UK | Printed Sleeves for Any Cup',
    seoDescription:
      'Printed paper cup sleeves cut to the circumference of the cups you already hold, in corrugated flute or smooth flat board.',
    h1: 'Paper Cup Sleeves',
    cardBlurb: 'Sleeves cut to the circumference of the cups you already hold.',
    enquiryLabel: 'paper cup sleeves',
    intro: [
      'A sleeve is sized by circumference, not by the volume printed on the cup. Two 12oz cups from different suppliers can differ enough for one sleeve to spin on the other.',
      'That single measurement is what this whole product depends on.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Measure Where the Hand Goes',
        body: [
          'A cup tapers, so its circumference changes along its height. The measurement that matters is at the point where a hand naturally grips, roughly a third down from the rim.',
          'Send a cup rather than a measurement if you can — it removes the ambiguity entirely.',
        ],
        link: {
          href: '/custom-printed-coffee-sleeves/',
          anchor: 'printed sleeves as a branding item',
          sentence: 'Where the sleeve is carrying your brand rather than just adding grip, {link} covers the print side.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Practical Points',
        items: [
          'One sleeve rarely covers more than two adjacent cup sizes.',
          'Double-walled cups are thicker, so sleeves cut for single wall will be tight.',
          'Corrugated insulates; flat board holds finer print detail.',
          'A sleeve positioned too low slides down as the cup tapers.',
        ],
        outro: 'If you run three cup sizes, expect to need at least two sleeves.',
      },
    ],
    faqs: [
      {
        q: 'Will one sleeve fit all our cup sizes?',
        a: 'Usually not. A sleeve cut for a 12oz cup is slack on an 8oz and will not go over a 16oz. Two sleeves across three sizes is the common outcome.',
      },
      {
        q: 'Can we use sleeves on double-walled cups?',
        a: 'Yes, but a double-walled cup is thicker at the same stated volume, so a sleeve cut for single wall will be tight. Tell us which construction you use.',
      },
      {
        q: 'Where exactly do we measure?',
        a: 'At the point where a hand naturally grips, roughly a third down from the rim. A cup tapers, so the measurement changes along its height.',
      },
      {
        q: 'Do double-walled cups need a different sleeve?',
        a: 'Yes, because they are thicker at the same stated volume. A sleeve cut for single wall will be tight.',
      },
      {
        q: 'Corrugated or flat board?',
        a: 'Corrugated insulates through the air gap in the flute; flat board adds grip and holds finer print detail.',
      },
      {
        q: 'Why does our sleeve spin?',
        a: 'Because it is cut slightly too large for the cup. Two cups sold as the same volume can differ enough to cause it.',
      },
      {
        q: 'Can sleeves be printed both sides?',
        a: 'The inner face is invisible in use. The budget does more on the outer face and the board choice.',
      },
      {
        q: 'Will a sleeve stay put on a wet cup?',
        a: 'A cold cup reduces friction, so cold service usually needs a slightly tighter fit than hot.',
      },
      {
        q: 'Are sleeves cheaper than printed cups?',
        a: 'For a single site, considerably. They avoid cup dies and minimum quantities entirely while branding cups you already hold.',
      },
      {
        q: 'Can we order sleeves without buying cups?',
        a: 'Yes, and that is the normal case. The sleeve is cut to the cup you already buy from elsewhere.',
      },
    ],
    related: ['custom-printed-coffee-sleeves', 'single-wall-paper-cups', 'custom-cardboard-beverage-sleeves', 'custom-tea-cup-sleeves'],
  },

  // --- Printed and seasonal designs ---------------------------------------
  {
    slug: 'printed-paper-cups',
    name: 'Printed Paper Cups',
    category: 'paper-cups',
    subcategory: 'printed-designs',
    seoTitle: 'Printed Paper Cups UK | Full Colour Custom Cups',
    seoDescription:
      'Full-colour printed paper cups, with artwork built on the curved fan shape a cup blank actually is rather than a rectangle.',
    h1: 'Full Colour Printed Paper Cups',
    cardBlurb: 'Full-colour artwork wrapped around the cup body.',
    enquiryLabel: 'full colour printed paper cups',
    intro: [
      'A cup is not a cylinder. Flattened out, it is a curved fan shape, and artwork laid out on a rectangle distorts when it is wrapped.',
      'Most disappointing cup print traces back to that one geometric fact.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Artwork Sits on a Fan, Not a Rectangle',
        body: [
          'Because a cup tapers, its flat blank is an arc. Horizontal lines drawn straight across it curve once the cup is formed, and type set level rises at both ends.',
          'We supply a die template shaped to the cup so artwork is built on it from the start rather than corrected afterwards.',
        ],
        link: {
          href: '/artwork-guidelines/',
          anchor: 'file formats and templates we work from',
          sentence: 'Everything a designer needs is set out in our {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Full Colour Is Worth Paying For',
        items: [
          'Photographic imagery, which cannot be reproduced in spot colours.',
          'Illustrations with many colours or soft gradients.',
          'Several designs in one order, where digital printing carries no per-design plate cost.',
          'Seasonal ranges where artwork changes but the cup does not.',
        ],
        outro: 'A one or two colour logo does not need full colour, and printing it that way costs more for no gain.',
      },
    ],
    faqs: [
      {
        q: 'Why does our logo look stretched on the cup?',
        a: 'Almost always because the artwork was laid out on a rectangle. A cup blank is a curved fan, so a logo placed on a straight baseline distorts when the cup is formed.',
      },
      {
        q: 'Is full colour always better than two colours?',
        a: 'Not for a flat logo. Two spot colours reproduce a brand mark more accurately and usually cost less. Full colour earns its cost on photographs and complex illustration.',
      },
      {
        q: 'Why does our logo look stretched?',
        a: 'Almost always because the artwork was laid out on a rectangle. A cup blank is a curved fan, so a straight baseline distorts when formed.',
      },
      {
        q: 'Is full colour always better?',
        a: 'Not for a flat logo. Two spot colours reproduce a brand mark more accurately and usually cost less on a long run.',
      },
      {
        q: 'What does full colour earn its cost on?',
        a: 'Photographs, complex illustration and several designs in one order, where digital printing carries no per-design plate cost.',
      },
      {
        q: 'Can we get the die template?',
        a: 'Yes, as an editable vector file. Ask for it before design work starts rather than trying to correct a rectangle afterwards.',
      },
      {
        q: 'What resolution do images need?',
        a: 'At least 300 dpi at final printed size. An image that looks sharp on screen is often a quarter of that.',
      },
      {
        q: 'Will colours match across sizes?',
        a: 'Different sizes can run on different presses or board batches. If consistency matters, say so at quote stage so sizes are planned together.',
      },
      {
        q: 'Can we print edge to edge?',
        a: 'Bleed extends past the cut line, but a small unprinted margin remains at the rim on every printed cup regardless of supplier.',
      },
      {
        q: 'How many designs can one order carry?',
        a: 'On digital printing, several. Send the split between designs rather than a total so the quantities are priced properly.',
      },
    ],
    related: ['logo-paper-cups', 'coloured-paper-cups', 'custom-paper-coffee-cups', 'butterfly-paper-cups'],
  },

  {
    slug: 'logo-paper-cups',
    name: 'Logo Paper Cups',
    category: 'paper-cups',
    subcategory: 'printed-designs',
    seoTitle: 'Logo Paper Cups UK | Single Colour Branded Cups',
    seoDescription:
      'Single-colour logo cups, the lowest-cost route into branded packaging, with ink only where the mark sits on a plain board.',
    h1: 'Logo Paper Cups',
    cardBlurb: 'Single-colour logo printing — the cheapest branded cup available.',
    enquiryLabel: 'logo paper cups',
    intro: [
      'The cheapest branded cup possible is a white cup with a one-colour logo. Ink covers a few per cent of the surface, and everything else is board you were buying anyway.',
      'For a business putting its name on packaging for the first time, this is where the maths works.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Logo-Only Against Full Coverage',
        columns: ['One-colour logo', 'Full coverage design'],
        rows: [
          ['Ink used', 'A few per cent of the surface', 'The entire printable area'],
          ['Cost', 'Lowest branded option', 'Considerably higher'],
          ['Brand presence', 'Modest but clear', 'Strong from a distance'],
          ['Colour matching', 'Straightforward with a spot ink', 'Also straightforward, but across more area'],
          ['Suits', 'First orders, minimal brands', 'Established identities'],
        ],
        outro: 'A well-placed single mark on a clean cup reads as confident rather than cheap.',
      },
      {
        kind: 'prose',
        heading: 'Repeat the Mark Rather than Enlarging It',
        body: [
          'The instinct with a single logo is to make it big. The better move is to repeat it two or three times around the cup at a modest size.',
          'A hand covers about a third of the cup, so a repeated mark is always visible while a single large one often is not.',
        ],
        link: {
          href: '/white-paper-cups/',
          anchor: 'plain white cups as a base',
          sentence: 'This works most economically on {link}, where no coverage cost is involved.',
        },
      },
    ],
    faqs: [
      {
        q: 'How small can a logo be and still print cleanly?',
        a: 'Fine lines and small type start to close up on board, particularly on kraft. Send us the artwork and we will tell you what will hold rather than letting you find out on the run.',
      },
      {
        q: 'Should the logo be big or repeated?',
        a: 'Repeated, in most cases. A hand covers a third of the cup at any time, so one large mark is often hidden while a repeated smaller one always shows.',
      },
      {
        q: 'Should the logo be large or repeated?',
        a: 'Repeated. A hand covers a third of the cup, so one large mark is often hidden while a repeated smaller one always shows.',
      },
      {
        q: 'How small can a logo print?',
        a: 'Fine lines and small type close up on board, particularly kraft. Send the artwork and we will tell you what holds before the run.',
      },
      {
        q: 'Why is this the cheapest option?',
        a: 'Because ink covers only a few per cent of the surface. Everything else is board you were buying regardless.',
      },
      {
        q: 'Can we add a second colour later?',
        a: 'On a conventional press each ink is a separate plate, so it becomes a different job. If a second colour is likely, price it now.',
      },
      {
        q: 'Does a one-colour cup look cheap?',
        a: 'Not on a good board with a well-placed mark. Plenty of well-regarded cafés use exactly this specification deliberately.',
      },
      {
        q: 'What should we supply?',
        a: 'Vector artwork with the colour named as a Pantone reference, positioned on our die template rather than on a rectangle.',
      },
      {
        q: 'Will the logo print on kraft?',
        a: 'Yes, though it will read warmer and darker. Dark marks hold up on kraft; pale tints do not.',
      },
      {
        q: 'Is this a good first order?',
        a: 'It is the usual starting point, because it proves the cup, the lid and the sizing before any larger print spend.',
      },
    ],
    related: ['white-paper-cups', 'printed-paper-cups', 'custom-paper-coffee-cups', 'kraft-coffee-cups'],
  },

  {
    slug: 'butterfly-paper-cups',
    name: 'Butterfly Paper Cups',
    category: 'paper-cups',
    subcategory: 'printed-designs',
    seoTitle: 'Patterned Paper Cups UK | Illustrated Cup Designs',
    seoDescription:
      'Illustrated and patterned paper cups where a repeating motif covers the body and reads correctly however the cup is held.',
    h1: 'Patterned and Illustrated Paper Cups',
    cardBlurb: 'Repeating illustrated patterns that read from any angle.',
    enquiryLabel: 'patterned paper cups',
    intro: [
      'A repeating pattern solves the problem every printed cup has: whichever way the customer holds it, the design looks intentional.',
      'There is no wrong side to a pattern, which is why illustrated cups have stayed popular in cafés and at events.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Patterns Tolerate the Taper',
        body: [
          'A cup blank is a curved fan, so a strict grid distorts noticeably once formed. Organic motifs — leaves, florals, insects, abstract marks — absorb that distortion without looking wrong.',
          'That is why patterned cups tend to use flowing artwork rather than geometric repeats.',
        ],
        link: {
          href: '/printed-paper-cups/',
          anchor: 'how flat artwork maps onto a cup blank',
          sentence: 'The geometry behind this is covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Making a Pattern Work Commercially',
        items: [
          'Leave one clear area for the brand mark so it is not lost in the pattern.',
          'Keep the pattern to one or two inks if cost matters — coverage does not drive price, ink count does.',
          'Busy artwork hides handling marks well, which suits cups stacked in advance.',
          'Test the pattern at actual size; motifs that work on screen can be too fine in print.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does a full pattern cost more than a logo?',
        a: 'Not necessarily. Cost follows the number of inks rather than how much surface they cover, so a one-colour pattern prices much like a one-colour logo.',
      },
      {
        q: 'Will a geometric pattern distort on the cup?',
        a: 'Straight-line grids will, because the blank is a curved fan. Flowing or organic patterns absorb the distortion without looking incorrect, which is why they are the usual choice.',
      },
      {
        q: 'Does a pattern cost more than a logo?',
        a: 'Not necessarily. Cost follows the number of inks rather than how much surface they cover, so a one-colour pattern prices like a one-colour mark.',
      },
      {
        q: 'Will a geometric pattern distort?',
        a: 'Straight grids will, because the blank is a curved fan. Flowing or organic patterns absorb the distortion without looking wrong.',
      },
      {
        q: 'Where should the brand mark go?',
        a: 'In a deliberately clear area of the pattern. Leaving that gap looks intentional; dropping a logo onto a busy field does not.',
      },
      {
        q: 'Do patterns hide handling marks?',
        a: 'Noticeably, which helps on cups stacked and handled before service. A flat solid colour shows every mark.',
      },
      {
        q: 'Can we use a photographic pattern?',
        a: 'Yes, at 300 dpi at final size, printed in full colour. Bear in mind a hand covers a band of it throughout the drink.',
      },
      {
        q: 'Will fine pattern detail hold?',
        a: 'Very small motifs can close up on board. Test at actual size rather than judging from a screen at 200 per cent.',
      },
      {
        q: 'Can we change the pattern seasonally?',
        a: 'Easily, because there is no die on a cup print. Only the artwork changes between runs.',
      },
      {
        q: 'Do patterns suit a children\'s offer?',
        a: 'They do, and a repeating motif reads as playful where a corporate mark does not.',
      },
    ],
    related: ['printed-paper-cups', 'coloured-paper-cups', 'polka-designs-ice-cream-cone-sleeves', 'logo-paper-cups'],
  },

  {
    slug: 'christmas-paper-cups',
    name: 'Christmas Paper Cups',
    category: 'paper-cups',
    subcategory: 'printed-designs',
    seoTitle: 'Christmas Paper Cups UK | Festive Printed Cups',
    seoDescription:
      'Festive printed paper cups for the UK Christmas trade, scheduled backwards from the day they need to be on your counter.',
    h1: 'Christmas Paper Cups',
    cardBlurb: 'Festive cup designs, planned backwards from the on-counter date.',
    enquiryLabel: 'Christmas paper cups',
    intro: [
      'Every café in the country wants festive cups in the same six weeks, and press capacity does not expand to meet it.',
      'A Christmas cup order is a scheduling exercise first and a design exercise second.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Working Back from the Counter Date',
        steps: [
          {
            title: 'Set the Day It Goes Live',
            body: 'Most sites switch in the last week of November. That date, not the order date, is the fixed point.',
          },
          {
            title: 'Subtract Delivery and Distribution',
            body: 'Stock has to reach every site and get to the front of the cupboard before the switch.',
          },
          {
            title: 'Confirm the Print Lead Time in Writing',
            body: 'Lead times lengthen sharply in autumn. We confirm yours on the quote rather than quoting a general figure.',
          },
          {
            title: 'Fix an Artwork Deadline Well Before That',
            body: 'Artwork approval is the step that slips. Build slack into it, not into the print.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Whether to Print the Year',
        body: [
          'A dated cup cannot be carried into the following season, so any overstock is written off completely.',
          'Unless you are confident of the quantity, undated festive artwork lets leftovers be used again, which quietly saves more than the design costs.',
        ],
        link: {
          href: '/event-or-seasonal-sleeves/',
          anchor: 'seasonal sleeves as a lower-commitment option',
          sentence: 'Where a full cup run is too much, {link} achieve a festive look on plain cups.',
        },
      },
    ],
    faqs: [
      {
        q: 'When should we order Christmas cups?',
        a: 'Earlier than feels necessary, because demand concentrates into a few weeks of press time. Ask for a confirmed lead time as soon as the design direction is settled and treat it as the artwork deadline.',
      },
      {
        q: 'Should we print the year on the cup?',
        a: 'Only if you are sure of the quantity. Undated artwork lets unsold stock be used the following year, which usually matters more than the extra detail.',
      },
      {
        q: 'Should we print the year?',
        a: 'Only if you are sure of the quantity. Undated artwork lets unsold stock run again next year, which usually matters more than the detail.',
      },
      {
        q: 'Can we run four designs in one order?',
        a: 'On digital printing, yes, with the cost depending on the split. Ask for mixed cases if they go to more than one site.',
      },
      {
        q: 'What if stock arrives late?',
        a: 'A festive cup arriving in mid-December has lost most of its value, which is why the on-counter date drives the whole schedule.',
      },
      {
        q: 'Do festive cups need a different board?',
        a: 'No, only different artwork. That is why a seasonal run is usually a shorter job than a first order.',
      },
      {
        q: 'Can we use our standard cup size?',
        a: 'Yes, and you should. Keeping the size means no new die and no change at the counter when you switch.',
      },
      {
        q: 'How many should we order?',
        a: 'Enough for the promotion rather than the year. Seasonal overstock is written off unless the artwork is undated.',
      },
      {
        q: 'Will metallic finishes work?',
        a: 'Metallic ink or foil both work for festive ranges, though foil makes the material mixed, which affects disposal.',
      },
      {
        q: 'Can we combine a Christmas run with a Halloween one?',
        a: 'Yes, and combining two seasonal jobs shares the setup. The lead times differ, so tell us both dates.',
      },
    ],
    related: ['christmas-coffee-cups', 'event-or-seasonal-sleeves', 'gold-paper-cups', 'red-paper-cups'],
  },

  {
    slug: 'christmas-coffee-cups',
    name: 'Christmas Coffee Cups',
    category: 'paper-cups',
    subcategory: 'printed-designs',
    seoTitle: 'Christmas Coffee Cups UK | Festive Takeaway Cups',
    seoDescription:
      'Festive takeaway coffee cups for the winter trade, including how many designs one run can carry and what a set really costs.',
    h1: 'Christmas Coffee Cups',
    cardBlurb: 'Festive takeaway cups, including multi-design seasonal sets.',
    enquiryLabel: 'Christmas coffee cups',
    intro: [
      'The festive takeaway cup does a job an ordinary one does not: it makes a routine purchase feel like part of the season, and customers photograph it.',
      'The interesting question is usually how many designs to run rather than what to put on them.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'One Design Against a Set of Four',
        columns: ['Single design', 'Set of designs'],
        rows: [
          ['Cost on digital print', 'Lower, but not by much', 'Modest premium'],
          ['Cost on long conventional runs', 'Much lower', 'Each design carries its own setup'],
          ['Customer interest', 'Seen once', 'Customers collect and compare them'],
          ['Stock management', 'Simple', 'Needs even distribution across sites'],
          ['Social media', 'Modest', 'Noticeably stronger'],
        ],
        outro: 'On digital printing a set of four is often worth the premium for the attention it generates.',
      },
      {
        kind: 'prose',
        heading: 'Distribution Matters with a Set',
        body: [
          'A set of four designs only works if all four reach every site. Delivered as four separate boxes, one branch inevitably works through one design first and the effect is lost.',
          'Ask for mixed cases if you are running a set across more than one location.',
        ],
        link: {
          href: '/christmas-paper-cups/',
          anchor: 'the scheduling behind a festive run',
          sentence: 'Timings are covered in more detail on {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'How many festive designs can we run in one order?',
        a: 'On digital printing, several, with the cost depending on how the quantity splits. On long conventional runs each design carries its own setup, which changes the calculation considerably.',
      },
      {
        q: 'How do we make sure every site gets every design?',
        a: 'Ask for mixed cases rather than separate boxes per design. Otherwise one site works through one design and the set effect disappears.',
      },
      {
        q: 'How many festive designs can one run carry?',
        a: 'On digital printing, several. On long conventional runs each design carries its own setup, which changes the calculation considerably.',
      },
      {
        q: 'Do customers actually notice a set?',
        a: 'They collect and compare them, which is most of the reason a set is worth the premium over a single design.',
      },
      {
        q: 'When does the switch usually happen?',
        a: 'Most sites change in the last week of November. That date, not the order date, is what the schedule is built backwards from.',
      },
      {
        q: 'Can we keep the same cup size?',
        a: 'Yes, and it is the sensible route. No die, no new lids, and no change at the counter when you switch over.',
      },
      {
        q: 'Should the design mention the year?',
        a: 'Only if you will use it all. Undated festive artwork can be carried into the following season.',
      },
      {
        q: 'Do these need to be ordered with lids?',
        a: 'Only if your lid stock is running low. Lids are unaffected by a seasonal print, so they can be ordered on their own cycle.',
      },
      {
        q: 'What is the biggest scheduling risk?',
        a: 'Artwork approval. It is the step that slips most often, so build slack into it rather than into the print.',
      },
      {
        q: 'Do we need new lids for a festive cup?',
        a: 'No, provided the cup size is unchanged. Keeping the size is what makes a seasonal switch straightforward.',
      },
    ],
    related: ['christmas-paper-cups', 'hot-chocolate-paper-cups', 'custom-paper-coffee-cups', 'event-or-seasonal-sleeves'],
  },

  // --- Drinking and dispenser cups ----------------------------------------
  {
    slug: 'paper-drinking-cups',
    name: 'Paper Drinking Cups',
    category: 'paper-cups',
    subcategory: 'drinking-cups',
    seoTitle: 'Paper Drinking Cups UK | Printed Cold Drink Cups',
    seoDescription:
      'Plain and printed paper drinking cups for events, canteens and public buildings, bought on unit cost and reliable stacking.',
    h1: 'Paper Drinking Cups',
    cardBlurb: 'Everyday cold drink cups for events, canteens and public buildings.',
    enquiryLabel: 'paper drinking cups',
    intro: [
      'These are the cups nobody thinks about: filled from a jug, drunk in a minute, thrown away. Volume and reliability matter, and design mostly does not.',
      'They are bought by facilities teams and event caterers rather than by brand managers.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Bought on Cost per Thousand',
        body: [
          'At this end of the market the deciding factors are unit price, consistent stacking and reliable supply. A cup that occasionally sticks in a stack costs more in staff time than it saves in price.',
          'Printing is worth it only where the cup is seen by visitors rather than staff.',
        ],
        link: {
          href: '/paper-water-cups/',
          anchor: 'cups specified for water coolers',
          sentence: 'For dispenser applications specifically, {link} covers the fit requirements.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where These Are Used',
        items: [
          'Canteens and staff rooms serving squash and water.',
          'Events and conferences with a self-service drinks table.',
          'Public buildings, sports halls and community centres.',
          'Any setting where cups are filled from a jug rather than a machine.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is it worth printing these?',
        a: 'In a public-facing area, often yes — a branded cup at a reception or an event is seen by everyone who attends. In a staff room, most organisations sensibly take the plain cup.',
      },
      {
        q: 'Can these hold hot drinks?',
        a: 'Only if specified for it. A cup made for cold service will not hold up to a hot drink, and mixing the two in one cupboard is how that mistake happens.',
      },
      {
        q: 'What decides the choice at this end of the market?',
        a: 'Unit price, consistent stacking and reliable supply. A cup that occasionally sticks costs more in staff time than it saves.',
      },
      {
        q: 'Do these need lids?',
        a: 'Rarely. They are filled from a jug and drunk immediately, which is why they are among the cheapest cups available.',
      },
      {
        q: 'Will they denest cleanly?',
        a: 'With a denesting feature, yes, and at self-service volumes that matters more than almost anything else.',
      },
      {
        q: 'What size is standard?',
        a: '7oz is the common office and event size, though 9oz is used where a fuller pour is served.',
      },
      {
        q: 'Do these suit a conference?',
        a: 'They do, and event caterers are among the main buyers alongside canteens and public buildings.',
      },
      {
        q: 'Can we order plain and printed together?',
        a: 'Yes, and many organisations do exactly that: printed cups for reception and meeting rooms, plain stock everywhere else. Send us the split between the two rather than a single combined total.',
      },
      {
        q: 'What size suits a self-service drinks table?',
        a: '7oz to 9oz covers most event and canteen service. Larger sizes encourage waste where drinks are poured freely.',
      },
      {
        q: 'Do these need to be branded for an event?',
        a: 'For a branded conference or an exhibition stand, often. For day-to-day internal catering, plain stock is the more sensible spend and nobody photographs the cup anyway.',
      },
    ],
    related: ['paper-water-cups', 'paper-bathroom-cups', '7-oz-paper-cups', 'paper-cone-cups'],
  },

  {
    slug: 'paper-water-cups',
    name: 'Paper Water Cups',
    category: 'paper-cups',
    subcategory: 'drinking-cups',
    seoTitle: 'Paper Water Cups UK | Cooler & Dispenser Cups',
    seoDescription:
      'Paper water cups sized to fit cooler dispensers, where tube diameter and stack height matter far more than the stated volume.',
    h1: 'Paper Water Cups',
    cardBlurb: 'Cooler cups where dispenser fit matters more than volume.',
    enquiryLabel: 'paper water cups',
    intro: [
      'A water cup is defined by the dispenser it has to come out of. Volume is almost incidental; tube diameter and cup height decide whether it works.',
      'A cup that jams a dispenser generates more complaints than one that is slightly too small.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Dispenser Fit Is a Tolerance Question',
        body: [
          'Cooler dispensers hold a stack in a tube and release one cup at a time. That mechanism depends on consistent rim diameter and consistent stack height.',
          'A batch that varies slightly will jam, and the fault will be reported as a broken dispenser rather than a packaging issue.',
        ],
        link: {
          href: '/paper-cone-cups/',
          anchor: 'cone cups for dispensers of a different type',
          sentence: 'Cone dispensers take a different fitting entirely, covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What to Send Us with an Enquiry',
        items: [
          'The dispenser make and model, or a photograph of the tube.',
          'A sample of the cup currently in use, if there is one.',
          'The rim diameter and cup height if you can measure them.',
          'Whether the cups are also used away from the dispenser.',
        ],
        outro: 'Getting this right before ordering avoids a pallet of cups that will not dispense.',
      },
    ],
    faqs: [
      {
        q: 'Will these fit our existing dispenser?',
        a: 'Only if the rim diameter and cup height match what the tube expects. Send the model or a current cup and we will check it before quoting rather than after delivery.',
      },
      {
        q: 'Does the cup volume matter for a cooler?',
        a: 'Less than the fit does. A cup that dispenses reliably at a slightly different volume is far more useful than one at the exact volume that jams.',
      },
      {
        q: 'Does the volume matter for a cooler?',
        a: 'Less than the fit does. A cup that dispenses reliably at a slightly different volume is far more useful than one that jams.',
      },
      {
        q: 'Why do cups jam a dispenser?',
        a: 'A rim or height slightly outside tolerance, or a damaged sleeve. The fault is usually reported as a broken machine.',
      },
      {
        q: 'What should we send with an enquiry?',
        a: 'The dispenser make and model, a sample of the current cup, and the rim diameter and height if you can measure them.',
      },
      {
        q: 'Can these be printed?',
        a: 'Yes, and in a reception area it is worth doing. In back-office locations it rarely repays the cost.',
      },
      {
        q: 'Do water cups need a lining?',
        a: 'A light barrier is enough for water. Tell us if anything else goes in them, because that changes the specification.',
      },
      {
        q: 'Are cone and flat-bottom dispensers interchangeable?',
        a: 'No. Cone and flat-bottom dispensers take entirely different fittings, so confirm which unit you have before ordering either type, ideally by checking the model plate rather than by eye.',
      },
      {
        q: 'How are they packed?',
        a: 'In nested sleeves, which is also how they load into a dispenser. Damaged sleeves are the usual cause of jamming.',
      },
      {
        q: 'Do you supply plain water cups?',
        a: 'Yes, and most buildings take plain stock for staff areas and print only what visitors see.',
      },
    ],
    related: ['paper-drinking-cups', 'paper-cone-cups', '7-oz-paper-cups', 'paper-bathroom-cups'],
  },

  {
    slug: 'paper-bathroom-cups',
    name: 'Paper Bathroom Cups',
    category: 'paper-cups',
    subcategory: 'drinking-cups',
    seoTitle: 'Paper Bathroom Cups UK | Small Hygiene Cups',
    seoDescription:
      'Small paper bathroom and rinsing cups for hotels, dental practices and care settings, bought for hygiene, volume and looks.',
    h1: 'Paper Bathroom Cups',
    cardBlurb: 'Small rinsing cups for hotels, dental practices and care settings.',
    enquiryLabel: 'paper bathroom cups',
    intro: [
      'Bathroom cups are a hygiene product rather than a hospitality one. They are used once, briefly, and their whole purpose is that nobody shares a glass.',
      'Hotels, dental practices and care settings buy them in volume for exactly that reason.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Presentation Still Counts in a Hotel',
        body: [
          'In a hotel bathroom the cup sits on a shelf and is looked at before it is used. A crushed or grubby-looking cup undermines the room.',
          'That is why hotels often specify a slightly heavier cup, or a wrapped one, where a dental practice would take the cheapest option that works.',
        ],
        link: {
          href: '/small-cardboard-cups/',
          anchor: 'heavier small cups that resist crushing',
          sentence: 'Where a cup sits on display, {link} hold their shape better.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Differs Between Settings',
        items: [
          'Hotels — appearance matters; often branded and sometimes individually wrapped.',
          'Dental practices — high volume, single use, cost-led.',
          'Care settings — reliability and hygiene first, appearance last.',
          'Public washrooms — dispenser compatibility is the main constraint.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should hotel bathroom cups be wrapped?',
        a: 'Individually wrapped cups signal that nothing has touched them, which is the point in a bathroom. It adds cost, and whether that is worth it depends on the standard of the property.',
      },
      {
        q: 'Can these be branded?',
        a: 'Yes, and in a hotel it is one of the few branded items a guest handles in the bathroom. In a clinical setting it is rarely worth the cost.',
      },
      {
        q: 'What size are bathroom cups?',
        a: 'Small, typically in the 3 to 5oz range, since they are used for rinsing rather than drinking a full serving.',
      },
      {
        q: 'Do they need a heavier board?',
        a: 'In a hotel where the cup sits on display, yes. A crushed or flimsy cup undermines the room.',
      },
      {
        q: 'Do these fit washroom dispensers?',
        a: 'Where a dispenser is used, the fit matters as much as with a cooler. Send the model or a current cup.',
      },
      {
        q: 'Are they suitable for dental practices?',
        a: 'They are widely used there, where cost and reliable single use matter more than appearance.',
      },
      {
        q: 'Do they need a lining?',
        a: 'A light barrier for water is enough. Tell us if mouthwash or anything else is used, since that can differ.',
      },
      {
        q: 'Can we order in very large volumes?',
        a: 'This is a high-volume product and the economics improve with quantity. Send your annual usage rather than a first order.',
      },
      {
        q: 'Do these need to match a dispenser?',
        a: 'Where one is fitted, yes, and the fit matters as much as with a cooler. Send the model or a current cup.',
      },
      {
        q: 'What size do hotels usually order?',
        a: 'Small, in the 3 to 5oz range, since the cup is for rinsing rather than drinking a full serving.',
      },
    ],
    related: ['small-paper-cups', 'paper-drinking-cups', 'small-cardboard-cups', 'paper-water-cups'],
  },
];
