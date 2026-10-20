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
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
if (!isMobile) {
  document.getElementById('desktop-launch').hidden = false
  document.querySelector('.hud').hidden = true
}
markerButton.addEventListener('click', () => markerDialog.showModal())
document.getElementById('desktop-marker-button').addEventListener('click', () => markerDialog.showModal())
document.getElementById('close-marker').addEventListener('click', () => markerDialog.close())
window.addEventListener('offline', () => {
  document.getElementById('tracking-status').textContent = 'Sin conexión. Reconecta para cargar la experiencia.'
})
