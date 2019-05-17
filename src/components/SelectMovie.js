import React from 'react'
import axios from 'axios'
import {Box,SearchField,IconButton,SelectList} from 'gestalt'
import styled from 'styled-components'

const MovieSelect = styled.div`
    :hover{
        background-color:#eee;
    }
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export default class SelectMovie extends React.Component {

    state={
        moviesList:[],
        value:'',
        selectedMovies:{},
        noActor:true
    }




    onEnter = async ()=>{

        if(this.state.value){
            await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=d4c86d3d23078bb5e3ea14ae379a2726&query=${this.state.value}`)
                .then((respnse)=>{
                    console.log(respnse.data)
                    this.setState({
                        moviesList:respnse.data.results,
                        noActor:false
                    })

                })
        } else {
            this.setState({moviesList:[],noActor:true})
        }
    }
    selectMovie = async (e)=>{
        const element = e.target
        const value = element.getAttribute('value')
        this.setState({
            value:'',
            moviesList:[],
            selectedMovies:JSON.parse(value)})
        this.props.setMovie(JSON.parse(value),this.props.which)

    }

    render() {

        const {moviesList,selectedMovies,value} = this.state

        return (
            <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
                <Box flex="grow" paddingX={2}>
                    <form onSubmit={(e)=>this.onEnter(e)}>
                        <SearchField

                            accessibilityLabel="Demo Search Field"
                            id="searchField"
                            onChange={({value} ) => {
                                this.setState({ value })
                                this.onEnter()
                            }}
                            placeholder="Search and explore"
                            value={value}

                        />
                    </form>

                    {moviesList.map(movie=>{
                        if(movie.poster_path){
                            return(
                                <MovieSelect key={movie.id} value={JSON.stringify(movie,null,2)} onClick={(e)=>this.selectMovie(e)}>
                                    <img value={JSON.stringify(movie,null,2)} src={`https://image.tmdb.org/t/p/h100${movie.poster_path}`} alt=""/>
                                    <p value={JSON.stringify(movie,null,2)}>{movie.original_name || movie.original_title}</p>
                                </MovieSelect>
                            )
                        }
                    })}
                    {this.state.noActor && (
                        <div>No movie found</div>
                    )}
                    {selectedMovies && (
                        <MovieSelect key={selectedMovies.id} value={JSON.stringify(selectedMovies,null,2)} onClick={(e)=>this.selectMovie(e)}>
                            <img src={`https://image.tmdb.org/t/p/h100${selectedMovies.poster_path}`} alt=""/>
                            <p>{selectedMovies.original_name || selectedMovies.original_title}</p>
                        </MovieSelect>
                    )}

                </Box>
            </Box>
        );
    }
}
