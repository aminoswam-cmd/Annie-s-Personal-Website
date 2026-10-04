export interface PaperSection {
  id: string;
  title: string;
  part: string;
  content: string[];
}

export const PAPER_METADATA = {
  title: "Tibetan Medicine and Its Construction of the Interconnectedness of the Body, Mind, and Environment",
  author: "Academic Research Portfolio",
  advisor: "Prof. Leonard W. J. van der Kuijp",
  institution: "Harvard University (Department of South Asian Studies)",
  scope: "Monograph Paper (32 Pages, 86 Scholarly Citations)",
  year: "2026",
  abstract: "Traditional biomedical models frequently operate on implicit epiphenomenal assumptions, treating mental states as downstream byproducts of neurological structures. In contrast, Tibetan medicine (Sowa Rigpa) offers an ontology where mind, body, and environment exist in a continuous, bidirectional relationship. This paper provides a comparative anthropological analysis of Sowa Rigpa’s triadic framework. First, it explores the mind-body continuum via rlung dynamics and the heart center, analyzing how humoral treatments coexist with ritual exorcisms, ransom rites (Glud), and soul retrieval (bla bslu). Second, it unpacks the body-environment relationship through elemental composition, seasonal six-phase humors, and lunar-influenced bla movement. Third, it bridges Dzogchen teachings on the primordial base (zhi) and energy modes (dang, tsel, rölpa) with modern enactive cognitive science and the Ganzfeld effect to explain how perception enacts the boundary between self and world. In doing so, the paper highlights Sowa Rigpa as a model that seamlessly integrates medical science, ritual practice, and non-dual philosophy."
};

export const PAPER_SECTIONS: PaperSection[] = [
  {
    id: "part-1-body-mind",
    part: "Part I",
    title: "Body and Mind: Beyond Biomedical Epiphenomenalism",
    content: [
      "The relationship between mind and body has long been a central question in philosophy, with proposed answers ranging across a spectrum: wholly separate substances, independent coexisting domains, or dynamic interdependent processes. Modern biomedicine operates largely on an implicit model of epiphenomenalism (traceable to T. H. Huxley): mental states arise as byproducts or shadows of physical brain activity, but exert no causal power back onto the physical machine. Mental disorders such as schizophrenia are thus reduced to localized gray matter loss or dopaminergic dysfunction.",
      "In contrast, systems philosophy (Ervin Laszlo) and Action Ontology (Wasim Sifo) treat organisms as purposive wholes where actions and relationships hold causal primacy over isolated physical substances. Tibetan medicine (Sowa Rigpa) offers a profound realization of this relational model, integrating two complementary therapeutic domains: sMan (standard medical science administered by physicians) and Glud (ritual interventions performed by lamas).",
      "Tibetan medicine defines the mind as gsal-rig—a luminous, cognizing awareness capable of perceiving. Crucially, Sowa Rigpa situates the mind and rlung (vital wind humor) in the Heart rather than the brain, recognizing that rationality, moral conviction, and emotional intentionality reside here. Mind and rlung exist in a famous 'Rider and Horse' relationship: mind is the rider mounted upon the dynamic current of rlung. One cannot move without the other.",
      "Illness in Tibetan Buddhist thought does not stem from disobedience to a deity, but from the human condition: primal ignorance (ma rig pa) branches into the three mental poisons (dug gsum): greed/attachment ('dod chags), hatred/aversion (zhe sdang), and delusion (gti-mug). These transform directly into physical humoral imbalances: wind (rlung), bile (mKhris pa), and phlegm (Bad kan).",
      "When somatic madness has a purely humoral origin (srog rlung, snying rlung, khrag rlung), it is treated via a four-pronged regimen: warming nutritious diet, calm lifestyle, herbal compounding, and external therapies. However, when illness stems from spirit affliction (smyo byed kyi gdon), it demands ritual healing inherited from Bon and Buddhist traditions: ransom substitute effigies (Glud) sculpted from tsampa barley dough, soul retrieval (bla bslu) using dough boats and turquoise stones, or wrathful subjugation (bskrad). Across these rites, the patient's faith (dad pa) and conviction (yid ches) act as genuine causal forces. Tibetan medicine reverses biomedical reductionism: consciousness is treated as causally prior."
    ]
  },
  {
    id: "part-2-body-environment",
    part: "Part II",
    title: "Body and Environment: The Porous Membrane of Micro and Macro Ecology",
    content: [
      "In Tibetan medical and astrological thought, the boundary between the human body and the world is a permeable membrane. This is anchored in the foundational Kālacakratantra axiom: 'yathā bāhye tathā dehe'—'as it is outside, so it is within the body.' The human body is a micro-ecology; the external cosmos is a macro-ecology, both generated from five elemental dynamics: earth (sa, solidity), water (chu, cohesion), fire (mé, heat), wind (rlung, motility), and space (kha, interactive room).",
      "Tibetan cosmology articulates this through the metaphor of the vessel (snod, the environment) and its contents (bcud, sentient beings). From the moment of embryological conception in the womb, environmental elements assemble to form flesh, blood, digestion, and sensory orifices. Consequently, internal humors continuously fluctuate in response to the external six-season cycle (accumulating in late winter, manifesting in spring thaw, resolving in summer, and shifting with monsoon and autumn heat).",
      "Medical diagnosis mirrors this seasonal interplay: pulse diagnosis is calibrated according to seventy-two-day seasons plus eighteen-day transitional intervals to distinguish normal seasonal pulse shifts from true pathology. Therapeutics operate through opposites: balancing cold phlegm disorders with hot-potency herbs, ginger, or mutton.",
      "Furthermore, the environment is populated by the Eight Classes of deities and spirits (lha, tsen, dü, ma mo, dön, gongpo). Afflictions (gnod pa) often represent ecological retributions triggered by human disturbance—polluting pristine glacial rivers, quarrying sacred crags, or felling forests. Spiritual pollution (grib) contaminates the human life-force (bla), necessitating ritual remediation such as aromatic smoke offerings (sang) and raising wind-horse prayer flags (rlung rta).",
      "The vital life-force (bla) also circulates through thirty distinct anatomical locations following the lunar cycle (bla gnas). A physician is strictly forbidden from performing moxibustion or bloodletting on the precise anatomical point where the bla resides on that lunar day. Medicine, cosmos, and lunar time meet as one."
    ]
  },
  {
    id: "part-3-mind-environment",
    part: "Part III",
    title: "Mind and Environment: Dzogchen Non-Duality & Enactive Perception",
    content: [
      "Why are body and environment so inextricably linked? Dzogchen philosophy answers that the boundary between self and world is not an ontological given, but a cognitive construction. All reality originates from the Base (zhi)—an undivided primordial continuum of awareness and appearance prior to the conceptual cleavage of subject and object.",
      "Like Indra's Net, every phenomenon co-reflects all other phenomena. The Base manifests energy (thukje) in three modes: dang (the internal luminous reflective capacity, likened to a crystal ball), tsel (the external material projection perceived as solid resistance, like light through a prism), and rölpa (visionary display transcending subject and object, like reflections in a mirror).",
      "Dualistic thought splits experience into a threefold structure: experiencer (subject), experienced (object), and experiencing. Through 'delusory valuation-absolutization' anchored in the heart center, this conceptual habit is mistakenly taken as objective reality, creating the illusion of an isolated mind trapped behind the eyes.",
      "Awareness acts like a 'far-reaching lasso' flung outward, actively enacting a meaningful environment. This directly parallels modern cognitive science's enactive approach (Varela, Thompson, Rosch), wherein cognition is embodied action rather than passive representation. Advanced contemplative practices such as Tögal sky-gazing project the heart's luminous awareness onto an open sky, mirroring cognitive neuroscience findings on the Ganzfeld effect and agency detection.",
      "Finally, the Kālacakratantra demonstrates that the 21,600 daily breaths taken by a human mirror the 21,600 solar zodiac movements through twelve internal channels at the navel center. Health and true sanity culminate in direct recognition (rig pa): recognizing that inner mind and outer universe are the luminous display of a single undivided ground."
    ]
  }
];

