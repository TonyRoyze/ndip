import {
  Accessibility,
  BadgeHelp,
  BookOpen,
  Briefcase,
  Building2,
  FileCheck,
  FileText,
  HeartPulse,
  Home,
  LifeBuoy,
  MapPinned,
  MessageSquare,
  Scale,
  Search,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

export type Language = "en" | "si" | "ta"

export type LocalizedText = Record<Language, string>

export type NavigationShortcut =
  | "h"
  | "b"
  | "p"
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
  id: SectionId
  shortcut: NavigationShortcut
  href: string
  label: LocalizedText
  description: LocalizedText
  icon: LucideIcon
  category:
    | "home"
    | "benefits"
    | "apply"
    | "services"
    | "healthcare"
    | "mental"
    | "education"
    | "employment"
    | "assistive"
    | "rights"
    | "community"
    | "complaints"
    | "help"
}

export interface SectionCard {
  title: string
  description: string
}

export interface PortalSection {
  id: SectionId
  href: string
  title: LocalizedText
  summary: LocalizedText
  requirementIds: string[]
  primaryActions: string[]
  cards: SectionCard[]
}

export type SectionId =
  | "home"
  | "benefits"
  | "apply"
  | "services"
  | "healthcare"
  | "mental"
  | "education"
  | "employment"
  | "assistive"
  | "rights"
  | "community"
  | "complaints"
  | "accessibility"
  | "about"
  | "help"
  | "privacy"
  | "terms"
  | "contact"

export const portalName = "NIIAP"

export const ministryName =
  "Ministry of Rural Development, Social Security and Community Empowerment"

export const languages: { value: Language; label: string; nativeLabel: string }[] = [
  { value: "en", label: "English", nativeLabel: "English" },
  { value: "si", label: "Sinhala", nativeLabel: "සිංහල" },
  { value: "ta", label: "Tamil", nativeLabel: "தமிழ்" },
]

