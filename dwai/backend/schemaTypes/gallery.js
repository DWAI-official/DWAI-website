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
            })
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
