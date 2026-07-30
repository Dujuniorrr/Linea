<script setup>
import { contacts } from '../data/content'

const personTitle = [
  contacts.person?.name,
  contacts.person?.roles?.[0],
].filter(Boolean).join(' — ')
</script>

<template>
  <div class="contact-section">
    <aside v-if="contacts.person" class="person">
      <div class="portrait">
        <img
          :src="contacts.person.photo"
          :alt="personTitle"
          :title="personTitle"
          width="320"
          height="400"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>
      <div class="person-copy">
        <p class="person-name">{{ contacts.person.name }}</p>
        <ul class="person-roles">
          <li v-for="role in contacts.person.roles" :key="role">{{ role }}</li>
        </ul>
      </div>
    </aside>

    <div class="offices">
      <article
        v-for="office in contacts.offices"
        :key="office.title"
        class="office"
      >
        <h3>{{ office.title }}</h3>

        <div class="block">
          <h4>Telefone</h4>
          <ul>
            <li v-for="phone in office.phones" :key="phone.number">
              <a
                :href="phone.href"
                target="_blank"
                rel="noopener noreferrer"
                :title="phone.whatsapp ? `WhatsApp ${phone.number}` : `Ligar para ${phone.number}`"
              >
                {{ phone.number }}
              </a>
              <span v-if="phone.whatsapp" class="tag">WhatsApp</span>
              <span v-if="phone.note" class="note">{{ phone.note }}</span>
            </li>
          </ul>
        </div>

        <div class="block">
          <h4>E-mail</h4>
          <ul>
            <li v-for="email in office.emails" :key="email">
              <a :href="`mailto:${email}`" :title="`Enviar e-mail para ${email}`">
                {{ email }}
              </a>
            </li>
          </ul>
        </div>

        <div v-if="office.hours" class="block">
          <h4>Horário de atendimento</h4>
          <p>{{ office.hours }}</p>
        </div>

        <div class="block">
          <h4>Endereço</h4>
          <address>
            <template v-for="(line, i) in office.address" :key="line">
              {{ line }}<br v-if="i < office.address.length - 1" />
            </template>
          </address>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  display: grid;
  grid-template-columns: minmax(14rem, 18rem) minmax(0, 1fr);
  gap: 1.5rem 1.75rem;
  align-items: start;
  min-width: 0;
}

.person {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 1.15rem;
  padding: 1.5rem 1.35rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(201, 206, 199, 0.7);
  /* border-radius: 1.2rem; */
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(23, 25, 28, 0.04);
  text-align: center;
}

.person::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--garnet-deep), var(--garnet), var(--garnet-soft));
}

.portrait {
  width: 8.5rem;
  height: 8.5rem;
  margin-inline: auto;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(227, 6, 19, 0.18);
  box-shadow: 0 10px 28px rgba(23, 25, 28, 0.08);
  background: var(--paper-2);
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.person-copy {
  text-align: center;
}

.person-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.25;
  margin: 0;
  text-align: center;
}

.person-roles {
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  line-height: 1.4;
}

.person-roles li:first-child {
  color: var(--garnet-deep);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.offices {
  min-width: 0;
}

.office {
  position: relative;
  padding: 1.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(201, 206, 199, 0.7);
  /* border-radius: 1.2rem; */
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(23, 25, 28, 0.04);
}

.office::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--garnet-deep), var(--garnet), var(--garnet-soft));
}

.office::after {
  content: '';
  position: absolute;
  right: 0.85rem;
  bottom: 0.85rem;
  width: 0.7rem;
  height: 0.7rem;
  border-right: 1.5px solid var(--garnet-mist);
  border-bottom: 1.5px solid var(--garnet-mist);
}

.office h3 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin-bottom: 1.25rem;
}

.block + .block {
  margin-top: 1.35rem;
}

.block h4 {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.55rem;
  font-weight: 500;
}

.block p,
.block address {
  text-align: left;
  margin: 0;
  font-style: normal;
}

.block ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
}

.block a {
  font-weight: 600;
  color: var(--ink);
  border-bottom: 1px solid transparent;
}

.block a:hover {
  border-bottom-color: var(--garnet);
  color: var(--garnet);
}

.tag {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.15rem 0.4rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--garnet-deep);
  background: var(--garnet-wash);
  border: 1px solid var(--garnet-mist);
}

.note {
  display: block;
  color: var(--muted);
  font-size: 0.88rem;
}

@media (max-width: 820px) {
  .contact-section {
    grid-template-columns: 1fr;
  }

  .person {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .portrait {
    width: 6.5rem;
    height: 6.5rem;
    margin-inline: auto;
  }

  .person-copy {
    text-align: center;
  }
}

@media (max-width: 520px) {
  .portrait {
    width: 7.25rem;
    height: 7.25rem;
  }
}
</style>
