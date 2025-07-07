import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'parent'],
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
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (Do not touch)',
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
            if (data?.name) return slugify(data.name, { lower: true, strict: true })
            return value
          },
        ],
      },
    },
  ],
}
