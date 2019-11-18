import React from 'react'

class DishCardContent extends React.Component {
  constructor(props) {
    super(props);
    this.dishKeysInLanguages = {
      en: {
        ingredients: '~Ingredients~',
        steps: '~Steps~',
        readyTime: '~Ready time~',
        nutrition: '~Nutrition~'
      },
      vi: {
        ingredients: '~Nguyên liệu~',
        steps: '~Các bước~',
        readyTime: '~Thời gian chuẩn bị~',
        nutrition: '~Dinh dưỡng~'
      }
    }
  }

  listify(ingredients) {
    if(ingredients) {
      const ingredientsList = ingredients.map(ingredient => (<li>{ingredient}</li>));
      return ingredientsList
    }
    return 
  }

   render() {
    const lang = this.props.lang;
    const dish = this.props.content[lang];
    const dishKeys = this.dishKeysInLanguages[lang];

    return (
      <div className="dish_card_content">
        <h2>{dish.name}</h2>
        <h3>{dishKeys.ingredients}</h3>
        <ol>
          {this.listify(dish.ingredients)}
        </ol>
        <h3>{dishKeys.steps}</h3>
        <ol> 
          {this.listify(dish.steps)}
        </ol>
        <h3>{dishKeys.readyTime}</h3>
          <p>{`${dish.readyTime}`}</p>
        <h3>{dishKeys.nutrition}</h3>
          <p>{`${dish.nutrition}`}</p>
      </div>
    )
   }
}

export default DishCardContent