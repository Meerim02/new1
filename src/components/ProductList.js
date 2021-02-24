import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Cart from "./Cart";


class ProductList extends Component {

    state = {
        productList: [
            { id: 35, title: "Asan", description: "It is a good product1",price:120,count:1 },
            { id: 135, title: "Hasan", description: "It is a good product2" ,price:140,count:1 },
            { id: 356, title: "Ali", description: "It is a good product3",price:160,count:1  },
            { id: 329, title: "Asi", description: "It is a good product4",price:180,count:1  }

        ],
        cart: []

    }


    consolTitle = (title) => () => {
        console.log(title);
    }
    addToCart = (id) => () => {

        const exist = this.state.cart.find((item) => item.id === id)

        if (exist === undefined) {
            this.setState((state) => {
                const item = state.productList.find((item) => item.id === id)
                return {
                    cart: [...state.cart, { ...item }]
                }
            })
        }
    }


    render() {
        const totalCart = this.state.cart.reduce((ans,item)=>item.price+ans,0)
        return (
            <div>
                <ul className="row product-list">
                    {this.state.productList.map((item) => (
                        <li key={item.id} className="col-3">
                            <ProductItem
                               item={item}
                                consolTitle={this.consolTitle(item.title)}
                                addToCart={this.addToCart(item.id)}
                            />
                        </li>
                    ))
                    }
                </ul>
                <Cart totalCart={totalCart}  cart={this.state.cart}/>
            </div>
        );
    }
}
console.log();

export default ProductList;