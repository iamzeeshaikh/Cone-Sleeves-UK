import type { Product } from '../types';

/** Flat sheets and liners. The recurring decision is what the paper has to resist. */
export const PRINTED_PAPERS: Product[] = [
  {
    slug: 'custom-greaseproof-paper',
    name: 'Custom Greaseproof Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Greaseproof Paper UK | Custom Food Wrap',
    seoDescription:
      'Custom printed greaseproof paper for burgers, hot food and counter wrapping, cut to a sheet size that folds and tucks properly.',
    h1: 'Custom Printed Greaseproof Paper',
    cardBlurb: 'The workhorse sheet for burgers, hot food and counter wrapping.',
    enquiryLabel: 'printed greaseproof paper',
    intro: [
      'Greaseproof is the default food paper in British kitchens, and it resists oil for a physical reason rather than a chemical one — the fibres are beaten until the sheet is dense enough that fat cannot travel through it.',
      'That makes it the sheet to reach for whenever hot or oily food touches paper.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Sheet Size Is Set by the Fold, Not the Food',
        body: [
          'A sheet exactly the size of a burger wraps nothing. You need enough paper to fold under, tuck at the sides and hold closed.',
          'Measure the item, then add the fold on each side. Ordering a common size and hoping it wraps is the usual reason a first order is replaced.',
        ],
        link: {
          href: '/printed-papers-bags/food-papers/',
          anchor: 'how the paper types compare for different food',
          sentence: 'If you are not sure greaseproof is the right grade, {link} sets out the alternatives.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What It Is Used For',
        items: [
          'Wrapping burgers and hot sandwiches at the pass.',
          'Lining trays and baskets so they can be wiped rather than washed.',
          'Laying under fried food to absorb surface oil.',
          'Counter wrapping for anything handed over warm.',
        ],
        outro: 'One sheet size and one printed design covers most of these uses in a single kitchen.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Grade', 'Greaseproof, weight confirmed against your application'],
          ['Sheet size', 'Cut to your item plus the fold allowance'],
          ['Print', 'One or two colours; heavy coverage is rarely worth the cost'],
          ['Ink', 'Specified for direct food contact'],
          ['Supply', 'Flat sheets or reams; interleaved options available'],
        ],
        note: 'Paper weights and ink systems are confirmed in writing per enquiry.',
      },
    ],
    faqs: [
      {
        q: 'How big should the sheet be?',
        a: 'Measure your item at its widest, then add enough on each side to fold under and tuck. For a burger that usually means a sheet noticeably larger than the burger looks.',
      },
      {
        q: 'Can greaseproof paper be printed all over?',
        a: 'It can, though a full flood of ink looks patchy on an absorbent surface and adds real cost to a product bought for its low unit price. A repeated one or two colour design usually looks better.',
      },
      {
        q: 'Is printed greaseproof safe against hot food?',
        a: 'When both the paper grade and the ink system are specified for direct contact, yes. Tell us what the paper touches and how hot it is, and we confirm the specification on your quote.',
      },
      {
        q: 'How many colours can we print on greaseproof?',
        a: 'One or two reproduce reliably. More is technically possible but adds cost quickly on a product bought for its low unit price.',
      },
      {
        q: 'Will ink spread on the sheet?',
        a: 'Slightly, because paper is absorbent. Fine lines thicken and small reversed-out type can close up, so designs stay simple.',
      },
      {
        q: 'What weight of greaseproof do we need?',
        a: 'It depends on what the sheet holds and for how long. Tell us the food and the holding time and we will specify a grade.',
      },
      {
        q: 'Can we use it as a tray liner?',
        a: 'Yes, and lining a tray so it can be wiped rather than binned is one of the most common uses alongside wrapping.',
      },
      {
        q: 'Does greaseproof work with hot food?',
        a: 'It is designed for it. Where paper also sees oven heat, parchment is the grade rather than greaseproof.',
      },
      {
        q: 'How are sheets supplied?',
        a: 'Flat sheets or reams, with interleaved options where staff need to take one at a time during service.',
      },
      {
        q: 'Will printing show through to the food?',
        a: 'Not with a food-contact ink system, which we confirm on the quote rather than assuming from the paper grade alone.',
      },
    ],
    related: ['custom-fish-chips-paper', 'custom-deli-paper', 'custom-printed-fry-paper', 'custom-food-basket-liner'],
  },

  {
    slug: 'custom-fish-chips-paper',
    name: 'Custom Fish & Chip Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Fish & Chip Paper UK | Custom Chip Shop Wrap',
    seoDescription:
      'Custom printed fish and chip paper in the traditional two-layer wrap, sized for a full portion with the fold already allowed for.',
    h1: 'Custom Fish and Chip Paper',
    cardBlurb: 'Traditional two-layer chip shop wrap, sized for a full portion.',
    enquiryLabel: 'fish and chip paper',
    intro: [
      'The traditional chip shop wrap is two layers: a greaseproof inner sheet against the food and a printed outer sheet that takes the handling.',
      'It works because each sheet does one job well, and it is still the most practical way to wrap a hot portion of fish and chips.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Two-Layer Wrap Against a Single Sheet',
        columns: ['Two layers', 'Single sheet'],
        rows: [
          ['Grease control', 'Inner sheet takes it; outer stays clean', 'One sheet does both, and shows it'],
          ['Print quality', 'Outer sheet can be a better printing stock', 'Compromised by grease resistance'],
          ['Cost', 'Two sheets per portion', 'One'],
          ['Heat retention', 'Better — two layers insulate', 'Less'],
          ['Speed at the counter', 'Slightly slower', 'Quicker'],
        ],
        outro: 'Busy shops sometimes move to a single heavier sheet for speed and accept the trade.',
      },
      {
        kind: 'prose',
        heading: 'Print the Outer Sheet, Not the Inner One',
        body: [
          'The inner sheet is soaked in oil within a minute and nothing printed on it survives being seen. Printing it is money spent on something nobody looks at.',
          'The outer sheet stays clean and is what the customer carries home, so that is where the design belongs.',
        ],
        link: {
          href: '/french-fries-holder-paper/',
          anchor: 'folded holder papers for chips alone',
          sentence: 'For chips without fish, {link} use a smaller sheet and a simpler fold.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do we need two sheets or will one do?',
        a: 'One heavier greaseproof sheet works and is faster at the counter. Two layers keep the printed outer sheet clean and hold heat better, which is why the traditional wrap persists.',
      },
      {
        q: 'What sheet size suits a standard fish supper?',
        a: 'Larger than most people first order, because the fold takes a surprising amount of paper. Wrap a real portion with a test sheet before committing to a size.',
      },
      {
        q: 'Which sheet should be printed?',
        a: 'The outer one. The inner sheet is soaked in oil within a minute, so nothing printed on it survives being seen.',
      },
      {
        q: 'What size suits a fish supper?',
        a: 'Larger than most people first order, because the fold takes a surprising amount of paper. Wrap a real portion with a test sheet.',
      },
      {
        q: 'Does the traditional wrap keep food hotter?',
        a: 'Two layers insulate better than one, which is part of why the format persists alongside the appearance.',
      },
      {
        q: 'Can we print a newspaper-style design?',
        a: 'It is a common request and reproduces well in one colour on a light sheet. Send the artwork and we will check it at size.',
      },
      {
        q: 'How fast can staff wrap with two sheets?',
        a: 'Slightly slower than one, which is why busy shops sometimes move to a single heavier sheet and accept the trade.',
      },
      {
        q: 'Will vinegar affect the paper?',
        a: 'Acid works on coatings differently from oil. Tell us if vinegar goes on before wrapping and we will factor it in.',
      },
      {
        q: 'Can we use the outer sheet alone for chips?',
        a: 'Yes, and many shops do for a chips-only order, keeping the two-layer wrap for fish suppers.',
      },
      {
        q: 'Can we order inner and outer sheets together?',
        a: 'Yes, and running both in one job is the usual route. Only the outer sheet needs printing.',
      },
    ],
    related: ['custom-greaseproof-paper', 'french-fries-holder-paper', 'custom-printed-fry-paper', 'custom-food-basket-liner'],
  },

  {
    slug: 'custom-printed-fry-paper',
    name: 'Custom Printed Fry Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Fry Paper UK | Custom Chip Basket Sheets',
    seoDescription:
      'Printed fry papers used as basket and box liners for chips and fried food, so containers are wiped rather than washed.',
    h1: 'Custom Printed Fry Paper',
    cardBlurb: 'Liner sheets for baskets and boxes serving chips and fried food.',
    enquiryLabel: 'printed fry paper',
    intro: [
      'A fry paper is a liner rather than a wrap. It sits inside a basket or a box, takes the oil, and is thrown away so the container can be reused.',
      'That reuse is the whole economic argument for it.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Liner Is Cheaper than Washing a Basket',
        body: [
          'A metal or plastic basket used without a liner has to be washed between customers. With a liner it is wiped and reused immediately.',
          'Across a busy service that saves genuine labour, which is why the sheet pays for itself several times over.',
        ],
        link: {
          href: '/custom-food-basket-liner/',
          anchor: 'liners cut to a specific basket shape',
          sentence: 'Where baskets are a fixed size, {link} fit more neatly than a square sheet.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Getting the Sheet Size Right',
        items: [
          'It should cover the base and rise up the sides, not lie flat across the top.',
          'Corners that stick out look deliberate; ones that flop over look careless.',
          'Square sheets are cheapest to cut; shaped ones fit better.',
          'A sheet slightly too large is far better than one slightly too small.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should a fry paper be shaped or square?',
        a: 'Square is cheaper to produce and works acceptably in most baskets. A shaped liner fits neatly and looks more considered, which matters if the basket goes to a table.',
      },
      {
        q: 'Does the liner need to be greaseproof?',
        a: 'For chips, yes — that is the point of it. A plain paper soaks through and the oil reaches the basket, which removes the reason for using a liner at all.',
      },
      {
        q: 'Should a liner be shaped or square?',
        a: 'Square is cheaper to produce and works in most baskets. A shaped liner fits neatly, which matters if the basket goes to a table.',
      },
      {
        q: 'How big should the sheet be?',
        a: 'Enough to cover the base and rise up the sides. A sheet lying flat across the top defeats the purpose.',
      },
      {
        q: 'Does a liner really save money?',
        a: 'It replaces washing a basket between customers with a wipe, which across a busy service is real labour rather than a marginal saving.',
      },
      {
        q: 'Can we print full colour?',
        a: 'One or two colours suits the price point and the absorbent surface. Heavy coverage looks patchy and costs more.',
      },
      {
        q: 'Do liners work in boxes as well?',
        a: 'Yes, and using the same printed sheet in a basket and a box keeps the look consistent across service styles.',
      },
      {
        q: 'Will the corners stick out?',
        a: 'Deliberately, on a square liner. Corners that stand up look intentional; ones that flop over look careless.',
      },
      {
        q: 'How are they supplied?',
        a: 'Flat sheets in reams. Interleaved packs are worth asking about if staff take one at a time during a rush.',
      },
      {
        q: 'Can we order liners in two sizes?',
        a: 'Yes, and most kitchens have baskets in two sizes. Running both in one job shares the setup.',
      },
    ],
    related: ['custom-food-basket-liner', 'custom-greaseproof-paper', 'custom-fish-chips-paper', 'custom-printed-hot-paper'],
  },

  {
    slug: 'custom-food-basket-liner',
    name: 'Custom Food Basket Liners',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Basket Liners UK | Custom Food Basket Paper',
    seoDescription:
      'Printed basket liners cut to the exact footprint of your own serving baskets, for UK pubs, diners and casual dining rooms.',
    h1: 'Custom Food Basket Liners',
    cardBlurb: 'Liners cut to the footprint of your own serving baskets.',
    enquiryLabel: 'food basket liners',
    intro: [
      'A basket liner is the one printed item that sits directly under the food in a photograph. In a pub or a diner it is seen more often than the menu.',
      'Cutting it to the basket rather than using a square sheet is what makes it look intentional.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Shape It to the Basket You Already Own',
        body: [
          'Most kitchens have baskets in one or two sizes. A liner cut to that footprint sits flat, covers the base and rises just enough up the sides.',
          'Send us a basket, or its internal dimensions, and the liner is cut to it rather than trimmed to fit by staff.',
        ],
        link: {
          href: '/custom-printed-fry-paper/',
          anchor: 'general fry papers for mixed basket sizes',
          sentence: 'If your basket sizes vary, {link} are the more flexible option.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Design Points for a Liner',
        items: [
          'The centre is covered by food, so branding belongs around the edges.',
          'One or two colours reproduce reliably on an absorbent sheet.',
          'A pattern reads better under food than a single large logo.',
          'Pale designs disappear under oil marks; mid tones hold up better.',
        ],
        outro: 'Photograph a test print with real food on it before approving a design.',
      },
    ],
    faqs: [
      {
        q: 'Can liners be cut to an unusual basket shape?',
        a: 'Yes, provided the shape can be cut cleanly. Send a basket or its internal dimensions and we will produce a liner that sits properly rather than one that has to be folded in.',
      },
      {
        q: 'Where should the logo sit on a liner?',
        a: 'Around the edge. The centre disappears under the food within seconds, so anything placed there is only seen by the person washing up.',
      },
      {
        q: 'Can liners be cut to an unusual basket?',
        a: 'Yes, provided the shape cuts cleanly. Send a basket or its internal dimensions and we will produce a liner that sits properly.',
      },
      {
        q: 'Where should the logo sit?',
        a: 'Around the edge. The centre disappears under food within seconds, so anything there is only seen by whoever washes up.',
      },
      {
        q: 'What paper suits a basket liner?',
        a: 'Greaseproof for fried food, a lighter sheet for dry items. It follows the food rather than the basket.',
      },
      {
        q: 'Will a pale design show oil marks?',
        a: 'Yes, and mid tones hold up better. Photograph a test print with real food on it before approving a design.',
      },
      {
        q: 'Do these suit a pub?',
        a: 'They are frequently bought for pub and diner service, where the basket goes to a table and the liner is in every photograph.',
      },
      {
        q: 'Can we run two liner sizes?',
        a: 'Yes, and most kitchens have baskets in two sizes. Running both in one job shares the setup between them.',
      },
      {
        q: 'How many colours should we use?',
        a: 'One or two reproduce reliably on an absorbent sheet. A pattern in one colour usually reads better than a detailed mark.',
      },
      {
        q: 'Will the liner slide in the basket?',
        a: 'Cut to the footprint it sits still. An oversized sheet folded in is what slides and looks untidy.',
      },
    ],
    related: ['custom-printed-fry-paper', 'custom-greaseproof-paper', 'custom-placemats', 'custom-pizza-liner'],
  },

  {
    slug: 'custom-printed-hot-paper',
    name: 'Custom Printed Hot Food Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Hot Food Paper UK | Heat Resistant Wrap',
    seoDescription:
      'Printed papers specified for hot-held and heated food, where an ordinary greaseproof sheet dries out over a service period.',
    h1: 'Custom Printed Hot Food Paper',
    cardBlurb: 'Papers specified for hot-held and heated food applications.',
    enquiryLabel: 'printed hot food paper',
    intro: [
      'Most food paper is specified against a hot item wrapped and handed over. Paper that sits in a hot cabinet for an hour, or goes back under heat, is a harder problem.',
      'This page is for those applications rather than for ordinary counter wrapping.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Sustained Heat Is Different from Hot Food',
        body: [
          'A burger wrapped and handed over exposes the paper to heat for a couple of minutes. A pasty held in a heated cabinet exposes it for hours.',
          'Over that time an ordinary sheet dries out, discolours and loses strength, which is why hot-held applications need a grade specified for it.',
        ],
        link: {
          href: '/custom-parchment-paper/',
          anchor: 'parchment for applications involving an oven',
          sentence: 'Where the paper actually goes into heat rather than beside it, {link} is the relevant grade.',
        },
      },
      {
        kind: 'callout',
        heading: 'Temperature and Holding Time Confirmed per Specification',
        body: 'Heat tolerance varies between paper grades, and a single published figure would be misleading. Tell us the temperature and how long the paper is held at it, and we will confirm a suitable grade in writing on your quote.',
        pending: true,
      },
      {
        kind: 'bullets',
        heading: 'Applications That Need This',
        items: [
          'Hot cabinets holding pasties, sausage rolls and pies through a service.',
          'Heat lamps over a pass where wrapped items wait.',
          'Food reheated in its wrapping rather than unwrapped first.',
          'Long delivery routes where food stays hot in an insulated bag.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can printed paper go under a heat lamp?',
        a: 'With a grade specified for it, yes. An ordinary greaseproof sheet dries and discolours over a service, so it is worth specifying rather than assuming.',
      },
      {
        q: 'Is the ink affected by heat?',
        a: 'Ink systems for direct food contact are specified against the conditions they will see. Tell us the temperature and duration and we will confirm the system rather than giving a general assurance.',
      },
      {
        q: 'What is different about hot-held paper?',
        a: 'Exposure time. A wrapped burger sees heat for minutes; a pasty in a cabinet sees it for hours, which is a different demand.',
      },
      {
        q: 'Do we need this for a normal takeaway?',
        a: 'Usually not. Standard greaseproof handles food wrapped and handed over. Hot-holding is the case that needs more.',
      },
      {
        q: 'Will the paper discolour?',
        a: 'A grade specified for the conditions should not within its intended holding time. That is what the specification is protecting against.',
      },
      {
        q: 'Can we use it for reheating?',
        a: 'Tell us if food is reheated in its wrapping, because that is a different requirement again from being held hot.',
      },
      {
        q: 'Does it cost more than greaseproof?',
        a: 'Yes, which is why it is specified where the heat requires it rather than as a general upgrade.',
      },
      {
        q: 'What should we tell you when enquiring?',
        a: 'The temperature, how long the paper is held at it, and whether it is in a cabinet, under a lamp or in an oven.',
      },
      {
        q: 'Can we use this for a hot cabinet only?',
        a: 'That is its main use. For food wrapped and handed straight over, standard greaseproof is adequate and cheaper.',
      },
      {
        q: 'Do you supply this in rolls?',
        a: 'Sheets are usual for printed work. Tell us if a roll format is essential and we will confirm what can be produced.',
      },
    ],
    related: ['custom-parchment-paper', 'custom-greaseproof-paper', 'custom-pizza-liner', 'custom-food-basket-liner'],
  },

  {
    slug: 'custom-parchment-paper',
    name: 'Custom Parchment Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Parchment Paper UK | Custom Baking Paper',
    seoDescription:
      'Custom printed parchment paper for baking, lining and oven use, where greaseproof paper would not tolerate the heat involved.',
    h1: 'Custom Printed Parchment Paper',
    cardBlurb: 'Baking-grade paper for oven use and lining, printed to your design.',
    enquiryLabel: 'printed parchment paper',
    intro: [
      'Parchment is treated to tolerate oven temperatures, which is what separates it from greaseproof. Bakers use it for lining trays and for anything that goes into heat.',
      'Printing it is less common than printing greaseproof, and worth doing where the paper stays with the product after baking.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Parchment Against Greaseproof',
        columns: ['Parchment', 'Greaseproof'],
        rows: [
          ['Oven use', 'Tolerates baking temperatures', 'Not suitable'],
          ['Non-stick', 'Naturally releases baked goods', 'Sticks to sugar and glaze'],
          ['Grease resistance', 'Good', 'Very good'],
          ['Cost', 'Higher', 'Lower'],
          ['Printing', 'Possible; the surface is less absorbent', 'Straightforward'],
        ],
        outro: 'For anything that never sees an oven, greaseproof does the job for less.',
      },
      {
        kind: 'prose',
        heading: 'Printing Paper That Goes into an Oven',
        body: [
          'Where a printed sheet is baked with the product, the ink system has to be specified for that, not just for food contact.',
          'Where the printed sheet is added after baking — a wrap around a finished loaf, for instance — the requirement is much simpler.',
        ],
        link: {
          href: '/custom-bread-bags/',
          anchor: 'bags for finished bakery products',
          sentence: 'For packaging that goes on after baking, {link} are usually the better format.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can printed parchment go in the oven?',
        a: 'Only where the ink system is specified for it. Tell us whether the printed sheet is baked with the product or added afterwards, because the two are very different requirements.',
      },
      {
        q: 'Is parchment worth the extra cost for wrapping?',
        a: 'For plain wrapping, generally not — greaseproof performs well and costs less. Parchment earns its cost where oven heat or non-stick release is genuinely needed.',
      },
      {
        q: 'Is parchment worth it for plain wrapping?',
        a: 'Generally not. Greaseproof performs well and costs less. Parchment earns its cost where oven heat or non-stick release is needed.',
      },
      {
        q: 'What makes parchment non-stick?',
        a: 'It is treated so baked goods release rather than adhering, which is why bakers line trays with it rather than with greaseproof.',
      },
      {
        q: 'Does parchment resist grease as well?',
        a: 'Well, though greaseproof is denser and marginally better at oil specifically. Parchment buys heat tolerance instead.',
      },
      {
        q: 'Can we print full colour?',
        a: 'The surface is less absorbent than greaseproof, so print sits differently. One or two colours remains the practical choice.',
      },
      {
        q: 'Do bakers use printed parchment?',
        a: 'Where the sheet stays with the finished product, yes. Where it only lines a tray, plain parchment is the sensible spend.',
      },
      {
        q: 'What sizes are available?',
        a: 'Cut to your tray or your product. Send the dimensions and we will confirm what can be produced at that size.',
      },
      {
        q: 'Is it suitable for cold food?',
        a: 'It is, though you would be paying for heat tolerance you do not need. A lighter sheet is cheaper for cold.',
      },
      {
        q: 'Do you supply this in sheets cut to a tray?',
        a: 'Yes. Send the tray dimensions and we will confirm what can be produced at that size.',
      },
    ],
    related: ['custom-greaseproof-paper', 'custom-printed-hot-paper', 'parchment-paper-cups', 'custom-pastry-bags'],
  },

  {
    slug: 'custom-wax-paper',
    name: 'Custom Wax Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Wax Paper UK | Custom Waxed Food Sheets',
    seoDescription:
      'Custom printed waxed paper for cold and ambient food, where a moisture barrier matters and no heat is anywhere near it.',
    h1: 'Custom Printed Wax Paper',
    cardBlurb: 'Waxed sheets for cold and ambient food where moisture is the issue.',
    enquiryLabel: 'printed wax paper',
    intro: [
      'Waxed paper carries a coating that repels moisture very effectively and softens under heat. Those two facts define exactly where it belongs.',
      'It is a cold and ambient product, and using it against hot food is the mistake to avoid.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Moisture Out, Heat Is a Problem',
        body: [
          'The wax coating stops moisture passing through the sheet, which suits cold sandwiches, cheese, confectionery and anything that would go soggy in plain paper.',
          'Warm it and the coating softens, transfers to the food, and stops doing its job. It is not a matter of degree — it is the wrong material for hot applications.',
        ],
        link: {
          href: '/custom-greaseproof-paper/',
          anchor: 'greaseproof for hot and oily food',
          sentence: 'For anything warm, {link} is the correct grade instead.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where Waxed Paper Suits',
        items: [
          'Cold sandwiches and wraps prepared ahead.',
          'Confectionery and toffee, where stickiness is the issue.',
          'Cheese and deli items kept chilled.',
          'Interleaving between layers of a chilled product.',
        ],
        outro: 'Anywhere hot food might be wrapped by mistake, it is worth keeping stock physically separate.',
      },
    ],
    faqs: [
      {
        q: 'Can waxed paper wrap hot food?',
        a: 'No. The coating softens with heat, transfers onto the food and stops working. For hot items, greaseproof or parchment is the right choice.',
      },
      {
        q: 'Does waxed paper print well?',
        a: 'It does, though the coating means ink sits on the surface rather than soaking in, so it can be more prone to scuffing. Simple designs in one or two colours hold up most reliably.',
      },
      {
        q: 'What is it genuinely good at?',
        a: 'Repelling moisture. Cold sandwiches, confectionery, cheese and anything that would go soggy in plain paper.',
      },
      {
        q: 'Is it the same as greaseproof?',
        a: 'No. Greaseproof resists oil through dense fibres; waxed paper resists moisture through a coating, and behaves differently under heat.',
      },
      {
        q: 'Can we use it for interleaving?',
        a: 'Yes. Interleaving chilled products is one of the main uses alongside wrapping, because a sheet between portions stops them freezing into a single block that has to be prised apart.',
      },
      {
        q: 'Will it affect taste?',
        a: 'With cold food, generally not. With anything warm the coating can become noticeable, which is another reason to keep uses separate.',
      },
      {
        q: 'How is it supplied?',
        a: 'Flat sheets or reams, with interleaved options where staff take one at a time at a counter.',
      },
      {
        q: 'Is it recyclable?',
        a: 'A wax coating changes the disposal route and acceptance depends on local collection. We confirm the material rather than the outcome.',
      },
      {
        q: 'Can we use waxed paper for cheese?',
        a: 'For short-term wrapping, yes, though cheese paper manages moisture better over several days. It depends how long it is held.',
      },
      {
        q: 'Does the wax coating affect printing?',
        a: 'It does, which is why printing happens before waxing rather than after. Tell us at quote stage that the sheet is to be waxed so the ink and the coating are specified together.',
      },
    ],
    related: ['custom-greaseproof-paper', 'custom-cheese-paper', 'custom-glassine-paper', 'wax-paper-cups'],
  },

  {
    slug: 'custom-glassine-paper',
    name: 'Custom Glassine Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Glassine Paper UK | Custom Translucent Sheets',
    seoDescription:
      'Printed glassine paper: smooth, translucent and grease resistant, used for confectionery, bakery wrapping and interleaving.',
    h1: 'Custom Printed Glassine Paper',
    cardBlurb: 'Smooth translucent sheets for confectionery, bakery and interleaving.',
    enquiryLabel: 'printed glassine paper',
    intro: [
      'Glassine is greaseproof taken further — calendered until the surface is smooth and the sheet is translucent. That translucency is why people choose it.',
      'It lets a product show through the wrapping, which suits confectionery and bakery items sold on appearance.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Translucency Is the Reason to Use It',
        body: [
          'A wrapped item in glassine is visible as a shape and a colour without being exposed. That reads as considered in a way an opaque wrap does not.',
          'It also means a simple printed pattern over the top creates depth, because the product shows through the gaps.',
        ],
        link: {
          href: '/custom-candy-bags/',
          anchor: 'bags in the same translucent material',
          sentence: 'The same effect in bag form is covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Common Applications',
        items: [
          'Confectionery and chocolate wrapping where the product should be glimpsed.',
          'Bakery interleaving between layers of pastry or biscuits.',
          'Sandwich and deli wrapping in a premium setting.',
          'Lining boxes where a smooth, non-stick surface is wanted.',
        ],
        outro: 'It is more expensive than plain greaseproof, so it tends to be used where appearance justifies it.',
      },
    ],
    faqs: [
      {
        q: 'Is glassine the same as greaseproof?',
        a: 'It is greaseproof processed further — calendered until it is smooth and translucent. It resists grease similarly and costs more, so it is chosen for the appearance rather than the performance.',
      },
      {
        q: 'How does printing look on a translucent sheet?',
        a: 'Ink sits on the surface and the product shows through the unprinted areas, which creates depth. Designs with plenty of open space use that better than heavy coverage does.',
      },
      {
        q: 'Why choose it over greaseproof?',
        a: 'For the translucency. The product shows through, which sells confectionery and bakery items in a way an opaque wrap does not.',
      },
      {
        q: 'How does printing look on it?',
        a: 'Ink sits on the surface and the product shows through the unprinted areas, which creates depth. Open designs use that better than heavy coverage.',
      },
      {
        q: 'Does it cost much more?',
        a: 'Enough to notice, which is why it is chosen where appearance justifies it rather than as a general-purpose sheet.',
      },
      {
        q: 'Can we use it for interleaving?',
        a: 'It is one of the main uses, particularly between layers of pastry or biscuits where a non-stick smooth surface matters.',
      },
      {
        q: 'Will it hold up against oil?',
        a: 'Well, comparably to greaseproof. The processing that makes it translucent does not reduce its grease resistance.',
      },
      {
        q: 'Do chocolatiers use it?',
        a: 'Frequently, because a glimpse of the product through the wrap is part of the presentation.',
      },
      {
        q: 'What sizes are available?',
        a: 'Cut to your product. Send the item dimensions plus the fold allowance and we will confirm what can be produced.',
      },
      {
        q: 'Can we order glassine bags as well as sheets?',
        a: 'Translucent bags are a related product. Tell us both requirements and we will price them together.',
      },
    ],
    related: ['custom-wax-paper', 'custom-flower-bouquet-paper', 'custom-candy-bags', 'custom-pastry-bags'],
  },

  {
    slug: 'custom-deli-paper',
    name: 'Custom Deli Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Deli Paper UK | Custom Counter Sheets',
    seoDescription:
      'Printed deli papers for counter service. Lightweight interleaved sheets that come away one at a time as staff pick up goods.',
    h1: 'Custom Printed Deli Paper',
    cardBlurb: 'Lightweight counter sheets for picking up and wrapping cold goods.',
    enquiryLabel: 'printed deli paper',
    intro: [
      'Deli paper does two jobs at a counter: it is what staff pick food up with, and it is what the food goes home in. Both happen in about four seconds.',
      'That makes handling — how easily one sheet comes off a stack — more important than almost anything else.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'One Sheet at a Time, with One Hand',
        body: [
          'A member of staff at a deli counter is holding tongs or a knife. They need a single sheet to come away cleanly from the stack with the other hand.',
          'Interleaved or pop-up presentation solves that. A loose ream does not, and it slows every transaction slightly.',
        ],
        link: {
          href: '/custom-cheese-paper/',
          anchor: 'papers specified for cheese counters',
          sentence: 'Cheese has particular requirements, covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Deli Paper Has to Handle',
        items: [
          'Cold, damp goods — cured meat, cheese, olives, salads.',
          'Being folded around an irregular shape rather than a neat item.',
          'Direct hand contact from staff, so hygiene matters.',
          'Sitting in a chiller after wrapping, sometimes for hours.',
        ],
        outro: 'Lightweight sheets suit this better than heavy ones, which are stiff to fold around soft goods.',
      },
    ],
    faqs: [
      {
        q: 'How should deli paper be supplied?',
        a: 'Interleaved or in a pop-up dispenser, so one sheet comes free with one hand. A flat ream means staff put down their tongs to separate sheets, which slows a busy counter.',
      },
      {
        q: 'Does deli paper need to be greaseproof?',
        a: 'For cured meats and cheese, a grease-resistant grade is worth having. For dry goods and salads a lighter plain sheet is adequate and cheaper.',
      },
      {
        q: 'What size sheet suits a deli counter?',
        a: 'Large enough to pick up and wrap in one motion. Measure the largest item you handle rather than the average.',
      },
      {
        q: 'Can we print in two colours?',
        a: 'Yes, and a repeating pattern in one or two colours reads well on a lightweight absorbent sheet.',
      },
      {
        q: 'Will the print rub off on food?',
        a: 'Not with a food-contact ink system, which we confirm on the quote alongside the paper grade.',
      },
      {
        q: 'Do these suit a farm shop?',
        a: 'They do, and a printed deli sheet is one of the cheapest branded surfaces a farm shop counter can carry.',
      },
      {
        q: 'How light should the paper be?',
        a: 'Light enough to fold easily around soft goods. Heavy stock is stiff and awkward at a counter where speed matters.',
      },
      {
        q: 'Can we use the same sheet for wrapping and lining?',
        a: 'Often, and many counters do. Tell us both uses and we will specify a grade that suits the more demanding one.',
      },
      {
        q: 'Can the same sheet wrap and line?',
        a: 'Often, and many counters use one grade for both. Tell us both uses and we will specify against the more demanding one.',
      },
      {
        q: 'Does deli paper need to be food-grade?',
        a: 'It touches food directly, so yes, both the paper grade and the ink system. We confirm both on your quote.',
      },
    ],
    related: ['custom-cheese-paper', 'custom-butcher-paper', 'custom-sandwich-paper', 'custom-greaseproof-paper'],
  },

  {
    slug: 'custom-butcher-paper',
    name: 'Custom Butcher Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Butcher Paper UK | Custom Meat Wrap',
    seoDescription:
      'Printed butcher paper for meat counters, in a heavier stock that copes with weight, moisture and awkwardly shaped joints.',
    h1: 'Custom Printed Butcher Paper',
    cardBlurb: 'Heavier wrap for meat counters, sized for weight and awkward shapes.',
    enquiryLabel: 'printed butcher paper',
    intro: [
      'Meat is heavier, wetter and more awkwardly shaped than almost anything else wrapped at a counter. Butcher paper is heavier than deli paper for all three reasons.',
      'A joint wrapped in a light sheet tears before it reaches the customer\'s bag.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Weight and Moisture Together',
        body: [
          'A wet sheet loses strength, and a heavy item concentrates load at the fold. Those two combine badly on a light paper.',
          'A heavier grade holds the weight even once damp, which is the practical requirement rather than a preference.',
        ],
        link: {
          href: '/custom-meat-packaging-bags/',
          anchor: 'bags for pre-packed meat',
          sentence: 'Where meat is sold pre-packed rather than wrapped to order, {link} suit better.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Butcher Counter Requirements',
        items: [
          'Enough strength to carry a joint without tearing at the fold.',
          'Moisture resistance so blood does not soak straight through.',
          'A surface that takes a marker pen for weights and cuts.',
          'Sheet sizes covering both a few sausages and a large joint.',
        ],
        outro: 'Two sheet sizes usually cover a butcher counter; three is rarely needed.',
      },
    ],
    faqs: [
      {
        q: 'Will a marker pen write on printed butcher paper?',
        a: 'On an uncoated area, yes. If your team writes weights and cuts on the wrap, leave part of the sheet unprinted and uncoated so a pen takes properly.',
      },
      {
        q: 'Does blood soak through butcher paper?',
        a: 'Through a light sheet, yes, and quickly. A heavier moisture-resistant grade holds it for the length of a journey home, which is what the customer needs.',
      },
      {
        q: 'Will a marker pen write on it?',
        a: 'On an uncoated area, yes. If your team writes weights and cuts on the wrap, leave part of the sheet unprinted and uncoated.',
      },
      {
        q: 'Does blood soak through?',
        a: 'Through a light sheet, quickly. A heavier moisture-resistant grade holds it for the journey home, which is what the customer needs.',
      },
      {
        q: 'What weight do we need?',
        a: 'Heavier than deli paper, because meat is heavier and wetter and concentrates load at the fold.',
      },
      {
        q: 'How many sheet sizes should we hold?',
        a: 'Two usually covers a butcher counter — one for a few sausages and one for a large joint. Three is rarely needed.',
      },
      {
        q: 'Can we print full colour?',
        a: 'One or two colours suits the stock and the price point. Heavy coverage on an absorbent sheet looks patchy and costs more.',
      },
      {
        q: 'Is this suitable for freezing?',
        a: 'Freezer paper carries a moisture barrier for that specifically. Butcher paper is a counter wrap rather than a freezer wrap.',
      },
      {
        q: 'Will the wrap tear at the fold?',
        a: 'Not on an appropriate weight. Tearing at the fold is the usual sign the paper is too light for the joint.',
      },
      {
        q: 'Do these suit a farm shop counter?',
        a: 'They do, and a printed butcher wrap carries branding into the customer\'s kitchen more effectively than a bag does.',
      },
    ],
    related: ['custom-deli-paper', 'custom-meat-packaging-bags', 'custom-freezer-paper', 'custom-cheese-paper'],
  },

  {
    slug: 'custom-cheese-paper',
    name: 'Custom Cheese Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Cheese Paper UK | Custom Cheesemonger Wrap',
    seoDescription:
      'Printed cheese paper that lets a cheese breathe while resisting fat, for UK cheesemongers, delis and farm shop counters.',
    h1: 'Custom Printed Cheese Paper',
    cardBlurb: 'Breathable wrap that lets cheese respire while resisting fat.',
    enquiryLabel: 'printed cheese paper',
    intro: [
      'Cheese is alive in a way most wrapped food is not. Sealed in something airtight it sweats and spoils; left open it dries out.',
      'Cheese paper solves that by being breathable on one side and fat-resistant on the other, which is a genuinely different specification from ordinary food paper.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Breathability Is the Point',
        body: [
          'A cheese needs to release moisture slowly while being protected from drying out completely. That is a balance rather than a barrier.',
          'Wrapping cheese in plain greaseproof or in film both cause problems, which is why specialist cheesemongers use a paper made for it.',
        ],
        link: {
          href: '/custom-cheese-packaging-bags/',
          anchor: 'bags for pre-packed cheese',
          sentence: 'For retail packs rather than counter service, {link} are the relevant format.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Cheesemongers Ask For',
        items: [
          'A wrap that lets the cheese breathe without drying it out.',
          'Resistance to the fat that comes out of a mature cheese.',
          'Space to write the variety and the date by hand.',
          'A look that suits a specialist counter rather than a supermarket.',
        ],
        outro: 'Leave an unprinted panel if staff label by hand rather than with a sticker.',
      },
    ],
    faqs: [
      {
        q: 'Can we wrap cheese in ordinary greaseproof?',
        a: 'You can, and it will hold the fat, but it does not manage moisture well. Cheese wrapped in it tends to sweat, which affects the surface over a few days.',
      },
      {
        q: 'Should there be a blank area for writing?',
        a: 'If staff write the variety and date by hand, yes. Leave that panel unprinted and uncoated, because ink from a marker will not take reliably on a printed or coated surface.',
      },
      {
        q: 'Why does cheese need to breathe?',
        a: 'Sealed airtight it sweats and the surface spoils; fully open it dries and cracks. Cheese paper sits between the two.',
      },
      {
        q: 'Does this suit every cheese?',
        a: 'A hard aged cheese and a soft rind need different things. Tell us what you cut and we will specify against it.',
      },
      {
        q: 'Can we print in two colours?',
        a: 'Yes, and a restrained design suits a specialist counter better than heavy coverage. Leave room for the handwritten panel.',
      },
      {
        q: 'How long will cheese keep in it?',
        a: 'That is a food question for your own judgement rather than a packaging claim. The paper manages moisture; it does not set shelf life.',
      },
      {
        q: 'Do farm shops use this?',
        a: 'Frequently, alongside cheesemongers and delis. Anywhere cheese is cut to order rather than sold pre-packed.',
      },
      {
        q: 'What sheet size do we need?',
        a: 'Enough to wrap your largest cut with an overlap. Measure a typical wedge and add the fold rather than guessing.',
      },
      {
        q: 'Can we use one paper for hard and soft cheese?',
        a: 'It is a compromise. Specialist counters often hold two grades, since a soft rind and an aged hard cheese need different things.',
      },
      {
        q: 'Should the paper be printed both sides?',
        a: 'One side is against the cheese. Printing the outer face is what the customer sees, and the inner face rarely justifies it.',
      },
    ],
    related: ['custom-deli-paper', 'custom-cheese-packaging-bags', 'custom-butcher-paper', 'custom-wax-paper'],
  },

  {
    slug: 'custom-sandwich-paper',
    name: 'Custom Sandwich Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Sandwich Paper UK | Custom Sandwich Wrap',
    seoDescription:
      'Printed sandwich wrap sized to fold and tuck around a made sandwich without tape, for UK cafés, delis and lunch counters.',
    h1: 'Custom Printed Sandwich Paper',
    cardBlurb: 'Wrap sized to fold and tuck around a made-to-order sandwich.',
    enquiryLabel: 'printed sandwich paper',
    intro: [
      'A wrapped sandwich has to survive a bag, a commute and being put down on a desk. The wrap has to hold it closed without being fought open at lunchtime.',
      'Sheet size and fold pattern do most of that work.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Fold Has to Hold Without Tape',
        body: [
          'A sandwich wrapped and then taped is secure and irritating to open. A well-sized sheet folded properly holds itself closed with no tape at all.',
          'That needs enough paper to tuck underneath, which is more than the sandwich footprint suggests.',
        ],
        link: {
          href: '/custom-sandwich-sleeves/',
          anchor: 'board sleeves for chilled retail sandwiches',
          sentence: 'For pre-packed retail rather than made-to-order, {link} present better in a cabinet.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Practical Points',
        items: [
          'Size to a made sandwich, not to the bread.',
          'Grease resistance matters for anything with mayonnaise or hot fillings.',
          'A printed area on the outer face is what the customer sees at their desk.',
          'A sticker across the fold both seals and carries the filling name.',
        ],
        outro: 'If you use a labelling sticker, leave a clear area for it in the artwork.',
      },
    ],
    faqs: [
      {
        q: 'How much bigger than the sandwich should the sheet be?',
        a: 'Enough to fold under on all sides, which is usually noticeably more than people expect. Wrap a real sandwich with a test sheet before settling on a size.',
      },
      {
        q: 'Do we need tape to hold the wrap closed?',
        a: 'Not with a correctly sized sheet and a proper fold. Many sites use a printed sticker instead, which seals the wrap and carries the filling name at the same time.',
      },
      {
        q: 'Do we need tape to close the wrap?',
        a: 'Not with a correctly sized sheet and a proper fold. Many counters use a printed sticker instead, which also carries the filling name.',
      },
      {
        q: 'Does sandwich paper need to be greaseproof?',
        a: 'For mayonnaise-based and hot fillings, yes. Dry fillings are far less demanding and can use a lighter, cheaper sheet.',
      },
      {
        q: 'Can customers eat from the wrap?',
        a: 'That is one of its advantages over a bag, and why office lunch counters often prefer it.',
      },
      {
        q: 'Where should the print go?',
        a: 'On the outer face, which is what the customer sees at their desk. The inner face is against the food.',
      },
      {
        q: 'Can we leave space for a label?',
        a: 'Yes, and you should if you apply one. Reserve the area in the artwork rather than adding a sticker over the design.',
      },
      {
        q: 'How fast is wrapping compared with bagging?',
        a: 'Slower, which is the trade. Bags are quicker at a busy counter; wraps present better and can be eaten from.',
      },
      {
        q: 'Can we use one sheet size across our range?',
        a: 'Usually, if it suits the largest sandwich. A sheet sized for the smallest will not close around the biggest one.',
      },
      {
        q: 'Can we order printed stickers to seal the wrap?',
        a: 'Yes, and a sticker seals the fold and carries the filling name at the same time. Send both quantities.',
      },
    ],
    related: ['custom-sandwich-sleeves', 'custom-greaseproof-paper', 'custom-deli-paper', 'custom-sandwich-bags'],
  },

  {
    slug: 'custom-taco-paper',
    name: 'Custom Taco Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Taco Paper UK | Custom Taco & Wrap Sheets',
    seoDescription:
      'Printed taco papers and liner sheets for Mexican street food, sized to gather around a folded shell as it is eaten down.',
    h1: 'Custom Printed Taco Paper',
    cardBlurb: 'Sheets and liners for tacos, sized around a folded shell.',
    enquiryLabel: 'printed taco paper',
    intro: [
      'Tacos are eaten with both hands and leak from the bottom. A sheet under the shell catches what escapes and gives the customer something to hold.',
      'It is a small piece of packaging doing a job no container does as well.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Sheet Catches What a Holder Cannot',
        body: [
          'A taco holder supports the shell but leaves the bottom open. Sauce and filling drop straight through onto a plate or a hand.',
          'A greaseproof sheet under the shell catches that, and the customer can gather it up as they eat down.',
        ],
        link: {
          href: '/custom-taco-sleeves/',
          anchor: 'board holders that keep a shell upright',
          sentence: 'Used together with {link}, the pair covers both problems.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Sizing for a Taco',
        items: [
          'Big enough to gather up around the base as the customer eats.',
          'Not so big that it flaps and gets in the way.',
          'Greaseproof, because taco fillings are oily and sauced.',
          'Printed on one side only — the other side faces the food.',
        ],
        outro: 'A square sheet is fine here; there is no benefit in a shaped cut.',
      },
    ],
    faqs: [
      {
        q: 'Do we need paper as well as a taco holder?',
        a: 'They solve different problems. The holder keeps the shell upright; the paper catches what falls out of the bottom. Sites serving loaded tacos usually end up with both.',
      },
      {
        q: 'What size sheet suits a standard taco?',
        a: 'Large enough for the customer to gather around the base without it flapping. Test with a real taco rather than working from the shell diameter.',
      },
      {
        q: 'What size sheet suits a taco?',
        a: 'Large enough to gather around the base as the customer eats, without flapping. Test with a real taco rather than the shell diameter.',
      },
      {
        q: 'Should it be greaseproof?',
        a: 'Yes. Taco fillings are oily and sauced, and a plain sheet soaks through within a minute or two.',
      },
      {
        q: 'Can it be printed both sides?',
        a: 'One side is against the food. Printing the outer face is what the customer sees, and the inner face rarely justifies the cost.',
      },
      {
        q: 'Does a square sheet work?',
        a: 'Yes, and there is no benefit in a shaped cut here. Square is cheaper to produce with less waste.',
      },
      {
        q: 'Can we use the same paper for burritos?',
        a: 'Often, if the sheet is large enough. A burrito needs more paper to roll, so measure both before deciding on one size.',
      },
      {
        q: 'Will marinade stain the paper?',
        a: 'Coloured marinades mark visibly on a pale sheet. A mid-tone or patterned design disguises it better than white does.',
      },
      {
        q: 'Do these suit a street food pitch?',
        a: 'They do, and the low unit cost suits high-volume outdoor service where each sheet is used once.',
      },
      {
        q: 'Can we order paper and taco holders together?',
        a: 'Yes, and loaded tacos usually need both. Running them in one job keeps the branding consistent.',
      },
    ],
    related: ['custom-taco-sleeves', 'custom-greaseproof-paper', 'custom-burrito-sleeves', 'custom-food-basket-liner'],
  },

  {
    slug: 'custom-pizza-liner',
    name: 'Custom Pizza Liners',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Pizza Liners UK | Custom Pizza Box Paper',
    seoDescription:
      'Printed pizza liners that keep grease out of the box base and stop cheese sticking to the board on a delivery journey.',
    h1: 'Custom Printed Pizza Liners',
    cardBlurb: 'Liners that keep grease off a box base and cheese off the board.',
    enquiryLabel: 'printed pizza liners',
    intro: [
      'A pizza sitting on bare board in a delivery box sticks to it, and the base absorbs grease until it goes soft.',
      'A liner solves both for a fraction of a penny, which is why they have become standard on delivery.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Liner Stops the Base Going Soft',
        body: [
          'Cheese oil and moisture from the base soak into a plain box within minutes, and the board loses rigidity exactly where the pizza needs support.',
          'A greaseproof liner keeps that separation. It also means the box can sometimes be reused for a second delivery in the same run, though most operators do not.',
        ],
        link: {
          href: '/custom-pizza-trays/',
          anchor: 'board trays that add rigidity inside a box',
          sentence: 'On larger pizzas, {link} address the sagging problem the liner cannot.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Specifying a Liner',
        items: [
          'Cut to the pizza diameter, not the box — a liner up the walls is wasted paper.',
          'Greaseproof, since cheese oil is the whole problem.',
          'Printed on the face the customer sees when the box opens.',
          'Round is the obvious cut; square costs less and works nearly as well.',
        ],
        outro: 'Printing a liner is one of the cheapest ways to brand a delivery, since the customer sees it at the moment the box opens.',
      },
    ],
    faqs: [
      {
        q: 'Does the liner make the pizza soggy?',
        a: 'The opposite. It keeps the base separated from grease absorbed into the board, so the crust stays firmer than it would sitting directly on the box.',
      },
      {
        q: 'Should the liner be round or square?',
        a: 'Round looks better when the box opens; square is cheaper to cut with less waste. Both work, and it comes down to whether the reveal matters to your brand.',
      },
      {
        q: 'Round or square liner?',
        a: 'Round looks better when the box opens; square cuts with less waste and costs less. Both work in practice.',
      },
      {
        q: 'What size should the liner be?',
        a: 'Cut to the pizza diameter rather than the box. A liner running up the walls is wasted paper.',
      },
      {
        q: 'Can we print the liner?',
        a: 'Yes, and it is one of the cheapest ways to brand a delivery, because the customer sees it the moment the box opens.',
      },
      {
        q: 'Does it stop cheese sticking to the box?',
        a: 'That is one of its main jobs, and it matters most on a delivery journey where the pizza slides against the board.',
      },
      {
        q: 'Do we need one for eat-in pizzas?',
        a: 'Less so, since the pizza is on the board for minutes rather than a journey. Delivery is where the liner earns its cost.',
      },
      {
        q: 'Will it survive a hot pizza straight from the oven?',
        a: 'With a greaseproof grade specified for hot contact, yes. That is what we confirm on the quote.',
      },
      {
        q: 'Can we match the liner to our box print?',
        a: 'Yes, and running both in one order keeps the colour consistent. Printed separately, the same colour drifts visibly.',
      },
      {
        q: 'Can we order liners and boxes together?',
        a: 'Yes, and running both in one job keeps the colour consistent between the liner and the box print.',
      },
    ],
    related: ['custom-pizza-trays', 'custom-pizza-slice-sleeves', 'custom-greaseproof-paper', 'custom-food-basket-liner'],
  },

  {
    slug: 'custom-placemats',
    name: 'Custom Printed Placemats',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Paper Placemats UK | Custom Table Mats',
    seoDescription:
      'Printed paper placemats for table service, working as a menu, a brand surface and a wipeable table cover in a single sheet.',
    h1: 'Custom Printed Placemats',
    cardBlurb: 'Table sheets that work as a menu, a brand surface and a cover.',
    enquiryLabel: 'printed placemats',
    intro: [
      'A placemat is the one piece of printed material a customer looks at for the whole time they are sitting down. It is read more thoroughly than any menu.',
      'That makes it worth more design attention than most disposable printing.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'People Read Placemats Because They Are Bored',
        body: [
          'Waiting for food is dead time, and a placemat is directly in front of the customer. Anything printed on it gets read, often more than once.',
          'That is why they carry menus, offers, puzzles for children and loyalty information rather than just a logo.',
        ],
        link: {
          href: '/custom-food-basket-liner/',
          anchor: 'liners printed for the same tables',
          sentence: 'Sites using both usually match the design across {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Placemats Are Used For',
        items: [
          'The menu itself, in cafés without printed menus.',
          'Promotions and specials that change more often than a menu does.',
          'Children\'s activities, which keep families seated longer.',
          'Loyalty scheme and social media prompts.',
        ],
        outro: 'Because they are changed often, short digital runs suit placemats better than long conventional ones.',
      },
    ],
    faqs: [
      {
        q: 'What paper weight suits a placemat?',
        a: 'Heavy enough not to crease when a plate is put down and light enough to be genuinely disposable. It is a balance, and worth handling a sample before deciding.',
      },
      {
        q: 'Can placemats be changed monthly?',
        a: 'Digital printing makes short, frequent runs practical, which suits promotional content. Long conventional runs are cheaper per unit but lock you into one design for months.',
      },
      {
        q: 'Why do people read placemats?',
        a: 'Because waiting for food is dead time and the mat is directly in front of them. They get read more thoroughly than menus.',
      },
      {
        q: 'Can a placemat replace a menu?',
        a: 'In cafés without printed menus, frequently. It also lets you change specials without reprinting a menu.',
      },
      {
        q: 'Do they need grease resistance?',
        a: 'If plates are set directly on them and food is oily, it helps. Many sites accept marking as part of a disposable item.',
      },
      {
        q: 'What size should they be?',
        a: 'Sized to your tables rather than a standard. Send the table dimensions and we will confirm what fits and cuts economically.',
      },
      {
        q: 'Can we print children\'s activities?',
        a: 'Frequently requested, and it keeps families seated longer. Leave clear space for a crayon rather than covering the sheet.',
      },
      {
        q: 'How many colours?',
        a: 'One or two reproduce reliably and keep the cost proportionate. Full colour is possible where the design justifies it.',
      },
      {
        q: 'Do placemats need to be food-safe?',
        a: 'Where plates sit on them and food may touch, yes. Tell us how they are used and we will specify accordingly.',
      },
      {
        q: 'Can we print different mats for adults and children?',
        a: 'Yes, and digital printing makes a split run affordable. Send the quantity of each rather than a combined total.',
      },
    ],
    related: ['custom-food-basket-liner', 'custom-greaseproof-paper', 'custom-restaurant-paper-bags', 'custom-pizza-liner'],
  },

  {
    slug: 'custom-freezer-paper',
    name: 'Custom Freezer Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Freezer Paper UK | Custom Frozen Food Wrap',
    seoDescription:
      'Printed freezer paper with a moisture barrier for wrapping meat and prepared food, with an outer face that takes a marker pen.',
    h1: 'Custom Printed Freezer Paper',
    cardBlurb: 'Barrier-coated wrap for meat and prepared food going into a freezer.',
    enquiryLabel: 'printed freezer paper',
    intro: [
      'Freezer paper carries a barrier on one side to stop moisture leaving the food, which is what causes freezer burn.',
      'It is a specialist wrap bought by butchers, farm shops and producers packing for frozen storage rather than immediate sale.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Barrier Faces the Food',
        body: [
          'The coated side goes against the product and the uncoated side faces out, which is where the print and any handwritten labelling go.',
          'Wrapped the wrong way round it does very little, which is worth telling staff explicitly when the paper is introduced.',
        ],
        link: {
          href: '/custom-butcher-paper/',
          anchor: 'counter wrap for meat sold fresh',
          sentence: 'For meat sold to be eaten within days, {link} is the usual choice.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Practical Requirements',
        items: [
          'A coated side that stops moisture escaping the product.',
          'An uncoated outer face that takes a marker pen for date and cut.',
          'Enough strength to fold tightly without splitting at the corners.',
          'Sheet sizes matched to your typical portion, not to a roll width.',
        ],
        outro: 'A tight fold matters as much as the paper — air trapped against the food causes the burn the barrier is meant to prevent.',
      },
    ],
    faqs: [
      {
        q: 'Which side goes against the food?',
        a: 'The coated side. The uncoated face goes outward, where it takes print and a marker pen. Wrapped the other way round the barrier does almost nothing.',
      },
      {
        q: 'Does freezer paper prevent freezer burn completely?',
        a: 'It reduces it considerably when the wrap is tight. Air trapped against the surface is what causes the damage, so the fold matters as much as the paper does.',
      },
      {
        q: 'Does it prevent freezer burn completely?',
        a: 'It reduces it considerably when the wrap is tight. Air trapped against the surface causes the damage, so the fold matters as much as the paper.',
      },
      {
        q: 'Will a marker pen write on it?',
        a: 'On the uncoated outer face, yes, which is why date and cut are written there rather than on the barrier side.',
      },
      {
        q: 'Can we print on the outer face?',
        a: 'Yes, and leaving an unprinted panel for handwriting is worth planning in rather than adding afterwards.',
      },
      {
        q: 'Is this the same as butcher paper?',
        a: 'No. Butcher paper is a counter wrap; freezer paper carries a moisture barrier for frozen storage specifically.',
      },
      {
        q: 'How long does it protect for?',
        a: 'That depends on your product and storage rather than the paper alone. It slows moisture loss; it does not set a shelf life.',
      },
      {
        q: 'Do farm shops use this?',
        a: 'They do, alongside butchers and producers packing their own meat for frozen sale. The coated face is what keeps moisture in the product rather than in the freezer as ice.',
      },
      {
        q: 'What sheet size do we need?',
        a: 'Sized to your typical portion with enough to fold tightly. A loose wrap defeats the barrier however good the paper is.',
      },
      {
        q: 'Can we order this alongside butcher paper?',
        a: 'Yes, and many butchers use both — one for the counter and one for frozen stock. One job shares the setup.',
      },
    ],
    related: ['custom-butcher-paper', 'custom-meat-packaging-bags', 'custom-cheese-paper', 'custom-wax-paper'],
  },

  {
    slug: 'custom-flower-bouquet-paper',
    name: 'Custom Flower Bouquet Paper',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Printed Bouquet Paper UK | Custom Florist Wrap',
    seoDescription:
      'Printed bouquet wrap for florists, in sheets large enough for a hand-tied arrangement and stiff enough to hold a fold.',
    h1: 'Custom Printed Bouquet Paper',
    cardBlurb: 'Florist wrap sized for hand-tied arrangements, printed to your design.',
    enquiryLabel: 'printed bouquet paper',
    intro: [
      'Bouquet wrap is the only item in this range that never touches food, and it has a different set of demands: large sheets, a stiffness that holds a fold, and a look that flatters what is inside.',
      'Florists buy it as a branding item as much as a practical one.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Wrap Has to Hold Its Own Shape',
        body: [
          'A hand-tied bouquet is supported by its wrap. Paper that collapses leaves the arrangement flopping, which undoes the work of tying it.',
          'A slightly stiffer stock holds the cone shape, and that is more important than any decorative quality.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What Florists Specify',
        items: [
          'Large sheets — bouquet wrap is bigger than most printed paper.',
          'Enough stiffness to hold a cone without support.',
          'Water resistance where stems are wrapped wet.',
          'A design that frames flowers rather than competing with them.',
        ],
        outro: 'Restrained patterns work better than bold ones, because the flowers should be the colour in the picture.',
        link: {
          href: '/printed-papers-bags/food-papers/',
          anchor: 'the wider printed paper range',
          sentence: 'Other sheet applications are covered across {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Does bouquet paper need to be water resistant?',
        a: 'If stems are wrapped wet or in a water pouch, yes, or the base of the wrap softens and tears. Where stems are dry it is less critical.',
      },
      {
        q: 'Should the design be bold?',
        a: 'Usually not. The flowers are the product, and a strong pattern competes with them. Most florists choose restrained artwork with the brand mark used sparingly.',
      },
      {
        q: 'Why does stiffness matter?',
        a: 'Because a hand-tied bouquet is supported by its wrap. Paper that collapses leaves the arrangement flopping.',
      },
      {
        q: 'What sheet size do florists need?',
        a: 'Larger than most printed paper. Send the size of a typical bouquet and we will confirm what can be produced.',
      },
      {
        q: 'Can we print in one colour?',
        a: 'Yes, and a single-colour repeat with plenty of open paper usually suits flowers better than heavy coverage.',
      },
      {
        q: 'Does this need food-grade ink?',
        a: 'No, since nothing edible touches it, which widens the ink and paper choice compared with the rest of this range.',
      },
      {
        q: 'Can we match it to our ribbon?',
        a: 'Colour matching to a physical sample is worth asking about. Send the ribbon and we will tell you how close a print can get.',
      },
      {
        q: 'Do these suit a farm shop florist counter?',
        a: 'They do, and a printed wrap carries branding further than most items, because bouquets are given away rather than kept.',
      },
      {
        q: 'Can we get several colourways?',
        a: 'On digital printing, yes, and florists frequently run seasonal variants. Send the split between them rather than a total.',
      },
      {
        q: 'What weight suits a hand-tied bouquet?',
        a: 'Firm enough to hold a cone shape unaided. Too light and the wrap collapses; too heavy and it will not fold cleanly.',
      },
    ],
    related: ['custom-glassine-paper', 'custom-placemats', 'custom-greaseproof-paper', 'custom-grocery-bags'],
  },

  {
    slug: 'mycelium-packaging',
    name: 'Mycelium Packaging',
    category: 'printed-papers-bags',
    subcategory: 'food-papers',
    seoTitle: 'Mycelium Packaging UK | Grown Moulded Packaging',
    seoDescription:
      'Moulded mycelium packaging as a grown alternative to protective foam, quoted on enquiry against your specific application.',
    h1: 'Mycelium Packaging',
    cardBlurb: 'Grown moulded protective packaging, quoted per application.',
    enquiryLabel: 'mycelium packaging',
    intro: [
      'Mycelium packaging is grown rather than manufactured: fungal root structure binds an agricultural substrate into a moulded shape, then is dried to stop it growing further.',
      'It is a protective packaging material rather than a food wrap, and it sits apart from everything else in this catalogue.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Foam Alternative, Not a Paper One',
        body: [
          'The comparison that makes sense is with expanded foam used to protect fragile items in transit, not with the printed papers elsewhere in this range.',
          'It is moulded to a shape, it cushions, and it breaks down in a way foam does not.',
        ],
      },
      {
        kind: 'callout',
        heading: 'Quoted Against a Specific Application',
        body: 'Mycelium is a made-to-order moulded product with its own tooling, lead times and minimum volumes, and these differ substantially from board packaging. We do not publish general figures for it. Tell us what needs protecting, the volumes involved and your timescale, and we will confirm what is achievable in writing.',
        pending: true,
      },
      {
        kind: 'bullets',
        heading: 'What to Send with an Enquiry',
        items: [
          'The item being protected, with dimensions and weight.',
          'How fragile it is and what transit it has to survive.',
          'Annual volume, since moulded tooling is volume-sensitive.',
          'Your timescale, which for a grown material is longer than for board.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can mycelium packaging touch food directly?',
        a: 'That depends entirely on the specification and is not something we would assume. Tell us the application and we will confirm what is suitable rather than giving a general answer.',
      },
      {
        q: 'How does the cost compare with foam?',
        a: 'It varies with the shape, the tooling and the volume far more than board packaging does, so a general comparison would be misleading. Send the application and we will price it properly.',
      },
      {
        q: 'What lead time should we expect?',
        a: 'Longer than board, because the material is grown rather than manufactured. We confirm it against your specific application.',
      },
      {
        q: 'What information do you need from us?',
        a: 'The item being protected with dimensions and weight, how fragile it is, the transit it faces, annual volume and your timescale.',
      },
      {
        q: 'Is it a replacement for board packaging?',
        a: 'No. It is a protective moulded material, comparable to expanded foam rather than to the printed board elsewhere in this range.',
      },
      {
        q: 'Can it be printed?',
        a: 'Printing on a grown moulded surface is limited. Labelling is usually the practical route, which we would confirm per application.',
      },
      {
        q: 'Does it break down naturally?',
        a: 'It is designed to, though what happens in practice depends on conditions. We will describe the material rather than promise an outcome.',
      },
      {
        q: 'Is there a minimum volume?',
        a: 'Moulded tooling is volume-sensitive, so there usually is. Send your annual quantity and we will tell you whether it is viable.',
      },
      {
        q: 'Can we see a sample before committing?',
        a: 'Sampling is possible and works differently from board, since the material is grown. Tell us the application and we will confirm.',
      },
      {
        q: 'Is it suitable for shipping fragile items?',
        a: 'That is its main use, as a cushioning alternative to expanded foam. Tell us the item and the transit it faces.',
      },
    ],
    related: ['custom-greaseproof-paper', 'custom-kraft-food-bags', 'eco-friendly-paper-cups', 'custom-eco-friendly-cone-sleeves'],
  },
];