export const WORKS_CITED_SAMPLE = [
  "Adams, Vincanne. 'Encounters With Efficacy.' Asian Medicine 6, no. 1 (2010): 1–21.",
  "Bell, Christopher. Tibetan Demonology. Cambridge University Press eBooks, 2020.",
  "Capriles, Elias M. Beyond Being, Beyond Mind, Beyond History. Vol. 1. Universidad de Los Andes, 2007.",
  "Clark, Barry, trans. The Quintessence Tantras of Tibetan Medicine. Shambhala Publications, 1995.",
  "Czaja, Olaf. 'Mantras and Rituals in Tibetan Medicine.' Asian Medicine 14, no. 2 (2020): 277–312.",
  "Deane, Susannah. 'rLung, Mind, and Mental Health: The Notion of Wind in Tibetan Conceptions.' Journal of Religion and Health 58, no. 3 (2019): 708–24.",
  "Deane, Susannah. 'From Sadness to Madness: Tibetan Perspectives on Psychiatric Illness.' Religions 5, no. 2 (2014): 444–58.",
  "Di Paolo, Ezequiel, and Evan Thompson. 'The Enactive Approach.' OSF Preprint, 2017.",
  "Dönden, Yeshi, and Jeffrey Hopkins. Health Through Balance. Snow Lion, 1986.",
  "Geisshuesler, Flavio. Tibetan Sky-Gazing Meditation and the Pre-History of Great Perfection Buddhism. Bloomsbury, 2024.",
  "Laszlo, Ervin. 'The Case for Systems Philosophy.' Metaphilosophy 3, no. 2 (1972): 123–41.",
  "Millard, Collin. 'sMan and Glud: Standard Tibetan Medicine and Ritual Medicine.' The Tibet Journal 30 & 31 (2005): 3–30.",
  "Ren, Xiao-Qiao, et al. 'Theoretical Characteristics of Tibetan Medicine.' World Journal of Traditional Chinese Medicine 6, no. 4 (2020): 490.",
  "Samuel, Geoffrey. 'Unbalanced Flows in the Subtle Body.' Journal of Religion and Health 58, no. 3 (2019): 770–94.",
  "Sifo, Wasim. 'Systems Theory Towards a New Interpretive Paradigm: Action Ontology.' Athens Journal of Philosophy 5, no. 2 (2026): 153–70.",
  "Varela, Francisco J., Evan Thompson, and Eleanor Rosch. The Embodied Mind. MIT Press, 2017.",
  "Wallace, Vesna A. 'Medicine and Astrology in the Healing Arts of the Kālacakratantra.' (n.d.)."
];
