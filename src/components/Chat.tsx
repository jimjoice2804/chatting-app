'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';

export default function Chat() {

  const client =  new Ably.Realtime.Promise({ authUrl: '/api' })

  return (
    <AblyProvider client={ client }>
    </AblyProvider>
  )
}