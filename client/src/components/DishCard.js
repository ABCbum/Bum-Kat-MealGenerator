import React from 'react'
import axios from 'axios'
import './css/DishCard.css'

class DishCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async getNewDish() {
    const response = await axios.get(`https://bum-kat-meal.herokuapp.com/new/${this.props.type}`)
    const newDish = response.data;
    return newDish
  }

  async setNewDish() {
    const newDish = await this.getNewDish();
    this.setState(newDish);
  }

  listify(ingredients) {
    if(ingredients) {
      if(!ingredients[ingredients.length - 1]) ingredients.pop();
      const ingredientsList = ingredients
                            .map(ingredient => (<li>{ingredient}</li>));
      return ingredientsList
    }
    return 
  }

  // TODO: Add conditional rendering
  render() {
    let on = Boolean(this.state.name);
    return (
      <div className="DishCard" type={`${this.props.type}_dish_card`}>
        <div>
          <h2>{this.state.name}</h2>
          <h3>{on ? '~Ingredients~' : null}</h3>
          <ol>
            {this.listify(this.state.ingredients)}
          </ol>
          <h3>{on ? '~Steps~' : null}</h3>
          <ol> 
            {this.listify(this.state.steps)}
          </ol>
          <h3>{on ? '~Ready time~' : null}</h3><p>{on ? `${this.state.readyTime}` : null}</p>
          <h3>{on ? '~Nutrition~:' : null}</h3><p>{on ? `${this.state.nutrition}` : null}</p>
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