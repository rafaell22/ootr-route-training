$eventBus.subscribe('show-settings', showSettings());

function showSettings() {
  const settingsContainer = document.getElementById('settings-container');
  settingsContainer.classList.remove('hidden');
}
