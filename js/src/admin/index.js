import app from 'flarum/app';

import EveSettingsModal from './components/EveSettingsModal';

app.initializers.add('flarum-auth-eve', () => {
  app.extensionSettings['flarum-auth-eve'] = () => app.modal.show(new EveSettingsModal());
});
