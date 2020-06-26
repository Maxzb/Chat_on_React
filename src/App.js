import React from 'react';
import AddItem from './Additem';

class Chat extends React.Component {
   constructor(props) {
      super(props); 
      this.state = {
         items:[]
      };
   }

   componentDidMount() {
      const items = localStorage.getItem("items");
      if (items) this.setState({ items: JSON.parse(items) });
   }

   addItem = (newItem) => {
      let items = [...this.state.items, newItem];
      this.setState({
         items:items
      });
      localStorage.setItem("items", JSON.stringify(items));
   }

   deleteComment(key){
      const { items } = this.state;
      items.splice(key, 1);
      localStorage.setItem('items', JSON.stringify(this.state.items));
      this.setState({
            items
      })
      }

   render() {
      return (
      <div className="wrapper">
         <h1 className="h1">Чат на <span>React</span></h1>
         
         <ul className="chatlist" id="chatlist">
            {this.state.items.map((item, i) => {
               return(
                  <li key={i} >
                     <div className="data-chat">
                        <span className="username">{item.username}</span>
                        <span className="date">{item.date}</span>
                        <span className="delete" onClick={ev => {this.deleteComment(i)}} >Удалить</span>
                     </div>
                     {item.text}
                  </li>                    
            )})}
         </ul>   
         <div className="items">
            <AddItem addItem={this.addItem} />
         </div>
      </div>
      );
   }
}
export default Chat;