import { Project, FieldStudy, Hobby } from './types';

export const FIELD_STUDIES: FieldStudy[] = [
  {
    id: 'field-study-ecology',
    title: 'Three River Source Ecological Conservation',
    subtitle: 'Expedition I: Natural Protection & The Ecosystem Sentinel',
    description: 'Documenting glacier degradation at sacred Mt. Amne Machin, alpine meadow ecosystems, and biodiversity conservation at the Three River Source.',
    longDescription: 'A month-long expedition in the Sanjiangyuan region documenting biodiversity shifts and permafrost degradation. Our team collected soil samples and mapped glacial retreat patterns to analyze climate change impacts on alpine meadow ecosystems.',
    image: 'https://i.ibb.co/3Y9w7h5r/f864eb9e1b174c818d84a238c238dc3a.jpg',
    category: 'Environmental Science & Alpine Ecology',
    location: 'Sanjiangyuan & Mt. Amne Machin, Qinghai'
  },
  {
    id: 'field-study-health',
    title: 'Public Health & Tibetan Culture',
    subtitle: 'Expedition II: Healing & Heritage',
    description: 'Investigating nomadic lifestyle public health challenges, traditional healing with Dr. Renzeng Duojie, and building the Herb Wiki open digital repository.',
    longDescription: 'Field research in remote high-altitude communities exploring public health access, the intertwined relationship between mind and body in traditional Tibetan medicine, and preserving endangered herbal heritage through digital repositories.',
    image: 'https://i.postimg.cc/FRJLdtxN/image.png',
    category: 'Public Health & Ethnography',
    location: 'Qinghai-Tibetan Plateau'
  },
  {
    id: 'field-study-buddhism',
    title: 'Tibetan Buddhism & Healing Wisdom',
    subtitle: 'Expedition III: Monasteries & The Four Tantras',
    description: 'Monastic fieldwork across Langmu, Choje, and Labrang Monasteries exploring the Four Medical Tantras, 404 diseases cosmology, 3 humors, and Buddhist ethics.',
    longDescription: 'Ethnographic field study engaging with resident lamas and physician-khenpos to understand the cosmological framework of Tibetan healing, the three humors, pharmacology hierarchies, and karmic perspectives on health.',
    image: 'https://i.ibb.co/wFqWBVvK/DSC02094.jpg',
    category: 'Anthropology & Tibetan Medicine',
    location: 'Sichuan & Gansu Monastic Centers'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'tibetan-comparative',
    title: 'Tibetan Medicine Research Project',
    description: "Academic research mentored by Prof. Leonard van der Kuijp (Harvard University) investigating Tibetan medicine's construction of body, mind, and environment, grounded in Sanjiangyuan ecological and monastic field studies.",
    longDescription: 'Synthesizing insights from field expeditions in Qinghai-Tibetan regions with classical medical and philosophical treatises (rGyud bZhi, Kālacakratantra, Dzogchen). Explores how Tibetan medicine bridges physical therapeutics (sMan) and ritual healing (Glud), rejects biomedical epiphenomenalism, and models human health as an open, permeable micro-ecology inseparable from cosmic and mental environments.',
    image: 'https://i.ibb.co/nsqwFHhW/DSC02286.jpg',
    category: 'Medical Humanities & Anthropology'
  },
  {
    id: 'liver-cancer',
    title: 'Liver Cancer Research Project',
    description: 'Integration of Bioinformatics and Experimental Validation.',
    longDescription: 'Investigating specific protein expressions that serve as early indicators for hepatocellular carcinoma. This project involved extensive data analysis of clinical samples and wet-lab techniques to validate molecular targets in a high-throughput environment.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Ground_glass_hepatocytes_high_mag_cropped_2.jpg',
    category: 'Bioinformatics and Biomedicine Research'
  },
  {
    id: 'exoskeleton',
    title: 'Exoskeleton Engineering',
    description: 'Developing a Prototype for a Novel Energy Harvesting Method.',
    longDescription: 'Design and fabrication of a lower-limb exoskeleton using lightweight aluminum alloys and custom 3D printed components.',
    image: 'https://i.ibb.co/nsGN6RzV/Research-on-Power-Generation-Device-Applied-to-Knee-Exoskeleton.png',
    category: 'Engineering'
  },
  {
    id: 'art',
    title: 'Art Portfolio & Sketches',
    description: 'A visual collection spanning 2D paintings, 3D sculptures, and an expansive 51-piece sketchbook journal.',
    longDescription: 'Exploring creative expression across mediums: 2D paintings, 3D sculptural forms, and an ongoing travel sketchbook following journeys across mountains, high-altitude plateaus, and campus corners.',
    image: 'https://i.ibb.co/vxm40zkS/Weixin-Image-20251225221126-109-6.jpg',
    category: 'Visual Arts & Design'
  }
];

export const HOBBIES: Hobby[] = [
  {
    id: 'climbing',
    name: 'Rockclimbing',
    description: 'One of my most defining passions. Through Mercersburg Outdoor Education, I found the fun in outdoor climbing and explored different areas.',
    icon: 'Mountain',
    image: 'https://i.ibb.co/4wtf33Jb/2c6534608e9d98ca3650319390152c46.jpg'
  },
  {
    id: 'rolling-nest',
    name: 'The Rolling Nest',
    description: 'A custom camper van build project engineered as an off-grid mobile basecamp for climbing road trips and outdoor expeditions.',
    icon: 'Truck',
    image: 'https://i.ibb.co/Q3YPHQ70/campervan-reference.jpg'
  },
  {
    id: 'collect-them-all',
    name: 'Collect them all!',
    description: 'A sculpture series project of making diverse ceramic skulls and secretly placing them across different corners of campus.',
    icon: 'Skull',
    image: 'https://i.ibb.co/NgWmRx6C/7d0cba9624d42c28751e76ee3f6d266d.jpg'
  },
  {
    id: 'hiking',
    name: 'Hiking',
    description: 'Hiking is not only a way to get to the place where I want to climb, it is also bonding time with your friends and enjoying the nature.',
    icon: 'Layers',
    image: 'https://i.ibb.co/FbL22Bvx/Weixin-Image-20251225221122-107-6.jpg'
  },
  {
    id: 'snowboarding',
    name: 'Snowboarding',
    description: 'Waking up 6 am on a Saturday morning just to skin up the mountain and enjoy the fresh snow of the day.',
    icon: 'Wind',
    image: 'https://i.ibb.co/F4qFHB2G/Weixin-Image-20251225221124-108-6.jpg'
  },
  {
    id: 'guzheng',
    name: 'Guzheng',
    description: 'Playing this traditional Chinese instrument allows me to relax after a long day of school.',
    icon: 'Music',
    image: 'https://i.ibb.co/QvN3M9qx/f00fc3e1956beee08aed8d0bc9ead39f.jpg'
  }
];