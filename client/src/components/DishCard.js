import React from 'react'
import axios from 'axios'
import './css/DishCard.css'
import DishCardContent from './DishCardContent';

class DishCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    };
  }

  async getNewDish() {
    const response = await axios.get(`https://bum-kat-meal.herokuapp.com/new/${this.props.type}`)
    const newDish = response.data;
    return newDish
  }

  async setNewDish() {
    const newDish = await this.getNewDish();
    this.setState({dish: newDish});
  }

  changeLang(lang) {
    if(this.state.lang !== lang) this.setState({lang});
  }

  render() {
    let lang = this.state.lang;
    let hasContent = Boolean(this.state.dish);
    let dish = hasContent ? this.state.dish : null;
    
    return (
      <div className="DishCard" type={`${this.props.type}_dish_card`}>
        {hasContent && 
          <DishCardContent 
            content={dish}
            lang={lang}
          />
        }
      <div>
        {hasContent && <p className="changeLang" onClick={this.changeLang.bind(this, 'vi')}>VI </p>}
        {hasContent && <p className="changeLang" onClick={this.changeLang.bind(this, 'en')}> EN</p>}
      </div>
        <button className="button button1" onClick={this.setNewDish.bind(this)}> 
          Get new {this.props.type}
        </button>
        <br></br>
        ----------------------------
      </div>
    )
  }
}

export default DishCard