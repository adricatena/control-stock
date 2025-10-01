import { CollectionConfig } from 'payload'

export const Pruebas: CollectionConfig = {
  slug: 'prueba',
  labels: {
    singular: 'Prueba',
    plural: 'Pruebas',
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
    },
  ],
}
