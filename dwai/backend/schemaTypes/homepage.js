import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  // This makes it a "singleton" document, so you can only have one
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
        name: 'subtitle',
        title: 'Hero Subtitle',
        type: 'text',
    }),
    defineField({
      name: 'highlight',
      title: 'Hero Highlight (Pink Text)',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
