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
        heading: 'A third of the cup is always hidden',
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
        heading: 'Sleeves are the cheaper way in',
        body: 'Printed cups carry tooling and minimum quantities that a single site often cannot justify. A printed sleeve on a plain cup achieves most of the branding effect for a fraction of the commitment, and it is where most independents start.',
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
        heading: 'What works on kraft',
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
        heading: 'Kraft and double wall together',
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
        heading: 'Toppings and lids do not coexist easily',
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
        heading: 'Points worth deciding',
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
        heading: 'Single wall, double wall and ripple',
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
        heading: 'The lining is what makes it a hot cup',
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
        heading: 'Where single wall is the right answer',
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
        heading: 'The smooth surface prints most cleanly',
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
        heading: 'The holes have to match your cups',
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
        heading: 'What makes a carrier work in practice',
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
        heading: 'Lid types and what each is for',
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
        heading: 'Sharing a lid across sizes',
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
        heading: 'The lid changes the portion',
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
        heading: 'Details that matter for desserts',
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
        heading: 'The outside is what needs protecting',
        body: [
          'A drink cup is lined inside because the liquid is inside. An ice cream cup is dry inside and wet outside within a minute of leaving the freezer.',
          'A coated or laminated outer face keeps the print sharp and stops the board going soft under a customer\'s grip.',
        ],
        link: {
          href: '/cone-sleeves/',
          anchor: 'cone sleeves for the same customers',
          sentence: 'Parlours ordering cups almost always order {link} alongside them.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Sizing scoop cups',
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
    h1: 'Ice Cream Cups With Lids',
    cardBlurb: 'Cups supplied with matched lids for takeaway and pre-packed portions.',
    enquiryLabel: 'ice cream cups with lids',
    intro: [
      'Adding a lid turns a scoop cup into a takeaway product. It can be filled ahead, stacked in a cabinet, and sold without a member of staff at the scoop counter.',
      'It also introduces the mismatch problem, because lid and cup have to be sized together.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Domed against flat lids for ice cream',
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
        heading: 'Pre-filling changes the whole operation',
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
        heading: 'A spoon is a structural load',
        body: [
          'Scraping the last of a soup means pressing a spoon against the wall and the base. A drink cup flexes under that and can split at the seam.',
          'A heavier board resists it, which is the main reason food cups cost more than drink cups at the same volume.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Specifying for hot food',
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
        heading: 'Bowl against a tall cup for food',
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
        heading: 'Presentation is a real reason to choose one',
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
        heading: 'No lining means lower cost and simpler disposal',
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
        heading: 'What counts as dry enough',
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
        heading: 'One cup across a changing menu',
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
        heading: 'Choosing sizes for general use',
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
        heading: 'Denesting is the specification that matters',
        body: [
          'During a rush, staff pull portion cups off a stack one-handed. Cups that stick together cost seconds every time, and seconds add up across a service.',
          'A slight step or rib in the wall keeps them separated. It is invisible to the customer and the single most useful feature on the product.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where portion cups earn their place',
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
        heading: 'The lid is the product',
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
        heading: 'What sauces do to board',
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
    h1: 'Paper Tea Cups With Handles',
    cardBlurb: 'Handled cups for events, where a handle replaces a sleeve.',
    enquiryLabel: 'paper tea cups with handles',
    intro: [
      'A handle does what a sleeve does, in a form that reads as a teacup rather than a takeaway. That distinction matters more than it sounds at a reception or a formal occasion.',
      'It is the reason handled cups survive in a market otherwise dominated by sleeves.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Handle against sleeve',
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
        heading: 'Where they suit and where they do not',
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
        heading: 'The rim is why the weight matters',
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
        heading: 'Typical buyers',
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
    h1: 'Cardboard Cups With Lids',
    cardBlurb: 'Cups and lids supplied together, matched on rim diameter.',
    enquiryLabel: 'cardboard cups with lids',
    intro: [
      'Buying cups and lids separately is where most lid problems begin. Rim diameters differ between manufacturers even at identical stated volumes.',
      'Ordering them as a set removes the problem entirely, which is the whole point of this page.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Matched sets remove a whole category of problem',
        body: [
          'A lid that is close but not right pops off in a bag, leaks in a car, and is blamed on the lid when it is really a mismatch.',
          'Cups and lids quoted together are checked against each other before they ship, which is not something you can do reliably across two suppliers.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What a set covers',
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
        heading: 'Small cups get gripped harder',
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
        heading: 'Where the heavier board is worth it',
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
    h1: 'Paper Cups With Lids',
    cardBlurb: 'Cups and lids matched on rim diameter across hot and cold ranges.',
    enquiryLabel: 'paper cups with lids',
    intro: [
      'The most common ordering mistake in this whole catalogue is buying cups first and lids second.',
      'Rim diameters are not standardised across manufacturers, so a lid bought separately may simply not fit, whatever the box says.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Getting cups and lids right first time',
        steps: [
          {
            title: 'Decide whether you need lids at all',
            body: 'Eat-in service often does not. Every lid line is stock, storage and a service decision.',
          },
          {
            title: 'Choose the lid type before the cup size',
            body: 'A domed lid adds usable volume above the rim; a flat lid takes it away.',
          },
          {
            title: 'Check which sizes can share a rim',
            body: 'One lid across two cup sizes halves your lid lines and removes a service error.',
          },
          {
            title: 'Order both together',
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
        heading: 'Lids are a service decision as well as a product',
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
    h1: 'Paper Cups With Handles',
    cardBlurb: 'Attached handles for functions and very hot service.',
    enquiryLabel: 'paper cups with handles',
    intro: [
      'A handle removes hand contact with the cup wall completely, which no sleeve does. For very hot drinks that is a real difference rather than a stylistic one.',
      'It costs more and stores worse, and those two facts decide most purchasing decisions here.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Complete separation from the wall',
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
        heading: 'The practical objections',
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
        heading: 'No base means no abandoned cups',
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
        heading: 'Where cone cups are used',
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
        heading: 'Cover against lid',
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
        heading: 'Where a paper cover is the right choice',
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
        a: 'No. A cover keeps dust off a cup standing still; it will not hold contents in a bag. Anything that moves needs a fitted lid.',
      },
      {
        q: 'Are covers worth printing?',
        a: 'They are, because on a cabinet-filled cup the cover is the face the customer sees. It is one of the few parts where printing a lid-type item genuinely pays back.',
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
        heading: 'Measure where the hand goes',
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
        heading: 'Practical points',
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
        heading: 'Artwork sits on a fan, not a rectangle',
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
        heading: 'What full colour is worth paying for',
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
        heading: 'Logo-only against full coverage',
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
        heading: 'Repeat the mark rather than enlarging it',
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
        heading: 'Patterns tolerate the taper',
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
        heading: 'Making a pattern work commercially',
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
        heading: 'Working back from the counter date',
        steps: [
          {
            title: 'Set the day it goes live',
            body: 'Most sites switch in the last week of November. That date, not the order date, is the fixed point.',
          },
          {
            title: 'Subtract delivery and distribution',
            body: 'Stock has to reach every site and get to the front of the cupboard before the switch.',
          },
          {
            title: 'Confirm the print lead time in writing',
            body: 'Lead times lengthen sharply in autumn. We confirm yours on the quote rather than quoting a general figure.',
          },
          {
            title: 'Fix an artwork deadline well before that',
            body: 'Artwork approval is the step that slips. Build slack into it, not into the print.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Whether to print the year',
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
        heading: 'One design against a set of four',
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
        heading: 'Distribution matters with a set',
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
        heading: 'Bought on cost per thousand',
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
        heading: 'Where these are used',
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
        heading: 'Dispenser fit is a tolerance question',
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
        heading: 'What to send us with an enquiry',
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
        heading: 'Presentation still counts in a hotel',
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
        heading: 'What differs between settings',
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
    ],
    related: ['small-paper-cups', 'paper-drinking-cups', 'small-cardboard-cups', 'paper-water-cups'],
  },
];