export const uiText = {
  skipToMain: {
    en: "Skip to main content",
    si: "ප්‍රධාන අන්තර්ගතයට යන්න",
    ta: "முக்கிய உள்ளடக்கத்துக்கு செல்லவும்",
  },
  learnMore: {
    en: "Learn more",
    si: "තව දැනගන්න",
    ta: "மேலும் அறிக",
  },
  quickAccessTitle: {
    en: "Quick Access Services",
    si: "වේගවත් ප්‍රවේශ සේවා",
    ta: "விரைவு அணுகல் சேவைகள்",
  },
  announcementsTitle: {
    en: "Latest Announcements",
    si: "නවතම නිවේදන",
    ta: "சமீபத்திய அறிவிப்புகள்",
  },
  emergencyTitle: {
    en: "Emergency Contacts",
    si: "හදිසි සම්බන්ධතා",
    ta: "அவசர தொடர்புகள்",
  },
  featuredTitle: {
    en: "Featured Welfare Programs",
    si: "විශේෂ සුභසාධන වැඩසටහන්",
    ta: "சிறப்பு நலத்திட்டங்கள்",
  },
  searchPlaceholder: {
    en: "Search benefits, services, rights, locations, or support...",
    si: "ප්‍රතිලාභ, සේවා, හිමිකම්, ස්ථාන හෝ සහාය සොයන්න...",
    ta: "நன்மைகள், சேவைகள், உரிமைகள், இடங்கள் அல்லது ஆதரவைத் தேடுங்கள்...",
  },
  searchLabel: {
    en: "Search services",
    si: "සේවා සොයන්න",
    ta: "சேவைகளைத் தேடுங்கள்",
  },
  noResults: {
    en: "No results found",
    si: "ප්‍රතිඵල හමු නොවීය",
    ta: "முடிவுகள் இல்லை",
  },
  searchHint: {
    en: "Use arrow keys to navigate, Enter to select, Esc to clear.",
    si: "ඊතල යතුරු භාවිත කරන්න, Enter තෝරන්න, Esc මකන්න.",
    ta: "அம்புக்குறி விசைகளைப் பயன்படுத்தவும், Enter தேர்வு செய்யவும், Esc அழிக்கவும்.",
  },
  getHelpNow: {
    en: "Get Help Now",
    si: "දැන් උදව් ගන්න",
    ta: "இப்போது உதவி பெறுங்கள்",
  },
  callNow: {
    en: "Call Now",
    si: "දැන් අමතන්න",
    ta: "இப்போது அழைக்கவும்",
  },
}

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    shortcut: "h",
    href: "/",
    label: { en: "Home", si: "මුල් පිටුව", ta: "முகப்பு" },
    description: {
      en: "Welcome, search, quick access, announcements, and emergency help.",
      si: "පිළිගැනීම, සෙවීම, වේගවත් ප්‍රවේශය, නිවේදන සහ හදිසි උදව්.",
      ta: "வரவேற்பு, தேடல், விரைவு அணுகல், அறிவிப்புகள் மற்றும் அவசர உதவி.",
    },
    icon: Home,
    category: "home",
  },
  {
    id: "benefits",
    shortcut: "b",
    href: "/welfare-benefits",
    label: { en: "Disability Benefits", si: "ආබාධිත ප්‍රතිලාභ", ta: "மாற்றுத்திறன் நன்மைகள்" },
    description: {
      en: "Allowances, social security, pensions, housing, transport, and device support.",
      si: "දීමනා, සමාජ ආරක්ෂණය, විශ්‍රාම, නිවාස, ප්‍රවාහන සහ උපකරණ සහාය.",
      ta: "கொடுப்பனவுகள், சமூக பாதுகாப்பு, ஓய்வூதியம், வீடு, போக்குவரத்து மற்றும் சாதன உதவி.",
    },
    icon: FileText,
    category: "benefits",
  },
  {
    id: "apply",
    shortcut: "p",
    href: "/apply-for-services",
    label: { en: "Apply for Services", si: "සේවා සඳහා අයදුම් කරන්න", ta: "சேவைகளுக்கு விண்ணப்பிக்கவும்" },
    description: {
      en: "Guided application steps, required documents, and Easy-to-Read guides.",
      si: "මාර්ගෝපදේශිත අයදුම් පියවර, අවශ්‍ය ලේඛන සහ පහසු කියවීමේ මාර්ගෝපදේශ.",
      ta: "வழிகாட்டப்பட்ட விண்ணப்ப படிகள், தேவையான ஆவணங்கள் மற்றும் எளிய வாசிப்பு வழிகாட்டிகள்.",
    },
    icon: FileCheck,
    category: "apply",
  },
  {
    id: "services",
    shortcut: "s",
    href: "/government-services",
    label: { en: "Government Services", si: "රජයේ සේවා", ta: "அரசு சேவைகள்" },
    description: {
      en: "Directories for offices, hospitals, centers, NGOs, and local services.",
      si: "කාර්යාල, රෝහල්, මධ්‍යස්ථාන, රාජ්‍ය නොවන සංවිධාන සහ ප්‍රාදේශීය සේවා නාමාවලි.",
      ta: "அலுவலகங்கள், மருத்துவமனைகள், மையங்கள், தொண்டு அமைப்புகள் மற்றும் உள்ளூர் சேவை அடைவுகள்.",
    },
    icon: Building2,
    category: "services",
  },
  {
    id: "healthcare",
    shortcut: "g",
    href: "/healthcare",
    label: { en: "Healthcare", si: "සෞඛ්‍ය සේවා", ta: "சுகாதாரம்" },
    description: {
      en: "Medical services, rehabilitation, assessments, therapy, and support programs.",
      si: "වෛද්‍ය සේවා, පුනරුත්ථාපනය, ඇගයීම්, චිකිත්සා සහ සහාය වැඩසටහන්.",
      ta: "மருத்துவ சேவைகள், மறுவாழ்வு, மதிப்பீடுகள், சிகிச்சை மற்றும் ஆதரவு திட்டங்கள்.",
    },
    icon: HeartPulse,
    category: "healthcare",
  },
  {
    id: "mental",
    shortcut: "m",
    href: "/mental-health",
    label: { en: "Mental Health Support", si: "මානසික සෞඛ්‍ය සහාය", ta: "மனநல ஆதரவு" },
    description: {
      en: "Crisis contacts, counselling, psychosocial services, peer support, and self-help.",
      si: "අර්බුද සම්බන්ධතා, උපදේශනය, මනෝසමාජ සේවා, සම සහාය සහ ස්වයං සහාය.",
      ta: "நெருக்கடி தொடர்புகள், ஆலோசனை, உளசமூக சேவைகள், சக ஆதரவு மற்றும் சுய உதவி.",
    },
    icon: LifeBuoy,
    category: "mental",
  },
  {
    id: "education",
    shortcut: "e",
    href: "/education",
    label: { en: "Education", si: "අධ්‍යාපනය", ta: "கல்வி" },
    description: {
      en: "Inclusive schools, scholarships, vocational training, and digital literacy.",
      si: "ඇතුළත් පාසල්, ශිෂ්‍යත්ව, වෘත්තීය පුහුණුව සහ ඩිජිටල් සාක්ෂරතාව.",
      ta: "ஒன்றிணைந்த பள்ளிகள், உதவித்தொகைகள், தொழிற்பயிற்சி மற்றும் டிஜிட்டல் அறிவு.",
    },
    icon: BookOpen,
    category: "education",
  },
  {
    id: "employment",
    shortcut: "j",
    href: "/employment",
    label: { en: "Employment", si: "රැකියා", ta: "வேலைவாய்ப்பு" },
    description: {
      en: "Inclusive jobs, employer resources, entrepreneurship, and microfinance.",
      si: "ඇතුළත් රැකියා, සේවායෝජක සම්පත්, ව්‍යවසායකත්වය සහ ක්ෂුද්‍ර මූල්‍ය.",
      ta: "ஒன்றிணைந்த வேலைகள், முதலாளி வளங்கள், தொழில் முனைவு மற்றும் சிறு நிதி.",
    },
    icon: Briefcase,
    category: "employment",
  },
  {
    id: "assistive",
    shortcut: "a",
    href: "/assistive-technology",
    label: { en: "Assistive Devices", si: "උපකාරක උපකරණ", ta: "உதவி சாதனங்கள்" },
    description: {
      en: "Devices, suppliers, subsidies, mobility, vision, hearing, and communication aids.",
      si: "උපකරණ, සැපයුම්කරුවන්, සහනාධාර, චලනය, දෘෂ්ටි, ශ්‍රවණ සහ සන්නිවේදන ආධාර.",
      ta: "சாதனங்கள், வழங்குநர்கள், மானியங்கள், இயக்கம், பார்வை, கேட்கும் திறன் மற்றும் தொடர்பு உதவிகள்.",
    },
    icon: Accessibility,
    category: "assistive",
  },
  {
    id: "rights",
    shortcut: "r",
    href: "/rights-legal",
    label: { en: "Rights & Legal Support", si: "හිමිකම් සහ නීති සහාය", ta: "உரிமைகள் மற்றும் சட்ட ஆதரவு" },
    description: {
      en: "Disability rights, human rights, UNCRPD, policy, regulations, and legal aid.",
      si: "ආබාධිත හිමිකම්, මානව හිමිකම්, UNCRPD, ප්‍රතිපත්ති, රෙගුලාසි සහ නීති ආධාර.",
      ta: "மாற்றுத்திறன் உரிமைகள், மனித உரிமைகள், UNCRPD, கொள்கை, விதிமுறைகள் மற்றும் சட்ட உதவி.",
    },
    icon: Scale,
    category: "rights",
  },
  {
    id: "community",
    shortcut: "c",
    href: "/community",
    label: { en: "Community", si: "ප්‍රජාව", ta: "சமூகம்" },
    description: {
      en: "Disability organizations, peer groups, caregiver resources, and volunteering.",
      si: "ආබාධිත සංවිධාන, සම කණ්ඩායම්, රැකබලා ගන්නන්ගේ සම්පත් සහ ස්වේච්ඡා සේවය.",
      ta: "மாற்றுத்திறன் அமைப்புகள், சக குழுக்கள், பராமரிப்பாளர் வளங்கள் மற்றும் தன்னார்வம்.",
    },
    icon: Users,
    category: "community",
  },
  {
    id: "complaints",
    shortcut: "f",
    href: "/complaints",
    label: { en: "Complaints / Feedback", si: "පැමිණිලි / ප්‍රතිචාර", ta: "புகார்கள் / கருத்து" },
    description: {
      en: "Submit a complaint, request assistance, or track a case by reference number.",
      si: "පැමිණිල්ලක් ඉදිරිපත් කරන්න, සහාය ඉල්ලන්න, හෝ යොමු අංකයෙන් තත්ත්වය පරීක්ෂා කරන්න.",
      ta: "புகார் சமர்ப்பிக்கவும், உதவி கோரவும், அல்லது குறிப்பு எண்ணால் நிலையைப் பார்க்கவும்.",
    },
    icon: MessageSquare,
    category: "complaints",
  },
  {
    id: "help",
    shortcut: "?",
    href: "/help",
    label: { en: "Help", si: "උදව්", ta: "உதவி" },
    description: {
      en: "User guide, accessibility guide, screen reader help, FAQs, and contacts.",
      si: "පරිශීලක මාර්ගෝපදේශය, ප්‍රවේශවීමේ මාර්ගෝපදේශය, තිර කියවනයේ උදව්, නිතර අසන ප්‍රශ්න සහ සම්බන්ධතා.",
      ta: "பயனர் வழிகாட்டி, அணுகல் வழிகாட்டி, திரைவாசிப்பு உதவி, கேள்விகள் மற்றும் தொடர்புகள்.",
    },
    icon: BadgeHelp,
    category: "help",
  },
]

