import axios from 'axios'
import React from 'react'

class NewMealButton extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  async getNewMeal() {
    const response = await axios.get(`https://bum-kat-meal.herokuapp.com/new`)
    const newMeal = response.data;
    return newMeal
  }
  


  render() {
    return (
      <button id="" className="button button1" >
      New 
      </button>
    );
  }
}

export default NewMealButton