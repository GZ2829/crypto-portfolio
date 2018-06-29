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
            <div>
                <Navbar />
                <div className='port'>
                    {port}
                </div>
            </div>
        )
    }
}



export default connect(state => state, { removeCoin, calcTotal })(MyPortfolio);