import app from 'flarum/app';

import EveSettingsModal from './components/EveSettingsModal';

app.initializers.add('instkffff-auth-eve', () => {
  app.extensionSettings['instkffff-auth-eve'] = () => app.modal.show(new EveSettingsModal());
});
