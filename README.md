# cocktailFinder
FoxBox code challenge


## Instructions to run

After checking out repository, open folder in terminal and execute following commands:

### IOS:
- `yarn install`
- `cd ios`
- `pod install`
- `react-native run-ios`

### Android:
- `yarn install`
- `react-native run-android`

## Used libs

- `axios`:
    - Fetching lib;
- `immer`:
    - Provide a simple way to handle state on reducers;
- `prop-types`:
    - Typing lib;
- `react-native-vector-icons`:
    - Provide a lot of icon types;
- `react-navigation`:
    - Lib to configure and navigate through screens;
- `redux / saga`:
    - Handle state and asynchronous tasks;
- `styled-components`:
    - Lib to work with traditional css styles;
- `prettier / eslint`:
    - Code style;

## Working with a huge amount of data

Generally when we need to work with a huge amount of data, we prepare the backend to support pagination. The react-native `Flatlist` provide methods to handle events like on end reached. So when the user scroll to the end of list, another request can be sent to bring more data.
