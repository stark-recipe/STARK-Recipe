import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { connect } from 'react-redux';
import * as mainActions from '../actions/mainActions'


let favoriteEl;

const mapStateToProps = (store) => ({
  userId: store.auth.userId,
  favoriteFoods: store.main.favoriteFoods
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavoriteFoods: (userId) => {dispatch(mainActions.fetchFavoriteFoods(userId))}
});


class Favorite extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavoriteFoods(this.props.userId);
  }

  render() {
    favoriteEl = this.props.favoriteFoods.map((food) => {
      return <div><p>test123</p><img src={food.img_url} /></div>
    });
    return(
      <div>
        <Collapsible trigger={<FavoriteBoxTrigger />} transitionTime={200}>
          <div>
            {favoriteEl}
          </div>
        </Collapsible>
      </div>
    )
  }
}

const FavoriteBoxTrigger = () => (
  <button className="rightMenuBtn">Favorite</button>
);


export default connect(mapStateToProps,mapDispatchToProps)(Favorite);
