import Image from 'next/image'
import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import ImagePreview from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={ImagePreview}
          height={400}
          quality={100}
          priority
          alt="calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
