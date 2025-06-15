import { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req, data }) => {
      return req.user?.role === 'admin' || req.user?.id === data.author
    },
    delete: ({ req, data }) => {
      return req.user?.role === 'admin' || req.user?.id === data.author
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
      name: 'publishedAt',
      type: 'date',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
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
