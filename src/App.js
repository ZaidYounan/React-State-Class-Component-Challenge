import React, {Component} from "react";

class App extends Component {
      constructor(props){
        super(props)
        // code here
        // This binding is necessary to make `this` work in the callback
        this.state = { 
          songList : ["Despacito", "Summer Of 69", "Hotel California", "Single Ladies", "If I were a boy", "Run the World", "Waka Waka"]
        };
        this.handleClick = this.handleClick.bind(this);
        this.filterSongs = this.filterSongs.bind(this);
      }

      handleClick(){
        // code here
      }

      filterSongs(){
        // code here
      }
      render(){
        return(
          <div data-testid="app" >
            <h1> SEARCH SONG </h1>
            <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.filterSongs} />
                    <input type="submit" value="Filter" />
            </form>
            {this.state.songList.map( person => <p>{person}</p>)}
          </div>

        )
      }
}
export default App
