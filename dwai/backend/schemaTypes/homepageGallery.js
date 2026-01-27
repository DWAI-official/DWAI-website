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
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }
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