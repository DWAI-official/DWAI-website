import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Controls newest-to-oldest ordering on the gallery page.',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
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
              description: 'Important for SEO and accessibility.',
              validation: Rule => Rule.required(),
            },
            {
              name: 'publishedAt',
              type: 'datetime',
              title: 'Media date',
              description: 'When this photo was published or taken.',
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
              description: 'When this video was published or recorded.',
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
