

class CardDetail extends Component {
    //
    render() {
        <div>
            {this.props.card}
        </div>
    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        card: state.selectCard
    };
}