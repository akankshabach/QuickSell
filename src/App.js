import React, { useEffect } from 'react';
import './App.css';
import TopNav from './Components/TopNav/TopNav';
// import Card from './components/Card/Card';
import DashView from './Components/DashBoard/DashView';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllData } from './Actions/DataAction';

import Loading from './Components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  // const { allTickets } = useSelector((state) => state.DataReducer);
  const { allTickets } = useSelector((state) => state.DataReducer.allTickets);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div style={{ paddingTop: '10px' }}>
      <TopNav />
      <hr style={{ marginTop: '10px' }} />
      <DashView />
    </div>
  ) : (
    <Loading />
  );
};

export default App;
// import React, { useEffect } from 'react';
// import './App.css';
// import TopNav from './Components/TopNav/TopNav';
// import DashView from './Components/DashBoard/DashView';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllData } from './Actions/DataAction';
// import Loading from './Components/Loading/Loading';

// const App = () => {
//   const dispatch = useDispatch();
//   const { allTickets } = useSelector((state) => state.DataReducer);

//   useEffect(() => {
//     dispatch(fetchAllData());
//   }, [dispatch]);

//   return allTickets ? (
//     <div style={{ paddingTop: '10px' }}>
//       <TopNav />
//       <hr style={{ marginTop: '10px' }} />
//       <DashView />
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default App;
