// Centralized logging utility for ReUsa validation
export interface LogEvent {
  action: string
  timestamp: string
  userAgent: string
  sessionId: string
  additionalData?: Record<string, any>
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

  log(action: string, additionalData?: Record<string, any>) {
    const event: LogEvent = {
      action,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      sessionId: this.sessionId,
      additionalData
    }

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