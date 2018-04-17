import React from 'react';
import Header from './Header';
import ScheduleList from './ScheduleList';
import SeasonalProduceList from './SeasonalProduceList';
import {Switch, Route} from 'react-router-dom';


function App(){
  return (
    <div>
      <style jsx global>{`
          html{
            padding: 50px;
            margin: 100px;
            font-family: Monospace;
            border: 5px solid black;
          }

          .title{
            background-color: royalblue;
            text-align: center;
            text-shadow: 0px 0px 15px white;
            box-shadow: 0px 0px 25px black;
            border: 2px dotted white;
            height: 75px;
            width: 400px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 50px;
            padding-bottom: 10px;
          }


      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={ScheduleList}/>
        <Route path='/produce-list' component={SeasonalProduceList}/>
      </Switch>
    </div>
  );
}

export default App;
