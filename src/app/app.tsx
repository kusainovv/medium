import React from 'react';
import {NotificationsProvider} from './core/components/Notify';
import {MainRouting} from './features/routes';

export const App = () => <NotificationsProvider maxNotifications={4} delay={50_000}>
	<MainRouting />
</NotificationsProvider>;
