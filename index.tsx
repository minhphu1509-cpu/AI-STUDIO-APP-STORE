import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { I18nProvider } from './contexts/I18nContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';
import { WishlistProvider } from './contexts/WishlistContext.tsx';
import { ToastProvider } from './contexts/ToastContext.tsx';
import { AppProvider } from './contexts/AppContext.tsx';
import { PaymentProvider } from './contexts/PaymentContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { MarketplaceProvider } from './contexts/MarketplaceContext.tsx';
import { AnalyticsProvider } from './contexts/AnalyticsContext.tsx';
import { NewsProvider } from './contexts/NewsContext.tsx';
import { SiteContentProvider } from './contexts/SiteContentContext.tsx';
import { ProjectsProvider } from './contexts/ProjectsContext.tsx';
import { ComparisonProvider } from './contexts/ComparisonContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { CurrencyProvider } from './contexts/CurrencyContext.tsx';
import { AdminProvider } from './contexts/AdminContext.tsx';
import { TrainingProvider } from './contexts/TrainingContext.tsx';
import { ChatLogProvider } from './contexts/ChatLogContext.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

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