import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('instkffff-auth-eve', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('eveonline',
      <LogInButton
        className="Button LogInButton--eve"
        icon="fab fa-github"
        path="/auth/eve">
        {'EveOnline Login'}
      </LogInButton>
    );
  });
});
