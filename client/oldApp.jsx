// import React, { Component } from "react";

// // import Search from "./Search.jsx";
// // import BoxArea from "./BoxArea.jsx";
// // import RightMenu from "./RightMenu.jsx";
// import AuthPage from "client/containers/MainContainer.jsx";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   searchStr: "",
//     //   label: [],
//     //   image: [],
//     //   source: [],
//     //   url: [],
//     //   shareAs: [],
//     //   yield: [],
//     //   ingredientLines: [],
//     //   calories: [],
//     //   fats: [],
//     //   carbs: [],
//     //   protein: [],
//     //   favs: [],
//     //   cart: [],
//     //   currCard: [],
//     //   hasBeenClicked: false
//     // };
//     // this.searchStrMethod = this.searchStrMethod.bind(this);
//     // this.onChangeSearchStr = this.onChangeSearchStr.bind(this);
//     // this.changePage = this.changePage.bind(this);
//   }

//   // searchStrMethod(e) {
//   //   console.log("Search method is working");
//   //   let searchStr = this.state.searchStr;
//   //   fetch("http://localhost:3000/search", {
//   //     method: "post",
//   //     headers: {
//   //       "Accept": "application/json",
//   //       "Content-Type": "application/json"
//   //     },
//   //     body: JSON.stringify({
//   //       search: searchStr
//   //     })
//   //   }).then(res => res.json())
//   //     .then(res => {
//   //       const tempState = this.state;
//   //       console.log("i'm HEREEEEEE", tempState);
//   //       for (let i = 0; i < 16; i += 1) {
//   //         tempState.label.push(res[i].image);
//   //         tempState.source.push(res[i].source);
//   //         tempState.url.push(res[i].url);
//   //         tempState.shareAs.push(res[i].saveAs);
//   //         tempState.yield.push(res[i].yield);
//   //         tempState.ingredientLines.push(res[i].ingredientLines);
//   //         tempState.calories.push(res[i].calories);
//   //         tempState.fats.push(res[i].fats);
//   //         tempState.carbs.push(res[i].carbs);
//   //         tempState.protein.push(res[i].protein);
//   //       }
//   //       this.setState({ tempState });
//   //       console.log("i'm HEREEEEEE", this.state);
//   //       return;
//   //     });
//   // }

//   // onChangeSearchStr(e) {
//   //   this.setState({
//   //     searchStr: e.target.value
//   //   });
//   // }

//   // changePage(id) {
//   //   this.setState({
//   //     hasBeenClicked: true,
//   //     index: id
//   //   })
//   // }

//   render() {
//     return (
//       <div>
//         <div>
//           <AuthPage />
//           {/* <Search
//             searchStrMethod={this.searchStrMethod}
//             onChangeSearchStr={this.onChangeSearchStr}
//           />
//         </div>
//         <div id="mainContainer">
//           {this.state.label.length >= 1 ? (
//             <div className="boxArea">
//               <BoxArea changePage={this.changePage} className="recipeCards" state={this.state} changePage={this.changePage} />
//               <RightMenu className="" onCardClick={this.onCardClick} />
//             </div>
//           ) : (
//               <div>
//                 <span id='welcome'>Welcome to the Stark Recipes!</span>
//                 <RightMenu className="" onCardClick={this.onCardClick} />
//               </div>
//             )} */}

//         </div>
//       </div>
//     );
//   }
// }

// export default App;