import React from 'react'

function Dashboard(props) {
    return (
        <div>
             {this.props.task.map((element,index)=>{
                return <h4 key={index}>{element}
                <button className="cancelButton" onClick={()=>{this.props.handleComplete(index)}}>COMPLETE</button>
                <button className="addToInventoryButton"onClick={()=>{this.props.handleDelete(index)}}>REMOVE</button>
                </h4>
              
                })}
        </div>
    )
}

export default Dashboard;