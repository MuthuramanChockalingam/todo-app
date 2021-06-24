import { React } from 'react';
import context from '../../core/context.js';

const ThemeOption = (theme) =>
	<option key={ theme } value={ theme }>
		{theme}
	</option>;

const ThemeSelect = () =>
	<div>
		<label>Theme</label>
		<select
			value={ context.state.theme }
			onChange={ (evt) => context.actions.setTheme(evt.target.value) }
		>
			{ context.config.themes.map(ThemeOption) }
		</select>
	</div>;

export default ThemeSelect;
