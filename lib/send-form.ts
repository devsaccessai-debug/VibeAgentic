// Form submissions are delivered by email through FormSubmit (https://formsubmit.co).
// The first submission sends an activation email to this inbox — click "Activate" once
// and all later submissions are delivered normally.
export const CONTACT_EMAIL = 'vibeagenticai@gmail.com'

const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export async function sendForm(subject: string, fields: Record<string, string>) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _replyto: fields.email,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok || data?.success === 'false' || data?.success === false) {
    throw new Error(data?.message || 'Failed to send message')
  }
}
