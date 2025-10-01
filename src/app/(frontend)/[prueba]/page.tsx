import config from '@/payload.config'
import { getPayload } from 'payload'

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const pruebas = await payload.find({
    collection: 'prueba',
  })

  return pruebas.docs.map((prueba) => ({
    prueba: prueba.id,
  }))
}

export default async function PruebaPage() {
  const payload = await getPayload({ config })

  const pruebas = await payload.find({
    collection: 'prueba',
  })

  return (
    <div>
      <h1>Prueba Page</h1>
      <ul>
        {pruebas.docs.map((prueba) => (
          <li key={prueba.id}>{prueba.nombre}</li>
        ))}
      </ul>
    </div>
  )
}
