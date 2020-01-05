import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CharacterActions } from "../../store/ducks/characters";

import Card from "../../components/Card";

import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    background: #202329;
    min-height: 100vh;
`

const Button = styled.button`
  padding: 10px;
  background: #202329;
  margin: 15px;
  width: 100px;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;

  &:hover{
    background: #000;
  }
`

const Input = styled.input`
  height: 35px;
  padding: 6px;
  background: "#ccc";
  width: 300px;
  font-size: 22px;
  margin: 20px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid black;
`

class Main extends React.Component {
  state = {
    // id: "",
    name: "",
    status: "",
    gender: "",
    species: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddCharacter = e => {
    e.preventDefault();
    const params = {
      // id: this.state.id,
      name: this.state.name,
      status: this.state.status,
      gender: this.state.gender,
      species: this.state.species,
    };

    this.props.addCharacterRequest(params);
  }

  handleNextPage = () => {
    this.props.showNextPage(this.props.characters.next)
  }

  handlePrevPage = () => {
    this.props.showNextPage(this.props.characters.next)
  }

  render() {
    console.log("this.props.characters ->", this.props.characters)
    return (
      <Fragment>
        <form onSubmit={this.handleAddCharacter}>
          <Input
            type="text"
            placeholder="Name (ex: Rick)"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          {/* <input
            type="number"
            onChange={e => this.setState({ id: e.target.value })}
            value={this.state.id}
            min="1"
            max="493"
          /> */}
          <label htmlFor="status" style={{ fontSize: 22 }}>STATUS: </label>
          <select name="status" id="status" onChange={this.handleChange} style={{ width: 150, height: 50, padding: 10, fontSize: 22, margin: 8 }}>
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead ">Dead </option>
            <option value="unknown">Unknown</option>
          </select>

          <label htmlFor="gender" style={{ fontSize: 22 }}>GENDER: </label>
          <select name="gender" id="gender" onChange={this.handleChange} style={{ width: 150, height: 50, padding: 10, fontSize: 22, margin: 8 }}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female ">Female </option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>

          <label htmlFor="species" style={{ fontSize: 22 }}>SPECIES: </label>
          <select name="species" id="species" onChange={this.handleChange} style={{ width: 150, height: 50, padding: 10, fontSize: 22, margin: 8 }}>
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien ">Alien </option>
            <option value="Humanoid">Humanoid</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Mytholog">Mytholog</option>
            <option value="Animal">Animal</option>
            <option value="Vampire">Vampire</option>
            <option value="Robot">Robot</option>
            <option value="Cronenberg">Cronenberg</option>
            <option value="Disease">Disease</option>
            <option value="Parasite">Parasite</option>
            <option value="unknown">Unknown</option>
          </select>

          <Button type="submit">
            Buscar
          </Button>
          {!!this.props.characters.error && <span style={{ color: "red" }}>{this.props.characters.error}</span>}
        </form>
        <Wrapper>
          {this.props.characters.loading && <span style={{ color: "#FFF" }}>Loading...</span>}
          {this.props.characters.data.map(character => (
            <Card
              key={character.id}
              url={`${character.image}`}
              name={character.name.toUpperCase()}
              id={character.id}
              status={character.status}
              species={character.species}
              type={character.type}
              gender={character.gender}
              origin={character.origin}
              lastLocation={character.location}
            />
          ))}
        </Wrapper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {
            this.props.characters.prev !== "" && <Button onClick={this.handlePrevPage}> Prev </Button>
          }
          {
            this.props.characters.next !== "" && <Button onClick={this.handleNextPage}> Next </Button>
          }
        </div>
      </Fragment>
    )
  }
}

Main.propTypes = {
  addCharacterRequest: PropTypes.func.isRequired,
  characters: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      spicies: PropTypes.string,
      location: PropTypes.string,
      image: PropTypes.string,
    })).isRequired
  })
}

const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => bindActionCreators(CharacterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)
