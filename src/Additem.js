import React from 'react';

class AddItem extends React.Component {
   state = {
       username:'',
       text: ''
   }
      
   handleSubmit(e) {
      e.preventDefault();
      if (this.state.username.trim() === '') {
         alert('Введите свое имя!');
         return;
      }
      else if (this.state.text.trim() === '') {
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
export default AddItem;