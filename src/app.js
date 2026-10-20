const onxrloaded = () => {
  XR8.XrController.configure({
    disableWorldTracking: true,
    imageTargetData: [require('../image-targets/cubo-qr.json')],
  })
  XR8.addCameraPipelineModule(LandingPage.pipelineModule())
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded, {once: true})

const markerButton = document.getElementById('marker-button')
const markerDialog = document.getElementById('marker-dialog')
markerButton.addEventListener('click', () => markerDialog.showModal())
document.getElementById('close-marker').addEventListener('click', () => markerDialog.close())
window.addEventListener('offline', () => {
  document.getElementById('tracking-status').textContent = 'Sin conexión. Reconecta para cargar la experiencia.'
})
