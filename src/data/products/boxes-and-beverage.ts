import type { Product } from '../types';

/** Fried food boxes and cup sleeves — two small ranges with sharp requirements. */
export const FOOD_BOXES: Product[] = [
  {
    slug: 'french-fry-boxes',
    name: 'Custom Chip & Fry Boxes',
    category: 'food-boxes',
    seoTitle: 'Custom Chip Boxes UK | Printed Fry Scoops & Cartons',
    seoDescription:
      'Printed chip boxes and fry scoops in grease-resistant board, sized by the portion weight you serve rather than by a size name.',
    h1: 'Custom Chip and Fry Boxes',
    cardBlurb: 'Scoops and cartons for chip portions, sized by weight rather than by name.',
    enquiryLabel: 'chip and fry boxes',
    intro: [
      'Chip portions are described as regular and large, and those words mean completely different things from one shop to the next. Sizing a box from them produces a box that is wrong.',
      'Weigh a serving, send us the figure, and the box comes back sized to the food rather than to a label.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Scoop Against Carton',
        intro: 'The open front is the whole difference, and it cuts both ways.',
        columns: ['Scoop', 'Carton'],
        rows: [
          ['Filling speed', 'Fast — the open front takes a basket load', 'Slower, filled from above'],
          ['Steam', 'Escapes, so chips stay crisp', 'Trapped unless vented'],
          ['Eating standing up', 'Designed for it', 'Workable'],
          ['Travel', 'Chips escape once it tips', 'Contains the portion'],
          ['Stacking on a tray', 'Poor', 'Good'],
        ],
        outro: 'Counter trade suits a scoop; delivery and seated service suit a carton.',
      },
      {
        kind: 'prose',
        heading: 'Grease Resistance Is the Baseline, Not an Upgrade',
        body: [
          'Chips carry more free oil than any other item in this catalogue. Untreated board goes translucent within a minute or two, and the print goes with it.',
          'Every box in this range is quoted on a grease-resistant board as standard. The variable is which grade, and that depends on your fryer temperature and how long portions are held.',
        ],
        link: {
          href: '/custom-fries-sleeves/',
          anchor: 'open chip sleeves for smaller portions',
          sentence: 'Below about 150 grams, {link} are cheaper and easier to hold.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Sizing basis', 'Portion weight, measured on your own scales'],
          ['Format', 'Open scoop or four-walled carton'],
          ['Board', 'Grease-resistant, grade confirmed against your fryer'],
          ['Venting', 'Available on cartons, to stop chips steaming'],
          ['Supply', 'Flat-packed for assembly, or pre-formed'],
          ['Print', 'One colour to full CMYK'],
        ],
        note: 'Board grades, minimum quantities and lead times are confirmed on the written quote.',
      },
    ],
    faqs: [
      {
        q: 'What size box do I need for a regular portion of chips?',
        a: 'There is no standard answer, because a regular portion ranges from about 150 to 300 grams across UK shops. Weigh yours and send the figure, and we will size the box from it.',
      },
      {
        q: 'Why do my chips go soft in a box?',
        a: 'Trapped steam rather than the board. A closed carton holds moisture against the chips, so either an open format or a vented carton is needed if crispness matters.',
      },
      {
        q: 'Can we print full colour on a grease-resistant board?',
        a: 'Yes. The grease resistance is a lining or coating on the inner face, so the printable outer surface behaves normally.',
      },
    ],
    related: ['custom-fries-sleeves', 'cone-fries-packaging', 'fried-chicken-packaging', 'custom-french-fry-bags'],
  },

  {
    slug: 'cone-fries-packaging',
    name: 'Cone Fries Packaging',
    category: 'food-boxes',
    seoTitle: 'Cone Chip Packaging UK | Printed Fry Cones',
    seoDescription:
      'Cone-shaped chip packaging for markets and festivals: a tall portion in a small footprint that leaves the customer a free hand.',
    h1: 'Cone Chip Packaging',
    cardBlurb: 'Cone-shaped chip holders for walking customers at markets and festivals.',
    enquiryLabel: 'cone chip packaging',
    intro: [
      'A chip cone holds the same weight as a box in a much smaller footprint, and it leaves the customer a free hand. At a festival, where everyone is holding a drink, that is the difference between a sale and a pass.',
      'It also looks more generous than the same portion laid flat, which is not nothing.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Vertical Portions Look Bigger',
        body: [
          'The same 200 grams of chips reads as more food standing tall in a cone than spread across a scoop. Street food traders have known this for a long time.',
          'It is a genuine perception effect rather than a trick — the customer sees the top of the pile at eye level rather than looking down into a tray.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What a Chip Cone Has to Get Right',
        items: [
          'A closed or reinforced point, or chips and salt work their way out of the bottom.',
          'Grease-resistant board, since the whole portion presses against one narrow area.',
          'Enough rigidity that the cone does not collapse when gripped mid-height.',
          'A rim wide enough to get a hand and a wooden fork in.',
        ],
        outro: 'A holder or stand is worth considering if customers need to put the cone down.',
        link: {
          href: '/paper-mache-cones/',
          anchor: 'rigid moulded cones that need no assembly',
          sentence: 'Where service speed matters more than storage space, {link} arrive ready to fill.',
        },
      },
      {
        kind: 'callout',
        heading: 'Cones Need Somewhere to Be Put Down',
        body: 'A cone cannot stand on a table by itself. Sites with seating usually need a stand or a holder alongside, or customers end up leaning them against a drink.',
      },
    ],
    faqs: [
      {
        q: 'Do chips fall out of the point?',
        a: 'They do on a cone with an open tip, along with salt and small broken pieces. A closed or folded point is worth specifying, and it is the detail that separates a good chip cone from an irritating one.',
      },
      {
        q: 'Can a customer put a cone down?',
        a: 'Not without a stand. If your customers sit down to eat, plan for a holder as part of the order rather than discovering the problem at the first event.',
      },
    ],
    related: ['french-fry-boxes', 'paper-mache-cones', 'custom-chicken-cone-sleeves', 'custom-fries-sleeves'],
  },

  {
    slug: 'french-fries-holder-paper',
    name: 'Chip Holder Papers',
    category: 'food-boxes',
    seoTitle: 'Printed Chip Papers UK | Fry Holder Sheets',
    seoDescription:
      'Printed chip papers folded around a portion at the counter. The lowest-cost chip packaging there is, and the most compact.',
    h1: 'Printed Chip Holder Papers',
    cardBlurb: 'Folded paper holders — the lowest-cost way to serve a chip portion.',
    enquiryLabel: 'chip holder papers',
    intro: [
      'Before boxes and cones, chips came in paper, and plenty of shops have gone back to it. A folded sheet costs a fraction of a formed container and takes almost no storage.',
      'The trade-off is that it needs a member of staff who can fold one quickly.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Paper Against a Formed Box',
        columns: ['Folded paper', 'Formed box'],
        rows: [
          ['Unit cost', 'Considerably lower', 'Higher'],
          ['Storage', 'Almost none', 'Significant'],
          ['Service speed', 'Depends on staff skill', 'Consistent'],
          ['Portion consistency', 'Varies with the fold', 'Fixed'],
          ['Presentation', 'Traditional, informal', 'Neater, more branded'],
        ],
        outro: 'Busy shops with settled staff do well on paper; high-turnover teams usually prefer a box.',
      },
      {
        kind: 'prose',
        heading: 'Grease Resistance Without Losing the Fold',
        body: [
          'A paper stiff enough to resist oil completely is also stiff enough to be awkward to fold at speed. There is a genuine balance to strike.',
          'Greaseproof at a moderate weight folds cleanly and holds up for the length of a walk home, which is what most chip shops actually need.',
        ],
        link: {
          href: '/custom-printed-fry-paper/',
          anchor: 'printed fry papers used as a liner',
          sentence: 'Shops using a box as well often line it with {link} for the same look.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will paper hold up as well as a box?',
        a: 'For the length of a short journey, generally yes, with a greaseproof grade. For a long walk on a wet evening, a box holds its shape better and paper starts to sag.',
      },
      {
        q: 'How much does the fold vary between staff?',
        a: 'Enough to matter for portion consistency. Shops that care about exact portions tend to move to a formed container; shops that value the traditional look accept the variation.',
      },
    ],
    related: ['custom-printed-fry-paper', 'french-fry-boxes', 'custom-greaseproof-paper', 'custom-french-fry-bags'],
  },

  {
    slug: 'fried-chicken-packaging',
    name: 'Fried Chicken Packaging',
    category: 'food-boxes',
    seoTitle: 'Fried Chicken Boxes UK | Printed Chicken Packaging',
    seoDescription:
      'Printed fried chicken boxes with vented construction and a heavy grease-resistant board for bone-in pieces and full meals.',
    h1: 'Fried Chicken Packaging',
    cardBlurb: 'Vented boxes in heavy board for bone-in chicken and full meals.',
    enquiryLabel: 'fried chicken packaging',
    intro: [
      'Fried chicken is heavy, bone-in, extremely hot and produces a great deal of steam. Of everything in this catalogue it puts the most stress on a board container.',
      'Venting matters more here than anywhere else, because chicken that steams goes from crisp to soggy in the time it takes to drive it across town.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Venting Is What Keeps the Coating Crisp',
        body: [
          'A sealed box holds moisture against the coating and softens it within minutes. That is the single most common complaint about delivered fried chicken, and it is a packaging problem rather than a kitchen one.',
          'Vent holes let steam out while keeping the box closed. Their size and position matter — too few and nothing escapes, too many and the food cools too fast.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What the Box Has to Cope With',
        items: [
          'Weight — bone-in pieces are far heavier than the same volume of chips.',
          'Heat, sustained for longer than most fried food.',
          'Oil, in quantity, from every surface of every piece.',
          'Being stacked in a delivery bag with other orders on top.',
          'Sharp bone ends pressing against the walls.',
        ],
        outro: 'A heavier board is not optional here in the way it might be for a lighter product.',
        link: {
          href: '/custom-chicken-cone-sleeves/',
          anchor: 'cone formats for popcorn chicken and small pieces',
          sentence: 'For boneless pieces served to walking customers, {link} suit better than a box.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Heavy, grease-resistant; grade set against portion weight'],
          ['Venting', 'Positioned to release steam without rapid heat loss'],
          ['Format', 'Closed box for delivery; open bucket-style for counter'],
          ['Sizing', 'By piece count and portion weight'],
          ['Stacking', 'Rim and lid designed for delivery bags'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does delivered chicken arrive soggy?',
        a: 'Steam trapped in the box, almost always. Adding venting is more effective than changing the board, the bag or the driver route, and it is the first thing to fix.',
      },
      {
        q: 'How many pieces should a box hold?',
        a: 'Size by weight rather than count, since piece sizes vary considerably. Weigh your standard portions and send the figures, including the largest sharing box you sell.',
      },
    ],
    related: ['french-fry-boxes', 'custom-chicken-cone-sleeves', 'custom-combo-meal-trays', 'custom-take-out-bags'],
  },
];

