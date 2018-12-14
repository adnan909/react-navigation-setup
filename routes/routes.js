import { createStackNavigator, createAppContainer } from "react-navigation";
import Posts from '../components/posts'
import Counter from '../components/counter'
const AppNavigator = createStackNavigator(
    {
        Counter: Counter,
        Posts: Posts
    },
    {
        initialRouteName: 'Counter'
    }
);
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer