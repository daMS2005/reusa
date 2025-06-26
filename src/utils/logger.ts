// Centralized logging utility for ReUsa validation

// TypeScript declaration for Plausible Analytics
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void
  }
}

export interface LogEvent {
  action: string
  timestamp: string
  userAgent: string
  sessionId: string
  additionalData?: Record<string, unknown>
}

const isProd = typeof window !== 'undefined' && process.env.NODE_ENV === 'production';

class EventLogger {
  private sessionId: string

  constructor() {
    this.sessionId = this.generateSessionId()
    this.logPageView()
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  private logPageView() {
    this.log('page_view', { page: 'landing' })
  }

  // Send custom event to Plausible Analytics
  private sendToPlausible(eventName: string, props?: Record<string, string | number | boolean>) {
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(eventName, { props })
      // Development logging for Plausible events
      if (!isProd) {
        console.log('📊 Plausible Event:', { eventName, props })
      }
    }
  }

  log(action: string, additionalData?: Record<string, unknown>) {
    const event: LogEvent = {
      action,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      sessionId: this.sessionId,
      additionalData
    }

    // Send to Plausible Analytics
    this.sendToPlausible(action, additionalData as Record<string, string | number | boolean>)

    if (isProd) {
      // Send to internal API route for Vercel logging
      fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      })
    } else {
      // Console logging for development
      console.log('🔍 ReUsa Event:', event)
      // Store in localStorage for persistence
      if (typeof window !== 'undefined') {
        const events = JSON.parse(localStorage.getItem('reusa_events') || '[]')
        events.push(event)
        localStorage.setItem('reusa_events', JSON.stringify(events))
      }
    }

    // TODO: Send to analytics service (Vercel Analytics, Google Analytics, etc.)
    // This is where you'd integrate with your analytics platform
  }

  // Specific action loggers
  logButtonClick(buttonType: string, location?: string) {
    this.log('button_click', { buttonType, location })
  }

  logNewsletterSignup(email: string) {
    this.log('newsletter_signup', { email })
  }

  logInterest(action: string) {
    this.log('interest_expressed', { action })
  }

  // Enhanced tracking functions
  logMainCTA(action: string, section: string) {
    this.log('main_cta_click', { action, section, button_type: 'main_cta' })
  }

  logSecondaryCTA(action: string, section: string) {
    this.log('secondary_cta_click', { action, section, button_type: 'secondary_cta' })
  }

  logFormInteraction(field: string, action: 'focus' | 'blur' | 'input', section: string) {
    this.log('form_field_interaction', { field, action, section })
  }

  logFormSubmission(form: string, section: string, success: boolean) {
    this.log('form_submission', { form, section, success })
  }

  logSocialClick(platform: string, location: string) {
    this.log('social_click', { platform, location })
  }

  logContactClick(method: string, location: string) {
    this.log('contact_click', { method, location })
  }

  logNavigationClick(destination: string, location: string) {
    this.log('navigation_click', { destination, location })
  }

  getEvents(): LogEvent[] {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('reusa_events') || '[]')
    }
    return []
  }

  clearEvents() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('reusa_events')
    }
  }
}

export const eventLogger = new EventLogger() 

export function handleNewsletterSignup(email: string) {
  try {
    // Logic to handle newsletter signup
    eventLogger.logNewsletterSignup(email)
  } catch (error: unknown) {
    console.error('Newsletter signup error:', error)
    eventLogger.log('newsletter_error', { error: error instanceof Error ? error.message : 'Unknown error' })
  }
} 