import SettingsModal from 'flarum/components/SettingsModal';

export default class EveSettingsModal extends SettingsModal {
  className() {
    return 'EveSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('instkffff-auth-eve.admin.eve_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('instkffff-auth-eve.admin.eve_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('instkffff-auth-eve.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('instkffff-auth-eve.admin.eve_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('instkffff-auth-eve.client_secret')}/>
      </div>
    ];
  }
}
