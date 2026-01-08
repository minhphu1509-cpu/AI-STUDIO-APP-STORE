import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nProvider } from './contexts/I18nContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { ToastProvider } from './contexts/ToastContext';
import { AppProvider } from './contexts/AppContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { AuthProvider } from './contexts/AuthContext';
import { MarketplaceProvider } from './contexts/MarketplaceContext';
import { AnalyticsProvider } from './contexts/AnalyticsContext';
import { NewsProvider } from './contexts/NewsContext';
import { SiteContentProvider } from './contexts/SiteContentContext';
import { ProjectsProvider } from './contexts/ProjectsContext';
import { ComparisonProvider } from './contexts/ComparisonContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import { AdminProvider } from './contexts/AdminContext';
import { TrainingProvider } from './contexts/TrainingContext';
import { ChatLogProvider } from './contexts/ChatLogContext';
import ErrorBoundary from './components/ErrorBoundary';

// Register Service Worker for Offline Support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('[Service Worker] Registered', reg))
      .catch(err => console.log('[Service Worker] Registration failed', err));
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <ThemeProvider>
            <I18nProvider>
            <CurrencyProvider>
                <AppProvider>
                    <ToastProvider>
                    <AuthProvider>
                        <AnalyticsProvider>
                        <SiteContentProvider>
                            <MarketplaceProvider>
                            <ProjectsProvider>
                            <TrainingProvider>
                                <AdminProvider>
                                    <NewsProvider>
                                    <CartProvider>
                                        <WishlistProvider>
                                        <PaymentProvider>
                                            <ComparisonProvider>
                                            <ChatLogProvider>
                                                <App />
                                            </ChatLogProvider>
                                            </ComparisonProvider>
                                        </PaymentProvider>
                                        </WishlistProvider>
                                    </CartProvider>
                                    </NewsProvider>
                                </AdminProvider>
                            </TrainingProvider>
                            </ProjectsProvider>
                            </MarketplaceProvider>
                        </SiteContentProvider>
                        </AnalyticsProvider>
                    </AuthProvider>
                    </ToastProvider>
                </AppProvider>
            </CurrencyProvider>
            </I18nProvider>
        </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);