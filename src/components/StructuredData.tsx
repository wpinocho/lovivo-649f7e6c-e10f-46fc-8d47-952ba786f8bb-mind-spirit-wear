import { useEffect } from 'react'

export const OrganizationStructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mind Spirit Body",
      "description": "Premium wellness clothing for mindful living",
      "url": typeof window !== 'undefined' ? window.location.origin : '',
      "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.jpg` : '',
      "sameAs": []
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    script.id = 'organization-structured-data'
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById('organization-structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return null
}