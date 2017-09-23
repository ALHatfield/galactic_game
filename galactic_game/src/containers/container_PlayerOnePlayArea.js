import React, {Component} from 'react';
import { connect } from 'react-redux'; // This is the glue that connects react to redux
import { bindActionCreators } from 'redux'; // allows our action to flow through our reducers


class PlayerOnePlayArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
        cards: []
        }
    }    

    render() {

        if (!this.props.card) {
            return (
                <ul 
                style={{'borderStyle': "solid","color":"purple", "fontSize":"20px",padding: "0px 0px 800px 0px"}} 
                className="play-area col-sm-3"
                onClick={() => console.log(this)}> 
                Play Area
                
                </ul>
            )
        }

        var cardsInPlay = [];
        var cardTarget = this.props.card.cardInformation;

        function renderPlayCards() {
            
            for (var i = 0; i < cardsInPlay.length; i++) {
                return (
                    <li>
                        <img width="50%" src={cardsInPlay[i].image}/>
                    </li>
                );
            };
        }

        // renderList(cardsInPlay) {
        //     for (i=0; i < cardsInPlay.length; i++) {
        //         return (
        //             <li>
        //                 <img width="50%" scr={cardsInPlay[i].image}/>
        //             </li>
        //         );
        //     }
        // };


        return(
            <ul 
                style={{'borderStyle': "solid","color":"purple", "fontSize":"20px",padding: "0px 0px 800px 0px"}} 
                className="play-area col-sm-3"
                onClick={() => cardsInPlay.push(cardTarget) }
                onMouseLeave={() => console.log(cardsInPlay)}> 
                Play Area

                <ul>
                    {this.renderPlayCards()}
                </ul>
                

                
                
                
                
            </ul>
        )
    }
}

// Takes in the application state (all of it) and what ever we return gets mapped to props
function mapStateToProps(state) {
    // What ever is returned will show up as props inside of CardList
    return {
        card: state.cardInformation
    };
}



// The CONNECT function takes a FUNCTION and a COMPONENT and produces a container.
// The container is component that is aware of the state that is contained by redux.
// All functions maping data to props needs to be plugged into this connect function.
export default connect(mapStateToProps)(PlayerOnePlayArea);