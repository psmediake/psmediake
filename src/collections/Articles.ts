import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: ({ req }) => !!req.user,
    read: () => true,
    update: (args) => {
      const { req } = args
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = (args as any).doc

      return (
        req.user?.role === 'admin' || req.user?.id === doc?.author || req.user?.role === 'editor'
      )
    },

    delete: (args) => {
      const { req } = args
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = (args as any).doc

      return req.user?.role === 'admin' || req.user?.id === doc?.author
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'The slug is automatically generated from the title if left empty.',
      },
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
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'video',
      label: 'Video URL',
      type: 'text',
      admin: {
        description: 'Add a youtube video url if you have one but you can leave it empty.',
      },
      defaultValue: '',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'subcategory',
      label: 'Subcategory (Optional)',
      type: 'text',
      required: false,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'breakingNews',
      type: 'checkbox',
      label: 'Breaking News',
      admin: {
        description: 'Check this box to mark the article as breaking news.',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Article',
      admin: {
        description: 'Check this box to feature the article on the homepage.',
      },
    },
    {
      name: 'trending',
      type: 'checkbox',
      label: 'Trending Article',
      admin: {
        description: 'Check this box to mark the article as trending.',
      },
    },

    {
      name: 'readTime',
      type: 'text',
      required: true,
      admin: {
        description: 'Estimated read time in minutes.',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data, operation }) => {
        if (operation === 'create' && req.user) {
          return {
            ...data,
            author: req.user.id,
          }
        }
        return data
      },
    ],
  },
}
