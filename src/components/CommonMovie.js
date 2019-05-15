import React from 'react'
import Loader from 'react-loader-spinner'

export default class CommonMovies extends React.Component{


    async componentDidMount(){
        if(this.props.sameMovies.length>1){

        }
    }
    render(){
        return(
            <div>
                <h1>No common Movie</h1>
                {this.props.loadingMovies && (
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                )}
                <button onClick={this.props.startMatching}>Start Matching</button>
            </div>

        )
    }
}
