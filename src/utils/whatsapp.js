import { contacts } from '../data/content'

export const whatsappHref =
  contacts.offices
    ?.flatMap((office) => office.phones || [])
    ?.find((phone) => phone.whatsapp && phone.href)?.href || '/#contato'
