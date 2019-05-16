import React from 'react'
import Loader from 'react-loader-spinner'
import {Card,Box,Avatar,Text,Link,Button} from 'gestalt'
import axios from 'axios'

class CardExample extends React.Component {
    state={
        movie:{}
    }
    constructor(props) {
        super(props);
        this.state = { hovered: false };
        this.handleMouseEnter = this._handleMouseEnter.bind(this);
        this.handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    async componentDidMount(){
        await axios.get(`https://api.themoviedb.org/3/movie/${this.props.movie}?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
            .then(response=>{
                console.log(response)
                this.setState({
                    movie:response.data
                })
            })
    }
    _handleMouseEnter() {
        this.setState(() => ({ hovered: true }));
    }
    _handleMouseLeave() {
        this.setState(() => ({ hovered: false }));
    }
    render() {
        console.log(this.state.movie)

        if(this.state.movie){
            return (
                <Box maxWidth={236} padding={2} column={12}>
                    <Card
                        image={
                            <Avatar
                                name="James Jones"
                                src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
                            />
                        }
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}>
                        <Text align="center" bold size="xl">
                            <Link href="https://pinterest.com">
                                <Box paddingX={3} paddingY={2}>
                                    {this.state.movie.original_title}
                                </Box>
                            </Link>
                        </Text>
                        <Button
                            accessibilityLabel="Follow James Jones"
                            color="red"
                            text="Look on tmdb"
                        />
                    </Card>
                </Box>
            );
        }
        else{
            return(
                <div>Loading...</div>
            )
        }
    }
}

export default class CommonMovies extends React.Component{



    render(){
        console.log(this.props.sameMovies)
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
                {this.props.sameMovies.map(movie=>(
                    <CardExample movie={movie}> </CardExample>
                ))}
                {this.props.sameMovies.length<1 && (
                    <h1>
                        No common Movies
                    </h1>
                )}
            </div>

        )
    }
}
