
import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import FeaturedApps from './components/FeaturedApps.tsx';
import MarketplacePreview from './components/MarketplacePreview.tsx';
import SubmitCTA from './components/SubmitCTA.tsx';
import Footer from './components/Footer.tsx';
import ToastContainer from './components/ToastContainer.tsx';
import { useApp } from './hooks/useApp.ts';
import AppFormModal from './components/AppFormModal.tsx';
import { useMarketplace } from './hooks/useMarketplace.ts';
import { useToast } from './hooks/useToast.ts';
import { useI18n } from './hooks/useI18n.ts';
import { App as AppType, NewsPost, SiteContentKey, BilingualContent, ContactInfoContent, Project } from './types.ts';
import ContactPage from './components/ContactPage.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import AppDetailModal from './components/AppDetailModal.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import { useAuth } from './hooks/useAuth.ts';
import { useNews } from './hooks/useNews.ts';
import { useSiteContent } from './hooks/useSiteContent.ts';
import TermsOfServiceModal from './components/TermsOfServiceModal.tsx';
import PrivacyPolicyModal from './components/PrivacyPolicyModal.tsx';
import CompareFloatingBar from './components/CompareFloatingBar.tsx';
import CookieConsent from './components/CookieConsent.tsx';
import PromoCodeManagementModal from './components/PromoCodeManagementModal.tsx';
import { useProjects } from './hooks/useProjects.ts';
import DeploymentModal from './components/DeploymentModal.tsx';
import BackToTop from './components/BackToTop.tsx';
import ContactFormModal from './components/ContactFormModal.tsx';
import CampaignBanner from './components/CampaignBanner.tsx';

