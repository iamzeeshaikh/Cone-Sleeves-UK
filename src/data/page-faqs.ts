/**
 * FAQ blocks for the fixed routes — the pages that are not generated from a
 * product, category, location or article record and so carry no FAQs of their
 * own.
 *
 * Keyed by path so `scripts/validate-content.mjs` can hold them to the same
 * rules as every other page: ten pairs minimum, no question repeated within a
 * page, no answer reused anywhere on the site.
 *
 * Four routes are deliberately absent and must stay absent:
 *   /privacy-policy/, /cookie-policy/, /terms-and-conditions/
 *     Legal text has to read continuously. Breaking it into accordions hides
 *     clauses behind a click and invites a paraphrase that no longer matches
 *     the clause it summarises.
 *   /thank-you/
 *     Noindex, reached only after a form submission, and the one thing the
 *     reader wants there is confirmation rather than reading matter.
 */
import type { Faq } from './types';

export const PAGE_FAQS: Record<string, Faq[]> = {
  '/products/': [
    {
      q: 'Where should we start in the catalogue?',
      a: 'Start from what you serve rather than from a product name. If you sell scooped cones, the cone sleeve range is the entry point; if you wrap hot food, the food sleeve and tray ranges are. The product you hold is a better index than the wording of a category.',
    },
    {
      q: 'Is everything here made to order?',
      a: 'Yes. Nothing in the catalogue is a shelf item with a fixed size, because a sleeve or tray that does not match the product it holds is worse than none at all. Every line is cut to a specification agreed before production.',
    },
    {
      q: 'Can we combine several products in one order?',
      a: 'Frequently, and it usually works out cheaper per item than ordering separately, because the setup and the delivery are shared. Send the full list at quote stage rather than raising a separate enquiry per line.',
    },
    {
      q: 'How do we know which size to ask for?',
      a: 'You do not need to know. Send us the product itself, or a photograph of a made-up portion with a ruler alongside it, and the size is taken from that. Guessing at a measurement is where most packaging orders go wrong.',
    },
    {
      q: 'What if the product we need is not listed?',
      a: 'Ask anyway. The catalogue reflects what is commonly requested rather than the limit of what can be cut, and a shape close to an existing die is usually straightforward to quote.',
    },
    {
      q: 'Do you supply unprinted stock?',
      a: 'Yes, and for some uses it is the sensible choice. Interleaving papers, back-of-house wraps and anything the customer never sees rarely justify the print cost, so plain and printed are often ordered together.',
    },
    {
      q: 'Are these products suitable for hot food?',
      a: 'Many are, but the board and any lining have to be specified for it rather than assumed. Grease resistance and heat tolerance are separate properties, and a sleeve that handles one may not handle the other.',
    },
    {
      q: 'Can we see the range before committing?',
      a: 'A flat sample can be produced for most jobs before printing, which shows the size, the board and the construction. Ask for one at quote stage, since it is far cheaper to correct a die than a finished run.',
    },
    {
      q: 'How many ranges are there?',
      a: 'Seven, covering cone sleeves, food sleeves, trays, boxes and beverage packaging, paper cups, printed papers and paper bags. They overlap deliberately, because a business serving cones usually needs a napkin, a tray and a bag as well.',
    },
    {
      q: 'What information helps us get a faster quote?',
      a: 'The product to be held, a rough annual or monthly quantity, whether it is printed and in how many colours, and whether the food is hot, cold, greasy or dry. Those four answers cover most of what a specification needs.',
    },
  ],

  '/locations/': [
    {
      q: 'Do you have premises in these places?',
      a: 'No, and the location pages say so on every one of them. They exist because trade in Blackpool differs from trade in Cambridge, not because there is an office in either. Printing happens centrally and goods travel by national carrier.',
    },
    {
      q: 'Why does the location matter at all then?',
      a: 'Because what sells in a seaside resort in August is not what sells in a university city in October. Peak weeks, weather exposure and the mix of trade change what board and finish make sense, and that is what those pages set out.',
    },
    {
      q: 'Can we order if our town is not listed?',
      a: 'Yes. The list covers places where the trade has a distinct pattern worth writing about, not the places we supply. Mainland delivery is national and the enquiry process is identical wherever you are.',
    },
    {
      q: 'Is delivery charged differently by area?',
      a: 'Carriage is quoted with the job rather than published as a table, because it depends on quantity and pallet count far more than on distance within mainland Britain. Offshore and Highland addresses are the exception and are quoted separately.',
    },
    {
      q: 'Do you supply outside the United Kingdom?',
      a: 'Ask, and we will tell you honestly whether it is worth doing. Customs paperwork and carriage can outweigh the saving on smaller quantities, so the answer depends on the size of the order rather than the destination alone.',
    },
    {
      q: 'Can several sites in one chain order together?',
      a: 'That is usually the cheaper way to do it. One print run split across sites shares the setup cost, and the boxes can be labelled per site so nobody has to redistribute them afterwards.',
    },
    {
      q: 'How far ahead should a seasonal business order?',
      a: 'Further ahead than feels necessary. Every ice cream kiosk on the same coast wants the same thing in the same fortnight, so the constraint at peak is other people ordering rather than the printing itself.',
    },
    {
      q: 'Do you work with market and event traders?',
      a: 'Regularly, and they are the reason several pages talk about laminated finishes. Trading outdoors puts packaging through weather that a counter-served sleeve never sees, and thin uncoated board does not survive it.',
    },
    {
      q: 'Can we take delivery somewhere other than our trading address?',
      a: 'Yes, and many traders do, because a market stall has nowhere to receive a pallet. Give us the delivery address at order stage and check somebody will be there to sign for it.',
    },
    {
      q: 'Are the location pages just the same text with the name swapped?',
      a: 'No, and that is worth being direct about because plenty of packaging sites do exactly that. Each one is written around the trade in that place, and ten areas from the original list were dropped entirely rather than padded out.',
    },
  ],

  '/blog/': [
    {
      q: 'Who are these articles written for?',
      a: 'People buying printed packaging for a food business, usually for the first or second time. They assume no print knowledge and set out to answer the questions that come up before a quote request rather than after one.',
    },
    {
      q: 'Which article should we read first?',
      a: 'If you have never ordered a sleeve, start with sizing, because an incorrect size cannot be fixed by anything downstream. If you already know the size, artwork preparation saves the most time and the most reprints.',
    },
    {
      q: 'Do the articles quote prices?',
      a: 'No, and that is deliberate. Unit cost moves with quantity, board, colour count and finish, so a figure written into an article would be wrong for almost everyone reading it. Pricing comes from a quotation against your specification.',
    },
    {
      q: 'Are lead times covered?',
      a: 'Not as published figures. Turnaround depends on the print method, the finish and how busy the season is, so it is confirmed on the quotation for your job rather than promised in advance on a page.',
    },
    {
      q: 'How often is new writing added?',
      a: 'When there is something worth adding rather than on a schedule. An article that repeats what three others already say makes the set harder to use, so the count moves slowly and on purpose.',
    },
    {
      q: 'Can we suggest a topic?',
      a: 'Please do. Questions that arrive by email are where most of these came from in the first place, and a question asked twice by different buyers is usually worth a page of its own.',
    },
    {
      q: 'Is there a feed we can subscribe to?',
      a: 'Yes, there is an RSS feed at /rss.xml which any reader application will accept. It carries the article titles, summaries and links rather than the full text.',
    },
    {
      q: 'Do the articles apply outside cone sleeves?',
      a: 'Most of them do. Sizing from the product, preparing artwork, choosing a board and planning for a seasonal peak work the same way whether the item is a sleeve, a tray, a cup or a bag.',
    },
    {
      q: 'Are these written by the people who quote the jobs?',
      a: 'They come from the same specifications and the same recurring email exchanges, which is why several of them spend more time on what goes wrong than on what to buy. That is the part buyers ask about.',
    },
    {
      q: 'Can we reproduce an article?',
      a: 'Ask first and the answer is usually yes for a short quotation with a link back. Wholesale republication is not something we agree to, because a duplicated page helps neither site in search.',
    },
  ],

  '/about/': [
    {
      q: 'Who is Cone Sleeves UK?',
      a: 'A supplier of printed cone sleeves and food packaging to businesses across the United Kingdom, working to specification rather than from a stock list. The catalogue is broad because the customers are: an ice cream shop and a street food trader need different things from the same range.',
    },
    {
      q: 'Why does the site not publish prices?',
      a: 'Because a unit price with no quantity, board, colour count or finish attached to it is a number that will be wrong when you order. Every job is quoted against its own specification, which is slower to read and considerably more accurate.',
    },
    {
      q: 'Why are lead times and minimum quantities missing?',
      a: 'They have not been confirmed for publication, so rather than invent figures that would bind the business to something it has not agreed, the pages that would carry them say plainly that they are pending. They will appear once confirmed.',
    },
    {
      q: 'Are there any certifications listed?',
      a: 'None, because none have been supplied for publication. Food-contact and forestry certifications are verifiable claims that a buyer may rely on, and stating one that cannot be evidenced would be worse than stating nothing.',
    },
    {
      q: 'Why are there no customer reviews on the site?',
      a: 'Because there is no collected review data behind them. Ratings assembled without genuine responses are straightforwardly misleading, and the structured data on this site omits them for the same reason.',
    },
    {
      q: 'What is the relationship to the old .com site?',
      a: 'The catalogue and the images came across; not a sentence of the writing did. The old site was written for a United States market with claims that do not hold here, so every page was rewritten from scratch.',
    },
    {
      q: 'What kinds of businesses do you supply?',
      a: 'Ice cream shops and dessert bars, cafés and coffee shops, takeaways and chip shops, bakeries, street food traders, event and contract caterers, and farm shops packing their own produce.',
    },
    {
      q: 'Is there a minimum size of business you work with?',
      a: 'No, though the economics differ. A single kiosk usually gets more from sleeving a plain cup than from a printed cup run, and it is worth saying so rather than selling the larger job.',
    },
    {
      q: 'How is a job actually specified?',
      a: 'From the product you already serve. Send a cone, a cup or a photograph with a ruler beside it, and the die is cut to that. Board, lining, print method and finish are then confirmed in writing before anything runs.',
    },
    {
      q: 'What happens after we approve a proof?',
      a: 'The job goes to production against exactly what you approved, which is why the proof stage deserves a careful read rather than a quick one. Errors present in an approved proof cannot be unwound afterwards.',
    },
  ],

  '/contact/': [
    {
      q: 'What is the quickest way to reach you?',
      a: 'WhatsApp for a short question, email for anything involving a specification or a file. A photograph of the product you want packaged answers more in one message than several paragraphs of description do.',
    },
    {
      q: 'What should we include in a first message?',
      a: 'The product to be held, roughly how many you expect to use, whether it is printed and in how many colours, and where it will be used. Those four points let a specification be drafted rather than guessed at.',
    },
    {
      q: 'Can we send artwork straight away?',
      a: 'You can, though it is usually better to wait for the die template. Artwork drawn to the wrong outline has to be redrawn, and the template is issued once the size is confirmed.',
    },
    {
      q: 'Is there a published business address?',
      a: 'Not on this site, because the registered and trading address details have not been confirmed for publication. They will appear on the legal pages once supplied rather than being approximated in the meantime.',
    },
    {
      q: 'Do you take orders over the phone?',
      a: 'A conversation is often the fastest way to reach a specification, but the order itself is confirmed in writing. That protects both sides, since a bespoke job is made to exactly what was agreed and nothing else.',
    },
    {
      q: 'How large a file can we send by email?',
      a: 'Mailboxes usually stop somewhere around ten megabytes, so a large layered design is better sent as a download link. The quote form on this site accepts an attachment up to ten megabytes as well.',
    },
    {
      q: 'What file types can you work with?',
      a: 'Vector artwork in PDF, AI or EPS is the most useful, since it scales without loss and the print positions can be adjusted. High-resolution raster files are workable for photographic elements but not for logos or type.',
    },
    {
      q: 'Can we visit to see samples?',
      a: 'Samples are normally posted rather than viewed in person, which is quicker for you and covers more of the range than a visit would. Ask for a flat sample of the specific job rather than a general pack.',
    },
    {
      q: 'Do you reply outside working hours?',
      a: 'Messages sent in the evening or at a weekend are read the next working day. Anything genuinely urgent is better raised by phone during the day than left in an inbox overnight.',
    },
    {
      q: 'What if we already have a specification from another supplier?',
      a: 'Send it. A written specification is the most useful thing you can provide, and it lets a like-for-like comparison be made instead of two quotations describing slightly different products.',
    },
  ],

  '/request-a-quote/': [
    {
      q: 'What happens after we submit this form?',
      a: 'It reaches us by email with any attachment intact. We read the requirement, come back with sizing questions if the product is not clear, and then issue a written specification with the board, print, finish and quantity.',
    },
    {
      q: 'Do we have to know the size before asking?',
      a: 'No. Describe the product it has to hold and we will work the size out, or ask you to post one. A guessed measurement is more likely to produce a wrong die than an honest description is.',
    },
    {
      q: 'Can we attach artwork here?',
      a: 'Yes, one file up to ten megabytes in a common document or image format. If your design is larger or split across several files, send a download link in the message field instead.',
    },
    {
      q: 'Is a quantity required?',
      a: 'An approximate figure is enough at this stage, and a range is fine. Unit cost moves sharply with quantity, so a quotation against a rough number is more useful to you than one against no number at all.',
    },
    {
      q: 'Will we be added to a mailing list?',
      a: 'No. The details submitted here are used to answer the enquiry and nothing else, which is set out in full on the privacy policy.',
    },
    {
      q: 'Can we ask about several products at once?',
      a: 'Please do, in a single enquiry rather than several. Products quoted together share the setup and the delivery, so splitting them across separate requests can cost you money.',
    },
    {
      q: 'What if we are only comparing suppliers?',
      a: 'That is a normal reason to ask and it helps to say so, because a comparison needs a like-for-like specification rather than the cheapest possible interpretation of a vague brief.',
    },
    {
      q: 'Does submitting this commit us to anything?',
      a: 'Nothing at all. A quotation is a document you can read and ignore. Production starts only once you confirm an order against a specification in writing.',
    },
    {
      q: 'Why is a consent checkbox required?',
      a: 'Because the form sends personal details by email, and asking plainly is better than burying it in small print. Ticking it confirms you are happy for the details to be used to answer this enquiry.',
    },
    {
      q: 'The form will not submit — what is wrong?',
      a: 'Usually an attachment over the size limit or in a format the form does not accept, and the error message names which. If it persists, email the same information instead and mention that the form failed.',
    },
  ],

  '/design-your-cone-sleeve/': [
    {
      q: 'Is this preview a production proof?',
      a: 'No, and this page says so on screen. It shows layout and proportion on a generic shape, not the die cut for your cone. A production proof is issued separately once the specification and the template are agreed.',
    },
    {
      q: 'Will the printed colours match what we see here?',
      a: 'Not exactly. A screen emits light and board reflects it, so the two can never agree. Where colour is critical, ask about a printed sample before approving anything rather than trusting the preview.',
    },
    {
      q: 'Can we save what we build here?',
      a: 'Take a screenshot and attach it to your enquiry. This page is a sketchpad rather than a store, and the details that actually matter — size, board, colour count — are settled in the written specification.',
    },
    {
      q: 'Does the design here get sent to press?',
      a: 'No. What you build here communicates an idea to us. Print-ready artwork is drawn to the die template we issue, at the correct resolution and with bleed, which a browser cannot produce.',
    },
    {
      q: 'Do we need design software to use it?',
      a: 'No, that is the point of it. It runs in the browser and is meant for a rough arrangement of a logo and some text so a conversation can start from something visual.',
    },
    {
      q: 'Can we upload our own logo into the preview?',
      a: 'The designer is deliberately simple, so send your logo with the enquiry instead. That way it reaches us at full quality rather than as a screen-sized copy.',
    },
    {
      q: 'How close is the shape to a real sleeve?',
      a: 'It is representative rather than measured. Real sleeves are cut to your own cone, and the height, taper and overlap all shift with it, which is why the die comes from a physical sample.',
    },
    {
      q: 'What should we avoid putting near the edges?',
      a: 'Anything that has to survive intact — a logo, a name, a legal mark. Cutting has a tolerance, so keep important elements a few millimetres inside the trim and let backgrounds run past it.',
    },
    {
      q: 'How many colours should a first design use?',
      a: 'Fewer than instinct suggests. One or two well-chosen inks print cleanly on almost any board, whereas a four-colour design on unbleached kraft rarely looks the way it does on screen.',
    },
    {
      q: 'What is the next step once we have an idea?',
      a: 'Send it with a photograph of the cone or cup it wraps. The physical product is what turns a sketch into a specification, and it is the one thing a screen cannot supply.',
    },
  ],

  '/artwork-guidelines/': [
    {
      q: 'What format should artwork arrive in?',
      a: 'Vector wherever possible — PDF, AI or EPS — because it scales without loss and individual elements can still be moved. Raster files are workable for photography and unsuitable for logos and type.',
    },
    {
      q: 'What resolution do raster images need?',
      a: 'Three hundred dots per inch at the size it prints, not at the size it was downloaded. An image enlarged to fill a panel loses the same detail it would have lost if it had been supplied small.',
    },
    {
      q: 'Should we send RGB or CMYK files?',
      a: 'CMYK, because that is what the press works in. An RGB file will be converted anyway, and doing it yourself means you see the shift rather than being surprised by it on delivery.',
    },
    {
      q: 'How much bleed should we allow?',
      a: 'Extend any background past the trim so that a small cutting variation cannot leave a white sliver at the edge. The exact allowance is marked on the die template issued for your job.',
    },
    {
      q: 'Why do fonts need outlining?',
      a: 'Because a font installed on your machine may not exist on ours, and the substitute it picks will reflow the layout without warning. Outlining removes the dependency entirely, or supply the font files alongside the artwork.',
    },
    {
      q: 'Do we design to a template?',
      a: 'Yes, and the template comes from us once the size is confirmed. Designing before it arrives usually means redrawing to a different outline, which is time lost rather than time saved.',
    },
    {
      q: 'How close can text sit to the edge?',
      a: 'Keep anything that must stay readable a few millimetres inside the trim line. The safe area is marked on the template, and it exists because cutting and folding both carry a tolerance.',
    },
    {
      q: 'What about spot colours and brand matching?',
      a: 'Name the reference in the file rather than approximating it in process colours, and say at quote stage that it matters. Whether it can be matched depends on the print method the job runs on.',
    },
    {
      q: 'Does the board affect how artwork should be prepared?',
      a: 'Considerably. Unbleached kraft shifts every colour warmer and mutes light tones, so a design that works on coated white may need reworking. Design for the board you have chosen rather than adapting afterwards.',
    },
    {
      q: 'What is the most common artwork problem?',
      a: 'Low-resolution logos taken from a website. A logo lifted from a web page is a fraction of the size print needs, and no amount of enlargement puts back detail that was never there.',
    },
  ],

  '/delivery-information/': [
    {
      q: 'How are goods delivered?',
      a: 'By national carrier to the address you give at order stage. Smaller quantities travel as parcels and larger ones on pallets, which is worth knowing in advance because a pallet needs somewhere to be unloaded.',
    },
    {
      q: 'Are delivery times published on this site?',
      a: 'No, because transit and production timings have not been confirmed for publication and inventing them would be a promise the business has not made. Both are stated on the quotation for your job.',
    },
    {
      q: 'Can we have goods delivered to a home address?',
      a: 'Yes, provided somebody can receive them during the working day. It is common among traders without commercial premises, though a full pallet needs access and space that a doorstep may not have.',
    },
    {
      q: 'Can one order be split across several sites?',
      a: 'Yes, and for a chain it is usually the sensible way to do it. Give us the split at order stage and the boxes can be labelled per site so nobody has to redistribute them on arrival.',
    },
    {
      q: 'What happens if goods arrive damaged?',
      a: 'Tell us straight away and photograph the outer packaging as well as the goods, because a carrier claim depends on both. Do not dispose of anything until we have agreed what happens next.',
    },
    {
      q: 'Is the delivered quantity always exact?',
      a: 'It is quoted with a tolerance, which is standard for printed packaging: a press run does not stop on a precise number. The tolerance that applies to your job is stated on the quotation.',
    },
    {
      q: 'Do you deliver to the Highlands and islands?',
      a: 'Yes, though carriage there is quoted separately from mainland rates and transit takes longer. Say so at enquiry stage so the figure in your quotation is the one you will actually pay.',
    },
    {
      q: 'Can delivery be booked for a specific day?',
      a: 'A timed or booked-in delivery can usually be arranged where the receiving site needs one, and it is worth asking if you have restricted access hours. It is agreed before dispatch rather than afterwards.',
    },
    {
      q: 'How should packaging be stored on arrival?',
      a: 'Dry, off the floor and away from anything strongly scented. Board takes up moisture and odour readily, and packaging stored badly can taint the food it was bought to hold.',
    },
    {
      q: 'What if nobody is there when it arrives?',
      a: 'A parcel may be left with a neighbour or taken to a depot, but a pallet will be returned and redelivery charged. Give a delivery address where somebody is reliably present during the day.',
    },
  ],

  '/returns-and-refunds/': [
    {
      q: 'Can we return printed packaging we no longer need?',
      a: 'Not as a general right, because bespoke goods made to your specification cannot be resold to anyone else. That is why the specification, the sample and the proof stages carry the weight they do.',
    },
    {
      q: 'What counts as a fault we will put right?',
      a: 'Goods that do not match the confirmed specification or the approved proof, a manufacturing or print defect, a quantity outside the stated tolerance, or damage in transit. Any of those should be raised straight away.',
    },
    {
      q: 'What is not treated as a fault?',
      a: 'An error that was present in the proof you approved, colour that differs from a screen, a size that does not fit a product we were not given, and ordering more than you turned out to need.',
    },
    {
      q: 'How quickly do we need to report a problem?',
      a: 'As soon as it is noticed, and transit damage particularly so, because a carrier claim has a short window. The formal reporting period has not been confirmed for publication and will be stated here once it is.',
    },
    {
      q: 'What should we send when reporting a fault?',
      a: 'Photographs of the affected goods, of the outer packaging if it is a transit issue, and any batch or label information printed on the box. Those three usually settle what happened without further exchange.',
    },
    {
      q: 'Should we keep the goods?',
      a: 'Yes, until it is agreed what happens to them. They may need inspecting or returning, and disposing of them early removes the evidence that a claim depends on.',
    },
    {
      q: 'What remedies are available?',
      a: 'Normally a reprint of the affected quantity, or a credit where a reprint would arrive too late to be of use. Tell us which would actually resolve it for you, since that reaches an outcome faster.',
    },
    {
      q: 'Can an order be cancelled once placed?',
      a: 'Without cost, generally only before production begins. Once a die has been cut or the job is on press, costs have been incurred, so tell us as early as possible and we will be straightforward about what is recoverable.',
    },
    {
      q: 'Why does approving a proof matter so much?',
      a: 'Because approval is the point at which responsibility for the content transfers. A misspelling that survives your check will be printed exactly as approved, several thousand times, and cannot be unwound afterwards.',
    },
    {
      q: 'What if the colour is not what we pictured?',
      a: 'A screen emits light and board reflects it, so a difference is expected rather than faulty. Where colour is critical, ask about a printed sample before approving, since that is the only reliable comparison.',
    },
  ],
};

export const PAGE_FAQ_PATHS = Object.keys(PAGE_FAQS);
