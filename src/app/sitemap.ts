import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.zyroxlabs.in/',
      lastModified: new Date('2026-05-05T12:43:35.245Z'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.zyroxlabs.in/about',
      lastModified: new Date('2026-05-05T12:43:35.245Z'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.zyroxlabs.in/services',
      lastModified: new Date('2026-05-05T12:43:35.245Z'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.zyroxlabs.in/our-works',
      lastModified: new Date('2026-05-05T12:43:35.245Z'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.zyroxlabs.in/contact',
      lastModified: new Date('2026-05-05T12:43:35.245Z'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
