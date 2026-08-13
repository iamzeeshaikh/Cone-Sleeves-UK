import type { Product } from '../types';

/** Tray range. Board weight against load is the recurring decision. */
export const FOOD_TRAYS: Product[] = [
  {
    slug: 'custom-burger-trays',
    name: 'Custom Burger Trays',
    category: 'food-trays',
    seoTitle: 'Custom Burger Trays UK | Printed Board Trays',
    seoDescription:
      'Printed burger trays sized for a burger plus a side, in a lined board that holds its corners when carried one-handed and hot.',
    h1: 'Custom Burger Trays',
    cardBlurb: 'Trays sized for a burger plus a side, in board that holds under heat.',
    enquiryLabel: 'burger trays',
    intro: [
      'A burger tray is bought for eat-in service, where the customer carries food from a counter to a table with a drink in the other hand. It has to stay flat when held at one edge.',
      'That single requirement — one-handed carrying — decides the board weight more than anything else.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'One-handed carrying is the real test',
        body: [
          'A tray that feels sturdy on a counter can flex alarmingly when picked up at one corner with a full burger and chips on it.',
          'Test any sample the way customers will actually hold it, loaded, rather than empty on a flat surface.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Internal size', 'Set from a burger plus the side you serve with it'],
          ['Wall height', 'Enough to stop chips escaping when carried'],
          ['Board', 'Greaseproof-lined; burgers and chips together are demanding'],
          ['Supply', 'Flat-packed or pre-formed'],
          ['Print', 'Rim and base edges; the centre is covered by food'],
        ],
        note: 'Board grammages and forming options are confirmed on the written quote.',
      },
      {
        kind: 'bullets',
        heading: 'What tends to be specified alongside',
        items: [
          'A sleeve for the burger itself, so the tray stays cleaner.',
          'Paper liner sheets, which let the tray be wiped rather than binned.',
          'A separate chip container for anything with a wet topping.',
        ],
        outro: 'A liner is the cheapest way to extend how long a tray looks presentable.',
        link: {
          href: '/burger-sleeves/',
          anchor: 'burger sleeves used with a tray',
          sentence:
            'Most sites pair these with {link} rather than putting the burger on bare board.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do we need a liner as well as the tray?',
        a: 'Not strictly, but a paper liner keeps grease off the printed base and lets staff reuse a tray across several customers where that suits your service. It costs very little and extends how long the tray looks new.',
      },
      {
        q: 'Should the tray be printed in the centre?',
        a: 'There is little point — the food covers it. The rim and the outer edges are what customers see when the tray is carried and photographed.',
      },
    ],
    related: ['burger-sleeves', 'custom-combo-meal-trays', 'custom-fries-trays', 'custom-greaseproof-paper'],
  },

  {
    slug: 'custom-fries-trays',
    name: 'Custom Fries Trays',
    category: 'food-trays',
    seoTitle: 'Custom Fries Trays UK | Printed Loaded Chip Trays',
    seoDescription:
      'Printed chip trays with walls deep enough for loaded fries, in a grease-resistant board that stays rigid under cheese sauce.',
    h1: 'Custom Fries Trays',
    cardBlurb: 'Deep-walled trays for loaded fries and toppings.',
    enquiryLabel: 'fries trays',
    intro: [
      'Plain chips go in a sleeve or a scoop. Loaded fries — cheese, sauce, pulled meat piled on top — need walls, because the topping moves and the whole thing is far heavier.',
      'The tray becomes structural at that point rather than presentational.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Loaded fries are wet as well as heavy',
        body: [
          'Melted cheese and sauce find every seam. A tray assembled from a flat blank has corners where liquid collects, and a light board goes soft there first.',
          'A lined board with a well-formed corner handles it; an unlined one leaks within a few minutes of serving.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Specifying for a loaded portion',
        items: [
          'Wall height set from the topping, not the chips underneath.',
          'A base wide enough that the tray does not tip when carried.',
          'Grease-resistant lining, because cheese oil is worse than chip oil.',
          'A rim that can be gripped without fingers going into the food.',
        ],
        outro: 'Weigh a loaded portion and send us the figure — it is the only reliable basis for sizing.',
      },
      {
        kind: 'callout',
        heading: 'Delivery makes loaded fries harder still',
        body: 'A loaded tray in a courier bag tips and the topping ends up on one side. If a share of your orders are delivered, a lidded container is a more honest answer than a deeper tray.',
      },
    ],
    faqs: [
      {
        q: 'Can a chip sleeve handle loaded fries?',
        a: 'Rarely. A sleeve has no walls to contain a topping and no base area to spread the weight, so loaded portions tip out. Once you add toppings, a tray is the right format.',
      },
      {
        q: 'How deep should the walls be?',
        a: 'Deep enough that the topping sits below the rim, which is usually more than people expect. Measure a made-up portion rather than working from the chip volume alone.',
      },
    ],
    related: ['custom-fries-sleeves', 'custom-nacho-trays', 'french-fry-boxes', 'custom-combo-meal-trays'],
  },

  {
    slug: 'custom-nacho-trays',
    name: 'Custom Nacho Trays',
    category: 'food-trays',
    seoTitle: 'Custom Nacho Trays UK | Printed Trays with Dip Well',
    seoDescription:
      'Printed nacho trays with a full-height dip well, in a board specified for hot cheese sauce, salsa and one-handed carrying.',
    h1: 'Custom Nacho Trays',
    cardBlurb: 'Trays with a separate dip well for cheese and salsa.',
    enquiryLabel: 'nacho trays',
    intro: [
      'Nachos come with dips, and dips in the same compartment as the chips turn the whole portion soft within a minute.',
      'A separated well is the difference between nachos that work and nachos that arrive as a single soggy mass.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The well has to be genuinely separate',
        body: [
          'A shallow depression pressed into the base is not enough — sauce runs over the lip as soon as the tray is tilted.',
          'A raised divider that reaches the rim keeps the two apart while the customer walks with it, which is when separation actually matters.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Compartments', 'Main well plus one or two dip wells'],
          ['Divider height', 'Full height to the rim, not a shallow crease'],
          ['Board', 'Grease-resistant; hot cheese sauce is demanding'],
          ['Base', 'Wide enough to stay stable when carried one-handed'],
          ['Print', 'Rim and outer walls'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where nacho trays are used',
        items: [
          'Cinemas and venues, where portions are carried in the dark.',
          'Festivals and street food, where customers stand while eating.',
          'Sports grounds, where trays go up steps to a seat.',
          'Bars serving sharing portions to a table.',
        ],
        outro: 'Anywhere the customer walks any distance, the divider earns its cost.',
        link: {
          href: '/custom-combo-meal-trays/',
          anchor: 'compartment trays for full meals',
          sentence: 'The same divider construction is used in {link} for larger orders.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can the dip go in a separate pot instead?',
        a: 'It can, and for anything genuinely runny that is the better answer. A well in the tray suits thicker dips; a pot suits thin salsa that would otherwise slop over a divider.',
      },
      {
        q: 'Will hot cheese sauce soak through the board?',
        a: 'Through untreated board, yes, and quickly. A grease-resistant lining is the standard specification for this tray for exactly that reason.',
      },
    ],
    related: ['custom-fries-trays', 'custom-combo-meal-trays', 'custom-snack-trays', 'custom-taco-sleeves'],
  },

  {
    slug: 'custom-hot-dog-trays',
    name: 'Custom Hot Dog Trays',
    category: 'food-trays',
    seoTitle: 'Custom Hot Dog Trays UK | Printed Dog & Chip Trays',
    seoDescription:
      'Printed hot dog trays sized for a dog and a side, with a shaped channel that stops the roll rolling as the tray is carried.',
    h1: 'Custom Hot Dog Trays',
    cardBlurb: 'Trays with a channel for the roll and space for a side.',
    enquiryLabel: 'hot dog trays',
    intro: [
      'A hot dog on a flat tray rolls. It rolls into the chips, it rolls off the edge, and the toppings end up on the tray rather than the dog.',
      'A shaped channel fixes it, and costs nothing once the tool exists.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A channel, not a flat base',
        body: [
          'A shallow trough sized to the roll holds the dog upright with the toppings facing up. That is the whole design problem solved in one feature.',
          'Trays without it work fine on a table and badly the moment they are carried.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Points to specify',
        items: [
          'Roll length, which sets the tray length more than anything else.',
          'Whether a side is served on the same tray or separately.',
          'Channel width, sized to the roll rather than the sausage.',
          'Board with sauce resistance, since mustard and ketchup end up on the tray.',
        ],
        outro: 'Footlongs need their own tray; they do not fit a standard one at an angle.',
        link: {
          href: '/custom-hot-dog-sleeves/',
          anchor: 'sleeves for hot dogs taken away',
          sentence: 'For walking customers, {link} do the job a tray cannot.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do we need a tray if the dog is already in a sleeve?',
        a: 'Only if a side is served with it. A sleeved dog on its own is easy to carry; a sleeved dog plus chips needs somewhere to put both.',
      },
      {
        q: 'Will one tray fit standard and footlong?',
        a: 'Not comfortably. A footlong on a standard tray overhangs at both ends and tips. If you sell both, size the tray for the footlong or run two.',
      },
    ],
    related: ['custom-hot-dog-sleeves', 'custom-combo-meal-trays', 'custom-corn-dog-sleeves', 'custom-fries-trays'],
  },

  {
    slug: 'custom-pizza-trays',
    name: 'Custom Pizza Trays',
    category: 'food-trays',
    seoTitle: 'Custom Pizza Trays UK | Printed Board Pizza Bases',
    seoDescription:
      'Printed pizza trays and board bases for whole pizzas, sized to your largest diameter and rigid enough not to sag under it.',
    h1: 'Custom Pizza Trays',
    cardBlurb: 'Rigid board bases sized to your whole-pizza diameter.',
    enquiryLabel: 'pizza trays',
    intro: [
      'A pizza tray carries a hot, heavy, flexible disc that will fold if the board underneath it does.',
      'Rigidity across the diameter is the whole specification, and it gets harder as the pizza gets bigger.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Rigidity gets harder with diameter',
        body: [
          'A board that holds a 10in pizza flat may sag noticeably under a 16in one. The unsupported span grows faster than intuition suggests.',
          'Specify against your largest pizza rather than your most common one, or run two board weights.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Diameter', 'Sized to your largest pizza, with a small margin'],
          ['Board', 'Rigid; weight set against the span rather than the load'],
          ['Surface', 'Grease-resistant, or used with a liner'],
          ['Edge', 'Plain, or with a lip to help carrying'],
          ['Print', 'The rim, which is the only area not covered'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Used for',
        items: [
          'Whole pizzas served to a table on a board rather than a plate.',
          'Takeaway pizzas inside a box, where the tray adds rigidity.',
          'Market and festival trading, where a box would be excessive.',
          'Sharing plates and flatbreads served the same way.',
        ],
        link: {
          href: '/custom-pizza-liner/',
          anchor: 'liners that keep grease off the board',
          sentence: 'Adding {link} keeps a printed tray presentable across a service.',
        },
      },
    ],
    faqs: [
      {
        q: 'Does a tray inside a pizza box add anything?',
        a: 'It stops the base flexing when the box is carried at an angle, which is what causes toppings to slide to one side. On larger pizzas it makes a clear difference; on small ones it is often unnecessary.',
      },
      {
        q: 'Can the tray be square rather than round?',
        a: 'Yes, and square boards are easier to cut with less waste, which can reduce cost. Round looks more considered on a table, so it comes down to service style.',
      },
    ],
    related: ['custom-pizza-slice-trays', 'custom-pizza-liner', 'custom-pizza-slice-sleeves', 'custom-cardboard-food-trays'],
  },

  {
    slug: 'custom-pizza-slice-trays',
    name: 'Custom Pizza Slice Trays',
    category: 'food-trays',
    seoTitle: 'Pizza Slice Trays UK | Printed Wedge Trays',
    seoDescription:
      'Wedge-shaped slice trays that support a slice right to the tip, for UK counters and food halls selling pizza by the slice.',
    h1: 'Custom Pizza Slice Trays',
    cardBlurb: 'Wedge trays supporting a slice all the way to the tip.',
    enquiryLabel: 'pizza slice trays',
    intro: [
      'Selling pizza by the slice is a different business from selling whole pizzas, and it needs a wedge that supports the slice right to the point.',
      'A tray that stops short leaves the tip drooping over the edge, which is exactly what customers complain about.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Slice tray against slice sleeve',
        columns: ['Wedge tray', 'Slice sleeve'],
        rows: [
          ['Support', 'Full underside to the tip', 'Sides and part of the base'],
          ['Eating', 'Slice lifted off the tray', 'Eaten from the sleeve'],
          ['Walking customers', 'Awkward — needs two hands', 'Designed for it'],
          ['Seated service', 'Better presentation', 'Looks like takeaway'],
          ['Cost', 'More board per unit', 'Less'],
        ],
        outro: 'Counters serving both eat-in and takeaway usually stock one of each.',
      },
      {
        kind: 'bullets',
        heading: 'Sizing a wedge',
        items: [
          'The slice length from crust to tip, which varies with pizza diameter.',
          'Crust width at the outer edge.',
          'Whether a slice is folded by customers, which needs a shorter wedge.',
          'Whether two slices are served together on one tray.',
        ],
        link: {
          href: '/custom-pizza-slice-sleeves/',
          anchor: 'sleeves for slices eaten while walking',
          sentence: 'For takeaway slices, {link} suit better than a tray.',
        },
      },
    ],
    faqs: [
      {
        q: 'How far towards the tip does the tray need to reach?',
        a: 'As close to the tip as the shape allows. Support stopping two thirds of the way along still lets the tip droop, which is the failure customers notice first.',
      },
      {
        q: 'Can one wedge fit slices from different pizza sizes?',
        a: 'Only if you size for the largest, which leaves smaller slices sitting loose. Sites cutting one standard diameter get a much better fit.',
      },
    ],
    related: ['custom-pizza-slice-sleeves', 'custom-pizza-trays', 'custom-snack-trays', 'custom-pizza-liner'],
  },

  {
    slug: 'custom-sandwich-trays',
    name: 'Custom Sandwich Trays',
    category: 'food-trays',
    seoTitle: 'Custom Sandwich Trays UK | Printed Platter Trays',
    seoDescription:
      'Printed sandwich platter trays for office catering and buffets, with a reinforced rim that survives stacking during delivery.',
    h1: 'Custom Sandwich Trays',
    cardBlurb: 'Platter trays for office catering and buffet orders.',
    enquiryLabel: 'sandwich platter trays',
    intro: [
      'A sandwich platter is carried into an office by one person, often up stairs, sometimes stacked two high. Everything about the tray follows from that.',
      'It is one of the few trays in this range that has to survive a journey rather than a walk across a room.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Platters get stacked, so the rim matters',
        body: [
          'Two or three platters stacked for a delivery put all the weight on the rim of the one underneath. A soft rim collapses and the sandwiches below are crushed.',
          'A reinforced or folded rim carries that load. It is the detail that separates a catering tray from a serving tray.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What catering customers need from the tray',
        items: [
          'A rim strong enough for stacking during delivery.',
          'A surface that looks presentable when the lid comes off in a meeting room.',
          'Space for a label listing fillings and allergens.',
          'A size that fits the boot of a car and a standard meeting table.',
          'Compatibility with whatever lid or film you cover it with.',
        ],
        outro: 'Ask about the covering method early — it constrains the rim design more than anything else.',
        link: {
          href: '/custom-sandwich-sleeves/',
          anchor: 'individual sleeves for retail sandwiches',
          sentence: 'Sites doing retail as well as catering usually also need {link}.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Size', 'Set from portion count and the tables it will sit on'],
          ['Rim', 'Reinforced where platters are stacked in transit'],
          ['Board', 'Rigid; sandwiches are heavier in quantity than they seem'],
          ['Covering', 'Compatible with film or a fitted lid'],
          ['Print', 'Rim and underside, both visible when carried'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can platters be stacked for delivery?',
        a: 'Only if the rim is specified for it. A standard serving tray rim buckles under a second loaded platter, so tell us at quote stage if stacking is part of your process.',
      },
      {
        q: 'Should the tray or a separate card carry the allergen list?',
        a: 'A separate card is more flexible, since fillings change between orders. Printing a fixed list onto the tray only works if your platters never vary.',
      },
    ],
    related: ['custom-sandwich-sleeves', 'custom-combo-meal-trays', 'custom-bakery-trays', 'custom-cardboard-food-trays'],
  },

  {
    slug: 'custom-snack-trays',
    name: 'Custom Snack Trays',
    category: 'food-trays',
    seoTitle: 'Custom Snack Trays UK | Printed Small Serving Trays',
    seoDescription:
      'Small printed snack trays for bars, cinemas and standing events, sized to be held in one hand alongside a drink in the other.',
    h1: 'Custom Snack Trays',
    cardBlurb: 'Small trays for single portions eaten standing up.',
    enquiryLabel: 'snack trays',
    intro: [
      'A snack tray is held in one hand while the other holds a drink. That constrains the size far more than the portion does.',
      'Anything wider than a spread hand becomes a two-handed object, at which point the customer puts their drink down.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Size is set by the hand, not the portion',
        body: [
          'The useful maximum is roughly the width of a palm plus a thumb on the rim. Beyond that the tray needs a table.',
          'If your portion does not fit within that, the honest answer is a smaller portion or a different format rather than a bigger tray.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where small trays work',
        items: [
          'Bars serving bar snacks alongside drinks.',
          'Cinemas and theatres, where a seat has no table.',
          'Standing events and receptions.',
          'Sampling at markets and food halls.',
        ],
        outro: 'A thumb rest on the rim is a small detail that makes one-handed carrying noticeably easier.',
        link: {
          href: '/paper-snack-cups/',
          anchor: 'snack cups for loose portions',
          sentence: 'For loose snacks, {link} sit in a hand more comfortably than a tray does.',
        },
      },
    ],
    faqs: [
      {
        q: 'How small is too small?',
        a: 'A tray narrower than the portion makes food fall off the sides, which is worse than no tray. Measure a served portion and add a margin rather than working from a target size.',
      },
      {
        q: 'Do snack trays need grease resistance?',
        a: 'It depends entirely on the snack. Dry nuts and crisps do not; anything fried or dressed does. It is worth specifying against your actual menu rather than the category.',
      },
    ],
    related: ['paper-snack-cups', 'custom-nacho-trays', 'custom-popcorn-trays', 'custom-dessert-trays'],
  },

  {
    slug: 'custom-combo-meal-trays',
    name: 'Custom Combo Meal Trays',
    category: 'food-trays',
    seoTitle: 'Combo Meal Trays UK | Printed Compartment Trays',
    seoDescription:
      'Compartment trays keeping a main, a side and a dip apart, sized from your own portions rather than from a standard grid.',
    h1: 'Custom Combo Meal Trays',
    cardBlurb: 'Compartment trays keeping a main, a side and a dip apart.',
    enquiryLabel: 'combo meal trays',
    intro: [
      'A combo tray sells a meal deal as one thing rather than three loose items. The compartments are as much about how the order looks as about keeping food apart.',
      'They also stop a wet side making a dry main soggy, which is the practical reason kitchens adopt them.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Compartments earn their cost two ways',
        body: [
          'The obvious one is separation: chips do not sit in sauce, and a burger does not absorb moisture from a slaw.',
          'The less obvious one is perceived value. A meal presented in defined sections reads as a complete offer, which supports charging for it as one.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Layout', 'Two, three or four compartments, sized to your menu'],
          ['Divider height', 'Full height where liquids are involved'],
          ['Board', 'Grease-resistant across the whole tray'],
          ['Supply', 'Flat-packed or pre-formed'],
          ['Lidding', 'Optional, if meals are also delivered'],
        ],
        note: 'Compartment layouts are set from your own portion sizes, not from a standard grid.',
      },
      {
        kind: 'bullets',
        heading: 'Getting the layout right',
        items: [
          'Size compartments from real portions weighed on your scales.',
          'Put the wettest item in the deepest section.',
          'Leave the largest compartment for whatever the customer eats first.',
          'Avoid more than four sections — beyond that each becomes too small to use.',
        ],
        link: {
          href: '/custom-nacho-trays/',
          anchor: 'trays with a dedicated dip well',
          sentence: 'Where only a dip needs separating, {link} are a simpler option.',
        },
      },
    ],
    faqs: [
      {
        q: 'Are compartment trays worth it for a two-item meal?',
        a: 'If one item is wet and the other should stay crisp, yes. If both are dry, a plain tray does the same job for less money.',
      },
      {
        q: 'Can combo trays be lidded for delivery?',
        a: 'They can, and for delivery it is worth doing, since compartments alone do not stop food moving when a bag tips. Tell us at quote stage so the rim is designed for a lid.',
      },
    ],
    related: ['custom-burger-trays', 'custom-nacho-trays', 'custom-fries-trays', 'custom-bento-sleeves'],
  },

  {
    slug: 'custom-bakery-trays',
    name: 'Custom Bakery Trays',
    category: 'food-trays',
    seoTitle: 'Custom Bakery Trays UK | Printed Cake & Pastry Trays',
    seoDescription:
      'Printed bakery trays for cakes, pastries and multi-item orders, with a base that stops items sliding into one corner in transit.',
    h1: 'Custom Bakery Trays',
    cardBlurb: 'Trays for cakes and pastries bought several at a time.',
    enquiryLabel: 'bakery trays',
    intro: [
      'Bakery items are bought in fours and sixes, and they slide. A flat tray delivers six pastries to the customer\'s door in one corner.',
      'The tray\'s job here is arrangement as much as carrying.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Stopping items sliding',
        body: [
          'A shallow lip around the edge is not enough on its own — items still slide within it and end up stacked against one side.',
          'Shallow indentations or a lightly textured base hold items in place well enough for a short journey, which is usually all that is needed.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Bakery-specific considerations',
        items: [
          'Butter and glaze mark plain board, so a lined surface keeps the tray presentable.',
          'Items are usually visible through a lid or film, so the tray is part of the display.',
          'Trays often go into a box, so external dimensions have to match a box you already use.',
          'Icing sugar shows on dark board and disappears on white.',
        ],
        outro: 'If the tray goes inside a box, send the box dimensions with your enquiry.',
        link: {
          href: '/custom-pastry-sleeves/',
          anchor: 'sleeves for single pastry sales',
          sentence: 'For counter sales of one item, {link} are quicker than a tray.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will pastries slide on the tray?',
        a: 'On a flat, smooth base, yes. Shallow indentations or a textured surface hold them well enough for a walk home, which is what most bakery orders involve.',
      },
      {
        q: 'Should the tray fit inside our existing boxes?',
        a: 'It should, and it is worth checking rather than assuming. Send the internal dimensions of the box and we will size the tray to sit inside it with a small clearance.',
      },
    ],
    related: ['custom-pastry-sleeves', 'custom-dessert-trays', 'custom-donut-sleeves', 'custom-cardboard-food-trays'],
  },

  {
    slug: 'custom-dessert-trays',
    name: 'Custom Dessert Trays',
    category: 'food-trays',
    seoTitle: 'Custom Dessert Trays UK | Printed Dessert Serving Trays',
    seoDescription:
      'Printed dessert trays for plated puddings and sharing boards, chosen for surface and print quality rather than board strength.',
    h1: 'Custom Dessert Trays',
    cardBlurb: 'Presentation trays for plated desserts and sharing boards.',
    enquiryLabel: 'dessert trays',
    intro: [
      'Dessert trays are chosen for how they look under the food. Unlike a chip tray, they rarely have to survive much — a dessert is eaten where it is served.',
      'That shifts the specification towards surface and print quality rather than board strength.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Surface finish does the work here',
        body: [
          'A dessert sits on a tray for the length of a photograph and a few minutes of eating. Structural performance barely comes into it.',
          'What does matter is how the surface reads next to the food — a matt uncoated board looks considered where a glossy one looks like takeaway.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where dessert trays are used',
        items: [
          'Dessert bars plating waffles, sundaes and sharing platters.',
          'Restaurants serving a dessert board to a table.',
          'Events where puddings are handed round rather than plated.',
          'Takeaway dessert businesses, where the tray goes inside a box.',
        ],
        outro: 'For takeaway, the tray does need to survive the journey, which changes the board choice.',
        link: {
          href: '/custom-waffle-trays/',
          anchor: 'trays shaped for waffles and loaded desserts',
          sentence: 'Waffle-led menus usually need {link} rather than a flat board.',
        },
      },
    ],
    faqs: [
      {
        q: 'Does a dessert tray need grease resistance?',
        a: 'For most plated desserts, no. Anything with warm sauce, melted chocolate or fried elements does, so it depends on the menu rather than the category.',
      },
      {
        q: 'Matt or gloss finish?',
        a: 'Matt almost always looks better under food and photographs without hotspots. Gloss reflects light and reads as disposable, which is rarely what a dessert menu is going for.',
      },
    ],
    related: ['custom-waffle-trays', 'custom-bakery-trays', 'custom-crepe-trays', 'custom-dessert-sleeves'],
  },

  {
    slug: 'custom-crepe-trays',
    name: 'Custom Crepe Trays',
    category: 'food-trays',
    seoTitle: 'Custom Crepe Trays UK | Printed Crepe Serving Trays',
    seoDescription:
      'Printed trays for folded crepes served flat, in a board firm enough to take a fork and coated against warm sauces and fruit.',
    h1: 'Custom Crepe Trays',
    cardBlurb: 'Flat trays for folded crepes with sauces and fruit.',
    enquiryLabel: 'crepe trays',
    intro: [
      'A folded crepe served flat with sauce and fruit on top needs a tray rather than a wrap. It is wide, warm and wet, and it cannot be picked up cleanly.',
      'The tray also gives somewhere for a fork to work against.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A tray that gets eaten off, not just carried',
        body: [
          'Unlike most trays here, this one has cutlery used on it. A fork pressing into a soft board tears it and the sauce goes underneath.',
          'A firmer board or a coated surface stands up to that. It is a different requirement from simply carrying weight.',
        ],
        link: {
          href: '/crepe-cone-packaging/',
          anchor: 'cone holders for crepes eaten on the move',
          sentence: 'Where customers walk away with them, {link} suit better than a tray.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Size', 'Set from the folded crepe plus toppings'],
          ['Board', 'Firm enough to resist a fork; grease and moisture resistant'],
          ['Walls', 'Low walls to contain sauce without hiding the crepe'],
          ['Print', 'Rim only; the base is covered'],
          ['Finish', 'Coated surface where sauces are used heavily'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will a fork go through the tray?',
        a: 'On a soft or thin board it can, particularly once sauce has softened it. Specifying a firmer or coated board avoids it, and it is worth flagging that cutlery is used.',
      },
      {
        q: 'How high should the walls be?',
        a: 'Just high enough to stop sauce running off. High walls hide the crepe, which is what the customer is buying, so most sites go as low as the sauce allows.',
      },
    ],
    related: ['custom-crepe-sleeves', 'crepe-cone-packaging', 'custom-waffle-trays', 'custom-dessert-trays'],
  },

  {
    slug: 'custom-popcorn-trays',
    name: 'Custom Popcorn Trays',
    category: 'food-trays',
    seoTitle: 'Custom Popcorn Trays UK | Printed Cinema Trays',
    seoDescription:
      'Printed popcorn trays for cinemas and venues, cut deep enough that a portion still looks generous once it settles on the walk.',
    h1: 'Custom Popcorn Trays',
    cardBlurb: 'Deep trays for popcorn portions carried to a seat.',
    enquiryLabel: 'popcorn trays',
    intro: [
      'Popcorn is light and bulky, which makes depth more important than strength. A shallow tray holds very little and spills on the way to a seat.',
      'It is also dry, so the board specification is one of the simplest in this range.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Tray against sleeve or cup for popcorn',
        columns: ['Tray', 'Sleeve or cup'],
        rows: [
          ['Capacity', 'Large, and easy to share', 'Single portion'],
          ['Carrying', 'Two hands once full', 'One hand'],
          ['Spilling', 'More, because the opening is wide', 'Less'],
          ['Sharing', 'Designed for it', 'Awkward'],
          ['Cost', 'Higher per unit', 'Lower'],
        ],
        outro: 'Sharing portions suit a tray; individual portions almost always suit a sleeve or cup.',
      },
      {
        kind: 'bullets',
        heading: 'Points that matter in a venue',
        items: [
          'Depth, because popcorn settles and looks less generous than it is.',
          'A base that sits stably on a seat arm or a cup holder.',
          'Print that reads in low light, which means contrast rather than detail.',
          'Whether the tray nests for storage behind the counter.',
        ],
        link: {
          href: '/custom-popcorn-sleeves/',
          anchor: 'single-portion popcorn sleeves',
          sentence: 'For individual servings, {link} are cheaper and easier to carry.',
        },
      },
    ],
    faqs: [
      {
        q: 'Does popcorn packaging need a grease-resistant board?',
        a: 'Dry-seasoned popcorn does not. Buttered popcorn does, and it is worth being specific, since the two look identical on a spec sheet and behave very differently.',
      },
      {
        q: 'How deep should a sharing tray be?',
        a: 'Deeper than looks necessary. Popcorn settles considerably between filling and reaching a seat, so a tray that looks full at the counter can look half empty by the time it is sat down with.',
      },
    ],
    related: ['custom-popcorn-sleeves', 'custom-popcorn-bags', 'custom-snack-trays', 'paper-snack-cups'],
  },

  {
    slug: 'custom-cardboard-food-trays',
    name: 'Custom Cardboard Food Trays',
    category: 'food-trays',
    seoTitle: 'Cardboard Food Trays UK | Printed General Purpose Trays',
    seoDescription:
      'General-purpose printed cardboard food trays in two or three sizes, for markets, events and canteens with a changing menu.',
    h1: 'Custom Cardboard Food Trays',
    cardBlurb: 'General-purpose printed trays for markets, events and canteens.',
    enquiryLabel: 'cardboard food trays',
    intro: [
      'Not every operation needs a tray designed around one dish. A general-purpose tray in two or three sizes covers a varied menu without holding five different lines in stock.',
      'This is the option for kitchens whose menu changes more often than their packaging order does.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'One tray across a changing menu',
        body: [
          'Street-food traders and event caterers often serve something different each week. A tray specified for a single dish becomes dead stock when the menu moves on.',
          'A general tray in a grease-resistant board handles most things adequately and nothing perfectly, which is usually the right trade for a varied operation.',
        ],
        link: {
          href: '/food-trays/',
          anchor: 'trays shaped for specific dishes',
          sentence: 'Where one dish dominates your sales, {link} will outperform a general size.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Choosing sizes for a general range',
        items: [
          'Two sizes cover most menus; three is usually the practical limit.',
          'Size the larger one for your heaviest, wettest dish.',
          'Keep both in the same board so the printed look is consistent.',
          'Check they nest, or storage becomes the limiting factor.',
        ],
        outro: 'Ordering both sizes in one run shares the setup cost across them.',
      },
    ],
    faqs: [
      {
        q: 'Is a general tray a compromise?',
        a: 'It is, and knowingly so. It will not hold a hot dog as neatly as a channelled tray or nachos as well as a divided one. For a menu that changes weekly, that trade is usually worth making.',
      },
      {
        q: 'How many sizes should we stock?',
        a: 'Two in most cases. A third gets used rarely and takes up the same storage as the ones that move, which is why it tends to be the first thing dropped at a reorder.',
      },
    ],
    related: ['custom-snack-trays', 'custom-combo-meal-trays', 'custom-burger-trays', 'tray-and-sleeves'],
  },

  {
    slug: 'custom-waffle-trays',
    name: 'Custom Waffle Trays',
    category: 'food-trays',
    seoTitle: 'Custom Waffle Trays UK | Printed Dessert Waffle Trays',
    seoDescription:
      'Printed waffle trays sized for a loaded dessert waffle, in a coated board that handles warm sauce and melting ice cream at once.',
    h1: 'Custom Waffle Trays',
    cardBlurb: 'Trays sized for loaded waffles with sauces and toppings.',
    enquiryLabel: 'waffle trays',
    intro: [
      'A dessert waffle is served flat, loaded high with ice cream, sauce and toppings, and eaten with a fork. It is heavy, wet, warm and cold at the same time.',
      'The tray carries all of that while still looking like part of a dessert rather than a chip tray.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Hot and cold on the same board',
        body: [
          'A waffle straight from the iron sits under ice cream that immediately starts melting. The board deals with warmth from below and cold moisture from above.',
          'A coated surface handles both. Uncoated board takes up melt quickly and the printed rim starts to look tired while the customer is still eating.',
        ],
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Size', 'Set from your waffle plus the topping footprint'],
          ['Walls', 'Low, to contain melt without hiding the dessert'],
          ['Board', 'Coated and moisture resistant'],
          ['Cutlery', 'Firm enough to take a fork without tearing'],
          ['Print', 'Rim; the base is entirely covered'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Details dessert bars ask for',
        items: [
          'A rim wide enough to hold without touching sauce.',
          'A finish that photographs well, since these desserts are posted constantly.',
          'Sizes for a single waffle and for a sharing portion.',
          'Compatibility with a lid, for takeaway and delivery orders.',
        ],
        link: {
          href: '/custom-dessert-trays/',
          anchor: 'the wider dessert tray range',
          sentence: 'For plated puddings rather than waffles, {link} covers other shapes.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will melted ice cream soak through?',
        a: 'Through uncoated board within a few minutes, yes. A coated surface holds up for the length of a normal serve, which is why it is the standard specification for this tray.',
      },
      {
        q: 'Can these be lidded for delivery?',
        a: 'They can, though a loaded waffle travels poorly whatever it is in — toppings slide and ice cream melts. If delivery is a large share of trade, it is worth discussing the whole format rather than only the lid.',
      },
    ],
    related: ['custom-dessert-trays', 'custom-crepe-trays', 'ice-cream-cone-tray', 'custom-bakery-trays'],
  },

  {
    slug: 'ice-cream-cone-holder',
    name: 'Ice Cream Cone Holder',
    category: 'food-trays',
    seoTitle: 'Ice Cream Cone Holders UK | Printed Cone Stands',
    seoDescription:
      'Board cone holders that stand a filled cone upright at the till or on a table, in one, two and four cone sizes cut to your cone.',
    h1: 'Ice Cream Cone Holders',
    cardBlurb: 'Board stands that hold a filled cone upright at the till or table.',
    enquiryLabel: 'ice cream cone holders',
    intro: [
      'A filled cone cannot be put down. That sounds trivial until a customer is trying to pay for two of them with a card and a pushchair.',
      'A cone holder solves exactly that, and it is one of the few items here that customers thank staff for.',
    ],
    sections: [
      {
        kind: 'uses',
        heading: 'The moments a holder is needed',
        items: [
          {
            title: 'Paying at the till',
            body: 'Two cones already made and a card to tap. Without a holder, one cone goes to a stranger or gets held under a chin.',
          },
          {
            title: 'Carrying more than one',
            body: 'A parent with two children cannot carry three cones. A four-cone holder makes it one trip.',
          },
          {
            title: 'Sitting at a table',
            body: 'A holder lets a cone stand while a customer eats something else or takes a photograph.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Hole size decides whether it works',
        body: [
          'The cut-out has to grip the cone partway down its taper. Too large and the cone drops through; too small and staff force it and crack the wafer.',
          'Because it grips the taper rather than the rim, the hole size is specific to your cone. This is not a product that works from a stock size.',
        ],
        link: {
          href: '/cone-sleeves/',
          anchor: 'the cone sleeve range these are sized alongside',
          sentence: 'Holders are normally ordered with {link}, cut from the same cone measurements.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Capacity', 'One, two or four cones'],
          ['Hole size', 'Cut to grip your cone partway down the taper'],
          ['Board', 'Rigid enough to hold cones without flexing'],
          ['Supply', 'Flat, assembled at the counter'],
          ['Print', 'The top face, which is what customers see'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will one holder fit both our cone sizes?',
        a: 'Rarely. The hole grips the taper, so a hole cut for a waffle cone lets a sugar cone drop straight through. Sites with two cone types normally need two holders or one with mixed hole sizes.',
      },
      {
        q: 'Do holders work with a sleeve already on the cone?',
        a: 'They need to be cut allowing for it, because the sleeve adds thickness at exactly the point the holder grips. Tell us if cones are sleeved first and we will size the hole accordingly.',
      },
    ],
    related: ['ice-cream-cone-tray', 'tray-and-sleeves', 'custom-waffle-cone-sleeves', 'paper-mache-cones'],
  },

  {
    slug: 'ice-cream-cone-tray',
    name: 'Ice Cream Cone Tray',
    category: 'food-trays',
    seoTitle: 'Ice Cream Cone Trays UK | Printed Multi-Cone Carriers',
    seoDescription:
      'Multi-cone carrier trays letting one person take four cones away at once, built stiff enough to stay stable while carried.',
    h1: 'Ice Cream Cone Trays',
    cardBlurb: 'Carriers that let one person take four cones away at once.',
    enquiryLabel: 'ice cream cone trays',
    intro: [
      'A cone tray is a carrier rather than a stand. Where a holder sits on a counter, a tray is picked up and walked away with — often across a beach or a car park.',
      'That means it has to be stable in motion, which is a considerably harder requirement.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Carrier tray against counter holder',
        columns: ['Carrier tray', 'Counter holder'],
        rows: [
          ['Used for', 'Walking away with several cones', 'Standing cones at a till or table'],
          ['Stability needed', 'High — it moves', 'Low — it sits still'],
          ['Grip', 'Needs a handle or a defined edge', 'None needed'],
          ['Board', 'Heavier, to resist flexing when lifted', 'Lighter is adequate'],
          ['Cost', 'Higher', 'Lower'],
        ],
        outro: 'A holder used as a carrier flexes and tips, which is where most complaints come from.',
      },
      {
        kind: 'bullets',
        heading: 'What makes a carrier work',
        items: [
          'A handle or a cut-out that allows a proper grip in the middle.',
          'Enough board stiffness that the tray does not fold when lifted at the centre.',
          'Holes spaced so cones do not knock together in transit.',
          'A base area wide enough to set down without tipping.',
        ],
        outro: 'Four is the practical maximum — more than that and the tray becomes too wide to carry through a door.',
      },
    ],
    faqs: [
      {
        q: 'How many cones can one tray carry?',
        a: 'Four is the sensible limit. Six is possible but the tray becomes wide enough to be awkward through doorways and the weight starts to flex the centre.',
      },
      {
        q: 'Can we use the counter holder as a carrier?',
        a: 'Customers will try, and it usually flexes and tips. If cones are carried any distance, the heavier carrier construction is worth the difference.',
      },
    ],
    related: ['ice-cream-cone-holder', 'tray-and-sleeves', 'custom-waffle-trays', 'custom-cardboard-food-trays'],
  },

  {
    slug: 'tray-and-sleeves',
    name: 'Matching Tray and Sleeve Sets',
    category: 'food-trays',
    seoTitle: 'Matching Tray & Sleeve Sets UK | Coordinated Packaging',
    seoDescription:
      'Trays and sleeves printed together as one coordinated order, so the brand colour matches and the setup cost is shared across both.',
    h1: 'Matching Tray and Sleeve Sets',
    cardBlurb: 'Trays and sleeves printed together so colours and stock match.',
    enquiryLabel: 'matching tray and sleeve sets',
    intro: [
      'Ordering a tray in January and a sleeve in June produces two items that do not quite match. Different board batches, different press runs, and a brand colour that has drifted between them.',
      'Ordering them together avoids that, and usually costs less than two separate jobs.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Colour drifts between separate runs',
        body: [
          'Printing the same colour twice, months apart, on different stocks gives a visible difference when the two sit next to each other on a counter.',
          'Running them together on the same stock, from the same ink, removes the problem entirely. It is the single most common reason customers move to coordinated ordering.',
        ],
        link: {
          href: '/cone-sleeves/',
          anchor: 'the sleeve range these sets are built from',
          sentence: 'Sets are usually assembled from {link} plus a matching tray or holder.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What a set usually contains',
        items: [
          'A sleeve for the item itself.',
          'A tray or holder for carrying more than one.',
          'Optionally a printed liner or paper in the same design.',
          'Sometimes a bag, where orders leave the premises.',
        ],
        outro: 'Sets do not have to be ordered in equal quantities — most sites use far more sleeves than trays.',
      },
      {
        kind: 'callout',
        heading: 'Quantities rarely match across a set',
        body: 'A typical site might use ten sleeves for every tray. Tell us the ratio you expect rather than ordering equal numbers, or you will be holding trays long after the sleeves have run out.',
      },
    ],
    faqs: [
      {
        q: 'Is a set cheaper than ordering separately?',
        a: 'Usually, because setup costs are shared across one job rather than repeated. The saving depends on the quantities, so it is worth asking us to price both ways.',
      },
      {
        q: 'Can items in a set use different board?',
        a: 'They can, and often should — a tray needs more rigidity than a sleeve. What stays common is the ink and the design, which is what makes them read as a set.',
      },
    ],
    related: ['ice-cream-cone-holder', 'custom-cardboard-food-trays', 'custom-ice-cream-cone-sleeves', 'ice-cream-cone-tray'],
  },
];
