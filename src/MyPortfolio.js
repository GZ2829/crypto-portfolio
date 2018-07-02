import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCoin } from './redux'
import Navbar from './Navbar'
import { calcTotal } from './redux'
import MapPort from './MapPort'


class MyPortfolio extends Component {
    render() {
        const port = this.props.data && this.props.data.filter(coin => {
            for(var i = 0; i < this.props.savedCoins.length; i++) {
                if(coin.id === this.props.savedCoins[i].id) {
                    return true
                }
            }
        }).map(holder => {
            return (
                <MapPort holder={holder} key={holder.id} />
            )
        })
        return (
            <div className='pickerticker'>
                <Navbar />
                <div className='port'>
                    {port}
                    {port < 1 ? <h1 style={{'gridColumn': '1/-1', 'color': 'white', 'justifySelf': 'center', 'alignSelf': 'center', 'height': '100vh', 'paddingTop': '20%'}}>Please add something to your portfolio...</h1> : null}
                </div>
            </div>
        )
    }
}



export default connect(state => state, { removeCoin, calcTotal })(MyPortfolio);