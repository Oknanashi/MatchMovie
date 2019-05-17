import React from 'react'

import CommonMovies from './CommonMovie'
import FirstActor from './first-actor'
import SecondActor from './second-actor'
import axios from "axios/index";


export default class TwoActors extends React.Component{


    state={
        firstActor:{},
        secondActor:{},
        loadingMovies:false,
        firstActorMovies:[],
        secondActorMovies:[],
        sameMovies:[]
    }


    setActor=async (actor,which)=>{
        if(which=='first'){
            this.setState({
                firstActor:actor
            })
            if(actor.id){
                // console.log(actor.id)
                this.setState({loadingMovies:true})
                await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${actor.id}`)
                    .then(async response=>{
                        // console.log(response)
                        for(let i=1;i<=response.data.total_pages;i++){
                            console.log(`page ${i}`)
                            await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_cast=${actor.id}`)
                                .then(response=>{
                                    // this.setState({
                                    //     firstActorMovies:this.state.firstActorMovies.push(response.data.results)
                                    // })
                                    this.setState({
                                        firstActorMovies:this.state.firstActorMovies.concat(response.data.results)
                                    })
                                    console.log(response.data.results)
                                })
                        }
                    })
                await axios.get(`https://api.themoviedb.org/3/person/${actor.id}/tv_credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
                    .then(response=>{
                        this.setState({
                            firstActorMovies:this.state.firstActorMovies.concat(response.data.cast)
                        })
                    })
            }
        } else if (which=='second'){
            this.setState({
                secondActor:actor
            })
            if(actor.id){
                console.log(actor.id)
                this.setState({loadingMovies:true})
                await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${actor.id}`)
                    .then(async response=>{
                        console.log(response)
                        for(let i=1;i<=response.data.total_pages;i++){
                            console.log(`page ${i}`)
                            await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_cast=${actor.id}`)
                                .then(response=>{
                                    // this.setState({
                                    //     firstActorMovies:this.state.firstActorMovies.push(response.data.results)
                                    // })
                                    this.setState({
                                        secondActorMovies:this.state.secondActorMovies.concat(response.data.results)
                                    })

                                })
                        }
                    })
                await axios.get(`https://api.themoviedb.org/3/person/${actor.id}/tv_credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
                    .then(response=>{
                        this.setState({
                            secondActorMovies:this.state.secondActorMovies.concat(response.data.cast)
                        })
                    })

            }else {
                console.error('no id')
            }
        }

    }

    startMatching= async()=>{
        console.log('start mathcing')
        this.setState({
            sameMovies:[]
        })
        if(this.state.firstActorMovies.length>1 && this.state.secondActorMovies.length>1){
            console.log(`start lopping over ${this.state.firstActorMovies.length}`)
            let actorToIterate = {}
            let actorToLookFor = {}
            console.log(this.state.firstActorMovies)
            console.log(this.state.secondActorMovies)
            if(this.state.firstActorMovies.length>this.state.secondActorMovies.length){
                actorToIterate = this.state.secondActorMovies
                actorToLookFor = this.state.firstActor
            } else{
                actorToIterate = this.state.firstActorMovies
                actorToLookFor = this.state.secondActor
            }
            for(let i=1;i<=actorToIterate.length;i++){
                try{

                    let movieId = actorToIterate[i].id

                    if(actorToIterate[i].original_name){
                        //Looking for TV SHOW
                        console.log(actorToIterate[i].original_name)
                        await axios.get(`https://api.themoviedb.org/3/tv/${movieId}/season/1/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
                            .then(response=>{
                                console.log(response.data.cast)
                                console.log(actorToLookFor.name)
                                for(let y=0;y<=response.data.cast.length;y++){
                                    if(response.data.cast[y].name.includes(actorToLookFor.name)){

                                        // console.log(response.data.cast[y])
                                        // console.log(i)
                                        // console.log(movieId)
                                        // console.log(this.state.sameMovies)

                                        this.setState({
                                            sameMovies:this.state.sameMovies.concat(movieId)
                                        })

                                    }
                                }
                            })
                    }else {
                        //Looking for movie
                        await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726`)
                            .then(response=>{
                                for(let y=0;y<=response.data.cast.length;y++){
                                    if(response.data.cast[y].name.includes(actorToLookFor.name)){
                                        // console.log(response.data.cast[y])
                                        // console.log(i)
                                        // console.log(movieId)
                                        // console.log(this.state.sameMovies)

                                        this.setState({
                                            sameMovies:this.state.sameMovies.concat(movieId)
                                        })

                                    }
                                }
                            })
                    }


                } catch (e) {

                }
            }
            this.setState({
                loadingMovies:false
            })
        }
    }
    render(){
        console.log(this.state.sameMovies)
        return(
            <div className='mainContent'>
                <div>
                    <h1>Select your first actor</h1>
                    <FirstActor setActor={this.setActor}/>
                </div>
                <CommonMovies
                    sameMovies={this.state.sameMovies}
                    startMatching={this.startMatching}
                    loadingMovies={this.state.loadingMovies}/>
                <div>
                    <h1>Select your second Actor</h1>
                    <SecondActor setActor={this.setActor}/>
                </div>
            </div>
        )
    }
}
