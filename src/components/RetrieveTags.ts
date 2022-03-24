import React from 'react';
import TagService from '../service/TagService';


const retrieveAllTags = () => {
    TagService.retrieveAllTags()
        .then(
            response => {
                this.setState({
                    tags: response.data
                })
            }
        )
  }

  export default retrieveAllTags