export const BEVERAGE_SLEEVES: Product[] = [
  {
    slug: 'custom-printed-coffee-sleeves',
    name: 'Custom Printed Coffee Sleeves',
    category: 'beverage-sleeves',
    seoTitle: 'Printed Coffee Cup Sleeves UK | Custom Cup Sleeves',
    seoDescription:
      'Custom printed coffee cup sleeves in corrugated or flat board, cut to the circumference of the cups your café already buys.',
    h1: 'Custom Printed Coffee Cup Sleeves',
    cardBlurb: 'Printed sleeves sized to the cups you already stock.',
    enquiryLabel: 'printed coffee cup sleeves',
    intro: [
      'A printed sleeve is the cheapest way to brand a takeaway coffee. It costs a fraction of a printed cup, it works with the plain cups already in the cupboard, and it can be changed seasonally without writing off stock.',
      'For an independent café testing branded packaging for the first time, it is almost always the right place to start.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Cheaper than Printing the Cup, and More Flexible',
        body: [
          'Printed cups carry tooling and minimum quantities that put them out of reach for a single site. Sleeves do not, and they work across every cup size that shares a circumference.',
          'They also let you change design four times a year without holding four cup lines.',
        ],
        link: {
          href: '/paper-cups/',
          anchor: 'printed cups, once volumes justify them',
          sentence: 'Groups running several sites often move on to {link} as quantities grow.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Construction', 'Corrugated for insulation, flat board for print detail'],
          ['Sizing', 'From the cup circumference at the grip point'],
          ['Print', 'One colour to full CMYK'],
          ['Board', 'Kraft or white'],
          ['Finish', 'Usually unlaminated; laminated for cold cups'],
          ['Designs', 'Single design, or several split across one run'],
        ],
        note: 'Minimum quantities depend on print method and are confirmed per quote.',
      },
      {
        kind: 'bullets',
        heading: 'Designing for a Hand',
        items: [
          'A right-handed grip covers roughly a third of the sleeve — repeat key elements.',
          'Keep the wordmark away from the glued seam, which sits differently on every cup.',
          'Put a QR code where a thumb does not land, or it will not scan.',
          'Kraft board shifts colour; check a proof rather than judging from screen.',
        ],
        outro: 'A design that repeats around the circumference reads correctly however the cup is held.',
      },
    ],
    faqs: [
      {
        q: 'Will these fit the cups we already buy?',
        a: 'That is the intention. Send us a cup or the brand and size code from the base, and the sleeve is cut to that circumference rather than to a nominal size.',
      },
      {
        q: 'Corrugated or flat board?',
        a: 'Corrugated insulates properly because of the air channels in the flute, and suits very hot drinks. Flat board holds finer print detail and suits cold cups and double-walled cups that are already insulated.',
      },
      {
        q: 'Can we run several designs in one order?',
        a: 'On digital printing this is straightforward. The cost depends on how the quantity splits between designs, so send the split rather than a total.',
      },
    ],
    related: ['custom-cardboard-beverage-sleeves', 'custom-iced-coffee-sleeves', 'custom-tea-cup-sleeves', 'paper-cup-sleeves'],
  },

  {
    slug: 'custom-cardboard-beverage-sleeves',
    name: 'Custom Cardboard Beverage Sleeves',
    category: 'beverage-sleeves',
    seoTitle: 'Cardboard Beverage Sleeves UK | Printed Cup Bands',
    seoDescription:
      'Flat cardboard beverage sleeves that hold fine print detail, for cold cups, tea and cups that are already double-walled.',
    h1: 'Cardboard Beverage Sleeves',
    cardBlurb: 'Flat board sleeves with a smooth surface for detailed printing.',
    enquiryLabel: 'cardboard beverage sleeves',
    intro: [
      'Flat cardboard sleeves do less insulating than corrugated ones and print considerably better. Where a cup is already double-walled, or the drink is cold, that trade is worth making.',
      'The smooth surface holds small type and fine detail that a fluted board cannot.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Flat Board Against Corrugated',
        columns: ['Flat board', 'Corrugated'],
        rows: [
          ['Print detail', 'Holds fine type and small logos cleanly', 'Texture softens fine detail'],
          ['Insulation', 'Adds grip more than protection', 'Genuine air-gap insulation'],
          ['Storage', 'Very compact', 'Bulkier per thousand'],
          ['Cold cups', 'Good, especially laminated', 'Absorbs condensation well'],
          ['Cost', 'Generally lower', 'Generally higher'],
        ],
        outro: 'If the cup does the insulating, flat board is the better sleeve.',
      },
      {
        kind: 'prose',
        heading: 'Where the Smooth Surface Pays Off',
        body: [
          'Brands with a detailed mark, small legal text, or a QR code get a noticeably better result on flat board.',
          'On corrugated, the flute texture breaks up fine lines and small reversed-out type closes up. It is not a print quality problem so much as a surface one.',
        ],
        link: {
          href: '/custom-printed-coffee-sleeves/',
          anchor: 'corrugated sleeves for very hot drinks',
          sentence: 'Where insulation matters more than detail, {link} are the better choice.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is a flat sleeve enough for a hot coffee?',
        a: 'On a double-walled cup, yes. On a single-wall cup with a very hot drink it adds grip rather than real protection, and a corrugated sleeve is more comfortable.',
      },
      {
        q: 'Will a flat sleeve go soft on an iced drink?',
        a: 'It can where condensation is heavy. A laminated outer face stops the print softening and is worth specifying if cold drinks are a large part of your trade.',
      },
    ],
    related: ['custom-printed-coffee-sleeves', 'custom-cold-drink-sleeves', 'paper-cup-sleeves', 'eco-friendly-beverage-sleeves'],
  },

  {
    slug: 'custom-cold-drink-sleeves',
    name: 'Custom Cold Drink Sleeves',
    category: 'beverage-sleeves',
    seoTitle: 'Cold Drink Sleeves UK | Printed Iced Cup Sleeves',
    seoDescription:
      'Printed sleeves for cold drinks, coated to survive condensation and stop a sweating cup slipping out of a customer\'s hand.',
    h1: 'Custom Cold Drink Sleeves',
    cardBlurb: 'Sleeves that handle condensation on cold and iced cups.',
    enquiryLabel: 'cold drink sleeves',
    intro: [
      'A cold cup sweats. Within a couple of minutes the outside is wet, slippery and unpleasant to hold, and any paper wrapped round it starts to soften.',
      'A cold drink sleeve solves the grip problem and has to survive the moisture that causes it.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Condensation Is the Whole Design Problem',
        body: [
          'Unlike a hot sleeve, which deals with dry heat, a cold sleeve is wet from the outside in for its entire life.',
          'An unlaminated board absorbs that and goes limp. A laminated or coated outer face keeps its shape and stays gripped for the length of the drink.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What Operators Notice',
        items: [
          'Print that softens and smears where condensation collects at the bottom edge.',
          'Sleeves that slide down a wet cup rather than gripping it.',
          'Ink that transfers onto a customer\'s hand on a hot day.',
          'Board that curls at the edges after twenty minutes in a car.',
        ],
        outro: 'All four are solved by specifying for moisture rather than reusing a hot drink sleeve.',
        link: {
          href: '/custom-iced-coffee-sleeves/',
          anchor: 'sleeves designed specifically for iced coffee',
          sentence: 'For iced coffee in particular, {link} deal with the same problem at longer holding times.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Coated or laminated outer face'],
          ['Construction', 'Flat board or corrugated; both work if the surface is protected'],
          ['Print', 'Full colour; inks selected for moisture resistance'],
          ['Sizing', 'From the cold cup circumference, which often differs from your hot cups'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we use our hot cup sleeves on iced drinks?',
        a: 'Physically, if the cups are the same size. In practice an unlaminated hot sleeve goes limp on a sweating cup within minutes, which is why cold drinks usually need their own specification.',
      },
      {
        q: 'Do cold cups need sleeves at all?',
        a: 'For comfort and grip rather than temperature. A very cold cup is genuinely unpleasant to hold for long, and a wet one is slippery, which is the more common complaint.',
      },
    ],
    related: ['custom-iced-coffee-sleeves', 'custom-cardboard-beverage-sleeves', 'custom-printed-coffee-sleeves', '32-oz-clear-cups'],
  },

  {
    slug: 'custom-iced-coffee-sleeves',
    name: 'Custom Iced Coffee Sleeves',
    category: 'beverage-sleeves',
    seoTitle: 'Iced Coffee Sleeves UK | Printed Cold Coffee Sleeves',
    seoDescription:
      'Printed sleeves for iced coffee, sized for larger cold cups and finished to survive an hour of condensation on a desk.',
    h1: 'Custom Iced Coffee Sleeves',
    cardBlurb: 'Sleeves for larger iced coffee cups held for a long time.',
    enquiryLabel: 'iced coffee sleeves',
    intro: [
      'Iced coffee is held for longer than almost any other drink a café sells. People walk with it, work with it, and put it down on a desk for an hour.',
      'That extended contact is what separates an iced coffee sleeve from a general cold drink one.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Long Holding Times Change What Fails',
        body: [
          'A cold drink finished in ten minutes barely tests the packaging. An iced coffee that sits on a desk for an hour produces a pool of condensation and a thoroughly wet sleeve.',
          'Where cups sit for that long, a coated outer face is not a refinement — it is the difference between a sleeve that survives and one that comes apart in a bin.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Sizing for Iced Serves',
        items: [
          'Iced cups are usually larger than hot ones — 16oz and 20oz rather than 8oz and 12oz.',
          'Clear cold cups often have a different taper from paper hot cups, so the circumference differs.',
          'Sleeves need to sit above the widest point or they slide down a wet cup.',
          'A slightly tighter fit than a hot sleeve helps, since moisture reduces friction.',
        ],
        outro: 'Send a cold cup as well as a hot one if you are ordering sleeves for both.',
        link: {
          href: '/custom-cold-drink-sleeves/',
          anchor: 'the wider cold drink sleeve range',
          sentence: 'For milkshakes and soft drinks, {link} covers the same construction across other sizes.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do iced coffee sleeves need to be different from hot ones?',
        a: 'Usually, on two counts: iced cups are commonly larger, and the sleeve has to survive an hour of condensation rather than ten minutes of dry heat.',
      },
      {
        q: 'Will the sleeve slide down a wet cup?',
        a: 'It can, since moisture reduces grip. Sizing slightly tighter than a hot sleeve, and positioning it above the widest point of the cup, both help considerably.',
      },
    ],
    related: ['custom-cold-drink-sleeves', 'custom-printed-coffee-sleeves', '32-oz-clear-cups', 'custom-cardboard-beverage-sleeves'],
  },

  {
    slug: 'eco-friendly-beverage-sleeves',
    name: 'Eco-Friendly Beverage Sleeves',
    category: 'beverage-sleeves',
    seoTitle: 'Eco Beverage Sleeves UK | Unlaminated Cup Sleeves',
    seoDescription:
      'Unlaminated cup sleeves with recycled-content options for UK cafés, with claims kept to what the material genuinely supports.',
    h1: 'Eco-Friendly Beverage Sleeves',
    cardBlurb: 'Unlaminated sleeves specified for recyclability, without overclaiming.',
    enquiryLabel: 'eco-friendly beverage sleeves',
    intro: [
      'A cup sleeve is one of the easier pieces of café packaging to specify responsibly, because it does not touch the drink. There is no lining to work around.',
      'Removing lamination and heavy ink coverage is most of what makes it recyclable, and both are straightforward choices.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'No Liquid Contact Means Fewer Compromises',
        body: [
          'A cup needs a barrier because a drink sits against it. A sleeve does not, so plain uncoated board is a workable specification rather than an aspiration.',
          'That makes this one of the few places in disposable packaging where the environmentally better option is also the cheaper one.',
        ],
        link: {
          href: '/custom-eco-friendly-cone-sleeves/',
          anchor: 'the same approach applied to cone sleeves',
          sentence: 'We take {link} for the same reasons, with the same caveats about local collection.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Actually Improves Recyclability Here',
        items: [
          'Removing lamination, which is the main barrier to a paper stream.',
          'Reducing full-flood ink coverage, which also reduces cost.',
          'Choosing a board with recycled content where one is available for your run.',
          'Avoiding foil and metallic finishes, which make the material mixed.',
        ],
        outro: 'A sleeve printed with a recycling instruction should match what your customers can actually do with it.',
      },
      {
        kind: 'callout',
        heading: 'Recycled Content and Certification Confirmed per Order',
        body: 'Which recycled-content boards and certifications are available depends on the specific stock a job runs on and what is in supply at the time. We confirm that in writing on your quote rather than publishing a blanket claim here.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Is an unlaminated sleeve less durable?',
        a: 'On a hot dry cup, barely — it performs much like a laminated one for the life of the drink. On a sweating cold cup it softens, so the honest answer differs by what you serve.',
      },
      {
        q: 'Does an eco specification cost more?',
        a: 'Removing lamination usually reduces cost. Moving to a specialist recycled board can add some back. The two frequently cancel out.',
      },
    ],
    related: ['custom-cardboard-beverage-sleeves', 'custom-eco-friendly-cone-sleeves', 'recyclable-paper-cups', 'kraft-coffee-cups'],
  },
];
