import type { Category } from './types';

/**
 * Category pages carry buyer guidance, not just a grid. Each one opens with a
 * short quote form, then a body written around the decisions that actually
 * separate one order from another in that range: board weight for trays,
 * grease resistance for papers, wall construction for cups, wrap geometry for
 * cone sleeves.
 */

export const CATEGORIES: Category[] = [
  {
    slug: 'cone-sleeves',
    name: 'Cone Sleeves',
    // The flagship range is rendered on the homepage. Publishing it at
    // /cone-sleeves/ as well would put two pages of ours against each other
    // for "custom cone sleeves UK", which the homepage should own outright.
    mergedIntoHome: true,
    heroProduct: 'custom-waffle-cone-sleeves',
    featured: [
      'custom-ice-cream-cone-sleeves',
      'custom-waffle-cone-sleeves',
      'custom-sugar-cone-sleeves',
      'custom-cake-cone-sleeves',
      'custom-chicken-cone-sleeves',
      'custom-eco-friendly-cone-sleeves',
    ],
    sourceNames: ['Cone Sleeves By Industry'],
    seoTitle: 'Custom Cone Sleeves UK | Printed Ice Cream Cone Sleeves',
    seoDescription:
      'Printed cone sleeves for UK ice cream shops, gelaterias and dessert bars. Waffle, sugar and cake cone wraps in your own artwork.',
    h1: 'Custom Printed Cone Sleeves',
    cardBlurb:
      'Wrapped cone holders for waffle, sugar and cake cones, printed in your own colours.',
    intro: [
      'A cone sleeve is the piece of packaging a customer holds for the whole time they are eating. It keeps warm hands away from the wafer, catches the first drips, and puts your name in front of every person who walks past the queue.',
      'The range below covers the cone shapes sold across the UK dessert trade: standard waffle, sugar, cake and rolled cones, plus savoury cones used for chips and fried chicken. Sizing is set from the cone you already buy, so the wrap sits where you want it rather than sliding down.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Start from the Cone, Not the Artwork',
        body: [
          'Every sleeve on this page is cut to a flat shape that rolls into a cone angle. Two numbers decide that shape: the diameter across the open top of your cone, and the slant height from the rim down to the point where you want the wrap to stop.',
          'Send us a sample cone or the measurements and we set the die from those. Artwork comes afterwards, laid onto a shape that is already correct. Doing it the other way round is how designs end up cropped at the seam.',
        ],
        link: {
          href: '/blog/how-to-choose-the-right-cone-sleeve-size/',
          anchor: 'measuring a cone sleeve correctly',
          sentence:
            'Our guide to {link} walks through both measurements with a tape measure and a spare cone.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Which Sleeve Suits Which Counter',
        intro:
          'The shape of your product narrows the choice faster than any other factor:',
        items: [
          'Scooped ice cream in a waffle cone — a full-height wrap that covers the wafer and leaves the scoop clear.',
          'Soft serve in a cake cone — a shorter, narrower sleeve, because cake cones taper more sharply.',
          'Rolled ice cream and gelato in a sugar cone — a stiffer board that holds shape when the cone is heavier.',
          'Chips, popcorn chicken or churros in a savoury cone — grease-resistant board, usually with a deeper wrap.',
          'Event and seasonal runs — the same die as your standard sleeve with a different print, so nothing needs re-tooling.',
        ],
        outro:
          'If you sell more than one cone size, most sites settle on two dies rather than one compromise size that fits neither.',
      },
      {
        kind: 'specs',
        heading: 'Common Specification Across the Cone Sleeve Range',
        intro:
          'These are the options quoted most often. Anything outside them is still worth asking about.',
        rows: [
          ['Board', 'Coated white board, uncoated kraft, or greaseproof-lined board'],
          ['Print', 'Litho or digital CMYK, plus spot colours where the brand needs an exact match'],
          ['Printed sides', 'Outside only, or outside and inside where the inner face is visible'],
          ['Finish', 'Matt or gloss lamination, or unlaminated for a paper feel'],
          ['Shaping', 'Die-cut flat and shipped flat; assembled on the counter'],
          ['Sizing', 'Cut to your cone, from a sample or from measurements'],
          ['Food contact', 'Food-grade board and inks specified for direct contact — confirmed per order'],
        ],
        note:
          'Minimum order quantities, lead times and pricing depend on board, print method and run length. We confirm all three in writing on your quote.',
      },
      {
        kind: 'prose',
        heading: 'Print That Survives a Warm Hand',
        body: [
          'Cone sleeves get gripped, twisted and occasionally dropped in a puddle of melted ice cream. Ink sitting on an unprotected surface will scuff along the seam within minutes of handling.',
          'Matt lamination is the usual answer on dark or heavily inked designs, because it hides handling marks and keeps a deep colour looking even. Lighter designs on kraft often read better with no lamination at all.',
        ],
        link: {
          href: '/blog/matte-and-gloss-finishes-for-cone-sleeves/',
          anchor: 'how matt and gloss lamination behave in service',
          sentence:
            'We compared {link} using the same artwork on both, if you want to see the difference before deciding.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can you match a cone sleeve to a cone I already buy from another supplier?',
        a: 'Yes, and that is the usual starting point. Post us two or three of the cones you use, or measure the top diameter and the slant height and send those figures with your enquiry. The die is cut to that shape.',
      },
      {
        q: 'Do cone sleeves arrive assembled?',
        a: 'They arrive flat and die-cut. Staff roll and tuck each one at the counter, which takes a couple of seconds once they have done a few. Shipping flat keeps the carriage cost down and protects the printed face.',
      },
      {
        q: 'Is there a way to test a design before committing to a full run?',
        a: 'Ask for a printed sample at quote stage. We will confirm what is available for your specification and what it costs, since sample options vary with the print method chosen for your job.',
      },
      {
        q: 'Can one sleeve design work across waffle and cake cones?',
        a: 'Rarely. Cake cones taper more sharply, so a sleeve cut for a waffle cone sits loose and slides. Sites selling both usually run two dies with the same artwork scaled to each.',
      },
    ],
  },

  {
    slug: 'food-sleeves',
    name: 'Food Sleeves',
    heroProduct: 'burger-sleeves',
    featured: [
      'burger-sleeves',
      'custom-hot-dog-sleeves',
      'custom-sandwich-sleeves',
      'custom-wrap-sleeves',
      'custom-pastry-sleeves',
      'custom-donut-sleeves',
    ],
    sourceNames: ['Custom Food Sleeves'],
    seoTitle: 'Custom Food Sleeves UK | Printed Sleeves & Wraps',
    seoDescription:
      'Printed food sleeves for burgers, hot dogs, wraps, pastries and desserts. Grease-resistant board cut to your product size.',
    h1: 'Custom Food Sleeves for UK Kitchens',
    cardBlurb:
      'Board sleeves and wraps for burgers, hot dogs, pastries, wraps and desserts.',
    intro: [
      'A food sleeve does two jobs at once: it holds a messy item together and it gives a customer somewhere clean to put their hands. Get the width wrong and it does neither — too tight and the filling squeezes out, too loose and it slides off on the walk home.',
      'This range covers the items UK operators wrap most: burgers, hot dogs, loaded fries, breakfast wraps, pastries and single portions of cake. Each one is cut to the product rather than pulled from a stock size list.',
    ],
    sections: [
      {
        kind: 'uses',
        heading: 'Where Sleeves Earn Their Place on the Pass',
        intro:
          'Sleeves suit food that is handed over hot and eaten immediately. The detail that changes is grease.',
        items: [
          {
            title: 'Burgers and Buns',
            body: 'A sleeve holds the stack together and stops the bun crown separating on the first bite. Grease resistance matters more here than anywhere else in the range.',
          },
          {
            title: 'Hot Dogs, Corn Dogs and Skewers',
            body: 'A long, narrow wrap with a closed base catches sauce. The base is the part people forget to specify, and the part that fails first.',
          },
          {
            title: 'Wraps, Burritos and Shawarma',
            body: 'A tapered sleeve keeps the roll compressed so the filling stays inside as the customer eats down the length of it.',
          },
          {
            title: 'Pastries, Doughnuts and Cake Slices',
            body: 'Dry goods need presentation more than protection, so uncoated board and a lighter weight usually read better than a laminated finish.',
          },
        ],
        link: {
          href: '/burger-sleeves/',
          anchor: 'printed burger sleeves',
          sentence:
            'Burgers are the most common order in this range, and {link} have their own page with sizing detail.',
        },
      },
      {
        kind: 'prose',
        heading: 'Grease Resistance Is a Specification, Not a Material',
        body: [
          'Plain board absorbs fat. Within ten minutes a burger sleeve on untreated stock goes translucent along the base and the print starts to look tired.',
          'The usual fixes are a greaseproof liner bonded to the board, a coated inner face, or a heavier board that simply has more to soak. Which one suits depends on how long your food sits before it is eaten — a delivery order needs more protection than a counter sale.',
        ],
        link: {
          href: '/blog/food-safe-considerations-for-cone-sleeve-packaging/',
          anchor: 'food-contact materials and UK requirements',
          sentence:
            'We cover {link} in more depth for operators writing their own specification.',
        },
      },
      {
        kind: 'steps',
        heading: 'Getting a Sleeve Sized Without Guesswork',
        intro: 'Four steps take most of the risk out of a first order.',
        steps: [
          {
            title: 'Measure the Made Product, Not the Ingredient',
            body: 'A 4in bun becomes a 5in burger once it is built. Measure the item as it leaves your pass, at its widest point.',
          },
          {
            title: 'Decide How Much You Want Covered',
            body: 'A half-height sleeve shows the food and photographs well. A full-height wrap protects better and travels further.',
          },
          {
            title: 'Send the Numbers with a Photograph',
            body: 'A picture of the finished item beside a ruler answers more questions than a written description.',
          },
          {
            title: 'Check the Flat Sample Before Print',
            body: 'Wrap the unprinted flat around a real portion. Anything that needs adjusting is cheap to change at this point.',
          },
        ],
      },
      {
        kind: 'callout',
        heading: 'Delivery Orders Behave Differently',
        body: 'Food that sits in a courier bag for twenty minutes steams. A sleeve that performs on the counter can go soft in transit, so tell us at quote stage what proportion of your orders are delivered — it changes the board recommendation.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a food sleeve and a food tray?',
        a: 'A sleeve wraps around the sides of an item and leaves the top and bottom open. A tray sits underneath and holds loose pieces. Anything that stays in one piece — a burger, a wrap, a pastry — suits a sleeve; anything that falls apart, like chips or nachos, needs a tray.',
      },
      {
        q: 'Can a sleeve be printed on the inside face?',
        a: 'Yes. On a half-height sleeve the inner face is barely seen, but on a deep wrap it shows every time the customer looks down at their food. Inside printing adds a pass on press, so it is worth deciding early rather than after quoting.',
      },
      {
        q: 'Will one sleeve size cover a single and a double burger?',
        a: 'Only if the sleeve is generous enough for the double, which then looks slack on the single. Sites selling both usually run two depths from the same artwork.',
      },
    ],
  },

  {
    slug: 'food-trays',
    name: 'Food Trays',
    heroProduct: 'custom-burger-trays',
    featured: [
      'custom-burger-trays',
      'custom-fries-trays',
      'custom-nacho-trays',
      'custom-combo-meal-trays',
      'ice-cream-cone-holder',
      'custom-bakery-trays',
    ],
    sourceNames: ['Custom Food Trays'],
    seoTitle: 'Custom Printed Food Trays UK | Board Serving Trays',
    seoDescription:
      'Printed food trays for chips, nachos, bakery and combo meals. Board weights chosen for the load your kitchen actually serves.',
    h1: 'Custom Food Trays for Counters and Events',
    cardBlurb:
      'Open board trays for chips, nachos, bakery items, combo meals and cone holders.',
    intro: [
      'Trays fail in a predictable way. The board flexes under a hot, wet load, the corners lose their shape, and the customer ends up carrying the tray with two hands and a worried expression.',
      'Choosing well is mostly a question of board weight against load. The pages in this range set out what each tray shape carries, so the specification matches the food rather than the price list.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Matching Board Weight to What the Tray Carries',
        intro:
          'The two ends of the range behave very differently once food is on them.',
        columns: ['Lighter board', 'Heavier board'],
        rows: [
          ['Suits', 'Dry, light portions — pastries, doughnuts, popcorn', 'Hot, wet or heavy loads — loaded fries, nachos, full meals'],
          ['Behaviour when hot', 'Softens quickly under steam', 'Holds its corners through a full service'],
          ['Carrying', 'Fine on a table, flexes in one hand', 'Stays flat carried one-handed'],
          ['Print', 'Takes fine detail cleanly on a smooth face', 'Same print quality; the surface is simply thicker'],
          ['Stacking', 'Nests tightly, less storage space', 'Takes more storage room per thousand'],
        ],
        outro:
          'If you are unsure, specify for the heaviest item on your menu. A tray that is over-specified is an annoyance; one that is under-specified is a complaint.',
      },
      {
        kind: 'bullets',
        heading: 'Tray Shapes in This Range',
        items: [
          'Open rectangular trays for chips, wings and loaded portions.',
          'Deep-walled trays for nachos and anything with sauce that moves.',
          'Compartment and combo trays that separate a main from a side.',
          'Shallow bakery and dessert trays for presentation over protection.',
          'Cone holders and cone trays that stand a filled cone upright while a customer pays or carries a second item.',
        ],
        link: {
          href: '/ice-cream-cone-holder/',
          anchor: 'cone holders that stand a filled cone upright',
          sentence:
            'Sites that sell two cones to one customer usually add {link} at the till.',
        },
      },
      {
        kind: 'prose',
        heading: 'Printing on a Tray That Will Be Seen from Above',
        body: [
          'A tray is looked down into, not across. Artwork placed on the walls disappears once food is loaded, so the base and the rim do the visible work.',
          'Keep logos off the centre of the base where the food sits, and let them run along the rim or in the corners. On a lighter board, printing the underside is worth considering — that is the face people see when a tray is carried at chest height.',
        ],
      },
      {
        kind: 'specs',
        heading: 'What We Need to Quote a Tray',
        rows: [
          ['Internal dimensions', 'Length, width and wall depth, or the portion size in grams'],
          ['Load', 'What goes on it, and whether it is served hot or wet'],
          ['Board preference', 'Coated white, kraft, or greaseproof-lined'],
          ['Finish', 'Unlaminated, matt or gloss'],
          ['Volume', 'Annual usage as well as the first order quantity'],
          ['Assembly', 'Flat-packed for assembly on site, or pre-formed'],
        ],
        note:
          'Board grammage options, lead times and minimum quantities are confirmed on the written quote for your specification.',
      },
    ],
    faqs: [
      {
        q: 'Do trays arrive ready to use or flat?',
        a: 'Both are possible and the difference matters. Flat-packed trays store in a fraction of the space but need a few seconds each to form. Pre-formed trays are ready instantly and take considerably more storage. Busy sites with limited back-of-house space usually take flat.',
      },
      {
        q: 'Can a tray hold sauce without leaking?',
        a: 'A greaseproof-lined board handles oil and light sauce for the length of a normal service. Standing liquid is different — nothing in an open board tray is designed to hold it, and a pot is the honest answer for anything genuinely runny.',
      },
      {
        q: 'Are compartment trays worth the extra cost?',
        a: 'They are when a side would otherwise make the main soggy, or when you want a meal deal to look like a set rather than two loose items. For a single portion they add cost without adding much.',
      },
    ],
  },

  {
    slug: 'food-boxes',
    name: 'Food Boxes',
    heroProduct: 'french-fry-boxes',
    featured: [
      'french-fry-boxes',
      'cone-fries-packaging',
      'fried-chicken-packaging',
      'french-fries-holder-paper',
    ],
    sourceNames: ['Custom Food Boxes'],
    seoTitle: 'Custom Chip & Fry Boxes UK | Printed Food Boxes',
    seoDescription:
      'Printed chip boxes, fry scoops and chicken boxes for UK takeaways, in grease-resistant board printed with your own artwork.',
    h1: 'Printed Chip Boxes and Fried Food Packaging',
    cardBlurb:
      'Scoops, cartons and boxes for chips, fried chicken and cone-served portions.',
    intro: [
      'Fried food is the hardest thing a paper package has to hold. It arrives hot, it arrives oily, and it sits steaming inside whatever it is put into.',
      'This short range covers the box formats UK takeaways and street-food traders use for chips and fried chicken, including the cone format that suits a walking customer better than a flat box does.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Steam Is the Problem, Not Grease',
        body: [
          'Most operators worry about oil soaking through. In practice the bigger issue is steam: hot chips in a closed container go soft within minutes, and no board specification fixes that.',
          'Open formats — scoops, cones and open-topped cartons — let steam escape and keep the food crisp. Closed boxes suit delivery, where spillage matters more than texture, and usually need venting to work at all.',
        ],
        link: {
          href: '/cone-fries-packaging/',
          anchor: 'cone-shaped chip packaging for walking customers',
          sentence:
            'Street-food traders often move to {link} for exactly this reason.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Choosing Between the Formats',
        items: [
          'Scoop boxes — open front, quick to fill from a fryer basket, easy to eat from standing up.',
          'Cartons — four closed walls, better for a seated table service and for stacking on a tray.',
          'Cones — hold a tall portion in a small footprint and free up a customer\'s other hand.',
          'Chicken boxes — deeper walls and a heavier board to carry bone-in pieces without flexing.',
        ],
        outro:
          'Portion weight decides size more reliably than a stated volume, so weigh a typical serving before ordering.',
      },
      {
        kind: 'callout',
        heading: 'Confirm Grease Resistance for Your Own Menu',
        body: 'Fryer temperature, oil type and holding time all change how a board performs. We specify a grease-resistant board suited to the food you describe, and confirm the exact grade on your quote rather than quoting a general claim here.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Which is better for chips, a scoop or a cone?',
        a: 'A scoop if the customer sits down, a cone if they walk. Cones hold the same weight in a smaller footprint and leave a hand free, which is why they suit festivals and markets. Scoops fill faster during a rush.',
      },
      {
        q: 'Can these boxes go in a delivery bag?',
        a: 'Open formats travel poorly — chips migrate and the box tips. If a meaningful share of your orders are delivered, a carton with a closing lid is the safer specification, ideally vented so the contents do not steam.',
      },
    ],
  },

  {
    slug: 'beverage-sleeves',
    name: 'Beverage Sleeves',
    heroProduct: 'custom-printed-coffee-sleeves',
    featured: [
      'custom-printed-coffee-sleeves',
      'custom-cold-drink-sleeves',
      'custom-iced-coffee-sleeves',
      'custom-cardboard-beverage-sleeves',
      'eco-friendly-beverage-sleeves',
    ],
    sourceNames: ['Custom Beverage Sleeves'],
    seoTitle: 'Custom Coffee Cup Sleeves UK | Printed Cup Sleeves',
    seoDescription:
      'Printed coffee cup sleeves and cold drink sleeves for UK cafés. Corrugated and flat board, sized to the cups you already use.',
    h1: 'Printed Cup Sleeves for Hot and Cold Drinks',
    cardBlurb:
      'Insulating sleeves for takeaway coffee, tea and iced drinks, printed to your brand.',
    intro: [
      'A cup sleeve is the cheapest branded surface in a café. It costs a fraction of a printed cup, it fits cups you already have in the store cupboard, and it can change with a season without writing off a pallet of stock.',
      'The sleeves here cover hot drinks, iced drinks and tea, in both corrugated and flat board. Sizing works from the cup you already buy.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Corrugated Against Flat Board',
        intro:
          'The two constructions feel different in the hand and cost differently.',
        columns: ['Corrugated (fluted)', 'Flat board'],
        rows: [
          ['Insulation', 'Air channels in the flute do the insulating; handles very hot drinks', 'Modest — adds grip more than protection'],
          ['Print surface', 'Slight texture; large solid colours and simple logos read well', 'Smooth; holds fine detail and small type cleanly'],
          ['Cold drinks', 'Absorbs condensation well', 'Can soften if a cup sweats heavily'],
          ['Storage', 'Bulkier per thousand', 'Very compact'],
          ['Typical use', 'Hot coffee, especially double-shot sizes', 'Iced drinks, tea, and cups already double-walled'],
        ],
      },
      {
        kind: 'prose',
        heading: 'Sizing to Cups You Already Own',
        body: [
          'A sleeve is sized by the circumference of the cup at the point where a hand naturally grips it, not by the cup\'s stated volume. Two 12oz cups from different suppliers can differ by several millimetres, which is enough for a sleeve to spin.',
          'Send us the cup, or the brand and size code printed on the base, and the sleeve is cut to that. If you run 8oz and 12oz, most cafés order one sleeve that grips both and one for the 16oz.',
        ],
        link: {
          href: '/blog/printed-coffee-cup-sleeves-guide/',
          anchor: 'measuring a cup for a sleeve that grips properly',
          sentence:
            'Our note on {link} covers the tape-measure method in a paragraph.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Ways Cafés Use the Printed Area',
        items: [
          'A wordmark and a single social handle, repeated so it reads from any angle.',
          'Seasonal artwork on the same die, changed three or four times a year.',
          'A loyalty message or QR code positioned where a right-handed grip does not cover it.',
          'Kraft board left unprinted except for a one-colour logo, which suits independents wanting a plain look.',
        ],
        outro:
          'Whatever the design, keep the critical elements away from the glued seam — it sits at a different place on every cup.',
      },
    ],
    faqs: [
      {
        q: 'Will a sleeve fit a double-walled cup?',
        a: 'Usually yes, but a double-walled cup is already thicker, so a sleeve cut for a single-wall cup of the same stated size will be tight. Tell us which you use and we size accordingly.',
      },
      {
        q: 'Do sleeves work on iced drinks?',
        a: 'They do, and they solve a real problem — a cold cup sweats and gets slippery. Flat board handles this well. Where condensation is heavy, a laminated outer face stops the print softening.',
      },
      {
        q: 'Can we print different designs across one order?',
        a: 'Splitting an order across several designs is possible on digital print, and the economics depend on the split. Send the number of designs and the quantity of each with your enquiry and we will price it properly rather than guessing.',
      },
    ],
  },

  {
    slug: 'paper-cups',
    name: 'Paper Cups',
    heroProduct: 'custom-paper-coffee-cups',
    sourceNames: ['Custom Paper Cups'],
    seoTitle: 'Custom Printed Paper Cups UK | Branded Coffee Cups',
    seoDescription:
      'Branded paper cups from 2oz to 32oz for UK cafés, events and takeaways. Single and double wall, kraft, white and coloured.',
    h1: 'Custom Printed Paper Cups',
    cardBlurb:
      'Printed cups from 2oz espresso to 32oz cold, in kraft, white and coloured board.',
    intro: [
      'Paper cups are bought on three decisions: how big, how hot, and how the outside should look. Everything else follows from those.',
      'This range runs from 2oz espresso cups through to 32oz cold cups, in single and double wall, with material and colour options grouped so you can start from whichever decision you have already made.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Where to Start If You Are Ordering Cups for the First Time',
        body: [
          'Start with volume. A cup\'s stated size is its brim-full capacity, and nobody serves a drink to the brim — a 12oz cup holds roughly 10 to 11oz of usable drink once headspace is allowed. Order to the drink you pour, not to the number on the box.',
          'Then decide on wall construction. Single wall needs a sleeve for anything genuinely hot; double wall does not, and usually works out cheaper than a single wall plus a sleeve once you count both.',
        ],
        link: {
          href: '/paper-cups/sizes/',
          anchor: 'the full size range from 2oz to 32oz',
          sentence:
            'If you already know the volume you pour, {link} is the quickest way in.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Four Ways into the Range',
        intro: 'The subcategories below each answer a different starting question:',
        items: [
          'By size — you know the volume and need the right cup for it.',
          'By material — kraft, wax-lined, parchment or a recyclable-lined board.',
          'By colour — a solid colour body, printed or dyed, rather than white.',
          'By use — coffee, cold drinks, food portions, sauces or ice cream.',
        ],
      },
      {
        kind: 'callout',
        heading: 'Recyclability Claims Need Checking Against Your Waste Contract',
        body: 'Lined paper cups need specialist collection in most of the UK, and whether yours are recycled in practice depends on your local arrangement rather than on the cup alone. We will tell you what lining a quoted cup uses so you can check it against your own waste provider before making a claim on the print.',
        pending: true,
      },
      {
        kind: 'specs',
        heading: 'Specification Points That Change the Price',
        rows: [
          ['Wall', 'Single, double or ripple'],
          ['Lining', 'PE, PLA or a water-based dispersion coating'],
          ['Print', 'Flexo for long runs, digital for shorter runs and multiple designs'],
          ['Colours', 'Up to full CMYK plus spot colours; kraft shifts colour, so proofs matter'],
          ['Lids', 'Sourced to match the rim diameter, not the stated cup volume'],
          ['Run length', 'Cup tooling favours volume; short runs are quoted differently'],
        ],
        note:
          'Lead times, minimum quantities and unit pricing vary considerably across these options and are confirmed in writing per enquiry.',
      },
    ],
    faqs: [
      {
        q: 'Does a 12oz cup hold 12oz of coffee?',
        a: 'Not in service. The stated figure is brim-full capacity. Allowing headspace for a lid and for carrying, a 12oz cup delivers around 10 to 11oz of drink. If you sell by a stated volume, check against the cup rather than the label.',
      },
      {
        q: 'Do I need double wall or is a sleeve enough?',
        a: 'For espresso-based drinks up to 8oz a single wall with a sleeve is usually fine. Above that, and for anything held for a long walk, double wall is more comfortable and removes a second item from your stock list.',
      },
      {
        q: 'Will my brand colour print accurately on kraft board?',
        a: 'It will shift. Kraft is brown, so inks printed on it sit over a warm base and read darker and duller than on white. Brands with a critical colour usually print a white base first, or accept the shift and pick artwork that works with it.',
      },
      {
        q: 'Can you supply matching lids?',
        a: 'Lids are matched to the rim diameter of the cup, which is not the same across suppliers even at the same stated volume. Tell us at quote stage that you need lids and we will confirm the matching size.',
      },
    ],
  },

  {
    slug: 'printed-papers-bags',
    name: 'Printed Papers & Bags',
    heroProduct: 'custom-greaseproof-paper',
    featured: [
      'custom-greaseproof-paper',
      'custom-fish-chips-paper',
      'custom-take-out-bags',
      'custom-pastry-bags',
    ],
    sourceNames: ['Custom Printed Papers'],
    seoTitle: 'Printed Greaseproof Paper & Food Bags UK',
    seoDescription:
      'Custom printed greaseproof paper, deli sheets, basket liners and paper food bags for UK cafés, delis, bakeries and takeaways.',
    h1: 'Printed Food Papers and Paper Bags',
    cardBlurb:
      'Greaseproof sheets, deli papers, basket liners and printed paper bags.',
    intro: [
      'Paper is the cheapest way to put a brand in a customer\'s hands. A printed sheet under a burger or a stamped bag around a pastry costs pennies and appears in every photograph taken of the food.',
      'The two groups below split by how the paper is used: flat sheets and liners that go under or around food, and formed bags that carry it out of the door.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Greaseproof, Parchment and Waxed Are Not the Same Thing',
        body: [
          'Greaseproof paper resists oil because the fibres are beaten until the sheet is dense. It handles a burger or a bacon roll well and takes print cleanly.',
          'Parchment is treated differently and tolerates oven heat, which matters if the paper goes into a hot cabinet. Waxed paper carries a coating that repels moisture but softens under heat, so it suits cold and ambient food rather than anything straight from a fryer.',
        ],
        link: {
          href: '/custom-greaseproof-paper/',
          anchor: 'printed greaseproof sheets for burgers and hot food',
          sentence:
            'Most UK takeaway enquiries in this range end up on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Where Each Paper Format Is Used',
        items: [
          'Sheets — laid under a burger, wrapped around a hot sandwich, or used to line a tray.',
          'Basket liners — cut to fit a serving basket so it can be wiped rather than washed.',
          'Deli and counter papers — used to pick up and wrap cold goods at a service counter.',
          'Bags — flat or block-bottomed, for pastries, chips, bread and takeaway orders.',
          'Placemats — printed sheets for table service that double as a menu surface.',
        ],
      },
      {
        kind: 'steps',
        heading: 'How a Printed Paper Order Comes Together',
        steps: [
          {
            title: 'Pick the Paper by Contact',
            body: 'Hot and oily narrows you to greaseproof or parchment. Cold and dry opens the choice to lighter, cheaper stock.',
          },
          {
            title: 'Set the Sheet Size from the Item',
            body: 'A sheet needs enough overlap to fold and tuck. Measure the item and add the fold, rather than ordering a common size and hoping.',
          },
          {
            title: 'Keep the Print Simple',
            body: 'Papers are usually printed in one or two colours. Fine gradients and small reversed-out type do not hold on an absorbent sheet.',
          },
          {
            title: 'Confirm Food-Contact Suitability',
            body: 'Inks used on direct-contact paper are specified for that use. We confirm the ink system on your quote.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can greaseproof paper be printed all over?',
        a: 'Heavy solid coverage is possible but rarely a good idea. Ink sits on an absorbent surface and a full flood can look patchy while adding cost. A repeated one or two colour pattern with plenty of unprinted paper usually looks better and costs less.',
      },
      {
        q: 'Is printed paper safe against hot food?',
        a: 'When the paper grade and ink system are both specified for direct food contact, yes. That is a specification decision rather than an assumption, so tell us what the paper touches and how hot it is and we will confirm the grade on your quote.',
      },
      {
        q: 'What is the difference between a flat bag and a block-bottom bag?',
        a: 'A flat bag lies completely flat and suits a single pastry or a sandwich. A block-bottom bag opens out to stand up on its own, which matters when staff need to fill it one-handed or when the contents should not be crushed.',
      },
    ],
  },

  // --- Paper cup subcategories --------------------------------------------

  {
    slug: 'sizes',
    parent: 'paper-cups',
    name: 'Paper Cup Sizes',
    heroProduct: '12-oz-paper-cups',
    sourceNames: ['Custom Paper Cups > Paper Cups Sizes'],
    seoTitle: 'Paper Cup Sizes UK | 2oz to 32oz Printed Cups',
    seoDescription:
      'Printed paper cups in every size from 2oz espresso to 32oz cold. Usable volumes, lid diameters and where each size fits.',
    h1: 'Paper Cup Sizes, from Espresso to 32oz',
    cardBlurb: 'Every size in the range, with the drinks each one suits.',
    intro: [
      'Cup sizes are quoted brim-full, which is not how anyone serves a drink. The gap between the number on the box and the volume you actually pour is where most first orders go wrong.',
      'The pages below cover each size in the range with the drinks it suits and the lid diameter it takes.',
    ],
    sections: [
      {
        kind: 'specs',
        heading: 'What Each Size Is Normally Poured For',
        intro: 'A quick orientation before you open an individual size page.',
        rows: [
          ['2oz – 4oz', 'Espresso, tasters, sauces and sampling at events'],
          ['6oz – 7oz', 'Flat white, cortado, vending and children\'s drinks'],
          ['8oz', 'The standard small hot drink across most UK cafés'],
          ['9oz – 12oz', 'Regular coffee and tea; 12oz is the most ordered size'],
          ['16oz', 'Large hot drinks and standard iced drinks'],
          ['20oz – 32oz', 'Large cold drinks, milkshakes and event serving'],
        ],
        note:
          'Usable volume runs roughly 10 to 15 per cent below the stated size once headspace is allowed.',
      },
      {
        kind: 'prose',
        heading: 'Two Sizes Cover Most Menus',
        body: [
          'Cafés that carry four cup sizes usually find two of them barely move. Stock cost and cupboard space both argue for a short list.',
          'A common UK pairing is 8oz and 12oz for hot, with a single 16oz for cold. Adding a size is easy later; clearing dead stock is not.',
        ],
        link: {
          href: '/12-oz-paper-cups/',
          anchor: '12oz cups, the most ordered size in the range',
          sentence:
            'If you only order one size to start with, {link} covers the widest span of drinks.',
        },
      },
    ],
    faqs: [
      {
        q: 'Are lid sizes the same across cup volumes?',
        a: 'Lids match the rim diameter, and several volumes often share one rim. An 8oz and a 12oz frequently take the same lid, which reduces the number of lid lines you need to hold. We confirm the rim diameter for any cup we quote.',
      },
      {
        q: 'Can one printed design run across several sizes?',
        a: 'The artwork can be the same, but each size needs its own layout because the cup is a different shape when flattened. Scaling one file across sizes distorts the logo, so we re-lay it per size from your original file.',
      },
    ],
  },

  {
    slug: 'materials',
    parent: 'paper-cups',
    name: 'Paper Cup Materials',
    heroProduct: 'kraft-paper-cups',
    sourceNames: ['Custom Paper Cups > Paper Cups Materials'],
    seoTitle: 'Paper Cup Materials UK | Kraft, Waxed & Lined Cups',
    seoDescription:
      'Compare kraft, waxed, parchment and recyclable-lined paper cups, and what each lining means for hot drinks and disposal.',
    h1: 'Paper Cup Materials and Linings',
    cardBlurb: 'Kraft, waxed, parchment and recyclable-lined cup stock compared.',
    intro: [
      'Every paper cup that holds a liquid has a lining. The board on its own would go soft in minutes, so the interesting question is not whether a cup is lined but with what.',
      'The lining decides how hot a drink can be, how the cup should be disposed of, and what you are allowed to claim on the print.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Lining Choices in Plain Terms',
        columns: ['Conventional PE lining', 'Alternative linings'],
        rows: [
          ['Heat tolerance', 'Handles standard hot drink temperatures reliably', 'Varies by type; PLA in particular has a lower ceiling'],
          ['Disposal', 'Needs a specialist paper-cup collection stream', 'Also needs the correct stream — few are accepted in domestic recycling'],
          ['Cost', 'The established baseline', 'Generally higher per unit'],
          ['Print', 'No difference — the lining is on the inside face', 'No difference'],
          ['Claims on pack', 'Straightforward to describe accurately', 'Wording needs care; claims must match the collection actually available'],
        ],
        outro:
          'Whichever you choose, check what your waste contractor collects before printing a disposal instruction on the cup.',
      },
      {
        kind: 'prose',
        heading: 'Kraft Is a Look as Well as a Material',
        body: [
          'Kraft board is unbleached, which is why it is brown. Plenty of independents choose it because it reads as plain and unfussy next to a white cup.',
          'The trade-off is colour accuracy. Print sits over a warm brown base, so blues go muddy and pale tints disappear. Designs made for kraft usually lean on one strong colour and let the board do the rest.',
        ],
        link: {
          href: '/kraft-paper-cups/',
          anchor: 'kraft cups and how artwork behaves on brown board',
          sentence:
            'There is more on {link} if that look suits your brand.',
        },
      },
    ],
    faqs: [
      {
        q: 'Are unlined paper cups available?',
        a: 'For a drink, no — an unlined cup fails quickly. Unlined board is used for dry goods such as popcorn or snack portions, where nothing wet touches the wall.',
      },
      {
        q: 'Which lining should I choose to reduce environmental impact?',
        a: 'It depends less on the cup than on where it ends up. A cup with an alternative lining sent to general waste performs no better than a conventional one. Start by finding out what separate collection you can arrange, then choose the lining that matches it.',
      },
    ],
  },

  {
    slug: 'coloured',
    parent: 'paper-cups',
    name: 'Coloured Paper Cups',
    heroProduct: 'black-paper-cups',
    sourceNames: ['Custom Paper Cups > Colored Paper Cups'],
    seoTitle: 'Coloured Paper Cups UK | Black, Pink, Gold & More',
    seoDescription:
      'Solid-colour printed paper cups in black, white, pink, gold, red, green and brown, matched as closely as print allows.',
    h1: 'Paper Cups by Colour',
    cardBlurb: 'Solid-colour cup bodies in black, pink, gold, red, green and more.',
    intro: [
      'A solid colour body is the quickest way to make a cup look deliberate. It reads as a brand decision at ten paces, where a small logo on white does not.',
      'Colour on a cup is printed, not dyed, and that single fact governs how it behaves — coverage, cost and how close a match you can hold.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Full Coverage Costs More than It Looks',
        body: [
          'A solid colour across the whole body means ink over the entire printable area, plus a margin at the seam and the rim that stays unprinted so the cup can be formed and rolled.',
          'That unprinted margin is unavoidable. On a dark cup it shows as a thin light line at the rim, which is normal on every printed cup regardless of supplier.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Getting Close to a Brand Colour',
        items: [
          'Supply the colour as a Pantone reference rather than a screenshot or a hex code.',
          'Expect a shift on kraft board; specify a white cup if the match must be tight.',
          'Deep blacks and strong reds are the hardest to hold evenly across a long run.',
          'Ask for a printed sample if the colour is one customers would notice being wrong.',
        ],
        outro:
          'Where an exact match matters more than cost, a spot colour holds far better across a run than the same colour built from CMYK.',
      },
    ],
    faqs: [
      {
        q: 'Can the inside of the cup be coloured too?',
        a: 'The inside face is the food-contact surface and is normally left unprinted. Some specifications allow an inside print with a suitable ink system, which we would confirm rather than assume.',
      },
      {
        q: 'Why does the same colour look different on two cup sizes?',
        a: 'Different sizes can run on different presses or board batches, and a large flat area shows variation that a small logo hides. If colour consistency across sizes matters, say so at quote stage so the sizes can be planned together.',
      },
    ],
  },

  {
    slug: 'coffee-cups',
    parent: 'paper-cups',
    name: 'Coffee Cups',
    heroProduct: 'custom-paper-coffee-cups',
    sourceNames: ['Custom Paper Cups > Paper Coffee Cups', 'Custom Paper Cups > Hot Paper Cups'],
    seoTitle: 'Custom Coffee Cups UK | Printed Takeaway Cups',
    seoDescription:
      'Branded takeaway coffee cups for UK cafés, covering kraft, hot chocolate and single-wall options with lids matched by rim.',
    h1: 'Printed Coffee Cups for UK Cafés',
    cardBlurb: 'Takeaway hot cups, kraft coffee cups, hot chocolate cups and lids.',
    intro: [
      'The takeaway coffee cup is the most photographed object a café owns. It travels down the high street, sits on desks, and appears in the background of other people\'s pictures.',
      'This group covers hot drink cups and the lids that go with them, from single-wall cups that pair with a sleeve to heavier constructions that hold heat on their own.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Where the Print Actually Gets Seen',
        body: [
          'A cup is held in one hand, and that hand covers roughly a third of the printable area. Whatever sits under the fingers is invisible for the life of the drink.',
          'Designs that repeat around the circumference survive this. A single logo placed once has an even chance of facing the wrong way on the walk to the office.',
        ],
        link: {
          href: '/beverage-sleeves/',
          anchor: 'printed sleeves that add a second branded surface',
          sentence:
            'Where a plain cup is already in stock, {link} give the same effect for less than reprinting the cup.',
        },
      },
      {
        kind: 'specs',
        heading: 'Points to Settle Before Quoting',
        rows: [
          ['Wall construction', 'Single wall with sleeve, or double wall'],
          ['Sizes carried', 'How many, and whether they can share a lid diameter'],
          ['Lid type', 'Sip lid, flat lid or domed, and whether you need us to supply them'],
          ['Board', 'White for colour accuracy, kraft for a plain look'],
          ['Design count', 'One design, or seasonal variants printed in the same run'],
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need to buy lids from the same supplier as the cups?',
        a: 'Not necessarily, but the rim diameters have to match, and stated cup volumes are not a reliable guide to rim size. If you already hold lids, tell us the brand and code and we will check the cup against them.',
      },
      {
        q: 'Is a double-wall cup worth the extra cost over a sleeve?',
        a: 'Compare the pair rather than the cup alone. A single-wall cup plus a sleeve is often close in total cost to a double wall, and the double wall removes a second line from your stock list and a step from service.',
      },
    ],
  },

  {
    slug: 'food-cups',
    parent: 'paper-cups',
    name: 'Food Cups',
    heroProduct: 'paper-dessert-cups',
    sourceNames: [
      'Custom Paper Cups > Food Paper Cups',
      'Custom Paper Cups > Ice Cream Cups',
    ],
    seoTitle: 'Paper Food Cups UK | Dessert, Soup & Portion Cups',
    seoDescription:
      'Printed paper cups for desserts, ice cream, soup, sauces and snacks, with the wall and lining each of those uses actually needs.',
    h1: 'Paper Cups for Food, Desserts and Portions',
    cardBlurb: 'Dessert, ice cream, soup, snack, sauce and portion cups.',
    intro: [
      'Food in a cup puts different demands on the board than a drink does. A soup cup deals with sustained heat and a spoon; a sauce pot deals with being stacked a hundred deep and pulled off one at a time.',
      'The pages here separate those uses so the specification matches what the cup is actually holding.',
    ],
    sections: [
      {
        kind: 'uses',
        heading: 'What Changes Between Food Uses',
        items: [
          {
            title: 'Hot Food — Soup and Porridge',
            body: 'Sustained heat and a spoon scraping the wall. Needs a heavier board than a drink cup of the same volume.',
          },
          {
            title: 'Frozen — Ice Cream and Gelato',
            body: 'Condensation on the outside is the issue, not heat. A coated outer face stops the print softening in a cold cabinet.',
          },
          {
            title: 'Dry Snacks — Popcorn, Nuts, Chips',
            body: 'Nothing wet touches the wall, so an unlined board is usually adequate and costs less.',
          },
          {
            title: 'Sauces and Portions',
            body: 'Bought in volume, used in seconds. Denesting cleanly from a stack matters more than anything printed on them.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Lids Change the Size You Need',
        body: [
          'A dessert cup with a domed lid holds more than its stated volume once the dome is counted, which is why a scoop can sit proud of the rim without crushing.',
          'A flat lid does the opposite — it caps the fill line below the rim. Decide on the lid before the cup size, or you will end up serving a smaller portion than you costed.',
        ],
        link: {
          href: '/ice-cream-paper-cups-with-lids/',
          anchor: 'ice cream cups supplied with matching lids',
          sentence:
            'For takeaway and cabinet sales, {link} avoid the mismatch entirely.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can a drink cup be used for soup?',
        a: 'It will hold soup, but the wall flexes when a spoon presses against it and the heat is sustained rather than brief. A cup specified for food has a heavier board for that reason.',
      },
      {
        q: 'Do sauce pots need to be printed?',
        a: 'Rarely worth it. They are seen for seconds and bought in large volumes, so plain pots are usually the sensible choice and the print budget goes on the item the customer actually carries.',
      },
    ],
  },

  {
    slug: 'cardboard',
    parent: 'paper-cups',
    name: 'Cardboard Cups',
    heroProduct: 'cardboard-coffee-cups',
    sourceNames: ['Custom Paper Cups > Cardboard Cups'],
    seoTitle: 'Cardboard Cups UK | Printed Card Cups with Lids',
    seoDescription:
      'Printed cardboard cups in small and coffee sizes, with or without lids, for UK cafés, offices, venues and event catering.',
    h1: 'Printed Cardboard Cups',
    cardBlurb: 'Card-bodied cups in small and coffee sizes, with or without lids.',
    intro: [
      '"Cardboard cup" and "paper cup" describe the same thing in ordinary use — a cup formed from board with a liquid barrier on the inside. The term tends to be used for the heavier, plainer end of the range.',
      'The cups grouped here suit offices, events and venues that want something sturdier than a thin vending cup without moving to a double-wall café specification.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Where a Heavier Card Cup Makes Sense',
        items: [
          'Offices and meeting rooms, where cups are carried along corridors rather than a few steps.',
          'Events and conferences serving in volume from a temporary counter.',
          'Venues wanting a plain, unbranded look with a single printed logo.',
          'Anywhere a lid is needed and a flimsy rim would deform when the lid is pressed on.',
        ],
        outro:
          'The rim is the part that matters for lidding — a thin cup distorts under thumb pressure and the lid never seats evenly.',
      },
      {
        kind: 'prose',
        heading: 'Ordering with Lids from the Start',
        body: [
          'Buying cups first and lids later is the most common ordering mistake in this part of the range. Rim diameters differ between manufacturers even at identical stated volumes.',
          'If lids are part of the plan, say so in the first message. Matching them afterwards means either accepting a loose fit or replacing stock you have already paid for.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a cardboard cup different from a paper cup?',
        a: 'Not meaningfully. Both are formed from lined board. The word tends to signal a heavier, plainer cup rather than a different construction, so it is worth confirming board weight rather than relying on the name.',
      },
    ],
  },

  {
    slug: 'structure',
    parent: 'paper-cups',
    name: 'Lids, Sleeves & Cup Parts',
    heroProduct: 'paper-cups-with-lids',
    sourceNames: ['Custom Paper Cups > Paper Cups Structure'],
    seoTitle: 'Paper Cup Lids & Sleeves UK | Cup Accessories',
    seoDescription:
      'Lids, sleeves, handles, covers and cone cups: the parts that go with a cup order, all matched by measured rim diameter.',
    h1: 'Cup Lids, Sleeves and Fittings',
    cardBlurb: 'Lids, sleeves, handles, covers and cone-shaped cups.',
    intro: [
      'Most problems with a cup order are actually problems with the parts around it. A lid that does not seat, a sleeve that spins, a handle that will not take the weight.',
      'Everything here is matched by measurement rather than by the size printed on the box.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Rim Diameter Is the Number That Matters',
        body: [
          'Lids fit rims, not volumes. Two cups both sold as 12oz can have rims several millimetres apart, and a lid that is close but not right will pop off in a car door pocket.',
          'When you enquire, give us the rim measurement across the outside of the rolled edge, or send a cup. Either removes the guesswork completely.',
        ],
        link: {
          href: '/paper-cup-sleeves/',
          anchor: 'sleeves sized to grip rather than spin',
          sentence:
            'The same principle applies to {link}, which are cut from the cup\'s circumference.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Parts Covered in This Group',
        items: [
          'Lids — sip, flat and domed, matched to the rim of the cup you use.',
          'Sleeves — corrugated or flat board, printed or plain.',
          'Handles — for tea cups and anything served very hot without a sleeve.',
          'Covers — for cups going into a cabinet or transported in a tray.',
          'Cone cups — a cone-shaped cup rather than a straight-walled one, used for water and tasting.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you supply lids for cups I bought elsewhere?',
        a: 'Usually, provided the rim measures to a diameter we can match. Send the measurement or a sample cup and we will confirm before quoting rather than after.',
      },
      {
        q: 'Do printed sleeves fit any cup?',
        a: 'No. A sleeve is cut to a circumference, so one sized for a 12oz cup will be slack on an 8oz and will not go over a 16oz. Sites running several sizes normally need more than one sleeve.',
      },
    ],
  },

  {
    slug: 'printed-designs',
    parent: 'paper-cups',
    name: 'Printed & Seasonal Cups',
    heroProduct: 'printed-paper-cups',
    sourceNames: [
      'Custom Paper Cups > Special Design Paper Cups',
      'Custom Paper Cups > Seasonal Cups',
    ],
    seoTitle: 'Printed & Seasonal Paper Cups UK | Christmas Cups',
    seoDescription:
      'Logo cups, full-colour printed cups and seasonal Christmas designs, planned backwards from press lead times and on-counter dates.',
    h1: 'Printed and Seasonal Cup Designs',
    cardBlurb: 'Logo cups, full-colour prints and Christmas designs.',
    intro: [
      'Seasonal cups are a scheduling problem more than a design one. The artwork is usually the easy part; getting printed stock onto the counter for the first week of December is where it goes wrong.',
      'This group covers logo-only cups, full-colour designs and the seasonal ranges that run alongside them.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Planning a Seasonal Run Backwards from the Date',
        intro:
          'Work back from the day the cup needs to be in use, not forward from today.',
        steps: [
          {
            title: 'Fix the On-Counter Date',
            body: 'Decide the first day of the promotion. Everything else is scheduled against it.',
          },
          {
            title: 'Allow for Delivery and Stock Rotation',
            body: 'Stock has to reach every site and get to the front of the cupboard before the date, not on it.',
          },
          {
            title: 'Confirm Print Lead Time in Writing',
            body: 'Lead time depends on the press, the run length and the season\'s workload. We confirm yours on the quote rather than quoting a general figure.',
          },
          {
            title: 'Approve Artwork with Time to Spare',
            body: 'Artwork approval is the step most often late. Aim to sign off well before the press slot, not on the day of it.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'One Design or Several',
        body: [
          'Digital print makes several designs in one order far more workable than it used to be, which suits a set of four seasonal illustrations across one run.',
          'Longer runs on flexo favour a single design, because each additional one carries its own setup. The crossover point depends on your quantity, and it is worth asking us to price both ways.',
        ],
        link: {
          href: '/christmas-paper-cups/',
          anchor: 'Christmas cup designs and the lead time they need',
          sentence:
            'Seasonal work concentrates around one date, so {link} are worth starting earlier than feels necessary.',
        },
      },
    ],
    faqs: [
      {
        q: 'When should a Christmas cup order be placed?',
        a: 'Earlier than most people expect, because every café in the country wants press time in the same few weeks. Ask us for a confirmed lead time as soon as the design direction is settled, and treat that date as the deadline for artwork rather than for ordering.',
      },
      {
        q: 'Can we run four seasonal designs in one order?',
        a: 'On digital print, usually yes, with the cost depending on the split between designs. Tell us the quantity of each and we will price the split properly.',
      },
    ],
  },

  {
    slug: 'drinking-cups',
    parent: 'paper-cups',
    name: 'Drinking & Dispenser Cups',
    heroProduct: 'paper-water-cups',
    sourceNames: ['Custom Paper Cups > Drinking Paper Cups'],
    seoTitle: 'Water & Dispenser Cups UK | Printed Drinking Cups',
    seoDescription:
      'Paper cups for water coolers, dispensers and washrooms, where fitting the machine matters considerably more than volume.',
    h1: 'Drinking and Dispenser Cups',
    cardBlurb: 'Cooler, dispenser and washroom cups, matched to the machine.',
    intro: [
      'These cups are bought by facilities teams rather than by kitchens, and they are judged on a single question: does the dispenser release one cleanly, every time?',
      'Volume barely matters. Tube diameter, stack height and consistent rims decide whether an order works.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'A Jammed Dispenser Is Reported as a Broken Machine',
        body: [
          'When a cup sticks in a tube, nobody blames the cup. The fault goes to facilities as a broken cooler, and a technician is sent out.',
          'That is why dimensional consistency matters more here than anywhere else in the cup range, and why we ask for the dispenser model before quoting.',
        ],
        link: {
          href: '/paper-water-cups/',
          anchor: 'the measurements a cooler dispenser needs',
          sentence: 'What to send us is listed on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Three Different Fittings',
        items: [
          'Flat-bottomed cooler cups, which stack in a vertical tube.',
          'Cone cups, which use a different dispenser entirely and cannot be put down.',
          'Washroom cups, usually smaller and sometimes individually wrapped.',
        ],
        outro:
          'Cone and flat-bottom dispensers are not interchangeable, so confirm which you have before ordering.',
      },
    ],
    faqs: [
      {
        q: 'Why do our cups jam the dispenser?',
        a: 'Almost always a rim diameter or stack height slightly outside what the tube expects. Send the dispenser model or a current cup and we will check the fit before quoting rather than after delivery.',
      },
      {
        q: 'Is it worth branding a water cooler cup?',
        a: 'In a reception or a client-facing area, often — it is seen by every visitor. In a back office it rarely repays the cost, and most organisations take the plain cup.',
      },
    ],
  },

  // --- Printed papers & bags subcategories ---------------------------------

  {
    slug: 'food-papers',
    parent: 'printed-papers-bags',
    name: 'Printed Food Papers',
    heroProduct: 'custom-greaseproof-paper',
    sourceNames: ['Custom Printed Papers'],
    seoTitle: 'Printed Greaseproof & Deli Paper UK | Food Wrap',
    seoDescription:
      'Custom printed greaseproof, deli, butcher and parchment papers, plus basket liners and placemats for UK food businesses.',
    h1: 'Printed Papers for Wrapping and Lining',
    cardBlurb: 'Greaseproof, deli, butcher and parchment sheets, liners and placemats.',
    intro: [
      'A printed sheet is the lowest-cost branded surface in food service. It goes under the burger, into the basket, or around the sandwich, and it is in shot every time a customer photographs their lunch.',
      'The papers below differ mainly in what they resist: oil, heat, moisture, or nothing much at all.',
    ],
    sections: [
      {
        kind: 'specs',
        heading: 'Choosing a Paper by What It Has to Survive',
        rows: [
          ['Hot and oily food', 'Greaseproof, or parchment where the paper also sees oven heat'],
          ['Cold, moist food', 'Waxed or coated papers that repel moisture'],
          ['Dry goods and presentation', 'Uncoated printed paper, lighter and cheaper'],
          ['Lining a basket or tray', 'Greaseproof cut to the basket footprint'],
          ['Table service', 'Placemat-weight paper, printed one or two colours'],
        ],
        note:
          'Paper weights and grades are confirmed per enquiry, since the same use can be met by more than one grade.',
      },
      {
        kind: 'prose',
        heading: 'Designing for an Absorbent Surface',
        body: [
          'Print on paper behaves differently from print on coated board. Ink spreads slightly into the fibres, so fine lines thicken and small reversed-out type can close up.',
          'Designs that hold up are simple: a wordmark, a repeated motif, a pattern with generous space around it. Photographic images rarely reproduce well and cost more to run.',
        ],
        link: {
          href: '/blog/preparing-artwork-for-custom-cone-sleeves/',
          anchor: 'preparing artwork so it survives the press',
          sentence:
            'Much of our note on {link} applies directly to printed papers.',
        },
      },
    ],
    faqs: [
      {
        q: 'How many colours can be printed on greaseproof paper?',
        a: 'One or two is normal and reproduces reliably. More colours are technically possible but add cost quickly on a product bought for its low unit price, so the design usually gives better value than the extra ink.',
      },
      {
        q: 'What sheet size should I order?',
        a: 'Measure the item, then add enough on each side to fold and tuck. Ordering a standard size and hoping it wraps is the usual reason a first order gets replaced.',
      },
    ],
  },

  {
    slug: 'paper-bags',
    parent: 'printed-papers-bags',
    name: 'Printed Paper Bags',
    heroProduct: 'custom-take-out-bags',
    sourceNames: ['Custom Printed Papers'],
    seoTitle: 'Custom Printed Paper Bags UK | Food & Takeaway Bags',
    seoDescription:
      'Printed paper bags for takeaways, bakeries, delis and coffee shops, from flat pastry bags to block-bottom order carriers.',
    h1: 'Printed Paper Bags for Food Businesses',
    cardBlurb: 'Flat and block-bottom bags for pastries, chips, bread, coffee and orders.',
    intro: [
      'A paper bag leaves the premises and travels. It goes down the street, onto a train, into an office — which makes it the most mobile piece of branding a food business owns.',
      'The bags here range from a flat sheet folded around a single pastry to block-bottom carriers holding a full takeaway order.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Flat Bags Against Block-Bottom Bags',
        columns: ['Flat bag', 'Block-bottom bag'],
        rows: [
          ['Filling', 'One-handed for a single item', 'Stands open, so staff can load with both hands'],
          ['Contents', 'A pastry, a sandwich, a single portion', 'A multi-item order, containers, drinks'],
          ['Storage', 'Very compact', 'Bulkier, though still shipped flat'],
          ['Print area', 'One clean face, seen when carried', 'Front, sides and gusset all visible'],
          ['Cost per unit', 'Lower', 'Higher, with more material and construction'],
        ],
        outro:
          'Bakeries usually need both — flat for counter sales, block-bottom for the order someone collects on the way home.',
      },
      {
        kind: 'bullets',
        heading: 'Points That Decide Whether a Bag Works',
        items: [
          'Handle type, and whether the bag carries weight or is simply held.',
          'Grease resistance where hot food goes straight in without a container.',
          'Bottom construction, which is what fails when a bag is overloaded.',
          'Whether the bag has to stand up unaided while it is packed.',
          'How the print sits when the bag is full rather than flat on a desk.',
        ],
        outro:
          'Test a sample with your heaviest normal order before committing to a quantity.',
      },
    ],
    faqs: [
      {
        q: 'Do paper bags need handles?',
        a: 'Only if the customer carries them any distance or the contents are heavy. A pastry bag with handles adds cost for no benefit, while a full takeaway order without them is genuinely awkward to carry.',
      },
      {
        q: 'Can hot food go straight into a paper bag?',
        a: 'It can with a grease-resistant grade, but steam is still an issue and anything crisp will soften. Chips in particular do better in an open container inside the bag than loose in it.',
      },
    ],
  },
];

export const TOP_CATEGORIES = CATEGORIES.filter((c) => !c.parent);

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug && !c.parent);
}

export function subcategoriesOf(parent: string): Category[] {
  return CATEGORIES.filter((c) => c.parent === parent);
}

/** Full path for a category, including its parent segment when nested. */
export function categoryPath(c: Category): string {
  if (c.mergedIntoHome) return '/';
  return c.parent ? `/${c.parent}/${c.slug}/` : `/${c.slug}/`;
}

/** The flagship range, rendered on the homepage rather than at its own URL. */
export const HOME_CATEGORY = CATEGORIES.find((c) => c.mergedIntoHome)!;

/** Top-level categories that still have a page of their own. */
export const ROUTED_CATEGORIES = TOP_CATEGORIES.filter((c) => !c.mergedIntoHome);
