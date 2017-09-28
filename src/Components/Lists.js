import React from 'react';

var ListItems = React.createClass({
   render: function() {
     return (

       <div className="container">
         {this.props.lists.map(function(name, index){

           return <div className="col-lg-4" key={ index }>

            <div>
              <h5><a href={name.urls[0].url} target="_blank">{name.name}</a></h5>
              <img className = "img-responsive" src={name.thumbnail.path + "/portrait_uncanny.jpg"} />
            </div>

            </div>;
         })}
       </div>
     )
   }
 });

 export default ListItems
