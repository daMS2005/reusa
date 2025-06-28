'use client'

import { useState, useEffect } from 'react'
import { eventLogger, LogEvent } from '@/utils/logger'

export default function AnalyticsDashboard() {
  const [events, setEvents] = useState<LogEvent[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const loadEvents = () => {
      const storedEvents = eventLogger.getEvents()
      setEvents(storedEvents)
    }

    loadEvents()
    
    // Refresh events every 5 seconds
    const interval = setInterval(loadEvents, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const getButtonClickStats = () => {
    const buttonClicks = events.filter(event => event.action === 'button_click')
    const stats: Record<string, number> = {}
    
    buttonClicks.forEach(event => {
      const buttonType = String(event.additionalData?.buttonType || 'unknown')
      stats[buttonType] = (stats[buttonType] || 0) + 1
    })
    
    return stats
  }

  const getNewsletterSignups = () => {
    return events.filter(event => event.action === 'newsletter_signup').length
  }

  const clearEvents = () => {
    eventLogger.clearEvents()
    setEvents([])
    eventLogger.logAnalyticsAction('clear_events')
  }

  const exportEvents = () => {
    const dataStr = JSON.stringify(events, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'reusa-analytics.json'
    link.click()
    eventLogger.logAnalyticsAction('export')
  }

  const buttonStats = getButtonClickStats()
  const newsletterCount = getNewsletterSignups()

  if (!isVisible) {
    return (
      <button
        onClick={() => {
          setIsVisible(true)
          eventLogger.logAnalyticsAction('open')
        }}
        className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-full shadow-lg z-50 transition-all duration-300"
        title="Ver Analytics"
      >
        <span className="text-lg sm:text-xl">📊</span>
      </button>
    )
  }

  return (
    <div className="fixed inset-4 sm:bottom-4 sm:right-4 sm:inset-auto bg-white border border-gray-200 rounded-lg shadow-xl p-4 sm:p-6 w-auto sm:w-80 max-h-[calc(100vh-2rem)] sm:max-h-96 overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-800">Analytics Dashboard</h3>
        <button
          onClick={() => {
            setIsVisible(false)
            eventLogger.logAnalyticsAction('close')
          }}
          className="text-gray-500 hover:text-gray-700 p-1"
        >
          <span className="text-lg">✕</span>
        </button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-xs sm:text-sm text-green-600 font-medium">Total Events</div>
            <div className="text-xl sm:text-2xl font-bold text-green-800">{events.length}</div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-xs sm:text-sm text-blue-600 font-medium">Newsletter Signups</div>
            <div className="text-xl sm:text-2xl font-bold text-blue-800">{newsletterCount}</div>
          </div>
        </div>

        {/* Button Click Stats */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Button Clicks</h4>
          <div className="space-y-1 sm:space-y-2">
            {Object.entries(buttonStats).map(([button, count]) => (
              <div key={button} className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-gray-600 capitalize">{button.replace('_', ' ')}</span>
                <span className="font-semibold text-gray-800">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Recent Events</h4>
          <div className="space-y-1 max-h-24 sm:max-h-32 overflow-y-auto">
            {events.slice(-5).reverse().map((event, index) => (
              <div key={index} className="text-xs text-gray-500 border-l-2 border-green-200 pl-2">
                <div className="font-medium">{event.action}</div>
                <div>{new Date(event.timestamp).toLocaleTimeString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={clearEvents}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm py-2 px-3 rounded transition-colors duration-300"
          >
            Clear Events
          </button>
          <button
            onClick={exportEvents}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm py-2 px-3 rounded transition-colors duration-300"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  )
} 