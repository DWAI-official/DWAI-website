import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageGallery',
  title: 'Homepage Gallery Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'DWAI Gallery',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'text',
      initialValue: 'Stories of empowerment, advocacy, and digital inclusion.',
    }),
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Describe the image for people using screen readers.',
              validation: Rule => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'publishedAt',
              type: 'datetime',
              title: 'Media date',
              description: 'Controls newest-to-oldest ordering on the homepage.',
              initialValue: () => new Date().toISOString(),
            },
          ],
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'YouTube URL',
              validation: Rule => Rule.uri({scheme: ['http', 'https']})
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }),
            defineField({
              name: 'publishedAt',
              type: 'datetime',
              title: 'Media date',
              description: 'Controls newest-to-oldest ordering on the homepage.',
              initialValue: () => new Date().toISOString(),
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              subtitle: 'url'
            }
          }
        }
      ],
    }),
  ],
})
