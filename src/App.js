import React, {Component} from "react";
import "./App.css";

class App extends Component {
      constructor(props) {
        super(props)
        // code here
        // This binding is necessary to make `this` work in the callback
        this.state = { 
          songInput:'',
          songList : ["Despacito", "Summer Of 69", "Hotel California", "Single Ladies", "If I were a boy", "Run the World", "Waka Waka"]
        };
        this.handleClick = this.handleClick.bind(this);
        this.filterSongs = this.filterSongs.bind(this);
      }


      filterSongs(song) {
        this.setState({
          songInput: song.target.value.toUpperCase()
        })
      }

      /* first try watching videos, then if needed google 
      how to setState and filter array */

      handleClick(event) {
        event.preventDefault();
      }

      render() {

        const upperCaseList = this.state.songList.map(string => string.toUpperCase());

        const songInput = upperCaseList.filter(song => {
          return song.includes(this.state.songInput)
        });

        return(
          <div data-testid="app" className="container">
            <h1> SEARCH SONG </h1>
            <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.filterSongs} placeholder="Search"/>
            </form>
            {songInput.map( (song) => <p>{song}</p>)}
          </div>

        )
      }
}
export default App
