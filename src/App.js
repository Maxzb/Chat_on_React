import React, { Component } from 'react';

class Chat extends Component {
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

class AddItem extends Component {
   state = {
       username:'',
       text: ''
   }
      
   handleSubmit(e) {
      e.preventDefault();
      if (this.state.username.length === 0) {
         alert('Введите свое имя!');
         return;
      }
      else if (this.state.text.length === 0) {
         alert('Введите сообщение!');
         return;
      }
      const newItem = {
         username: this.state.username,
         text: this.state.text,
         date: this.state.date = new Date().toLocaleString()
      };
      console.log(newItem);
      this.setState(() => ({
         items: this.props.addItem(this.state),
         username: '',
         text: ''
      }));
   }

   render() {
      return (
          
         <form  className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="message-wrap">
               <label htmlFor="new-author">Ваше имя</label>
               <input type="text" id="new-author" onChange={e => {this.setState({ username: e.target.value })}} value={this.state.username  || ''} autoComplete="off" autoFocus/>

               <label htmlFor="new-message">Введите сообщение!</label>
               <input type="text" id="new-message" onChange={e => {this.setState({ text: e.target.value })}} value={this.state.text  || ''} autoComplete="off" />
               
               <button className="button">Отправить</button>
            </div>
         </form>
      );
   }
}
export default Chat;








/* --------------------------------------------------------------------- */
/* import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props); 

     this.state = {
       items: []
     };

     this.addItem = this.addItem.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentDidMount() {
      const items = localStorage.getItem('items');
      if (items) this.setState({ items: JSON.parse(items) });
   }


   

   addItem (newItem) {
      let items = [...this.state.items, newItem];
      this.setState({
         items:items
      });
      localStorage.setItem('items', JSON.stringify(items));
    }



   deleteComment(key){
      const { items } = this.state;
      items.splice(key, 1);
      this.setState({
          items
      })
    }



      

  handleSubmit(e) {
   e.preventDefault();
   if (this.state.username.length === 0) {
      alert('Введите свое имя!');
      return;
   }
   else if (this.state.text.length === 0) {
      alert('Введите сообщение!');
      return;
   }
   const date = new Date().toLocaleString();
   const newItem = {
      username: this.state.username,
      text: this.state.text,
      date: date
   };
   this.setState(state => ({
      items: state.items.concat(newItem),
      username: '',
      text: ''
   }));
   localStorage.setItem('items', JSON.stringify(this.state.items));
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

           <form className="form" >
              <div className="message-wrap">
                 <label htmlFor="new-author">Ваше имя</label>
                 <input
                    type="text"
                    id="new-author"
                    onChange={e => {this.setState({ username: e.target.value })}}
                    value={this.state.username  || ''}
                 />

                 <label htmlFor="new-message">Введите сообщение!</label>
                 <input
                    type="text"
                    id="new-message"
                    onChange={e => {this.setState({ text: e.target.value })}}
                    value={this.state.text  || ''}
                 />
                 <button className="button" onClick={this.handleSubmit} addItem={this.addItem}>Отправить</button>
              </div>
           </form>
        </div>
     );
  } 
}

export default Chat; */













/* ------------------------------------------------------------------------------------------------------------------------------------------ */
/* import React, { Component } from 'react';


class items extends Component {
    state = {
        items:[
          {
            Item:'Learn web development'
          },
          {
            Item:'Learn mobile app development'
          }
        ]
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

      render() {
        return (
          <div className="items">
            <AddTas addItem={this.addItem}/>
            <Tas items={this.state.items}/>
          </div>
         );
      }
}

class AddTas extends Component {
   state = {
       Item:''
   }

   handleChange = (e) => {
        this.setState({Item:e.target.value});
   }

   handleSubmit = (e) => {
       e.preventDefault();

       if(this.state.Item!=='') {
           this.props.addItem(this.state);
       }

       this.setState({
           Item:''
       });
   }

   render() {
       return (
           <form onSubmit={this.handleSubmit}>
               <input type="text" id="Item" placeholder="What should I do?" onChange={this.handleChange} value={this.state.Item} autoFocus/>
           </form>
       );
   }
}

const Tas = ({items}) => {
   let Item = items.map(Item => {
       return (
           <li key={Item.Item}><input type="checkbox"/>{Item.Item}</li>
       )
   })

   return (
       <ul>
           {Item}
       </ul>
   )
}

export default items; */