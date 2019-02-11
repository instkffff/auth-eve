import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('flarum-auth-eve', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('eve',
      <LogInButton
        className="Button LogInButton--eve"
        icon="fab fa-github"
        path="/auth/eve">
        {app.translator.trans('flarum-auth-eve.forum.log_in.with_eve_button')}
      </LogInButton>
    );
  });
});
