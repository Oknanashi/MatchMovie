import React from 'react'
import axios from 'axios'
import {Box,SearchField,IconButton,SelectList} from 'gestalt'
import styled from 'styled-components'

const ActorSelect = styled.div`
    :hover{
        background-color:#eee;
    }
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export default class FirstActor extends React.Component {

    state={
        actorsList:[],
        value:'',
        selectedActor:{},
        noActor:true
    }




    onEnter = async ()=>{

        if(this.state.value){
            await axios.get(`https://api.themoviedb.org/3/search/person?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&query=${this.state.value}&page=1&include_adult=false`)
                .then((respnse)=>{
                    this.setState({
                        actorsList:respnse.data.results,
                        noActor:false
                    })

                })
        } else {
            this.setState({actorsList:[],noActor:true})
        }
    }
    selectActor = async (e)=>{
        const element = e.target
        const value = element.getAttribute('value')
        this.setState({
            value:'',
            actorsList:[],
        selectedActor:JSON.parse(value)})
        this.props.setActor(JSON.parse(value),'first')

    }

    render() {

        const {actorsList,selectedActor,value} = this.state
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

                    {actorsList.map(actor=>{
                        if(actor.profile_path){
                            return(
                                <ActorSelect key={actor.id} value={JSON.stringify(actor,null,2)} onClick={(e)=>this.selectActor(e)}>
                                    <img value={JSON.stringify(actor,null,2)} src={`https://image.tmdb.org/t/p/h100${actor.profile_path}`} alt=""/>
                                    <p value={JSON.stringify(actor,null,2)}>{actor.name}</p>
                                </ActorSelect>
                            )
                        }
                    })}
                    {this.state.noActor && (
                        <div>No actor found</div>
                    )}
                    {selectedActor && (
                        <ActorSelect key={selectedActor.id} value={JSON.stringify(selectedActor,null,2)} onClick={(e)=>this.selectActor(e)}>
                            <img src={`https://image.tmdb.org/t/p/h100${selectedActor.profile_path}`} alt=""/>
                            <p>{selectedActor.name}</p>
                        </ActorSelect>
                    )}

                </Box>
            </Box>
        );
    }
}
