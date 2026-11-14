// Same public lead destination and delivery contract as the existing agimon.io form.
export const LEAD_ENDPOINT = 'https://ntfy.sh/agimon-adoptions-k7r4m2xq';
export const normalize = value => String(value ?? '').normalize('NFKC').replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ').replace(/\s+/g, ' ').trim();

export async function sendLead({ kind = 'demo', name = '', method = 'email', contact = '', needs = '', color = '', language = 'en' }) {
  contact = normalize(contact);
  if (!contact || contact.length > 254 || !['email','whatsapp'].includes(method)) throw new Error('Invalid contact');
  if (method === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) throw new Error('Invalid email');
  if (method === 'whatsapp' && !/^\+[1-9]\d{6,14}$/.test(contact)) throw new Error('Invalid phone');
  const updates = kind === 'updates';
  const message = (updates ? [
    'New Agimon product updates signup', `Email: ${contact}`,
  ] : [
    'New Agimon demo request', `Name or business: ${normalize(name)}`,
    `Contact: ${method} — ${contact}`, 'Skills: Help choosing / custom request',
    `Needs: ${normalize(needs) || 'Not specified'}`, `Employee color: ${normalize(color) || 'Jade'}`,
  ]).concat([`Language: ${normalize(language)}`, `Source: ${location.origin}${location.pathname}`]).join('\n');
  // Keep a text notification, rather than ntfy's large-message attachment path.
  if (new TextEncoder().encode(message).length > 4000) throw new RangeError('Message too long');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(LEAD_ENDPOINT, {
      method: 'POST', headers: { Title: updates ? 'Agimon - Product updates' : 'Agimon - Get started', Tags: 'robot', Priority: '4' },
      body: message, signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer',
    });
    if (!response.ok) throw new Error(`Notification rejected (${response.status})`);
  } finally { clearTimeout(timeout); }
}
