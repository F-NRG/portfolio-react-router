import { defineField, defineType } from 'sanity';

export const workExperienceType = defineType({
  name: 'workExperience',
  title: 'workExperience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'company' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'appliedTools',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
