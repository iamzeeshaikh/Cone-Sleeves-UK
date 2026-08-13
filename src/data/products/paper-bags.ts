import type { Product } from '../types';

/** Formed bags. Construction, closure and what the bag carries drive each record. */
export const PAPER_BAGS: Product[] = [
  {
    slug: 'custom-take-out-bags',
    name: 'Custom Takeaway Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Custom Takeaway Bags UK | Printed Paper Carriers',
    seoDescription:
      'Printed takeaway bags with handles and a block bottom, sized from your largest container so the base does not give way.',
    h1: 'Custom Printed Takeaway Bags',
    cardBlurb: 'Block-bottom carriers with handles, sized for a full order.',
    enquiryLabel: 'printed takeaway bags',
    intro: [
      'A takeaway bag fails at the bottom, not the sides. Someone lifts a full order, the base gives, and the food is on the pavement.',
      'Base construction and handle attachment are the two things worth getting right; everything else is presentation.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Base Carries the Whole Order',
        body: [
          'A block-bottom bag has a folded base that spreads load across a flat area. A simple flat bag concentrates it along a single glued seam.',
          'For anything heavier than a sandwich, that difference decides whether the bag survives being carried to a car.',
        ],
        link: {
          href: '/custom-food-delivery-bags/',
          anchor: 'bags specified for courier delivery',
          sentence: 'Where orders go out with a rider rather than a customer, {link} face different stresses.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What to Check on a Sample',
        items: [
          'Load it with your heaviest normal order and carry it across a room.',
          'Check the handles where they attach, which is the second failure point.',
          'See whether it stands open on its own while staff pack it.',
          'Check it fits your largest container without forcing.',
        ],
        outro: 'A bag that needs two hands to hold open costs seconds on every order.',
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Construction', 'Block bottom for load spreading'],
          ['Handles', 'Twisted paper, flat paper, or die-cut'],
          ['Size', 'Set from your largest container, not an average order'],
          ['Board', 'Grease resistance where hot food goes in unboxed'],
          ['Print', 'Front, back and gusset are all visible when carried'],
        ],
      },
    ],
    faqs: [
      {
        q: 'How heavy a load can a paper takeaway bag carry?',
        a: 'That depends on the base construction, the paper weight and the handle attachment rather than on a single figure. Test a sample with your heaviest normal order before committing to a quantity.',
      },
      {
        q: 'Do handles need to be reinforced?',
        a: 'Where orders are heavy, yes — the handle attachment point is the second most common failure after the base. It is worth asking about reinforcement specifically.',
      },
      {
        q: 'What size bag should we order?',
        a: 'Size from your largest container rather than a typical order. A bag that will not take your big meal box is unusable even if it fits everything else.',
      },
      {
        q: 'Should we test a sample before ordering?',
        a: 'Load one with your heaviest normal order and carry it across a room. That answers more than any specification sheet.',
      },
      {
        q: 'Where do takeaway bags usually fail?',
        a: 'The base first, the handle attachment second. Both are worth checking on a sample rather than trusting to weight alone.',
      },
      {
        q: 'Do we need grease resistance?',
        a: 'Where hot food goes in unboxed, yes. Where everything is already in a container, a plain kraft bag is adequate and cheaper.',
      },
      {
        q: 'Which handle type is most reliably?',
        a: 'Twisted paper handles carry more weight; flat paper handles cost less; die-cut handles avoid an attachment point entirely.',
      },
      {
        q: 'Will the bag stand open while packing?',
        a: 'A block bottom will; a flat bag will not. That is seconds on every order at a busy pass.',
      },
      {
        q: 'How many sizes should we hold?',
        a: 'Two usually covers a takeaway — one for a single meal and one for a family order. A third rarely earns its storage.',
      },
      {
        q: 'Where should the print go?',
        a: 'The front face and the gusset. Both are visible as the bag is carried, where the base and back rarely are.',
      },
    ],
    related: ['custom-food-delivery-bags', 'custom-restaurant-paper-bags', 'custom-kraft-food-bags', 'custom-lunch-bags'],
  },

  {
    slug: 'custom-food-delivery-bags',
    name: 'Custom Food Delivery Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Food Delivery Bags UK | Sealed Courier Bags',
    seoDescription:
      'Printed delivery bags with a tamper-evident closure, sized to stand upright inside a rider\'s insulated delivery backpack.',
    h1: 'Custom Food Delivery Bags',
    cardBlurb: 'Sealed bags sized to stand upright in a rider’s backpack.',
    enquiryLabel: 'food delivery bags',
    intro: [
      'A delivery bag is handled by someone who did not make the food and does not know what is fragile inside it. It also has to close in a way the customer can see has not been opened.',
      'Both of those are different requirements from a bag a customer carries themselves.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Closure Matters More than Looks',
        body: [
          'A tamper-evident closure — a sticker across the fold, or an adhesive strip — shows the customer that the bag has not been opened between the kitchen and the door.',
          'It is quick at the pass and it removes an entire category of complaint, which is why most delivery operations adopt it.',
        ],
        link: {
          href: '/custom-bento-sleeves/',
          anchor: 'bands that seal individual containers',
          sentence: 'Sealing the containers as well as the bag, with {link}, closes the remaining gap.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Designing for a Rider\'s Backpack',
        items: [
          'A base that lets the bag stand upright rather than lean.',
          'Height that fits an insulated backpack without folding the top over.',
          'Enough rigidity that the bag does not collapse when others are packed beside it.',
          'A closure that a rider can operate quickly with one hand.',
        ],
        outro: 'Measure a typical rider backpack — bag height is the constraint people forget.',
      },
      {
        kind: 'callout',
        heading: 'Tamper Evidence Is a Visible Signal, Not a Guarantee',
        body: 'A sealed bag shows clearly if it has been opened, which is what customers want to see. We would not describe it as secure beyond that, and any wording printed on the bag should stay within what the closure actually demonstrates.',
      },
    ],
    faqs: [
      {
        q: 'What makes a bag tamper evident?',
        a: 'A closure that cannot be reopened without visible damage — typically an adhesive strip or a sticker across the fold. It shows the customer the bag has not been opened in transit, which is the practical benefit.',
      },
      {
        q: 'How tall should a delivery bag be?',
        a: 'Short enough to stand upright in a rider\'s insulated backpack without the top being folded over. Measure a typical backpack rather than sizing from the food alone.',
      },
      {
        q: 'Will the bag collapse in a backpack?',
        a: 'Not with enough rigidity. A bag that folds when others are packed beside it is what tips the order inside.',
      },
      {
        q: 'Do we need handles on a delivery bag?',
        a: 'Less than on a customer-carried bag, since it travels in a backpack. Handles help at the handover rather than in transit.',
      },
      {
        q: 'Can a rider close it one-handed?',
        a: 'With an adhesive strip, yes. A closure needing two hands slows every collection, which riders notice.',
      },
      {
        q: 'Should we seal containers as well?',
        a: 'It closes the remaining gap. A sealed bag with unsealed boxes inside still lets food move during a journey.',
      },
      {
        q: 'Will printing survive the journey?',
        a: 'On a coated or laminated surface, yes. Unlaminated print scuffs against a backpack lining over repeated trips.',
      },
      {
        q: 'How do we stop leaks reaching the bag?',
        a: 'Seal the containers rather than relying on the bag. A paper bag is not a containment vessel for spilled liquid.',
      },
      {
        q: 'Can the closure be reused?',
        a: 'A tamper-evident closure is designed not to be, which is the point. Reusable closures defeat the purpose.',
      },
      {
        q: 'Do these need handles?',
        a: 'Less than a customer-carried bag, since they travel in a backpack. Handles help at the handover rather than in transit.',
      },
    ],
    related: ['custom-take-out-bags', 'custom-bento-sleeves', 'custom-restaurant-paper-bags', 'custom-kraft-food-bags'],
  },

  {
    slug: 'custom-restaurant-paper-bags',
    name: 'Custom Restaurant Paper Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Restaurant Paper Bags UK | Printed Branded Carriers',
    seoDescription:
      'Printed paper bags for restaurants, designed around how the bag actually looks when it is full and swinging as it is carried.',
    h1: 'Custom Restaurant Paper Bags',
    cardBlurb: 'Branded carriers designed around how the bag looks when full.',
    enquiryLabel: 'restaurant paper bags',
    intro: [
      'A restaurant bag is a mobile advertisement. It is carried through a busy street, past people who have not eaten yet, and photographed more often than you would expect.',
      'The design mistake is to lay it out flat on a screen, because that is the one state nobody ever sees it in.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Design for the Bag When It Is Full',
        body: [
          'A full bag bulges, the gusset opens out, and the top folds over. Artwork that runs to the edges gets distorted or hidden by exactly those changes.',
          'Keeping the key elements in the centre of the front face, well clear of folds and the gusset, survives all of it.',
        ],
        link: {
          href: '/custom-take-out-bags/',
          anchor: 'the structural side of takeaway carriers',
          sentence: 'Once the design is settled, {link} covers what the bag has to hold.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where the Print Gets Seen',
        items: [
          'The front face at chest height, which is what passers-by see.',
          'The gusset, visible from the side as the bag swings.',
          'The base, seen when the bag is set down on a table.',
          'The inside of the fold-over top, occasionally, when the bag is opened.',
        ],
        outro: 'Printing all four is rarely worth it; the front face and the gusset do most of the work.',
      },
    ],
    faqs: [
      {
        q: 'Should we print both sides of the bag?',
        a: 'It doubles the visible surface for a bag that swings as it is carried, which some brands value. For most, the front face and the gusset are enough and the back can stay plain.',
      },
      {
        q: 'Why does our design look distorted on the finished bag?',
        a: 'Almost always because it was laid out flat. A full bag bulges and the gusset opens, so artwork running to the edges gets stretched or hidden at exactly those points.',
      },
      {
        q: 'Why does our design look distorted?',
        a: 'Because it was laid out flat. A full bag bulges and the gusset opens, so artwork running to the edges stretches or hides.',
      },
      {
        q: 'Should we print both sides?',
        a: 'It doubles the visible surface on a bag that swings as it is carried. For most brands the front and gusset are enough.',
      },
      {
        q: 'Where is the print actually seen?',
        a: 'The front face at chest height, the gusset from the side, and the base when the bag is set on a table.',
      },
      {
        q: 'Do we need grease resistance?',
        a: 'Only where hot food goes in unboxed. If everything is contained, a plain bag is adequate and considerably cheaper.',
      },
      {
        q: 'Will a paper bag carry a full order?',
        a: 'A properly specified one will. Test with your heaviest normal order rather than relying on a stated weight figure.',
      },
      {
        q: 'Can we run several sizes?',
        a: 'Yes, and most restaurants need two. Running both in one job shares the setup rather than repeating it.',
      },
      {
        q: 'How do we choose a size?',
        a: 'From your largest container rather than a typical order. A bag that will not take the big box is unusable.',
      },
      {
        q: 'Do these suit collection orders?',
        a: 'They are mostly bought for them, where the customer carries the bag through a street and past other people.',
      },
    ],
    related: ['custom-take-out-bags', 'custom-kraft-food-bags', 'custom-grocery-bags', 'custom-lunch-bags'],
  },

  {
    slug: 'custom-kraft-food-bags',
    name: 'Custom Kraft Food Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Kraft Food Bags UK | Printed Brown Paper Bags',
    seoDescription:
      'Printed kraft food bags in unbleached brown paper, strong for their weight and well suited to one and two colour designs.',
    h1: 'Custom Kraft Food Bags',
    cardBlurb: 'Brown paper bags suited to simple, strong printed designs.',
    enquiryLabel: 'kraft food bags',
    intro: [
      'Kraft bags are the default across UK food service because they are cheap, strong for their weight, and look unfussy without any design work at all.',
      'A single-colour logo on kraft is one of the most cost-effective pieces of branding a food business can buy.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Strength for the Weight',
        body: [
          'Kraft paper is made from long fibres, which is why it tears less readily than a bleached paper of the same weight.',
          'That matters for bags more than for sheets, because a bag concentrates load at the base and the handles rather than spreading it.',
        ],
        link: {
          href: '/kraft-paper-cups/',
          anchor: 'how ink behaves on unbleached board',
          sentence: 'The same colour-shift applies as on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Printing on Kraft Bags',
        items: [
          'One or two colours is the usual specification, and it suits the material.',
          'Colours shift towards brown — pale tints in particular nearly disappear.',
          'Black and dark inks print predictably and read cleanly.',
          'White ink is an option and stands out well, at extra cost.',
        ],
        outro: 'Designs made for kraft look better on it than designs adapted to it after the fact.',
      },
    ],
    faqs: [
      {
        q: 'Are kraft bags stronger than white ones?',
        a: 'For the same weight, generally yes, because kraft is made from longer fibres. That matters more on a bag than a sheet, since a bag concentrates load at the base and handles.',
      },
      {
        q: 'Will our brand colours print accurately on kraft?',
        a: 'They will shift warmer and darker. If a colour has to be exact, either print a white underbase first or use a white bag — those are the two honest options.',
      },
      {
        q: 'Are kraft bags stronger than white?',
        a: 'For the same weight, generally yes, because kraft uses longer fibres. That matters more on a bag than on a sheet.',
      },
      {
        q: 'Will our colours print accurately on kraft?',
        a: 'They shift warmer and darker. If a colour must be exact, that means a white underbase or a white bag.',
      },
      {
        q: 'How many colours should we print?',
        a: 'One or two suits the material and the price point. Designs made for kraft look better than designs adapted to it.',
      },
      {
        q: 'Can we use white ink?',
        a: 'Yes, and it stands out well against brown. It is an extra ink, so price it rather than assuming.',
      },
      {
        q: 'Are kraft bags an environmental choice?',
        a: 'They skip a bleaching stage, which is real. Any lining or lamination added for grease resistance changes the disposal picture.',
      },
      {
        q: 'Do these suit a bakery?',
        a: 'Very well, and kraft is the default across UK bakery counters for exactly the plain, unfussy look.',
      },
      {
        q: 'What sizes are common?',
        a: 'From single-item bags up to full order carriers. Tell us the largest item you put in one and we will size from it.',
      },
      {
        q: 'Will the bag tear at the seam?',
        a: 'Not on an appropriate weight. Seam failure usually means the bag is under-specified for the load.',
      },
    ],
    related: ['custom-take-out-bags', 'custom-restaurant-paper-bags', 'custom-grocery-bags', 'mycelium-packaging'],
  },

  {
    slug: 'custom-grocery-bags',
    name: 'Custom Grocery Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Grocery Bags UK | Custom Paper Shopping Bags',
    seoDescription:
      'Printed paper grocery bags for farm shops, delis and greengrocers, built for a mixed load of tins, jars and loose produce.',
    h1: 'Custom Printed Grocery Bags',
    cardBlurb: 'Shopping bags built for a mixed load of tins, jars and produce.',
    enquiryLabel: 'printed grocery bags',
    intro: [
      'A grocery bag carries a mixed load: tins at the bottom, produce on top, and something in a glass jar that everyone worries about.',
      'It is the heaviest thing a paper bag is normally asked to do, and the base construction has to reflect that.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Mixed Loads Concentrate Weight',
        body: [
          'Unlike a takeaway order, a grocery load has hard, heavy items pressing into the base at specific points rather than spreading evenly.',
          'That is why grocery bags use a heavier paper and a reinforced base than a food carrier of the same volume.',
        ],
        link: {
          href: '/custom-kraft-food-bags/',
          anchor: 'kraft paper and its strength for the weight',
          sentence: 'Most grocery bags use kraft for exactly the reason set out on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Farm Shops and Delis Ask For',
        items: [
          'A base that copes with tins without splitting at a corner.',
          'Handles that survive being carried to a car park.',
          'Enough height that produce does not sit above the rim.',
          'A look that reads as independent rather than supermarket.',
        ],
        outro: 'Test a sample with a genuinely heavy shop rather than a light one.',
      },
    ],
    faqs: [
      {
        q: 'Can a paper grocery bag carry a full shop?',
        a: 'A properly specified one carries a substantial load, though it depends on the paper weight and base construction rather than on a general claim. Test a sample with a realistic load.',
      },
      {
        q: 'Do grocery bags need handles?',
        a: 'For anything carried to a car, yes. Handle-less bags work at a counter where the customer is putting the bag straight into another one, and not much beyond that.',
      },
      {
        q: 'Why do grocery bags split at the base?',
        a: 'Because tins and jars press into specific points rather than spreading the load. That is why the base construction differs.',
      },
      {
        q: 'What weight should we specify?',
        a: 'Heavier than a food carrier of the same volume, because the load is denser and more concentrated.',
      },
      {
        q: 'Do these suit a farm shop?',
        a: 'They are frequently bought for one, where the bag carries branding out of the shop and into a customer\'s kitchen.',
      },
      {
        q: 'Can we print in one colour?',
        a: 'Yes, and on kraft a single strong colour usually reads better than a detailed multi-colour design.',
      },
      {
        q: 'How many sizes should we hold?',
        a: 'Two usually covers it — a standard shop and a larger one. More than that tends to sit unused.',
      },
      {
        q: 'Will they stand up while being packed?',
        a: 'A block bottom will stand open on the counter, which matters when staff are packing one-handed at a till. A flat-bottom bag has to be held, and that slows a queue.',
      },
      {
        q: 'Can we print a farm shop logo in two colours?',
        a: 'Yes. On kraft, two well-chosen inks usually outperform four fighting the brown base, and a simple mark printed cleanly reads better across a car park than a detailed one does.',
      },
      {
        q: 'Do these suit a market stall?',
        a: 'They do, though a stall usually cannot receive a delivery. Most traders take stock at home or a storage unit.',
      },
    ],
    related: ['custom-kraft-food-bags', 'custom-bread-bags', 'custom-restaurant-paper-bags', 'custom-flour-bags'],
  },

  {
    slug: 'custom-bread-bags',
    name: 'Custom Bread Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Bread Bags UK | Custom Bakery Loaf Bags',
    seoDescription:
      'Printed bread bags that let a loaf breathe so the crust stays crisp, sized to tin, bloomer and baton shapes rather than weight.',
    h1: 'Custom Printed Bread Bags',
    cardBlurb: 'Breathable bags that keep a crust crisp, sized to your loaf shapes.',
    enquiryLabel: 'printed bread bags',
    intro: [
      'A good crust is the first thing to go when bread is packaged badly. Sealed in something airtight, a loaf steams and the crust softens within an hour.',
      'Paper bags exist for bread precisely because they let it breathe, which is a feature rather than a limitation.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Paper Against a Sealed Bag for Bread',
        columns: ['Paper bag', 'Sealed bag'],
        rows: [
          ['Crust', 'Stays crisp', 'Softens within an hour'],
          ['Crumb moisture', 'Dries out over a day or two', 'Stays soft longer'],
          ['Suits', 'Artisan loaves eaten within a day', 'Sliced bread with a longer shelf life'],
          ['Window', 'Optional cut-out or film panel', 'Product usually visible anyway'],
          ['Look', 'Craft bakery', 'Supermarket'],
        ],
        outro: 'The right answer depends entirely on whether the crust or the shelf life matters more to your customers.',
      },
      {
        kind: 'prose',
        heading: 'Size to the Loaf Shape, Not the Weight',
        body: [
          'A 800g tin loaf and an 800g bloomer are completely different shapes, and a bag that suits one is wrong for the other.',
          'Bakeries running several shapes usually need two or three bag sizes rather than one sized by weight.',
        ],
        link: {
          href: '/custom-pastry-bags/',
          anchor: 'flat bags for pastries and single items',
          sentence: 'For the counter side of a bakery, {link} handle smaller items.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will a paper bag keep bread fresh?',
        a: 'It keeps the crust crisp and lets the crumb dry slowly, which suits an artisan loaf eaten within a day or two. For longer shelf life a sealed bag holds moisture better, at the cost of the crust.',
      },
      {
        q: 'Should a bread bag have a window?',
        a: 'A window shows the crust and colour, which sells an artisan loaf. It also adds a material and a cost, so plenty of bakeries print the loaf type instead and keep the bag simple.',
      },
      {
        q: 'Why not use a sealed bag?',
        a: 'A sealed bag holds moisture and softens the crust within an hour. Paper exists for bread precisely because it breathes.',
      },
      {
        q: 'How do we size for different loaves?',
        a: 'By shape rather than weight. An 800g tin loaf and an 800g bloomer need different bags entirely.',
      },
      {
        q: 'How many sizes will we need?',
        a: 'Two or three for a bakery running several shapes. Sizing by weight alone is the usual mistake.',
      },
      {
        q: 'Can we print in two colours?',
        a: 'Yes, and a restrained design suits a craft bakery. Heavy coverage works against the plain paper look.',
      },
      {
        q: 'Do these suit sourdough?',
        a: 'They do, and a crisp crust is exactly what a paper bag protects and a sealed bag destroys.',
      },
      {
        q: 'Will the bag mark from a warm loaf?',
        a: 'A freshly baked loaf can mark plain paper slightly. Most bakeries accept it, or let loaves cool before bagging.',
      },
      {
        q: 'Can we print the loaf type on the bag?',
        a: 'Yes, and on digital printing several loaf names in one run is straightforward. Send the split between them.',
      },
      {
        q: 'Do these suit a wholesale bakery?',
        a: 'They do, though wholesale bags often carry less retail information than shelf packs. Tell us which use dominates.',
      },
    ],
    related: ['custom-pastry-bags', 'custom-grocery-bags', 'custom-kraft-food-bags', 'custom-cookie-bags'],
  },

  {
    slug: 'custom-pastry-bags',
    name: 'Custom Pastry Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Pastry Bags UK | Custom Bakery Counter Bags',
    seoDescription:
      'Printed flat pastry bags for bakery counters, grease resistant and quick to open one-handed during a Saturday morning rush.',
    h1: 'Custom Printed Pastry Bags',
    cardBlurb: 'Flat grease-resistant bags for fast bakery counter service.',
    enquiryLabel: 'printed pastry bags',
    intro: [
      'A pastry bag is used in about two seconds: tongs in, pastry out, bag folded, handed over. Anything that slows that down costs money on a Saturday morning queue.',
      'Grease resistance and one-handed filling are the two requirements that matter.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'One-Handed Use During a Rush',
        body: [
          'Staff at a bakery counter have tongs in one hand. The bag has to open with the other, and it has to come off the stack singly.',
          'Bags that stick together or need two hands to open are the reason counters keep a pile of pre-opened ones, which is a workaround rather than a solution.',
        ],
        link: {
          href: '/custom-pastry-sleeves/',
          anchor: 'sleeves that show the pastry rather than hiding it',
          sentence: 'For display-led counters, {link} present the product better.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What the Bag Has to Cope With',
        items: [
          'Butter from laminated pastry, which marks plain paper within minutes.',
          'Flakes and crumbs that need containing rather than scattering.',
          'Warm pastries straight from a hot cabinet.',
          'Being folded over rather than sealed.',
        ],
        outro: 'A greaseproof-lined bag is worth the difference for anything laminated.',
      },
    ],
    faqs: [
      {
        q: 'Do pastry bags need a grease-resistant lining?',
        a: 'For croissants and anything laminated, yes — butter marks a plain bag within minutes and it is visible while the customer is still in the shop. Dry items do not need it.',
      },
      {
        q: 'Should bags have a window?',
        a: 'A window sells the product but adds cost and a second material. Most bakery counters put the display in the cabinet instead and keep the bag simple.',
      },
      {
        q: 'Why does one-handed opening matter?',
        a: 'Because staff have tongs in the other hand. A bag needing two hands is why counters keep a pile of pre-opened ones.',
      },
      {
        q: 'Will they come off the stack singly?',
        a: 'With an interleaved or pop-up pack, yes, and at a Saturday morning counter that is worth more than a small unit saving.',
      },
      {
        q: 'Can we print two colours?',
        a: 'Yes, and a simple repeated design suits the stock. Fine detail closes up on an absorbent lightweight paper.',
      },
      {
        q: 'Do these suit hot pastries?',
        a: 'With a lined grade, yes, though steam softens pastry in any closed bag. Many counters fold rather than seal.',
      },
      {
        q: 'How many sizes do we need?',
        a: 'Usually two — one for a single pastry and one for two or three. Larger orders move to a box.',
      },
      {
        q: 'Will crumbs escape?',
        a: 'Less than from a sleeve, which is one of the main reasons counters choose bags for flaky items.',
      },
      {
        q: 'Can we run a window version alongside a plain one?',
        a: 'Yes, and many bakeries do — plain for everyday, windowed for a premium line. Send the split.',
      },
      {
        q: 'Do these come in a pop-up pack?',
        a: 'Where staff take one at a time at a counter, it is worth asking for. It changes how the job is finished.',
      },
    ],
    related: ['custom-pastry-sleeves', 'custom-cookie-bags', 'custom-donut-bags', 'custom-bread-bags'],
  },

  {
    slug: 'custom-donut-bags',
    name: 'Custom Doughnut Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Doughnut Bags UK | Custom Donut Bags',
    seoDescription:
      'Grease-resistant printed doughnut bags with a coated inner face, so warm glaze does not bond to the paper and lift off.',
    h1: 'Custom Printed Doughnut Bags',
    cardBlurb: 'Grease-resistant bags with a coated face so glaze does not stick.',
    enquiryLabel: 'printed doughnut bags',
    intro: [
      'A glazed doughnut in an uncoated bag arrives with half its glaze on the paper. It is the single most common complaint about doughnut packaging.',
      'A coated inner face solves it completely, and costs very little more.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Glaze Bonds to Uncoated Paper',
        body: [
          'Warm glaze is essentially sugar syrup, and it sticks to an absorbent surface as it cools. Pulling the doughnut out takes the glaze with it.',
          'A coated inner face gives the glaze nothing to grip, and the doughnut comes out intact.',
        ],
        link: {
          href: '/custom-donut-sleeves/',
          anchor: 'sleeves for single doughnuts eaten immediately',
          sentence: 'For one doughnut handed over at a counter, {link} present it better than a bag.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Sizing for a Half Dozen',
        items: [
          'Doughnuts are bought in multiples far more often than singly.',
          'A bag for six needs enough width that they sit side by side rather than stacked.',
          'Stacked doughnuts crush the ones underneath, particularly filled ones.',
          'A box is the better answer above six.',
        ],
        outro: 'Sites selling boxes of twelve should not try to make a bag work for it.',
      },
    ],
    faqs: [
      {
        q: 'Why does the glaze come off in the bag?',
        a: 'The bag is uncoated. Warm glaze bonds to absorbent paper as it cools and lifts when the doughnut is pulled out. A coated inner face prevents it entirely.',
      },
      {
        q: 'How many doughnuts should one bag hold?',
        a: 'Up to about six, sitting side by side rather than stacked. Beyond that they crush each other and a box is the better format.',
      },
      {
        q: 'Why does glaze come off in the bag?',
        a: 'The bag is uncoated. Warm glaze bonds to absorbent paper as it cools and lifts when the doughnut is pulled out.',
      },
      {
        q: 'Do filled doughnuts need a bigger bag?',
        a: 'They are heavier and less stable, so a slightly larger bag avoids squeezing them past each other and pushing jam out.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and doughnut brands are usually colour-led. A coated inner face is the more important specification, though.',
      },
      {
        q: 'Will sugar dust show on the bag?',
        a: 'On a dark print, clearly. A lighter or busier design disguises it, and most counters accept some dusting.',
      },
      {
        q: 'Do these suit delivery?',
        a: 'For short journeys, yes. For longer ones a box protects better, because a bag lets doughnuts press together.',
      },
      {
        q: 'Should the bag have a window?',
        a: 'It sells a decorated doughnut well. Weigh that against the cost and the extra material before adding one.',
      },
      {
        q: 'Can we run several designs?',
        a: 'On digital printing, yes, because there is no plate cost per design. Send us the split between them rather than a single combined total so the run can be planned properly.',
      },
      {
        q: 'Can we order bags and boxes together?',
        a: 'Yes, and shops selling both singles and dozens usually need each. Running them in one job shares the setup.',
      },
    ],
    related: ['custom-donut-sleeves', 'custom-pastry-bags', 'custom-cookie-bags', 'custom-greaseproof-paper'],
  },

  {
    slug: 'custom-cookie-bags',
    name: 'Custom Cookie Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Cookie Bags UK | Custom Biscuit Bags',
    seoDescription:
      'Printed cookie and biscuit bags for counter sales and retail shelves, including window options and gift-ready presentation.',
    h1: 'Custom Printed Cookie Bags',
    cardBlurb: 'Counter and retail bags for cookies, with optional window panels.',
    enquiryLabel: 'printed cookie bags',
    intro: [
      'Cookies are bought on appearance more than almost any bakery item — the chunks, the cracks, the visible chocolate. Packaging that hides all of that works against the sale.',
      'That is why window bags are far more common here than for other baked goods.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Product Sells Itself If You Let It Show',
        body: [
          'A cookie behind an opaque bag is a description. The same cookie behind a window is the thing itself.',
          'Where cookies are sold from a shelf rather than a counter, the window is usually worth its cost several times over.',
        ],
        link: {
          href: '/custom-glassine-paper/',
          anchor: 'translucent papers that show the product',
          sentence: 'A translucent bag achieves something similar without a separate window, as {link} explains.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Counter Sales Against Retail Packs',
        items: [
          'Counter sales — speed matters, plain bags are fine, the cookie is already visible.',
          'Retail shelf — a window and a printed panel do the selling.',
          'Gift packs — presentation and a sealed closure matter more than speed.',
          'Wholesale to cafés — labelling and shelf life information become relevant.',
        ],
        outro: 'The same cookie may need two different bags depending on where it is sold.',
      },
    ],
    faqs: [
      {
        q: 'Is a window worth the extra cost?',
        a: 'On a shelf, usually yes — cookies sell on appearance and a window shows it. At a counter where the product is already visible, it adds cost without adding much.',
      },
      {
        q: 'Do cookie bags need to be grease resistant?',
        a: 'For anything with a high butter content or melted chocolate, yes. Plain shortbread-style biscuits are drier and often fine in an ordinary bag.',
      },
      {
        q: 'Is a window worth the cost?',
        a: 'On a shelf, usually yes, because cookies sell on appearance. At a counter where the product is already visible, it adds less.',
      },
      {
        q: 'Do cookie bags need grease resistance?',
        a: 'For high-butter cookies and melted chocolate, yes. Drier shortbread-style biscuits are often fine in an ordinary bag.',
      },
      {
        q: 'What is different about a retail pack?',
        a: 'It needs a seal and space for weight, ingredients and allergens. A service bag needs neither.',
      },
      {
        q: 'Can we use one bag for both?',
        a: 'Rarely well. Decide which use dominates rather than adapting a service bag for a shelf afterwards.',
      },
      {
        q: 'Will cookies break in a bag?',
        a: 'Flat bags protect poorly against crushing. For gifting or postal sale, a box or a rigid insert is the safer route.',
      },
      {
        q: 'Can we print in one colour?',
        a: 'Yes, and on kraft a single strong colour reads well. Save the detail for a window if you want the product to show.',
      },
      {
        q: 'Do these suit a market stall?',
        a: 'They do, and the low unit cost suits high-volume outdoor selling where each bag is used once.',
      },
      {
        q: 'How do we size them?',
        a: 'From your largest cookie and the number per bag. Cookies vary far more in diameter than people expect.',
      },
    ],
    related: ['custom-pastry-bags', 'custom-candy-bags', 'custom-donut-bags', 'custom-glassine-paper'],
  },

  {
    slug: 'custom-sandwich-bags',
    name: 'Custom Sandwich Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Sandwich Bags UK | Custom Deli Bags',
    seoDescription:
      'Printed sandwich bags for UK delis and lunch counters, grease resistant and laid out with room for a filling label panel.',
    h1: 'Custom Printed Sandwich Bags',
    cardBlurb: 'Deli and lunch counter bags with space for a filling label.',
    enquiryLabel: 'printed sandwich bags',
    intro: [
      'A sandwich bag is quicker than wrapping and holds crumbs better. What it does not do is show the sandwich, which matters if the filling is the selling point.',
      'For a made-to-order counter, where the customer has already chosen, that is not a problem.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Bag Against Wrap for Sandwiches',
        columns: ['Bag', 'Wrapped sheet'],
        rows: [
          ['Speed at the counter', 'Faster', 'Slower, needs a fold'],
          ['Crumb containment', 'Better', 'Adequate'],
          ['Showing the sandwich', 'Hidden unless a window is added', 'Also hidden'],
          ['Cost', 'Slightly higher', 'Lower'],
          ['Eating from it', 'Awkward — usually removed', 'Can be eaten from directly'],
        ],
        outro: 'Lunch counters serving office workers who eat at a desk often prefer a wrap for exactly that last reason.',
      },
      {
        kind: 'prose',
        heading: 'Label Space Is Not Optional at a Busy Counter',
        body: [
          'A counter making eight fillings needs a way to tell them apart once bagged. A printed tick-box panel or a clear area for a sticker solves it.',
          'Without one, staff open bags to check, which is slow and looks careless.',
        ],
        link: {
          href: '/custom-sandwich-paper/',
          anchor: 'sheet wrapping for made-to-order sandwiches',
          sentence: 'Where customers eat at a desk, {link} lets them eat from the wrap.',
        },
      },
    ],
    faqs: [
      {
        q: 'Bag or wrap for a sandwich counter?',
        a: 'Bags are faster and contain crumbs better. Wraps can be eaten from directly, which office customers prefer. Plenty of counters use bags for takeaway and wraps for eat-in.',
      },
      {
        q: 'How should we mark which filling is which?',
        a: 'A printed tick-box panel on the bag, or a clear area for a sticker. Both are quicker than writing on the bag and far quicker than opening it to check.',
      },
      {
        q: 'How should we mark the filling?',
        a: 'A printed tick-box panel or a clear area for a sticker. Both are quicker than writing, and far quicker than opening the bag.',
      },
      {
        q: 'Do sandwich bags need grease resistance?',
        a: 'For mayonnaise-based and hot fillings, yes. Dry fillings can use a lighter and cheaper bag.',
      },
      {
        q: 'Can a service bag double as a retail pack?',
        a: 'Not usually, because a retail pack needs a seal and legally required labelling. Decide which you are ordering first.',
      },
      {
        q: 'Should the bag have a window?',
        a: 'It shows the filling, which helps on a shelf. At a made-to-order counter the customer has already chosen, so it adds less.',
      },
      {
        q: 'How many sizes do we need?',
        a: 'Usually one, sized to your largest sandwich. A bag sized for the smallest will not take the biggest.',
      },
      {
        q: 'Will the bag hold a sandwich and a packet?',
        a: 'Only if sized for both. Meal-deal counters often need a slightly larger bag than the sandwich alone suggests.',
      },
      {
        q: 'Can we print two colours?',
        a: 'Yes, and a simple design with a clear label panel usually works better than a busy one.',
      },
      {
        q: 'Can we order bags and wraps together?',
        a: 'Yes, and many counters use bags for takeaway and wraps for eat-in. One job keeps the branding consistent.',
      },
    ],
    related: ['custom-sandwich-paper', 'custom-sandwich-sleeves', 'custom-lunch-bags', 'custom-pastry-bags'],
  },

  {
    slug: 'custom-lunch-bags',
    name: 'Custom Lunch Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Lunch Bags UK | Custom Packed Lunch Bags',
    seoDescription:
      'Printed paper lunch bags for schools, events and workplace catering, sized for a complete packed meal including a drink.',
    h1: 'Custom Printed Lunch Bags',
    cardBlurb: 'Bags sized for a complete packed meal, for schools and events.',
    enquiryLabel: 'printed lunch bags',
    intro: [
      'A lunch bag holds a whole meal: a sandwich, a piece of fruit, a drink and something in a wrapper. It is bulkier than a sandwich bag and gets carried around all morning.',
      'Schools, event caterers and workplace catering all buy them for packed meal service.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Whole Meal Is Bulkier than It Looks',
        body: [
          'Sized to a sandwich and a drink, a lunch bag is always slightly too small once fruit and a snack go in. The top will not fold and the bag tears at the corner.',
          'Pack a real lunch into a sample before agreeing a size.',
        ],
        link: {
          href: '/custom-take-out-bags/',
          anchor: 'larger carriers for full orders',
          sentence: 'For anything bigger than a single packed meal, {link} are the right format.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Matters for Packed Meal Service',
        items: [
          'Enough capacity for a drink standing upright.',
          'A fold-over top that holds without tape.',
          'Space for a name or a dietary marking to be written on.',
          'Strength to survive a morning in a school bag.',
        ],
        outro: 'For allergy management, a clear panel for a handwritten name is worth more than any printed design.',
      },
    ],
    faqs: [
      {
        q: 'What size suits a school packed lunch?',
        a: 'Larger than a sandwich bag, with room for a drink standing upright. Pack a real lunch into a sample rather than sizing from the sandwich alone.',
      },
      {
        q: 'Can names be written on the bag?',
        a: 'Leave an unprinted, uncoated panel and a marker pen will take. For allergy management that panel is usually more important than anything else printed on the bag.',
      },
      {
        q: 'Will the bag survive a school bag?',
        a: 'It needs to. Specify for a morning of being carried and squashed rather than for a short trip from a counter.',
      },
      {
        q: 'Do lunch bags need handles?',
        a: 'Rarely, since they usually go inside another bag. Handles add cost for a use case that does not need them.',
      },
      {
        q: 'Should the top fold or seal?',
        a: 'A fold-over top is enough for most packed lunches and lets the bag be reopened. A seal suits pre-packed catering.',
      },
      {
        q: 'Can we print for a school?',
        a: 'Yes, and school and event caterers are the main buyers. A single colour usually suits the budget and the volume.',
      },
      {
        q: 'Will a drink make the bag damp?',
        a: 'A cold drink can sweat inside a closed bag. A lined grade helps where drinks are chilled.',
      },
      {
        q: 'How many do we order?',
        a: 'Count actual daily servings across a term rather than estimating. Institutional volumes are easy to get badly wrong.',
      },
      {
        q: 'Do these suit event catering as well as schools?',
        a: 'Yes. Conference and event caterers use the same format for packed meal service, and the requirements barely differ: a bag that holds a filled roll, a drink and a piece of fruit.',
      },
      {
        q: 'Can we print dietary marks?',
        a: 'A printed tick-box panel works where the menu is stable. Where meals vary daily, a sticker is more practical.',
      },
    ],
    related: ['custom-sandwich-bags', 'custom-take-out-bags', 'custom-snack-bags', 'custom-kraft-food-bags'],
  },

  {
    slug: 'custom-french-fry-bags',
    name: 'Custom Chip Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Chip Bags UK | Custom French Fry Bags',
    seoDescription:
      'Printed chip bags in grease-resistant paper, with an open top so chips vent steam rather than going soft on the way home.',
    h1: 'Custom Printed Chip Bags',
    cardBlurb: 'Grease-resistant bags with an open top so chips vent.',
    enquiryLabel: 'printed chip bags',
    intro: [
      'A chip bag has to do two contradictory things: hold hot oily chips, and let steam out so they stay crisp.',
      'An open top handles the second; a grease-resistant paper handles the first.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Do Not Close the Top',
        body: [
          'Folding a chip bag closed traps steam and the chips soften within a couple of minutes. It feels tidier and produces a worse product.',
          'Bags for chips are meant to be handed over open, which is worth telling staff explicitly if they are used to closing everything.',
        ],
        link: {
          href: '/french-fry-boxes/',
          anchor: 'boxes and scoops for larger portions',
          sentence: 'Above a modest portion size, {link} hold their shape better than a bag.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Separates a Good Chip Bag',
        items: [
          'Grease-resistant paper — chips carry more oil than almost anything.',
          'A base that lets the bag stand while it is being filled.',
          'Enough height that chips do not fall out when it is carried.',
          'A width that takes a scoop or a basket load without spilling.',
        ],
        outro: 'Weigh a typical portion and send the figure rather than describing it as regular or large.',
      },
    ],
    faqs: [
      {
        q: 'Should chip bags be folded closed?',
        a: 'No. Closing the top traps steam and softens the chips within minutes. They are designed to be handed over open, which is the opposite of most bags.',
      },
      {
        q: 'Bag or box for chips?',
        a: 'A bag suits smaller portions and costs less. A box holds its shape better under a large portion and stacks on a tray, which a bag does not.',
      },
      {
        q: 'Will the bag stand while being filled?',
        a: 'With a formed base, yes, and that matters when staff fill one-handed from a fryer basket.',
      },
      {
        q: 'What portion size should we quote for?',
        a: 'Weigh a typical serving. Descriptions like regular and large vary far too much between shops to size from.',
      },
      {
        q: 'Do these need grease resistance?',
        a: 'Yes. Chips carry more free oil than almost anything, and an untreated bag goes translucent within a minute.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, though one or two colours suits the price point of a high-volume item bought by the thousand.',
      },
      {
        q: 'Will chips fall out when carried?',
        a: 'Enough height stops it. A shallow bag with a full portion is where spillage happens.',
      },
      {
        q: 'Do these suit a market pitch?',
        a: 'They suit them well. Nothing else in this range lets a walking customer hold chips at a lower cost per portion.',
      },
      {
        q: 'Can we print a chip shop name and address?',
        a: 'Yes, and one strong colour usually reads better than a detailed design on an absorbent grease-resistant stock.',
      },
      {
        q: 'Do these suit a festival pitch?',
        a: 'They do, and a bag is the cheapest chip packaging that still lets a customer walk while eating.',
      },
    ],
    related: ['french-fry-boxes', 'custom-fries-sleeves', 'custom-printed-fry-paper', 'custom-snack-bags'],
  },

  {
    slug: 'custom-popcorn-bags',
    name: 'Custom Popcorn Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Popcorn Bags UK | Custom Cinema Bags',
    seoDescription:
      'Printed popcorn bags for cinemas, events and markets, with a large print face and no lining needed for dry-seasoned popcorn.',
    h1: 'Custom Printed Popcorn Bags',
    cardBlurb: 'Large-print bags for dry popcorn, with no lining needed.',
    enquiryLabel: 'printed popcorn bags',
    intro: [
      'Popcorn is dry, light and bulky, which makes it one of the easiest things a paper bag ever holds.',
      'That frees up the specification: no lining, a light paper, and the whole budget spent on the printed face.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Volume Is the Constraint, Not Weight',
        body: [
          'A bag holding 100 grams of popcorn is far bigger than one holding 100 grams of anything else. Size from the volume you serve rather than the weight.',
          'That large surface is also the reason popcorn bags carry such bold printing — there is a great deal of it to fill.',
        ],
        link: {
          href: '/custom-popcorn-sleeves/',
          anchor: 'sleeves for single popcorn portions',
          sentence: 'For a smaller individual serve, {link} are easier to hold than a bag.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Points Worth Specifying',
        items: [
          'A base that stands so the bag can be filled with one hand.',
          'Height that reads as generous — tall bags look like more popcorn.',
          'A lining only if the popcorn is buttered rather than dry-seasoned.',
          'Print with strong contrast, since cinema foyers are dim.',
        ],
        outro: 'Striped designs remain popular because they read clearly at a distance and in low light.',
      },
    ],
    faqs: [
      {
        q: 'Do popcorn bags need a grease-resistant lining?',
        a: 'Dry-seasoned and glazed popcorn does not. Buttered popcorn does, and it is worth being specific because the two look identical on a specification and behave very differently.',
      },
      {
        q: 'How big should a popcorn bag be?',
        a: 'Size by volume, not weight. Popcorn is far bulkier per gram than anything else in this range, so a bag sized by weight will be much too small.',
      },
      {
        q: 'Does popcorn need a grease-resistant bag?',
        a: 'Dry-seasoned and glazed popcorn does not. Buttered popcorn does, and the two look identical on a specification sheet.',
      },
      {
        q: 'Why do striped designs persist?',
        a: 'Because they read clearly at a distance and in low light, which is exactly the condition a cinema foyer provides.',
      },
      {
        q: 'Will the bag stand open while filling?',
        a: 'With a formed base, yes. That matters when you are serving a queue one-handed, because a bag that collapses while being filled means spilled product and a slower line.',
      },
      {
        q: 'Should the bag be tall or wide?',
        a: 'Tall reads as more popcorn for the same volume, which is why cinema packaging has that shape.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and the large flat face takes it well. Contrast matters more than detail in a dark room.',
      },
      {
        q: 'Do these suit outdoor events?',
        a: 'They do, though wind catches a light empty bag. Weighted storage on the pitch is worth planning for.',
      },
      {
        q: 'How many sizes should we hold?',
        a: 'Usually two — an individual and a sharing size. A third rarely earns its storage at an event.',
      },
      {
        q: 'Do you supply these to cinemas?',
        a: 'Yes, alongside events and markets. Contrast matters more than detail in a dark foyer, which shapes the design.',
      },
    ],
    related: ['custom-popcorn-sleeves', 'custom-popcorn-trays', 'custom-snack-bags', 'custom-candy-bags'],
  },

  {
    slug: 'custom-snack-bags',
    name: 'Custom Snack Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Snack Bags UK | Custom Small Paper Bags',
    seoDescription:
      'Printed small snack bags for markets, events and retail shelves, sized for a single portion of dry or lightly dressed food.',
    h1: 'Custom Printed Snack Bags',
    cardBlurb: 'Small bags for single portions of dry or lightly dressed snacks.',
    enquiryLabel: 'printed snack bags',
    intro: [
      'Snack bags are the small, high-volume end of the range: nuts at a market, crisps at an event, a handful of something at a festival.',
      'They are used for seconds and bought by the thousand, which shapes what is worth spending on them.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'High Volume, Low Attention',
        body: [
          'A snack bag is held for a couple of minutes and rarely looked at closely. A one-colour logo identifies the seller, which is usually all the branding that pays back.',
          'Where the bag is a retail pack sitting on a shelf, the calculation changes completely.',
        ],
        link: {
          href: '/paper-snack-cups/',
          anchor: 'snack cups as an alternative format',
          sentence: 'For eating while walking, {link} are easier to hold than a bag.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Service Against Retail',
        items: [
          'Service — plain or one-colour, bought on unit price, opened immediately.',
          'Retail — a printed face, a seal, and space for weight and ingredients.',
          'Markets — somewhere between the two, often a printed bag with a sticker.',
          'Events — branded for the venue rather than the product.',
        ],
        outro: 'Retail packs need labelling that service bags do not, so decide which you are ordering.',
      },
    ],
    faqs: [
      {
        q: 'Is it worth printing snack bags?',
        a: 'A single-colour logo usually is — it identifies who sold it. Full-colour artwork rarely repays itself on a bag opened within a minute of being handed over.',
      },
      {
        q: 'Can a service bag be used as a retail pack?',
        a: 'Not usually, because a retail pack needs a seal and space for legally required labelling. It is worth deciding which you need before ordering rather than adapting afterwards.',
      },
      {
        q: 'What size suits a single portion?',
        a: 'Size from a weighed portion rather than a target. Snack portions vary widely between operators.',
      },
      {
        q: 'Do dry snacks need a lining?',
        a: 'Genuinely dry ones do not, which keeps the cost down. Anything dressed, fried or buttered does.',
      },
      {
        q: 'Will the bag stand up?',
        a: 'A flat bag will not; a block-bottom one will. For self-service displays that difference matters.',
      },
      {
        q: 'Can we run several sizes?',
        a: 'Yes, and running them in one job shares the setup between them rather than repeating it.',
      },
      {
        q: 'Do these suit a market stall?',
        a: 'They do, and the low unit cost suits high-volume selling where each bag is used once.',
      },
      {
        q: 'How are they supplied?',
        a: 'Flat in cases. A snack bag takes very little storage, which suits stalls and kiosks with almost none.',
      },
      {
        q: 'Can we add a hanging hole?',
        a: 'Yes, for clip strip display at a till. It has to be designed into the shape rather than added afterwards.',
      },
      {
        q: 'Do these suit a farm shop shelf?',
        a: 'With a seal and labelling space, yes. A service bag without either is a counter product rather than a shelf one.',
      },
    ],
    related: ['custom-popcorn-bags', 'paper-snack-cups', 'custom-candy-bags', 'custom-french-fry-bags'],
  },

  {
    slug: 'custom-candy-bags',
    name: 'Custom Sweet Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Sweet Bags UK | Custom Candy Bags',
    seoDescription:
      'Printed sweet bags for pick-and-mix counters, sweet shops and events, including translucent and windowed options by weight.',
    h1: 'Custom Printed Sweet Bags',
    cardBlurb: 'Pick-and-mix and sweet shop bags, including translucent options.',
    enquiryLabel: 'printed sweet bags',
    intro: [
      'Sweets are colourful, and a bag that hides them removes most of the appeal. Sweet shops have understood this for a century, which is why translucent and windowed bags dominate.',
      'The other requirement is a bag that stands open while a customer fills it themselves.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Customers Fill These Bags, Not Staff',
        body: [
          'Pick-and-mix means the bag is handled by someone with a scoop in one hand and no training. It has to open easily and stay open on a counter.',
          'A flat bag that needs two hands to separate is a genuine friction point in a sweet shop.',
        ],
        link: {
          href: '/custom-glassine-paper/',
          anchor: 'translucent paper that shows the contents',
          sentence: 'The material behind translucent sweet bags is covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Makes a Sweet Bag Work',
        items: [
          'Contents visible, through translucency or a window.',
          'Easy to open one-handed at a self-service counter.',
          'A fold-over top or a sticker to close it at the till.',
          'Sizes matched to your weight bands, since sweets are sold by weight.',
        ],
        outro: 'If you sell by weight, size the bags to your price bands rather than to a nominal volume.',
      },
    ],
    faqs: [
      {
        q: 'Should sweet bags be see-through?',
        a: 'For pick-and-mix, it helps a great deal — colour is most of the appeal, and a customer filling a bag wants to see what is going in. For pre-packed sweets, a printed bag with a window works equally well.',
      },
      {
        q: 'What sizes should we stock?',
        a: 'Match them to your price and weight bands rather than to round volumes. A bag that holds slightly more than a standard portion looks mean when it is only two thirds full.',
      },
      {
        q: 'Will the bag stand open for self-service?',
        a: 'It needs to, because a customer is filling it with a scoop in one hand. A flat bag that needs two hands is a real friction point.',
      },
      {
        q: 'How do we close them at the till?',
        a: 'A fold-over top or a printed sticker. A sticker also gives you somewhere to put a weight or price label.',
      },
      {
        q: 'Can we print on a translucent bag?',
        a: 'Yes, and the contents showing through the unprinted areas creates depth. Open designs use that better than heavy coverage.',
      },
      {
        q: 'Do these suit a sweet shop?',
        a: 'They are the standard format for a sweet shop, alongside event favours and party bags. A window or a printed panel lets the contents do the selling from behind a counter.',
      },
      {
        q: 'Will sticky sweets mark the bag?',
        a: 'Glazed and sugared sweets can. A coated inner face helps where the sweets are genuinely sticky.',
      },
      {
        q: 'Can we run several sizes in one order?',
        a: 'Yes, and it shares the setup. Send the split between sizes rather than a combined total.',
      },
      {
        q: 'Can we print weight bands on the bag?',
        a: 'Yes, though many shops prefer a sticker so the same bag serves several bands. Tell us which you would rather.',
      },
      {
        q: 'Do these suit party and event bags?',
        a: 'They do, and short digital runs with a name or date are a common request alongside the shop trade.',
      },
    ],
    related: ['custom-glassine-paper', 'custom-cookie-bags', 'custom-halloween-treat-bags', 'custom-snack-bags'],
  },

  {
    slug: 'custom-halloween-treat-bags',
    name: 'Custom Halloween Treat Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Halloween Treat Bags UK | Printed Seasonal Sweet Bags',
    seoDescription:
      'Printed Halloween treat bags for shops, events and schools, ordered against a fixed date and a very short selling window.',
    h1: 'Custom Halloween Treat Bags',
    cardBlurb: 'Seasonal sweet bags for a fixed date and a short selling window.',
    enquiryLabel: 'Halloween treat bags',
    intro: [
      'Halloween packaging has an unusually short selling window and a completely fixed date. Stock that arrives on 1 November is worthless.',
      'That makes the scheduling more important than anything about the bag itself.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Ordering Against a Fixed Date',
        steps: [
          {
            title: 'Set the In-Store Date, Not the Event Date',
            body: 'Halloween stock sells through most of October. Being ready on the 31st is being three weeks late.',
          },
          {
            title: 'Confirm the Lead Time in Writing',
            body: 'Seasonal print schedules fill up. We confirm your lead time on the quote rather than quoting a general figure.',
          },
          {
            title: 'Order Conservatively',
            body: 'Unsold seasonal stock has no second life unless the artwork avoids a year.',
          },
          {
            title: 'Keep Artwork Undated If You Can',
            body: 'Undated Halloween designs can be carried into the following autumn.',
          },
        ],
        link: {
          href: '/event-or-seasonal-sleeves/',
          anchor: 'the same scheduling logic across seasonal packaging',
          sentence: 'The approach is the same as for {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'Design for a Short, Intense Season',
        body: [
          'Halloween artwork is used for perhaps five weeks and then stops completely. That argues for a design that is unmistakably seasonal rather than subtle.',
          'It also argues for digital printing on modest quantities rather than a long run that leaves stock behind.',
        ],
      },
    ],
    faqs: [
      {
        q: 'When should Halloween bags be ordered?',
        a: 'Working back from when stock needs to be in store, which is late September rather than late October. Ask for a confirmed lead time as soon as the design is settled.',
      },
      {
        q: 'What happens to unsold stock?',
        a: 'With undated artwork it can be carried into the following autumn. With a year printed on it, it cannot, which is the main argument for leaving the year off.',
      },
      {
        q: 'Why is the season so short?',
        a: 'Halloween stock sells through October and stops completely. That five-week window is what makes over-ordering costly.',
      },
      {
        q: 'Should the design be subtle?',
        a: 'Rarely. Seasonal artwork used for five weeks benefits from being unmistakably seasonal rather than understated.',
      },
      {
        q: 'Can we run several designs?',
        a: 'On digital printing, yes, and a set works well for a seasonal range. Send the split between them.',
      },
      {
        q: 'Do these need a lining?',
        a: 'Wrapped sweets need nothing more than plain paper. Only unwrapped or glazed items call for a coated inner face.',
      },
      {
        q: 'What size suits a treat bag?',
        a: 'Small, sized to a handful of wrapped sweets. Larger bags look under-filled, which works against the offer.',
      },
      {
        q: 'Do these suit schools and events?',
        a: 'They are frequently bought for both, alongside shops. Volumes are usually modest, which suits digital printing.',
      },
      {
        q: 'Can we run a Christmas design in the same order?',
        a: 'Yes, and combining two seasonal runs shares the setup. The lead times differ, so tell us both dates.',
      },
      {
        q: 'Does the bag need a coated inner face?',
        a: 'Wrapped sweets need nothing beyond plain paper. Unwrapped or glazed treats are the case where a coated face earns its cost.',
      },
    ],
    related: ['custom-candy-bags', 'event-or-seasonal-sleeves', 'christmas-paper-cups', 'custom-cookie-bags'],
  },

  {
    slug: 'custom-coffee-bags',
    name: 'Custom Coffee Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Coffee Bags UK | Custom Retail Coffee Packaging',
    seoDescription:
      'Printed coffee bags for retail beans and grounds, with one-way valve and resealable options plus room for roast information.',
    h1: 'Custom Printed Coffee Bags',
    cardBlurb: 'Retail bags for beans and grounds, with valve and reseal options.',
    enquiryLabel: 'printed coffee bags',
    intro: [
      'Roasted coffee releases carbon dioxide for days after roasting. Sealed in a bag with nowhere for it to go, the bag inflates and eventually splits.',
      'That is why coffee packaging has a one-way valve, and it is the detail that separates coffee bags from every other bag here.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Valve Lets Gas Out Without Letting Air In',
        body: [
          'A one-way valve releases the carbon dioxide from fresh roast while keeping oxygen out, which is what would stale the coffee.',
          'Bagging fresh coffee without one means either inflated bags on the shelf or waiting days before packing, and neither suits a working roastery.',
        ],
        link: {
          href: '/custom-tea-bags/',
          anchor: 'packaging for loose tea',
          sentence: 'Tea has different requirements again, covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What a Retail Coffee Bag Has to Carry',
        items: [
          'Origin, roast date and roast level, which speciality buyers look for.',
          'Weight, ingredients and business details as required for retail.',
          'A barcode on a flat panel that scans reliably.',
          'A resealable closure, since a bag is opened many times before it is finished.',
        ],
        outro: 'Roast date changes with every batch, so leave a clear area for it rather than printing it.',
      },
    ],
    faqs: [
      {
        q: 'Do we need a valve in the bag?',
        a: 'For freshly roasted coffee, effectively yes. Without one the bag inflates from the gas the coffee releases, and the alternative is waiting several days before packing.',
      },
      {
        q: 'How should we mark the roast date?',
        a: 'Leave a clear panel and apply it per batch, rather than printing it. Roast date changes constantly and printing it would mean a new run every time.',
      },
      {
        q: 'Do we need a valve?',
        a: 'For freshly roasted coffee, effectively yes. Without one the bag inflates from the gas the beans release.',
      },
      {
        q: 'Should the bag reseal?',
        a: 'Yes. A bag is opened many times before it is finished, and a closure that stops holding is a real complaint.',
      },
      {
        q: 'What information has to fit?',
        a: 'Origin, roast level, weight, ingredients and business details, plus a scannable barcode on a flat panel.',
      },
      {
        q: 'Can we run several origins in one order?',
        a: 'On digital printing, yes, which suits a roastery with a rotating single-origin range. Send the split.',
      },
      {
        q: 'Will light affect the coffee?',
        a: 'It degrades it over time, which is why most retail coffee bags are opaque rather than windowed.',
      },
      {
        q: 'Do these suit wholesale as well as retail?',
        a: 'Wholesale bags are usually larger and carry less retail information. Tell us which use dominates.',
      },
      {
        q: 'Where should the barcode go?',
        a: 'On a flat panel with clear space around it, away from folds and the valve, so it scans reliably at the till.',
      },
      {
        q: 'Can we order these without a valve?',
        a: 'For pre-ground coffee rested before packing, yes. For freshly roasted beans a valve is effectively necessary.',
      },
    ],
    related: ['custom-tea-bags', 'custom-spice-bags', 'custom-kraft-food-bags', 'custom-jerky-bags'],
  },

  {
    slug: 'custom-tea-bags',
    name: 'Custom Tea Packaging Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Tea Bags UK | Custom Loose Tea Packaging',
    seoDescription:
      'Printed retail packaging bags for loose leaf tea, protecting the leaf from light and moisture while holding the aroma in.',
    h1: 'Custom Tea Packaging Bags',
    cardBlurb: 'Retail bags for loose leaf tea, protecting aroma and dry leaf.',
    enquiryLabel: 'tea packaging bags',
    intro: [
      'This page covers bags that loose leaf tea is sold in, rather than the infusion bags tea is brewed in.',
      'Tea is fragile in a specific way: it absorbs moisture and other smells, and light degrades it. The packaging is doing preservation work.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Tea Takes on Whatever Is Around It',
        body: [
          'Dry tea leaf is highly absorbent, which is why it picks up moisture and nearby aromas readily. A bag that is not a genuine barrier lets both in.',
          'That is also why tea should not be stored next to strongly scented products, whatever the packaging.',
        ],
        link: {
          href: '/custom-coffee-bags/',
          anchor: 'coffee packaging and its different problem',
          sentence: 'Coffee needs gas to escape rather than kept out, as {link} explains.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What a Tea Bag Has to Do',
        items: [
          'Keep moisture out, since damp leaf spoils quickly.',
          'Block light, which degrades tea over time.',
          'Hold aroma in — much of the value is in the smell.',
          'Reseal, because a bag is opened many times over weeks.',
        ],
        outro: 'A window looks appealing and lets light in, which is a genuine trade rather than a free feature.',
      },
    ],
    faqs: [
      {
        q: 'Should a tea bag have a window?',
        a: 'It shows the leaf, which sells a speciality tea, and it lets light in, which degrades it. Some brands use a small window as a compromise; others print an image of the leaf instead.',
      },
      {
        q: 'Are these the bags tea is brewed in?',
        a: 'No. This page covers retail packaging for loose leaf tea. Infusion bags for brewing are a different product entirely.',
      },
      {
        q: 'Why does tea need a barrier?',
        a: 'Dry leaf absorbs moisture and nearby aromas readily, and light degrades it. The packaging is doing preservation work.',
      },
      {
        q: 'Should it reseal?',
        a: 'Yes. A tea bag is opened repeatedly over weeks, so a closure that survives that is worth specifying.',
      },
      {
        q: 'Can we run several blends in one order?',
        a: 'On digital printing, yes, which suits a range of blends. Send the quantity of each rather than a total.',
      },
      {
        q: 'Will the bag hold the aroma?',
        a: 'A proper barrier will, and much of what customers are buying in speciality tea is the smell when the bag opens.',
      },
      {
        q: 'What size suits loose leaf?',
        a: 'Sized to your weight bands. Loose leaf is bulky for its weight, so a bag sized by grams alone comes out too small.',
      },
      {
        q: 'Do these suit wholesale?',
        a: 'Wholesale packs are larger and carry less retail information. Tell us which use dominates before we quote.',
      },
      {
        q: 'Can we print brewing instructions?',
        a: 'Yes, and speciality tea usually carries them. Lay out the information panel with the front rather than fitting it in afterwards.',
      },
      {
        q: 'Do these suit loose leaf sold by weight?',
        a: 'Yes, sized to your weight bands. Loose leaf is bulky for its weight, so a bag sized by grams alone comes out too small.',
      },
    ],
    related: ['custom-coffee-bags', 'custom-spice-bags', 'custom-candy-bags', 'custom-kraft-food-bags'],
  },

  {
    slug: 'custom-spice-bags',
    name: 'Custom Spice Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Spice Bags UK | Custom Herb & Spice Packaging',
    seoDescription:
      'Printed spice and herb packaging bags with a moisture barrier and a reseal that survives months of repeated kitchen opening.',
    h1: 'Custom Spice Packaging Bags',
    cardBlurb: 'Small resealable bags with a barrier for herbs and ground spices.',
    enquiryLabel: 'spice packaging bags',
    intro: [
      'Spices are sold in small quantities and used a pinch at a time, so a bag is opened dozens of times over months. Reseal quality matters more than almost anything else.',
      'Ground spices also lose their aroma quickly once air gets to them, which the barrier has to slow down.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Opened Many Times, Over a Long Period',
        body: [
          'Unlike most food packaging, a spice bag has a long working life. A reseal that stops holding after ten openings is a real problem for the customer.',
          'That argues for a proper closure rather than a fold-over top, even at small pack sizes.',
        ],
        link: {
          href: '/custom-tea-bags/',
          anchor: 'packaging with the same aroma requirements',
          sentence: 'Tea faces a similar preservation problem, covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Small Pack Considerations',
        items: [
          'A bag that stands up, so it can sit in a cupboard rather than lie flat.',
          'A reseal that survives repeated use over months.',
          'Space for ingredients, weight and best-before information on a small face.',
          'A barrier against moisture, which cakes ground spice solid.',
        ],
        outro: 'The printed face on a small bag fills up quickly, so plan the required information before the design.',
      },
    ],
    faqs: [
      {
        q: 'Do spice bags need to stand up?',
        a: 'It helps a great deal in a kitchen cupboard, where a flat bag disappears under everything else. A standing bag is easier to find and easier to pour from.',
      },
      {
        q: 'How much information has to fit on a small bag?',
        a: 'More than most people plan for — ingredients, weight, best-before and business details all have to be legible. Lay out the required panel before designing the front.',
      },
      {
        q: 'Should spice bags stand up?',
        a: 'It helps a great deal in a kitchen cupboard, where a flat bag disappears. A standing bag is easier to find and pour from.',
      },
      {
        q: 'How much information has to fit?',
        a: 'More than most people plan for on a small face — ingredients, weight, best-before and business details, all legible.',
      },
      {
        q: 'Why does the reseal matter so much?',
        a: 'Because a spice bag is opened dozens of times over months. A closure that stops holding after ten uses is a real problem.',
      },
      {
        q: 'Do ground spices need more protection?',
        a: 'They lose aroma faster than whole spices once air reaches them, which is what the barrier is slowing down.',
      },
      {
        q: 'Will moisture cake the spice?',
        a: 'It will without a barrier. Caking is the most common complaint and it is a packaging problem rather than a product one.',
      },
      {
        q: 'Can we run several spices in one order?',
        a: 'On digital printing, yes, and a range is the normal case. Send the quantity of each.',
      },
      {
        q: 'What size suits retail?',
        a: 'Small, matched to your price bands. Spices are sold in modest quantities and used a pinch at a time.',
      },
      {
        q: 'Should there be a window?',
        a: 'It shows the colour, which sells a spice. It also lets light in, so many brands print an image of the product instead.',
      },
    ],
    related: ['custom-tea-bags', 'custom-coffee-bags', 'custom-flour-bags', 'custom-jerky-bags'],
  },

  {
    slug: 'custom-flour-bags',
    name: 'Custom Flour Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Flour Bags UK | Custom Mill & Bakery Bags',
    seoDescription:
      'Printed flour bags for mills and bakeries, built for sustained weight and for fine powder that finds every gap in a seam.',
    h1: 'Custom Printed Flour Bags',
    cardBlurb: 'Bags built for weight and for powder that escapes any weak seam.',
    enquiryLabel: 'printed flour bags',
    intro: [
      'Flour is heavy and it is a fine powder, which is a difficult combination for a paper bag. Weight stresses the seams and powder escapes through any gap the weight creates.',
      'Mills and bakeries buying retail packs need both problems solved at once.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Powder Finds Every Weakness',
        body: [
          'A seam that would hold a solid product perfectly well will leak fine flour, and a leaking bag makes a mess of an entire shelf.',
          'That is why flour bags use a different seam construction from bags of the same weight carrying something coarser.',
        ],
        link: {
          href: '/custom-grocery-bags/',
          anchor: 'carriers for the shopping the flour goes into',
          sentence: 'Farm shops selling their own flour usually order {link} alongside.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What a Flour Bag Has to Handle',
        items: [
          'Sustained weight without splitting at the base.',
          'Fine powder that escapes through any seam gap.',
          'Being stacked in a warehouse and on a shelf.',
          'A closure that reseals, since a bag is used over weeks.',
        ],
        outro: 'Stacking is worth mentioning at quote stage, because it changes the construction.',
      },
    ],
    faqs: [
      {
        q: 'Why does flour leak from our bags?',
        a: 'Usually the seam construction rather than the paper. Fine powder escapes through gaps that a coarser product would never find, which is why flour bags use a different seam.',
      },
      {
        q: 'Can flour bags be stacked?',
        a: 'They need to be built for it. Tell us how they will be stored and transported, since a bag designed for a shelf and one designed for a pallet are not the same specification.',
      },
      {
        q: 'What weight of paper do we need?',
        a: 'Heavier than a food carrier of the same volume, because flour is dense and concentrates load at the base.',
      },
      {
        q: 'Should the bag reseal?',
        a: 'For retail, yes. A bag of flour is used over weeks, and a fold-over top alone lets powder escape into a cupboard.',
      },
      {
        q: 'Can we print in two colours?',
        a: 'Yes, and mills often use a simple two-colour design that reads clearly on a large kraft face.',
      },
      {
        q: 'Do these suit a farm shop selling its own flour?',
        a: 'They are frequently bought for exactly that, alongside working mills packing for retail sale. The board weight matters more here than the print, because flour is heavier than it looks.',
      },
      {
        q: 'What size should we choose?',
        a: 'Matched to your weight bands. Flour is sold in standard weights, so the bag is sized to those rather than to a volume.',
      },
      {
        q: 'Will the bag survive being dropped?',
        a: 'A properly specified one will. Base failure on impact is the usual sign the paper weight is too light.',
      },
      {
        q: 'Can we print milling information?',
        a: 'Yes, and provenance sells a specialist flour. Leave room for weight and best-before marks applied per batch.',
      },
      {
        q: 'Do these suit wholesale sacks?',
        a: 'Sacks are a different construction from retail bags. Tell us the weight you pack and we will confirm what suits.',
      },
    ],
    related: ['custom-grocery-bags', 'custom-spice-bags', 'custom-bread-bags', 'custom-kraft-food-bags'],
  },

  {
    slug: 'custom-meat-packaging-bags',
    name: 'Custom Meat Packaging Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Meat Bags UK | Custom Butcher Packaging',
    seoDescription:
      'Printed meat packaging bags with a moisture barrier, for butchers and farm shops packing to sell rather than wrapping.',
    h1: 'Custom Meat Packaging Bags',
    cardBlurb: 'Barrier bags for butchers packing to sell rather than wrapping to order.',
    enquiryLabel: 'meat packaging bags',
    intro: [
      'Wrapping meat to order and packing it for a chilled shelf are different jobs. A pre-packed bag has to hold moisture in, look presentable for a day or more, and carry labelling.',
      'That is a considerably harder specification than a sheet of butcher paper.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Pre-Packed Bag Against Wrapped to Order',
        columns: ['Pre-packed bag', 'Wrapped sheet'],
        rows: [
          ['Moisture', 'Held in by a barrier', 'Soaks through over hours'],
          ['Shelf life on display', 'A day or more', 'Hours'],
          ['Labelling', 'Printed or applied to a panel', 'Written by hand'],
          ['Presentation', 'Retail-ready', 'Counter service'],
          ['Cost', 'Higher', 'Lower'],
        ],
        outro: 'Farm shops selling from a chiller need the bag; a service counter needs the sheet.',
      },
      {
        kind: 'prose',
        heading: 'Labelling Is Not Optional on a Pre-Pack',
        body: [
          'A pre-packed meat product carries requirements that a wrapped-to-order one does not, including weight, storage and use-by information.',
          'Confirm what applies with whoever handles your food labelling, then reserve a clear area of the right size before the artwork is designed.',
        ],
        link: {
          href: '/custom-butcher-paper/',
          anchor: 'counter wrapping for meat sold to order',
          sentence: 'For service across a counter, {link} is the simpler route.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do we need a barrier bag or is paper enough?',
        a: 'For meat sitting on a chilled shelf, a barrier bag holds moisture and keeps it presentable. Paper is fine for meat wrapped to order and taken away immediately.',
      },
      {
        q: 'Should the label be printed or applied?',
        a: 'Applied, in most cases, because weight and use-by dates change per pack. Reserve a clear panel of the right size in the artwork so the sticker does not land on your logo.',
      },
      {
        q: 'What information has to appear?',
        a: 'Weight, storage and use-by among others. Confirm the full requirement with whoever handles your food labelling.',
      },
      {
        q: 'Will the bag hold liquid?',
        a: 'A barrier bag contains normal moisture from a chilled cut. Standing liquid over a long period is a harder test.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and farm shops often do, because a branded pack carries further than a plain one. Leave room for the label.',
      },
      {
        q: 'Do these suit a farm shop chiller?',
        a: 'They are mostly bought for one, where meat is packed ahead rather than cut to order at a counter.',
      },
      {
        q: 'How do we size them?',
        a: 'From your typical cuts, including the largest joint you pack. Meat varies more in shape than in weight.',
      },
      {
        q: 'Is this the same as freezer packaging?',
        a: 'No. Freezer paper carries a barrier for frozen storage; these are for chilled retail. Tell us which use applies.',
      },
      {
        q: 'Can these go in a freezer?',
        a: 'Freezer storage needs a barrier specified for it. Tell us if packs are frozen rather than chilled and we will specify accordingly.',
      },
      {
        q: 'Do these suit a butcher\'s counter?',
        a: 'They suit pre-packed sale rather than cutting to order, where butcher paper is the quicker and cheaper wrap.',
      },
    ],
    related: ['custom-butcher-paper', 'custom-jerky-bags', 'custom-freezer-paper', 'custom-cheese-packaging-bags'],
  },

  {
    slug: 'custom-cheese-packaging-bags',
    name: 'Custom Cheese Packaging Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Cheese Bags UK | Custom Cheese Packaging',
    seoDescription:
      'Printed cheese packaging bags balancing breathability against moisture loss, for retail shelves and farm shop chillers.',
    h1: 'Custom Cheese Packaging Bags',
    cardBlurb: 'Retail bags balancing breathability against moisture loss.',
    enquiryLabel: 'cheese packaging bags',
    intro: [
      'Packing cheese for a shelf is harder than wrapping it at a counter. It has to breathe, hold its moisture, and still look appealing after two days in a chiller.',
      'Those requirements pull against each other, which is why cheese packaging is a specialist product.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Breathe, but Not Too Much',
        body: [
          'Fully sealed, cheese sweats and the surface spoils. Fully open, it dries and cracks. The packaging has to sit between the two for the length of its shelf life.',
          'That balance is what a cheese bag is designed around, and it is why an ordinary food bag performs poorly.',
        ],
        link: {
          href: '/custom-cheese-paper/',
          anchor: 'counter wrap for cheese cut to order',
          sentence: 'For a cheesemonger cutting to order, {link} is the appropriate material.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Retail Cheese Packs Need',
        items: [
          'Controlled breathability suited to the type of cheese.',
          'A window or printed description, since customers buy by variety.',
          'Space for weight, use-by and allergen information.',
          'A closure the customer can reuse at home.',
        ],
        outro: 'Different cheese types have different needs, so tell us what you are packing rather than asking for a general bag.',
      },
    ],
    faqs: [
      {
        q: 'Can we use an ordinary food bag for cheese?',
        a: 'It will hold the cheese and it will not manage moisture. Sealed too tightly the surface sweats within a day or two, which customers see through the pack.',
      },
      {
        q: 'Does the bag suit every type of cheese?',
        a: 'Not really — a hard aged cheese and a soft rind need different things from packaging. Tell us what you are packing and we will specify against it rather than offering one bag for everything.',
      },
      {
        q: 'Does one bag suit every cheese?',
        a: 'No. A hard aged cheese and a soft rind need different things. Tell us what you pack and we will specify against it.',
      },
      {
        q: 'Should the bag have a window?',
        a: 'Customers buy cheese by variety and appearance, so a window helps. Printing the variety clearly is the cheaper alternative.',
      },
      {
        q: 'Can the customer reseal it?',
        a: 'A reseal is worth having, since cheese is used over days rather than at once. It also reduces waste.',
      },
      {
        q: 'What information has to appear?',
        a: 'Weight, variety, use-by and allergen information among others. Confirm the full requirement with your own labelling process.',
      },
      {
        q: 'Why does breathability matter?',
        a: 'Sealed airtight the cheese sweats; fully open it dries. The packaging has to sit between the two for its shelf life.',
      },
      {
        q: 'Do these suit a farm shop?',
        a: 'They are frequently bought for one, alongside cheesemongers packing ahead rather than cutting to order.',
      },
      {
        q: 'How do we size them?',
        a: 'From your standard cut weights. Cheese is sold by weight, so the bag follows those bands rather than a volume.',
      },
      {
        q: 'Can we order these alongside cheese paper?',
        a: 'Yes, and counters selling both pre-packed and cut-to-order usually need each. Running them in one job shares the setup.',
      },
    ],
    related: ['custom-cheese-paper', 'custom-meat-packaging-bags', 'custom-deli-paper', 'custom-jerky-bags'],
  },

  {
    slug: 'custom-jerky-bags',
    name: 'Custom Jerky Bags',
    category: 'printed-papers-bags',
    subcategory: 'paper-bags',
    seoTitle: 'Printed Jerky Bags UK | Custom Dried Meat Packaging',
    seoDescription:
      'Printed jerky and dried meat bags with a moisture barrier and a reseal, built for a long shelf life at ambient temperature.',
    h1: 'Custom Jerky Bags',
    cardBlurb: 'Barrier bags with reseal for dried meat sold at ambient temperature.',
    enquiryLabel: 'jerky packaging bags',
    intro: [
      'Jerky is preserved by having its moisture removed, so the one thing packaging must not do is let moisture back in. Everything else follows from that.',
      'It is also sold at ambient temperature with a long shelf life, which puts more demand on the barrier than a chilled product would.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Moisture Is the Whole Enemy',
        body: [
          'Dried meat that takes up moisture goes soft and its shelf life collapses. A barrier that would be adequate for a chilled product sold within days is not enough here.',
          'Ambient distribution also means the pack may sit in a warm van or a sunny shelf, which tests it further.',
        ],
        link: {
          href: '/custom-meat-packaging-bags/',
          anchor: 'chilled meat packaging',
          sentence: 'Fresh meat has the opposite problem, covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What a Jerky Pack Needs',
        items: [
          'A moisture barrier suited to a long ambient shelf life.',
          'A reseal, since jerky is eaten over several sittings.',
          'A stand-up format, which sells better on a counter display.',
          'A hanging option, for the clip strips used at tills.',
        ],
        outro: 'Point-of-sale placement often decides the format, so say where the product will hang or stand.',
      },
    ],
    faqs: [
      {
        q: 'How long does jerky packaging need to protect for?',
        a: 'That depends on the shelf life you are declaring, which is your decision based on your own product testing. Tell us the target and we will specify a barrier against it.',
      },
      {
        q: 'Should the bag hang or stand?',
        a: 'It depends where it is sold. Clip strips at a till need a hanging hole; a counter display works better with a stand-up base. Some brands specify both.',
      },
      {
        q: 'How long must the barrier protect for?',
        a: 'That depends on the shelf life you declare, which comes from your own product testing. Tell us the target and we specify against it.',
      },
      {
        q: 'Why is moisture the main risk?',
        a: 'Because jerky is preserved by having its moisture removed. Any that gets back in softens it and collapses the shelf life.',
      },
      {
        q: 'Does ambient distribution change anything?',
        a: 'It makes the barrier work harder, since the pack may sit in a warm van or a sunny shelf rather than a chiller.',
      },
      {
        q: 'Should the bag reseal?',
        a: 'Yes. Jerky is eaten over several sittings, and a pack that cannot be reclosed loses condition quickly.',
      },
      {
        q: 'Can we run several flavours?',
        a: 'On digital printing, yes, which suits a range. Send the quantity of each rather than a combined total.',
      },
      {
        q: 'Should there be a window?',
        a: 'It shows the product, which sells it. It also lets light in, so many brands print an image instead.',
      },
      {
        q: 'What size suits retail?',
        a: 'Small, matched to your price bands. Jerky is sold in modest weights at a relatively high price per gram.',
      },
      {
        q: 'Can we order a hanging and a standing version?',
        a: 'Yes, and some brands need both for different retail placements. Send the split between them.',
      },
    ],
    related: ['custom-meat-packaging-bags', 'custom-snack-bags', 'custom-spice-bags', 'custom-cheese-packaging-bags'],
  },
];
