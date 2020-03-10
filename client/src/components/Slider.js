import React, { Component } from 'react';
import pizza1 from "./images/pizza-1.jpg"
import pizza2 from "./images/pizza-2.jpg"
import pizza3 from "./images/pizza-3.jpg"

const color = {
    fontWeight:'bold'
};

class Slider extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src={pizza1} alt="pizza"/>
                        <span class="card-title" style={color}>Non Veg Supreme</span>
                        </div>
                        <div class="card-content">
                        <p>Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers</p>
                        </div>
                    </div>
                    </div>
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src={pizza2} alt="pizza"/>
                        <span class="card-title" style={color}>Chicken Golden Delight</span>
                        </div>
                        <div class="card-content">
                        <p>Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!</p>
                        </div>
                    </div>
                    </div>
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src={pizza3} alt="pizza"/>
                        <span class="card-title" style={color}>Mexican Green Wave</span>
                        </div>
                        <div class="card-content">
                        <p>A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Slider;
