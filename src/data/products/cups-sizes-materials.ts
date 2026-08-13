import type { Product } from '../types';

/**
 * Size, material and colour pages. Size records are differentiated by the
 * drinks each volume genuinely serves, the usable fill once headspace is
 * allowed, and where that size turns up in UK trade.
 */
export const CUP_SIZES: Product[] = [
  {
    slug: '2-oz-paper-cups',
    name: '2oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '2oz Paper Cups UK | Printed Espresso & Taster Cups',
    seoDescription:
      'Printed 2oz paper cups for espresso, sauce portions and event sampling, where the small print area is the main constraint.',
    h1: '2oz Paper Cups',
    cardBlurb: 'Espresso and sampling cups where print area is the main limit.',
    enquiryLabel: '2oz paper cups',
    intro: [
      'At 2oz there is barely enough wall to print on. That, rather than capacity, is what shapes every decision about this size.',
      'It is used for single espresso, condiment portions and tasting samples at events, where the cup is emptied in one go.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Print Area Is Measured in Centimetres',
        body: [
          'Flattened, a 2oz cup gives a printable strip only a few centimetres tall. A logo with a strapline and a website underneath will not resolve at that scale.',
          'Successful designs on this size use one element — a wordmark or a symbol — repeated around the cup. Everything else is dropped.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where 2oz Cups Are Used',
        items: [
          'Single espresso, served and drunk immediately at a counter.',
          'Sauce and condiment portions alongside a main item.',
          'Tasting samples at food shows and supermarket demonstrations.',
          'Medicine and dosing portions in care settings.',
        ],
        outro: 'Sampling runs are usually short and one-off, which suits digital printing.',
        link: {
          href: '/paper-portion-cups/',
          anchor: 'portion cups sold specifically for sauces',
          sentence: 'Where the cup holds a condiment rather than a drink, {link} are the closer fit.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Usable volume', 'Around 1.7–1.8oz once headspace is allowed'],
          ['Wall', 'Single wall; nothing at this size needs insulating'],
          ['Print', 'One or two elements maximum'],
          ['Lids', 'Available on some rim sizes — confirm before ordering'],
          ['Typical use', 'Espresso, condiments, sampling'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we fit our full logo and website on a 2oz cup?',
        a: 'Almost certainly not legibly. The printable strip is only a few centimetres tall, so one element repeated around the cup works far better than several shrunk to fit.',
      },
      {
        q: 'Do 2oz cups take lids?',
        a: 'Some rim sizes do and some do not. If lids matter — for sauce portions in particular — confirm it before ordering rather than assuming, since the small rim limits what is available.',
      },
      {
        q: 'What is the usable volume of a 2oz cup?',
        a: 'Around 1.7 to 1.8oz once headspace is allowed. Nobody fills a cup to the brim, so the stated figure is not what you serve.',
      },
      {
        q: 'Can we get lids for 2oz cups?',
        a: 'Some rim sizes take them and some do not. Confirm before ordering rather than assuming, because the small rim limits what is produced.',
      },
      {
        q: 'Are these suitable for hot espresso?',
        a: 'With a hot cup lining, yes. The volume is small enough that a single wall is comfortable without a sleeve.',
      },
      {
        q: 'What is the minimum order for sampling cups?',
        a: 'It depends on the print method rather than a fixed rule. Sampling runs are often seasonal, so send the date as well as the quantity.',
      },
      {
        q: 'Can we print two colours at this size?',
        a: 'You can, though the printable strip is only a few centimetres. One colour and one element usually reads better.',
      },
      {
        q: 'Do these work as sauce pots?',
        a: 'They do, and portion cups sold for that purpose are essentially the same thing with a denesting feature. Tell us which use dominates.',
      },
      {
        q: 'Will they denest cleanly from a stack?',
        a: 'With a denesting feature, yes. At this size stuck cups cost real seconds during a busy sampling session.',
      },
      {
        q: 'Do we need food-contact ink?',
        a: 'If anything edible touches the cup, yes, and we confirm the ink system on your quote rather than assuming it.',
      },
    ],
    related: ['4-oz-paper-cups', 'paper-portion-cups', 'paper-sauce-cups', 'small-paper-cups'],
  },

  {
    slug: '4-oz-paper-cups',
    name: '4oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '4oz Paper Cups UK | Printed Small Cups',
    seoDescription:
      'Printed 4oz paper cups for double espresso, tasting portions and children\'s drinks, holding roughly 3.5oz once poured.',
    h1: '4oz Paper Cups',
    cardBlurb: 'Double espresso, tasters and small servings with a workable print area.',
    enquiryLabel: '4oz paper cups',
    intro: [
      '4oz is the smallest size where a normal logo prints legibly. That makes it the practical starting point for branded cups.',
      'It covers double espresso, macchiato, tasting portions and drinks for small children.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: '4oz Against 2oz',
        columns: ['4oz', '2oz'],
        rows: [
          ['Print area', 'Enough for a logo and a short line of text', 'One element only'],
          ['Usable fill', 'Around 3.5oz', 'Around 1.7oz'],
          ['Drinks', 'Double espresso, macchiato, cortado in a pinch', 'Single espresso'],
          ['Lids', 'More widely available', 'Limited by rim size'],
          ['Cost per unit', 'Slightly higher', 'Lowest in the range'],
        ],
        outro: 'Cafés that want branding on their espresso cups usually go to 4oz for the print area alone.',
      },
      {
        kind: 'bullets',
        heading: 'Common Uses',
        items: [
          'Double espresso and short milk drinks.',
          'Tasting flights where three or four samples are served together.',
          'Children\'s portions of juice or squash at events.',
          'Ice cream and dessert samples at food halls.',
        ],
        link: {
          href: '/6-oz-paper-cups/',
          anchor: '6oz cups for flat whites and cortados',
          sentence: 'For milk-based drinks served properly, {link} are the next step up.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is 4oz big enough for a cortado?',
        a: 'It is tight. A cortado is usually served in 5 to 6oz, so a 4oz cup means filling close to the brim, which is awkward for a customer to carry.',
      },
      {
        q: 'Why choose 4oz over 2oz for espresso?',
        a: 'Print area, mainly. The coffee volume is the same, but a 4oz cup gives room for a logo that people can actually read.',
      },
      {
        q: 'What can we actually fit on a 4oz cup?',
        a: 'A logo and one short line. It is the smallest size where a normal mark prints legibly, which is why branded espresso cups start here.',
      },
      {
        q: 'Is 4oz enough for a cortado?',
        a: 'It is tight. A cortado is usually served in 5 to 6oz, so a 4oz cup means filling close to the brim.',
      },
      {
        q: 'What is the usable volume?',
        a: 'Around 3.5oz with headspace. That is the figure to cost a drink against rather than the number on the box.',
      },
      {
        q: 'Do these take lids?',
        a: 'More widely than 2oz, because the rim is larger. Confirm the rim diameter rather than the volume when matching lids.',
      },
      {
        q: 'Are they used for desserts?',
        a: 'Frequently, for tasting portions and small ice cream servings. A coated outer face helps if the dessert is chilled or frozen.',
      },
      {
        q: 'Can we run these alongside a 12oz cup?',
        a: 'Yes, and running both in one order shares the setup. Each size needs its own layout because the flat shape differs.',
      },
      {
        q: 'Single or double wall at this size?',
        a: 'Single wall is comfortable at 4oz even with a hot drink, because there is little liquid against the hand.',
      },
      {
        q: 'Do these suit children\'s drinks?',
        a: 'They do, and event caterers buy them for exactly that. A brighter print usually suits that use better than a corporate mark.',
      },
    ],
    related: ['2-oz-paper-cups', '6-oz-paper-cups', 'small-paper-cups', 'paper-dessert-cups'],
  },

  {
    slug: '6-oz-paper-cups',
    name: '6oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '6oz Paper Cups UK | Printed Flat White & Vending Cups',
    seoDescription:
      'Printed 6oz paper cups for flat whites, cortados and vending machines, holding around 5oz of usable drink once poured.',
    h1: '6oz Paper Cups',
    cardBlurb: 'Flat whites, cortados and vending, at around 5oz usable.',
    enquiryLabel: '6oz paper cups',
    intro: [
      '6oz is the size the speciality coffee trade settled on for milk drinks where the ratio matters. A flat white in a 12oz cup is a different drink.',
      'It is also the default in a great many vending machines, which makes it a high-volume size for office and forecourt suppliers.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Size Speciality Coffee Actually Uses',
        body: [
          'A flat white is defined partly by its ratio of espresso to milk. Serve it in a larger cup and either the coffee is lost or the drink is not a flat white.',
          'Cafés that take their coffee seriously usually carry 6oz alongside a larger size, rather than treating one cup as universal.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Two Very Different Buyers',
        items: [
          'Speciality cafés, buying modest quantities and caring about print and board quality.',
          'Vending operators, buying in volume and caring about rim consistency and machine compatibility.',
          'Offices, buying for a machine and often wanting a plain cup.',
          'Event caterers, using it as a small hot drink size.',
        ],
        outro: 'Vending cups have to meet machine tolerances, so tell us if that is the application.',
        link: {
          href: '/paper-cups/coffee-cups/',
          anchor: 'the wider takeaway coffee cup range',
          sentence: 'For larger hot drinks alongside this size, {link} covers the options.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Usable volume', 'Around 5oz allowing headspace'],
          ['Wall', 'Single wall is standard; sleeves available'],
          ['Rim', 'Confirm against your lids or vending machine'],
          ['Print', 'Comfortable area for a full logo and strapline'],
          ['Typical use', 'Flat white, cortado, vending'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Will 6oz cups work in our vending machine?',
        a: 'Only if the rim diameter and the cup height match what the machine expects. Vending tolerances are tighter than counter service, so send the machine model or a current cup before ordering.',
      },
      {
        q: 'Is 6oz too small for a regular coffee?',
        a: 'For a filter coffee or an Americano, most customers would find it small. For milk drinks where the ratio matters, it is the correct size rather than a small one.',
      },
      {
        q: 'Why do speciality cafés use 6oz?',
        a: 'Because a flat white is defined partly by its ratio of espresso to milk. Serve it larger and either the coffee is lost or it is a different drink.',
      },
      {
        q: 'Will 6oz cups fit our vending machine?',
        a: 'Only if the rim diameter and cup height match what the machine expects. Send the model or a current cup before ordering.',
      },
      {
        q: 'What is the usable volume?',
        a: 'Around 5oz allowing headspace, which is why it suits a milk drink where the ratio matters rather than a filter coffee.',
      },
      {
        q: 'Do these need a sleeve?',
        a: 'At this volume a single wall is usually comfortable without one, which is part of why speciality cafés like the size.',
      },
      {
        q: 'Can we print a full design?',
        a: 'Yes, there is a comfortable area for a logo and a strapline. It is the smallest size where a full design works properly.',
      },
      {
        q: 'Are vending tolerances tighter?',
        a: 'Considerably. A cup a millimetre out of tolerance jams a dispenser, and the fault gets reported as a broken machine.',
      },
      {
        q: 'Can we order 6oz and 8oz together?',
        a: 'Yes, and if they share a rim you may also share a lid, which takes a line out of your stock.',
      },
      {
        q: 'Do these suit an office coffee machine?',
        a: 'Frequently, and machine compatibility is worth confirming with the model rather than assuming from the volume.',
      },
    ],
    related: ['7-oz-paper-cups', '8-oz-paper-cups', '4-oz-paper-cups', 'custom-paper-coffee-cups'],
  },

  {
    slug: '7-oz-paper-cups',
    name: '7oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '7oz Paper Cups UK | Printed Vending & Water Cups',
    seoDescription:
      'Printed 7oz paper cups, the standard vending and water cooler size in UK offices, where dispenser fit matters most of all.',
    h1: '7oz Paper Cups',
    cardBlurb: 'The default vending and water cooler size in UK offices.',
    enquiryLabel: '7oz paper cups',
    intro: [
      '7oz is an unusual size in a café and completely standard in a building. It is the size most UK vending machines and water coolers are built around.',
      'That means it is bought by facilities managers and office suppliers far more often than by coffee shops.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Size Defined by Machines, Not by Drinks',
        body: [
          'Most sizes in this range exist because a drink needs them. 7oz exists because dispensers and cooler stacks are built to it.',
          'That makes dimensional consistency more important than usual — a cup a millimetre out of tolerance jams a dispenser, which is a facilities problem rather than a packaging one.',
        ],
        link: {
          href: '/paper-water-cups/',
          anchor: 'cups sold specifically for water coolers',
          sentence: 'For cooler applications in particular, {link} covers the dispenser fit.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What Buyers of This Size Care About',
        items: [
          'Consistent rim diameter, so cups denest cleanly from a dispenser.',
          'Consistent height, so a stack fits the tube.',
          'Low cost per unit, since usage is high and the cup is not a brand asset.',
          'Sometimes a printed logo for reception areas and public buildings.',
        ],
        outro: 'A branded 7oz cup in a reception area is one of the cheaper visible branding opportunities a building has.',
      },
    ],
    faqs: [
      {
        q: 'Will these fit our water cooler dispenser?',
        a: 'They need to match the dispenser tube diameter and the cup height. Send the make and model, or a current cup, and we will check before quoting rather than after delivery.',
      },
      {
        q: 'Is it worth printing a 7oz office cup?',
        a: 'In a reception or client-facing area, often yes — it is a cheap branded surface seen by every visitor. In a back office, most organisations sensibly take the plain cup.',
      },
      {
        q: 'Why is 7oz a standard size?',
        a: 'Because dispensers and cooler stacks are built around it, not because any drink needs it. It is a machine size rather than a menu size.',
      },
      {
        q: 'Will these fit our water cooler?',
        a: 'Send the dispenser make and model, or a current cup. Tube diameter and cup height both have to match.',
      },
      {
        q: 'Is it worth printing an office cup?',
        a: 'In a reception or client-facing area, often. In a back office most organisations sensibly take the plain cup.',
      },
      {
        q: 'What happens if the cup is slightly out of tolerance?',
        a: 'It jams the dispenser, and the fault is reported as a broken machine rather than a packaging problem. Consistency matters more here than anywhere.',
      },
      {
        q: 'Can these hold hot drinks?',
        a: 'With a hot cup lining, yes. Many vending applications serve both, so specify for the hotter case.',
      },
      {
        q: 'Do we need lids?',
        a: 'For a cooler, rarely. For a vending machine dispensing hot drinks into a corridor, often. Tell us which applies.',
      },
      {
        q: 'How do these ship?',
        a: 'In sleeves of nested cups, which is also how they load into a dispenser. Damaged sleeves are the usual cause of jamming.',
      },
      {
        q: 'Can we order plain and printed together?',
        a: 'Yes, and many buildings do exactly that — printed for reception, plain for staff areas. Send the split.',
      },
    ],
    related: ['6-oz-paper-cups', 'paper-water-cups', 'paper-drinking-cups', '8-oz-paper-cups'],
  },

  {
    slug: '8-oz-paper-cups',
    name: '8oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '8oz Paper Cups UK | Printed Small Coffee Cups',
    seoDescription:
      'Printed 8oz paper cups, the standard UK small takeaway coffee. Around 7oz usable, in single wall or double wall board.',
    h1: '8oz Paper Cups',
    cardBlurb: 'The standard UK small takeaway coffee, around 7oz usable.',
    enquiryLabel: '8oz paper cups',
    intro: [
      'If a UK café lists a small coffee, it is almost certainly an 8oz cup. It is the size customers picture when they order one.',
      'It also usually shares a rim diameter with the 12oz, which means one lid covers both — a genuine saving in stock lines.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The 8oz and 12oz Lid Overlap',
        body: [
          'Many cup ranges use the same rim on 8oz and 12oz, with the larger cup being taller rather than wider. One lid then serves both sizes.',
          'That halves the lid lines you hold and removes the commonest service error, which is a member of staff reaching for the wrong lid during a rush.',
        ],
        link: {
          href: '/paper-coffee-cup-lids/',
          anchor: 'lids matched by rim rather than by stated volume',
          sentence: 'Whether your sizes share a lid depends on the rim, which is covered under {link}.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Usable volume', 'Around 7oz with headspace for a lid'],
          ['Wall', 'Single with a sleeve, or double wall'],
          ['Lid', 'Frequently shares a rim with 12oz — confirm per range'],
          ['Print', 'Generous area; the most designed-for size in the range'],
          ['Board', 'White for colour accuracy, kraft for a plain look'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Why Most Cafés Start Here',
        items: [
          'Customers understand what a small coffee is without explanation.',
          'The print area is large enough for a proper design.',
          'Lid sharing with 12oz reduces stock lines.',
          'Single wall plus a sleeve is comfortable at this volume.',
        ],
        outro: 'A café carrying only two sizes almost always carries 8oz as one of them.',
      },
    ],
    faqs: [
      {
        q: 'Does an 8oz cup hold 8oz of coffee?',
        a: 'Around 7oz in practice. The stated figure is brim-full, and nobody serves a takeaway drink to the brim, so allow for headspace when costing a drink by volume.',
      },
      {
        q: 'Do I need double wall at 8oz?',
        a: 'For espresso-based drinks a single wall with a sleeve is comfortable enough. Double wall becomes more worthwhile at 12oz and above, where there is more hot liquid against the hand.',
      },
      {
        q: 'Do 8oz and 12oz share a lid?',
        a: 'Frequently, because the taller cup is the larger volume rather than the wider one. Confirm the rim rather than assuming.',
      },
      {
        q: 'Do we need double wall at 8oz?',
        a: 'For espresso-based drinks a single wall with a sleeve is usually comfortable. Double wall becomes more worthwhile at 12oz and above.',
      },
      {
        q: 'Is 8oz the right size for a small coffee?',
        a: 'It is what UK customers picture when they order one, which is a good enough reason on its own to carry it.',
      },
      {
        q: 'Can we print a full design?',
        a: 'Yes. It is the most designed-for size in the range, with a generous area that still gets seen once the cup is held.',
      },
      {
        q: 'Should this be our only size?',
        a: 'If you carry one, 12oz covers more drinks. If you carry two, 8oz and 12oz is the standard pairing.',
      },
      {
        q: 'Will kraft board change our colours?',
        a: 'Yes, warmer and darker. If a brand colour has to be exact, white board or a white underbase is the answer.',
      },
      {
        q: 'How many do we need to order?',
        a: 'Count a typical week of small hot drinks rather than estimating annually. Most cafés are surprised by the actual figure.',
      },
      {
        q: 'Can we order plain 8oz cups to start?',
        a: 'Yes, and plain stock proves the size and lid fit before any artwork spend. The reorder can then be printed.',
      },
    ],
    related: ['12-oz-paper-cups', '9-oz-paper-cups', 'single-wall-paper-cups', 'paper-cup-sleeves'],
  },

  {
    slug: '9-oz-paper-cups',
    name: '9oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '9oz Paper Cups UK | Printed Mid-Size Cups',
    seoDescription:
      'Printed 9oz paper cups, a mid-size used in catering, events and dispensers where an 8oz cup fills too close to the brim.',
    h1: '9oz Paper Cups',
    cardBlurb: 'A mid-size used where 8oz is slightly short of the pour.',
    enquiryLabel: '9oz paper cups',
    intro: [
      '9oz sits between the two sizes everyone knows, which is exactly why it exists. It suits a pour that overfills an 8oz cup without justifying a 12oz.',
      'It turns up most in catering and event work, where portions are set by a spec sheet rather than by a menu board.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Size Chosen by the Pour, Not the Customer',
        body: [
          'No customer asks for a 9oz coffee. Caterers choose it because a standard pour of soft drink or a measured serving of hot drink fits it neatly with headspace to carry.',
          'Where portion control matters — conference catering, hospital and school service — that precision is worth more than a recognisable size name.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where It Gets Specified',
        items: [
          'Conference and event catering with a fixed drink specification.',
          'Institutional service where portions are standardised.',
          'Cold drink service where an 8oz cup fills too close to the rim.',
          'Dispensers built around this volume.',
        ],
        outro: 'If you are choosing between 8oz and 12oz for a fixed pour, it is worth checking whether 9oz fits better.',
        link: {
          href: '/paper-cups/sizes/',
          anchor: 'the full size range with usable volumes',
          sentence: 'Comparing across {link} is the quickest way to settle a borderline pour.',
        },
      },
    ],
    faqs: [
      {
        q: 'Why would we choose 9oz over 8oz?',
        a: 'When your standard pour fills an 8oz cup too close to the brim to carry safely. The extra ounce is headspace rather than more drink, which matters for service rather than for the customer.',
      },
      {
        q: 'Is 9oz harder to source lids for?',
        a: 'It depends on the rim rather than the volume. Many 9oz cups share a rim with a more common size, so confirm the rim diameter rather than assuming lids will be awkward.',
      },
      {
        q: 'Is 9oz hard to find lids for?',
        a: 'It depends on the rim rather than the volume. Many 9oz cups share a rim with a more common size, so confirm the measurement.',
      },
      {
        q: 'Who actually buys this size?',
        a: 'Caterers, institutional kitchens and vending operators working to a fixed pour rather than a menu board. No customer asks for a 9oz drink.',
      },
      {
        q: 'What is the usable volume?',
        a: 'Around 7.5 to 8oz with headspace, which is what makes it useful where a measured pour overfills an 8oz cup.',
      },
      {
        q: 'Can we use it for cold drinks?',
        a: 'Yes, and cold service is one of the common cases, since a measured soft drink pour often sits awkwardly between standard sizes.',
      },
      {
        q: 'Should we print it?',
        a: 'Only where the cup is customer-facing. Institutional and vending use rarely justifies the print cost, whereas a counter-served drink is seen and carried, which is where branding earns its place.',
      },
      {
        q: 'Single or double wall?',
        a: 'Single wall with a sleeve is usual, since the applications are often cold or served to a seated audience.',
      },
      {
        q: 'Can we order it alongside other sizes?',
        a: 'Yes, and running sizes together shares the setup cost. Each size still needs its own layout from your artwork.',
      },
      {
        q: 'Do you supply these with lids?',
        a: 'Yes, matched by rim diameter. Confirm the rim rather than the volume, since 9oz often shares a rim with a commoner size.',
      },
    ],
    related: ['8-oz-paper-cups', '12-oz-paper-cups', '7-oz-paper-cups', 'paper-serving-cups'],
  },

  {
    slug: '12-oz-paper-cups',
    name: '12oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '12oz Paper Cups UK | Printed Regular Coffee Cups',
    seoDescription:
      'Printed 12oz paper cups, the most ordered takeaway size in the UK. Around 10.5oz usable, in single or double wall board.',
    h1: '12oz Paper Cups',
    cardBlurb: 'The most ordered UK takeaway size, around 10.5oz usable.',
    enquiryLabel: '12oz paper cups',
    intro: [
      'More takeaway coffee is served in a 12oz cup than any other size in the UK. If you only order one size, this is the one that covers the widest span of drinks.',
      'It handles a latte, a cappuccino, an Americano and a tea without any of them looking wrong.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The Size That Carries the Brand',
        body: [
          'Because it is the volume most customers order, the 12oz cup is the one that appears in photographs, on desks and in the background of other people\'s pictures.',
          'If print budget is limited, spend it here first. A beautifully printed 8oz and a plain 12oz is the wrong way round.',
        ],
        link: {
          href: '/custom-paper-coffee-cups/',
          anchor: 'how takeaway cup artwork behaves once it is held',
          sentence: 'Our page on {link} covers where the print is actually seen.',
        },
      },
      {
        kind: 'specs',
        heading: 'Specification',
        rows: [
          ['Usable volume', 'Around 10.5oz once headspace is allowed'],
          ['Wall', 'Double wall is common at this size; single wall plus sleeve also works'],
          ['Lid', 'Often shares a rim with 8oz — confirm per range'],
          ['Print', 'The largest practical design area before 16oz'],
          ['Board', 'White, kraft or coloured'],
        ],
      },
      {
        kind: 'bullets',
        heading: 'Drinks It Covers',
        items: [
          'Latte and cappuccino, which need volume for milk.',
          'Americano, the default filter alternative in most UK cafés.',
          'Tea, where the brewing bag needs room.',
          'Hot chocolate, usually the fullest pour of the lot.',
        ],
        outro: 'Sites carrying two sizes usually pair this with an 8oz rather than a 16oz.',
      },
    ],
    faqs: [
      {
        q: 'If we only order one cup size, should it be 12oz?',
        a: 'For most UK cafés, yes. It covers the widest range of drinks without any of them looking under or over-served, and it is the size customers picture when they order a regular coffee.',
      },
      {
        q: 'Single or double wall at 12oz?',
        a: 'Double wall is the more comfortable choice at this volume, and once you count the cost of a sleeve on top of a single-wall cup, it is often close to the same total.',
      },
      {
        q: 'Why is 12oz the most ordered size?',
        a: 'Because it covers a latte, a cappuccino, an Americano and a tea without any of them looking under or over-served.',
      },
      {
        q: 'What is the usable volume?',
        a: 'Around 10.5oz once headspace is allowed. If you sell by a stated volume, check against the cup rather than the label.',
      },
      {
        q: 'Does it share a lid with 8oz?',
        a: 'Frequently, which takes a line out of your stock and removes the commonest service error during a rush.',
      },
      {
        q: 'If we print one size, should it be this one?',
        a: 'Yes. It is the cup that appears in photographs and on desks, so the print budget does most work here.',
      },
      {
        q: 'Can we run seasonal designs on 12oz?',
        a: 'Easily, and it is the size worth doing it on. Digital printing makes several designs in one run affordable.',
      },
      {
        q: 'Will a 12oz sleeve fit an 8oz cup?',
        a: 'Usually not properly. One sleeve rarely covers more than two adjacent sizes without spinning or refusing to go on.',
      },
      {
        q: 'How do we estimate quantity?',
        a: 'Count a typical week of regular hot drinks. Annual estimates made without till data are usually wrong in one direction or the other.',
      },
      {
        q: 'Do you supply plain 12oz cups?',
        a: 'Yes, and plain cups with printed sleeves is the cheaper route to branding for a single site.',
      },
    ],
    related: ['8-oz-paper-cups', '16-oz-paper-cups', '9-oz-paper-cups', 'paper-coffee-cup-lids'],
  },

  {
    slug: '16-oz-paper-cups',
    name: '16oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '16oz Paper Cups UK | Printed Large Coffee & Cold Cups',
    seoDescription:
      'Printed 16oz paper cups for large hot drinks and iced coffee, with the largest print area in the range that still gets seen.',
    h1: '16oz Paper Cups',
    cardBlurb: 'Large hot drinks and iced coffee, with the biggest usable print area.',
    enquiryLabel: '16oz paper cups',
    intro: [
      '16oz is where hot and cold drink service overlaps. It is the large hot cup and, for most cafés, the standard iced one.',
      'It also gives the largest print area that still gets fully seen — beyond this the cup is wide enough that a hand hides more of the design.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Hot Use Against Cold Use at This Size',
        columns: ['Hot 16oz', 'Cold 16oz'],
        rows: [
          ['Wall', 'Double wall or a sleeve is close to essential', 'Single wall is fine'],
          ['Lid', 'Sip lid', 'Flat or domed lid, often with a straw slot'],
          ['Board', 'Standard hot cup lining', 'Needs to cope with condensation'],
          ['Sleeve', 'For heat', 'For grip on a sweating cup'],
          ['Holding time', 'Usually under 20 minutes', 'Often an hour or more'],
        ],
        outro: 'Cafés serving both frequently use different cups rather than one 16oz for everything.',
      },
      {
        kind: 'prose',
        heading: 'Weight Becomes Noticeable',
        body: [
          'A full 16oz drink is a substantial weight in one hand, and the cup wall has to resist being squeezed while carrying it.',
          'Thin single-wall cups at this size can deform enough to pop a lid, which is the practical argument for a heavier construction rather than comfort alone.',
        ],
        link: {
          href: '/custom-cold-drink-sleeves/',
          anchor: 'sleeves that keep grip on a sweating cold cup',
          sentence: 'For iced service, {link} solve the slipperiness rather than the temperature.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can one 16oz cup serve both hot and cold?',
        a: 'It can, and plenty of sites do it to reduce stock lines. The compromise is that a hot-specified cup is heavier than a cold drink needs, and a cold-specified one may be uncomfortable with a very hot drink.',
      },
      {
        q: 'Is the print area much bigger than 12oz?',
        a: 'Noticeably, yes. It is also the point where a hand starts covering proportionally less of the cup, so designs get seen more completely than on smaller sizes.',
      },
      {
        q: 'Can one 16oz cup serve hot and cold?',
        a: 'It can, and plenty of sites do it to reduce stock lines. The compromise is a hot-specified cup being heavier than cold service needs.',
      },
      {
        q: 'Does a full 16oz cup deform?',
        a: 'Thin single-wall cups can, enough to pop a lid. That is the practical argument for a heavier construction rather than comfort alone.',
      },
      {
        q: 'What lid does an iced 16oz take?',
        a: 'Usually a flat or domed lid with a straw slot rather than a sip lid. Confirm the rim rather than the volume.',
      },
      {
        q: 'Do we need a sleeve at 16oz?',
        a: 'With a hot drink on a single wall, almost certainly. With a cold drink, a sleeve is for grip on a sweating cup rather than heat.',
      },
      {
        q: 'What is the usable volume?',
        a: 'Around 14oz with headspace. Carrying a full 16oz drink without a lid is not realistic, so allow for one.',
      },
      {
        q: 'Is this the right size for iced coffee?',
        a: 'It is the standard iced size for most UK cafés, and larger than most hot drinks need, which is why it straddles both.',
      },
      {
        q: 'Can we order 12oz and 16oz together?',
        a: 'Yes, and running them in one job shares the setup. Whether they share a lid depends on the rim rather than the volume.',
      },
      {
        q: 'Can we run one 16oz design for hot and cold?',
        a: 'Yes, though a hot-specified cup is heavier than cold service needs. Tell us the split and we will advise.',
      },
    ],
    related: ['12-oz-paper-cups', '20-oz-paper-cups', '32-oz-clear-cups', 'custom-iced-coffee-sleeves'],
  },

  {
    slug: '20-oz-paper-cups',
    name: '20oz Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '20oz Paper Cups UK | Printed Large Cold Cups',
    seoDescription:
      'Printed 20oz paper cups for milkshakes, soft drinks and large iced coffee, where lid seating and base stability both matter.',
    h1: '20oz Paper Cups',
    cardBlurb: 'Large cold drinks and milkshakes, where weight and lid fit matter.',
    enquiryLabel: '20oz paper cups',
    intro: [
      'At 20oz the cup is almost entirely a cold drink product. Very few people want that much hot coffee, and fewer still want to carry it.',
      'Milkshakes, iced drinks and soft drinks at events are where this size earns its place.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Thick Shake Tests the Lid, Not the Cup',
        body: [
          'A milkshake is heavy and thick, and a customer pulling on a straw creates suction that lifts a poorly seated lid.',
          'That makes lid fit the critical specification at this size. A cup that is a fraction out of round at the rim will not hold a lid under that load.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Points That Matter at 20oz',
        items: [
          'Rim roundness, because lid seating is under more stress.',
          'Wall stiffness, since a full cup squeezed at the middle can pop the lid.',
          'A base wide enough to sit stably in a car cup holder.',
          'Straw slot type on the lid, matched to the drink thickness.',
        ],
        outro: 'Thick shakes need a wider straw, which needs a lid slot sized for it.',
        link: {
          href: '/32-oz-clear-cups/',
          anchor: 'clear cups for layered and visible drinks',
          sentence: 'Where the drink itself is the display, {link} are the usual choice.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will a 20oz cup fit a car cup holder?',
        a: 'It depends on the base diameter rather than the volume, and many 20oz cups are too wide for older holders. If drive-through or delivery is part of your trade, check the base measurement specifically.',
      },
      {
        q: 'Do we need a different lid for milkshakes?',
        a: 'Usually. A thick shake needs a wider straw, and that needs a lid with a matching slot. A standard soft drink lid slot is often too narrow.',
      },
      {
        q: 'Do milkshakes need a different lid?',
        a: 'Usually. A thick shake needs a wider straw, which needs a lid with a matching slot. A soft drink slot is often too narrow.',
      },
      {
        q: 'Why does rim roundness matter at this size?',
        a: 'Because there is more weight and more suction on the lid. A cup slightly out of round will not hold a lid under a straw being pulled on.',
      },
      {
        q: 'Will the cup deform when squeezed?',
        a: 'On a thin wall with a full drink, it can, and that is usually what pops a lid. Wall stiffness matters more at 20oz than at 12oz.',
      },
      {
        q: 'Is 20oz mostly a cold size?',
        a: 'Almost entirely. Very few people want that much hot coffee, and fewer still want to carry it.',
      },
      {
        q: 'What is the usable volume?',
        a: 'Around 17 to 18oz with headspace and ice. If you sell by stated volume, check against the cup with ice in it.',
      },
      {
        q: 'Do these suit events?',
        a: 'They do, and event caterers are among the main buyers alongside milkshake and dessert drink businesses.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and the large surface takes it well. Bear in mind a hand still covers a band of it throughout the drink.',
      },
      {
        q: 'Do these suit a milkshake menu?',
        a: 'They are one of the main uses, and lid and straw slot matter more here than on any other size.',
      },
    ],
    related: ['16-oz-paper-cups', '32-oz-clear-cups', 'large-paper-cups', 'custom-cold-drink-sleeves'],
  },

  {
    slug: '32-oz-clear-cups',
    name: '32oz Clear Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: '32oz Clear Cups UK | Printed Large Clear Drink Cups',
    seoDescription:
      'Printed 32oz clear cups for layered iced drinks, bubble tea and large cold serves, designed to frame the drink not hide it.',
    h1: '32oz Clear Cups',
    cardBlurb: 'Large clear cups for layered iced drinks and bubble tea.',
    enquiryLabel: '32oz clear cups',
    intro: [
      'Clear cups exist because some drinks are bought with the eyes. A layered iced latte, a bubble tea, a fruit cooler — the appeal is visible through the wall.',
      'That changes how printing works: the design has to frame the drink rather than cover it.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Print Around the Drink, Not Over It',
        body: [
          'A full-coverage design on a clear cup defeats the reason for choosing it. The drink disappears and you have paid extra for a cup that now behaves like an opaque one.',
          'Designs that work leave a clear window across the front and place branding around it — a band at the top, a mark at the base, or a repeating outline.',
        ],
        link: {
          href: '/custom-iced-coffee-sleeves/',
          anchor: 'sleeves that add branding without covering the cup',
          sentence: 'Where more brand presence is needed, {link} add a printed band that can be removed.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where 32oz Clear Cups Are Used',
        items: [
          'Bubble tea, where the pearls at the base are part of the product.',
          'Layered iced coffee, where the pour is the selling point.',
          'Fruit and slush drinks at festivals and markets.',
          'Sharing sizes at events and sports venues.',
        ],
        outro: 'At this volume, lid fit and base stability matter as much as the print.',
      },
      {
        kind: 'callout',
        heading: 'Clear Cups Are a Different Material',
        body: 'These are not paper cups with a window — they are formed from a clear material, which affects how they print, how they should be disposed of, and what can honestly be claimed about them. We confirm the material on your quote so any on-pack wording matches it.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'How much of a clear cup can be printed?',
        a: 'Technically a great deal; practically, less than you might want. Covering the front removes the reason for using a clear cup, so most designs leave a clear window and brand around it.',
      },
      {
        q: 'Are clear cups recyclable?',
        a: 'That depends on the material and on local collection, and it is not a claim we would make in general terms. We confirm the material on your quote so you can check it against your own waste arrangements.',
      },
      {
        q: 'How much of a clear cup can we print?',
        a: 'Technically a great deal, practically less than you might want. Covering the front removes the reason for choosing a clear cup.',
      },
      {
        q: 'What lid do these take?',
        a: 'Usually a flat or domed lid with a straw slot. Bubble tea often needs a wider slot, so tell us the drink.',
      },
      {
        q: 'Do these suit bubble tea?',
        a: 'They are one of the main uses, because the pearls at the base are part of what the customer is buying.',
      },
      {
        q: 'Will a 32oz cup be stable?',
        a: 'It is tall relative to its base, so a wider base helps. That may then not fit a cup holder, which is a genuine trade.',
      },
      {
        q: 'Can we brand without covering the drink?',
        a: 'A band at the top, a mark at the base, or a repeating outline all work. That is how most clear cup designs are built.',
      },
      {
        q: 'Is this a different material from paper cups?',
        a: 'Yes, formed from a clear material rather than lined board, which changes how it prints and how it should be disposed of.',
      },
      {
        q: 'Do these suit festivals?',
        a: 'They do, particularly for slush and fruit drinks where the colour of the drink is the display.',
      },
      {
        q: 'Can we order these with matching straws?',
        a: 'Straws are sourced separately from cups. Tell us the drink and we will confirm what slot size the lid needs.',
      },
    ],
    related: ['20-oz-paper-cups', '16-oz-paper-cups', 'custom-cold-drink-sleeves', 'large-paper-cups'],
  },

  {
    slug: 'small-paper-cups',
    name: 'Small Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: 'Small Paper Cups UK | Printed Mini Cups 2–6oz',
    seoDescription:
      'Small printed paper cups from 2oz to 6oz for tasting, sampling, sauces and children\'s drinks at UK venues and food shows.',
    h1: 'Small Paper Cups',
    cardBlurb: 'The 2oz to 6oz band for tasting, sampling and portions.',
    enquiryLabel: 'small paper cups',
    intro: [
      'Small cups get bought by the box for one job: giving a lot of people a little of something. Sampling stands, tasting events, medicine rounds and children\'s parties all buy in this band.',
      'Because usage is high and each cup is seen for seconds, unit cost usually matters more than print quality.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Volume Buying Changes the Priorities',
        body: [
          'A sampling campaign might use fifty thousand cups across a season, each held for under a minute. Nobody studies the design.',
          'That argues for a plain cup or a single-colour logo rather than full-colour artwork, and for spending the difference on quantity.',
        ],
        link: {
          href: '/paper-cups/sizes/',
          anchor: 'individual sizes with their usable volumes',
          sentence: 'If you know the exact volume you need, {link} lists each one separately.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Uses Across the Small Sizes',
        items: [
          'Product sampling in supermarkets and food halls.',
          'Tasting flights at breweries, distilleries and food shows.',
          'Portion and dosing cups in care and clinical settings.',
          'Children\'s drinks at parties and events.',
          'Sauce and condiment portions alongside food service.',
        ],
        outro: 'Sampling runs are often seasonal, so ask about lead time before a campaign date is fixed.',
      },
    ],
    faqs: [
      {
        q: 'Is it worth printing sampling cups?',
        a: 'A single-colour logo usually is, because it identifies who is giving the sample. Full-colour artwork rarely pays back on a cup held for under a minute.',
      },
      {
        q: 'What is the smallest useful size?',
        a: '2oz for liquids, and it is genuinely small — about a double espresso. Below that, portion pots make more sense than cups.',
      },
      {
        q: 'Do small cups need lids?',
        a: 'For sampling, rarely. For sauces and portions that travel, often. Confirm the rim rather than the volume when matching.',
      },
      {
        q: 'Will they denest cleanly?',
        a: 'With a denesting feature, yes, and at sampling volumes that matters. Stuck cups cost real seconds across a session.',
      },
      {
        q: 'Can we order for a single campaign?',
        a: 'Yes, and sampling runs are usually one-offs. Send the campaign date as well as the quantity, since seasonal demand affects lead time.',
      },
      {
        q: 'Are these suitable for hot samples?',
        a: 'With a hot lining, yes, and the small volume means a single wall stays comfortable to hold.',
      },
      {
        q: 'Which sizes are in this band?',
        a: 'Roughly 2oz to 6oz. Each has its own page with the usable volume and what it is genuinely used for.',
      },
      {
        q: 'How do we choose between 2oz and 4oz?',
        a: 'Print area, mostly. The liquid volume is similar for espresso, but 4oz is where a logo becomes legible.',
      },
      {
        q: 'Can we order a mix of small sizes?',
        a: 'Yes, and sampling operations often need two. Running them in one job shares the setup between them.',
      },
      {
        q: 'Do these need lids for transport?',
        a: 'If samples are pre-filled and moved, yes. For hand-to-hand sampling an open cup is quicker and cheaper.',
      },
    ],
    related: ['2-oz-paper-cups', '4-oz-paper-cups', 'paper-portion-cups', 'small-cardboard-cups'],
  },

  {
    slug: 'large-paper-cups',
    name: 'Large Paper Cups',
    category: 'paper-cups',
    subcategory: 'sizes',
    seoTitle: 'Large Paper Cups UK | Printed 16oz to 32oz Cups',
    seoDescription:
      'Large printed paper cups from 16oz to 32oz for events, venues and sharing serves, with base stability and lid fit covered.',
    h1: 'Large Paper Cups',
    cardBlurb: 'The 16oz to 32oz band for events, venues and sharing serves.',
    enquiryLabel: 'large paper cups',
    intro: [
      'Above 16oz, cups stop being about the drink and start being about handling. A full large cup is heavy, top-sided and easy to knock over.',
      'Stability and lid security become the specification, and print becomes secondary.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Tall Cups Are Unstable by Design',
        body: [
          'A large cup is taller relative to its base than a small one, which makes it easier to tip. In a venue with seat-side service that is a real cost in spillages.',
          'A wider base helps, at the price of not fitting some cup holders. It is a genuine trade rather than a free improvement.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where Large Cups Are Bought',
        items: [
          'Cinemas and sports venues, where a large soft drink is a standard offer.',
          'Festivals and outdoor events serving in volume.',
          'Milkshake and dessert drink businesses.',
          'Anywhere a sharing serve is on the menu.',
        ],
        outro: 'Venues with tiered seating should check base stability specifically — a cup on a step is the commonest spill.',
        link: {
          href: '/20-oz-paper-cups/',
          anchor: '20oz cups and the lid fit they need',
          sentence: 'The most ordered size in this band is covered on {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Do large cups need a different lid specification?',
        a: 'Often. There is more weight and more suction on the lid, and a cup squeezed at the middle can pop one that seats loosely. Lid fit is worth testing on a sample rather than assuming.',
      },
      {
        q: 'Should we choose a wider base for stability?',
        a: 'It helps considerably, but a wider base may not fit cup holders in vehicles or seating. Which matters more depends on where the drink is carried.',
      },
      {
        q: 'Should we choose a wider base?',
        a: 'It helps stability considerably, but may not fit cup holders in vehicles or seating. Which matters more depends on where the drink is carried.',
      },
      {
        q: 'Why are tall cups unstable?',
        a: 'Because they are taller relative to their base than a small cup. On tiered seating that is where most spills come from.',
      },
      {
        q: 'Which sizes are in this band?',
        a: '16oz to 32oz. Each has its own page covering usable volume, lid type and what it is actually used for.',
      },
      {
        q: 'Do these suit stadium service?',
        a: 'They do, and stadium and cinema use is where base stability matters most, because drinks are carried up steps.',
      },
      {
        q: 'Can we print full colour?',
        a: 'Yes, and the surface area is generous. Remember a hand still covers a band of it for the whole drink.',
      },
      {
        q: 'Are large cups mostly for cold drinks?',
        a: 'Above 16oz, almost entirely. Hot drinks rarely go beyond 16oz because few people want to carry that much.',
      },
      {
        q: 'How do we estimate quantity?',
        a: 'From your busiest period rather than an average. Large cup usage at venues concentrates heavily around events.',
      },
      {
        q: 'Do you supply these to venues?',
        a: 'Yes, and stadium and cinema use is where base stability matters most, because drinks are carried up steps.',
      },
    ],
    related: ['16-oz-paper-cups', '20-oz-paper-cups', '32-oz-clear-cups', 'paper-cups-with-lids'],
  },
];

export const CUP_MATERIALS: Product[] = [
  {
    slug: 'kraft-paper-cups',
    name: 'Kraft Paper Cups',
    category: 'paper-cups',
    subcategory: 'materials',
    seoTitle: 'Kraft Paper Cups UK | Printed Brown Board Cups',
    seoDescription:
      'Printed kraft paper cups in unbleached brown board, with plain guidance on how brand colours shift over a warm brown base.',
    h1: 'Kraft Paper Cups',
    cardBlurb: 'Unbleached brown board cups with a plain, unfussy look.',
    enquiryLabel: 'kraft paper cups',
    intro: [
      'Kraft board is unbleached, which is the whole reason it is brown and the whole reason independents like it. It reads as plain and considered next to a white cup.',
      'What it does not do is print accurately, and that catches people out after the artwork is signed off.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Colours Shift on a Brown Base',
        body: [
          'Printing inks are transparent. On white board the paper reflects light back through them and colours look as intended; on kraft, that base is warm brown, so everything shifts towards it.',
          'Blues go muddy, pale tints nearly disappear, and a bright red reads as a deeper rust. None of that is a printing fault — it is what the substrate does.',
        ],
        link: {
          href: '/paper-cups/materials/',
          anchor: 'how the material choices compare across the range',
          sentence: 'The {link} page sets out the trade-offs alongside other stocks.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Designing for Kraft Rather than Against It',
        items: [
          'Use one strong colour and let the board provide the second.',
          'Black and dark tones print predictably; pale tints do not.',
          'A white underbase restores accuracy where a colour must be exact, at extra cost.',
          'Ask for a proof on kraft rather than approving from a screen.',
        ],
        outro: 'Designs made for kraft usually look better on it than designs adapted to it.',
      },
      {
        kind: 'callout',
        heading: 'Kraft Is a Look, Not an Environmental Claim',
        body: 'Unbleached board avoids a bleaching stage, but a kraft cup still needs a liquid barrier on the inside and still needs the right collection to be recycled. The brown colour on its own says nothing about disposal.',
      },
    ],
    faqs: [
      {
        q: 'Will our brand colour print correctly on kraft?',
        a: 'It will shift warmer and darker. If the colour is one customers would notice being wrong, either print a white underbase first or choose a white cup — those are the two honest options.',
      },
      {
        q: 'Are kraft cups more environmentally friendly?',
        a: 'Not inherently. They skip a bleaching stage, but the inside still carries a barrier lining and disposal still depends on local collection. The colour is an appearance choice rather than an environmental one.',
      },
      {
        q: 'Why do colours shift on kraft?',
        a: 'Printing inks are transparent. On white board the paper reflects light back through them; on kraft that base is warm brown, so everything pulls towards it.',
      },
      {
        q: 'Can we fix the shift?',
        a: 'A white underbase printed first restores accuracy, at the cost of an extra pass. The alternative is designing with the shift rather than against it.',
      },
      {
        q: 'Which colours suffer most?',
        a: 'Blues go muddy and pale tints nearly disappear. Black and dark tones print predictably, which is why kraft designs lean on them.',
      },
      {
        q: 'Is kraft cheaper than white board?',
        a: 'The board is usually similar. Costs differ in the artwork, since a design needing a white underbase adds a printing pass.',
      },
      {
        q: 'Does kraft still need a lining?',
        a: 'Yes. Board alone goes soft against a liquid within minutes, so a kraft cup has the same barrier as a white one on the inside.',
      },
      {
        q: 'Can we use white ink on kraft?',
        a: 'Yes, and it stands out well against the brown. It is an extra ink, so price it rather than assuming it is free.',
      },
      {
        q: 'Do kraft cups suit hot drinks?',
        a: 'As well as white ones. The board colour has no bearing on heat performance, which comes from the wall construction and lining.',
      },
      {
        q: 'Will two kraft orders match exactly?',
        a: 'Closely, not exactly. Unbleached board shifts a little between mill batches, which matters if cups sit beside other matched packaging.',
      },
    ],
    related: ['kraft-coffee-cups', 'brown-paper-cups', 'recyclable-paper-cups', 'eco-friendly-paper-cups'],
  },

  {
    slug: 'wax-paper-cups',
    name: 'Wax Paper Cups',
    category: 'paper-cups',
    subcategory: 'materials',
    seoTitle: 'Wax Paper Cups UK | Waxed Cold Drink Cups',
    seoDescription:
      'Wax-lined paper cups for cold and ambient drinks, where the coating repels moisture but softens if anything hot goes in.',
    h1: 'Wax Paper Cups',
    cardBlurb: 'Wax-lined cups for cold and ambient drinks, not for hot.',
    enquiryLabel: 'wax paper cups',
    intro: [
      'A wax lining repels moisture very effectively and softens when it gets hot. That single fact decides everything about where these cups belong.',
      'They are a cold and ambient product. Putting a hot drink in one is the mistake to avoid.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Wax Against a Conventional Hot Cup Lining',
        columns: ['Wax lining', 'Hot cup lining'],
        rows: [
          ['Hot drinks', 'Not suitable — the coating softens', 'Designed for it'],
          ['Cold drinks', 'Very good; repels condensation', 'Also fine'],
          ['Feel', 'Slightly waxy to the touch', 'Neutral'],
          ['Disposal', 'Depends on local collection', 'Also depends on local collection'],
          ['Cost', 'Often lower', 'Standard'],
        ],
        outro: 'If a site serves both hot and cold, wax cups have to be kept clearly separate from the hot line.',
      },
      {
        kind: 'bullets',
        heading: 'Where Wax Cups Suit',
        items: [
          'Cold soft drinks at events and markets.',
          'Water service where cups are filled from a jug.',
          'Ambient sampling, where nothing is heated.',
          'Applications where a slight wax feel is acceptable or expected.',
        ],
        outro: 'Anywhere a member of staff might pour tea into the wrong cup, it is worth thinking twice.',
        link: {
          href: '/disposable-hot-cups/',
          anchor: 'cups specified for hot drink service',
          sentence: 'For anything hot, {link} are the range to work from instead.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can wax cups hold a hot drink at all?',
        a: 'Not reliably. The coating softens with heat, which affects both the cup and the drink. If hot service is any part of your operation, specify a hot cup rather than risking a mix-up.',
      },
      {
        q: 'Do wax cups taste of anything?',
        a: 'With a cold drink, generally not. With anything warm the coating can become noticeable, which is another reason the hot and cold lines should not be mixed.',
      },
      {
        q: 'Can wax cups hold anything hot?',
        a: 'No. The coating softens with heat, transfers onto the drink and stops working. Hot service needs a different lining entirely.',
      },
      {
        q: 'What are they actually good at?',
        a: 'Repelling moisture. Cold soft drinks, water service and ambient sampling are where they perform well and cost less than alternatives.',
      },
      {
        q: 'How do we stop staff using them for tea?',
        a: 'Store them physically apart from the hot cups. A mix-up is the main practical risk with this stock.',
      },
      {
        q: 'Do they print well?',
        a: 'Yes, though ink sits on the coating rather than soaking in, so it can scuff more readily. Simple designs hold up most reliably.',
      },
      {
        q: 'Are they recyclable?',
        a: 'A wax coating changes the disposal route, and whether it is accepted depends on local collection. We confirm the material rather than claiming an outcome.',
      },
      {
        q: 'Do they suit events?',
        a: 'They do for cold service, and the lower cost matters when volumes are high and each cup is used once.',
      },
      {
        q: 'Can we get lids for these?',
        a: 'Match by rim diameter as with any cup. Cold service often uses a flat lid with a straw slot rather than a sip lid.',
      },
      {
        q: 'Do these suit a festival bar?',
        a: 'They do for cold service, and the lower unit cost matters where volumes are high and each cup is used once.',
      },
    ],
    related: ['parchment-paper-cups', 'paper-drinking-cups', 'paper-water-cups', 'custom-wax-paper'],
  },

  {
    slug: 'parchment-paper-cups',
    name: 'Parchment Paper Cups',
    category: 'paper-cups',
    subcategory: 'materials',
    seoTitle: 'Parchment Paper Cups UK | Heat Tolerant Paper Cups',
    seoDescription:
      'Parchment-lined paper cups that tolerate heat better than waxed stock, for baked portions and hot-held cabinet service.',
    h1: 'Parchment Paper Cups',
    cardBlurb: 'Heat-tolerant lined cups for baked and hot-held portions.',
    enquiryLabel: 'parchment paper cups',
    intro: [
      'Parchment tolerates heat where wax does not, which opens up uses that involve an oven or a hot cabinet rather than just a hot liquid.',
      'It is a speciality choice rather than a general-purpose one, and worth specifying only when the heat is genuinely part of the application.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Heat Tolerance Is the Point',
        body: [
          'Most cup linings are specified against a hot drink, which is a fairly gentle test compared with an oven or a hot-hold cabinet.',
          'Parchment handles sustained heat better, which matters for baked portions, hot-held food and anything that goes into a cabinet rather than straight to a customer.',
        ],
        link: {
          href: '/paper-cups/food-cups/',
          anchor: 'cups specified for food rather than drinks',
          sentence: 'Most parchment applications sit within {link} rather than the drinks range.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Typical Applications',
        items: [
          'Baked portions cooked in the cup rather than transferred into it.',
          'Hot-held food in a cabinet over a service period.',
          'Portions that go under a heat lamp.',
          'Anything where a waxed lining would soften.',
        ],
        outro: 'Confirm the actual temperature and holding time with your enquiry — those decide whether parchment is needed at all.',
      },
      {
        kind: 'callout',
        heading: 'Temperature Limits Confirmed per Specification',
        body: 'Heat tolerance varies between parchment grades, and publishing a single temperature figure would be misleading. Tell us the temperature and duration your application involves and we will confirm a suitable grade in writing.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Can parchment cups go in an oven?',
        a: 'Some grades tolerate oven use and some do not, and the difference matters. Tell us the temperature and time involved and we will confirm what is suitable rather than giving a general answer.',
      },
      {
        q: 'Is parchment worth the extra cost for hot drinks?',
        a: 'Generally not. A standard hot cup lining handles hot drinks perfectly well. Parchment earns its cost only where sustained or higher heat is involved.',
      },
      {
        q: 'What does parchment do that other linings do not?',
        a: 'It tolerates sustained and higher heat, which matters for baked portions and hot-held cabinet food rather than for hot drinks.',
      },
      {
        q: 'Can these go in an oven?',
        a: 'Some grades tolerate oven use and some do not. Tell us the temperature and the duration and we will confirm a suitable grade.',
      },
      {
        q: 'Is parchment worth it for hot drinks?',
        a: 'Generally not. A standard hot cup lining handles hot drinks perfectly well, and parchment costs more.',
      },
      {
        q: 'What are the main uses?',
        a: 'Baked portions cooked in the cup, hot-held food in a cabinet, and anything sitting under a heat lamp through a service.',
      },
      {
        q: 'Do these cost more?',
        a: 'Yes, which is why they are a speciality choice rather than a general one. Specify them where the heat genuinely requires it.',
      },
      {
        q: 'Will the print survive the heat?',
        a: 'The ink system has to be specified for the conditions, not just for food contact. We confirm that alongside the board grade.',
      },
      {
        q: 'Are they available in all sizes?',
        a: 'Availability is narrower than standard stock. Tell us the size you need and we will confirm rather than listing options that may not run.',
      },
      {
        q: 'Can we use these for cold food too?',
        a: 'You can, though you would be paying for heat tolerance you do not need. A standard lined cup is cheaper for cold.',
      },
    ],
    related: ['wax-paper-cups', 'soup-paper-cups', 'custom-parchment-paper', 'disposable-hot-cups'],
  },

  {
    slug: 'recyclable-paper-cups',
    name: 'Recyclable Paper Cups',
    category: 'paper-cups',
    subcategory: 'materials',
    seoTitle: 'Recyclable Paper Cups UK | Cups for Paper Streams',
    seoDescription:
      'Paper cups specified for recycling streams, with honest guidance on the separate collection a lined cup actually needs.',
    h1: 'Recyclable Paper Cups',
    cardBlurb: 'Cups specified for recycling, with realistic guidance on collection.',
    enquiryLabel: 'recyclable paper cups',
    intro: [
      'Almost every paper cup is recyclable in principle and a great many are not recycled in practice. The gap between those two statements is the whole subject of this page.',
      'What decides the outcome is not usually the cup — it is whether a separate collection exists where the cup is thrown away.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Collection Matters More than the Cup',
        body: [
          'A lined paper cup needs a facility that can separate the lining from the fibre. Those facilities exist, and they are not what most general waste goes to.',
          'A cup sent to general waste performs the same regardless of how it was specified. Arranging the collection is the step that changes the outcome.',
        ],
      },
      {
        kind: 'steps',
        heading: 'Working Out What You Can Honestly Say',
        steps: [
          {
            title: 'Ask Your Waste Contractor What They Collect',
            body: 'Specifically whether they take lined paper cups as a separate stream, not whether they take card.',
          },
          {
            title: 'Decide Where Your Cups End Up',
            body: 'Cups used in-store go into your bins. Cups taken away go into street bins, which you do not control.',
          },
          {
            title: 'Match the Cup to the Stream Available',
            body: 'There is no point specifying for a stream you cannot access.',
          },
          {
            title: 'Only Then Write the On-Pack Wording',
            body: 'The instruction printed on the cup should describe what a customer can actually do.',
          },
        ],
        link: {
          href: '/blog/reducing-packaging-waste-in-dessert-businesses/',
          anchor: 'practical steps that reduce packaging waste',
          sentence: 'Our article on {link} covers the decisions that make more difference than the cup specification.',
        },
      },
      {
        kind: 'callout',
        heading: 'We Confirm Materials, Not Outcomes',
        body: 'We will tell you exactly what board and lining a quoted cup uses so you can check it against your own collection. We will not publish a general claim that a cup "is recycled", because that depends on circumstances outside the packaging.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Can I print "recyclable" on the cup?',
        a: 'Only if it is accurate for the people using it, which usually means a collection they can reach. A cup marked recyclable that goes into general waste is worse than an unmarked one, because it misleads.',
      },
      {
        q: 'Which lining recycles most easily?',
        a: 'That depends on the facilities available to you rather than on a universal ranking. Start from what your contractor collects and work backwards to the specification.',
      },
      {
        q: 'Can we print \'recyclable\' on the cup?',
        a: 'Only if it is accurate for the people using it, which usually means a collection they can reach. A misleading mark is worse than none.',
      },
      {
        q: 'Why does a paper cup need a special stream?',
        a: 'Because the lining has to be separated from the fibre. Those facilities exist and are not where most general waste goes.',
      },
      {
        q: 'Does it matter if customers take cups away?',
        a: 'It matters a great deal. Cups used in-store go into bins you control; cups carried out do not, which is where most of them go.',
      },
      {
        q: 'Can you supply certification?',
        a: 'What is available depends on the specific stock and what is in supply when your job runs. We confirm it in writing per quote.',
      },
      {
        q: 'Is a recyclable cup more expensive?',
        a: 'Sometimes, though removing lamination elsewhere can offset it. We price a conventional specification alongside so the difference is visible.',
      },
      {
        q: 'What should we tell customers?',
        a: 'Something specific and checkable rather than broad. A modest accurate claim is far more credible than a general one.',
      },
      {
        q: 'Does the cup colour indicate anything?',
        a: 'No. A brown or green cup says nothing about disposal, and customers frequently read it as if it does.',
      },
      {
        q: 'Will you put the material specification in writing?',
        a: 'Yes, board grade and lining, so you can check it against your own collection before making any claim on the pack.',
      },
    ],
    related: ['eco-friendly-paper-cups', 'kraft-paper-cups', 'eco-friendly-beverage-sleeves', 'custom-eco-friendly-cone-sleeves'],
  },

  {
    slug: 'eco-friendly-paper-cups',
    name: 'Eco-Friendly Paper Cups',
    category: 'paper-cups',
    subcategory: 'materials',
    seoTitle: 'Eco Friendly Paper Cups UK | Lower Impact Cup Options',
    seoDescription:
      'Lower-impact cup options covering alternative linings and recycled-content board, with the real trade-offs set out plainly.',
    h1: 'Eco-Friendly Paper Cups',
    cardBlurb: 'Alternative linings and recycled content, with the trade-offs stated.',
    enquiryLabel: 'eco-friendly paper cups',
    intro: [
      'There is no cup that is simply better on every measure. Alternative linings cost more and sometimes tolerate less heat; recycled content varies in availability; and none of it matters much if the cup goes to landfill.',
      'This page sets out the options and what each one actually changes.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'What the Alternatives Change',
        columns: ['Alternative lining', 'Recycled content board'],
        rows: [
          ['What it addresses', 'The plastic layer inside the cup', 'The virgin fibre in the board'],
          ['Heat tolerance', 'Can be lower — worth checking for hot drinks', 'Unchanged'],
          ['Cost', 'Higher', 'Varies with availability'],
          ['Disposal', 'Still needs the correct stream', 'Still needs the correct stream'],
          ['Food contact', 'Specified for it', 'Depends on the grade'],
        ],
        outro: 'Both are genuine improvements on one axis. Neither removes the need for the right collection.',
      },
      {
        kind: 'prose',
        heading: 'The Biggest Reduction Is Not a Cup at All',
        body: [
          'For a site with seating, serving in reusable cups for eat-in customers removes far more waste than any change to the disposable specification.',
          'That is worth saying plainly, even though it is not something we sell. Where takeaway is genuinely the trade, the specification choices above are the ones that matter.',
        ],
        link: {
          href: '/recyclable-paper-cups/',
          anchor: 'what determines whether a cup is actually recycled',
          sentence: 'Before choosing a lining, {link} is the more useful question to settle.',
        },
      },
      {
        kind: 'callout',
        heading: 'Availability and Certification Confirmed per Order',
        body: 'Which alternative linings and recycled-content boards are available depends on the run size, the cup size and what is in supply. We confirm the specific options for your job in writing rather than listing claims here.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Is a plant-based lining better than a conventional one?',
        a: 'On the material itself, arguably. In practice both need a specialist collection, and some alternative linings tolerate less heat. It is worth deciding based on the collection you can actually arrange.',
      },
      {
        q: 'Do these cups cost more?',
        a: 'Alternative linings generally do. Recycled-content board varies. We will price both alongside a conventional specification so the difference is visible rather than assumed.',
      },
      {
        q: 'Is a plant-based lining better?',
        a: 'On the material itself, arguably. In practice both need a specialist collection, and some alternative linings tolerate less heat.',
      },
      {
        q: 'Do alternative linings cost more?',
        a: 'Generally yes. We will price them alongside a conventional specification so the difference is visible rather than assumed.',
      },
      {
        q: 'Will an alternative lining handle hot drinks?',
        a: 'Heat tolerance varies by type, and some are lower than conventional linings. Tell us your service temperature and we will confirm.',
      },
      {
        q: 'What is the biggest reduction available?',
        a: 'For a site with seating, serving eat-in customers in reusables. It usually outweighs every material substitution on the disposable range.',
      },
      {
        q: 'Can we get recycled content in a cup?',
        a: 'In the outer board more readily than in the food-contact layer. Availability varies, and we confirm what is achievable per job.',
      },
      {
        q: 'Does reducing print coverage help?',
        a: 'It helps recyclability and cost at the same time. Heavy flood coverage does neither any favours.',
      },
      {
        q: 'Should we choose based on the material or the bin?',
        a: 'The bin. A cup with an alternative lining sent to general waste performs no better than a conventional one.',
      },
      {
        q: 'Can we make a claim on the pack?',
        a: 'Only one your customers can act on. We will tell you exactly what the cup consists of so you can check before printing anything.',
      },
    ],
    related: ['recyclable-paper-cups', 'kraft-paper-cups', 'eco-friendly-beverage-sleeves', 'custom-eco-friendly-cone-sleeves'],
  },
];

export const CUP_COLOURS: Product[] = [
  {
    slug: 'coloured-paper-cups',
    name: 'Coloured Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Coloured Paper Cups UK | Solid Colour Printed Cups',
    seoDescription:
      'Solid-colour printed paper cups matched to a brand palette, with guidance on coverage cost and holding an accurate colour.',
    h1: 'Coloured Paper Cups',
    cardBlurb: 'Solid colour bodies matched to your brand palette.',
    enquiryLabel: 'coloured paper cups',
    intro: [
      'A solid colour body reads as a brand decision from across a room, which a small logo on white does not. That is what people are buying when they order coloured cups.',
      'Colour on a cup is printed rather than dyed, and that governs both the cost and how close a match you can hold.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Full Coverage Is Ink, and Ink Is the Cost',
        body: [
          'A coloured cup is a white cup with colour printed across it. That means ink over the entire printable area rather than the few per cent a logo uses.',
          'It also means an unprinted margin at the rim and the seam, which is unavoidable on every printed cup and shows as a thin light line at the top.',
        ],
        link: {
          href: '/paper-cups/coloured/',
          anchor: 'individual colours and how each behaves in print',
          sentence: 'Each colour has its own considerations, set out across {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Holding a Brand Colour',
        items: [
          'Supply a Pantone reference rather than a hex code or a screenshot.',
          'Spot colours hold far better across a long run than the same colour built from CMYK.',
          'Large flat areas show variation that a small logo would hide.',
          'Ask for a printed sample where the colour is one customers would notice.',
        ],
        outro: 'On kraft board, expect a shift — an accurate match needs white board or a white underbase.',
      },
    ],
    faqs: [
      {
        q: 'Why is there an unprinted line at the rim?',
        a: 'The rim is rolled to form the cup, and a printed edge would crack and flake when it is rolled. Every printed cup has this margin regardless of supplier, and it is more visible on dark colours.',
      },
      {
        q: 'Can the inside of the cup be coloured?',
        a: 'The inside is the food-contact surface and is normally left unprinted. Where an inside print is wanted, the ink system has to be specified for contact, which we would confirm rather than assume.',
      },
      {
        q: 'Can the inside be coloured?',
        a: 'The inside is the food-contact surface and is normally left unprinted. An inside print needs an ink system specified for contact.',
      },
      {
        q: 'Why does full coverage cost more?',
        a: 'Because ink covers the whole printable area rather than the few per cent a logo uses. That is the main cost difference against a white cup.',
      },
      {
        q: 'How close can you match a brand colour?',
        a: 'Very close with a spot ink and a Pantone reference. A colour built from process inks drifts more across a long run.',
      },
      {
        q: 'Why does the same colour vary between sizes?',
        a: 'Different sizes can run on different presses or board batches, and a large flat area shows variation a small logo hides.',
      },
      {
        q: 'Can we mix colours in one order?',
        a: 'On digital printing, yes. Send the split between colours rather than a total so it is priced properly.',
      },
      {
        q: 'Does colour affect how the cup performs?',
        a: 'No. Colour is print on the outside; the lining and wall construction determine how the cup behaves with a drink.',
      },
      {
        q: 'What should we send our designer?',
        a: 'A Pantone reference rather than a hex code or a screenshot, and our die template so the artwork is built on the right shape.',
      },
      {
        q: 'Can we order a colour we do not see listed?',
        a: 'Yes. Colour is printed rather than stocked, so any Pantone reference can be matched subject to the print method.',
      },
    ],
    related: ['black-paper-cups', 'white-paper-cups', 'printed-paper-cups', 'logo-paper-cups'],
  },

  {
    slug: 'white-paper-cups',
    name: 'White Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'White Paper Cups UK | Printed & Plain White Cups',
    seoDescription:
      'Plain and printed white paper cups. The lowest-cost base to print on, and the most accurate surface for brand colours.',
    h1: 'White Paper Cups',
    cardBlurb: 'The default base: cheapest to print and the most colour-accurate.',
    enquiryLabel: 'white paper cups',
    intro: [
      'White is where every cup range starts. The board arrives white, so no ink is needed to make it that colour, and printed colours land accurately on it.',
      'For a first branded order it is almost always the sensible base.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'White Against a Coloured Body',
        columns: ['White', 'Solid colour'],
        rows: [
          ['Print cost', 'Only where the design sits', 'Ink across the whole cup'],
          ['Colour accuracy', 'Highest — inks land on a neutral base', 'Accurate, but on top of coverage cost'],
          ['Shelf presence', 'Neutral, quiet', 'Strong from a distance'],
          ['Marks and stains', 'Show more', 'Hide better'],
          ['Suits', 'First orders, clean brand positioning', 'Established brands with a colour to own'],
        ],
        outro: 'A one-colour logo on white is the cheapest branded cup it is possible to order.',
      },
      {
        kind: 'prose',
        heading: 'Clean Does Not Mean Plain',
        body: [
          'Plenty of well-regarded cafés use a white cup with a single mark, and it reads as confident rather than cheap.',
          'What undermines it is a low-quality board that looks grey rather than white. If you are going minimal, the board grade matters more than usual.',
        ],
        link: {
          href: '/logo-paper-cups/',
          anchor: 'single-logo printing on a plain body',
          sentence: 'The most economical version of this is covered on {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Is a white cup cheaper than a coloured one?',
        a: 'Meaningfully so. A coloured cup needs ink across the entire surface; a white one needs ink only where the design sits, which can be a small fraction of the area.',
      },
      {
        q: 'Do white cups show coffee marks?',
        a: 'More than dark cups, particularly around the rim. In practice a takeaway cup is not held long enough for it to matter much, though it is noticeable on cups sitting in a seating area.',
      },
      {
        q: 'Why is white the cheapest base?',
        a: 'Because the board arrives white. No ink is needed to make it that colour, so you pay only for the design you actually print.',
      },
      {
        q: 'Will our colours print accurately?',
        a: 'As accurately as this process allows, because inks land on a neutral base. If colour matters, white board is what to ask for.',
      },
      {
        q: 'Can we start plain and print later?',
        a: 'Yes, and plenty of sites do. Plain cups prove the size and lid fit before any artwork spend.',
      },
      {
        q: 'Does board quality matter more on white?',
        a: 'Yes. With no print to distract, a low-grade stock reads as grey, which undermines a deliberately minimal look.',
      },
      {
        q: 'Is a one-colour logo enough?',
        a: 'It is the cheapest branded cup there is, and on a good white board it reads as confident rather than cheap.',
      },
      {
        q: 'Do white cups suit kraft-style branding?',
        a: 'Not really. If the plain unbleached look is the point, kraft is the material rather than white board printed brown.',
      },
      {
        q: 'Can we run white and coloured together?',
        a: 'On digital printing, yes. Send the split so both are priced properly rather than assumed even.',
      },
      {
        q: 'Do you supply plain white cups?',
        a: 'Yes, and plenty of sites start there before committing to artwork. The lid and size decisions are identical.',
      },
    ],
    related: ['coloured-paper-cups', 'logo-paper-cups', 'black-paper-cups', 'printed-paper-cups'],
  },

  {
    slug: 'black-paper-cups',
    name: 'Black Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Black Paper Cups UK | Matt Black Printed Cups',
    seoDescription:
      'Solid black printed paper cups with a matt finish, plus guidance on building a black that stays even across a long run.',
    h1: 'Black Paper Cups',
    cardBlurb: 'Solid black bodies, usually matt, for a strong counter presence.',
    enquiryLabel: 'black paper cups',
    intro: [
      'Black cups look expensive, which is most of the reason to order them. They also expose every inconsistency in the printing, which is the reason to think about how the black is built.',
      'A single-ink black laid thinly reads brown. A properly built one does not.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Building a Black That Stays Black',
        body: [
          'Large flat areas of a single black ink show density variation across a run, and the eye reads that as a warm or patchy cast.',
          'A rich black built from more than one ink, or a spot black, holds far more evenly. It costs a little more and is the difference between a cup that looks premium and one that looks slightly off.',
        ],
        link: {
          href: '/custom-black-cone-sleeve/',
          anchor: 'the same problem on cone sleeves',
          sentence: 'We cover {link} in more detail, and the printing principles are identical.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Living with a Dark Cup',
        items: [
          'Matt finishes hide handling marks; gloss shows every fingerprint.',
          'Milk and foam splashes are highly visible on black.',
          'Reversed-out logos need slight weight added, since ink spread closes fine gaps.',
          'The unprinted rim margin is more noticeable than on pale cups.',
        ],
        outro: 'Almost every black cup we quote ends up matt for the first two reasons.',
      },
    ],
    faqs: [
      {
        q: 'Why does our black cup look slightly brown?',
        a: 'Almost always a single-ink black laid thinly. Building the black from more than one ink, or using a spot black, gives a deeper and more consistent result across the run.',
      },
      {
        q: 'Do black cups cost more than white?',
        a: 'Yes, because the colour is ink across the whole surface, and a properly built black uses more than one ink to do it. The premium look is what the extra pays for.',
      },
      {
        q: 'Why does our black look brown?',
        a: 'A single-ink black laid thinly reads warm. Building it from more than one ink, or using a spot black, gives a deeper and more consistent result.',
      },
      {
        q: 'Matt or gloss on black?',
        a: 'Matt, almost always. Gloss shows every fingerprint, and a dark cup collects them visibly through a service.',
      },
      {
        q: 'Can we reverse a logo out of the black?',
        a: 'Yes, and it looks striking. Fine lines need slight weight added, because ink spread closes small gaps on board.',
      },
      {
        q: 'Will the rim margin show?',
        a: 'More than on a pale cup. Every printed cup leaves a small unprinted margin at the rim, and on solid black it reads as a light line.',
      },
      {
        q: 'Does black show milk splashes?',
        a: 'Clearly, which is the trade against hiding coffee marks. Which matters more depends on your service.',
      },
      {
        q: 'Can we get a matt black with a gloss logo?',
        a: 'Spot finishing effects are quoted per job, because availability depends on the print method. Tell us the effect and we will confirm.',
      },
      {
        q: 'Is black board available instead of printed?',
        a: 'A dyed black board behaves differently and is quoted separately. Tell us if the material itself must be black through the section.',
      },
      {
        q: 'Can we run black alongside a white version?',
        a: 'Yes, and both can run in one job on digital printing. Tell us the split between them.',
      },
    ],
    related: ['coloured-paper-cups', 'white-paper-cups', 'gold-paper-cups', 'custom-black-cone-sleeve'],
  },

  {
    slug: 'brown-paper-cups',
    name: 'Brown Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Brown Paper Cups UK | Kraft Look Printed Cups',
    seoDescription:
      'Brown paper cups in natural kraft or printed brown, and what the difference means for cost, matching and batch consistency.',
    h1: 'Brown Paper Cups',
    cardBlurb: 'Natural kraft or printed brown — two routes to the same look.',
    enquiryLabel: 'brown paper cups',
    intro: [
      'There are two ways to get a brown cup, and they cost very different amounts. One is unbleached kraft board that is naturally brown; the other is a white cup printed brown.',
      'They look similar on a shelf and behave differently in every other respect.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Natural Kraft Against Printed Brown',
        columns: ['Natural kraft', 'Printed brown'],
        rows: [
          ['Cost', 'No ink needed for the colour', 'Full coverage ink'],
          ['Consistency', 'Varies slightly between board batches', 'Consistent, because it is printed'],
          ['Colour matching', 'Cannot be matched to a Pantone', 'Can be matched precisely'],
          ['Print on top', 'Colours shift on the warm base', 'Colours sit on ink, more predictable'],
          ['Feel', 'Slightly textured, uncoated look', 'Smoother'],
        ],
        outro: 'Brands that need a specific brown print it. Brands that want a natural look use kraft and accept the variation.',
      },
      {
        kind: 'prose',
        heading: 'Batch Variation on Natural Board',
        body: [
          'Unbleached board is a natural material, and its shade shifts a little between mill batches. Two orders six months apart can differ visibly if placed side by side.',
          'Most sites never notice. Brands that hold cups next to other packaging in the same brown do, which is when printed brown becomes the safer specification.',
        ],
        link: {
          href: '/kraft-paper-cups/',
          anchor: 'kraft board and how artwork behaves on it',
          sentence: 'If you are leaning towards the natural route, {link} covers the print implications.',
        },
      },
    ],
    faqs: [
      {
        q: 'Which is cheaper, kraft or printed brown?',
        a: 'Kraft, usually by a clear margin, because the colour costs nothing in ink. Printed brown is chosen when consistency or an exact match matters more than the saving.',
      },
      {
        q: 'Will two kraft orders match each other?',
        a: 'Closely, but not exactly — the board shade drifts a little between batches. If your cups sit alongside other packaging in a matched brown, printing the colour removes that risk.',
      },
      {
        q: 'Kraft or printed brown — which is cheaper?',
        a: 'Kraft, usually by a clear margin, because the colour costs nothing in ink. Printed brown buys consistency rather than appearance.',
      },
      {
        q: 'Will two kraft orders match?',
        a: 'Closely, not exactly. Unbleached board shifts between mill batches, which shows if cups sit beside other matched packaging.',
      },
      {
        q: 'When is printed brown worth it?',
        a: 'When the brown has to match an existing Pantone across several items, or when batch variation would be visible on your counter.',
      },
      {
        q: 'Does printed brown print better on top?',
        a: 'Yes, because subsequent colours sit on ink rather than on a warm natural base, which makes them more predictable.',
      },
      {
        q: 'Do both feel the same?',
        a: 'No. Kraft is slightly textured and reads as uncoated; printed brown on white board feels smoother and more manufactured.',
      },
      {
        q: 'Which suits an independent café?',
        a: 'Most choose kraft, because the natural look is the point. Printed brown suits brands that need exact consistency.',
      },
      {
        q: 'Does the colour affect performance?',
        a: 'No. Both need the same lining, and the wall construction determines heat comfort regardless of the outer colour.',
      },
      {
        q: 'Can we compare both before deciding?',
        a: 'Board samples are usually straightforward. Ask at quote stage and we will tell you what can be sent.',
      },
    ],
    related: ['kraft-paper-cups', 'coloured-paper-cups', 'kraft-coffee-cups', 'white-paper-cups'],
  },

  {
    slug: 'pink-paper-cups',
    name: 'Pink Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Pink Paper Cups UK | Printed Pink Drink Cups',
    seoDescription:
      'Printed pink paper cups for dessert brands, events and campaigns, with advice on holding a pale pink evenly across a run.',
    h1: 'Pink Paper Cups',
    cardBlurb: 'Printed pink bodies for dessert brands, events and campaigns.',
    enquiryLabel: 'pink paper cups',
    intro: [
      'Pink is bought by dessert brands, bubble tea shops and campaigns that want to be noticed. It photographs well, which is why it turns up so often on social media.',
      'It is also one of the harder colours to hold evenly, because pale tints show every variation.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Pale Colours Are the Least Forgiving',
        body: [
          'A deep colour hides density variation. A pale pink is a light tint of a stronger ink, and small shifts in how much ink lands read as visible banding or blotchiness.',
          'A spot colour mixed to the shade you want holds far better than a pink built from a light tint of magenta.',
        ],
        link: {
          href: '/coloured-paper-cups/',
          anchor: 'how solid colour printing works on cups',
          sentence: 'The general principles are set out on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where Pink Cups Get Used',
        items: [
          'Dessert bars and bubble tea, where the cup is part of the visual offer.',
          'Charity and awareness campaigns with a fixed brand pink.',
          'Weddings and events, usually as a short run.',
          'Seasonal promotions where the colour signals the campaign.',
        ],
        outro: 'Campaign colours are often specified precisely, which is an argument for a spot colour rather than a process build.',
      },
    ],
    faqs: [
      {
        q: 'Why does our pink look uneven across the cup?',
        a: 'Pale tints show ink density variation that a strong colour would hide. Specifying the pink as a spot colour, mixed to the shade you want, produces a far more even result.',
      },
      {
        q: 'Can you match a specific campaign pink?',
        a: 'With a Pantone reference and a spot colour, closely. Supply the reference rather than an image, since a pink sampled from a screenshot will not carry the information needed.',
      },
      {
        q: 'Why does our pink look uneven?',
        a: 'Pale tints show ink density variation that a strong colour hides. A spot colour mixed to the shade you want prints far more evenly.',
      },
      {
        q: 'Can you match a campaign pink?',
        a: 'With a Pantone reference and a spot ink, closely. Supply the reference rather than an image sampled from a screen.',
      },
      {
        q: 'Do pale colours cost more?',
        a: 'Not inherently, but achieving an even pale tint often argues for a spot ink rather than a process build, which can change the price.',
      },
      {
        q: 'Will pink show marks?',
        a: 'Less than white and more than a dark colour. Coffee marks show; milk splashes are less visible than on black.',
      },
      {
        q: 'Do these suit bubble tea?',
        a: 'They are frequently bought for dessert and bubble tea brands, where the cup is part of the visual offer rather than just a container.',
      },
      {
        q: 'Can we run a short campaign quantity?',
        a: 'Digital printing makes modest runs workable. Send the campaign dates as well as the quantity, since timing affects lead time.',
      },
      {
        q: 'Will the colour photograph accurately?',
        a: 'Screens and print differ, and pale colours diverge more than saturated ones. Photograph a printed sample before committing.',
      },
      {
        q: 'Can we pair pink with a second colour?',
        a: 'Yes, and two spot colours often costs less than full process on a long run while matching more closely.',
      },
    ],
    related: ['coloured-paper-cups', 'red-paper-cups', 'gold-paper-cups', 'printed-paper-cups'],
  },

  {
    slug: 'gold-paper-cups',
    name: 'Gold Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Gold Paper Cups UK | Metallic Printed Cups',
    seoDescription:
      'Gold and metallic-effect paper cups for events and festive ranges, with the difference between ink and foil explained.',
    h1: 'Gold Paper Cups',
    cardBlurb: 'Metallic gold effects for events and festive ranges.',
    enquiryLabel: 'gold paper cups',
    intro: [
      'Gold is not a colour so much as an effect, and there are two very different ways to produce it. One is a metallic ink; the other is a foil or metallised board.',
      'They cost differently and they look different in the hand, so it is worth knowing which you are buying.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Metallic Ink Against Foil',
        columns: ['Metallic ink', 'Foil or metallised board'],
        rows: [
          ['Appearance', 'Muted, slightly grainy gold', 'Bright, genuinely reflective'],
          ['Cost', 'Lower', 'Higher'],
          ['Coverage', 'Can cover the whole cup', 'Usually used for accents'],
          ['Disposal', 'Board remains paper-based', 'Mixed material — check collection'],
          ['Suits', 'Whole-cup gold on a budget', 'Premium accents and festive ranges'],
        ],
        outro: 'Most festive cups use metallic ink for the body and reserve foil for a logo, if at all.',
      },
      {
        kind: 'prose',
        heading: 'Gold Rarely Photographs as It Looks',
        body: [
          'Metallic effects rely on reflecting light, and a camera flattens that. A cup that looks striking on a counter can look beige in a photograph.',
          'If the cup is intended for social media, it is worth seeing a physical sample photographed before committing to a run.',
        ],
        link: {
          href: '/christmas-paper-cups/',
          anchor: 'festive ranges and their lead times',
          sentence: 'Gold is most often ordered as part of {link}, which need early scheduling.',
        },
      },
    ],
    faqs: [
      {
        q: 'Will a gold cup look genuinely metallic?',
        a: 'A foil or metallised board will; a metallic ink reads as a muted, slightly grainy gold. Which is right depends on your budget and how close customers get to the cup.',
      },
      {
        q: 'Does a gold cup affect recycling?',
        a: 'A metallic ink leaves the board paper-based. A foil or metallised layer makes the material mixed, which changes the disposal route and should be checked before any on-pack claim.',
      },
      {
        q: 'Does gold photograph well?',
        a: 'Less well than it looks in the hand. Metallic effects rely on reflecting light, and a camera flattens that considerably.',
      },
      {
        q: 'Can we use gold for a logo only?',
        a: 'That is the more common approach, and often the more effective one. Foil on a logo against a plain body reads as deliberate rather than gaudy.',
      },
      {
        q: 'Is gold more expensive than a solid colour?',
        a: 'Metallic ink is modestly more; foil is considerably more. Ask for both prices, because the visual difference is large.',
      },
      {
        q: 'Do gold cups suit festive ranges?',
        a: 'They are mostly bought for them, alongside events and premium promotions where the cup is part of the offer.',
      },
      {
        q: 'Can we combine gold with another colour?',
        a: 'Yes, and gold with a dark base is the usual pairing, because metallic effects read most clearly against something matt and deep.',
      },
      {
        q: 'Should we see a sample first?',
        a: 'With metallics, more than with any other finish. Judging gold from a screen is genuinely misleading, so ask what sample is available.',
      },
      {
        q: 'Can we use gold on kraft board?',
        a: 'Metallic effects need a smooth surface to reflect properly, so they perform far better on coated white board than on kraft.',
      },
      {
        q: 'Is gold suitable for everyday use?',
        a: 'It costs more than a standard colour, so most sites use it for a festive or premium line alongside a standard cup.',
      },
    ],
    related: ['black-paper-cups', 'christmas-paper-cups', 'coloured-paper-cups', 'aluminium-foil-cone-sleeves'],
  },

  {
    slug: 'red-paper-cups',
    name: 'Red Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Red Paper Cups UK | Printed Red Drink Cups',
    seoDescription:
      'Printed red paper cups for events, sports venues and festive ranges, with notes on why reds drift between process runs.',
    h1: 'Red Paper Cups',
    cardBlurb: 'Bold red bodies for events, venues and festive service.',
    enquiryLabel: 'red paper cups',
    intro: [
      'Red is the most visible colour at a distance, which is why it dominates event and stadium service. A red cup is identifiable across a crowded room.',
      'It is also a colour that shifts noticeably when built from process inks rather than printed as a spot.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Reds Drift More than Most Colours',
        body: [
          'A red built from CMYK sits close to the edge of what those four inks can produce, so small variations push it towards orange or towards pink.',
          'Across a long run that drift becomes visible when cups from the start and end of the job are held together. A spot red avoids it.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Where Red Cups Are Used',
        items: [
          'Sports venues and stadium concourses, where visibility matters.',
          'Festivals and outdoor events with a strong brand colour.',
          'Festive ranges, alongside green and gold.',
          'Fast service brands using red as a primary identity colour.',
        ],
        outro: 'For anything where the red is the brand, specify it as a spot colour rather than a process build.',
        link: {
          href: '/green-paper-cups/',
          anchor: 'green cups often ordered alongside',
          sentence: 'Festive ranges frequently pair these with {link}.',
        },
      },
    ],
    faqs: [
      {
        q: 'Why does our red look different between orders?',
        a: 'A red built from process inks sits near the limit of what they can reproduce, so it drifts. Specifying a spot red mixed to a Pantone reference holds consistently between runs.',
      },
      {
        q: 'Does red show marks less than white?',
        a: 'It hides coffee and tea marks well. It shows milk and foam splashes clearly, so it depends which is more likely in your service.',
      },
      {
        q: 'Why does our red drift between orders?',
        a: 'A red built from process inks sits near the limit of what they reproduce, so small variations push it towards orange or pink.',
      },
      {
        q: 'How do we keep red consistent?',
        a: 'Specify it as a spot colour mixed to a Pantone reference. It holds far better across a run and between reorders.',
      },
      {
        q: 'Does red hide marks?',
        a: 'Coffee and tea marks, yes. Milk and foam splashes show clearly, so it depends which is likelier in your service.',
      },
      {
        q: 'Do these suit stadium service?',
        a: 'They do, and visibility at a distance is one of the reasons venues use red. It is identifiable across a crowded concourse.',
      },
      {
        q: 'Can we use red for a festive range?',
        a: 'Frequently, alongside green and gold. Festive work concentrates into a few weeks, so order earlier than feels necessary.',
      },
      {
        q: 'Will red print differently on kraft?',
        a: 'Yes, reading as a deeper rust over the warm base. If the red must be exact, that means white board or an underbase.',
      },
      {
        q: 'Is a spot red more expensive?',
        a: 'Per ink, sometimes. On a long run it is often cheaper than a four-ink process build, and it matches better. Ask for both prices.',
      },
      {
        q: 'Can we run red alongside another colour?',
        a: 'On digital printing, yes. Send the split between colours so the quantities are priced rather than assumed even.',
      },
    ],
    related: ['coloured-paper-cups', 'green-paper-cups', 'christmas-paper-cups', 'pink-paper-cups'],
  },

  {
    slug: 'green-paper-cups',
    name: 'Green Paper Cups',
    category: 'paper-cups',
    subcategory: 'coloured',
    seoTitle: 'Green Paper Cups UK | Printed Green Drink Cups',
    seoDescription:
      'Printed green paper cups for cafés and festive ranges, with a caution about implying recyclability through colour alone.',
    h1: 'Green Paper Cups',
    cardBlurb: 'Green bodies for cafés and festive ranges.',
    enquiryLabel: 'green paper cups',
    intro: [
      'Green cups are ordered for two quite different reasons: because green is the brand colour, or because green suggests something about the environment.',
      'The second reason deserves care, because a colour is not a claim and customers may read it as one.',
    ],
    sections: [
      {
        kind: 'callout',
        heading: 'Colour Is Not an Environmental Claim',
        body: 'A green cup with a leaf motif implies something about disposal that the material may not support. If the cup is conventionally lined, that impression is misleading even without a word of text. Where the colour is a brand choice, that is straightforward; where it is meant to signal recyclability, the specification has to back it up.',
      },
      {
        kind: 'prose',
        heading: 'Greens Print Reliably',
        body: [
          'Unlike red and pale pink, mid greens sit comfortably within what process inks reproduce, so they hold well across a run without needing a spot colour.',
          'Very deep or very bright greens are the exceptions and benefit from a spot ink in the same way.',
        ],
        link: {
          href: '/recyclable-paper-cups/',
          anchor: 'what actually determines whether a cup is recycled',
          sentence: 'If the green is meant to signal recyclability, {link} sets out what has to be true first.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Common Uses',
        items: [
          'Cafés and juice bars with green in their identity.',
          'Festive ranges, paired with red and gold.',
          'Health and wellbeing brands.',
          'Venues and organisations with a green corporate palette.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does a green cup suggest it is recyclable?',
        a: 'To many customers, yes, whether or not that is intended. If the cup is conventionally lined, it is worth making sure nothing else on the design reinforces that impression.',
      },
      {
        q: 'Do greens need a spot colour?',
        a: 'Mid greens generally reproduce well from process inks. Very deep or very vivid greens benefit from a spot ink, as does any green that has to match an existing brand exactly.',
      },
      {
        q: 'Can we use green without implying an eco claim?',
        a: 'Yes, if nothing else on the design reinforces it. Leaf motifs and earthy typography are what turn a colour into an implied claim.',
      },
      {
        q: 'Will green print on kraft?',
        a: 'It shifts noticeably towards the board\'s warmth. Greens are among the colours most affected by an unbleached base.',
      },
      {
        q: 'Do these suit a juice bar?',
        a: 'Frequently. Health and wellbeing brands are among the main buyers alongside festive ranges, because green reads as fresh and plant-led without a word of copy having to say so.',
      },
      {
        q: 'Does green hide marks?',
        a: 'Mid and dark greens hide coffee marks well. Pale greens behave more like white and show them.',
      },
      {
        q: 'Can we pair green with red for Christmas?',
        a: 'Yes, and running both in one job shares the setup. Send the split between them.',
      },
      {
        q: 'What should we send for an exact match?',
        a: 'A Pantone reference and our die template. A hex code or a screenshot cannot carry the information a spot ink needs.',
      },
      {
        q: 'Can we use green without a leaf motif?',
        a: 'Yes, and doing so is what separates a brand colour from an implied environmental claim. The motif carries more meaning than the colour.',
      },
      {
        q: 'Do green cups suit a festive range?',
        a: 'They do, paired with red and gold. Festive work concentrates into a few weeks, so order earlier than feels necessary.',
      },
    ],
    related: ['red-paper-cups', 'coloured-paper-cups', 'eco-friendly-paper-cups', 'recyclable-paper-cups'],
  },
];
