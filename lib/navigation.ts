export type NavigationShortcut =
  | "h"
  | "b"
  | "g"
  | "s"
  | "e"
  | "a"
  | "r"
  | "c"
  | "f"
  | "m"
  | "j"
  | "?"

export interface NavigationItem {
  id: string
  shortcut: NavigationShortcut
  href: string
  label: Record<"en" | "si" | "ta", string>
  description: Record<"en" | "si" | "ta", string>
  icon?: string
  category: "home" | "benefits" | "services" | "healthcare" | "mental" | "education" | "employment" | "assistive" | "rights" | "community" | "complaints" | "help"
}

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    shortcut: "h",
    href: "/",
    label: {
      en: "Home",
      si: "මුල් පිටුව",
      ta: "முகப்பு",
    },
    description: {
      en: "Welcome and quick access to all services",
      si: "සියලුම සේවාවන් සඳහා ප්‍රවේශ මාධ්‍ය",
      ta: "அனைத்து சேவைகளுக்கும் விரைவான அணுகல்",
    },
    category: "home",
  },
  {
    id: "benefits",
    shortcut: "b",
    href: "/welfare-benefits",
    label: {
      en: "Benefits",
      si: "පහසුකම්",
      ta: "நன்மைகள்",
    },
    description: {
      en: "Disability allowances, pensions, and financial assistance",
      si: "වක්ෂේධ සහනයන්, විශ්‍රාම වැනි ආදාන මුදල් පහසුකම්",
      ta: "மாற்றுத்திறன்மானிகள், ஓய்வூதாரணங்கள் மற்றும் நிதி உதவிகள்",
    },
    category: "benefits",
  },
  {
    id: "services",
    shortcut: "s",
    href: "/government-services",
    label: {
      en: "Government Services",
      si: "සාමාන්‍ය රජයේ සේවා",
      ta: "அரசு சேவைகள்",
    },
    description: {
      en: "Directory of government offices, hospitals, and service centers",
      si: "රජයේ කාර්යාල, රෝහල් සහ සේවා මධ්‍යස්ථානවල නාමානුක්ෂණ ලැයිස්පත",
      ta: "அரசு அலுவலகங்கள், மருத்துவமனைகள் மற்றும் சேவை மையங்களின் அடைவி",
    },
    category: "services",
  },
  {
    id: "healthcare",
    shortcut: "g",
    href: "/healthcare",
    label: {
      en: "Healthcare",
      si: "සෞඛ්‍ය සේවා",
      ta: "சுகாதாரம்",
    },
    description: {
      en: "Medical services, rehabilitation, and therapy",
      si: "වෛද්‍ය සේවා, ප්‍රතිවිපටලනය සහ චිකිත්සමාගම",
      ta: "மருத்துவ சேவைகள், மறுசீบமையாக்கம் மற்றும் சிகிச்சை",
    },
    category: "healthcare",
  },
  {
    id: "mental",
    shortcut: "m",
    href: "/mental-health",
    label: {
      en: "Mental Health",
      si: "මානසම් සෞඛ්‍ය",
      ta: "மனநலம்",
    },
    description: {
      en: "Counselling, peer support, and crisis help",
      si: "උපදෙසුම, පිරිමසන සහය සහ අර්බුදය උදව්",
      ta: "ஆலோசனை, சக மருத்துவ ஆதரவு மற்றும் நெருக்கடய உதவி",
    },
    category: "mental",
  },
  {
    id: "education",
    shortcut: "e",
    href: "/education",
    label: {
      en: "Education",
      si: "අධ්‍යාපනය",
      ta: "கல்வி",
    },
    description: {
      en: "Scholarships, vocational training, and schools",
      si: "අරමුදල්, පුරුදු පුහුණු සහ පාසල්",
      ta: "உதவித்தொகைகள், தொழிற்பயிற்சி மற்றும் பள்ளிகள்",
    },
    category: "education",
  },
  {
    id: "employment",
    shortcut: "j",
    href: "/employment",
    label: {
      en: "Employment",
      si: "රැකියා",
      ta: "வேலைவாய்ப்பு",
    },
    description: {
      en: "Job opportunities, hiring guidelines, and microfinance",
      si: "රැකියා අපේක්ෂා, බඳවා උපදෙසුම සහ කුඩා මුල්‍ය",
      ta: "வேலைவாய்ப்புகள், பணிநியமன வழிகாட்டிகள் மற்றும் நுண்ணதவ",
    },
    category: "employment",
  },
  {
    id: "assistive",
    shortcut: "a",
    href: "/assistive-technology",
    label: {
      en: "Assistive Technology",
      si: "උපකාර තාක්ෂණික උපකරණ",
      ta: "உதவி தொழில்நுட்பம்",
    },
    description: {
      en: "Wheelchairs, hearing aids, and government subsidies",
      si: "ආච්ඡ සේව ආධාර, අසම ස බල උපකරණ සහ රජයේ අඩ මුදල",
      ta: "மூச்சுக்கட்டைகள், காது சாதனங்கள் மற்றும் அரசு மானியங்கள்",
    },
    category: "assistive",
  },
  {
    id: "rights",
    shortcut: "r",
    href: "/rights-legal",
    label: {
      en: "Rights & Legal",
      si: "හිමිකම් සහ නීති",
      ta: "உரிமைகள் மற்றும் சட்டம்",
    },
    description: {
      en: "Disability rights, UNCRPD, and legal aid",
      si: "වක්ෂේධ හිමිකම්, එක්සත් ජාතීන්ගේ කොන්වෙන්ෂන් කරන ලුත",
      ta: "மாற்றுத்திறன் உரிமைகள், UNCRPD மற்றும் சட்ட உதவி",
    },
    category: "rights",
  },
  {
    id: "community",
    shortcut: "c",
    href: "/community",
    label: {
      en: "Community",
      si: "ප්‍රජාව",
      ta: "சமூகம்",
    },
    description: {
      en: "NGOs, peer support groups, and caregiver resources",
      si: "පදත රාජ්‍ය නොරැ ස ක් ක ණ, පිරිමසන ස ප ම ු ණ ස ප ද ක ත ස හ අ න ක ම න න ස හ අ ස ක ර න ස ප ල බ ද න",
      ta: "அரசு இல்லாத அமைப்புகள், சக ஆதரவு குழுக்கள் மற்றும் பராமரிப்பாளர் ஆதாரங்கள்",
    },
    category: "community",
  },
  {
    id: "complaints",
    shortcut: "f",
    href: "/complaints",
    label: {
      en: "Complaints",
      si: "වග න ව ල ප ව ත",
      ta: "புகார்கள்",
    },
    description: {
      en: "Submit a complaint or track your case",
      si: "වග න ව ල ප ව ත හ ෝ හ ක ත ක ර න ල ද හ ම බ ල න ල බ ල න ල ද",
      ta: "புகாரைச் சமர்ப்பிக்கவும் அல்லது உங்கள் வழக்கைத் துடக்கவும்",
    },
    category: "complaints",
  },
  {
    id: "help",
    shortcut: "?",
    href: "/help",
    label: {
      en: "Help",
      si: "උදව්",
      ta: "உதவி",
    },
    description: {
      en: "FAQs, user guide, and emergency contacts",
      si: "න ත ර ව න න ස හ අ ස ක ර න න න ම ය න ව ත බ ල න ල බ ල න ල ද",
      ta: "அடிக்கடி கேட்க்கப்படும் கேள்விகள், பயனர் வழிகாட்டி மற்றும் அவசர தொடர்புகள்",
    },
    category: "help",
  },
]

export const quickAccessItems = navigationItems.filter(
  (item) =>
    item.id === "benefits" ||
    item.id === "services" ||
    item.id === "assistive" ||
    item.id === "employment" ||
    item.id === "mental" ||
    item.id === "complaints"
)