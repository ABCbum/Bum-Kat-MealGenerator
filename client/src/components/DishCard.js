import React from 'react'
import axios from 'axios'
import './css/DishCard.css'

class DishCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async getNewDish() {
    const response = await axios.get(`http://localhost:5000/new/${this.props.type}`)
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
    // if(!this.state.name) return null;
    return (
      <div className="DishCard" type={`${this.props.type}_dish_card`}>
        <div>
          <h2>{this.state.name}</h2>
          <h3>{this.state.ingredients ? 'Ingredients' : null}</h3>
          <ol>
            {this.listify(this.state.ingredients)}
          </ol>
          <h3>{this.state.steps ? 'Steps' : null}</h3>
          <ol> 
            {this.listify(this.state.steps)}
          </ol>
          <p>{this.state.readyTime ? `Ready in : ${this.state.readyTime}` : null}</p>
          <p>{this.state.nutrition ? `Nutrition: ${this.state.nutrition}` : null}</p>
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