import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Estado del marcador',
  stateMachine: ({world}) => {
    const update = (message: string, found = false) => {
      const status = document.getElementById('tracking-status')
      if (status) {
        status.textContent = message
        status.dataset.found = String(found)
      }
    }
    ecs.defineState('scanning').initial()
      .listen(world.events.globalId, ecs.events.REALITY_IMAGE_SCANNING, () => {
        update('Apunta a la tarjeta completa para descubrir el cubo.')
      })
      .listen(world.events.globalId, ecs.events.REALITY_IMAGE_FOUND, (event: any) => {
        if (event.data.name === 'cubo-qr') update('¡Cubo encontrado! Mueve el celular alrededor de la tarjeta.', true)
      })
      .listen(world.events.globalId, ecs.events.REALITY_IMAGE_LOST, (event: any) => {
        if (event.data.name === 'cubo-qr') update('Vuelve a apuntar a la tarjeta para ver el cubo.')
      })
  },
})
