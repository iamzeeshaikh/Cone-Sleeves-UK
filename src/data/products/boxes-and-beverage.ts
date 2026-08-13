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
      {
        q: 'Scoop or carton for a chip shop?',
        a: 'A scoop if the customer eats standing up, a carton if they sit down or the order is delivered. Scoops fill faster during a rush.',
      },
      {
        q: 'Why do chips go soft in a closed box?',
        a: 'Trapped steam. A closed carton holds moisture against the chips, which is why vented cartons and open scoops exist.',
      },
      {
        q: 'How do we size a chip box?',
        a: 'Weigh a typical portion on your own scales. A regular portion ranges from roughly 150 to 300 grams across UK shops, so the word tells us nothing.',
      },
      {
        q: 'Do these arrive assembled?',
        a: 'Flat-packed or pre-formed, and the difference matters. Flat stores in a fraction of the space; pre-formed is ready instantly.',
      },
      {
        q: 'Can we print full colour on grease-resistant board?',
        a: 'Yes. The grease resistance is a lining on the inner face, so the printable outer surface behaves normally.',
      },
      {
        q: 'Will the box stand up on a counter?',
        a: 'With a formed base, yes. A scoop with a narrow base tips when set down, which is a common complaint.',
      },
      {
        q: 'Do we need venting?',
        a: 'On a closed carton, if crispness matters. Vent size and position both matter — too few and nothing escapes, too many and the food cools.',
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
      {
        q: 'Why does a cone look like more food?',
        a: 'Because the customer sees the top of the pile at eye level rather than looking down into a tray. It is a genuine perception effect.',
      },
      {
        q: 'What board suits a chip cone?',
        a: 'Grease-resistant, because the whole portion presses against one narrow area. That concentration is harder on board than a flat tray is.',
      },
      {
        q: 'Will the cone collapse when gripped?',
        a: 'Not with enough rigidity in the board. A cone gripped mid-height with a full portion in it is the test worth doing on a sample.',
      },
      {
        q: 'How wide should the rim be?',
        a: 'Wide enough to get a hand and a wooden fork in. A narrow rim looks elegant and is awkward to eat from.',
      },
      {
        q: 'Do these suit festivals?',
        a: 'They are mostly bought for exactly that, because a cone frees a hand when everyone is already holding a drink.',
      },
      {
        q: 'How do they ship?',
        a: 'Flat and die-cut, assembled at the counter, unless you choose a moulded version which arrives formed and takes far more space.',
      },
      {
        q: 'Can we brand the cone if it is moulded?',
        a: 'Printing on a formed shape is limited, so most moulded cones carry a logo rather than full artwork. Flat die-cut cones print freely.',
      },
      {
        q: 'What portion weight suits a cone?',
        a: 'Weigh a serving and tell us the figure. A cone holds the same weight as a scoop in a much smaller footprint, which misleads the eye.',
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
      {
        q: 'What weight of greaseproof folds most easily?',
        a: 'A moderate weight. Heavy stock resists oil better and is awkward to fold at speed, which is the balance to strike.',
      },
      {
        q: 'How much storage do these need?',
        a: 'Almost none, which is their main advantage. A case of sheets replaces a pallet of formed containers.',
      },
      {
        q: 'Can we print in full colour?',
        a: 'One or two colours reproduces reliably and suits the price point. Heavy coverage on an absorbent sheet looks patchy and costs more.',
      },
      {
        q: 'Do these suit a traditional chip shop?',
        a: 'They are exactly what a traditional shop used before formed containers, and plenty have gone back to them for the look and the cost.',
      },
      {
        q: 'What sheet size do we need?',
        a: 'Enough to fold around your portion with an overlap. Wrap a real portion with a test sheet before settling on a size.',
      },
      {
        q: 'Can we use these as a box liner too?',
        a: 'Yes, and many shops do both — a folded holder for takeaway and the same printed sheet lining a box for eat-in.',
      },
      {
        q: 'Can staff be trained to fold these quickly?',
        a: 'Yes, and most pick it up within a shift. The variation between staff is what pushes some shops towards a formed container.',
      },
      {
        q: 'Do these suit a delivery order?',
        a: 'Poorly. A folded paper holder is a counter product; a courier bag needs something that holds its shape when tipped.',
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
      {
        q: 'Will bones puncture the box?',
        a: 'On a light board they can. Bone-in portions are one of the clearer cases for specifying a heavier grade.',
      },
      {
        q: 'Do these stack in a delivery bag?',
        a: 'With a rim and lid designed for it. Tell us at quote stage if boxes are stacked, because it changes the construction.',
      },
      {
        q: 'Open bucket or closed box?',
        a: 'Open for counter service where crispness matters; closed and vented for delivery where spillage matters more.',
      },
      {
        q: 'What board copes with fryer oil?',
        a: 'A heavy grease-resistant grade, specified against your fryer temperature and holding time rather than a general figure.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes. The grease resistance is on the inner face, so the outer printable surface behaves like any other coated board.',
      },
      {
        q: 'How do we stop the coating sticking to the box?',
        a: 'A coated inner face and letting pieces drain briefly before boxing. The second helps more than most board changes.',
      },
      {
        q: 'Should we vent a bucket as well as a box?',
        a: 'An open bucket vents by design. Venting matters on closed formats, which is where trapped steam softens the coating.',
      },
      {
        q: 'Can we run a sharing size alongside individual boxes?',
        a: 'Yes, and running both in one job shares the setup. Weigh both portions rather than sizing the large one by eye.',
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
      {
        q: 'Will these fit cups we already buy?',
        a: 'That is the intention. Send a cup or the brand and size code from the base, and the sleeve is cut to that circumference.',
      },
      {
        q: 'How many sleeve sizes will we need?',
        a: 'Usually two across three cup sizes. One sleeve rarely covers more than two adjacent sizes without spinning or refusing to fit.',
      },
      {
        q: 'Do we need sleeves on double-walled cups?',
        a: 'Not for heat. Plenty of cafés still use them for branding, because a printed sleeve is far cheaper than printing the cup.',
      },
      {
        q: 'Where should a QR code go?',
        a: 'Where a right-handed thumb does not land, and large enough to scan at arm\'s length. Test a printed sample rather than a screen.',
      },
      {
        q: 'How many sleeves does a café use?',
        a: 'Count a typical week of takeaway hot drinks and whether every one gets a sleeve. Most people are surprised in one direction or the other.',
      },
      {
        q: 'Will kraft board change our colours?',
        a: 'Yes, warmer and darker. If a colour has to be exact, that means white board or a white underbase.',
      },
      {
        q: 'Do you supply plain sleeves alongside printed ones?',
        a: 'Yes, and some cafés run plain stock for quiet periods and printed for promotions. Send the split between them.',
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
      {
        q: 'Is a flat sleeve enough for hot coffee?',
        a: 'On a double-walled cup, yes. On a single-wall cup with a very hot drink it adds grip rather than protection.',
      },
      {
        q: 'Why does flat board print better?',
        a: 'Because the surface is smooth. Corrugated flute texture breaks up fine lines and closes small reversed-out type.',
      },
      {
        q: 'Will a flat sleeve soften on an iced drink?',
        a: 'It can where condensation is heavy. A laminated outer face stops the print softening and is worth specifying for cold trade.',
      },
      {
        q: 'How much storage do these save?',
        a: 'Considerably more compact than corrugated per thousand, which is often the deciding factor in a small café store room.',
      },
      {
        q: 'Can we print small legal text?',
        a: 'This is the construction to use if you need to. Flat board holds small type where corrugated does not.',
      },
      {
        q: 'Do these suit a tea-heavy menu?',
        a: 'Less well than corrugated, because tea goes in near boiling and benefits from a real air gap rather than added grip.',
      },
      {
        q: 'Will they fit any cup?',
        a: 'They are cut to a circumference, so send a cup. Two cups sold as the same volume can differ enough for one sleeve to spin.',
      },
      {
        q: 'Can we match these to our cups?',
        a: 'Yes, and where you also print cups, running both in one order keeps the colour consistent across the pair.',
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
      {
        q: 'Why do cold drink sleeves need a coating?',
        a: 'Because a cold cup sweats and the sleeve is wet from the outside in for its whole life. Uncoated board absorbs that and goes limp.',
      },
      {
        q: 'Do cold drinks really need a sleeve?',
        a: 'For grip rather than temperature. A wet cup is slippery, which is the complaint customers actually make.',
      },
      {
        q: 'Will the ink transfer to hands?',
        a: 'Not on a coated or laminated print. Uncoated ink on a wet surface is where transfer happens, which is why coating is specified.',
      },
      {
        q: 'Are cold cups a different size from hot ones?',
        a: 'Often. Cold cups are commonly larger and can have a different taper, so send a cold cup rather than assuming.',
      },
      {
        q: 'Corrugated or flat for cold?',
        a: 'Either works if the surface is protected. Corrugated absorbs condensation well; flat board laminated resists it.',
      },
      {
        q: 'Will the sleeve slide down a wet cup?',
        a: 'It can, since moisture reduces friction. Sizing slightly tighter than a hot sleeve helps considerably.',
      },
      {
        q: 'Do these suit milkshakes?',
        a: 'Yes, and a thick shake is held for longer than a soft drink, which strengthens the case for a coated surface.',
      },
      {
        q: 'Can we run one design across hot and cold sleeves?',
        a: 'Yes, if the cup circumferences match. Where they differ the artwork carries over but each needs its own layout.',
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
      {
        q: 'Why do iced coffee sleeves need more than cold drink sleeves?',
        a: 'Because the cup is held for an hour rather than ten minutes, and iced cups are commonly larger. Both change the specification.',
      },
      {
        q: 'What size cup should we send?',
        a: 'A cold one, and a hot one as well if you are ordering sleeves for both. The two frequently differ in taper as well as size.',
      },
      {
        q: 'Will the sleeve survive an hour on a desk?',
        a: 'With a coated outer face, yes. Uncoated board sitting in a pool of condensation comes apart by the time the drink is finished.',
      },
      {
        q: 'Should iced sleeves be tighter?',
        a: 'Slightly, because moisture reduces grip. Positioning above the cup\'s widest point also stops it sliding.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, with inks selected for moisture resistance. That is worth specifying rather than assuming on a product that lives wet.',
      },
      {
        q: 'Do these fit clear cold cups?',
        a: 'They can, though clear cups often have a different taper from paper hot cups. Send one rather than a stated volume.',
      },
      {
        q: 'Will they work in summer only?',
        a: 'Most sites use them year round now, since iced drinks have stopped being seasonal in the way they were.',
      },
      {
        q: 'Can we match them to our hot sleeves?',
        a: 'Yes, and running both in one order keeps the brand colour consistent across the two, which matters when they sit together on a counter.',
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
      {
        q: 'Why is a sleeve easier to specify than a cup?',
        a: 'Because it does not touch the drink, so there is no lining to work around. Plain uncoated board is a workable specification rather than an aspiration.',
      },
      {
        q: 'Can we get recycled content?',
        a: 'Availability varies by stock and by what is in supply when your job runs. We confirm what is achievable on your quote.',
      },
      {
        q: 'Can we print a recycling instruction?',
        a: 'Only if it matches what your customers can actually do. A sleeve marked recyclable that goes to general waste misleads.',
      },
      {
        q: 'Does reducing ink coverage help?',
        a: 'It helps recyclability and reduces cost at the same time, which is a rare alignment. Heavy flood coverage does neither any favours.',
      },
      {
        q: 'Should we avoid metallic finishes?',
        a: 'If recyclability matters, yes. Foil and metallised layers make the material mixed, which changes the disposal route entirely.',
      },
      {
        q: 'What is the biggest reduction we could make?',
        a: 'Serving eat-in customers in reusables, if you have seating. It usually outweighs every material change available on the disposable range.',
      },
      {
        q: 'Can we print a disposal instruction?',
        a: 'Only one your customers can follow. If the sleeve leaves your premises, the instruction has to match street collection rather than yours.',
      },
      {
        q: 'Do unlaminated sleeves feel cheaper?',
        a: 'They feel different rather than cheaper. Plenty of brands prefer the uncoated surface, which reads as deliberate on the right design.',
      },
    ],
    related: ['custom-cardboard-beverage-sleeves', 'custom-eco-friendly-cone-sleeves', 'recyclable-paper-cups', 'kraft-coffee-cups'],
  },
];
