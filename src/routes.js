import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import List from './pages/List';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            List,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#191920',
                },
                headerTintColor: '#FFF',
            },
        }
    )
);

export default Routes;
