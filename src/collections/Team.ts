import { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    admin: ({ req }) => !!req.user && req.user.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'select',
      options: [
        { label: 'Editorial', value: 'editorial' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Design', value: 'design' },
        { label: 'Development', value: 'development' },
        { label: 'Sales', value: 'sales' },
        { label: 'Support', value: 'support' },
      ],
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'specialties',
      type: 'array',
      fields: [
        {
          name: 'specialty',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
