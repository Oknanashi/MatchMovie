import React from 'react'
import axios from 'axios'
import {Box,SearchField,IconButton} from 'gestalt'
import 'gestalt/dist/gestalt.css'

export default class SearchFieldExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }



    render() {
        return (
            <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
                <Box flex="grow" paddingX={2}>
                    <SearchField
                        accessibilityLabel="Demo Search Field"
                        id="searchField"
                        onChange={({ value }) => this.setState({ value })}
                        placeholder="Search and explore"
                        value={this.state.value}
                    />
                </Box>
            </Box>
        );
    }
}
