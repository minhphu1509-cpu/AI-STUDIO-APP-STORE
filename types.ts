
export type Locale = 'vi' | 'en';

export type DemoImage = {
  url: string;
  caption: {
    vi: string;
    en: string;
  };
};

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Comment {
  id: number;
  authorEmail: string;
  text: string;
  timestamp: string;
}

export interface App {
  id: number;
  image: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  price: string;
  originalPrice?: string;
  discountPercentage?: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  demoImages?: DemoImage[];
  reviews?: Review[];
  comments?: Comment[];
  authorEmail?: string;
  paidDownloadUrl?: string;
  freeDownloadUrl?: string;
  trialUrl?: string;
}

export interface PurchasedApp extends App {
  downloadUrl: string;
}

export interface Project {
  id: number;
  image: string;
  client: string;
  industry: { vi: string; en: string };
  title: { vi: string; en: string };
  challenge: { vi: string; en: string };
  solution: { vi: string; en: string };
  outcome: { vi: string; en: string };
  tags: string[];
  demoImages?: DemoImage[];
}

export interface TrainingPackage {
  id: number;
  iconType: 'seedling' | 'trending' | 'master';
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  price: string;
  features: { vi: string[]; en: string[] };
  featured?: boolean;
}

export interface PromoCode {
  code: string;
  percentage: number;
}

export interface Campaign {
  id: number;
  name: { vi: string; en: string };
  description: { vi: string; en: string };
  discountPercentage: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  bannerUrl?: string;
}

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

export type PaymentMethod = 'bank' | 'momo' | 'paypal';

export type UserRole = 'admin' | 'user';
export type UserStatus = 'active' | 'banned';

export interface User {
  id?: string;
  email: string;
  displayName?: string;
  role?: UserRole;
  status?: UserStatus;
  purchaseHistory?: PurchasedApp[];
  joinedAt?: string;
  referrerId?: string;
  referralCode?: string;
  revenueAdjustment?: number;
  isReferralPartner?: boolean; // New field
}

export type OrderStatus = 'pending' | 'completed' | 'refunded';

export interface Order {
  id: string;
  userId: string;
  userEmail: string;
  items: PurchasedApp[];
  total: number;
  date: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  referralCodeUsed?: string;
  referrerId?: string;
  commissionApplied?: {
    referrerId: string;
    rate: number;
    amount: number;
    levelAtSnapshot: number;
  };
}

export interface CommissionTier {
  level: number;
  threshold: number;
  rate: number; // 0.20 to 0.50
  label: { vi: string; en: string };
}

export interface ReferralStats {
  userId: string;
  userEmail: string;
  totalF1Revenue: number;
  currentLevel: number;
  totalCommissionEarned: number;
  referralCount: number;
  revenueAdjustment: number;
}

export type AnalyticsEventType = 'APP_VIEW' | 'ADD_TO_CART' | 'CHECKOUT_START' | 'ORDER_COMPLETED';

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  timestamp: number;
  userId?: string;
  appId?: number;
  appName?: string;
  orderDetails?: {
    items: PurchasedApp[];
    total: number;
  };
}

export type NewsPostType = 'youtube' | 'social' | 'link';

export interface NewsPost {
  id: number;
  type: NewsPostType;
  url: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  source: string;
  timestamp: string;
  imageUrl?: string;
}

export type SiteContentKey = 'terms' | 'privacy' | 'about' | 'careers' | 'press' | 'contact' | 'branding' | 'home';

export interface BilingualContent {
  vi: string;
  en: string;
}

export interface OfficeLocation {
  id: string;
  label_vi: string;
  label_en: string;
  address_vi: string;
  address_en: string;
}

export interface ContactInfoContent {
  email: string;
  phone: string;
  address_vi: string;
  address_en: string;
  locations?: OfficeLocation[];
  zalo: string;
  zaloLink?: string;
  whatsapp: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  instagram?: string;
  linkedin?: string;
}

export interface BrandingContent {
  logoUrl: string;
  bannerUrl: string;
}

export interface HomeContent {
  headline: BilingualContent;
  subheadline: BilingualContent;
}

export interface SiteContent {
  terms: BilingualContent;
  privacy: BilingualContent;
  about: BilingualContent;
  careers: BilingualContent;
  press: BilingualContent;
  contact: ContactInfoContent;
  branding: BrandingContent;
  home: HomeContent;
}

export type DeploymentPlatform = 'vercel' | 'firebase' | 'netlify' | 'render' | 'aws';

export interface ChatLogMessage {
    id: number;
    sender: 'user' | 'ai';
    text: string;
    timestamp: string;
    action?: string;
    image?: string;
}

export interface ChatSession {
    id: string;
    userEmail: string;
    startTime: string;
    messages: ChatLogMessage[];
    status: 'active' | 'archived';
}

export type View = 'marketplace' | 'checkout' | 'confirmation' | 'login' | 'signup' | 'marketplace_full' | 'contact' | 'analytics' | 'site_management' | 'app_management' | 'blog' | 'news_management' | 'careers' | 'press' | 'about' | 'admin_login' | 'profile' | 'projects' | 'custom_ai_development' | 'ai_training' | 'admin_dashboard' | 'project_management' | 'user_management' | 'order_management' | 'training_management' | 'chat_management' | 'campaign_management' | 'ai_website_designer' | 'commission_management' | 'partner_program';