export const quickAccessItems = navigationItems.filter((item) =>
  ["benefits", "apply", "assistive", "employment", "mental", "complaints"].includes(
    item.id
  )
)

export const sectionOrder: SectionId[] = [
  "about",
  "benefits",
  "services",
  "healthcare",
  "mental",
  "education",
  "employment",
  "assistive",
  "rights",
  "community",
  "complaints",
  "accessibility",
  "help",
]

export const sections: Record<SectionId, PortalSection> = {
  home: {
    id: "home",
    href: "/",
    title: {
      en: "National Inclusive Information Access Portal",
      si: "ජාතික ඇතුළත් තොරතුරු ප්‍රවේශ ද්වාරය",
      ta: "தேசிய உட்புகுத்தப்பட்ட தகவல் அணுகல் தளம்",
    },
    summary: {
      en: "A single, accessible, trilingual entry point for disability information, services, rights, and support in Sri Lanka.",
      si: "ශ්‍රී ලංකාවේ ආබාධිත තොරතුරු, සේවා, හිමිකම් සහ සහාය සඳහා ප්‍රවේශවිය හැකි ත්‍රිභාෂා එක් පිවිසුමක්.",
      ta: "இலங்கையில் மாற்றுத்திறன் தகவல், சேவைகள், உரிமைகள் மற்றும் ஆதரவுக்கான அணுகக்கூடிய மும்மொழி ஒரே நுழைவாயில்.",
    },
    requirementIds: ["FR001", "FR002", "FR004", "FR005", "FR006", "FR007"],
    primaryActions: ["Search across all modules", "Open crisis support", "Choose language"],
    cards: [],
  },
  about: {
    id: "about",
    href: "/about",
    title: { en: "About the Portal", si: "ද්වාරය පිළිබඳව", ta: "தளத்தைப் பற்றி" },
    summary: {
      en: "Purpose, ministry role, disability policy, UNCRPD references, advisory committee, and stakeholders.",
      si: "අරමුණ, අමාත්‍යාංශ භූමිකාව, ආබාධිත ප්‍රතිපත්ති, UNCRPD යොමු, උපදේශක කමිටුව සහ පාර්ශ්වකරුවන්.",
      ta: "நோக்கம், அமைச்சக பங்கு, மாற்றுத்திறன் கொள்கை, UNCRPD குறிப்புகள், ஆலோசனைக் குழு மற்றும் பங்குதாரர்கள்.",
    },
    requirementIds: ["AC15"],
    primaryActions: ["Publish advisory committee credits", "Show policy framework", "Show ministry ownership"],
    cards: [
      { title: "Vision and mission", description: "Explain the portal purpose in plain language." },
      { title: "Policy framework", description: "List national disability policy, UNCRPD, and PDPA alignment." },
      { title: "Partners", description: "Credit ministry, advisory committee, disability organizations, and stakeholders." },
    ],
  },
  benefits: {
    id: "benefits",
    href: "/welfare-benefits",
    title: { en: "Disability Welfare Benefits", si: "ආබාධිත සුභසාධන ප්‍රතිලාභ", ta: "மாற்றுத்திறன் நல நன்மைகள்" },
    summary: {
      en: "Search benefits, check eligibility, download required document checklists, and follow step-by-step application guides.",
      si: "ප්‍රතිලාභ සොයන්න, සුදුසුකම් පරීක්ෂා කරන්න, අවශ්‍ය ලේඛන ලැයිස්තු බාගන්න, සහ පියවරෙන් පියවර අයදුම් මාර්ගෝපදේශ අනුගමනය කරන්න.",
      ta: "நன்மைகளைத் தேடுங்கள், தகுதியைச் சரிபார்க்கவும், தேவையான ஆவண பட்டியல்களைப் பதிவிறக்கவும், படிப்படியான விண்ணப்ப வழிகாட்டிகளைப் பின்பற்றவும்.",
    },
    requirementIds: ["FR010", "FR011", "FR012", "FR013", "FR014"],
    primaryActions: ["Search benefits", "Check eligibility", "Download checklist"],
    cards: [
      { title: "Financial assistance", description: "Disability allowance, social security, pension, and financial aid." },
      { title: "Assistive device support", description: "Wheelchairs, hearing aids, prosthetics, mobility aids, and subsidies." },
      { title: "Housing and transport", description: "Accessible housing, home modifications, concessions, and travel subsidies." },
    ],
  },
  apply: {
    id: "apply",
    href: "/apply-for-services",
    title: { en: "Apply for Services", si: "සේවා සඳහා අයදුම් කරන්න", ta: "சேவைகளுக்கு விண்ணப்பிக்கவும்" },
    summary: {
      en: "Step-by-step application support for benefits, service requests, documents, and guided eligibility decisions.",
      si: "ප්‍රතිලාභ, සේවා ඉල්ලීම්, ලේඛන සහ මාර්ගෝපදේශිත සුදුසුකම් තීරණ සඳහා පියවරෙන් පියවර සහාය.",
      ta: "நன்மைகள், சேவை கோரிக்கைகள், ஆவணங்கள் மற்றும் வழிகாட்டப்பட்ட தகுதி முடிவுகளுக்கான படிப்படியான ஆதரவு.",
    },
    requirementIds: ["FR011", "FR012", "FR013", "NFRU09"],
    primaryActions: ["Start guided questionnaire", "Review required documents", "Find nearest office"],
    cards: [
      { title: "Eligibility checker", description: "Ask plain questions and route users to likely benefits." },
      { title: "Application guides", description: "Use one-topic pages with online and downloadable forms." },
      { title: "Review before submit", description: "Give users a confirmation step for sensitive requests." },
    ],
  },
  services: {
    id: "services",
    href: "/government-services",
    title: { en: "Government Services Directory", si: "රජයේ සේවා නාමාවලිය", ta: "அரசு சேவை அடைவு" },
    summary: {
      en: "Find ministries, departments, service centers, rehabilitation providers, NGOs, contacts, and locations by district.",
      si: "අමාත්‍යාංශ, දෙපාර්තමේන්තු, සේවා මධ්‍යස්ථාන, පුනරුත්ථාපන සපයන්නන්, රාජ්‍ය නොවන සංවිධාන, සම්බන්ධතා සහ ස්ථාන දිස්ත්‍රික්ක අනුව සොයන්න.",
      ta: "அமைச்சுகள், துறைகள், சேவை மையங்கள், மறுவாழ்வு வழங்குநர்கள், தொண்டு அமைப்புகள், தொடர்புகள் மற்றும் இடங்களை மாவட்டப்படி கண்டறியவும்.",
    },
    requirementIds: ["FR020", "FR021", "FR022", "FR023", "FR024", "FR025"],
    primaryActions: ["Search directory", "Filter by district", "Open service map"],
    cards: [
      { title: "Geo service finder", description: "Province, district, and divisional secretariat filtering." },
      { title: "Verified contacts", description: "Name, address, phone, email, website, and operating hours." },
      { title: "Rights directory", description: "Human rights and disability rights bodies with verified links." },
    ],
  },
  healthcare: {
    id: "healthcare",
    href: "/healthcare",
    title: { en: "Healthcare and Rehabilitation", si: "සෞඛ්‍ය සහ පුනරුත්ථාපනය", ta: "சுகாதாரம் மற்றும் மறுவாழ்வு" },
    summary: {
      en: "Medical services, disability assessment, rehabilitation hospitals, therapy, and community-based support.",
      si: "වෛද්‍ය සේවා, ආබාධිත ඇගයීම්, පුනරුත්ථාපන රෝහල්, චිකිත්සා සහ ප්‍රජා පදනම් සහාය.",
      ta: "மருத்துவ சேவைகள், மாற்றுத்திறன் மதிப்பீடு, மறுவாழ்வு மருத்துவமனைகள், சிகிச்சை மற்றும் சமூக அடிப்படையிலான ஆதரவு.",
    },
    requirementIds: ["F-03", "NFRU08", "NFRU09"],
    primaryActions: ["Find medical services", "Find rehabilitation", "Read service guide"],
    cards: [
      { title: "Disability assessment", description: "Plain-language guide to assessment pathways and documents." },
      { title: "Rehabilitation", description: "Hospitals, therapy services, and community rehabilitation programs." },
      { title: "Explainer media", description: "Short videos, transcripts, captions, and sign language support." },
    ],
  },
  mental: {
    id: "mental",
    href: "/mental-health",
    title: { en: "Mental Health and Psychosocial Support", si: "මානසික සෞඛ්‍ය සහ මනෝසමාජ සහාය", ta: "மனநலம் மற்றும் உளசமூக ஆதரவு" },
    summary: {
      en: "Low-stress, stigma-free access to crisis support, counselling, peer networks, recovery resources, and self-help.",
      si: "අර්බුද සහාය, උපදේශනය, සම ජාල, ප්‍රතිසාධන සම්පත් සහ ස්වයං සහාය සඳහා අඩු ආතති, අපකීර්තියෙන් තොර ප්‍රවේශය.",
      ta: "நெருக்கடி ஆதரவு, ஆலோசனை, சக வலைப்பின்னல்கள், மீட்பு வளங்கள் மற்றும் சுய உதவிக்கான குறைந்த அழுத்த, களங்கமற்ற அணுகல்.",
    },
    requirementIds: ["FR007", "F-14", "NFRU10", "AC13"],
    primaryActions: ["Get help now", "Find counselling", "Use self-help resources"],
    cards: [
      { title: "Crisis support", description: "Immediate contacts, hotlines, 24/7 counselling, and emergency information." },
      { title: "Anonymous self-help", description: "Guides, stress tools, wellbeing resources, and recovery stories without login." },
      { title: "Caregiver support", description: "Family guidance, burnout prevention, respite care, and support groups." },
    ],
  },
  education: {
    id: "education",
    href: "/education",
    title: { en: "Education and Skills Development", si: "අධ්‍යාපනය සහ කුසලතා සංවර්ධනය", ta: "கல்வி மற்றும் திறன் மேம்பாடு" },
    summary: {
      en: "Inclusive education policies, schools, scholarships, vocational training, and digital literacy programs.",
      si: "ඇතුළත් අධ්‍යාපන ප්‍රතිපත්ති, පාසල්, ශිෂ්‍යත්ව, වෘත්තීය පුහුණුව සහ ඩිජිටල් සාක්ෂරතා වැඩසටහන්.",
      ta: "ஒன்றிணைந்த கல்வி கொள்கைகள், பள்ளிகள், உதவித்தொகைகள், தொழிற்பயிற்சி மற்றும் டிஜிட்டல் அறிவு திட்டங்கள்.",
    },
    requirementIds: ["FR030"],
    primaryActions: ["Find schools", "Find scholarships", "Find training"],
    cards: [
      { title: "Inclusive schools", description: "Programs, eligibility, contact details, and application information." },
      { title: "Vocational training", description: "District-level centers and digital literacy options." },
      { title: "Scholarships", description: "Plain-language funding and grant guides." },
    ],
  },
  employment: {
    id: "employment",
    href: "/employment",
    title: { en: "Employment and Entrepreneurship", si: "රැකියා සහ ව්‍යවසායකත්වය", ta: "வேலைவாய்ப்பு மற்றும் தொழில் முனைவு" },
    summary: {
      en: "Inclusive job opportunities, employer guidance, workplace accessibility, microfinance, and self-employment support.",
      si: "ඇතුළත් රැකියා අවස්ථා, සේවායෝජක මාර්ගෝපදේශ, වැඩබිම් ප්‍රවේශවීම, ක්ෂුද්‍ර මූල්‍ය සහ ස්වයං රැකියා සහාය.",
      ta: "ஒன்றிணைந்த வேலை வாய்ப்புகள், முதலாளி வழிகாட்டல், பணியிட அணுகல், சிறு நிதி மற்றும் சுயதொழில் ஆதரவு.",
    },
    requirementIds: ["FR031", "FR032"],
    primaryActions: ["Browse jobs", "View employer resources", "Find entrepreneurship support"],
    cards: [
      { title: "Accessible jobs", description: "Filter by job type, location, and accommodation offered." },
      { title: "Employer resources", description: "Inclusive hiring, quota requirements, and workplace standards." },
      { title: "Entrepreneurship", description: "Microfinance and self-employment support." },
    ],
  },
  assistive: {
    id: "assistive",
    href: "/assistive-technology",
    title: { en: "Assistive Technology", si: "උපකාරක තාක්ෂණය", ta: "உதவி தொழில்நுட்பம்" },
    summary: {
      en: "Assistive devices, suppliers, subsidies, and technology updates for mobility, vision, hearing, and communication.",
      si: "චලනය, දෘෂ්ටි, ශ්‍රවණ සහ සන්නිවේදනය සඳහා උපකාරක උපකරණ, සැපයුම්කරුවන්, සහනාධාර සහ තාක්ෂණ යාවත්කාලීන.",
      ta: "இயக்கம், பார்வை, கேட்கும் திறன் மற்றும் தொடர்புக்கான உதவி சாதனங்கள், வழங்குநர்கள், மானியங்கள் மற்றும் தொழில்நுட்ப புதுப்பிப்புகள்.",
    },
    requirementIds: ["FR033", "FR034"],
    primaryActions: ["Browse catalog", "Find suppliers", "Check subsidies"],
    cards: [
      { title: "Device catalog", description: "Mobility, vision, hearing, communication, and daily living categories." },
      { title: "Supplier directory", description: "Government and private suppliers with verified contacts." },
      { title: "Subsidies", description: "Eligibility and application guidance for available support." },
    ],
  },
  rights: {
    id: "rights",
    href: "/rights-legal",
    title: { en: "Rights and Legal Support", si: "හිමිකම් සහ නීති සහාය", ta: "உரிமைகள் மற்றும் சட்ட ஆதரவு" },
    summary: {
      en: "A top-level rights area for disability rights, human rights, legal aid, UNCRPD, policy, and regulations.",
      si: "ආබාධිත හිමිකම්, මානව හිමිකම්, නීති ආධාර, UNCRPD, ප්‍රතිපත්ති සහ රෙගුලාසි සඳහා ඉහළ මට්ටමේ හිමිකම් අංශයක්.",
      ta: "மாற்றுத்திறன் உரிமைகள், மனித உரிமைகள், சட்ட உதவி, UNCRPD, கொள்கை மற்றும் விதிமுறைகளுக்கான முதன்மை உரிமைப் பகுதி.",
    },
    requirementIds: ["FR025", "AC14"],
    primaryActions: ["Find legal aid", "Read rights guide", "Open human rights directory"],
    cards: [
      { title: "Disability rights", description: "Plain-language explanations of rights and protections." },
      { title: "Legal referrals", description: "Legal aid services and verified referral pathways." },
      { title: "Human rights directory", description: "Human Rights Commission and related bodies." },
    ],
  },
  community: {
    id: "community",
    href: "/community",
    title: { en: "Community and Support Networks", si: "ප්‍රජා සහ සහාය ජාල", ta: "சமூக மற்றும் ஆதரவு வலைப்பின்னல்கள்" },
    summary: {
      en: "Disability organizations, peer support, caregiver resources, moderated communities, and volunteer opportunities.",
      si: "ආබාධිත සංවිධාන, සම සහාය, රැකබලා ගන්නන්ගේ සම්පත්, පාලනය කළ ප්‍රජා සහ ස්වේච්ඡා අවස්ථා.",
      ta: "மாற்றுத்திறன் அமைப்புகள், சக ஆதரவு, பராமரிப்பாளர் வளங்கள், வழிநடத்தப்பட்ட சமூகங்கள் மற்றும் தன்னார்வ வாய்ப்புகள்.",
    },
    requirementIds: ["F-08"],
    primaryActions: ["Find organizations", "Find peer support", "Find caregiver resources"],
    cards: [
      { title: "Organizations database", description: "NGOs, advocacy groups, and community service providers." },
      { title: "Peer support", description: "Online and in-person support groups with safeguarding guidance." },
      { title: "Caregiver pathway", description: "Family guidance, support groups, and financial support information." },
    ],
  },
  complaints: {
    id: "complaints",
    href: "/complaints",
    title: { en: "Complaints and Feedback", si: "පැමිණිලි සහ ප්‍රතිචාර", ta: "புகார்கள் மற்றும் கருத்து" },
    summary: {
      en: "Submit service complaints, accessibility issues, discrimination concerns, service requests, and track cases by reference number.",
      si: "සේවා පැමිණිලි, ප්‍රවේශ ගැටලු, වෙනස්කම් කිරීමේ ගැටලු, සේවා ඉල්ලීම් ඉදිරිපත් කර යොමු අංකයෙන් තත්ත්වය පරීක්ෂා කරන්න.",
      ta: "சேவை புகார்கள், அணுகல் பிரச்சினைகள், பாகுபாடு கவலைகள், சேவை கோரிக்கைகள் சமர்ப்பித்து குறிப்பு எண்ணால் நிலையைப் பார்க்கவும்.",
    },
    requirementIds: ["FR040", "FR041", "FR042", "FR043", "FR044", "FR045", "AC08"],
    primaryActions: ["Submit complaint", "Track complaint", "Request assistance"],
    cards: [
      { title: "Accessible form", description: "Clear labels, specific errors, and review before submission." },
      { title: "Reference tracking", description: "Unique reference number without requiring an account." },
      { title: "Admin workflow", description: "Assignment, response, closure, notifications, and audit trail." },
    ],
  },
  accessibility: {
    id: "accessibility",
    href: "/accessibility",
    title: { en: "Accessibility Tools", si: "ප්‍රවේශවීමේ මෙවලම්", ta: "அணுகல் கருவிகள்" },
    summary: {
      en: "Accessibility statement, toolbar guide, screen reader support, sign language support, and WCAG 2.2 AA commitments.",
      si: "ප්‍රවේශවීමේ ප්‍රකාශය, මෙවලම් තීරු මාර්ගෝපදේශය, තිර කියවනයේ සහාය, සංඥා භාෂා සහාය සහ WCAG 2.2 AA කැපවීම්.",
      ta: "அணுகல் அறிக்கை, கருவிப்பட்டி வழிகாட்டி, திரைவாசிப்பு ஆதரவு, சைகை மொழி ஆதரவு மற்றும் WCAG 2.2 AA உறுதிகள்.",
    },
    requirementIds: ["NFRU01", "NFRU02", "NFRU03", "NFRU04", "NFRU05", "NFRU06", "NFRU10"],
    primaryActions: ["Open toolbar", "Read screen reader guide", "Read accessibility statement"],
    cards: [
      { title: "Toolbar", description: "Font size, contrast, TTS, low-stress, and visual impairment modes." },
      { title: "Assistive technology", description: "NVDA, JAWS, VoiceOver, and TalkBack support goals." },
      { title: "Media access", description: "Captions, transcripts, audio descriptions, and Sri Lanka Sign Language." },
    ],
  },
  help: {
    id: "help",
    href: "/help",
    title: { en: "Help and Support", si: "උදව් සහ සහාය", ta: "உதவி மற்றும் ஆதரவு" },
    summary: {
      en: "FAQs, user guide, contact support, emergency contacts, and guidance for using the portal.",
      si: "නිතර අසන ප්‍රශ්න, පරිශීලක මාර්ගෝපදේශය, සහාය සම්බන්ධතා, හදිසි සම්බන්ධතා සහ ද්වාරය භාවිත කිරීමේ මාර්ගෝපදේශ.",
      ta: "அடிக்கடி கேட்கப்படும் கேள்விகள், பயனர் வழிகாட்டி, ஆதரவு தொடர்புகள், அவசர தொடர்புகள் மற்றும் தளத்தைப் பயன்படுத்தும் வழிகாட்டல்.",
    },
    requirementIds: ["NFRU08", "NFRU09"],
    primaryActions: ["Read FAQs", "Contact support", "Open emergency help"],
    cards: [
      { title: "User guide", description: "How to search, filter, use language tools, and find services." },
      { title: "Screen reader guide", description: "Keyboard, headings, landmarks, and search instructions." },
      { title: "Contact support", description: "Phone, email, and ministry contact details." },
    ],
  },
  privacy: {
    id: "privacy",
    href: "/privacy",
    title: { en: "Privacy Policy", si: "පුද්ගලිකත්ව ප්‍රතිපත්තිය", ta: "தனியுரிமைக் கொள்கை" },
    summary: {
      en: "How the portal handles personal data, local preferences, cookies, consent, and PDPA responsibilities.",
      si: "ද්වාරය පුද්ගලික දත්ත, දේශීය මනාප, කුකීස්, එකඟතාව සහ PDPA වගකීම් කළමනාකරණය කරන ආකාරය.",
      ta: "தளம் தனிப்பட்ட தரவு, உள்ளூர் விருப்பங்கள், குக்கீகள், சம்மதம் மற்றும் PDPA பொறுப்புகளை கையாளும் விதம்.",
    },
    requirementIds: ["NFRS05"],
    primaryActions: ["Review data use", "Reset preferences", "Contact data officer"],
    cards: [
      { title: "Local preferences", description: "Language, contrast, font size, and low-stress settings are stored locally." },
      { title: "Consent", description: "Sensitive personal information requires explicit consent." },
      { title: "Data rights", description: "PDPA-aligned notice and contact process." },
    ],
  },
  terms: {
    id: "terms",
    href: "/terms",
    title: { en: "Terms of Use", si: "භාවිත නියමයන්", ta: "பயன்பாட்டு விதிமுறைகள்" },
    summary: {
      en: "Use of the portal, service information, external links, and responsible reporting of issues.",
      si: "ද්වාර භාවිතය, සේවා තොරතුරු, බාහිර සබැඳි සහ ගැටලු වගකීමෙන් වාර්තා කිරීම.",
      ta: "தளப் பயன்பாடு, சேவை தகவல், வெளி இணைப்புகள் மற்றும் பிரச்சினைகளை பொறுப்புடன் அறிக்கை செய்வது.",
    },
    requirementIds: ["VDP"],
    primaryActions: ["Read terms", "Report vulnerability", "Contact support"],
    cards: [
      { title: "Service information", description: "Information must be verified and last-updated dates shown." },
      { title: "External links", description: "Users are warned before context changes." },
      { title: "VDP", description: "Responsible reporting path for security flaws." },
    ],
  },
  contact: {
    id: "contact",
    href: "/contact",
    title: { en: "Contact Us", si: "අප අමතන්න", ta: "எங்களை தொடர்பு கொள்ளுங்கள்" },
    summary: {
      en: "Ministry contact details, support channels, emergency contacts, and office information.",
      si: "අමාත්‍යාංශ සම්බන්ධතා, සහාය නාලිකා, හදිසි සම්බන්ධතා සහ කාර්යාල තොරතුරු.",
      ta: "அமைச்சக தொடர்புகள், ஆதரவு வாயில்கள், அவசர தொடர்புகள் மற்றும் அலுவலக தகவல்.",
    },
    requirementIds: ["FR023", "FR006"],
    primaryActions: ["Call helpline", "Email support", "Find office"],
    cards: [
      { title: "Helpline", description: "1926 mental health helpline and 119 emergency service placeholders pending ministry verification." },
      { title: "Email", description: "Official support inbox to be confirmed before launch." },
      { title: "Office", description: "Ministry office and service center details." },
    ],
  },
}

