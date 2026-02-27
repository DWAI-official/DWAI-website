// File: /app/api/draft/route.js

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '../../lib/client' // Adjust this path to your Sanity client

// Create a client with the preview token for validation
const clientWithToken = client.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function GET(request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    clientWithToken,
    request.url
  )

  if (!isValid) {
    return new Response('Invalid secret for draft mode', { status: 401 })
  }

  draftMode().enable()

  redirect(redirectTo)
}
