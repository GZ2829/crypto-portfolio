import React, { Component } from "react"
import { connect } from 'react-redux'
import { calcTotal, removeCoin } from './redux'



class MapPort extends Component {
    constructor() {
        super()

        this.state = {
            num1: Number,
            num2: Number
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit1 = this.handleSubmit1.bind(this)
    }

    componentDidMount() {
        this.props.calcTotal(this.props.totalNum[this.props.holder.id].num1, this.props.totalNum[this.props.holder.id].num2, this.props.holder)
    }

    handleSubmit(coin) {
        this.props.removeCoin(coin)
    }

    handleSubmit1(num1, num2, hold) {
        return (
            this.props.calcTotal(num1, num2, hold)
        )
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                [name]: value
            }
        })
    }

    render() {
        const { holder } = this.props
        return (
            <div className='ticker2' key={holder.id} onChange={this.handleChange}>
                <h1 className='head'>{holder.name}</h1>
                <h2 className='tick'>Ticker: {holder.symbol}</h2>
                <h2 className='rank'>Rank: {holder.rank}</h2>
                <p className='total'>Total Supply: {holder.total_supply.toLocaleString()}</p>
                <p className='max'>Max Supply: {holder.max_supply}</p>
                <p className='price'>Price in USD: {holder.quotes.USD.price}</p>
                <p className='v24'>24hr Volume: {holder.quotes.USD.volume_24h.toLocaleString()}</p>
                <p className='market'>Market Cap: {holder.quotes.USD.market_cap.toLocaleString()}</p>
                <p className='hr1' style={{ color: holder.quotes.USD.percent_change_1h >= 0.00 ? 'rgb(60, 255, 76)' : 'rgb(255, 85, 85)' }}>1hr % change: {holder.quotes.USD.percent_change_1h}</p>
                <p className='change24' style={{ color: holder.quotes.USD.percent_change_24h >= 0.00 ? 'rgb(60, 255, 76)' : 'rgb(255, 85, 85)' }}>24hr % change: {holder.quotes.USD.percent_change_24h}</p>
                <p className='change7' style={{ color: holder.quotes.USD.percent_change_7d >= 0.00 ? 'rgb(60, 255, 76)' : 'rgb(255, 85, 85)' }}>7 day % change: {holder.quotes.USD.percent_change_7d}</p>
                <input className='num1' type='number' name='num1' onChange={this.handleChange} placeholder="Amount Of Coins" value={this.state.num1} />
                <input className='num2' type='number' name='num2' onChange={this.handleChange} placeholder='Price?' value={this.state.num2} />
                <button className='trut' onClick={() => this.handleSubmit1(this.state.num1, this.state.num2, holder)}>Calculate</button>
                <p style={{ color: this.props.totalNum[this.props.holder.id].value > 0.00 ? 'rgb(60, 255, 76)' : 'rgb(253, 0, 0)' }} className='toats'>Current Earnings: ${Math.floor(this.props.totalNum[this.props.holder.id].value)}</p>
                <button className='butt' onClick={(e) => this.handleSubmit(holder)}>Remove Coin</button>
            </div>
        )
    }

}


export default connect(state => state, { removeCoin, calcTotal })(MapPort);