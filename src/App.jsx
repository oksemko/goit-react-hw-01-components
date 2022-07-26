import { Profile } from './components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from './data/user.json';
import statisticData from './data/data.json';



export const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title='Upload stats' stats={statisticData}></Statistics>
      <Statistics stats={statisticData}></Statistics>
    </div>
  )
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
