import React from 'react'

import CommonMovies from './CommonMovie'
import firstMovie from './first-actor'
import secondMovie from './second-actor'

import SelectMovie from './SelectMovie'
import axios from "axios/index";

export default class TwoMovies extends React.Component{


    state={
        firstMovie:{},
        secondMovie:{},
        loadingMovies:false,
        firstMovieActors:[],
        secondMovieActors:[],
        sameStuff:[]
    }


    setMovie=async (movie,which)=>{
        console.log(movie)
        if(which=='first'){
            this.setState({
                firstMovie:movie
            })

            if(movie.id){
                // console.log(actor.id)
                //looking for movie credits
                if(movie.original_title){
                    this.setState({loadingMovies:true})
                    await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726`)
                        .then(response=>{
                            console.log(response.data.cast)
                            this.setState({
                                firstMovieActors:response.data.cast
                            })
                        })
                } else {

                    //looking for tv credits
                    await axios.get(`https://api.themoviedb.org/3/tv/${movie.id}/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
                        .then(response=>{
                            console.log(response.data.cast)
                            this.setState({
                                firstMovieActors:response.data.cast
                            })
                        })
                }
            }
        } else if (which=='second'){
            this.setState({
                secondMovie:movie
            })

            if(movie.id){
                // console.log(actor.id)
                //looking for movie credits
                if(movie.original_title){
                    this.setState({loadingMovies:true})
                    await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726`)
                        .then(response=>{
                            console.log(response.data.cast)
                            this.setState({
                                secondMovieActors:response.data.cast
                            })
                        })
                } else {

                    //looking for tv credits
                    await axios.get(`https://api.themoviedb.org/3/tv/${movie.id}/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
                        .then(response=>{
                            console.log(response.data.cast)
                            this.setState({
                                secondMovieActors:response.data.cast
                            })
                        })
                }
            }
        }

    }
    startMatching= async()=>{
        this.setState({
            sameStuff:[]
        })
        let movieToIterateOver = []
        let otherOne = []
        console.log(this.state.firstMovieActors.length,this.state.secondMovieActors.length)
        if(this.state.firstMovieActors.length>1 && this.state.secondMovieActors.length>1){
            if(this.state.firstMovieActors.length>this.state.secondMovieActors.length){
                movieToIterateOver = this.state.secondMovieActors
                otherOne = this.state.firstMovieActors
            } else{
                movieToIterateOver = this.state.firstMovieActors
                otherOne = this.state.secondMovieActors
            }
            for(let i=0;i<=movieToIterateOver.length;i++){

                try{
                    for(let y =0;y<=otherOne.length;y++){
                        if(movieToIterateOver[i].name==otherOne[y].name){
                            console.log(`Match with ${JSON.stringify(movieToIterateOver[i])}`)
                            this.setState({
                                sameStuff:this.state.sameStuff.concat(movieToIterateOver)
                            })
                        }
                    }
                } catch (e) {
                    console.error(e)
                }
            }

        }
    }
    render(){
        return(
            <div className='mainContent'>
                <div>
                    <h1>Select your first movie</h1>
                    <SelectMovie which={'first'} setMovie={this.setMovie}/>
                </div>
                <CommonMovies
                    sameStuff={this.state.sameStuff}
                    media_type={'movie'}
                    startMatching={this.startMatching}
                    loadingActors={this.state.loadingActors}/>
                <div>
                    <h1>Select your second movie</h1>
                    <SelectMovie which={'second'} setMovie={this.setMovie}/>
                </div>
            </div>
        )
    }
}
