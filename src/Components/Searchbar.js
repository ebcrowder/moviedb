import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Button from './Button';

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Input = styled.input`
  padding: 0rem;
  font-size: 1rem;
  color: #222;
`;

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <Fragment>
        <SearchWrapper>
          <Input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <Button text="Search" />
        </SearchWrapper>
      </Fragment>
    );
  }
}
