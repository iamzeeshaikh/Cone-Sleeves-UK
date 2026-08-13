import type { Product } from '../types';

/**
 * Food sleeve range. These records lead with whatever actually decides the
 * order for that item — grease for fried food, geometry for wraps, print
 * economics for retail sleeves.
 */
export const FOOD_SLEEVES: Product[] = [
  {
    slug: 'burger-sleeves',
    name: 'Custom Burger Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Burger Sleeves UK | Printed Grease-Proof Wraps',
    seoDescription:
      'Printed burger sleeves in grease-resistant board, sized to the burger you actually build rather than to the bun it starts as.',
    h1: 'Custom Printed Burger Sleeves',
    cardBlurb: 'Grease-resistant board sleeves sized to the burger you actually build.',
    enquiryLabel: 'printed burger sleeves',
    intro: [
      'A burger sleeve has one measurement that matters and everybody gets it wrong. It is not the bun size — it is the height and width of the burger once it has been built, sauced and pressed together.',
      'A sleeve cut to a 4in bun will not close around a 4in bun plus a patty, cheese, lettuce and sauce. It ends up either forced on, crushing the build, or ordered again in the right size a month later.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Grease Is the Specification Decision',
        body: [
          'Untreated board absorbs fat from a patty within minutes. The base goes translucent, the print dulls, and by the time a delivery order arrives the sleeve looks unpleasant even though the food is fine.',
          'A greaseproof liner or a coated inner face stops that. Which one suits depends on how long the burger sits between the pass and the customer.',
        ],
        link: {
          href: '/food-sleeves/',
          anchor: 'how grease resistance is specified across the sleeve range',
          sentence:
            'The category page sets out {link} in more detail.',
        },
      },
      {
        kind: 'specs',
        heading: 'What We Need to Size a Burger Sleeve',
        rows: [
          ['Built height', 'Measured on a finished burger as it leaves the pass'],
          ['Built width', 'At the widest point, including anything overhanging'],
          ['Coverage', 'Half-height for presentation, full for protection'],
          ['Board', 'Greaseproof-lined or coated inner face'],
          ['Print', 'Outside; inside available where the wrap is deep'],
          ['Service mix', 'What share of orders are delivered rather than eaten in'],
        ],
        note: 'A photograph of a finished burger next to a ruler answers most of these at once.',
      },
      {
        kind: 'compare',
        heading: 'Half-Height Against Full Wrap',
        columns: ['Half-height sleeve', 'Full wrap'],
        rows: [
          ['Food visible', 'Yes — the build is the selling point', 'Mostly hidden'],
          ['Photographs', 'Very well', 'Less so'],
          ['Holds the burger together', 'Partly', 'Considerably better'],
          ['Delivery', 'Struggles once the bag moves', 'Handles transit'],
          ['Board used', 'Less', 'More'],
        ],
        outro:
          'Sites doing both eat-in and delivery often run half-height for the counter and a full wrap for couriers.',
      },
    ],
    faqs: [
      {
        q: 'Should I size the sleeve to the bun or the finished burger?',
        a: 'The finished burger, measured at the pass. A bun measurement produces a sleeve that is one to two centimetres too small once the build is in, which is the single most common reason a first order gets replaced.',
      },
      {
        q: 'Will a sleeve keep a burger warm?',
        a: 'A little, by cutting draughts, but it is not insulation. If heat retention is the problem, the answer is a lidded container rather than a heavier sleeve.',
      },
      {
        q: 'Can one sleeve cover a single and a double?',
        a: 'Only by sizing for the double, which then looks slack on the single and photographs badly. Most sites end up running two heights from one artwork file.',
      },
      {
        q: 'How do we measure a burger for a sleeve?',
        a: 'Build one exactly as it leaves your pass, then measure its height and its width at the widest point. A photograph beside a ruler answers more than a written description.',
      },
      {
        q: 'Do sleeves work for smash burgers?',
        a: 'Yes, and they suit them well, because a smash patty spreads wider than the bun. Measure the finished item rather than the bun, or the sleeve will be short.',
      },
      {
        q: 'Will a sleeve keep the burger warm?',
        a: 'Barely. It cuts draughts and stops the base cooling against a cold surface, but board does not insulate. A lidded container is the answer if heat retention is the issue.',
      },
      {
        q: 'Can the sleeve carry a burger name?',
        a: 'Yes, and on a multi-burger menu it saves staff opening wrappers to check. On digital printing several names in one run is straightforward.',
      },
      {
        q: 'What board stops grease showing through?',
        a: 'A greaseproof liner or a coated inner face. Board weight alone only delays it, and on a delivery order the delay is shorter than the journey.',
      },
      {
        q: 'Do sleeves suit delivery orders?',
        a: 'A full wrap does. A half-height sleeve looks better on a counter and struggles once a courier bag moves, so sites doing both often run two depths.',
      },
      {
        q: 'Can we print inside the sleeve?',
        a: 'On a deep wrap the inner face shows every time the customer looks down. It adds a press pass, so it is worth deciding before the quote rather than after.',
      },
    ],
    related: [
      'custom-sandwich-sleeves',
      'custom-fries-sleeves',
      'custom-burger-trays',
      'custom-greaseproof-paper',
    ],
  },

  {
    slug: 'custom-hot-dog-sleeves',
    name: 'Custom Hot Dog Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Hot Dog Sleeves UK | Printed Hot Dog Wraps',
    seoDescription:
      'Printed hot dog sleeves with a closed base that catches sauce, sized to the roll length and topping height you actually serve.',
    h1: 'Custom Hot Dog Sleeves',
    cardBlurb: 'Long wraps with a closed base, sized to your roll and toppings.',
    enquiryLabel: 'hot dog sleeves',
    intro: [
      'The base is the part of a hot dog sleeve that people forget to specify, and the part that fails. Mustard and onions travel downwards, and an open-ended wrap delivers them onto a customer\'s shoe.',
      'These are cut with a closed or folded base and sized to the roll length you actually serve.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Points That Decide the Die',
        items: [
          'Roll length, measured on the roll you buy rather than a nominal size.',
          'Topping height — a loaded dog needs a wider opening than a plain one.',
          'Whether the base is closed, folded or tucked, which sets how much sauce it holds.',
          'How far up the roll the wrap should reach before the customer bites.',
          'Whether the same sleeve has to work for a footlong and a standard.',
        ],
        outro:
          'A footlong and a standard rarely share a sleeve well; the extra length makes the wrap flex in the middle.',
      },
      {
        kind: 'prose',
        heading: 'Loaded Dogs Change the Geometry',
        body: [
          'A plain hot dog is a narrow cylinder. Add onions, sauerkraut and a zig-zag of sauce and the profile is much wider at the top and completely uneven.',
          'Sleeves sized to the plain version get forced over the toppings and push them off the far end. Measure the loaded version if that is what you sell.',
        ],
        link: {
          href: '/custom-hot-dog-trays/',
          anchor: 'trays for hot dogs served with a side',
          sentence:
            'Where a dog is served with chips, {link} keep the two separate.',
        },
      },
      {
        kind: 'callout',
        heading: 'Sauce Resistance Is Not the Same as Grease Resistance',
        body: 'Tomato and mustard-based sauces are acidic and watery rather than oily, and they behave differently against board. Tell us what goes on top so the board is specified against the right thing.',
      },
    ],
    faqs: [
      {
        q: 'Does the base really need to be closed?',
        a: 'For anything with sauce, yes. An open tube looks tidy on the counter and leaks within a minute of the customer walking off. A folded or closed base costs very little more and prevents the complaint.',
      },
      {
        q: 'Can we print along the length of the sleeve?',
        a: 'A long narrow face suits a wordmark set lengthways, which reads well when the dog is held. Keep artwork clear of the base fold, since that area is creased and partly hidden.',
      },
      {
        q: 'Why does the base matter so much?',
        a: 'Because mustard, onions and sauce travel downwards. An open tube looks tidy on the counter and leaks within a minute of the customer walking off.',
      },
      {
        q: 'Can one sleeve fit a standard and a footlong?',
        a: 'Not comfortably. The extra length makes the wrap flex in the middle, and a sleeve sized for the footlong looks slack on the standard.',
      },
      {
        q: 'Should we measure the roll or the sausage?',
        a: 'The roll, and the loaded height if you serve with toppings. A sleeve sized to a plain dog pushes toppings off the far end when it is fitted.',
      },
      {
        q: 'Will the print run along the length?',
        a: 'It can, and a wordmark set lengthways reads well when the dog is held. Keep artwork clear of the base fold, which is creased and partly hidden.',
      },
      {
        q: 'Do sauces stain the board differently from grease?',
        a: 'Yes. Tomato and mustard are acidic and watery rather than oily, and they behave differently against a coating. Tell us what goes on top.',
      },
      {
        q: 'Are these suitable for a festival pitch?',
        a: 'Yes, and outdoor trading argues for a laminated finish. Rain and handling both work on an unlaminated surface faster than they do indoors.',
      },
      {
        q: 'Can we get a sleeve with a napkin pocket?',
        a: 'Anything that can be drawn as a closed outline can generally be cut, though it is a bespoke die. Send a sketch and we will tell you what will hold.',
      },
      {
        q: 'How do we stop the dog sliding out?',
        a: 'A closed or folded base and a wrap sized to grip the roll rather than surround it. Too generous a fit is the usual cause.',
      },
    ],
    related: [
      'custom-corn-dog-sleeves',
      'custom-hot-dog-trays',
      'custom-skewer-sleeves',
      'burger-sleeves',
    ],
  },

  {
    slug: 'custom-corn-dog-sleeves',
    name: 'Custom Corn Dog Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Corn Dog Sleeves UK | Printed Battered Sausage Wraps',
    seoDescription:
      'Grease-resistant corn dog sleeves with a stick opening sized to your sticks, for battered fried food at markets and events.',
    h1: 'Custom Corn Dog Sleeves',
    cardBlurb: 'Grease-resistant wraps with a stick opening for battered fried sausages.',
    enquiryLabel: 'corn dog sleeves',
    intro: [
      'A corn dog is deep-fried batter on a stick, which gives packaging two problems at once: hot oil against the board, and a stick that has to come out of the bottom.',
      'The sleeve has to grip the batter without crushing it and leave the stick clear for the customer to hold.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Stick Opening Does More than You Would Expect',
        body: [
          'A wrap closed at the base means the customer has to pull the whole corn dog out to eat it, which defeats the point of the stick.',
          'An opening sized to the stick lets the sleeve sit against the batter while the stick passes through. Too wide and the sleeve slides down; too narrow and staff fight it during a rush.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What Street-Food Operators Specify',
        items: [
          'Grease-resistant board — batter carries a lot of oil out of the fryer.',
          'A stick opening sized to the sticks you buy, not a generic slot.',
          'Enough length to cover the batter without reaching the customer\'s mouth.',
          'A matt finish, which grips better than gloss in oily hands.',
        ],
        outro:
          'Send a stick with your sample if you can — the diameter varies more than people assume.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Grease-resistant lined or coated'],
          ['Base', 'Stick opening, sized from your sticks'],
          ['Length', 'Set from the battered length, not the sausage'],
          ['Print', 'One or two colours suits the small visible area'],
          ['Finish', 'Matt for grip'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a hot dog sleeve be used for corn dogs?',
        a: 'Not well. A hot dog sleeve is closed at the base and sized to a soft roll; a corn dog needs the stick through and a board that copes with fryer oil. The shapes look similar and behave very differently.',
      },
      {
        q: 'Does the batter stick to the board?',
        a: 'Fresh from the fryer it can, on an uncoated surface. A coated or lined inner face reduces it, and letting the corn dog drain briefly before sleeving makes more difference than any board choice.',
      },
      {
        q: 'How wide should the stick opening be?',
        a: 'Sized to the sticks you actually buy, which vary more than people expect. Send one with your sample if you can, or measure its diameter.',
      },
      {
        q: 'Can we use a hot dog sleeve instead?',
        a: 'Not well. It is closed at the base and sized to a soft roll, where a corn dog needs the stick through and a board that copes with fryer oil.',
      },
      {
        q: 'Does batter stick to the board?',
        a: 'Straight from the fryer it can, on an uncoated surface. A coated inner face reduces it, and letting the corn dog drain briefly helps more than any board choice.',
      },
      {
        q: 'How long should the sleeve be?',
        a: 'Long enough to cover the battered section without reaching the customer\'s mouth. Measure the batter, not the sausage inside it.',
      },
      {
        q: 'Do these suit indoor service too?',
        a: 'They do, though the stick opening matters most where customers walk. Seated service can use a tray and a simpler wrap.',
      },
      {
        q: 'Will the sleeve stay put while eating?',
        a: 'With a correctly sized stick opening, yes. Too wide and it slides down the stick; too narrow and staff fight it during a rush.',
      },
      {
        q: 'Can we print in one colour to keep costs down?',
        a: 'Yes, and the visible area is small enough that a single strong colour usually reads better than a detailed design.',
      },
      {
        q: 'Are they suitable for other food on sticks?',
        a: 'Often, if the loaded diameter is similar. Skewers and battered items on sticks share the same problem, though the wrap length usually differs.',
      },
    ],
    related: [
      'custom-hot-dog-sleeves',
      'custom-skewer-sleeves',
      'custom-chicken-cone-sleeves',
      'custom-fries-sleeves',
    ],
  },

  {
    slug: 'custom-burrito-sleeves',
    name: 'Custom Burrito Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Burrito Sleeves UK | Printed Burrito Wraps',
    seoDescription:
      'Tapered burrito sleeves that hold a rolled tortilla compressed, so filling stays inside as the customer eats down the length.',
    h1: 'Custom Burrito Sleeves',
    cardBlurb: 'Tapered wraps that keep a rolled burrito compressed while it is eaten.',
    enquiryLabel: 'burrito sleeves',
    intro: [
      'A burrito is only held together by the roll, and the roll starts to relax the moment it is put down. The sleeve is what stops the far end opening and the filling arriving on the table.',
      'That means compression matters more here than coverage.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Compression, Not Just Coverage',
        body: [
          'A loose sleeve looks fine and does nothing. The wrap needs to be slightly under the diameter of the rolled burrito so it holds it closed rather than sitting around it.',
          'That is a fine tolerance, and it is why sizing from a real burrito rather than a stated tortilla size is worth the effort.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'How Customers Actually Eat a Burrito',
        intro: 'The eating pattern decides where the sleeve should sit:',
        items: [
          'They unwrap the top third only, and eat down through it.',
          'They push the sleeve down as they go, so it must slide without tearing.',
          'They put it down half-eaten, at which point the sleeve is holding everything.',
          'The base collects juice, so a closed or folded bottom is worth having.',
        ],
        outro:
          'A sleeve that tears when pushed down is worse than no sleeve, because the burrito is already open by then.',
      },
      {
        kind: 'callout',
        heading: 'Foil-Lined and Paper-Lined Behave Differently',
        body: 'Many burrito operations wrap in foil first and use the printed sleeve outside it. If that is your process, the sleeve does not need grease resistance at all and can be a lighter, cheaper board. Tell us which way round you work.',
      },
    ],
    faqs: [
      {
        q: 'Do we still need a sleeve if we wrap in foil?',
        a: 'The foil holds the burrito; the sleeve carries the brand and gives a clean surface to grip. Where foil is used first, the sleeve can be a lighter board, which reduces cost.',
      },
      {
        q: 'What size should the sleeve be for a 12in tortilla?',
        a: 'That depends entirely on how tightly your team rolls and how much filling goes in. Two kitchens using the same tortilla can produce burritos a centimetre apart in diameter, so we size from a real one.',
      },
      {
        q: 'How tight should a burrito sleeve be?',
        a: 'Slightly under the diameter of the rolled burrito, so it holds the roll closed rather than sitting around it. A loose sleeve looks fine and does nothing.',
      },
      {
        q: 'Do we need one if we wrap in foil first?',
        a: 'The foil holds the burrito; the sleeve carries the brand and gives a clean grip. Where foil is used first, the sleeve can be a lighter, cheaper board.',
      },
      {
        q: 'What size fits a 12in tortilla?',
        a: 'That depends entirely on how tightly your team rolls and how much filling goes in. Two kitchens using the same tortilla produce burritos a centimetre apart.',
      },
      {
        q: 'Will the sleeve tear as the customer pushes it down?',
        a: 'Not on an appropriate board. A sleeve that tears halfway through is worse than none, because the burrito is already open by then.',
      },
      {
        q: 'Should the base be closed?',
        a: 'Worth having. The base collects juice as the filling settles, and an open bottom delivers it onto a customer\'s hands.',
      },
      {
        q: 'Can we print a filling name on each sleeve?',
        a: 'On digital printing, yes, and it saves staff opening wrappers to check. Send the number of fillings and the split between them.',
      },
      {
        q: 'Do these work for shawarma and wraps?',
        a: 'The same tapered principle applies. What changes is the diameter, so measure a made-up item of each rather than assuming they match.',
      },
      {
        q: 'How do these ship?',
        a: 'Flat and die-cut, assembled at the pass. That keeps storage small, which matters in the compact kitchens most burrito operations run from.',
      },
    ],
    related: [
      'custom-wrap-sleeves',
      'custom-taco-sleeves',
      'custom-sandwich-sleeves',
      'custom-greaseproof-paper',
    ],
  },

  {
    slug: 'custom-wrap-sleeves',
    name: 'Custom Wrap Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Wrap Sleeves UK | Printed Tortilla Wrap Holders',
    seoDescription:
      'Printed sleeves for tortilla wraps and rolls, cut on an angle so a diagonally sliced wrap sits properly in a chilled cabinet.',
    h1: 'Custom Wrap Sleeves',
    cardBlurb: 'Angled sleeves for tortilla wraps, including diagonally cut halves.',
    enquiryLabel: 'wrap sleeves',
    intro: [
      'Most wraps sold in the UK are cut on the diagonal and displayed cut-face up, because that is what shows the filling. A straight-topped sleeve fights that presentation completely.',
      'An angled cut on the sleeve solves it, and costs nothing extra once the die exists.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Cut the Sleeve to Match How the Wrap Is Cut',
        body: [
          'A wrap sliced at 45 degrees has a long face and a short face. A sleeve with a matching angled top holds both halves at the right height and leaves the filling on show.',
          'A square sleeve either covers the filling on one side or leaves the other half unsupported. It is the sort of detail that only shows once a chiller cabinet is full of them.',
        ],
        link: {
          href: '/custom-sandwich-sleeves/',
          anchor: 'sandwich sleeves cut for a triangular fill',
          sentence:
            'The same logic drives {link}, where the diagonal is the whole point of the pack.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Cut', 'Straight or angled top, matched to how you slice'],
          ['Diameter', 'Sized to the rolled wrap after filling'],
          ['Board', 'Lighter board suits chilled wraps; greaseproof for hot'],
          ['Window', 'Optional cut-out where the filling should show'],
          ['Label area', 'Space reserved for a date or allergen label'],
        ],
        note: 'Retail wraps usually need a defined area kept clear for legally required labelling.',
      },
      {
        kind: 'bullets',
        heading: 'Chilled Retail Against Hot Service',
        items: [
          'Chilled wraps sit in a cabinet for hours and need to look good cold and undisturbed.',
          'Hot wraps go out within seconds and need grease resistance instead.',
          'Retail packs usually carry a label; hot service ones rarely do.',
          'Cabinet lighting drains colour, so print for chilled wraps often runs slightly stronger.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can the sleeve have a window so the filling shows?',
        a: 'Yes, either as an open cut-out or with film behind it. An open cut-out avoids a mixed material but exposes the food, so it suits hot service more than a chilled cabinet.',
      },
      {
        q: 'Do we need to leave room for an allergen label?',
        a: 'If the wrap is sold pre-packed, almost certainly. Tell us the label size at quote stage and we will keep that area clear of artwork rather than having a sticker land on your logo.',
      },
      {
        q: 'Should the sleeve be cut at an angle?',
        a: 'If you slice on the diagonal, yes. A square sleeve either covers the filling on one half or leaves the other unsupported, which shows across a full cabinet.',
      },
      {
        q: 'How much room do we need for a label?',
        a: 'Whatever size label you apply. Reserve that area in the artwork rather than adding one afterwards, or the sticker lands across your logo.',
      },
      {
        q: 'Can we add a window?',
        a: 'Yes, as an open cut-out or with film behind it. An open cut-out avoids a mixed material and suits hot service more than a chilled cabinet.',
      },
      {
        q: 'Do hot and chilled wraps need different sleeves?',
        a: 'Usually. A chilled wrap sits for hours and needs to look good undisturbed; a hot one goes out in seconds and needs grease resistance instead.',
      },
      {
        q: 'Will the sleeve hold the wrap together?',
        a: 'It holds the roll compressed, which is most of the job. A wrap that unrolls in the hand is usually a sizing problem rather than a board one.',
      },
      {
        q: 'Does cabinet lighting affect the print?',
        a: 'It drains warmth from colours, which is why print for chilled retail often runs slightly stronger. Check a sample under your own cabinet rather than in daylight.',
      },
      {
        q: 'Can one sleeve cover several wrap fillings?',
        a: 'Physically yes, if the diameter is similar. Whether you want the same printed sleeve on every filling is a labelling decision rather than a packaging one.',
      },
      {
        q: 'How do we stop the sleeve curling in a chiller?',
        a: 'A laminated or coated board resists it. Light unlaminated stock takes up moisture on one face faster than the other, which is what causes the curl.',
      },
    ],
    related: [
      'custom-burrito-sleeves',
      'custom-sandwich-sleeves',
      'custom-taco-sleeves',
      'custom-bento-sleeves',
    ],
  },

  {
    slug: 'custom-sandwich-sleeves',
    name: 'Custom Sandwich Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Sandwich Sleeves UK | Printed Deli Wraps',
    seoDescription:
      'Printed sandwich sleeves for UK delis and cafés, with a reserved label panel and an angled cut for a triangular chilled pack.',
    h1: 'Custom Sandwich Sleeves',
    cardBlurb: 'Deli and café sleeves with label space and a diagonal cut.',
    enquiryLabel: 'sandwich sleeves',
    intro: [
      'A sandwich sleeve does presentation work in a chiller and legal work at the till. It has to look appetising for six hours and leave somewhere for a date and allergen label.',
      'Those two jobs pull in different directions, and the artwork has to allow for both.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Leave Room for the Label Before Designing the Print',
        body: [
          'Pre-packed sandwiches carry labelling requirements, and the label is applied after printing. If artwork covers the whole face, the sticker lands on top of it.',
          'Reserving a clear panel of the right size from the start looks deliberate. Adding one afterwards never quite does.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What Sells a Sandwich from a Chiller',
        items: [
          'The cut face visible, which usually means an angled sleeve rather than a square one.',
          'Enough unprinted area that the bread and filling are the colour you notice.',
          'A clear product name — customers scan a shelf faster than they read.',
          'Consistent sleeve height across the range so a shelf looks ordered.',
        ],
        outro:
          'Ranges that use one sleeve height and change only the printed name look considerably tidier on a shelf.',
        link: {
          href: '/custom-sandwich-trays/',
          anchor: 'trays for platter and catering sandwich orders',
          sentence:
            'Sites doing office platters as well as retail usually add {link}.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Cut', 'Angled to match a diagonal slice, or square for a round'],
          ['Label panel', 'Clear area sized to your labelling'],
          ['Board', 'Light coated board; greaseproof where fillings are oily'],
          ['Print', 'Full colour or two-colour with the name changing per line'],
          ['Range', 'One height across the range for shelf consistency'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we print a different sandwich name on each sleeve in one order?',
        a: 'On digital print this is straightforward and is how most small ranges are produced. On longer conventional runs each name is a separate setup, so the economics change. Send the number of lines and the quantity of each.',
      },
      {
        q: 'Should the sleeve or a label carry the allergen information?',
        a: 'That is a decision for your own food-safety process rather than a packaging one. What we can do is reserve a clear panel of the size you specify so whichever route you take is not obstructed by artwork.',
      },
      {
        q: 'Where should the label panel go?',
        a: 'Somewhere flat and clear of the artwork, sized to the label you actually apply. Deciding this after the design is how stickers end up across logos.',
      },
      {
        q: 'Can we print a different filling name on each sleeve?',
        a: 'On digital printing this is normal and is how most small ranges are produced. Send the number of lines and the quantity of each so the split is priced properly.',
      },
      {
        q: 'Should the sleeve be angled or square?',
        a: 'Angled if you cut on the diagonal, which most delis do. It holds both halves at the right height and leaves the cut face on show.',
      },
      {
        q: 'Do we need grease resistance for sandwiches?',
        a: 'For mayonnaise-based and hot fillings, yes. Dry fillings are far less demanding and can use a lighter, cheaper board.',
      },
      {
        q: 'Will one sleeve height work across our range?',
        a: 'It usually should, and a consistent height makes a chiller shelf look considerably tidier than a mix of sizes.',
      },
      {
        q: 'Can the sleeve carry allergen information?',
        a: 'It can carry a printed panel, or you can reserve a clear area for a sticker. Which suits depends on how often your recipes change.',
      },
      {
        q: 'What makes a sandwich sell from a chiller?',
        a: 'With the cut face visible and enough unprinted area that the bread and filling are the colour you notice first. Heavy artwork works against that.',
      },
      {
        q: 'Do these suit made-to-order counters?',
        a: 'They do, though a folded paper wrap is quicker at a busy counter. Sleeves suit pre-made retail; wraps suit service.',
      },
    ],
    related: [
      'custom-wrap-sleeves',
      'burger-sleeves',
      'custom-sandwich-trays',
      'custom-greaseproof-paper',
    ],
  },

  {
    slug: 'custom-taco-sleeves',
    name: 'Custom Taco Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Taco Sleeves UK | Printed Taco Holders',
    seoDescription:
      'Printed taco sleeves and holders that keep a soft or hard shell upright without squeezing the shell or crushing the filling.',
    h1: 'Custom Taco Sleeves',
    cardBlurb: 'Holders that keep soft and hard taco shells upright and filled.',
    enquiryLabel: 'taco sleeves',
    intro: [
      'Tacos are eaten with two hands and served in ones, twos or threes. Packaging that works for a single taco is usually wrong for three, because the problem changes from holding one upright to stopping three falling into each other.',
      'This page covers the single and double sleeve; multiples are closer to a tray.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Soft Shells Against Hard Shells',
        intro: 'The two need opposite things from a sleeve.',
        columns: ['Soft shell', 'Hard shell'],
        rows: [
          ['Failure mode', 'Flops open and drops filling', 'Cracks under pressure'],
          ['Sleeve needs to', 'Hold the fold closed', 'Support without squeezing'],
          ['Grip', 'Firm', 'Gentle — a tight sleeve breaks the shell'],
          ['Grease', 'Higher; soft shells absorb and transmit oil', 'Lower, but crumbs travel'],
          ['Board', 'Greaseproof-lined', 'Standard, with a stiffer edge'],
        ],
        outro:
          'If you serve both, they rarely share a sleeve happily. Two dies from one artwork is the usual answer.',
      },
      {
        kind: 'prose',
        heading: 'Serving More than One at a Time',
        body: [
          'Two tacos in one sleeve lean into each other and the fillings mix. Three is worse.',
          'Beyond a pair, a tray with separated slots does the job properly and looks better on the table than three sleeves in a huddle.',
        ],
        link: {
          href: '/food-trays/',
          anchor: 'trays with separated compartments',
          sentence:
            'For portions of three or more, {link} are the sensible route.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will a taco sleeve stop a hard shell cracking?',
        a: 'It reduces it by spreading the grip, but a sleeve that is too tight causes the very break it is meant to prevent. Sizing slightly generously is the right call on hard shells.',
      },
      {
        q: 'Can one sleeve hold two tacos?',
        a: 'It can physically, but the two lean together and fillings mix. Most operators find a divided tray works better once the order is more than one.',
      },
      {
        q: 'Do hard and soft shells need different sleeves?',
        a: 'Yes. A soft shell needs holding closed; a hard shell needs supporting without pressure. A sleeve tight enough for one cracks the other.',
      },
      {
        q: 'Will a sleeve stop a hard shell cracking?',
        a: 'It reduces it by spreading the grip, provided the fit is generous. A tight sleeve causes the very break it is meant to prevent.',
      },
      {
        q: 'What board suits taco fillings?',
        a: 'A greaseproof-lined board, because taco fillings are oily and sauced. Soft shells transmit that oil faster than hard shells do.',
      },
      {
        q: 'Do we need paper as well?',
        a: 'They solve different problems. The sleeve holds the shell; a sheet underneath catches what falls out of the bottom. Loaded tacos usually need both.',
      },
      {
        q: 'Can the sleeve be printed both sides?',
        a: 'It can, though on a small item the inner face is barely seen. The budget usually does more on the outer face and the board grade.',
      },
      {
        q: 'How do these ship?',
        a: 'Flat and die-cut. Taco sleeves are small, so a case holds a great many, which suits the compact kitchens most taco operations run from.',
      },
      {
        q: 'Are they suitable for a street food pitch?',
        a: 'Yes, and outdoor trading argues for a laminated finish. A matt surface also grips better when hands are oily.',
      },
      {
        q: 'Can we order sleeves and papers together?',
        a: 'Yes, and using both is common on loaded tacos. Running them in one job keeps the branding consistent.',
      },
    ],
    related: [
      'custom-burrito-sleeves',
      'custom-taco-paper',
      'custom-wrap-sleeves',
      'custom-nacho-trays',
    ],
  },

  {
    slug: 'custom-fries-sleeves',
    name: 'Custom Fries Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Fries Sleeves UK | Printed Chip Sleeves',
    seoDescription:
      'Grease-resistant chip sleeves that stay open one-handed while filled, and let steam escape so the chips stay crisp in service.',
    h1: 'Custom Fries Sleeves',
    cardBlurb: 'Open-topped chip sleeves in grease-resistant board.',
    enquiryLabel: 'fries sleeves',
    intro: [
      'Chips go soft in a closed container, so the useful design question is how much air the packaging lets out rather than how much oil it keeps in.',
      'An open sleeve solves the steam problem and creates a different one: it has to stay open on its own while a member of staff fills it one-handed.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Staying Open Is a Structural Problem',
        body: [
          'A flat sleeve pressed closed by its own board is unusable during a rush — staff need a free hand for the fryer basket.',
          'A crease pattern or a gusset that holds the mouth open makes the difference. It is worth checking on an unprinted sample before the run.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Specifying for a Fryer',
        items: [
          'Grease-resistant board, because chips carry more oil than almost anything else.',
          'An open top so steam escapes rather than softening the chips.',
          'A base wide enough that the sleeve does not tip when it is set down.',
          'A height that suits your portion weight — weigh a serving rather than guessing.',
          'A matt surface, which is easier to hold with oily fingers.',
        ],
        outro:
          'Portion weight is the number to send us; volumes stated in ounces vary too much between kitchens.',
        link: {
          href: '/food-boxes/',
          anchor: 'scoop and carton formats for larger chip portions',
          sentence:
            'Above about 200 grams a sleeve gets unwieldy, and {link} take over.',
        },
      },
      {
        kind: 'callout',
        heading: 'Delivery Changes the Answer',
        body: 'An open sleeve is the right choice on a counter and the wrong one in a courier bag, where chips migrate and the sleeve tips. If a meaningful share of your orders are delivered, ask us to quote a vented carton alongside.',
      },
    ],
    faqs: [
      {
        q: 'Why not use a closed box for chips?',
        a: 'A closed box traps steam and the chips soften within minutes. Open formats keep them crisp, which is why chip shops have used open wraps and scoops for a century.',
      },
      {
        q: 'What portion size should I order for?',
        a: 'Weigh a typical serving on your own scales and send us the figure. Portion sizes described as "regular" or "large" differ enormously between kitchens, and weight is the only reliable basis for sizing.',
      },
      {
        q: 'Why do chips go soft in packaging?',
        a: 'Trapped steam rather than the board. An open format lets it escape; a closed one holds it against the chips and softens them within minutes.',
      },
      {
        q: 'How do we stop the sleeve closing while filling?',
        a: 'A crease pattern or gusset that holds the mouth open. Check it on an unprinted sample before the run — staff need a free hand for the fryer basket.',
      },
      {
        q: 'What portion size should we quote for?',
        a: 'Weigh a typical serving on your own scales. Descriptions like regular and large vary far too much between kitchens to size from.',
      },
      {
        q: 'Do these work for delivery?',
        a: 'Poorly. An open sleeve tips and chips migrate once a bag moves. If a meaningful share of orders are delivered, ask us to price a vented carton alongside.',
      },
      {
        q: 'Will the base stay stable when set down?',
        a: 'With a wide enough base, yes. A narrow sleeve tips when a customer puts it down to pick up a drink, which is a common complaint.',
      },
      {
        q: 'What finish suits oily hands?',
        a: 'Matt. Gloss is noticeably slippery once fingers are greasy, which matters more on chips than on almost anything else.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes. The grease resistance is a lining on the inner face, so the printable outer surface behaves like any other board.',
      },
      {
        q: 'At what size should we move to a box?',
        a: 'Around 200 grams a sleeve gets unwieldy and a scoop or carton holds its shape better. Weigh your largest portion and tell us the figure.',
      },
    ],
    related: [
      'french-fry-boxes',
      'custom-fries-trays',
      'cone-fries-packaging',
      'custom-printed-fry-paper',
    ],
  },

  {
    slug: 'custom-pizza-slice-sleeves',
    name: 'Custom Pizza Slice Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Pizza Slice Sleeves UK | Printed Slice Wraps',
    seoDescription:
      'Wedge-shaped pizza slice sleeves that support the underside two thirds of the way to the tip, so a hot slice does not fold.',
    h1: 'Custom Pizza Slice Sleeves',
    cardBlurb: 'Wedge sleeves that stop a hot slice folding at the tip.',
    enquiryLabel: 'pizza slice sleeves',
    intro: [
      'A hot slice folds under its own weight within seconds of leaving the counter. Everyone has done the two-handed rescue.',
      'A slice sleeve is a wedge that supports the crust and the underside far enough forward that the tip stays up.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Support Has to Reach Past the Halfway Point',
        body: [
          'A short wedge that grips only the crust does nothing — the slice pivots on the edge of the board and folds anyway.',
          'The support needs to run at least two thirds of the way to the tip. That is more board than people expect, and it is why proper slice sleeves look oversized flat.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What to Measure',
        items: [
          'The crust width at the widest edge of your slice.',
          'The length from crust to tip, which varies hugely by pizza diameter.',
          'Crust height, particularly for a thick or stuffed edge.',
          'Whether slices are served singly or two stacked back to back.',
        ],
        outro:
          'A 20in pizza slice and a 12in slice need entirely different wedges, so tell us which sizes you cut.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Shape', 'Wedge, cut to your slice length and crust width'],
          ['Board', 'Grease-resistant; cheese oil soaks through untreated stock quickly'],
          ['Support depth', 'Two thirds towards the tip as a minimum'],
          ['Print', 'The crust end is the visible face when carried'],
          ['Stacking', 'Nested flat for storage'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we use a slice sleeve for two slices back to back?',
        a: 'A back-to-back pair is thicker and heavier and needs a deeper wedge, so a single-slice sleeve will not hold it. If that is how you sell, size for the pair from the start.',
      },
      {
        q: 'Does the sleeve keep the slice hot?',
        a: 'Barely. It stops the underside cooling against a cold counter and cuts draughts, but a slice eaten ten minutes later will be lukewarm whatever it is carried in.',
      },
      {
        q: 'How far towards the tip must the sleeve reach?',
        a: 'At least two thirds. Support that stops short lets the slice pivot and fold anyway, which is the failure customers notice immediately.',
      },
      {
        q: 'Can one wedge fit different pizza sizes?',
        a: 'Only if you size for the largest, which leaves smaller slices loose. Counters cutting one standard diameter get a far better fit.',
      },
      {
        q: 'Do we need grease resistance?',
        a: 'Yes. Cheese oil soaks through untreated board quickly, and a slice sits in the sleeve for the whole time it is being eaten.',
      },
      {
        q: 'Will it hold two slices back to back?',
        a: 'Not a single-slice sleeve. A back-to-back pair is thicker and heavier and needs a deeper wedge sized for it from the start.',
      },
      {
        q: 'What do we measure?',
        a: 'Crust width at the outer edge, and the length from crust to tip. Both change with pizza diameter, so measure the size you actually cut.',
      },
      {
        q: 'Can customers eat straight from the sleeve?',
        a: 'That is the point of it. The crust end stays in the hand while the supported underside stops the tip dropping.',
      },
      {
        q: 'Do these suit a takeaway counter?',
        a: 'They are designed for it. For seated service a wedge tray presents better, which is why counters doing both often stock each.',
      },
      {
        q: 'Do these suit a festival pitch?',
        a: 'They do, and a slice sleeve is what lets a customer walk with a slice rather than needing a plate.',
      },
    ],
    related: [
      'custom-pizza-slice-trays',
      'custom-pizza-trays',
      'custom-pizza-liner',
      'custom-fries-sleeves',
    ],
  },

  {
    slug: 'custom-popcorn-sleeves',
    name: 'Custom Popcorn Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Popcorn Sleeves UK | Printed Popcorn Wraps',
    seoDescription:
      'Printed popcorn sleeves for cinemas, events and markets. Dry popcorn needs no lining, so the budget goes into the print face.',
    h1: 'Custom Popcorn Sleeves',
    cardBlurb: 'Light board sleeves with a large printed face for events and cinemas.',
    enquiryLabel: 'popcorn sleeves',
    intro: [
      'Popcorn is one of the few foods in this range that puts almost no stress on packaging. It is dry, light, and eaten immediately.',
      'That frees the specification up considerably: the sleeve can be a light, cheap board and the whole budget can go into the printed face.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Rare Case Where Lining Is Unnecessary',
        body: [
          'Sweet popcorn carries a sugar glaze rather than free oil, and salted popcorn is drier still. Neither soaks into board the way a chip or a burger does.',
          'Unless yours is heavily buttered, an unlined board is usually adequate — which lowers the unit cost and makes the sleeve straightforward to recycle.',
        ],
        link: {
          href: '/custom-eco-friendly-cone-sleeves/',
          anchor: 'unlaminated board and what can honestly be claimed for it',
          sentence:
            'Where dry food removes the need for a lining, {link} applies directly.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where Popcorn Sleeves Get Used',
        items: [
          'Cinemas and screening rooms, where the sleeve is seen in a dark room and needs contrast.',
          'Festivals and fairs, where a tall sleeve looks generous for the portion.',
          'Weddings and parties, often as a short printed run with a name and date.',
          'Retail and gifting, where a heavier board and a closed base turn it into a container.',
        ],
        outro:
          'Portion perception matters more here than in most of the range — a taller, narrower sleeve reads as more popcorn than a wide one holding the same volume.',
      },
      {
        kind: 'callout',
        heading: 'Heavily Buttered Popcorn Is a Different Specification',
        body: 'If yours is finished with melted butter rather than a dry seasoning, the board does need a grease-resistant treatment. Tell us how it is dressed and we will specify accordingly rather than assuming the dry case.',
      },
    ],
    faqs: [
      {
        q: 'Will popcorn make the sleeve greasy?',
        a: 'Dry-seasoned and glazed popcorn generally does not. Buttered popcorn does, and needs a lined board. It is worth being specific about how yours is finished.',
      },
      {
        q: 'Should the sleeve be tall and narrow or short and wide?',
        a: 'Tall and narrow looks like more popcorn for the same volume, which is why cinema packaging has that shape. Short and wide is easier to eat from while seated. Choose by which matters more to you.',
      },
      {
        q: 'Does popcorn need a lined board?',
        a: 'Dry-seasoned and glazed popcorn does not, which makes these among the cheapest printed items in the range. Buttered popcorn does need a lining.',
      },
      {
        q: 'Should the sleeve be tall or wide?',
        a: 'Tall and narrow reads as more popcorn for the same volume, which is why cinema packaging has that shape. Wide is easier to eat from while seated.',
      },
      {
        q: 'Will an unlined sleeve recycle easily?',
        a: 'It is the simplest thing here to put into a paper stream, because there is no lining or lamination to separate. That is a genuine advantage of dry food.',
      },
      {
        q: 'How do we size for a portion?',
        a: 'By volume rather than weight. Popcorn is far bulkier per gram than anything else in this range, so a weight-based estimate comes out much too small.',
      },
      {
        q: 'Can we print for a dark room?',
        a: 'Design for contrast rather than detail. Cinema foyers and auditoriums are dim, and fine artwork disappears where a bold block still reads.',
      },
      {
        q: 'Do these work for weddings and parties?',
        a: 'Frequently, usually as a short printed run with a name or date. Digital printing makes a few hundred workable.',
      },
      {
        q: 'Will the sleeve stand up on its own?',
        a: 'With a formed base, yes. A flat sleeve needs holding while filled, which slows a busy counter noticeably.',
      },
      {
        q: 'Can we match these to a popcorn tray?',
        a: 'Yes, and running both in one order keeps the colour consistent. Printed separately months apart the same brand colour drifts visibly.',
      },
    ],
    related: [
      'custom-popcorn-trays',
      'custom-popcorn-bags',
      'paper-snack-cups',
      'event-or-seasonal-sleeves',
    ],
  },

  {
    slug: 'custom-crepe-sleeves',
    name: 'Custom Crepe Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Crepe Sleeves UK | Printed Crepe Wraps',
    seoDescription:
      'Printed sleeves for folded crepes, in a greaseproof-lined board that copes with warm chocolate, caramel and fruit fillings.',
    h1: 'Custom Crepe Sleeves',
    cardBlurb: 'Wraps for folded and rolled crepes with warm, wet fillings.',
    enquiryLabel: 'crepe sleeves',
    intro: [
      'Crepes are served folded into a triangle or rolled into a cone, and the two need completely different packaging. This page covers the folded version; the rolled one is closer to a cone holder.',
      'Either way, warm chocolate sauce is the material the board has to survive.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Sweet Fillings Are Harder on Board than They Look',
        body: [
          'Chocolate spread and caramel are oil-based and warm when served, which is a demanding combination for untreated board. Fruit adds water on top of that.',
          'A greaseproof-lined board handles both. Plain board goes soft at the fold within a few minutes.',
        ],
        link: {
          href: '/crepe-cone-packaging/',
          anchor: 'cone holders for crepes rolled rather than folded',
          sentence:
            'If yours are rolled instead, {link} is the right format.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Folded Crepes: What the Sleeve Has to Do',
        items: [
          'Hold the triangle closed so fillings do not escape at the fold.',
          'Give a clean grip at the wide end where the customer holds it.',
          'Leave the point open so the crepe can be eaten without unwrapping.',
          'Resist warm sauce for the length of a walk around a market.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Format', 'Triangular sleeve for folded crepes'],
          ['Board', 'Greaseproof-lined for sweet fillings'],
          ['Print', 'Full colour; crepe stands are usually visual businesses'],
          ['Finish', 'Matt lamination handles warm, sticky contact'],
          ['Sizing', 'Set from your folded crepe, which varies with pan size'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Do folded and rolled crepes use the same packaging?',
        a: 'No. A folded crepe is a triangle and a rolled one is a cone, so the dies have nothing in common. Sites that serve both need two items.',
      },
      {
        q: 'Will chocolate sauce stain through the sleeve?',
        a: 'On a lined board, not within a normal serve. On plain board it shows as a dark patch at the fold quite quickly, which is why lining is the standard specification here.',
      },
      {
        q: 'Will chocolate sauce stain through?',
        a: 'Not through a greaseproof-lined board within a normal serve. On plain board it shows as a dark patch at the fold within a few minutes.',
      },
      {
        q: 'How do we size a folded crepe sleeve?',
        a: 'From your folded crepe, which varies with pan size. Fold one as you serve it and measure the triangle rather than the flat crepe.',
      },
      {
        q: 'Should the point stay open?',
        a: 'Yes, so the customer can eat down without unwrapping. A fully closed sleeve means unwrapping a warm, sauced item in one hand.',
      },
      {
        q: 'Do fruit fillings need a different board?',
        a: 'Fruit adds water on top of the oil from a sweet filling. A lined board handles both; plain board goes soft at the fold faster with fruit.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and crepe stands are usually visual businesses where it earns its cost. A matt finish handles warm, sticky contact better than gloss.',
      },
      {
        q: 'Are these suitable for savoury crepes?',
        a: 'Yes. Savoury fillings carry more free oil than sweet ones, so a lined board matters even more on a savoury crepe menu.',
      },
      {
        q: 'How do they ship?',
        a: 'Flat and die-cut. A triangular sleeve nests well, so a case holds a good quantity for the storage space it takes.',
      },
      {
        q: 'Can we order these alongside crepe cone holders?',
        a: 'Yes, and running both in one job keeps the colour consistent between the folded and rolled formats.',
      },
    ],
    related: [
      'crepe-cone-packaging',
      'custom-crepe-trays',
      'custom-dessert-sleeves',
      'custom-pastry-sleeves',
    ],
  },

  {
    slug: 'custom-dessert-sleeves',
    name: 'Custom Dessert Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Dessert Sleeves UK | Printed Dessert Wraps',
    seoDescription:
      'Printed sleeves for cake slices, brownies and traybakes sold to take away from UK cafés, bakeries and dessert counters.',
    h1: 'Custom Dessert Sleeves',
    cardBlurb: 'Presentation sleeves for cake slices, brownies and takeaway desserts.',
    enquiryLabel: 'dessert sleeves',
    intro: [
      'Desserts sold to take away are bought on how they look through the counter glass and judged again when the box is opened at home. The packaging has to survive that second look.',
      'A sleeve does that job for anything firm enough to hold its own shape — slices, brownies, traybakes and set desserts.',
    ],
    sections: [
      {
        kind: 'uses',
        heading: 'What Suits a Sleeve and What Does Not',
        items: [
          {
            title: 'Works Well: Cake Slices and Traybakes',
            body: 'Firm, self-supporting and rectangular. A sleeve holds the sides and leaves the top on show.',
          },
          {
            title: 'Works Well: Brownies and Flapjacks',
            body: 'Dense and greasy enough to need a lined board, but structurally simple.',
          },
          {
            title: 'Works Poorly: Soft-Set Desserts',
            body: 'Anything that slumps needs walls on all sides. A sleeve gives it nowhere to go but sideways.',
          },
          {
            title: 'Works Poorly: Anything with a Sauce',
            body: 'An open-bottomed sleeve is the wrong container for liquid. Use a lidded pot.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Presentation Is Most of the Value Here',
        body: [
          'A brownie in a plain bag is a brownie. The same brownie in a printed sleeve reads as a product with a price attached, which is usually why cafés move to them.',
          'Because the item is dry and firm, board weight can be modest and the budget can go into the print.',
        ],
        link: {
          href: '/custom-bakery-trays/',
          anchor: 'trays for multi-item bakery orders',
          sentence:
            'Where customers buy three or four at once, {link} keep them from sliding together.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is a sleeve enough for a cake slice, or do we need a box?',
        a: 'A firm slice with a stable base is fine in a sleeve. A tall, soft or heavily iced slice needs a box, because a sleeve does not stop it tipping.',
      },
      {
        q: 'Can the sleeve carry allergen labelling?',
        a: 'It can carry a printed panel, or you can reserve a clear area for a sticker. Which route suits depends on how often your recipes change, so it is worth deciding before artwork.',
      },
      {
        q: 'What desserts suit a sleeve rather than a box?',
        a: 'Anything firm enough to hold its own shape — slices, brownies, traybakes. Soft-set desserts slump sideways and need walls on all sides.',
      },
      {
        q: 'Do brownies need a lined board?',
        a: 'Yes. They are dense and greasy enough to mark plain board within hours in a display cabinet, which customers see before they buy.',
      },
      {
        q: 'Can the sleeve carry allergen information?',
        a: 'Either a printed panel or a reserved blank area for a sticker. Bakeries changing recipes weekly usually find the sticker route far less restrictive.',
      },
      {
        q: 'Will a sleeve stop a slice tipping?',
        a: 'No. It holds the sides and leaves the top and bottom open, so a tall or heavily iced slice still needs a box.',
      },
      {
        q: 'What board weight suits a cake slice?',
        a: 'Modest, because the item is dry and firm. That leaves more of the budget for the print, which is where the value sits on a dessert.',
      },
      {
        q: 'Can we run several dessert names in one order?',
        a: 'On digital printing, yes. Send the number of names and the quantity of each rather than a single total, so the split is priced properly.',
      },
      {
        q: 'Do these suit a takeaway dessert business?',
        a: 'They do for firm items. Anything with sauce needs a lidded container, since an open-bottomed sleeve is the wrong format for liquid.',
      },
      {
        q: 'How do they present in a cabinet?',
        a: 'They read as a product with a price rather than a loose item, which is usually why cafés move to them from bags.',
      },
    ],
    related: [
      'custom-cupcake-sleeves',
      'custom-pastry-sleeves',
      'custom-bakery-trays',
      'custom-muffin-sleeves',
    ],
  },

  {
    slug: 'custom-cupcake-sleeves',
    name: 'Custom Cupcake Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Cupcake Sleeves UK | Printed Cupcake Wraps',
    seoDescription:
      'Printed cupcake sleeves sized to sit below the icing line, supporting the case without smearing the swirl on the way on or off.',
    h1: 'Custom Cupcake Sleeves',
    cardBlurb: 'Wraps sized below the icing line to support the case cleanly.',
    enquiryLabel: 'cupcake sleeves',
    intro: [
      'Everything about a cupcake sleeve is decided by the icing. Too tall and it touches the swirl; too short and it does not hold the case.',
      'The measurement that matters is from the base of the case to the point where the icing begins.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Height Is Set by the Icing, Not the Cake',
        body: [
          'A sleeve that reaches the icing smears it on the way on and again on the way off, and the customer sees the damage before they see the design.',
          'Measuring to the icing line, then subtracting a few millimetres, gives a sleeve that supports the case and never touches the top.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Details Worth Getting Right',
        items: [
          'Case diameter at the top, which is wider than the base by a noticeable margin.',
          'Whether the sleeve grips the case or sits loosely around it.',
          'Whether cupcakes travel in a box, in which case the sleeve is presentation only.',
          'How the sleeve is removed — a customer eating from the case needs it to slide off cleanly.',
        ],
        outro:
          'For gifting and events, a sleeve printed with a name or date is a common short-run request.',
        link: {
          href: '/custom-muffin-sleeves/',
          anchor: 'muffin sleeves, which are sized differently again',
          sentence:
            'Muffins have no icing line to work around, so {link} follow different rules.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Height', 'Set below the icing line'],
          ['Diameter', 'Matched to the top of the case'],
          ['Board', 'Light board; cupcakes put little stress on packaging'],
          ['Print', 'Full colour or spot; short runs suit digital'],
          ['Runs', 'Frequently ordered in small quantities for events'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will the sleeve mark the icing?',
        a: 'Not if the height is set below the icing line, which is why that measurement matters more than the cake diameter. Sleeves sized to the cake rather than the icing are the usual cause of smeared tops.',
      },
      {
        q: 'Can we order a small quantity for a wedding?',
        a: 'Short runs are normal for this product and digital printing makes a few hundred workable. Send the quantity and the date and we will tell you what is realistic.',
      },
      {
        q: 'What measurement matters most?',
        a: 'The height from the base of the case to where the icing begins. Sizing to the cake rather than the icing line is what smears tops.',
      },
      {
        q: 'Should the sleeve grip the case or surround it?',
        a: 'Surround it, loosely enough to slide off cleanly. A gripping fit deforms the case and makes removal awkward with one hand.',
      },
      {
        q: 'Do cupcakes need a lined board?',
        a: 'Rarely. The case already sits between the cake and the sleeve, so plain light board is usually adequate and cheaper.',
      },
      {
        q: 'Can we order a few hundred for a wedding?',
        a: 'Short runs are normal for this product and digital printing makes them workable. Send the quantity and the date together.',
      },
      {
        q: 'Will the sleeve fit any cupcake case?',
        a: 'Case diameters vary between suppliers. Send one of yours, or measure across the top of the case rather than the base.',
      },
      {
        q: 'Can we print a name or date?',
        a: 'Yes, and it is one of the most common short-run requests here. On digital printing several versions in one order is straightforward.',
      },
      {
        q: 'Do these work if cupcakes travel in a box?',
        a: 'They do, and in that case the sleeve is presentation rather than protection, so a lighter board and a better print is the sensible split.',
      },
      {
        q: 'How do they ship?',
        a: 'Flat and die-cut, assembled at the counter. They take very little storage, which suits the small kitchens most cupcake businesses work from.',
      },
    ],
    related: [
      'custom-muffin-sleeves',
      'custom-dessert-sleeves',
      'custom-bakery-trays',
      'custom-pastry-sleeves',
    ],
  },

  {
    slug: 'custom-muffin-sleeves',
    name: 'Custom Muffin Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Muffin Sleeves UK | Printed Muffin Wraps',
    seoDescription:
      'Printed muffin sleeves sized around the domed top rather than the case, with a greaseproof inner face for a buttery bake.',
    h1: 'Custom Muffin Sleeves',
    cardBlurb: 'Sleeves sized around a domed top, with a grease-resistant inner face.',
    enquiryLabel: 'muffin sleeves',
    intro: [
      'A muffin is wider at the top than the base and considerably greasier than a cupcake. Both facts change the sleeve.',
      'The dome means the widest point is above the case, so a sleeve sized to the case will not go on at all.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Muffins Are Oilier than They Look',
        body: [
          'A muffin has enough fat in it to mark plain board within a couple of hours in a display cabinet. On a morning\'s trade that is visible.',
          'A greaseproof inner face is the standard specification here, which is one of the main differences from a cupcake sleeve.',
        ],
      },
      {
        kind: 'compare',
        heading: 'Muffin Sleeves Against Cupcake Sleeves',
        columns: ['Muffin', 'Cupcake'],
        rows: [
          ['Widest point', 'Above the case, at the dome', 'The top of the case'],
          ['Grease', 'Noticeable — lined board needed', 'Minimal'],
          ['Height limit', 'None; the top is bare cake', 'Must stay below the icing'],
          ['Typical use', 'Grab-and-go counter sale', 'Events, gifting, boxed sets'],
          ['Board', 'Greaseproof-lined', 'Light plain board'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Getting the Fit Right',
        items: [
          'Measure across the dome at its widest, not across the case.',
          'Allow for variation — hand-baked muffins are not dimensionally consistent.',
          'Decide whether the sleeve grips or simply surrounds; grip risks tearing the dome.',
          'Consider a taller sleeve if the muffins are sold to take away rather than eaten in.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a cupcake sleeve be used for muffins?',
        a: 'Rarely. A cupcake sleeve is sized to the case, and a muffin is widest above it, so the sleeve either will not fit or tears the top going on.',
      },
      {
        q: 'Do muffin sleeves need lining?',
        a: 'Generally yes. Muffins carry enough fat to mark plain board over a morning in a cabinet, which is visible to customers well before the muffin is sold.',
      },
      {
        q: 'Where do we measure a muffin?',
        a: 'Across the dome at its widest, not across the case. The widest point sits above the case, which is why case-sized sleeves will not go on.',
      },
      {
        q: 'Why do muffins need a lined board when cupcakes do not?',
        a: 'Muffins carry enough fat to mark plain board within a couple of hours in a display cabinet, which is visible well before they sell.',
      },
      {
        q: 'Can a cupcake sleeve be used at a push?',
        a: 'Rarely. It is sized to the case, and forcing it over a wider dome tears the top of the muffin as it goes on.',
      },
      {
        q: 'Do hand-baked muffins vary too much to size?',
        a: 'They vary more than machine-made ones, which is why a slightly generous fit works better here than a close one.',
      },
      {
        q: 'Should the sleeve be taller for takeaway?',
        a: 'It often helps, since a taller wrap holds the muffin more securely in a bag. For eat-in, a shorter band presents the dome better.',
      },
      {
        q: 'Can we print a flavour name?',
        a: 'Yes, and on a multi-flavour counter it saves staff checking. Digital printing makes several names in one run affordable.',
      },
      {
        q: 'Will the sleeve leave a mark on the muffin?',
        a: 'Not with a coated inner face. On uncoated board a warm muffin can stick slightly where the fat has soaked in.',
      },
      {
        q: 'Do these suit a grab-and-go counter?',
        a: 'They are mostly bought for exactly that. A sleeve is quicker than bagging and leaves the dome visible, which is what sells it.',
      },
    ],
    related: [
      'custom-cupcake-sleeves',
      'custom-pastry-sleeves',
      'custom-dessert-sleeves',
      'custom-bakery-trays',
    ],
  },

  {
    slug: 'custom-donut-sleeves',
    name: 'Custom Doughnut Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Doughnut Sleeves UK | Printed Donut Wraps',
    seoDescription:
      'Printed doughnut sleeves in grease-resistant board with a coated inner face, so warm glaze does not lift off with the sleeve.',
    h1: 'Custom Doughnut Sleeves',
    cardBlurb: 'Grease-resistant sleeves shaped around glazed and filled doughnuts.',
    enquiryLabel: 'doughnut sleeves',
    intro: [
      'Doughnuts are fried, glazed and often filled, which makes them among the messiest single items a counter sells. Sugar transfers, glaze sticks and jam finds a way out.',
      'The sleeve has to give a clean grip without pulling the glaze off on removal.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Glaze Sticks to Board',
        body: [
          'A warm glazed doughnut will bond to an uncoated sleeve and take a layer of glaze with it when removed. Customers notice.',
          'A coated inner face prevents it. It is the single most useful thing to specify on this product, ahead of anything to do with the print.',
        ],
        link: {
          href: '/custom-donut-bags/',
          anchor: 'bags for multi-doughnut orders',
          sentence:
            'Where customers buy half a dozen, {link} handle the order better than six sleeves.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Differs by Doughnut Type',
        items: [
          'Ring doughnuts — a band sleeve works, and the hole keeps the shape stable.',
          'Filled doughnuts — no hole, more weight, and jam that escapes under pressure.',
          'Long johns and fingers — a long narrow sleeve, closer to a hot dog wrap.',
          'Heavily topped doughnuts — need clearance above the sleeve line, like a cupcake.',
        ],
        outro:
          'A shop selling all four will not cover them with one sleeve, though two usually manage.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Grease-resistant with a coated inner face'],
          ['Shape', 'Band, wrap or long sleeve depending on the doughnut'],
          ['Clearance', 'Set below any topping so nothing is smeared'],
          ['Print', 'Doughnut brands are usually colour-led; full CMYK is common'],
          ['Finish', 'Matt; gloss shows sugar dust clearly'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will the sleeve pull the glaze off?',
        a: 'Not with a coated inner face. On uncoated board a warm glaze bonds to it and lifts when removed, which is the most common complaint on doughnut packaging.',
      },
      {
        q: 'Do filled doughnuts need a different sleeve from rings?',
        a: 'Usually yes. A filled doughnut is heavier and has no hole to stabilise it, and squeezing it through a tight band is how jam ends up on a customer.',
      },
      {
        q: 'Why does glaze stick to the sleeve?',
        a: 'Because warm glaze is essentially sugar syrup and bonds to an absorbent surface as it cools. A coated inner face gives it nothing to grip.',
      },
      {
        q: 'Do ring and filled doughnuts need different sleeves?',
        a: 'Usually. A filled doughnut is heavier and has no hole to stabilise it, and squeezing it through a tight band pushes jam out.',
      },
      {
        q: 'What about long johns and fingers?',
        a: 'They need a long narrow sleeve, closer to a hot dog wrap than a band. Measure the length and the widest point of the finished item.',
      },
      {
        q: 'How much clearance do toppings need?',
        a: 'Enough that the sleeve never touches them. Heavily topped doughnuts are sized like cupcakes — to the topping line rather than the doughnut.',
      },
      {
        q: 'Does gloss or matt suit doughnuts better?',
        a: 'Matt. Gloss shows sugar dust and fingerprints clearly, and doughnut counters generate a lot of both.',
      },
      {
        q: 'Can one sleeve cover our whole range?',
        a: 'Rarely more than two. A shop selling rings, filled and fingers usually settles on two sizes rather than one compromise.',
      },
      {
        q: 'Do these work for a multi-doughnut order?',
        a: 'Not really. Above one or two, a bag or box handles the order better than several individual sleeves.',
      },
      {
        q: 'Will the print survive a warm doughnut?',
        a: 'On a coated board, yes. Uncoated print can pick up sugar and fat from the surface, which shows on a pale design.',
      },
    ],
    related: [
      'custom-donut-bags',
      'custom-pastry-sleeves',
      'custom-bakery-trays',
      'custom-dessert-sleeves',
    ],
  },

  {
    slug: 'custom-pastry-sleeves',
    name: 'Custom Pastry Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Pastry Sleeves UK | Printed Bakery Wraps',
    seoDescription:
      'Printed pastry sleeves for croissants, danishes and sausage rolls, in a lined board that copes with butter and loose flakes.',
    h1: 'Custom Pastry Sleeves',
    cardBlurb: 'Bakery sleeves for croissants, danishes and sausage rolls.',
    enquiryLabel: 'pastry sleeves',
    intro: [
      'Laminated pastry sheds. A croissant leaves flakes wherever it goes, and butter marks board faster than most fillings do.',
      'A pastry sleeve is really about containing crumbs while giving the customer a clean grip.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Butter Marks Board Within Minutes',
        body: [
          'A warm croissant on plain board leaves a translucent patch almost immediately. In a display cabinet where pastries sit for a morning, that patch is what customers see.',
          'Greaseproof-lined board avoids it entirely and is the normal specification for anything laminated.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Pastry Shapes and What They Need',
        items: [
          'Croissants — curved and irregular; a generous band works better than a close fit.',
          'Danishes — flat and wide, with sticky glaze that needs a coated inner face.',
          'Sausage rolls — hot, oily and cylindrical, closer to a hot dog wrap.',
          'Pain au chocolat — rectangular and easy to sleeve neatly.',
        ],
        outro:
          'Most bakeries settle on two sizes rather than one per shape.',
        link: {
          href: '/custom-pastry-bags/',
          anchor: 'flat bags for single pastry counter sales',
          sentence:
            'For quick counter service, {link} are faster to use than a sleeve.',
        },
      },
      {
        kind: 'callout',
        heading: 'Hot-Held Pastries Need More than Cold Ones',
        body: 'A sausage roll from a hot cabinet puts far more oil and steam into the packaging than a croissant at ambient temperature. If you hold pastries hot, say so — it changes the board rather than the shape.',
      },
    ],
    faqs: [
      {
        q: 'Are sleeves or bags better for pastries?',
        a: 'Bags are quicker at a busy counter and contain crumbs better. Sleeves present the pastry so it can still be seen, which suits a display-led bakery. Many sites use both for different products.',
      },
      {
        q: 'Will the sleeve keep a sausage roll warm?',
        a: 'Only marginally. Board slows cooling but does not insulate, and steam trapped against pastry softens it. For hot-held items, most operators accept warm rather than hot as the realistic outcome.',
      },
      {
        q: 'Why do croissants mark plain board?',
        a: 'Butter. A warm laminated pastry leaves a translucent patch almost immediately, and in a cabinet that patch is what customers see first.',
      },
      {
        q: 'Should the sleeve fit closely?',
        a: 'Not on croissants. They are curved and irregular, so a generous band works better than a close fit that crushes the layers.',
      },
      {
        q: 'Do hot-held pastries need a different board?',
        a: 'Yes. A sausage roll from a hot cabinet puts far more oil and steam into packaging than a croissant at ambient temperature.',
      },
      {
        q: 'How many sizes will we need?',
        a: 'Most bakeries settle on two rather than one per shape. Croissants and danishes usually share; sausage rolls need their own.',
      },
      {
        q: 'Can we print a pastry name?',
        a: 'Yes, and on digital printing several names in one order is straightforward. Send the split between them rather than a total.',
      },
      {
        q: 'Do glazed danishes need a coated face?',
        a: 'They benefit from it. Sticky glaze bonds to uncoated board and lifts when the pastry is removed, which shows on the finished item.',
      },
      {
        q: 'Can one sleeve cover croissants and danishes?',
        a: 'Usually, since both are broadly similar in footprint. Sausage rolls are the shape that needs its own size.',
      },
      {
        q: 'Do these work in a self-service cabinet?',
        a: 'They do, and a sleeve keeps customer fingers off the pastry while still letting the lamination show, which a bag does not.',
      },
    ],
    related: [
      'custom-pastry-bags',
      'custom-donut-sleeves',
      'custom-muffin-sleeves',
      'custom-bakery-trays',
    ],
  },

  {
    slug: 'chocolate-bar-sleeve-packaging',
    name: 'Chocolate Bar Sleeve Packaging',
    category: 'food-sleeves',
    seoTitle: 'Chocolate Bar Sleeves UK | Printed Bar Packaging',
    seoDescription:
      'Printed sleeves for chocolate bars and confectionery, laid out with room for the ingredient, allergen and barcode panels.',
    h1: 'Chocolate Bar Sleeve Packaging',
    cardBlurb: 'Retail sleeves for chocolate bars, with room for required label information.',
    enquiryLabel: 'chocolate bar sleeves',
    intro: [
      'A chocolate bar sleeve is a retail pack rather than a service item. It sits on a shelf next to competitors, it has to carry legally required information, and it is often the only thing a customer knows about the brand.',
      'That makes it the most information-dense sleeve in this range.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Retail Packs Carry Required Information',
        body: [
          'A bar sold at retail needs ingredients, allergens, weight, storage and business details on the pack. That is a substantial amount of small type, and it has to be legible.',
          'Designing the front first and finding room for the rest afterwards is how sleeves end up with six-point text. Lay out the back panel at the same time as the front.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What a Bar Sleeve Has to Accommodate',
        items: [
          'A front face that works at arm\'s length on a shelf.',
          'A back or inner panel with ingredients and allergen information.',
          'A barcode area, kept flat and unobstructed so scanners read it.',
          'Weight and storage statements in legible sizes.',
          'Space for a batch or best-before mark applied after printing.',
        ],
        outro:
          'Confirm the exact requirements with whoever handles your food labelling — packaging can hold whatever you specify, but the specification is yours to set.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Format', 'Sleeve around a wrapped or moulded bar'],
          ['Board', 'Coated board for print quality; the bar is wrapped separately'],
          ['Print', 'Full colour, often with a spot colour for the brand'],
          ['Finish', 'Matt or gloss lamination; soft-touch available'],
          ['Barcode', 'Placed on a flat, unlaminated-safe area'],
          ['Coding', 'Clear area reserved for batch and date marking'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Does the sleeve touch the chocolate?',
        a: 'Usually not — bars are normally wrapped in foil or film first, and the sleeve goes around that. That means the sleeve does not need a food-contact specification, which widens the material choice.',
      },
      {
        q: 'Where should the barcode go?',
        a: 'On a flat panel with clear space around it, away from folds and the overlap. A barcode across a crease or on a curved area scans unreliably, which causes problems at the till rather than in production.',
      },
      {
        q: 'How much information has to fit?',
        a: 'More than most designs allow for. Ingredients, allergens, weight, storage and business details is a lot of small type, so lay out the back panel with the front.',
      },
      {
        q: 'Can we leave space for a batch code?',
        a: 'You should. Batch and best-before marks are applied after printing, so reserve a clear, uncoated area for them in the artwork.',
      },
      {
        q: 'What finishes are available?',
        a: 'Because nothing edible touches it, finishes ruled out elsewhere are open here — soft-touch lamination, foil blocking and uncoated textured stocks among them.',
      },
      {
        q: 'Will a soft-touch finish mark?',
        a: 'It marks more readily than standard matt, which is worth knowing for a product that sits on a shelf being handled.',
      },
      {
        q: 'Can we run several flavours in one order?',
        a: 'On digital printing, yes, and it is the normal route for a small range. Send the quantity of each rather than a combined total.',
      },
      {
        q: 'Do we need a different sleeve for retail and gifting?',
        a: 'Often. A gift pack justifies a finish and a weight that a shelf product would not, even where the bar inside is identical.',
      },
      {
        q: 'Can we run a limited edition alongside a core range?',
        a: 'On digital printing, yes, and a short limited run beside a longer core one is a common split. Send both quantities.',
      },
      {
        q: 'Does the sleeve need to be food-grade?',
        a: 'Only where it touches the bar directly. Where the chocolate is wrapped in foil or film first, the requirement is far lighter.',
      },
    ],
    related: [
      'custom-gift-card-sleeves',
      'custom-die-cut-sleeves',
      'custom-candy-bags',
      'custom-dessert-sleeves',
    ],
  },

  {
    slug: 'custom-bento-sleeves',
    name: 'Custom Bento Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Bento Sleeves UK | Printed Meal Box Bands',
    seoDescription:
      'Printed bands and sleeves for bento and meal boxes, holding the lid closed in transit and carrying the dish and dietary marks.',
    h1: 'Custom Bento Sleeves',
    cardBlurb: 'Bands that hold a meal box closed and carry the menu information.',
    enquiryLabel: 'bento sleeves',
    intro: [
      'A bento sleeve is a band around a box. It holds the lid down in transit, and it turns an anonymous container into something that looks considered.',
      'Because the box does the containing, the sleeve is free to be light board and heavy on print.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Band Is Doing Security Work',
        body: [
          'A meal box in a courier bag will open if nothing holds the lid. A band is the simplest answer, and it doubles as tamper evidence — a broken band is visible.',
          'The band has to be sized to the closed box with very little slack, or it slides off the corner in transit.',
        ],
        link: {
          href: '/custom-take-out-bags/',
          anchor: 'printed bags for the wider delivery order',
          sentence:
            'Where boxes go out several at a time, {link} carry the same branding outward.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Operators Put on a Bento Band',
        items: [
          'The dish name, so a driver hands the right box to the right person.',
          'Allergen and dietary marks, often as a printed tick-box panel.',
          'Reheating instructions where the meal is not eaten immediately.',
          'A logo and handle, since the band is the branded face in a photograph.',
        ],
        outro:
          'Bands are cheap enough that several printed versions across a menu are usually affordable on digital print.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Fit', 'Sized to the closed box with minimal slack'],
          ['Board', 'Light board; the box provides the structure'],
          ['Print', 'Full colour, one or several designs'],
          ['Variants', 'Different bands per dish, printed in one run'],
          ['Finish', 'Usually unlaminated; the band is discarded immediately'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Does a band work as tamper evidence?',
        a: 'It shows visibly if it has been broken, which is the practical benefit customers care about. Whether that meets any formal requirement is a question for your own procedures rather than a claim we would make for the packaging.',
      },
      {
        q: 'Can we print a different band for each dish?',
        a: 'On digital print, yes, and it is one of the more useful applications. Send the number of dishes and the quantity of each so we can price the split rather than assuming an even one.',
      },
      {
        q: 'How tight should the band be?',
        a: 'Sized to the closed box with very little slack, or it slides off a corner in transit. Send a box rather than its stated dimensions.',
      },
      {
        q: 'Does a band count as tamper evidence?',
        a: 'It shows visibly if it has been broken, which is the practical benefit. Whether that meets a formal requirement is a question for your own procedures.',
      },
      {
        q: 'Can we print a different band per dish?',
        a: 'On digital printing, yes, and it is one of the more useful applications. Send the number of dishes and the quantity of each.',
      },
      {
        q: 'What board weight does a band need?',
        a: 'Light. The box provides the structure, so the band is doing security and branding rather than support, which keeps the cost down.',
      },
      {
        q: 'Should the band carry allergen marks?',
        a: 'A printed tick-box panel is common and works well where your menu is stable. Where dishes change often, a sticker is more practical.',
      },
      {
        q: 'Will the band survive a delivery bag?',
        a: 'A correctly sized one will. Bands fail by sliding off rather than tearing, which is a fit problem rather than a strength problem.',
      },
      {
        q: 'Can we match bands to our bag?',
        a: 'Yes, and running them in one order keeps the colour consistent. Printed months apart the same brand colour drifts visibly.',
      },
      {
        q: 'Do bands work on round containers?',
        a: 'They can, though the fit is less secure than on a box with corners. Send the container and we will tell you honestly whether it will hold.',
      },
    ],
    related: [
      'custom-sushi-sleeves',
      'custom-combo-meal-trays',
      'custom-take-out-bags',
      'custom-wrap-sleeves',
    ],
  },

  {
    slug: 'custom-sushi-sleeves',
    name: 'Custom Sushi Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Sushi Sleeves UK | Printed Sushi Pack Bands',
    seoDescription:
      'Printed bands for sushi trays, sized for chilled retail with a barcode area and enough of the lid left clear to see the food.',
    h1: 'Custom Sushi Sleeves',
    cardBlurb: 'Bands for sushi trays, set up for chilled retail display.',
    enquiryLabel: 'sushi sleeves',
    intro: [
      'Sushi is bought with the eyes through a clear lid, so a sleeve must not cover the food. It sits as a band across part of the pack, carrying the name and the required information.',
      'Getting the balance right — enough branding, not so much that the sushi is hidden — is most of the design work.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Cover as Little of the Lid as Possible',
        body: [
          'The product is the packaging\'s main selling point. A wide band across the centre hides the pieces the customer is choosing between.',
          'Bands that run across one end, or down one side, leave the arrangement visible while still giving a substantial printed area.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Chilled Retail Requirements',
        items: [
          'A barcode area on a flat section, readable at the till.',
          'Room for a date label applied after packing.',
          'Allergen information, which for sushi is rarely short.',
          'A finish that copes with condensation in a chiller.',
          'Colours that hold up under cabinet lighting, which drains warmth.',
        ],
        outro:
          'A band that curls in a chiller looks cheap and is usually a board and lamination problem rather than a design one.',
        link: {
          href: '/custom-bento-sleeves/',
          anchor: 'bands for hot meal boxes',
          sentence:
            'The same construction is used for {link}, with different priorities.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will the band curl in a chiller?',
        a: 'It can if the board is light and unlaminated, because one face takes up moisture faster than the other. A laminated or coated board resists it, and it is worth specifying if packs sit in a cabinet for hours.',
      },
      {
        q: 'How much of the lid can the band cover?',
        a: 'Less than most designers want. The arrangement of the pieces is what sells the pack, so an end band or a side band nearly always outperforms a wide central one.',
      },
      {
        q: 'How much of the lid should the band cover?',
        a: 'Less than most designs want. The arrangement of the pieces is what sells the pack, so an end band or a side band outperforms a wide central one.',
      },
      {
        q: 'Where does the barcode go?',
        a: 'On a flat section clear of folds, so it scans reliably at the till. That has to be planned rather than fitted in afterwards.',
      },
      {
        q: 'Do we need space for a date label?',
        a: 'Yes, applied after packing. Reserve the area in the artwork so the sticker does not land across your logo or the barcode.',
      },
      {
        q: 'Can the band carry allergen information?',
        a: 'It can, though for sushi the list is rarely short. Many operations use a printed panel for the fixed part and a sticker for what changes.',
      },
      {
        q: 'Will cabinet lighting change how the print looks?',
        a: 'It drains warmth from colours. Check a printed sample under your own cabinet rather than approving from a screen or in daylight.',
      },
      {
        q: 'Can we run several pack types in one order?',
        a: 'On digital printing, yes. Send the number of variants and the quantity of each so the split is priced properly.',
      },
      {
        q: 'Do bands work on trays with a domed lid?',
        a: 'They can, though the band has to clear the dome. Send the tray and lid together rather than the tray alone.',
      },
      {
        q: 'Can we run a vegetarian and standard band?',
        a: 'On digital printing, yes, and it saves staff checking. Send the quantity of each rather than a total.',
      },
    ],
    related: [
      'custom-bento-sleeves',
      'custom-wrap-sleeves',
      'custom-sandwich-sleeves',
      'custom-combo-meal-trays',
    ],
  },

  {
    slug: 'custom-skewer-sleeves',
    name: 'Custom Skewer Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Skewer Sleeves UK | Printed Kebab Wraps',
    seoDescription:
      'Printed sleeves for kebabs and skewers, with a stick opening and a board specified against marinade as well as cooking oil.',
    h1: 'Custom Skewer Sleeves',
    cardBlurb: 'Wraps for kebabs and skewers with a stick opening and marinade-resistant board.',
    enquiryLabel: 'skewer sleeves',
    intro: [
      'A skewer is eaten straight off the stick, so the packaging has to protect a hand from hot meat while leaving the stick free.',
      'Marinades add a complication that plain oil does not: they are acidic, coloured and prone to staining.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Marinade Stains Where Oil Only Soaks',
        body: [
          'A turmeric or tomato-based marinade leaves a coloured mark on board that a neutral oil would not. On a white sleeve that shows immediately.',
          'Darker board, a coated inner face, or a design with enough colour to absorb a mark are all reasonable answers depending on how much you care about it.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Sizing a Skewer Sleeve',
        items: [
          'The length of the loaded section, not the whole skewer.',
          'The width across the widest piece of meat or vegetable.',
          'How much stick the customer needs left clear to hold.',
          'Whether skewers are served singly or two or three together.',
        ],
        outro:
          'Two or three together generally need a tray rather than one large sleeve.',
        link: {
          href: '/custom-corn-dog-sleeves/',
          anchor: 'stick openings on fried products',
          sentence:
            'The stick-opening detail is shared with {link}, which faces the same problem.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Board', 'Grease and marinade resistant'],
          ['Opening', 'Sized to the skewer stick you use'],
          ['Length', 'Covers the loaded section only'],
          ['Print', 'Darker artwork tolerates marinade marks better'],
          ['Finish', 'Matt for grip with oily hands'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can one sleeve fit both chicken and vegetable skewers?',
        a: 'If they are loaded to a similar diameter, yes. Vegetable skewers are often bulkier at the ends, so check the widest piece rather than assuming they match.',
      },
      {
        q: 'How do we stop marinade staining the sleeve?',
        a: 'A coated inner face keeps most of it off the printed surface, and darker or busier artwork disguises what gets through. Letting skewers drain briefly before sleeving helps more than either.',
      },
      {
        q: 'Why does marinade matter more than oil?',
        a: 'Because it stains. Turmeric and tomato-based marinades leave a coloured mark on board that a neutral cooking oil would not.',
      },
      {
        q: 'How do we size a skewer sleeve?',
        a: 'From the loaded section rather than the whole skewer, measured across the widest piece of meat or vegetable.',
      },
      {
        q: 'Should the stick opening match a corn dog sleeve?',
        a: 'The principle is the same but the stick diameters usually differ. Send one of your sticks rather than assuming they match.',
      },
      {
        q: 'Can one sleeve fit chicken and vegetable skewers?',
        a: 'If they are loaded to a similar diameter, yes. Vegetable skewers are often bulkier at the ends, so check the widest piece.',
      },
      {
        q: 'How do we stop staining showing?',
        a: 'A coated inner face keeps most of it off the printed surface, and darker artwork disguises what gets through. Draining before sleeving helps most.',
      },
      {
        q: 'What finish grips most reliably with oily hands?',
        a: 'Matt. Gloss is noticeably slippery once fingers are greasy, which matters on a product held by a stick.',
      },
      {
        q: 'Can we serve two or three in one sleeve?',
        a: 'Not comfortably. Beyond one skewer a tray works considerably better, because they lean and the fillings press together.',
      },
      {
        q: 'Do these suit a festival pitch?',
        a: 'Yes. Outdoor trading argues for a laminated finish alongside the grease-resistant board, because a sleeve handled with wet hands in the rain fails far sooner than one handled indoors.',
      },
    ],
    related: [
      'custom-corn-dog-sleeves',
      'custom-hot-dog-sleeves',
      'custom-chicken-cone-sleeves',
      'custom-snack-trays',
    ],
  },

  {
    slug: 'custom-tea-cup-sleeves',
    name: 'Custom Tea Cup Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Tea Cup Sleeves UK | Printed Tea Sleeves',
    seoDescription:
      'Printed sleeves for takeaway tea, where near-boiling water and no cold milk make insulation matter more than it does on coffee.',
    h1: 'Custom Tea Cup Sleeves',
    cardBlurb: 'Sleeves for takeaway tea, where the water goes in hotter than coffee.',
    enquiryLabel: 'tea cup sleeves',
    intro: [
      'Tea is brewed close to boiling and served without the milk that cools a coffee down. A cup of tea is genuinely hotter to hold than a latte, and for longer.',
      'That makes the sleeve a comfort item rather than a branding one, and it changes the construction worth choosing.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Tea Against Coffee as a Heat Problem',
        columns: ['Tea', 'Coffee with milk'],
        rows: [
          ['Serving temperature', 'Close to boiling', 'Lowered by steamed or cold milk'],
          ['Cooling rate', 'Slow — no cold ingredient added', 'Faster'],
          ['Sleeve needed', 'More often, and thicker', 'Sometimes'],
          ['Suited construction', 'Corrugated, for the air gap', 'Flat board is often adequate'],
          ['Customer behaviour', 'Often held for a long walk', 'Frequently drunk sooner'],
        ],
        outro:
          'Sites serving a lot of tea find the corrugated option pays for itself in fewer complaints.',
      },
      {
        kind: 'prose',
        heading: 'The Brewing Bag Changes the Timing',
        body: [
          'Where a bag is left in, the cup keeps brewing and stays hot longer. The customer also has to remove the bag at some point, which usually means putting the cup down and picking it up again.',
          'A sleeve that stays put through that is worth more than one that is a fraction cheaper.',
        ],
        link: {
          href: '/beverage-sleeves/',
          anchor: 'the wider range of hot and cold cup sleeves',
          sentence:
            'Cafés ordering for tea and coffee together usually start from {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do tea cups need a thicker sleeve than coffee cups?',
        a: 'Often, yes. Tea goes in nearer boiling and has no cold milk to cool it, so a corrugated sleeve with an air gap makes a noticeable difference where a flat one would not.',
      },
      {
        q: 'Can one sleeve cover our tea and coffee cups?',
        a: 'If the cups are the same size, physically yes. Whether it is comfortable enough for tea is the real question, and that depends on which construction you choose rather than the fit.',
      },
      {
        q: 'Is tea really hotter than coffee to hold?',
        a: 'In practice, yes. It is brewed close to boiling and has no cold milk to cool it, so it stays hot for longer in the hand.',
      },
      {
        q: 'Should we choose corrugated for tea?',
        a: 'It usually makes a noticeable difference, because the air gap in the flute does real insulating work where a flat sleeve mainly adds grip.',
      },
      {
        q: 'Does a brewing bag change anything?',
        a: 'It keeps the cup hotter for longer, and the customer has to put the cup down to remove it. A sleeve that stays put through that is worth having.',
      },
      {
        q: 'How do we size a sleeve to our cups?',
        a: 'From the circumference at the grip point, roughly a third down from the rim. Send a cup rather than a stated volume.',
      },
      {
        q: 'Will a sleeve fit a double-walled cup?',
        a: 'Usually, though a double-walled cup is thicker at the same stated size, so a sleeve cut for single wall will be tight.',
      },
      {
        q: 'Can we print on corrugated board?',
        a: 'Yes, though the flute texture softens fine detail. Bold, simple designs read better on it than small type does.',
      },
      {
        q: 'Do these suit a café serving both hot and iced?',
        a: 'Cold cups sweat, which is a different problem. Many cafés run a corrugated sleeve for hot and a laminated flat one for iced.',
      },
      {
        q: 'Can we run one design across tea and coffee sleeves?',
        a: 'Yes, if the cup sizes match. Where they differ, the artwork carries over but each needs its own layout.',
      },
    ],
    related: [
      'custom-printed-coffee-sleeves',
      'paper-tea-cups-with-handles',
      'custom-cardboard-beverage-sleeves',
      'paper-cup-sleeves',
    ],
  },

  {
    slug: 'event-or-seasonal-sleeves',
    name: 'Event & Seasonal Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Seasonal & Event Sleeves UK | Short Run Printing',
    seoDescription:
      'Short-run printed sleeves for festivals, Christmas, weddings and one-off events, reusing your existing die to save lead time.',
    h1: 'Event and Seasonal Sleeves',
    cardBlurb: 'Short runs on your existing die for festivals, Christmas and one-off events.',
    enquiryLabel: 'event and seasonal sleeves',
    intro: [
      'A seasonal sleeve is usually not a new product at all. It is your existing sleeve with different artwork, which means no new die and a much shorter conversation.',
      'The work is in the scheduling rather than the specification.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Planning a Seasonal Run',
        intro: 'Work backwards from the first day it needs to be on the counter.',
        steps: [
          {
            title: 'Fix the In-Use Date',
            body: 'The first day of the promotion, not the day stock arrives. Everything else is scheduled against it.',
          },
          {
            title: 'Confirm the Lead Time in Writing',
            body: 'Lead times shift with press workload, and the Christmas period is the busiest. We confirm yours on the quote.',
          },
          {
            title: 'Reuse the Existing Die',
            body: 'If the sleeve shape is unchanged there is no die cost or lead time, only print.',
          },
          {
            title: 'Order to the Promotion, Not to the Year',
            body: 'Seasonal stock left over is written off. Estimate honestly and reorder if it goes well.',
          },
        ],
      },
      {
        kind: 'bullets',
        heading: 'Occasions This Comes Up For',
        items: [
          'Christmas, by a wide margin the busiest and the one to start earliest.',
          'Summer festival season, where several events share one design.',
          'Weddings and private functions, usually a few hundred units.',
          'Product launches and collaborations with a fixed end date.',
          'Local events where a town or venue name is added to a standard design.',
        ],
        outro:
          'For anything with a date printed on it, remember that leftovers cannot be used next year.',
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'ordering packaging around a fixed event date',
          sentence:
            'Our guide to {link} covers the timings in more detail.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can we reuse our standard sleeve die for a seasonal design?',
        a: 'If the shape and size are unchanged, yes, and it removes the die cost and its lead time entirely. Only the print differs, which is why seasonal runs are usually quicker than a first order.',
      },
      {
        q: 'Should we print the year on a Christmas sleeve?',
        a: 'Only if you are confident you will use every one. A dated sleeve cannot be carried over, and unsold seasonal stock is a real cost that undated artwork avoids.',
      },
      {
        q: 'Can we reuse our existing die?',
        a: 'If the shape and size are unchanged, yes, and it removes the die cost and its lead time entirely. Only the print differs.',
      },
      {
        q: 'How far ahead should we order?',
        a: 'Work backwards from the day it goes on the counter rather than forwards from today, and treat the artwork deadline as the fixed one.',
      },
      {
        q: 'Should we print the year?',
        a: 'Only if you are confident of using every one. A dated sleeve cannot be carried over, and unsold seasonal stock is a real cost.',
      },
      {
        q: 'Can we run four seasonal designs in one order?',
        a: 'On digital printing, yes, with the cost depending on the split. Ask for mixed cases if the designs go to more than one site.',
      },
      {
        q: 'What is the busiest period for seasonal work?',
        a: 'Christmas, by a wide margin, because every café in the country wants press time in the same few weeks. Start earlier than feels necessary.',
      },
      {
        q: 'Do event sleeves need a different board?',
        a: 'Only if the trading conditions differ. Outdoor festival pitches argue for a laminated finish where an indoor promotion would not.',
      },
      {
        q: 'Can we add a venue or town name?',
        a: 'Yes, and on digital printing several versions in one run is straightforward. Send the split between them.',
      },
      {
        q: 'What happens to leftovers?',
        a: 'With undated artwork they run again next season. With a year or a specific event printed on them, they cannot.',
      },
    ],
    related: [
      'christmas-paper-cups',
      'custom-small-cone-sleeves',
      'custom-popcorn-sleeves',
      'custom-halloween-treat-bags',
    ],
  },

  {
    slug: 'custom-gift-card-sleeves',
    name: 'Custom Gift Card Sleeves',
    category: 'food-sleeves',
    seoTitle: 'Custom Gift Card Sleeves UK | Printed Card Holders',
    seoDescription:
      'Printed gift card sleeves for hospitality brands, with an optional window and an unlaminated panel for a handwritten message.',
    h1: 'Custom Gift Card Sleeves',
    cardBlurb: 'Printed holders for gift cards, with optional window and message area.',
    enquiryLabel: 'gift card sleeves',
    intro: [
      'A gift card handed over loose feels like a transaction. The same card in a printed sleeve feels like a present, which is the entire reason hospitality businesses order them.',
      'It is the one item in this range that never touches food, which widens the material choice considerably.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'No Food Contact Means More Material Options',
        body: [
          'Because nothing edible touches it, a gift card sleeve can use finishes that would be unsuitable elsewhere — soft-touch lamination, foil blocking, uncoated textured stocks.',
          'That is worth knowing, because those finishes are exactly what makes a small item feel worth more than it cost.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Details That Make a Gift Sleeve Work',
        items: [
          'A window or cut-out so the card is visible without removing it.',
          'A blank panel for a handwritten message, on an uncoated surface that takes ink.',
          'A slot or pocket that holds the card without it sliding out.',
          'Balance terms or an expiry note where those apply to your scheme.',
        ],
        outro:
          'A laminated surface will not take pen, so the message panel needs to be left unlaminated if staff or customers write on it.',
        link: {
          href: '/custom-die-cut-sleeves/',
          anchor: 'bespoke die cutting for windows and slots',
          sentence:
            'Card slots and windows are cut on a bespoke die, covered under {link}.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Format', 'Sleeve, wallet or slotted holder'],
          ['Card fit', 'Sized to a standard card, or to your own dimensions'],
          ['Window', 'Optional cut-out, with or without film'],
          ['Finishes', 'Matt, gloss, soft-touch, foil blocking, uncoated'],
          ['Message panel', 'Left unlaminated so it takes handwriting'],
          ['Runs', 'Frequently short; digital printing suits'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a customer write on the sleeve?',
        a: 'Only on an unlaminated area. Ink sits on top of lamination and smears, so if a handwritten message is part of the idea, that panel has to be left uncoated at the design stage.',
      },
      {
        q: 'Do gift card sleeves need to be food-safe?',
        a: 'No. Nothing edible touches a gift card sleeve, which is why soft-touch, foil and textured stocks are all open here.',
      },
      {
        q: 'Do these need to be food-safe?',
        a: 'No, and that is the useful part. Nothing edible touches them, so finishes ruled out elsewhere in this range are available here.',
      },
      {
        q: 'What finishes suit a gift item?',
        a: 'Soft-touch lamination, foil blocking and uncoated textured stocks all work, and they are what make a small item feel worth more than it cost.',
      },
      {
        q: 'Should the card be visible?',
        a: 'A window or cut-out lets the card show without removing it, which reads as more considered than a plain wallet.',
      },
      {
        q: 'Will the card slide out?',
        a: 'Not with a slot or pocket cut for it. A plain sleeve without one relies on friction, which is unreliable once it has been opened.',
      },
      {
        q: 'Can we print terms on the sleeve?',
        a: 'Yes, and balance or expiry notes are commonly placed on the inner face where they do not compete with the design.',
      },
      {
        q: 'Are short runs practical?',
        a: 'Yes. Gift card sleeves are frequently ordered in small quantities, and digital printing suits that well.',
      },
      {
        q: 'Do these fit a standard card size?',
        a: 'They can be cut to a standard card or to your own dimensions. Send a card if yours is not a standard size.',
      },
      {
        q: 'Can we order a small quantity to test?',
        a: 'Yes. Gift card sleeves are frequently ordered in short runs, and digital printing suits that well.',
      },
    ],
    related: [
      'custom-die-cut-sleeves',
      'chocolate-bar-sleeve-packaging',
      'event-or-seasonal-sleeves',
      'custom-dessert-sleeves',
    ],
  },
];
