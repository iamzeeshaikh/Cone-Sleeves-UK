import type { BlogPost } from '../types';

/** Articles about getting an order right: artwork, food safety, waste, cups. */
export const PRACTICE: BlogPost[] = [
  {
    slug: 'preparing-artwork-for-custom-cone-sleeves',
    title: 'Preparing Artwork for Custom Cone Sleeves',
    seoTitle: 'Preparing Artwork for Cone Sleeves | UK Print Guide',
    seoDescription:
      'How to lay out artwork on a cone sleeve die line, why straight lines curve, and which file formats print cleanly.',
    published: '2026-06-18',
    updated: '2026-08-06',
    author: 'Cone Sleeves UK',
    topic: 'Artwork',
    standfirst:
      'A cone sleeve flattens into a curved fan, not a rectangle. Almost every artwork problem starts by forgetting that.',
    imageFrom: 'abstract-design-ice-cream-cone-sleeves',
    imageAlt: 'Cone sleeve artwork laid out on a curved die line before printing',
    related: [
      'how-cone-sleeve-printing-works',
      'how-to-choose-the-right-cone-sleeve-size',
      'matte-and-gloss-finishes-for-cone-sleeves',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The shape you are designing on',
        body: [
          'Take a cone sleeve and unroll it. What you have is not a rectangle and not a trapezium — it is a section of a ring, curved along both the top and bottom edges, wider at one end than the other.',
          'Every consequence in this article follows from that shape. A designer given a rectangle and told to make it fit will produce artwork that distorts in ways nobody can quite explain until the first box arrives.',
          'The fix is simple: get the die line before you start, and build on it.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'What happens to artwork built on a rectangle',
        intro:
          'These are the failures we see most often, and all of them are geometry rather than printing:',
        items: [
          'Horizontal type set level on the flat rises at both ends once the sleeve is wrapped.',
          'A straight band across the middle becomes a visible curve.',
          'A logo centred on the flat sits off-centre on the assembled cone, because the overlap eats one side.',
          'Elements near the narrow end shrink to nothing, since that end has very little width.',
          'Full-bleed colour shows a white sliver at the cut, because the artwork stopped at the die line instead of past it.',
        ],
        outro:
          'None of these can be corrected after printing. All of them cost nothing to avoid if the template arrives first.',
      },
      {
        kind: 'prose',
        heading: 'Setting type on an arc',
        body: [
          'Type that should read horizontally on the finished cone has to be set on a curve on the flat, following the same radius as the die.',
          'Every serious design application can do this — it is the same tool used for text on a circular badge. What it needs is the correct radius, which comes from the die line rather than from guesswork.',
          'A short wordmark tolerates this better than a long sentence. If you have a lot to say, consider saying less rather than setting a paragraph on a curve.',
        ],
        link: {
          href: '/custom-die-cut-sleeves/',
          anchor: 'how a die line is produced for a bespoke shape',
          sentence: 'For anything non-standard, {link} covers the tooling stage that comes first.',
        },
      },
      {
        kind: 'steps',
        heading: 'A working sequence for a cone sleeve design',
        intro:
          'Following this order removes almost all rework.',
        steps: [
          {
            title: 'Get the die line before designing anything',
            body: 'Ask us for it at enquiry stage. It shows the cut, the fold, the overlap area and the safe margin, as editable vector layers.',
          },
          {
            title: 'Place the fixed elements first',
            body: 'The wordmark and anything legally or commercially essential. Keep them out of the overlap and away from the narrow end.',
          },
          {
            title: 'Build the background to bleed',
            body: 'Extend any full-coverage colour or image past the cut line, so the die never exposes unprinted board.',
          },
          {
            title: 'Set curved type last',
            body: 'Once the layout is settled, set anything that needs to read horizontally on the cone along the die\'s arc.',
          },
          {
            title: 'Check at actual size, printed',
            body: 'Print the flat at 100 per cent on a desktop printer, cut it out and wrap it round a real cone. This catches more than any on-screen check.',
          },
        ],
      },
      {
        kind: 'specs',
        heading: 'File requirements',
        intro: 'What we need in order to print without going back and forth.',
        rows: [
          ['Format', 'Vector PDF or AI preferred; high-resolution PSD or TIFF accepted'],
          ['Resolution', 'At least 300 dpi at final size for any raster element'],
          ['Colour space', 'CMYK for process work; named Pantone references for spot colours'],
          ['Bleed', 'Artwork extended past the cut line on every edge'],
          ['Fonts', 'Converted to outlines, or supplied with the file'],
          ['Layers', 'Die line kept on its own layer and not flattened into the artwork'],
          ['Black', 'Rich black built from more than one ink for large solid areas'],
        ],
        note:
          'Send the working file rather than a flattened export where possible. It makes small adjustments quick instead of impossible.',
      },
      {
        kind: 'prose',
        heading: 'Colour: what a screen cannot tell you',
        body: [
          'Screens emit light; printed board reflects it. A colour will always look more muted on paper than it does backlit, and no amount of screen calibration changes that.',
          'On kraft or uncoated board the shift is larger again, because the ink sits over a warm base rather than a white one.',
          'If a colour is one your customers would notice being wrong, specify it as a named Pantone rather than a CMYK build, and ask what sample options exist for your print method.',
        ],
        link: {
          href: '/kraft-paper-cups/',
          anchor: 'how much colour shifts on unbleached board',
          sentence: 'The kraft case is set out with examples on {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'The safe area, and why it is bigger than you think',
        body: [
          'The overlap where the sleeve glues or tucks is hidden on every assembled unit. Anything placed there is invisible for the life of the product.',
          'On top of that, cutting has a small tolerance, so elements sitting right against the cut line risk being trimmed on some units and not others.',
          'The safe area on the die line accounts for both. Treat it as a hard boundary for anything that matters, and use the space outside it only for background that can survive being trimmed.',
        ],
      },
      {
        kind: 'prose',
        heading: 'One test worth doing before you approve',
        body: [
          'Print the flat artwork at full size, cut around the die line with scissors, and wrap it around one of your actual cones with a piece of tape.',
          'It takes five minutes and it answers questions no proof can: whether the logo faces the customer, whether the type reads level, whether the wrap stops where you wanted, and whether anything important disappears into the overlap.',
          'Every problem found at that stage is free to fix. The same problem found after a run has printed is not.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you supply the die template to our designer directly?',
        a: 'Yes, and it is worth asking for it before design work starts rather than after. We send it as an editable vector file with the cut, fold, overlap and safe area on separate layers.',
      },
      {
        q: 'What if we only have a logo and no design?',
        a: 'That is a perfectly workable starting point. A single mark repeated around the sleeve on a plain board is one of the cheapest and most effective specifications there is, and it needs no illustration work.',
      },
      {
        q: 'Do you check artwork before printing?',
        a: 'We check position, bleed, resolution and that everything important sits inside the safe area, and we issue a digital proof on the die line. Colour accuracy on screen is the one thing a proof cannot confirm.',
      },
    ],
  },

  {
    slug: 'food-safe-considerations-for-cone-sleeve-packaging',
    title: 'Food-Safe Considerations for Cone Sleeve Packaging',
    seoTitle: 'Food-Safe Cone Sleeve Packaging | UK Considerations',
    seoDescription:
      'What food-contact specification means for printed cone sleeves in the UK, and which questions to put to a supplier.',
    published: '2026-07-09',
    author: 'Cone Sleeves UK',
    topic: 'Food safety',
    standfirst:
      'Food-contact suitability is a specification, not an assumption. Here is what to ask for and what to keep on file.',
    imageFrom: 'custom-ice-cream-cone-sleeves',
    imageAlt: 'Printed cone sleeve in direct contact with a wafer cone',
    related: [
      'paperboard-options-for-printed-cone-sleeves',
      'reducing-packaging-waste-in-dessert-businesses',
      'choosing-a-cone-sleeve-supplier-in-the-uk',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Direct contact is the question that decides everything',
        body: [
          'The first thing to establish about any piece of packaging is whether food touches it directly, and for how long.',
          'A cone sleeve touches a wafer continuously for the whole time a customer is eating. A gift card sleeve touches nothing edible at all. Those two sit at opposite ends of a spectrum, and they need completely different specifications.',
          'Between them sit cases that are easy to get wrong: a sleeve around a wrapped chocolate bar touches film rather than chocolate, so its requirements are much lighter than they first appear.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Questions worth putting to any packaging supplier',
        intro:
          'These are reasonable to ask and straightforward for a supplier to answer in writing:',
        items: [
          'Is the board grade specified for direct food contact, and which grade is it?',
          'Is the ink system specified for the type of contact my product involves?',
          'Does any lamination, coating or adhesive also come into contact with food?',
          'What temperature range is this specification suitable for?',
          'Can you confirm all of this in writing on the quote, rather than verbally?',
        ],
        outro:
          'A supplier that cannot answer these in writing is not necessarily supplying something unsuitable, but you have no record either way, and the record is what matters if you are ever asked.',
      },
      {
        kind: 'prose',
        heading: 'Inks, and the part people forget',
        body: [
          'Printing sits on the outside of a cone sleeve, which sounds like it puts it safely away from the food. In practice sleeves are stacked, so the printed outer face of one sits against the inner face of the next for weeks in a box.',
          'That is why ink systems for food packaging are specified against the whole application rather than only against the surface that faces inward.',
          'It is a detail rather than a scare, and it is one of the reasons packaging inks differ from general commercial printing inks.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Temperature changes the specification',
        body: [
          'Cold food is the gentlest case. Ice cream against board is a moisture problem more than a chemical one.',
          'Hot and oily is considerably harder. Fat is a solvent, heat accelerates everything, and a sleeve holding fried chicken is a far more demanding application than one holding a scoop of gelato.',
          'Where food is held hot for a long period — a cabinet rather than a counter — the requirement steps up again, and the grade should be specified against that rather than against general food contact.',
        ],
        link: {
          href: '/custom-printed-hot-paper/',
          anchor: 'papers specified for hot-held applications',
          sentence: 'For anything held under heat, {link} covers what changes.',
        },
      },
      {
        kind: 'steps',
        heading: 'Keeping a defensible record',
        intro:
          'If an environmental health officer asks about your packaging, this is what makes the conversation short.',
        steps: [
          {
            title: 'Get the specification in writing at order stage',
            body: 'Board grade, lining, ink system and any coating, on the quote or the order confirmation.',
          },
          {
            title: 'File it with your supplier records',
            body: 'Alongside your other supplier documentation, not in an email folder you will not find later.',
          },
          {
            title: 'Note what the packaging is used for',
            body: 'A brief line recording which product it holds and at what temperature. That is what links the specification to your actual use.',
          },
          {
            title: 'Recheck when anything changes',
            body: 'A new board, a new menu item served hotter, a new supplier — any of these makes the old record incomplete.',
          },
        ],
      },
      {
        kind: 'callout',
        heading: 'What we confirm and what we do not',
        body: 'We confirm the board grade, lining, ink system and finish for every item we quote, in writing, so you can hold that record. We do not publish blanket food-safety assurances on this website, because suitability depends on your product, its temperature and how long it is in contact — none of which we know until you tell us.',
        pending: true,
      },
      {
        kind: 'prose',
        heading: 'Allergens and labelling are a separate matter',
        body: [
          'Packaging suitability and food labelling are often discussed together and are entirely different obligations. A perfectly specified sleeve tells a customer nothing about what is inside it.',
          'Where a product is pre-packed rather than made to order, labelling requirements apply, and the packaging has to leave room for that information.',
          'The practical implication for packaging is simple: decide the label size early and reserve a clear area for it, so a sticker does not land across your logo.',
        ],
        link: {
          href: '/custom-sandwich-sleeves/',
          anchor: 'reserving label space in a packaging design',
          sentence: 'The layout side of this is covered on {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'A short summary',
        body: [
          'Establish whether food touches the packaging directly and at what temperature. Ask for the board, lining and ink system in writing. File the answer with your supplier records and revisit it whenever the product or the packaging changes.',
          'None of that is onerous, and it turns a subject that sounds intimidating into four lines on a quote.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Situations where the answer changes',
        intro:
          'A specification that was correct when it was set can stop being correct without anyone noticing:',
        items: [
          'A new menu item served hotter than anything the packaging was specified against.',
          'A change of board at reorder, agreed on price rather than on specification.',
          'Moving from counter service to delivery, which lengthens contact time considerably.',
          'A supplier change where the new packaging looks identical and is not the same grade.',
          'Adding a sauce or a topping that is oilier or more acidic than the original product.',
        ],
        outro:
          'Each of these is a reason to re-confirm the specification rather than assume the old record still describes what you are buying.',
      },
    ],
    faqs: [
      {
        q: 'Are printed cone sleeves safe for direct contact with ice cream?',
        a: 'When both the board grade and the ink system are specified for direct food contact, yes. That is a specification decision rather than something to assume, so ask for it in writing and keep the record.',
      },
      {
        q: 'Does printing on the outside matter if food only touches the inside?',
        a: 'It can, because sleeves are stacked in transit and the printed face of one sits against the inner face of the next. That is why packaging inks are specified against the whole application rather than one surface.',
      },
      {
        q: 'Do we need documentation for environmental health?',
        a: 'Having the specification in writing makes any such conversation considerably shorter. What you need to hold depends on your own food safety management system, which is a question for whoever manages it.',
      },
    ],
  },

  {
    slug: 'reducing-packaging-waste-in-dessert-businesses',
    title: 'Ways to Reduce Packaging Waste in Dessert Businesses',
    seoTitle: 'Reducing Packaging Waste in Dessert Businesses | Guide',
    seoDescription:
      'Practical ways UK dessert businesses cut packaging waste, ranked by what actually makes a difference rather than what sounds good.',
    published: '2026-07-23',
    author: 'Cone Sleeves UK',
    topic: 'Sustainability',
    standfirst:
      'Most of the biggest reductions have nothing to do with which board you buy. Here they are in order of impact.',
    imageFrom: 'custom-eco-friendly-cone-sleeves',
    imageAlt: 'Unlaminated kraft cone sleeves stacked flat, showing the plain uncoated surface',
    related: [
      'food-safe-considerations-for-cone-sleeve-packaging',
      'paperboard-options-for-printed-cone-sleeves',
      'matte-and-gloss-finishes-for-cone-sleeves',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'The uncomfortable ranking',
        body: [
          'Businesses asking about packaging waste usually start with the material. That is the most visible lever and one of the least effective ones.',
          'The changes that reduce waste most are, roughly in order: using less packaging, using packaging that is actually collected where it is thrown away, reducing what is thrown away unused, and only then changing the material.',
          'A supplier telling you otherwise is selling you something. This article puts them in the order that reflects what actually happens.',
        ],
      },
      {
        kind: 'steps',
        heading: 'Five changes, in order of what they save',
        intro:
          'Each of these is available to an ordinary independent dessert business without a sustainability budget.',
        steps: [
          {
            title: 'Serve eat-in customers in reusables',
            body: 'A business with seating that serves everything in disposables is generating waste it does not need to. This single change usually outweighs every material substitution available.',
          },
          {
            title: 'Remove packaging that is not doing a job',
            body: 'A sleeve inside a bag inside a box is three items where two would do. Audit what actually leaves your counter with a single order and ask what each piece is for.',
          },
          {
            title: 'Stop ordering more than you use',
            body: 'Seasonal and dated stock written off at the end of a promotion is pure waste that never even reached a customer. Undated artwork and honest quantity estimates fix most of it.',
          },
          {
            title: 'Match the specification to a collection you can access',
            body: 'An unlaminated sleeve is only better if it reaches a paper stream. Find out what your waste contractor collects before choosing the board.',
          },
          {
            title: 'Then choose the material',
            body: 'Removing lamination, reducing full-flood ink coverage and choosing recycled-content stock all help. They are worth doing, and they come last for a reason.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Why "recyclable" is doing less work than it appears',
        body: [
          'A material is recyclable if a process exists that can recycle it. That is a statement about the world, not about what happens to your packaging.',
          'What decides the outcome is whether a collection exists where the item is thrown away, and whether it goes into that collection rather than a general bin.',
          'For packaging carried out of your premises, you control neither. That is not a reason to give up — it is a reason to focus first on the packaging that stays in your building, where you do control the bins.',
        ],
        link: {
          href: '/recyclable-paper-cups/',
          anchor: 'why cup recycling depends on collection rather than the cup',
          sentence: 'The same logic applies to cups, as {link} sets out.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Reductions that cost nothing',
        intro:
          'These need no supplier conversation and no capital spend:',
        items: [
          'Ask before adding a bag, rather than bagging every order automatically.',
          'Stop double-wrapping — a sleeve and a paper around the same item is usually one too many.',
          'Order undated seasonal artwork so leftovers carry into next year.',
          'Keep one packaging line that works across two products rather than two that each work perfectly.',
          'Train staff to take a sleeve from the stack rather than a handful, which sounds trivial and is not.',
        ],
        outro:
          'Together these routinely take five to ten per cent out of packaging usage, which is more than most material substitutions achieve.',
      },
      {
        kind: 'prose',
        heading: 'The honest position on alternative materials',
        body: [
          'Plant-based linings and compostable films are genuine engineering achievements and they are frequently oversold. Most need industrial composting that is not available to a customer walking down a street, and in a general waste stream they behave much like anything else.',
          'That does not make them worthless. In a closed setting — a venue where you control the bins and have an appropriate collection — they can work well.',
          'Buying them for packaging that leaves your premises, without knowing where it ends up, is buying a feeling rather than an outcome.',
        ],
        link: {
          href: '/eco-friendly-paper-cups/',
          anchor: 'what alternative linings do and do not change',
          sentence: 'We set out {link} without the marketing gloss.',
        },
      },
      {
        kind: 'prose',
        heading: 'What to tell customers',
        body: [
          'Customers increasingly ask, and vague answers land badly. A specific, modest claim is far more credible than a broad one.',
          '"Our sleeves are unlaminated board and go in the paper recycling" is checkable and true. "Our packaging is eco-friendly" is neither.',
          'If you are not sure what is true of yours, ask your supplier for the specification in writing. It is a reasonable request and it turns an awkward question into an easy one.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Where to start this week',
        body: [
          'Look at what leaves your counter with one typical order and count the pieces. Then ask what each one is for, and whether the customer would notice its absence.',
          'That exercise takes ten minutes and usually finds something. It costs nothing, it reduces both waste and your packaging bill, and it does not require changing supplier or specification.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Measuring whether any of it worked',
        intro:
          'Waste reduction is easy to feel good about and hard to demonstrate. Three numbers make it real:',
        items: [
          'Packaging items purchased per thousand covers, tracked before and after a change.',
          'Written-off seasonal stock at the end of each promotion, in units rather than pounds.',
          'The number of separate packaging lines you hold, which usually falls as waste does.',
          'Bin collections per week, if your waste contract charges by uplift rather than weight.',
        ],
        outro:
          'The first of those is the most useful, because it separates a genuine reduction from simply having had a quieter month.',
      },
      {
        kind: 'prose',
        heading: 'Talking to your waste contractor',
        body: [
          'This is the least appealing item on any list and the one that changes the most. A ten-minute call establishes what streams you actually have, what they will take, and what they charge for.',
          'Ask three things: whether they collect card separately, whether they take lined paper cups, and whether uplift is charged by weight or by collection. The third answer decides whether reducing volume saves you anything at all.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is compostable packaging better than recyclable?',
        a: 'Only if it reaches a facility that can compost it, which for packaging carried away from your premises is unlikely in most of the UK. In a general waste stream it behaves much like anything else.',
      },
      {
        q: 'Does removing lamination cost more?',
        a: 'Usually it costs less, because it removes a production step. What it costs you is durability, which matters more for outdoor and hot-weather trade than for quick indoor service.',
      },
      {
        q: 'What is the single biggest change we could make?',
        a: 'If you have seating, serving eat-in customers in reusables. It almost always outweighs every material substitution available on the disposable range put together.',
      },
    ],
  },

  {
    slug: 'printed-coffee-cup-sleeves-guide',
    title: 'A Guide to Printed Coffee Cup Sleeves',
    seoTitle: 'Printed Coffee Cup Sleeves | UK Café Buying Guide',
    seoDescription:
      'How to size, specify and design printed coffee cup sleeves, and why they usually beat printed cups for an independent café.',
    published: '2026-08-01',
    author: 'Cone Sleeves UK',
    topic: 'Beverage',
    standfirst:
      'For most independent cafés a printed sleeve does more branding per pound than a printed cup. Here is how to specify one.',
    imageFrom: 'custom-printed-coffee-sleeves',
    imageAlt: 'Printed corrugated coffee cup sleeve fitted to a takeaway cup',
    related: [
      'branded-cone-sleeves-takeaway-presentation',
      'choosing-a-cone-sleeve-supplier-in-the-uk',
      'how-cone-sleeve-printing-works',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Why the sleeve usually beats the cup',
        body: [
          'Printed cups carry tooling costs and minimum quantities that a single café often cannot justify. A printed sleeve carries neither, works with plain cups already in the cupboard, and can change four times a year without writing off stock.',
          'It also brands a cup you have not committed to. If you switch cup supplier next year, the sleeve very likely still fits, whereas a pallet of printed cups is a pallet of printed cups.',
          'For a café branding its takeaway offer for the first time, this is almost always where to start.',
        ],
      },
      {
        kind: 'prose',
        heading: 'Sizing: circumference, not volume',
        body: [
          'A sleeve is cut to the distance around a cup at the point where a hand grips it, roughly a third of the way down from the rim.',
          'That is not the same as the cup\'s stated volume. Two cups both sold as 12oz can differ by several millimetres in circumference, which is enough for one sleeve to grip and the other to spin.',
          'Send us a cup, or the brand and size code printed on the base. Either removes the guesswork; a stated volume does not.',
        ],
        link: {
          href: '/paper-cup-sleeves/',
          anchor: 'measuring a cup at the grip point',
          sentence: 'The measurement method is set out on {link}.',
        },
      },
      {
        kind: 'compare',
        heading: 'Corrugated or flat board',
        intro:
          'The two constructions feel different and suit different drinks.',
        columns: ['Corrugated', 'Flat board'],
        rows: [
          ['Insulation', 'Real — air channels in the flute do the work', 'Adds grip more than protection'],
          ['Print detail', 'Texture softens fine type and small marks', 'Smooth, holds detail cleanly'],
          ['Cold drinks', 'Absorbs condensation well', 'Can soften unless laminated'],
          ['Storage per thousand', 'Bulkier', 'Very compact'],
          ['Suits', 'Very hot drinks on single-wall cups', 'Iced drinks, tea, double-walled cups'],
        ],
        outro:
          'If your cups are already double-walled, the insulation argument disappears and flat board is usually the better choice.',
      },
      {
        kind: 'bullets',
        heading: 'Designing for a cup that is held',
        intro:
          'A right-handed grip covers roughly a third of the sleeve for the life of the drink:',
        items: [
          'Repeat key elements around the circumference so something always faces the viewer.',
          'Keep the wordmark clear of the glued seam, which sits differently on every cup.',
          'Put a QR code where a thumb does not land, or it will not scan.',
          'Remember that kraft board shifts colour, so check a proof rather than judging from screen.',
          'Leave the design uncluttered — a sleeve is read at arm\'s length by a stranger, not studied.',
        ],
        outro:
          'A single small logo placed once is the most common design mistake, because it faces away as often as towards.',
      },
      {
        kind: 'prose',
        heading: 'How many sizes you actually need',
        body: [
          'One sleeve rarely covers more than two adjacent cup sizes. A sleeve cut for a 12oz cup is slack on an 8oz and will not go over a 16oz.',
          'Most cafés running three cup sizes end up with two sleeves. That is worth planning for rather than discovering after the first order.',
          'It is also an argument for reducing your cup range. Two cup sizes and one sleeve is a simpler operation than three cups and two sleeves, and customers notice the difference far less than you would expect.',
        ],
        link: {
          href: '/paper-cups/sizes/',
          anchor: 'which cup volumes cover which drinks',
          sentence: 'If you are reconsidering your sizes, {link} sets out what each one is for.',
        },
      },
      {
        kind: 'prose',
        heading: 'Using seasonal designs well',
        body: [
          'The cheapest branding change a café can make is a new sleeve design on the same cups. There is no tooling, no cup stock to clear and no change at the counter.',
          'Digital printing makes several designs in one run affordable, so a set of four seasonal sleeves is genuinely achievable for an independent.',
          'The one thing worth avoiding is printing a year on them. Undated artwork can be used again; dated artwork becomes waste on 1 January.',
        ],
      },
      {
        kind: 'prose',
        heading: 'What to send when you enquire',
        body: [
          'A cup from your current stock, the number of sizes you carry, your realistic annual usage, and whether your trade is mostly hot or mostly iced.',
          'Those four things let us quote properly. Without them, any price is a guess, and the most common consequence is a sleeve that does not grip the cups you actually use.',
        ],
      },
      {
        kind: 'bullets',
        heading: 'Mistakes worth avoiding on a first sleeve order',
        intro:
          'These come up often enough to be worth naming:',
        items: [
          'Ordering to a stated cup volume instead of a measured circumference, so the sleeve spins.',
          'Placing a single logo once, which faces away from the viewer about half the time.',
          'Choosing corrugated for the insulation on cups that are already double-walled.',
          'Printing a year onto a seasonal design that would otherwise have run again.',
          'Buying a year of stock before knowing how many sleeves a week you actually use.',
        ],
        outro:
          'All five are cheap to avoid at quote stage and expensive to find out about on a pallet of finished sleeves.',
      },
      {
        kind: 'prose',
        heading: 'When it is worth moving on to printed cups',
        body: [
          'Sleeves stop being the obvious answer at a certain volume. Once a group is getting through enough cups that the tooling and minimum quantity on a printed cup are spread thinly, the maths changes.',
          'The crossover is not a fixed number, because it depends on the print method, the number of sizes carried and how often the design changes. A business changing its artwork four times a year stays with sleeves far longer than one running a single design.',
          'The useful move is to ask for both prices against your genuine annual usage rather than your next order. That comparison usually settles it in one email.',
        ],
      },
      {
        kind: 'steps',
        heading: 'Ordering a first run of sleeves',
        intro: 'Four steps, and the first one removes most of the risk.',
        steps: [
          {
            title: 'Post us a cup from your current stock',
            body: 'Not a size, and not a photograph. The circumference at the grip point is what the sleeve is cut to.',
          },
          {
            title: 'Decide corrugated or flat board',
            body: 'Corrugated for very hot drinks on single-wall cups; flat board where the cup already insulates or the drink is cold.',
          },
          {
            title: 'Lay the design out to repeat',
            body: 'A hand covers roughly a third of the sleeve, so key elements need to appear more than once around it.',
          },
          {
            title: 'Order to a season, not a year',
            body: 'Count a typical week first. Most cafés are surprised by their actual usage in one direction or the other.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Will a sleeve fit cups we already buy?',
        a: 'That is the intention, and it is why we ask for a cup rather than a size. The sleeve is cut to the circumference of your actual cup rather than to a nominal volume.',
      },
      {
        q: 'Do we need sleeves if our cups are double-walled?',
        a: 'Not for heat. Plenty of cafés still use them for branding, because a printed sleeve on a plain double-walled cup is far cheaper than printing the cup itself.',
      },
      {
        q: 'How many sleeves does a café get through?',
        a: 'That depends entirely on how many takeaway hot drinks you sell and whether every one gets a sleeve. Count a typical week before ordering rather than estimating annually — most people are surprised in one direction or the other.',
      },
    ],
  },
];
