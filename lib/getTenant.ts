import { headers } from 'next/headers'

export async function getTenant() {
  const headersList = await headers()
  return headersList.get('x-tenant')
}