const OrderConfirmation = lazy(() => import('./components/OrderConfirmation.tsx'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage.tsx'));
const LoginPage = lazy(() => import('./components/LoginPage.tsx'));
const SignupPage = lazy(() => import('./components/SignupPage.tsx'));
const MarketplacePage = lazy(() => import('./components/MarketplacePage.tsx'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard.tsx'));
const SiteManagementPage = lazy(() => import('./components/SiteManagementPage.tsx'));
const AppManagementPage = lazy(() => import('./components/AppManagementPage.tsx'));
const SplashScreen = lazy(() => import('./components/SplashScreen.tsx'));
const BlogPage = lazy(() => import('./components/BlogPage.tsx'));
const NewsManagementPage = lazy(() => import('./components/NewsManagementPage.tsx'));
const NewsFormModal = lazy(() => import('./components/NewsFormModal.tsx'));
const ContentEditModal = lazy(() => import('./components/ContentEditModal.tsx'));
const BrandingEditModal = lazy(() => import('./components/BrandingEditModal.tsx'));
const CareersPage = lazy(() => import('./components/CareersPage.tsx'));
const PressPage = lazy(() => import('./components/PressPage.tsx'));
const AboutPage = lazy(() => import('./components/AboutPage.tsx'));
const AdminLoginPage = lazy(() => import('./components/AdminLoginPage.tsx'));
const ProfilePage = lazy(() => import('./components/ProfilePage.tsx'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage.tsx'));
const CustomAIDevelopmentPage = lazy(() => import('./components/CustomAIDevelopmentPage.tsx'));
const CustomDevCTA = lazy(() => import('./components/CustomDevCTA.tsx'));
const TrainingCTA = lazy(() => import('./components/TrainingCTA.tsx'));
const AITrainingPage = lazy(() => import('./components/AITrainingPage.tsx'));
const AdminDashboardPage = lazy(() => import('./components/AdminDashboardPage.tsx'));
const ProjectManagementPage = lazy(() => import('./components/ProjectManagementPage.tsx'));
const TrainingManagementPage = lazy(() => import('./components/TrainingManagementPage.tsx'));
const UserManagementPage = lazy(() => import('./components/UserManagementPage.tsx'));
const OrderManagementPage = lazy(() => import('./components/OrderManagementPage.tsx'));
const ProjectFormModal = lazy(() => import('./components/ProjectFormModal.tsx'));
const ChatManagementPage = lazy(() => import('./components/ChatManagementPage.tsx'));
const CampaignManagementPage = lazy(() => import('./components/CampaignManagementPage.tsx'));
const AIWebsiteDesigner = lazy(() => import('./components/AIWebsiteDesigner.tsx'));
const CommissionManagementPage = lazy(() => import('./components/CommissionManagementPage.tsx'));
const PartnerProgramPage = lazy(() => import('./components/PartnerProgramPage.tsx'));


const App: React.FC = () => {
  const {
    view,
    isAppFormModalOpen, appToEdit, closeAppFormModal,
    isAppDetailModalOpen, selectedApp, closeAppDetailModal,
    isNewsFormModalOpen, newsPostToEdit, closeNewsFormModal,
    isProjectFormModalOpen, projectToEdit, closeProjectFormModal,
    isContentEditModalOpen, contentToEdit, closeContentEditModal,
    isBrandingModalOpen, closeBrandingModal,
    isTermsModalOpen, closeTermsModal,
    isPrivacyModalOpen, closePrivacyModal,
    isDeploymentModalOpen, appToDeploy, closeDeploymentModal,
    isContactModalOpen, closeContactModal
  } = useApp();
  const { addApp, updateApp } = useMarketplace();
  const { addNewsPost, updateNewsPost } = useNews();
  const { updateSiteContent } = useSiteContent();
  const { addProject, updateProject } = useProjects();
  const { showToast } = useToast();
  const { t } = useI18n();
  const { isAdmin } = useAuth();
  const [showSplash, setShowSplash] = useState(true);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  useEffect(() => {
    console.log("%c AI Studio Marketplace v3.10.0 (Global Campaign Node) ", "background: #FF6A00; color: #000; font-weight: bold; padding: 4px; border-radius: 4px;");

    try {
      if (sessionStorage.getItem('splash_seen')) {
        setShowSplash(false);
      } else {
        sessionStorage.setItem('splash_seen', 'true');
      }
    } catch (e) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const renderView = () => {
    const adminOnlyViews: (typeof view)[] = [
      'analytics',
      'site_management',
      'app_management',
      'news_management',
      'admin_dashboard',
      'project_management',
      'training_management',
      'user_management',
      'order_management',
      'promo_management',
      'chat_management',
      'campaign_management',
      'commission_management'
    ];
    const isAccessingAdminView = adminOnlyViews.includes(view);

    if (isAccessingAdminView && !isAdmin) {
      return (
        <>
          <Hero />
          <FeaturedApps />
          <MarketplacePreview />
          <CustomDevCTA />
          <SubmitCTA />
          <TrainingCTA />
        </>
      );
    }

    switch (view) {
      case 'marketplace':
        return (
          <>
            <Hero />
            <FeaturedApps />
            <MarketplacePreview />
            <CustomDevCTA />
            <SubmitCTA />
            <TrainingCTA />
          </>
        );
      case 'marketplace_full':
        return <MarketplacePage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'confirmation':
        return <OrderConfirmation />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'contact':
        return <ContactPage />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'site_management':
        return <SiteManagementPage />;
      case 'app_management':
        return <AppManagementPage />;
      case 'blog':
        return <BlogPage />;
      case 'news_management':
        return <NewsManagementPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'custom_ai_development':
        return <CustomAIDevelopmentPage />;
      case 'ai_training':
        return <AITrainingPage />;
      case 'careers':
        return <CareersPage />;
      case 'press':
        return <PressPage />;
      case 'about':
        return <AboutPage />;
      case 'admin_login':
        return <AdminLoginPage />;
      case 'profile':
        return <ProfilePage />;
      case 'partner_program':
        return <PartnerProgramPage />;
      case 'admin_dashboard':
        return <AdminDashboardPage onOpenPromo={() => setIsPromoModalOpen(true)} />;
      case 'project_management':
        return <ProjectManagementPage />;
      case 'training_management':
        return <TrainingManagementPage />;
      case 'user_management':
        return <UserManagementPage />;
      case 'order_management':
        return <OrderManagementPage />;
      case 'chat_management':
        return <ChatManagementPage />;
      case 'campaign_management':
        return <CampaignManagementPage />;
      case 'commission_management':
        return <CommissionManagementPage />;
      case 'ai_website_designer':
        return <AIWebsiteDesigner />;
      case 'promo_management':
        return <AdminDashboardPage onOpenPromo={() => setIsPromoModalOpen(true)} />;
      default:
        return null;
    }
  }

  const handleSaveApp = (appData: AppType) => {
    if (appToEdit) {
      updateApp(appData);
      showToast(t('app_updated_successfully'), 'success');
    } else {
      addApp(appData);
      showToast(t('app_added_successfully'), 'success');
    }
    closeAppFormModal();
  };

  const handleSaveNewsPost = (postData: NewsPost) => {
    if (newsPostToEdit) {
      updateNewsPost(postData);
      showToast(t('post_updated_successfully'), 'success');
    } else {
      addNewsPost(postData);
      showToast(t('post_added_successfully'), 'success');
    }
    closeNewsFormModal();
  };

  const handleSaveProject = (projectData: Project) => {
    if (projectToEdit) {
      updateProject(projectData);
      showToast(t('project_updated_successfully'), 'success');
    } else {
      addProject(projectData);
      showToast(t('project_added_successfully'), 'success');
    }
    closeProjectFormModal();
  };

  const handleSaveContent = (key: SiteContentKey, content: BilingualContent | ContactInfoContent) => {
    updateSiteContent(key, content);
    showToast(t('content_updated_successfully'), 'success');
    closeContentEditModal();
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[var(--text-main)] transition-colors duration-500">
      {/* Dynamic Background Decorations */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px] pointer-events-none z-[-1] opacity-[var(--glow-opacity)] transition-opacity duration-1000" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#FF6A00] rounded-full blur-[120px] pointer-events-none z-[-1] opacity-[var(--glow-opacity)] transition-opacity duration-1000" />
      <div className="fixed top-[40%] left-[30%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[150px] pointer-events-none z-[-1] opacity-[var(--glow-opacity)] transition-opacity duration-1000" />

      <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </Suspense>

      <CampaignBanner />
      <Header onOpenPromo={() => setIsPromoModalOpen(true)} />

      <main className="relative z-10 pt-24 sm:pt-28 pb-10">
        <Suspense fallback={<LoadingSpinner />}>
          {renderView()}
        </Suspense>
      </main>

      <Footer />
      <ToastContainer />
      <CompareFloatingBar />
      <CookieConsent />
      <BackToTop />

      <AppFormModal
        isOpen={isAppFormModalOpen}
        onClose={closeAppFormModal}
        onSave={handleSaveApp}
        appToEdit={appToEdit}
      />
      <AppDetailModal
        isOpen={isAppDetailModalOpen}
        onClose={closeAppDetailModal}
        app={selectedApp}
      />

      <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
      <PromoCodeManagementModal isOpen={isPromoModalOpen} onClose={() => setIsPromoModalOpen(false)} />
      <DeploymentModal
        isOpen={isDeploymentModalOpen}
        onClose={closeDeploymentModal}
        app={appToDeploy}
      />
      <ContactFormModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      <Suspense fallback={null}>
        <NewsFormModal
          isOpen={isNewsFormModalOpen}
          onClose={closeNewsFormModal}
          onSave={handleSaveNewsPost}
          postToEdit={newsPostToEdit}
        />
        <ProjectFormModal
          isOpen={isProjectFormModalOpen}
          onClose={closeProjectFormModal}
          onSave={handleSaveProject}
          projectToEdit={projectToEdit}
        />
        <ContentEditModal
          isOpen={isContentEditModalOpen}
          onClose={closeContentEditModal}
          onSave={handleSaveContent}
          contentToEdit={contentToEdit}
        />
        <BrandingEditModal
          isOpen={isBrandingModalOpen}
          onClose={closeBrandingModal}
        />
      </Suspense>
      <ChatWidget />
    </div>
  );
};

export default App;
