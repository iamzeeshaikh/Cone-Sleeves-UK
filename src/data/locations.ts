import type { LocationPage } from './types';

/**
 * UK location pages.
 *
 * Twenty of the suggested locations were dropped rather than published,
 * because each duplicated the search intent of a city already covered:
 * Greater London, Greater Manchester, West Midlands, West Yorkshire,
 * Merseyside, South Yorkshire, Nottinghamshire, Leicestershire,
 * Cambridgeshire and Hampshire all resolve to a city on this list. Publishing
 * both would have split one query across two pages.
 *
 * Every page here is built from something genuinely local: the trade that
 * actually buys this packaging in that place. No page claims an office, a
 * factory, a local team or a guaranteed local delivery time, because none of
 * those exist.
 */

export const LOCATIONS: LocationPage[] = [
  {
    slug: 'cone-sleeves-london',
    place: 'London',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves London | Printed Packaging Supplier',
    seoDescription:
      'Printed cone sleeves and food packaging for London dessert bars, gelaterias and street food traders, delivered UK-wide.',
    h1: 'Custom Cone Sleeves for London Food Businesses',
    intro: [
      'London has more dessert businesses per square mile than anywhere else in the country, and almost all of them share one constraint: there is nowhere to put anything. A Soho dessert bar with a nine-square-metre kitchen cannot take a pallet of packaging, whatever the price per unit.',
      'That shapes what a London order looks like. Flat-packed stock, smaller and more frequent deliveries, and a specification that does not require holding four separate lines.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Storage decides the specification',
        body: [
          'Flat-packed sleeves take a fraction of the space of formed containers. For a site paying central London rent, the difference between stock that stores in a cupboard and stock that needs a corner of the kitchen is a real cost.',
          'It also argues for choosing one sleeve that works across two products rather than the theoretically ideal item for each.',
        ],
        link: {
          href: '/custom-paper-cone-sleeves/',
          anchor: 'lightweight sleeves that store in almost no space',
          sentence: 'Where cupboard space is the binding constraint, {link} are worth looking at first.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Who orders this packaging in London',
        items: [
          'Dessert bars across Shoreditch, Soho and Edgware Road, most trading late and at volume.',
          'Gelaterias and scoop shops in residential high streets, where summer trade is concentrated into a few weeks.',
          'Street food traders at Borough, Camden and Brick Lane markets, buying for one pitch rather than a chain.',
          'Event caterers serving corporate work across the City and Canary Wharf.',
          'Delivery-first kitchens with no shopfront at all, where packaging is the only brand a customer sees.',
        ],
        outro:
          'Delivery-first operators have the strongest case for printed packaging of anyone on this list, because they have no other physical presence.',
      },
      {
        kind: 'prose',
        heading: 'Ordering and artwork',
        body: [
          'Send us the cone or container you already use, along with the quantity you can realistically store. We work from a physical sample wherever possible, and post is more reliable than a description.',
          'Artwork goes onto a die template cut to your product, which we supply before design work starts.',
        ],
      },
      {
        kind: 'callout',
        heading: 'How delivery to London works',
        body: 'Orders are dispatched on national carriers from our production partners and delivered to your London address. We do not run our own vehicles in London and do not offer same-day or timed delivery, so any date we give you is the carrier\'s estimate rather than a guarantee. Congestion charge and low emission zones can affect carrier scheduling into central postcodes.',
      },
    ],
    faqs: [
      {
        q: 'Can you deliver to a central London site with limited access?',
        a: 'Deliveries go by national carrier, so access restrictions, delivery windows and any need for a booked slot are worth telling us about when you order. We can pass instructions to the carrier, though we cannot guarantee a specific time.',
      },
      {
        q: 'We have almost no storage. What is the smallest sensible order?',
        a: 'That depends on the print method rather than a fixed rule — digital printing makes smaller runs workable than a long conventional press does. Tell us your storage limit as well as your usage and we will quote something you can actually take in.',
      },
      {
        q: 'Do you have a London office we can visit?',
        a: 'No. We work by email and phone, and we post physical samples rather than meeting in person. If you need to see and feel a board before committing, ask for samples at quote stage.',
      },
    ],
    recommended: [
      'custom-ice-cream-cone-sleeves',
      'custom-printed-coffee-sleeves',
      'custom-paper-cone-sleeves',
      'custom-take-out-bags',
    ],
    nearby: ['cone-sleeves-essex', 'cone-sleeves-surrey', 'cone-sleeves-kent'],
  },

  {
    slug: 'cone-sleeves-manchester',
    place: 'Manchester',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Manchester | Printed Food Packaging',
    seoDescription:
      'Printed cone sleeves and takeaway packaging for Manchester dessert shops, street food halls and student-trade city cafés.',
    h1: 'Printed Cone Sleeves for Manchester',
    intro: [
      'Manchester\'s food scene runs on two clocks. The Northern Quarter and Ancoats trade late into the night, and the student population between Fallowfield and the city centre moves the whole market twice a year.',
      'Both facts change what packaging you should hold and when you should order it.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'The trades that order here',
        items: [
          'Dessert houses along Wilmslow Road and in Rusholme, many trading past midnight.',
          'Street food halls and market traders, where a pitch shares service space with neighbours.',
          'Cafés serving the university corridor, whose year splits sharply into term and vacation.',
          'Late-night takeaways where a large share of orders now go out by courier.',
        ],
        outro:
          'The student calendar matters more here than almost anywhere: September and January are demand spikes, and July is not.',
      },
      {
        kind: 'prose',
        heading: 'Ordering around a term-time market',
        body: [
          'A business trading mainly to students has two hard peaks and a long quiet summer. Ordering a year\'s packaging in June ties up cash in stock that will not move until autumn.',
          'Splitting an order across two deliveries usually costs a little more per unit and manages the cash flow far better. Ask us to price it both ways.',
        ],
        link: {
          href: '/blog/cone-sleeves-for-ice-cream-shops-and-dessert-brands/',
          anchor: 'how dessert businesses plan a packaging order',
          sentence: 'Our guide to {link} covers estimating quantity without overbuying.',
        },
      },
      {
        kind: 'prose',
        heading: 'Delivery and lead times',
        body: [
          'Stock is dispatched on national carriers to your Manchester address. We do not operate local vehicles and do not offer timed delivery, so treat any date as a carrier estimate.',
          'Lead time is set by the print method and the press schedule rather than by distance, and we confirm it in writing on the quote.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can we split an order across two deliveries?',
        a: 'Often yes, and for a term-time business it usually makes sense. It costs a little more per unit than a single delivery and avoids paying for stock that sits through the summer. Ask us to price both.',
      },
      {
        q: 'How quickly can packaging reach Manchester?',
        a: 'Lead time is dominated by production rather than transit, so it is much the same wherever in Britain you are. We confirm the production lead time on your quote and the carrier adds its own transit time on top.',
      },
    ],
    recommended: [
      'custom-waffle-cone-sleeves',
      'burger-sleeves',
      'custom-food-delivery-bags',
      'custom-fries-trays',
    ],
    nearby: ['cone-sleeves-liverpool', 'cone-sleeves-lancashire', 'cone-sleeves-leeds'],
  },

  {
    slug: 'cone-sleeves-birmingham',
    place: 'Birmingham',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Birmingham | Custom Food Packaging',
    seoDescription:
      'Custom cone sleeves and printed food packaging for Birmingham dessert lounges, city caterers and NEC and arena event traders.',
    h1: 'Custom Cone Sleeves in Birmingham',
    intro: [
      'Birmingham has an unusually strong dessert lounge trade — large late-night venues serving waffles, crepes, milkshakes and cookie dough to sit-in customers rather than passers-by.',
      'That is a different packaging problem from a takeaway kiosk. Presentation matters more, portability matters less, and the item is photographed before it is eaten.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Sit-in dessert service changes the priorities',
        body: [
          'A dessert eaten at a table does not need to survive a walk home. It needs to look right under the lights and hold up while someone photographs it.',
          'That pushes the specification towards trays and presentation boards rather than the deep wraps a walking customer needs.',
        ],
        link: {
          href: '/custom-waffle-trays/',
          anchor: 'trays sized for loaded dessert waffles',
          sentence: 'For a lounge menu built on waffles, {link} are usually the starting point.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Local trades we quote for',
        items: [
          'Dessert lounges across Ladypool Road, Alum Rock and the city centre.',
          'Restaurants in the Balti Triangle adding a takeaway and delivery arm.',
          'Event caterers working the NEC, ICC and Utilita Arena, where volumes arrive in bursts.',
          'Bakeries and sweet centres serving the city\'s large celebration-cake market.',
        ],
        outro:
          'Event caterers here order to a date rather than to a stock level, which changes how far ahead they need to plan.',
      },
      {
        kind: 'prose',
        heading: 'Planning around event dates',
        body: [
          'A caterer working an NEC show knows the date months ahead and needs stock in hand before it, not on it.',
          'Tell us the date at enquiry rather than the quantity alone. We schedule backwards from it and confirm the production lead time in writing.',
        ],
      },
      {
        kind: 'callout',
        heading: 'Delivery to Birmingham',
        body: 'Orders are dispatched on national carriers to your address. We do not have premises or a delivery fleet in the West Midlands, and we do not offer timed or same-day delivery. Any date given is the carrier\'s estimate.',
      },
    ],
    faqs: [
      {
        q: 'We cater at the NEC. How far ahead should we order?',
        a: 'Work back from the show date, not from today. Production lead time is confirmed on your quote, and you want stock in hand well before the date rather than arriving during setup.',
      },
      {
        q: 'Do you supply packaging for sit-in dessert service?',
        a: 'Yes, and it is a different specification from takeaway. Trays and presentation boards suit a table; deep wraps suit a walking customer. Tell us the split and we will quote accordingly.',
      },
    ],
    recommended: [
      'custom-waffle-trays',
      'custom-crepe-trays',
      'custom-dessert-trays',
      'custom-ice-cream-cone-sleeves',
    ],
    nearby: ['cone-sleeves-coventry', 'cone-sleeves-leicester', 'cone-sleeves-nottingham'],
  },

  {
    slug: 'cone-sleeves-leeds',
    place: 'Leeds',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Leeds | Printed Packaging Supplier',
    seoDescription:
      'Printed cone sleeves, trays and takeaway packaging for Leeds cafés, dessert shops, arcade units and city centre food halls.',
    h1: 'Cone Sleeves and Food Packaging for Leeds',
    intro: [
      'Leeds concentrates a great deal of its food trade into a small central area — Trinity, the Corn Exchange, Kirkgate Market and the arcades — where units are small and footfall is heavy.',
      'High turnover in a small space rewards packaging that is quick to assemble and compact to store.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'What tends to matter for Leeds operators',
        items: [
          'Assembly speed, because a queue in an arcade unit backs up quickly.',
          'Flat storage, since units in converted historic buildings rarely have back rooms.',
          'Packaging that photographs well, given how much trade comes from social media.',
          'A specification that copes with both eat-in and courier orders.',
        ],
        outro:
          'Sites that can settle on one sleeve for both service modes save a stock line and a decision at the pass.',
      },
      {
        kind: 'prose',
        heading: 'Assembly time is a real cost',
        body: [
          'A sleeve that takes four seconds to roll rather than two costs a minute for every thirty covers. Across a Saturday in a busy arcade unit that adds up.',
          'Ask for a sample and have the person who will actually use it assemble twenty in a row before you commit to a design.',
        ],
        link: {
          href: '/cone-sleeves/',
          anchor: 'the cone sleeve range and how each type assembles',
          sentence: 'Assembly differs between board weights, which is covered across {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'Artwork and proofing',
        body: [
          'We supply a die template cut to your product before design work begins, so artwork is built on the right shape rather than adjusted afterwards.',
          'A digital proof on the die line follows, and print is scheduled once you have signed it off.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does a sleeve take staff to assemble?',
        a: 'A couple of seconds once they have done a few, though it varies with board weight — heavier board is firmer to roll. It is worth having your own team try a sample before you commit to a specification.',
      },
      {
        q: 'Can one sleeve work for eat-in and delivery?',
        a: 'Sometimes, if the delivery share is modest. Where a lot of orders go by courier, the board that suits a counter often goes soft in a bag, and two specifications work better.',
      },
    ],
    recommended: [
      'custom-cardboard-cone-sleeves',
      'custom-fries-sleeves',
      'burger-sleeves',
      'custom-printed-coffee-sleeves',
    ],
    nearby: ['cone-sleeves-bradford', 'cone-sleeves-sheffield', 'cone-sleeves-manchester'],
  },

  {
    slug: 'cone-sleeves-glasgow',
    place: 'Glasgow',
    kind: 'city',
    nation: 'Scotland',
    seoTitle: 'Cone Sleeves Glasgow | Printed Food Packaging UK',
    seoDescription:
      'Printed cone sleeves and food packaging for Glasgow cafés, ice cream shops and takeaways, with realistic Scottish transit times.',
    h1: 'Cone Sleeves for Glasgow Businesses',
    intro: [
      'Glasgow has one of the oldest ice cream traditions in Britain, built by Italian-Scottish families whose cafés have been trading for generations. Several of them still sell the same cones from the same premises.',
      'Alongside that sits a fast-moving contemporary scene in Finnieston and the Merchant City, which buys packaging on quite different terms.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Two very different customers in one city',
        body: [
          'A long-established café usually wants a plain or single-colour sleeve that fits the cones it has always used, and it wants that supply to stay identical for years.',
          'A newer dessert business wants full-colour artwork, changes it seasonally, and cares more about how it photographs than how it stores.',
        ],
        link: {
          href: '/custom-white-cone-sleeve/',
          anchor: 'plain and single-colour sleeves',
          sentence: 'For a traditional café, {link} keep the cost down without changing the counter.',
        },
      },
      {
        kind: 'callout',
        heading: 'Delivery into Scotland',
        body: 'Scottish addresses are served by the same national carriers, and transit is typically a day longer than for English mainland addresses. Some carriers apply a surcharge to Scottish postcodes. We will tell you what applies to your address when we quote rather than after you order.',
      },
      {
        kind: 'bullets',
        heading: 'Who we quote for in Glasgow',
        items: [
          'Long-established ice cream cafés with a fixed cone and a fixed supplier history.',
          'Contemporary dessert bars in Finnieston and the West End.',
          'Takeaways and chip shops, where grease-resistant board is the whole conversation.',
          'Event caterers working the SEC and the city\'s festival programme.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does delivery to Glasgow cost more?',
        a: 'Some carriers apply a surcharge to Scottish postcodes and transit is often a day longer than to English mainland addresses. We confirm what applies to your specific postcode on the quote rather than leaving it as a surprise.',
      },
      {
        q: 'Can you match a sleeve to cones we have used for years?',
        a: 'That is the usual request from established cafés. Post us two or three of the cones and the die is cut to their shape, so nothing about your counter has to change.',
      },
    ],
    recommended: [
      'custom-white-cone-sleeve',
      'custom-ice-cream-cone-wrappers',
      'custom-fish-chips-paper',
      'french-fry-boxes',
    ],
    nearby: ['cone-sleeves-edinburgh', 'cone-sleeves-newcastle', 'cone-sleeves-liverpool'],
  },

  {
    slug: 'cone-sleeves-liverpool',
    place: 'Liverpool',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Liverpool | Custom Printed Packaging',
    seoDescription:
      'Custom cone sleeves and street food packaging for Liverpool traders, waterfront caterers and Baltic Triangle kitchens.',
    h1: 'Custom Cone Sleeves in Liverpool',
    intro: [
      'Liverpool\'s food trade clusters around two very different demands: a waterfront and city centre that swings hard with tourism and events, and a permanent independent scene in the Baltic Triangle.',
      'The first buys in bursts around fixtures and cruise arrivals. The second buys steadily and cares a great deal about how the packaging looks.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Demand here is event-driven',
        items: [
          'Match days at Anfield and Goodison, which concentrate street food trade into a few hours.',
          'Cruise arrivals at the Pier Head, which put large numbers of visitors ashore on fixed dates.',
          'Festival and event programming across the waterfront through the summer.',
          'A steady independent trade in the Baltic Triangle and Bold Street, largely unaffected by any of it.',
        ],
        outro:
          'Traders working fixtures should hold enough stock for a peak weekend rather than an average one.',
      },
      {
        kind: 'prose',
        heading: 'Stock levels for a spiky trade',
        body: [
          'A business whose busiest day is five times its quietest cannot order to an average. Running out on a match day costs far more than holding a little extra board.',
          'Work out your peak-day usage, multiply by the number of peak days between orders, and add a margin. That is a more useful basis than a monthly average.',
        ],
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'estimating quantity for event trading',
          sentence: 'We set out {link} with a worked example.',
        },
      },
      {
        kind: 'prose',
        heading: 'Artwork for outdoor trading',
        body: [
          'Packaging used outdoors is seen in daylight, in rain and under temporary lighting. Designs with strong contrast survive all three; subtle tonal work does not.',
          'If your trade is mostly outdoor pitches, it is worth checking a printed sample outside rather than under shop lighting.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much stock should we hold for match days?',
        a: 'Base it on peak-day usage rather than a monthly average. Running out during a fixture costs far more than the carrying cost of holding extra flat-packed stock.',
      },
      {
        q: 'Will printed packaging hold up outdoors?',
        a: 'A laminated finish handles rain and handling considerably better than an unlaminated one. If you trade outdoors regularly, it is worth specifying rather than treating as an upgrade.',
      },
    ],
    recommended: [
      'cone-fries-packaging',
      'custom-chicken-cone-sleeves',
      'custom-cardboard-cone-sleeves',
      'custom-snack-trays',
    ],
    nearby: ['cone-sleeves-manchester', 'cone-sleeves-lancashire', 'cone-sleeves-glasgow'],
  },

  {
    slug: 'cone-sleeves-bristol',
    place: 'Bristol',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Bristol | Recyclable Food Packaging',
    seoDescription:
      'Printed cone sleeves for Bristol independents, with unlaminated and recyclable-stream options and honest disposal advice.',
    h1: 'Cone Sleeves for Bristol Food Businesses',
    intro: [
      'Bristol customers ask harder questions about packaging than customers almost anywhere else, and Bristol operators know it. "Is it recyclable?" is asked across the counter, not just in a supplier meeting.',
      'That makes it worth being precise rather than reassuring, because a vague claim will be challenged.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Precise beats reassuring',
        body: [
          'A sleeve marked recyclable that local facilities do not accept is worse than one with no marking, because it tells the customer something untrue.',
          'We will tell you exactly what board and finish a quoted item uses. Checking that against what your waste contractor and your customers\' bins actually take is the step that makes a claim honest.',
        ],
        link: {
          href: '/custom-eco-friendly-cone-sleeves/',
          anchor: 'unlaminated sleeves and what can genuinely be claimed',
          sentence: 'The trade-offs are set out on {link}, including where the specification costs you performance.',
        },
      },
      {
        kind: 'bullets',
        heading: 'The Bristol trades that order most',
        items: [
          'Independent cafés along Gloucester Road and North Street, many with an explicit environmental position.',
          'Street food operators at Wapping Wharf and Cargo, trading from converted containers with minimal storage.',
          'Ice cream businesses on the Harbourside, whose trade is concentrated into good weather.',
          'Zero-waste and refill shops needing packaging that matches their proposition.',
        ],
        outro:
          'Several of these will want to see the specification in writing rather than take an assurance, which is a reasonable request.',
      },
      {
        kind: 'callout',
        heading: 'What we will and will not claim',
        body: 'We confirm board grade, lining and finish in writing on your quote so you can verify it independently. We do not publish blanket recyclability or compostability claims, because whether a given item is actually recycled depends on collection arrangements we do not control.',
        pending: true,
      },
    ],
    faqs: [
      {
        q: 'Can you supply genuinely recyclable cone sleeves?',
        a: 'We can supply unlaminated sleeves on uncoated board, which is the specification most likely to be accepted in an ordinary paper stream. Whether it is recycled in practice depends on local collection, and we would rather say that than overstate it.',
      },
      {
        q: 'Will an unlaminated sleeve hold up on a hot day?',
        a: 'Less well than a laminated one. Melting ice cream reaches an unlaminated board faster and it softens sooner. For harbourside trading in August that is a genuine trade-off rather than a technicality.',
      },
    ],
    recommended: [
      'custom-eco-friendly-cone-sleeves',
      'custom-paper-cone-sleeves',
      'eco-friendly-beverage-sleeves',
      'recyclable-paper-cups',
    ],
    nearby: ['cone-sleeves-gloucestershire', 'cone-sleeves-cardiff', 'cone-sleeves-southampton'],
  },

  {
    slug: 'cone-sleeves-sheffield',
    place: 'Sheffield',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Sheffield | Printed Food Packaging',
    seoDescription:
      'Printed cone sleeves and food packaging for Sheffield cafés, Kelham Island taproom kitchens and student-market takeaways.',
    h1: 'Printed Cone Sleeves for Sheffield',
    intro: [
      'Sheffield supports two large universities and a food scene that has grown around the regenerated industrial quarters — Kelham Island and Neepsend in particular, where former workshops have become kitchens and taprooms.',
      'Taproom food trading is its own packaging problem, because the venue serves the drink and the trader serves the food.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Trading inside someone else\'s venue',
        body: [
          'A food trader operating from a taproom kitchen is serving customers who are seated at the venue\'s tables with the venue\'s glasses. The packaging is the trader\'s only branded surface.',
          'It also has to work on a table rather than in a hand, which points towards trays and boards rather than wraps.',
        ],
        link: {
          href: '/custom-cardboard-food-trays/',
          anchor: 'general-purpose trays for a changing menu',
          sentence: 'Traders whose menu changes weekly usually do better with {link} than with dish-specific containers.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Sheffield trades we quote for',
        items: [
          'Kitchen residencies inside taprooms and bars, often with a menu that changes monthly.',
          'Cafés serving the student areas around Broomhill and Ecclesall Road.',
          'Independent dessert and bubble tea shops in the city centre.',
          'Market traders at Moor Market and seasonal events.',
        ],
        outro:
          'A residency that changes its menu regularly is better served by two general sizes than by five specific ones.',
      },
      {
        kind: 'prose',
        heading: 'Ordering when the menu is not fixed',
        body: [
          'Specifying packaging around a dish that will be replaced in six weeks leaves you with stock you cannot use.',
          'The practical answer is to specify for the wettest and heaviest thing you are likely to serve, in two sizes, and accept that it is not ideal for any single dish.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Our menu changes every month. What should we order?',
        a: 'Two general sizes in a grease-resistant board, specified for the heaviest and wettest thing you might serve. It will not be ideal for any one dish and it will not become dead stock when the menu moves on.',
      },
      {
        q: 'Can packaging be branded to us rather than the venue?',
        a: 'That is usually the point of ordering it. For a kitchen residency, the packaging is often the only thing carrying your name in someone else\'s room.',
      },
    ],
    recommended: [
      'custom-cardboard-food-trays',
      'custom-fries-trays',
      'burger-sleeves',
      'custom-greaseproof-paper',
    ],
    nearby: ['cone-sleeves-leeds', 'cone-sleeves-nottingham', 'cone-sleeves-bradford'],
  },

  {
    slug: 'cone-sleeves-edinburgh',
    place: 'Edinburgh',
    kind: 'city',
    nation: 'Scotland',
    seoTitle: 'Cone Sleeves Edinburgh | Festival Food Packaging',
    seoDescription:
      'Printed cone sleeves and street food packaging for Edinburgh traders, with August Festival volumes planned properly ahead.',
    h1: 'Cone Sleeves for Edinburgh Traders',
    intro: [
      'Edinburgh has a packaging problem no other British city has in quite the same form: for three weeks in August the population of the city centre roughly doubles, and food traders do a meaningful share of their annual turnover.',
      'Everything about ordering here is shaped by that one month.',
    ],
    sections: [
      {
        kind: 'steps',
        heading: 'Planning a Festival order',
        intro:
          'August volumes are not a busy week — they are a different business for three weeks.',
        steps: [
          {
            title: 'Estimate from a peak day, not an average',
            body: 'Take your busiest ordinary Saturday and work out what a Festival day looks like against it. Most traders find it is a multiple, not a percentage.',
          },
          {
            title: 'Order in spring, not in July',
            body: 'Every trader in the city is ordering for the same three weeks. Press capacity and carrier schedules both tighten.',
          },
          {
            title: 'Confirm the lead time in writing',
            body: 'We put the production lead time on your quote, and Scottish transit typically adds a day over English mainland delivery.',
          },
          {
            title: 'Sort storage before the stock arrives',
            body: 'Festival volumes of packaging need somewhere to live. Flat-packed stock helps considerably here.',
          },
        ],
      },
      {
        kind: 'prose',
        heading: 'Trading the rest of the year',
        body: [
          'The Old Town and Grassmarket support a steady tourist trade outside August, and the Bruntsfield and Stockbridge areas trade to residents year round.',
          'Packaging that works for a Festival pitch usually works for the rest of the year too, so most traders run one specification and simply order more of it in spring.',
        ],
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'ordering packaging around a fixed event window',
          sentence: 'The general approach is covered in {link}.',
        },
      },
      {
        kind: 'callout',
        heading: 'Delivery into Edinburgh',
        body: 'Orders reach Edinburgh on national carriers, with transit typically a day longer than for English mainland addresses and a possible carrier surcharge on Scottish postcodes. City centre access restrictions during August can affect carrier scheduling — worth flagging when you order.',
      },
    ],
    faqs: [
      {
        q: 'When should we order for the Festival?',
        a: 'Spring rather than July. Every trader in the city needs stock for the same three weeks, and both press capacity and carrier schedules tighten as August approaches.',
      },
      {
        q: 'How much more packaging do Festival volumes need?',
        a: 'Most traders find it is a multiple of a normal peak day rather than a modest uplift. Base the estimate on your busiest ordinary Saturday and scale from there rather than from a monthly average.',
      },
    ],
    recommended: [
      'cone-fries-packaging',
      'custom-chicken-cone-sleeves',
      'custom-ice-cream-cone-sleeves',
      'custom-snack-trays',
    ],
    nearby: ['cone-sleeves-glasgow', 'cone-sleeves-newcastle', 'cone-sleeves-leeds'],
  },

  {
    slug: 'cone-sleeves-leicester',
    place: 'Leicester',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Leicester | Custom Food Packaging',
    seoDescription:
      'Custom cone sleeves and sweet packaging for Leicester dessert shops, sweet centres and Golden Mile food businesses by weight.',
    h1: 'Cone Sleeves and Food Packaging for Leicester',
    intro: [
      'Leicester\'s Golden Mile along Belgrave Road supports a concentration of sweet centres, dessert shops and snack businesses that has few parallels in Britain.',
      'That trade has its own packaging needs, and they are not the same as a high street ice cream shop\'s.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Sweet centres buy by weight, not by portion',
        body: [
          'Mithai and dry snacks are sold by weight from a counter, which means the packaging is sized to a price band rather than to a serving.',
          'That changes the question from "how big is a portion" to "what weight bands do you sell", and the answer decides the bag or box sizes you need.',
        ],
        link: {
          href: '/custom-candy-bags/',
          anchor: 'bags sized to weight bands rather than portions',
          sentence: 'For counter service sold by weight, {link} are the relevant format.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Leicester businesses we quote for',
        items: [
          'Sweet centres and mithai shops along Belgrave Road, selling by weight from open counters.',
          'Dessert cafés and bubble tea shops in the city centre and Highfields.',
          'Snack and namkeen businesses packing for retail as well as counter sale.',
          'Event caterers serving the city\'s large wedding and celebration market.',
        ],
        outro:
          'The wedding and celebration market here orders in large one-off quantities to fixed dates, which needs earlier planning than a rolling stock order.',
      },
      {
        kind: 'prose',
        heading: 'Ordering for a celebration market',
        body: [
          'A caterer supplying weddings orders to a date and often to a bespoke design, sometimes with names or dates printed on it.',
          'Short digital runs suit that well. Send the quantity and the date together and we will tell you what is realistic rather than quoting a general lead time.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you print a small run for a single wedding?',
        a: 'Short runs are normal for celebration work and digital printing makes a few hundred units workable. Send the quantity and the date and we will confirm what can be achieved.',
      },
      {
        q: 'How should packaging be sized for goods sold by weight?',
        a: 'To your price bands rather than to a portion. A bag that holds slightly more than your standard 250g band looks half empty, which undermines the sale.',
      },
    ],
    recommended: [
      'custom-candy-bags',
      'custom-snack-bags',
      'custom-dessert-sleeves',
      'custom-take-out-bags',
    ],
    nearby: ['cone-sleeves-nottingham', 'cone-sleeves-birmingham', 'cone-sleeves-coventry'],
  },

  {
    slug: 'cone-sleeves-nottingham',
    place: 'Nottingham',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Nottingham | Printed Packaging Supplier',
    seoDescription:
      'Printed cone sleeves and takeaway packaging for Nottingham dessert bars, Hockley independents and student-trade cafés.',
    h1: 'Cone Sleeves for Nottingham Businesses',
    intro: [
      'Nottingham\'s independent trade is concentrated in Hockley and the Lace Market, where small units and a design-conscious customer base put more weight on how packaging looks than most places do.',
      'Alongside that, two universities give the city one of the largest student populations relative to its size in the country.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'What Nottingham operators tend to ask for',
        items: [
          'Packaging that looks considered rather than generic, particularly in Hockley.',
          'Kraft and uncoated finishes, which suit the area\'s independent positioning.',
          'Quantities that a small unit can store between deliveries.',
          'A design that works across a menu rather than one item.',
        ],
        outro:
          'Kraft is the most requested board here, and it comes with real constraints on colour that are worth understanding first.',
      },
      {
        kind: 'prose',
        heading: 'Kraft looks right and prints awkwardly',
        body: [
          'Unbleached board reads as independent and unmanufactured, which is exactly the positioning much of the Hockley trade wants.',
          'The cost is colour accuracy: inks sit over a warm brown base, so blues go muddy and pale tints nearly vanish. Designs made for kraft work; designs adapted to it rarely do.',
        ],
        link: {
          href: '/kraft-paper-cups/',
          anchor: 'how artwork behaves on unbleached brown board',
          sentence: 'The detail is set out on {link}, and applies equally to sleeves and bags.',
        },
      },
      {
        kind: 'prose',
        heading: 'Ordering around the university year',
        body: [
          'A business trading substantially to students sees demand fall away between June and September.',
          'Splitting a year\'s order across two deliveries avoids paying for stock that sits through the summer. We will price it both ways if you ask.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Will our brand colours work on kraft?',
        a: 'They will shift warmer and darker, and pale tints can disappear. If a colour has to be exact, either a white underbase or a white board is needed — and both are honest options rather than upsells.',
      },
      {
        q: 'Can we order twice a year rather than once?',
        a: 'Yes, and for a student-trade business it usually makes sense. It costs a little more per unit than a single run and avoids financing stock through a quiet summer.',
      },
    ],
    recommended: [
      'kraft-coffee-cups',
      'custom-kraft-food-bags',
      'custom-paper-cone-sleeves',
      'custom-printed-coffee-sleeves',
    ],
    nearby: ['cone-sleeves-leicester', 'cone-sleeves-sheffield', 'cone-sleeves-birmingham'],
  },

  {
    slug: 'cone-sleeves-cardiff',
    place: 'Cardiff',
    kind: 'city',
    nation: 'Wales',
    seoTitle: 'Cone Sleeves Cardiff | Printed Packaging for Wales',
    seoDescription:
      'Printed cone sleeves and food packaging for Cardiff businesses, including bilingual English and Welsh artwork planned properly.',
    h1: 'Cone Sleeves for Cardiff and South Wales',
    intro: [
      'Cardiff businesses regularly need something no other city on this list asks for: packaging that carries Welsh as well as English.',
      'That is a design constraint rather than a printing one, and it is much easier to solve before the artwork is laid out than after.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Bilingual artwork needs planning, not translating',
        body: [
          'Welsh text runs longer than the equivalent English in most cases, so a layout designed for one language and then translated tends to break.',
          'Setting both languages from the start, with the space each needs, avoids a design that works in one and looks cramped in the other.',
        ],
        link: {
          href: '/artwork-guidelines/',
          anchor: 'how to supply artwork with multiple text layers',
          sentence: 'Our {link} covers supplying files with separate language layers.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Cardiff trades we supply',
        items: [
          'Cafés and dessert shops across the city centre, Cathays and Pontcanna.',
          'Event caterers working the Principality Stadium and Cardiff Bay, whose demand spikes around fixtures.',
          'Independent bakeries and delis serving Riverside and Roath markets.',
          'Takeaways along City Road and Albany Road.',
        ],
        outro:
          'Stadium fixtures drive the same peak-day planning problem that match days create elsewhere.',
      },
      {
        kind: 'callout',
        heading: 'Delivery into Wales',
        body: 'Cardiff and the South Wales corridor are served by national carriers on much the same transit as English mainland addresses. More rural Welsh postcodes can take longer and may carry a carrier surcharge; we confirm what applies to your postcode when we quote.',
      },
    ],
    faqs: [
      {
        q: 'Can packaging be printed in Welsh and English?',
        a: 'Yes, and it is worth planning the layout bilingually from the start. Welsh text is usually longer than the English equivalent, so a design laid out in one language and translated afterwards tends not to fit.',
      },
      {
        q: 'Is delivery to Wales slower?',
        a: 'To Cardiff and the South Wales corridor, generally not. More rural Welsh postcodes can take longer and some carriers apply a surcharge, which we confirm against your specific address.',
      },
    ],
    recommended: [
      'custom-ice-cream-cone-sleeves',
      'custom-printed-coffee-sleeves',
      'custom-take-out-bags',
      'custom-greaseproof-paper',
    ],
    nearby: ['cone-sleeves-bristol', 'cone-sleeves-gloucestershire', 'cone-sleeves-southampton'],
  },

  {
    slug: 'cone-sleeves-newcastle',
    place: 'Newcastle',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Newcastle | Printed Takeaway Packaging',
    seoDescription:
      'Printed cone sleeves and late-night takeaway packaging for Newcastle traders, built for volume and cold-weather trading.',
    h1: 'Cone Sleeves for Newcastle Businesses',
    intro: [
      'Newcastle\'s late-night trade is among the busiest in the country for its size, and it is concentrated into a small area around the Bigg Market and the Quayside.',
      'Packaging bought for that trade is bought on volume, speed and how well it holds up in someone\'s hands at two in the morning.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Late-night service is a volume problem',
        body: [
          'A takeaway serving several hundred customers in three hours cannot afford packaging that needs careful assembly. Anything that takes an extra second per order costs real time.',
          'It also cannot afford to run out, so peak-night usage rather than weekly average is the number to plan stock against.',
        ],
        link: {
          href: '/french-fry-boxes/',
          anchor: 'scoop formats that fill straight from a fryer basket',
          sentence: 'For speed at the counter, {link} fill faster than anything else in the range.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What matters for this trade',
        items: [
          'Filling speed — an open scoop beats a box that needs forming.',
          'Grease resistance, because portions sit before they are eaten.',
          'Enough rigidity that a portion survives being carried while its owner is distracted.',
          'Stock levels planned against a Friday night, not a Tuesday.',
        ],
        outro:
          'Cold weather also matters more here than most places: food cools fast outdoors, and open formats cool fastest.',
      },
      {
        kind: 'prose',
        heading: 'Open formats against closed ones in winter',
        body: [
          'An open scoop keeps chips crisp by letting steam escape, and it also lets heat escape. On a cold night that trade goes the other way.',
          'A vented closed carton is the usual compromise: it holds heat better than an open scoop while still letting enough steam out to avoid sogginess.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should we use open or closed containers for late-night trade?',
        a: 'A vented closed carton is usually the most workable compromise outdoors in winter — it holds heat better than an open scoop while still letting steam escape. Open formats keep food crisper indoors.',
      },
      {
        q: 'How do we avoid running out on a busy night?',
        a: 'Plan stock against your peak night rather than a weekly average. Flat-packed packaging stores compactly enough that carrying a margin costs very little.',
      },
    ],
    recommended: [
      'french-fry-boxes',
      'fried-chicken-packaging',
      'custom-fries-sleeves',
      'burger-sleeves',
    ],
    nearby: ['cone-sleeves-edinburgh', 'cone-sleeves-leeds', 'cone-sleeves-bradford'],
  },

  {
    slug: 'cone-sleeves-coventry',
    place: 'Coventry',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Coventry | Custom Printed Packaging',
    seoDescription:
      'Custom cone sleeves and food packaging for Coventry cafés, campus caterers and the city\'s delivery-led kitchen operators.',
    h1: 'Custom Cone Sleeves in Coventry',
    intro: [
      'Coventry\'s food trade leans more heavily on delivery than most cities its size, helped by a compact geography and two large university campuses within easy reach of the centre.',
      'Packaging bought for delivery has to survive a journey it has no control over, which is a materially different requirement from counter service.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Delivery packaging is judged on arrival, not despatch',
        body: [
          'Food that looks correct leaving the kitchen can arrive twenty minutes later steamed soft and slid to one side of its container.',
          'Nothing about that is visible to the kitchen, which is why delivery-led businesses benefit from testing their own packaging by ordering from themselves.',
        ],
        link: {
          href: '/custom-food-delivery-bags/',
          anchor: 'sealed bags that keep an order upright in transit',
          sentence: 'The bag matters as much as the container, which is covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What delivery changes',
        items: [
          'Open formats stop working — chips migrate and portions tip.',
          'Venting becomes necessary, or hot food steams itself soft.',
          'Sealed closures matter, both for spillage and for customer confidence.',
          'The packaging is the entire brand experience, since there is no shopfront.',
        ],
        outro:
          'A delivery-only kitchen has more reason to invest in printed packaging than almost any other business type.',
      },
      {
        kind: 'prose',
        heading: 'Campus catering demand',
        body: [
          'Both universities generate substantial catering volume during term, with a marked drop over the summer.',
          'As elsewhere, splitting an order across the academic year avoids financing stock through the quiet months.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What changes when most of our orders are delivered?',
        a: 'Open formats stop working, venting becomes necessary to stop food steaming, and the bag and closure matter as much as the container. It is worth ordering from yourself to see what actually arrives.',
      },
      {
        q: 'Is printed packaging worth it for a delivery-only kitchen?',
        a: 'More than for almost any other business, because it is the only physical thing your customer ever sees from you. There is no shopfront doing that work.',
      },
    ],
    recommended: [
      'custom-food-delivery-bags',
      'custom-bento-sleeves',
      'custom-combo-meal-trays',
      'fried-chicken-packaging',
    ],
    nearby: ['cone-sleeves-birmingham', 'cone-sleeves-leicester', 'cone-sleeves-oxford'],
  },

  {
    slug: 'cone-sleeves-bradford',
    place: 'Bradford',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Bradford | Printed Food Packaging',
    seoDescription:
      'Printed food packaging for Bradford restaurants, sweet centres and takeaways, including bulk and celebration catering orders.',
    h1: 'Printed Food Packaging for Bradford',
    intro: [
      'Bradford has one of the strongest South Asian restaurant and sweet-centre trades in Britain, and a substantial catering market serving weddings and community events.',
      'Both buy packaging in patterns that differ from an ordinary high street: larger quantities, more one-off runs, and a strong emphasis on presentation for celebration orders.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Who orders here',
        items: [
          'Sweet centres selling mithai and dry snacks by weight across the city.',
          'Restaurants running substantial takeaway and delivery arms alongside dining rooms.',
          'Wedding and event caterers ordering to fixed dates, often in large volumes.',
          'Bakeries and grocers packing their own products for retail.',
        ],
        outro:
          'Celebration catering orders are date-driven and often bespoke, which needs a different lead time conversation from rolling stock.',
      },
      {
        kind: 'prose',
        heading: 'Large one-off orders need earlier planning',
        body: [
          'A wedding caterer supplying several hundred guests may need more packaging for one event than a café uses in a quarter, and it has to arrive before a fixed date.',
          'Send the date with the quantity. We schedule production backwards from it and confirm the lead time in writing rather than quoting a general figure.',
        ],
        link: {
          href: '/custom-dessert-sleeves/',
          anchor: 'presentation sleeves for celebration desserts',
          sentence: 'For sweets presented individually at an event, {link} suit better than bulk packaging.',
        },
      },
      {
        kind: 'prose',
        heading: 'Retail packing adds extra requirements',
        body: [
          'Goods packed for a shelf rather than sold across a counter need weight, ingredients and allergen information that counter sales do not.',
          'That has to be planned into the artwork rather than added afterwards, so tell us at quote stage if any of the packaging is for retail sale.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you handle a large one-off order for an event?',
        a: 'Yes, and the date matters more than the quantity. Send both together so production can be scheduled backwards from the event rather than forwards from the order.',
      },
      {
        q: 'What changes if we pack for retail rather than the counter?',
        a: 'Retail packs carry labelling requirements that counter sales do not — weight, ingredients and allergens among them. That needs a reserved area in the artwork, so flag it before design work starts.',
      },
    ],
    recommended: [
      'custom-dessert-sleeves',
      'custom-take-out-bags',
      'custom-snack-bags',
      'custom-bakery-trays',
    ],
    nearby: ['cone-sleeves-leeds', 'cone-sleeves-sheffield', 'cone-sleeves-manchester'],
  },

  {
    slug: 'cone-sleeves-southampton',
    place: 'Southampton',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Southampton | Printed Food Packaging',
    seoDescription:
      'Printed cone sleeves and catering packaging for Southampton businesses, including cruise terminal and waterfront trade.',
    h1: 'Cone Sleeves for Southampton',
    intro: [
      'Southampton\'s food trade has an unusual rhythm set by the cruise terminals. Ship turnaround days put several thousand extra people into the city at once, on dates known months in advance.',
      'For traders near the waterfront that is a schedule to plan stock around rather than a surprise.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Known dates make planning easier, not harder',
        body: [
          'Unlike weather-driven seaside trade, cruise turnaround dates are published well ahead. A trader can look at the calendar and order against it.',
          'That is a genuine advantage over most seasonal businesses, provided the ordering actually happens in advance rather than the week before.',
        ],
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'ordering against a known calendar of dates',
          sentence: 'The approach is much the same as {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Southampton trades we supply',
        items: [
          'Waterfront and Ocean Village cafés trading to visitors and residents.',
          'Ice cream and dessert vendors along the common and the parks in summer.',
          'City centre takeaways serving a large student population.',
          'Event caterers working the boat show and other waterfront events.',
        ],
        outro:
          'Outdoor and waterfront trading argues for a laminated finish, because wind-driven rain reaches packaging that would stay dry inland.',
      },
      {
        kind: 'prose',
        heading: 'Coastal trading is harder on packaging',
        body: [
          'Salt air, wind and rain reach outdoor packaging in a way they do not inland. Unlaminated board absorbs moisture from the air alone on a damp day.',
          'For a permanent outdoor pitch, a laminated finish is worth specifying rather than treating as optional.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does coastal trading need different packaging?',
        a: 'A laminated finish holds up considerably better outdoors, because damp air alone softens unlaminated board over a day. For a permanent outdoor pitch it is worth specifying from the start.',
      },
      {
        q: 'How far ahead should we order for cruise turnaround days?',
        a: 'The dates are published well in advance, so order against the calendar rather than reacting. Production lead time is confirmed on your quote and should be treated as the deadline.',
      },
    ],
    recommended: [
      'custom-ice-cream-cone-sleeves',
      'custom-cardboard-cone-sleeves',
      'custom-fish-chips-paper',
      'custom-printed-coffee-sleeves',
    ],
    nearby: ['cone-sleeves-portsmouth', 'cone-sleeves-bristol', 'cone-sleeves-reading'],
  },

  {
    slug: 'cone-sleeves-portsmouth',
    place: 'Portsmouth',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Portsmouth | Seaside Food Packaging',
    seoDescription:
      'Printed cone sleeves and seaside packaging for Portsmouth and Southsea traders, specified for outdoor and summer trading.',
    h1: 'Cone Sleeves for Portsmouth and Southsea',
    intro: [
      'Southsea seafront is a classic British seaside trade: intense in good weather, quiet in bad, and almost entirely outdoors.',
      'That means packaging has to cope with wind, sun and salt air, and stock has to be planned against a season rather than a year.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'What seafront trading does to packaging',
        items: [
          'Wind catches light board and lifts unweighted items straight off a counter.',
          'Direct sun on a display softens anything unlaminated over an afternoon.',
          'Salt air keeps humidity high even on dry days.',
          'Ice cream melts faster, so drip control matters more than inland.',
        ],
        outro:
          'A deeper wrap and a laminated finish answer most of this at once.',
      },
      {
        kind: 'prose',
        heading: 'Deeper wraps for hot days',
        body: [
          'A short sleeve that works perfectly well in a shaded high street is not enough on a seafront in August, when melt runs down the outside faster than a customer can keep up.',
          'Seaside vendors typically run a deeper wrap in summer and a shorter one out of season, from the same artwork.',
        ],
        link: {
          href: '/custom-ice-cream-cone-wrappers/',
          anchor: 'deeper wraps that catch melt on hot days',
          sentence: 'The depth comparison is set out on {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'Ordering for a season',
        body: [
          'Seaside trade concentrates into roughly four months, and stock ordered in March has to last through it.',
          'Estimate from your busiest week rather than your average one, and remember that a good August can double the figure a normal summer suggests.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Should seaside packaging be laminated?',
        a: 'For outdoor trading, generally yes. Sun, wind and humid salt air all work on unlaminated board, and a display that looks tired by mid-afternoon undermines the sale.',
      },
      {
        q: 'How much stock should we hold for the summer?',
        a: 'Estimate from your busiest week rather than an average one. A good August can run well ahead of what a normal summer suggests, and running out in peak season is expensive.',
      },
    ],
    recommended: [
      'custom-ice-cream-cone-wrappers',
      'custom-waffle-cone-sleeves',
      'french-fry-boxes',
      'custom-fish-chips-paper',
    ],
    nearby: ['cone-sleeves-southampton', 'cone-sleeves-surrey', 'cone-sleeves-reading'],
  },

  {
    slug: 'cone-sleeves-reading',
    place: 'Reading',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Reading | Corporate Catering Packaging',
    seoDescription:
      'Printed packaging for Reading and Thames Valley caterers, built around office lunch delivery and corporate contract work.',
    h1: 'Printed Packaging for Reading and the Thames Valley',
    intro: [
      'Reading sits at the centre of the Thames Valley office corridor, and a large share of its food trade is corporate: lunch delivery, meeting catering and contract canteens rather than passing footfall.',
      'Corporate catering has requirements a high street café never encounters.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Corporate catering is judged on the unpacking',
        body: [
          'A platter delivered to a meeting room is unpacked in front of the client who ordered it. Packaging that looks tidy at that moment does a job no high street sale requires.',
          'It also has to survive a car journey and being carried through a building, sometimes stacked.',
        ],
        link: {
          href: '/custom-sandwich-trays/',
          anchor: 'platter trays with a rim built for stacking',
          sentence: 'The stacking requirement is covered on {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'What corporate contracts ask for',
        items: [
          'Allergen and dietary information presented clearly, usually on a separate card.',
          'Platters that stack for delivery without crushing the layer below.',
          'Consistent presentation across every order, because the client compares them.',
          'Packaging that can carry the caterer\'s branding into a client building.',
        ],
        outro:
          'A separate allergen card is usually more practical than printed information, because menus change per order.',
      },
      {
        kind: 'prose',
        heading: 'Ordering against a contract',
        body: [
          'Contract catering gives a predictable volume, which makes longer print runs economic in a way ad-hoc trade does not.',
          'If you have a contract with a known term, tell us the annual volume rather than the first order. It usually changes which print method makes sense.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can platters be stacked for a multi-drop delivery round?',
        a: 'Only if the rim is specified for it. A standard serving tray rim buckles under a second loaded platter, so it needs to be flagged at quote stage rather than assumed.',
      },
      {
        q: 'Should allergen information be printed on the packaging?',
        a: 'Usually not, because menus change per order. A separate card gives the same information and does not tie you to one menu for the life of a packaging run.',
      },
    ],
    recommended: [
      'custom-sandwich-trays',
      'custom-sandwich-sleeves',
      'custom-lunch-bags',
      'paper-coffee-cup-holders',
    ],
    nearby: ['cone-sleeves-oxford', 'cone-sleeves-surrey', 'cone-sleeves-london'],
  },

  {
    slug: 'cone-sleeves-cambridge',
    place: 'Cambridge',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Cambridge | Printed Food Packaging',
    seoDescription:
      'Printed cone sleeves and food packaging for Cambridge cafés, market traders, colleges and science park lunch catering.',
    h1: 'Cone Sleeves for Cambridge',
    intro: [
      'Cambridge has three distinct food economies sitting on top of each other: colleges catering to their own calendar, a science park with corporate lunch demand, and a tourist trade concentrated in a few streets around the market.',
      'Each buys packaging differently, and a supplier serving one is not automatically right for another.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Three markets, three requirements',
        items: [
          'Market Square traders — outdoor pitches, small storage, high summer footfall.',
          'College catering — a fixed term calendar and formal presentation standards.',
          'Science park and business catering — lunch delivery with dietary requirements.',
          'Tourist-facing cafés — heavy seasonal swing, packaging that photographs well.',
        ],
        outro:
          'A business serving more than one of these usually needs more than one packaging specification.',
      },
      {
        kind: 'prose',
        heading: 'Market trading with almost no storage',
        body: [
          'A stall on Market Square has room for a day\'s stock and nothing more. Everything else has to be carried in each morning.',
          'That makes flat-packed, compact packaging close to essential, and it argues against holding several specialist lines.',
        ],
        link: {
          href: '/custom-cardboard-food-trays/',
          anchor: 'general-purpose trays that cover a varied menu',
          sentence: 'Traders with one storage cupboard usually settle on {link}.',
        },
      },
      {
        kind: 'prose',
        heading: 'Ordering around the university terms',
        body: [
          'Cambridge terms are short and the vacations are long, so a business trading to students has an unusually pronounced quiet period.',
          'Tourist trade partly fills the summer gap, but the mix of what sells changes, which is worth accounting for in what you stock.',
        ],
      },
    ],
    faqs: [
      {
        q: 'We trade from a market stall with no storage. What can we do?',
        a: 'Flat-packed packaging is the main answer — it stores in a fraction of the space of formed containers. Smaller, more frequent orders also help, though they cost slightly more per unit.',
      },
      {
        q: 'Does the tourist season replace the student trade?',
        a: 'Partly, but the mix changes. Visitors buy differently from students, so the packaging that moves in July may not be the packaging that moves in November.',
      },
    ],
    recommended: [
      'custom-cardboard-food-trays',
      'custom-ice-cream-cone-sleeves',
      'custom-sandwich-sleeves',
      'custom-printed-coffee-sleeves',
    ],
    nearby: ['cone-sleeves-essex', 'cone-sleeves-oxford', 'cone-sleeves-london'],
  },

  {
    slug: 'cone-sleeves-oxford',
    place: 'Oxford',
    kind: 'city',
    nation: 'England',
    seoTitle: 'Cone Sleeves Oxford | Custom Printed Packaging',
    seoDescription:
      'Custom cone sleeves and food packaging for Oxford cafés, Covered Market traders, and the city\'s college and conference caterers.',
    h1: 'Custom Cone Sleeves for Oxford',
    intro: [
      'Oxford\'s Covered Market has been trading since the eighteenth century, and the businesses in it operate from units that were not designed with packaging storage in mind.',
      'That constraint, along with a heavy tourist season and a short university term, shapes most packaging decisions in the city.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Historic units, modern volumes',
        body: [
          'A Covered Market unit may have a few square metres of back-of-house and a listed building\'s worth of restrictions on changing it.',
          'Packaging that ships flat and assembles at the counter is not a preference here so much as the only workable option.',
        ],
        link: {
          href: '/custom-paper-cone-sleeves/',
          anchor: 'the most compact sleeve option in the range',
          sentence: 'For genuinely tight storage, {link} take the least space per thousand.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Oxford trades we quote for',
        items: [
          'Covered Market bakeries, delis and dessert businesses.',
          'Cafés along Cowley Road and Jericho serving residents year round.',
          'College and conference caterers working to an academic calendar.',
          'Tourist-facing businesses on the High Street and Broad Street.',
        ],
        outro:
          'Conference catering runs through the summer vacation, which usefully offsets the drop in student trade.',
      },
      {
        kind: 'prose',
        heading: 'Presentation for a heritage setting',
        body: [
          'Businesses in historic settings often want packaging that does not look mass-produced, which points towards uncoated boards and restrained one or two colour printing.',
          'That is also usually the cheaper specification, which is a rare alignment between how something should look and what it costs.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the most compact packaging option?',
        a: 'Flat-packed lightweight sleeves take the least storage space of anything in the range. Formed containers take considerably more, which matters a great deal in a small historic unit.',
      },
      {
        q: 'Does uncoated packaging cost more?',
        a: 'Usually less, because there is no lamination step and designs suited to it tend to use fewer inks. It is one of the few cases where the look people want is also the cheaper option.',
      },
    ],
    recommended: [
      'custom-paper-cone-sleeves',
      'custom-pastry-bags',
      'custom-kraft-food-bags',
      'kraft-coffee-cups',
    ],
    nearby: ['cone-sleeves-reading', 'cone-sleeves-cambridge', 'cone-sleeves-gloucestershire'],
  },

  // --- Counties ------------------------------------------------------------

  {
    slug: 'cone-sleeves-kent',
    place: 'Kent',
    kind: 'county',
    nation: 'England',
    seoTitle: 'Cone Sleeves Kent | Printed Packaging for Kent',
    seoDescription:
      'Printed cone sleeves and food packaging for Kent farm shops, producers and the coastal towns from Whitstable to Folkestone.',
    h1: 'Printed Packaging for Kent Food Businesses',
    intro: [
      'Kent\'s food economy is built on two things that rarely appear together: a large farm shop and producer sector inland, and a run of seaside towns from Whitstable round to Margate and Folkestone.',
      'A producer packing jams for a farm shop shelf and a Margate ice cream kiosk need almost nothing in common from a packaging supplier.',
    ],
    sections: [
      {
        kind: 'compare',
        heading: 'Producer packing against seaside service',
        intro: 'The two Kent markets pull in opposite directions.',
        columns: ['Farm shop producer', 'Coastal vendor'],
        rows: [
          ['Bought for', 'A retail shelf', 'Immediate hand-to-customer service'],
          ['Key requirement', 'Labelling and shelf appeal', 'Weather resistance and speed'],
          ['Order pattern', 'Steady, tied to production', 'Concentrated into the season'],
          ['Finish', 'Often uncoated, craft-led', 'Laminated, for sun and damp'],
          ['Information needed', 'Ingredients, weight, allergens', 'Very little'],
        ],
        outro:
          'Businesses doing both — a farm shop with a summer ice cream counter — usually need two specifications.',
      },
      {
        kind: 'prose',
        heading: 'Retail packing needs the labelling planned first',
        body: [
          'Anything sold pre-packed from a shelf carries information requirements that a counter sale does not. That has to be laid out with the design rather than added afterwards.',
          'Reserve the panel before the front is designed, or the sticker ends up over your logo.',
        ],
        link: {
          href: '/custom-cheese-packaging-bags/',
          anchor: 'retail packs for chilled producer goods',
          sentence: 'For chilled produce in particular, {link} covers the balance between breathability and shelf life.',
        },
      },
      {
        kind: 'callout',
        heading: 'Delivery across Kent',
        body: 'Kent addresses are served by national carriers on standard mainland transit. We have no premises, depot or delivery vehicles in the county, and cannot offer timed or same-day delivery to any Kent address.',
      },
    ],
    faqs: [
      {
        q: 'We run a farm shop and a summer ice cream counter. One specification or two?',
        a: 'Almost certainly two. Retail packs need labelling space and shelf appeal; a seaside counter needs weather resistance and speed. One specification tends to do both jobs poorly.',
      },
      {
        q: 'Do you deliver across the whole county?',
        a: 'Yes, on national carriers to any Kent address. We have no local depot and cannot offer timed delivery, so any date is the carrier\'s estimate rather than a commitment.',
      },
    ],
    recommended: [
      'custom-ice-cream-cone-sleeves',
      'custom-cheese-packaging-bags',
      'custom-greaseproof-paper',
      'custom-kraft-food-bags',
    ],
    nearby: ['cone-sleeves-essex', 'cone-sleeves-surrey', 'cone-sleeves-london'],
  },

  {
    slug: 'cone-sleeves-essex',
    place: 'Essex',
    kind: 'county',
    nation: 'England',
    seoTitle: 'Cone Sleeves Essex | Printed Food Packaging Supplier',
    seoDescription:
      'Printed cone sleeves and seaside packaging for Essex businesses, from the Southend seafront to commuter town high streets.',
    h1: 'Cone Sleeves and Packaging for Essex',
    intro: [
      'Essex packs two quite different trades into one county. Southend and the Thames estuary resorts run an intense seasonal seafront business, while the commuter towns along the Liverpool Street lines trade steadily to residents all year.',
      'A supplier quoting for one should not assume the other works the same way.',
    ],
    sections: [
      {
        kind: 'bullets',
        heading: 'Seafront trade in Essex',
        items: [
          'Southend\'s seafront ice cream and chip trade, concentrated into good weather.',
          'Pier and amusement catering, where speed of service dominates everything.',
          'Estuary towns with a shorter but still meaningful summer season.',
          'Event and festival trading along the coast through the summer.',
        ],
        outro:
          'Seafront businesses should specify for sun and damp air, which reach packaging even on dry days.',
      },
      {
        kind: 'prose',
        heading: 'Commuter town trade is a different order pattern',
        body: [
          'A café in Chelmsford or Brentwood trades to residents and commuters at consistent volumes across the year, with peaks at weekday mornings rather than summer weekends.',
          'That makes stock planning far simpler, and it makes longer print runs more economic because usage is predictable.',
        ],
        link: {
          href: '/custom-printed-coffee-sleeves/',
          anchor: 'sleeves for a steady commuter coffee trade',
          sentence: 'For a morning-led business, {link} are the most cost-effective branded item.',
        },
      },
      {
        kind: 'prose',
        heading: 'Ordering and artwork',
        body: [
          'Send us the cup or container you already use, along with your realistic annual volume rather than just a first order.',
          'Annual volume often changes which print method makes sense, and it is the single most useful figure you can give us.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does seafront trading need a different specification?',
        a: 'A laminated finish holds up far better against sun and damp air than an unlaminated one. For a permanent seafront pitch it is worth specifying rather than treating as an option.',
      },
      {
        q: 'Why do you ask for annual volume rather than order quantity?',
        a: 'Because it often changes which print method is economic. A quantity that looks small as a single order can justify a cheaper method once the year is taken together.',
      },
    ],
    recommended: [
      'custom-printed-coffee-sleeves',
      'custom-ice-cream-cone-wrappers',
      'french-fry-boxes',
      'custom-fish-chips-paper',
    ],
    nearby: ['cone-sleeves-london', 'cone-sleeves-kent', 'cone-sleeves-cambridge'],
  },

  {
    slug: 'cone-sleeves-surrey',
    place: 'Surrey',
    kind: 'county',
    nation: 'England',
    seoTitle: 'Cone Sleeves Surrey | Printed Packaging Supplier',
    seoDescription:
      'Printed cone sleeves and packaging for Surrey farm shops, garden centre cafés, tea rooms and independent town businesses.',
    h1: 'Printed Packaging for Surrey Businesses',
    intro: [
      'Surrey\'s food trade is dominated by destination businesses: farm shops, garden centre cafés, National Trust tea rooms and independent town centre operators serving customers who have chosen to be there.',
      'Destination trade puts more weight on presentation than convenience trade does, because the visit itself is the point.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Destination customers notice the packaging',
        body: [
          'Someone who has driven to a farm shop café on a Sunday is paying attention in a way a commuter grabbing a coffee is not. The packaging is part of what they are there for.',
          'That justifies a better specification than a convenience business would choose, and customers here generally accept the price that goes with it.',
        ],
        link: {
          href: '/custom-dessert-sleeves/',
          anchor: 'presentation sleeves for takeaway cakes and bakes',
          sentence: 'Farm shop cafés selling cakes to take home usually add {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Surrey businesses we supply',
        items: [
          'Farm shops with a café and a produce counter under one roof.',
          'Garden centre restaurants, which trade heavily at weekends and in spring.',
          'Tea rooms at visitor attractions and country estates.',
          'Independent bakeries and delis in Guildford, Farnham and the commuter towns.',
        ],
        outro:
          'Garden centre trade is strongly seasonal in a different way from seaside trade, peaking in spring rather than high summer.',
      },
      {
        kind: 'prose',
        heading: 'Selling produce as well as serving it',
        body: [
          'Farm shops frequently want the café packaging and the retail packaging to look like they come from the same business, which they often do not when ordered separately months apart.',
          'Running both in one order keeps the colour and stock consistent, and usually costs less than two separate jobs.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can café and retail packaging be printed to match?',
        a: 'Yes, and running them in one order is the reliable way to do it. Printed months apart on different stocks, the same colour drifts enough to be visible when the two sit side by side.',
      },
      {
        q: 'Is a better specification worth it for a destination business?',
        a: 'Generally yes. Customers who have made a trip pay attention to the details, and the packaging is part of what they associate with the visit.',
      },
    ],
    recommended: [
      'custom-dessert-sleeves',
      'custom-bakery-trays',
      'custom-pastry-bags',
      'custom-printed-coffee-sleeves',
    ],
    nearby: ['cone-sleeves-london', 'cone-sleeves-reading', 'cone-sleeves-kent'],
  },

  {
    slug: 'cone-sleeves-lancashire',
    place: 'Lancashire',
    kind: 'county',
    nation: 'England',
    seoTitle: 'Cone Sleeves Lancashire | Seaside & Town Packaging',
    seoDescription:
      'Printed cone sleeves for Lancashire businesses, covering Blackpool seafront trade and Ribble Valley market town independents.',
    h1: 'Cone Sleeves for Lancashire',
    intro: [
      'Blackpool sells an extraordinary quantity of ice cream, chips and seaside confectionery in a season that runs from Easter to the Illuminations, and the rest of Lancashire trades to a much steadier pattern.',
      'The seafront businesses are among the highest-volume single sites we quote for anywhere in the country.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Illuminations extend the season',
        body: [
          'Most seaside trade ends with the summer holidays. Blackpool\'s Illuminations push a meaningful season into November, which lengthens the period stock has to cover.',
          'It also means autumn trading happens in cold, wet weather, where an unlaminated sleeve performs noticeably worse than it does in August.',
        ],
        link: {
          href: '/custom-cardboard-cone-sleeves/',
          anchor: 'heavier board for damp autumn trading',
          sentence: 'For an extended season into the autumn, {link} hold their shape better.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Lancashire trades we quote for',
        items: [
          'Blackpool and Lytham seafront ice cream, chip and confectionery vendors.',
          'Promenade kiosks trading from Easter through the Illuminations.',
          'Market town cafés and bakeries across Preston, Lancaster and the Ribble Valley.',
          'Farm shops and producers in the Forest of Bowland and surrounding areas.',
        ],
        outro:
          'Seafront and market town businesses in the same county rarely want the same specification.',
      },
      {
        kind: 'prose',
        heading: 'Volume changes the economics',
        body: [
          'A high-volume seafront site can justify print methods that a small café cannot, because the setup cost spreads across a far larger run.',
          'If your annual usage is genuinely large, say so at enquiry. It may open options that would be uneconomic at a smaller scale.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does a longer season change what we should order?',
        a: 'It does. Trading into damp autumn weather is harder on packaging than August is, so a heavier board or a laminated finish earns its cost over an extended season.',
      },
      {
        q: 'Does high volume get a better price?',
        a: 'It can change which print method is economic, which matters more than a percentage discount. Tell us your genuine annual usage rather than a first order quantity.',
      },
    ],
    recommended: [
      'custom-cardboard-cone-sleeves',
      'custom-waffle-cone-sleeves',
      'french-fry-boxes',
      'custom-fish-chips-paper',
    ],
    nearby: ['cone-sleeves-manchester', 'cone-sleeves-liverpool', 'cone-sleeves-leeds'],
  },

  {
    slug: 'cone-sleeves-gloucestershire',
    place: 'Gloucestershire',
    kind: 'county',
    nation: 'England',
    seoTitle: 'Cone Sleeves Gloucestershire | Cotswolds Packaging',
    seoDescription:
      'Printed cone sleeves and packaging for Gloucestershire farm shops, Cotswolds tea rooms and Cheltenham race week caterers.',
    h1: 'Printed Packaging for Gloucestershire',
    intro: [
      'Gloucestershire\'s food trade runs on visitors. Cotswolds tourism supports tea rooms, farm shops and village bakeries whose busiest days are entirely weather and weekend driven.',
      'Cheltenham adds a different pattern again, with race weeks concentrating enormous catering demand into a few days.',
    ],
    sections: [
      {
        kind: 'prose',
        heading: 'Race weeks are a catering event, not a busy week',
        body: [
          'Cheltenham\'s festival weeks put catering demand into a few days at a scale that has nothing to do with normal trade.',
          'Caterers working them order to the date, in quantities that would last an ordinary café a year. That needs planning months ahead rather than weeks.',
        ],
        link: {
          href: '/blog/printed-cone-sleeves-for-events-and-catering/',
          anchor: 'planning packaging for a fixed event date',
          sentence: 'The scheduling approach is set out in {link}.',
        },
      },
      {
        kind: 'bullets',
        heading: 'Gloucestershire businesses we supply',
        items: [
          'Cotswolds tea rooms and village cafés trading to visitors at weekends.',
          'Farm shops and producers packing for their own shelves and for wholesale.',
          'Event caterers working Cheltenham race weeks and the county\'s festival calendar.',
          'Bakeries in Stroud, Cirencester and the market towns.',
        ],
        outro:
          'Visitor-facing businesses here tend to prefer uncoated, craft-led packaging that suits a rural setting.',
      },
      {
        kind: 'prose',
        heading: 'Packaging that suits a rural setting',
        body: [
          'A glossy laminated pack looks out of place in a Cotswolds tea room in a way it would not in a city centre.',
          'Uncoated boards, kraft and restrained one or two colour printing suit the setting, and they are usually the cheaper specification as well.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How far ahead should event caterers order?',
        a: 'Months rather than weeks for a fixed date like a race week. Quantities are large, the date cannot move, and production lead time is confirmed on your quote as the working deadline.',
      },
      {
        q: 'Which finish suits a rural tea room?',
        a: 'Uncoated or kraft board with restrained printing generally reads better in that setting than a glossy laminate, and it usually costs less as well.',
      },
    ],
    recommended: [
      'custom-kraft-food-bags',
      'custom-pastry-bags',
      'custom-bakery-trays',
      'kraft-coffee-cups',
    ],
    nearby: ['cone-sleeves-bristol', 'cone-sleeves-oxford', 'cone-sleeves-cardiff'],
  },
];

export function locationBySlug(slug: string): LocationPage | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export const CITIES = LOCATIONS.filter((l) => l.kind === 'city');
export const COUNTIES = LOCATIONS.filter((l) => l.kind === 'county');