export const announcements = [
  {
    title: "Disability allowance applications require verified service data",
    date: "2026-06-06",
    summary:
      "The portal now reserves a dedicated benefit page pattern for eligibility, documents, plain language guides, and Easy-to-Read versions.",
  },
  {
    title: "Accessibility-first implementation pass started",
    date: "2026-06-06",
    summary:
      "Foundational WCAG 2.2 AA support is being added across navigation, language, contrast, reduced motion, and page structure.",
  },
  {
    title: "Mental health and psychosocial support is a top-level pathway",
    date: "2026-06-06",
    summary:
      "Crisis support, low-stress mode, anonymous self-help, and caregiver support are treated as core portal requirements.",
  },
]

export const featuredPrograms = [
  "Disability allowance and social security",
  "Assistive device support",
  "Accessible housing and home modifications",
  "Transport concessions and travel subsidies",
]

export const allSearchableItems = [
  ...navigationItems,
  {
    id: "map",
    href: "/government-services",
    label: { en: "Geo Service Finder", si: "භූ සේවා සෙවුම", ta: "புவி சேவை தேடல்" },
    description: {
      en: "Find services by province, district, divisional secretariat, and interactive map.",
      si: "පළාත, දිස්ත්‍රික්කය, ප්‍රාදේශීය ලේකම් කොට්ඨාසය සහ අන්තර්ක්‍රියාකාරී සිතියම අනුව සේවා සොයන්න.",
      ta: "மாவட்டம், பிரதேச செயலகம் மற்றும் வரைபடம் மூலம் சேவைகளை கண்டறியவும்.",
    },
    shortcut: "s" as const,
    icon: MapPinned,
    category: "services" as const,
  },
  {
    id: "security",
    href: "/privacy",
    label: { en: "Privacy and Security", si: "පුද්ගලිකත්වය සහ ආරක්ෂාව", ta: "தனியுரிமை மற்றும் பாதுகாப்பு" },
    description: {
      en: "PDPA, HTTPS, consent, preference storage, vulnerability disclosure, and safe data handling.",
      si: "PDPA, HTTPS, එකඟතාව, මනාප ගබඩා කිරීම, දුර්වලතා වාර්තා කිරීම සහ ආරක්ෂිත දත්ත කළමනාකරණය.",
      ta: "PDPA, HTTPS, சம்மதம், விருப்ப சேமிப்பு, பாதிப்பு அறிக்கை மற்றும் பாதுகாப்பான தரவு கையாளல்.",
    },
    shortcut: "?" as const,
    icon: ShieldCheck,
    category: "help" as const,
  },
  {
    id: "smart-search",
    href: "/",
    label: { en: "Smart Search", si: "බුද්ධිමත් සෙවීම", ta: "செயல்திறன் தேடல்" },
    description: {
      en: "Search by keyword, disability type, location, and service category.",
      si: "මූලපදය, ආබාධිත වර්ගය, ස්ථානය සහ සේවා කාණ්ඩය අනුව සොයන්න.",
      ta: "முக்கிய சொல், மாற்றுத்திறன் வகை, இடம் மற்றும் சேவை வகை மூலம் தேடுங்கள்.",
    },
    shortcut: "h" as const,
    icon: Search,
    category: "home" as const,
  },
]

export function getSectionByHref(href: string) {
  return Object.values(sections).find((section) => section.href === href)
}

