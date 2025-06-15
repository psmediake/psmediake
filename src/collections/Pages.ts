import type { CollectionConfig } from 'payload'
import slugify from 'slugify'
import { Hero } from '@/blocks/homepage/hero/schema'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { name: 'title', label: 'Title', type: 'text', required: true },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value, { lower: true, strict: true })
            if (data?.title) return slugify(data.title, { lower: true, strict: true })
            return value
          },
        ],
      },
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero],
    },
  ],
}
