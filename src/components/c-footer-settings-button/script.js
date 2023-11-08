import Enum from '../../scripts/classes/Enum.js';

const settingsButton = document.getElementById('settings');

settingsButton.addEventListener('click', () => {
  $eventBus.publish('open-settings');
});
