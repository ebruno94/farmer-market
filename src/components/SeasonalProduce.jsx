import React from 'react';
import PropTypes from 'prop-types';

function SeasonalProduce(props){
  return(
    <div>
      <style jsx>{`
      .box{
        border: 2px solid black;
        padding: 30px;
        text-align: center;
        height: 200px;
        width: 150px;
        overflow-y: none;
        margin: 25px;
        border-radius: 20px;

      }

      .box:hover{
        overflow-y: auto;
      }

      .box h1{
        text-shadow: 0px 2px 10px black;

      }

      .selections{
        color: white;
      }

      .selections:hover{
        display: block;
        color: black;
      }


    `}</style>

      <div className="container">
        <div className="box">
          <h1>{props.month}</h1>

          <div className="selections">
            <h3>Selection: </h3>
            {props.selection.map((select, index) =>
              <h4 key={index}>{select}</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SeasonalProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default SeasonalProduce;
